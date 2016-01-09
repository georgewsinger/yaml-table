goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__157288__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__157288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__157289__i = 0, G__157289__a = new Array(arguments.length -  0);
while (G__157289__i < G__157289__a.length) {G__157289__a[G__157289__i] = arguments[G__157289__i + 0]; ++G__157289__i;}
  args = new cljs.core.IndexedSeq(G__157289__a,0);
} 
return G__157288__delegate.call(this,args);};
G__157288.cljs$lang$maxFixedArity = 0;
G__157288.cljs$lang$applyTo = (function (arglist__157290){
var args = cljs.core.seq(arglist__157290);
return G__157288__delegate(args);
});
G__157288.cljs$core$IFn$_invoke$arity$variadic = G__157288__delegate;
return G__157288;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__157291__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__157291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__157292__i = 0, G__157292__a = new Array(arguments.length -  0);
while (G__157292__i < G__157292__a.length) {G__157292__a[G__157292__i] = arguments[G__157292__i + 0]; ++G__157292__i;}
  args = new cljs.core.IndexedSeq(G__157292__a,0);
} 
return G__157291__delegate.call(this,args);};
G__157291.cljs$lang$maxFixedArity = 0;
G__157291.cljs$lang$applyTo = (function (arglist__157293){
var args = cljs.core.seq(arglist__157293);
return G__157291__delegate(args);
});
G__157291.cljs$core$IFn$_invoke$arity$variadic = G__157291__delegate;
return G__157291;
})()
;

return null;
});
