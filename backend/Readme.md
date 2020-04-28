npx sequelize-cli model:generate --name user --attributes name:string

POST http://localhost:5000/api/v1/signup
POST http://localhost:5000/api/v1/signin
