# Boilerplate MVC em Node.js com PostgreSQL

Este projeto é um boilerplate básico para uma aplicação Node.js seguindo o padrão MVC (Model-View-Controller), utilizando PostgreSQL como banco de dados.

## Requisitos

- Node.js (versão X.X.X)
- PostgreSQL (versão X.X.X)

## Instalação

1. **Clonar o repositório:**

```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
```

2. **Instalar as dependências:**
    
```bash
npm install
```
    
3. **Configurar o arquivo `.env`:**
    
Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, como as configurações do banco de dados PostgreSQL.
    

Configuração do Banco de Dados
------------------------------

1. **Criar banco de dados:**
    
    Crie um banco de dados PostgreSQL com o nome especificado no seu arquivo `.env`.
    
2. **Executar o script SQL de inicialização:**
    
```bash
npm run init-db
```
    
Isso criará a tabela `users` no seu banco de dados PostgreSQL com UUID como chave primária e inserirá alguns registros de exemplo.
    

Funcionalidades
---------------

* **Padrão MVC:** Estrutura organizada em Model, View e Controller.
* **PostgreSQL:** Banco de dados relacional utilizado para persistência dos dados.
* **UUID:** Utilização de UUID como chave primária na tabela `users`.
* **Scripts com `nodemon`:** Utilização do `nodemon` para reiniciar automaticamente o servidor após alterações no código.
* **Testes:** Inclui estrutura básica para testes automatizados.

Scripts Disponíveis
-------------------

* `npm start`: Inicia o servidor Node.js.
* `npm run dev`: Inicia o servidor com `nodemon`, reiniciando automaticamente após alterações no código.
* `npm run test`: Executa os testes automatizados.
* `npm run test:coverage`: Executa os testes e gera um relatório de cobertura de código.

Estrutura de Diretórios
-----------------------

* **`config/`**: Configurações do banco de dados e outras configurações do projeto.
* **`controllers/`**: Controladores da aplicação (lógica de negócio).
* **`models/`**: Modelos da aplicação (definições de dados e interações com o banco de dados).
* **`routes/`**: Rotas da aplicação.
* **`tests/`**: Testes automatizados.
* **`views/`**: Views da aplicação (se aplicável).

Contribuição
------------

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

Perguntas aula 6

1. Explique com suas palavras o papel de cada camada da arquitetura MVC usada neste projeto.
Como o Model, o Controller e a View interagem entre si?

Resposta:
 
Model: Gerencia dados e lógica de negócios, mantém o estado da aplicação e interage com o banco de dados, sem conhecimento direto da View ou Controller.

View: Apresenta a interface ao usuário, renderiza dados e coleta entradas, mas não contém lógica de negócios nem acessa o banco de dados diretamente.

Controller: Atua como intermediário, recebe requisições do usuário através da View, processa-as interagindo com o Model quando necessário, e seleciona a View apropriada para exibir os resultados.

Interação: O fluxo típico começa com o usuário interagindo com a View, que envia a ação ao Controller, que consulta/atualiza o Model, e então seleciona/atualiza a View apropriada para mostrar ao usuário.

2. Como ocorre o envio e o recebimento de dados no formato JSON neste projeto?
Cite uma rota que responde em JSON e explique seu funcionamento.

Resposta:
O envio e recebimento de dados no formato JSON ocorre através de requisições HTTP, onde o cliente envia dados em JSON no corpo da requisição e o servidor responde com dados em JSON.
No projeto, uma rota que responde em JSON é a rota `GET /user`. Quando essa rota é acessada, o Controller correspondente consulta o Model para obter a lista de usuários do banco de dados e retorna essa lista em formato JSON como resposta. O cliente pode então processar essa resposta JSON conforme necessário.

3. Qual a importância de usar HTML básico com formulários e tabelas para organizar e manipular dados no navegador?
Por que esse tipo de estrutura ainda é útil em projetos back-end com Node.js?

Resposta:
O uso de HTML básico com formulários e tabelas é importante porque fornece uma interface simples e intuitiva para os usuários interagirem com os dados. Formulários permitem a entrada de dados, enquanto tabelas organizam e exibem informações de maneira clara.
Esse tipo de estrutura é útil em projetos back-end com Node.js porque facilita a manipulação e visualização de dados, mesmo em aplicações que utilizam frameworks modernos. Além disso, HTML básico é leve e rápido de carregar, tornando-o ideal para protótipos e aplicações simples.


Licença
-------

Este projeto está licenciado sob a Licença MIT.

Este README.md fornece uma visão geral clara do boilerplate, incluindo instruções de instalação, configuração do banco de dados, funcionalidades principais, scripts disponíveis, estrutura de diretórios, como contribuir e informações de licença. Certifique-se de personalizar as seções com detalhes específicos do seu projeto conforme necessário.