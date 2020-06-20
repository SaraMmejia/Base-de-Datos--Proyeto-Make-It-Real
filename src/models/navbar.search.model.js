const { Schema, model } = require("mongoose");

const searchSchema = new Schema(
    {
        entry: {
            type: String,
            required: [true, "Indica el nombre del producto que deseas buscar"]
        }
    },
        {
        timestamps: true
    }
);

const Search = model("Search", searchSchema);

module.exports = Search;