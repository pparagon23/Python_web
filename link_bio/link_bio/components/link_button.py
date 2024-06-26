import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size

## referenciar el boton para recibir nombre y url
## agregar propiedades para que el boton cubra toda la superficie
## se pasa por parametro el nombre y el subtitulo el de links 
## rx.text utiliza el stilo personalizado
## radius="full" contorno del boton
## se agrega accesibilidad nombres a las imagenes con el atributo alt

def links_button(title:str,body:str,image:str, url:str, is_external=True,animated=False) -> rx.Component:
    print ("title", title) 
    print ("Animated", animated)
    return rx.link(    
        rx.button(
            rx.hstack(
                rx.image(
                       src=image,
                       width=styles.Size.BIG.value,
                       height=styles.Size.BIG.value,
                       margin=styles.Size.MEDIUM.value,
                       alt=title,
                       #class_name="blink"
                       ),
                rx.vstack(
                         rx.text(title,style=styles.button_title_style),
                         rx.text(body,style=styles.button_body_style),
                         spacing="0",
                         align_items="start",
                         margin=styles.Size.ZERO.value,
                         padding_y = styles.Size.SMALL.value,
                         padding_x= styles.Size.SMALL.value  
                         )
                ),radius="full",
                 width="100%"
            ),
        #href=url,
        #is_external=is_external,
        width="100%",
        #border=f"{'2px' if highlight_color != None else '0px'} solid {highlight_color}",
        #class_name=styles.BOUNCEIN_ANIMATION if animated else None, 
        class_name="blink",
        on_click=rx.redirect(path=url, external=is_external)
        
    )