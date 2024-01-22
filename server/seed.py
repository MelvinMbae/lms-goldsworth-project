from models import Student, Teacher, Parent, Course, Content, User, Assignments, Report_Card
import json
from random import choice
from faker import Faker
from config import app, db


fake = Faker()

with open("/home/mwagash/Development/code/Phase5/lms-goldsworth-project/server/db.json" , mode='r') as course_data:
    data = json.load(course_data)

courses = data['courses']
course_content = data['contents']
print(course_content)

# with app.app_context():

    # Student.query.delete()
    # Teacher.query.delete()
    # Parent.query.delete()
    # Course.query.delete()
    # User.query.delete()
    # Content.query.delete()
    # Assignments.query.delete()
    # Report_Card.query.delete()



    # courses = ['SQL', 'Cyber Security', 'Data Science', 'Software Engineering', 'Information Technology', 'Mobile Development', 'Networking']
    # departments = ['Networking','IT','CyberSecurity','Help Desk','Admin']
    # expertise = ['engineering', 'software', 'networking', 'mobile-dev', 'web-dev']

    # students = []
    # teachers = []
    # parents = []
    # course_list = []

    # for c in courses:
    #     course = Course(
    #         course_name = c,
    #         description = fake.sentence()
    #     )
    #     db.session.add(course)
    #     db.session.commit()

    #     course_list.append(course)

    # for i in range(20):
    #     teacher = Teacher(
    #         firstname = fake.first_name(),
    #         lastname = fake.last_name(),
    #         email = f'{fake.last_name()}.{fake.first_name()}@lecturer.goldworth.com',
    #         password = fake.password(),
    #         expertise = choice(expertise),
    #         department = choice(departments)
    #     )
    #     db.session.add(teacher)
    #     db.session.commit()

    #     user = User(
    #         email = teacher.email,
    #         _password = teacher._password,
    #         teacher_id = teacher.id
    #     )

    #     db.session.add(user)
    #     db.session.commit()

    #     teachers.append(teacher)


    # for i in range(20):
    #     parent = Parent(
    #         firstname = fake.first_name(),
    #         lastname = fake.last_name(),
    #         email = fake.email(),
    #         password = fake.password()
    #     )
    #     db.session.add(parent)
    #     db.session.commit()

    #     user = User(
    #         email = parent.email,
    #         _password = parent._password,
    #         parent_id = parent.id
    #     )

    #     db.session.add(user)
    #     db.session.commit()

    #     parents.append(parent)
    
    # for i in range(1):
    #     student = Student(
    #         firstname = fake.first_name(),
    #         lastname = fake.last_name(),
    #         email = f'{fake.last_name()}{fake.first_name()}@student.goldworth.com',
    #         password = fake.password(),
    #         parent_id = choice(parents).id
    #     )
    #     db.session.add(student)
    #     db.session.commit()
    #     print(student)

    #     user = User(
    #         email = student.email,
    #         _password = student._password,
    #         student_id = student.id
    #     )

    #     print(user.student)

    #     db.session.add(user)
    #     db.session.commit()

    #     students.append(student)
    