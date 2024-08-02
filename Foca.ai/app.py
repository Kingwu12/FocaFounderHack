import sqlite3

# Connect to SQLite database
conn = sqlite3.connect('database.db')
cursor = conn.cursor()

# Create table
cursor.execute('''
CREATE TABLE IF NOT EXISTS productivity_data (
    id INTEGER PRIMARY KEY,
    timestamp TEXT,
    image_path TEXT,
    user_task TEXT,
    gpt_output BOOLEAN,
    explanation TEXT,
    image BLOB
)
''')
# Add 'explanation' column if it doesn't exist
cursor.execute('''
ALTER TABLE productivity_data ADD COLUMN explanation TEXT
''')

# Commit changes
conn.commit()


# Insert data example
def insert_image(file_path):
    with open(file_path, 'rb') as file:
        img_data = file.read()
    cursor.execute("INSERT INTO productivity_data (image) VALUES (?)", (img_data,))
    conn.commit()


# Example usage
insert_image('path_to_your_image_file.jpg')

# Close connection
conn.close()
