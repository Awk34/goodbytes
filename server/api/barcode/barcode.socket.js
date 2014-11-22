/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Barcode = require('./barcode.model');

exports.register = function (socket) {
    Barcode.schema.post('save', function (doc) {
        onSave(socket, doc);
    });
    Barcode.schema.post('remove', function (doc) {
        onRemove(socket, doc);
    });
}

function onSave(socket, doc, cb) {
    socket.emit('barcode:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('barcode:remove', doc);
}
