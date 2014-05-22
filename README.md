#node-server-tutorial

Simple Node Server for Women Who Code JavaScript study group

There are two sections of note:

app-routing.js is a one file server which serves to demonstrate some of the basics of working with node and express

##To run app-routing.js (root level):
* npm install express
* node app-routing.js (runs on localhost:3000)

In the app/ folder you find a more complete server architecture. This is a WIP but you can start to see how to hook up modules to some mock data.

##To run app.js (inside of app/)
* if on root level - cd app
* npm install (uses package.json)
* node app/app.js (runs on localhost:3200)

The most flushed out part of the api so far is the "cats":
####GET /cats
####PUT /cats/new
	looks for header values: 
		- type - String
		- name - String
		- gender - String
####GET /cats/[id]
####GET /cats/name/[name]
