goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51509__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51510__i = 0, G__51510__a = new Array(arguments.length -  0);
while (G__51510__i < G__51510__a.length) {G__51510__a[G__51510__i] = arguments[G__51510__i + 0]; ++G__51510__i;}
  args = new cljs.core.IndexedSeq(G__51510__a,0);
} 
return G__51509__delegate.call(this,args);};
G__51509.cljs$lang$maxFixedArity = 0;
G__51509.cljs$lang$applyTo = (function (arglist__51511){
var args = cljs.core.seq(arglist__51511);
return G__51509__delegate(args);
});
G__51509.cljs$core$IFn$_invoke$arity$variadic = G__51509__delegate;
return G__51509;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51512__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51513__i = 0, G__51513__a = new Array(arguments.length -  0);
while (G__51513__i < G__51513__a.length) {G__51513__a[G__51513__i] = arguments[G__51513__i + 0]; ++G__51513__i;}
  args = new cljs.core.IndexedSeq(G__51513__a,0);
} 
return G__51512__delegate.call(this,args);};
G__51512.cljs$lang$maxFixedArity = 0;
G__51512.cljs$lang$applyTo = (function (arglist__51514){
var args = cljs.core.seq(arglist__51514);
return G__51512__delegate(args);
});
G__51512.cljs$core$IFn$_invoke$arity$variadic = G__51512__delegate;
return G__51512;
})()
;

return null;
});
