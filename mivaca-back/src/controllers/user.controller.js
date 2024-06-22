import UserService from '../services/user.service.js';
import StatusCodes from 'http-status-codes';

const UserController = () => {
  console.log(2, '[User] Controller');

  const userService = UserService();

  const getById = async (req, res) => {
    console.log(2.1, '[User] Controller Get By Id');

    const users = await userService.getById(req.params.id);

    if (!users) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `User with id ${req.params.id} does not exist` });
    }

    return res.status(StatusCodes.OK).json({
      users,
    });
  };

  const create = async (req, res) => {
    console.log(2.1, '[User] Controller Create');

    const users = await userService.create(req.body);

    return res.status(StatusCodes.CREATED).json(users);
  };

  return {
    getById,
    create,
  };
};

export default UserController; 