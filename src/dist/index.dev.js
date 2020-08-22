"use strict";

var _Rickandmorty = _interopRequireDefault(require("./Rickandmorty"));

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Rickandmorty["default"].then(function (personajes) {
  var person = document.getElementById('personajes');
  personajes.forEach(function (e) {
    person.innerHTML += "\n    <div class=\"card mb-3 \" style=\"max-width: 540px;\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-4\">\n        <img id=\"".concat(e.id, "\" src=\"").concat(e.imagen, "\" class=\"card-img imagen\" alt=\"image\">\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card-body titulo_personaje ").concat(e.id, "\">\n          <h5 class=\"card-title\"> El nombre de este personaje es : ").concat(e.nombre, "</h5>\n          <p class=\"card-text\">El g\xE9nero es : ").concat(e.genero, "</p>\n          <p class=\"card-text\"><small class=\"text-muted\">Su especie es : ").concat(e.especies, "</small></p>\n          <p class=\"card-text\"><small class=\"text-muted\"> Su estado es :").concat(e.estado, "</small></p>\n        </div>\n      </div>\n    </div>\n  </div>");
  });
  (0, _jquery["default"])('.imagen').click(function (e) {
    (0, _jquery["default"])(".".concat(e.target.id)).css('display', 'block');
  });
  console.log(personajes);
})["catch"](function (error) {
  return console.log(error);
});