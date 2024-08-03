import sqlite3
import os

def update_database_schema():
    db_path = os.path.join(os.path.dirname(__file__), '..', 'database.db')
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Create new table with updated schema
    cursor.execute('''
        CREATE TABLE modified_productivity_data (
            id INTEGER PRIMARY KEY,
            timestamp TEXT,
            image_path TEXT,
            user_task TEXT,
            user_is_productive BOOLEAN,
            explaination TEXT,
            app_name TEXT
        )
    ''')

    # Copy data from the old table to the new table
    cursor.execute('''
        INSERT INTO modified_productivity_data (id, timestamp, image_path, user_task, user_is_productive, explaination, app_name)
        SELECT id, timestamp, image_path, user_task, gpt_output AS user_is_productive, explanation AS explaination, app_name
        FROM productivity_data
    ''')
    

    conn.commit()
    conn.close()

# Run the update
update_database_schema()
import sqlite3
import os

def drop_tables():
    # Path to your database file
    db_path='/Users/sanketsushantpai/Desktop/FocaFounderHack/Foca.ai/database.db'
    
    
    
    # Connect to the SQLite database
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Drop the tables
    cursor.execute("DROP TABLE IF EXISTS productivity_data;")
    cursor.execute("DROP TABLE IF EXISTS new_productivity_data;")
    
    # Commit the changes and close the connection
    conn.commit()
    conn.close()

# Call the function to drop the tables
drop_tables()

