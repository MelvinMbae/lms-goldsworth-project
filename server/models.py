from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates

db = SQLAlchemy()

class Student(db.Model):
    __tablename__ = 'students'

    id = db.Column(db.Integer , primaryKey = True)
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



class Teacher(db.Model):
    __tablename__ = 'teachers'

    id = db.Column(db.Integer , primaryKey = True)
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
    


class Parent(db.Model):
    __tablename__ = 'parents'

    id = db.Column(db.Integer , primaryKey = True)
    firstname = db.Column(db.String, nullable = False)
    lastname = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False , unique = True)
    _password = db.Column(db.String, nullable = False , unique = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DtaeTime, onupdate = db.func.now())

    child = db.relationship('Student', backref='parent')

    def __repr__(self):
        return f'Parent(id={self.id}, name={self.firstname + self.lastname}, email={self.email})'

class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer , primaryKey = True)
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

    id = db.Column(db.Integer , primaryKey = True)
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