import reflex as rx
from link_bio.components.title import title
from link_bio.components.link_sponsor import links_sponsor
import link_bio.views.constants as constants
from link_bio.styles.styles import Size as Size

def sponsors() -> rx.Component:
    return rx.vstack(
           title("Colaboran"),
           rx.chakra.responsive_grid(
               links_sponsor (
                     "/python_original.png",constants.PYTHON_URL,
                     "Python"
                     ),
               links_sponsor (
                     "/Linux.jpeg",constants.LINUX_URL,
                     "Linux" 
                     ),
               links_sponsor (
                     "/GitHub.jpeg",constants.GITHUB,
                     "github" 
                     ),
               spacing="7",
               columns=[1,2,3]
           ),
           width="100%",
           aling_items="start"
    )
    
    