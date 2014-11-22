'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BarcodeSchema = new Schema({
    name: String,
    info: String,
    GTIN_CD: String,
    GTIN_LEVEL_CD: String,
    GCP_CD: String,
    BSIN: String,
    GPC_S_CD: String,
    GPC_F_CD: String,
    GPC_C_CD: String,
    GPC_B_CD: String,
    GTIN_NM: String,
    PRODUCT_LINE: String,
    M_G: String,
    M_OZ: String,
    M_ML: String,
    M_FLOZ: String,
    M_ABV: String,
    M_ABW: String,
    PKG_UNIT: String,
    PKG_TYPE_CD: String,
    REF_CD: String,
    SOURCE: String,
    IMG: String
});

module.exports = mongoose.model('Barcode', BarcodeSchema);
