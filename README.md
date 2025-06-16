
O objetivo principal é dar ao usuário **uma visão clara dos gastos fixos mensais** e das **datas de renovação**.

✅ Funcionalidades
------------------

- 📊 **Tela Inicial**: mostra o gasto total estimado e as próximas assinaturas a vencer.
- ➕ **Adicionar Assinatura**: formulário com campos obrigatórios (nome, valor, data, categoria).
- 📄 **Lista Completa**: lista todas as assinaturas com opções para **editar ou excluir**.
- 🔄 Atualizações em tempo real (integração com Firebase Firestore).

🛠️ Tecnologias Utilizadas
--------------------------

- **React Native (Expo)**
- **Firebase Firestore** (banco de dados em tempo real)
- **React Navigation** (navegação entre telas)
- **Styled Components / StyleSheet**
- Ícones com **@expo/vector-icons**

🚀 Como rodar o projeto
-----------------------

1. Clone o repositório:

   git clone https://github.com/GabrielPaivaM/pdmApp.git
   cd pdmApp

2. Instale as dependências:

   npm install

3. Configure o Firebase:

  Coloque as credenciais

4. Inicie o projeto:

   npx expo start

   Abra o aplicativo com:
   - 📱 **Expo Go** no seu celular (Android/iOS) escaneando o QR Code;
   - Ou em um **emulador Android** (Android Studio).

📂 Estrutura do Projeto
-----------------------

src/
├── screens/
│   ├── HomeScreen.js
│   ├── AddSubscriptionScreen.js
│   └── SubscriptionListScreen.js
├── firebaseConfig.js
├── styles.js

✍️ Autor
--------

Rogeres Gabriel Paiva Matos - 2312130168 
https://github.com/GabrielPaivaM
