from fastapi import FastAPI ,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database.db import engine
from model.models import Base

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

@app.get('/connection')
def db_connection():
    return {
        "message":"neon db connected succesfully"
    }
    