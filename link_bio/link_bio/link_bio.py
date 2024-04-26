import reflex as rx
import reflex.components.radix.themes as rdxt ## radix
import link_bio.styles.styles as styles
from link_bio.pages.index import index 
from link_bio.pages.courses import courses


class State(rx.State):
    """Define your app state here."""
     
app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE,
    head_components=[
         rx.script(src=f"https://www.googletagmanager.com/gtag/js?id=G-MFEQYK7KS"),
         rx.script(
              """
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());
              gtag('config','G-MFEQYK7KS');
              """
         ),
    ]
)


#app.compile()