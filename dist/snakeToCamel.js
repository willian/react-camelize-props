"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var snakeToCamel=function(a){return a.replace(/([_|\-]\w)/g,function(a){return a[1].toUpperCase()})};exports.default=snakeToCamel;