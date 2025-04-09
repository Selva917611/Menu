import os

class Config:
    DEBUG = True
    TESTING = False
    DATABASE_URI = os.getenv('DATABASE_URI', 'sqlite:///restaurant.db')
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key_here')