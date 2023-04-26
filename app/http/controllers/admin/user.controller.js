const userModel = require("../../../models/user.model");
const { UserModel } = require("../../../models/user.model");
const Controller = require("../controller");

class UserController extends Controller {
    async getAllUsers(req, res, next) {
        try {
            let { search, page, itemsPerPage } = req.query
            if(!page) page = 0
            let users
            if(search) {
                users = await UserModel
                    .find({ $text: { $search: search } })
                    .sort({ createdAt: -1 })
                    .limit(itemsPerPage)
                    .skip(page)
                    .select({ updatedAt: 0, password: 0 })
            } else {
                users = await UserModel
                    .find({})
                    .sort({ createdAt: -1 })
                    .limit(itemsPerPage)
                    .skip(page)
                    .select({ updatedAt: 0, password: 0 })
            }
            return res.status(200).json({
                status: 'success',
                data: {
                    users
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    UserController: new UserController()
}