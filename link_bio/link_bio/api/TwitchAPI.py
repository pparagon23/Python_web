import os
import dotenv
import requests
import time

## CARGAR variables de entorno fichero .env en raiz del proyecto dotenv
## os carga las variables de entorno a las variables del fichero
## buscar desde el backend usaurio en directo
#  http://localhost:8000/live/XTASIAEGO

class TwitchAPI:

    dotenv.load_dotenv()

    CLIENT_ID = os.environ.get("TWITCH_CLIENT_ID")
    CLIENT_SECRET = os.environ.get("TWITCH_CLIENT_SECRET")

    def __init__(self) -> None:
        self.token = None
        self.token_exp = 0

## ir por el token de twitch segun su doc 
## https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#client-credentials-grant-flow
    def generate_token(self):

        response = requests.post(
            "https://id.twitch.tv/oauth2/token",
            data={
                "client_id": self.CLIENT_ID,
                "client_secret": self.CLIENT_SECRET,
                "grant_type": "client_credentials"
            }
        )
        print (self.CLIENT_ID)
        print(self.CLIENT_SECRET)

        if response.status_code == 200:
            data = response.json()
            self.token = data["access_token"]
            self.token_exp = time.time() + data["expires_in"]
        else:
            self.token = None
            self.token_exp = 0

    def token_valid(self) -> bool:
        return time.time() < self.token_exp

    def live(self, user: str) -> bool:

        if not self.token_valid():
            self.generate_token()

        response = requests.get(
            f"https://api.twitch.tv/helix/streams?user_login={user}",
            headers={
                "Client-ID": self.CLIENT_ID,
                "Authorization": f"Bearer {self.token}"
            }
        )

        if response.status_code == 200 and response.json()["data"]:
            data = response.json()["data"]
            print (data)
            return True

        return False