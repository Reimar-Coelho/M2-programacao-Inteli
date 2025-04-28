CREATE TABLE alunos (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  turma TEXT NOT NULL,
  curso TEXT NOT NULL,
  data_nascimento DATE
);

CREATE TABLE cursos (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  duracao_anos INT
);

CREATE TABLE matriculas (
  id SERIAL PRIMARY KEY,
  aluno_id INT REFERENCES alunos(id) ON DELETE CASCADE,
  curso_id INT REFERENCES cursos(id) ON DELETE CASCADE,
  data_matricula DATE DEFAULT CURRENT_DATE
);

INSERT INTO alunos (nome, turma, curso, data_nascimento)
VALUES ('Reimar Coelho', '2B', 'Engenharia de programação', '2001-08-15'),
       ('Guilherme Smurf', '1A', 'Letras', '2002-11-22'),
       ('Breno Silva', '3C', 'Engenharia alimentícia', '2000-03-09'),
       ('Fantasmagórico', '2A', 'Ciência asmática', '2001-06-17'),
       ('Sarah Duarte', '1B', 'Ciência da computação', '2002-02-25'),
       ('Isabela Picanha', '3A', 'Engenharia de programação', '1999-12-30'),
       ('Luana de Jesus', '2C', 'Letras', '2001-09-04'),
       ('Amanda Ribeiro', '1C', 'Engenharia de programação', '2002-07-19'),
       ('Thiago Mendes', '3B', 'Ciência da computação', '2000-10-05'),
       ('Juliana Cardoso', '2A', 'Ciência asmática', '2001-04-12')

INSERT INTO cursos (nome, duracao_anos)
VALUES ('Engenharia de programação', 5),
       ('Letras', 4),
       ('Engenharia alimentícia', 9),
       ('Ciência asmática', 17),
       ('Ciência da computação', 4)

INSERT INTO matriculas (aluno_id, curso_id)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4),
       (5, 5),
       (6, 1),
       (7, 2),
       (8, 1),
       (9, 5),
       (10, 4)

SELECT a.nome AS aluno, c.nome AS curso, m.data_matricula
FROM matriculas m
JOIN alunos a ON m.aluno_id = a.id
JOIN cursos c ON m.curso_id = c.id;

