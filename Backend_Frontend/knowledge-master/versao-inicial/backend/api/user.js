const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const save = async (req, res) => {
        res.send('user save')
    }
    
    return { save }
}