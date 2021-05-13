import os
import pandas as pd
import numpy as np
import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine, inspect, join, outerjoin, MetaData, Table

engine = create_engine("sqlite:///static/data/musicDB.db")

Base = automap_base()

Base.prepare(engine, reflect = True)

Base.classes.keys()

inspector = inspect(engine)
columns = inspector.get_columns('final_data')
for column in columns:
    print(column["name"], column["type"])

# Save references to each table
URL = Base.classes.final_data.URL
URI = Base.classes.final_data.URI
NAME = Base.classes.final_data.NAME
TRACKS = Base.classes.final_data.TRACKS
CATEGORY = Base.classes.final_data.CATEGORY

session = Session(engine)

session.query(URL)

session.query(URI)

session.query(NAME)

session.query(TRACKS)

session.query(CATEGORY)

session.close() 

