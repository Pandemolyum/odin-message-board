-- Connect to the db by runnign the PSQL command from Render, then run this script.

-- Create new table
CREATE TABLE IF NOT EXISTS messages (
    if INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 32 ),
    message VARCHAR ( 1024 ),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert messages into the table
INSERT INTO messages (name, message) 
VALUES
  ('Walter White', 'I am the one who knocks.'),
  ('Jesse Pinkman', 'Yeah Mr White! Yeah, science!'),
  ('Gustavo Fring', 'There will be... An appropriate response.');
