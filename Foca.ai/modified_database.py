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
