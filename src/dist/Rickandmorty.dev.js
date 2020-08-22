"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Personajes = function Personajes(nombre, id, genero, especies, estado, imagen) {
  _classCallCheck(this, Personajes);

  this.nombre = nombre;
  this.id = id;
  this.genero = genero;
  this.especies = especies;
  this.estado = estado;
  this.imagen = imagen;
};

var RM = function () {
  return new Promise(function _callee(resolve, reject) {
    var Url, datos, personajes;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get("https://rickandmortyapi.com/api/character"));

          case 3:
            Url = _context.sent;
            datos = Url.data.results;
            personajes = [];
            datos.forEach(function (e) {
              personajes.push(new Personajes(e.name, e.id, e.gender, e.species, e.status, e.image));
            });
            resolve(personajes);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            reject("Algo te ha salido mal: ".concat(_context.t0));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]]);
  });
}();

var _default = RM;
exports["default"] = _default;