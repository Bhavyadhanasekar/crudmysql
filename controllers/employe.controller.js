const express=require('express'),
    router=express.Router()

const service = require('../services/employee.service')

//http://localhost:5000/api/employes/
router.get('/',async(req,res) => {
    const employes = await service.getAllEmployes()
    res.send(employes)
   // res.send('list of employe and you did it bhavyaaa.')
})

router.get('/:id',async(req,res) => {
    const employe = await service.getAllEmployeById(req.params.id)
    res.send(employe);
   // res.send('list of employe and you did it bhavyaaa.')
})

router.delete('/:id',async(req,res)=>{
    const delete_id = await service.DeleteEmployeeBYID(req.params.id)
    res.send(delete_id);
})

router.post('/',async(req,res)=>{
     await service.addoreditEmployee(req.body)
    res.send(201).send('created successfully');
})

module.exports=router;