import reflex as rx
from link_bio.components.link_icon import links_icon
from link_bio.components.info_text import info_text
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import TextColor as TextColor
from link_bio.styles.colors import Color as Color
from link_bio.components.title import title as title
import link_bio.views.constants as constants
from link_bio.styles.fonts import Font as Font,FontWeight
from link_bio.components.link_button import links_button
from link_bio.model.Live import Live

## manejo de vstack elementos en vertical
## maneji de hstack elementos horizontal
##se ingresan los colores
## en avatar se agrega imagen desde la carpeta assets
## se agregan iconos y ligas
## se agrega boton de twitch y pardapedo linea 30 con blink en hojas de css linea 35
## linea 26 se agrega titulo del live twitch que esta en directo


def header(details=True, live_status = Live(live=False,title="")) -> rx.Component:
    return rx.vstack (
           rx.hstack(
            rx.link(   
            rx.chakra.avatar
                        (
                rx.cond
                    (
                    live_status.live,
                    rx.chakra.avatar_badge
                      (
                       rx.image(src="/icons/twitch.svg"
                           ),
                       box_size=Size.MEDIUM.value,
                       bg=Color.PURPLE.value,
                       border_color=Color.PURPLE.value,
                       class_name="blink"
                      )
              ),       
              color_scheme="sky", variant="solid", 
              high_contrast=False, fallback="PA",size="xl",radius="full",
              src="/pp.png",
              padding=Size.ZERO.value,
              border= f"5px solid {Color.PRIMARY.value}"
              ),
               href=constants.TWITCH_URL      
                        ),
              rx.vstack(
                  rx.heading ("Pp Aragon Laguna",
                              font_family = Font.TITLE.value ,
                              font_weight =FontWeight.LIGHT.value
                              ),
                  rx.text("@pparagon",margin_top=Size.ZERO.value,color=TextColor.BODY.value),
                  
                  rx.hstack(
                       links_icon("/icons/linux.svg",constants.LINUX_URL,"linux"),
                       links_icon("/icons/redhat.svg",constants.REDHAT_URL,"redhad"),
                       links_icon("/icons/fedora.svg",constants.FEDORA_URL,"fedora"),
                       spacing="6"
                       ),
                   align_items="start",
                   
                  ),
              spacing="6"
               ),
# spacer deja espacio entre cada componente
# info_text manda los dos valores para span
# flex manejo de elementos en horizontal con espaciado
# atributo direction por default row y puede cabiarse a column
# rx.cond nos sirve para agregar condiciones en reflex como un if
          rx.cond (
               details,
               rx.vstack(
                  rx.flex(
                         info_text("+13","años de experiencia"),
                         rx.spacer(),
                         info_text("700","seguidores"),
                         rx.spacer(),
                         info_text("42","años de edad"),
                         width="100%"
                        ),
                  
                  rx.cond (
                      live_status.live, links_button(
                          "En directo",
                          live_status.title,
                          "/icons/twitch.svg",
                          constants.TWITCH_URL,
                         )
                      ),
                  
                  rx.text(""" soy ingeniero
                           y me encanta programar y ver como queda
                           la pagina web de mis favoritas""",
                           font_size=Size.MEDIUM.value,
                           color=TextColor.BODY.value),
                           spacing="4"
                  ),
                
              
             
           ),
           spacing="3",
           align_items="start",
           width="100%"
            
           )