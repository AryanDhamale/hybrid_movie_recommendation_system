# local imports 
from utils.load_image import loadImage

# for sending response 
def movieResponse(frame) : 
    image= loadImage(frame["movie_id"])

    movie = {
        "movie_title" : frame['title'], 
        "movie_id" : int(frame["movie_id"]) , 
        "release_date" : str(frame["release_date"]) , 
        "vote_count" : int(frame["vote_count"]),
        "vote_average" : float(frame["vote_average"]), 
        "poster_path" : image["poster"] if image is not None else "" , 
        "backdrop_path" : image["backdrop"] if image is not None else "",
    }
        
    return movie