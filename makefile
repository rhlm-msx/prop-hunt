SITE_NAME=brickmanson
SANDBOX_NAME=$(shell cat dw.json | jq .hostname -r)
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

sandbox: dw.json
	open "https://$(SANDBOX_NAME)/on/demandware.store/Sites-Site/"

storefront: dw.json
	open "https://$(SANDBOX_NAME)/on/demandware.store/Sites-$(SITE_NAME)-Site"
