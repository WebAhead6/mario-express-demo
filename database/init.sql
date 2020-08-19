BEGIN;

DROP TABLE IF EXISTS posts,
comments,
likes CASCADE;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT,
    post_id INTEGER REFERENCES posts(id)
);

CREATE TABLE likes (post_id INTEGER REFERENCES posts(id));

INSERT INTO posts (title, body)
VALUES (
        'Stinky kim sleeping in class',
        'do you even need a body for this post ?'
    ),
    (
        'Hadi wants a sink',
        'and Abeer wants a fricking mirror, while Mario wants to kill himself'
    );

INSERT INTO comments (content, post_id)
VALUES ('Dat guurrll needs a showa', 1),
    ('God bless this Mario he sounds amazing', 2);

INSERT INTO likes (post_id)
VALUES (1),
    (1),
    (1),
    (1),
    (2),
    (2),
    (2),
    (2);

COMMIT;