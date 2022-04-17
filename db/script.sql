DROP DATABASE IF EXISTS engsoft;
CREATE DATABASE engsoft;
\c engsoft;

CREATE TABLE "usuarios" (
  "id" INT PRIMARY KEY NOT NULL,
  "nome" VARCHAR(100),
  "email" VARCHAR(100),
  "senha" VARCHAR(100),
  "ehadmin" boolean,
  "blocked" boolean,
  "baned" boolean
);

CREATE TABLE "trilhas" (
  "id" INT PRIMARY KEY NOT NULL,
  "owner" INT NOT NULL,
  "nome" VARCHAR(100),
  "comentarios" VARCHAR(200),
  "categoria" VARCHAR(100)
);

CREATE TABLE "videos" (
  "id" INT PRIMARY KEY NOT NULL,
  "url" VARCHAR(10) NOT NULL,
  "nome" VARCHAR(100),
  "id_trilha" INT
);

CREATE TABLE "comentarios" (
  "id" INT PRIMARY KEY NOT NULL,
  "conteudo" VARCHAR(200),
  "id_usuario" INT NOT NULL,
  "id_trilha" INT
);

CREATE TABLE "denuncia" (
  "id" INT PRIMARY KEY NOT NULL,
  "razao" VARCHAR(200),
  "id_trilha" int NOT NULL
);

ALTER TABLE "comentarios" ADD FOREIGN KEY ("id_usuario") REFERENCES "usuarios" ("id");

ALTER TABLE "denuncia" ADD FOREIGN KEY ("id_trilha") REFERENCES "trilhas" ("id");

ALTER TABLE "trilhas" ADD FOREIGN KEY ("owner") REFERENCES "usuarios" ("id");

ALTER TABLE "videos" ADD FOREIGN KEY ("id_trilha") REFERENCES "trilhas" ("id");

ALTER TABLE "comentarios" ADD FOREIGN KEY ("id_trilha") REFERENCES "trilhas" ("id");

INSERT INTO usuarios(id, nome, email, senha, ehadmin, blocked, banned) VALUES(1, 'Lucas', 'lucas@gmail.com', 'abacate', true, false , false);
INSERT INTO usuarios(id, nome, email, senha, ehadmin, blocked, banned) VALUES(2, 'Jesus', 'jesus@hotmail.com', 'pepino', false, true, false);

