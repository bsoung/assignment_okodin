const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const getPostSupport = require("express-method-override-get-post-support");
const session = require("express-session");

require("dotenv").config();

const port = 3000;
const index = require("./routes/index");
const register = require("./routes/register");
const user = require("./routes/user");
const login = require("./routes/login");
const logout = require("./routes/logout");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

app.use(
	session({
		secret: "1234",
		resave: false,
		saveUninitialized: true
	})
);

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride(getPostSupport.callback, getPostSupport.options));

app.use("/", index);
app.use("/register", register);
app.use("/login", login);
app.use("/logout", logout);
app.use("/user", user);

app.listen(port, () => {
	console.log(`Now listening on port http://localhost:${port}`);
});
