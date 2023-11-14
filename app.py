import mysql.connector
from flask import Flask, jsonify, render_template, request, redirect, url_for
from datetime import datetime
app = Flask(__name__, static_folder='static')
db_config = {
    'host': 'localhost',
    'port': 3306,  
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
@app.route('/',methods=['GET'])
def hello():
    current_datetime = datetime.now()
    month = current_datetime.strftime('%B')  # Full month name
    day = current_datetime.day
    day_of_week = current_datetime.strftime('%A')
    time_of_day = get_time_of_day(current_datetime.hour)

    return render_template('index.html', month=month, day=day,  day_of_week=day_of_week, time_of_day=time_of_day)

def get_time_of_day(hour):
    if 6 <= hour < 12:
        return 'morning'
    elif 12 <= hour < 18:
        return 'afternoon'
    else:
        return 'evening'
    

if __name__ == '__main__':
    app.run(debug=True)
