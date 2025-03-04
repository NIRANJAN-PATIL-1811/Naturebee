const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/naturebee")
.then(() => console.log("MongoDB is running on mongodb://localhost:27017"))
.catch((err) => console.log(err));

let address_count = 0;

const addresses_schema = new mongoose.Schema({
  city : String,
  state_province_region : String,
  postal_zip_code : String,
  landmark : String
});

const user_data = new mongoose.Schema({
  first_name : String,
  last_name : String,
  address : [addresses_schema],
  phone_number : String,
  email : String,
  password : String
});

const info = mongoose.model("user_details", user_data);

async function NaturebeeRegister(req, res) {
  try {
    const check_phone = await info.findOne({ phone_number: req.body.phone_number });

    if (check_phone) {
      res.send({msg : true});
    }
    else {

      const newUser = new info({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: [
          {
          city: req.body.city,
          state_province_region: req.body.state_province_region,
          postal_zip_code: req.body.postal_zip_code,
          landmark: req.body.landmark
        }
        ],
        phone_number: req.body.phone_number,
        email: req.body.email,
        password: req.body.password 
      });

      await newUser.save();

      res.send({msg : false}); 
    }
  }
  catch(error) {
    res.send({msg : error});
  }
}

async function CheckLogin(req, res) {
  try {
    const result = await info.findOne({email : req.body.email, password : req.body.password});

    if (result) {
      res.send({
        msg : true,
        first_name : result.first_name,
        postal_zip_code : result.address[0].postal_zip_code,
        email : result.email
      });
    }
    else {
      res.send({msg : false});
    }
  }
  catch(error) {
    res.send({msg : error});
  }
}

async function AddNewAddress(req, res) {
  try {
    const result = await info.findOne({email : req.body.email});

    if (result) {
      await info.updateOne(
        { email: req.body.email }, // Find the document by email
        {
          $push: { // Use $push to add a new address to the array
            address: {
              city: req.body.city,
              state_province_region: req.body.state_province_region,
              postal_zip_code: req.body.postal_zip_code,
              landmark: req.body.landmark
            }
          }
        }
      );

      res.send({msg : true});
    }
    else {
      res.send({msg : false});
    }
  }
  catch (error) {
    console.log(error);
  }

}

module.exports = { NaturebeeRegister, CheckLogin, AddNewAddress };