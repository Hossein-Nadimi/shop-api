// Brand swagger components
// Add slide component
/**
 * @swagger
 *  components:
 *      schemas:
 *          AddSlide:
 *              type: object
 *              required:
 *                  -   title
 *                  -   link
 *                  -   image
 *              properties:
 *                  title:
 *                      type: string
 *                      description: The name of the slide
 *                  link:
 *                      type: string
 *                      description: The link of the slide
 *                  image:
 *                      type: file
 *                      description: The image of the slide
 *                      
*/

// Update slide component
/**
 * @swagger
 *  components:
 *      schemas:
 *          UpdateSlide:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                      description: The name of the slide
 *                  link:
 *                      type: string
 *                      description: The link of the slide
 *                  image:
 *                      type: file
 *                      description: The image of the slide
 *                      
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
 *                                      example: "63c3f2da6b2ddfba6d031cb0"
 *                                  title: 
 *                                      type: string
 *                                      example: Slide name
 *                                  link:
 *                                      type: string
 *                                      example: Slide link
 *                                  image:
 *                                      type: string
 *                                      example: Slide image
 *                                  createdAt:
 *                                      type: date
 *                                      example: 2023-02-21T07:41:34.181Z
*/

// Get slide by id response definition
/**
 * @swagger
 *  definitions:
 *      SingleSlide:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: success
 *              data:
 *                  type: object
 *                  properties:
 *                      slide:
 *                          type: object
 *                          properties:
 *                              _id:
 *                                  type: string
 *                                  example: "63c3f2da6b2ddfba6d031cb0"
 *                              title: 
 *                                  type: string
 *                                  example: Slide name
 *                              link:
 *                                  type: string
 *                                  example: Slide link
 *                              image:
 *                                  type: string
 *                                  example: Slide image
 *                              createdAt:
 *                                  type: date
 *                                  example: 2023-02-21T07:41:34.181Z
*/

// Get all slides
/**
 * @swagger
 *  /admin/slides:
 *      get:
 *          tags: [Slider (Admin)]
 *          summary: Get all slides
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *                  description: Search slides by title
 *              -   in: query
 *                  name: page
 *                  type: integer
 *                  description: The page of the slides list
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
 *                              $ref: '#/definitions/ListOfSlides'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/

// Get slide by id
/**
 * @swagger
 *  /admin/slides/{id}:
 *      get:
 *          tags: [Slider (Admin)]
 *          summary: Get slide by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *                  description: The slide id
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/SingleSlide'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/

// Adding new slide
/**
 * @swagger
 *  /admin/slides/add:
 *      post:
 *          tags: [Slider (Admin)]
 *          summary: Adding a new slide
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/AddSlide'
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

// Updating a slide by id
/**
 * @swagger
 *  /admin/slides/update/{id}:
 *      patch:
 *          tags: [Slider (Admin)]
 *          summary: Updating a slide
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  type: string
 *                  description: The id of the slide you want to update
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateSlide'
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

// Remove a slide by id
/**
 * @swagger
 *  /admin/slides/remove/{id}:
 *      delete:
 *          tags: [Slider (Admin)]
 *          summary: Delete slide by id
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
