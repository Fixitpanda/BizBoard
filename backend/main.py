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

description = '''Complete BizBoard API calls for the frontend applications'''

tags_metadata = [
    {
        "name": "Home",
        "description": "Get everything you need for default home page",
    },
    {
        "name": "Pages",
        "description": "Get minimized articles by pages numbers",
    },
    {
        "name": "Article",
        "description": "Get entire article by article ID",
    },
]

app = FastAPI(title="BizBoard API",
              description=description,
              version="0.0.1",
              # terms_of_service="http://example.com/terms/",
              openapi_tags=tags_metadata,
              contact={
                  "name": "George Khananaev",
                  "url": "http://github.com/fixitpanda",
                  "email": "george.khananaev@gmail.com",
              },
              # license_info={
              #     "name": "Apache 2.0",
              #     "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
              # },
              )

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@repeat_every(seconds=60)
@app.get("/", tags=["Home"])
def home_page():
    return {"totalItems": sqlCalls.getPosts.counter, "ItemsPerPage": userData.StaticData.items_per_page,
            "totalPages": math.ceil(sqlCalls.getPosts.counter / userData.StaticData.items_per_page),
            "items": sqlCalls.getPosts.json_data}


@app.get("/page/{number}", tags=["Pages"])
def get_page_by_page_number(number: int):
    return sqlCalls.getPosts.json_data[(number * userData.StaticData.items_per_page)-userData.StaticData.items_per_page:number * userData.StaticData.items_per_page]


@app.get("/all-posts/", tags=["Home"])
def get_all_posts():
    return sqlCalls.getPosts.json_data


@app.get("/get-post/{post_id}", tags=["Article"])
def get_post_by_id(post_id: int = Path(None, description="Inset the ID of the item you like to view")):
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


# @app.get("/about")
# def about():
#     return {"message": "This is about page"}


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
