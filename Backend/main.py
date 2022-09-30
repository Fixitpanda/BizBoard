# import time
# from datetime import datetime
import uvicorn as uvicorn
from fastapi import FastAPI, Path  # , HTTPException
# from typing import Optional
import math
from fastapi.middleware.cors import CORSMiddleware
from fastapi_utils.tasks import repeat_every
import sqlCalls
import userData


def add_id_to_dic():
    empty_dict = {}
    for i in sqlCalls.getPostById.json_data:
        empty_dict.update({i['id']: i})
    return empty_dict


inventory = add_id_to_dic()

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://10.0.0.1:3000",
    "https://hananaev.tk",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@repeat_every(seconds=60)
@app.get("/")
def home():
    return {"total_items": sqlCalls.getPosts.counter, "items_per_page": userData.StaticData.items_per_page,
            "total_pages": math.ceil(sqlCalls.getPosts.counter / userData.StaticData.items_per_page),
            "items": sqlCalls.getPosts.json_data}


@app.get("/all-items/")
def all_items():
    return sqlCalls.getPosts.json_data


@app.get("/get-post/{post_id}")
def get_post(post_id: int = Path(None, description="Inset the ID of the item you like to view")):
    return inventory[post_id]


# @app.get("/{search}")
# def get_post(title_entry: Optional[str] = None):
#     post_title = []
#     if len(title_entry) >= 3:
#         for post_id in inventory:
#             if title_entry.lower() in (inventory[post_id]["title"].lower() + inventory[post_id]["description"].lower()):
#                 post_title.append(inventory[post_id])
#
#     else:
#         raise HTTPException(status_code=404, detail="Entered less than 3 characters")
#     if len(post_title) == 0:
#         raise HTTPException(status_code=404, detail="Item not found")
#     else:
#         return post_title


@app.get("/about")
def about():
    return {"message": "This is about page"}


# @app.on_event("startup")
# @repeat_every(seconds=600)
# def force_update():
#     time.sleep(600)
#     now = datetime.now().time()  # time object
#
#     with open("forceUpdate.py", "w") as f:
#         f.write(f"""print("Server been updated at {now}")""")
#     print(f"Update at: {now}")


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
