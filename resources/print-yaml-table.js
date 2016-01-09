var asciitable = require("asciitable");

/*
 * test data:
 *	arr = [{sf: "capple"}, {sf: "banana"}, {sf: "fuck"}, {nothing: "hi"}];
 * sortArrayBySortField("sf", arr);
*/
sortArrayBySortField = function(sortField, arr) {
	
	var arr1 = arr;

	function compare(a,b) {
	  if (a[sortField] < b[sortField])
	    return -1;
	  else if (a[sortField] > b[sortField])
	    return 1;
	  else 
	    return 0;
	}

	return arr1.sort(compare);
}

/*
 * tests:
 * obj = {clojure: "non-empty", javascript: null};
 * removeNulls(obj);
*/
function removeNulls(obj) {
  var obj1 = obj;
  for (var k in obj1) {
    if (obj1[k]===null) {
      obj1[k]="";
    }
  }
  return obj1;
}

/*
 * tests:
 * arr = [obj, obj];
 * removeNullsFromArray(arr);
 *
*/
function removeNullsFromArray(arr) {
  var arr1 = arr;
  for (var k in arr1) {
    arr1[k] = removeNulls(obj);
  }
  return arr1;
}

printYamlTable = function(yamlConfig, arr, argDays) {
	var argDays = argDays ? argDays : 20; //default to 20 rows
	var ext = yamlConfig.file_extension;
	var sortField = yamlConfig.sort_field;
	var options = yamlConfig.options;
	var rows = removeNullsFromArray(sortArrayBySortField(sortField, arr)).slice(0, argDays);

	console.log(asciitable(options, rows));
}

module.exports.printExtTableFromArray = printYamlTable;
