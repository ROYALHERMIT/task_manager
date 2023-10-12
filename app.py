from flask import Flask,render_template
import datetime

app = Flask(__name__)

@app.route('/gettime', methods=['GET'])
def hello():
    now = datetime.datetime.now()
    kwargs = dict()
    type = 'student'
    student = {'name':'Abhijit','age':24,'type':'student'}
    teacher = {'name':'Rick','age':22,'type':'teacher'}
    entities = {'student':student,'teacher':teacher}
    
    
    return render_template('index.html', now=now, type=type, student=student, teacher=teacher, entities=entities)

if __name__ == '__main__':
    app.run(debug=True)
