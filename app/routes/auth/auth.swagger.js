/**
 * @swagger
 *  tags:
 *      name: User Authentication
 *      description: User authentication section 
*/

/**
 * @swagger
 *  components:
 *      schemas:
 *          Auth:
 *              type: object
 *              required: 
 *                  -   email
 *                  -   password
 *              properties:
 *                  email:
 *                      type: string
 *                      description: The user's email
 *                  password:
 *                      type: string
 *                      description: The user's password
*/

/**
 * @swagger
 *  /auth/register:
 *      post:
 *          tags: [User Authentication]
 *          summary: User register 
 *          description: Enter email and password
 *          requestBody: 
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Auth'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Auth'
 *          responses:
 *              200:
 *                  description: Success
 *              400:
 *                  description: Bad request
 *              401:
 *                  description: Unauthorized
 *              500:
 *                  description: Internal server error
*/

/**
 * @swagger
 *  /auth/login:
 *      post:
 *          tags: [User Authentication]
 *          summary: User login
 *          description: enter email and password
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Auth'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Auth'
 *          responses:
 *              200:
 *                  description: Success
 *              400:
 *                  description: Bad request
 *              401:
 *                  description: Unauthorized
 *              500:
 *                  description: Internal server error
*/