# E-commerce Store

## Overview

The goal of this project is to create an app similar to Amazon. The customer would have the ability to search and select products for purchase and have them delivered home. The store owner will have the ability to display what items are for sale and remove/edit products details. The features will be user cart such as adding/deleting/modifying items & rating/review system for products purchased only. The admin features will be edit/delete/add/view products on the website. Both user and admin will have login/registration and have access to certain info only.


## Approach - Client 1B

- Install boilerplate (reactapp, dotenv, react-router) and set routing w/testing.
  ```js
  //create .env.local file and add server endpoint
  REACT_APP_URL_ENDPOINT = http://localhost:4000
  ```
- Add Routes /w pages for carts,users,products(components)
  - Products
    - Display(get).
      -  All Prodcuts(sort/filter) 
      -  single product page(by prodId)
      -  user shopping w/modal(display more details about product)
    - Add/Edit/Delete (post/put/delete). ADMIN
      - Add Product
  - Basket(before checkout/purhcase)
    - Display(get) all.
    - add/edit/delete products to/in basket - USER
  - Carts(After checkout)
    - Display cart history by user(get) Only. USER
    - View all carts after checkout. ADMIN
  - User
    - Display w/modal to edit info(get/put) . USER
    - Display all users(get) . ADMIN
    - register user
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
