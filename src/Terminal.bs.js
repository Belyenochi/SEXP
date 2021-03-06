// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var $$Map = require("bs-platform/lib/js/map.js");
var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Eval$ReactTemplate = require("./Eval.bs.js");
var SExp$ReactTemplate = require("./SExp.bs.js");
var SExpEditor$ReactTemplate = require("./SExpEditor.bs.js");
var SExpViewer$ReactTemplate = require("./SExpViewer.bs.js");

var StringMap = $$Map.Make([$$String.compare]);

var component = ReasonReact.reducerComponent("Terminal");

function clear(self) {
  return Curry._1(self[/* send */3], /* ClearBuffer */0);
}

function $less$less(self, text) {
  return Curry._1(self[/* send */3], /* AppendBuffer */Block.__(0, [
                text,
                "output"
              ]));
}

function $great$great(param, callback) {
  return Curry._1(param[0][/* send */3], /* Prompt */Block.__(1, [
                param[1],
                callback
              ]));
}

function $less$tilde(self, param) {
  return Curry._1(self[/* send */3], /* Define */Block.__(2, [
                param[0],
                param[1]
              ]));
}

function $percent(self, name) {
  return Curry._2(StringMap[/* find */21], name, self[/* state */1][/* mods */1]);
}

function has(self, name) {
  return Curry._2(StringMap[/* mem */2], name, self[/* state */1][/* mods */1]);
}

var EvelInstance = Eval$ReactTemplate.Make(/* module */[
      /* clear */clear,
      /* << */$less$less,
      /* >> */$great$great,
      /* <~ */$less$tilde,
      /* % */$percent,
      /* has */has
    ]);

var component$1 = ReasonReact.statelessComponent("Label");

function make(value, clazz, _) {
  return /* record */[
          /* debugName */component$1[/* debugName */0],
          /* reactClassInternal */component$1[/* reactClassInternal */1],
          /* handedOffState */component$1[/* handedOffState */2],
          /* willReceiveProps */component$1[/* willReceiveProps */3],
          /* didMount */component$1[/* didMount */4],
          /* didUpdate */component$1[/* didUpdate */5],
          /* willUnmount */component$1[/* willUnmount */6],
          /* willUpdate */component$1[/* willUpdate */7],
          /* shouldUpdate */component$1[/* shouldUpdate */8],
          /* render */(function () {
              return React.createElement("div", {
                          className: $$String.concat("", clazz)
                        }, value);
            }),
          /* initialState */component$1[/* initialState */10],
          /* retainedProps */component$1[/* retainedProps */11],
          /* reducer */component$1[/* reducer */12],
          /* subscriptions */component$1[/* subscriptions */13],
          /* jsElementWrapped */component$1[/* jsElementWrapped */14]
        ];
}

var Label = /* module */[
  /* component */component$1,
  /* make */make
];

function make$1() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var match = self[/* state */1];
              var prompt = match[/* prompt */3];
              var buffer = match[/* buffer */0];
              var length = List.length(buffer);
              return React.createElement("div", {
                          className: "terminal"
                        }, React.createElement("div", {
                              className: "buffer"
                            }, $$Array.of_list(List.mapi((function (i, param) {
                                        var datax = param[/* data */0];
                                        return React.createElement("div", {
                                                    key: String(length - i | 0),
                                                    className: "log " + param[/* source */1]
                                                  }, ReasonReact.element(/* None */0, /* None */0, make(param[/* time */2].toLocaleString(), /* :: */[
                                                            "time",
                                                            /* [] */0
                                                          ], /* array */[])), ReasonReact.element(/* None */0, /* None */0, make(SExp$ReactTemplate.toString(datax), /* :: */[
                                                            "source",
                                                            /* [] */0
                                                          ], /* array */[])), ReasonReact.element(/* None */0, /* None */0, SExpViewer$ReactTemplate.make(datax, /* array */[])));
                                      }), buffer))), React.createElement("div", {
                              className: "mini-buffer"
                            }, prompt ? ReasonReact.element(/* None */0, /* None */0, make(prompt[0][/* indicator */0], /* :: */[
                                        "indicator",
                                        /* [] */0
                                      ], /* array */[])) : null, ReasonReact.element(/* None */0, /* None */0, SExpEditor$ReactTemplate.make(match[/* minibuffer */2], (function (data) {
                                        return Curry._1(self[/* send */3], /* Update */Block.__(3, [data]));
                                      }), /* array */[])), React.createElement("button", {
                                  onClick: (function () {
                                      return Curry._1(self[/* send */3], /* Execute */1);
                                    })
                                }, "eval")));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* buffer : [] */0,
                      /* mods */StringMap[/* empty */0],
                      /* minibuffer */SExp$ReactTemplate.empty,
                      /* prompt : None */0
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (typeof action === "number") {
                if (action === 0) {
                  return /* Update */Block.__(0, [/* record */[
                              /* buffer : [] */0,
                              /* mods */state[/* mods */1],
                              /* minibuffer */state[/* minibuffer */2],
                              /* prompt */state[/* prompt */3]
                            ]]);
                } else {
                  return /* UpdateWithSideEffects */Block.__(2, [
                            /* record */[
                              /* buffer : :: */[
                                /* record */[
                                  /* data */state[/* minibuffer */2],
                                  /* source */"input",
                                  /* time */new Date()
                                ],
                                state[/* buffer */0]
                              ],
                              /* mods */state[/* mods */1],
                              /* minibuffer */SExp$ReactTemplate.empty,
                              /* prompt : None */0
                            ],
                            (function (self) {
                                var match = state[/* prompt */3];
                                if (match) {
                                  return Curry._1(match[0][/* handler */1], state[/* minibuffer */2]);
                                } else {
                                  var match$1 = Curry._3(EvelInstance[/* eval */0], self, /* [] */0, state[/* minibuffer */2]);
                                  if (match$1.tag) {
                                    return Curry._1(self[/* send */3], /* AppendBuffer */Block.__(0, [
                                                  match$1[0],
                                                  "error"
                                                ]));
                                  } else {
                                    return Curry._1(self[/* send */3], /* AppendBuffer */Block.__(0, [
                                                  match$1[0],
                                                  "result"
                                                ]));
                                  }
                                }
                              })
                          ]);
                }
              } else {
                switch (action.tag | 0) {
                  case 0 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* buffer : :: */[
                                    /* record */[
                                      /* data */action[0],
                                      /* source */action[1],
                                      /* time */new Date()
                                    ],
                                    state[/* buffer */0]
                                  ],
                                  /* mods */state[/* mods */1],
                                  /* minibuffer */state[/* minibuffer */2],
                                  /* prompt */state[/* prompt */3]
                                ]]);
                  case 1 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* buffer */state[/* buffer */0],
                                  /* mods */state[/* mods */1],
                                  /* minibuffer */state[/* minibuffer */2],
                                  /* prompt : Some */[/* record */[
                                      /* indicator */action[0],
                                      /* handler */action[1]
                                    ]]
                                ]]);
                  case 2 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* buffer */state[/* buffer */0],
                                  /* mods */Curry._3(StringMap[/* add */3], action[0], action[1], state[/* mods */1]),
                                  /* minibuffer */state[/* minibuffer */2],
                                  /* prompt */state[/* prompt */3]
                                ]]);
                  case 3 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* buffer */state[/* buffer */0],
                                  /* mods */state[/* mods */1],
                                  /* minibuffer */action[0],
                                  /* prompt */state[/* prompt */3]
                                ]]);
                  
                }
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.StringMap = StringMap;
exports.component = component;
exports.EvelInstance = EvelInstance;
exports.Label = Label;
exports.make = make$1;
/* StringMap Not a pure module */
