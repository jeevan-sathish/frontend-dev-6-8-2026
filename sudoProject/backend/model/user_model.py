from database.db import Base
from sqlalchemy import Column,String,Integer


class DemoUser(Base):
    __tablename__="demousers"

    id=Column(Integer,primary_key=True,index=True)
    name =Column(String)
    email=Column(String)