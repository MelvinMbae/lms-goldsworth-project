from flask import request, make_response, session
from models import Teacher, Student, Parent, Course, Content, User, Report_Card, Assignments, Event
from flask_restful import Resource
from datetime import datetime
from config import mash, db, api, app
from werkzeug.exceptions import NotFound, MethodNotAllowed, ServiceUnavailable, BadRequest, InternalServerError

@app.errorhandler(NotFound)
def resource_missing(e):
    return "Sorry the requested resource does not exist!"

@app.errorhandler(MethodNotAllowed)
def wrong_method(e):
    return "The request made is not allowed!"

@app.errorhandler(BadRequest)
def bad_request(e):
    return "You have made an invalid request, try again with the correct details."

@app.errorhandler(ServiceUnavailable)
def service_error(e):
    return "Sorry for the inconvenience, the service is not available at the moment! Please try again later. Thankyou for your patience!"

@app.errorhandler(InternalServerError)
def server_error(e):
    return "Sorry for the inconvenience, we are looking into the problem. Thankyou for your patience!"

class Index(Resource):
    def get(self):
        return make_response(
            "Welcome to the LMS API", 200
        )


api.add_resource(Index, '/')

def User_details(user):
    if 'lecturer' in user.email:
        return make_response(
            {
                "teacher_id": user.teacher_id,
                "name" : f'{user.teacher.firstname} {user.teacher.lastname}',
                "email" : user.email,
                "image_url": user.teacher.image_url,
                "expertise": user.teacher.expertise,
                "department": user.teacher.department,
            }, 200
        )
    elif 'student' in user.email:
        return make_response(
            {
                "student_id": user.student_id,
                "name" : f'{user.student.firstname} {user.student.lastname}',
                "email" : user.email,
                "image_url": user.student.image_url,
            }, 200
        )
    return make_response(
        {
            "parent_id": user.parent_id,
            "name" : f'{user.parent.firstname} {user.parent.lastname}',
            "email" : user.email,
            "image_url": user.parent.image_url,
        }, 200
    )

class Login(Resource):
    def post(self):
        user_logins = request.get_json()
        password = user_logins['password']
        user = User.query.filter_by(email=user_logins['email']).first()

        if user:
            if user.authenticate(password):
                session['user'] = user.email
                return User_details(user)

            return "Invalid email or password" , 400
        return "User does not exist" , 404       

api.add_resource(Login, '/login')

class CheckSession(Resource):
    def get(self):
        user = session.get('user')
        user_data = User.query.filter_by(email=user).first()

        if user:
            return User_details(user_data)

        return "Please login to continue", 401

api.add_resource(CheckSession, '/checksession')

class Logout(Resource):
    def delete(self):
        user = session.get('user')

        if user:
            session['user'] = None

            return "You have been logged out successfully", 200
        return make_response("You are not allowed to access this method", 401)

api.add_resource(Logout, '/logout')


class UserSchema(mash.SQLAlchemySchema):

    class Meta:
        model = User

    email = mash.auto_field()
    student_id = mash.auto_field()
    teacher_id = mash.auto_field()
    parent_id = mash.auto_field()

    student_url = mash.Hyperlinks(
        {
            "student":mash.URLFor(
                "studentbyid",
                values=dict(id="<student_id>")),
            "students_list":mash.URLFor("students")

        }
    )
    parent_url = mash.Hyperlinks(
        {
            "parent":mash.URLFor(
                "parentbyid",
                values=dict(id="<parent_id>")),
            "parents_list":mash.URLFor("parents")

        }
    )
    teacher_url = mash.Hyperlinks(
        {
            "teacher":mash.URLFor(
                "teacherbyid",
                values=dict(id="<teacher_id>")),
            "teachers_list":mash.URLFor("teachers")

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
            personal_email = student_data['personal_email'],
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
            student_schema.dump(student), 202
        )

    def delete(self,id):
        student = Student.query.filter_by(id=id).first()

        db.session.delete(student)
        db.session.commit()

        return "Record successfully deleted" , 202

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

        new_teacher.add_user()

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
            teacher_schema.dump(teacher), 202
        )

    def delete(self,id):
        teacher = Teacher.query.filter_by(id=id).first()

        db.session.delete(teacher)
        db.session.commit()

        return "record successfully deleted" , 202

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

        new_parent.add_user()

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
            parent_schema.dump(parent), 202
        )

    def delete(self,id):
        parent = Parent.query.filter_by(id=id).first()

        db.session.delete(parent)
        db.session.commit()

        return "record successfully deleted" , 202

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
            teacher_id = course_data['teacher_id'],
            daysOfWeek=course_data['daysOfWeek'],
            startTime=datetime.fromisoformat(course_data['startTime']),
            endTime=datetime.fromisoformat(course_data['endTime']),
            startRecur=course_data['startRecur'],
            endRecur=course_data['endRecur'],
        )
        db.session.add(new_course)
        db.session.commit()

        return make_response(
            course_schema.dump(new_course), 201
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
            course_schema.dump(course), 202
        )

    def delete(self,id):
        course = Course.query.filter_by(id=id).first()

        db.session.delete(course)
        db.session.commit()

        return "record successfully deleted" , 202

api.add_resource(CoursebyId, '/courses/<int:id>')
api.add_resource(Courses, '/courses')

class ContentSchema(mash.SQLAlchemySchema):

    class Meta:
        model = Content
    
    id = mash.auto_field()
    content_name = mash.auto_field()
    content_type = mash.auto_field()
    description = mash.auto_field()

    url = mash.Hyperlinks(
        {
            "self":mash.URLFor(
                "contentbyid",
                values=dict(id="<id>")),
            "collection":mash.URLFor("contents")

        }
    )

content_schema = ContentSchema()
contents_schema = ContentSchema(many=True)

class Contents(Resource):
    def get(self):
        contents = Content.query.all()

        return make_response(
            contents_schema.dump(contents), 200
        )
    
    def post(self):
        content_data = request.get_json()
        new_content = Content(
            doc_name = content_data['doc_name'],
            description = content_data['description'],
            doc_type = content_data['doc_type'],
        )
        db.session.add(new_content)
        db.session.commit()

        return make_response(
            content_schema.dump(new_content), 201
        )

    
class ContentbyId(Resource):
    def get(self,id):
        content = Content.query.filter_by(id=id).first()

        return make_response(
            content_schema.dump(content), 200
        )
        
    def patch(self,id):
        content_data = request.get_json()
        content = Content.query.filter_by(id=id).first()

        for attr in content_data:
            setattr(content, attr, content_data[attr])
        
        db.session.add(content)
        db.session.commit()

        return make_response(
            content_schema.dump(content), 202
        )

    def delete(self,id):
        content = Content.query.filter_by(id=id).first()

        db.session.delete(content)
        db.session.commit()

        return "record successfully deleted" , 202

api.add_resource(ContentbyId, '/contents/<int:id>')
api.add_resource(Contents, '/contents')

class ReportCardSchema(mash.SQLAlchemySchema):

    class Meta:
        model = Report_Card
    
    id = mash.auto_field()
    topic = mash.auto_field()
    teacher_remarks = mash.auto_field()
    course_id = mash.auto_field()

    url = mash.Hyperlinks(
        {
            "course_module":mash.URLFor(
                "coursebyid",
                values=dict(id="<course_id>")),
            "collection":mash.URLFor("report_cards")

        }
    )

report_card_schema = ReportCardSchema()
report_cards_schema = ReportCardSchema(many=True)

class Report_Cards(Resource):
    def get(self):
        report_card = Report_Card.query.all()

        return make_response(
            report_cards_schema.dump(report_card), 200
        )
    
    def post(self):
        reportcard_data = request.get_json()
        new_report = Report_Card(
            topic = reportcard_data['topiic'],
            grade = reportcard_data['grade'],
            teacher_remarks = reportcard_data['teacher_remarks'],
            student_id = reportcard_data['student_id'],
            course_id = reportcard_data['course_id'],
        )
        db.session.add(new_report)
        db.session.commit()

        return make_response(
            report_card_schema.dump(new_report), 201
        )

    
class Report_CardbyId(Resource):
    def get(self,id):
        report_card = Report_Card.query.filter_by(id=id).first()

        return make_response(
            report_card_schema.dump(report_card), 200
        )
        
    def patch(self,id):
        report_card = request.get_json()
        content = Report_Card.query.filter_by(id=id).first()

        for attr in report_card:
            setattr(content, attr, report_card[attr])
        
        db.session.add(content)
        db.session.commit()

        return make_response(
            content_schema.dump(content), 202
        )

    def delete(self,id):
        content = Report_Card.query.filter_by(id=id).first()

        db.session.delete(content)
        db.session.commit()

        return "record successfully deleted" , 202

api.add_resource(Report_CardbyId, '/report_cards/<int:id>')
api.add_resource(Report_Cards, '/report_cards')

class EventSchema(mash.SQLAlchemySchema):

    class Meta:
        model = Event
    
    id = mash.auto_field()
    groupId = mash.auto_field()
    allDay = mash.auto_field()
    start = mash.auto_field()
    end = mash.auto_field()
    daysOfWeek = mash.auto_field()
    startTime = mash.auto_field()
    endTime = mash.auto_field()
    startRecur = mash.auto_field()
    endRecur = mash.auto_field()
    title = mash.auto_field()
    student_id = mash.auto_field()
    course_id = mash.auto_field()
    
    url = mash.Hyperlinks(
        {
            "self":mash.URLFor(
                "events",
                values=dict(id="<id>")),
            "collection":mash.URLFor("events")

        }
    )

event_schema = EventSchema()
events_schema = EventSchema(many=True)

class Events(Resource):
    def get(self):
        events = Event.query.all()
        # Assuming you have an events schema defined
        return make_response(
            events_schema.dump(events), 200
        )

    def post(self):
        data = request.get_json()
        
        course = Course.query.get(data['course_id'])
        
        if course:
            # Use the course information to set the title
            title = f"{course.course_name} "
        else:
            title = "Unknown Course"
            
        custom_title = data.get('title')
        event_title = custom_title if custom_title else title


        new_event = Event(
            groupId=data['groupId'],
            allDay=data['allDay'],
            start=datetime.fromisoformat(data['start']),
            end=datetime.fromisoformat(data['end']),
            daysOfWeek=data['daysOfWeek'],
            startTime=datetime.fromisoformat(data['startTime']),
            endTime=datetime.fromisoformat(data['endTime']),
            startRecur=data['startRecur'],
            endRecur=data['endRecur'],
            title=event_title,
            course_id=data['course_id'],
            student_id=data['student_id'],
            teacher_id=data['teacher_id'],
            
        )
        db.session.add(new_event)
        db.session.commit()

        return make_response(
            event_schema.dump(new_event), 200
        )

class EventbyId(Resource):
    def get(self,id):
        event = Event.query.filter_by(id=id).first()

        return make_response(
            event_schema.dump(event), 200
        )
        
    def patch(self,id):
        data = request.get_json()
        event = Event.query.filter_by(id=id).first()
        
        if not event:
            return make_response({"message": "Event not found"}, 404)

        for attr in data:
            if attr in ['start', 'end', 'startTime', 'endTime', 'startRecur', 'endRecur']:
                setattr(event, attr, datetime.fromisoformat(data[attr]))
            else:
                setattr(event, attr, data[attr])

        # Update the title based on the course_id
        if 'course_id' in data:
            course = Course.query.get(data['course_id'])
            if course:
                # Use the course information to update the title
                event.title = f"{course.course_name}" 
            else:
                event.title = "Unknown Course"

        for attr in data:
            setattr(event, attr, data[attr])
        
        db.session.add(event)
        db.session.commit()

        return make_response(
            event_schema.dump(event), 200
        )

    def delete(self,id):
        event = Event.query.filter_by(id=id).first()

        db.session.delete(event)
        db.session.commit()

        return make_response({"message": "record successfully deleted"} , 200)

api.add_resource(EventbyId, '/events/<int:id>')
api.add_resource(Events, '/events')

if __name__ == '__main__':
    app.run(port=5555, debug=True)