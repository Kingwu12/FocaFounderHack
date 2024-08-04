from flask import Flask, request as req
from getStat.calculate_time_spent import *
app = Flask(__name__)

@app.post("/analysis")
def analysis_post():
    """
    This route is for starting foca and beginning analysis
    """
    return "<p>start foca</p>"

@app.get("/analysis")
def analysis_get():
    """
    This route is for getting the results from the foca anaylsis
    """
    print(req.get_json())
    
    return ""

