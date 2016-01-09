goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59147__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59147 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59148__i = 0, G__59148__a = new Array(arguments.length -  0);
while (G__59148__i < G__59148__a.length) {G__59148__a[G__59148__i] = arguments[G__59148__i + 0]; ++G__59148__i;}
  args = new cljs.core.IndexedSeq(G__59148__a,0);
} 
return G__59147__delegate.call(this,args);};
G__59147.cljs$lang$maxFixedArity = 0;
G__59147.cljs$lang$applyTo = (function (arglist__59149){
var args = cljs.core.seq(arglist__59149);
return G__59147__delegate(args);
});
G__59147.cljs$core$IFn$_invoke$arity$variadic = G__59147__delegate;
return G__59147;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59150__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59151__i = 0, G__59151__a = new Array(arguments.length -  0);
while (G__59151__i < G__59151__a.length) {G__59151__a[G__59151__i] = arguments[G__59151__i + 0]; ++G__59151__i;}
  args = new cljs.core.IndexedSeq(G__59151__a,0);
} 
return G__59150__delegate.call(this,args);};
G__59150.cljs$lang$maxFixedArity = 0;
G__59150.cljs$lang$applyTo = (function (arglist__59152){
var args = cljs.core.seq(arglist__59152);
return G__59150__delegate(args);
});
G__59150.cljs$core$IFn$_invoke$arity$variadic = G__59150__delegate;
return G__59150;
})()
;

return null;
});
