// Get products response definition
/**
 * @swagger
 *  definitions:
 *      ListOfProducts:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: success
 *              data:
 *                  type: object
 *                  properties:
 *                      products:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                      example: 63c3f2da6b2ddfba6d031cb0
 *                                  name:
 *                                      type: string
 *                                      example: product name
 *                                  slug:
 *                                      type: string
 *                                      example: product-name
 *                                  text:
 *                                      type: string
 *                                      example: product short summary
 *                                  desc:
 *                                      type: string
 *                                      example: product short summary
 *                                  tags:
 *                                      type: array
 *                                      example: new, original, nike
 *                                  category:
 *                                      type: object
 *                                      properties:
 *                                          _id:
 *                                              type: string
 *                                              example: 63c3f2da6b2ddfba6d031cb0
 *                                          name:
 *                                              type: string
 *                                              example: category name
 *                                  brand:
 *                                      type: object
 *                                      properties:
 *                                          _id:
 *                                              type: string
 *                                              example: 63c3f2da6b2ddfba6d031cb0
 *                                          name:
 *                                              type: string
 *                                              example: category name
 *                                  price:
 *                                      type: string
 *                                      example: 10000
 *                                  discount:
 *                                      type: string
 *                                      example: 10
 *                                  isSpecial:
 *                                      type: boolean
 *                                      description: Check if product is special
 *                                  inventory:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                              color:
 *                                                  type: string
 *                                                  example: yellow
 *                                              size:
 *                                                  type: string
 *                                                  example: small
 *                                              quantity:
 *                                                  type: number
 *                                                  example:
 *                                  createdAt:
 *                                      type: date
 *                                      example: 2023-02-21T07:41:34.181Z
*/


// Get single product response definition
/**
 * @swagger
 *  definitions:
 *      SingleProduct:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: success
 *              data:
 *                  type: object
 *                  properties:
 *                      product:
 *                          type: object
 *                          properties:
 *                              _id:
 *                                  type: string
 *                                  example: 63c3f2da6b2ddfba6d031cb0
 *                              name:
 *                                  type: string
 *                                  example: product name
 *                              slug:
 *                                  type: string
 *                                  example: product-name
 *                              text:
 *                                  type: string
 *                                  example: product short summary
 *                              desc:
 *                                  type: string
 *                                  example: product short summary
 *                              tags:
 *                                  type: array
 *                                  example: new, original, nike
 *                              category:
 *                                  type: object
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          example: 63c3f2da6b2ddfba6d031cb0
 *                                      name:
 *                                          type: string
 *                                          example: category name
 *                              brand:
 *                                  type: object
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          example: 63c3f2da6b2ddfba6d031cb0
 *                                      name:
 *                                          type: string
 *                                          example: category name
 *                              price:
 *                                  type: string
 *                                  example: 10000
 *                              discount:
 *                                  type: string
 *                                  example: 10
 *                              isSpecial:
 *                                  type: boolean
 *                                  description: Check if product is special
 *                              inventory:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          color:
 *                                              type: string
 *                                              example: yellow
 *                                          size:
 *                                              type: string
 *                                              example: small
 *                                          quantity:
 *                                              type: number
 *                                              example:
 *                              createdAt:
 *                                  type: date
 *                                  example: 2023-02-21T07:41:34.181Z
*/


// Get slides response definition
/**
 * @swagger
 *  definitions:
 *      ListOfSlides:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: success
 *              data:
 *                  type: object
 *                  properties:
 *                      slides:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                      example: 63c3f2da6b2ddfba6d031cb0
 *                                  title:
 *                                      type: string
 *                                      example: slide title
 *                                  image:
 *                                      type: string
 *                                      example: slide image
 *                                  link:
 *                                      type: string
 *                                      example: slide link
 *                                  createdAt:
 *                                      type: date
 *                                      example: 2023-02-21T07:41:34.181Z
*/


// Get my profile response definition
/**
 * @swagger
 *  definitions:
 *      MyProfile:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: success
 *              data:
 *                  type: object
 *                  properties:
 *                      product:
 *                          type: object
 *                          properties:
 *                              _id:
 *                                  type: string
 *                                  example: 63c3f2da6b2ddfba6d031cb0
 *                              email:
 *                                  type: string
 *                                  example: product name
 *                              orders:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          amount:
 *                                              type: integer
 *                                              example: 100000
 *                                          products:
 *                                              type: array
 *                                              items:
 *                                                  type: object
 *                                                  properties:
 *                                                      _id:
 *                                                          type: string
 *                                                          example: 63c3f2da6b2ddfba6d031cb0
 *                                                      name:
 *                                                          type: string
 *                                                          example: product name
 *                                                      quantity:
 *                                                          type: number
 *                                                          example: 5
 *                                          createdAt:
 *                                              type: date
 *                                              example: 2023-02-21T07:41:34.181Z
 *                              createdAt:
 *                                  type: date
 *                                  example: 2023-02-21T07:41:34.181Z
*/


// Get all products
/**
 * @swagger
 *  /products:
 *      get:
 *          tags: [Products]
 *          summary: Get all products
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *                  description: Search products by name
 *              -   in: query
 *                  name: page
 *                  type: integer
 *                  description: The page of the product list
 *              -   in: query
 *                  name: itemsPerPage
 *                  type: integer
 *                  description: The number of items per page
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ListOfProducts'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/


// Get a category's products
/**
 * @swagger
 *  /categories/{slug}:
 *      get:
 *          tags: [Categories]
 *          summary: Get a category's products
 *          parameters:
 *              -   in: path
 *                  name: slug
 *                  type: string
 *                  description: The slug of the category
 *              -   in: query
 *                  name: page
 *                  type: integer
 *                  description: The page of the product list
 *              -   in: query
 *                  name: itemsPerPage
 *                  type: integer
 *                  description: The number of items per page
 *              -   in: query
 *                  name: color
 *                  type: integer
 *                  description: The color of the product
 *              -   in: query
 *                  name: size
 *                  type: string
 *                  description: The size of the product
 *              -   in: query
 *                  name: price[min]
 *                  type: integer
 *                  description: The minimum price of the product
 *              -   in: query
 *                  name: price[max]
 *                  type: integer
 *                  description: The minimum price of the product
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ListOfProducts'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/


// Get a brand's products
/**
 * @swagger
 *  /brands/{slug}:
 *      get:
 *          tags: [Brands]
 *          summary: Get a brand's products
 *          parameters:
 *              -   in: path
 *                  name: slug
 *                  type: string
 *                  description: The slug of the brand
 *              -   in: query
 *                  name: page
 *                  type: integer
 *                  description: The page of the product list
 *              -   in: query
 *                  name: itemsPerPage
 *                  type: integer
 *                  description: The number of items per page
 *              -   in: query
 *                  name: color
 *                  type: integer
 *                  description: The color of the product
 *              -   in: query
 *                  name: size
 *                  type: string
 *                  description: The size of the product
 *              -   in: query
 *                  name: price[min]
 *                  type: integer
 *                  description: The minimum price of the product
 *              -   in: query
 *                  name: price[max]
 *                  type: integer
 *                  description: The minimum price of the product
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ListOfProducts'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/


// Get a single product
/**
 * @swagger
 *  /products/{slug}:
 *      get:
 *          tags: [Products]
 *          summary: Get a single product by slug
 *          parameters:
 *              -   in: path
 *                  name: slug
 *                  type: string
 *                  required: true
 *                  description: The product's slug
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/SingleProduct'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
*/


// Get all slides
/**
 * @swagger
 *  /slider:
 *      get:
 *          tags: [Slider]
 *          summary: Get all slides
 *          parameters:
 *              -   in: query
 *                  name: slideCount
 *                  type: string
 *                  description: The number of slides
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ListOfSlides'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/


// Get user profile
/**
 * @swagger
 *  /profile:
 *      get:
 *          tags: [User]
 *          summary: Get all slides
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/MyProfile'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/











