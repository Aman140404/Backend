// const errorHandler=(err, req, res, next)=>{
//     // const statuscode=res.statuscode ? res.statuscode : 500;
//     res.json({message:err.message, stackTrace:err.stack});
// };

const jsonErrorHandler = (err, req, res, next) => {
    res.status(500).send({ error: err });
    return next()
  }
  

module.exports=jsonErrorHandler;