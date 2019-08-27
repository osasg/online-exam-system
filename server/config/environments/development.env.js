module.exports = {
  server: {
    port: process.env.PORT,
    ssl: process.env.SSL
  },
  mongodb: {
    url:  process.env.MONGODB_URL,
  },
  email: {
    apiKey: process.env.EMAIL_API_KEY,
    host: process.env.EMAIL_SMTP_HOST,
    port: process.env.EMAIL_SMTP_PORT,
    auth: {
      user: process.env.EMAIL_SMTP_USER,
      pass: process.env.EMAIL_SMTP_PASSWORD,
    }
  },
  twilio: {
    sid: process.env.TWILIO_SID,
    token: process.env.TWILIO_TOKEN,
    phone: process.env.TWILIO_PHONE,
  },
  uploadPath: process.env.UPLOAD_PATH
}
