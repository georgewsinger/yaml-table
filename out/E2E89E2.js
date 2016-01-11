goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__263184__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__263184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__263185__i = 0, G__263185__a = new Array(arguments.length -  0);
while (G__263185__i < G__263185__a.length) {G__263185__a[G__263185__i] = arguments[G__263185__i + 0]; ++G__263185__i;}
  args = new cljs.core.IndexedSeq(G__263185__a,0);
} 
return G__263184__delegate.call(this,args);};
G__263184.cljs$lang$maxFixedArity = 0;
G__263184.cljs$lang$applyTo = (function (arglist__263186){
var args = cljs.core.seq(arglist__263186);
return G__263184__delegate(args);
});
G__263184.cljs$core$IFn$_invoke$arity$variadic = G__263184__delegate;
return G__263184;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__263187__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__263187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__263188__i = 0, G__263188__a = new Array(arguments.length -  0);
while (G__263188__i < G__263188__a.length) {G__263188__a[G__263188__i] = arguments[G__263188__i + 0]; ++G__263188__i;}
  args = new cljs.core.IndexedSeq(G__263188__a,0);
} 
return G__263187__delegate.call(this,args);};
G__263187.cljs$lang$maxFixedArity = 0;
G__263187.cljs$lang$applyTo = (function (arglist__263189){
var args = cljs.core.seq(arglist__263189);
return G__263187__delegate(args);
});
G__263187.cljs$core$IFn$_invoke$arity$variadic = G__263187__delegate;
return G__263187;
})()
;

return null;
});
