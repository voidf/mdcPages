from flask import Flask, request,make_response
from werkzeug.routing import BaseConverter

ap = Flask(__name__)

@ap.route("/",defaults={"reqpath":""},methods=["GET","POST","PUT","DELETE","PATCH","TRACE","OPTIONS","CONNECT","HEAD"])
@ap.route("/<path:reqpath>",methods=["GET","POST","PUT","DELETE","PATCH","TRACE","OPTIONS","CONNECT","HEAD"])
def hw(reqpath):
	rr=make_response(request.method+"\n"+request.get_data().decode('utf-8'))

	#rr.headers={}
	rr.headers["Access-Control-Allow-Origin"]="*"
	rr.headers["Access-Control-Expose-Headers"]="*"
	rr.headers["Access-Control-Allow-Methods"]="POST, GET, PUT, DELETE, PATCH, TRACE, OPTIONS, CONNECT, HEAD"
	return rr
	

if __name__=="__main__":
	ap.run(port=8086)