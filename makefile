start: run shell

run:
	cd docker && docker compose up -d

shell:
	cd docker && docker compose exec angular bash

stop:
	cd docker && docker compose down -v

rebuild:
	cd docker && docker compose build --no-cache
