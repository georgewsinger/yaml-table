goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__290566__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__290566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290567__i = 0, G__290567__a = new Array(arguments.length -  0);
while (G__290567__i < G__290567__a.length) {G__290567__a[G__290567__i] = arguments[G__290567__i + 0]; ++G__290567__i;}
  args = new cljs.core.IndexedSeq(G__290567__a,0);
} 
return G__290566__delegate.call(this,args);};
G__290566.cljs$lang$maxFixedArity = 0;
G__290566.cljs$lang$applyTo = (function (arglist__290568){
var args = cljs.core.seq(arglist__290568);
return G__290566__delegate(args);
});
G__290566.cljs$core$IFn$_invoke$arity$variadic = G__290566__delegate;
return G__290566;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__290569__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__290569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290570__i = 0, G__290570__a = new Array(arguments.length -  0);
while (G__290570__i < G__290570__a.length) {G__290570__a[G__290570__i] = arguments[G__290570__i + 0]; ++G__290570__i;}
  args = new cljs.core.IndexedSeq(G__290570__a,0);
} 
return G__290569__delegate.call(this,args);};
G__290569.cljs$lang$maxFixedArity = 0;
G__290569.cljs$lang$applyTo = (function (arglist__290571){
var args = cljs.core.seq(arglist__290571);
return G__290569__delegate(args);
});
G__290569.cljs$core$IFn$_invoke$arity$variadic = G__290569__delegate;
return G__290569;
})()
;

return null;
});
