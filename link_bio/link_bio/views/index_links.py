import reflex as rx
import link_bio.routes as Route
from link_bio.components.link_button import links_button
from link_bio.components.featured_link import featured_link
from link_bio.components.title import title
import link_bio.views.constants as constants
from link_bio.model.Featured import Featured
from link_bio.styles.styles import Size as Size


## vista para mandar llamar al componente button
## ubicacion 
## /Users/pparagon/Documents/Python/WEB/link_bio/link_bio/views/links/links.py
##llamado
## /Users/pparagon/Documents/Python/WEB/link_bio/link_bio/components/link_button.py
## el color gris es e fondo del area y el width el tamano
## envia por correo on click

def index_links( featured :list [Featured] ) -> rx.Component:
    return rx.vstack( 
        title ("Comunidad"),
           links_button("Cursos Gratis",
                        "Consulta cursos para aprender programaciòn",
                        "/icons/paperclip.svg",  
                        Route.Route.COURSES.value,
                        is_external=False
                        ),
                        
           links_button("Tiktok",
                        "Videos mas vistos",
                        "/icons/tiktok.svg",
                        constants.TIKTOK_URL),
           links_button("instagram",
                        "seguidores fans",
                        "/icons/instagram.svg",
                        constants.INSTAGRAM_URL),
           links_button("facebook",
                        "familia y consejos",
                        "/icons/facebook.svg",
                        constants.FACEBOOK_URL),
           links_button("youtube canal primario",
                        "emprendimiento en proceso",
                        "/icons/youtube.svg",
                        constants.YOUTUBE_URL),
         
        rx.cond(
            featured,
            rx.vstack(
                title("Destacado"),
                rx.chakra.responsive_grid(
                rx.foreach(
                    featured, 
                    featured_link,
                    ),
                columns=[1,2],
                spacing="2"
                ),
                spacing="2"   
              )
            ),
           
        title ("Recursos"),
           links_button("CSS Tutorial",
                        "Manejo de CSS para flex",
                         "/icons/file.svg",
                        constants.CSSDOC_URL),
           links_button("FLEX Tutorial",
                        "Aprende FLEX",
                        "/icons/handshake-regular.svg",
                        constants.FLEXDOC_URL),
           links_button("ICON Tutoriales",
                        "Ejemplos de iconos precargados",
                        "/icons/apple.svg",
                        constants.ICONDOC_URL),
           links_button("Mouredev Aprende Python web FLEX",
                        "Video tutorial de 7 horas desde cero",
                        "/icons/python.svg",
                        constants.YOUTUBE_TUTO_URL),
           
           title ("Contactos"),
           links_button("My publicInbox",
                        "Respuesta rapida y con preferencia",
                        "/icons/id-card-solid.svg",
                        constants.MYPUBLICINBOX),
           links_button("Email",
                        constants.EMAIL,
                        "/icons/envelope-regular.svg",
                        f"mailto:{constants.EMAIL}"
                        ),
           bg="grey",
           width="100%"
           ) 