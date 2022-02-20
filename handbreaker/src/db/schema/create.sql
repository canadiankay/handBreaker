DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS game CASCADE;
-- DROP TABLE IF EXISTS leaderboard CASCADE;
-- DROP TABLE IF EXISTS rating CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE game (
    id SERIAL PRIMARY KEY NOT NULL,
    date date NOT NULL,
    score integer NOT NULL,
    user_id integer REFERENCES users(id) ON DELETE CASCADE
);



-- CREATE TABLE rating (
--     id SERIAL PRIMARY KEY NOT NULL,
--     user_id integer REFERENCES users(id) ON DELETE CASCADE,
--     game_id integer REFERENCES game(id) ON DELETE CASCADE,
--     rating integer CHECK (rating >= 0 AND rating <= 5)
-- );