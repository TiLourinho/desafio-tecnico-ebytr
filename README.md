<p align="center" width="20%">
  <img src="https://github.com/TiLourinho/desafio-tecnico-ebytr/blob/main/client/src/images/ebytr-logo.png" alt="Ebytr logo">
</p>

<h1 align="center">Gerenciador de Tarefas Ebytr</h1>

Um Gerenciador de Tarefas foi desenvolvido para a empresa Ebytr, para auxiliar as pessoas colaboradoras a se organizarem melhor e terem mais produtividade.

<h4 align="center">Em construção!!!</h4>

## Funcionalidades

- Visualizar a lista de tarefas que pode ser ordenada alfabeticamente, por data de criação ou por status;
- Inserir uma nova tarefa na lista;
- Remover uma tarefa da lista;
- Editar uma tarefa da lista;
- Mudar o status da tarefa, que por padrão é _pendente_, para _em andamento_ ou _pronto_.

## Demonstração

A aplicação está disponível neste link:
[Gerenciador de Tarefas](https://dp-ebytr-client.herokuapp.com/)

<p align="center width="40%">
  <img src="https://github.com/TiLourinho/desafio-tecnico-ebytr/blob/main/client/src/images/ebytr-01.png" alt="Gerenciador de Tarefas sem tarefas registradas">
</p>
<p align="center width="40%">
  <img src="https://github.com/TiLourinho/desafio-tecnico-ebytr/blob/main/client/src/images/ebytr-02.png" alt="Gerenciador de Tarefas com algumas tarefas registradas">
</p>

## Como executar o projeto

O projeto é dividido em duas partes:

1. Backend (pasta **server**);
2. Frontend (pasta **client**).

### Pré-requisitos

Para rodar o projeto em sua máquina, você precisa ter instalado as seguintes ferramentas: [Docker](https://docs.docker.com/get-docker/), [MySQL](https://dev.mysql.com/downloads/mysql/) e preferencialmente o [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).
Além disso é aconselhável ter um editor, para manipular o código, como o [VSCode](https://code.visualstudio.com/download).

#### Rodando a aplicação

##### Backend

```bash
# Clone este repositório
$ git@github.com:TiLourinho/desafio-tecnico-ebytr.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd desafio-tecnico-ebytr

# Vá para a pasta da aplicação Backend
$ cd server

# Instale as dependências
$ npm install

# Volte à pasta raiz
$ cd ..
```

##### Frontend

```bash
# Vá para a pasta da aplicação Frontend
$ cd client

# Instale as dependências
$ npm install

# Volte à pasta raiz
$ cd ..
```

##### Docker

```bash
# Para iniciar o Docker e rodar tanto o Backend quanto o Frontend, use o seguinte comando
$ docker-compose up --build -d

# Para parar o Docker, use
$ docker-compose stop
```

##### MySQL Workbench

```bash
# Com o MySQL instalado agora é preciso manipular
$ docker-compose up --build -d

# Para parar o Docker, use
$ docker-compose stop
```

## Requisitos Técnicos

- Front-End: **React**;
- Back-End: **NodeJS** e **MySQL** com arquitetura **MSC**.


