select * from cidades;

/*INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 9),
    ('Raquel Lyra', 5),
    ('Zenaldo Coutinho', null);
*/
INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', (select id from cidades where nome = 'Niterói')),
    ('Raquel Lyra', (select id from cidades where nome = 'Caruaru')),
    ('Zenaldo Coutinho', null);    

select * from prefeitos;

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rafael Greca', null);

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Pinheiro', (select id from cidades where nome = 'Caruaru'));