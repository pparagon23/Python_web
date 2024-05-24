import configcatclient
import os
import dotenv
import json


## Co0nexion a configCat para variables estaticas dentro de un servicio
class ConfigCatAPI:
    dotenv.load_dotenv()
    CONFIGCAT_SDK_KEY=os.environ.get("CONFIGCAT_SDK_KEY")
    
    def __init__(self) -> None:
        if self.CONFIGCAT_SDK_KEY != None:
            self.configcat = configcatclient.get(self.CONFIGCAT_SDK_KEY)
    
    def schedule (self) -> dict:
              response = self.configcat.get_value("live_schedule","")  #Si no trae nada manda vacio
              schedule = json.loads(response)
              print (type(schedule)) ## imprime el tipo dato
              return schedule
             
                      