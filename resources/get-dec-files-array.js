/****************************/
/*                          */
/*         traverse         */
/*                          */
/****************************/

//var exports = module.exports = {};

var path = require('path'), fs=require('fs');

var arrayOfFiles = [];

function fromDir(startPath,filter) {


//console.log('Starting from dir '+startPath+'/');

	//stats = fs.lstatSync(startPath);
	
	if (!fs.existsSync(startPath)){
            //console.log("Nothing.",startPath);
	    return;
	}

	//stats = fs.accessSync(startPath, fs.F_OK);
	stats = fs.lstatSync(startPath);

	// Is it a directory?
	if (!stats.isDirectory()) {
		arrayOfFiles.push(startPath);	
		return;
        }

        var files=fs.readdirSync(startPath);
        for(var i=0;i<files.length;i++){
             var filename=path.join(startPath,files[i]);
             var stat = fs.lstatSync(filename);
             if (stat.isDirectory()){
             fromDir(filename,filter); //recurse
             } else if (filename.indexOf(filter)>=0) {
              //console.log('-- found: ',filename);
	      arrayOfFiles.push(filename);
             };
         };

	return arrayOfFiles;
};// here?

var getDecFiles = function(path) {
	//arrayOfFiles = ["/home/george/Dropbox/briefcase/tonight.dec"];
	//fromDir(path,'.dec');
	//console.log("getDecFiles called");
	//return arrayOfFiles;
	var duh = fromDir(path, '.dec');
	console.log("duh: ", duh);
	return duh;
};

//BEGIN
//END

module.exports.getDecFiles = getDecFiles;

//console.log(getDecFiles('/home/george/Dropbox'));
