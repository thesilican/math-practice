let text = "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=";
const lzstring = require("lz-string");
const ecoji = require("ecoji-js");
let detext = lzstring.decompressFromBase64(text);
let compress = lzstring.compressToBase64(detext);
console.log(ecoji.encode(compress))