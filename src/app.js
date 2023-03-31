const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).json({
        message:'You have successfully created a new project'
    })
})

app.get('/products',(req,res)=>{
    res.status(200).json({
        Products:[
            {
                productId:1,
                productName:'Oven',
                productPrice:20000
            },
            {
                productId:1,
                productName:'Refrigerator',
                productPrice:250000
            }
        ]
    })
})

app.listen(3000,()=>{
    console.log('listening on port 8080')
})