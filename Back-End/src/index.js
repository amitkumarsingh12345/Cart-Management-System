const bodyParser = require('body-parser');
const express = require('express');
const app = new express();
app.use(bodyParser.json())
const cors = require('cors');
app.use(cors());
const testmodel = require('./User/user');
const admin = require('./Admin/admin');
const product = require('./Admin/product');
const category = require('./Admin/category');


// ------------------USER SIGNUP API-----------------------

app.post('/user', async (req, res) => {
    console.log(req.body);
    await new testmodel(req.body).save();
    res.send({
        "Massage": "Data Saved!!"
    });
});

// ------------------USER LOGIN API-----------------------

app.post('/userlogin', async (req, res) => {
    console.log(req.body.email);
    const data = await testmodel.findOne({
        email: req.body.email,
        password: req.body.password
    });
    res.send(data);
});

// ------------------USER SEARCH API-----------------------

app.get('/user/:key', async (req, res) => {
    const data = await testmodel.find({
        $or: [
            { name: req.params.key },
            { _id: req.params.key },
            { email: req.params.key },
            { password: req.params.key }
        ]
    });
    data.length > 0 ? res.send(data) :
        res.send({ "Massage": "Data Not Found!!" });
    console.log(data);
})


// ------------------USER DELETE API-----------------------

app.delete('/user/:id', async (req, res) => {
    const data = await testmodel.deleteOne({ _id: req.params.id })
    data.deletedCount == 1 ? res.send({ "Massage": "Data Deleted!!" }) :
        res.send({ "Massage": "Data Not Found!!" });
});

// ------------------USER UPDATE API-----------------------

app.put('/user/:id', async (req, res) => {
    const data = await testmodel.updateOne(
        { _id: req.params.id },
        {
            $set: { name: "Mohan" }
        }
    )
    data.modifiedCount == 1 ? res.send({ "Massage": "Data Modified!!" }) :
        res.send({ "Massage": "Data Not Found!!" });
});


// ----------------------------------ADMIN SIGNUP API------------------------------------

app.post('/admin', async (req, res) => {
    await new admin(req.body).save().
        then(() => res.status(200).send({ "Massage": "Data Saved!!" })).
        catch((error) => res.status(400).send(error));
});

// ------------------ADMIN LOGIN API-----------------------

app.post('/adminlogin', async (req, res) => {
    console.log(req.body)
    const data = await admin.findOne({
        name: req.body.name,
        password: req.body.password
    });
    res.send(data);
});

// ---------------------------------PRODUCT POST API--------------------------------------------

app.post('/product', async (req, res) => {
    console.log(req.body);
    await new product(req.body).save().
        then(() => res.status(200).send(req.body)).
        catch((error) => res.status(400).send(error));
});

// ------------------PRODUCT GET API-----------------------

app.get('/product', async(req, res) => {
   await product.find().
     then( (data) => res.status(200).send(data)).
       catch( (error) => res.status(400).send(error));
});

// ------------------PRODUCT SEARCH API-----------------------

app.get('/product/:key', async(req, res) => {
    await product.find({
        $or:[
            {name: req.params.key},
            {price: req.params.key}
        ]}).then( (data) => res.status(200).send(data)).
        catch( (error) => res.status(400).send(error));
 });

// ------------------CART DELETE API-----------------------

app.delete('/product/:id', async(req, res) => {
    await product.deleteOne({_id: req.params.id}).
      then( (data) => res.status(200).send(data)).
        catch( (error) => res.status(400).send(error));
 });
 
 // ------------------PRODUCT UPDATE API-----------------------
 
 app.put('/product/:id', async(req, res) => {
    await product.updateOne(
     {_id: req.params.id},
         {
            $set:(req.body)
         }
   ).then( (data) => res.status(200).send(data)).
      catch( (error) => res.status(400).send(error));
 });
 

// --------------------------------CATEGORY POST API-------------------------------------

app.post('/category', async(req, res) => {
   await new category(req.body).save().
     then( (data) => res.status(200).send(data)).
       catch( () => res.status(400).send(error));
});

// ------------------CATEGORY GET API-----------------------

app.get('/category', async(req, res) => {
   await category.find().
     then( (data) => res.status(200).send(data)).
       catch( (error) => res.status(400).send(error))
});

// ------------------CATEGORY SEARCH API-----------------------

app.get('/category/:key', async(req, res) => {
    await category.find(
        {name: req.params.key}
    ).then( (data) => res.status(200).send(data)).
        catch( (error) => res.status(400).send(error));
 });

// ------------------CATEGORY DELETE API-----------------------

app.delete('/category/:id', async(req, res) => {
   await category.deleteOne({_id: req.params.id}).
     then( (data) => res.status(200).send(data)).
       catch( (error) => res.status(400).send(error));
});


// ------------------CATEGORY UPDATE API-----------------------

app.put('/category/:id', async(req, res) => {
   await category.updateOne(
    {_id: req.params.id},
        {
           $set:(req.body)
        }
  ).then( (data) => res.status(200).send(data)).
     catch( (error) => res.status(400).send(error));
});

app.listen(11000, () => console.log("Server Created!!"));