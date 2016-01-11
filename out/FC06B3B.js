goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__189704__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__189704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__189705__i = 0, G__189705__a = new Array(arguments.length -  0);
while (G__189705__i < G__189705__a.length) {G__189705__a[G__189705__i] = arguments[G__189705__i + 0]; ++G__189705__i;}
  args = new cljs.core.IndexedSeq(G__189705__a,0);
} 
return G__189704__delegate.call(this,args);};
G__189704.cljs$lang$maxFixedArity = 0;
G__189704.cljs$lang$applyTo = (function (arglist__189706){
var args = cljs.core.seq(arglist__189706);
return G__189704__delegate(args);
});
G__189704.cljs$core$IFn$_invoke$arity$variadic = G__189704__delegate;
return G__189704;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__189707__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__189707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__189708__i = 0, G__189708__a = new Array(arguments.length -  0);
while (G__189708__i < G__189708__a.length) {G__189708__a[G__189708__i] = arguments[G__189708__i + 0]; ++G__189708__i;}
  args = new cljs.core.IndexedSeq(G__189708__a,0);
} 
return G__189707__delegate.call(this,args);};
G__189707.cljs$lang$maxFixedArity = 0;
G__189707.cljs$lang$applyTo = (function (arglist__189709){
var args = cljs.core.seq(arglist__189709);
return G__189707__delegate(args);
});
G__189707.cljs$core$IFn$_invoke$arity$variadic = G__189707__delegate;
return G__189707;
})()
;

return null;
});
