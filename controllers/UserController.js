const getAllUsers = (req, res) => {
    res.send("Fetching all users");
};

const addUser = (req, res) => {
    res.send("Adding a new user");
};

const getUserById = (req, res) => {
    const id = req.params.id;
    res.send(`Fetching user with ID: ${id}`);
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
