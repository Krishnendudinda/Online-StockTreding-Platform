module.exports.isLoggedIn = (req, res, next) => {
   if (!req.isAuthenticated()) {
            return res.status(401).json({ 
            success: false, 
            message: "You must be logged in first!" 
        });
    }
   
   // If authenticated, seamlessly proceed to the next controller route
   next();
};
