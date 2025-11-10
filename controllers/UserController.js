const {sendErrorResponse,sendResponse} = require("../utils/response")
const getAllUsers = (req, res) => {
    res.send("Fetching all users");
};

const addUser = (req, res) => {
   const {name,email} = req.body;
   if(!name || !email){
    return sendErrorResponse(res,{message:"Name and Email are required",statusCode:400});
   }
   const user = {id:1,name,email};
   return sendResponse(res,user,201)
};

const getUserById = (req, res) => {
    const user = req.params.id;
    if(user > 10){
        return sendErrorResponse(res,{message:"user not found",statusCode:404});
    }
    return sendResponse(res,user,200);
};

const updateUser = (req, res) => {
    const id = req.params.id;
    res.send(`Updating user with ID: ${id}`);
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    res.send(`Deleting user with ID: ${id}`);
};

module.exports = {
    getAllUsers,
    addUser,
    getUserById,
    updateUser,
    deleteUser
};
