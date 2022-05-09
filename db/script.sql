DROP DATABASE IF EXISTS engsoft;
CREATE DATABASE engsoft;
\c engsoft;

CREATE TABLE "usuarios" (
  "id" INT PRIMARY KEY NOT NULL,
  "nome" VARCHAR(100) NOT NULL,
  "email" VARCHAR(100) NOT NULL,
  "senha" VARCHAR(300) NOT NULL,
  "ehadmin" boolean NOT NULL,
  "blocked" boolean,
  "banned" boolean
);

CREATE TABLE "trilhas" (
  "id" INT PRIMARY KEY NOT NULL,
  "owner" INT NOT NULL,
  "nome" VARCHAR(100),
  "descricao" VARCHAR(200),
  "categoria" VARCHAR(100),
  "capa" VARCHAR(100)
);

CREATE TABLE "videos" (
  "id" INT PRIMARY KEY NOT NULL,
  "url" VARCHAR(100) NOT NULL,
  "nome" VARCHAR(100),
  "id_trilha" INT
);

CREATE TABLE "comentarios" (
  "id" INT PRIMARY KEY NOT NULL,
  "conteudo" VARCHAR(200),
  "id_usuario" INT NOT NULL,
  "id_trilha" INT NOT NULL
);

CREATE TABLE "denuncias" (
  "id" INT PRIMARY KEY NOT NULL,
  "razao" VARCHAR(200),
  "id_trilha" int NOT NULL
);

ALTER TABLE "comentarios" ADD FOREIGN KEY ("id_usuario") REFERENCES "usuarios" ("id");

ALTER TABLE "denuncias" ADD FOREIGN KEY ("id_trilha") REFERENCES "trilhas" ("id");

ALTER TABLE "trilhas" ADD FOREIGN KEY ("owner") REFERENCES "usuarios" ("id");

ALTER TABLE "videos" ADD FOREIGN KEY ("id_trilha") REFERENCES "trilhas" ("id");

ALTER TABLE "comentarios" ADD FOREIGN KEY ("id_trilha") REFERENCES "trilhas" ("id");
