from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pathlib import Path

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods="*",
    allow_headers="*",
)


class Item(BaseModel):
    boulangerie: float
    ecole: float
    monument: float
    superette: float
    terrain: float
    wc: float
    bathtub: float
    bedrooms: float
    volume: float
    rooms: float
    district16: float


filename = '../../model/xgboost_regression_model_min.pickle'
classifier = pickle.load(open(filename, "rb"))

app.mount(
    "/assets",
    StaticFiles(directory=Path(
        __file__).parent.parent.absolute() / "../frontend/assets"),
    name="static",
)

templates = Jinja2Templates(directory="../frontend")


@app.get("/")
async def root(request: Request):
    return templates.TemplateResponse(
        "index.html", {"request": request}
    )


@app.post("/predict/")
async def create_item(item: Item):
    return {"price": classifier.predict([list(item.__dict__.values())]).tolist()[0]}
