import reflex as rx


## cors_allowed limita las peticiones y conexiones del back end linea 7
config = rx.Config(
    app_name="link_bio",
    api_url="https://python-web-4a2y.onrender.com", #usar con pparagon23 a si esta en github
    cors_allowed_origins=[
                         "http://localhost:3000",
                         "http://192.168.100.39:3000", 
                         "https://python-web-4a2y.onrender.com"
                         "https://pparagondev.reflex.run"
                         "https://python-web-ochre.vercel.app"
                         "https://python-web-pparagon23s-projects.vercel.app"
                         "https://python-web-git-main-pparagon23s-projects.vercel.app"
                         "https://python-her7slaaw-pparagon23s-projects.vercel.app/"
                         ]
    
)
