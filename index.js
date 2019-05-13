// jvm-npm needs this variable
const System = Java.type('java.lang.System')
load('./node_modules/jvm-npm/src/main/javascript/jvm-npm.js')
require('./app.js')
