import pandas as pd


## imprime con listas simples
columns =["marca","precio","disponibilidad"]
cocheA= ["Mercedes",10e3,True]
cocheB= ["BMW",20e3,False]

df = pd.DataFrame([cocheA,cocheB],columns=columns)
print (df)
print ("--------------------")


### imprime con listas y tuplas
marcas = [
    "Audi",
    "Mercedes",
    "BMW",
    "Mercedes"
]

precio = [
    20e3,
    30e3,
    40e3,
    25e3   
]

disponibilidad = [
    True,
    False,
    False,
    True
]

dfa = pd.DataFrame (
   list (zip(marcas,precio,disponibilidad)),
   columns=["marca","precio","disponibilidad"]    
)

print (list (zip(marcas,precio,disponibilidad))) #tuplas
print (dfa)
print ("--------------------")


#impresion por diccionario
diccionario = {
    "marcas":marcas,
    "precio":precio,
    "disponibilidad":disponibilidad
}

dfb= pd.DataFrame(diccionario)

print (dfb)
print ("-------------------")


## importar CSV

#dfc = pd.read_csv("avocado.csv", index_col=0) ## con el index especificas la columna de indice sino panda agrega una por defecto
dfc = pd.read_csv("avocado.csv", index_col=["Date"]) ## especifica columna con nombre
print (dfc.head(3))  ## imprime los primeros 3 registros
print (dfc)   ## imprime todo el contenido
print ("-------------------")