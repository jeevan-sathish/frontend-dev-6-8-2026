from fastapi import FastAPI ,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
     name:str
     email:str


@app.post('/data')
def greet(user:User):
     if user:
          return {
               "message":f"login succesfull with {user.name} and email {user.email}"
          }
     raise HTTPException(
          status_code=400,
          detail="LogIn Failed"
     )
    