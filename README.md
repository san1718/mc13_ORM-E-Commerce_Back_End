# ORM: E-Commerce Back End

## **Table of Contents**
* [Overview](#overview)
* [Installation / Usage](#installation--usage)
* [Technologies Used](#technologies-used)
* [Links](#links)
* [Summary](#summary)
* [Screenshots](#screenshots)

## Overview
The **E-Commerce Back End** provides a robust and scalable solution for managing the backend of an e-commerce website. 
This backend system leverages **Sequelize** with **PostgreSQL** to offer seamless data management for categories, products, and tags. 
By using modern technologies such as **Node.js** and **Express.js**, this solution helps businesses compete in the fast-evolving e-commerce market, ensuring efficient handling of data while streamlining the management process.

## **Installation / Usage**
1. **Install dependencies:**
    ```bash
    npm install
    ```
2. **Configure Environment Variables (`.env` file):**
* Create a `.env` file in the root of the directory and add the PostgreSQL data:
    ```plaintext
    DB_NAME=ecommerce_db
    DB_USER=your_username
    DB_PASSWORD=your_password
    ```
3. **Create and Seed the Database:**
* Run the `schema` file to create the database and tables:
    ```bash
    psql -U your_username -d ecommerce_db -f db/schema.sql
    ```
* **Seed database:**
    ```bash
    npm run seed
    ```
4. **Run the server:**
    ```bash
    npm start
    ```
5. **Test:**
    * Use **Insomnia** or **Postman** for endpoint testing

## **Technologies Used**
### Back-End
* **Node.js:** JavaScript runtime for building server-side applications.
* **Express.js:** Web framework for Node.js, used for building the API.
* **Sequelize:** ORM for managing the PostgreSQL database.
* **PostgreSQL:** Relational database system for storing the e-commerce data.
### Development Tools
* **dotenv:** To manage environment variables securely.
* **Insomnia / Postman:** Tools for API endpoint testing.

## **Links**
[Home](https://github.com/san1718/mc13_ORM-E-Commerce_Back_End)
<br />
[Demo Category](https://drive.google.com/file/d/11GlZvCBoykpQBJKjM7i_62qgDpDg9CvZ/view?usp=drive_link)
<br />
[Demo Product](https://drive.google.com/file/d/19Y_9DM2KHbpoEbDuYS5JSe2FirpCHUrM/view?usp=sharing)
<br />
[Demo Tag](https://drive.google.com/file/d/15-YZ-I6KfnX7UehWV_RlVcBhFm57NlwO/view?usp=sharing)

## Summary
The **E-Commerce Backend** provides a scalable and efficient solution for managing e-commerce data, including categories, products, and tags. Built with **Node.js**, **Express.js**, **Sequelize**, and **PostgreSQL**, this backend allows for easy management of product data and smooth integration with front-end platforms. With built-in features for creating, updating, and deleting records, it offers a solid foundation for online stores, ensuring quick, secure, and organized data handling.

## **Screenshots**
<img width="500" alt="Set" src="https://github.com/san1718/mc13_ORM-E-Commerce_Back_End/blob/main/images/set.png">
