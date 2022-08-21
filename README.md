# E-commerce Store

## Overview

This app similar to Amazon. The customer would have the ability to search and select products for purchase and have them "delivered home". The "store owner" will have the ability to display what items are for sale and make changes to products and the "shopper" would browse items and potentially make a purchase. Features are destinguished by "store owner"/"admin" and "shopper"/"user" in mind. Admin features include edit/delete/add products in the app. User features include add a purchase "basket" to carts history.Authentication features will be implemented to restrict certain app features depending on access type/scope. 


## Routing Approach - Client 1B 

- After boilerplate & dependencies are installed/configured (reactapp, dotenv, react-router), [PRODUCTS],[CARTS],[USERS] & [ADMIN] are the main routes for this app.
  - [Products]:
    - *VIEW(GET)*
      -  All Prodcuts(sort/filter) 
      - [NYI]NOT YET IMPLEMENTED
        - Single product page(by prodId) 
        - Rating/Review (purchased products)
    - *CREATE(POST)*
      - [Admin] Add new product to store.
    - *EDIT(PUT)*
      - [Admin] Modify existing product info.
    - *DELETE(DELETE)*
      - [Admin] Delete a product.
  - [CARTS]
    - *VIEW(GET)*
      - View Purchase history by logged in user.
    - *CREATE(POST)*
      - [Note] - *BEFORE PURCHASE*
        - *Basket* - add/edit/delete products to/in basket
        - *Basket* - Purchase
   - [USERS] 
      - *VIEW(GET)*
        - View user details by logged in user. 
        - [Admin] View all user details
      - *EDIT(PUT)*
        - Modify user details by logged in user 
      - *DELETE(DELETE)*
        - [Admin] Delete a user 
        - [NYI]
          - Delete Own user account 
 

## Authentication approach - Client 2B

- Create "global" variables(functions) to be accessed anywhere in app w/testing.
  - [Auth]
    - Create hook w/createContext,useContext,useMemo.
      - global access to (user,verifyadmin,login,logout/register)
    - *VIEW(GET)*
      - [Admin] Validate Admin by scope(user/admin)
    - *CREATE(POST)*
      - Register newly created user
      - Login user by username/pw

## Deployment Approach - 3B
- After installing heroku cli and creating an app name ensure that:
  - Config vars are in set in heroku & .env.local file is changed to server url address (heroku server url):
    - <SERVER_URL> & <TOKEN_HEADER_KEY>.


### User Login and Registration

- [References] Via Populi
  - 8/4 (first hour),8/8(second half``)

- [Core] 
  - A user should be able to register with the application.
    - [Stretch] The user's password should be encrypted via salt+hash algorithm.(7/21-Auth)
  - A user should be able to login with the application.
    - [Stretch] A user ID Token should be generated using JsonWebToken. The ID Token should then be persisted on client side with local storage. The client should then check for the existence of the token before prompting the user to authenticate.
    - [Stretch] A user should be able to logout of the application and login with a different account.

### User Shopping 
- [User]
    - Item Search(sort/asc/page etc.)
    - Add item to cart. 
    - Edit item in cart (increase/decrease qty.)
    - Delete item(s) in cart
    - Purchase items in cart
    - Rating/Review (purchased items)
    [Note] A user should be able to *VIEW(GET)* the following fields on a website:
      - title {String}
      - description {String}
      - ID {uuid[]}
      - Rating
      - category {String}
      - Price {Num}
      - Image {String}
    ```js
    //product list example
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }
    ```
    [Note] A user should be able to *CREATE-(POST)* the following fields on a website:
      - UserId {uuid}
      - products {productid:2,quantity:1},{productid:6,quantity:3}
      - createdAt {Date}
    
    [Note] A user should be able to *EDIT(PUT)* the following fields on a website:
      - ID {Num}
      - UserId {uuid}
      - products {productId:1,quantity:3}
      - lastModified {Date}
    [Note] A user should be able to *DELETE(DELETE)* the following fields on a website:
      - ID {Num}
      - UserId {uuid}
      - products {productId:1,quantity:3}
      - created at {Date}

### Admin Management
- [Admin]
  - Set items on Main Page
  - Edit/Delete/Add Products to website
  - [Stretch] An admin should be able to *View(GET)* the following fields in the website:
      - title {String}
      - description {String}
      - ID {uuid[]}
      - Rating
      - category {String}
      - Price {Num}
      - Image {String}
    
      - All users
      - 
  - [Stretch] An admin should be able to *CREATE(Post)* the following fields in the website:
      - title {String}
      - description {String}
      - status {String}
      - createdAt {Date}
      - createdById {uuid}
      - lastModified {Date}
      - lastUpdatedById {uuid}
    - [Stretch] An admin should be able to *EDIT(Put)* the following fields in the website:
      - title {String}
      - description {String}
      - status {String}
      - createdAt {Date}
      - createdById {uuid}
      - lastModified {Date}
      - lastUpdatedById {uuid}
    - [Stretch] An admin should be able to *DELETE(DELETE)* the following fields in the website:
      - title {String}
      - description {String}
      - status {String}
      - createdAt {Date}
      - createdById {uuid}
      - lastModified {Date}
      - lastUpdatedById {uuid}

### Super Stretch Goals

- Add support for users to be part of an organization.
- Add support for admin users in an organization to have authorized privileges that basic users do not.
- A user should be able to attach a file to a ticket.
- Add support for users to add comments onto a ticket.
- Add support for users to tag other users in a comment.
- Integrate any third party API

## Tech Stack

- [Required] Node - Runtime
- [Required] React - Client Framework
- [Required] Express - Server Framework
- [Required] MongoDB - Database
- [Required] Git - Code Versioning
- [Required] Github - Code Storage and Collaboration
- [Required] CORS - Express CORS Library
- [Suggested] Heroku - Hosted Deployment
- [Suggested] bcryptJS - User Authentication
- [Suggested] JsonWebToken - User Auth Tokens
- [Suggested] Bootstrap - CSS Framework
- [Suggested] Nodemon - Server Hot Reloading
- [Suggested] React-Router - Client Side Routing
- [Suggested] JSDOC - Code Comment Framework
- [Suggested] uuidv4 - Unique ID Generator
- [Suggested] TinyMCE - Rich Text Editor
