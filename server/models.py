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


class Parent(db.Model):
    __tablename__ = 'parents'

    id = db.Column(db.Integer , primaryKey = True)
    firstname = db.Column(db.String, nullable = False)
    lastname = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False , unique = True)
    _password = db.Column(db.String, nullable = False , unique = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DtaeTime, onupdate = db.func.now())

class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer , primaryKey = True)
    coursename = db.Column(db.String, nullable = False , unique = True)
    description = db.Column(db.String, nullable = False)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

class Document(db.Model):
    __tablename__ = 'documents'

    id = db.Column(db.Integer , primaryKey = True)
    doc_name = db.Column(db.String, nullable = False)
    description = db.Column(db.String, nullable = False)
    doc_type = db.Column(db.String, nullable = False , unique = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())