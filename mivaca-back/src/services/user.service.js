const UserService = () => {
    const getAll = () => {
        console.log(3, "[Users] Service Get All");
    };

    const getById = (id) => {
        console.log(3, "[Users] Service Get By Id", id);
    };

    const create = (newUser) => {
        console.log(3, "[Users] Service Create", newUser);
    };

    const editById = (id, users) => {
        console.log(3, "[Users] Service Edit", id, users);
    };

    const removeById = (id) => {
        console.log(3, "[Users] Service Remove", id);
    };

    return {
        getAll,
        getById,
        create,
        editById,
        removeById,
    };
};

export default UserService;