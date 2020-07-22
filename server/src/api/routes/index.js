const userRoutes = require('./userRoutes');
const messageRoutes = require('./messageRoutes');

const routing = (app) => {
  app.use('/api/user', userRoutes);
  app.use('/api/messages', messageRoutes);
};

module.exports = routing;
