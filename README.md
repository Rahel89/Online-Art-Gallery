Tables

1.  users table
    This table will storeinformation about users who register for events
    CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,  
     lname VARCHAR(50) NOT NULL,  
     email VARCHAR(50) UNIQUE NOT NULL,
    phone_number VARCHAR(15)  
    );

2.  artist table
    To store information specific to artist
    CREATE TABLE artists (
    artist_id SERIAL PRIMARY KEY,
    Fname VARCHAR(50) NOT NULL,  
     Lname VARCHAR(50) NOT NULL,  
     email VARCHAR(50) UNIQUE NOT NULL,
    phone_number VARCHAR(15)  
    );

3.  Artwork table
    To store information about the artworks
    CREATE TABLE Artworks (
    artwork_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,  
     artist_id INT NOT NULL,  
     price DECIMAL(10, 2) NOT NULL,  
     category_id INT NOT NULL,

        FOREIGN KEY (artist_id) REFERENCES artists(artist_id),
        FOREIGN KEY (category_id) REFERENCES categories(category_id)

    );

4.  Category table
    To define the categories of artworks available in the gallery.
    CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL  
    );

5.  Events table
    To store information about events that are available for registration
    CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,  
     date DATE NOT NULL,  
     time TIME NOT NULL  
    );

6.  Event sign-up table
    To manage user registration for events
    CREATE TABLE event_Signups (
    signup_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,  
     event_id INT NOT NULL,

        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (event_id) REFERENCES events(event_id)

    );
