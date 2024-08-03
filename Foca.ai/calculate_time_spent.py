import sqlite3

def get_app_percentages():
    db_path = 'database.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    query = '''
    WITH app_counts AS (
        SELECT
            app_name,
            COUNT(*) AS count
        FROM
            modified_productivity_data
        GROUP BY
            app_name
    ),
    total_count AS (
        SELECT
            COUNT(*) AS total
        FROM
            modified_productivity_data
    )
    SELECT
        app_name,
        count,
        (count * 100.0 / total) AS percentage
    FROM
        app_counts,
        total_count
    ORDER BY
        percentage DESC;
    '''

    cursor.execute(query)
    results = cursor.fetchall()

    conn.close()
    return results

percentages = get_app_percentages()
for row in percentages:
    print(f"App: {row[0]}, Count: {row[1]}, Percentage: {row[2]:.2f}%")
