from utils.load_image import loadImage

def searchMovies(query:str,movies,count:int=10) : 
    result=  movies[movies["title"].str.lower().str.contains(query.lower(),na=False)]
    
    search_movies= result[["movie_id","title"]].head(count).to_dict(orient="records")

    for movie in search_movies : 
        image= loadImage(movie["movie_id"])
        movie["poster_path"] = image["poster"] if image is not None else ""
        movie["backdrop_path"] = image["backdrop"] if image is not None else ""

    return {
        "query" : query , 
        "movies" : search_movies
    }

