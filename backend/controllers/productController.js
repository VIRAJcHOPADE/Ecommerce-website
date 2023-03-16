const Product = require("../models/productModel")



// Create Product  -- Admin
exports.createProduct = async (req,res,next)=>{
    
    const product = await Product.create(req.body);
    
    res.status(201).json({
        success:true,
        product
    })
}

//Get All Product
exports.getAllProducts = async(req,res)=>{
    
    const products = await Product.find();

    res.status(200).json({
        success:true,
        products
    })
}

// Update Product --Admin

exports.updateProduct = async (req,res,next)=>{
    
    let product = Product.findById(req.params.id);
    
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runvalidators:true,
            useFindAndModify:false
        });

        res.status(200).json({
            success:true,
            product
        })
}

// Delete Product

exports.deleteProduct = async(req,res,next)=>{

    try{
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success:true,
        message:"Product Delete Successfully"
    })

    }
    catch(err){
        return res.status(400).json({
            success:false,
            message:"Product not found"
        })
    }
    
}
 