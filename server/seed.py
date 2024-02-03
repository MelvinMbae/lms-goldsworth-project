from models import Student, Teacher, Parent, Course, Content, User, Assignment, Report_Card,Event,Message
import json
import pytz
import requests
from random import choice,sample
from faker import Faker
from config import app, db
from datetime import datetime, timedelta

fake = Faker()

url = fake.image_url(width=300, height=300)
image= requests.get(url).content
# print(image.decode("ISO-8859-1"))

# with open(image_url , encoding="binary", mode="rb") as image_data:
#     print(image_data)
# image = image_data.read()

# get data for the courses from db.json
with open("C:/Users/Melvin Mbae/Development/Code/phase-5/phase5-project/goldworth-lms/server/db.json" , mode='r') as course_data:
    data = json.load(course_data)

courses = data['courses']
course_content = data['contents']

with app.app_context():

    Student.query.delete()
    Teacher.query.delete()
    Parent.query.delete()
    Course.query.delete()
    User.query.delete()
    Content.query.delete()
    Assignment.query.delete()
    Report_Card.query.delete()
    Event.query.delete()
    Message.query.delete()
    
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
    events = []
    users=[]
    
    # seed data for teachers
    for i in range(20):
        teacher = Teacher(
            firstname = fake.first_name(),
            lastname = fake.last_name(),
            personal_email = fake.email(),
            email = f'{fake.last_name()}.{fake.first_name()}@lecturer.goldworth.com',
            image_url = image,
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
        users.append(user)
        
    # seed data for courses
    for c in courses:
        start_time = fake.time_object()
        duration_hours = fake.random_int(min=1, max=5)
        timezone = pytz.timezone(fake.timezone())

        start_datetime = datetime.combine(datetime.today(), start_time)
        start_datetime = timezone.localize(start_datetime)

        end_datetime = start_datetime + timedelta(hours=duration_hours)
        
        days_of_week = sample(range(1, 6), k=fake.random_int(min=1, max=5))
        
        course = Course(
            course_name = c['course_name'],
            description = c['description'],
            image_url = image,
            startTime= start_datetime.time(),
            endTime = end_datetime.time(),
            daysOfWeek= ','.join(map(str, days_of_week)) ,
            startRecur=datetime.now(),
            endRecur=datetime.now() + timedelta(days=365)
                        
        )
        
        db.session.add(course)
        db.session.commit()

        course_list.append(course)
        
    # seed data for contents    
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

        content_list.append(content)
        

    # seed data for parents
    for i in range(10):
        parent = Parent(
            firstname = fake.first_name(),
            lastname = fake.last_name(),
            email = fake.email(),
            password = fake.password(),
            image_url = image,
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
        users.append(user)
        
    # seed data for students    
    for i in range(10):
        student = Student(
            firstname = fake.first_name(),
            lastname = fake.last_name(),
            personal_email = fake.email(),
            email = f'{fake.last_name()}.{fake.first_name()}@student.goldworth.com',
            password = fake.password(),
            parent_id = choice(parents).id,
            image_url = image,
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
        users.append(user)
        
    # seed data for assignments    
    for i in range(10):
        assignment = Assignment(
            assignment_name = f'{assignment_heads[choice(range(9))]} {fake.text(max_nb_chars=20)}',
            topic = fake.text(),
            content = fake.paragraph(),
            due_date = fake.future_date(),
            course_id = choice(course_list).id
        )

        db.session.add(assignment)
        db.session.commit()

        assignments.append(assignment)

    # seed data for report card data
    for _ in range(50):
        assigno = choice(assignments)
        # print(assigno.assignment_name)

        report_card = Report_Card(
            topic=assigno.assignment_name,
            grade=fake.random_int(0, 100),
            teacher_remarks=fake.sentence(),
            student_id=choice(students).id,
            teacher_id=choice(teachers).id,
            course_id=assigno.course_id
        )
        db.session.add(report_card)

        report_cards.append(report_card)
    db.session.commit()
        
    courses=Course.query.all()
    student=Student.query.all()
    teacher=Teacher.query.all()
    
    # seed data for events            
    for event in range(50):
        course = choice(courses)
        student = choice(students)
        teacher = choice(teachers)
        
        new_event=Event(
            groupId= fake.random_int(min=1, max=100),
            allDay= False,
            start= datetime.now(),
            end= datetime.now() + timedelta(days=365),
            daysOfWeek= course.daysOfWeek,
            startTime= course.startTime,
            startRecur= course.startRecur,
            endRecur= course.endRecur,         
            endTime = course.endTime,
            title=course.course_name,
            student_id=student.id,
            course_id=course.id,
            teacher_id=teacher.id
                 
        )
        db.session.add(new_event)
        db.session.commit()

        events.append(new_event)

    # seed data for messages        
    for user in users:
        for i in range(2):
            content = fake.text()
            timestamp = datetime.now() - timedelta(days=i)
            sender_id = choice(users).id
            receiver_id = choice(users).id

            message = Message(content=content, timestamp=timestamp, sender_id=sender_id, receiver_id=receiver_id)
            db.session.add(message)

        db.session.commit()