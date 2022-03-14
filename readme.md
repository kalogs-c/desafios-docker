# Desafios Docker

## Desafio 1

Criar uma imagem docker com um print usando Golang (A imagem deve ter menos de 2mb)

- Como rodar  
   Buildar a imagem usando o Docker file  
  `docker build -t carlinhoscamilo/desafiogo ./golang`

- Como testar  
   Rodar a imagem usando o Docker run  
   `docker run carlinhoscamilo/desafiogo`
   
Link do repositório no Docker Hub -> https://hub.docker.com/repository/docker/carlinhoscamilo/desafiogo


## Desafio 2

App Node.js com banco de dados MySql, usando proxy reverso nginx.

- Como rodar  
   Usando o docker compose 
  `docker-compose up -d --build`