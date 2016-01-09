goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__109923__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__109923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109924__i = 0, G__109924__a = new Array(arguments.length -  0);
while (G__109924__i < G__109924__a.length) {G__109924__a[G__109924__i] = arguments[G__109924__i + 0]; ++G__109924__i;}
  args = new cljs.core.IndexedSeq(G__109924__a,0);
} 
return G__109923__delegate.call(this,args);};
G__109923.cljs$lang$maxFixedArity = 0;
G__109923.cljs$lang$applyTo = (function (arglist__109925){
var args = cljs.core.seq(arglist__109925);
return G__109923__delegate(args);
});
G__109923.cljs$core$IFn$_invoke$arity$variadic = G__109923__delegate;
return G__109923;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__109926__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__109926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109927__i = 0, G__109927__a = new Array(arguments.length -  0);
while (G__109927__i < G__109927__a.length) {G__109927__a[G__109927__i] = arguments[G__109927__i + 0]; ++G__109927__i;}
  args = new cljs.core.IndexedSeq(G__109927__a,0);
} 
return G__109926__delegate.call(this,args);};
G__109926.cljs$lang$maxFixedArity = 0;
G__109926.cljs$lang$applyTo = (function (arglist__109928){
var args = cljs.core.seq(arglist__109928);
return G__109926__delegate(args);
});
G__109926.cljs$core$IFn$_invoke$arity$variadic = G__109926__delegate;
return G__109926;
})()
;

return null;
});
