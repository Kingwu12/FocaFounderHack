import sqlite3
import os
import pandas as pd

def query_database():
    db_path = os.path.join(os.path.dirname(__file__), '..', 'database.db')

    # Connect to the SQLite database
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Query to select all data from the productivity_data table
    query = 'SELECT * FROM productivity_data'

    # Execute the query
    cursor.execute(query)

    # Fetch all results from the executed query
    rows = cursor.fetchall()

    # Get column names
    column_names = [description[0] for description in cursor.description]

    # Close the connection
    conn.close()

    # Convert to DataFrame for better readability
    df = pd.DataFrame(rows, columns=column_names)

    return df

def main():
    data = query_database()
    if not data.empty:
        print(data)
    else:
        print("No data found in the database.")

if __name__ == "__main__":
    main()
