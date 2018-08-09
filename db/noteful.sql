DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS folders;

CREATE TABLE folders(
    id serial PRIMARY KEY,
    name text NOT NULL
);
ALTER SEQUENCE folders_id_seq RESTART WITH 100;

INSERT INTO folders (name) VALUES
  ('Archive'),
  ('Drafts'),
  ('Personal'),
  ('Work');

CREATE TABLE notes (
  id serial PRIMARY KEY,
  title text NOT NULL,
  content text,
  created timestamp DEFAULT now(),
  folder_id int REFERENCES folders(id) ON DELETE SET NULL
);
ALTER SEQUENCE notes_id_seq RESTART WITH 1000;

INSERT INTO notes (title, content, folder_id) VALUES
  (
    '5 life lessons learned from cats',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
    100
  ),
  ( 
    '7 things lady gaga has in common with cats',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    101
  ),
  ( 
    '10 ways marketers are making you addicted to cats',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    102
  ),
  ( 
    'Why you should forget everything you learned about cats',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    103
  ),
  ( 
    'What the government doesn''t want you to know about cats',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    100
  ),
  ( 
    '11 ways investing in cats can make you a millionaire',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    101
  ),
  ( 
    'The most boring article about cats you''ll ever read',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    102
  );
