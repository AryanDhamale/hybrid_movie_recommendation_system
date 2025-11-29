
# movie response
from utils.movie_response import movieResponse



def topMovies(original,count:int=10) : 
    
    indexes =  original['vote_average'].sort_values(ascending=False)[:count].index

    movies_= []

    for idx in indexes :  
        frame= original.iloc[idx]
        movies_.append(movieResponse(frame))
        

    return movies_



def Movies(original,count:int=10) : 
    
    indexes= original.sample(count).index

    movies_= []

    for idx in indexes :  
        frame= original.iloc[idx]
        movies_.append(movieResponse(frame))
        

    return movies_



