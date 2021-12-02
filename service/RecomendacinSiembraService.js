'use strict';


/**
 * Analiza una planta en concreto para un invernadero
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * invernid String ID del invernadero a recomendar plantas
 * planta String Nombre de la planta a comprobar si es recomendable
 * returns AnalisisPlanta
 **/
exports.recomendarPlantaConcreta = function(invernid,planta) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "planta" : {
    "name" : "Tomate",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recomienda cultivos para un invernadero concreto
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * invernid Planta ID del invernadero a recomendar plantas
 * returns List
 **/
exports.recomendarPlantas = function(invernid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Tomate",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
}, {
  "name" : "Tomate",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

