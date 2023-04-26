// Category swagger components
// Add category component
/**
 * @swagger
 *  components:
 *      schemas:
 *          AddCategory:
 *              type: object
 *              required:
 *                  -   name
 *              properties:
 *                  name:
 *                      type: string
 *                      description: The name of the category
 *                  parent:
 *                      type: string
 *                      description: The parent of the category if exists
 *                  desc:
 *                      type: string
 *                      description: The description of the category
 *                      
*/

// Update category component
/**
 * @swagger
 *  components:
 *      schemas:
 *          UpdateCategory:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      description: The name of the category
 *                  desc:
 *                      type: string
 *                      description: The description of the category
 *                      
*/

// Get categories response definition
/**
 * @swagger
 *  definitions:
 *      ListOfCategories:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: success
 *              data:
 *                  type: object
 *                  properties:
 *                      categories:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                      example: "63c3f2da6b2ddfba6d031cb0"
 *                                  name: 
 *                                      type: string
 *                                      example: Category name
 *                                  desc:
 *                                      type: string
 *                                      example: Category description
 *                                  createdAt:
 *                                      type: date
 *                                      example: 2023-02-21T07:41:34.181Z
 *                                  children:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                              _id:
 *                                                  type: string
 *                                                  example: "63c3f2da6b2ddfba6d031cb0"
 *                                              name:
 *                                                  type: string
 *                                                  example: Category child name
 *                                              parent:
 *                                                  type: string
 *                                                  example: Category parent 
 *                                              desc:
 *                                                  type: string
 *                                                  example: Category description
 *                                              createdAt:
 *                                                  type: date
 *                                                  example: 2023-02-21T07:41:34.181Z
*/

// Get parent categories response definition
/**
 * @swagger
 *  definitions:
 *      ListOfParentCategories:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: success
 *              data:
 *                  type: object
 *                  properties:
 *                      categories:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                      example: "63c3f2da6b2ddfba6d031cb0"
 *                                  name: 
 *                                      type: string
 *                                      example: Name of the category
 *                                  slug: 
 *                                      type: string
 *                                      example: Category-name
 *                                  desc:
 *                                      type: string
 *                                      example: The description of the category
 *                                  createdAt:
 *                                      type: date
 *                                      example: 2023-02-21T07:41:34.181Z
*/

// Get category by id response definition
/**
 * @swagger
 *  definitions:
 *      SingleCategory:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: success
 *              data:
 *                  type: object
 *                  properties:
 *                      category:
 *                          type: object
 *                          properties:
 *                               _id:
 *                                  type: string
 *                                  example: "63c3f2da6b2ddfba6d031cb0"
 *                               name: 
 *                                  type: string
 *                                  example: Name of the category
 *                               slug: 
 *                                   type: string
 *                                   example: Category-name
 *                               desc:
 *                                  type: string
 *                                  example: The description of the category
 *                               parent:
 *                                   type: string
 *                                   example: Category parent 
 *                               createdAt:
 *                                  type: date
 *                                  example: 2023-02-21T07:41:34.181Z
 *                               children:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          _id:
 *                                              type: string
 *                                              example: "63c3f2da6b2ddfba6d031cb0"
 *                                          name:
 *                                              type: string
 *                                              example: Category child name
 *                                          parent:
 *                                              type: string
 *                                              example: Category parent 
 *                                          desc:
 *                                              type: string
 *                                              example: Category description
 *                                          createdAt:
 *                                              type: date
 *                                              example: 2023-02-21T07:41:34.181Z
*/

// Get all categories
/**
 * @swagger
 *  /admin/categories:
 *      get:
 *          tags: [Categories (Admin)]
 *          summary: Get all categories
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *                  description: Search categories by name
 *              -   in: query
 *                  name: page
 *                  type: integer
 *                  description: The page of the category list
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
 *                              $ref: '#/definitions/ListOfCategories'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/

// Get parent categories
/**
 * @swagger
 *  /admin/categories/parents:
 *      get:
 *          tags: [Categories (Admin)]
 *          summary: Get all parent categories
 *          parameters:
 *              -   in: query
 *                  name: page
 *                  type: string
 *                  description: The page of the category list
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
 *                              $ref: '#/definitions/ListOfParentCategories'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/

// Get category by id
/**
 * @swagger
 *  /admin/categories/{id}:
 *      get:
 *          tags: [Categories (Admin)]
 *          summary: Get category by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  description: The category id
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/SingleCategory'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/

// Adding new category
/**
 * @swagger
 *  /admin/categories/add:
 *      post:
 *          tags: [Categories (Admin)]
 *          summary: Adding a new category
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/AddCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/AddCategory'
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

// Updating a category by id
/**
 * @swagger
 *  /admin/categories/update/{id}:
 *      patch:
 *          tags: [Categories (Admin)]
 *          summary: Updating a category
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  type: string
 *                  description: The id of the category you want to update
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateCategory'
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

// Remove a category by id
/**
 * @swagger
 *  /admin/categories/remove/{id}:
 *      delete:
 *          tags: [Categories (Admin)]
 *          summary: Delete category by id
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
