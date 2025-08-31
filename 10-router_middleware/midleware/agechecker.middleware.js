// ? THis is middleware for age checker if client age greater or equal then he/she can access the website
function ageCheker (req,res,next){
    if(req.query.age >=18){
        next()
    }
    else{
        res.send("YOu are not eligable")
    }
}

export default ageCheker;