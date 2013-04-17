It is a boilerplate for node + expressjs + cluster2 + dustjs + mocha.

Quick Start
-----
Assume you have cloned the repository locally and get into the repo folder.

You can run the server in the boilerplate
```
make clean install server (the first time)
or
make server
Access http://localhost:8080/
```

You can run the mocha unit testing alone
```
npm install -g mocha (if mocha not installed)
make clean install test (the first time)
or
make test
```

What it includes
-----
Expressjs with some best practises
* Routes in seperate files
* Error handling binded with custom errors
* Content negotiation
* Dust.js integrated with consolidate.js
* Custer2 intrgrated for scalability
* Mocha integrated for web endpoint testing and unit testing.

Folder structure
-----
###`config`
put config files for each env, env is read from process.NODE_ENV
###`libs`
utils and libraries
###`public`
img, css, js
###`routes`
route files, refer to base.js. It is better to have modularized route files if project goes big.
###`view`
dust template files
###`test`
test folder, mocha is used.


