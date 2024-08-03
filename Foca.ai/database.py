import sqlite3
import os

# Save the Analysis Result to a Database
def save_to_database(timestamp, image_path, user_task, gpt_output, explanation, app_name):
    db_path = os.path.join(os.path.dirname(__file__), 'database.db')
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO modified_productivity_data (timestamp, image_path, user_task,user_is_productive , explaination, app_name)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (timestamp, image_path, user_task, gpt_output, explanation, app_name))

    conn.commit()
    conn.close()
import sqlite3
import os
