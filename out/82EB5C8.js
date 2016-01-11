goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__337331__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__337331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__337332__i = 0, G__337332__a = new Array(arguments.length -  0);
while (G__337332__i < G__337332__a.length) {G__337332__a[G__337332__i] = arguments[G__337332__i + 0]; ++G__337332__i;}
  args = new cljs.core.IndexedSeq(G__337332__a,0);
} 
return G__337331__delegate.call(this,args);};
G__337331.cljs$lang$maxFixedArity = 0;
G__337331.cljs$lang$applyTo = (function (arglist__337333){
var args = cljs.core.seq(arglist__337333);
return G__337331__delegate(args);
});
G__337331.cljs$core$IFn$_invoke$arity$variadic = G__337331__delegate;
return G__337331;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__337334__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__337334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__337335__i = 0, G__337335__a = new Array(arguments.length -  0);
while (G__337335__i < G__337335__a.length) {G__337335__a[G__337335__i] = arguments[G__337335__i + 0]; ++G__337335__i;}
  args = new cljs.core.IndexedSeq(G__337335__a,0);
} 
return G__337334__delegate.call(this,args);};
G__337334.cljs$lang$maxFixedArity = 0;
G__337334.cljs$lang$applyTo = (function (arglist__337336){
var args = cljs.core.seq(arglist__337336);
return G__337334__delegate(args);
});
G__337334.cljs$core$IFn$_invoke$arity$variadic = G__337334__delegate;
return G__337334;
})()
;

return null;
});
