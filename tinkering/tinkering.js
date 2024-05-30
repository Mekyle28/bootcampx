CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  birth_year SMALLINT,
  member_since TIMESTAMP
);

ALTER TABLE users
ADD COLUMN name VARCHAR(255),
  ADD COLUMN birth_year SMALLINT,
    ADD COLUMN member_since TIMESTAMP;

INSERT INTO users(name, birth_year) VALUES
  ('Bob', 1974),
  ('Mary', 1985);

INSERT INTO pets (name, owner_id) VALUES
    ('Bobbby', 3),
    ('MISSY', 4);


CREATE TABLE pets(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      owner_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
  ;

  UPDATE users
SET name='Mary Willson', birth_year= 1955
WHERE name = 'Mary';

