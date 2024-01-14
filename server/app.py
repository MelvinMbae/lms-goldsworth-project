from flask import Flask, jsonify, request, make_response, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_session import Session
from models import db, Parent,Teacher,Student,Course,Content
from flask_cors import CORS

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///lms.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SESSION_TYPE']='sqlalchemy'
app.config['SESSION_SQLALCHEMY']=db
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

Session(app)

app.json.compact=False
app.secret_key='no_key'

migrate=Migrate(app,db)
CORS(app)
db.init_app(app)

api=Api(app)

class Index(Resource):

    @staticmethod
    def get():
        response_dict = {
            "index": "Welcome to the Goldworth API",
        }

        response = make_response(
            jsonify(response_dict),
            200,
        )
        return response

api.add_resource(Index, '/')