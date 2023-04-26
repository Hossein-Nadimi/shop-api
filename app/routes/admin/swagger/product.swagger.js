// AddProduct swagger component
/**
 * @swagger
 *  components:
 *      schemas:
 *          AddProduct:
 *              type: object
 *              required:
 *                  -   name
 *                  -   text
 *                  -   desc
 *                  -   tags
 *                  -   category
 *                  -   discount
 *                  -   price
 *                  -   isSpecial
 *                  -   images
 *              properties:
 *                  name:
 *                      type: string
 *                      description: The name of the product
 *                      example: product name
 *                  text:
 *                      type: string
 *                      description: The summary of the product description
 *                      example: product short summary
 *                  desc:
 *                      type: string
 *                      description: The summary of the product description
 *                      example: product short summary
 *                  tags:
 *                      type: array
 *                      description: The tags of the product
 *                  category:
 *                      type: string
 *                      description: The category of the product
 *                      example: 63c1023b1ca714a635355f90
 *                  brand:
 *                      type: string
 *                      description: The brand of the product
 *                      example: 63c1023b1ca714a635355f90
 *                  price:
 *                      type: string
 *                      description: The price of the product
 *                      example: 10000
 *                  discount:
 *                      type: string
 *                      description: The discount of the product
 *                      example: 10
 *                  images:
 *                      type: array
 *                      items:
 *                          type: string
 *                          format: binary
 *                  isSpecial:
 *                      type: boolean
 *                      description: Select true if product is special
*/

// UpdateProduct swagger component
/**
 * @swagger
 *  components:
 *      schemas:
 *           UpdateProduct:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      description: The name of the product
 *                      example: product name
 *                  text:
 *                      type: string
 *                      description: The summary of the product description
 *                      example: product short summary
 *                  desc:
 *                      type: string
 *                      description: The summary of the product description
 *                      example: product short summary
 *                  tags:
 *                      type: array
 *                      description: The tags of the product
 *                  category:
 *                      type: string
 *                      description: The category of the product
 *                      example: 63c1023b1ca714a635355f90
 *                  brand:
 *                      type: string
 *                      description: The brand of the product
 *                      example: 63c1023b1ca714a635355f90
 *                  price:
 *                      type: string
 *                      description: The price of the product
 *                      example: 10000
 *                  discount:
 *                      type: string
 *                      description: The discount of the product
 *                      example: 10
 *                  images:
 *                      type: array
 *                      items:
 *                          type: string
 *                          format: binary
 *                  isSpecial:
 *                      type: boolean
 *                      description: Check if product is special
*/

// AddInventory swagger component
/**
 * @swagger
 *  components:
 *      schemas:
 *          AddInventory:
 *              type: object
 *              properties:
 *                  color:
 *                      type: string
 *                      example: yellow
 *                  size:
 *                      type: string
 *                      example: small
 *                  quantity:
 *                      type: number
 *                      example: 5
*/

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
 *                                      example: "63c3f2da6b2ddfba6d031cb0"
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
 *                                      type: string
 *                                      example: 63c1023b1ca714a635355f90
 *                                  brand:
 *                                      type: string
 *                                      example: 63c1023b1ca714a635355f90
 *                                  price:
 *                                      type: string
 *                                      example: 10000
 *                                  discount:
 *                                      type: string
 *                                      example: 10
 *                                  images:
 *                                      type: array
 *                                      items:
 *                                          type: string
 *                                          format: binary
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

// Get product by id response definition
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
 *                                  example: "63c3f2da6b2ddfba6d031cb0"
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
 *                                  type: string
 *                                  example: 63c1023b1ca714a635355f90
 *                              brand:
 *                                  type: string
 *                                  example: 63c1023b1ca714a635355f90
 *                              price:
 *                                  type: string
 *                                  example: 10000
 *                              discount:
 *                                  type: string
 *                                  example: 10
 *                              images:
 *                                  type: array
 *                                  items:
 *                                      type: string
 *                                      format: binary
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
 *                                              example: 10
 *                              createdAt:
 *                                  type: date
 *                                  example: 2023-02-21T07:41:34.181Z
*/

// Get all products (with search query)
/**
 * @swagger 
 *  /admin/products:
 *      get:
 *          tags: [Products (Admin)]
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
*/

// Get product by id
/**
 * @swagger 
 *  /admin/products/{id}:
 *      get:
 *          tags: [Products (Admin)]
 *          summary: Get a product by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
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

// Create a product
/**
 * @swagger
 *  /admin/products/add:
 *      post:
 *          tags: [Products (Admin)]
 *          summary: Create a new product
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/AddProduct'
 *          responses:
 *              201:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/SuccessfulResponse'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
*/

// Update product by id
/**
 * @swagger
 *  /admin/products/update/{id}:
 *      patch:
 *          tags: [Products (Admin)]
 *          summary: Update product by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateProduct'
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/SuccessfulResponse'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
*/

// Add inventory to product
/**
 * @swagger
 *  /admin/products/{id}/inventory:
 *      patch:
 *          tags: [Products (Admin)]
 *          summary: Add inventory to product
 *          parameters: 
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/AddInventory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/AddInventory'
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/SuccessfulResponse'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
*/

// Delete product by id
/**
 * @swagger
 *  /admin/products/remove/{id}:
 *      delete:
 *          tags: [Products (Admin)] 
 *          summary: Remove product by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/SuccessfulResponse'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
*/
