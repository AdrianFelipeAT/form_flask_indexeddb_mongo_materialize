from flask import Flask, request, render_template
import socket
from flask_pymongo import PyMongo
from flask import make_response
import json

app = Flask(__name__)

MONGODB_HOST = '179.16.10.80'
MONGODB_PORT = '27021'
MONGODB_TIMEOUT = 10000
MONGO_DBNAME = 'inspeccion'

URI_CONNECTION = "mongodb://" + MONGODB_HOST + ":" + MONGODB_PORT +  "/" + MONGO_DBNAME + ""

try:
    app.config["MONGO_URI"] = URI_CONNECTION
    mongo = PyMongo(app)
    print ('OK -- Connected to MongoDB at server')
except pymongo.errors.ServerSelectionTimeoutError as error:
    print ('Error with MongoDB connection:')
except pymongo.errors.ConnectionFailure as error:
    print ('Could not connect to MongoDB:' % error)



@app.route("/")
def index():
	return render_template("index.html")

@app.route("/inspeccion")
def inspeccion():
	return render_template("inspeccion.html")

@app.route("/primerosauxilios")
def primerosauxilios():
	return render_template("primerosauxilios.html")

@app.route("/resumen")
def resumen():
	return render_template("sincronizar.html")

@app.route("/reportes")
def reportes():
	import subprocess
	from flask import Response
	subprocess.call(r'mongoexport --db inspeccion --collection users --host=179.16.10.80 --port=27021 --type=csv --fieldFile "fields.txt" --out "export.csv"', shell=True)
	
	CSV_URL ="export.csv"
	with open(CSV_URL) as fp:
		csv = fp.read()
	
	return Response(
        csv,
        mimetype="text/csv",
        headers={"Content-disposition":
                 "attachment; filename=reportepuntos.csv"})

@app.route("/users", methods=['POST'])
def create_users():
	formulario = request.form.to_dict()
	if formulario:
		id = mongo.db.users.insert(
			{'punto': formulario}
		)
		response = {
			'id': str(id),
			'punto': formulario
		}
		return json.dumps(response)
	else:
		return {'message': 'received'}

		
	print(request.json)


@app.route('/ajax-login', methods=['POST'])
def ajax_login():
	username = request.form['id'];
	response = {'status':200, 'username': username, 'id': 1}
	return json.dumps(response)



@app.route('/manifest')
def manifest():
    res = make_response(render_template('manifest.appcache'), 200)
    res.headers["Content-Type"] = "text/cache-manifest"
    return res
    

#app.run(host='localhost')

if __name__ == "__main__":
	app.run(debug=True)
