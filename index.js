let text = "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";
const lzstring = require("lz-string");
// const ecoji = require("ecoji-js");
console.log(lzstring.decompressFromBase64(text));