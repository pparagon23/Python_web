### install 
##  pip3 install pandas matplotlib numpy

import pandas as pd
import numpy as np
from matplotlib import pyplot as plt

df = pd.read_csv("avocado.csv")

atlanta =  df [ df["region"] == "Atlanta" ] 

precio = atlanta ["AveragePrice"]
precioPromediado = precio.rolling(30, min_periods=1).mean() ## promedio para sacar la media

print (precio [:30])
print (precioPromediado [:30])

volumen = atlanta["Total Volume"]

bolsasAguacate=atlanta["Total Bags"]
sbolsas = atlanta["Small Bags"]
lbolsas = atlanta["Large Bags"]
xbolsas = atlanta["XLarge Bags"]

plt.subplot(221) ## 2 filas 2 columna 1 figura
plt.title("Precio Aguacate")
plt.plot(precio,label="Precio",color="green")
plt.plot(precioPromediado,label="Precio Promediado",color="orange")
plt.legend()

plt.subplot(222)
plt.title("Volumen de aguacates") 
plt.plot(volumen,label ="Volumen total", color ="red")
plt.legend()

plt.subplot(223)
plt.title("Bolsas totatel de aguacates") 
plt.plot(bolsasAguacate,label ="Bolsas Totales", color ="blue")
plt.legend()

plt.subplot(224)
plt.title("Bolsas por tamaño") 
plt.plot(sbolsas,label ="Bolsas pequeñas", color ="black")
plt.plot(lbolsas,label ="Bolsas grandes", color ="cyan")
plt.plot(xbolsas,label ="Bolsas extra grandes", color ="yellow")
plt.legend()

plt.tight_layout()  ## para no suporponer
plt.show()

