// This file is a basic JavaScript utility that converts objects into a human-readable format.

var printObject = function(object, tabbing) {
  var printed;
  switch (typeof object) {
    case 'object':
      printed = '\n';
      if (object instanceof Array) {
        for (var i = 0; i < object.length; i++) {
          printed += (new Array(tabbing + 1)).join('  ') + printObject(object[i], tabbing + 1) + '\n';
        }
      }
      else {
        for (var i in object) {
          if (object.hasOwnProperty(i)) {
            printed += (new Array(tabbing + 1)).join('  ') + printObject(i, 0) + ': ' + printObject(object[i], tabbing + 1) + '\n';
          }
        }
      }
      break;
    case 'string':
      printed = '"' + object.replace(/([^\\])"/g, '$1\\"').replace('\n', '\\n').replace('\\', '\\\\').replace('\t', '\\t') + '"';
      break;
    default:
      printed = object.toString();
  }
  return printed;
};
