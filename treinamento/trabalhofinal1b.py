# pip install pandas numpy matplotlib seaborn scikit-learn tensorflow keras flask flask-cors

import pandas as pd
from keras.models import Sequential
from keras.layers import Dense
from keras.utils import to_categorical
from sklearn.preprocessing import LabelEncoder
import pickle

# carregar dataset
dataset = pd.read_csv("./datasets/student_mental_health_burnout.csv")

# remover coluna inútil
dataset = dataset.drop('student_id', axis=1)

# LABEL ENCODING
labelencoder = LabelEncoder()
dataset['year'] = labelencoder.fit_transform(dataset['year'])
dataset['stress_level'] = labelencoder.fit_transform(dataset['stress_level'])
dataset['sleep_quality'] = labelencoder.fit_transform(dataset['sleep_quality'])
dataset['internet_quality'] = labelencoder.fit_transform(dataset['internet_quality'])
dataset['burnout_level'] = labelencoder.fit_transform(dataset['burnout_level'])

# ONE HOT
dataset = pd.get_dummies(dataset, columns=['gender'])
dataset = pd.get_dummies(dataset, columns=['course'])

# separar entrada e saída
X = dataset.drop("burnout_level", axis=1)
y = dataset["burnout_level"]

# salvar colunas
colunas = X.columns
pickle.dump(colunas, open("colunas.pkl", "wb"))

# transformar saída
y = to_categorical(y)

# modelo
mlp = Sequential()
mlp.add(Dense(units=12, input_dim=X.shape[1], activation='relu'))
mlp.add(Dense(units=8, activation='relu'))
mlp.add(Dense(units=y.shape[1], activation='softmax'))

mlp.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# treino
mlp.fit(X, y, epochs=200, batch_size=16)

# salvar modelo
mlp.save("modelo.h5")

print("Modelo treinado e salvo!")