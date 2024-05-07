import reflex as rx
 
 ####       Comun
def lang() -> rx.Component:
      return rx.script("document.documentElement.lang='es'")
  
preview="https://moure.dev/previews.jpg"
_meta = [
     {"name":"og:type","content":"website"},
     {"name":"og:image","content":preview}, 
     {"name":"twiter:card","content":"summary_large_image"},
     {"name":"twiter:site","content":"@pparagon"},
    ]
 
 ####     index 
index_title="PpAragon | Te enseño programación y desarrollo de software"
index_description="Hola, mi nombre es Pparagon. Soy ingeniero de software, desarrollador freelance full-stack y divulgador."
index_meta=[
 {"name":"og:title","content":index_title},
 {"name":"og:descrption","content":index_description},   
]
index_meta.extend(_meta)

    
####   cursos
courses_title="Pparagon | Listado de cursos gratis"
courses_description="Curos de plsql, python, postgress"
courses_meta=[
 {"name":"og:title","content":courses_title},
 {"name":"og:descrption","content":courses_description},   
]
courses_meta.extend(_meta)