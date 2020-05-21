const { Shema, model } = requiere ("mongoose");

const clientSchema = new Schema ({
    name: String,
    email:String,
    age: Number,
}, {
    timestamps: true,
});

const Client = model("Client", clientSchema)