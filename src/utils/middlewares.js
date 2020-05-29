const jwt = require('jsonwebtoken');

module.exports = {
  auth(req, res, next){
    const token = req.headers.authorization;
    
    if (!token){
      res.status(401).json({ message: 'Tu sesión a expirado'})
      return;
    }

    req.provider = jwt.verify(token, 'holacarebola')
    next();
  }
}
