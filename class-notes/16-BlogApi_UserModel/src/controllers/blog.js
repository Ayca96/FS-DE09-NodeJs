"use strict";

/*------------------------------------------

EXPRESSJS -- BLOG PROJECT with Mongoose 

-------------------------------------------*/

const { BlogCategory, BlogPost } = require("../models/blog");

// blogCategory controllers

module.exports.blogCategory = {
  list: async (req, res) => {
    const result = await BlogCategory.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  create: async (req, res) => {
    const result = await BlogCategory.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    const { categoryId } = req.params;

    const result = await BlogCategory.findOne({ _id: categoryId });

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    //error:!!modifiedCount, // get tge boolean value of the data  short of -> Boolean(modifiedCount)

    const { categoryId } = req.params;
    // const result = await BlogCategory.updateOne({_id:req.params.categoryId}, req.body)
    const { modifiedCount } = await BlogCategory.updateOne(
      { _id: req.params.categoryId },
      req.body
    );

    res.status(modifiedCount ? 202 : 400).send({
      error: !modifiedCount,
      updated: await BlogCategory.findById({ _id: categoryId }),
    });
  },

  delete: async (req, res) => {

   const {deletedCount} = await BlogCategory.deleteOne({_id:req.params.categoryId})
    // res.status(deletedCount ? 204 : 404).send({
    //   error: !deletedCount,
      
    // });

    if(deletedCount) res.sendStatus(204)
      else throw new Error ("Something went wrong")

  },
};

// deletedCount 0 sa silinmedi 1 se silindi demek.

/*----------------------------------------------------*/

// blogPost contollers

module.exports.blogPost = {};
