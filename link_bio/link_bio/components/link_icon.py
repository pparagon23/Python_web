import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size

## referenciar el boton para recibir nombre y url


def links_icon(image :str, url:str, alt:str) -> rx.Component:
    return rx.link(
        rx.image(
            src=image,
            width=Size.BIG.value,
            alt=alt     
        ),
        href=url,
        is_external=True,
        width="100%"
    )