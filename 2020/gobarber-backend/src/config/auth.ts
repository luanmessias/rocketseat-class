export default {
  jwt: {
    secret: process.env.APP_SECRET || 'secret-value',
    expiresIn: '1d',
  },
};
