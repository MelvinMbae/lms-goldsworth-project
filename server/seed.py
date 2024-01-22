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
# print(course_content)

with app.app_context():

    Student.query.delete()
    Teacher.query.delete()
    Parent.query.delete()
    Course.query.delete()
    User.query.delete()
    Content.query.delete()
    Assignments.query.delete()
    Report_Card.query.delete()


    departments = ['Networking','IT','CyberSecurity','Help Desk','Admin']
    expertise = ['engineering', 'software', 'networking', 'mobile-dev', 'web-dev']
    assignment_heads = ['web-Dev','Python','Data_Structures','Front-End','Back-End','Mobile-Dev','Machine_Learning','Cyber_Security','Data_Science']

    students = []
    teachers = []
    parents = []
    course_list = []
    content_list = []
    assignments = []
    report_cards = []

    for i in range(20):
        teacher = Teacher(
            firstname = fake.first_name(),
            lastname = fake.last_name(),
            personal_email = fake.email(),
            email = f'{fake.last_name()}.{fake.first_name()}@lecturer.goldworth.com',
            password = fake.password(),
            expertise = choice(expertise),
            department = choice(departments)
        )
        db.session.add(teacher)
        db.session.commit()

        user = User(
            email = teacher.email,
            _password = teacher._password,
            teacher_id = teacher.id
        )

        db.session.add(user)
        db.session.commit()

        teachers.append(teacher)

    for c in courses:
        course = Course(
            course_name = c['course_name'],
            description = c['description'],
            image_url = fake.image_url()
        )
        db.session.add(course)
        db.session.commit()

        course_list.append(course)
    
    for doc in course_content:
        content = Content(
            content_name = doc['content_name'],
            description = doc['description'],
            content_type = doc['content_type'],
            course_id = choice(course_list).id,
            teacher_id = choice(teachers).id
        )
        db.session.add(content)
        db.session.commit()

        content_list.append(course)


    for i in range(10):
        parent = Parent(
            firstname = fake.first_name(),
            lastname = fake.last_name(),
            email = fake.email(),
            password = fake.password()
        )
        db.session.add(parent)
        db.session.commit()

        user = User(
            email = parent.email,
            _password = parent._password,
            parent_id = parent.id
        )

        db.session.add(user)
        db.session.commit()

        parents.append(parent)
    
    for i in range(10):
        student = Student(
            firstname = fake.first_name(),
            lastname = fake.last_name(),
            personal_email = fake.email(),
            email = f'{fake.last_name()}{fake.first_name()}@student.goldworth.com',
            password = fake.password(),
            parent_id = choice(parents).id
        )
        db.session.add(student)
        db.session.commit()

        user = User(
            email = student.email,
            _password = student._password,
            student_id = student.id
        )

        db.session.add(user)
        db.session.commit()

        students.append(student)
    
    for i in range(10):
        assignment = Assignments(
            assignment_name = f'{choice(assignment_heads)}{fake.text(max_nb_chars=15)}',
            topic = fake.text(),
            content = fake.paragraph(),
            due_date = fake.future_date(),
            course_id = choice(course_list).id
        )

        db.session.add(assignment)
        db.session.commit()

        assignments.append(assignment)

    for stude in students:
        assigno = choice(assignments)
        print(assigno.assignment_name)
        report_card = Report_Card(
            topic = assigno.assignment_name,
            grade = fake.random_int(0,100),
            teacher_remarks = fake.sentence(),
            student_id = choice(students).id,
            course_id = assigno.course_id
        )
        db.session.add(report_card)
        db.session.commit()

        assignments.append(report_card)
