goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__226866__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__226866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__226867__i = 0, G__226867__a = new Array(arguments.length -  0);
while (G__226867__i < G__226867__a.length) {G__226867__a[G__226867__i] = arguments[G__226867__i + 0]; ++G__226867__i;}
  args = new cljs.core.IndexedSeq(G__226867__a,0);
} 
return G__226866__delegate.call(this,args);};
G__226866.cljs$lang$maxFixedArity = 0;
G__226866.cljs$lang$applyTo = (function (arglist__226868){
var args = cljs.core.seq(arglist__226868);
return G__226866__delegate(args);
});
G__226866.cljs$core$IFn$_invoke$arity$variadic = G__226866__delegate;
return G__226866;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__226869__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__226869 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__226870__i = 0, G__226870__a = new Array(arguments.length -  0);
while (G__226870__i < G__226870__a.length) {G__226870__a[G__226870__i] = arguments[G__226870__i + 0]; ++G__226870__i;}
  args = new cljs.core.IndexedSeq(G__226870__a,0);
} 
return G__226869__delegate.call(this,args);};
G__226869.cljs$lang$maxFixedArity = 0;
G__226869.cljs$lang$applyTo = (function (arglist__226871){
var args = cljs.core.seq(arglist__226871);
return G__226869__delegate(args);
});
G__226869.cljs$core$IFn$_invoke$arity$variadic = G__226869__delegate;
return G__226869;
})()
;

return null;
});
