"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000
/* ------------------------------------------------------- */
const swaggerAutogen = require('swagger-autogen')() // swagger fonksiyon
const packageJson = require('./package.json')

const document = {
	info: {
		version: packageJson.version,
		title: packageJson.title,
		description: packageJson.description,
		termsOfService: "http://www.clarusway.com",
		contact: { name: packageJson.author, email: "ali@clarusway.com" },
		license: { name: packageJson.license, },
	},
	host: `${HOST}:${PORT}`,
	basePath: '/',
	schemes: ['http', 'https'],
	// JWT Settings:
	securityDefinitions: {
		JWT: {
			type: 'apiKey',
			in: 'header',
			name: 'Authorization',
			description: 'Enter Your AccessToken (JWT) for Login. Example: <b>Bearer <i>...token...<i></b>'
		}
	},
	security: [{ "JWT": true }],
	definition: {
		// Schemas
	}
};

const routes = ['./index.js']
const outputFile = './src/configs/swagger.json'

// Create JSON file:
swaggerAutogen(outputFile, routes, document)


// Swagger Autogen, Express.js gibi framework'lerle kullanılan ve API dökümantasyonu oluşturmayı kolaylaştıran bir araçtır. Swagger Autogen, yazmış olduğunuz backend kodlarından Swagger/OpenAPI belgelerini otomatik olarak üretir. Bu, manuel olarak JSON  oluşturmak yerine, API dökümantasyonunuzu kodunuzla senkronize tutmanın pratik bir yoludur.

