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

INSERT INTO usuarios(id, nome, email, senha, ehadmin, blocked, banned) VALUES(1, 'Lucas', 'lucas@gmail.com', 'abacate', true, false , false);
INSERT INTO usuarios(id, nome, email, senha, ehadmin, blocked, banned) VALUES(2, 'Jesus', 'jesus@hotmail.com', 'pepino', false, true, false);

INSERT INTO trilhas(id, owner, nome, descricao, categoria) VALUES(1, 1, 'Teoria dos Grafos', 'Trilha de estudos para a matéria Teoria dos Grafos', 'Ciência da computação');
INSERT INTO trilhas(id, owner, nome, descricao, categoria) VALUES(2, 2, 'Sistemas Operacionais', 'Trilha de estudos para a matéria Sistemas Operacionais', 'Ciência da computação');

INSERT INTO comentarios(id, conteudo, id_usuario, id_trilha) VALUES (1, 'Trilha ruim. Assunto não contempla todos os pontos da matéria', 2, 1);
INSERT INTO comentarios(id, conteudo, id_usuario, id_trilha) VALUES (2, 'Trilha show!!!', 1, 1);

INSERT INTO videos(id, nome, url, id_trilha) VALUES (1, 'Árvores', 'https://www.youtube.com/watch?v=flyK0iVIHgI', 1);
INSERT INTO videos(id, nome, url, id_trilha) VALUES (2, 'Compiladores', 'https://www.youtube.com/watch?v=gxlxHYv-9oo&list=RDCMUCOTem2Sh4zOU3jaeE4HzJcQ&index=6', 2);

INSERT INTO denuncias(id, razao, id_trilha) VALUES (1, 'Videos não relacionados ao tema da trilha', 2);
INSERT INTO denuncias(id, razao, id_trilha) VALUES (2, 'Trilha com conteúdo impróprio', 1);
