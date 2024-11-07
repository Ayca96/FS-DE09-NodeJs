'use strict'
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

module.exports = async (req,res,next)=>{

  // FILTERING &  SEARCHING & SORTING & PAGINATION

  console.log('line 101-->', req.query)

  // Filtering:
  // URL?filter[fieldName1]=value1&filter[fieldName2]=value2
  const filter = req.query?.filter || {}



  // Searching:
  // URL?search[fieldName1]=value1&search[fieldName2]=value2
  // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
  const search = req.query?.search || {}

  // { "<field>": { "$regex": "pattern" } }
  for (let key in search)
      search[key] = { $regex: search[key] } // assiging new value 
  //console.log(search[key])

  console.log(search)

 // const result = await BlogPost.find({ ...filter, ...search })

  //SORTING
  //URL?sort[fieldName]=asc&sort[fieldName2]=desc
  const sort = req.query?.sort || {}


  //LIMIT
  let limit = Number(req.query?.limit || 20) 
  limit = limit >0 ? limit : Number(process.env.PAGE_SIZE)

  //PAGE
  let page = Number(req.query?.page )
  page = page >0 ? page : 1

  //SKIP

  
  let skip = Number(req.query?.skip)
  skip = skip > 0 ? skip : ((page - 1) * limit)

  // console.log('skip',skip);
  // console.log('limit',limit);
  // console.log('page',page);
  
  res.getModelList = async (Model)=>{
  return  await Model.find({ ...filter, ...search }).sort(sort).limit(limit).skip(skip)
  }


  next()

}