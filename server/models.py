from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from flask_bcrypt import Bcrypt
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime


db = SQLAlchemy()
bcrypt = Bcrypt()


class Parent(db.Model, SerializerMixin):
    __tablename__='parents'
    
    id=db.Column(db.Integer, primary_key=True)
    first_name=db.Column(db.String)
    last_name=db.Column(db.String)
    email=db.Column(db.String, unique=True)
    _password_hash = db.Column(db.String, nullable=False)
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
