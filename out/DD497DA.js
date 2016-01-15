goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15780__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15781__i = 0, G__15781__a = new Array(arguments.length -  0);
while (G__15781__i < G__15781__a.length) {G__15781__a[G__15781__i] = arguments[G__15781__i + 0]; ++G__15781__i;}
  args = new cljs.core.IndexedSeq(G__15781__a,0);
} 
return G__15780__delegate.call(this,args);};
G__15780.cljs$lang$maxFixedArity = 0;
G__15780.cljs$lang$applyTo = (function (arglist__15782){
var args = cljs.core.seq(arglist__15782);
return G__15780__delegate(args);
});
G__15780.cljs$core$IFn$_invoke$arity$variadic = G__15780__delegate;
return G__15780;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15783__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15784__i = 0, G__15784__a = new Array(arguments.length -  0);
while (G__15784__i < G__15784__a.length) {G__15784__a[G__15784__i] = arguments[G__15784__i + 0]; ++G__15784__i;}
  args = new cljs.core.IndexedSeq(G__15784__a,0);
} 
return G__15783__delegate.call(this,args);};
G__15783.cljs$lang$maxFixedArity = 0;
G__15783.cljs$lang$applyTo = (function (arglist__15785){
var args = cljs.core.seq(arglist__15785);
return G__15783__delegate(args);
});
G__15783.cljs$core$IFn$_invoke$arity$variadic = G__15783__delegate;
return G__15783;
})()
;

return null;
});
