goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34862__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34863__i = 0, G__34863__a = new Array(arguments.length -  0);
while (G__34863__i < G__34863__a.length) {G__34863__a[G__34863__i] = arguments[G__34863__i + 0]; ++G__34863__i;}
  args = new cljs.core.IndexedSeq(G__34863__a,0);
} 
return G__34862__delegate.call(this,args);};
G__34862.cljs$lang$maxFixedArity = 0;
G__34862.cljs$lang$applyTo = (function (arglist__34864){
var args = cljs.core.seq(arglist__34864);
return G__34862__delegate(args);
});
G__34862.cljs$core$IFn$_invoke$arity$variadic = G__34862__delegate;
return G__34862;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34865__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34866__i = 0, G__34866__a = new Array(arguments.length -  0);
while (G__34866__i < G__34866__a.length) {G__34866__a[G__34866__i] = arguments[G__34866__i + 0]; ++G__34866__i;}
  args = new cljs.core.IndexedSeq(G__34866__a,0);
} 
return G__34865__delegate.call(this,args);};
G__34865.cljs$lang$maxFixedArity = 0;
G__34865.cljs$lang$applyTo = (function (arglist__34867){
var args = cljs.core.seq(arglist__34867);
return G__34865__delegate(args);
});
G__34865.cljs$core$IFn$_invoke$arity$variadic = G__34865__delegate;
return G__34865;
})()
;

return null;
});
