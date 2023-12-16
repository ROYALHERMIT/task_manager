import mysql.connector
from flask import Flask, jsonify, render_template, request, redirect, url_for
from datetime import datetime
app = Flask(__name__, static_folder='static')
db_config = {
    'host': 'localhost',
    'port': 3307,  
    'user': 'root',
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
    now = datetime.now()
    formatted_date = now.strftime("%A, %B %d")
    current_hour = now.hour
    time_category = get_time_category(current_hour)

    return render_template('index.html', formatted_date=formatted_date,time_category=time_category)
def get_time_category(current_hour):

    if 5 <= current_hour < 12:
        return "Morning"
    elif 12 <= current_hour < 18:
        return "Afternoon"
    else:
        return "Evening"
    
@app.route('/signup')
def signupform():
    return render_template('signup.html')

@app.route('/login')
def loginform():
    return render_template('login.html')

@app.route('/project')
def create_project():
    return render_template('project.html')

@app.route('/invite')
def invite_modal():
    return render_template('invite.html')

@app.route('/signup_form', methods=['POST'])
def signup_form():
    user_name=request.form['name']
    user_email=request.form['email']
    user_phone = request.form['phone']
    user_pass = request.form['password']


    # Create a database connection
 
    conn = mysql.connector.connect(**db_config)
    cursor = None
    try:
        # Use a try-except block to handle any potential errors
        # Create a cursor to interact with the database
        cursor = conn.cursor()

        # SQL query to retrieve the user based on the phone number
        select_query = "SELECT * FROM users WHERE phone = %s or email = %s"

        # The parameter values
        user_phone = user_phone
        user_email = user_email  # Hashed password, adjust accordingly
        select_values = (user_phone, user_email)
        cursor.execute(select_query, select_values)
        result = cursor.fetchone()
        if result:
            return jsonify({"status": "invalid", "message": "User already registered"})

        else:
            # User does not exist
            insert_query = "INSERT INTO users (username, email, phone, password) VALUES (%s, %s, %s, %s)"
            cursor.execute(insert_query, (user_name,user_email,user_phone, user_pass))
            conn.commit()
            select_query = "SELECT * FROM users WHERE phone = %s"

            # The parameter values
            select_params = (user_phone,)

            # Execute the SELECT query
            cursor.execute(select_query, select_params)
            result = cursor.fetchone()
            print(result)
            if result:
                return jsonify({"status": "success", "message": "User registered successfully.","data":result})
            else:
                return jsonify({"status": "invalid", "message": "something went wrong"})
    except Exception as e:
        # Handle any exceptions that may occur during the database operation
        return jsonify({"status": "error", "message": f"An error occurred: {e}"})
    finally:
        # Close the cursor and connection
        cursor.close()
        conn.close()

@app.route('/login_form', methods=['POST'])
def login_form():
    user_email = request.form['email']
    user_pass = request.form['password']

    # Create a database connection
    conn = mysql.connector.connect(**db_config)
    cursor = None 

    try:
        # Use a try-except block to handle any potential errors
        # Create a cursor to interact with the database
        cursor = conn.cursor()

        # SQL query to retrieve the user based on the phone number
        select_query = "SELECT * FROM users WHERE email = %s AND password = %s"

        # The parameter values
        user_mail = user_email
        user_password = user_pass  # Hashed password, adjust accordingly
        select_values = (user_mail,user_password,)

        # Execute the SELECT query
        cursor.execute(select_query, select_values)
        result = cursor.fetchone()
        print(result)
        if result:
            return jsonify({"status": "success", "message": "Login successful!", "data": result})

        else:
            # User does not exist
            return jsonify({"status": "error", "message": "Invalid credentials."})

    except Exception as e:
        # Handle any exceptions that may occur during the database operation
        return jsonify({"status": "error", "message": f"An error occurred: {e}"})
    finally:
        # Close the cursor and connection
        cursor.close()
        conn.close()

@app.route('/project_form', methods=['POST'])
def project_form():
    project_name = request.form['name']
    user_id = request.form['uid']
    print(user_id)
    # Create a database connection
 
    conn = mysql.connector.connect(**db_config)
    cursor = None
    try:
        # Use a try-except block to handle any potential errors
        # Create a cursor to interact with the database
        cursor = conn.cursor()
        # The parameter values
        p_name = project_name
        uid = user_id  # Hashed password, adjust accordingly
        # User does not exist
        insert_query = "INSERT INTO projects (p_name, user_id) VALUES (%s, %s)"
        select_values = (p_name, uid)
        cursor.execute(insert_query, select_values )
        conn.commit()
        select_query = "SELECT * FROM projects WHERE p_name = %s"


        select_params = (p_name,)

       
        cursor.execute(select_query, select_params)
        result = cursor.fetchall()
        print(result)
        

        if result:
            return jsonify({"status": "success", "message": "Project created sucessfully.","data":result})
        else:
            return jsonify({"status": "invalid", "message": "Could not create the project."})
    except Exception as e:
        # Handle any exceptions that may occur during the database operation
        return jsonify({"status": "error", "message": f"An error occurred: {e}"})
    finally:
        # Close the cursor and connection
        cursor.close()
        conn.close()

@app.route('/invite_form', methods=['POST'])
def invite_form():
    invited = request.form['invitee']
    projectName = request.form['project']
    # Create a database connection
 
    conn = mysql.connector.connect(**db_config)
    cursor = None
    try:
        # Use a try-except block to handle any potential errors
        # Create a cursor to interact with the database
        cursor = conn.cursor()
        # The parameter values
        invitee = invited
        project = projectName  # Hashed password, adjust accordingly
        friendid_query = "SELECT id FROM users WHERE email = %s"
        params = (invitee,)
        cursor.execute(friendid_query, params)
        friend_id = cursor.fetchall()
        print(friend_id)
        projectName_query = "SELECT p_id FROM projects WHERE p_name = %s"
        p_params = (project,)
        cursor.execute(projectName_query, p_params)
        project_id = cursor.fetchall()
        print(project_id)
        # User does not exist
        insert_query = "INSERT INTO friends (f_email, friend_id, project_id) VALUES (%s, %s, %s)"
        select_values = (invitee, friend_id, project_id)
        cursor.execute(insert_query, select_values )
        conn.commit()
        select_query = "SELECT * FROM friends WHERE f_email = %s"
        cursor.execute(select_query, params)
        result = cursor.fetchall()
        # print(result)
        if result:
            return jsonify({"status": "success", "message": "Invited sucessfully.","data":result})
        else:
            return jsonify({"status": "invalid", "message": "Could not invite the user."})
    except Exception as e:
        # Handle any exceptions that may occur during the database operation
        return jsonify({"status": "error", "message": f"An error occurred: {e}"})
    finally:
        # Close the cursor and connection
        cursor.close()
        conn.close()    


if __name__ == '__main__':
    app.run(debug=True)