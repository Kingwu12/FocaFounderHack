from flask import Flask, request, jsonify, send_file
import threading
import time
import matplotlib.pyplot as plt
import io

app = Flask(__name__)

# Global variable to hold the timer state
timer_running = False

@app.route('/start-timer', methods=['POST'])
def start_timer():
    global timer_running
    if not timer_running:
        timer_running = True
        duration = request.json.get('duration', 25)  # Default to 25 minutes
        threading.Thread(target=run_timer, args=(duration,)).start()
        return jsonify({"message": "Timer started"}), 200
    else:
        return jsonify({"message": "Timer is already running"}), 400

def run_timer(duration):
    global timer_running
    time.sleep(duration * 60)  # Convert minutes to seconds
    generate_graph()
    timer_running = False

@app.route('/get-graph', methods=['GET'])
def get_graph():
    return send_file('graph.png', mimetype='image/png')

def generate_graph():
    # Example function to create a graph
    plt.figure()
    plt.plot([0, 1, 2, 3], [10, 20, 25, 30])
    plt.title("Sample Graph")
    plt.xlabel("X-axis")
    plt.ylabel("Y-axis")
    plt.savefig('graph.png')
    plt.close()

if __name__ == '__main__':
    app.run(debug=True)
