# ORM: E-Commerce Back End

## Overview
The website will show an effective way to compete against other e-commerce websites that use the latest technologies.
This will show a comprehensive backend solution for a better e-commerce platform for management.
The E-Commerce Backend will provide a better and efficient foundation for the platform.

## Installation / Usage
1. Install dependencies: 
    * npm install
2. Configure Environment Variables (.env file): 
* Create a .env file in the root of the directory and add the PostgreSQL data:
    * DB_NAME=ecommerce_db
    * DB_USER=your_username
    * DB_PASSWORD=your_password
3. Create and Seed the Database:
* Run the schema file to create the database and tables:
    * psql -U your_username -d ecommerce_db -f db/schema.sql
* Seed database:
    * npm run seed
4. Run the server:
    * npm start
5. Test:
    * Use Insomnia or Postman for endpoint testing

## Technologies Used
* Node.js
* Express.js
* Sequelize
* PostreSQL
* dotenv
* Insomnia

## Links
[Home](https://github.com/san1718/mc13_ORM-E-Commerce_Back_End)
<br />
[Deployed]()

## Summary
The E-Commerce Backend will show a solution to the problems of management for online store operations.

## Screenshots
<img width="1000" alt="Homepage" src="">
<img width="1000" alt="Homepage" src="">
