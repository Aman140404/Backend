//@ desc get all contacts
//@route /api/contacts
//@ access public

const getcontacts=(req,res)=>{
    res.status(200).json({message:"get all contacts"});
};
//@ desc get contact
//@route post /api/contacts
//@access public

const createcontact=(req,res)=>{
    console.log("the request body is",req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    res.status(201).json({message :"create contact"});
};
//@ desc get contact
//@route get /api/contacts:id
//@access public

const getcontact=(req,res)=>{
    res.status(200).json({message:`get contact for ${req.params.id}`});
}
//@ desc update contacts
//@route put /api/contacts/:id
//@access public

const updatecontact=(req,res)=>{
    res.status(200).json({message:`update contactfor ${req.params.id}`});
};
//@ desc delete contacts
//@route delete /api/contacts/:id
//@access public

const deletecontact=(req,res)=>{
    res.status(200).json({message:`delete contacts for ${req.params.id}`});
};





module.exports={getcontact,deletecontact,updatecontact,getcontacts,createcontact };