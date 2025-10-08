import express, { request, response } from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import "./strategies/local-strategy.mjs";
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:8080"],
  credentials: true,
  withCredentials: true,
};

app.use(cors(corsOptions));

/*
 * AUTH API
 */
app.use(express.json());
app.use(cookieParser("helloworld"));
app.use(
  session({
    secret: "tino the dev",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

/* ROUTES */
app.get("/", (req, res) => {
  res.json({ message: ["helloworld"] });
});

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

app.post("/api/auth", passport.authenticate("local"), (request, response) => {
  response.sendStatus(200);
});

app.get("/api/auth/status", (request, response) => {
  console.log(`Inside /auth/status endpoint`);
  console.log(request.user);
  console.log(request.session);
  return request.user ? response.send(request.user) : response.sendStatus(401);
});

app.post("/api/auth/logout", (request, response) => {
  if (!request.user) return response.sendStatus(401);
  request.logout((err) => {
    if (err) return response.sendStatus(400);
    response.send(200);
  });
});

/* START SERVER */
app.listen(8080, () => {
  console.log("Server started on port 8080");
});
