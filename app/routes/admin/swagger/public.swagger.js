// Response definition
/**
 * @swagger
 *  definitions:
 *      SuccessfulResponse:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: success
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: Message about the process of the request 
*/

/**
 * @swagger
 *  definitions:
 *      ErrorResponse:
 *          type: object
 *          properties:
 *              status:
 *                  type: string
 *                  example: error
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: The error message
*/