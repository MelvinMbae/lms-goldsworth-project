from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from flask_bcrypt import Bcrypt
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime
# from app import app

db = SQLAlchemy()
bcrypt = Bcrypt()

class Parent(db.Model, SerializerMixin):
    __tablename__='parents'
    
    id=db.Column(db.Integer, primary_key=True)
    first_name=db.Column(db.String, nullable=False)
    last_name=db.Column(db.String, nullable=False)
    email=db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    imageUrl= db.Column(db.NVARCHAR)
    created_at=db.Column(db.DateTime, default=datetime.utcnow)
    updated_at=db.Column(db.DateTime, onupdate=datetime.utcnow)
    
    students=db.relationship('Student',backref='parent')
    
    # password authentication
    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')
        
    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
        
    def __repr__(self):
        return f"{self.first_name}{self.last_name} is a parent signed up on our app"
        
        
#join table
course_participant = db.Table(
    'course_participant',
    db.Column('teacher_id', db.Integer, db.ForeignKey('teachers.id')),
    db.Column('student_id', db.Integer, db.ForeignKey('students.id')),
    db.Column('course_id', db.Integer, db.ForeignKey('courses.id')),
    db.PrimaryKeyConstraint('teacher_id','student_id','course_id')
)

class Teacher(db.Model, SerializerMixin):
    __tablename__='teachers'
    
    id=db.Column(db.Integer, primary_key=True, nullable=False)
    first_name=db.Column(db.String, nullable=False)
    last_name=db.Column(db.String, nullable=False)
    email=db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    imageUrl= db.Column(db.NVARCHAR)
    expertise=db.Column(db.String, nullable=False)
    department=db.Column(db.String, nullable=False)
    created_at=db.Column(db.DateTime, default=datetime.utcnow)
    updated_at=db.Column(db.DateTime, onupdate=datetime.utcnow)
    
    courses = db.relationship('Course', secondary=course_participant, backref='teachers')
    
    # password authentication
    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')
        
    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
        
    def __repr__(self):
        return f"{self.first_name}{self.last_name} is a teacher signed up on our app"

class Student(db.Model, SerializerMixin):
    __tablename__='students'
    
    id=db.Column(db.Integer, primary_key=True)
    first_name=db.Column(db.String, nullable=False)
    last_name=db.Column(db.String, nullable=False)
    email=db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    imageUrl= db.Column(db.NVARCHAR)
    created_at=db.Column(db.DateTime, default=datetime.utcnow)
    updated_at=db.Column(db.DateTime, onupdate=datetime.utcnow)
    parent_id=db.Column(db.Integer, db.ForeignKey('parents.id'))
    
    courses = db.relationship('Course', secondary=course_participant, backref='students')
    
    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')
        
    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
        
    def __repr__(self):
        return f"{self.first_name}{self.last_name} is a student signed up on our app"
        
class Course(db.Model, SerializerMixin):
    __tablename__='courses'
    
    id=db.Column(db.Integer, primary_key=True)
    course_name=db.Column(db.String, unique=True, nullable=False)
    description=db.Column(db.String, unique=True, nullable=False)
    created_at=db.Column(db.DateTime, default=datetime.utcnow)
    updated_at=db.Column(db.DateTime, onupdate=datetime.utcnow)
    
    teachers=db.relationship('Teacher', secondary=course_participant,backref='courses')
    students=db.relationship('Student', secondary=course_participant,backref='courses')
    
    def __repr__(self):
        return f"{self.course_name}is a course offered in our platform"
    
class Content(db.Model, SerializerMixin):
    __tablename__='contents'
    
    id=db.Column(db.Integer, primary_key=True)
    content_name=db.Column(db.String, unique=True, nullable=False)
    description=db.Column(db.String, unique=True, nullable=False)
    content_type=db.Column(db.String, unique=True, nullable=False)
    created_at=db.Column(db.DateTime, default=datetime.utcnow)
    updated_at=db.Column(db.DateTime, onupdate=datetime.utcnow)
    course_id=db.Column(db.Integer, db.ForeignKey('courses.id'))
    
    def __repr__(self):
        return f"{self.content_name}"