import Repository from '../repositories/users.repository.js';
import AppError from "../lib/application.error.js";

const UserService = (dbClient) => {
    const repository = Repository(dbClient);
    
    const getAll = async () => {
        return await repository.getAll();
    };

    const getById = async (id) => {
        console.log("consulta por Id", id)
        return await repository.getById(id, user);
    };

    const editById = async (id, user) => {
        return await repository.editById(id, user);
    };

    const removeById = async (id) => {
        return await repository.removeById(id);
    };

    const create = async (user) => {
        const name = validaName(group.name);

        // validaciones con la base de datos
        const userCount = await repository.countByName(name);
        if (userCount > 0) {
            throw AppError('Ya existe un usuario con ese nombre', 409);
        }

        return await repository.create(user);
    }

    const fullUpdateById = async (user) => {

        // validaciones de campos primero
        const name = validaName(user.name);

        // validaciones con la base de datos
        const existingUser = await repository.getById(user.id);
        if (!existingUser) {
            throw AppError('El usuario a modificar no existe', 404);
        }

        const userCount = await repository.countByNameNotId(name, group.id);
        if (groupCount > 0) {
            throw AppError('Ya existe otro usuario con ese nombre', 409);
        }

        return await repository.fullUpdateById({
            ...user,
            name
        });
    }

    const validaName = (newName) => {
        //Limpiar los datos
        const name = (newName || '').trim();
        //Validar los campos individuales
        if (name.length === 0) {
            throw AppError('El nombre es requerido', 400);
        }
        if (name.length > 30) {
            throw AppError('El nombre debe ser menor de 30 caracteres', 400);
        }

        return name;
    }
        


    return {
        getAll,
        getById,
        create,
        editById,
        removeById,
        fullUpdateById,
    };
};

export default UserService;