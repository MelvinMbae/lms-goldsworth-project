from config import db, bcrypt
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
import re

course_teacher = db.Table(
    'course_teacher',
    db.metadata,
    db.Column('teacher_id', db.ForeignKey('teachers.id'), primary_key=True),
    db.Column('course_id', db.ForeignKey('courses.id'), primary_key=True),
    extend_existing =True
)

course_student = db.Table(
    'course_student',
    db.metadata,
    db.Column('student_id', db.ForeignKey('students.id'), primary_key=True),
    db.Column('course_id', db.ForeignKey('courses.id'), primary_key=True),
    extend_existing =True
)

class User(db.Model):
    __tablename__ = 'users'

    email = db.Column(db.String, nullable = False , unique = True, primary_key = True)
    _password = db.Column(db.String, nullable = False , unique = True)
    parent_id = db.Column(db.Integer, db.ForeignKey('parents.id'))
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.id'))
    
    
    @hybrid_property
    def password(self):
        return self._password
    
    def authenticate(self,pwd):
        pwd_check = bcrypt.check_password_hash(self._password, pwd.encode('utf-8'))
        return pwd_check

class Student(db.Model):
    __tablename__ = 'students'

    id = db.Column(db.Integer , primary_key = True)
    firstname = db.Column(db.String, nullable = False)
    lastname = db.Column(db.String, nullable = False)
    personal_email = db.Column(db.String, nullable = False , unique = True)
    email = db.Column(db.String, nullable = False , unique = True)
    _password = db.Column(db.String, nullable = False , unique = True)
    image_url= db.Column(db.NVARCHAR)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    parent_id = db.Column(db.Integer, db.ForeignKey('parents.id'))

    user = db.relationship('User', backref='student')
    assignments = db.relationship('Assignments', backref='student')
    report_card = db.relationship('Report_Card', backref='student')
    courses = db.relationship('Course', secondary=course_student, back_populates='students')
    docs = db.relationship('Content')

    
    @hybrid_property
    def password(self):
        return self._password
    
    @password.setter
    def password(self,pwd):
        password_hash = bcrypt.generate_password_hash(pwd.encode('utf-8'))
        self._password = password_hash.decode('utf-8')
    
    @validates("firstname","lastname")
    def validates_name(self,key,name):
        if not name:
            raise ValueError("Value is required !")
        return name
    
    @validates("email")
    def validates_email(self,key,value):
        email_regex = re.compile(r'[a-zA-Z-_\.0-9]+@[a-zA-Z-_]+\.[a-zA-Z]+[a-zA-Z]?')
        if not value:
            raise ValueError("Email Address is a required field!")
        elif not email_regex.match(value):
            raise ValueError("Please provide a valid email address!")
        return value

    def add_user(self):
        user = User(
            email = self.email,
            _password = self._password,
            student_id = self.id
        )
        db.session.add(user)
        db.session.commit()
        return user
    
class Teacher(db.Model):
    __tablename__ = 'teachers'

    id = db.Column(db.Integer , primary_key = True)
    firstname = db.Column(db.String, nullable = False)
    lastname = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False , unique = True)
    _password = db.Column(db.String, nullable = False , unique = True)
    image_url= db.Column(db.NVARCHAR)
    expertise = db.Column(db.String)
    department = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    docs = db.relationship('Content')
    user = db.relationship('User', backref='teacher')
    courses = db.relationship('Course', secondary=course_teacher, back_populates='teachers')
    
    @hybrid_property
    def password(self):
        return self._password
    
    @password.setter
    def password(self,pwd):
        password_hash = bcrypt.generate_password_hash(pwd.encode('utf-8'))
        self._password = password_hash.decode('utf-8')
    
    @validates("firstname","lastname")
    def validates_name(self,key,name):
        if not name:
            raise ValueError("Value is required !")
        return name
    
    @validates("email")
    def validates_email(self,key,value):
        email_regex = re.compile(r'[a-zA-Z-_\.0-9]+@[a-zA-Z-_]+\.[a-zA-Z]+[a-zA-Z]?')
        if not value:
            raise ValueError("Email Address is a required field!")
        elif not email_regex.match(value):
            raise ValueError("Please provide a valid email address!")
        return value
    
    def add_user(self):
        user = User(
            email = self.email,
            _password = self._password,
            teacher_id = self.id
        )
        db.session.add(user)
        db.session.commit()
        return user

class Parent(db.Model):
    __tablename__ = 'parents'

    id = db.Column(db.Integer , primary_key = True)
    firstname = db.Column(db.String, nullable = False)
    lastname = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False , unique = True)
    _password = db.Column(db.String, nullable = False , unique = True)
    image_url= db.Column(db.NVARCHAR)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    child = db.relationship('Student', backref='parent')
    user = db.relationship('User', backref='parent')
    
    @hybrid_property
    def password(self):
        return self._password
    
    @password.setter
    def password(self,pwd):
        password_hash = bcrypt.generate_password_hash(pwd.encode('utf-8'))
        self._password = password_hash.decode('utf-8')
    
    @validates("firstname","lastname")
    def validates_name(self,key,name):
        if not name:
            raise ValueError("Value is required !")
        return name
    
    @validates("email")
    def validates_email(self,key,value):
        email_regex = re.compile(r'[a-zA-Z-_\.0-9]+@[a-zA-Z-_]+\.[a-zA-Z]+[a-zA-Z]?')
        if not value:
            raise ValueError("Email Address is a required field!")
        elif not email_regex.match(value):
            raise ValueError("Please provide a valid email address!")
        return value
    
    def add_user(self):
        user = User(
            email = self.email,
            _password = self._password,
            parent_id = self.id
        )
        db.session.add(user)
        db.session.commit()
        return user

    
class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer , primary_key = True)
    course_name = db.Column(db.String, nullable = False , unique = True)
    description = db.Column(db.String, nullable = False)
    image_url= db.Column(db.NVARCHAR)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    content = db.relationship('Content')
    students = db.relationship('Student', secondary=course_student, back_populates='courses')
    teachers = db.relationship('Teacher', secondary=course_teacher, back_populates='courses')


class Content(db.Model):
    __tablename__ = 'contents'

    id = db.Column(db.Integer , primary_key = True)
    content_name = db.Column(db.String, nullable = False)
    description = db.Column(db.String, nullable = False)
    content_type = db.Column(db.String, nullable = False , unique = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.id'))
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))

class Report_Card(db.Model):
    __tablename__ = 'report_cards'
    
    id = db.Column(db.Integer , primary_key = True)
    topic = db.Column(db.String, nullable = False)
    grade = db.Column(db.Integer, nullable = False)
    teacher_remarks = db.Column(db.String, nullable = False , unique = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.id'))
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))

class Assignments(db.Model):
    __tablename__ = 'assignments'
    
    id = db.Column(db.Integer , primary_key = True)
    assignment_name = db.Column(db.String, nullable = False)
    topic = db.Column(db.String, nullable = False)
    content = db.Column(db.String, nullable = False , unique = True)
    due_date = db.Column(db.DateTime, server_default = db.func.now())
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))