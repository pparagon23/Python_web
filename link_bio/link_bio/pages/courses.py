import reflex as rx
import link_bio.views.utils as utils
import link_bio.styles.styles as styles
from link_bio.routes import Route
from link_bio.components.navbar import navbar
from link_bio.components.footer import footer
from link_bio.views.header import header
from link_bio.views.courses_links import courses_links
from link_bio.views.sponsor import sponsors
from link_bio.styles.styles import Size
import link_bio.views.constants as constants


## importa el index 
## cambia la ruta de navegacion a cursos 
@rx.page(
    route=Route.COURSES.value,
    title=utils.index_title,
    description=utils.index_description,
    image=utils.preview,
    meta=utils.index_meta
)

### Lang se importa de utils el lenguaje
def courses() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(
            rx.vstack(
                header(details=False),
                courses_links(),
                sponsors(),
                max_width=styles.MAX_WITDH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value
            )
        ),
        footer()
    )