// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var $$Map = require("bs-platform/lib/js/map.js");
var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var $$String = require("bs-platform/lib/js/string.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var SExp$ReactTemplate = require("./SExp.bs.js");

var Imposible = Caml_exceptions.create("Eval-ReactTemplate.Imposible");

var Invalid = Caml_exceptions.create("Eval-ReactTemplate.Invalid");

var DefineMap = $$Map.Make([$$String.compare]);

function $eq$eq$great(params, body) {
  return /* record */[
          /* params */params,
          /* body */body
        ];
}

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
                  return /* Result */Block.__(0, [SExp$ReactTemplate.empty]);
                }
            case "debug" : 
                Curry._2(Ctx[/* << */1], ctx, /* List */Block.__(1, [match[1]]));
                return /* Result */Block.__(0, [SExp$ReactTemplate.empty]);
            case "define" : 
                var match$2 = match[1];
                if (match$2) {
                  var match$3 = match$2[0];
                  if (match$3.tag) {
                    var match$4 = match$3[0];
                    if (match$4) {
                      var match$5 = match$4[0];
                      if (match$5.tag) {
                        return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
                      } else {
                        var body = match$2[1];
                        var params = match$4[1];
                        var name = match$5[0];
                        if (List.for_all((function (param) {
                                  return param.tag ? false : true;
                                }), params)) {
                          Curry._2(Ctx[/* <~ */3], ctx, /* tuple */[
                                name,
                                /* record */[
                                  /* params */List.map((function (param) {
                                          if (param.tag) {
                                            throw Invalid;
                                          } else {
                                            return param[0];
                                          }
                                        }), params),
                                  /* body */body
                                ]
                              ]);
                          return /* Result */Block.__(0, [/* List */Block.__(1, [/* :: */[
                                          /* Atom */Block.__(0, ["defined"]),
                                          /* :: */[
                                            /* List */Block.__(1, [/* :: */[
                                                  /* Atom */Block.__(0, ["quote"]),
                                                  /* :: */[
                                                    /* Atom */Block.__(0, [name]),
                                                    /* [] */0
                                                  ]
                                                ]]),
                                            /* :: */[
                                              /* List */Block.__(1, [/* :: */[
                                                    /* Atom */Block.__(0, ["quote"]),
                                                    /* :: */[
                                                      /* List */Block.__(1, [params]),
                                                      /* [] */0
                                                    ]
                                                  ]]),
                                              /* :: */[
                                                /* List */Block.__(1, [/* :: */[
                                                      /* Atom */Block.__(0, ["quote"]),
                                                      /* :: */[
                                                        /* List */Block.__(1, [body]),
                                                        /* [] */0
                                                      ]
                                                    ]]),
                                                /* [] */0
                                              ]
                                            ]
                                          ]
                                        ]])]);
                        } else {
                          return /* Error */Block.__(1, [/* Atom */Block.__(0, ["InvalidDefine"])]);
                        }
                      }
                    } else {
                      return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
                    }
                  } else {
                    var body$1 = match$2[1];
                    var name$1 = match$3[0];
                    Curry._2(Ctx[/* <~ */3], ctx, /* tuple */[
                          name$1,
                          /* record */[
                            /* params : [] */0,
                            /* body */body$1
                          ]
                        ]);
                    return /* Result */Block.__(0, [/* List */Block.__(1, [/* :: */[
                                    /* Atom */Block.__(0, ["defined"]),
                                    /* :: */[
                                      /* List */Block.__(1, [/* :: */[
                                            /* Atom */Block.__(0, ["quote"]),
                                            /* :: */[
                                              /* Atom */Block.__(0, [name$1]),
                                              /* [] */0
                                            ]
                                          ]]),
                                      /* :: */[
                                        /* List */Block.__(1, [/* :: */[
                                              /* Atom */Block.__(0, ["quote"]),
                                              /* :: */[
                                                /* List */Block.__(1, [/* [] */0]),
                                                /* [] */0
                                              ]
                                            ]]),
                                        /* :: */[
                                          /* List */Block.__(1, [/* :: */[
                                                /* Atom */Block.__(0, ["quote"]),
                                                /* :: */[
                                                  /* List */Block.__(1, [body$1]),
                                                  /* [] */0
                                                ]
                                              ]]),
                                          /* [] */0
                                        ]
                                      ]
                                    ]
                                  ]])]);
                  }
                } else {
                  return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
                }
            case "quote" : 
                var match$6 = match[1];
                if (match$6) {
                  if (match$6[1]) {
                    return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
                  } else {
                    return /* Result */Block.__(0, [match$6[0]]);
                  }
                } else {
                  return /* Error */Block.__(1, [/* Atom */Block.__(0, ["NotFound"])]);
                }
            case "string" : 
                var match$7 = match[1];
                if (match$7) {
                  var match$8 = match$7[0];
                  if (match$8.tag) {
                    if (match$7[1]) {
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
                                              }), match$8[0]))])]);
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
exports.$eq$eq$great = $eq$eq$great;
exports.Make = Make;
/* DefineMap Not a pure module */
