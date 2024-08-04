import sqlite3
import matplotlib.pyplot as plt
import numpy as np

def get_app_percentages():
    db_path = '/Users/sanketsushantpai/Desktop/FocaFounderHack/Foca.ai/database/database.db'
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

def plot_app_percentages(percentages):
    # Extract data for plotting
    app_names = [row[0] for row in percentages]
    percentages = [row[2] for row in percentages]

    # Generate a simpler gradient of purple shades
    num_bars = len(app_names)
    colors = plt.cm.Purples(np.linspace(0.4, 0.8, num_bars))  # Simple gradient from light to dark purple

    # Create a horizontal bar chart with the gradient colors
    fig, ax = plt.subplots(figsize=(12, 8))  # Adjusted figsize for horizontal bars
    bars = ax.barh(app_names, percentages, color=colors, edgecolor='none')  # Use barh for horizontal bars

    # Add labels and title
    ax.set_xlabel('Percentage (%)', fontsize=12)
    ax.set_ylabel('Application Name', fontsize=12)
    ax.set_title('Application Usage Percentages', fontsize=14)
    ax.grid(axis='x', linestyle='--', alpha=0.7)

    # Add value labels on the bars
    for bar in bars:
        ax.text(bar.get_width() + 1, bar.get_y() + bar.get_height()/2, f'{bar.get_width():.2f}%', va='center', fontsize=10)

    plt.tight_layout()
    plt.show()
()

# Get app percentages and plot
percentages = get_app_percentages()
plot_app_percentages(percentages)

def get_productivity_data():
    db_path = '/Users/sanketsushantpai/Desktop/FocaFounderHack/Foca.ai/database/database.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

 
    query = '''
    SELECT
        user_is_productive,
        COUNT(*) AS count
    FROM
        modified_productivity_data
    GROUP BY
        user_is_productive;
    '''

    cursor.execute(query)
    results = cursor.fetchall()

    conn.close()
    return results

def plot_productivity_data(data):
    # Initialize labels and sizes
    labels = ['Productive', 'Not Productive']
    sizes = [0, 0]  


    for row in data:
        if row[0] == 'true': 
            sizes[0] = row[1]
        elif row[0] == 'false':  
            sizes[1] = row[1]

    # Plot pie chart
    fig, ax = plt.subplots(figsize=(8, 8))
    wedges, texts, autotexts = ax.pie(
        sizes,
        labels=labels,
        autopct='%1.1f%%',
        startangle=140,
        colors=['#4CAF50', '#F44336']  
    )

    # Beautify the plot
    plt.title('Productivity Overview', fontsize=14)
    plt.setp(autotexts, size=12, weight='bold', color='white')
    plt.setp(texts, size=12, weight='bold')

    plt.show()

# Fetch data and plot
productivity_data = get_productivity_data()
for row in productivity_data:
    print(f"Productive: {row[0]}, Count: {row[1]}")  



plot_productivity_data(productivity_data)
