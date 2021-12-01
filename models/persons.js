const mongoose =require('mongoose');
const Schema = mongoose.Schema

// ceate shcema

const PersonSchema =new Schema({
    petitionNo:{
        type:String,
        required:true
    },
	deceasedName:{
        type:String,
        required:true
    },
    deceasedAddress:{
        type:String,
        required:true
    },
	deceasedOccupation:{
        type:String,
        required:true
    },
	personName:{
        type:String,
        required:true
   },
	personReligion:{
        type:String,
        required:true
    },
	personIntionality:{
        type:String,
        required:true
    },
	personAge:{
        type:Number,
        required:true
    },
	personAddress:{
        type:String,
        required:true
    },
	throwDate:{
        type:Date,
        required:true
    },
	throwLanguage:{
        type:String,
        required:true
    },
	throwAdditioan:{
        type:String,
        required:true
    },
	believe:{
        type:Boolean,
        default:false
    },
	personOneName:{
        type:String,
        required:true
    },
	credenceLocation:{
        type:String,
        required:true
    },
	credenceDate:{
        type:Date,
        required:true
    },
})
module.exports = Person = mongoose.model("person",PersonSchema)