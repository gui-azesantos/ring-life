
# Ring Life | Conectando pessoas pelo bem do planeta

  

Bem-vindo à Plataforma de Integração para o Bem Comum! Esta é uma aplicação desenvolvida para promover a integração de pessoas em prol do bem comum, permitindo que os usuários registrem suas atividades diárias relacionadas aos princípios ambientais, sociais e de governança (ESG) e compartilhem-nas com outros, contribuindo para um mundo melhor.

  

## Arquitetura da Aplicação

  

A arquitetura da nossa aplicação é composta por uma plataforma web desenvolvida com Next.js, que utiliza o banco de dados SQLite para armazenamento de dados.

  

### Plataforma Web (Next.js)

  

A plataforma web é desenvolvida utilizando o framework Next.js, que permite a criação de aplicações web modernas com renderização do lado do servidor (SSR) e geração de páginas estáticas. Esta escolha proporciona uma experiência de desenvolvimento mais rápida e eficiente, além de uma melhor performance da aplicação.

  

### Tecnologias Utilizadas

  

-  **Next.js:** Framework de desenvolvimento web baseado em React, que oferece SSR e geração de páginas estáticas.

-  **React:** Biblioteca JavaScript para construção de interfaces de usuário.

-  **Vercel Postgresql:** Banco de dados relacional leve e eficiente, perfeito para aplicações web de menor escala.

  

## Componentes

  

-  **Front-end:** Desenvolvido com React e estilizado utilizando CSS e possivelmente bibliotecas como Tailwind CSS ou Styled Components.

-  **Back-end:** Utilizando as funcionalidades de API routes do Next.js para criar endpoints que interagem com o banco de dados SQLite.

-  **Banco de Dados:** Vercel Postgresql, que armazenará informações essenciais para a plataforma, como perfis de usuários, postagens, comentários e votos.

  

## Como Executar Localmente

  

Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

  

### Iniciando o Servidor de Desenvolvimento

  

Primeiro, execute o servidor de desenvolvimento:

  

```bash

npm  run  dev

# ou

yarn  dev

# ou

pnpm  dev

# ou

bun  dev

  
Abra  http://localhost:3000  em  seu  navegador  para  ver  o  resultado.