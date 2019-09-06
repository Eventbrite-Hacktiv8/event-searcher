const axiosEventbrite = require('../config/axiosEventbrite');

class CategoryController {
    static getCategories(req, res, next) {
        axiosEventbrite.get('/categories')
            .then(({data}) => {
                console.log(data, 'data categories');
                res.status(200).json(data.categories);
            })
            .catch(next)
    }
}

module.exports = CategoryController;