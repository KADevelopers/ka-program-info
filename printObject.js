// This file is a basic JavaScript utility that converts objects into a human-readable format.

var printObject = function(object, tabbing) {
  var printed;
  switch (typeof object) {
    case 'object':
      printed = '\n';
      if (object instanceof Array) {
        for (var i = 0; i < object.length; i++) {
          printed += printObject(object[i], tabbing + 1) + '\n';
        }
      }
      else {
        for (var i in object) {
          if (object.hasOwnProperty(i)) {
            printed += printObject(i, tabbing + 1) + ': ' + printObject(object[i], tabbing + 1) + '\n';
          }
        }
      }
      break;
    case 'string':
      printed = '"' + object.replace(/([^\\])"/g, '$1\\"') + '"';
      break;
    default:
      printed = object.toString();
  }
  return (new Array(tabbing + 1)).join('  ') + printed;
};
