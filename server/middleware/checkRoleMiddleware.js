const jwt = require('jsonwebtoken');
module.exports = function (role) {
	const jwt = require('jsonwebtoken');

	return function (req, res, next) {
		if (req.method === 'OPTIONS') {
			next();
		}
		try {
			const token = req.headers.authorization.split(' ')[1]; //* bearer ${token}
			if (!token) {
				return res.status(401).json({ message: 'not authenticated' });
			}
			const decoded = jwt.verify(token, process.env.SECRET_KEY);

			if (decoded.role !== role) {
				return res.status(403).json({ message: 'access denied' });
			}
			req.user = decoded;
			next();
		} catch (error) {
			res.status(401).json({ message: 'not authenticated' });
		}
	};
};
