import reflex as rx 
from link_bio.api.api import hello,live,featured
from link_bio.model.Live import Live

##State BACKEND 
#### Se agrega conexion backend rx.state
# linea 19 self forma de acceder al tipo de contexto

#Docker
USER="XTASIAEGO"

#render 
# https://python-web-4a2y.onrender.com/live/pparagon23

#USER="pparagon23"

#print (f"---------{USER}-----")
class PageState(rx.State):
    """Define your app state here."""
    live_status =   Live(live=False,title="")
    featured_info : list[dict]
    
    @rx.var
    def say_hello(self):
          return hello()
    
   ## self para datos propios y await para esperar la respuesta del backend valor en api.py
    async def check_live (self): 
        print (f"22222222------{USER}-----")
        self.live_status = await live(USER)
        
    async def featured_links (self):
        self.featured_info = await featured()
        
        