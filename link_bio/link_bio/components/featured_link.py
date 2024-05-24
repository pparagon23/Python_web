import reflex as rx
from link_bio.model.Featured import Featured
from link_bio.styles.styles import Size as Size
import link_bio.styles.styles as styles

def featured_link(featured:Featured)-> rx.Component:
    return rx.link (
        rx.vstack(
            rx.image(
                src=featured.image,
                border_radius=Size.LARGE.value
            ),
            rx.text(
              featured.title,
              style=styles.button_body_style
            ),
            spacing="4",
            class_name=styles.FADEIN_ANIMATION
            ),
            href=featured.url,
            is_external= True
      )