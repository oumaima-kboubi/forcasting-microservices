# Forcasting-microservices

A microservices architecture for forcasting Product Orders in a month

## Architecture
The application is composed by:

- **API Gateway:** receives and orchestrates requests from the client then redirect each request to the right microservice.
- **Forecast Microservice:** Predict the orders of a product in an **E-shop** in a specific month.
- **Security Microservice:** Authentication and Authorization (user creation).
- **Planning Microservice:** Plans creation based on the generated forecast.
- **Forecast UI:** The user interfaces to interact with the whole system.

<img src= "https://github.com/oumaima-kboubi/forcasting-microservices/blob/main/images/architecture%20microservice.png" />

## Some of the UI Interfaces

- **Login**

<img src= "https://github.com/oumaima-kboubi/forcasting-microservices/blob/main/images/login.png" />

- **SignUp**

<img src= "https://github.com/oumaima-kboubi/forcasting-microservices/blob/main/images/signup.png" />

- **Forgot Password**

<img src= "https://github.com/oumaima-kboubi/forcasting-microservices/blob/main/images/passwordRecovery.png" />

- **Product Order forcast action view**

<img src= "https://github.com/oumaima-kboubi/forcasting-microservices/blob/main/images/interface.png" />
