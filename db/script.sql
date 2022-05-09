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
  "categoria" VARCHAR(100),
  "capa" VARCHAR(100),
  "likes" INT
);

CREATE TABLE "videos" (
  "id" INT PRIMARY KEY NOT NULL,
  "url" VARCHAR(10) NOT NULL,
  "nome" VARCHAR(100),
  "id_trilha" INT,
  "likes" INT
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

CREATE TABLE "favoritos" (
  "id" INT PRIMARY KEY NOT NULL,
  "id_trilha" int NOT NULL,
  "id_usuario" int NOT NULL
);

ALTER TABLE "comentarios" 
  ADD FOREIGN KEY ("id_usuario") 
  REFERENCES "usuarios" ("id") 
  ON DELETE CASCADE;

ALTER TABLE "denuncias" 
  ADD FOREIGN KEY ("id_trilha") 
  REFERENCES "trilhas" ("id") 
  ON DELETE CASCADE;

ALTER TABLE "trilhas" 
  ADD FOREIGN KEY ("owner") 
  REFERENCES "usuarios" ("id") 
  ON DELETE CASCADE;

ALTER TABLE "videos" 
  ADD FOREIGN KEY ("id_trilha") 
  REFERENCES "trilhas" ("id") 
  ON DELETE CASCADE;

ALTER TABLE "comentarios" 
  ADD FOREIGN KEY ("id_trilha") 
  REFERENCES "trilhas" ("id") 
  ON DELETE CASCADE;

ALTER TABLE "favoritos" 
  ADD FOREIGN KEY ("id_trilha") 
  REFERENCES "trilhas" ("id") 
  ON DELETE CASCADE;

