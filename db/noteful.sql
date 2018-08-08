DROP TABLE IF EXISTS notes;
CREATE TABLE notes(
    id serial PRIMARY KEY,
    title text NOT NULL,
    content text NULL,
    created date not null default CURRENT_DATE
);
ALTER SEQUENCE notes_id_seq RESTART WITH 1000;
INSERT INTO notes
(title, content) VALUES 
('5 life lessons learned from cats','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod');
INSERT INTO notes
(title, content) VALUES 
('7 things lady gaga has in common with cats','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod');
INSERT INTO notes
(title, content) VALUES 
('10 ways marketers are making you addicted to cats','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod');
INSERT INTO notes
(title, content) VALUES 
('Why you should forget everything you learned about cats','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod');
INSERT INTO notes
(title, content) VALUES 
('What the government doesn''t want you to know about cats','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod');
INSERT INTO notes
(title, content) VALUES 
('11 ways investing in cats can make you a millionaire','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod');
INSERT INTO notes
(title, content) VALUES 
('The most boring article about cats you''ll ever read','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod');
