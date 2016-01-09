goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__158132__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__158132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__158133__i = 0, G__158133__a = new Array(arguments.length -  0);
while (G__158133__i < G__158133__a.length) {G__158133__a[G__158133__i] = arguments[G__158133__i + 0]; ++G__158133__i;}
  args = new cljs.core.IndexedSeq(G__158133__a,0);
} 
return G__158132__delegate.call(this,args);};
G__158132.cljs$lang$maxFixedArity = 0;
G__158132.cljs$lang$applyTo = (function (arglist__158134){
var args = cljs.core.seq(arglist__158134);
return G__158132__delegate(args);
});
G__158132.cljs$core$IFn$_invoke$arity$variadic = G__158132__delegate;
return G__158132;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__158135__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__158135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__158136__i = 0, G__158136__a = new Array(arguments.length -  0);
while (G__158136__i < G__158136__a.length) {G__158136__a[G__158136__i] = arguments[G__158136__i + 0]; ++G__158136__i;}
  args = new cljs.core.IndexedSeq(G__158136__a,0);
} 
return G__158135__delegate.call(this,args);};
G__158135.cljs$lang$maxFixedArity = 0;
G__158135.cljs$lang$applyTo = (function (arglist__158137){
var args = cljs.core.seq(arglist__158137);
return G__158135__delegate(args);
});
G__158135.cljs$core$IFn$_invoke$arity$variadic = G__158135__delegate;
return G__158135;
})()
;

return null;
});
