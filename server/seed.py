from random import choice, randint, random
import json 
from sqlalchemy.orm.session import make_transient

from faker import Faker
from app import app
from models import db,bcrypt, Parent, Teacher, Student,Course,Content,course_student,course_teacher

fake = Faker()

with open("C:/Users/Melvin Mbae/Development/Code/phase-5/phase5-project/goldworth-lms/client/db.json", mode="r") as itemdata:
    data = json.load(itemdata)

item_data = [item for item in data]

with app.app_context():

    Parent.query.delete()
    Teacher.query.delete()
    Student.query.delete()
    db.session.query(course_student).delete()
    db.session.query(course_teacher).delete()
    
    Course.query.delete()
    
    parents=[]
    for _ in range(10):
        parent = Parent(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            email=fake.email(),
            password=bcrypt.generate_password_hash(fake.password()).decode('utf-8')
        )
        
        parents.append(parent)
        
    db.session.add_all(parents)
    db.session.commit()
    
    teachers=[]
    for _ in range(10):
        teacher = Teacher(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            email=fake.email(),
            password=bcrypt.generate_password_hash(fake.password()).decode('utf-8'),
            expertise=fake.word(),
            department=fake.word()
        )
        teachers.append(teacher)
        
    db.session.add_all(teachers)
    db.session.commit()
    
    students = []
    for _ in range(30):
        student = Student(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            email=fake.email(),
            password=bcrypt.generate_password_hash(fake.password()).decode('utf-8'),
            parent_id=choice(parents).id
        )
        students.append(student)

    db.session.add_all(students)
    db.session.commit()
    
  
    
    courses=[]
    for c in data["courses"]:
        course = Course(
            course_name= c["course_name"],
            description=c["description"],
            )
        
        courses.append(course)
        
    # print(items)
    db.session.add_all(courses)
    db.session.commit()
    
    contents=[]
    for c in data["contents"]:
        content = Content(
            content_name= c["content_name"],
            description=c["description"],
            content_type=c["content_type"],
            course_id=c["course_id"])
        contents.append(content)
        
    db.session.add_all(contents)
    db.session.commit()
    
    for teacher in teachers:
        courses_for_teacher = [choice(courses) for _ in range(randint(1, 3))]
        for course in courses_for_teacher:
            if course not in teacher.courses:
                teacher.courses.append(course)

    # Associate students with courses and parents
    for student in students:
        courses_for_student = [choice(courses) for _ in range(randint(1, 3))]
        for course in courses_for_student:
            if course not in student.courses:
                student.courses.append(course)

    db.session.commit()