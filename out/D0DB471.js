goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__244151__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__244151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__244152__i = 0, G__244152__a = new Array(arguments.length -  0);
while (G__244152__i < G__244152__a.length) {G__244152__a[G__244152__i] = arguments[G__244152__i + 0]; ++G__244152__i;}
  args = new cljs.core.IndexedSeq(G__244152__a,0);
} 
return G__244151__delegate.call(this,args);};
G__244151.cljs$lang$maxFixedArity = 0;
G__244151.cljs$lang$applyTo = (function (arglist__244153){
var args = cljs.core.seq(arglist__244153);
return G__244151__delegate(args);
});
G__244151.cljs$core$IFn$_invoke$arity$variadic = G__244151__delegate;
return G__244151;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__244154__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__244154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__244155__i = 0, G__244155__a = new Array(arguments.length -  0);
while (G__244155__i < G__244155__a.length) {G__244155__a[G__244155__i] = arguments[G__244155__i + 0]; ++G__244155__i;}
  args = new cljs.core.IndexedSeq(G__244155__a,0);
} 
return G__244154__delegate.call(this,args);};
G__244154.cljs$lang$maxFixedArity = 0;
G__244154.cljs$lang$applyTo = (function (arglist__244156){
var args = cljs.core.seq(arglist__244156);
return G__244154__delegate(args);
});
G__244154.cljs$core$IFn$_invoke$arity$variadic = G__244154__delegate;
return G__244154;
})()
;

return null;
});
