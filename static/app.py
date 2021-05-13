from flask.templating import render_template
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify

engine = create_engine("sqlite:///static/data/musicDB.db")

Base = automap_base()
Base.prepare(engine, reflect=True)

# Save references to each table
URL = Base.classes.final_data.URL
URI = Base.classes.final_data.URI
NAME = Base.classes.final_data.NAME
TRACKS = Base.classes.final_data.TRACKS
CATEGORY = Base.classes.final_data.CATEGORY

app = Flask(__name__)

@app.route("/")
def welcome():
    
    return render_template("index.html")




