var asciitable = require("asciitable");

var options = { 				
	 skinny: true,
	 intersectionCharacter: "N",
	 columns: [{field: "date", name: "Date"}, 
	           {field: "decision",  name: "Decision"},
		   {field: "hypothesis",  name: "Hypothesis"},
		   {field: "exposure",  name: "Exposure"},
		   {field: "probability",  name: "Pr"},
		   {field: "outcome",  name: "Outcome"},
		   {field: "brier_score",  name: "B.S."},
		   {field: "expiration", name: "Exp"}]};


stripNullFromOverviewRows = function(arr, argDay) {

	//console.log("stripNullFromOverviewRows called");

	for (k=0; k < arr.length; k++) {
		arr[k]["date"] = (arr[k]["date"] == null) ? "" : arr[k]["date"];
		arr[k]["decision"] = (arr[k]["decision"] == null) ? "" : arr[k]["decision"];
		arr[k]["hypothesis"] = (arr[k]["hypothesis"] == null) ? "" : arr[k]["hypothesis"];
		arr[k]["exposure"] = (arr[k]["exposure"] == null) ? "" : arr[k]["exposure"];
		arr[k]["probability"] = (arr[k]["probability"] == null) ? "" : arr[k]["probability"];
		arr[k]["outcome"] = (arr[k]["outcome"] == null) ? "" : arr[k]["outcome"];
		arr[k]["brier_score"] = (arr[k]["brier_score"] == null) ? "" : arr[k]["brier_score"];
		arr[k]["expiration"] = (arr[k]["expiration"] == null) ? "" : arr[k]["expiration"];
	}

	var tod = new Date();

	function daysAwayFilter(row) {
		//if (!row.date) { return true; }
		rowDateTime = (new Date(row.date)).getTime();
		var timeDiff = Math.abs(rowDateTime - tod.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

		return (diffDays < argDay);
	}

	arr2 = arr.filter(daysAwayFilter);

	var arr3 = arr2.sort(function(a, b){
		 var dateA=new Date(a.date), dateB=new Date(b.date);
			  return dateB-dateA //sort by date ascending//nowdescending
	});
	
	console.log(asciitable(options, arr3));
	return arr3;
}

printOverviewTableFromArray = function(arr, argDays) {
	if (!argDays) { argDays = 100 };
	arr = stripNullFromOverviewRows(arr, argDays);
}

//this function ought presume that arr is already sorted
printExtTableFromArray = function(ext, options, arr) {
	//get ./.yaml-table options object

	//get .yaml-table sort field

	//QWERTY: make these functions to jam shit down a channel
	//sort arr --> make this seperate function
	//strip arr from nulls --> make this seperate function

	console.log(asciitable(options, arr));
}

module.exports.printOverviewTableFromArray = printOverviewTableFromArray;
