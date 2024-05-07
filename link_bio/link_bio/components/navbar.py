import reflex as rx
import link_bio.views.constants as constans
#import link_bio.styles.styles as styles
from link_bio.routes import Route
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import TextColor as TextColor
from link_bio.styles.colors import Color as Color
from link_bio.styles.styles import styles as styles
from link_bio.components.ant_compponents import float_button


## se agrega color y manejo de fuentes
## span se usa para pintar junto en un solo renglon o columna y cambiar propiedades 
##utiliza ant_componentes en parametro de imagen

def navbar() -> rx.Component:
    return rx.hstack(
             rx.link(
               rx.box(
                  rx.chakra.span("ppara",color=Color.PRIMARY.value),
                  rx.chakra.span("gon",color=Color.SECUNDARY.value),
                  style=styles.navbar_title_style
                 ),
               href=Route.INDEX.value
               ),
               float_button(
                   icon=rx.image(src="/icons/donate.svg"),
                   href=constans.COFFE_URRL
              ),
               position="sticky",
               bg=Color.CONTENT.value,
               padding_x=Size.BIG.value,
               padding_y=Size.DEFAULT.value,
               z_index="999",
               top="0"   
    )
    