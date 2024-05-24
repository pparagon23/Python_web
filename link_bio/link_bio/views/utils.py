import reflex as rx
from datetime import datetime, timezone, timedelta
import pytz

 ####       Comun
def lang() -> rx.Component:
      return rx.script("document.documentElement.lang='es'")
  
preview="https://moure.dev/previews.jpg"
_meta = [
     {"name":"og:type","content":"website"},
     {"name":"og:image","content":preview}, 
     {"name":"twiter:card","content":"summary_large_image"},
     {"name":"twiter:site","content":"@pparagon"},
    ]
 
 ####     index 
index_title="PpAragon | Te enseño programación y desarrollo de software"
index_description="Hola, mi nombre es Pparagon. Soy ingeniero de software, desarrollador freelance full-stack y divulgador."
index_meta=[
 {"name":"og:title","content":index_title},
 {"name":"og:descrption","content":index_description},   
]
index_meta.extend(_meta)

    
####   cursos
courses_title="Pparagon | Listado de cursos gratis"
courses_description="Curos de plsql, python, postgress"
courses_meta=[
 {"name":"og:title","content":courses_title},
 {"name":"og:descrption","content":courses_description},   
]
courses_meta.extend(_meta)

#Date
LOCAL_TIMEZONE_SCRIPT = "Intl.DateTimeFormat().resolvedOptions().timeZone"
WEEKDAYS = {
      0:"Lunes",
      1:"Martes",
      2:"Miercoles",
      3:"Jueves",
      4:"Viernes",
      5:"Sabado",
      6:"Domingo",
}

MONTHS = {
      1:"Enero",
      2:"Febrero",
      3:"Marzo",
      4:"Abril",
      5:"Mayo",
      6:"Junio",
      7:"Julio",
      8:"Agosto",
      9:"Septiembre",
      10:"Octubre",
      11:"Noviembre",
      12:"Diciembre"
}


## Calcula la proxima fecha

def next_date(dates: dict, timezone: str) -> str:

    if len(dates) == 0:
        return ""

    tz = pytz.timezone(timezone)
    now = datetime.now(tz)
    current_time = now.timetz()

    for weekday in range(7):

        current_weekday = str((now.weekday() + weekday) % 7)

        if current_weekday not in dates or dates[current_weekday] == "":
            continue

        time_utc = datetime.strptime(dates[current_weekday], "%H:%M").replace(
            tzinfo=pytz.UTC).timetz()

        next_time = datetime.combine(
            now.date(), time_utc).astimezone(tz).timetz()
        
        print (current_time)
        print (next_time)
        print (weekday)

        if current_time < next_time or weekday > 0:

            next_date = now + timedelta(days=weekday)

            local_date = datetime(
                next_date.year, next_date.month, next_date.day,
                time_utc.hour, time_utc.minute, tzinfo=pytz.UTC).astimezone(tz) 
            
            print(local_date)

            day = "Hoy" if weekday == 0 else WEEKDAYS[local_date.weekday()]
            zones = timezone.replace('_', ' ').split('/')

            return local_date.strftime(
                f"{day}, %d de {MONTHS[local_date.month]} a las %H:%M | Zona horaria: {zones[len(zones) - 1]}")

    return ""