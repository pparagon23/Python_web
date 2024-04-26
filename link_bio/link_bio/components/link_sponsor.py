import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size

## referenciar el boton para recibir nombre y url


def links_sponsor(imagen:str, url:str,alt:str) -> rx.Component:
    return rx.link(
        rx.image(
            src=imagen,
            height=Size.VERY_BIG.value,
            width="auto",
            alt=alt
        ),
        href=url,
        is_external=True
    )