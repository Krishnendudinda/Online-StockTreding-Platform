const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

require('dotenv').config();
const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./model/userModel.js");

const userRout = require("./userRouter.js");

const { HoldingsModel } = require('./model/HoldingsModel.js');
const { PositionsModel } = require('./model/PositionsModel.js');
const { OrdersModel } = require('./model/OrdersModel.js');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app  =  express();

//app.use(cors({
//  origin: "http://localhost:3000", // Your React/Frontend port
//  credentials: true,
//}));

const allowedOrigins = [
  //"http://localhost:3000", // Phase 1: Frontend Landing / Auth Page
  //"http://localhost:3001" // Phase 2: Stock Trading Dashboard App
  "https://zerodha-frontend-jrrm.onrender.com",
  "https://dashboard-landing-page-45j2.onrender.com"
];

app.set("trust proxy", 1);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }
  
    if (origin.includes("onrender.com") || origin.includes("localhost")) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS Policy Block"), false);
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(bodyParser.json());


const store = MongoStore.create({
  mongoUrl: url,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("Error in Mongo Session Store", err);
});

// store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
const sessionOptions = {
  secret: process.env.SECRET || "yourdefaultslowsecretkey",
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true, 
    sameSite: "none", 
    path: "/",
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=> {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use("/",userRout);
/*app.get("/addHoldings", async (req, res) => {
    let tempHoldings = [
  {
    name: "BHARTIARTL",
    qty: 2,
    avg: 538.05,
    price: 541.15,
    net: "+0.58%",
    day: "+2.99%",
  },
  {
    name: "HDFCBANK",
    qty: 2,
    avg: 1383.4,
    price: 1522.35,
    net: "+10.04%",
    day: "+0.11%",
  },
  {
    name: "HINDUNILVR",
    qty: 1,
    avg: 2335.85,
    price: 2417.4,
    net: "+3.49%",
    day: "+0.21%",
  },
  {
    name: "INFY",
    qty: 1,
    avg: 1350.5,
    price: 1555.45,
    net: "+15.18%",
    day: "-1.60%",
    isLoss: true,
  },
  {
    name: "ITC",
    qty: 5,
    avg: 202.0,
    price: 207.9,
    net: "+2.92%",
    day: "+0.80%",
  },
  {
    name: "KPITTECH",
    qty: 5,
    avg: 250.3,
    price: 266.45,
    net: "+6.45%",
    day: "+3.54%",
  },
  {
    name: "M&M",
    qty: 2,
    avg: 809.9,
    price: 779.8,
    net: "-3.72%",
    day: "-0.01%",
    isLoss: true,
  },
  {
    name: "RELIANCE",
    qty: 1,
    avg: 2193.7,
    price: 2112.4,
    net: "-3.71%",
    day: "+1.44%",
  },
  {
    name: "SBIN",
    qty: 4,
    avg: 324.35,
    price: 430.2,
    net: "+32.63%",
    day: "-0.34%",
    isLoss: true,
  },
  {
    name: "SGBMAY29",
    qty: 2,
    avg: 4727.0,
    price: 4719.0,
    net: "-0.17%",
    day: "+0.15%",
  },
  {
    name: "TATAPOWER",
    qty: 5,
    avg: 104.2,
    price: 124.15,
    net: "+19.15%",
    day: "-0.24%",
    isLoss: true,
  },
  {
    name: "TCS",
    qty: 1,
    avg: 3041.7,
    price: 3194.8,
    net: "+5.03%",
    day: "-0.25%",
    isLoss: true,
  },
  {
    name: "WIPRO",
    qty: 4,
    avg: 489.3,
    price: 577.75,
    net: "+18.08%",
    day: "+0.32%",
  },
  ];

  tempHoldings.forEach((item) => {
      let newHolding = new HoldingsModel({
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day
      });

      newHolding.save();
  });
  res.send("Holdings added successfully");
});
*/

/*app.get("/addPositions", async (req, res) => {
    let tempPositions = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
  ];

  tempPositions.forEach((item) => {
    let newPosition = new PositionsModel ({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss
    });
    newPosition.save() ;
  });
  
  res.send("positions added successfully");
});*/

app.get('/allHoldings' , async(req , res) => {
  if (req.isAuthenticated()) {
    let allHoldings = await HoldingsModel.find({});
    return res.json({
      success: true,
      username: req.user.username,
      holdings:allHoldings
    });
  }
  return res.status(401).json({ success: false, message: "Unauthorized" });
});

app.get('/allPositions' , async(req , res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post('/newOrder', async(req, res) =>{
  let newOrder = new OrdersModel({
    name: req.body.name,
    price: req.body.price,
    qty: req.body.qty,
    mode: req.body.mode,
  });

  await newOrder.save();
  //res.json(newOrder);
  res.send("order saved");
});

app.get('/showOrders', async (req, res) => {
  let showOrders = await OrdersModel.find({});
  res.json(showOrders);
});

app.listen(PORT , () => {
  console.log("Server is running on this port");
  mongoose.connect(url);
  console.log("MongoDB is connected");
});