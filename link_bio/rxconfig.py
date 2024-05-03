import reflex as rx


## cors_allowed limita las peticiones y conexiones del back end linea 7
config = rx.Config(
    app_name="link_bio",
    cors_allowed_origins=[
                         "http://localhost:3000",
                         "http://192.168.100.39:3000", 
                         "https://pparagondev1.reflex.run/",
                         ]
    
)
