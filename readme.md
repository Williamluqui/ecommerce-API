




<h4 align="center"> 
	   👨‍💻 Ecommerce de API Rest  🚀 
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
</p>


## 💻 Sobre o projeto

API rest de ecommerce , projeto ainda sem validações de dados porém já quanse finalizado.

---
## ⚙️ Funcionalidades

- [x] Login para validação de usuário.
- [x] Listar Usuários.
- [x] Realizar login.
- [x] Criar Produtos.
- [x] Buscar produto do usuário.
- [x] Atualizar Produto.
- [x] remover Produtos.
- [x] Listar Produtos.

## ⚙️ Rotas
```bash

# GET
-  /users
- /users/:user_id

/products/product_id

# POST
- /carts/:user_id
- /products/:user_id

# PATCH
- /products/:user_id/:product_id

# DEL
- /products/:user_id/:product_id

```
---
```bash
# POST
- /carts/:user_id

{
    "products":["product_id","product_id"],
    "address":{
        "street":"Rua vitoria",
        "number":"555",
        "city":"cidade"
    },
    "payment":{
        "card":{
            "number":"555 555 555 555",
            "cvv": "111"
        }
    }
}
```

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone  https://github.com/Williamluqui/ecommerce-API.git


# Instale as dependências
$ npm install

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash
# Abra o navegador :

# Digite e Rode na porta escolhida http://localhost:8080/


```
## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

+ Node Express
+ dotEnv

## 🔐 Seguranças
+ Middleware


> Veja o arquivo  [package.json](https://github.com/Williamluqui/ecommerce-API/blob/main/package.json)

#### [](https://github.com/Williamluqui/ecommerce-API.git)**Server**  ([NodeJS](https://nodejs.org/en/)  )

-   **[Express](https://expressjs.com/)**








---

## 👨‍💻 
