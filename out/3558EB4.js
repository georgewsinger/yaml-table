goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__123963__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__123963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__123964__i = 0, G__123964__a = new Array(arguments.length -  0);
while (G__123964__i < G__123964__a.length) {G__123964__a[G__123964__i] = arguments[G__123964__i + 0]; ++G__123964__i;}
  args = new cljs.core.IndexedSeq(G__123964__a,0);
} 
return G__123963__delegate.call(this,args);};
G__123963.cljs$lang$maxFixedArity = 0;
G__123963.cljs$lang$applyTo = (function (arglist__123965){
var args = cljs.core.seq(arglist__123965);
return G__123963__delegate(args);
});
G__123963.cljs$core$IFn$_invoke$arity$variadic = G__123963__delegate;
return G__123963;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__123966__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__123966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__123967__i = 0, G__123967__a = new Array(arguments.length -  0);
while (G__123967__i < G__123967__a.length) {G__123967__a[G__123967__i] = arguments[G__123967__i + 0]; ++G__123967__i;}
  args = new cljs.core.IndexedSeq(G__123967__a,0);
} 
return G__123966__delegate.call(this,args);};
G__123966.cljs$lang$maxFixedArity = 0;
G__123966.cljs$lang$applyTo = (function (arglist__123968){
var args = cljs.core.seq(arglist__123968);
return G__123966__delegate(args);
});
G__123966.cljs$core$IFn$_invoke$arity$variadic = G__123966__delegate;
return G__123966;
})()
;

return null;
});
