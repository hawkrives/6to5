"use strict";

(function () {
  var _loop = function (i) {
    fns.push(function () {
      return i;
    });
    return {
      v: undefined
    };
  };

  for (var i in nums) {
    var _ret = _loop(i);

    if (typeof _ret === "object") return _ret.v;
  }
})();