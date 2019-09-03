module.exports = {
  connectionString: process.env.CONNECTION_STRING || 'mongodb://localhost:27017/',
  dbName: process.env.DB_NAME || 'dev_online-exam-system',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  attributes: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4
  }
}
