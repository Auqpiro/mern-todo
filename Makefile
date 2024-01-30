install:
	npm ci

dev:
	npm run dev

build:
	npm run build --prefix client

lint:
	npm run lint --prefix client

start:
	npm start

server:
	npm start

client:
	npm run dev --prefix client