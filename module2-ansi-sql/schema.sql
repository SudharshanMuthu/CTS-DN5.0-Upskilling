CREATE DATABASE community_portal; -- database create panurom
SHOW DATABASES; -- database katum yana create agirucha yananu ?
USE community_portal; -- ipo itha use pana prom so use panika 

-- user table create pani ula paramter la podurom yana datatype and yepdi value irukanum nu
CREATE TABLE Users (
user_id INT PRIMARY KEY AUTO_INCREMENT,-- auto increment na atou va 1 2 3 4 5 6 nu incremaet agite pogum
full_name VARCHAR(100) NOT NULL,-- not null na null value iruka kudathu yethachumvalue mus present
email VARCHAR(100) UNIQUE NOT NULL,--uniq irukanum like adhal no mari
city VARCHAR(100) NOT NULL,
registration_date DATE NOT NULL
);

-- tables yana yana iruko show panum name matum
SHOW TABLES ;
-- describe panum user table la type key yelam
DESC users;

-- event table create panuren
CREATE TABLE Events (
event_id INT PRIMARY KEY AUTO_INCREMENT, -- int data type varchar datatype
title VARCHAR(100) NOT NULL,
description TEXT ,
city VARCHAR(100) NOT NULL,
start_date DATETIME NOT NULL,
end_date DATETIME NOT NULL,
status ENUM ('upcoming','completed','cancelled') NOT NULL,
organizer_id INT not null ,
FOREIGN KEY (organizer_id) -- foregin key yethuku use panurom na vera oru tble la irunthu data collect pana
REFERENCES users(user_id) -- yenga irunthu thiruda porom na suers tables la irunthu user id eduka p0rom 
);

SHOW TABLES;
DESC events;

-- session table cerate panurom
CREATE TABLE Sessions (
    session_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    speaker_name VARCHAR(100) NOT NULL,
    start_time DATETIME NOT NULL,-- datetime vanthu key word for extrat datetime 
    end_time DATETIME NOT NULL,

    FOREIGN KEY (event_id)
    REFERENCES Events(event_id)
);

show tables;
desc sessions;

CREATE TABLE Registrations (
    registration_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    registration_date DATE NOT NULL,

    FOREIGN KEY (user_id)
    REFERENCES Users(user_id),

    FOREIGN KEY (event_id)
    REFERENCES Events(event_id)
);

CREATE TABLE Feedback (
    feedback_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comments TEXT,
    feedback_date DATE NOT NULL,

    FOREIGN KEY (user_id)
    REFERENCES Users(user_id),

    FOREIGN KEY (event_id)
    REFERENCES Events(event_id)
);

CREATE TABLE Resources (
    resource_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT NOT NULL,
    resource_type ENUM('pdf','image','link') NOT NULL,
    resource_url VARCHAR(255) NOT NULL,
    uploaded_at DATETIME NOT NULL,

    FOREIGN KEY (event_id)
    REFERENCES Events(event_id)
);

show tables;