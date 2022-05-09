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
