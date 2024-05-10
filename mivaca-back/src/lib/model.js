import pg from 'pg';
const { Pool } = pg
import "dotenv/config"; 

const pool = new Pool();

const Model = () => {

  const entities = [];

  const findUnique = (id) => {
    return entities.find((entity) => (entity.id = id));
  };

  const findMany = async () => {
    const resultadoQueryGroups = await pool.query('SELECT id, ownerid, name, email, createdAt FROM Users')
    return resultadoQueryGroups.rows;
  };

  const create = (entity) => {
    const maxId = entities.reduce((max, { id }) => Math.max(max, id), 0);
    const newId = (maxId + 1).toString();
    const newEntity = {
      ...entity,
      id: newId,
    };
    entities.push(newEntity);

    return newEntity;
  };

  const update = (id, newEntity) => {
    console.log(4.1, "[Database] Model update");

    const entityIndex = entities.findIndex((entity) => entity.id === id);

    if (entityIndex !== -1) {
      entities[entityIndex] = newEntity;

      return true;
    }

    return false;
  };

  const del = (id) => {
    console.log(4.1, "[Database] Model delete");

    const entityIndex = entities.findIndex((entity) => entity.id === id);

    if (entityIndex !== -1) {
      entities.splice(entityIndex, 1);

      return true;
    }

    return false;
  };

  return {
    findUnique,
    findMany,
    create,
    delete: del,
    update,
  };
};

export { Model };
