goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__233337__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__233337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__233338__i = 0, G__233338__a = new Array(arguments.length -  0);
while (G__233338__i < G__233338__a.length) {G__233338__a[G__233338__i] = arguments[G__233338__i + 0]; ++G__233338__i;}
  args = new cljs.core.IndexedSeq(G__233338__a,0);
} 
return G__233337__delegate.call(this,args);};
G__233337.cljs$lang$maxFixedArity = 0;
G__233337.cljs$lang$applyTo = (function (arglist__233339){
var args = cljs.core.seq(arglist__233339);
return G__233337__delegate(args);
});
G__233337.cljs$core$IFn$_invoke$arity$variadic = G__233337__delegate;
return G__233337;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__233340__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__233340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__233341__i = 0, G__233341__a = new Array(arguments.length -  0);
while (G__233341__i < G__233341__a.length) {G__233341__a[G__233341__i] = arguments[G__233341__i + 0]; ++G__233341__i;}
  args = new cljs.core.IndexedSeq(G__233341__a,0);
} 
return G__233340__delegate.call(this,args);};
G__233340.cljs$lang$maxFixedArity = 0;
G__233340.cljs$lang$applyTo = (function (arglist__233342){
var args = cljs.core.seq(arglist__233342);
return G__233340__delegate(args);
});
G__233340.cljs$core$IFn$_invoke$arity$variadic = G__233340__delegate;
return G__233340;
})()
;

return null;
});
