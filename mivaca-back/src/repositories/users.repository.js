// src/repositories/users.repository.js
const Repository = (dbClient) => {

    const getAll = async () => {
        const [rows] = await dbClient.query('SELECT * FROM users');
        return rows;
    };

    const getById = async (id) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        const [rows] = await dbClient.query(query, [id]);
        return rows[0];
    };

    const removeById = async (id) => {
        const query = 'DELETE FROM users WHERE id = ?';
        await dbClient.query(query, [id]);
    };

    const create = async (user) => {
        const query = 'INSERT INTO users SET ?';
        const [result] = await dbClient.query(query, user);
        return { id: result.insertId, ...user };
    };

    const countByName = async (name) => {
        const query = 'SELECT COUNT(*) as count FROM users WHERE name = ?';
        const [rows] = await dbClient.query(query, [name]);
        return rows[0].count;
    };

    const countByNameNotId = async (name, id) => {
        const query = 'SELECT COUNT(*) as count FROM users WHERE name = ? AND id != ?';
        const [rows] = await dbClient.query(query, [name, id]);
        return rows[0].count;
    };

    const fullUpdateById = async (user) => {
        const query = 'UPDATE users SET ? WHERE id = ?';
        await dbClient.query(query, [user, user.id]);
    };

    return {
        getAll,
        getById,
        removeById,
        create,
        countByName,
        countByNameNotId,
        fullUpdateById,
    };
};

export default Repository;
