from fastapi import FastAPI , Path, Query 
from fastapi.responses import JSONResponse
from typing import Annotated
from dotenv import load_dotenv

# modules 
from model.get_movies import topMovies , Movies
from model.specific_movie import movieMetaData
from model.cosin_sm import cosinSm
from model.search import searchMovies
from fastapi.middleware.cors import CORSMiddleware
from utils.load_file import loadFile

import sys

# creating app
load_dotenv()  # Load environment variables from .env file 
app= FastAPI()

# cors middleware 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# load dataframe 
original=loadFile("original.pkl","data")
movies=loadFile("movies.pkl","data")
cosin_sm=loadFile("cosin_sm.pkl","cosin_sm")


if original is None or movies is None or cosin_sm is None : 
    sys.exit(1)


# api routing 
@app.get('/')
def root_page() :
    return JSONResponse(status_code=200,content={"msg":"If you've seen this message means everything is ok!"})

# Health route 
@app.get('/health')
def heath() : 
    return JSONResponse(status_code=200,content={
        "status" : True ,
        "model_version" :  "MODEL_VERSION"
    })


# Top movies 
@app.get('/movies')
def handle_top_movies(count :Annotated[int,Query(title="To get the top movies")]= 10 , random:bool = False ) : 
    try : 

        if not random : 
            movies= topMovies(original,count)

        else : 
            movies= Movies(original,count)

        return JSONResponse(status_code=200,content={"movies":movies})
    
    except Exception as error: 
        return JSONResponse(status_code=500,content={"error":str(error)})


# get specific movie data 
@app.get("/movies/{movie_id}") 
def handle_movie(movie_id:Annotated[int,Path(title="To get the top movies")]) : 
    try : 
        movie=  movieMetaData(movie_id,original)
        
        return JSONResponse(status_code=200,content={"movies":movie}) # replace moive - moives because of the front end 

    except Exception as error:
        return JSONResponse(status_code=500,content={"error":str(error)})
    

# get content base recommendation 
@app.get('/movies/{movie_id}/recommend')
def handle_recom_movies(movie_id:Annotated[int,Path(title="To get the top movies")],count : Annotated[int,Query(title="To get the top movies")]=10) : 
    try  : 
        
        recommendated_movies= cosinSm(movie_id,count,movies,original,cosin_sm)
        return JSONResponse(status_code=200,content={"movies":recommendated_movies})

    except Exception as error : 
        return JSONResponse(status_code=500,content={"error":str(error)})


# search options 
@app.get('/search')
def handle_search(query:Annotated[str,Query(title="To get the top movies",min_length=3,max_length=50)],count : Annotated[int,Query(title="To get the top movies")]=10) : 
    try : 
        return JSONResponse(status_code=200,content=searchMovies(query,movies,count))

    except Exception as error : 
        return JSONResponse(status_code=500,content={"error":str(error)})