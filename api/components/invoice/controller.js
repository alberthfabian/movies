const { nanoid } = require('nanoid');

const TABLA = 'invoice';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/mysql');
    }

    function list() {
        return store.list(TABLA);
    }

    async function upsert(body) {
        const invoice = {
            date: body.date,
            Client_id: body.client_id,
            Pay_Method_id: body.pay_method_id,
        }

        if (body.id) {
            invoice.id = body.id;
        } else {
            invoice.id = nanoid();
        }

        return store.upsert(TABLA, invoice, false);
    }

    return {
        list,
        upsert,
    };
}