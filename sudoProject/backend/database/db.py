from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()
Google_client_id =os.getenv("GOOGLE_CLIENT_ID")
engine = create_engine(os.getenv("NEON_DATABASE_URL"))

SessionLocal =sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base =declarative_base()