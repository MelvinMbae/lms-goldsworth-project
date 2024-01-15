from flask import Flask, jsonify, request, make_response
from flask_marshmallow import Marshmallow
from models import db, Teacher, Student, Parent, Course, Document
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restful import Api, Resource

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///lms.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)
CORS(app)
db.init_app(app)

mash = Marshmallow(app)
api = Api(app)

class Index(Resource):
    def get(self):
        return make_response(
            "Welcome to the LMS API", 200
        )


api.add_resource(Index, '/')

class StudentSchema(mash.SQLAlchemySchema):

    class Meta:
        model = Student
    
    firstname = mash.auto_field()
    lastname = mash.auto_field()
    email = mash.auto_field()
    parent_id = mash.auto_field()
    course = mash.auto_field()
    docs = mash.auto_field()

    url = mash.HyperlinkRelated(
        {
            "self":mash.URLFor(
                "studentbyid",
                values=dict(id="<id>")),
            "collection":mash.URLFor("students")

        }
    )

student_schema = StudentSchema()
students_schema = StudentSchema(many=True)

class Students(Resource):
    def get(self):
        students = Student.query.all()

        return make_response(
            students_schema.dump(students), 200
        )
class StudentbyId(Resource):
    def get(self,id):
        student = Student.query.filter_by(id=id).first()

        return make_response(
            student_schema.dump(student), 200
        )

api.add_resource(StudentbyId, '/students/<int:id>')
api.add_resource(Students, '/students')

class TeacherSchema(mash.SQLAlchemySchema):

    class Meta:
        model = Teacher
    
    firstname = mash.auto_field()
    lastname = mash.auto_field()
    email = mash.auto_field()
    expertise = mash.auto_field()
    department = mash.auto_field()
    course = mash.auto_field()
    docs = mash.auto_field()

    url = mash.HyperlinkRelated(
        {
            "self":mash.URLFor(
                "teacherbyid",
                values=dict(id="<id>")),
            "collection":mash.URLFor("teachers")

        }
    )

teacher_schema = TeacherSchema()
teachers_schema = TeacherSchema(many=True)

class ParentSchema(mash.SQLAlchemySchema):

    class Meta:
        model = Parent
    
    firstname = mash.auto_field()
    lastname = mash.auto_field()
    email = mash.auto_field()
    child = mash.auto_field()

    url = mash.HyperlinkRelated(
        {
            "self":mash.URLFor(
                "parentbyid",
                values=dict(id="<id>")),
            "collection":mash.URLFor("parents")

        }
    )

parent_schema = ParentSchema()
parents_schema = ParentSchema(many=True)


if __name__ == '__main__':
    app.run(port=5555, debug=True)    




