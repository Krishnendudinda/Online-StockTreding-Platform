const User = require("./model/userModel.js");
const passport = require("passport");

module.exports.signup = async (req, res, next) => {
    try{
        let {username,email,password} = req.body;
        const newUser = new User({username,email});
        const registerUser = await User.register(newUser,password);
        console.log(registerUser);
        req.login(registerUser, (err) =>{
            if(err){
                return next(err);
            }
            return res.status(201).json({
                success:true,
                message:"welcome to Zerodha",
                user: { id: registerUser._id, username: registerUser.username }
            });    

        })
    }catch(e){
        res.status(400).json({
            success: false, message: e.message 
        });
    }
};

module.exports.login = async(req,res, next) => {
   res.status(200).json({ 
        success: true, 
        message: "Logged in successfully!", 
        user: { id: req.user._id, username: req.user.username } 
    }); 
}; 

module.exports.logout = (req,res,next) => {
    req.logOut((err) =>{
        if(err){ 
            return next(err);
        }
        res.status(200).json({
            success: true, message: "Logged out successfully!"
        });
    })
};    