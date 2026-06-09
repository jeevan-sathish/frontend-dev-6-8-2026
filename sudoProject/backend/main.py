from fastapi import FastAPI ,HTTPException
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/data')
def greet(name:str):
    if name != "jeevan":
         raise HTTPException(
        status_code=404,
        detail="something went wrong"
    )

    return {
        "message":"wellcome fastapi"
    }