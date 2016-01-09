goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__74000__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__74000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74001__i = 0, G__74001__a = new Array(arguments.length -  0);
while (G__74001__i < G__74001__a.length) {G__74001__a[G__74001__i] = arguments[G__74001__i + 0]; ++G__74001__i;}
  args = new cljs.core.IndexedSeq(G__74001__a,0);
} 
return G__74000__delegate.call(this,args);};
G__74000.cljs$lang$maxFixedArity = 0;
G__74000.cljs$lang$applyTo = (function (arglist__74002){
var args = cljs.core.seq(arglist__74002);
return G__74000__delegate(args);
});
G__74000.cljs$core$IFn$_invoke$arity$variadic = G__74000__delegate;
return G__74000;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__74003__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__74003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74004__i = 0, G__74004__a = new Array(arguments.length -  0);
while (G__74004__i < G__74004__a.length) {G__74004__a[G__74004__i] = arguments[G__74004__i + 0]; ++G__74004__i;}
  args = new cljs.core.IndexedSeq(G__74004__a,0);
} 
return G__74003__delegate.call(this,args);};
G__74003.cljs$lang$maxFixedArity = 0;
G__74003.cljs$lang$applyTo = (function (arglist__74005){
var args = cljs.core.seq(arglist__74005);
return G__74003__delegate(args);
});
G__74003.cljs$core$IFn$_invoke$arity$variadic = G__74003__delegate;
return G__74003;
})()
;

return null;
});
