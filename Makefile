
clean:
	-rm -rf node_modules

install:
	-npm install

server:
	NODE_ENV=default node server.js

.PHONY: test
test:
	NODE_ENV=default mocha ./test
