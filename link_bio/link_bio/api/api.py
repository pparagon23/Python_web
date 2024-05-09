import link_bio.views.constants as constants
from link_bio.api.TwitchAPI import TwitchAPI
from .SupabaseAPI import SupabaseAPI
from link_bio.model.Live import Live

## Inicializar la clase de TwitchAPI
TWITCH_API = TwitchAPI() 
SUPABASE_API = SupabaseAPI()

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
 
async def featured() -> list:
     return SUPABASE_API.featured()