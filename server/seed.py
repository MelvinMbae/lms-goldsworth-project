from models import Student, Teacher, Parent, Course, Document, db
from random import choice
from faker import Faker
from app import app

with app.app_context():

    Student.query.delete()
    Teacher.query.delete()
    Parent.query.delete()

    courses = ['SQL', 'Cyber Security', 'Data Science', 'Software Engineering', 'Information Technology', 'Mobile Development', 'Networking']
    departments = ['Networking','IT','CyberSecurity','Help Desk','Admin']
    expertise = ['engineering', 'software', 'networking', 'mobile-dev', 'web-dev']

    fake = Faker()

    students = []
    teachers = []
    parents = []
    course_list = []

    for c in courses:
        course = Course(
            course_name = c,
            description = fake.sentence()
        )
        db.session.add(course)
        db.session.commit()

        course_list.append(course)

    for i in range(20):
        teacher = Teacher(
            firstname = fake.first_name(),
            lastname = fake.last_name(),
            email = fake.email(),
            _password = fake.password(),
            expertise = choice(expertise),
            department = choice(departments)
        )
        db.session.add(teacher)
        db.session.commit()

        teachers.append(teacher)


    for i in range(20):
        parent = Parent(
            firstname = fake.first_name(),
            lastname = fake.last_name(),
            email = fake.email(),
            _password = fake.password()
        )
        db.session.add(parent)
        db.session.commit()

        parents.append(parent)
    
    for i in range(20):
        student = Student(
            firstname = fake.first_name(),
            lastname = fake.last_name(),
            email = fake.email(),
            _password = fake.password(),
            parent_id = choice(parents).id
        )
        db.session.add(student)
        db.session.commit()

        students.append(student)
    
    print(students)