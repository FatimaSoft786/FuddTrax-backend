const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema({
week:{
    type: String
},
day_name:{
    type: String
},
price:{
    type: String
},
menu_1:{
    type: String
},
menu_2:{
    type: String
},
menu_3:{
    type: String
},
menu_4:{
    type: String
},
extra: {
    type: String
},
soda: {
    type: String
},
served: {
    type: String
}
},{
    timestamps: true
});

module.exports = mongoose.model("Menus",menuSchema)