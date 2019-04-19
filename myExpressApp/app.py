#! /usr/bin/env python3

# importing flask and pusher
from flask import Flask, render_template, request
from pusher import Pusher

app = Flask(__name__)

# for building a live app... may not need later
# configure pusher object
#pusher = Pusher(app_id='PUSHER_APP_ID',
  #  key='PUSHER_APP_KEY',
 #   secret='PUSHER_APP_SECRET',
  #  cluster='PUSHER_APP_CLUSTER',
   # ssl=True)


#@app.route('/')
#def index():
#    return render_template('index.html')

#@app.route('/dashboard')
#def dashboard():
#    return render_template('dashboard.html')

if __name__ == '__main__':
    app.run(debug = True)
