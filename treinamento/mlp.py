import pandas as pd
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense, Dropout
from keras.utils import to_categorical
from sklearn.preprocessing import LabelEncoder
import matplotlib.pyplot as plt
import seaborn as sns

# Load the dataset
dataset = pd.read_csv("./datasets/student_mental_health_burnout.csv")

dataset.shape

dataset.isnull().sum()

dataset=dataset.drop('student_id',axis=1)

dataset['burnout_level'].value_counts()

labelencoder = LabelEncoder()
dataset['year'] = labelencoder.fit_transform(dataset['year'])
dataset['stress_level'] = labelencoder.fit_transform(dataset['stress_level'])
dataset['sleep_quality'] = labelencoder.fit_transform(dataset['sleep_quality'])
dataset['internet_quality'] = labelencoder.fit_transform(dataset['internet_quality'])

classes = dataset['burnout_level']
dataset = dataset.drop('burnout_level',axis=1)

classes.head( )

dataset.head(10)

dataset['course'].value_counts()

dataset.shape

#One hot Encoding automatico junto com label encoder: É uma forma mais moderna de fazer e evita erros ela pega a coluna exemplo gender cria as colunas gender_Female	gender_Male	gender_Other
dataset = pd.get_dummies(dataset, columns=['gender'],dtype=int)# mais 3 colunas
dataset = pd.get_dummies(dataset, columns=['course'],dtype=int)# mais 5 colunas
classes = pd.get_dummies(classes, columns=['burnout_level'],dtype=int)# mais 2 colunas

dataset.shape

dataset.head(10)

x_treino, x_teste, y_treino, y_teste = train_test_split(dataset, classes, test_size=0.3)

mlp = Sequential()
mlp.add(Dense(units=11, input_dim = 784, activation= 'relu', kernel_initializer= 'random_uniform'))
mlp.add(Dropout(0.2))
mlp.add(Dense(units=6,  activation= 'relu', kernel_initializer= 'random_uniform'))
mlp.add(Dropout(0.2))
mlp.add(Dense(units=3, activation= 'softmax', kernel_initializer= 'random_uniform'))

mlp.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['categorical_accuracy'])

historico = mlp.fit(atributos_train, classe_dummy_train, epochs = 10, batch_size = 16)

respostas = mlp.predict(atributos_test)
respostas

previsoes = [np.argmax(t) for t in respostas]
classes_desejadas = [np.argmax(t) for t in classe_dummy_test]
previsoes[0:5]

classes_desejadas[0:5]

val_loss, val_acc = mlp.evaluate(atributos_test, classe_dummy_test, verbose=0)

print("RESULTADOS TREINO")
acc_media = np.mean(historico.history['categorical_accuracy'])
loss_media = np.mean(historico.history['loss'])
print(f"Acurácia média: {acc_media:.4f}")
print(f"Erro médio: {loss_media:.4f}")
print(f"{'='*50}")
print(f"{'='*50}")

print(f"RESULTADOS PREDICT")
print(f"Acurácia: {val_acc:.4f}")
print(f"Erro {val_loss:.4f}")