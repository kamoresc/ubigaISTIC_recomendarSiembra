'use strict';

var utils = require('../utils/writer.js');
var RecomendacinSiembra = require('../service/RecomendacinSiembraService');

module.exports.recomendarPlantaConcreta = function recomendarPlantaConcreta (req, res, next, invernid, planta) {
  RecomendacinSiembra.recomendarPlantaConcreta(invernid, planta)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recomendarPlantas = function recomendarPlantas (req, res, next, invernid) {
  RecomendacinSiembra.recomendarPlantas(invernid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
