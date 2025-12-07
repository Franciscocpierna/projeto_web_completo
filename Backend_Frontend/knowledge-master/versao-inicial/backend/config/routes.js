//const admin = require('./admin')

module.exports = app => {
    
    app.route('/users')
    .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)
    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.save) 
        .get(app.api.user.get)
    app.route('/categories')  
         .all(app.config.passport.authenticate())  
        .get(app.api.category.get)
        .post(app.api.category.save)
    
   //Cuidado com ordem tem que vir ante0s de /categories/:id    
    app.route('/categories/:id')
       .all(app.config.passport.authenticate())
       .get(app.api.category.getTree) 

    app.route('/categories/:id')    
        .all(app.config.passport.authenticate())
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove)
   

    app.route('/articles')
        .all(app.config.passport.authenticate())    
        .get(app.api.article.get)
        .post(app.api.article.save)

    app.route('/articles/:id') 
        .all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        .put(app.api.article.save)
        .delete(app.api.article.remove)
    

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory)

}