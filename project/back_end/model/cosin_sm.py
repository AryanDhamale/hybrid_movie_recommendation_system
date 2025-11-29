
# local imports
from utils.movie_response import movieResponse


def cosinSm(movie_id:int,count:int,movies,original,cosin_sm) : 


    index=  movies[movies['movie_id'] == movie_id].index[0]
    similar_movies= sorted( list(enumerate(cosin_sm[index])) , reverse=True, key= lambda x : x[1] )[1:count+1]

    movies_= []

    for idx,_ in similar_movies  : 
        frame= original.iloc[idx]
        movies_.append(movieResponse(frame))

    
    return movies_
