goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__351956__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__351956 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__351957__i = 0, G__351957__a = new Array(arguments.length -  0);
while (G__351957__i < G__351957__a.length) {G__351957__a[G__351957__i] = arguments[G__351957__i + 0]; ++G__351957__i;}
  args = new cljs.core.IndexedSeq(G__351957__a,0);
} 
return G__351956__delegate.call(this,args);};
G__351956.cljs$lang$maxFixedArity = 0;
G__351956.cljs$lang$applyTo = (function (arglist__351958){
var args = cljs.core.seq(arglist__351958);
return G__351956__delegate(args);
});
G__351956.cljs$core$IFn$_invoke$arity$variadic = G__351956__delegate;
return G__351956;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__351959__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__351959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__351960__i = 0, G__351960__a = new Array(arguments.length -  0);
while (G__351960__i < G__351960__a.length) {G__351960__a[G__351960__i] = arguments[G__351960__i + 0]; ++G__351960__i;}
  args = new cljs.core.IndexedSeq(G__351960__a,0);
} 
return G__351959__delegate.call(this,args);};
G__351959.cljs$lang$maxFixedArity = 0;
G__351959.cljs$lang$applyTo = (function (arglist__351961){
var args = cljs.core.seq(arglist__351961);
return G__351959__delegate(args);
});
G__351959.cljs$core$IFn$_invoke$arity$variadic = G__351959__delegate;
return G__351959;
})()
;

return null;
});
