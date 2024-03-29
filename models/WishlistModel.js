const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate");
const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user"
  },
  products: {
    type: [mongoose.Types.ObjectId],
    ref: "product"
  }
});

wishlistSchema.plugin(mongoosePaginate);
wishlistSchema.plugin(mongooseAggregatePaginate);
module.exports = mongoose.model("Wishlist", wishlistSchema);