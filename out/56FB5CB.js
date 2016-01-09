goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44613__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44614__i = 0, G__44614__a = new Array(arguments.length -  0);
while (G__44614__i < G__44614__a.length) {G__44614__a[G__44614__i] = arguments[G__44614__i + 0]; ++G__44614__i;}
  args = new cljs.core.IndexedSeq(G__44614__a,0);
} 
return G__44613__delegate.call(this,args);};
G__44613.cljs$lang$maxFixedArity = 0;
G__44613.cljs$lang$applyTo = (function (arglist__44615){
var args = cljs.core.seq(arglist__44615);
return G__44613__delegate(args);
});
G__44613.cljs$core$IFn$_invoke$arity$variadic = G__44613__delegate;
return G__44613;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44616__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44617__i = 0, G__44617__a = new Array(arguments.length -  0);
while (G__44617__i < G__44617__a.length) {G__44617__a[G__44617__i] = arguments[G__44617__i + 0]; ++G__44617__i;}
  args = new cljs.core.IndexedSeq(G__44617__a,0);
} 
return G__44616__delegate.call(this,args);};
G__44616.cljs$lang$maxFixedArity = 0;
G__44616.cljs$lang$applyTo = (function (arglist__44618){
var args = cljs.core.seq(arglist__44618);
return G__44616__delegate(args);
});
G__44616.cljs$core$IFn$_invoke$arity$variadic = G__44616__delegate;
return G__44616;
})()
;

return null;
});
