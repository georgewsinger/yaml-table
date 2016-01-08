goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39955__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39956__i = 0, G__39956__a = new Array(arguments.length -  0);
while (G__39956__i < G__39956__a.length) {G__39956__a[G__39956__i] = arguments[G__39956__i + 0]; ++G__39956__i;}
  args = new cljs.core.IndexedSeq(G__39956__a,0);
} 
return G__39955__delegate.call(this,args);};
G__39955.cljs$lang$maxFixedArity = 0;
G__39955.cljs$lang$applyTo = (function (arglist__39957){
var args = cljs.core.seq(arglist__39957);
return G__39955__delegate(args);
});
G__39955.cljs$core$IFn$_invoke$arity$variadic = G__39955__delegate;
return G__39955;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39958__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39959__i = 0, G__39959__a = new Array(arguments.length -  0);
while (G__39959__i < G__39959__a.length) {G__39959__a[G__39959__i] = arguments[G__39959__i + 0]; ++G__39959__i;}
  args = new cljs.core.IndexedSeq(G__39959__a,0);
} 
return G__39958__delegate.call(this,args);};
G__39958.cljs$lang$maxFixedArity = 0;
G__39958.cljs$lang$applyTo = (function (arglist__39960){
var args = cljs.core.seq(arglist__39960);
return G__39958__delegate(args);
});
G__39958.cljs$core$IFn$_invoke$arity$variadic = G__39958__delegate;
return G__39958;
})()
;

return null;
});
