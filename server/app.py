from flask import request, make_response, session
from models import Teacher, Student, Parent, Course, Document, User
from flask_restful import Resource
from config import mash, db, api, app

class Index(Resource):
    def get(self):
        return make_response(
            "Welcome to the LMS API", 200
        )


api.add_resource(Index, '/')

class Login(Resource):
    def post(self):
        user_logins = request.get_json()
        password = user_logins['password']
        user = User.query.filter_by(email=user_logins['email']).first()

        if user.authenticate(password):
            session['user'] = user.email
            return make_response(
                f"Welcome {user.email}", 200
            )
        return "Please login to continue" , 404


api.add_resource(Login, '/login')

class CheckSession(Resource):
    def get(self):
        user = session.get('user')
        user_data = User.query.filter_by(email=user).first()

        if user:
            return make_response(f"Welcome {user_data.email}", 200)
        return make_response("please login to continue", 401)

api.add_resource(CheckSession, '/checksession')

class Logout(Resource):
    def delete(self):
        user = session.get('user_id')

        if user:
            session['user_id'] = None

            return make_response(
                "You have been logged out successfully", 200
            )
        return make_response("You are not allowed to access this method", 401)

api.add_resource(Logout, '/logout')


class UserSchema(mash.SQLAlchemySchema):

    class Meta:
        model = User
    
    id = mash.auto_field()

    email = mash.auto_field()
    student_id = mash.auto_field()

    url = mash.Hyperlinks(
        {
            "self":mash.URLFor(
                "studentbyid",
                values=dict(id="<student_id>")),
            "collection":mash.URLFor("students")

        }
    )

user_schema = UserSchema()
users_schema = UserSchema(many=True)

class Users(Resource):
    def get(self):
        users = User.query.all()

        return make_response(
            users_schema.dump(users), 200
        )

class UserbyId(Resource):
    def get(self,id):
        user = User.query.filter_by(id=id).first()

        return make_response(
            user_schema.dump(user), 200
        )
api.add_resource(UserbyId, '/users/<int:id>')
api.add_resource(Users, '/users')

class StudentSchema(mash.SQLAlchemySchema):

    class Meta:
        model = Student
    
    id = mash.auto_field()
    firstname = mash.auto_field()
    lastname = mash.auto_field()
    email = mash.auto_field()
    parent_id = mash.auto_field()
    courses = mash.auto_field()
    docs = mash.auto_field()

    url = mash.Hyperlinks(
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
    
    def post(self):
        student_data = request.get_json()
        new_student = Student(
            firstname = student_data['firstname'],
            lastname = student_data['lastname'],
            password = student_data['password'],
            email = student_data['email'],
            parent_id = student_data['parent_id']
        )
        db.session.add(new_student)
        db.session.commit()

        new_student.add_user()

        return make_response(
            student_schema.dump(new_student), 201
        )

    
class StudentbyId(Resource):
    def get(self,id):
        student = Student.query.filter_by(id=id).first()

        return make_response(
            student_schema.dump(student), 200
        )
        
    def patch(self,id):
        student_data = request.get_json()
        student = Student.query.filter_by(id=id).first()

        for attr in student_data:
            setattr(student,attr, student_data[attr])
        
        db.session.add(student)
        db.session.commit()

        return make_response(
            student_schema.dump(student), 200
        )

    def delete(self,id):
        student = Student.query.filter_by(id=id).first()

        db.session.delete(student)
        db.session.commit()

        return make_response({"message": "record successfully deleted"} , 200)

api.add_resource(StudentbyId, '/students/<int:id>')
api.add_resource(Students, '/students')

class TeacherSchema(mash.SQLAlchemySchema):

    class Meta:
        model = Teacher
    
    id = mash.auto_field()
    firstname = mash.auto_field()
    lastname = mash.auto_field()
    email = mash.auto_field()
    expertise = mash.auto_field()
    department = mash.auto_field()
    courses= mash.auto_field()
    docs = mash.auto_field()

    url = mash.Hyperlinks(
        {
            "self":mash.URLFor(
                "teacherbyid",
                values=dict(id="<id>")),
            "collection":mash.URLFor("teachers")

        }
    )

teacher_schema = TeacherSchema()
teachers_schema = TeacherSchema(many=True)

class Teachers(Resource):
    def get(self):
        teachers = Teacher.query.all()

        return make_response(
            teachers_schema.dump(teachers), 200
        )
    
    def post(self):
        teacher_data = request.get_json()
        new_teacher = Teacher(
            firstname = teacher_data['firstname'],
            lastname = teacher_data['lastname'],
            password = teacher_data['password'],
            email = teacher_data['email'],
            expertise = teacher_data['expertise'],
            department = teacher_data['department']
        )
        db.session.add(new_teacher)
        db.session.commit()

        return make_response(
            teacher_schema.dump(new_teacher), 201
        )

    
class TeacherbyId(Resource):
    def get(self,id):
        teacher = Teacher.query.filter_by(id=id).first()

        return make_response(
            teacher_schema.dump(teacher), 200
        )
        
    def patch(self,id):
        teacher_data = request.get_json()
        teacher = Teacher.query.filter_by(id=id).first()

        for attr in teacher_data:
            setattr(teacher,attr, teacher_data[attr])
        
        db.session.add(teacher)
        db.session.commit()

        return make_response(
            teacher_schema.dump(teacher), 200
        )

    def delete(self,id):
        teacher = Teacher.query.filter_by(id=id).first()

        db.session.delete(teacher)
        db.session.commit()

        return make_response({"message": "record successfully deleted"} , 200)

api.add_resource(TeacherbyId, '/teachers/<int:id>')
api.add_resource(Teachers, '/teachers')

class ParentSchema(mash.SQLAlchemySchema):

    class Meta:
        model = Parent
    
    id = mash.auto_field()
    firstname = mash.auto_field()
    lastname = mash.auto_field()
    email = mash.auto_field()
    child = mash.auto_field()

    url = mash.Hyperlinks(
        {
            "self":mash.URLFor(
                "parentbyid",
                values=dict(id="<id>")),
            "collection":mash.URLFor("parents")

        }
    )

parent_schema = ParentSchema()
parents_schema = ParentSchema(many=True)

class Parents(Resource):
    def get(self):
        parents = Parent.query.all()

        return make_response(
            parents_schema.dump(parents), 200
        )
    
    def post(self):
        parent_data = request.get_json()
        new_parent = Parent(
            firstname = parent_data['firstname'],
            lastname = parent_data['lastname'],
            password = parent_data['password'],
            email = parent_data['email']
        )
        db.session.add(new_parent)
        db.session.commit()

        return make_response(
            parent_schema.dump(new_parent), 201
        )

    
class ParentbyId(Resource):
    def get(self,id):
        parent = Parent.query.filter_by(id=id).first()

        return make_response(
            parent_schema.dump(parent), 200
        )
        
    def patch(self,id):
        parent_data = request.get_json()
        parent = Parent.query.filter_by(id=id).first()

        for attr in parent_data:
            setattr(parent,attr, parent_data[attr])
        
        db.session.add(parent)
        db.session.commit()

        return make_response(
            parent_schema.dump(parent), 200
        )

    def delete(self,id):
        parent = Parent.query.filter_by(id=id).first()

        db.session.delete(parent)
        db.session.commit()

        return make_response({"message": "record successfully deleted"} , 200)

api.add_resource(ParentbyId, '/parents/<int:id>')
api.add_resource(Parents, '/parents')

class CourseSchema(mash.SQLAlchemySchema):

    class Meta:
        model = Course
    
    id = mash.auto_field()
    course_name = mash.auto_field()
    description = mash.auto_field()

    url = mash.Hyperlinks(
        {
            "self":mash.URLFor(
                "coursebyid",
                values=dict(id="<id>")),
            "collection":mash.URLFor("courses")

        }
    )

course_schema = CourseSchema()
courses_schema = CourseSchema(many=True)

class Courses(Resource):
    def get(self):
        course = Course.query.all()

        return make_response(
            courses_schema.dump(course), 200
        )
    
    def post(self):
        course_data = request.get_json()
        new_course = Course(
            course_name = course_data['course_name'],
            description = course_data['description'],
            student_id = course_data['student_id'],
            teacher_id = course_data['teacher_id']
        )
        db.session.add(new_course)
        db.session.commit()

        return make_response(
            course_schema.dump(new_course), 200
        )

    
class CoursebyId(Resource):
    def get(self,id):
        course = Course.query.filter_by(id=id).first()

        return make_response(
            course_schema.dump(course), 200
        )
        
    def patch(self,id):
        course_data = request.get_json()
        course = Course.query.filter_by(id=id).first()

        for attr in course_data:
            setattr(course, attr, course_data[attr])
        
        db.session.add(course)
        db.session.commit()

        return make_response(
            course_schema.dump(course), 200
        )

    def delete(self,id):
        course = Course.query.filter_by(id=id).first()

        db.session.delete(course)
        db.session.commit()

        return make_response({"message": "record successfully deleted"} , 200)

api.add_resource(CoursebyId, '/courses/<int:id>')
api.add_resource(Courses, '/courses')

class DocumentSchema(mash.SQLAlchemySchema):

    class Meta:
        model = Document
    
    id = mash.auto_field()
    doc_name = mash.auto_field()
    doc_type = mash.auto_field()
    description = mash.auto_field()

    url = mash.Hyperlinks(
        {
            "self":mash.URLFor(
                "documentbyid",
                values=dict(id="<id>")),
            "collection":mash.URLFor("documents")

        }
    )

document_schema = DocumentSchema()
documents_schema = DocumentSchema(many=True)

class Documents(Resource):
    def get(self):
        documents = Document.query.all()

        return make_response(
            documents_schema.dump(documents), 200
        )
    
    def post(self):
        document_data = request.get_json()
        new_document = Document(
            doc_name = document_data['doc_name'],
            description = document_data['description'],
            doc_type = document_data['doc_type'],
        )
        db.session.add(new_document)
        db.session.commit()

        return make_response(
            document_schema.dump(new_document), 200
        )

    
class DocumentbyId(Resource):
    def get(self,id):
        document = Document.query.filter_by(id=id).first()

        return make_response(
            document_schema.dump(document), 200
        )
        
    def patch(self,id):
        document_data = request.get_json()
        document = Document.query.filter_by(id=id).first()

        for attr in document_data:
            setattr(document, attr, document_data[attr])
        
        db.session.add(document)
        db.session.commit()

        return make_response(
            document_schema.dump(document), 200
        )

    def delete(self,id):
        document = Document.query.filter_by(id=id).first()

        db.session.delete(document)
        db.session.commit()

        return make_response({"message": "record successfully deleted"} , 200)

api.add_resource(DocumentbyId, '/documents/<int:id>')
api.add_resource(Documents, '/documents')

if __name__ == '__main__':
    app.run(port=5555, debug=True)    




