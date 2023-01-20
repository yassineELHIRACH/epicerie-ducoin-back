<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


----------
An application allowing you to shop from home in the epicerieducoin shop and to be able to pick them up without a painful waiting time.

Created by `El hirach Yassine ` and `Karl Steeve Sena Afatolo`

# Getting started

## Installation

Clone the repository

    git clone https://github.com/yassineELHIRACH/epicerie-ducoin-back.git

Switch to the repo folder

    cd epicerie-ducoin-back
    
Install dependencies
    
    npm install

    
----------

## Database

This project requires a local MySQL installation. See `src/app.module.ts` for credentials, and make sure there are matching credentials in the database and the source code.

Execute the `init.sql` into the database named "market".

----------

## NPM scripts

- `npm start` - Start application
- `npm run start:dev` - Start application in watch mode

----------

## Endpoints

BaseUrl = http://localhost:3000

- `Get` /products  => return all products.
- `Get` /products/type/:type => return all products by :type (Boisson, Sandwicherie, Menager, Patisserie).
- `Get` /products/id/:id  => return a product by it's :id.
- `Get` /products/:type/:id => return a product by it's :id and it's type.

- `Post` /products/:type => create a product with :type as it's type. Don't forget the body, a product needs a title (string), a price(number), a description, a quantity(number) and a url pointing to an image.

- `Put` /products/id/:id => update a product by it's :id.
- `Delete` /products/id/:id => delete a product by it's :id.

- `Get` /basket => return all baskets.
- `Get` /basket/:id => return a basket by it's id.
- `Post` /basket/create => create a basket with a body containing: a price(number) and a tab of products.
- `Put` /basket/confirm/:id => confirm a basket by it's :id.
- `Delete` /basket/:id => delete a basket by it's :id. 
