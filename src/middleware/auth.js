const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    ensureAuth: (req, res, next) => {
        let headers = req.headers['authorization'];

        if (headers == process.env.AUTH_KEY) {
            return next();
        }

        return res.json({
            message: 'Invalid'
        })
    }
}