from flask_bcrypt import Bcrypt
from flask import Flask
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///lms.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SESSION_TYPE']='sqlalchemy'
app.config['SESSION_SQLALCHEMY']=db


app.json.compact=False
app.secret_key='no_key'

migrate=Migrate(app,db)

CORS(app)
api=Api(app)
bcrypt = Bcrypt(app)

db.init_app(app)
