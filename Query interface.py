
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///logs.db'
db = SQLAlchemy(app)

class Log(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    level = db.Column(db.String(50))
    message = db.Column(db.String(255))
    resourceId = db.Column(db.String(50))
    timestamp = db.Column(db.DateTime)
    traceId = db.Column(db.String(50))
    spanId = db.Column(db.String(50))
    commit = db.Column(db.String(50))
    parentResourceId = db.Column(db.String(50))

db.create_all()

@app.route('/ingest', methods=['POST'])
def ingest_log():
    log_data = request.get_json()
    log_entry = Log(
        level=log_data['level'],
        message=log_data['message'],
        resourceId=log_data['resourceId'],
        timestamp=datetime.strptime(log_data['timestamp'], '%Y-%m-%dT%H:%M:%SZ'),
        traceId=log_data['traceId'],
        spanId=log_data['spanId'],
        commit=log_data['commit'],
        parentResourceId=log_data['metadata']['parentResourceId'] if 'metadata' in log_data else None
    )
    db.session.add(log_entry)
    db.session.commit()
    return 'Log ingested successfully', 200

if __name__ == '__main__':
    app.run(port=3000)
