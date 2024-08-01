import pandas as pd
import numpy as np

df = pd.read_csv("../Data/dataset_1.csv",index_col=0)


# Categorizacion
set_gen= set(df["Género"].to_list())
set_edu= set(df["Nivel_Educación"].to_list())
set_ciu= set(df["Ciudad"].to_list())

#print(set_gen)
#print(set_edu)
#print(set_ciu)

# Tratamiento de valores negativos
df["Edad"]= df["Edad"].apply(lambda x: np.nan if x < 0 else x)
df["Ingresos"] = df["Ingresos"].apply(lambda x : np.nan if x < 0 else x)
df ["Hijos"] = df ["Hijos"].apply(lambda x : np.nan if x<0 else x)

# imputar valores faltantes 
for column in ["Edad","Ingresos","Hijos"]:
    median_values = df[column].median()
    #df[column].fillna(median_values,inplace=True)
    df.fillna({column : median_values}, inplace=True)
    
for column in ["Género","Ciudad"] :
    mode_value = df[column].mode()[0]
   # df[column].fillna(mode_value,inplace=True)
    df.fillna({column : mode_value}, inplace=True)
   
    
 # mapeo de datos
education_mapping = {
    "Bachelors" : "Bachelor",
    "mastre" : "Master",
    "pHD" : "PhD",
    "no education" :"None"
 }
    
#df["Nivel_Educación"].replace(education_mapping, inplace= True)
df.replace({"Nivel_Educación": education_mapping}, inplace=True)
#df["Nivel_Educación"].fillna("NE", inplace=True)
df.fillna({"Nivel_Educación": "NE"}, inplace=True)

# Casteo de tipos
df["Edad"] = df["Edad"].astype(int)
df["Hijos"] = df["Hijos"].astype(int)
df["Ingresos"] = df["Ingresos"].astype(float)
df["Altura"] = df ["Altura"].astype(float)

print (df)
# Informacion general de los datos
print (df.describe())
print (df.info())