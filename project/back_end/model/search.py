
def searchMovies(query:str,movies,count:int=10) : 
    result=  movies[movies["title"].str.lower().str.contains(query.lower(),na=False)]
    
    search_movies= result[["movie_id","title"]].head(count).to_dict(orient="records")

    return {
        "query" : query , 
        "movies" : search_movies
    }

