import sqlite3
import os

# save the Analysis Result to a Database
def save_to_database(timestamp, image_path, user_task, gpt_output):
    db_path = os.path.join(os.path.dirname(__file__), 'database.db')
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO productivity_data (timestamp, image_path, user_task, gpt_output)
        VALUES (?, ?, ?, ?)
    ''', (timestamp, image_path, user_task, gpt_output))
    conn.commit()
    conn.close()
