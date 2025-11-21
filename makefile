install:
	npm install

all: compile upload

compile:
	npm run 'compile:js'
	npm run 'compile:scss'
	npm run 'compile:fonts'

upload:
	npm run 'uploadCartridge'

upload_all:
	bash uploadcart.sh

watch:
	npm run watch

