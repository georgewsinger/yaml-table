goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__154552__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__154552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154553__i = 0, G__154553__a = new Array(arguments.length -  0);
while (G__154553__i < G__154553__a.length) {G__154553__a[G__154553__i] = arguments[G__154553__i + 0]; ++G__154553__i;}
  args = new cljs.core.IndexedSeq(G__154553__a,0);
} 
return G__154552__delegate.call(this,args);};
G__154552.cljs$lang$maxFixedArity = 0;
G__154552.cljs$lang$applyTo = (function (arglist__154554){
var args = cljs.core.seq(arglist__154554);
return G__154552__delegate(args);
});
G__154552.cljs$core$IFn$_invoke$arity$variadic = G__154552__delegate;
return G__154552;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__154555__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__154555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154556__i = 0, G__154556__a = new Array(arguments.length -  0);
while (G__154556__i < G__154556__a.length) {G__154556__a[G__154556__i] = arguments[G__154556__i + 0]; ++G__154556__i;}
  args = new cljs.core.IndexedSeq(G__154556__a,0);
} 
return G__154555__delegate.call(this,args);};
G__154555.cljs$lang$maxFixedArity = 0;
G__154555.cljs$lang$applyTo = (function (arglist__154557){
var args = cljs.core.seq(arglist__154557);
return G__154555__delegate(args);
});
G__154555.cljs$core$IFn$_invoke$arity$variadic = G__154555__delegate;
return G__154555;
})()
;

return null;
});
