goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__87891__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__87891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87892__i = 0, G__87892__a = new Array(arguments.length -  0);
while (G__87892__i < G__87892__a.length) {G__87892__a[G__87892__i] = arguments[G__87892__i + 0]; ++G__87892__i;}
  args = new cljs.core.IndexedSeq(G__87892__a,0);
} 
return G__87891__delegate.call(this,args);};
G__87891.cljs$lang$maxFixedArity = 0;
G__87891.cljs$lang$applyTo = (function (arglist__87893){
var args = cljs.core.seq(arglist__87893);
return G__87891__delegate(args);
});
G__87891.cljs$core$IFn$_invoke$arity$variadic = G__87891__delegate;
return G__87891;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__87894__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__87894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87895__i = 0, G__87895__a = new Array(arguments.length -  0);
while (G__87895__i < G__87895__a.length) {G__87895__a[G__87895__i] = arguments[G__87895__i + 0]; ++G__87895__i;}
  args = new cljs.core.IndexedSeq(G__87895__a,0);
} 
return G__87894__delegate.call(this,args);};
G__87894.cljs$lang$maxFixedArity = 0;
G__87894.cljs$lang$applyTo = (function (arglist__87896){
var args = cljs.core.seq(arglist__87896);
return G__87894__delegate(args);
});
G__87894.cljs$core$IFn$_invoke$arity$variadic = G__87894__delegate;
return G__87894;
})()
;

return null;
});
