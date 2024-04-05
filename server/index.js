const express = require("express");
const cors = require("cors");
const db = require('./database/index');

// const payment =require ('./controllers/Payment')
const userRouter = require('./router/user');
const Authentication = require('./router/login');
const cloudinary = require('cloudinary');
const ProductRouter = require('./router/product');

const fileUpload = require('express-fileupload');

const app = express();



const PORT = 5000

app.use(cors())
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())

app.use("/api/auth", Authentication);
app.use("/api/users", userRouter);
app.use('/api/products', ProductRouter);


// cloudinary.v2.config({
//     cloud_name: 'duekcetwe',
//     api_key: '313496654712626',
//     api_secret: 'LTs6VHjFAjSIorhnPJ-w8iqwffo',
//     secure: true,
//   });
// app.post('/api/upload', async (req, res) => {
//   try {
//     const fileStr = req.files.file.data.toString('base64'); 
//     const uploadResponse = await cloudinary.uploader.upload("data:image/jpeg;base64," + fileStr, { 
//       upload_preset: 'enojnrjf',
//     });
//     res.json({ imageUrl: uploadResponse.url });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });



// app.use('/api/payment', payment);

// app.post('/api/add', async (req, res) => {
//   const url = "https://developers.flouci.com/api/generate_payment";
//   const pay = {
//     "app_token": "3ae91c05-02b2-4f92-9de8-bfcd08847afb",
//     "app_secret": "6a2f00e1-f15d-451c-82ba-149a5c5b4afb",
//     "amount": req.body.amount,
//     "accept_card": "true",
//     "session_timeout_secs": 1200,
//     "success_link": "http://localhost:3001/paymentfail",
//     "fail_link": "http://localhost:3001/paymentsuccess",
//     "developer_tracking_id": "37b1502a-131d-4641-8151-eaa945e4bd5a"
//   };
//   try {
//     const result = await axios.post(url, pay);
//     res.send(result.data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server Error");
//   }
// });
// app.get('/api/verify/:id', async (req, res) => {
//   try {
//     const result = await axios.get(`https://developers.flouci.com/api/verify_payment/${req.params.id}`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'apppublic': '3ae91c05-02b2-4f92-9de8-bfcd08847afb',
//           'appsecret': '6a2f00e1-f15d-451c-82ba-149a5c5b4afb'
//         }
//       });
//     res.send(result.data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.listen(PORT, function () {
  console.log("Server is running on port", PORT);
});

