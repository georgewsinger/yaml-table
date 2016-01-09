goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65963__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65964__i = 0, G__65964__a = new Array(arguments.length -  0);
while (G__65964__i < G__65964__a.length) {G__65964__a[G__65964__i] = arguments[G__65964__i + 0]; ++G__65964__i;}
  args = new cljs.core.IndexedSeq(G__65964__a,0);
} 
return G__65963__delegate.call(this,args);};
G__65963.cljs$lang$maxFixedArity = 0;
G__65963.cljs$lang$applyTo = (function (arglist__65965){
var args = cljs.core.seq(arglist__65965);
return G__65963__delegate(args);
});
G__65963.cljs$core$IFn$_invoke$arity$variadic = G__65963__delegate;
return G__65963;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65966__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65967__i = 0, G__65967__a = new Array(arguments.length -  0);
while (G__65967__i < G__65967__a.length) {G__65967__a[G__65967__i] = arguments[G__65967__i + 0]; ++G__65967__i;}
  args = new cljs.core.IndexedSeq(G__65967__a,0);
} 
return G__65966__delegate.call(this,args);};
G__65966.cljs$lang$maxFixedArity = 0;
G__65966.cljs$lang$applyTo = (function (arglist__65968){
var args = cljs.core.seq(arglist__65968);
return G__65966__delegate(args);
});
G__65966.cljs$core$IFn$_invoke$arity$variadic = G__65966__delegate;
return G__65966;
})()
;

return null;
});
