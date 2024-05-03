import link_bio.views.constants as constants
from link_bio.api.TwitchAPI import TwitchAPI

## Inicializar la clase de TwitchAPI
TWITCH_API = TwitchAPI() 

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

async def live(user:str) -> bool:
     return TWITCH_API.live(user)