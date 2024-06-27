const Joi = require('joi');

module.exports.listingSchema=Joi.object({
   listing :Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    location:Joi.string().required(),
    country:Joi.string().required(),
    price:Joi.number().required(),
    image: Joi.object({
      filename: Joi.string().allow("", null),
      url: Joi.string().allow("", null)
    })
   }
   ).required(),
})
//handling server side validation
module.exports.reviewSchema=Joi.object({
  review:Joi.object({
    rating:Joi.number().required().min(1).max(5),
    comment:Joi.string().required(),
  }).required(),
})