// Brand swagger components
// Add brand component
/**
 * @swagger
 *  components:
 *      schemas:
 *          AddBrand:
 *              type: object
 *              required:
 *                  -   name
 *              properties:
 *                  name:
 *                      type: string
 *                      description: The name of the brand
 *                  desc:
 *                      type: string
 *                      description: The description of the brand
 *                      
*/

// Update brand component
/**
 * @swagger
 *  components:
 *      schemas:
 *          UpdateBrand:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      description: The name of the brand
 *                  desc:
 *                      type: string
 *                      description: The description of the brand
 *                      
*/

// Get brands response definition
/**
 * @swagger
 *  definitions:
 *      ListOfBrands:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: success
 *              data:
 *                  type: object
 *                  properties:
 *                      brands:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                      example: "63c3f2da6b2ddfba6d031cb0"
 *                                  name: 
 *                                      type: string
 *                                      example: Brand name
 *                                  slug: 
 *                                      type: string
 *                                      example: Brand-name
 *                                  desc:
 *                                      type: string
 *                                      example: Brand description
 *                                  createdAt:
 *                                      type: date
 *                                      example: 2023-02-21T07:41:34.181Z
*/

// Get brand by id response definition
/**
 * @swagger
 *  definitions:
 *      SingleBrand:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: success
 *              data:
 *                  type: object
 *                  properties:
 *                      brand:
 *                          type: object
 *                          properties:
 *                               _id:
 *                                  type: string
 *                                  example: "63c3f2da6b2ddfba6d031cb0"
 *                               name: 
 *                                  type: string
 *                                  example: Name of the brand
 *                               slug: 
 *                                   type: string
 *                                   example: Brand-name
 *                               desc:
 *                                  type: string
 *                                  example: The description of the brand
 *                               createdAt:
 *                                  type: date
 *                                  example: 2023-02-21T07:41:34.181Z
*/

// Get all brands
/**
 * @swagger
 *  /admin/brands:
 *      get:
 *          tags: [Brands (Admin)]
 *          summary: Get all brands
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *                  description: Search brands by name
 *              -   in: query
 *                  name: page
 *                  type: integer
 *                  description: The page of the brands list
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
 *                              $ref: '#/definitions/ListOfBrands'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/

// Get brand by id
/**
 * @swagger
 *  /admin/brands/{id}:
 *      get:
 *          tags: [Brands (Admin)]
 *          summary: Get brand by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *                  description: The brand id
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/SingleBrand'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/

// Adding new brand
/**
 * @swagger
 *  /admin/brands/add:
 *      post:
 *          tags: [Brands (Admin)]
 *          summary: Adding a new brand
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/AddBrand'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/AddBrand'
 *          responses:
 *              201:
 *                  description: Created
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/definitions/SuccessfulResponse'
 *              500:
 *                  description: Internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *              
*/

// Updating a brand by id
/**
 * @swagger
 *  /admin/brands/update/{id}:
 *      patch:
 *          tags: [Brands (Admin)]
 *          summary: Updating a brand
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  type: string
 *                  description: The id of the brand you want to update
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateBrand'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateBrand'
 *          responses:
 *              200:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/definitions/SuccessfulResponse'
 *              500:
 *                  description: Internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *              
*/

// Remove a brand by id
/**
 * @swagger
 *  /admin/brands/remove/{id}:
 *      delete:
 *          tags: [Brands (Admin)]
 *          summary: Delete brand by id
 *          parameters:
 *              -   in: path
 *                  type: string
 *                  required: true
 *                  name: id
 *          responses: 
 *              200: 
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/definitions/SuccessfulResponse'
 *              500:
 *                  description: Internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
*/
