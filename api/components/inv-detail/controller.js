const { nanoid } = require('nanoid');

const TABLA = 'inv_detail';

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
            quantity: body.quantity,
            Invoice_id: body.invoice_id,
            Schedule_id: body.schedule_id,
        }

        /* if (body.id) {
            invoice.id = body.id;
        } else {
            invoice.id = nanoid();
        } */

        return store.upsert(TABLA, invoice, false);
    }

    return {
        list,
        upsert,
    };
}