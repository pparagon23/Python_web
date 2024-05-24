import reflex as rx
import link_bio.views.utils as utils
import link_bio.styles.styles as styles
from link_bio.components.navbar import navbar
from link_bio.components.footer import footer
from link_bio.views.header import header
from link_bio.views.index_links import index_links
from link_bio.views.sponsor import sponsors
from link_bio.styles.styles import Size
import link_bio.views.constants as constants
from link_bio.state.PageState import PageState
        
       
## se agrega on_load para cargar el estado de lo contrario se tendria que hacer
## atraves de un boton o una acion    
@rx.page(
    title=utils.index_title,
    description=utils.index_description,
    image=utils.preview,
    meta=utils.index_meta,
    on_load=[PageState.check_live,PageState.featured_links]
)

### Lang se importa de utils el lenguaje
## rx.text conexion con bankend  linea 38
def index() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(
            rx.vstack(
                rx.text(PageState.say_hello),
                header(live_status=PageState.live_status,
                       next_live=PageState.next_live),
                index_links(PageState.featured_info),
                sponsors(),
                max_width=styles.MAX_WITDH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value
            )
        ),
        footer()
    )