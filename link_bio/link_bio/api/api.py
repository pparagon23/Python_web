import link_bio.views.constants as constants
from link_bio.api.TwitchAPI import TwitchAPI
from .SupabaseAPI import SupabaseAPI
from link_bio.model.Live import Live
from link_bio.model.Featured import Featured
from .ConfigCatAPI import ConfigCatAPI

## Inicializar la clase de TwitchAPI
TWITCH_API = TwitchAPI() 
SUPABASE_API = SupabaseAPI()
CONFICAT_API = ConfigCatAPI()

## Estados Backend
def hello() -> str:
    return "pparagon!"

async def repo() -> str:
    return constants.REPO_URL

## asigna el valor del usuario de live para el backend
#async def live(user:str) -> bool:
#    if user == "pparagon":
#       return True
#    return False
#operacion externa expuessta 

async def live(user:str) -> Live:
     return TWITCH_API.live(user)
 
 ##operacion interna sin exponer 
 
async def featured() -> list[Featured]:
     return SUPABASE_API.featured()
 
async def schedule ()->dict:
    print (CONFICAT_API.schedule()) ## imprime los valores de ConfigCat
    return CONFICAT_API.schedule()