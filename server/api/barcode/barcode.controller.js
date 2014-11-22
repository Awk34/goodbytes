'use strict';

var _ = require('lodash');
var Barcode = require('./barcode.model');

// Get list of barcodes
exports.index = function (req, res) {
    Barcode.find(function (err, barcodes) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, barcodes);
    });
};

// Get a single barcode
exports.show = function (req, res) {
    Barcode.findById(req.params.id, function (err, barcode) {
        if (err) {
            return handleError(res, err);
        }
        if (!barcode) {
            return res.send(404);
        }
        return res.json(barcode);
    });
};

// Creates a new barcode in the DB.
exports.create = function (req, res) {
    Barcode.create(req.body, function (err, barcode) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, barcode);
    });
};

// Updates an existing barcode in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Barcode.findById(req.params.id, function (err, barcode) {
        if (err) {
            return handleError(res, err);
        }
        if (!barcode) {
            return res.send(404);
        }
        var updated = _.merge(barcode, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, barcode);
        });
    });
};

// Deletes a barcode from the DB.
exports.destroy = function (req, res) {
    Barcode.findById(req.params.id, function (err, barcode) {
        if (err) {
            return handleError(res, err);
        }
        if (!barcode) {
            return res.send(404);
        }
        barcode.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}
