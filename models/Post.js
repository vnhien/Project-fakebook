const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
User_id : String,
Described:String,
Status:String,
Image : Array,
Video : Array,
Like : Array,
Comment : Array,
CreatedAt : Date,
UpdatedAt: Date,
Report : Array
});

postSchema.index({Status: 'text'});
module.exports = mongoose.model('Post',postSchema); 