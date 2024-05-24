import reflex as rx 
from link_bio.api.api import hello,live,featured,schedule
from link_bio.model.Live import Live
from link_bio.model.Featured import Featured
import link_bio.views.utils as utils
#from link_bio.link_bio import utils

##State BACKEND 
#### Se agrega conexion backend rx.state
# linea 19 self forma de acceder al tipo de contexto

#Docker
USER="pp"

#render 
# https://python-web-4a2y.onrender.com/live/pparagon23

#USER="pparagon23"

#print (f"---------{USER}-----")
class PageState(rx.State):
    """Define your app state here."""
    timezone=""
    live_status =   Live(live=False,title="")
    next_live  = ""
    featured_info : list[Featured]
    
    @rx.var
    def say_hello(self):
          return hello()
    
   ## self para datos propios y await para esperar la respuesta del backend valor en api.py
    async def check_live (self): 
        print (f"22222222------{USER}-----")
        #pass
        self.live_status = await live(USER)
     #   if  not self.live_status.live:
      #      self.next_live = utils.next_date( await schedule())
            
    def check_schedule (self):
        if self.timezone == "":
            return rx.call_script(
                utils.LOCAL_TIMEZONE_SCRIPT,
                PageState.update_timezone
            )
        else:
            self.update_timezone(self.timezone)
     
    async def  update_timezone(self,timezone:str):
         self.timezone=timezone
         self.next_live=utils.next_date(await schedule (), self.timezone)      
            
    async def featured_links (self):
        data = await featured()
        print (data)
        self.featured_info = await featured()
        #self.featured_info = []
        
        