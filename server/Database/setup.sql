DROP TABLE IF EXISTS theatres CASCADE;
DROP TABLE IF EXISTS plays;


CREATE TABLE plays(
    play_id INT GENERATED ALWAYS AS IDENTITY,
    play_name VARCHAR(350) NOT NULL,
    dates VARCHAR(200) NOT NULL,
    actors VARCHAR(300),
    price VARCHAR(100),
    director VARCHAR(150),
    PRIMARY KEY (play_id)
);

CREATE TABLE theatres(
    theatre_id INT GENERATED ALWAYS AS IDENTITY,
    theatre_name VARCHAR (150) NOT NULL,
    theatre_location VARCHAR (250) NOT NULL,
    phone_number VARCHAR(25),
    capacity INT NOT NULL,
    plays_id INT,
    PRIMARY KEY(theatre_id),
    FOREIGN KEY(plays_id) REFERENCES plays(play_id)
);


INSERT INTO plays (play_name, dates, actors, price, director) VALUES ('Hamlet', '2023-07-01 to 2023-08-15', 'John Smith, Jane Doe', '£45.99', 'Sarah Johnson'),
('The Importance of Being Earnest', '2023-09-01 to 2023-10-15', 'David Brown, Emily Wilson', '£39.99', 'Michael Thompson'),
('Romeo and Juliet', '2023-07-20 to 2023-09-05', 'Jennifer Davis, Mark Anderson', '£55.99', 'Robert Taylor'),
('A Streetcar Named Desire', '2023-08-10 to 2023-09-25', 'Daniel Evans, Emma Thompson', '£49.99', 'Julia Roberts'),
('The Mousetrap', '2023-06-15 to 2023-08-31', 'Oliver Harris, Sophie Turner', '£35.99', 'Thomas Davis'),
('The Curious Incident of the Dog in the Night-Time', '2023-07-05 to 2023-08-20', 'Benjamin Lewis, Rachel Adams', '£42.99', 'Christopher Miller'),
('Wicked', '2023-06-25 to 2023-09-10', 'Matthew Johnson, Samantha Collins', '£59.99', 'Jessica Wilson'),
('The Lion King', '2023-07-15 to 2023-09-30', 'Michael Brown, Lisa Thompson', '£65.99', 'Andrew Davis');


INSERT INTO theatres(theatre_name, theatre_location, phone_number, capacity, plays_id) VALUES
    ('Royal National Theatre', 'London, United Kingdom', 1234567890, 1150, 1),
    ('The Old Vic', 'London, United Kingdom', 9876543210, 1000, 2),
    ('Shakespeares Globe', 'London, United Kingdom', 1357924680, 857, 3),
    ('Apollo Victoria Theatre', 'London, United Kingdom', 8642097531, 2382, 4),
    ('Royal Albert Hall', 'London, United Kingdom', 3159264870, 5272, 5),
    ('Palace Theatre', 'London, United Kingdom', 7418529630, 1400, 6),
    ('Theatre Royal Drury Lane', 'London, United Kingdom', 2468135790, 2196, 7),
    ('The Donmar Warehouse', 'London, United Kingdom', 9081726354, 251, 8);

