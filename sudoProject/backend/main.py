from fastapi import FastAPI ,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from services.user_schema import UserCreate
from pydantic import BaseModel
from database.db import engine
from model.models import Base

from model.models import User

from database.db import SessionLocal

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

    


Base.metadata.create_all(bind=engine)

@app.post('/connection')
def db_connection(user:UserCreate):
    print(user)
    db=SessionLocal()
    user_info =User(
        name=user.name,
        email =user.email
    )
    db.add(user_info)
    db.commit()
    db.refresh(user_info)
    db.close()

    return {
        "message":"user inserted data"
        
    }
