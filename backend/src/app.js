import path from "path";
import morgan from "morgan";
import express from "express";
import errorHandler from "errorhandler";
import cloudinary from "cloudinary";
import flash from "connect-flash";
import session from "express-session";
import passport from "passport";
import "./config/passport";

import indexRoutes from "./routes/index.routes";
import authRoutes from "./routes/authRoutes";

import * as helpers from "./helpers";

const app = express();

// Settings
app.set("views", path.join(__dirname, "./views"));
app.engine(
  ".vue",
  vue({
    defaultLayout: "main",
    Feed: path.join(app.get("views"), "Feed"),
    Login: path.join(app.get("views"), "Login"),
    NewUser: path.join(app.get("views"), "NewUser"),
    Profile: path.join(app.get("views"), "Profile"),
    helpers,
    extname: ".vue",
  })
);
app.set("view engine", ".vue");

// Uploads Settings
app.use(cloudinary({ dest: "./uploads" }).single("image"));

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "somesecretkey",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Global Variables
app.use((req, res, next) => {
  // the curren user session
  app.locals.user = req.user || null;
  // succes messages by flash
  app.locals.success = req.flash("success");
  // passport authentication erros
  app.locals.error = req.flash("error");
  next();
});

// Routes
app.use(indexRoutes);
app.use(authRoutes);

// The Public directory for static files
app.use("/public", express.static(path.join(__dirname, "./public")));

// The Uploads directory
app.use("/uploads", express.static("./uploads"));

// Error Handling
if ("development" === app.get("env")) {
  app.use(errorHandler());
}

export default app;