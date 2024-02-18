const planetSchema = require('../models/modelPlanet')
const sizeSchema = require('../models/modelSize')
exports.CreatePlanet = async(ctx)=>{ 
    return await planetSchema.create(ctx.request.body)
}

exports.CreateSize = async(ctx)=>{ 
    return await sizeSchema.create(ctx.request.body)
}

exports.GetPlanet = async(id)=>{ 
    
    const planet = await planetSchema.findById(id).exec()
    return await planetSchema.populate(planet, { path: 'size', select: 'size'} )
    
}

exports.DeletePlanet = async(id)=>{ 
    const planet = await planetSchema.deleteOne({_id:id})  
}

exports.UpdatePlanet = async(ctx)=>{
    await planetSchema.updateOne({_id:ctx.params.id},{name:ctx.request.body.name})  
}