#! /usr/bin/env python3

# importing flask and pusher
from flask import Flask, request, Markup
from pusher import Pusher
import re
import sys 
import os
from flask import render_template
import json 
from flask import jsonify 

app = Flask(__name__)

#@app.route('/')
#def helloworld():
#    return "Hello World"

@app.route('/')
def main():
    return render_template("dashboard.html")

@app.route('/jobschart')
def jobschart():
    return render_template('jobschart.html')

@app.route('/jobschartdata')
def jobschartdata():
    labels = ['1','2','3']
    data = [2, 3, 5]
    return jsonify({'payload':json.dumps({'data':data,'labels':labels})})





#    find_exp = re.compile("(Coordinates)\sfrom\sORCA-job\s\w*\sE\s(-?-\d*.\d*)")
#    count = 0 
#    labels = [] 
#    data = [] 

#    for file in os.listdir("."):
#        if file.endswith(".trj"):
#            f=open(file, "r")
#            trjdata=f.readlines()
#            f.close()
#        else:
#            continue 

#    for line in data:
#        energydata= find_exp.match(line)
#        if m:
#            data.append(count)
#            count += 1 
#            labels.append(str(m.groups()[1])
    
#return render_template("dashboard.html", labels=labels, data=data)



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
  app.run(debug=True, port=9997)
