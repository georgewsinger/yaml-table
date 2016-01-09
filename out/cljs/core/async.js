// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args8780 = [];
var len__5729__auto___8786 = arguments.length;
var i__5730__auto___8787 = (0);
while(true){
if((i__5730__auto___8787 < len__5729__auto___8786)){
args8780.push((arguments[i__5730__auto___8787]));

var G__8788 = (i__5730__auto___8787 + (1));
i__5730__auto___8787 = G__8788;
continue;
} else {
}
break;
}

var G__8782 = args8780.length;
switch (G__8782) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8780.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async8783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8783 = (function (f,blockable,meta8784){
this.f = f;
this.blockable = blockable;
this.meta8784 = meta8784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8785,meta8784__$1){
var self__ = this;
var _8785__$1 = this;
return (new cljs.core.async.t_cljs$core$async8783(self__.f,self__.blockable,meta8784__$1));
});

cljs.core.async.t_cljs$core$async8783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8785){
var self__ = this;
var _8785__$1 = this;
return self__.meta8784;
});

cljs.core.async.t_cljs$core$async8783.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8783.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta8784], null);
});

cljs.core.async.t_cljs$core$async8783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8783";

cljs.core.async.t_cljs$core$async8783.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async8783");
});

cljs.core.async.__GT_t_cljs$core$async8783 = (function cljs$core$async$__GT_t_cljs$core$async8783(f__$1,blockable__$1,meta8784){
return (new cljs.core.async.t_cljs$core$async8783(f__$1,blockable__$1,meta8784));
});

}

return (new cljs.core.async.t_cljs$core$async8783(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args8792 = [];
var len__5729__auto___8795 = arguments.length;
var i__5730__auto___8796 = (0);
while(true){
if((i__5730__auto___8796 < len__5729__auto___8795)){
args8792.push((arguments[i__5730__auto___8796]));

var G__8797 = (i__5730__auto___8796 + (1));
i__5730__auto___8796 = G__8797;
continue;
} else {
}
break;
}

var G__8794 = args8792.length;
switch (G__8794) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8792.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args8799 = [];
var len__5729__auto___8802 = arguments.length;
var i__5730__auto___8803 = (0);
while(true){
if((i__5730__auto___8803 < len__5729__auto___8802)){
args8799.push((arguments[i__5730__auto___8803]));

var G__8804 = (i__5730__auto___8803 + (1));
i__5730__auto___8803 = G__8804;
continue;
} else {
}
break;
}

var G__8801 = args8799.length;
switch (G__8801) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8799.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args8806 = [];
var len__5729__auto___8809 = arguments.length;
var i__5730__auto___8810 = (0);
while(true){
if((i__5730__auto___8810 < len__5729__auto___8809)){
args8806.push((arguments[i__5730__auto___8810]));

var G__8811 = (i__5730__auto___8810 + (1));
i__5730__auto___8810 = G__8811;
continue;
} else {
}
break;
}

var G__8808 = args8806.length;
switch (G__8808) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8806.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_8813 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_8813) : fn1.call(null,val_8813));
} else {
cljs.core.async.impl.dispatch.run(((function (val_8813,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_8813) : fn1.call(null,val_8813));
});})(val_8813,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args8814 = [];
var len__5729__auto___8817 = arguments.length;
var i__5730__auto___8818 = (0);
while(true){
if((i__5730__auto___8818 < len__5729__auto___8817)){
args8814.push((arguments[i__5730__auto___8818]));

var G__8819 = (i__5730__auto___8818 + (1));
i__5730__auto___8818 = G__8819;
continue;
} else {
}
break;
}

var G__8816 = args8814.length;
switch (G__8816) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8814.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5574__auto___8821 = n;
var x_8822 = (0);
while(true){
if((x_8822 < n__5574__auto___8821)){
(a[x_8822] = (0));

var G__8823 = (x_8822 + (1));
x_8822 = G__8823;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__8824 = (i + (1));
i = G__8824;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async8828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8828 = (function (alt_flag,flag,meta8829){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta8829 = meta8829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8830,meta8829__$1){
var self__ = this;
var _8830__$1 = this;
return (new cljs.core.async.t_cljs$core$async8828(self__.alt_flag,self__.flag,meta8829__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8830){
var self__ = this;
var _8830__$1 = this;
return self__.meta8829;
});})(flag))
;

cljs.core.async.t_cljs$core$async8828.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async8828.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8828.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta8829], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8828";

cljs.core.async.t_cljs$core$async8828.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async8828");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async8828 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8828(alt_flag__$1,flag__$1,meta8829){
return (new cljs.core.async.t_cljs$core$async8828(alt_flag__$1,flag__$1,meta8829));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8828(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async8834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8834 = (function (alt_handler,flag,cb,meta8835){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta8835 = meta8835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8836,meta8835__$1){
var self__ = this;
var _8836__$1 = this;
return (new cljs.core.async.t_cljs$core$async8834(self__.alt_handler,self__.flag,self__.cb,meta8835__$1));
});

cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8836){
var self__ = this;
var _8836__$1 = this;
return self__.meta8835;
});

cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta8835], null);
});

cljs.core.async.t_cljs$core$async8834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8834";

cljs.core.async.t_cljs$core$async8834.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async8834");
});

cljs.core.async.__GT_t_cljs$core$async8834 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8834(alt_handler__$1,flag__$1,cb__$1,meta8835){
return (new cljs.core.async.t_cljs$core$async8834(alt_handler__$1,flag__$1,cb__$1,meta8835));
});

}

return (new cljs.core.async.t_cljs$core$async8834(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8837_SHARP_){
var G__8841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8837_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__8841) : fret.call(null,G__8841));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8838_SHARP_){
var G__8842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8838_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__8842) : fret.call(null,G__8842));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__4671__auto__ = wport;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8843 = (i + (1));
i = G__8843;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4671__auto__ = ret;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__4659__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___8849 = arguments.length;
var i__5730__auto___8850 = (0);
while(true){
if((i__5730__auto___8850 < len__5729__auto___8849)){
args__5736__auto__.push((arguments[i__5730__auto___8850]));

var G__8851 = (i__5730__auto___8850 + (1));
i__5730__auto___8850 = G__8851;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8846){
var map__8847 = p__8846;
var map__8847__$1 = ((((!((map__8847 == null)))?((((map__8847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8847):map__8847);
var opts = map__8847__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8844){
var G__8845 = cljs.core.first(seq8844);
var seq8844__$1 = cljs.core.next(seq8844);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8845,seq8844__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args8852 = [];
var len__5729__auto___8902 = arguments.length;
var i__5730__auto___8903 = (0);
while(true){
if((i__5730__auto___8903 < len__5729__auto___8902)){
args8852.push((arguments[i__5730__auto___8903]));

var G__8904 = (i__5730__auto___8903 + (1));
i__5730__auto___8903 = G__8904;
continue;
} else {
}
break;
}

var G__8854 = args8852.length;
switch (G__8854) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8852.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8735__auto___8906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___8906){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___8906){
return (function (state_8878){
var state_val_8879 = (state_8878[(1)]);
if((state_val_8879 === (7))){
var inst_8874 = (state_8878[(2)]);
var state_8878__$1 = state_8878;
var statearr_8880_8907 = state_8878__$1;
(statearr_8880_8907[(2)] = inst_8874);

(statearr_8880_8907[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8879 === (1))){
var state_8878__$1 = state_8878;
var statearr_8881_8908 = state_8878__$1;
(statearr_8881_8908[(2)] = null);

(statearr_8881_8908[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8879 === (4))){
var inst_8857 = (state_8878[(7)]);
var inst_8857__$1 = (state_8878[(2)]);
var inst_8858 = (inst_8857__$1 == null);
var state_8878__$1 = (function (){var statearr_8882 = state_8878;
(statearr_8882[(7)] = inst_8857__$1);

return statearr_8882;
})();
if(cljs.core.truth_(inst_8858)){
var statearr_8883_8909 = state_8878__$1;
(statearr_8883_8909[(1)] = (5));

} else {
var statearr_8884_8910 = state_8878__$1;
(statearr_8884_8910[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8879 === (13))){
var state_8878__$1 = state_8878;
var statearr_8885_8911 = state_8878__$1;
(statearr_8885_8911[(2)] = null);

(statearr_8885_8911[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8879 === (6))){
var inst_8857 = (state_8878[(7)]);
var state_8878__$1 = state_8878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8878__$1,(11),to,inst_8857);
} else {
if((state_val_8879 === (3))){
var inst_8876 = (state_8878[(2)]);
var state_8878__$1 = state_8878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8878__$1,inst_8876);
} else {
if((state_val_8879 === (12))){
var state_8878__$1 = state_8878;
var statearr_8886_8912 = state_8878__$1;
(statearr_8886_8912[(2)] = null);

(statearr_8886_8912[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8879 === (2))){
var state_8878__$1 = state_8878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8878__$1,(4),from);
} else {
if((state_val_8879 === (11))){
var inst_8867 = (state_8878[(2)]);
var state_8878__$1 = state_8878;
if(cljs.core.truth_(inst_8867)){
var statearr_8887_8913 = state_8878__$1;
(statearr_8887_8913[(1)] = (12));

} else {
var statearr_8888_8914 = state_8878__$1;
(statearr_8888_8914[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8879 === (9))){
var state_8878__$1 = state_8878;
var statearr_8889_8915 = state_8878__$1;
(statearr_8889_8915[(2)] = null);

(statearr_8889_8915[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8879 === (5))){
var state_8878__$1 = state_8878;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8890_8916 = state_8878__$1;
(statearr_8890_8916[(1)] = (8));

} else {
var statearr_8891_8917 = state_8878__$1;
(statearr_8891_8917[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8879 === (14))){
var inst_8872 = (state_8878[(2)]);
var state_8878__$1 = state_8878;
var statearr_8892_8918 = state_8878__$1;
(statearr_8892_8918[(2)] = inst_8872);

(statearr_8892_8918[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8879 === (10))){
var inst_8864 = (state_8878[(2)]);
var state_8878__$1 = state_8878;
var statearr_8893_8919 = state_8878__$1;
(statearr_8893_8919[(2)] = inst_8864);

(statearr_8893_8919[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8879 === (8))){
var inst_8861 = cljs.core.async.close_BANG_(to);
var state_8878__$1 = state_8878;
var statearr_8894_8920 = state_8878__$1;
(statearr_8894_8920[(2)] = inst_8861);

(statearr_8894_8920[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___8906))
;
return ((function (switch__8621__auto__,c__8735__auto___8906){
return (function() {
var cljs$core$async$state_machine__8622__auto__ = null;
var cljs$core$async$state_machine__8622__auto____0 = (function (){
var statearr_8898 = [null,null,null,null,null,null,null,null];
(statearr_8898[(0)] = cljs$core$async$state_machine__8622__auto__);

(statearr_8898[(1)] = (1));

return statearr_8898;
});
var cljs$core$async$state_machine__8622__auto____1 = (function (state_8878){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_8878);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e8899){if((e8899 instanceof Object)){
var ex__8625__auto__ = e8899;
var statearr_8900_8921 = state_8878;
(statearr_8900_8921[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8878);

return cljs.core.cst$kw$recur;
} else {
throw e8899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__8922 = state_8878;
state_8878 = G__8922;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$state_machine__8622__auto__ = function(state_8878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8622__auto____1.call(this,state_8878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8622__auto____0;
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8622__auto____1;
return cljs$core$async$state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___8906))
})();
var state__8737__auto__ = (function (){var statearr_8901 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_8901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___8906);

return statearr_8901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___8906))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__9106){
var vec__9107 = p__9106;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9107,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9107,(1),null);
var job = vec__9107;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__8735__auto___9289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___9289,res,vec__9107,v,p,job,jobs,results){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___9289,res,vec__9107,v,p,job,jobs,results){
return (function (state_9112){
var state_val_9113 = (state_9112[(1)]);
if((state_val_9113 === (1))){
var state_9112__$1 = state_9112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9112__$1,(2),res,v);
} else {
if((state_val_9113 === (2))){
var inst_9109 = (state_9112[(2)]);
var inst_9110 = cljs.core.async.close_BANG_(res);
var state_9112__$1 = (function (){var statearr_9114 = state_9112;
(statearr_9114[(7)] = inst_9109);

return statearr_9114;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9112__$1,inst_9110);
} else {
return null;
}
}
});})(c__8735__auto___9289,res,vec__9107,v,p,job,jobs,results))
;
return ((function (switch__8621__auto__,c__8735__auto___9289,res,vec__9107,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0 = (function (){
var statearr_9118 = [null,null,null,null,null,null,null,null];
(statearr_9118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__);

(statearr_9118[(1)] = (1));

return statearr_9118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1 = (function (state_9112){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_9112);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e9119){if((e9119 instanceof Object)){
var ex__8625__auto__ = e9119;
var statearr_9120_9290 = state_9112;
(statearr_9120_9290[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9112);

return cljs.core.cst$kw$recur;
} else {
throw e9119;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__9291 = state_9112;
state_9112 = G__9291;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__ = function(state_9112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1.call(this,state_9112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___9289,res,vec__9107,v,p,job,jobs,results))
})();
var state__8737__auto__ = (function (){var statearr_9121 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_9121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___9289);

return statearr_9121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___9289,res,vec__9107,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9122){
var vec__9123 = p__9122;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9123,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9123,(1),null);
var job = vec__9123;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5574__auto___9292 = n;
var __9293 = (0);
while(true){
if((__9293 < n__5574__auto___9292)){
var G__9124_9294 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9124_9294) {
case "compute":
var c__8735__auto___9296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__9293,c__8735__auto___9296,G__9124_9294,n__5574__auto___9292,jobs,results,process,async){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (__9293,c__8735__auto___9296,G__9124_9294,n__5574__auto___9292,jobs,results,process,async){
return (function (state_9137){
var state_val_9138 = (state_9137[(1)]);
if((state_val_9138 === (1))){
var state_9137__$1 = state_9137;
var statearr_9139_9297 = state_9137__$1;
(statearr_9139_9297[(2)] = null);

(statearr_9139_9297[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9138 === (2))){
var state_9137__$1 = state_9137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9137__$1,(4),jobs);
} else {
if((state_val_9138 === (3))){
var inst_9135 = (state_9137[(2)]);
var state_9137__$1 = state_9137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9137__$1,inst_9135);
} else {
if((state_val_9138 === (4))){
var inst_9127 = (state_9137[(2)]);
var inst_9128 = process(inst_9127);
var state_9137__$1 = state_9137;
if(cljs.core.truth_(inst_9128)){
var statearr_9140_9298 = state_9137__$1;
(statearr_9140_9298[(1)] = (5));

} else {
var statearr_9141_9299 = state_9137__$1;
(statearr_9141_9299[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9138 === (5))){
var state_9137__$1 = state_9137;
var statearr_9142_9300 = state_9137__$1;
(statearr_9142_9300[(2)] = null);

(statearr_9142_9300[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9138 === (6))){
var state_9137__$1 = state_9137;
var statearr_9143_9301 = state_9137__$1;
(statearr_9143_9301[(2)] = null);

(statearr_9143_9301[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9138 === (7))){
var inst_9133 = (state_9137[(2)]);
var state_9137__$1 = state_9137;
var statearr_9144_9302 = state_9137__$1;
(statearr_9144_9302[(2)] = inst_9133);

(statearr_9144_9302[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__9293,c__8735__auto___9296,G__9124_9294,n__5574__auto___9292,jobs,results,process,async))
;
return ((function (__9293,switch__8621__auto__,c__8735__auto___9296,G__9124_9294,n__5574__auto___9292,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0 = (function (){
var statearr_9148 = [null,null,null,null,null,null,null];
(statearr_9148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__);

(statearr_9148[(1)] = (1));

return statearr_9148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1 = (function (state_9137){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_9137);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e9149){if((e9149 instanceof Object)){
var ex__8625__auto__ = e9149;
var statearr_9150_9303 = state_9137;
(statearr_9150_9303[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9137);

return cljs.core.cst$kw$recur;
} else {
throw e9149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__9304 = state_9137;
state_9137 = G__9304;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__ = function(state_9137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1.call(this,state_9137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__;
})()
;})(__9293,switch__8621__auto__,c__8735__auto___9296,G__9124_9294,n__5574__auto___9292,jobs,results,process,async))
})();
var state__8737__auto__ = (function (){var statearr_9151 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_9151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___9296);

return statearr_9151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(__9293,c__8735__auto___9296,G__9124_9294,n__5574__auto___9292,jobs,results,process,async))
);


break;
case "async":
var c__8735__auto___9305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__9293,c__8735__auto___9305,G__9124_9294,n__5574__auto___9292,jobs,results,process,async){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (__9293,c__8735__auto___9305,G__9124_9294,n__5574__auto___9292,jobs,results,process,async){
return (function (state_9164){
var state_val_9165 = (state_9164[(1)]);
if((state_val_9165 === (1))){
var state_9164__$1 = state_9164;
var statearr_9166_9306 = state_9164__$1;
(statearr_9166_9306[(2)] = null);

(statearr_9166_9306[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (2))){
var state_9164__$1 = state_9164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9164__$1,(4),jobs);
} else {
if((state_val_9165 === (3))){
var inst_9162 = (state_9164[(2)]);
var state_9164__$1 = state_9164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9164__$1,inst_9162);
} else {
if((state_val_9165 === (4))){
var inst_9154 = (state_9164[(2)]);
var inst_9155 = async(inst_9154);
var state_9164__$1 = state_9164;
if(cljs.core.truth_(inst_9155)){
var statearr_9167_9307 = state_9164__$1;
(statearr_9167_9307[(1)] = (5));

} else {
var statearr_9168_9308 = state_9164__$1;
(statearr_9168_9308[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (5))){
var state_9164__$1 = state_9164;
var statearr_9169_9309 = state_9164__$1;
(statearr_9169_9309[(2)] = null);

(statearr_9169_9309[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (6))){
var state_9164__$1 = state_9164;
var statearr_9170_9310 = state_9164__$1;
(statearr_9170_9310[(2)] = null);

(statearr_9170_9310[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (7))){
var inst_9160 = (state_9164[(2)]);
var state_9164__$1 = state_9164;
var statearr_9171_9311 = state_9164__$1;
(statearr_9171_9311[(2)] = inst_9160);

(statearr_9171_9311[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__9293,c__8735__auto___9305,G__9124_9294,n__5574__auto___9292,jobs,results,process,async))
;
return ((function (__9293,switch__8621__auto__,c__8735__auto___9305,G__9124_9294,n__5574__auto___9292,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0 = (function (){
var statearr_9175 = [null,null,null,null,null,null,null];
(statearr_9175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__);

(statearr_9175[(1)] = (1));

return statearr_9175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1 = (function (state_9164){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_9164);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e9176){if((e9176 instanceof Object)){
var ex__8625__auto__ = e9176;
var statearr_9177_9312 = state_9164;
(statearr_9177_9312[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9164);

return cljs.core.cst$kw$recur;
} else {
throw e9176;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__9313 = state_9164;
state_9164 = G__9313;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__ = function(state_9164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1.call(this,state_9164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__;
})()
;})(__9293,switch__8621__auto__,c__8735__auto___9305,G__9124_9294,n__5574__auto___9292,jobs,results,process,async))
})();
var state__8737__auto__ = (function (){var statearr_9178 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_9178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___9305);

return statearr_9178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(__9293,c__8735__auto___9305,G__9124_9294,n__5574__auto___9292,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9314 = (__9293 + (1));
__9293 = G__9314;
continue;
} else {
}
break;
}

var c__8735__auto___9315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___9315,jobs,results,process,async){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___9315,jobs,results,process,async){
return (function (state_9200){
var state_val_9201 = (state_9200[(1)]);
if((state_val_9201 === (1))){
var state_9200__$1 = state_9200;
var statearr_9202_9316 = state_9200__$1;
(statearr_9202_9316[(2)] = null);

(statearr_9202_9316[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9201 === (2))){
var state_9200__$1 = state_9200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9200__$1,(4),from);
} else {
if((state_val_9201 === (3))){
var inst_9198 = (state_9200[(2)]);
var state_9200__$1 = state_9200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9200__$1,inst_9198);
} else {
if((state_val_9201 === (4))){
var inst_9181 = (state_9200[(7)]);
var inst_9181__$1 = (state_9200[(2)]);
var inst_9182 = (inst_9181__$1 == null);
var state_9200__$1 = (function (){var statearr_9203 = state_9200;
(statearr_9203[(7)] = inst_9181__$1);

return statearr_9203;
})();
if(cljs.core.truth_(inst_9182)){
var statearr_9204_9317 = state_9200__$1;
(statearr_9204_9317[(1)] = (5));

} else {
var statearr_9205_9318 = state_9200__$1;
(statearr_9205_9318[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9201 === (5))){
var inst_9184 = cljs.core.async.close_BANG_(jobs);
var state_9200__$1 = state_9200;
var statearr_9206_9319 = state_9200__$1;
(statearr_9206_9319[(2)] = inst_9184);

(statearr_9206_9319[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9201 === (6))){
var inst_9181 = (state_9200[(7)]);
var inst_9186 = (state_9200[(8)]);
var inst_9186__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_9187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9188 = [inst_9181,inst_9186__$1];
var inst_9189 = (new cljs.core.PersistentVector(null,2,(5),inst_9187,inst_9188,null));
var state_9200__$1 = (function (){var statearr_9207 = state_9200;
(statearr_9207[(8)] = inst_9186__$1);

return statearr_9207;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9200__$1,(8),jobs,inst_9189);
} else {
if((state_val_9201 === (7))){
var inst_9196 = (state_9200[(2)]);
var state_9200__$1 = state_9200;
var statearr_9208_9320 = state_9200__$1;
(statearr_9208_9320[(2)] = inst_9196);

(statearr_9208_9320[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9201 === (8))){
var inst_9186 = (state_9200[(8)]);
var inst_9191 = (state_9200[(2)]);
var state_9200__$1 = (function (){var statearr_9209 = state_9200;
(statearr_9209[(9)] = inst_9191);

return statearr_9209;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9200__$1,(9),results,inst_9186);
} else {
if((state_val_9201 === (9))){
var inst_9193 = (state_9200[(2)]);
var state_9200__$1 = (function (){var statearr_9210 = state_9200;
(statearr_9210[(10)] = inst_9193);

return statearr_9210;
})();
var statearr_9211_9321 = state_9200__$1;
(statearr_9211_9321[(2)] = null);

(statearr_9211_9321[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___9315,jobs,results,process,async))
;
return ((function (switch__8621__auto__,c__8735__auto___9315,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0 = (function (){
var statearr_9215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__);

(statearr_9215[(1)] = (1));

return statearr_9215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1 = (function (state_9200){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_9200);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e9216){if((e9216 instanceof Object)){
var ex__8625__auto__ = e9216;
var statearr_9217_9322 = state_9200;
(statearr_9217_9322[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9200);

return cljs.core.cst$kw$recur;
} else {
throw e9216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__9323 = state_9200;
state_9200 = G__9323;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__ = function(state_9200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1.call(this,state_9200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___9315,jobs,results,process,async))
})();
var state__8737__auto__ = (function (){var statearr_9218 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_9218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___9315);

return statearr_9218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___9315,jobs,results,process,async))
);


var c__8735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto__,jobs,results,process,async){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto__,jobs,results,process,async){
return (function (state_9256){
var state_val_9257 = (state_9256[(1)]);
if((state_val_9257 === (7))){
var inst_9252 = (state_9256[(2)]);
var state_9256__$1 = state_9256;
var statearr_9258_9324 = state_9256__$1;
(statearr_9258_9324[(2)] = inst_9252);

(statearr_9258_9324[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (20))){
var state_9256__$1 = state_9256;
var statearr_9259_9325 = state_9256__$1;
(statearr_9259_9325[(2)] = null);

(statearr_9259_9325[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (1))){
var state_9256__$1 = state_9256;
var statearr_9260_9326 = state_9256__$1;
(statearr_9260_9326[(2)] = null);

(statearr_9260_9326[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (4))){
var inst_9221 = (state_9256[(7)]);
var inst_9221__$1 = (state_9256[(2)]);
var inst_9222 = (inst_9221__$1 == null);
var state_9256__$1 = (function (){var statearr_9261 = state_9256;
(statearr_9261[(7)] = inst_9221__$1);

return statearr_9261;
})();
if(cljs.core.truth_(inst_9222)){
var statearr_9262_9327 = state_9256__$1;
(statearr_9262_9327[(1)] = (5));

} else {
var statearr_9263_9328 = state_9256__$1;
(statearr_9263_9328[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (15))){
var inst_9234 = (state_9256[(8)]);
var state_9256__$1 = state_9256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9256__$1,(18),to,inst_9234);
} else {
if((state_val_9257 === (21))){
var inst_9247 = (state_9256[(2)]);
var state_9256__$1 = state_9256;
var statearr_9264_9329 = state_9256__$1;
(statearr_9264_9329[(2)] = inst_9247);

(statearr_9264_9329[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (13))){
var inst_9249 = (state_9256[(2)]);
var state_9256__$1 = (function (){var statearr_9265 = state_9256;
(statearr_9265[(9)] = inst_9249);

return statearr_9265;
})();
var statearr_9266_9330 = state_9256__$1;
(statearr_9266_9330[(2)] = null);

(statearr_9266_9330[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (6))){
var inst_9221 = (state_9256[(7)]);
var state_9256__$1 = state_9256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9256__$1,(11),inst_9221);
} else {
if((state_val_9257 === (17))){
var inst_9242 = (state_9256[(2)]);
var state_9256__$1 = state_9256;
if(cljs.core.truth_(inst_9242)){
var statearr_9267_9331 = state_9256__$1;
(statearr_9267_9331[(1)] = (19));

} else {
var statearr_9268_9332 = state_9256__$1;
(statearr_9268_9332[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (3))){
var inst_9254 = (state_9256[(2)]);
var state_9256__$1 = state_9256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9256__$1,inst_9254);
} else {
if((state_val_9257 === (12))){
var inst_9231 = (state_9256[(10)]);
var state_9256__$1 = state_9256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9256__$1,(14),inst_9231);
} else {
if((state_val_9257 === (2))){
var state_9256__$1 = state_9256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9256__$1,(4),results);
} else {
if((state_val_9257 === (19))){
var state_9256__$1 = state_9256;
var statearr_9269_9333 = state_9256__$1;
(statearr_9269_9333[(2)] = null);

(statearr_9269_9333[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (11))){
var inst_9231 = (state_9256[(2)]);
var state_9256__$1 = (function (){var statearr_9270 = state_9256;
(statearr_9270[(10)] = inst_9231);

return statearr_9270;
})();
var statearr_9271_9334 = state_9256__$1;
(statearr_9271_9334[(2)] = null);

(statearr_9271_9334[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (9))){
var state_9256__$1 = state_9256;
var statearr_9272_9335 = state_9256__$1;
(statearr_9272_9335[(2)] = null);

(statearr_9272_9335[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (5))){
var state_9256__$1 = state_9256;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9273_9336 = state_9256__$1;
(statearr_9273_9336[(1)] = (8));

} else {
var statearr_9274_9337 = state_9256__$1;
(statearr_9274_9337[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (14))){
var inst_9236 = (state_9256[(11)]);
var inst_9234 = (state_9256[(8)]);
var inst_9234__$1 = (state_9256[(2)]);
var inst_9235 = (inst_9234__$1 == null);
var inst_9236__$1 = cljs.core.not(inst_9235);
var state_9256__$1 = (function (){var statearr_9275 = state_9256;
(statearr_9275[(11)] = inst_9236__$1);

(statearr_9275[(8)] = inst_9234__$1);

return statearr_9275;
})();
if(inst_9236__$1){
var statearr_9276_9338 = state_9256__$1;
(statearr_9276_9338[(1)] = (15));

} else {
var statearr_9277_9339 = state_9256__$1;
(statearr_9277_9339[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (16))){
var inst_9236 = (state_9256[(11)]);
var state_9256__$1 = state_9256;
var statearr_9278_9340 = state_9256__$1;
(statearr_9278_9340[(2)] = inst_9236);

(statearr_9278_9340[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (10))){
var inst_9228 = (state_9256[(2)]);
var state_9256__$1 = state_9256;
var statearr_9279_9341 = state_9256__$1;
(statearr_9279_9341[(2)] = inst_9228);

(statearr_9279_9341[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (18))){
var inst_9239 = (state_9256[(2)]);
var state_9256__$1 = state_9256;
var statearr_9280_9342 = state_9256__$1;
(statearr_9280_9342[(2)] = inst_9239);

(statearr_9280_9342[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9257 === (8))){
var inst_9225 = cljs.core.async.close_BANG_(to);
var state_9256__$1 = state_9256;
var statearr_9281_9343 = state_9256__$1;
(statearr_9281_9343[(2)] = inst_9225);

(statearr_9281_9343[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto__,jobs,results,process,async))
;
return ((function (switch__8621__auto__,c__8735__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0 = (function (){
var statearr_9285 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__);

(statearr_9285[(1)] = (1));

return statearr_9285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1 = (function (state_9256){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_9256);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e9286){if((e9286 instanceof Object)){
var ex__8625__auto__ = e9286;
var statearr_9287_9344 = state_9256;
(statearr_9287_9344[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9256);

return cljs.core.cst$kw$recur;
} else {
throw e9286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__9345 = state_9256;
state_9256 = G__9345;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__ = function(state_9256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1.call(this,state_9256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto__,jobs,results,process,async))
})();
var state__8737__auto__ = (function (){var statearr_9288 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_9288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto__);

return statearr_9288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto__,jobs,results,process,async))
);

return c__8735__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args9346 = [];
var len__5729__auto___9349 = arguments.length;
var i__5730__auto___9350 = (0);
while(true){
if((i__5730__auto___9350 < len__5729__auto___9349)){
args9346.push((arguments[i__5730__auto___9350]));

var G__9351 = (i__5730__auto___9350 + (1));
i__5730__auto___9350 = G__9351;
continue;
} else {
}
break;
}

var G__9348 = args9346.length;
switch (G__9348) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9346.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args9353 = [];
var len__5729__auto___9356 = arguments.length;
var i__5730__auto___9357 = (0);
while(true){
if((i__5730__auto___9357 < len__5729__auto___9356)){
args9353.push((arguments[i__5730__auto___9357]));

var G__9358 = (i__5730__auto___9357 + (1));
i__5730__auto___9357 = G__9358;
continue;
} else {
}
break;
}

var G__9355 = args9353.length;
switch (G__9355) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9353.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args9360 = [];
var len__5729__auto___9413 = arguments.length;
var i__5730__auto___9414 = (0);
while(true){
if((i__5730__auto___9414 < len__5729__auto___9413)){
args9360.push((arguments[i__5730__auto___9414]));

var G__9415 = (i__5730__auto___9414 + (1));
i__5730__auto___9414 = G__9415;
continue;
} else {
}
break;
}

var G__9362 = args9360.length;
switch (G__9362) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9360.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__8735__auto___9417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___9417,tc,fc){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___9417,tc,fc){
return (function (state_9388){
var state_val_9389 = (state_9388[(1)]);
if((state_val_9389 === (7))){
var inst_9384 = (state_9388[(2)]);
var state_9388__$1 = state_9388;
var statearr_9390_9418 = state_9388__$1;
(statearr_9390_9418[(2)] = inst_9384);

(statearr_9390_9418[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9389 === (1))){
var state_9388__$1 = state_9388;
var statearr_9391_9419 = state_9388__$1;
(statearr_9391_9419[(2)] = null);

(statearr_9391_9419[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9389 === (4))){
var inst_9365 = (state_9388[(7)]);
var inst_9365__$1 = (state_9388[(2)]);
var inst_9366 = (inst_9365__$1 == null);
var state_9388__$1 = (function (){var statearr_9392 = state_9388;
(statearr_9392[(7)] = inst_9365__$1);

return statearr_9392;
})();
if(cljs.core.truth_(inst_9366)){
var statearr_9393_9420 = state_9388__$1;
(statearr_9393_9420[(1)] = (5));

} else {
var statearr_9394_9421 = state_9388__$1;
(statearr_9394_9421[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9389 === (13))){
var state_9388__$1 = state_9388;
var statearr_9395_9422 = state_9388__$1;
(statearr_9395_9422[(2)] = null);

(statearr_9395_9422[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9389 === (6))){
var inst_9365 = (state_9388[(7)]);
var inst_9371 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_9365) : p.call(null,inst_9365));
var state_9388__$1 = state_9388;
if(cljs.core.truth_(inst_9371)){
var statearr_9396_9423 = state_9388__$1;
(statearr_9396_9423[(1)] = (9));

} else {
var statearr_9397_9424 = state_9388__$1;
(statearr_9397_9424[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9389 === (3))){
var inst_9386 = (state_9388[(2)]);
var state_9388__$1 = state_9388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9388__$1,inst_9386);
} else {
if((state_val_9389 === (12))){
var state_9388__$1 = state_9388;
var statearr_9398_9425 = state_9388__$1;
(statearr_9398_9425[(2)] = null);

(statearr_9398_9425[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9389 === (2))){
var state_9388__$1 = state_9388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9388__$1,(4),ch);
} else {
if((state_val_9389 === (11))){
var inst_9365 = (state_9388[(7)]);
var inst_9375 = (state_9388[(2)]);
var state_9388__$1 = state_9388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9388__$1,(8),inst_9375,inst_9365);
} else {
if((state_val_9389 === (9))){
var state_9388__$1 = state_9388;
var statearr_9399_9426 = state_9388__$1;
(statearr_9399_9426[(2)] = tc);

(statearr_9399_9426[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9389 === (5))){
var inst_9368 = cljs.core.async.close_BANG_(tc);
var inst_9369 = cljs.core.async.close_BANG_(fc);
var state_9388__$1 = (function (){var statearr_9400 = state_9388;
(statearr_9400[(8)] = inst_9368);

return statearr_9400;
})();
var statearr_9401_9427 = state_9388__$1;
(statearr_9401_9427[(2)] = inst_9369);

(statearr_9401_9427[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9389 === (14))){
var inst_9382 = (state_9388[(2)]);
var state_9388__$1 = state_9388;
var statearr_9402_9428 = state_9388__$1;
(statearr_9402_9428[(2)] = inst_9382);

(statearr_9402_9428[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9389 === (10))){
var state_9388__$1 = state_9388;
var statearr_9403_9429 = state_9388__$1;
(statearr_9403_9429[(2)] = fc);

(statearr_9403_9429[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9389 === (8))){
var inst_9377 = (state_9388[(2)]);
var state_9388__$1 = state_9388;
if(cljs.core.truth_(inst_9377)){
var statearr_9404_9430 = state_9388__$1;
(statearr_9404_9430[(1)] = (12));

} else {
var statearr_9405_9431 = state_9388__$1;
(statearr_9405_9431[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___9417,tc,fc))
;
return ((function (switch__8621__auto__,c__8735__auto___9417,tc,fc){
return (function() {
var cljs$core$async$state_machine__8622__auto__ = null;
var cljs$core$async$state_machine__8622__auto____0 = (function (){
var statearr_9409 = [null,null,null,null,null,null,null,null,null];
(statearr_9409[(0)] = cljs$core$async$state_machine__8622__auto__);

(statearr_9409[(1)] = (1));

return statearr_9409;
});
var cljs$core$async$state_machine__8622__auto____1 = (function (state_9388){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_9388);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e9410){if((e9410 instanceof Object)){
var ex__8625__auto__ = e9410;
var statearr_9411_9432 = state_9388;
(statearr_9411_9432[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9388);

return cljs.core.cst$kw$recur;
} else {
throw e9410;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__9433 = state_9388;
state_9388 = G__9433;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$state_machine__8622__auto__ = function(state_9388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8622__auto____1.call(this,state_9388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8622__auto____0;
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8622__auto____1;
return cljs$core$async$state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___9417,tc,fc))
})();
var state__8737__auto__ = (function (){var statearr_9412 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_9412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___9417);

return statearr_9412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___9417,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto__){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto__){
return (function (state_9497){
var state_val_9498 = (state_9497[(1)]);
if((state_val_9498 === (7))){
var inst_9493 = (state_9497[(2)]);
var state_9497__$1 = state_9497;
var statearr_9499_9520 = state_9497__$1;
(statearr_9499_9520[(2)] = inst_9493);

(statearr_9499_9520[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9498 === (1))){
var inst_9477 = init;
var state_9497__$1 = (function (){var statearr_9500 = state_9497;
(statearr_9500[(7)] = inst_9477);

return statearr_9500;
})();
var statearr_9501_9521 = state_9497__$1;
(statearr_9501_9521[(2)] = null);

(statearr_9501_9521[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9498 === (4))){
var inst_9480 = (state_9497[(8)]);
var inst_9480__$1 = (state_9497[(2)]);
var inst_9481 = (inst_9480__$1 == null);
var state_9497__$1 = (function (){var statearr_9502 = state_9497;
(statearr_9502[(8)] = inst_9480__$1);

return statearr_9502;
})();
if(cljs.core.truth_(inst_9481)){
var statearr_9503_9522 = state_9497__$1;
(statearr_9503_9522[(1)] = (5));

} else {
var statearr_9504_9523 = state_9497__$1;
(statearr_9504_9523[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9498 === (6))){
var inst_9480 = (state_9497[(8)]);
var inst_9484 = (state_9497[(9)]);
var inst_9477 = (state_9497[(7)]);
var inst_9484__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_9477,inst_9480) : f.call(null,inst_9477,inst_9480));
var inst_9485 = cljs.core.reduced_QMARK_(inst_9484__$1);
var state_9497__$1 = (function (){var statearr_9505 = state_9497;
(statearr_9505[(9)] = inst_9484__$1);

return statearr_9505;
})();
if(inst_9485){
var statearr_9506_9524 = state_9497__$1;
(statearr_9506_9524[(1)] = (8));

} else {
var statearr_9507_9525 = state_9497__$1;
(statearr_9507_9525[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9498 === (3))){
var inst_9495 = (state_9497[(2)]);
var state_9497__$1 = state_9497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9497__$1,inst_9495);
} else {
if((state_val_9498 === (2))){
var state_9497__$1 = state_9497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9497__$1,(4),ch);
} else {
if((state_val_9498 === (9))){
var inst_9484 = (state_9497[(9)]);
var inst_9477 = inst_9484;
var state_9497__$1 = (function (){var statearr_9508 = state_9497;
(statearr_9508[(7)] = inst_9477);

return statearr_9508;
})();
var statearr_9509_9526 = state_9497__$1;
(statearr_9509_9526[(2)] = null);

(statearr_9509_9526[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9498 === (5))){
var inst_9477 = (state_9497[(7)]);
var state_9497__$1 = state_9497;
var statearr_9510_9527 = state_9497__$1;
(statearr_9510_9527[(2)] = inst_9477);

(statearr_9510_9527[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9498 === (10))){
var inst_9491 = (state_9497[(2)]);
var state_9497__$1 = state_9497;
var statearr_9511_9528 = state_9497__$1;
(statearr_9511_9528[(2)] = inst_9491);

(statearr_9511_9528[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9498 === (8))){
var inst_9484 = (state_9497[(9)]);
var inst_9487 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_9484) : cljs.core.deref.call(null,inst_9484));
var state_9497__$1 = state_9497;
var statearr_9512_9529 = state_9497__$1;
(statearr_9512_9529[(2)] = inst_9487);

(statearr_9512_9529[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto__))
;
return ((function (switch__8621__auto__,c__8735__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8622__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8622__auto____0 = (function (){
var statearr_9516 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9516[(0)] = cljs$core$async$reduce_$_state_machine__8622__auto__);

(statearr_9516[(1)] = (1));

return statearr_9516;
});
var cljs$core$async$reduce_$_state_machine__8622__auto____1 = (function (state_9497){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_9497);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e9517){if((e9517 instanceof Object)){
var ex__8625__auto__ = e9517;
var statearr_9518_9530 = state_9497;
(statearr_9518_9530[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9497);

return cljs.core.cst$kw$recur;
} else {
throw e9517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__9531 = state_9497;
state_9497 = G__9531;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8622__auto__ = function(state_9497){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8622__auto____1.call(this,state_9497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8622__auto____0;
cljs$core$async$reduce_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8622__auto____1;
return cljs$core$async$reduce_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto__))
})();
var state__8737__auto__ = (function (){var statearr_9519 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_9519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto__);

return statearr_9519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto__))
);

return c__8735__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args9532 = [];
var len__5729__auto___9584 = arguments.length;
var i__5730__auto___9585 = (0);
while(true){
if((i__5730__auto___9585 < len__5729__auto___9584)){
args9532.push((arguments[i__5730__auto___9585]));

var G__9586 = (i__5730__auto___9585 + (1));
i__5730__auto___9585 = G__9586;
continue;
} else {
}
break;
}

var G__9534 = args9532.length;
switch (G__9534) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9532.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto__){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto__){
return (function (state_9559){
var state_val_9560 = (state_9559[(1)]);
if((state_val_9560 === (7))){
var inst_9541 = (state_9559[(2)]);
var state_9559__$1 = state_9559;
var statearr_9561_9588 = state_9559__$1;
(statearr_9561_9588[(2)] = inst_9541);

(statearr_9561_9588[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9560 === (1))){
var inst_9535 = cljs.core.seq(coll);
var inst_9536 = inst_9535;
var state_9559__$1 = (function (){var statearr_9562 = state_9559;
(statearr_9562[(7)] = inst_9536);

return statearr_9562;
})();
var statearr_9563_9589 = state_9559__$1;
(statearr_9563_9589[(2)] = null);

(statearr_9563_9589[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9560 === (4))){
var inst_9536 = (state_9559[(7)]);
var inst_9539 = cljs.core.first(inst_9536);
var state_9559__$1 = state_9559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9559__$1,(7),ch,inst_9539);
} else {
if((state_val_9560 === (13))){
var inst_9553 = (state_9559[(2)]);
var state_9559__$1 = state_9559;
var statearr_9564_9590 = state_9559__$1;
(statearr_9564_9590[(2)] = inst_9553);

(statearr_9564_9590[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9560 === (6))){
var inst_9544 = (state_9559[(2)]);
var state_9559__$1 = state_9559;
if(cljs.core.truth_(inst_9544)){
var statearr_9565_9591 = state_9559__$1;
(statearr_9565_9591[(1)] = (8));

} else {
var statearr_9566_9592 = state_9559__$1;
(statearr_9566_9592[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9560 === (3))){
var inst_9557 = (state_9559[(2)]);
var state_9559__$1 = state_9559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9559__$1,inst_9557);
} else {
if((state_val_9560 === (12))){
var state_9559__$1 = state_9559;
var statearr_9567_9593 = state_9559__$1;
(statearr_9567_9593[(2)] = null);

(statearr_9567_9593[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9560 === (2))){
var inst_9536 = (state_9559[(7)]);
var state_9559__$1 = state_9559;
if(cljs.core.truth_(inst_9536)){
var statearr_9568_9594 = state_9559__$1;
(statearr_9568_9594[(1)] = (4));

} else {
var statearr_9569_9595 = state_9559__$1;
(statearr_9569_9595[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9560 === (11))){
var inst_9550 = cljs.core.async.close_BANG_(ch);
var state_9559__$1 = state_9559;
var statearr_9570_9596 = state_9559__$1;
(statearr_9570_9596[(2)] = inst_9550);

(statearr_9570_9596[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9560 === (9))){
var state_9559__$1 = state_9559;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9571_9597 = state_9559__$1;
(statearr_9571_9597[(1)] = (11));

} else {
var statearr_9572_9598 = state_9559__$1;
(statearr_9572_9598[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9560 === (5))){
var inst_9536 = (state_9559[(7)]);
var state_9559__$1 = state_9559;
var statearr_9573_9599 = state_9559__$1;
(statearr_9573_9599[(2)] = inst_9536);

(statearr_9573_9599[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9560 === (10))){
var inst_9555 = (state_9559[(2)]);
var state_9559__$1 = state_9559;
var statearr_9574_9600 = state_9559__$1;
(statearr_9574_9600[(2)] = inst_9555);

(statearr_9574_9600[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9560 === (8))){
var inst_9536 = (state_9559[(7)]);
var inst_9546 = cljs.core.next(inst_9536);
var inst_9536__$1 = inst_9546;
var state_9559__$1 = (function (){var statearr_9575 = state_9559;
(statearr_9575[(7)] = inst_9536__$1);

return statearr_9575;
})();
var statearr_9576_9601 = state_9559__$1;
(statearr_9576_9601[(2)] = null);

(statearr_9576_9601[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto__))
;
return ((function (switch__8621__auto__,c__8735__auto__){
return (function() {
var cljs$core$async$state_machine__8622__auto__ = null;
var cljs$core$async$state_machine__8622__auto____0 = (function (){
var statearr_9580 = [null,null,null,null,null,null,null,null];
(statearr_9580[(0)] = cljs$core$async$state_machine__8622__auto__);

(statearr_9580[(1)] = (1));

return statearr_9580;
});
var cljs$core$async$state_machine__8622__auto____1 = (function (state_9559){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_9559);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e9581){if((e9581 instanceof Object)){
var ex__8625__auto__ = e9581;
var statearr_9582_9602 = state_9559;
(statearr_9582_9602[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9559);

return cljs.core.cst$kw$recur;
} else {
throw e9581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__9603 = state_9559;
state_9559 = G__9603;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$state_machine__8622__auto__ = function(state_9559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8622__auto____1.call(this,state_9559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8622__auto____0;
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8622__auto____1;
return cljs$core$async$state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto__))
})();
var state__8737__auto__ = (function (){var statearr_9583 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_9583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto__);

return statearr_9583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto__))
);

return c__8735__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5326__auto__ = (((_ == null))?null:_);
var m__5327__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5327__auto__.call(null,_));
} else {
var m__5327__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5327__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5327__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5327__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5327__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto__.call(null,m,ch));
} else {
var m__5327__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5327__auto__.call(null,m));
} else {
var m__5327__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5327__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__9828 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9828) : cljs.core.atom.call(null,G__9828));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async9829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9829 = (function (mult,ch,cs,meta9830){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9830 = meta9830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9831,meta9830__$1){
var self__ = this;
var _9831__$1 = this;
return (new cljs.core.async.t_cljs$core$async9829(self__.mult,self__.ch,self__.cs,meta9830__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9831){
var self__ = this;
var _9831__$1 = this;
return self__.meta9830;
});})(cs))
;

cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__9832_10052 = self__.cs;
var G__9833_10053 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9832_10052,G__9833_10053) : cljs.core.reset_BANG_.call(null,G__9832_10052,G__9833_10053));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9829.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta9830], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9829";

cljs.core.async.t_cljs$core$async9829.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async9829");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async9829 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9829(mult__$1,ch__$1,cs__$1,meta9830){
return (new cljs.core.async.t_cljs$core$async9829(mult__$1,ch__$1,cs__$1,meta9830));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9829(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8735__auto___10054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___10054,cs,m,dchan,dctr,done){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___10054,cs,m,dchan,dctr,done){
return (function (state_9964){
var state_val_9965 = (state_9964[(1)]);
if((state_val_9965 === (7))){
var inst_9960 = (state_9964[(2)]);
var state_9964__$1 = state_9964;
var statearr_9966_10055 = state_9964__$1;
(statearr_9966_10055[(2)] = inst_9960);

(statearr_9966_10055[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (20))){
var inst_9865 = (state_9964[(7)]);
var inst_9875 = cljs.core.first(inst_9865);
var inst_9876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9875,(0),null);
var inst_9877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9875,(1),null);
var state_9964__$1 = (function (){var statearr_9967 = state_9964;
(statearr_9967[(8)] = inst_9876);

return statearr_9967;
})();
if(cljs.core.truth_(inst_9877)){
var statearr_9968_10056 = state_9964__$1;
(statearr_9968_10056[(1)] = (22));

} else {
var statearr_9969_10057 = state_9964__$1;
(statearr_9969_10057[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (27))){
var inst_9836 = (state_9964[(9)]);
var inst_9912 = (state_9964[(10)]);
var inst_9907 = (state_9964[(11)]);
var inst_9905 = (state_9964[(12)]);
var inst_9912__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9905,inst_9907);
var inst_9913 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_9912__$1,inst_9836,done);
var state_9964__$1 = (function (){var statearr_9970 = state_9964;
(statearr_9970[(10)] = inst_9912__$1);

return statearr_9970;
})();
if(cljs.core.truth_(inst_9913)){
var statearr_9971_10058 = state_9964__$1;
(statearr_9971_10058[(1)] = (30));

} else {
var statearr_9972_10059 = state_9964__$1;
(statearr_9972_10059[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (1))){
var state_9964__$1 = state_9964;
var statearr_9973_10060 = state_9964__$1;
(statearr_9973_10060[(2)] = null);

(statearr_9973_10060[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (24))){
var inst_9865 = (state_9964[(7)]);
var inst_9882 = (state_9964[(2)]);
var inst_9883 = cljs.core.next(inst_9865);
var inst_9845 = inst_9883;
var inst_9846 = null;
var inst_9847 = (0);
var inst_9848 = (0);
var state_9964__$1 = (function (){var statearr_9974 = state_9964;
(statearr_9974[(13)] = inst_9845);

(statearr_9974[(14)] = inst_9847);

(statearr_9974[(15)] = inst_9846);

(statearr_9974[(16)] = inst_9882);

(statearr_9974[(17)] = inst_9848);

return statearr_9974;
})();
var statearr_9975_10061 = state_9964__$1;
(statearr_9975_10061[(2)] = null);

(statearr_9975_10061[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (39))){
var state_9964__$1 = state_9964;
var statearr_9979_10062 = state_9964__$1;
(statearr_9979_10062[(2)] = null);

(statearr_9979_10062[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (4))){
var inst_9836 = (state_9964[(9)]);
var inst_9836__$1 = (state_9964[(2)]);
var inst_9837 = (inst_9836__$1 == null);
var state_9964__$1 = (function (){var statearr_9980 = state_9964;
(statearr_9980[(9)] = inst_9836__$1);

return statearr_9980;
})();
if(cljs.core.truth_(inst_9837)){
var statearr_9981_10063 = state_9964__$1;
(statearr_9981_10063[(1)] = (5));

} else {
var statearr_9982_10064 = state_9964__$1;
(statearr_9982_10064[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (15))){
var inst_9845 = (state_9964[(13)]);
var inst_9847 = (state_9964[(14)]);
var inst_9846 = (state_9964[(15)]);
var inst_9848 = (state_9964[(17)]);
var inst_9861 = (state_9964[(2)]);
var inst_9862 = (inst_9848 + (1));
var tmp9976 = inst_9845;
var tmp9977 = inst_9847;
var tmp9978 = inst_9846;
var inst_9845__$1 = tmp9976;
var inst_9846__$1 = tmp9978;
var inst_9847__$1 = tmp9977;
var inst_9848__$1 = inst_9862;
var state_9964__$1 = (function (){var statearr_9983 = state_9964;
(statearr_9983[(13)] = inst_9845__$1);

(statearr_9983[(14)] = inst_9847__$1);

(statearr_9983[(18)] = inst_9861);

(statearr_9983[(15)] = inst_9846__$1);

(statearr_9983[(17)] = inst_9848__$1);

return statearr_9983;
})();
var statearr_9984_10065 = state_9964__$1;
(statearr_9984_10065[(2)] = null);

(statearr_9984_10065[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (21))){
var inst_9886 = (state_9964[(2)]);
var state_9964__$1 = state_9964;
var statearr_9988_10066 = state_9964__$1;
(statearr_9988_10066[(2)] = inst_9886);

(statearr_9988_10066[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (31))){
var inst_9912 = (state_9964[(10)]);
var inst_9916 = done(null);
var inst_9917 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_9912);
var state_9964__$1 = (function (){var statearr_9989 = state_9964;
(statearr_9989[(19)] = inst_9916);

return statearr_9989;
})();
var statearr_9990_10067 = state_9964__$1;
(statearr_9990_10067[(2)] = inst_9917);

(statearr_9990_10067[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (32))){
var inst_9906 = (state_9964[(20)]);
var inst_9904 = (state_9964[(21)]);
var inst_9907 = (state_9964[(11)]);
var inst_9905 = (state_9964[(12)]);
var inst_9919 = (state_9964[(2)]);
var inst_9920 = (inst_9907 + (1));
var tmp9985 = inst_9906;
var tmp9986 = inst_9904;
var tmp9987 = inst_9905;
var inst_9904__$1 = tmp9986;
var inst_9905__$1 = tmp9987;
var inst_9906__$1 = tmp9985;
var inst_9907__$1 = inst_9920;
var state_9964__$1 = (function (){var statearr_9991 = state_9964;
(statearr_9991[(20)] = inst_9906__$1);

(statearr_9991[(21)] = inst_9904__$1);

(statearr_9991[(22)] = inst_9919);

(statearr_9991[(11)] = inst_9907__$1);

(statearr_9991[(12)] = inst_9905__$1);

return statearr_9991;
})();
var statearr_9992_10068 = state_9964__$1;
(statearr_9992_10068[(2)] = null);

(statearr_9992_10068[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (40))){
var inst_9932 = (state_9964[(23)]);
var inst_9936 = done(null);
var inst_9937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_9932);
var state_9964__$1 = (function (){var statearr_9993 = state_9964;
(statearr_9993[(24)] = inst_9936);

return statearr_9993;
})();
var statearr_9994_10069 = state_9964__$1;
(statearr_9994_10069[(2)] = inst_9937);

(statearr_9994_10069[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (33))){
var inst_9923 = (state_9964[(25)]);
var inst_9925 = cljs.core.chunked_seq_QMARK_(inst_9923);
var state_9964__$1 = state_9964;
if(inst_9925){
var statearr_9995_10070 = state_9964__$1;
(statearr_9995_10070[(1)] = (36));

} else {
var statearr_9996_10071 = state_9964__$1;
(statearr_9996_10071[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (13))){
var inst_9855 = (state_9964[(26)]);
var inst_9858 = cljs.core.async.close_BANG_(inst_9855);
var state_9964__$1 = state_9964;
var statearr_9997_10072 = state_9964__$1;
(statearr_9997_10072[(2)] = inst_9858);

(statearr_9997_10072[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (22))){
var inst_9876 = (state_9964[(8)]);
var inst_9879 = cljs.core.async.close_BANG_(inst_9876);
var state_9964__$1 = state_9964;
var statearr_9998_10073 = state_9964__$1;
(statearr_9998_10073[(2)] = inst_9879);

(statearr_9998_10073[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (36))){
var inst_9923 = (state_9964[(25)]);
var inst_9927 = cljs.core.chunk_first(inst_9923);
var inst_9928 = cljs.core.chunk_rest(inst_9923);
var inst_9929 = cljs.core.count(inst_9927);
var inst_9904 = inst_9928;
var inst_9905 = inst_9927;
var inst_9906 = inst_9929;
var inst_9907 = (0);
var state_9964__$1 = (function (){var statearr_9999 = state_9964;
(statearr_9999[(20)] = inst_9906);

(statearr_9999[(21)] = inst_9904);

(statearr_9999[(11)] = inst_9907);

(statearr_9999[(12)] = inst_9905);

return statearr_9999;
})();
var statearr_10000_10074 = state_9964__$1;
(statearr_10000_10074[(2)] = null);

(statearr_10000_10074[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (41))){
var inst_9923 = (state_9964[(25)]);
var inst_9939 = (state_9964[(2)]);
var inst_9940 = cljs.core.next(inst_9923);
var inst_9904 = inst_9940;
var inst_9905 = null;
var inst_9906 = (0);
var inst_9907 = (0);
var state_9964__$1 = (function (){var statearr_10001 = state_9964;
(statearr_10001[(20)] = inst_9906);

(statearr_10001[(21)] = inst_9904);

(statearr_10001[(11)] = inst_9907);

(statearr_10001[(27)] = inst_9939);

(statearr_10001[(12)] = inst_9905);

return statearr_10001;
})();
var statearr_10002_10075 = state_9964__$1;
(statearr_10002_10075[(2)] = null);

(statearr_10002_10075[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (43))){
var state_9964__$1 = state_9964;
var statearr_10003_10076 = state_9964__$1;
(statearr_10003_10076[(2)] = null);

(statearr_10003_10076[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (29))){
var inst_9948 = (state_9964[(2)]);
var state_9964__$1 = state_9964;
var statearr_10004_10077 = state_9964__$1;
(statearr_10004_10077[(2)] = inst_9948);

(statearr_10004_10077[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (44))){
var inst_9957 = (state_9964[(2)]);
var state_9964__$1 = (function (){var statearr_10005 = state_9964;
(statearr_10005[(28)] = inst_9957);

return statearr_10005;
})();
var statearr_10006_10078 = state_9964__$1;
(statearr_10006_10078[(2)] = null);

(statearr_10006_10078[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (6))){
var inst_9896 = (state_9964[(29)]);
var inst_9895 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_9896__$1 = cljs.core.keys(inst_9895);
var inst_9897 = cljs.core.count(inst_9896__$1);
var inst_9898 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_9897) : cljs.core.reset_BANG_.call(null,dctr,inst_9897));
var inst_9903 = cljs.core.seq(inst_9896__$1);
var inst_9904 = inst_9903;
var inst_9905 = null;
var inst_9906 = (0);
var inst_9907 = (0);
var state_9964__$1 = (function (){var statearr_10007 = state_9964;
(statearr_10007[(29)] = inst_9896__$1);

(statearr_10007[(30)] = inst_9898);

(statearr_10007[(20)] = inst_9906);

(statearr_10007[(21)] = inst_9904);

(statearr_10007[(11)] = inst_9907);

(statearr_10007[(12)] = inst_9905);

return statearr_10007;
})();
var statearr_10008_10079 = state_9964__$1;
(statearr_10008_10079[(2)] = null);

(statearr_10008_10079[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (28))){
var inst_9923 = (state_9964[(25)]);
var inst_9904 = (state_9964[(21)]);
var inst_9923__$1 = cljs.core.seq(inst_9904);
var state_9964__$1 = (function (){var statearr_10009 = state_9964;
(statearr_10009[(25)] = inst_9923__$1);

return statearr_10009;
})();
if(inst_9923__$1){
var statearr_10010_10080 = state_9964__$1;
(statearr_10010_10080[(1)] = (33));

} else {
var statearr_10011_10081 = state_9964__$1;
(statearr_10011_10081[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (25))){
var inst_9906 = (state_9964[(20)]);
var inst_9907 = (state_9964[(11)]);
var inst_9909 = (inst_9907 < inst_9906);
var inst_9910 = inst_9909;
var state_9964__$1 = state_9964;
if(cljs.core.truth_(inst_9910)){
var statearr_10012_10082 = state_9964__$1;
(statearr_10012_10082[(1)] = (27));

} else {
var statearr_10013_10083 = state_9964__$1;
(statearr_10013_10083[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (34))){
var state_9964__$1 = state_9964;
var statearr_10014_10084 = state_9964__$1;
(statearr_10014_10084[(2)] = null);

(statearr_10014_10084[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (17))){
var state_9964__$1 = state_9964;
var statearr_10015_10085 = state_9964__$1;
(statearr_10015_10085[(2)] = null);

(statearr_10015_10085[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (3))){
var inst_9962 = (state_9964[(2)]);
var state_9964__$1 = state_9964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9964__$1,inst_9962);
} else {
if((state_val_9965 === (12))){
var inst_9891 = (state_9964[(2)]);
var state_9964__$1 = state_9964;
var statearr_10016_10086 = state_9964__$1;
(statearr_10016_10086[(2)] = inst_9891);

(statearr_10016_10086[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (2))){
var state_9964__$1 = state_9964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9964__$1,(4),ch);
} else {
if((state_val_9965 === (23))){
var state_9964__$1 = state_9964;
var statearr_10017_10087 = state_9964__$1;
(statearr_10017_10087[(2)] = null);

(statearr_10017_10087[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (35))){
var inst_9946 = (state_9964[(2)]);
var state_9964__$1 = state_9964;
var statearr_10018_10088 = state_9964__$1;
(statearr_10018_10088[(2)] = inst_9946);

(statearr_10018_10088[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (19))){
var inst_9865 = (state_9964[(7)]);
var inst_9869 = cljs.core.chunk_first(inst_9865);
var inst_9870 = cljs.core.chunk_rest(inst_9865);
var inst_9871 = cljs.core.count(inst_9869);
var inst_9845 = inst_9870;
var inst_9846 = inst_9869;
var inst_9847 = inst_9871;
var inst_9848 = (0);
var state_9964__$1 = (function (){var statearr_10019 = state_9964;
(statearr_10019[(13)] = inst_9845);

(statearr_10019[(14)] = inst_9847);

(statearr_10019[(15)] = inst_9846);

(statearr_10019[(17)] = inst_9848);

return statearr_10019;
})();
var statearr_10020_10089 = state_9964__$1;
(statearr_10020_10089[(2)] = null);

(statearr_10020_10089[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (11))){
var inst_9845 = (state_9964[(13)]);
var inst_9865 = (state_9964[(7)]);
var inst_9865__$1 = cljs.core.seq(inst_9845);
var state_9964__$1 = (function (){var statearr_10021 = state_9964;
(statearr_10021[(7)] = inst_9865__$1);

return statearr_10021;
})();
if(inst_9865__$1){
var statearr_10022_10090 = state_9964__$1;
(statearr_10022_10090[(1)] = (16));

} else {
var statearr_10023_10091 = state_9964__$1;
(statearr_10023_10091[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (9))){
var inst_9893 = (state_9964[(2)]);
var state_9964__$1 = state_9964;
var statearr_10024_10092 = state_9964__$1;
(statearr_10024_10092[(2)] = inst_9893);

(statearr_10024_10092[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (5))){
var inst_9843 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_9844 = cljs.core.seq(inst_9843);
var inst_9845 = inst_9844;
var inst_9846 = null;
var inst_9847 = (0);
var inst_9848 = (0);
var state_9964__$1 = (function (){var statearr_10025 = state_9964;
(statearr_10025[(13)] = inst_9845);

(statearr_10025[(14)] = inst_9847);

(statearr_10025[(15)] = inst_9846);

(statearr_10025[(17)] = inst_9848);

return statearr_10025;
})();
var statearr_10026_10093 = state_9964__$1;
(statearr_10026_10093[(2)] = null);

(statearr_10026_10093[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (14))){
var state_9964__$1 = state_9964;
var statearr_10027_10094 = state_9964__$1;
(statearr_10027_10094[(2)] = null);

(statearr_10027_10094[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (45))){
var inst_9954 = (state_9964[(2)]);
var state_9964__$1 = state_9964;
var statearr_10028_10095 = state_9964__$1;
(statearr_10028_10095[(2)] = inst_9954);

(statearr_10028_10095[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (26))){
var inst_9896 = (state_9964[(29)]);
var inst_9950 = (state_9964[(2)]);
var inst_9951 = cljs.core.seq(inst_9896);
var state_9964__$1 = (function (){var statearr_10029 = state_9964;
(statearr_10029[(31)] = inst_9950);

return statearr_10029;
})();
if(inst_9951){
var statearr_10030_10096 = state_9964__$1;
(statearr_10030_10096[(1)] = (42));

} else {
var statearr_10031_10097 = state_9964__$1;
(statearr_10031_10097[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (16))){
var inst_9865 = (state_9964[(7)]);
var inst_9867 = cljs.core.chunked_seq_QMARK_(inst_9865);
var state_9964__$1 = state_9964;
if(inst_9867){
var statearr_10032_10098 = state_9964__$1;
(statearr_10032_10098[(1)] = (19));

} else {
var statearr_10033_10099 = state_9964__$1;
(statearr_10033_10099[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (38))){
var inst_9943 = (state_9964[(2)]);
var state_9964__$1 = state_9964;
var statearr_10034_10100 = state_9964__$1;
(statearr_10034_10100[(2)] = inst_9943);

(statearr_10034_10100[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (30))){
var state_9964__$1 = state_9964;
var statearr_10035_10101 = state_9964__$1;
(statearr_10035_10101[(2)] = null);

(statearr_10035_10101[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (10))){
var inst_9846 = (state_9964[(15)]);
var inst_9848 = (state_9964[(17)]);
var inst_9854 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9846,inst_9848);
var inst_9855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9854,(0),null);
var inst_9856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9854,(1),null);
var state_9964__$1 = (function (){var statearr_10036 = state_9964;
(statearr_10036[(26)] = inst_9855);

return statearr_10036;
})();
if(cljs.core.truth_(inst_9856)){
var statearr_10037_10102 = state_9964__$1;
(statearr_10037_10102[(1)] = (13));

} else {
var statearr_10038_10103 = state_9964__$1;
(statearr_10038_10103[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (18))){
var inst_9889 = (state_9964[(2)]);
var state_9964__$1 = state_9964;
var statearr_10039_10104 = state_9964__$1;
(statearr_10039_10104[(2)] = inst_9889);

(statearr_10039_10104[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (42))){
var state_9964__$1 = state_9964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9964__$1,(45),dchan);
} else {
if((state_val_9965 === (37))){
var inst_9923 = (state_9964[(25)]);
var inst_9836 = (state_9964[(9)]);
var inst_9932 = (state_9964[(23)]);
var inst_9932__$1 = cljs.core.first(inst_9923);
var inst_9933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_9932__$1,inst_9836,done);
var state_9964__$1 = (function (){var statearr_10040 = state_9964;
(statearr_10040[(23)] = inst_9932__$1);

return statearr_10040;
})();
if(cljs.core.truth_(inst_9933)){
var statearr_10041_10105 = state_9964__$1;
(statearr_10041_10105[(1)] = (39));

} else {
var statearr_10042_10106 = state_9964__$1;
(statearr_10042_10106[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9965 === (8))){
var inst_9847 = (state_9964[(14)]);
var inst_9848 = (state_9964[(17)]);
var inst_9850 = (inst_9848 < inst_9847);
var inst_9851 = inst_9850;
var state_9964__$1 = state_9964;
if(cljs.core.truth_(inst_9851)){
var statearr_10043_10107 = state_9964__$1;
(statearr_10043_10107[(1)] = (10));

} else {
var statearr_10044_10108 = state_9964__$1;
(statearr_10044_10108[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___10054,cs,m,dchan,dctr,done))
;
return ((function (switch__8621__auto__,c__8735__auto___10054,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8622__auto__ = null;
var cljs$core$async$mult_$_state_machine__8622__auto____0 = (function (){
var statearr_10048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10048[(0)] = cljs$core$async$mult_$_state_machine__8622__auto__);

(statearr_10048[(1)] = (1));

return statearr_10048;
});
var cljs$core$async$mult_$_state_machine__8622__auto____1 = (function (state_9964){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_9964);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e10049){if((e10049 instanceof Object)){
var ex__8625__auto__ = e10049;
var statearr_10050_10109 = state_9964;
(statearr_10050_10109[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9964);

return cljs.core.cst$kw$recur;
} else {
throw e10049;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__10110 = state_9964;
state_9964 = G__10110;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8622__auto__ = function(state_9964){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8622__auto____1.call(this,state_9964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8622__auto____0;
cljs$core$async$mult_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8622__auto____1;
return cljs$core$async$mult_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___10054,cs,m,dchan,dctr,done))
})();
var state__8737__auto__ = (function (){var statearr_10051 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_10051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___10054);

return statearr_10051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___10054,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args10111 = [];
var len__5729__auto___10114 = arguments.length;
var i__5730__auto___10115 = (0);
while(true){
if((i__5730__auto___10115 < len__5729__auto___10114)){
args10111.push((arguments[i__5730__auto___10115]));

var G__10116 = (i__5730__auto___10115 + (1));
i__5730__auto___10115 = G__10116;
continue;
} else {
}
break;
}

var G__10113 = args10111.length;
switch (G__10113) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10111.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto__.call(null,m,ch));
} else {
var m__5327__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto__.call(null,m,ch));
} else {
var m__5327__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5327__auto__.call(null,m));
} else {
var m__5327__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5327__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5327__auto__.call(null,m,state_map));
} else {
var m__5327__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5327__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5327__auto__.call(null,m,mode));
} else {
var m__5327__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5327__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___10128 = arguments.length;
var i__5730__auto___10129 = (0);
while(true){
if((i__5730__auto___10129 < len__5729__auto___10128)){
args__5736__auto__.push((arguments[i__5730__auto___10129]));

var G__10130 = (i__5730__auto___10129 + (1));
i__5730__auto___10129 = G__10130;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((3) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10122){
var map__10123 = p__10122;
var map__10123__$1 = ((((!((map__10123 == null)))?((((map__10123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10123):map__10123);
var opts = map__10123__$1;
var statearr_10125_10131 = state;
(statearr_10125_10131[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__10123,map__10123__$1,opts){
return (function (val){
var statearr_10126_10132 = state;
(statearr_10126_10132[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__10123,map__10123__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_10127_10133 = state;
(statearr_10127_10133[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10118){
var G__10119 = cljs.core.first(seq10118);
var seq10118__$1 = cljs.core.next(seq10118);
var G__10120 = cljs.core.first(seq10118__$1);
var seq10118__$2 = cljs.core.next(seq10118__$1);
var G__10121 = cljs.core.first(seq10118__$2);
var seq10118__$3 = cljs.core.next(seq10118__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10119,G__10120,G__10121,seq10118__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__10300 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10300) : cljs.core.atom.call(null,G__10300));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10301 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10302){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10302 = meta10302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10303,meta10302__$1){
var self__ = this;
var _10303__$1 = this;
return (new cljs.core.async.t_cljs$core$async10301(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10302__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10303){
var self__ = this;
var _10303__$1 = this;
return self__.meta10302;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10301.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10301.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10301.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10301.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10301.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__10304_10466 = self__.cs;
var G__10305_10467 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10304_10466,G__10305_10467) : cljs.core.reset_BANG_.call(null,G__10304_10466,G__10305_10467));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10301.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10301.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10301.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta10302], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10301";

cljs.core.async.t_cljs$core$async10301.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async10301");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10301 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10301(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10302){
return (new cljs.core.async.t_cljs$core$async10301(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10302));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10301(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8735__auto___10468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___10468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___10468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10403){
var state_val_10404 = (state_10403[(1)]);
if((state_val_10404 === (7))){
var inst_10321 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
var statearr_10405_10469 = state_10403__$1;
(statearr_10405_10469[(2)] = inst_10321);

(statearr_10405_10469[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (20))){
var inst_10333 = (state_10403[(7)]);
var state_10403__$1 = state_10403;
var statearr_10406_10470 = state_10403__$1;
(statearr_10406_10470[(2)] = inst_10333);

(statearr_10406_10470[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (27))){
var state_10403__$1 = state_10403;
var statearr_10407_10471 = state_10403__$1;
(statearr_10407_10471[(2)] = null);

(statearr_10407_10471[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (1))){
var inst_10309 = (state_10403[(8)]);
var inst_10309__$1 = calc_state();
var inst_10311 = (inst_10309__$1 == null);
var inst_10312 = cljs.core.not(inst_10311);
var state_10403__$1 = (function (){var statearr_10408 = state_10403;
(statearr_10408[(8)] = inst_10309__$1);

return statearr_10408;
})();
if(inst_10312){
var statearr_10409_10472 = state_10403__$1;
(statearr_10409_10472[(1)] = (2));

} else {
var statearr_10410_10473 = state_10403__$1;
(statearr_10410_10473[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (24))){
var inst_10377 = (state_10403[(9)]);
var inst_10356 = (state_10403[(10)]);
var inst_10363 = (state_10403[(11)]);
var inst_10377__$1 = (inst_10356.cljs$core$IFn$_invoke$arity$1 ? inst_10356.cljs$core$IFn$_invoke$arity$1(inst_10363) : inst_10356.call(null,inst_10363));
var state_10403__$1 = (function (){var statearr_10411 = state_10403;
(statearr_10411[(9)] = inst_10377__$1);

return statearr_10411;
})();
if(cljs.core.truth_(inst_10377__$1)){
var statearr_10412_10474 = state_10403__$1;
(statearr_10412_10474[(1)] = (29));

} else {
var statearr_10413_10475 = state_10403__$1;
(statearr_10413_10475[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (4))){
var inst_10324 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
if(cljs.core.truth_(inst_10324)){
var statearr_10414_10476 = state_10403__$1;
(statearr_10414_10476[(1)] = (8));

} else {
var statearr_10415_10477 = state_10403__$1;
(statearr_10415_10477[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (15))){
var inst_10350 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
if(cljs.core.truth_(inst_10350)){
var statearr_10416_10478 = state_10403__$1;
(statearr_10416_10478[(1)] = (19));

} else {
var statearr_10417_10479 = state_10403__$1;
(statearr_10417_10479[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (21))){
var inst_10355 = (state_10403[(12)]);
var inst_10355__$1 = (state_10403[(2)]);
var inst_10356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10355__$1,cljs.core.cst$kw$solos);
var inst_10357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10355__$1,cljs.core.cst$kw$mutes);
var inst_10358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10355__$1,cljs.core.cst$kw$reads);
var state_10403__$1 = (function (){var statearr_10418 = state_10403;
(statearr_10418[(13)] = inst_10357);

(statearr_10418[(10)] = inst_10356);

(statearr_10418[(12)] = inst_10355__$1);

return statearr_10418;
})();
return cljs.core.async.ioc_alts_BANG_(state_10403__$1,(22),inst_10358);
} else {
if((state_val_10404 === (31))){
var inst_10385 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
if(cljs.core.truth_(inst_10385)){
var statearr_10419_10480 = state_10403__$1;
(statearr_10419_10480[(1)] = (32));

} else {
var statearr_10420_10481 = state_10403__$1;
(statearr_10420_10481[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (32))){
var inst_10362 = (state_10403[(14)]);
var state_10403__$1 = state_10403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10403__$1,(35),out,inst_10362);
} else {
if((state_val_10404 === (33))){
var inst_10355 = (state_10403[(12)]);
var inst_10333 = inst_10355;
var state_10403__$1 = (function (){var statearr_10421 = state_10403;
(statearr_10421[(7)] = inst_10333);

return statearr_10421;
})();
var statearr_10422_10482 = state_10403__$1;
(statearr_10422_10482[(2)] = null);

(statearr_10422_10482[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (13))){
var inst_10333 = (state_10403[(7)]);
var inst_10340 = inst_10333.cljs$lang$protocol_mask$partition0$;
var inst_10341 = (inst_10340 & (64));
var inst_10342 = inst_10333.cljs$core$ISeq$;
var inst_10343 = (inst_10341) || (inst_10342);
var state_10403__$1 = state_10403;
if(cljs.core.truth_(inst_10343)){
var statearr_10423_10483 = state_10403__$1;
(statearr_10423_10483[(1)] = (16));

} else {
var statearr_10424_10484 = state_10403__$1;
(statearr_10424_10484[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (22))){
var inst_10362 = (state_10403[(14)]);
var inst_10363 = (state_10403[(11)]);
var inst_10361 = (state_10403[(2)]);
var inst_10362__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10361,(0),null);
var inst_10363__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10361,(1),null);
var inst_10364 = (inst_10362__$1 == null);
var inst_10365 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10363__$1,change);
var inst_10366 = (inst_10364) || (inst_10365);
var state_10403__$1 = (function (){var statearr_10425 = state_10403;
(statearr_10425[(14)] = inst_10362__$1);

(statearr_10425[(11)] = inst_10363__$1);

return statearr_10425;
})();
if(cljs.core.truth_(inst_10366)){
var statearr_10426_10485 = state_10403__$1;
(statearr_10426_10485[(1)] = (23));

} else {
var statearr_10427_10486 = state_10403__$1;
(statearr_10427_10486[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (36))){
var inst_10355 = (state_10403[(12)]);
var inst_10333 = inst_10355;
var state_10403__$1 = (function (){var statearr_10428 = state_10403;
(statearr_10428[(7)] = inst_10333);

return statearr_10428;
})();
var statearr_10429_10487 = state_10403__$1;
(statearr_10429_10487[(2)] = null);

(statearr_10429_10487[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (29))){
var inst_10377 = (state_10403[(9)]);
var state_10403__$1 = state_10403;
var statearr_10430_10488 = state_10403__$1;
(statearr_10430_10488[(2)] = inst_10377);

(statearr_10430_10488[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (6))){
var state_10403__$1 = state_10403;
var statearr_10431_10489 = state_10403__$1;
(statearr_10431_10489[(2)] = false);

(statearr_10431_10489[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (28))){
var inst_10373 = (state_10403[(2)]);
var inst_10374 = calc_state();
var inst_10333 = inst_10374;
var state_10403__$1 = (function (){var statearr_10432 = state_10403;
(statearr_10432[(15)] = inst_10373);

(statearr_10432[(7)] = inst_10333);

return statearr_10432;
})();
var statearr_10433_10490 = state_10403__$1;
(statearr_10433_10490[(2)] = null);

(statearr_10433_10490[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (25))){
var inst_10399 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
var statearr_10434_10491 = state_10403__$1;
(statearr_10434_10491[(2)] = inst_10399);

(statearr_10434_10491[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (34))){
var inst_10397 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
var statearr_10435_10492 = state_10403__$1;
(statearr_10435_10492[(2)] = inst_10397);

(statearr_10435_10492[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (17))){
var state_10403__$1 = state_10403;
var statearr_10436_10493 = state_10403__$1;
(statearr_10436_10493[(2)] = false);

(statearr_10436_10493[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (3))){
var state_10403__$1 = state_10403;
var statearr_10437_10494 = state_10403__$1;
(statearr_10437_10494[(2)] = false);

(statearr_10437_10494[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (12))){
var inst_10401 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10403__$1,inst_10401);
} else {
if((state_val_10404 === (2))){
var inst_10309 = (state_10403[(8)]);
var inst_10314 = inst_10309.cljs$lang$protocol_mask$partition0$;
var inst_10315 = (inst_10314 & (64));
var inst_10316 = inst_10309.cljs$core$ISeq$;
var inst_10317 = (inst_10315) || (inst_10316);
var state_10403__$1 = state_10403;
if(cljs.core.truth_(inst_10317)){
var statearr_10438_10495 = state_10403__$1;
(statearr_10438_10495[(1)] = (5));

} else {
var statearr_10439_10496 = state_10403__$1;
(statearr_10439_10496[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (23))){
var inst_10362 = (state_10403[(14)]);
var inst_10368 = (inst_10362 == null);
var state_10403__$1 = state_10403;
if(cljs.core.truth_(inst_10368)){
var statearr_10440_10497 = state_10403__$1;
(statearr_10440_10497[(1)] = (26));

} else {
var statearr_10441_10498 = state_10403__$1;
(statearr_10441_10498[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (35))){
var inst_10388 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
if(cljs.core.truth_(inst_10388)){
var statearr_10442_10499 = state_10403__$1;
(statearr_10442_10499[(1)] = (36));

} else {
var statearr_10443_10500 = state_10403__$1;
(statearr_10443_10500[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (19))){
var inst_10333 = (state_10403[(7)]);
var inst_10352 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_10333);
var state_10403__$1 = state_10403;
var statearr_10444_10501 = state_10403__$1;
(statearr_10444_10501[(2)] = inst_10352);

(statearr_10444_10501[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (11))){
var inst_10333 = (state_10403[(7)]);
var inst_10337 = (inst_10333 == null);
var inst_10338 = cljs.core.not(inst_10337);
var state_10403__$1 = state_10403;
if(inst_10338){
var statearr_10445_10502 = state_10403__$1;
(statearr_10445_10502[(1)] = (13));

} else {
var statearr_10446_10503 = state_10403__$1;
(statearr_10446_10503[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (9))){
var inst_10309 = (state_10403[(8)]);
var state_10403__$1 = state_10403;
var statearr_10447_10504 = state_10403__$1;
(statearr_10447_10504[(2)] = inst_10309);

(statearr_10447_10504[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (5))){
var state_10403__$1 = state_10403;
var statearr_10448_10505 = state_10403__$1;
(statearr_10448_10505[(2)] = true);

(statearr_10448_10505[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (14))){
var state_10403__$1 = state_10403;
var statearr_10449_10506 = state_10403__$1;
(statearr_10449_10506[(2)] = false);

(statearr_10449_10506[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (26))){
var inst_10363 = (state_10403[(11)]);
var inst_10370 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_10363);
var state_10403__$1 = state_10403;
var statearr_10450_10507 = state_10403__$1;
(statearr_10450_10507[(2)] = inst_10370);

(statearr_10450_10507[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (16))){
var state_10403__$1 = state_10403;
var statearr_10451_10508 = state_10403__$1;
(statearr_10451_10508[(2)] = true);

(statearr_10451_10508[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (38))){
var inst_10393 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
var statearr_10452_10509 = state_10403__$1;
(statearr_10452_10509[(2)] = inst_10393);

(statearr_10452_10509[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (30))){
var inst_10357 = (state_10403[(13)]);
var inst_10356 = (state_10403[(10)]);
var inst_10363 = (state_10403[(11)]);
var inst_10380 = cljs.core.empty_QMARK_(inst_10356);
var inst_10381 = (inst_10357.cljs$core$IFn$_invoke$arity$1 ? inst_10357.cljs$core$IFn$_invoke$arity$1(inst_10363) : inst_10357.call(null,inst_10363));
var inst_10382 = cljs.core.not(inst_10381);
var inst_10383 = (inst_10380) && (inst_10382);
var state_10403__$1 = state_10403;
var statearr_10453_10510 = state_10403__$1;
(statearr_10453_10510[(2)] = inst_10383);

(statearr_10453_10510[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (10))){
var inst_10309 = (state_10403[(8)]);
var inst_10329 = (state_10403[(2)]);
var inst_10330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10329,cljs.core.cst$kw$solos);
var inst_10331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10329,cljs.core.cst$kw$mutes);
var inst_10332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10329,cljs.core.cst$kw$reads);
var inst_10333 = inst_10309;
var state_10403__$1 = (function (){var statearr_10454 = state_10403;
(statearr_10454[(16)] = inst_10331);

(statearr_10454[(17)] = inst_10332);

(statearr_10454[(18)] = inst_10330);

(statearr_10454[(7)] = inst_10333);

return statearr_10454;
})();
var statearr_10455_10511 = state_10403__$1;
(statearr_10455_10511[(2)] = null);

(statearr_10455_10511[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (18))){
var inst_10347 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
var statearr_10456_10512 = state_10403__$1;
(statearr_10456_10512[(2)] = inst_10347);

(statearr_10456_10512[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (37))){
var state_10403__$1 = state_10403;
var statearr_10457_10513 = state_10403__$1;
(statearr_10457_10513[(2)] = null);

(statearr_10457_10513[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10404 === (8))){
var inst_10309 = (state_10403[(8)]);
var inst_10326 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_10309);
var state_10403__$1 = state_10403;
var statearr_10458_10514 = state_10403__$1;
(statearr_10458_10514[(2)] = inst_10326);

(statearr_10458_10514[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___10468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8621__auto__,c__8735__auto___10468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8622__auto__ = null;
var cljs$core$async$mix_$_state_machine__8622__auto____0 = (function (){
var statearr_10462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10462[(0)] = cljs$core$async$mix_$_state_machine__8622__auto__);

(statearr_10462[(1)] = (1));

return statearr_10462;
});
var cljs$core$async$mix_$_state_machine__8622__auto____1 = (function (state_10403){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_10403);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e10463){if((e10463 instanceof Object)){
var ex__8625__auto__ = e10463;
var statearr_10464_10515 = state_10403;
(statearr_10464_10515[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10403);

return cljs.core.cst$kw$recur;
} else {
throw e10463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__10516 = state_10403;
state_10403 = G__10516;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8622__auto__ = function(state_10403){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8622__auto____1.call(this,state_10403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8622__auto____0;
cljs$core$async$mix_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8622__auto____1;
return cljs$core$async$mix_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___10468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8737__auto__ = (function (){var statearr_10465 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_10465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___10468);

return statearr_10465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___10468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5326__auto__ = (((p == null))?null:p);
var m__5327__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5327__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5327__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5327__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5326__auto__ = (((p == null))?null:p);
var m__5327__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5327__auto__.call(null,p,v,ch));
} else {
var m__5327__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5327__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args10517 = [];
var len__5729__auto___10520 = arguments.length;
var i__5730__auto___10521 = (0);
while(true){
if((i__5730__auto___10521 < len__5729__auto___10520)){
args10517.push((arguments[i__5730__auto___10521]));

var G__10522 = (i__5730__auto___10521 + (1));
i__5730__auto___10521 = G__10522;
continue;
} else {
}
break;
}

var G__10519 = args10517.length;
switch (G__10519) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10517.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5326__auto__ = (((p == null))?null:p);
var m__5327__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5327__auto__.call(null,p));
} else {
var m__5327__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5327__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5326__auto__ = (((p == null))?null:p);
var m__5327__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5327__auto__.call(null,p,v));
} else {
var m__5327__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5327__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args10525 = [];
var len__5729__auto___10653 = arguments.length;
var i__5730__auto___10654 = (0);
while(true){
if((i__5730__auto___10654 < len__5729__auto___10653)){
args10525.push((arguments[i__5730__auto___10654]));

var G__10655 = (i__5730__auto___10654 + (1));
i__5730__auto___10654 = G__10655;
continue;
} else {
}
break;
}

var G__10527 = args10525.length;
switch (G__10527) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10525.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__10528 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10528) : cljs.core.atom.call(null,G__10528));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4671__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4671__auto__,mults){
return (function (p1__10524_SHARP_){
if(cljs.core.truth_((p1__10524_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__10524_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__10524_SHARP_.call(null,topic)))){
return p1__10524_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10524_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4671__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10529 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10530){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10530 = meta10530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10531,meta10530__$1){
var self__ = this;
var _10531__$1 = this;
return (new cljs.core.async.t_cljs$core$async10529(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10530__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10531){
var self__ = this;
var _10531__$1 = this;
return self__.meta10530;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10529.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10529.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10529.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async10529.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10529.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10529.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__10532 = self__.mults;
var G__10533 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10532,G__10533) : cljs.core.reset_BANG_.call(null,G__10532,G__10533));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10529.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10529.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta10530], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10529";

cljs.core.async.t_cljs$core$async10529.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async10529");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10529 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10529(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10530){
return (new cljs.core.async.t_cljs$core$async10529(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10530));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10529(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8735__auto___10657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___10657,mults,ensure_mult,p){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___10657,mults,ensure_mult,p){
return (function (state_10605){
var state_val_10606 = (state_10605[(1)]);
if((state_val_10606 === (7))){
var inst_10601 = (state_10605[(2)]);
var state_10605__$1 = state_10605;
var statearr_10607_10658 = state_10605__$1;
(statearr_10607_10658[(2)] = inst_10601);

(statearr_10607_10658[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (20))){
var state_10605__$1 = state_10605;
var statearr_10608_10659 = state_10605__$1;
(statearr_10608_10659[(2)] = null);

(statearr_10608_10659[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (1))){
var state_10605__$1 = state_10605;
var statearr_10609_10660 = state_10605__$1;
(statearr_10609_10660[(2)] = null);

(statearr_10609_10660[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (24))){
var inst_10584 = (state_10605[(7)]);
var inst_10593 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_10584);
var state_10605__$1 = state_10605;
var statearr_10610_10661 = state_10605__$1;
(statearr_10610_10661[(2)] = inst_10593);

(statearr_10610_10661[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (4))){
var inst_10536 = (state_10605[(8)]);
var inst_10536__$1 = (state_10605[(2)]);
var inst_10537 = (inst_10536__$1 == null);
var state_10605__$1 = (function (){var statearr_10611 = state_10605;
(statearr_10611[(8)] = inst_10536__$1);

return statearr_10611;
})();
if(cljs.core.truth_(inst_10537)){
var statearr_10612_10662 = state_10605__$1;
(statearr_10612_10662[(1)] = (5));

} else {
var statearr_10613_10663 = state_10605__$1;
(statearr_10613_10663[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (15))){
var inst_10578 = (state_10605[(2)]);
var state_10605__$1 = state_10605;
var statearr_10614_10664 = state_10605__$1;
(statearr_10614_10664[(2)] = inst_10578);

(statearr_10614_10664[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (21))){
var inst_10598 = (state_10605[(2)]);
var state_10605__$1 = (function (){var statearr_10615 = state_10605;
(statearr_10615[(9)] = inst_10598);

return statearr_10615;
})();
var statearr_10616_10665 = state_10605__$1;
(statearr_10616_10665[(2)] = null);

(statearr_10616_10665[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (13))){
var inst_10560 = (state_10605[(10)]);
var inst_10562 = cljs.core.chunked_seq_QMARK_(inst_10560);
var state_10605__$1 = state_10605;
if(inst_10562){
var statearr_10617_10666 = state_10605__$1;
(statearr_10617_10666[(1)] = (16));

} else {
var statearr_10618_10667 = state_10605__$1;
(statearr_10618_10667[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (22))){
var inst_10590 = (state_10605[(2)]);
var state_10605__$1 = state_10605;
if(cljs.core.truth_(inst_10590)){
var statearr_10619_10668 = state_10605__$1;
(statearr_10619_10668[(1)] = (23));

} else {
var statearr_10620_10669 = state_10605__$1;
(statearr_10620_10669[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (6))){
var inst_10536 = (state_10605[(8)]);
var inst_10586 = (state_10605[(11)]);
var inst_10584 = (state_10605[(7)]);
var inst_10584__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_10536) : topic_fn.call(null,inst_10536));
var inst_10585 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_10586__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10585,inst_10584__$1);
var state_10605__$1 = (function (){var statearr_10621 = state_10605;
(statearr_10621[(11)] = inst_10586__$1);

(statearr_10621[(7)] = inst_10584__$1);

return statearr_10621;
})();
if(cljs.core.truth_(inst_10586__$1)){
var statearr_10622_10670 = state_10605__$1;
(statearr_10622_10670[(1)] = (19));

} else {
var statearr_10623_10671 = state_10605__$1;
(statearr_10623_10671[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (25))){
var inst_10595 = (state_10605[(2)]);
var state_10605__$1 = state_10605;
var statearr_10624_10672 = state_10605__$1;
(statearr_10624_10672[(2)] = inst_10595);

(statearr_10624_10672[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (17))){
var inst_10560 = (state_10605[(10)]);
var inst_10569 = cljs.core.first(inst_10560);
var inst_10570 = cljs.core.async.muxch_STAR_(inst_10569);
var inst_10571 = cljs.core.async.close_BANG_(inst_10570);
var inst_10572 = cljs.core.next(inst_10560);
var inst_10546 = inst_10572;
var inst_10547 = null;
var inst_10548 = (0);
var inst_10549 = (0);
var state_10605__$1 = (function (){var statearr_10625 = state_10605;
(statearr_10625[(12)] = inst_10548);

(statearr_10625[(13)] = inst_10571);

(statearr_10625[(14)] = inst_10549);

(statearr_10625[(15)] = inst_10546);

(statearr_10625[(16)] = inst_10547);

return statearr_10625;
})();
var statearr_10626_10673 = state_10605__$1;
(statearr_10626_10673[(2)] = null);

(statearr_10626_10673[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (3))){
var inst_10603 = (state_10605[(2)]);
var state_10605__$1 = state_10605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10605__$1,inst_10603);
} else {
if((state_val_10606 === (12))){
var inst_10580 = (state_10605[(2)]);
var state_10605__$1 = state_10605;
var statearr_10627_10674 = state_10605__$1;
(statearr_10627_10674[(2)] = inst_10580);

(statearr_10627_10674[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (2))){
var state_10605__$1 = state_10605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10605__$1,(4),ch);
} else {
if((state_val_10606 === (23))){
var state_10605__$1 = state_10605;
var statearr_10628_10675 = state_10605__$1;
(statearr_10628_10675[(2)] = null);

(statearr_10628_10675[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (19))){
var inst_10536 = (state_10605[(8)]);
var inst_10586 = (state_10605[(11)]);
var inst_10588 = cljs.core.async.muxch_STAR_(inst_10586);
var state_10605__$1 = state_10605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10605__$1,(22),inst_10588,inst_10536);
} else {
if((state_val_10606 === (11))){
var inst_10560 = (state_10605[(10)]);
var inst_10546 = (state_10605[(15)]);
var inst_10560__$1 = cljs.core.seq(inst_10546);
var state_10605__$1 = (function (){var statearr_10629 = state_10605;
(statearr_10629[(10)] = inst_10560__$1);

return statearr_10629;
})();
if(inst_10560__$1){
var statearr_10630_10676 = state_10605__$1;
(statearr_10630_10676[(1)] = (13));

} else {
var statearr_10631_10677 = state_10605__$1;
(statearr_10631_10677[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (9))){
var inst_10582 = (state_10605[(2)]);
var state_10605__$1 = state_10605;
var statearr_10632_10678 = state_10605__$1;
(statearr_10632_10678[(2)] = inst_10582);

(statearr_10632_10678[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (5))){
var inst_10543 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_10544 = cljs.core.vals(inst_10543);
var inst_10545 = cljs.core.seq(inst_10544);
var inst_10546 = inst_10545;
var inst_10547 = null;
var inst_10548 = (0);
var inst_10549 = (0);
var state_10605__$1 = (function (){var statearr_10633 = state_10605;
(statearr_10633[(12)] = inst_10548);

(statearr_10633[(14)] = inst_10549);

(statearr_10633[(15)] = inst_10546);

(statearr_10633[(16)] = inst_10547);

return statearr_10633;
})();
var statearr_10634_10679 = state_10605__$1;
(statearr_10634_10679[(2)] = null);

(statearr_10634_10679[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (14))){
var state_10605__$1 = state_10605;
var statearr_10638_10680 = state_10605__$1;
(statearr_10638_10680[(2)] = null);

(statearr_10638_10680[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (16))){
var inst_10560 = (state_10605[(10)]);
var inst_10564 = cljs.core.chunk_first(inst_10560);
var inst_10565 = cljs.core.chunk_rest(inst_10560);
var inst_10566 = cljs.core.count(inst_10564);
var inst_10546 = inst_10565;
var inst_10547 = inst_10564;
var inst_10548 = inst_10566;
var inst_10549 = (0);
var state_10605__$1 = (function (){var statearr_10639 = state_10605;
(statearr_10639[(12)] = inst_10548);

(statearr_10639[(14)] = inst_10549);

(statearr_10639[(15)] = inst_10546);

(statearr_10639[(16)] = inst_10547);

return statearr_10639;
})();
var statearr_10640_10681 = state_10605__$1;
(statearr_10640_10681[(2)] = null);

(statearr_10640_10681[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (10))){
var inst_10548 = (state_10605[(12)]);
var inst_10549 = (state_10605[(14)]);
var inst_10546 = (state_10605[(15)]);
var inst_10547 = (state_10605[(16)]);
var inst_10554 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10547,inst_10549);
var inst_10555 = cljs.core.async.muxch_STAR_(inst_10554);
var inst_10556 = cljs.core.async.close_BANG_(inst_10555);
var inst_10557 = (inst_10549 + (1));
var tmp10635 = inst_10548;
var tmp10636 = inst_10546;
var tmp10637 = inst_10547;
var inst_10546__$1 = tmp10636;
var inst_10547__$1 = tmp10637;
var inst_10548__$1 = tmp10635;
var inst_10549__$1 = inst_10557;
var state_10605__$1 = (function (){var statearr_10641 = state_10605;
(statearr_10641[(12)] = inst_10548__$1);

(statearr_10641[(17)] = inst_10556);

(statearr_10641[(14)] = inst_10549__$1);

(statearr_10641[(15)] = inst_10546__$1);

(statearr_10641[(16)] = inst_10547__$1);

return statearr_10641;
})();
var statearr_10642_10682 = state_10605__$1;
(statearr_10642_10682[(2)] = null);

(statearr_10642_10682[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (18))){
var inst_10575 = (state_10605[(2)]);
var state_10605__$1 = state_10605;
var statearr_10643_10683 = state_10605__$1;
(statearr_10643_10683[(2)] = inst_10575);

(statearr_10643_10683[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10606 === (8))){
var inst_10548 = (state_10605[(12)]);
var inst_10549 = (state_10605[(14)]);
var inst_10551 = (inst_10549 < inst_10548);
var inst_10552 = inst_10551;
var state_10605__$1 = state_10605;
if(cljs.core.truth_(inst_10552)){
var statearr_10644_10684 = state_10605__$1;
(statearr_10644_10684[(1)] = (10));

} else {
var statearr_10645_10685 = state_10605__$1;
(statearr_10645_10685[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___10657,mults,ensure_mult,p))
;
return ((function (switch__8621__auto__,c__8735__auto___10657,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8622__auto__ = null;
var cljs$core$async$state_machine__8622__auto____0 = (function (){
var statearr_10649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10649[(0)] = cljs$core$async$state_machine__8622__auto__);

(statearr_10649[(1)] = (1));

return statearr_10649;
});
var cljs$core$async$state_machine__8622__auto____1 = (function (state_10605){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_10605);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e10650){if((e10650 instanceof Object)){
var ex__8625__auto__ = e10650;
var statearr_10651_10686 = state_10605;
(statearr_10651_10686[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10605);

return cljs.core.cst$kw$recur;
} else {
throw e10650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__10687 = state_10605;
state_10605 = G__10687;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$state_machine__8622__auto__ = function(state_10605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8622__auto____1.call(this,state_10605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8622__auto____0;
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8622__auto____1;
return cljs$core$async$state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___10657,mults,ensure_mult,p))
})();
var state__8737__auto__ = (function (){var statearr_10652 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_10652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___10657);

return statearr_10652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___10657,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args10688 = [];
var len__5729__auto___10691 = arguments.length;
var i__5730__auto___10692 = (0);
while(true){
if((i__5730__auto___10692 < len__5729__auto___10691)){
args10688.push((arguments[i__5730__auto___10692]));

var G__10693 = (i__5730__auto___10692 + (1));
i__5730__auto___10692 = G__10693;
continue;
} else {
}
break;
}

var G__10690 = args10688.length;
switch (G__10690) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10688.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args10695 = [];
var len__5729__auto___10698 = arguments.length;
var i__5730__auto___10699 = (0);
while(true){
if((i__5730__auto___10699 < len__5729__auto___10698)){
args10695.push((arguments[i__5730__auto___10699]));

var G__10700 = (i__5730__auto___10699 + (1));
i__5730__auto___10699 = G__10700;
continue;
} else {
}
break;
}

var G__10697 = args10695.length;
switch (G__10697) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10695.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args10702 = [];
var len__5729__auto___10773 = arguments.length;
var i__5730__auto___10774 = (0);
while(true){
if((i__5730__auto___10774 < len__5729__auto___10773)){
args10702.push((arguments[i__5730__auto___10774]));

var G__10775 = (i__5730__auto___10774 + (1));
i__5730__auto___10774 = G__10775;
continue;
} else {
}
break;
}

var G__10704 = args10702.length;
switch (G__10704) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10702.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__8735__auto___10777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___10777,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___10777,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10743){
var state_val_10744 = (state_10743[(1)]);
if((state_val_10744 === (7))){
var state_10743__$1 = state_10743;
var statearr_10745_10778 = state_10743__$1;
(statearr_10745_10778[(2)] = null);

(statearr_10745_10778[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10744 === (1))){
var state_10743__$1 = state_10743;
var statearr_10746_10779 = state_10743__$1;
(statearr_10746_10779[(2)] = null);

(statearr_10746_10779[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10744 === (4))){
var inst_10707 = (state_10743[(7)]);
var inst_10709 = (inst_10707 < cnt);
var state_10743__$1 = state_10743;
if(cljs.core.truth_(inst_10709)){
var statearr_10747_10780 = state_10743__$1;
(statearr_10747_10780[(1)] = (6));

} else {
var statearr_10748_10781 = state_10743__$1;
(statearr_10748_10781[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10744 === (15))){
var inst_10739 = (state_10743[(2)]);
var state_10743__$1 = state_10743;
var statearr_10749_10782 = state_10743__$1;
(statearr_10749_10782[(2)] = inst_10739);

(statearr_10749_10782[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10744 === (13))){
var inst_10732 = cljs.core.async.close_BANG_(out);
var state_10743__$1 = state_10743;
var statearr_10750_10783 = state_10743__$1;
(statearr_10750_10783[(2)] = inst_10732);

(statearr_10750_10783[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10744 === (6))){
var state_10743__$1 = state_10743;
var statearr_10751_10784 = state_10743__$1;
(statearr_10751_10784[(2)] = null);

(statearr_10751_10784[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10744 === (3))){
var inst_10741 = (state_10743[(2)]);
var state_10743__$1 = state_10743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10743__$1,inst_10741);
} else {
if((state_val_10744 === (12))){
var inst_10729 = (state_10743[(8)]);
var inst_10729__$1 = (state_10743[(2)]);
var inst_10730 = cljs.core.some(cljs.core.nil_QMARK_,inst_10729__$1);
var state_10743__$1 = (function (){var statearr_10752 = state_10743;
(statearr_10752[(8)] = inst_10729__$1);

return statearr_10752;
})();
if(cljs.core.truth_(inst_10730)){
var statearr_10753_10785 = state_10743__$1;
(statearr_10753_10785[(1)] = (13));

} else {
var statearr_10754_10786 = state_10743__$1;
(statearr_10754_10786[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10744 === (2))){
var inst_10706 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_10707 = (0);
var state_10743__$1 = (function (){var statearr_10755 = state_10743;
(statearr_10755[(7)] = inst_10707);

(statearr_10755[(9)] = inst_10706);

return statearr_10755;
})();
var statearr_10756_10787 = state_10743__$1;
(statearr_10756_10787[(2)] = null);

(statearr_10756_10787[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10744 === (11))){
var inst_10707 = (state_10743[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_10743,(10),Object,null,(9));
var inst_10716 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_10707) : chs__$1.call(null,inst_10707));
var inst_10717 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_10707) : done.call(null,inst_10707));
var inst_10718 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_10716,inst_10717);
var state_10743__$1 = state_10743;
var statearr_10757_10788 = state_10743__$1;
(statearr_10757_10788[(2)] = inst_10718);


cljs.core.async.impl.ioc_helpers.process_exception(state_10743__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_10744 === (9))){
var inst_10707 = (state_10743[(7)]);
var inst_10720 = (state_10743[(2)]);
var inst_10721 = (inst_10707 + (1));
var inst_10707__$1 = inst_10721;
var state_10743__$1 = (function (){var statearr_10758 = state_10743;
(statearr_10758[(10)] = inst_10720);

(statearr_10758[(7)] = inst_10707__$1);

return statearr_10758;
})();
var statearr_10759_10789 = state_10743__$1;
(statearr_10759_10789[(2)] = null);

(statearr_10759_10789[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10744 === (5))){
var inst_10727 = (state_10743[(2)]);
var state_10743__$1 = (function (){var statearr_10760 = state_10743;
(statearr_10760[(11)] = inst_10727);

return statearr_10760;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10743__$1,(12),dchan);
} else {
if((state_val_10744 === (14))){
var inst_10729 = (state_10743[(8)]);
var inst_10734 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_10729);
var state_10743__$1 = state_10743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10743__$1,(16),out,inst_10734);
} else {
if((state_val_10744 === (16))){
var inst_10736 = (state_10743[(2)]);
var state_10743__$1 = (function (){var statearr_10761 = state_10743;
(statearr_10761[(12)] = inst_10736);

return statearr_10761;
})();
var statearr_10762_10790 = state_10743__$1;
(statearr_10762_10790[(2)] = null);

(statearr_10762_10790[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10744 === (10))){
var inst_10711 = (state_10743[(2)]);
var inst_10712 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_10743__$1 = (function (){var statearr_10763 = state_10743;
(statearr_10763[(13)] = inst_10711);

return statearr_10763;
})();
var statearr_10764_10791 = state_10743__$1;
(statearr_10764_10791[(2)] = inst_10712);


cljs.core.async.impl.ioc_helpers.process_exception(state_10743__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_10744 === (8))){
var inst_10725 = (state_10743[(2)]);
var state_10743__$1 = state_10743;
var statearr_10765_10792 = state_10743__$1;
(statearr_10765_10792[(2)] = inst_10725);

(statearr_10765_10792[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___10777,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8621__auto__,c__8735__auto___10777,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8622__auto__ = null;
var cljs$core$async$state_machine__8622__auto____0 = (function (){
var statearr_10769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10769[(0)] = cljs$core$async$state_machine__8622__auto__);

(statearr_10769[(1)] = (1));

return statearr_10769;
});
var cljs$core$async$state_machine__8622__auto____1 = (function (state_10743){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_10743);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e10770){if((e10770 instanceof Object)){
var ex__8625__auto__ = e10770;
var statearr_10771_10793 = state_10743;
(statearr_10771_10793[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10743);

return cljs.core.cst$kw$recur;
} else {
throw e10770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__10794 = state_10743;
state_10743 = G__10794;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$state_machine__8622__auto__ = function(state_10743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8622__auto____1.call(this,state_10743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8622__auto____0;
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8622__auto____1;
return cljs$core$async$state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___10777,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8737__auto__ = (function (){var statearr_10772 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_10772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___10777);

return statearr_10772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___10777,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args10796 = [];
var len__5729__auto___10852 = arguments.length;
var i__5730__auto___10853 = (0);
while(true){
if((i__5730__auto___10853 < len__5729__auto___10852)){
args10796.push((arguments[i__5730__auto___10853]));

var G__10854 = (i__5730__auto___10853 + (1));
i__5730__auto___10853 = G__10854;
continue;
} else {
}
break;
}

var G__10798 = args10796.length;
switch (G__10798) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10796.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8735__auto___10856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___10856,out){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___10856,out){
return (function (state_10828){
var state_val_10829 = (state_10828[(1)]);
if((state_val_10829 === (7))){
var inst_10807 = (state_10828[(7)]);
var inst_10808 = (state_10828[(8)]);
var inst_10807__$1 = (state_10828[(2)]);
var inst_10808__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10807__$1,(0),null);
var inst_10809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10807__$1,(1),null);
var inst_10810 = (inst_10808__$1 == null);
var state_10828__$1 = (function (){var statearr_10830 = state_10828;
(statearr_10830[(7)] = inst_10807__$1);

(statearr_10830[(8)] = inst_10808__$1);

(statearr_10830[(9)] = inst_10809);

return statearr_10830;
})();
if(cljs.core.truth_(inst_10810)){
var statearr_10831_10857 = state_10828__$1;
(statearr_10831_10857[(1)] = (8));

} else {
var statearr_10832_10858 = state_10828__$1;
(statearr_10832_10858[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10829 === (1))){
var inst_10799 = cljs.core.vec(chs);
var inst_10800 = inst_10799;
var state_10828__$1 = (function (){var statearr_10833 = state_10828;
(statearr_10833[(10)] = inst_10800);

return statearr_10833;
})();
var statearr_10834_10859 = state_10828__$1;
(statearr_10834_10859[(2)] = null);

(statearr_10834_10859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10829 === (4))){
var inst_10800 = (state_10828[(10)]);
var state_10828__$1 = state_10828;
return cljs.core.async.ioc_alts_BANG_(state_10828__$1,(7),inst_10800);
} else {
if((state_val_10829 === (6))){
var inst_10824 = (state_10828[(2)]);
var state_10828__$1 = state_10828;
var statearr_10835_10860 = state_10828__$1;
(statearr_10835_10860[(2)] = inst_10824);

(statearr_10835_10860[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10829 === (3))){
var inst_10826 = (state_10828[(2)]);
var state_10828__$1 = state_10828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10828__$1,inst_10826);
} else {
if((state_val_10829 === (2))){
var inst_10800 = (state_10828[(10)]);
var inst_10802 = cljs.core.count(inst_10800);
var inst_10803 = (inst_10802 > (0));
var state_10828__$1 = state_10828;
if(cljs.core.truth_(inst_10803)){
var statearr_10837_10861 = state_10828__$1;
(statearr_10837_10861[(1)] = (4));

} else {
var statearr_10838_10862 = state_10828__$1;
(statearr_10838_10862[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10829 === (11))){
var inst_10800 = (state_10828[(10)]);
var inst_10817 = (state_10828[(2)]);
var tmp10836 = inst_10800;
var inst_10800__$1 = tmp10836;
var state_10828__$1 = (function (){var statearr_10839 = state_10828;
(statearr_10839[(10)] = inst_10800__$1);

(statearr_10839[(11)] = inst_10817);

return statearr_10839;
})();
var statearr_10840_10863 = state_10828__$1;
(statearr_10840_10863[(2)] = null);

(statearr_10840_10863[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10829 === (9))){
var inst_10808 = (state_10828[(8)]);
var state_10828__$1 = state_10828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10828__$1,(11),out,inst_10808);
} else {
if((state_val_10829 === (5))){
var inst_10822 = cljs.core.async.close_BANG_(out);
var state_10828__$1 = state_10828;
var statearr_10841_10864 = state_10828__$1;
(statearr_10841_10864[(2)] = inst_10822);

(statearr_10841_10864[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10829 === (10))){
var inst_10820 = (state_10828[(2)]);
var state_10828__$1 = state_10828;
var statearr_10842_10865 = state_10828__$1;
(statearr_10842_10865[(2)] = inst_10820);

(statearr_10842_10865[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10829 === (8))){
var inst_10807 = (state_10828[(7)]);
var inst_10800 = (state_10828[(10)]);
var inst_10808 = (state_10828[(8)]);
var inst_10809 = (state_10828[(9)]);
var inst_10812 = (function (){var cs = inst_10800;
var vec__10805 = inst_10807;
var v = inst_10808;
var c = inst_10809;
return ((function (cs,vec__10805,v,c,inst_10807,inst_10800,inst_10808,inst_10809,state_val_10829,c__8735__auto___10856,out){
return (function (p1__10795_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__10795_SHARP_);
});
;})(cs,vec__10805,v,c,inst_10807,inst_10800,inst_10808,inst_10809,state_val_10829,c__8735__auto___10856,out))
})();
var inst_10813 = cljs.core.filterv(inst_10812,inst_10800);
var inst_10800__$1 = inst_10813;
var state_10828__$1 = (function (){var statearr_10843 = state_10828;
(statearr_10843[(10)] = inst_10800__$1);

return statearr_10843;
})();
var statearr_10844_10866 = state_10828__$1;
(statearr_10844_10866[(2)] = null);

(statearr_10844_10866[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___10856,out))
;
return ((function (switch__8621__auto__,c__8735__auto___10856,out){
return (function() {
var cljs$core$async$state_machine__8622__auto__ = null;
var cljs$core$async$state_machine__8622__auto____0 = (function (){
var statearr_10848 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10848[(0)] = cljs$core$async$state_machine__8622__auto__);

(statearr_10848[(1)] = (1));

return statearr_10848;
});
var cljs$core$async$state_machine__8622__auto____1 = (function (state_10828){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_10828);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e10849){if((e10849 instanceof Object)){
var ex__8625__auto__ = e10849;
var statearr_10850_10867 = state_10828;
(statearr_10850_10867[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10828);

return cljs.core.cst$kw$recur;
} else {
throw e10849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__10868 = state_10828;
state_10828 = G__10868;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$state_machine__8622__auto__ = function(state_10828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8622__auto____1.call(this,state_10828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8622__auto____0;
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8622__auto____1;
return cljs$core$async$state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___10856,out))
})();
var state__8737__auto__ = (function (){var statearr_10851 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_10851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___10856);

return statearr_10851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___10856,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args10869 = [];
var len__5729__auto___10918 = arguments.length;
var i__5730__auto___10919 = (0);
while(true){
if((i__5730__auto___10919 < len__5729__auto___10918)){
args10869.push((arguments[i__5730__auto___10919]));

var G__10920 = (i__5730__auto___10919 + (1));
i__5730__auto___10919 = G__10920;
continue;
} else {
}
break;
}

var G__10871 = args10869.length;
switch (G__10871) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10869.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8735__auto___10922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___10922,out){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___10922,out){
return (function (state_10895){
var state_val_10896 = (state_10895[(1)]);
if((state_val_10896 === (7))){
var inst_10877 = (state_10895[(7)]);
var inst_10877__$1 = (state_10895[(2)]);
var inst_10878 = (inst_10877__$1 == null);
var inst_10879 = cljs.core.not(inst_10878);
var state_10895__$1 = (function (){var statearr_10897 = state_10895;
(statearr_10897[(7)] = inst_10877__$1);

return statearr_10897;
})();
if(inst_10879){
var statearr_10898_10923 = state_10895__$1;
(statearr_10898_10923[(1)] = (8));

} else {
var statearr_10899_10924 = state_10895__$1;
(statearr_10899_10924[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10896 === (1))){
var inst_10872 = (0);
var state_10895__$1 = (function (){var statearr_10900 = state_10895;
(statearr_10900[(8)] = inst_10872);

return statearr_10900;
})();
var statearr_10901_10925 = state_10895__$1;
(statearr_10901_10925[(2)] = null);

(statearr_10901_10925[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10896 === (4))){
var state_10895__$1 = state_10895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10895__$1,(7),ch);
} else {
if((state_val_10896 === (6))){
var inst_10890 = (state_10895[(2)]);
var state_10895__$1 = state_10895;
var statearr_10902_10926 = state_10895__$1;
(statearr_10902_10926[(2)] = inst_10890);

(statearr_10902_10926[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10896 === (3))){
var inst_10892 = (state_10895[(2)]);
var inst_10893 = cljs.core.async.close_BANG_(out);
var state_10895__$1 = (function (){var statearr_10903 = state_10895;
(statearr_10903[(9)] = inst_10892);

return statearr_10903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10895__$1,inst_10893);
} else {
if((state_val_10896 === (2))){
var inst_10872 = (state_10895[(8)]);
var inst_10874 = (inst_10872 < n);
var state_10895__$1 = state_10895;
if(cljs.core.truth_(inst_10874)){
var statearr_10904_10927 = state_10895__$1;
(statearr_10904_10927[(1)] = (4));

} else {
var statearr_10905_10928 = state_10895__$1;
(statearr_10905_10928[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10896 === (11))){
var inst_10872 = (state_10895[(8)]);
var inst_10882 = (state_10895[(2)]);
var inst_10883 = (inst_10872 + (1));
var inst_10872__$1 = inst_10883;
var state_10895__$1 = (function (){var statearr_10906 = state_10895;
(statearr_10906[(10)] = inst_10882);

(statearr_10906[(8)] = inst_10872__$1);

return statearr_10906;
})();
var statearr_10907_10929 = state_10895__$1;
(statearr_10907_10929[(2)] = null);

(statearr_10907_10929[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10896 === (9))){
var state_10895__$1 = state_10895;
var statearr_10908_10930 = state_10895__$1;
(statearr_10908_10930[(2)] = null);

(statearr_10908_10930[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10896 === (5))){
var state_10895__$1 = state_10895;
var statearr_10909_10931 = state_10895__$1;
(statearr_10909_10931[(2)] = null);

(statearr_10909_10931[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10896 === (10))){
var inst_10887 = (state_10895[(2)]);
var state_10895__$1 = state_10895;
var statearr_10910_10932 = state_10895__$1;
(statearr_10910_10932[(2)] = inst_10887);

(statearr_10910_10932[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10896 === (8))){
var inst_10877 = (state_10895[(7)]);
var state_10895__$1 = state_10895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10895__$1,(11),out,inst_10877);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___10922,out))
;
return ((function (switch__8621__auto__,c__8735__auto___10922,out){
return (function() {
var cljs$core$async$state_machine__8622__auto__ = null;
var cljs$core$async$state_machine__8622__auto____0 = (function (){
var statearr_10914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10914[(0)] = cljs$core$async$state_machine__8622__auto__);

(statearr_10914[(1)] = (1));

return statearr_10914;
});
var cljs$core$async$state_machine__8622__auto____1 = (function (state_10895){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_10895);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e10915){if((e10915 instanceof Object)){
var ex__8625__auto__ = e10915;
var statearr_10916_10933 = state_10895;
(statearr_10916_10933[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10895);

return cljs.core.cst$kw$recur;
} else {
throw e10915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__10934 = state_10895;
state_10895 = G__10934;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$state_machine__8622__auto__ = function(state_10895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8622__auto____1.call(this,state_10895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8622__auto____0;
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8622__auto____1;
return cljs$core$async$state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___10922,out))
})();
var state__8737__auto__ = (function (){var statearr_10917 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_10917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___10922);

return statearr_10917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___10922,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10944 = (function (map_LT_,f,ch,meta10945){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10945 = meta10945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10946,meta10945__$1){
var self__ = this;
var _10946__$1 = this;
return (new cljs.core.async.t_cljs$core$async10944(self__.map_LT_,self__.f,self__.ch,meta10945__$1));
});

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10946){
var self__ = this;
var _10946__$1 = this;
return self__.meta10945;
});

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async10947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10947 = (function (map_LT_,f,ch,meta10945,_,fn1,meta10948){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10945 = meta10945;
this._ = _;
this.fn1 = fn1;
this.meta10948 = meta10948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10949,meta10948__$1){
var self__ = this;
var _10949__$1 = this;
return (new cljs.core.async.t_cljs$core$async10947(self__.map_LT_,self__.f,self__.ch,self__.meta10945,self__._,self__.fn1,meta10948__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10949){
var self__ = this;
var _10949__$1 = this;
return self__.meta10948;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10947.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10947.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10935_SHARP_){
var G__10950 = (((p1__10935_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__10935_SHARP_) : self__.f.call(null,p1__10935_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__10950) : f1.call(null,G__10950));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10947.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10945,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async10944], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta10948], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10947";

cljs.core.async.t_cljs$core$async10947.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async10947");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async10947 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10947(map_LT___$1,f__$1,ch__$1,meta10945__$1,___$2,fn1__$1,meta10948){
return (new cljs.core.async.t_cljs$core$async10947(map_LT___$1,f__$1,ch__$1,meta10945__$1,___$2,fn1__$1,meta10948));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10947(self__.map_LT_,self__.f,self__.ch,self__.meta10945,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4659__auto__ = ret;
if(cljs.core.truth_(and__4659__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__4659__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__10951 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__10951) : self__.f.call(null,G__10951));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10945], null);
});

cljs.core.async.t_cljs$core$async10944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10944";

cljs.core.async.t_cljs$core$async10944.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async10944");
});

cljs.core.async.__GT_t_cljs$core$async10944 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10944(map_LT___$1,f__$1,ch__$1,meta10945){
return (new cljs.core.async.t_cljs$core$async10944(map_LT___$1,f__$1,ch__$1,meta10945));
});

}

return (new cljs.core.async.t_cljs$core$async10944(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10955 = (function (map_GT_,f,ch,meta10956){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10956 = meta10956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10957,meta10956__$1){
var self__ = this;
var _10957__$1 = this;
return (new cljs.core.async.t_cljs$core$async10955(self__.map_GT_,self__.f,self__.ch,meta10956__$1));
});

cljs.core.async.t_cljs$core$async10955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10957){
var self__ = this;
var _10957__$1 = this;
return self__.meta10956;
});

cljs.core.async.t_cljs$core$async10955.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async10955.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10955.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async10955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10956], null);
});

cljs.core.async.t_cljs$core$async10955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10955";

cljs.core.async.t_cljs$core$async10955.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async10955");
});

cljs.core.async.__GT_t_cljs$core$async10955 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10955(map_GT___$1,f__$1,ch__$1,meta10956){
return (new cljs.core.async.t_cljs$core$async10955(map_GT___$1,f__$1,ch__$1,meta10956));
});

}

return (new cljs.core.async.t_cljs$core$async10955(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async10961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10961 = (function (filter_GT_,p,ch,meta10962){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10962 = meta10962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10963,meta10962__$1){
var self__ = this;
var _10963__$1 = this;
return (new cljs.core.async.t_cljs$core$async10961(self__.filter_GT_,self__.p,self__.ch,meta10962__$1));
});

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10963){
var self__ = this;
var _10963__$1 = this;
return self__.meta10962;
});

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10962], null);
});

cljs.core.async.t_cljs$core$async10961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10961";

cljs.core.async.t_cljs$core$async10961.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async10961");
});

cljs.core.async.__GT_t_cljs$core$async10961 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10961(filter_GT___$1,p__$1,ch__$1,meta10962){
return (new cljs.core.async.t_cljs$core$async10961(filter_GT___$1,p__$1,ch__$1,meta10962));
});

}

return (new cljs.core.async.t_cljs$core$async10961(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args10964 = [];
var len__5729__auto___11008 = arguments.length;
var i__5730__auto___11009 = (0);
while(true){
if((i__5730__auto___11009 < len__5729__auto___11008)){
args10964.push((arguments[i__5730__auto___11009]));

var G__11010 = (i__5730__auto___11009 + (1));
i__5730__auto___11009 = G__11010;
continue;
} else {
}
break;
}

var G__10966 = args10964.length;
switch (G__10966) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10964.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8735__auto___11012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___11012,out){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___11012,out){
return (function (state_10987){
var state_val_10988 = (state_10987[(1)]);
if((state_val_10988 === (7))){
var inst_10983 = (state_10987[(2)]);
var state_10987__$1 = state_10987;
var statearr_10989_11013 = state_10987__$1;
(statearr_10989_11013[(2)] = inst_10983);

(statearr_10989_11013[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10988 === (1))){
var state_10987__$1 = state_10987;
var statearr_10990_11014 = state_10987__$1;
(statearr_10990_11014[(2)] = null);

(statearr_10990_11014[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10988 === (4))){
var inst_10969 = (state_10987[(7)]);
var inst_10969__$1 = (state_10987[(2)]);
var inst_10970 = (inst_10969__$1 == null);
var state_10987__$1 = (function (){var statearr_10991 = state_10987;
(statearr_10991[(7)] = inst_10969__$1);

return statearr_10991;
})();
if(cljs.core.truth_(inst_10970)){
var statearr_10992_11015 = state_10987__$1;
(statearr_10992_11015[(1)] = (5));

} else {
var statearr_10993_11016 = state_10987__$1;
(statearr_10993_11016[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10988 === (6))){
var inst_10969 = (state_10987[(7)]);
var inst_10974 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10969) : p.call(null,inst_10969));
var state_10987__$1 = state_10987;
if(cljs.core.truth_(inst_10974)){
var statearr_10994_11017 = state_10987__$1;
(statearr_10994_11017[(1)] = (8));

} else {
var statearr_10995_11018 = state_10987__$1;
(statearr_10995_11018[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10988 === (3))){
var inst_10985 = (state_10987[(2)]);
var state_10987__$1 = state_10987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10987__$1,inst_10985);
} else {
if((state_val_10988 === (2))){
var state_10987__$1 = state_10987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10987__$1,(4),ch);
} else {
if((state_val_10988 === (11))){
var inst_10977 = (state_10987[(2)]);
var state_10987__$1 = state_10987;
var statearr_10996_11019 = state_10987__$1;
(statearr_10996_11019[(2)] = inst_10977);

(statearr_10996_11019[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10988 === (9))){
var state_10987__$1 = state_10987;
var statearr_10997_11020 = state_10987__$1;
(statearr_10997_11020[(2)] = null);

(statearr_10997_11020[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10988 === (5))){
var inst_10972 = cljs.core.async.close_BANG_(out);
var state_10987__$1 = state_10987;
var statearr_10998_11021 = state_10987__$1;
(statearr_10998_11021[(2)] = inst_10972);

(statearr_10998_11021[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10988 === (10))){
var inst_10980 = (state_10987[(2)]);
var state_10987__$1 = (function (){var statearr_10999 = state_10987;
(statearr_10999[(8)] = inst_10980);

return statearr_10999;
})();
var statearr_11000_11022 = state_10987__$1;
(statearr_11000_11022[(2)] = null);

(statearr_11000_11022[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10988 === (8))){
var inst_10969 = (state_10987[(7)]);
var state_10987__$1 = state_10987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10987__$1,(11),out,inst_10969);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___11012,out))
;
return ((function (switch__8621__auto__,c__8735__auto___11012,out){
return (function() {
var cljs$core$async$state_machine__8622__auto__ = null;
var cljs$core$async$state_machine__8622__auto____0 = (function (){
var statearr_11004 = [null,null,null,null,null,null,null,null,null];
(statearr_11004[(0)] = cljs$core$async$state_machine__8622__auto__);

(statearr_11004[(1)] = (1));

return statearr_11004;
});
var cljs$core$async$state_machine__8622__auto____1 = (function (state_10987){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_10987);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11005){if((e11005 instanceof Object)){
var ex__8625__auto__ = e11005;
var statearr_11006_11023 = state_10987;
(statearr_11006_11023[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10987);

return cljs.core.cst$kw$recur;
} else {
throw e11005;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11024 = state_10987;
state_10987 = G__11024;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$state_machine__8622__auto__ = function(state_10987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8622__auto____1.call(this,state_10987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8622__auto____0;
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8622__auto____1;
return cljs$core$async$state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___11012,out))
})();
var state__8737__auto__ = (function (){var statearr_11007 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___11012);

return statearr_11007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___11012,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11025 = [];
var len__5729__auto___11028 = arguments.length;
var i__5730__auto___11029 = (0);
while(true){
if((i__5730__auto___11029 < len__5729__auto___11028)){
args11025.push((arguments[i__5730__auto___11029]));

var G__11030 = (i__5730__auto___11029 + (1));
i__5730__auto___11029 = G__11030;
continue;
} else {
}
break;
}

var G__11027 = args11025.length;
switch (G__11027) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11025.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto__){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto__){
return (function (state_11197){
var state_val_11198 = (state_11197[(1)]);
if((state_val_11198 === (7))){
var inst_11193 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11199_11240 = state_11197__$1;
(statearr_11199_11240[(2)] = inst_11193);

(statearr_11199_11240[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (20))){
var inst_11163 = (state_11197[(7)]);
var inst_11174 = (state_11197[(2)]);
var inst_11175 = cljs.core.next(inst_11163);
var inst_11149 = inst_11175;
var inst_11150 = null;
var inst_11151 = (0);
var inst_11152 = (0);
var state_11197__$1 = (function (){var statearr_11200 = state_11197;
(statearr_11200[(8)] = inst_11150);

(statearr_11200[(9)] = inst_11152);

(statearr_11200[(10)] = inst_11149);

(statearr_11200[(11)] = inst_11151);

(statearr_11200[(12)] = inst_11174);

return statearr_11200;
})();
var statearr_11201_11241 = state_11197__$1;
(statearr_11201_11241[(2)] = null);

(statearr_11201_11241[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (1))){
var state_11197__$1 = state_11197;
var statearr_11202_11242 = state_11197__$1;
(statearr_11202_11242[(2)] = null);

(statearr_11202_11242[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (4))){
var inst_11138 = (state_11197[(13)]);
var inst_11138__$1 = (state_11197[(2)]);
var inst_11139 = (inst_11138__$1 == null);
var state_11197__$1 = (function (){var statearr_11203 = state_11197;
(statearr_11203[(13)] = inst_11138__$1);

return statearr_11203;
})();
if(cljs.core.truth_(inst_11139)){
var statearr_11204_11243 = state_11197__$1;
(statearr_11204_11243[(1)] = (5));

} else {
var statearr_11205_11244 = state_11197__$1;
(statearr_11205_11244[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (15))){
var state_11197__$1 = state_11197;
var statearr_11209_11245 = state_11197__$1;
(statearr_11209_11245[(2)] = null);

(statearr_11209_11245[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (21))){
var state_11197__$1 = state_11197;
var statearr_11210_11246 = state_11197__$1;
(statearr_11210_11246[(2)] = null);

(statearr_11210_11246[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (13))){
var inst_11150 = (state_11197[(8)]);
var inst_11152 = (state_11197[(9)]);
var inst_11149 = (state_11197[(10)]);
var inst_11151 = (state_11197[(11)]);
var inst_11159 = (state_11197[(2)]);
var inst_11160 = (inst_11152 + (1));
var tmp11206 = inst_11150;
var tmp11207 = inst_11149;
var tmp11208 = inst_11151;
var inst_11149__$1 = tmp11207;
var inst_11150__$1 = tmp11206;
var inst_11151__$1 = tmp11208;
var inst_11152__$1 = inst_11160;
var state_11197__$1 = (function (){var statearr_11211 = state_11197;
(statearr_11211[(8)] = inst_11150__$1);

(statearr_11211[(9)] = inst_11152__$1);

(statearr_11211[(10)] = inst_11149__$1);

(statearr_11211[(11)] = inst_11151__$1);

(statearr_11211[(14)] = inst_11159);

return statearr_11211;
})();
var statearr_11212_11247 = state_11197__$1;
(statearr_11212_11247[(2)] = null);

(statearr_11212_11247[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (22))){
var state_11197__$1 = state_11197;
var statearr_11213_11248 = state_11197__$1;
(statearr_11213_11248[(2)] = null);

(statearr_11213_11248[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (6))){
var inst_11138 = (state_11197[(13)]);
var inst_11147 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11138) : f.call(null,inst_11138));
var inst_11148 = cljs.core.seq(inst_11147);
var inst_11149 = inst_11148;
var inst_11150 = null;
var inst_11151 = (0);
var inst_11152 = (0);
var state_11197__$1 = (function (){var statearr_11214 = state_11197;
(statearr_11214[(8)] = inst_11150);

(statearr_11214[(9)] = inst_11152);

(statearr_11214[(10)] = inst_11149);

(statearr_11214[(11)] = inst_11151);

return statearr_11214;
})();
var statearr_11215_11249 = state_11197__$1;
(statearr_11215_11249[(2)] = null);

(statearr_11215_11249[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (17))){
var inst_11163 = (state_11197[(7)]);
var inst_11167 = cljs.core.chunk_first(inst_11163);
var inst_11168 = cljs.core.chunk_rest(inst_11163);
var inst_11169 = cljs.core.count(inst_11167);
var inst_11149 = inst_11168;
var inst_11150 = inst_11167;
var inst_11151 = inst_11169;
var inst_11152 = (0);
var state_11197__$1 = (function (){var statearr_11216 = state_11197;
(statearr_11216[(8)] = inst_11150);

(statearr_11216[(9)] = inst_11152);

(statearr_11216[(10)] = inst_11149);

(statearr_11216[(11)] = inst_11151);

return statearr_11216;
})();
var statearr_11217_11250 = state_11197__$1;
(statearr_11217_11250[(2)] = null);

(statearr_11217_11250[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (3))){
var inst_11195 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11197__$1,inst_11195);
} else {
if((state_val_11198 === (12))){
var inst_11183 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11218_11251 = state_11197__$1;
(statearr_11218_11251[(2)] = inst_11183);

(statearr_11218_11251[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (2))){
var state_11197__$1 = state_11197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11197__$1,(4),in$);
} else {
if((state_val_11198 === (23))){
var inst_11191 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11219_11252 = state_11197__$1;
(statearr_11219_11252[(2)] = inst_11191);

(statearr_11219_11252[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (19))){
var inst_11178 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11220_11253 = state_11197__$1;
(statearr_11220_11253[(2)] = inst_11178);

(statearr_11220_11253[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (11))){
var inst_11163 = (state_11197[(7)]);
var inst_11149 = (state_11197[(10)]);
var inst_11163__$1 = cljs.core.seq(inst_11149);
var state_11197__$1 = (function (){var statearr_11221 = state_11197;
(statearr_11221[(7)] = inst_11163__$1);

return statearr_11221;
})();
if(inst_11163__$1){
var statearr_11222_11254 = state_11197__$1;
(statearr_11222_11254[(1)] = (14));

} else {
var statearr_11223_11255 = state_11197__$1;
(statearr_11223_11255[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (9))){
var inst_11185 = (state_11197[(2)]);
var inst_11186 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_11197__$1 = (function (){var statearr_11224 = state_11197;
(statearr_11224[(15)] = inst_11185);

return statearr_11224;
})();
if(cljs.core.truth_(inst_11186)){
var statearr_11225_11256 = state_11197__$1;
(statearr_11225_11256[(1)] = (21));

} else {
var statearr_11226_11257 = state_11197__$1;
(statearr_11226_11257[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (5))){
var inst_11141 = cljs.core.async.close_BANG_(out);
var state_11197__$1 = state_11197;
var statearr_11227_11258 = state_11197__$1;
(statearr_11227_11258[(2)] = inst_11141);

(statearr_11227_11258[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (14))){
var inst_11163 = (state_11197[(7)]);
var inst_11165 = cljs.core.chunked_seq_QMARK_(inst_11163);
var state_11197__$1 = state_11197;
if(inst_11165){
var statearr_11228_11259 = state_11197__$1;
(statearr_11228_11259[(1)] = (17));

} else {
var statearr_11229_11260 = state_11197__$1;
(statearr_11229_11260[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (16))){
var inst_11181 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11230_11261 = state_11197__$1;
(statearr_11230_11261[(2)] = inst_11181);

(statearr_11230_11261[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11198 === (10))){
var inst_11150 = (state_11197[(8)]);
var inst_11152 = (state_11197[(9)]);
var inst_11157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11150,inst_11152);
var state_11197__$1 = state_11197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11197__$1,(13),out,inst_11157);
} else {
if((state_val_11198 === (18))){
var inst_11163 = (state_11197[(7)]);
var inst_11172 = cljs.core.first(inst_11163);
var state_11197__$1 = state_11197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11197__$1,(20),out,inst_11172);
} else {
if((state_val_11198 === (8))){
var inst_11152 = (state_11197[(9)]);
var inst_11151 = (state_11197[(11)]);
var inst_11154 = (inst_11152 < inst_11151);
var inst_11155 = inst_11154;
var state_11197__$1 = state_11197;
if(cljs.core.truth_(inst_11155)){
var statearr_11231_11262 = state_11197__$1;
(statearr_11231_11262[(1)] = (10));

} else {
var statearr_11232_11263 = state_11197__$1;
(statearr_11232_11263[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto__))
;
return ((function (switch__8621__auto__,c__8735__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8622__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8622__auto____0 = (function (){
var statearr_11236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11236[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8622__auto__);

(statearr_11236[(1)] = (1));

return statearr_11236;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8622__auto____1 = (function (state_11197){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11197);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11237){if((e11237 instanceof Object)){
var ex__8625__auto__ = e11237;
var statearr_11238_11264 = state_11197;
(statearr_11238_11264[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11197);

return cljs.core.cst$kw$recur;
} else {
throw e11237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11265 = state_11197;
state_11197 = G__11265;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8622__auto__ = function(state_11197){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8622__auto____1.call(this,state_11197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8622__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8622__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto__))
})();
var state__8737__auto__ = (function (){var statearr_11239 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto__);

return statearr_11239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto__))
);

return c__8735__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11266 = [];
var len__5729__auto___11269 = arguments.length;
var i__5730__auto___11270 = (0);
while(true){
if((i__5730__auto___11270 < len__5729__auto___11269)){
args11266.push((arguments[i__5730__auto___11270]));

var G__11271 = (i__5730__auto___11270 + (1));
i__5730__auto___11270 = G__11271;
continue;
} else {
}
break;
}

var G__11268 = args11266.length;
switch (G__11268) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11266.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11273 = [];
var len__5729__auto___11276 = arguments.length;
var i__5730__auto___11277 = (0);
while(true){
if((i__5730__auto___11277 < len__5729__auto___11276)){
args11273.push((arguments[i__5730__auto___11277]));

var G__11278 = (i__5730__auto___11277 + (1));
i__5730__auto___11277 = G__11278;
continue;
} else {
}
break;
}

var G__11275 = args11273.length;
switch (G__11275) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11273.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11280 = [];
var len__5729__auto___11331 = arguments.length;
var i__5730__auto___11332 = (0);
while(true){
if((i__5730__auto___11332 < len__5729__auto___11331)){
args11280.push((arguments[i__5730__auto___11332]));

var G__11333 = (i__5730__auto___11332 + (1));
i__5730__auto___11332 = G__11333;
continue;
} else {
}
break;
}

var G__11282 = args11280.length;
switch (G__11282) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11280.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8735__auto___11335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___11335,out){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___11335,out){
return (function (state_11306){
var state_val_11307 = (state_11306[(1)]);
if((state_val_11307 === (7))){
var inst_11301 = (state_11306[(2)]);
var state_11306__$1 = state_11306;
var statearr_11308_11336 = state_11306__$1;
(statearr_11308_11336[(2)] = inst_11301);

(statearr_11308_11336[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11307 === (1))){
var inst_11283 = null;
var state_11306__$1 = (function (){var statearr_11309 = state_11306;
(statearr_11309[(7)] = inst_11283);

return statearr_11309;
})();
var statearr_11310_11337 = state_11306__$1;
(statearr_11310_11337[(2)] = null);

(statearr_11310_11337[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11307 === (4))){
var inst_11286 = (state_11306[(8)]);
var inst_11286__$1 = (state_11306[(2)]);
var inst_11287 = (inst_11286__$1 == null);
var inst_11288 = cljs.core.not(inst_11287);
var state_11306__$1 = (function (){var statearr_11311 = state_11306;
(statearr_11311[(8)] = inst_11286__$1);

return statearr_11311;
})();
if(inst_11288){
var statearr_11312_11338 = state_11306__$1;
(statearr_11312_11338[(1)] = (5));

} else {
var statearr_11313_11339 = state_11306__$1;
(statearr_11313_11339[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11307 === (6))){
var state_11306__$1 = state_11306;
var statearr_11314_11340 = state_11306__$1;
(statearr_11314_11340[(2)] = null);

(statearr_11314_11340[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11307 === (3))){
var inst_11303 = (state_11306[(2)]);
var inst_11304 = cljs.core.async.close_BANG_(out);
var state_11306__$1 = (function (){var statearr_11315 = state_11306;
(statearr_11315[(9)] = inst_11303);

return statearr_11315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11306__$1,inst_11304);
} else {
if((state_val_11307 === (2))){
var state_11306__$1 = state_11306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11306__$1,(4),ch);
} else {
if((state_val_11307 === (11))){
var inst_11286 = (state_11306[(8)]);
var inst_11295 = (state_11306[(2)]);
var inst_11283 = inst_11286;
var state_11306__$1 = (function (){var statearr_11316 = state_11306;
(statearr_11316[(7)] = inst_11283);

(statearr_11316[(10)] = inst_11295);

return statearr_11316;
})();
var statearr_11317_11341 = state_11306__$1;
(statearr_11317_11341[(2)] = null);

(statearr_11317_11341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11307 === (9))){
var inst_11286 = (state_11306[(8)]);
var state_11306__$1 = state_11306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11306__$1,(11),out,inst_11286);
} else {
if((state_val_11307 === (5))){
var inst_11283 = (state_11306[(7)]);
var inst_11286 = (state_11306[(8)]);
var inst_11290 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11286,inst_11283);
var state_11306__$1 = state_11306;
if(inst_11290){
var statearr_11319_11342 = state_11306__$1;
(statearr_11319_11342[(1)] = (8));

} else {
var statearr_11320_11343 = state_11306__$1;
(statearr_11320_11343[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11307 === (10))){
var inst_11298 = (state_11306[(2)]);
var state_11306__$1 = state_11306;
var statearr_11321_11344 = state_11306__$1;
(statearr_11321_11344[(2)] = inst_11298);

(statearr_11321_11344[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11307 === (8))){
var inst_11283 = (state_11306[(7)]);
var tmp11318 = inst_11283;
var inst_11283__$1 = tmp11318;
var state_11306__$1 = (function (){var statearr_11322 = state_11306;
(statearr_11322[(7)] = inst_11283__$1);

return statearr_11322;
})();
var statearr_11323_11345 = state_11306__$1;
(statearr_11323_11345[(2)] = null);

(statearr_11323_11345[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___11335,out))
;
return ((function (switch__8621__auto__,c__8735__auto___11335,out){
return (function() {
var cljs$core$async$state_machine__8622__auto__ = null;
var cljs$core$async$state_machine__8622__auto____0 = (function (){
var statearr_11327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11327[(0)] = cljs$core$async$state_machine__8622__auto__);

(statearr_11327[(1)] = (1));

return statearr_11327;
});
var cljs$core$async$state_machine__8622__auto____1 = (function (state_11306){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11306);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11328){if((e11328 instanceof Object)){
var ex__8625__auto__ = e11328;
var statearr_11329_11346 = state_11306;
(statearr_11329_11346[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11306);

return cljs.core.cst$kw$recur;
} else {
throw e11328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11347 = state_11306;
state_11306 = G__11347;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$state_machine__8622__auto__ = function(state_11306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8622__auto____1.call(this,state_11306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8622__auto____0;
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8622__auto____1;
return cljs$core$async$state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___11335,out))
})();
var state__8737__auto__ = (function (){var statearr_11330 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___11335);

return statearr_11330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___11335,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11348 = [];
var len__5729__auto___11418 = arguments.length;
var i__5730__auto___11419 = (0);
while(true){
if((i__5730__auto___11419 < len__5729__auto___11418)){
args11348.push((arguments[i__5730__auto___11419]));

var G__11420 = (i__5730__auto___11419 + (1));
i__5730__auto___11419 = G__11420;
continue;
} else {
}
break;
}

var G__11350 = args11348.length;
switch (G__11350) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11348.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8735__auto___11422 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___11422,out){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___11422,out){
return (function (state_11388){
var state_val_11389 = (state_11388[(1)]);
if((state_val_11389 === (7))){
var inst_11384 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11390_11423 = state_11388__$1;
(statearr_11390_11423[(2)] = inst_11384);

(statearr_11390_11423[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11389 === (1))){
var inst_11351 = (new Array(n));
var inst_11352 = inst_11351;
var inst_11353 = (0);
var state_11388__$1 = (function (){var statearr_11391 = state_11388;
(statearr_11391[(7)] = inst_11352);

(statearr_11391[(8)] = inst_11353);

return statearr_11391;
})();
var statearr_11392_11424 = state_11388__$1;
(statearr_11392_11424[(2)] = null);

(statearr_11392_11424[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11389 === (4))){
var inst_11356 = (state_11388[(9)]);
var inst_11356__$1 = (state_11388[(2)]);
var inst_11357 = (inst_11356__$1 == null);
var inst_11358 = cljs.core.not(inst_11357);
var state_11388__$1 = (function (){var statearr_11393 = state_11388;
(statearr_11393[(9)] = inst_11356__$1);

return statearr_11393;
})();
if(inst_11358){
var statearr_11394_11425 = state_11388__$1;
(statearr_11394_11425[(1)] = (5));

} else {
var statearr_11395_11426 = state_11388__$1;
(statearr_11395_11426[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11389 === (15))){
var inst_11378 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11396_11427 = state_11388__$1;
(statearr_11396_11427[(2)] = inst_11378);

(statearr_11396_11427[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11389 === (13))){
var state_11388__$1 = state_11388;
var statearr_11397_11428 = state_11388__$1;
(statearr_11397_11428[(2)] = null);

(statearr_11397_11428[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11389 === (6))){
var inst_11353 = (state_11388[(8)]);
var inst_11374 = (inst_11353 > (0));
var state_11388__$1 = state_11388;
if(cljs.core.truth_(inst_11374)){
var statearr_11398_11429 = state_11388__$1;
(statearr_11398_11429[(1)] = (12));

} else {
var statearr_11399_11430 = state_11388__$1;
(statearr_11399_11430[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11389 === (3))){
var inst_11386 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11388__$1,inst_11386);
} else {
if((state_val_11389 === (12))){
var inst_11352 = (state_11388[(7)]);
var inst_11376 = cljs.core.vec(inst_11352);
var state_11388__$1 = state_11388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11388__$1,(15),out,inst_11376);
} else {
if((state_val_11389 === (2))){
var state_11388__$1 = state_11388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11388__$1,(4),ch);
} else {
if((state_val_11389 === (11))){
var inst_11368 = (state_11388[(2)]);
var inst_11369 = (new Array(n));
var inst_11352 = inst_11369;
var inst_11353 = (0);
var state_11388__$1 = (function (){var statearr_11400 = state_11388;
(statearr_11400[(7)] = inst_11352);

(statearr_11400[(10)] = inst_11368);

(statearr_11400[(8)] = inst_11353);

return statearr_11400;
})();
var statearr_11401_11431 = state_11388__$1;
(statearr_11401_11431[(2)] = null);

(statearr_11401_11431[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11389 === (9))){
var inst_11352 = (state_11388[(7)]);
var inst_11366 = cljs.core.vec(inst_11352);
var state_11388__$1 = state_11388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11388__$1,(11),out,inst_11366);
} else {
if((state_val_11389 === (5))){
var inst_11352 = (state_11388[(7)]);
var inst_11353 = (state_11388[(8)]);
var inst_11361 = (state_11388[(11)]);
var inst_11356 = (state_11388[(9)]);
var inst_11360 = (inst_11352[inst_11353] = inst_11356);
var inst_11361__$1 = (inst_11353 + (1));
var inst_11362 = (inst_11361__$1 < n);
var state_11388__$1 = (function (){var statearr_11402 = state_11388;
(statearr_11402[(11)] = inst_11361__$1);

(statearr_11402[(12)] = inst_11360);

return statearr_11402;
})();
if(cljs.core.truth_(inst_11362)){
var statearr_11403_11432 = state_11388__$1;
(statearr_11403_11432[(1)] = (8));

} else {
var statearr_11404_11433 = state_11388__$1;
(statearr_11404_11433[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11389 === (14))){
var inst_11381 = (state_11388[(2)]);
var inst_11382 = cljs.core.async.close_BANG_(out);
var state_11388__$1 = (function (){var statearr_11406 = state_11388;
(statearr_11406[(13)] = inst_11381);

return statearr_11406;
})();
var statearr_11407_11434 = state_11388__$1;
(statearr_11407_11434[(2)] = inst_11382);

(statearr_11407_11434[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11389 === (10))){
var inst_11372 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11408_11435 = state_11388__$1;
(statearr_11408_11435[(2)] = inst_11372);

(statearr_11408_11435[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11389 === (8))){
var inst_11352 = (state_11388[(7)]);
var inst_11361 = (state_11388[(11)]);
var tmp11405 = inst_11352;
var inst_11352__$1 = tmp11405;
var inst_11353 = inst_11361;
var state_11388__$1 = (function (){var statearr_11409 = state_11388;
(statearr_11409[(7)] = inst_11352__$1);

(statearr_11409[(8)] = inst_11353);

return statearr_11409;
})();
var statearr_11410_11436 = state_11388__$1;
(statearr_11410_11436[(2)] = null);

(statearr_11410_11436[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___11422,out))
;
return ((function (switch__8621__auto__,c__8735__auto___11422,out){
return (function() {
var cljs$core$async$state_machine__8622__auto__ = null;
var cljs$core$async$state_machine__8622__auto____0 = (function (){
var statearr_11414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11414[(0)] = cljs$core$async$state_machine__8622__auto__);

(statearr_11414[(1)] = (1));

return statearr_11414;
});
var cljs$core$async$state_machine__8622__auto____1 = (function (state_11388){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11388);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11415){if((e11415 instanceof Object)){
var ex__8625__auto__ = e11415;
var statearr_11416_11437 = state_11388;
(statearr_11416_11437[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11388);

return cljs.core.cst$kw$recur;
} else {
throw e11415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11438 = state_11388;
state_11388 = G__11438;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$state_machine__8622__auto__ = function(state_11388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8622__auto____1.call(this,state_11388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8622__auto____0;
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8622__auto____1;
return cljs$core$async$state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___11422,out))
})();
var state__8737__auto__ = (function (){var statearr_11417 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___11422);

return statearr_11417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___11422,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11439 = [];
var len__5729__auto___11513 = arguments.length;
var i__5730__auto___11514 = (0);
while(true){
if((i__5730__auto___11514 < len__5729__auto___11513)){
args11439.push((arguments[i__5730__auto___11514]));

var G__11515 = (i__5730__auto___11514 + (1));
i__5730__auto___11514 = G__11515;
continue;
} else {
}
break;
}

var G__11441 = args11439.length;
switch (G__11441) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11439.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8735__auto___11517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___11517,out){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___11517,out){
return (function (state_11483){
var state_val_11484 = (state_11483[(1)]);
if((state_val_11484 === (7))){
var inst_11479 = (state_11483[(2)]);
var state_11483__$1 = state_11483;
var statearr_11485_11518 = state_11483__$1;
(statearr_11485_11518[(2)] = inst_11479);

(statearr_11485_11518[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11484 === (1))){
var inst_11442 = [];
var inst_11443 = inst_11442;
var inst_11444 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_11483__$1 = (function (){var statearr_11486 = state_11483;
(statearr_11486[(7)] = inst_11443);

(statearr_11486[(8)] = inst_11444);

return statearr_11486;
})();
var statearr_11487_11519 = state_11483__$1;
(statearr_11487_11519[(2)] = null);

(statearr_11487_11519[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11484 === (4))){
var inst_11447 = (state_11483[(9)]);
var inst_11447__$1 = (state_11483[(2)]);
var inst_11448 = (inst_11447__$1 == null);
var inst_11449 = cljs.core.not(inst_11448);
var state_11483__$1 = (function (){var statearr_11488 = state_11483;
(statearr_11488[(9)] = inst_11447__$1);

return statearr_11488;
})();
if(inst_11449){
var statearr_11489_11520 = state_11483__$1;
(statearr_11489_11520[(1)] = (5));

} else {
var statearr_11490_11521 = state_11483__$1;
(statearr_11490_11521[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11484 === (15))){
var inst_11473 = (state_11483[(2)]);
var state_11483__$1 = state_11483;
var statearr_11491_11522 = state_11483__$1;
(statearr_11491_11522[(2)] = inst_11473);

(statearr_11491_11522[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11484 === (13))){
var state_11483__$1 = state_11483;
var statearr_11492_11523 = state_11483__$1;
(statearr_11492_11523[(2)] = null);

(statearr_11492_11523[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11484 === (6))){
var inst_11443 = (state_11483[(7)]);
var inst_11468 = inst_11443.length;
var inst_11469 = (inst_11468 > (0));
var state_11483__$1 = state_11483;
if(cljs.core.truth_(inst_11469)){
var statearr_11493_11524 = state_11483__$1;
(statearr_11493_11524[(1)] = (12));

} else {
var statearr_11494_11525 = state_11483__$1;
(statearr_11494_11525[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11484 === (3))){
var inst_11481 = (state_11483[(2)]);
var state_11483__$1 = state_11483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11483__$1,inst_11481);
} else {
if((state_val_11484 === (12))){
var inst_11443 = (state_11483[(7)]);
var inst_11471 = cljs.core.vec(inst_11443);
var state_11483__$1 = state_11483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11483__$1,(15),out,inst_11471);
} else {
if((state_val_11484 === (2))){
var state_11483__$1 = state_11483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11483__$1,(4),ch);
} else {
if((state_val_11484 === (11))){
var inst_11447 = (state_11483[(9)]);
var inst_11451 = (state_11483[(10)]);
var inst_11461 = (state_11483[(2)]);
var inst_11462 = [];
var inst_11463 = inst_11462.push(inst_11447);
var inst_11443 = inst_11462;
var inst_11444 = inst_11451;
var state_11483__$1 = (function (){var statearr_11495 = state_11483;
(statearr_11495[(7)] = inst_11443);

(statearr_11495[(8)] = inst_11444);

(statearr_11495[(11)] = inst_11463);

(statearr_11495[(12)] = inst_11461);

return statearr_11495;
})();
var statearr_11496_11526 = state_11483__$1;
(statearr_11496_11526[(2)] = null);

(statearr_11496_11526[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11484 === (9))){
var inst_11443 = (state_11483[(7)]);
var inst_11459 = cljs.core.vec(inst_11443);
var state_11483__$1 = state_11483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11483__$1,(11),out,inst_11459);
} else {
if((state_val_11484 === (5))){
var inst_11447 = (state_11483[(9)]);
var inst_11444 = (state_11483[(8)]);
var inst_11451 = (state_11483[(10)]);
var inst_11451__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11447) : f.call(null,inst_11447));
var inst_11452 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11451__$1,inst_11444);
var inst_11453 = cljs.core.keyword_identical_QMARK_(inst_11444,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_11454 = (inst_11452) || (inst_11453);
var state_11483__$1 = (function (){var statearr_11497 = state_11483;
(statearr_11497[(10)] = inst_11451__$1);

return statearr_11497;
})();
if(cljs.core.truth_(inst_11454)){
var statearr_11498_11527 = state_11483__$1;
(statearr_11498_11527[(1)] = (8));

} else {
var statearr_11499_11528 = state_11483__$1;
(statearr_11499_11528[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11484 === (14))){
var inst_11476 = (state_11483[(2)]);
var inst_11477 = cljs.core.async.close_BANG_(out);
var state_11483__$1 = (function (){var statearr_11501 = state_11483;
(statearr_11501[(13)] = inst_11476);

return statearr_11501;
})();
var statearr_11502_11529 = state_11483__$1;
(statearr_11502_11529[(2)] = inst_11477);

(statearr_11502_11529[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11484 === (10))){
var inst_11466 = (state_11483[(2)]);
var state_11483__$1 = state_11483;
var statearr_11503_11530 = state_11483__$1;
(statearr_11503_11530[(2)] = inst_11466);

(statearr_11503_11530[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11484 === (8))){
var inst_11447 = (state_11483[(9)]);
var inst_11443 = (state_11483[(7)]);
var inst_11451 = (state_11483[(10)]);
var inst_11456 = inst_11443.push(inst_11447);
var tmp11500 = inst_11443;
var inst_11443__$1 = tmp11500;
var inst_11444 = inst_11451;
var state_11483__$1 = (function (){var statearr_11504 = state_11483;
(statearr_11504[(7)] = inst_11443__$1);

(statearr_11504[(14)] = inst_11456);

(statearr_11504[(8)] = inst_11444);

return statearr_11504;
})();
var statearr_11505_11531 = state_11483__$1;
(statearr_11505_11531[(2)] = null);

(statearr_11505_11531[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8735__auto___11517,out))
;
return ((function (switch__8621__auto__,c__8735__auto___11517,out){
return (function() {
var cljs$core$async$state_machine__8622__auto__ = null;
var cljs$core$async$state_machine__8622__auto____0 = (function (){
var statearr_11509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11509[(0)] = cljs$core$async$state_machine__8622__auto__);

(statearr_11509[(1)] = (1));

return statearr_11509;
});
var cljs$core$async$state_machine__8622__auto____1 = (function (state_11483){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11483);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11510){if((e11510 instanceof Object)){
var ex__8625__auto__ = e11510;
var statearr_11511_11532 = state_11483;
(statearr_11511_11532[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11483);

return cljs.core.cst$kw$recur;
} else {
throw e11510;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11533 = state_11483;
state_11483 = G__11533;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
cljs$core$async$state_machine__8622__auto__ = function(state_11483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8622__auto____1.call(this,state_11483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8622__auto____0;
cljs$core$async$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8622__auto____1;
return cljs$core$async$state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___11517,out))
})();
var state__8737__auto__ = (function (){var statearr_11512 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___11517);

return statearr_11512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___11517,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
