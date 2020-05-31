const mongoose = require("mongoose");
const Product = require("../models/Products");
const bodyParser = require("body-parser");
const express = require('express');

const app = express();
app.use(bodyParser.json());

exports.products_get_all = (req, res, next) => {
  Product.find()
    .select("ProductName Price Description ImageLink")
    .exec()
    .then(docs => {
      const response = {
        products: docs.map(doc => {
          return {
            prodName: doc.ProductName,
            prodprice: doc.Price,
            prodDesc: doc.Description,
            prodImageURL: doc.ImageLink
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.products_create_product = (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    ProductName: req.body.prodName,
    Description: req.body.prodDesc,
    Price: req.body.prodPrice,
    ImageLink: req.body.prodImageURL
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createdProduct: {
          name: result.ProductName,
          description: result.Description,
          price: result.Price,
          image: result.ImageLink,
          _id: result._id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.products_get_product = (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .select("ProductName Price Description _id ImageLink")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          product: doc,
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.products_update_product = (req, res, next) => {

  Product.updateOne({ _id: req.params.productId })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.products_delete = (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted",
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};