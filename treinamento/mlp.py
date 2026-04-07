import pandas as pd
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense, Dropout
from keras.utils import to_categorical
from sklearn.preprocessing import LabelEncoder
import matplotlib.pyplot as plt
import seaborn as sns

# Load the dataset
dataset = pd.read_csv("dataset/student_mental_health_burnout.csv")

base_teste = pd.read_csv("base_teste.csv")
base_treinamento = pd.read_csv("base_treinamento.csv")

#separar os dados de saída
base_teste
base_treinamento
atributos_teste = base_teste.drop("classe", axis=1)
classes_teste = base_teste["classe"]

atributos_treinamento = base_treinamento.drop("classe", axis=1)
classes_treinamento = base_treinamento["classe"]

#usar o LabelEncoder para transforma as classes em valores numéricos
classes_teste_numeral = LabelEncoder().fit_transform(classes_teste)
classes_treinamento_numeral = LabelEncoder().fit_transform(classes_treinamento)

#one hot encoding
classe_teste_dummy = to_categorical(classes_teste_numeral)
classe_treinamento_dummy = to_categorical(classes_treinamento_numeral)

mlp = Sequential()
mlp.add(Dense(units=6, input_dim=6, activation='relu', kernel_initializer='random_uniform'))
mlp.add(Dense(units=4, activation='relu', kernel_initializer='random_uniform'))
#softmax: para classificação multi-classe
mlp.add(Dense(units=5, activation='softmax', kernel_initializer='random_uniform'))

mlp.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['categorical_accuracy'])

mlp.fit(atributos_treinamento, classe_treinamento_dummy, epochs=200, batch_size=16)

resultados = mlp.evaluate(atributos_teste, classe_teste_dummy)
resultados

#passa os dados de teste pelo modelo MLP já treinado e calcula as saídas da camada final para cada amostra
#retorna as probabilidades de ser cada classe para cada linha de teste
respostas = mlp.predict(atributos_teste)
respostas

loss, acc = mlp.evaluate(atributos_teste, classe_teste_dummy, verbose=0)
print(f"Loss no teste: {loss:.4f}")
print(f"Acurácia no teste: {acc*100:.2f}%")

import numpy as np
previsoes = [np.argmax(t) for t in respostas]
classes_desejadas = [np.argmax(t) for t in classe_teste_dummy]

from sklearn.metrics import confusion_matrix
mc = confusion_matrix(classes_desejadas, previsoes)
mc

plt.figure(figsize=(8, 6))
sns.heatmap(mc, annot=True, fmt='d', cmap='Blues', 
            xticklabels=label_encoder.classes_, 
            yticklabels=label_encoder.classes_)
plt.xlabel('Previsão')
plt.ylabel('Real')
plt.title('Matriz de Confusão')
plt.show()