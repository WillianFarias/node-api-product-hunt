# Api note - buscador JS

Api node desenvolvida para ser consumida pela aplicação ReactJS hunt-web

## Tecnologias utilizadas

- [Docker](https://www.docker.com/)
- [npm](https://www.npmjs.com/) 
- [MongoDB](https://cloud.google.com/mongodb?utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-SKWS-all-all-trial-e-dr-1009133-LUAC0009046&utm_content=text-ad-none-any-DEV_c-CRE_423672515938-ADGP_SKWS+%7C+Multi+~+Developers+%7C+MongoDB-KWID_43700055943681296-kwd-301816601719&utm_term=KW_mongodb-ST_MongoDB&gclid=Cj0KCQiAnb79BRDgARIsAOVbhRr4ImsZgwnGpXGGLJhU-A2Gi5EcUn7hqbG3r2b_1vTffIXmkAA52MAaAsXAEALw_wcB&gclsrc=aw.ds)

## Uso
Clone
```bash
$ git clone https://github.com/WillianFarias/node-api-product-hunt.git
```
Docker
```bash
$ docker pull mongo
$ docker run --name mongodb -p 27017:27017 -d mongo
$ docker start mongodb
```

Executando
```bash
node server.js
npm run dev
```
