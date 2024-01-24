const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bannerSchema = mongoose.Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "product"
    },
    image: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: false,
    },
    type: {
        type: String,
    },
});

const banner = mongoose.model("banner", bannerSchema);

module.exports = banner;
