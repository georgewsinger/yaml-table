goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__186446__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__186446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__186447__i = 0, G__186447__a = new Array(arguments.length -  0);
while (G__186447__i < G__186447__a.length) {G__186447__a[G__186447__i] = arguments[G__186447__i + 0]; ++G__186447__i;}
  args = new cljs.core.IndexedSeq(G__186447__a,0);
} 
return G__186446__delegate.call(this,args);};
G__186446.cljs$lang$maxFixedArity = 0;
G__186446.cljs$lang$applyTo = (function (arglist__186448){
var args = cljs.core.seq(arglist__186448);
return G__186446__delegate(args);
});
G__186446.cljs$core$IFn$_invoke$arity$variadic = G__186446__delegate;
return G__186446;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__186449__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__186449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__186450__i = 0, G__186450__a = new Array(arguments.length -  0);
while (G__186450__i < G__186450__a.length) {G__186450__a[G__186450__i] = arguments[G__186450__i + 0]; ++G__186450__i;}
  args = new cljs.core.IndexedSeq(G__186450__a,0);
} 
return G__186449__delegate.call(this,args);};
G__186449.cljs$lang$maxFixedArity = 0;
G__186449.cljs$lang$applyTo = (function (arglist__186451){
var args = cljs.core.seq(arglist__186451);
return G__186449__delegate(args);
});
G__186449.cljs$core$IFn$_invoke$arity$variadic = G__186449__delegate;
return G__186449;
})()
;

return null;
});
