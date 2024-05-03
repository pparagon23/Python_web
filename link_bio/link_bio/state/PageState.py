import reflex as rx 
from link_bio.api.api import hello,live

#### Se agrega conexion backend rx.state
# linea 19 self forma de acceder al tipo de contexto

USER="pparagon23"


class PageState(rx.State):
    """Define your app state here."""
    is_live: bool
    
    @rx.var
    def say_hello(self):
          return hello()
    
   ## self para datos propios y await para esperar la respuesta del backend valor en api.py
    async def check_live (self): 
        self.is_live= await live (USER)