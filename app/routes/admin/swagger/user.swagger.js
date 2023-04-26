// Get users response definition
/**
 * @swagger
 *  definitions:
 *      ListOfUsers:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: success
 *              data:
 *                  type: object
 *                  properties:
 *                      users:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                      example: "63c3f2da6b2ddfba6d031cb0"
 *                                  email: 
 *                                      type: string
 *                                      example: test@test.com
 *                                  admin:
 *                                      type: string
 *                                      example: true or false
 *                                  createdAt:
 *                                      type: date
 *                                      example: 2023-02-21T07:41:34.181Z
 *                                  orders:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                              _id:
 *                                                  type: string
 *                                                  example: "63c3f2da6b2ddfba6d031cb0"
*/

// Get all users
/**
 * @swagger
 *  /admin/users:
 *      get:
 *          tags: [Users (Admin)]
 *          summary: Get all users
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *                  description: Search users by email
 *              -   in: query
 *                  name: page
 *                  type: integer
 *                  description: The page of the users list
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
 *                              $ref: '#/definitions/ListOfUsers'
 *              500:
 *                  description: error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ErrorResponse'
 *          
*/
