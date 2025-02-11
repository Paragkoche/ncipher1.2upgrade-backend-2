const { FromTo } = require("../services/exchange");

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
exports.post_priceExchange = async(
    req,res
)=>{
    try{
    console.log("[INFO] API thread running post_priceExchange Function");
    const {to,from,amount} = req.body;
    let data=  await FromTo(from,to,amount);
    return res.json({
        message: "Price converted successfully",
        data: data
    });
    }catch(e){
       return res.status(500).json({
            message:"Internal error while running Exchange API",
            error:e
        })
    }
}
/**
 * 
 * @param {import("express").Request<{from:string,to:string,value:string}>} req 
 * @param {import("express").Response} res 
 */
exports.get_priceExchange = async(
    req,res
)=>{
    try{
    console.log("[INFO] API thread running post_priceExchange Function");
    const {to,from,value} = req.params;
    let data=  await FromTo(from,to,value);
    return res.json({
        message: "Price converted successfully",
        data: data
    });
    }catch(e){
       return res.status(500).json({
            message:"Internal error while running Exchange API",
            error:e
        })
    }
}