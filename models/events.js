'use strict';
'use strict';
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    event = new Schema({
        type: { //Tipo de evento: page_view, call_api
            // type: Schema.Types.ObjectId,
            type: String,
            ref: 'typeEvent',
            required: true
        },
        request: { type: Object, default: {} }, //Objeto petición con URI, metodo y parametros
        geo: { type: Object, default: {} }, // Objeto de geo ubicación
        geolocation: { type: Object, default: {} }, //Coordenadas según GPS
        device: { type: Object, default: {} }, //Info del dispositivo
        dateCreated: { type: Date, default: Date.now },

    });
module.exports = event;