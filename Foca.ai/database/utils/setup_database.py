import sqlite3
import os

def setup_database():
    db_path = os.path.join(os.path.dirname(__file__), '..', 'database.db')
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS productivity_data (
            id INTEGER PRIMARY KEY,
            timestamp TEXT,
            image_path TEXT,
            user_task TEXT,
            user_is_productive BOOLEAN,
            explaination TEXT
            app_name TEXT
        )
    ''')

    
    conn.commit()
    conn.close()