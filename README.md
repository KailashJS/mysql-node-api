## command to eun the docker MySQL container

docker run --name mysql-node-api -d -p 3307:3306 -v mysql-node-api:/var/lib/mysql -e MYSQL_ROOT_PASSWORD='AMSKarmajeet@123' mysql:latest

## Sample .env

MYSQL_DATABASE_NAME = db_name
MYSQL_HOST = localhost
MYSQL_USER = root
MYSQL_PASSWORD = db_user_password
MYSQL_PORT = mySQl port default 3306
PORT = 5000 default port foryou backend express app
