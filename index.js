require('./out/goog/bootstrap/nodejs')
require('./lib/yaml-table') // Name of the js ouput file
require('./out/yaml-table/core') // Path to compiled core file
qbcljs.core._main(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]) // appname.namespace._mainfunction
