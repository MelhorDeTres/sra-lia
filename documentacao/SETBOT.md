## :computer: Rode em sua máquina:

<h3 align="center"> :game_die: Primeiro, instâncie seu Bot na Discord: </h3>

01. Acesse o site da [Discord](https://discord.com/developers);

02. Efetue o Login e em seguida clique em 'New Application', situado no canto superior direito;

<img width="360" height="220" src="/.github/prints/token1.png">

03. Dê um nome para o Projeto/Bot e selecione 'Create';

04. Clique na aba 'Bot', situada no lado esquerdo;

05. Clique em 'Add Bot' e aceite os termos;

<img width="360" height="220" src="/.github/prints/token2.png">

06. Ainda na aba 'Bot', clique com 'Click to Reveal Token', selecione e copie o Token. Ou simplesmente, clique em 'Copy';

<img width="360" height="220" src="/.github/prints/token3.png">

07. Na raiz do projeto, crie um arquivo 'config.json' e substitua o #### pelo Token.

<img width="360" height="220" src="/.github/prints/token4.png">

<br>

<h3 align="center"> :floppy_disk: A seguir, crie um Banco de Dados na MongoDB: </h3>

01. Acesse o site da [MongoDB](https://www.mongodb.com);

02. Crie uma conta e efetue o Login;

02.1. Caso você esteja nessa Página, selecione 'Create an Organization', escolha um nome para sua organização, selecione 'Next' e 'Create Organization';

<img width="360" height="220" src="/.github/prints/bd1.png">

02.2. Faça o mesmo procedimento com Projeto. Selecione 'New Project', escolha um nome para seu projeto, selecione 'Next' e 'Create Project';

<img width="360" height="220" src="/.github/prints/bd2.png">

03. Na aba 'Clusters', clique em 'Create a New Cluster';

<img width="360" height="220" src="/.github/prints/bd3.png">

03.1. escolha a opção Shared Clusters (Free) e, sem alterar nenhuma configuração, selecione 'Create Cluster';

<img width="360" height="220" src="/.github/prints/bd4.png">

04. Na aba 'Database Access', selecione 'Add new User' e crie uma conta, com usuário, senha e permissão 'Read and white to any database';

<img width="360" height="220" src="/.github/prints/bd5.png">

05. Na aba 'Network Acess', selecione 'Add IP Adress', clique em 'Allow acess from anywhere' e confirme;

<img width="360" height="220" src="/.github/prints/bd6.png">

06. Vá para aba 'Cluters' e espere o Cluster ser criado;

<img width="360" height="220" src="/.github/prints/bd7.png">

06.1 Quando carregado, clique em 'connect', selecione 'Conect your application', escolha 'Node.js' e a versão mais recente dos Drivers (Não feche a janela);

<img width="360" height="220" src="/.github/prints/bd9.png">

07. Ainda na mesma janala, no tópico 'Connection String Only', copie a string de conexão, clicando em 'Copy' (Agora pode fechar);

<img width="360" height="220" src="/.github/prints/bd10.png">

08. Antes de conectar o BD em sua aplicação, vamos cria-lo. Clique em 'Collections' e em seguida 'Add My Owm Data;

<img width="360" height="220" src="/.github/prints/bd11.png">

08.1. Escolha um nome para o Banco de Dados (você precisará desse nome no próximo passo) e um nome de tabela (members, por exemplo);

<img width="360" height="220" src="/.github/prints/bd12.png">

09. Acesse o arquivo 'config.json' e substitua o ## por essa string de conexão;

<img width="360" height="220" src="/.github/prints/bd13.png">

10. Na 'string de conexão', caso exista algum \<username>, \<password> ou \<dbname>, substitua pelo nome de usuário, senha ou nome do BD, criado no passo 4 e 8;

<br>

<h3 align="center"> :zap: Por fim, instale as dependências e rode o projeto: </h3>

```bash
# Acessando a pasta raiz do projeto, através do terminal, instale as dependências usando:
$ npm install
# Para rodar o projeto e ligar o Bot, utilize:
$ node .
```
