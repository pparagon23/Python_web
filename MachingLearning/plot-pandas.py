### install 
##  pip3 install pandas matplotlib numpy

import pandas as pd
import numpy as np
from matplotlib import pyplot as plt

print ("Esta listo")

df = pd.read_csv("avocado.csv")
print (df.head (5))

print (df["region"][0:10])

chicago =  df [ df["region"] == "Chicago" ]  ##filtrar por columna

chicago = chicago.set_index("Date")     ## ordenar por columna Date
chicago = chicago.sort_values(by="Date")  ## ordenar por columna Date
 
print (chicago.head(15))

## Grafico

MAX_SAMPLES = 100
precio = chicago["AveragePrice"][:MAX_SAMPLES]
cantidad = chicago["Total Volume"][:MAX_SAMPLES]

plt.plot(precio,label = "Precio Medio")
plt.plot(cantidad,label = "Volumen Total")

plt.title ("Precio de los aguacates vs tiempo")
plt.xlabel ("Fecha")
plt.xticks (rotation=90)
plt.ylabel("Precio en $")
plt.legend()
plt.show()
