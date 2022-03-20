import lscache from "lscache";
var LRU = require("lru-cache"),
  options = {
    max: 500,
    length: function (n, key) {
      return n * 2 + key.length;
    },
    dispose: function (key, n) {
      n = "";
    },
    maxAge: 1000 * 60 * 60,
  },
  cache = new LRU(options);

lscache.flushExpired();

export { cache, lscache };
