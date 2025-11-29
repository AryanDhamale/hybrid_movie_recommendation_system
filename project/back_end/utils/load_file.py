import pickle 
import os


# for load_repo 
def loadFile(filename:str,reponame:str) : 
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    filename = os.path.join(BASE_DIR,"model",reponame,filename)

    try : 
    
        if not os.path.exists(filename):
            raise FileNotFoundError(f"❌ File not found: {filename}")

        with open(filename,"rb") as file : 
            df=  pickle.load(file)
        return df

    except Exception as error : 
        print(str(error))
        return None 
