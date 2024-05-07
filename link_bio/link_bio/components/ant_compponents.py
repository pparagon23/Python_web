import reflex as rx
from link_bio.styles.colors import Color
from reflex.vars import Var
### utilizar react con la libreria ant design
## insertar boton flotante
##   icon = rx.image(src="/icons/gift.svg") . metodo para asignar imagen y ruta
##    href="https://"
## agrega imagenes por parametro  icon: rx.Var[rx.el.Img] 


class FloatButton(rx.Component):
    library = "antd"
    tag = "FloatButton"
    icon: rx.Var[rx.el.Img]
    href : rx.Var[str]
        
    target="_blank"
    badge = {"dot":True,"color":Color.SECUNDARY.value}
    
float_button = FloatButton.create