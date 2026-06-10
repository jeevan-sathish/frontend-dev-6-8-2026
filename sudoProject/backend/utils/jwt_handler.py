from jose import jwt 
from datetime import datetime,timedelta
from dotenv import load_dotenv
import os

load_dotenv()

secret_key =os.getenv("SECRET_KEY")
algo ="HS256"

def create_access_token(data:dict):
    payload=data.copy()
    expire =datetime.utcnow()+timedelta(days=7)

    payload.update({
        "exp":expire
    })

    token=jwt.encode(
        payload,
        secret_key,
        algorithm=algo
    )

    return token