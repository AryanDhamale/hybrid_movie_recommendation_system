import os
import pickle
from huggingface_hub import hf_hub_download

# for load_repo 
def loadFile(filename:str) : 
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    model_dir = os.path.join(BASE_DIR, "model")
    filename_path = os.path.join(model_dir, filename)

    try : 
    
        if not os.path.exists(filename_path):
            print(f"Downloading {filename} from Hugging Face...")
        
            repo_id = "AryanDhamale/model"
            
            hf_hub_download(
                repo_id=repo_id,
                filename=filename,
                local_dir=model_dir,
                local_dir_use_symlinks=False
            )

        with open(filename_path,"rb") as file : 
            df=  pickle.load(file)
        return df

    except Exception as error : 
        print(str(error))
        return None 
