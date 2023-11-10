import mysql.connector
from flask import Flask, jsonify, render_template, request, redirect, url_for
import datetime
app = Flask(__name__, static_folder='static')
db_config = {
    'host': 'localhost',
    'port': 3307,  
    'user': 'root',
    'password': 'root',
    'database': 'DB_PROBO',
}

# Create a connection to the database


def create_db_connection():
    return mysql.connector.connect(**db_config)


conn = create_db_connection()
# Create a cursor to interact with the database
cursor = conn.cursor()
@app.route('/')
def hello():
 
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
