const mongodb = require('../db');

const createschema = () => {
   try {
    const testschema = new mongodb.Schema({
        name: String,
        email: String,
        password: String,
        confirmpassword: String,
        phone: String,
    });
    const testmodel = new mongodb.model("user",testschema);
    module.exports = testmodel;
   } catch (error) {
     console.log("Schema Error!!");
   }
}
createschema();
