from flask import jsonify, request, make_response
from flask_restful import Resource
from models import Parent,Teacher,Student,Course,Content
from config import db,api,app
from flask_session import Session

Session(app)

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

class Parents(Resource):
    def get(self):
        response_dict_list = [n.to_dict() for n in Parent.query.all()]

        response = make_response(
            jsonify(response_dict_list),
            200,
        )
        return response
    
    def post(self):
        data = request.get_json()
        new_record = Parent(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            password=data['password'],
            imageUrl=data['imageUrl'],
        )

        db.session.add(new_record)
        db.session.commit()

        response_dict = new_record.to_dict()

        response = make_response(
            jsonify(response_dict),
            201,
        )
        return response

api.add_resource(Parents, '/parents')

if __name__ == '__main__':
    app.run(port=5555, debug=True)