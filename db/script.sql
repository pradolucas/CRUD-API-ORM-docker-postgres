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
  "banned" boolean
);

CREATE TABLE "trilhas" (
  "id" INT PRIMARY KEY NOT NULL,
  "owner" INT NOT NULL,
  "nome" VARCHAR(100),
  "comentarios" VARCHAR(200),
  "categoria" VARCHAR(100),
  "fk_id_video" INT
);

CREATE TABLE "videos" (
  "id" INT PRIMARY KEY NOT NULL,
  "nome" VARCHAR(100),
  "url" VARCHAR(10)
);

CREATE TABLE "comentarios" (
  "id" INT PRIMARY KEY NOT NULL,
  "conteúdo" VARCHAR(200),
  "fk_usuário" int
);

CREATE TABLE "denuncia" (
  "id" INT PRIMARY KEY NOT NULL,
  "razão" VARCHAR(200),
  "fk_trilha" int
);

ALTER TABLE "comentarios" ADD FOREIGN KEY ("fk_usuário") REFERENCES "usuarios" ("id");

ALTER TABLE "denuncia" ADD FOREIGN KEY ("fk_trilha") REFERENCES "trilhas" ("id");

ALTER TABLE "trilhas" ADD FOREIGN KEY ("fk_id_video") REFERENCES "videos" ("id");

ALTER TABLE "trilhas" ADD FOREIGN KEY ("owner") REFERENCES "usuarios" ("id");

INSERT INTO usuarios(id, nome, email, senha, ehadmin, blocked, banned) VALUES(1, 'Lucas', 'lucas@gmail.com', 'abacate', true, false , false);
INSERT INTO usuarios(id, nome, email, senha, ehadmin, blocked, banned) VALUES(2, 'Jesus', 'jesus@hotmail.com', 'pepino', false, true, false);
