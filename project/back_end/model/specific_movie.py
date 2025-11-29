
#load image 
from utils.load_image import loadImage


def movieMetaData(movie_id,original) : 

    movie=  original[original['movie_id'] == movie_id].iloc[0]

    image= loadImage(movie_id)

    return {
        "movie_id" : int(movie["movie_id"]) , 
        "movie_title" : movie["title"] ,
        "vote_average" : float(movie["vote_average"]) ,
        "overview" : movie["overview"] , 
        "runtime" : float(movie["runtime"]), 
        "release_date" : str(movie["release_date"]) ,
        "homepage"  : movie["homepage"] , 
        "original_language" : movie["original_language"] ,
        "budget" : float(movie["budget"]), 
        "revenue" : float(movie["revenue"]), 
        "genres" : movie["genres"] , 
        "crew" : movie["crew"] , 
        "cast" : movie["cast"] , 
        "keywords" : movie["keywords"] , 
        "status" : movie["status"] , 
        "poster_path" : image["poster"] if image is not None else "" , 
        "backdrop_path" : image["backdrop"] if image is not None else "",
    }