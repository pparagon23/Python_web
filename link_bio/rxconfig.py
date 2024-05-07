import reflex as rx


## cors_allowed limita las peticiones y conexiones del back end linea 7
config = rx.Config(
    app_name="link_bio",
   # api_url="https://python-web-4a2y.onrender.com", #back end
    cors_allowed_origins=[ #Front End
                         "http://localhost:3000",
                        # "http://192.168.100.39:3000", 
                        "https://python-web-five.vercel.app"
              
                         ]
    
)
