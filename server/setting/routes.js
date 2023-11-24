module.exports = (app) => {
    const adminController = require('../controllers/AdminController')
    const userController = require('../controllers/UserController')

    app.route('/admin/books').get(adminController.getAll) // return all books
    app.route('/admin/books/:id').get(adminController.getByID)
    app.route('/admin/books/add').post(adminController.add)
    app.route('/admin/books/update').put(adminController.update)
    app.route('/admin/books/delete/:id').delete(adminController.delete)
    app.route('/admin/books/visible').put(adminController.visible) // make book (in)visible id: number, visible: boolean 

    app.route('/books').get(userController.getAll) // return all books where visible = true
}