goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39569__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39570__i = 0, G__39570__a = new Array(arguments.length -  0);
while (G__39570__i < G__39570__a.length) {G__39570__a[G__39570__i] = arguments[G__39570__i + 0]; ++G__39570__i;}
  args = new cljs.core.IndexedSeq(G__39570__a,0);
} 
return G__39569__delegate.call(this,args);};
G__39569.cljs$lang$maxFixedArity = 0;
G__39569.cljs$lang$applyTo = (function (arglist__39571){
var args = cljs.core.seq(arglist__39571);
return G__39569__delegate(args);
});
G__39569.cljs$core$IFn$_invoke$arity$variadic = G__39569__delegate;
return G__39569;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39572__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39573__i = 0, G__39573__a = new Array(arguments.length -  0);
while (G__39573__i < G__39573__a.length) {G__39573__a[G__39573__i] = arguments[G__39573__i + 0]; ++G__39573__i;}
  args = new cljs.core.IndexedSeq(G__39573__a,0);
} 
return G__39572__delegate.call(this,args);};
G__39572.cljs$lang$maxFixedArity = 0;
G__39572.cljs$lang$applyTo = (function (arglist__39574){
var args = cljs.core.seq(arglist__39574);
return G__39572__delegate(args);
});
G__39572.cljs$core$IFn$_invoke$arity$variadic = G__39572__delegate;
return G__39572;
})()
;

return null;
});
