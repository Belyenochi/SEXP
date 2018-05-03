// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var $$Map = require("bs-platform/lib/js/map.js");
var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var $$String = require("bs-platform/lib/js/string.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var Imposible = Caml_exceptions.create("Eval-ReactTemplate.Imposible");

var Invalid = Caml_exceptions.create("Eval-ReactTemplate.Invalid");

var DefineMap = $$Map.Make([$$String.compare]);

function Make(Ctx) {
  $$Map.Make([$$String.compare]);
  var $$eval = function (ctx, src) {
    if (src.tag) {
      var match = src[0];
      if (match) {
        var match$1 = match[0];
        if (match$1.tag) {
          return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
        } else {
          switch (match$1[0]) {
            case "clear" : 
                if (match[1]) {
                  return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
                } else {
                  Curry._1(Ctx[/* clear */0], ctx);
                  return /* Result */Block.__(0, [/* List */Block.__(1, [/* [] */0])]);
                }
            case "debug" : 
                Curry._2(Ctx[/* write */1], ctx, /* List */Block.__(1, [match[1]]));
                return /* Result */Block.__(0, [/* List */Block.__(1, [/* [] */0])]);
            case "quote" : 
                var match$2 = match[1];
                if (match$2) {
                  if (match$2[1]) {
                    return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
                  } else {
                    return /* Result */Block.__(0, [match$2[0]]);
                  }
                } else {
                  return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
                }
            case "string" : 
                var match$3 = match[1];
                if (match$3) {
                  var match$4 = match$3[0];
                  if (match$4.tag) {
                    if (match$3[1]) {
                      return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
                    } else {
                      return /* Result */Block.__(0, [/* Atom */Block.__(0, [$$String.concat("", List.map((function (param) {
                                                if (param.tag) {
                                                  if (param[0]) {
                                                    return "";
                                                  } else {
                                                    return " ";
                                                  }
                                                } else {
                                                  return param[0];
                                                }
                                              }), match$4[0]))])]);
                    }
                  } else {
                    return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
                  }
                } else {
                  return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
                }
            default:
              return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
          }
        }
      } else {
        return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
      }
    } else {
      return /* Result */Block.__(0, [src]);
    }
  };
  return /* module */[/* eval */$$eval];
}

exports.Imposible = Imposible;
exports.Invalid = Invalid;
exports.DefineMap = DefineMap;
exports.Make = Make;
/* DefineMap Not a pure module */
