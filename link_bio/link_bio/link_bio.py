import reflex as rx
import reflex.components.radix.themes as rdxt ## radix
import link_bio.styles.styles as styles
from link_bio.pages.index import index 
from link_bio.pages.courses import courses
from link_bio.api.api import hello,repo, live

     
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

app.api.add_api_route("/hello",hello)
app.api.add_api_route("/repo",repo)
app.api.add_api_route("/live/{user}",live)
#app.compile()