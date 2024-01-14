from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

db = SQLAlchemy()
bcrypt = Bcrypt()

class Student(db.Model):
    __tablename__ = 'students'

    id = db.Column(db.Integer , primary_key = True)
    firstname = db.Column(db.String, nullable = False)
    lastname = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False , unique = True)
    _password = db.Column(db.String, nullable = False , unique = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    parent_id = db.Column(db.Integer, db.ForeignKey('parents.id'))

    course = db.relationship('Course')
    docs = db.relationship('Document')

    def __repr__(self):
        return f'Student(id={self.id}, name={self.firstname + self.lastname}, email={self.email})'
    
    @validates("firstname","lastname")
    def validates_name(self,key,name):
        if not name:
            raise ValueError("Value is required !")
        return name
    
    @validates("email")
    def validates_email(self,key,value):
        if not value:
            raise ValueError("Email Address is a required field!")
        if "@" and ".com" not in value:
            raise ValueError("Email address is not valid!")
        return value

    @hybrid_property
    def password(self):
        return self._password
    
    @password.setter
    def password(self,pwd):
        password_hash = bcrypt.generate_password_hash(pwd.encode('utf-8'))
        self._password = password_hash.decode('utf-8')
    
    def authenticate(self,pwd):
        pwd_check = bcrypt.check_password_hash(self._password, pwd.encode('utf-8'))
        return pwd_check


class Teacher(db.Model):
    __tablename__ = 'teachers'

    id = db.Column(db.Integer , primary_key = True)
    firstname = db.Column(db.String, nullable = False)
    lastname = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False , unique = True)
    _password = db.Column(db.String, nullable = False , unique = True)
    expertise = db.Column(db.String)
    department = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    docs = db.relationship('Document')
    course = db.relationship('Course')

    def __repr__(self):
        return f'Teacher(id={self.id}, name={self.firstname + self.lastname}, email={self.email}, expertise={self.expertise}, department={self.department})'
    
    @validates("firstname","lastname")
    def validates_name(self,key,name):
        if not name:
            raise ValueError("Value is required !")
        return name
    
    @validates("email")
    def validates_email(self,key,value):
        if not value:
            raise ValueError("Email Address is a required field!")
        if "@" and ".com" not in value:
            raise ValueError("Email address is not valid!")
        return value

    @hybrid_property
    def password(self):
        return self._password
    
    @password.setter
    def password(self,pwd):
        password_hash = bcrypt.generate_password_hash(pwd.encode('utf-8'))
        self._password = password_hash.decode('utf-8')
    
    def authenticate(self,pwd):
        pwd_check = bcrypt.check_password_hash(self._password, pwd.encode('utf-8'))
        return pwd_check

class Parent(db.Model):
    __tablename__ = 'parents'

    id = db.Column(db.Integer , primary_key = True)
    firstname = db.Column(db.String, nullable = False)
    lastname = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False , unique = True)
    _password = db.Column(db.String, nullable = False , unique = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    child = db.relationship('Student', backref='parent')

    def __repr__(self):
        return f'Parent(id={self.id}, name={self.firstname + self.lastname}, email={self.email})'
    
    @validates("firstname","lastname")
    def validates_name(self,key,name):
        if not name:
            raise ValueError("Value is required !")
        return name
    
    @validates("email")
    def validates_email(self,key,value):
        if not value:
            raise ValueError("Email Address is a required field!")
        if "@" and ".com" not in value:
            raise ValueError("Email address is not valid!")
        return value

    @hybrid_property
    def password(self):
        return self._password
    
    @password.setter
    def password(self,pwd):
        password_hash = bcrypt.generate_password_hash(pwd.encode('utf-8'))
        self._password = password_hash.decode('utf-8')
    
    def authenticate(self,pwd):
        pwd_check = bcrypt.check_password_hash(self._password, pwd.encode('utf-8'))
        return pwd_check
    
class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer , primary_key = True)
    course_name = db.Column(db.String, nullable = False , unique = True)
    description = db.Column(db.String, nullable = False)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.id'))

    docs = db.relationship('Document')

    def __repr__(self):
        return f'Course(id={self.id}, course__name={self.course_name}, description={self.description})'


class Document(db.Model):
    __tablename__ = 'documents'

    id = db.Column(db.Integer , primary_key = True)
    doc_name = db.Column(db.String, nullable = False)
    description = db.Column(db.String, nullable = False)
    doc_type = db.Column(db.String, nullable = False , unique = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.id'))
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))

    def __repr__(self):
        return f'Document(id={self.id}, doc_name={self.doc_name}, doc_type={self.doc_type})'