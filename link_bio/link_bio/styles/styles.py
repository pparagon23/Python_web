import reflex as rx
import link_bio.styles.styles as styles
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor
from .fonts import Font as Font,FontWeight

#constantes
MAX_WITDH="500px"

#tamanos
## SMALL="8px" px no se usa para aplicaciones responsive para ello se usa
## em que toma la fuente de la aplicacion 
## Todos los acronimos de funcion son de CSS no propiedades de las vistas o componentes
## ejemplo en componente es size y en CSS es font_size
## Se agregan fuentes desde los estilos globales y particulares


## cargar fuentes externas
STYLESHEETS =[
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300:500&display=swap",
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap",
    "/css/styles.css"
]

class Size(Enum):
      ZERO="-0.5em"
      SMALL="0.5em"
      MEDIUM="0.9em"
      DEFAULT="em"
      LARGE="1.5em"
      BIG="2em"
      VERY_BIG="4em"
      
    
## BASE Stylos para botones y links globales
## _hover cambia el color de algo al pasar el raton
## font_weight se agrega para el tamaño de la tipografia puesta en font_family
BASE_STYLE = {
    "font_family" : Font.DEFAULT.value,
    "font_weight" :FontWeight.LIGHT.value,
    "background_color" : Color.BACKGROUND.value,
    rx.heading :{
        "font_size":"1em",
        "color" : TextColor.HEADER.value,
        "" : Font.TITLE.value,
        "font_weight" : FontWeight.MEDIUM.value
        },
    ## se modifica para que sea responsive
    rx.button :{
        "width": "100%",
        "height": "100%",
        "display":"block",
        "padding":Size.SMALL.value,
        "border_radius":Size.DEFAULT.value,
        "background_color" : Color.CONTENT.value,
        "color":TextColor.HEADER.value,
        "white_space":"normal",
        "text_align":"start",
        "align":"start",
        "aling_itens":"start",
        "_hover" : {
            "background_color" : Color.SECUNDARY.value 
        }
        
    },
    rx.link : {
        "text_decoration":"none",
        "_hover":{}
    }
}



navbar_title_style = dict(
     font_family=Font.LOGO.value,
     font_weight =FontWeight.MEDIUM.value,
     font_size=Size.LARGE.value
)

### estilos particulares prediminan sobre los globales
title_style = dict(
     width="100%",
     font_size="2em",
     font_family = Font.TITLE.value,
     font_weight = FontWeight.MEDIUM.value,
     padding_top=Size.DEFAULT.value,    
     color=TextColor.HEADER.value  
)

button_title_style = dict(
    font_size=Size.DEFAULT.value,
    font_family=Font.TITLE.value,
    font_weight = FontWeight.MEDIUM.value,
    color=TextColor.HEADER.value
    
)
button_body_style = dict(
    font_size=Size.MEDIUM.value,
    font_family=Font.DEFAULT.value,
    font_weight = FontWeight.LIGHT.value,
    color=TextColor.BODY.value
)