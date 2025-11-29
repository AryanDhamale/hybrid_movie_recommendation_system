import os
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry


# ✅ Create retry-safe session (IMPORTANT)
session = requests.Session()
retry = Retry(
    total=3,
    backoff_factor=0.5,
    status_forcelist=[429, 500, 502, 503, 504],
    allowed_methods=["GET"]
)
adapter = HTTPAdapter(max_retries=retry)
session.mount("https://", adapter)


def loadImage(movie_id):
    api_key = os.getenv("API_Read_Access_Token")

    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {api_key}"
    }

    url = f"https://api.themoviedb.org/3/movie/{movie_id}/images"

    try:
        response = session.get(url, headers=headers, timeout=8)

        if response.status_code != 200:
            print("TMDB Failed:", response.status_code)
            return getFallbackImages()

        result = response.json()

        # ✅ Safe extraction
        backdrop_path = result["backdrops"][0]["file_path"] if result.get("backdrops") else None
        poster_path = result["posters"][0]["file_path"] if result.get("posters") else None

        return {
            "backdrop": f"https://image.tmdb.org/t/p/w1280/{backdrop_path}" if backdrop_path else None,
            "poster": f"https://image.tmdb.org/t/p/w500/{poster_path}" if poster_path else None,
        }

    except requests.exceptions.Timeout:
        print("TMDB Timeout")
        return getFallbackImages()

    except requests.exceptions.ConnectionError:
        print("TMDB Connection Reset")
        return getFallbackImages()

    except Exception as e:
        print("TMDB Unknown Error:", str(e))
        return getFallbackImages()


# ✅ Fallback Image (prevents frontend crash)
def getFallbackImages():
    return {
        "backdrop": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
        "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop"
    }

        