const mongoose = require('mongoose');
const Pizza = require("../models/Pizza.model");


mongoose
  .connect('mongodb://127.0.0.1/warriors-bites')
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    //return Pizza.deleteMany({}); //WARNING: this will delete all pizzas in your DB !!
  })
  .then( (response) => {
    console.log(response);

    const newPizzasArr = [
        {
            name: "margarita",
            price: 12,
            ingredients: ["mozzarella", "tomato sauce", "basilicum"]
        },
        {
            name: "veggie",
            price: 15,
            ingredients: ["tomato", "cucumber", "olives"]
        },
        {
            name: "seafood",
            price: 20,
            ingredients: ["mozzarella", "tomato", "prawn"]
        },
        {
            name: "Hawaiian",
            price: 17,
            ingredients: ["mozzarella", "pineapple", "patience..."]
        }
    ]


    return Pizza.insertMany(newPizzasArr)
  })
  .then( pizzaArrFromDB => {

    //chef, our pizzas were created :)
    console.log("Number of pizzas created: ", pizzaArrFromDB.length);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.error('Error... ', err));
