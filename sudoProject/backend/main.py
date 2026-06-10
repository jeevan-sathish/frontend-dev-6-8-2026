from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from database.db import engine, Base, SessionLocal, Google_client_id
from model.user_model import User
from services.google_schema import GoogleToken

from google.oauth2 import id_token
from google.auth.transport import requests

from utils.jwt_handler import create_access_token


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)


@app.post("/googleAuth")
def verify_user(payload: GoogleToken):

    db = SessionLocal()

    try:

        user_info = id_token.verify_oauth2_token(
            payload.token,
            requests.Request(),
            Google_client_id
        )

        existing_user = (
            db.query(User)
            .filter(User.email == user_info["email"])
            .first()
        )

        if not existing_user:

            new_user = User(
                name=user_info["name"],
                email=user_info["email"]
            )

            db.add(new_user)
            db.commit()
            db.refresh(new_user)

        token = create_access_token({
            "sub": user_info["email"]
        })

        return {
            "token": token,
            "user": {
                "name": user_info["name"],
                "email": user_info["email"]
            }
        }

    except Exception as e:

        print("Error:", e)

        raise HTTPException(
            status_code=401,
            detail="Invalid Google Token"
        )

    finally:
        db.close()