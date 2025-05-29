const helmet = require("helmet");
app.use(helmet());

const cors = require("cors");
app.use(cors());

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
});

app.use(limiter);

const mongoSanitize = require("express-mongo-sanitize");
app.use(mongoSanitize());

const xss = require("xss-clean");
app.use(xss());
