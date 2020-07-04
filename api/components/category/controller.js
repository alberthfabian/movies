const TABLA = 'category';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/mysql');
    }

    function list() {
        return store.list(TABLA);
    }

    async function upsert(body) {
        const category = {
            description: body.description,
        }

        if (body.id) {
            category.id = body.id;
        } else {
            category.id = nanoid();
        }

        return store.upsert(TABLA, category);
    }

    return {
        list,
        upsert,
    };
}