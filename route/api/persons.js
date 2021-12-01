const express =require('express');
const Person = require('../../models/persons');
const router = express.Router();
const auth = require('../../middelwaer/auth')


// users model
const Persons = require('../../models/persons')
//  @route get api/persons
// @ desc get all person
// @access puplic
router.get('/',(req,res)=>{
    Person.find()
    .sort({date: -1})
    .then((data)=>res.json(data))
    .catch(err=>res.status(404).json({succsss:false}));
})

//  @route post api/persons/add
// @ desc creat a post
// @access private
router.post('/add',auth,(req,res)=>{
    const newPerson = new Person({...req.body});
    newPerson.save()
    .then(person => res.json({...person._doc}))
    .catch ((err)=>{res.status(404).json({success:false,msg:"add faill!"})})})
//  @route delete api/persons/:id
// @ desc delete a post
// @access private
router.delete('/delete/:id',auth,(req,res)=>{
    Persons.findById(req.params.id)
    .then(person=>person.remove().then(()=> res.json({succsss:true})))
    .catch(err=>res.status(404).json({succsss:false}))
    
})
module.exports = router;