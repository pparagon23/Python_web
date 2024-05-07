import reflex as rx
import link_bio.routes as Route
from link_bio.components.link_button import links_button
from link_bio.components.title import title
import link_bio.views.constants as constants


## vista para mandar llamar al componente button
## ubicacion 
## /Users/pparagon/Documents/Python/WEB/link_bio/link_bio/views/links/links.py
##llamado
## /Users/pparagon/Documents/Python/WEB/link_bio/link_bio/components/link_button.py
## el color gris es e fondo del area y el width el tamano
## envia por correo on click
## Nueva pagina de cuross

def courses_links() -> rx.Component:
    return rx.vstack( 
           title ("Cursos gratis"),
           links_button("Retos de programaciòn",
                        "Ruta de estudio semanal para aprebder programaciòn",
                        "/icons/paperclip.svg",  
                        constants.CODE_CHALLENGE_URL,
                        is_external=False
                        ),
           links_button("Python desde cero",
                        "curos de 37h: Fundamentos, frontend, backend, testing ...",
                        "/icons/worm.svg",  
                        constants.PYTHON_COURSES_URL,
                        is_external=False
                        ),
           links_button("Git y GitHub",
                        "Curso de 5h para aprender Git y GitHub desde cero",
                        "/icons/github.svg",  
                        constants.GIT_COURSES_URL,
                        is_external=False
                        ),
           links_button("sql y base de datos",
                        "Curso de 7h para aprender los formatos SQL",
                        "/icons/database-zap.svg",  
                        constants.SQL_COURSES_URL,
                        is_external=False
                        ),
           links_button("un dìa un lenguaje",
                        "primeros pasos en los 11 lenguajes de programaciòn",
                        "/icons/bean.svg",  
                        constants.LANGUAJES_COURSES_URL,
                        is_external=False
                        ),
           title ("Mas cursos en:"),
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

           bg="grey",
           width="100%"
           ) 
    