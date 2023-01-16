# API-REST of Providers

API-REST of SIU-Guarani developed with Swagger and PostgreSQL.

## Installation

Clone the repository:

```bash
git clone https://github.com/hadominguez/api-guarani.git
```

Install all packages:

```bash
npm install
```

Copy environment file:

```bash
cp .env.example .env.dev
```

Config the file .env.dev:

```bash
# Host
HTTP_HOST=localhost
# Port
HTTP_PORT=3000
# Level Log (error, warn, info, http, verbose, debug, silly)
LEVEL_LOG_FILE=info
# Level Log (error, warn, info, http, verbose, debug, silly)
LEVEL_LOG_CONSOLE=error
# Host DB
HOST_DB=localhost
# Port DB
PORT_DB=5432
# Name DB
NAME_DB=database
# USER DB
USER_DB=user
# PASSWORD DB
PASS_DB=pasword
```

Run the system:

```bash
npm run start-dev
```


## License

[MIT](https://choosealicense.com/licenses/mit/)