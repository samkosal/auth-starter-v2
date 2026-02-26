CREATE TABLE IF NOT EXISTS users (
    userId INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user','admin') NOT NULL DEFAULT 'user',
    PRIMARY KEY (userId)
)