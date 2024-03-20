import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String, 
        required: true, 
        minLength: 2,
        maxLength: 30,
        unique:true, 
    },
    precio:{
        type: Number,
        required: true,
        min:100,
        max:10000,
    },
    imagen:{
        type: String,
        required: true,
        validate:{
            validator: function(vslor){
                //validar el valor con un patron 
                return 
            }
        }
    }
})