import reflex as rx
import datetime
from link_bio.styles.styles import Size as Size
from link_bio.styles.styles import TextColor as TextColor
from link_bio.styles.colors import Color as Color
import link_bio.views.constants as constants


#calcula el ano con la librerya datetime linea 11
## margin_bottom agrega un espacio abajo 
## se agrega logo de python ubicado en assets y se hace mas pequeño con height
def footer() -> rx.Component:
    return rx.vstack(
        #rx.image(src="python_vertical.png",size="1px",margin_top="1px",width="10%"),
        rx.image(src="/python_vertical.png",
                 size="1px",
                 margin_top="1px",
                 height=Size.VERY_BIG.value,
                 weight=Size.VERY_BIG.value,
                 alt="Logo tipo de python"
                 ),
        rx.link(
                f"copy right 2023 - {datetime.date.today().year} Pp Aragon Tours",
                href=constants.INSTAGRAM_URL,
                is_external=True,
                font_size=Size.MEDIUM.value
                ),
        
        rx.link(
            rx.hstack(
                  rx.image(src="/GitHub2.jpeg",
                           height=Size.LARGE.value,
                           weight=Size.LARGE.value,
                          
                  ),  
                rx.text("""  donde la magia se vuelve real,tsn real que solo las personas mas exitosas
                    lo pueden ver y resolver
                    """,
                    font_size=Size.MEDIUM.value,
                    margin_top=Size.ZERO.value
                )
             ),
               href=constants.REPO_URL,
               is_external=True    
        ),
        margin_bottom=Size.BIG.value,
        align_items="center",
        padding_x=Size.BIG.value,
        color=TextColor.FOOTER.value,
        spacing="1"
    )