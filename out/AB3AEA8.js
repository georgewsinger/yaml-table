goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__362843__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__362843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__362844__i = 0, G__362844__a = new Array(arguments.length -  0);
while (G__362844__i < G__362844__a.length) {G__362844__a[G__362844__i] = arguments[G__362844__i + 0]; ++G__362844__i;}
  args = new cljs.core.IndexedSeq(G__362844__a,0);
} 
return G__362843__delegate.call(this,args);};
G__362843.cljs$lang$maxFixedArity = 0;
G__362843.cljs$lang$applyTo = (function (arglist__362845){
var args = cljs.core.seq(arglist__362845);
return G__362843__delegate(args);
});
G__362843.cljs$core$IFn$_invoke$arity$variadic = G__362843__delegate;
return G__362843;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__362846__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__362846 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__362847__i = 0, G__362847__a = new Array(arguments.length -  0);
while (G__362847__i < G__362847__a.length) {G__362847__a[G__362847__i] = arguments[G__362847__i + 0]; ++G__362847__i;}
  args = new cljs.core.IndexedSeq(G__362847__a,0);
} 
return G__362846__delegate.call(this,args);};
G__362846.cljs$lang$maxFixedArity = 0;
G__362846.cljs$lang$applyTo = (function (arglist__362848){
var args = cljs.core.seq(arglist__362848);
return G__362846__delegate(args);
});
G__362846.cljs$core$IFn$_invoke$arity$variadic = G__362846__delegate;
return G__362846;
})()
;

return null;
});
