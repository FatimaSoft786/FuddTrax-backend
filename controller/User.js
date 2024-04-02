const bcrypt = require("bcryptjs")
const model = require("../model/User");
const register = async(req,res)=>{
    try {

        let check = await model.findOne({name: req.body.name});
        if(check){
            res.status(400).json({error: true,message: "Sorry a user with this email already exist"})
        }else{
            const salt = await bcrypt.genSalt(10);
            const securePass = await bcrypt.hash(req.body.password,salt)
            check = await model.create({
                name: req.body.name,
                password: securePass
            });
            res.status(200).json({error: false, data: check.name})
          
        }
        
    } catch (error) {
        res.status(500).json({error: true, data: error.message});
    }
};

const login = async(req,res)=>{
    try {   
     const user = await model.findOne({name: req.body.name});
     if(!user){
        return res.status(400).json({error: true, data: "Please try to login with correct credentials"})
     }
     const comparePass = await bcrypt.compare(req.body.password,user.password);
     if(!comparePass){
        return res.status(400).json({error: true, data: "Please try to login with correct credentials"});
     }
     res.status(200).json({error: false, data: user._id});

    } catch (error) {
        res.status(500).json({error: true, data: error.message})
    }
};
const fetchUsers = async(req,res)=>{
    try {
        const doc = await model.find()
        if(doc){
res.status(200).json({error: false, users: doc})
        }else{
            res.status(400).json({error: true, users: "User not found"})
        }
        
    } catch (error) {
        res.status(500).json({error: true, users: error.message}) 
    }
}

module.exports = {
    register,
    login,
    fetchUsers
};