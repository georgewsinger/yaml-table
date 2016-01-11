goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__274569__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__274569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__274570__i = 0, G__274570__a = new Array(arguments.length -  0);
while (G__274570__i < G__274570__a.length) {G__274570__a[G__274570__i] = arguments[G__274570__i + 0]; ++G__274570__i;}
  args = new cljs.core.IndexedSeq(G__274570__a,0);
} 
return G__274569__delegate.call(this,args);};
G__274569.cljs$lang$maxFixedArity = 0;
G__274569.cljs$lang$applyTo = (function (arglist__274571){
var args = cljs.core.seq(arglist__274571);
return G__274569__delegate(args);
});
G__274569.cljs$core$IFn$_invoke$arity$variadic = G__274569__delegate;
return G__274569;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__274572__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__274572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__274573__i = 0, G__274573__a = new Array(arguments.length -  0);
while (G__274573__i < G__274573__a.length) {G__274573__a[G__274573__i] = arguments[G__274573__i + 0]; ++G__274573__i;}
  args = new cljs.core.IndexedSeq(G__274573__a,0);
} 
return G__274572__delegate.call(this,args);};
G__274572.cljs$lang$maxFixedArity = 0;
G__274572.cljs$lang$applyTo = (function (arglist__274574){
var args = cljs.core.seq(arglist__274574);
return G__274572__delegate(args);
});
G__274572.cljs$core$IFn$_invoke$arity$variadic = G__274572__delegate;
return G__274572;
})()
;

return null;
});
