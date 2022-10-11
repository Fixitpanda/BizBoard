# [BizBoard](https://github.com/Fixitpanda/biz-ad-board) *v2 Alpha*

![alt text](https://img.shields.io/badge/Code:-orange) ![alt text](https://img.shields.io/badge/Python-3.10+-blue) ![alt text](https://img.shields.io/badge/React-18.2.0+-blue) ![alt text](https://img.shields.io/badge/Bootstrap-5.2+-blue)

| Version                                                  | URL                               |
| -------------------------------------------------------- | --------------------------------- |
| ![alt text](https://img.shields.io/badge/Demo-v1.0-orange) | N/A                               |
| ![alt text](https://img.shields.io/badge/Demo-v2.0-orange) | [DEMO](https://bizboard.hananaev.tk) |

---

**This mini react based website with 3 pages in total(at the moment): "*Home,  Services, About*".**

* **Technology:** Python FastAPI Server with MySql database & React.JS as frontend.
* **Features:** Dynamic Pages, Mobile Support, Slider, Go to Top Button, Services page with: Add/Remove/Status.
* **Design:** Bootstrap 5, using a react router component fully, perfect for static implementations.

## This is on going project...

More features will be added. I am currently working on this project...
This projects will continue until the result is fully functional!
If you have any special requests, email these to me. (You can find my email at the profile page).
I won't add everything of course, I will consider adding the most relevant only.

## How to use?

```
1. git clone https://github.com/Fixitpanda/BizBoard.git

2. go to BizBoard/frontend
3. npm install
4. go to BizBoard/backend
5. pip install -r requirements.txt (better to install inside venv)
6. create "credentials.py" file and fill it with your information as shown below:
Example:
    class myCredentials:
        host = "your_mysql_server_ip"
        user = "your_mysql_username"
        passwd = "your_mysql_password"
        database = "your_database_name"

7. Inside MySql, you should create tables, I will upload sql sample later.
8. python main.py
9. go to BizBoard/frontend/src/Pages and replace inside home and articles the main fetch url, with your own api address.

Now it should be running. 
The process is a bit complicated now... Once project finished I will dockerize it and you can deploy with single command.
```

## Copyrights / Credits

* Images been downloaded from pixabay.com, check terms before using for any commercial use!
* This is open source project, feel free to use my code for any commercial usage. However, don't forget to give some credits back ;)

| Cheers! |
| ------- |
