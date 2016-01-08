goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34460__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34461__i = 0, G__34461__a = new Array(arguments.length -  0);
while (G__34461__i < G__34461__a.length) {G__34461__a[G__34461__i] = arguments[G__34461__i + 0]; ++G__34461__i;}
  args = new cljs.core.IndexedSeq(G__34461__a,0);
} 
return G__34460__delegate.call(this,args);};
G__34460.cljs$lang$maxFixedArity = 0;
G__34460.cljs$lang$applyTo = (function (arglist__34462){
var args = cljs.core.seq(arglist__34462);
return G__34460__delegate(args);
});
G__34460.cljs$core$IFn$_invoke$arity$variadic = G__34460__delegate;
return G__34460;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34463__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34464__i = 0, G__34464__a = new Array(arguments.length -  0);
while (G__34464__i < G__34464__a.length) {G__34464__a[G__34464__i] = arguments[G__34464__i + 0]; ++G__34464__i;}
  args = new cljs.core.IndexedSeq(G__34464__a,0);
} 
return G__34463__delegate.call(this,args);};
G__34463.cljs$lang$maxFixedArity = 0;
G__34463.cljs$lang$applyTo = (function (arglist__34465){
var args = cljs.core.seq(arglist__34465);
return G__34463__delegate(args);
});
G__34463.cljs$core$IFn$_invoke$arity$variadic = G__34463__delegate;
return G__34463;
})()
;

return null;
});
