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
var args11690 = [];
var len__5729__auto___11696 = arguments.length;
var i__5730__auto___11697 = (0);
while(true){
if((i__5730__auto___11697 < len__5729__auto___11696)){
args11690.push((arguments[i__5730__auto___11697]));

var G__11698 = (i__5730__auto___11697 + (1));
i__5730__auto___11697 = G__11698;
continue;
} else {
}
break;
}

var G__11692 = args11690.length;
switch (G__11692) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11690.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async11693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11693 = (function (f,blockable,meta11694){
this.f = f;
this.blockable = blockable;
this.meta11694 = meta11694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11695,meta11694__$1){
var self__ = this;
var _11695__$1 = this;
return (new cljs.core.async.t_cljs$core$async11693(self__.f,self__.blockable,meta11694__$1));
});

cljs.core.async.t_cljs$core$async11693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11695){
var self__ = this;
var _11695__$1 = this;
return self__.meta11694;
});

cljs.core.async.t_cljs$core$async11693.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11693.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async11693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta11694], null);
});

cljs.core.async.t_cljs$core$async11693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11693";

cljs.core.async.t_cljs$core$async11693.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async11693");
});

cljs.core.async.__GT_t_cljs$core$async11693 = (function cljs$core$async$__GT_t_cljs$core$async11693(f__$1,blockable__$1,meta11694){
return (new cljs.core.async.t_cljs$core$async11693(f__$1,blockable__$1,meta11694));
});

}

return (new cljs.core.async.t_cljs$core$async11693(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args11702 = [];
var len__5729__auto___11705 = arguments.length;
var i__5730__auto___11706 = (0);
while(true){
if((i__5730__auto___11706 < len__5729__auto___11705)){
args11702.push((arguments[i__5730__auto___11706]));

var G__11707 = (i__5730__auto___11706 + (1));
i__5730__auto___11706 = G__11707;
continue;
} else {
}
break;
}

var G__11704 = args11702.length;
switch (G__11704) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11702.length)].join('')));

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
var args11709 = [];
var len__5729__auto___11712 = arguments.length;
var i__5730__auto___11713 = (0);
while(true){
if((i__5730__auto___11713 < len__5729__auto___11712)){
args11709.push((arguments[i__5730__auto___11713]));

var G__11714 = (i__5730__auto___11713 + (1));
i__5730__auto___11713 = G__11714;
continue;
} else {
}
break;
}

var G__11711 = args11709.length;
switch (G__11711) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11709.length)].join('')));

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
var args11716 = [];
var len__5729__auto___11719 = arguments.length;
var i__5730__auto___11720 = (0);
while(true){
if((i__5730__auto___11720 < len__5729__auto___11719)){
args11716.push((arguments[i__5730__auto___11720]));

var G__11721 = (i__5730__auto___11720 + (1));
i__5730__auto___11720 = G__11721;
continue;
} else {
}
break;
}

var G__11718 = args11716.length;
switch (G__11718) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11716.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_11723 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_11723) : fn1.call(null,val_11723));
} else {
cljs.core.async.impl.dispatch.run(((function (val_11723,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_11723) : fn1.call(null,val_11723));
});})(val_11723,ret))
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
var args11724 = [];
var len__5729__auto___11727 = arguments.length;
var i__5730__auto___11728 = (0);
while(true){
if((i__5730__auto___11728 < len__5729__auto___11727)){
args11724.push((arguments[i__5730__auto___11728]));

var G__11729 = (i__5730__auto___11728 + (1));
i__5730__auto___11728 = G__11729;
continue;
} else {
}
break;
}

var G__11726 = args11724.length;
switch (G__11726) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11724.length)].join('')));

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
var n__5574__auto___11731 = n;
var x_11732 = (0);
while(true){
if((x_11732 < n__5574__auto___11731)){
(a[x_11732] = (0));

var G__11733 = (x_11732 + (1));
x_11732 = G__11733;
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

var G__11734 = (i + (1));
i = G__11734;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async11738 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11738 = (function (alt_flag,flag,meta11739){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11739 = meta11739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11740,meta11739__$1){
var self__ = this;
var _11740__$1 = this;
return (new cljs.core.async.t_cljs$core$async11738(self__.alt_flag,self__.flag,meta11739__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11740){
var self__ = this;
var _11740__$1 = this;
return self__.meta11739;
});})(flag))
;

cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11738.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta11739], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11738";

cljs.core.async.t_cljs$core$async11738.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async11738");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11738 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11738(alt_flag__$1,flag__$1,meta11739){
return (new cljs.core.async.t_cljs$core$async11738(alt_flag__$1,flag__$1,meta11739));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11738(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11744 = (function (alt_handler,flag,cb,meta11745){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11745 = meta11745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11746,meta11745__$1){
var self__ = this;
var _11746__$1 = this;
return (new cljs.core.async.t_cljs$core$async11744(self__.alt_handler,self__.flag,self__.cb,meta11745__$1));
});

cljs.core.async.t_cljs$core$async11744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11746){
var self__ = this;
var _11746__$1 = this;
return self__.meta11745;
});

cljs.core.async.t_cljs$core$async11744.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async11744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta11745], null);
});

cljs.core.async.t_cljs$core$async11744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11744";

cljs.core.async.t_cljs$core$async11744.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async11744");
});

cljs.core.async.__GT_t_cljs$core$async11744 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11744(alt_handler__$1,flag__$1,cb__$1,meta11745){
return (new cljs.core.async.t_cljs$core$async11744(alt_handler__$1,flag__$1,cb__$1,meta11745));
});

}

return (new cljs.core.async.t_cljs$core$async11744(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11747_SHARP_){
var G__11751 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11747_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11751) : fret.call(null,G__11751));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11748_SHARP_){
var G__11752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11748_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11752) : fret.call(null,G__11752));
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
var G__11753 = (i + (1));
i = G__11753;
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
var len__5729__auto___11759 = arguments.length;
var i__5730__auto___11760 = (0);
while(true){
if((i__5730__auto___11760 < len__5729__auto___11759)){
args__5736__auto__.push((arguments[i__5730__auto___11760]));

var G__11761 = (i__5730__auto___11760 + (1));
i__5730__auto___11760 = G__11761;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11756){
var map__11757 = p__11756;
var map__11757__$1 = ((((!((map__11757 == null)))?((((map__11757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11757):map__11757);
var opts = map__11757__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11754){
var G__11755 = cljs.core.first(seq11754);
var seq11754__$1 = cljs.core.next(seq11754);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11755,seq11754__$1);
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
var args11762 = [];
var len__5729__auto___11812 = arguments.length;
var i__5730__auto___11813 = (0);
while(true){
if((i__5730__auto___11813 < len__5729__auto___11812)){
args11762.push((arguments[i__5730__auto___11813]));

var G__11814 = (i__5730__auto___11813 + (1));
i__5730__auto___11813 = G__11814;
continue;
} else {
}
break;
}

var G__11764 = args11762.length;
switch (G__11764) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11762.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11645__auto___11816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___11816){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___11816){
return (function (state_11788){
var state_val_11789 = (state_11788[(1)]);
if((state_val_11789 === (7))){
var inst_11784 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
var statearr_11790_11817 = state_11788__$1;
(statearr_11790_11817[(2)] = inst_11784);

(statearr_11790_11817[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11789 === (1))){
var state_11788__$1 = state_11788;
var statearr_11791_11818 = state_11788__$1;
(statearr_11791_11818[(2)] = null);

(statearr_11791_11818[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11789 === (4))){
var inst_11767 = (state_11788[(7)]);
var inst_11767__$1 = (state_11788[(2)]);
var inst_11768 = (inst_11767__$1 == null);
var state_11788__$1 = (function (){var statearr_11792 = state_11788;
(statearr_11792[(7)] = inst_11767__$1);

return statearr_11792;
})();
if(cljs.core.truth_(inst_11768)){
var statearr_11793_11819 = state_11788__$1;
(statearr_11793_11819[(1)] = (5));

} else {
var statearr_11794_11820 = state_11788__$1;
(statearr_11794_11820[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11789 === (13))){
var state_11788__$1 = state_11788;
var statearr_11795_11821 = state_11788__$1;
(statearr_11795_11821[(2)] = null);

(statearr_11795_11821[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11789 === (6))){
var inst_11767 = (state_11788[(7)]);
var state_11788__$1 = state_11788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11788__$1,(11),to,inst_11767);
} else {
if((state_val_11789 === (3))){
var inst_11786 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11788__$1,inst_11786);
} else {
if((state_val_11789 === (12))){
var state_11788__$1 = state_11788;
var statearr_11796_11822 = state_11788__$1;
(statearr_11796_11822[(2)] = null);

(statearr_11796_11822[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11789 === (2))){
var state_11788__$1 = state_11788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11788__$1,(4),from);
} else {
if((state_val_11789 === (11))){
var inst_11777 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
if(cljs.core.truth_(inst_11777)){
var statearr_11797_11823 = state_11788__$1;
(statearr_11797_11823[(1)] = (12));

} else {
var statearr_11798_11824 = state_11788__$1;
(statearr_11798_11824[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11789 === (9))){
var state_11788__$1 = state_11788;
var statearr_11799_11825 = state_11788__$1;
(statearr_11799_11825[(2)] = null);

(statearr_11799_11825[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11789 === (5))){
var state_11788__$1 = state_11788;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11800_11826 = state_11788__$1;
(statearr_11800_11826[(1)] = (8));

} else {
var statearr_11801_11827 = state_11788__$1;
(statearr_11801_11827[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11789 === (14))){
var inst_11782 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
var statearr_11802_11828 = state_11788__$1;
(statearr_11802_11828[(2)] = inst_11782);

(statearr_11802_11828[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11789 === (10))){
var inst_11774 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
var statearr_11803_11829 = state_11788__$1;
(statearr_11803_11829[(2)] = inst_11774);

(statearr_11803_11829[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11789 === (8))){
var inst_11771 = cljs.core.async.close_BANG_(to);
var state_11788__$1 = state_11788;
var statearr_11804_11830 = state_11788__$1;
(statearr_11804_11830[(2)] = inst_11771);

(statearr_11804_11830[(1)] = (10));


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
});})(c__11645__auto___11816))
;
return ((function (switch__11531__auto__,c__11645__auto___11816){
return (function() {
var cljs$core$async$state_machine__11532__auto__ = null;
var cljs$core$async$state_machine__11532__auto____0 = (function (){
var statearr_11808 = [null,null,null,null,null,null,null,null];
(statearr_11808[(0)] = cljs$core$async$state_machine__11532__auto__);

(statearr_11808[(1)] = (1));

return statearr_11808;
});
var cljs$core$async$state_machine__11532__auto____1 = (function (state_11788){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_11788);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e11809){if((e11809 instanceof Object)){
var ex__11535__auto__ = e11809;
var statearr_11810_11831 = state_11788;
(statearr_11810_11831[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11788);

return cljs.core.cst$kw$recur;
} else {
throw e11809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__11832 = state_11788;
state_11788 = G__11832;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$state_machine__11532__auto__ = function(state_11788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11532__auto____1.call(this,state_11788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11532__auto____0;
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11532__auto____1;
return cljs$core$async$state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___11816))
})();
var state__11647__auto__ = (function (){var statearr_11811 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_11811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___11816);

return statearr_11811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___11816))
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
return (function (p__12016){
var vec__12017 = p__12016;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12017,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12017,(1),null);
var job = vec__12017;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11645__auto___12199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___12199,res,vec__12017,v,p,job,jobs,results){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___12199,res,vec__12017,v,p,job,jobs,results){
return (function (state_12022){
var state_val_12023 = (state_12022[(1)]);
if((state_val_12023 === (1))){
var state_12022__$1 = state_12022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12022__$1,(2),res,v);
} else {
if((state_val_12023 === (2))){
var inst_12019 = (state_12022[(2)]);
var inst_12020 = cljs.core.async.close_BANG_(res);
var state_12022__$1 = (function (){var statearr_12024 = state_12022;
(statearr_12024[(7)] = inst_12019);

return statearr_12024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12022__$1,inst_12020);
} else {
return null;
}
}
});})(c__11645__auto___12199,res,vec__12017,v,p,job,jobs,results))
;
return ((function (switch__11531__auto__,c__11645__auto___12199,res,vec__12017,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0 = (function (){
var statearr_12028 = [null,null,null,null,null,null,null,null];
(statearr_12028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__);

(statearr_12028[(1)] = (1));

return statearr_12028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1 = (function (state_12022){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_12022);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e12029){if((e12029 instanceof Object)){
var ex__11535__auto__ = e12029;
var statearr_12030_12200 = state_12022;
(statearr_12030_12200[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12022);

return cljs.core.cst$kw$recur;
} else {
throw e12029;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__12201 = state_12022;
state_12022 = G__12201;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__ = function(state_12022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1.call(this,state_12022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___12199,res,vec__12017,v,p,job,jobs,results))
})();
var state__11647__auto__ = (function (){var statearr_12031 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_12031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___12199);

return statearr_12031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___12199,res,vec__12017,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12032){
var vec__12033 = p__12032;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12033,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12033,(1),null);
var job = vec__12033;
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
var n__5574__auto___12202 = n;
var __12203 = (0);
while(true){
if((__12203 < n__5574__auto___12202)){
var G__12034_12204 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12034_12204) {
case "compute":
var c__11645__auto___12206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12203,c__11645__auto___12206,G__12034_12204,n__5574__auto___12202,jobs,results,process,async){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (__12203,c__11645__auto___12206,G__12034_12204,n__5574__auto___12202,jobs,results,process,async){
return (function (state_12047){
var state_val_12048 = (state_12047[(1)]);
if((state_val_12048 === (1))){
var state_12047__$1 = state_12047;
var statearr_12049_12207 = state_12047__$1;
(statearr_12049_12207[(2)] = null);

(statearr_12049_12207[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12048 === (2))){
var state_12047__$1 = state_12047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12047__$1,(4),jobs);
} else {
if((state_val_12048 === (3))){
var inst_12045 = (state_12047[(2)]);
var state_12047__$1 = state_12047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12047__$1,inst_12045);
} else {
if((state_val_12048 === (4))){
var inst_12037 = (state_12047[(2)]);
var inst_12038 = process(inst_12037);
var state_12047__$1 = state_12047;
if(cljs.core.truth_(inst_12038)){
var statearr_12050_12208 = state_12047__$1;
(statearr_12050_12208[(1)] = (5));

} else {
var statearr_12051_12209 = state_12047__$1;
(statearr_12051_12209[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12048 === (5))){
var state_12047__$1 = state_12047;
var statearr_12052_12210 = state_12047__$1;
(statearr_12052_12210[(2)] = null);

(statearr_12052_12210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12048 === (6))){
var state_12047__$1 = state_12047;
var statearr_12053_12211 = state_12047__$1;
(statearr_12053_12211[(2)] = null);

(statearr_12053_12211[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12048 === (7))){
var inst_12043 = (state_12047[(2)]);
var state_12047__$1 = state_12047;
var statearr_12054_12212 = state_12047__$1;
(statearr_12054_12212[(2)] = inst_12043);

(statearr_12054_12212[(1)] = (3));


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
});})(__12203,c__11645__auto___12206,G__12034_12204,n__5574__auto___12202,jobs,results,process,async))
;
return ((function (__12203,switch__11531__auto__,c__11645__auto___12206,G__12034_12204,n__5574__auto___12202,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0 = (function (){
var statearr_12058 = [null,null,null,null,null,null,null];
(statearr_12058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__);

(statearr_12058[(1)] = (1));

return statearr_12058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1 = (function (state_12047){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_12047);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e12059){if((e12059 instanceof Object)){
var ex__11535__auto__ = e12059;
var statearr_12060_12213 = state_12047;
(statearr_12060_12213[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12047);

return cljs.core.cst$kw$recur;
} else {
throw e12059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__12214 = state_12047;
state_12047 = G__12214;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__ = function(state_12047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1.call(this,state_12047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__;
})()
;})(__12203,switch__11531__auto__,c__11645__auto___12206,G__12034_12204,n__5574__auto___12202,jobs,results,process,async))
})();
var state__11647__auto__ = (function (){var statearr_12061 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_12061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___12206);

return statearr_12061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(__12203,c__11645__auto___12206,G__12034_12204,n__5574__auto___12202,jobs,results,process,async))
);


break;
case "async":
var c__11645__auto___12215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12203,c__11645__auto___12215,G__12034_12204,n__5574__auto___12202,jobs,results,process,async){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (__12203,c__11645__auto___12215,G__12034_12204,n__5574__auto___12202,jobs,results,process,async){
return (function (state_12074){
var state_val_12075 = (state_12074[(1)]);
if((state_val_12075 === (1))){
var state_12074__$1 = state_12074;
var statearr_12076_12216 = state_12074__$1;
(statearr_12076_12216[(2)] = null);

(statearr_12076_12216[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12075 === (2))){
var state_12074__$1 = state_12074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12074__$1,(4),jobs);
} else {
if((state_val_12075 === (3))){
var inst_12072 = (state_12074[(2)]);
var state_12074__$1 = state_12074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12074__$1,inst_12072);
} else {
if((state_val_12075 === (4))){
var inst_12064 = (state_12074[(2)]);
var inst_12065 = async(inst_12064);
var state_12074__$1 = state_12074;
if(cljs.core.truth_(inst_12065)){
var statearr_12077_12217 = state_12074__$1;
(statearr_12077_12217[(1)] = (5));

} else {
var statearr_12078_12218 = state_12074__$1;
(statearr_12078_12218[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12075 === (5))){
var state_12074__$1 = state_12074;
var statearr_12079_12219 = state_12074__$1;
(statearr_12079_12219[(2)] = null);

(statearr_12079_12219[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12075 === (6))){
var state_12074__$1 = state_12074;
var statearr_12080_12220 = state_12074__$1;
(statearr_12080_12220[(2)] = null);

(statearr_12080_12220[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12075 === (7))){
var inst_12070 = (state_12074[(2)]);
var state_12074__$1 = state_12074;
var statearr_12081_12221 = state_12074__$1;
(statearr_12081_12221[(2)] = inst_12070);

(statearr_12081_12221[(1)] = (3));


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
});})(__12203,c__11645__auto___12215,G__12034_12204,n__5574__auto___12202,jobs,results,process,async))
;
return ((function (__12203,switch__11531__auto__,c__11645__auto___12215,G__12034_12204,n__5574__auto___12202,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0 = (function (){
var statearr_12085 = [null,null,null,null,null,null,null];
(statearr_12085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__);

(statearr_12085[(1)] = (1));

return statearr_12085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1 = (function (state_12074){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_12074);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e12086){if((e12086 instanceof Object)){
var ex__11535__auto__ = e12086;
var statearr_12087_12222 = state_12074;
(statearr_12087_12222[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12074);

return cljs.core.cst$kw$recur;
} else {
throw e12086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__12223 = state_12074;
state_12074 = G__12223;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__ = function(state_12074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1.call(this,state_12074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__;
})()
;})(__12203,switch__11531__auto__,c__11645__auto___12215,G__12034_12204,n__5574__auto___12202,jobs,results,process,async))
})();
var state__11647__auto__ = (function (){var statearr_12088 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_12088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___12215);

return statearr_12088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(__12203,c__11645__auto___12215,G__12034_12204,n__5574__auto___12202,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12224 = (__12203 + (1));
__12203 = G__12224;
continue;
} else {
}
break;
}

var c__11645__auto___12225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___12225,jobs,results,process,async){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___12225,jobs,results,process,async){
return (function (state_12110){
var state_val_12111 = (state_12110[(1)]);
if((state_val_12111 === (1))){
var state_12110__$1 = state_12110;
var statearr_12112_12226 = state_12110__$1;
(statearr_12112_12226[(2)] = null);

(statearr_12112_12226[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12111 === (2))){
var state_12110__$1 = state_12110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12110__$1,(4),from);
} else {
if((state_val_12111 === (3))){
var inst_12108 = (state_12110[(2)]);
var state_12110__$1 = state_12110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12110__$1,inst_12108);
} else {
if((state_val_12111 === (4))){
var inst_12091 = (state_12110[(7)]);
var inst_12091__$1 = (state_12110[(2)]);
var inst_12092 = (inst_12091__$1 == null);
var state_12110__$1 = (function (){var statearr_12113 = state_12110;
(statearr_12113[(7)] = inst_12091__$1);

return statearr_12113;
})();
if(cljs.core.truth_(inst_12092)){
var statearr_12114_12227 = state_12110__$1;
(statearr_12114_12227[(1)] = (5));

} else {
var statearr_12115_12228 = state_12110__$1;
(statearr_12115_12228[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12111 === (5))){
var inst_12094 = cljs.core.async.close_BANG_(jobs);
var state_12110__$1 = state_12110;
var statearr_12116_12229 = state_12110__$1;
(statearr_12116_12229[(2)] = inst_12094);

(statearr_12116_12229[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12111 === (6))){
var inst_12096 = (state_12110[(8)]);
var inst_12091 = (state_12110[(7)]);
var inst_12096__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12098 = [inst_12091,inst_12096__$1];
var inst_12099 = (new cljs.core.PersistentVector(null,2,(5),inst_12097,inst_12098,null));
var state_12110__$1 = (function (){var statearr_12117 = state_12110;
(statearr_12117[(8)] = inst_12096__$1);

return statearr_12117;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12110__$1,(8),jobs,inst_12099);
} else {
if((state_val_12111 === (7))){
var inst_12106 = (state_12110[(2)]);
var state_12110__$1 = state_12110;
var statearr_12118_12230 = state_12110__$1;
(statearr_12118_12230[(2)] = inst_12106);

(statearr_12118_12230[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12111 === (8))){
var inst_12096 = (state_12110[(8)]);
var inst_12101 = (state_12110[(2)]);
var state_12110__$1 = (function (){var statearr_12119 = state_12110;
(statearr_12119[(9)] = inst_12101);

return statearr_12119;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12110__$1,(9),results,inst_12096);
} else {
if((state_val_12111 === (9))){
var inst_12103 = (state_12110[(2)]);
var state_12110__$1 = (function (){var statearr_12120 = state_12110;
(statearr_12120[(10)] = inst_12103);

return statearr_12120;
})();
var statearr_12121_12231 = state_12110__$1;
(statearr_12121_12231[(2)] = null);

(statearr_12121_12231[(1)] = (2));


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
});})(c__11645__auto___12225,jobs,results,process,async))
;
return ((function (switch__11531__auto__,c__11645__auto___12225,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0 = (function (){
var statearr_12125 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__);

(statearr_12125[(1)] = (1));

return statearr_12125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1 = (function (state_12110){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_12110);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e12126){if((e12126 instanceof Object)){
var ex__11535__auto__ = e12126;
var statearr_12127_12232 = state_12110;
(statearr_12127_12232[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12110);

return cljs.core.cst$kw$recur;
} else {
throw e12126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__12233 = state_12110;
state_12110 = G__12233;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__ = function(state_12110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1.call(this,state_12110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___12225,jobs,results,process,async))
})();
var state__11647__auto__ = (function (){var statearr_12128 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_12128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___12225);

return statearr_12128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___12225,jobs,results,process,async))
);


var c__11645__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto__,jobs,results,process,async){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto__,jobs,results,process,async){
return (function (state_12166){
var state_val_12167 = (state_12166[(1)]);
if((state_val_12167 === (7))){
var inst_12162 = (state_12166[(2)]);
var state_12166__$1 = state_12166;
var statearr_12168_12234 = state_12166__$1;
(statearr_12168_12234[(2)] = inst_12162);

(statearr_12168_12234[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (20))){
var state_12166__$1 = state_12166;
var statearr_12169_12235 = state_12166__$1;
(statearr_12169_12235[(2)] = null);

(statearr_12169_12235[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (1))){
var state_12166__$1 = state_12166;
var statearr_12170_12236 = state_12166__$1;
(statearr_12170_12236[(2)] = null);

(statearr_12170_12236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (4))){
var inst_12131 = (state_12166[(7)]);
var inst_12131__$1 = (state_12166[(2)]);
var inst_12132 = (inst_12131__$1 == null);
var state_12166__$1 = (function (){var statearr_12171 = state_12166;
(statearr_12171[(7)] = inst_12131__$1);

return statearr_12171;
})();
if(cljs.core.truth_(inst_12132)){
var statearr_12172_12237 = state_12166__$1;
(statearr_12172_12237[(1)] = (5));

} else {
var statearr_12173_12238 = state_12166__$1;
(statearr_12173_12238[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (15))){
var inst_12144 = (state_12166[(8)]);
var state_12166__$1 = state_12166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12166__$1,(18),to,inst_12144);
} else {
if((state_val_12167 === (21))){
var inst_12157 = (state_12166[(2)]);
var state_12166__$1 = state_12166;
var statearr_12174_12239 = state_12166__$1;
(statearr_12174_12239[(2)] = inst_12157);

(statearr_12174_12239[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (13))){
var inst_12159 = (state_12166[(2)]);
var state_12166__$1 = (function (){var statearr_12175 = state_12166;
(statearr_12175[(9)] = inst_12159);

return statearr_12175;
})();
var statearr_12176_12240 = state_12166__$1;
(statearr_12176_12240[(2)] = null);

(statearr_12176_12240[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (6))){
var inst_12131 = (state_12166[(7)]);
var state_12166__$1 = state_12166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12166__$1,(11),inst_12131);
} else {
if((state_val_12167 === (17))){
var inst_12152 = (state_12166[(2)]);
var state_12166__$1 = state_12166;
if(cljs.core.truth_(inst_12152)){
var statearr_12177_12241 = state_12166__$1;
(statearr_12177_12241[(1)] = (19));

} else {
var statearr_12178_12242 = state_12166__$1;
(statearr_12178_12242[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (3))){
var inst_12164 = (state_12166[(2)]);
var state_12166__$1 = state_12166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12166__$1,inst_12164);
} else {
if((state_val_12167 === (12))){
var inst_12141 = (state_12166[(10)]);
var state_12166__$1 = state_12166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12166__$1,(14),inst_12141);
} else {
if((state_val_12167 === (2))){
var state_12166__$1 = state_12166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12166__$1,(4),results);
} else {
if((state_val_12167 === (19))){
var state_12166__$1 = state_12166;
var statearr_12179_12243 = state_12166__$1;
(statearr_12179_12243[(2)] = null);

(statearr_12179_12243[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (11))){
var inst_12141 = (state_12166[(2)]);
var state_12166__$1 = (function (){var statearr_12180 = state_12166;
(statearr_12180[(10)] = inst_12141);

return statearr_12180;
})();
var statearr_12181_12244 = state_12166__$1;
(statearr_12181_12244[(2)] = null);

(statearr_12181_12244[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (9))){
var state_12166__$1 = state_12166;
var statearr_12182_12245 = state_12166__$1;
(statearr_12182_12245[(2)] = null);

(statearr_12182_12245[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (5))){
var state_12166__$1 = state_12166;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12183_12246 = state_12166__$1;
(statearr_12183_12246[(1)] = (8));

} else {
var statearr_12184_12247 = state_12166__$1;
(statearr_12184_12247[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (14))){
var inst_12144 = (state_12166[(8)]);
var inst_12146 = (state_12166[(11)]);
var inst_12144__$1 = (state_12166[(2)]);
var inst_12145 = (inst_12144__$1 == null);
var inst_12146__$1 = cljs.core.not(inst_12145);
var state_12166__$1 = (function (){var statearr_12185 = state_12166;
(statearr_12185[(8)] = inst_12144__$1);

(statearr_12185[(11)] = inst_12146__$1);

return statearr_12185;
})();
if(inst_12146__$1){
var statearr_12186_12248 = state_12166__$1;
(statearr_12186_12248[(1)] = (15));

} else {
var statearr_12187_12249 = state_12166__$1;
(statearr_12187_12249[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (16))){
var inst_12146 = (state_12166[(11)]);
var state_12166__$1 = state_12166;
var statearr_12188_12250 = state_12166__$1;
(statearr_12188_12250[(2)] = inst_12146);

(statearr_12188_12250[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (10))){
var inst_12138 = (state_12166[(2)]);
var state_12166__$1 = state_12166;
var statearr_12189_12251 = state_12166__$1;
(statearr_12189_12251[(2)] = inst_12138);

(statearr_12189_12251[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (18))){
var inst_12149 = (state_12166[(2)]);
var state_12166__$1 = state_12166;
var statearr_12190_12252 = state_12166__$1;
(statearr_12190_12252[(2)] = inst_12149);

(statearr_12190_12252[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12167 === (8))){
var inst_12135 = cljs.core.async.close_BANG_(to);
var state_12166__$1 = state_12166;
var statearr_12191_12253 = state_12166__$1;
(statearr_12191_12253[(2)] = inst_12135);

(statearr_12191_12253[(1)] = (10));


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
});})(c__11645__auto__,jobs,results,process,async))
;
return ((function (switch__11531__auto__,c__11645__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0 = (function (){
var statearr_12195 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__);

(statearr_12195[(1)] = (1));

return statearr_12195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1 = (function (state_12166){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_12166);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e12196){if((e12196 instanceof Object)){
var ex__11535__auto__ = e12196;
var statearr_12197_12254 = state_12166;
(statearr_12197_12254[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12166);

return cljs.core.cst$kw$recur;
} else {
throw e12196;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__12255 = state_12166;
state_12166 = G__12255;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__ = function(state_12166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1.call(this,state_12166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto__,jobs,results,process,async))
})();
var state__11647__auto__ = (function (){var statearr_12198 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_12198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto__);

return statearr_12198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto__,jobs,results,process,async))
);

return c__11645__auto__;
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
var args12256 = [];
var len__5729__auto___12259 = arguments.length;
var i__5730__auto___12260 = (0);
while(true){
if((i__5730__auto___12260 < len__5729__auto___12259)){
args12256.push((arguments[i__5730__auto___12260]));

var G__12261 = (i__5730__auto___12260 + (1));
i__5730__auto___12260 = G__12261;
continue;
} else {
}
break;
}

var G__12258 = args12256.length;
switch (G__12258) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12256.length)].join('')));

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
var args12263 = [];
var len__5729__auto___12266 = arguments.length;
var i__5730__auto___12267 = (0);
while(true){
if((i__5730__auto___12267 < len__5729__auto___12266)){
args12263.push((arguments[i__5730__auto___12267]));

var G__12268 = (i__5730__auto___12267 + (1));
i__5730__auto___12267 = G__12268;
continue;
} else {
}
break;
}

var G__12265 = args12263.length;
switch (G__12265) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12263.length)].join('')));

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
var args12270 = [];
var len__5729__auto___12323 = arguments.length;
var i__5730__auto___12324 = (0);
while(true){
if((i__5730__auto___12324 < len__5729__auto___12323)){
args12270.push((arguments[i__5730__auto___12324]));

var G__12325 = (i__5730__auto___12324 + (1));
i__5730__auto___12324 = G__12325;
continue;
} else {
}
break;
}

var G__12272 = args12270.length;
switch (G__12272) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12270.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__11645__auto___12327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___12327,tc,fc){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___12327,tc,fc){
return (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (7))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12300_12328 = state_12298__$1;
(statearr_12300_12328[(2)] = inst_12294);

(statearr_12300_12328[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12301_12329 = state_12298__$1;
(statearr_12301_12329[(2)] = null);

(statearr_12301_12329[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12299 === (4))){
var inst_12275 = (state_12298[(7)]);
var inst_12275__$1 = (state_12298[(2)]);
var inst_12276 = (inst_12275__$1 == null);
var state_12298__$1 = (function (){var statearr_12302 = state_12298;
(statearr_12302[(7)] = inst_12275__$1);

return statearr_12302;
})();
if(cljs.core.truth_(inst_12276)){
var statearr_12303_12330 = state_12298__$1;
(statearr_12303_12330[(1)] = (5));

} else {
var statearr_12304_12331 = state_12298__$1;
(statearr_12304_12331[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12299 === (13))){
var state_12298__$1 = state_12298;
var statearr_12305_12332 = state_12298__$1;
(statearr_12305_12332[(2)] = null);

(statearr_12305_12332[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12299 === (6))){
var inst_12275 = (state_12298[(7)]);
var inst_12281 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12275) : p.call(null,inst_12275));
var state_12298__$1 = state_12298;
if(cljs.core.truth_(inst_12281)){
var statearr_12306_12333 = state_12298__$1;
(statearr_12306_12333[(1)] = (9));

} else {
var statearr_12307_12334 = state_12298__$1;
(statearr_12307_12334[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12299 === (3))){
var inst_12296 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12298__$1,inst_12296);
} else {
if((state_val_12299 === (12))){
var state_12298__$1 = state_12298;
var statearr_12308_12335 = state_12298__$1;
(statearr_12308_12335[(2)] = null);

(statearr_12308_12335[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12299 === (2))){
var state_12298__$1 = state_12298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12298__$1,(4),ch);
} else {
if((state_val_12299 === (11))){
var inst_12275 = (state_12298[(7)]);
var inst_12285 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12298__$1,(8),inst_12285,inst_12275);
} else {
if((state_val_12299 === (9))){
var state_12298__$1 = state_12298;
var statearr_12309_12336 = state_12298__$1;
(statearr_12309_12336[(2)] = tc);

(statearr_12309_12336[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12299 === (5))){
var inst_12278 = cljs.core.async.close_BANG_(tc);
var inst_12279 = cljs.core.async.close_BANG_(fc);
var state_12298__$1 = (function (){var statearr_12310 = state_12298;
(statearr_12310[(8)] = inst_12278);

return statearr_12310;
})();
var statearr_12311_12337 = state_12298__$1;
(statearr_12311_12337[(2)] = inst_12279);

(statearr_12311_12337[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12299 === (14))){
var inst_12292 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12312_12338 = state_12298__$1;
(statearr_12312_12338[(2)] = inst_12292);

(statearr_12312_12338[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12299 === (10))){
var state_12298__$1 = state_12298;
var statearr_12313_12339 = state_12298__$1;
(statearr_12313_12339[(2)] = fc);

(statearr_12313_12339[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12299 === (8))){
var inst_12287 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
if(cljs.core.truth_(inst_12287)){
var statearr_12314_12340 = state_12298__$1;
(statearr_12314_12340[(1)] = (12));

} else {
var statearr_12315_12341 = state_12298__$1;
(statearr_12315_12341[(1)] = (13));

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
});})(c__11645__auto___12327,tc,fc))
;
return ((function (switch__11531__auto__,c__11645__auto___12327,tc,fc){
return (function() {
var cljs$core$async$state_machine__11532__auto__ = null;
var cljs$core$async$state_machine__11532__auto____0 = (function (){
var statearr_12319 = [null,null,null,null,null,null,null,null,null];
(statearr_12319[(0)] = cljs$core$async$state_machine__11532__auto__);

(statearr_12319[(1)] = (1));

return statearr_12319;
});
var cljs$core$async$state_machine__11532__auto____1 = (function (state_12298){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_12298);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e12320){if((e12320 instanceof Object)){
var ex__11535__auto__ = e12320;
var statearr_12321_12342 = state_12298;
(statearr_12321_12342[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12298);

return cljs.core.cst$kw$recur;
} else {
throw e12320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__12343 = state_12298;
state_12298 = G__12343;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$state_machine__11532__auto__ = function(state_12298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11532__auto____1.call(this,state_12298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11532__auto____0;
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11532__auto____1;
return cljs$core$async$state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___12327,tc,fc))
})();
var state__11647__auto__ = (function (){var statearr_12322 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_12322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___12327);

return statearr_12322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___12327,tc,fc))
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
var c__11645__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto__){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto__){
return (function (state_12407){
var state_val_12408 = (state_12407[(1)]);
if((state_val_12408 === (7))){
var inst_12403 = (state_12407[(2)]);
var state_12407__$1 = state_12407;
var statearr_12409_12430 = state_12407__$1;
(statearr_12409_12430[(2)] = inst_12403);

(statearr_12409_12430[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12408 === (1))){
var inst_12387 = init;
var state_12407__$1 = (function (){var statearr_12410 = state_12407;
(statearr_12410[(7)] = inst_12387);

return statearr_12410;
})();
var statearr_12411_12431 = state_12407__$1;
(statearr_12411_12431[(2)] = null);

(statearr_12411_12431[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12408 === (4))){
var inst_12390 = (state_12407[(8)]);
var inst_12390__$1 = (state_12407[(2)]);
var inst_12391 = (inst_12390__$1 == null);
var state_12407__$1 = (function (){var statearr_12412 = state_12407;
(statearr_12412[(8)] = inst_12390__$1);

return statearr_12412;
})();
if(cljs.core.truth_(inst_12391)){
var statearr_12413_12432 = state_12407__$1;
(statearr_12413_12432[(1)] = (5));

} else {
var statearr_12414_12433 = state_12407__$1;
(statearr_12414_12433[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12408 === (6))){
var inst_12390 = (state_12407[(8)]);
var inst_12394 = (state_12407[(9)]);
var inst_12387 = (state_12407[(7)]);
var inst_12394__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12387,inst_12390) : f.call(null,inst_12387,inst_12390));
var inst_12395 = cljs.core.reduced_QMARK_(inst_12394__$1);
var state_12407__$1 = (function (){var statearr_12415 = state_12407;
(statearr_12415[(9)] = inst_12394__$1);

return statearr_12415;
})();
if(inst_12395){
var statearr_12416_12434 = state_12407__$1;
(statearr_12416_12434[(1)] = (8));

} else {
var statearr_12417_12435 = state_12407__$1;
(statearr_12417_12435[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12408 === (3))){
var inst_12405 = (state_12407[(2)]);
var state_12407__$1 = state_12407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12407__$1,inst_12405);
} else {
if((state_val_12408 === (2))){
var state_12407__$1 = state_12407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12407__$1,(4),ch);
} else {
if((state_val_12408 === (9))){
var inst_12394 = (state_12407[(9)]);
var inst_12387 = inst_12394;
var state_12407__$1 = (function (){var statearr_12418 = state_12407;
(statearr_12418[(7)] = inst_12387);

return statearr_12418;
})();
var statearr_12419_12436 = state_12407__$1;
(statearr_12419_12436[(2)] = null);

(statearr_12419_12436[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12408 === (5))){
var inst_12387 = (state_12407[(7)]);
var state_12407__$1 = state_12407;
var statearr_12420_12437 = state_12407__$1;
(statearr_12420_12437[(2)] = inst_12387);

(statearr_12420_12437[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12408 === (10))){
var inst_12401 = (state_12407[(2)]);
var state_12407__$1 = state_12407;
var statearr_12421_12438 = state_12407__$1;
(statearr_12421_12438[(2)] = inst_12401);

(statearr_12421_12438[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12408 === (8))){
var inst_12394 = (state_12407[(9)]);
var inst_12397 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_12394) : cljs.core.deref.call(null,inst_12394));
var state_12407__$1 = state_12407;
var statearr_12422_12439 = state_12407__$1;
(statearr_12422_12439[(2)] = inst_12397);

(statearr_12422_12439[(1)] = (10));


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
});})(c__11645__auto__))
;
return ((function (switch__11531__auto__,c__11645__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11532__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11532__auto____0 = (function (){
var statearr_12426 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12426[(0)] = cljs$core$async$reduce_$_state_machine__11532__auto__);

(statearr_12426[(1)] = (1));

return statearr_12426;
});
var cljs$core$async$reduce_$_state_machine__11532__auto____1 = (function (state_12407){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_12407);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e12427){if((e12427 instanceof Object)){
var ex__11535__auto__ = e12427;
var statearr_12428_12440 = state_12407;
(statearr_12428_12440[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12407);

return cljs.core.cst$kw$recur;
} else {
throw e12427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__12441 = state_12407;
state_12407 = G__12441;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11532__auto__ = function(state_12407){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11532__auto____1.call(this,state_12407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11532__auto____0;
cljs$core$async$reduce_$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11532__auto____1;
return cljs$core$async$reduce_$_state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto__))
})();
var state__11647__auto__ = (function (){var statearr_12429 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_12429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto__);

return statearr_12429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto__))
);

return c__11645__auto__;
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
var args12442 = [];
var len__5729__auto___12494 = arguments.length;
var i__5730__auto___12495 = (0);
while(true){
if((i__5730__auto___12495 < len__5729__auto___12494)){
args12442.push((arguments[i__5730__auto___12495]));

var G__12496 = (i__5730__auto___12495 + (1));
i__5730__auto___12495 = G__12496;
continue;
} else {
}
break;
}

var G__12444 = args12442.length;
switch (G__12444) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12442.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11645__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto__){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto__){
return (function (state_12469){
var state_val_12470 = (state_12469[(1)]);
if((state_val_12470 === (7))){
var inst_12451 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12471_12498 = state_12469__$1;
(statearr_12471_12498[(2)] = inst_12451);

(statearr_12471_12498[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12470 === (1))){
var inst_12445 = cljs.core.seq(coll);
var inst_12446 = inst_12445;
var state_12469__$1 = (function (){var statearr_12472 = state_12469;
(statearr_12472[(7)] = inst_12446);

return statearr_12472;
})();
var statearr_12473_12499 = state_12469__$1;
(statearr_12473_12499[(2)] = null);

(statearr_12473_12499[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12470 === (4))){
var inst_12446 = (state_12469[(7)]);
var inst_12449 = cljs.core.first(inst_12446);
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12469__$1,(7),ch,inst_12449);
} else {
if((state_val_12470 === (13))){
var inst_12463 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12474_12500 = state_12469__$1;
(statearr_12474_12500[(2)] = inst_12463);

(statearr_12474_12500[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12470 === (6))){
var inst_12454 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
if(cljs.core.truth_(inst_12454)){
var statearr_12475_12501 = state_12469__$1;
(statearr_12475_12501[(1)] = (8));

} else {
var statearr_12476_12502 = state_12469__$1;
(statearr_12476_12502[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12470 === (3))){
var inst_12467 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12469__$1,inst_12467);
} else {
if((state_val_12470 === (12))){
var state_12469__$1 = state_12469;
var statearr_12477_12503 = state_12469__$1;
(statearr_12477_12503[(2)] = null);

(statearr_12477_12503[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12470 === (2))){
var inst_12446 = (state_12469[(7)]);
var state_12469__$1 = state_12469;
if(cljs.core.truth_(inst_12446)){
var statearr_12478_12504 = state_12469__$1;
(statearr_12478_12504[(1)] = (4));

} else {
var statearr_12479_12505 = state_12469__$1;
(statearr_12479_12505[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12470 === (11))){
var inst_12460 = cljs.core.async.close_BANG_(ch);
var state_12469__$1 = state_12469;
var statearr_12480_12506 = state_12469__$1;
(statearr_12480_12506[(2)] = inst_12460);

(statearr_12480_12506[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12470 === (9))){
var state_12469__$1 = state_12469;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12481_12507 = state_12469__$1;
(statearr_12481_12507[(1)] = (11));

} else {
var statearr_12482_12508 = state_12469__$1;
(statearr_12482_12508[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12470 === (5))){
var inst_12446 = (state_12469[(7)]);
var state_12469__$1 = state_12469;
var statearr_12483_12509 = state_12469__$1;
(statearr_12483_12509[(2)] = inst_12446);

(statearr_12483_12509[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12470 === (10))){
var inst_12465 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12484_12510 = state_12469__$1;
(statearr_12484_12510[(2)] = inst_12465);

(statearr_12484_12510[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12470 === (8))){
var inst_12446 = (state_12469[(7)]);
var inst_12456 = cljs.core.next(inst_12446);
var inst_12446__$1 = inst_12456;
var state_12469__$1 = (function (){var statearr_12485 = state_12469;
(statearr_12485[(7)] = inst_12446__$1);

return statearr_12485;
})();
var statearr_12486_12511 = state_12469__$1;
(statearr_12486_12511[(2)] = null);

(statearr_12486_12511[(1)] = (2));


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
});})(c__11645__auto__))
;
return ((function (switch__11531__auto__,c__11645__auto__){
return (function() {
var cljs$core$async$state_machine__11532__auto__ = null;
var cljs$core$async$state_machine__11532__auto____0 = (function (){
var statearr_12490 = [null,null,null,null,null,null,null,null];
(statearr_12490[(0)] = cljs$core$async$state_machine__11532__auto__);

(statearr_12490[(1)] = (1));

return statearr_12490;
});
var cljs$core$async$state_machine__11532__auto____1 = (function (state_12469){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_12469);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e12491){if((e12491 instanceof Object)){
var ex__11535__auto__ = e12491;
var statearr_12492_12512 = state_12469;
(statearr_12492_12512[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12469);

return cljs.core.cst$kw$recur;
} else {
throw e12491;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__12513 = state_12469;
state_12469 = G__12513;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$state_machine__11532__auto__ = function(state_12469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11532__auto____1.call(this,state_12469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11532__auto____0;
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11532__auto____1;
return cljs$core$async$state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto__))
})();
var state__11647__auto__ = (function (){var statearr_12493 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_12493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto__);

return statearr_12493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto__))
);

return c__11645__auto__;
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
var cs = (function (){var G__12738 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12738) : cljs.core.atom.call(null,G__12738));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12739 = (function (mult,ch,cs,meta12740){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12740 = meta12740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12741,meta12740__$1){
var self__ = this;
var _12741__$1 = this;
return (new cljs.core.async.t_cljs$core$async12739(self__.mult,self__.ch,self__.cs,meta12740__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12741){
var self__ = this;
var _12741__$1 = this;
return self__.meta12740;
});})(cs))
;

cljs.core.async.t_cljs$core$async12739.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12739.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12739.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async12739.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12739.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12739.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__12742_12962 = self__.cs;
var G__12743_12963 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12742_12962,G__12743_12963) : cljs.core.reset_BANG_.call(null,G__12742_12962,G__12743_12963));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12739.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta12740], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12739";

cljs.core.async.t_cljs$core$async12739.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async12739");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12739 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12739(mult__$1,ch__$1,cs__$1,meta12740){
return (new cljs.core.async.t_cljs$core$async12739(mult__$1,ch__$1,cs__$1,meta12740));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12739(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11645__auto___12964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___12964,cs,m,dchan,dctr,done){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___12964,cs,m,dchan,dctr,done){
return (function (state_12874){
var state_val_12875 = (state_12874[(1)]);
if((state_val_12875 === (7))){
var inst_12870 = (state_12874[(2)]);
var state_12874__$1 = state_12874;
var statearr_12876_12965 = state_12874__$1;
(statearr_12876_12965[(2)] = inst_12870);

(statearr_12876_12965[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (20))){
var inst_12775 = (state_12874[(7)]);
var inst_12785 = cljs.core.first(inst_12775);
var inst_12786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12785,(0),null);
var inst_12787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12785,(1),null);
var state_12874__$1 = (function (){var statearr_12877 = state_12874;
(statearr_12877[(8)] = inst_12786);

return statearr_12877;
})();
if(cljs.core.truth_(inst_12787)){
var statearr_12878_12966 = state_12874__$1;
(statearr_12878_12966[(1)] = (22));

} else {
var statearr_12879_12967 = state_12874__$1;
(statearr_12879_12967[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (27))){
var inst_12746 = (state_12874[(9)]);
var inst_12817 = (state_12874[(10)]);
var inst_12815 = (state_12874[(11)]);
var inst_12822 = (state_12874[(12)]);
var inst_12822__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12815,inst_12817);
var inst_12823 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12822__$1,inst_12746,done);
var state_12874__$1 = (function (){var statearr_12880 = state_12874;
(statearr_12880[(12)] = inst_12822__$1);

return statearr_12880;
})();
if(cljs.core.truth_(inst_12823)){
var statearr_12881_12968 = state_12874__$1;
(statearr_12881_12968[(1)] = (30));

} else {
var statearr_12882_12969 = state_12874__$1;
(statearr_12882_12969[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (1))){
var state_12874__$1 = state_12874;
var statearr_12883_12970 = state_12874__$1;
(statearr_12883_12970[(2)] = null);

(statearr_12883_12970[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (24))){
var inst_12775 = (state_12874[(7)]);
var inst_12792 = (state_12874[(2)]);
var inst_12793 = cljs.core.next(inst_12775);
var inst_12755 = inst_12793;
var inst_12756 = null;
var inst_12757 = (0);
var inst_12758 = (0);
var state_12874__$1 = (function (){var statearr_12884 = state_12874;
(statearr_12884[(13)] = inst_12792);

(statearr_12884[(14)] = inst_12757);

(statearr_12884[(15)] = inst_12758);

(statearr_12884[(16)] = inst_12755);

(statearr_12884[(17)] = inst_12756);

return statearr_12884;
})();
var statearr_12885_12971 = state_12874__$1;
(statearr_12885_12971[(2)] = null);

(statearr_12885_12971[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (39))){
var state_12874__$1 = state_12874;
var statearr_12889_12972 = state_12874__$1;
(statearr_12889_12972[(2)] = null);

(statearr_12889_12972[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (4))){
var inst_12746 = (state_12874[(9)]);
var inst_12746__$1 = (state_12874[(2)]);
var inst_12747 = (inst_12746__$1 == null);
var state_12874__$1 = (function (){var statearr_12890 = state_12874;
(statearr_12890[(9)] = inst_12746__$1);

return statearr_12890;
})();
if(cljs.core.truth_(inst_12747)){
var statearr_12891_12973 = state_12874__$1;
(statearr_12891_12973[(1)] = (5));

} else {
var statearr_12892_12974 = state_12874__$1;
(statearr_12892_12974[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (15))){
var inst_12757 = (state_12874[(14)]);
var inst_12758 = (state_12874[(15)]);
var inst_12755 = (state_12874[(16)]);
var inst_12756 = (state_12874[(17)]);
var inst_12771 = (state_12874[(2)]);
var inst_12772 = (inst_12758 + (1));
var tmp12886 = inst_12757;
var tmp12887 = inst_12755;
var tmp12888 = inst_12756;
var inst_12755__$1 = tmp12887;
var inst_12756__$1 = tmp12888;
var inst_12757__$1 = tmp12886;
var inst_12758__$1 = inst_12772;
var state_12874__$1 = (function (){var statearr_12893 = state_12874;
(statearr_12893[(18)] = inst_12771);

(statearr_12893[(14)] = inst_12757__$1);

(statearr_12893[(15)] = inst_12758__$1);

(statearr_12893[(16)] = inst_12755__$1);

(statearr_12893[(17)] = inst_12756__$1);

return statearr_12893;
})();
var statearr_12894_12975 = state_12874__$1;
(statearr_12894_12975[(2)] = null);

(statearr_12894_12975[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (21))){
var inst_12796 = (state_12874[(2)]);
var state_12874__$1 = state_12874;
var statearr_12898_12976 = state_12874__$1;
(statearr_12898_12976[(2)] = inst_12796);

(statearr_12898_12976[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (31))){
var inst_12822 = (state_12874[(12)]);
var inst_12826 = done(null);
var inst_12827 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12822);
var state_12874__$1 = (function (){var statearr_12899 = state_12874;
(statearr_12899[(19)] = inst_12826);

return statearr_12899;
})();
var statearr_12900_12977 = state_12874__$1;
(statearr_12900_12977[(2)] = inst_12827);

(statearr_12900_12977[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (32))){
var inst_12817 = (state_12874[(10)]);
var inst_12814 = (state_12874[(20)]);
var inst_12815 = (state_12874[(11)]);
var inst_12816 = (state_12874[(21)]);
var inst_12829 = (state_12874[(2)]);
var inst_12830 = (inst_12817 + (1));
var tmp12895 = inst_12814;
var tmp12896 = inst_12815;
var tmp12897 = inst_12816;
var inst_12814__$1 = tmp12895;
var inst_12815__$1 = tmp12896;
var inst_12816__$1 = tmp12897;
var inst_12817__$1 = inst_12830;
var state_12874__$1 = (function (){var statearr_12901 = state_12874;
(statearr_12901[(10)] = inst_12817__$1);

(statearr_12901[(22)] = inst_12829);

(statearr_12901[(20)] = inst_12814__$1);

(statearr_12901[(11)] = inst_12815__$1);

(statearr_12901[(21)] = inst_12816__$1);

return statearr_12901;
})();
var statearr_12902_12978 = state_12874__$1;
(statearr_12902_12978[(2)] = null);

(statearr_12902_12978[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (40))){
var inst_12842 = (state_12874[(23)]);
var inst_12846 = done(null);
var inst_12847 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12842);
var state_12874__$1 = (function (){var statearr_12903 = state_12874;
(statearr_12903[(24)] = inst_12846);

return statearr_12903;
})();
var statearr_12904_12979 = state_12874__$1;
(statearr_12904_12979[(2)] = inst_12847);

(statearr_12904_12979[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (33))){
var inst_12833 = (state_12874[(25)]);
var inst_12835 = cljs.core.chunked_seq_QMARK_(inst_12833);
var state_12874__$1 = state_12874;
if(inst_12835){
var statearr_12905_12980 = state_12874__$1;
(statearr_12905_12980[(1)] = (36));

} else {
var statearr_12906_12981 = state_12874__$1;
(statearr_12906_12981[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (13))){
var inst_12765 = (state_12874[(26)]);
var inst_12768 = cljs.core.async.close_BANG_(inst_12765);
var state_12874__$1 = state_12874;
var statearr_12907_12982 = state_12874__$1;
(statearr_12907_12982[(2)] = inst_12768);

(statearr_12907_12982[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (22))){
var inst_12786 = (state_12874[(8)]);
var inst_12789 = cljs.core.async.close_BANG_(inst_12786);
var state_12874__$1 = state_12874;
var statearr_12908_12983 = state_12874__$1;
(statearr_12908_12983[(2)] = inst_12789);

(statearr_12908_12983[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (36))){
var inst_12833 = (state_12874[(25)]);
var inst_12837 = cljs.core.chunk_first(inst_12833);
var inst_12838 = cljs.core.chunk_rest(inst_12833);
var inst_12839 = cljs.core.count(inst_12837);
var inst_12814 = inst_12838;
var inst_12815 = inst_12837;
var inst_12816 = inst_12839;
var inst_12817 = (0);
var state_12874__$1 = (function (){var statearr_12909 = state_12874;
(statearr_12909[(10)] = inst_12817);

(statearr_12909[(20)] = inst_12814);

(statearr_12909[(11)] = inst_12815);

(statearr_12909[(21)] = inst_12816);

return statearr_12909;
})();
var statearr_12910_12984 = state_12874__$1;
(statearr_12910_12984[(2)] = null);

(statearr_12910_12984[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (41))){
var inst_12833 = (state_12874[(25)]);
var inst_12849 = (state_12874[(2)]);
var inst_12850 = cljs.core.next(inst_12833);
var inst_12814 = inst_12850;
var inst_12815 = null;
var inst_12816 = (0);
var inst_12817 = (0);
var state_12874__$1 = (function (){var statearr_12911 = state_12874;
(statearr_12911[(27)] = inst_12849);

(statearr_12911[(10)] = inst_12817);

(statearr_12911[(20)] = inst_12814);

(statearr_12911[(11)] = inst_12815);

(statearr_12911[(21)] = inst_12816);

return statearr_12911;
})();
var statearr_12912_12985 = state_12874__$1;
(statearr_12912_12985[(2)] = null);

(statearr_12912_12985[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (43))){
var state_12874__$1 = state_12874;
var statearr_12913_12986 = state_12874__$1;
(statearr_12913_12986[(2)] = null);

(statearr_12913_12986[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (29))){
var inst_12858 = (state_12874[(2)]);
var state_12874__$1 = state_12874;
var statearr_12914_12987 = state_12874__$1;
(statearr_12914_12987[(2)] = inst_12858);

(statearr_12914_12987[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (44))){
var inst_12867 = (state_12874[(2)]);
var state_12874__$1 = (function (){var statearr_12915 = state_12874;
(statearr_12915[(28)] = inst_12867);

return statearr_12915;
})();
var statearr_12916_12988 = state_12874__$1;
(statearr_12916_12988[(2)] = null);

(statearr_12916_12988[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (6))){
var inst_12806 = (state_12874[(29)]);
var inst_12805 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_12806__$1 = cljs.core.keys(inst_12805);
var inst_12807 = cljs.core.count(inst_12806__$1);
var inst_12808 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_12807) : cljs.core.reset_BANG_.call(null,dctr,inst_12807));
var inst_12813 = cljs.core.seq(inst_12806__$1);
var inst_12814 = inst_12813;
var inst_12815 = null;
var inst_12816 = (0);
var inst_12817 = (0);
var state_12874__$1 = (function (){var statearr_12917 = state_12874;
(statearr_12917[(30)] = inst_12808);

(statearr_12917[(10)] = inst_12817);

(statearr_12917[(29)] = inst_12806__$1);

(statearr_12917[(20)] = inst_12814);

(statearr_12917[(11)] = inst_12815);

(statearr_12917[(21)] = inst_12816);

return statearr_12917;
})();
var statearr_12918_12989 = state_12874__$1;
(statearr_12918_12989[(2)] = null);

(statearr_12918_12989[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (28))){
var inst_12814 = (state_12874[(20)]);
var inst_12833 = (state_12874[(25)]);
var inst_12833__$1 = cljs.core.seq(inst_12814);
var state_12874__$1 = (function (){var statearr_12919 = state_12874;
(statearr_12919[(25)] = inst_12833__$1);

return statearr_12919;
})();
if(inst_12833__$1){
var statearr_12920_12990 = state_12874__$1;
(statearr_12920_12990[(1)] = (33));

} else {
var statearr_12921_12991 = state_12874__$1;
(statearr_12921_12991[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (25))){
var inst_12817 = (state_12874[(10)]);
var inst_12816 = (state_12874[(21)]);
var inst_12819 = (inst_12817 < inst_12816);
var inst_12820 = inst_12819;
var state_12874__$1 = state_12874;
if(cljs.core.truth_(inst_12820)){
var statearr_12922_12992 = state_12874__$1;
(statearr_12922_12992[(1)] = (27));

} else {
var statearr_12923_12993 = state_12874__$1;
(statearr_12923_12993[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (34))){
var state_12874__$1 = state_12874;
var statearr_12924_12994 = state_12874__$1;
(statearr_12924_12994[(2)] = null);

(statearr_12924_12994[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (17))){
var state_12874__$1 = state_12874;
var statearr_12925_12995 = state_12874__$1;
(statearr_12925_12995[(2)] = null);

(statearr_12925_12995[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (3))){
var inst_12872 = (state_12874[(2)]);
var state_12874__$1 = state_12874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12874__$1,inst_12872);
} else {
if((state_val_12875 === (12))){
var inst_12801 = (state_12874[(2)]);
var state_12874__$1 = state_12874;
var statearr_12926_12996 = state_12874__$1;
(statearr_12926_12996[(2)] = inst_12801);

(statearr_12926_12996[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (2))){
var state_12874__$1 = state_12874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12874__$1,(4),ch);
} else {
if((state_val_12875 === (23))){
var state_12874__$1 = state_12874;
var statearr_12927_12997 = state_12874__$1;
(statearr_12927_12997[(2)] = null);

(statearr_12927_12997[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (35))){
var inst_12856 = (state_12874[(2)]);
var state_12874__$1 = state_12874;
var statearr_12928_12998 = state_12874__$1;
(statearr_12928_12998[(2)] = inst_12856);

(statearr_12928_12998[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (19))){
var inst_12775 = (state_12874[(7)]);
var inst_12779 = cljs.core.chunk_first(inst_12775);
var inst_12780 = cljs.core.chunk_rest(inst_12775);
var inst_12781 = cljs.core.count(inst_12779);
var inst_12755 = inst_12780;
var inst_12756 = inst_12779;
var inst_12757 = inst_12781;
var inst_12758 = (0);
var state_12874__$1 = (function (){var statearr_12929 = state_12874;
(statearr_12929[(14)] = inst_12757);

(statearr_12929[(15)] = inst_12758);

(statearr_12929[(16)] = inst_12755);

(statearr_12929[(17)] = inst_12756);

return statearr_12929;
})();
var statearr_12930_12999 = state_12874__$1;
(statearr_12930_12999[(2)] = null);

(statearr_12930_12999[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (11))){
var inst_12775 = (state_12874[(7)]);
var inst_12755 = (state_12874[(16)]);
var inst_12775__$1 = cljs.core.seq(inst_12755);
var state_12874__$1 = (function (){var statearr_12931 = state_12874;
(statearr_12931[(7)] = inst_12775__$1);

return statearr_12931;
})();
if(inst_12775__$1){
var statearr_12932_13000 = state_12874__$1;
(statearr_12932_13000[(1)] = (16));

} else {
var statearr_12933_13001 = state_12874__$1;
(statearr_12933_13001[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (9))){
var inst_12803 = (state_12874[(2)]);
var state_12874__$1 = state_12874;
var statearr_12934_13002 = state_12874__$1;
(statearr_12934_13002[(2)] = inst_12803);

(statearr_12934_13002[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (5))){
var inst_12753 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_12754 = cljs.core.seq(inst_12753);
var inst_12755 = inst_12754;
var inst_12756 = null;
var inst_12757 = (0);
var inst_12758 = (0);
var state_12874__$1 = (function (){var statearr_12935 = state_12874;
(statearr_12935[(14)] = inst_12757);

(statearr_12935[(15)] = inst_12758);

(statearr_12935[(16)] = inst_12755);

(statearr_12935[(17)] = inst_12756);

return statearr_12935;
})();
var statearr_12936_13003 = state_12874__$1;
(statearr_12936_13003[(2)] = null);

(statearr_12936_13003[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (14))){
var state_12874__$1 = state_12874;
var statearr_12937_13004 = state_12874__$1;
(statearr_12937_13004[(2)] = null);

(statearr_12937_13004[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (45))){
var inst_12864 = (state_12874[(2)]);
var state_12874__$1 = state_12874;
var statearr_12938_13005 = state_12874__$1;
(statearr_12938_13005[(2)] = inst_12864);

(statearr_12938_13005[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (26))){
var inst_12806 = (state_12874[(29)]);
var inst_12860 = (state_12874[(2)]);
var inst_12861 = cljs.core.seq(inst_12806);
var state_12874__$1 = (function (){var statearr_12939 = state_12874;
(statearr_12939[(31)] = inst_12860);

return statearr_12939;
})();
if(inst_12861){
var statearr_12940_13006 = state_12874__$1;
(statearr_12940_13006[(1)] = (42));

} else {
var statearr_12941_13007 = state_12874__$1;
(statearr_12941_13007[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (16))){
var inst_12775 = (state_12874[(7)]);
var inst_12777 = cljs.core.chunked_seq_QMARK_(inst_12775);
var state_12874__$1 = state_12874;
if(inst_12777){
var statearr_12942_13008 = state_12874__$1;
(statearr_12942_13008[(1)] = (19));

} else {
var statearr_12943_13009 = state_12874__$1;
(statearr_12943_13009[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (38))){
var inst_12853 = (state_12874[(2)]);
var state_12874__$1 = state_12874;
var statearr_12944_13010 = state_12874__$1;
(statearr_12944_13010[(2)] = inst_12853);

(statearr_12944_13010[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (30))){
var state_12874__$1 = state_12874;
var statearr_12945_13011 = state_12874__$1;
(statearr_12945_13011[(2)] = null);

(statearr_12945_13011[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (10))){
var inst_12758 = (state_12874[(15)]);
var inst_12756 = (state_12874[(17)]);
var inst_12764 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12756,inst_12758);
var inst_12765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12764,(0),null);
var inst_12766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12764,(1),null);
var state_12874__$1 = (function (){var statearr_12946 = state_12874;
(statearr_12946[(26)] = inst_12765);

return statearr_12946;
})();
if(cljs.core.truth_(inst_12766)){
var statearr_12947_13012 = state_12874__$1;
(statearr_12947_13012[(1)] = (13));

} else {
var statearr_12948_13013 = state_12874__$1;
(statearr_12948_13013[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (18))){
var inst_12799 = (state_12874[(2)]);
var state_12874__$1 = state_12874;
var statearr_12949_13014 = state_12874__$1;
(statearr_12949_13014[(2)] = inst_12799);

(statearr_12949_13014[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (42))){
var state_12874__$1 = state_12874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12874__$1,(45),dchan);
} else {
if((state_val_12875 === (37))){
var inst_12746 = (state_12874[(9)]);
var inst_12842 = (state_12874[(23)]);
var inst_12833 = (state_12874[(25)]);
var inst_12842__$1 = cljs.core.first(inst_12833);
var inst_12843 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12842__$1,inst_12746,done);
var state_12874__$1 = (function (){var statearr_12950 = state_12874;
(statearr_12950[(23)] = inst_12842__$1);

return statearr_12950;
})();
if(cljs.core.truth_(inst_12843)){
var statearr_12951_13015 = state_12874__$1;
(statearr_12951_13015[(1)] = (39));

} else {
var statearr_12952_13016 = state_12874__$1;
(statearr_12952_13016[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12875 === (8))){
var inst_12757 = (state_12874[(14)]);
var inst_12758 = (state_12874[(15)]);
var inst_12760 = (inst_12758 < inst_12757);
var inst_12761 = inst_12760;
var state_12874__$1 = state_12874;
if(cljs.core.truth_(inst_12761)){
var statearr_12953_13017 = state_12874__$1;
(statearr_12953_13017[(1)] = (10));

} else {
var statearr_12954_13018 = state_12874__$1;
(statearr_12954_13018[(1)] = (11));

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
});})(c__11645__auto___12964,cs,m,dchan,dctr,done))
;
return ((function (switch__11531__auto__,c__11645__auto___12964,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11532__auto__ = null;
var cljs$core$async$mult_$_state_machine__11532__auto____0 = (function (){
var statearr_12958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12958[(0)] = cljs$core$async$mult_$_state_machine__11532__auto__);

(statearr_12958[(1)] = (1));

return statearr_12958;
});
var cljs$core$async$mult_$_state_machine__11532__auto____1 = (function (state_12874){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_12874);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e12959){if((e12959 instanceof Object)){
var ex__11535__auto__ = e12959;
var statearr_12960_13019 = state_12874;
(statearr_12960_13019[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12874);

return cljs.core.cst$kw$recur;
} else {
throw e12959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__13020 = state_12874;
state_12874 = G__13020;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11532__auto__ = function(state_12874){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11532__auto____1.call(this,state_12874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11532__auto____0;
cljs$core$async$mult_$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11532__auto____1;
return cljs$core$async$mult_$_state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___12964,cs,m,dchan,dctr,done))
})();
var state__11647__auto__ = (function (){var statearr_12961 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_12961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___12964);

return statearr_12961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___12964,cs,m,dchan,dctr,done))
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
var args13021 = [];
var len__5729__auto___13024 = arguments.length;
var i__5730__auto___13025 = (0);
while(true){
if((i__5730__auto___13025 < len__5729__auto___13024)){
args13021.push((arguments[i__5730__auto___13025]));

var G__13026 = (i__5730__auto___13025 + (1));
i__5730__auto___13025 = G__13026;
continue;
} else {
}
break;
}

var G__13023 = args13021.length;
switch (G__13023) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13021.length)].join('')));

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
var len__5729__auto___13038 = arguments.length;
var i__5730__auto___13039 = (0);
while(true){
if((i__5730__auto___13039 < len__5729__auto___13038)){
args__5736__auto__.push((arguments[i__5730__auto___13039]));

var G__13040 = (i__5730__auto___13039 + (1));
i__5730__auto___13039 = G__13040;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((3) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13032){
var map__13033 = p__13032;
var map__13033__$1 = ((((!((map__13033 == null)))?((((map__13033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13033):map__13033);
var opts = map__13033__$1;
var statearr_13035_13041 = state;
(statearr_13035_13041[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__13033,map__13033__$1,opts){
return (function (val){
var statearr_13036_13042 = state;
(statearr_13036_13042[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__13033,map__13033__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_13037_13043 = state;
(statearr_13037_13043[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13028){
var G__13029 = cljs.core.first(seq13028);
var seq13028__$1 = cljs.core.next(seq13028);
var G__13030 = cljs.core.first(seq13028__$1);
var seq13028__$2 = cljs.core.next(seq13028__$1);
var G__13031 = cljs.core.first(seq13028__$2);
var seq13028__$3 = cljs.core.next(seq13028__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13029,G__13030,G__13031,seq13028__$3);
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
var cs = (function (){var G__13210 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13210) : cljs.core.atom.call(null,G__13210));
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
if(typeof cljs.core.async.t_cljs$core$async13211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13211 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13212){
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
this.meta13212 = meta13212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13213,meta13212__$1){
var self__ = this;
var _13213__$1 = this;
return (new cljs.core.async.t_cljs$core$async13211(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13212__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13213){
var self__ = this;
var _13213__$1 = this;
return self__.meta13212;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13211.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13211.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async13211.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13211.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13211.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__13214_13376 = self__.cs;
var G__13215_13377 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13214_13376,G__13215_13377) : cljs.core.reset_BANG_.call(null,G__13214_13376,G__13215_13377));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13211.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13211.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13211.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta13212], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13211";

cljs.core.async.t_cljs$core$async13211.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async13211");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13211 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13211(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13212){
return (new cljs.core.async.t_cljs$core$async13211(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13212));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13211(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11645__auto___13378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___13378,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___13378,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13313){
var state_val_13314 = (state_13313[(1)]);
if((state_val_13314 === (7))){
var inst_13231 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
var statearr_13315_13379 = state_13313__$1;
(statearr_13315_13379[(2)] = inst_13231);

(statearr_13315_13379[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (20))){
var inst_13243 = (state_13313[(7)]);
var state_13313__$1 = state_13313;
var statearr_13316_13380 = state_13313__$1;
(statearr_13316_13380[(2)] = inst_13243);

(statearr_13316_13380[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (27))){
var state_13313__$1 = state_13313;
var statearr_13317_13381 = state_13313__$1;
(statearr_13317_13381[(2)] = null);

(statearr_13317_13381[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (1))){
var inst_13219 = (state_13313[(8)]);
var inst_13219__$1 = calc_state();
var inst_13221 = (inst_13219__$1 == null);
var inst_13222 = cljs.core.not(inst_13221);
var state_13313__$1 = (function (){var statearr_13318 = state_13313;
(statearr_13318[(8)] = inst_13219__$1);

return statearr_13318;
})();
if(inst_13222){
var statearr_13319_13382 = state_13313__$1;
(statearr_13319_13382[(1)] = (2));

} else {
var statearr_13320_13383 = state_13313__$1;
(statearr_13320_13383[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (24))){
var inst_13266 = (state_13313[(9)]);
var inst_13287 = (state_13313[(10)]);
var inst_13273 = (state_13313[(11)]);
var inst_13287__$1 = (inst_13266.cljs$core$IFn$_invoke$arity$1 ? inst_13266.cljs$core$IFn$_invoke$arity$1(inst_13273) : inst_13266.call(null,inst_13273));
var state_13313__$1 = (function (){var statearr_13321 = state_13313;
(statearr_13321[(10)] = inst_13287__$1);

return statearr_13321;
})();
if(cljs.core.truth_(inst_13287__$1)){
var statearr_13322_13384 = state_13313__$1;
(statearr_13322_13384[(1)] = (29));

} else {
var statearr_13323_13385 = state_13313__$1;
(statearr_13323_13385[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (4))){
var inst_13234 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
if(cljs.core.truth_(inst_13234)){
var statearr_13324_13386 = state_13313__$1;
(statearr_13324_13386[(1)] = (8));

} else {
var statearr_13325_13387 = state_13313__$1;
(statearr_13325_13387[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (15))){
var inst_13260 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
if(cljs.core.truth_(inst_13260)){
var statearr_13326_13388 = state_13313__$1;
(statearr_13326_13388[(1)] = (19));

} else {
var statearr_13327_13389 = state_13313__$1;
(statearr_13327_13389[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (21))){
var inst_13265 = (state_13313[(12)]);
var inst_13265__$1 = (state_13313[(2)]);
var inst_13266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13265__$1,cljs.core.cst$kw$solos);
var inst_13267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13265__$1,cljs.core.cst$kw$mutes);
var inst_13268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13265__$1,cljs.core.cst$kw$reads);
var state_13313__$1 = (function (){var statearr_13328 = state_13313;
(statearr_13328[(13)] = inst_13267);

(statearr_13328[(12)] = inst_13265__$1);

(statearr_13328[(9)] = inst_13266);

return statearr_13328;
})();
return cljs.core.async.ioc_alts_BANG_(state_13313__$1,(22),inst_13268);
} else {
if((state_val_13314 === (31))){
var inst_13295 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
if(cljs.core.truth_(inst_13295)){
var statearr_13329_13390 = state_13313__$1;
(statearr_13329_13390[(1)] = (32));

} else {
var statearr_13330_13391 = state_13313__$1;
(statearr_13330_13391[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (32))){
var inst_13272 = (state_13313[(14)]);
var state_13313__$1 = state_13313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13313__$1,(35),out,inst_13272);
} else {
if((state_val_13314 === (33))){
var inst_13265 = (state_13313[(12)]);
var inst_13243 = inst_13265;
var state_13313__$1 = (function (){var statearr_13331 = state_13313;
(statearr_13331[(7)] = inst_13243);

return statearr_13331;
})();
var statearr_13332_13392 = state_13313__$1;
(statearr_13332_13392[(2)] = null);

(statearr_13332_13392[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (13))){
var inst_13243 = (state_13313[(7)]);
var inst_13250 = inst_13243.cljs$lang$protocol_mask$partition0$;
var inst_13251 = (inst_13250 & (64));
var inst_13252 = inst_13243.cljs$core$ISeq$;
var inst_13253 = (inst_13251) || (inst_13252);
var state_13313__$1 = state_13313;
if(cljs.core.truth_(inst_13253)){
var statearr_13333_13393 = state_13313__$1;
(statearr_13333_13393[(1)] = (16));

} else {
var statearr_13334_13394 = state_13313__$1;
(statearr_13334_13394[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (22))){
var inst_13273 = (state_13313[(11)]);
var inst_13272 = (state_13313[(14)]);
var inst_13271 = (state_13313[(2)]);
var inst_13272__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13271,(0),null);
var inst_13273__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13271,(1),null);
var inst_13274 = (inst_13272__$1 == null);
var inst_13275 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13273__$1,change);
var inst_13276 = (inst_13274) || (inst_13275);
var state_13313__$1 = (function (){var statearr_13335 = state_13313;
(statearr_13335[(11)] = inst_13273__$1);

(statearr_13335[(14)] = inst_13272__$1);

return statearr_13335;
})();
if(cljs.core.truth_(inst_13276)){
var statearr_13336_13395 = state_13313__$1;
(statearr_13336_13395[(1)] = (23));

} else {
var statearr_13337_13396 = state_13313__$1;
(statearr_13337_13396[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (36))){
var inst_13265 = (state_13313[(12)]);
var inst_13243 = inst_13265;
var state_13313__$1 = (function (){var statearr_13338 = state_13313;
(statearr_13338[(7)] = inst_13243);

return statearr_13338;
})();
var statearr_13339_13397 = state_13313__$1;
(statearr_13339_13397[(2)] = null);

(statearr_13339_13397[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (29))){
var inst_13287 = (state_13313[(10)]);
var state_13313__$1 = state_13313;
var statearr_13340_13398 = state_13313__$1;
(statearr_13340_13398[(2)] = inst_13287);

(statearr_13340_13398[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (6))){
var state_13313__$1 = state_13313;
var statearr_13341_13399 = state_13313__$1;
(statearr_13341_13399[(2)] = false);

(statearr_13341_13399[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (28))){
var inst_13283 = (state_13313[(2)]);
var inst_13284 = calc_state();
var inst_13243 = inst_13284;
var state_13313__$1 = (function (){var statearr_13342 = state_13313;
(statearr_13342[(15)] = inst_13283);

(statearr_13342[(7)] = inst_13243);

return statearr_13342;
})();
var statearr_13343_13400 = state_13313__$1;
(statearr_13343_13400[(2)] = null);

(statearr_13343_13400[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (25))){
var inst_13309 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
var statearr_13344_13401 = state_13313__$1;
(statearr_13344_13401[(2)] = inst_13309);

(statearr_13344_13401[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (34))){
var inst_13307 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
var statearr_13345_13402 = state_13313__$1;
(statearr_13345_13402[(2)] = inst_13307);

(statearr_13345_13402[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (17))){
var state_13313__$1 = state_13313;
var statearr_13346_13403 = state_13313__$1;
(statearr_13346_13403[(2)] = false);

(statearr_13346_13403[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (3))){
var state_13313__$1 = state_13313;
var statearr_13347_13404 = state_13313__$1;
(statearr_13347_13404[(2)] = false);

(statearr_13347_13404[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (12))){
var inst_13311 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13313__$1,inst_13311);
} else {
if((state_val_13314 === (2))){
var inst_13219 = (state_13313[(8)]);
var inst_13224 = inst_13219.cljs$lang$protocol_mask$partition0$;
var inst_13225 = (inst_13224 & (64));
var inst_13226 = inst_13219.cljs$core$ISeq$;
var inst_13227 = (inst_13225) || (inst_13226);
var state_13313__$1 = state_13313;
if(cljs.core.truth_(inst_13227)){
var statearr_13348_13405 = state_13313__$1;
(statearr_13348_13405[(1)] = (5));

} else {
var statearr_13349_13406 = state_13313__$1;
(statearr_13349_13406[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (23))){
var inst_13272 = (state_13313[(14)]);
var inst_13278 = (inst_13272 == null);
var state_13313__$1 = state_13313;
if(cljs.core.truth_(inst_13278)){
var statearr_13350_13407 = state_13313__$1;
(statearr_13350_13407[(1)] = (26));

} else {
var statearr_13351_13408 = state_13313__$1;
(statearr_13351_13408[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (35))){
var inst_13298 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
if(cljs.core.truth_(inst_13298)){
var statearr_13352_13409 = state_13313__$1;
(statearr_13352_13409[(1)] = (36));

} else {
var statearr_13353_13410 = state_13313__$1;
(statearr_13353_13410[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (19))){
var inst_13243 = (state_13313[(7)]);
var inst_13262 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13243);
var state_13313__$1 = state_13313;
var statearr_13354_13411 = state_13313__$1;
(statearr_13354_13411[(2)] = inst_13262);

(statearr_13354_13411[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (11))){
var inst_13243 = (state_13313[(7)]);
var inst_13247 = (inst_13243 == null);
var inst_13248 = cljs.core.not(inst_13247);
var state_13313__$1 = state_13313;
if(inst_13248){
var statearr_13355_13412 = state_13313__$1;
(statearr_13355_13412[(1)] = (13));

} else {
var statearr_13356_13413 = state_13313__$1;
(statearr_13356_13413[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (9))){
var inst_13219 = (state_13313[(8)]);
var state_13313__$1 = state_13313;
var statearr_13357_13414 = state_13313__$1;
(statearr_13357_13414[(2)] = inst_13219);

(statearr_13357_13414[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (5))){
var state_13313__$1 = state_13313;
var statearr_13358_13415 = state_13313__$1;
(statearr_13358_13415[(2)] = true);

(statearr_13358_13415[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (14))){
var state_13313__$1 = state_13313;
var statearr_13359_13416 = state_13313__$1;
(statearr_13359_13416[(2)] = false);

(statearr_13359_13416[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (26))){
var inst_13273 = (state_13313[(11)]);
var inst_13280 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13273);
var state_13313__$1 = state_13313;
var statearr_13360_13417 = state_13313__$1;
(statearr_13360_13417[(2)] = inst_13280);

(statearr_13360_13417[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (16))){
var state_13313__$1 = state_13313;
var statearr_13361_13418 = state_13313__$1;
(statearr_13361_13418[(2)] = true);

(statearr_13361_13418[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (38))){
var inst_13303 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
var statearr_13362_13419 = state_13313__$1;
(statearr_13362_13419[(2)] = inst_13303);

(statearr_13362_13419[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (30))){
var inst_13267 = (state_13313[(13)]);
var inst_13266 = (state_13313[(9)]);
var inst_13273 = (state_13313[(11)]);
var inst_13290 = cljs.core.empty_QMARK_(inst_13266);
var inst_13291 = (inst_13267.cljs$core$IFn$_invoke$arity$1 ? inst_13267.cljs$core$IFn$_invoke$arity$1(inst_13273) : inst_13267.call(null,inst_13273));
var inst_13292 = cljs.core.not(inst_13291);
var inst_13293 = (inst_13290) && (inst_13292);
var state_13313__$1 = state_13313;
var statearr_13363_13420 = state_13313__$1;
(statearr_13363_13420[(2)] = inst_13293);

(statearr_13363_13420[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (10))){
var inst_13219 = (state_13313[(8)]);
var inst_13239 = (state_13313[(2)]);
var inst_13240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13239,cljs.core.cst$kw$solos);
var inst_13241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13239,cljs.core.cst$kw$mutes);
var inst_13242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13239,cljs.core.cst$kw$reads);
var inst_13243 = inst_13219;
var state_13313__$1 = (function (){var statearr_13364 = state_13313;
(statearr_13364[(16)] = inst_13241);

(statearr_13364[(17)] = inst_13240);

(statearr_13364[(18)] = inst_13242);

(statearr_13364[(7)] = inst_13243);

return statearr_13364;
})();
var statearr_13365_13421 = state_13313__$1;
(statearr_13365_13421[(2)] = null);

(statearr_13365_13421[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (18))){
var inst_13257 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
var statearr_13366_13422 = state_13313__$1;
(statearr_13366_13422[(2)] = inst_13257);

(statearr_13366_13422[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (37))){
var state_13313__$1 = state_13313;
var statearr_13367_13423 = state_13313__$1;
(statearr_13367_13423[(2)] = null);

(statearr_13367_13423[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13314 === (8))){
var inst_13219 = (state_13313[(8)]);
var inst_13236 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13219);
var state_13313__$1 = state_13313;
var statearr_13368_13424 = state_13313__$1;
(statearr_13368_13424[(2)] = inst_13236);

(statearr_13368_13424[(1)] = (10));


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
});})(c__11645__auto___13378,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11531__auto__,c__11645__auto___13378,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11532__auto__ = null;
var cljs$core$async$mix_$_state_machine__11532__auto____0 = (function (){
var statearr_13372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13372[(0)] = cljs$core$async$mix_$_state_machine__11532__auto__);

(statearr_13372[(1)] = (1));

return statearr_13372;
});
var cljs$core$async$mix_$_state_machine__11532__auto____1 = (function (state_13313){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_13313);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e13373){if((e13373 instanceof Object)){
var ex__11535__auto__ = e13373;
var statearr_13374_13425 = state_13313;
(statearr_13374_13425[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13313);

return cljs.core.cst$kw$recur;
} else {
throw e13373;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__13426 = state_13313;
state_13313 = G__13426;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11532__auto__ = function(state_13313){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11532__auto____1.call(this,state_13313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11532__auto____0;
cljs$core$async$mix_$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11532__auto____1;
return cljs$core$async$mix_$_state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___13378,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11647__auto__ = (function (){var statearr_13375 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_13375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___13378);

return statearr_13375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___13378,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args13427 = [];
var len__5729__auto___13430 = arguments.length;
var i__5730__auto___13431 = (0);
while(true){
if((i__5730__auto___13431 < len__5729__auto___13430)){
args13427.push((arguments[i__5730__auto___13431]));

var G__13432 = (i__5730__auto___13431 + (1));
i__5730__auto___13431 = G__13432;
continue;
} else {
}
break;
}

var G__13429 = args13427.length;
switch (G__13429) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13427.length)].join('')));

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
var args13435 = [];
var len__5729__auto___13563 = arguments.length;
var i__5730__auto___13564 = (0);
while(true){
if((i__5730__auto___13564 < len__5729__auto___13563)){
args13435.push((arguments[i__5730__auto___13564]));

var G__13565 = (i__5730__auto___13564 + (1));
i__5730__auto___13564 = G__13565;
continue;
} else {
}
break;
}

var G__13437 = args13435.length;
switch (G__13437) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13435.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__13438 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13438) : cljs.core.atom.call(null,G__13438));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4671__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4671__auto__,mults){
return (function (p1__13434_SHARP_){
if(cljs.core.truth_((p1__13434_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13434_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13434_SHARP_.call(null,topic)))){
return p1__13434_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13434_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4671__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13439 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13440){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13440 = meta13440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13441,meta13440__$1){
var self__ = this;
var _13441__$1 = this;
return (new cljs.core.async.t_cljs$core$async13439(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13440__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13441){
var self__ = this;
var _13441__$1 = this;
return self__.meta13440;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13439.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13439.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async13439.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13439.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async13439.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__13442 = self__.mults;
var G__13443 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13442,G__13443) : cljs.core.reset_BANG_.call(null,G__13442,G__13443));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13439.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13439.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta13440], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13439";

cljs.core.async.t_cljs$core$async13439.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async13439");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13439 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13439(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13440){
return (new cljs.core.async.t_cljs$core$async13439(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13440));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13439(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11645__auto___13567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___13567,mults,ensure_mult,p){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___13567,mults,ensure_mult,p){
return (function (state_13515){
var state_val_13516 = (state_13515[(1)]);
if((state_val_13516 === (7))){
var inst_13511 = (state_13515[(2)]);
var state_13515__$1 = state_13515;
var statearr_13517_13568 = state_13515__$1;
(statearr_13517_13568[(2)] = inst_13511);

(statearr_13517_13568[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (20))){
var state_13515__$1 = state_13515;
var statearr_13518_13569 = state_13515__$1;
(statearr_13518_13569[(2)] = null);

(statearr_13518_13569[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (1))){
var state_13515__$1 = state_13515;
var statearr_13519_13570 = state_13515__$1;
(statearr_13519_13570[(2)] = null);

(statearr_13519_13570[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (24))){
var inst_13494 = (state_13515[(7)]);
var inst_13503 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13494);
var state_13515__$1 = state_13515;
var statearr_13520_13571 = state_13515__$1;
(statearr_13520_13571[(2)] = inst_13503);

(statearr_13520_13571[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (4))){
var inst_13446 = (state_13515[(8)]);
var inst_13446__$1 = (state_13515[(2)]);
var inst_13447 = (inst_13446__$1 == null);
var state_13515__$1 = (function (){var statearr_13521 = state_13515;
(statearr_13521[(8)] = inst_13446__$1);

return statearr_13521;
})();
if(cljs.core.truth_(inst_13447)){
var statearr_13522_13572 = state_13515__$1;
(statearr_13522_13572[(1)] = (5));

} else {
var statearr_13523_13573 = state_13515__$1;
(statearr_13523_13573[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (15))){
var inst_13488 = (state_13515[(2)]);
var state_13515__$1 = state_13515;
var statearr_13524_13574 = state_13515__$1;
(statearr_13524_13574[(2)] = inst_13488);

(statearr_13524_13574[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (21))){
var inst_13508 = (state_13515[(2)]);
var state_13515__$1 = (function (){var statearr_13525 = state_13515;
(statearr_13525[(9)] = inst_13508);

return statearr_13525;
})();
var statearr_13526_13575 = state_13515__$1;
(statearr_13526_13575[(2)] = null);

(statearr_13526_13575[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (13))){
var inst_13470 = (state_13515[(10)]);
var inst_13472 = cljs.core.chunked_seq_QMARK_(inst_13470);
var state_13515__$1 = state_13515;
if(inst_13472){
var statearr_13527_13576 = state_13515__$1;
(statearr_13527_13576[(1)] = (16));

} else {
var statearr_13528_13577 = state_13515__$1;
(statearr_13528_13577[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (22))){
var inst_13500 = (state_13515[(2)]);
var state_13515__$1 = state_13515;
if(cljs.core.truth_(inst_13500)){
var statearr_13529_13578 = state_13515__$1;
(statearr_13529_13578[(1)] = (23));

} else {
var statearr_13530_13579 = state_13515__$1;
(statearr_13530_13579[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (6))){
var inst_13494 = (state_13515[(7)]);
var inst_13446 = (state_13515[(8)]);
var inst_13496 = (state_13515[(11)]);
var inst_13494__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13446) : topic_fn.call(null,inst_13446));
var inst_13495 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_13496__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13495,inst_13494__$1);
var state_13515__$1 = (function (){var statearr_13531 = state_13515;
(statearr_13531[(7)] = inst_13494__$1);

(statearr_13531[(11)] = inst_13496__$1);

return statearr_13531;
})();
if(cljs.core.truth_(inst_13496__$1)){
var statearr_13532_13580 = state_13515__$1;
(statearr_13532_13580[(1)] = (19));

} else {
var statearr_13533_13581 = state_13515__$1;
(statearr_13533_13581[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (25))){
var inst_13505 = (state_13515[(2)]);
var state_13515__$1 = state_13515;
var statearr_13534_13582 = state_13515__$1;
(statearr_13534_13582[(2)] = inst_13505);

(statearr_13534_13582[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (17))){
var inst_13470 = (state_13515[(10)]);
var inst_13479 = cljs.core.first(inst_13470);
var inst_13480 = cljs.core.async.muxch_STAR_(inst_13479);
var inst_13481 = cljs.core.async.close_BANG_(inst_13480);
var inst_13482 = cljs.core.next(inst_13470);
var inst_13456 = inst_13482;
var inst_13457 = null;
var inst_13458 = (0);
var inst_13459 = (0);
var state_13515__$1 = (function (){var statearr_13535 = state_13515;
(statearr_13535[(12)] = inst_13456);

(statearr_13535[(13)] = inst_13481);

(statearr_13535[(14)] = inst_13457);

(statearr_13535[(15)] = inst_13458);

(statearr_13535[(16)] = inst_13459);

return statearr_13535;
})();
var statearr_13536_13583 = state_13515__$1;
(statearr_13536_13583[(2)] = null);

(statearr_13536_13583[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (3))){
var inst_13513 = (state_13515[(2)]);
var state_13515__$1 = state_13515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13515__$1,inst_13513);
} else {
if((state_val_13516 === (12))){
var inst_13490 = (state_13515[(2)]);
var state_13515__$1 = state_13515;
var statearr_13537_13584 = state_13515__$1;
(statearr_13537_13584[(2)] = inst_13490);

(statearr_13537_13584[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (2))){
var state_13515__$1 = state_13515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13515__$1,(4),ch);
} else {
if((state_val_13516 === (23))){
var state_13515__$1 = state_13515;
var statearr_13538_13585 = state_13515__$1;
(statearr_13538_13585[(2)] = null);

(statearr_13538_13585[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (19))){
var inst_13446 = (state_13515[(8)]);
var inst_13496 = (state_13515[(11)]);
var inst_13498 = cljs.core.async.muxch_STAR_(inst_13496);
var state_13515__$1 = state_13515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13515__$1,(22),inst_13498,inst_13446);
} else {
if((state_val_13516 === (11))){
var inst_13456 = (state_13515[(12)]);
var inst_13470 = (state_13515[(10)]);
var inst_13470__$1 = cljs.core.seq(inst_13456);
var state_13515__$1 = (function (){var statearr_13539 = state_13515;
(statearr_13539[(10)] = inst_13470__$1);

return statearr_13539;
})();
if(inst_13470__$1){
var statearr_13540_13586 = state_13515__$1;
(statearr_13540_13586[(1)] = (13));

} else {
var statearr_13541_13587 = state_13515__$1;
(statearr_13541_13587[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (9))){
var inst_13492 = (state_13515[(2)]);
var state_13515__$1 = state_13515;
var statearr_13542_13588 = state_13515__$1;
(statearr_13542_13588[(2)] = inst_13492);

(statearr_13542_13588[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (5))){
var inst_13453 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_13454 = cljs.core.vals(inst_13453);
var inst_13455 = cljs.core.seq(inst_13454);
var inst_13456 = inst_13455;
var inst_13457 = null;
var inst_13458 = (0);
var inst_13459 = (0);
var state_13515__$1 = (function (){var statearr_13543 = state_13515;
(statearr_13543[(12)] = inst_13456);

(statearr_13543[(14)] = inst_13457);

(statearr_13543[(15)] = inst_13458);

(statearr_13543[(16)] = inst_13459);

return statearr_13543;
})();
var statearr_13544_13589 = state_13515__$1;
(statearr_13544_13589[(2)] = null);

(statearr_13544_13589[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (14))){
var state_13515__$1 = state_13515;
var statearr_13548_13590 = state_13515__$1;
(statearr_13548_13590[(2)] = null);

(statearr_13548_13590[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (16))){
var inst_13470 = (state_13515[(10)]);
var inst_13474 = cljs.core.chunk_first(inst_13470);
var inst_13475 = cljs.core.chunk_rest(inst_13470);
var inst_13476 = cljs.core.count(inst_13474);
var inst_13456 = inst_13475;
var inst_13457 = inst_13474;
var inst_13458 = inst_13476;
var inst_13459 = (0);
var state_13515__$1 = (function (){var statearr_13549 = state_13515;
(statearr_13549[(12)] = inst_13456);

(statearr_13549[(14)] = inst_13457);

(statearr_13549[(15)] = inst_13458);

(statearr_13549[(16)] = inst_13459);

return statearr_13549;
})();
var statearr_13550_13591 = state_13515__$1;
(statearr_13550_13591[(2)] = null);

(statearr_13550_13591[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (10))){
var inst_13456 = (state_13515[(12)]);
var inst_13457 = (state_13515[(14)]);
var inst_13458 = (state_13515[(15)]);
var inst_13459 = (state_13515[(16)]);
var inst_13464 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13457,inst_13459);
var inst_13465 = cljs.core.async.muxch_STAR_(inst_13464);
var inst_13466 = cljs.core.async.close_BANG_(inst_13465);
var inst_13467 = (inst_13459 + (1));
var tmp13545 = inst_13456;
var tmp13546 = inst_13457;
var tmp13547 = inst_13458;
var inst_13456__$1 = tmp13545;
var inst_13457__$1 = tmp13546;
var inst_13458__$1 = tmp13547;
var inst_13459__$1 = inst_13467;
var state_13515__$1 = (function (){var statearr_13551 = state_13515;
(statearr_13551[(12)] = inst_13456__$1);

(statearr_13551[(14)] = inst_13457__$1);

(statearr_13551[(15)] = inst_13458__$1);

(statearr_13551[(17)] = inst_13466);

(statearr_13551[(16)] = inst_13459__$1);

return statearr_13551;
})();
var statearr_13552_13592 = state_13515__$1;
(statearr_13552_13592[(2)] = null);

(statearr_13552_13592[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (18))){
var inst_13485 = (state_13515[(2)]);
var state_13515__$1 = state_13515;
var statearr_13553_13593 = state_13515__$1;
(statearr_13553_13593[(2)] = inst_13485);

(statearr_13553_13593[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13516 === (8))){
var inst_13458 = (state_13515[(15)]);
var inst_13459 = (state_13515[(16)]);
var inst_13461 = (inst_13459 < inst_13458);
var inst_13462 = inst_13461;
var state_13515__$1 = state_13515;
if(cljs.core.truth_(inst_13462)){
var statearr_13554_13594 = state_13515__$1;
(statearr_13554_13594[(1)] = (10));

} else {
var statearr_13555_13595 = state_13515__$1;
(statearr_13555_13595[(1)] = (11));

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
});})(c__11645__auto___13567,mults,ensure_mult,p))
;
return ((function (switch__11531__auto__,c__11645__auto___13567,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11532__auto__ = null;
var cljs$core$async$state_machine__11532__auto____0 = (function (){
var statearr_13559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13559[(0)] = cljs$core$async$state_machine__11532__auto__);

(statearr_13559[(1)] = (1));

return statearr_13559;
});
var cljs$core$async$state_machine__11532__auto____1 = (function (state_13515){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_13515);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e13560){if((e13560 instanceof Object)){
var ex__11535__auto__ = e13560;
var statearr_13561_13596 = state_13515;
(statearr_13561_13596[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13515);

return cljs.core.cst$kw$recur;
} else {
throw e13560;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__13597 = state_13515;
state_13515 = G__13597;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$state_machine__11532__auto__ = function(state_13515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11532__auto____1.call(this,state_13515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11532__auto____0;
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11532__auto____1;
return cljs$core$async$state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___13567,mults,ensure_mult,p))
})();
var state__11647__auto__ = (function (){var statearr_13562 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_13562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___13567);

return statearr_13562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___13567,mults,ensure_mult,p))
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
var args13598 = [];
var len__5729__auto___13601 = arguments.length;
var i__5730__auto___13602 = (0);
while(true){
if((i__5730__auto___13602 < len__5729__auto___13601)){
args13598.push((arguments[i__5730__auto___13602]));

var G__13603 = (i__5730__auto___13602 + (1));
i__5730__auto___13602 = G__13603;
continue;
} else {
}
break;
}

var G__13600 = args13598.length;
switch (G__13600) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13598.length)].join('')));

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
var args13605 = [];
var len__5729__auto___13608 = arguments.length;
var i__5730__auto___13609 = (0);
while(true){
if((i__5730__auto___13609 < len__5729__auto___13608)){
args13605.push((arguments[i__5730__auto___13609]));

var G__13610 = (i__5730__auto___13609 + (1));
i__5730__auto___13609 = G__13610;
continue;
} else {
}
break;
}

var G__13607 = args13605.length;
switch (G__13607) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13605.length)].join('')));

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
var args13612 = [];
var len__5729__auto___13683 = arguments.length;
var i__5730__auto___13684 = (0);
while(true){
if((i__5730__auto___13684 < len__5729__auto___13683)){
args13612.push((arguments[i__5730__auto___13684]));

var G__13685 = (i__5730__auto___13684 + (1));
i__5730__auto___13684 = G__13685;
continue;
} else {
}
break;
}

var G__13614 = args13612.length;
switch (G__13614) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13612.length)].join('')));

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
var c__11645__auto___13687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___13687,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___13687,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13653){
var state_val_13654 = (state_13653[(1)]);
if((state_val_13654 === (7))){
var state_13653__$1 = state_13653;
var statearr_13655_13688 = state_13653__$1;
(statearr_13655_13688[(2)] = null);

(statearr_13655_13688[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13654 === (1))){
var state_13653__$1 = state_13653;
var statearr_13656_13689 = state_13653__$1;
(statearr_13656_13689[(2)] = null);

(statearr_13656_13689[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13654 === (4))){
var inst_13617 = (state_13653[(7)]);
var inst_13619 = (inst_13617 < cnt);
var state_13653__$1 = state_13653;
if(cljs.core.truth_(inst_13619)){
var statearr_13657_13690 = state_13653__$1;
(statearr_13657_13690[(1)] = (6));

} else {
var statearr_13658_13691 = state_13653__$1;
(statearr_13658_13691[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13654 === (15))){
var inst_13649 = (state_13653[(2)]);
var state_13653__$1 = state_13653;
var statearr_13659_13692 = state_13653__$1;
(statearr_13659_13692[(2)] = inst_13649);

(statearr_13659_13692[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13654 === (13))){
var inst_13642 = cljs.core.async.close_BANG_(out);
var state_13653__$1 = state_13653;
var statearr_13660_13693 = state_13653__$1;
(statearr_13660_13693[(2)] = inst_13642);

(statearr_13660_13693[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13654 === (6))){
var state_13653__$1 = state_13653;
var statearr_13661_13694 = state_13653__$1;
(statearr_13661_13694[(2)] = null);

(statearr_13661_13694[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13654 === (3))){
var inst_13651 = (state_13653[(2)]);
var state_13653__$1 = state_13653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13653__$1,inst_13651);
} else {
if((state_val_13654 === (12))){
var inst_13639 = (state_13653[(8)]);
var inst_13639__$1 = (state_13653[(2)]);
var inst_13640 = cljs.core.some(cljs.core.nil_QMARK_,inst_13639__$1);
var state_13653__$1 = (function (){var statearr_13662 = state_13653;
(statearr_13662[(8)] = inst_13639__$1);

return statearr_13662;
})();
if(cljs.core.truth_(inst_13640)){
var statearr_13663_13695 = state_13653__$1;
(statearr_13663_13695[(1)] = (13));

} else {
var statearr_13664_13696 = state_13653__$1;
(statearr_13664_13696[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13654 === (2))){
var inst_13616 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_13617 = (0);
var state_13653__$1 = (function (){var statearr_13665 = state_13653;
(statearr_13665[(9)] = inst_13616);

(statearr_13665[(7)] = inst_13617);

return statearr_13665;
})();
var statearr_13666_13697 = state_13653__$1;
(statearr_13666_13697[(2)] = null);

(statearr_13666_13697[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13654 === (11))){
var inst_13617 = (state_13653[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_13653,(10),Object,null,(9));
var inst_13626 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13617) : chs__$1.call(null,inst_13617));
var inst_13627 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13617) : done.call(null,inst_13617));
var inst_13628 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13626,inst_13627);
var state_13653__$1 = state_13653;
var statearr_13667_13698 = state_13653__$1;
(statearr_13667_13698[(2)] = inst_13628);


cljs.core.async.impl.ioc_helpers.process_exception(state_13653__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_13654 === (9))){
var inst_13617 = (state_13653[(7)]);
var inst_13630 = (state_13653[(2)]);
var inst_13631 = (inst_13617 + (1));
var inst_13617__$1 = inst_13631;
var state_13653__$1 = (function (){var statearr_13668 = state_13653;
(statearr_13668[(10)] = inst_13630);

(statearr_13668[(7)] = inst_13617__$1);

return statearr_13668;
})();
var statearr_13669_13699 = state_13653__$1;
(statearr_13669_13699[(2)] = null);

(statearr_13669_13699[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13654 === (5))){
var inst_13637 = (state_13653[(2)]);
var state_13653__$1 = (function (){var statearr_13670 = state_13653;
(statearr_13670[(11)] = inst_13637);

return statearr_13670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13653__$1,(12),dchan);
} else {
if((state_val_13654 === (14))){
var inst_13639 = (state_13653[(8)]);
var inst_13644 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13639);
var state_13653__$1 = state_13653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13653__$1,(16),out,inst_13644);
} else {
if((state_val_13654 === (16))){
var inst_13646 = (state_13653[(2)]);
var state_13653__$1 = (function (){var statearr_13671 = state_13653;
(statearr_13671[(12)] = inst_13646);

return statearr_13671;
})();
var statearr_13672_13700 = state_13653__$1;
(statearr_13672_13700[(2)] = null);

(statearr_13672_13700[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13654 === (10))){
var inst_13621 = (state_13653[(2)]);
var inst_13622 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13653__$1 = (function (){var statearr_13673 = state_13653;
(statearr_13673[(13)] = inst_13621);

return statearr_13673;
})();
var statearr_13674_13701 = state_13653__$1;
(statearr_13674_13701[(2)] = inst_13622);


cljs.core.async.impl.ioc_helpers.process_exception(state_13653__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_13654 === (8))){
var inst_13635 = (state_13653[(2)]);
var state_13653__$1 = state_13653;
var statearr_13675_13702 = state_13653__$1;
(statearr_13675_13702[(2)] = inst_13635);

(statearr_13675_13702[(1)] = (5));


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
});})(c__11645__auto___13687,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11531__auto__,c__11645__auto___13687,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11532__auto__ = null;
var cljs$core$async$state_machine__11532__auto____0 = (function (){
var statearr_13679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13679[(0)] = cljs$core$async$state_machine__11532__auto__);

(statearr_13679[(1)] = (1));

return statearr_13679;
});
var cljs$core$async$state_machine__11532__auto____1 = (function (state_13653){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_13653);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e13680){if((e13680 instanceof Object)){
var ex__11535__auto__ = e13680;
var statearr_13681_13703 = state_13653;
(statearr_13681_13703[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13653);

return cljs.core.cst$kw$recur;
} else {
throw e13680;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__13704 = state_13653;
state_13653 = G__13704;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$state_machine__11532__auto__ = function(state_13653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11532__auto____1.call(this,state_13653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11532__auto____0;
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11532__auto____1;
return cljs$core$async$state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___13687,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11647__auto__ = (function (){var statearr_13682 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_13682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___13687);

return statearr_13682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___13687,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args13706 = [];
var len__5729__auto___13762 = arguments.length;
var i__5730__auto___13763 = (0);
while(true){
if((i__5730__auto___13763 < len__5729__auto___13762)){
args13706.push((arguments[i__5730__auto___13763]));

var G__13764 = (i__5730__auto___13763 + (1));
i__5730__auto___13763 = G__13764;
continue;
} else {
}
break;
}

var G__13708 = args13706.length;
switch (G__13708) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13706.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11645__auto___13766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___13766,out){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___13766,out){
return (function (state_13738){
var state_val_13739 = (state_13738[(1)]);
if((state_val_13739 === (7))){
var inst_13717 = (state_13738[(7)]);
var inst_13718 = (state_13738[(8)]);
var inst_13717__$1 = (state_13738[(2)]);
var inst_13718__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13717__$1,(0),null);
var inst_13719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13717__$1,(1),null);
var inst_13720 = (inst_13718__$1 == null);
var state_13738__$1 = (function (){var statearr_13740 = state_13738;
(statearr_13740[(7)] = inst_13717__$1);

(statearr_13740[(9)] = inst_13719);

(statearr_13740[(8)] = inst_13718__$1);

return statearr_13740;
})();
if(cljs.core.truth_(inst_13720)){
var statearr_13741_13767 = state_13738__$1;
(statearr_13741_13767[(1)] = (8));

} else {
var statearr_13742_13768 = state_13738__$1;
(statearr_13742_13768[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13739 === (1))){
var inst_13709 = cljs.core.vec(chs);
var inst_13710 = inst_13709;
var state_13738__$1 = (function (){var statearr_13743 = state_13738;
(statearr_13743[(10)] = inst_13710);

return statearr_13743;
})();
var statearr_13744_13769 = state_13738__$1;
(statearr_13744_13769[(2)] = null);

(statearr_13744_13769[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13739 === (4))){
var inst_13710 = (state_13738[(10)]);
var state_13738__$1 = state_13738;
return cljs.core.async.ioc_alts_BANG_(state_13738__$1,(7),inst_13710);
} else {
if((state_val_13739 === (6))){
var inst_13734 = (state_13738[(2)]);
var state_13738__$1 = state_13738;
var statearr_13745_13770 = state_13738__$1;
(statearr_13745_13770[(2)] = inst_13734);

(statearr_13745_13770[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13739 === (3))){
var inst_13736 = (state_13738[(2)]);
var state_13738__$1 = state_13738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13738__$1,inst_13736);
} else {
if((state_val_13739 === (2))){
var inst_13710 = (state_13738[(10)]);
var inst_13712 = cljs.core.count(inst_13710);
var inst_13713 = (inst_13712 > (0));
var state_13738__$1 = state_13738;
if(cljs.core.truth_(inst_13713)){
var statearr_13747_13771 = state_13738__$1;
(statearr_13747_13771[(1)] = (4));

} else {
var statearr_13748_13772 = state_13738__$1;
(statearr_13748_13772[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13739 === (11))){
var inst_13710 = (state_13738[(10)]);
var inst_13727 = (state_13738[(2)]);
var tmp13746 = inst_13710;
var inst_13710__$1 = tmp13746;
var state_13738__$1 = (function (){var statearr_13749 = state_13738;
(statearr_13749[(11)] = inst_13727);

(statearr_13749[(10)] = inst_13710__$1);

return statearr_13749;
})();
var statearr_13750_13773 = state_13738__$1;
(statearr_13750_13773[(2)] = null);

(statearr_13750_13773[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13739 === (9))){
var inst_13718 = (state_13738[(8)]);
var state_13738__$1 = state_13738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13738__$1,(11),out,inst_13718);
} else {
if((state_val_13739 === (5))){
var inst_13732 = cljs.core.async.close_BANG_(out);
var state_13738__$1 = state_13738;
var statearr_13751_13774 = state_13738__$1;
(statearr_13751_13774[(2)] = inst_13732);

(statearr_13751_13774[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13739 === (10))){
var inst_13730 = (state_13738[(2)]);
var state_13738__$1 = state_13738;
var statearr_13752_13775 = state_13738__$1;
(statearr_13752_13775[(2)] = inst_13730);

(statearr_13752_13775[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13739 === (8))){
var inst_13717 = (state_13738[(7)]);
var inst_13719 = (state_13738[(9)]);
var inst_13718 = (state_13738[(8)]);
var inst_13710 = (state_13738[(10)]);
var inst_13722 = (function (){var cs = inst_13710;
var vec__13715 = inst_13717;
var v = inst_13718;
var c = inst_13719;
return ((function (cs,vec__13715,v,c,inst_13717,inst_13719,inst_13718,inst_13710,state_val_13739,c__11645__auto___13766,out){
return (function (p1__13705_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13705_SHARP_);
});
;})(cs,vec__13715,v,c,inst_13717,inst_13719,inst_13718,inst_13710,state_val_13739,c__11645__auto___13766,out))
})();
var inst_13723 = cljs.core.filterv(inst_13722,inst_13710);
var inst_13710__$1 = inst_13723;
var state_13738__$1 = (function (){var statearr_13753 = state_13738;
(statearr_13753[(10)] = inst_13710__$1);

return statearr_13753;
})();
var statearr_13754_13776 = state_13738__$1;
(statearr_13754_13776[(2)] = null);

(statearr_13754_13776[(1)] = (2));


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
});})(c__11645__auto___13766,out))
;
return ((function (switch__11531__auto__,c__11645__auto___13766,out){
return (function() {
var cljs$core$async$state_machine__11532__auto__ = null;
var cljs$core$async$state_machine__11532__auto____0 = (function (){
var statearr_13758 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13758[(0)] = cljs$core$async$state_machine__11532__auto__);

(statearr_13758[(1)] = (1));

return statearr_13758;
});
var cljs$core$async$state_machine__11532__auto____1 = (function (state_13738){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_13738);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e13759){if((e13759 instanceof Object)){
var ex__11535__auto__ = e13759;
var statearr_13760_13777 = state_13738;
(statearr_13760_13777[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13738);

return cljs.core.cst$kw$recur;
} else {
throw e13759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__13778 = state_13738;
state_13738 = G__13778;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$state_machine__11532__auto__ = function(state_13738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11532__auto____1.call(this,state_13738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11532__auto____0;
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11532__auto____1;
return cljs$core$async$state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___13766,out))
})();
var state__11647__auto__ = (function (){var statearr_13761 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_13761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___13766);

return statearr_13761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___13766,out))
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
var args13779 = [];
var len__5729__auto___13828 = arguments.length;
var i__5730__auto___13829 = (0);
while(true){
if((i__5730__auto___13829 < len__5729__auto___13828)){
args13779.push((arguments[i__5730__auto___13829]));

var G__13830 = (i__5730__auto___13829 + (1));
i__5730__auto___13829 = G__13830;
continue;
} else {
}
break;
}

var G__13781 = args13779.length;
switch (G__13781) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13779.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11645__auto___13832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___13832,out){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___13832,out){
return (function (state_13805){
var state_val_13806 = (state_13805[(1)]);
if((state_val_13806 === (7))){
var inst_13787 = (state_13805[(7)]);
var inst_13787__$1 = (state_13805[(2)]);
var inst_13788 = (inst_13787__$1 == null);
var inst_13789 = cljs.core.not(inst_13788);
var state_13805__$1 = (function (){var statearr_13807 = state_13805;
(statearr_13807[(7)] = inst_13787__$1);

return statearr_13807;
})();
if(inst_13789){
var statearr_13808_13833 = state_13805__$1;
(statearr_13808_13833[(1)] = (8));

} else {
var statearr_13809_13834 = state_13805__$1;
(statearr_13809_13834[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13806 === (1))){
var inst_13782 = (0);
var state_13805__$1 = (function (){var statearr_13810 = state_13805;
(statearr_13810[(8)] = inst_13782);

return statearr_13810;
})();
var statearr_13811_13835 = state_13805__$1;
(statearr_13811_13835[(2)] = null);

(statearr_13811_13835[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13806 === (4))){
var state_13805__$1 = state_13805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13805__$1,(7),ch);
} else {
if((state_val_13806 === (6))){
var inst_13800 = (state_13805[(2)]);
var state_13805__$1 = state_13805;
var statearr_13812_13836 = state_13805__$1;
(statearr_13812_13836[(2)] = inst_13800);

(statearr_13812_13836[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13806 === (3))){
var inst_13802 = (state_13805[(2)]);
var inst_13803 = cljs.core.async.close_BANG_(out);
var state_13805__$1 = (function (){var statearr_13813 = state_13805;
(statearr_13813[(9)] = inst_13802);

return statearr_13813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13805__$1,inst_13803);
} else {
if((state_val_13806 === (2))){
var inst_13782 = (state_13805[(8)]);
var inst_13784 = (inst_13782 < n);
var state_13805__$1 = state_13805;
if(cljs.core.truth_(inst_13784)){
var statearr_13814_13837 = state_13805__$1;
(statearr_13814_13837[(1)] = (4));

} else {
var statearr_13815_13838 = state_13805__$1;
(statearr_13815_13838[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13806 === (11))){
var inst_13782 = (state_13805[(8)]);
var inst_13792 = (state_13805[(2)]);
var inst_13793 = (inst_13782 + (1));
var inst_13782__$1 = inst_13793;
var state_13805__$1 = (function (){var statearr_13816 = state_13805;
(statearr_13816[(8)] = inst_13782__$1);

(statearr_13816[(10)] = inst_13792);

return statearr_13816;
})();
var statearr_13817_13839 = state_13805__$1;
(statearr_13817_13839[(2)] = null);

(statearr_13817_13839[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13806 === (9))){
var state_13805__$1 = state_13805;
var statearr_13818_13840 = state_13805__$1;
(statearr_13818_13840[(2)] = null);

(statearr_13818_13840[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13806 === (5))){
var state_13805__$1 = state_13805;
var statearr_13819_13841 = state_13805__$1;
(statearr_13819_13841[(2)] = null);

(statearr_13819_13841[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13806 === (10))){
var inst_13797 = (state_13805[(2)]);
var state_13805__$1 = state_13805;
var statearr_13820_13842 = state_13805__$1;
(statearr_13820_13842[(2)] = inst_13797);

(statearr_13820_13842[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13806 === (8))){
var inst_13787 = (state_13805[(7)]);
var state_13805__$1 = state_13805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13805__$1,(11),out,inst_13787);
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
});})(c__11645__auto___13832,out))
;
return ((function (switch__11531__auto__,c__11645__auto___13832,out){
return (function() {
var cljs$core$async$state_machine__11532__auto__ = null;
var cljs$core$async$state_machine__11532__auto____0 = (function (){
var statearr_13824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13824[(0)] = cljs$core$async$state_machine__11532__auto__);

(statearr_13824[(1)] = (1));

return statearr_13824;
});
var cljs$core$async$state_machine__11532__auto____1 = (function (state_13805){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_13805);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e13825){if((e13825 instanceof Object)){
var ex__11535__auto__ = e13825;
var statearr_13826_13843 = state_13805;
(statearr_13826_13843[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13805);

return cljs.core.cst$kw$recur;
} else {
throw e13825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__13844 = state_13805;
state_13805 = G__13844;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$state_machine__11532__auto__ = function(state_13805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11532__auto____1.call(this,state_13805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11532__auto____0;
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11532__auto____1;
return cljs$core$async$state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___13832,out))
})();
var state__11647__auto__ = (function (){var statearr_13827 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_13827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___13832);

return statearr_13827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___13832,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13854 = (function (map_LT_,f,ch,meta13855){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13855 = meta13855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13856,meta13855__$1){
var self__ = this;
var _13856__$1 = this;
return (new cljs.core.async.t_cljs$core$async13854(self__.map_LT_,self__.f,self__.ch,meta13855__$1));
});

cljs.core.async.t_cljs$core$async13854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13856){
var self__ = this;
var _13856__$1 = this;
return self__.meta13855;
});

cljs.core.async.t_cljs$core$async13854.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async13854.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async13854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13857 = (function (map_LT_,f,ch,meta13855,_,fn1,meta13858){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13855 = meta13855;
this._ = _;
this.fn1 = fn1;
this.meta13858 = meta13858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13859,meta13858__$1){
var self__ = this;
var _13859__$1 = this;
return (new cljs.core.async.t_cljs$core$async13857(self__.map_LT_,self__.f,self__.ch,self__.meta13855,self__._,self__.fn1,meta13858__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13859){
var self__ = this;
var _13859__$1 = this;
return self__.meta13858;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13857.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13857.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13845_SHARP_){
var G__13860 = (((p1__13845_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13845_SHARP_) : self__.f.call(null,p1__13845_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13860) : f1.call(null,G__13860));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13857.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta13855,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async13854], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta13858], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13857";

cljs.core.async.t_cljs$core$async13857.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async13857");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13857 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13857(map_LT___$1,f__$1,ch__$1,meta13855__$1,___$2,fn1__$1,meta13858){
return (new cljs.core.async.t_cljs$core$async13857(map_LT___$1,f__$1,ch__$1,meta13855__$1,___$2,fn1__$1,meta13858));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13857(self__.map_LT_,self__.f,self__.ch,self__.meta13855,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4659__auto__ = ret;
if(cljs.core.truth_(and__4659__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__4659__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13861 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13861) : self__.f.call(null,G__13861));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta13855], null);
});

cljs.core.async.t_cljs$core$async13854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13854";

cljs.core.async.t_cljs$core$async13854.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async13854");
});

cljs.core.async.__GT_t_cljs$core$async13854 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13854(map_LT___$1,f__$1,ch__$1,meta13855){
return (new cljs.core.async.t_cljs$core$async13854(map_LT___$1,f__$1,ch__$1,meta13855));
});

}

return (new cljs.core.async.t_cljs$core$async13854(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13865 = (function (map_GT_,f,ch,meta13866){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13866 = meta13866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13867,meta13866__$1){
var self__ = this;
var _13867__$1 = this;
return (new cljs.core.async.t_cljs$core$async13865(self__.map_GT_,self__.f,self__.ch,meta13866__$1));
});

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13867){
var self__ = this;
var _13867__$1 = this;
return self__.meta13866;
});

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async13865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta13866], null);
});

cljs.core.async.t_cljs$core$async13865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13865";

cljs.core.async.t_cljs$core$async13865.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async13865");
});

cljs.core.async.__GT_t_cljs$core$async13865 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13865(map_GT___$1,f__$1,ch__$1,meta13866){
return (new cljs.core.async.t_cljs$core$async13865(map_GT___$1,f__$1,ch__$1,meta13866));
});

}

return (new cljs.core.async.t_cljs$core$async13865(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13871 = (function (filter_GT_,p,ch,meta13872){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13872 = meta13872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13873,meta13872__$1){
var self__ = this;
var _13873__$1 = this;
return (new cljs.core.async.t_cljs$core$async13871(self__.filter_GT_,self__.p,self__.ch,meta13872__$1));
});

cljs.core.async.t_cljs$core$async13871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13873){
var self__ = this;
var _13873__$1 = this;
return self__.meta13872;
});

cljs.core.async.t_cljs$core$async13871.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13871.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async13871.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async13871.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13871.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13871.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13871.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta13872], null);
});

cljs.core.async.t_cljs$core$async13871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13871";

cljs.core.async.t_cljs$core$async13871.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async13871");
});

cljs.core.async.__GT_t_cljs$core$async13871 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13871(filter_GT___$1,p__$1,ch__$1,meta13872){
return (new cljs.core.async.t_cljs$core$async13871(filter_GT___$1,p__$1,ch__$1,meta13872));
});

}

return (new cljs.core.async.t_cljs$core$async13871(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args13874 = [];
var len__5729__auto___13918 = arguments.length;
var i__5730__auto___13919 = (0);
while(true){
if((i__5730__auto___13919 < len__5729__auto___13918)){
args13874.push((arguments[i__5730__auto___13919]));

var G__13920 = (i__5730__auto___13919 + (1));
i__5730__auto___13919 = G__13920;
continue;
} else {
}
break;
}

var G__13876 = args13874.length;
switch (G__13876) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13874.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11645__auto___13922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___13922,out){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___13922,out){
return (function (state_13897){
var state_val_13898 = (state_13897[(1)]);
if((state_val_13898 === (7))){
var inst_13893 = (state_13897[(2)]);
var state_13897__$1 = state_13897;
var statearr_13899_13923 = state_13897__$1;
(statearr_13899_13923[(2)] = inst_13893);

(statearr_13899_13923[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13898 === (1))){
var state_13897__$1 = state_13897;
var statearr_13900_13924 = state_13897__$1;
(statearr_13900_13924[(2)] = null);

(statearr_13900_13924[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13898 === (4))){
var inst_13879 = (state_13897[(7)]);
var inst_13879__$1 = (state_13897[(2)]);
var inst_13880 = (inst_13879__$1 == null);
var state_13897__$1 = (function (){var statearr_13901 = state_13897;
(statearr_13901[(7)] = inst_13879__$1);

return statearr_13901;
})();
if(cljs.core.truth_(inst_13880)){
var statearr_13902_13925 = state_13897__$1;
(statearr_13902_13925[(1)] = (5));

} else {
var statearr_13903_13926 = state_13897__$1;
(statearr_13903_13926[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13898 === (6))){
var inst_13879 = (state_13897[(7)]);
var inst_13884 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13879) : p.call(null,inst_13879));
var state_13897__$1 = state_13897;
if(cljs.core.truth_(inst_13884)){
var statearr_13904_13927 = state_13897__$1;
(statearr_13904_13927[(1)] = (8));

} else {
var statearr_13905_13928 = state_13897__$1;
(statearr_13905_13928[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13898 === (3))){
var inst_13895 = (state_13897[(2)]);
var state_13897__$1 = state_13897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13897__$1,inst_13895);
} else {
if((state_val_13898 === (2))){
var state_13897__$1 = state_13897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13897__$1,(4),ch);
} else {
if((state_val_13898 === (11))){
var inst_13887 = (state_13897[(2)]);
var state_13897__$1 = state_13897;
var statearr_13906_13929 = state_13897__$1;
(statearr_13906_13929[(2)] = inst_13887);

(statearr_13906_13929[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13898 === (9))){
var state_13897__$1 = state_13897;
var statearr_13907_13930 = state_13897__$1;
(statearr_13907_13930[(2)] = null);

(statearr_13907_13930[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13898 === (5))){
var inst_13882 = cljs.core.async.close_BANG_(out);
var state_13897__$1 = state_13897;
var statearr_13908_13931 = state_13897__$1;
(statearr_13908_13931[(2)] = inst_13882);

(statearr_13908_13931[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13898 === (10))){
var inst_13890 = (state_13897[(2)]);
var state_13897__$1 = (function (){var statearr_13909 = state_13897;
(statearr_13909[(8)] = inst_13890);

return statearr_13909;
})();
var statearr_13910_13932 = state_13897__$1;
(statearr_13910_13932[(2)] = null);

(statearr_13910_13932[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13898 === (8))){
var inst_13879 = (state_13897[(7)]);
var state_13897__$1 = state_13897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13897__$1,(11),out,inst_13879);
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
});})(c__11645__auto___13922,out))
;
return ((function (switch__11531__auto__,c__11645__auto___13922,out){
return (function() {
var cljs$core$async$state_machine__11532__auto__ = null;
var cljs$core$async$state_machine__11532__auto____0 = (function (){
var statearr_13914 = [null,null,null,null,null,null,null,null,null];
(statearr_13914[(0)] = cljs$core$async$state_machine__11532__auto__);

(statearr_13914[(1)] = (1));

return statearr_13914;
});
var cljs$core$async$state_machine__11532__auto____1 = (function (state_13897){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_13897);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e13915){if((e13915 instanceof Object)){
var ex__11535__auto__ = e13915;
var statearr_13916_13933 = state_13897;
(statearr_13916_13933[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13897);

return cljs.core.cst$kw$recur;
} else {
throw e13915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__13934 = state_13897;
state_13897 = G__13934;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$state_machine__11532__auto__ = function(state_13897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11532__auto____1.call(this,state_13897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11532__auto____0;
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11532__auto____1;
return cljs$core$async$state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___13922,out))
})();
var state__11647__auto__ = (function (){var statearr_13917 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_13917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___13922);

return statearr_13917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___13922,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13935 = [];
var len__5729__auto___13938 = arguments.length;
var i__5730__auto___13939 = (0);
while(true){
if((i__5730__auto___13939 < len__5729__auto___13938)){
args13935.push((arguments[i__5730__auto___13939]));

var G__13940 = (i__5730__auto___13939 + (1));
i__5730__auto___13939 = G__13940;
continue;
} else {
}
break;
}

var G__13937 = args13935.length;
switch (G__13937) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13935.length)].join('')));

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
var c__11645__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto__){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto__){
return (function (state_14107){
var state_val_14108 = (state_14107[(1)]);
if((state_val_14108 === (7))){
var inst_14103 = (state_14107[(2)]);
var state_14107__$1 = state_14107;
var statearr_14109_14150 = state_14107__$1;
(statearr_14109_14150[(2)] = inst_14103);

(statearr_14109_14150[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (20))){
var inst_14073 = (state_14107[(7)]);
var inst_14084 = (state_14107[(2)]);
var inst_14085 = cljs.core.next(inst_14073);
var inst_14059 = inst_14085;
var inst_14060 = null;
var inst_14061 = (0);
var inst_14062 = (0);
var state_14107__$1 = (function (){var statearr_14110 = state_14107;
(statearr_14110[(8)] = inst_14062);

(statearr_14110[(9)] = inst_14084);

(statearr_14110[(10)] = inst_14059);

(statearr_14110[(11)] = inst_14061);

(statearr_14110[(12)] = inst_14060);

return statearr_14110;
})();
var statearr_14111_14151 = state_14107__$1;
(statearr_14111_14151[(2)] = null);

(statearr_14111_14151[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (1))){
var state_14107__$1 = state_14107;
var statearr_14112_14152 = state_14107__$1;
(statearr_14112_14152[(2)] = null);

(statearr_14112_14152[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (4))){
var inst_14048 = (state_14107[(13)]);
var inst_14048__$1 = (state_14107[(2)]);
var inst_14049 = (inst_14048__$1 == null);
var state_14107__$1 = (function (){var statearr_14113 = state_14107;
(statearr_14113[(13)] = inst_14048__$1);

return statearr_14113;
})();
if(cljs.core.truth_(inst_14049)){
var statearr_14114_14153 = state_14107__$1;
(statearr_14114_14153[(1)] = (5));

} else {
var statearr_14115_14154 = state_14107__$1;
(statearr_14115_14154[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (15))){
var state_14107__$1 = state_14107;
var statearr_14119_14155 = state_14107__$1;
(statearr_14119_14155[(2)] = null);

(statearr_14119_14155[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (21))){
var state_14107__$1 = state_14107;
var statearr_14120_14156 = state_14107__$1;
(statearr_14120_14156[(2)] = null);

(statearr_14120_14156[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (13))){
var inst_14062 = (state_14107[(8)]);
var inst_14059 = (state_14107[(10)]);
var inst_14061 = (state_14107[(11)]);
var inst_14060 = (state_14107[(12)]);
var inst_14069 = (state_14107[(2)]);
var inst_14070 = (inst_14062 + (1));
var tmp14116 = inst_14059;
var tmp14117 = inst_14061;
var tmp14118 = inst_14060;
var inst_14059__$1 = tmp14116;
var inst_14060__$1 = tmp14118;
var inst_14061__$1 = tmp14117;
var inst_14062__$1 = inst_14070;
var state_14107__$1 = (function (){var statearr_14121 = state_14107;
(statearr_14121[(8)] = inst_14062__$1);

(statearr_14121[(10)] = inst_14059__$1);

(statearr_14121[(14)] = inst_14069);

(statearr_14121[(11)] = inst_14061__$1);

(statearr_14121[(12)] = inst_14060__$1);

return statearr_14121;
})();
var statearr_14122_14157 = state_14107__$1;
(statearr_14122_14157[(2)] = null);

(statearr_14122_14157[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (22))){
var state_14107__$1 = state_14107;
var statearr_14123_14158 = state_14107__$1;
(statearr_14123_14158[(2)] = null);

(statearr_14123_14158[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (6))){
var inst_14048 = (state_14107[(13)]);
var inst_14057 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14048) : f.call(null,inst_14048));
var inst_14058 = cljs.core.seq(inst_14057);
var inst_14059 = inst_14058;
var inst_14060 = null;
var inst_14061 = (0);
var inst_14062 = (0);
var state_14107__$1 = (function (){var statearr_14124 = state_14107;
(statearr_14124[(8)] = inst_14062);

(statearr_14124[(10)] = inst_14059);

(statearr_14124[(11)] = inst_14061);

(statearr_14124[(12)] = inst_14060);

return statearr_14124;
})();
var statearr_14125_14159 = state_14107__$1;
(statearr_14125_14159[(2)] = null);

(statearr_14125_14159[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (17))){
var inst_14073 = (state_14107[(7)]);
var inst_14077 = cljs.core.chunk_first(inst_14073);
var inst_14078 = cljs.core.chunk_rest(inst_14073);
var inst_14079 = cljs.core.count(inst_14077);
var inst_14059 = inst_14078;
var inst_14060 = inst_14077;
var inst_14061 = inst_14079;
var inst_14062 = (0);
var state_14107__$1 = (function (){var statearr_14126 = state_14107;
(statearr_14126[(8)] = inst_14062);

(statearr_14126[(10)] = inst_14059);

(statearr_14126[(11)] = inst_14061);

(statearr_14126[(12)] = inst_14060);

return statearr_14126;
})();
var statearr_14127_14160 = state_14107__$1;
(statearr_14127_14160[(2)] = null);

(statearr_14127_14160[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (3))){
var inst_14105 = (state_14107[(2)]);
var state_14107__$1 = state_14107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14107__$1,inst_14105);
} else {
if((state_val_14108 === (12))){
var inst_14093 = (state_14107[(2)]);
var state_14107__$1 = state_14107;
var statearr_14128_14161 = state_14107__$1;
(statearr_14128_14161[(2)] = inst_14093);

(statearr_14128_14161[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (2))){
var state_14107__$1 = state_14107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14107__$1,(4),in$);
} else {
if((state_val_14108 === (23))){
var inst_14101 = (state_14107[(2)]);
var state_14107__$1 = state_14107;
var statearr_14129_14162 = state_14107__$1;
(statearr_14129_14162[(2)] = inst_14101);

(statearr_14129_14162[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (19))){
var inst_14088 = (state_14107[(2)]);
var state_14107__$1 = state_14107;
var statearr_14130_14163 = state_14107__$1;
(statearr_14130_14163[(2)] = inst_14088);

(statearr_14130_14163[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (11))){
var inst_14059 = (state_14107[(10)]);
var inst_14073 = (state_14107[(7)]);
var inst_14073__$1 = cljs.core.seq(inst_14059);
var state_14107__$1 = (function (){var statearr_14131 = state_14107;
(statearr_14131[(7)] = inst_14073__$1);

return statearr_14131;
})();
if(inst_14073__$1){
var statearr_14132_14164 = state_14107__$1;
(statearr_14132_14164[(1)] = (14));

} else {
var statearr_14133_14165 = state_14107__$1;
(statearr_14133_14165[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (9))){
var inst_14095 = (state_14107[(2)]);
var inst_14096 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14107__$1 = (function (){var statearr_14134 = state_14107;
(statearr_14134[(15)] = inst_14095);

return statearr_14134;
})();
if(cljs.core.truth_(inst_14096)){
var statearr_14135_14166 = state_14107__$1;
(statearr_14135_14166[(1)] = (21));

} else {
var statearr_14136_14167 = state_14107__$1;
(statearr_14136_14167[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (5))){
var inst_14051 = cljs.core.async.close_BANG_(out);
var state_14107__$1 = state_14107;
var statearr_14137_14168 = state_14107__$1;
(statearr_14137_14168[(2)] = inst_14051);

(statearr_14137_14168[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (14))){
var inst_14073 = (state_14107[(7)]);
var inst_14075 = cljs.core.chunked_seq_QMARK_(inst_14073);
var state_14107__$1 = state_14107;
if(inst_14075){
var statearr_14138_14169 = state_14107__$1;
(statearr_14138_14169[(1)] = (17));

} else {
var statearr_14139_14170 = state_14107__$1;
(statearr_14139_14170[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (16))){
var inst_14091 = (state_14107[(2)]);
var state_14107__$1 = state_14107;
var statearr_14140_14171 = state_14107__$1;
(statearr_14140_14171[(2)] = inst_14091);

(statearr_14140_14171[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14108 === (10))){
var inst_14062 = (state_14107[(8)]);
var inst_14060 = (state_14107[(12)]);
var inst_14067 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14060,inst_14062);
var state_14107__$1 = state_14107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14107__$1,(13),out,inst_14067);
} else {
if((state_val_14108 === (18))){
var inst_14073 = (state_14107[(7)]);
var inst_14082 = cljs.core.first(inst_14073);
var state_14107__$1 = state_14107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14107__$1,(20),out,inst_14082);
} else {
if((state_val_14108 === (8))){
var inst_14062 = (state_14107[(8)]);
var inst_14061 = (state_14107[(11)]);
var inst_14064 = (inst_14062 < inst_14061);
var inst_14065 = inst_14064;
var state_14107__$1 = state_14107;
if(cljs.core.truth_(inst_14065)){
var statearr_14141_14172 = state_14107__$1;
(statearr_14141_14172[(1)] = (10));

} else {
var statearr_14142_14173 = state_14107__$1;
(statearr_14142_14173[(1)] = (11));

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
});})(c__11645__auto__))
;
return ((function (switch__11531__auto__,c__11645__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11532__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11532__auto____0 = (function (){
var statearr_14146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14146[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11532__auto__);

(statearr_14146[(1)] = (1));

return statearr_14146;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11532__auto____1 = (function (state_14107){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_14107);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e14147){if((e14147 instanceof Object)){
var ex__11535__auto__ = e14147;
var statearr_14148_14174 = state_14107;
(statearr_14148_14174[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14107);

return cljs.core.cst$kw$recur;
} else {
throw e14147;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__14175 = state_14107;
state_14107 = G__14175;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11532__auto__ = function(state_14107){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11532__auto____1.call(this,state_14107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11532__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11532__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto__))
})();
var state__11647__auto__ = (function (){var statearr_14149 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_14149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto__);

return statearr_14149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto__))
);

return c__11645__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14176 = [];
var len__5729__auto___14179 = arguments.length;
var i__5730__auto___14180 = (0);
while(true){
if((i__5730__auto___14180 < len__5729__auto___14179)){
args14176.push((arguments[i__5730__auto___14180]));

var G__14181 = (i__5730__auto___14180 + (1));
i__5730__auto___14180 = G__14181;
continue;
} else {
}
break;
}

var G__14178 = args14176.length;
switch (G__14178) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14176.length)].join('')));

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
var args14183 = [];
var len__5729__auto___14186 = arguments.length;
var i__5730__auto___14187 = (0);
while(true){
if((i__5730__auto___14187 < len__5729__auto___14186)){
args14183.push((arguments[i__5730__auto___14187]));

var G__14188 = (i__5730__auto___14187 + (1));
i__5730__auto___14187 = G__14188;
continue;
} else {
}
break;
}

var G__14185 = args14183.length;
switch (G__14185) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14183.length)].join('')));

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
var args14190 = [];
var len__5729__auto___14241 = arguments.length;
var i__5730__auto___14242 = (0);
while(true){
if((i__5730__auto___14242 < len__5729__auto___14241)){
args14190.push((arguments[i__5730__auto___14242]));

var G__14243 = (i__5730__auto___14242 + (1));
i__5730__auto___14242 = G__14243;
continue;
} else {
}
break;
}

var G__14192 = args14190.length;
switch (G__14192) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14190.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11645__auto___14245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___14245,out){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___14245,out){
return (function (state_14216){
var state_val_14217 = (state_14216[(1)]);
if((state_val_14217 === (7))){
var inst_14211 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14218_14246 = state_14216__$1;
(statearr_14218_14246[(2)] = inst_14211);

(statearr_14218_14246[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14217 === (1))){
var inst_14193 = null;
var state_14216__$1 = (function (){var statearr_14219 = state_14216;
(statearr_14219[(7)] = inst_14193);

return statearr_14219;
})();
var statearr_14220_14247 = state_14216__$1;
(statearr_14220_14247[(2)] = null);

(statearr_14220_14247[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14217 === (4))){
var inst_14196 = (state_14216[(8)]);
var inst_14196__$1 = (state_14216[(2)]);
var inst_14197 = (inst_14196__$1 == null);
var inst_14198 = cljs.core.not(inst_14197);
var state_14216__$1 = (function (){var statearr_14221 = state_14216;
(statearr_14221[(8)] = inst_14196__$1);

return statearr_14221;
})();
if(inst_14198){
var statearr_14222_14248 = state_14216__$1;
(statearr_14222_14248[(1)] = (5));

} else {
var statearr_14223_14249 = state_14216__$1;
(statearr_14223_14249[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14217 === (6))){
var state_14216__$1 = state_14216;
var statearr_14224_14250 = state_14216__$1;
(statearr_14224_14250[(2)] = null);

(statearr_14224_14250[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14217 === (3))){
var inst_14213 = (state_14216[(2)]);
var inst_14214 = cljs.core.async.close_BANG_(out);
var state_14216__$1 = (function (){var statearr_14225 = state_14216;
(statearr_14225[(9)] = inst_14213);

return statearr_14225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14216__$1,inst_14214);
} else {
if((state_val_14217 === (2))){
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14216__$1,(4),ch);
} else {
if((state_val_14217 === (11))){
var inst_14196 = (state_14216[(8)]);
var inst_14205 = (state_14216[(2)]);
var inst_14193 = inst_14196;
var state_14216__$1 = (function (){var statearr_14226 = state_14216;
(statearr_14226[(7)] = inst_14193);

(statearr_14226[(10)] = inst_14205);

return statearr_14226;
})();
var statearr_14227_14251 = state_14216__$1;
(statearr_14227_14251[(2)] = null);

(statearr_14227_14251[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14217 === (9))){
var inst_14196 = (state_14216[(8)]);
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14216__$1,(11),out,inst_14196);
} else {
if((state_val_14217 === (5))){
var inst_14196 = (state_14216[(8)]);
var inst_14193 = (state_14216[(7)]);
var inst_14200 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14196,inst_14193);
var state_14216__$1 = state_14216;
if(inst_14200){
var statearr_14229_14252 = state_14216__$1;
(statearr_14229_14252[(1)] = (8));

} else {
var statearr_14230_14253 = state_14216__$1;
(statearr_14230_14253[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14217 === (10))){
var inst_14208 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14231_14254 = state_14216__$1;
(statearr_14231_14254[(2)] = inst_14208);

(statearr_14231_14254[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14217 === (8))){
var inst_14193 = (state_14216[(7)]);
var tmp14228 = inst_14193;
var inst_14193__$1 = tmp14228;
var state_14216__$1 = (function (){var statearr_14232 = state_14216;
(statearr_14232[(7)] = inst_14193__$1);

return statearr_14232;
})();
var statearr_14233_14255 = state_14216__$1;
(statearr_14233_14255[(2)] = null);

(statearr_14233_14255[(1)] = (2));


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
});})(c__11645__auto___14245,out))
;
return ((function (switch__11531__auto__,c__11645__auto___14245,out){
return (function() {
var cljs$core$async$state_machine__11532__auto__ = null;
var cljs$core$async$state_machine__11532__auto____0 = (function (){
var statearr_14237 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14237[(0)] = cljs$core$async$state_machine__11532__auto__);

(statearr_14237[(1)] = (1));

return statearr_14237;
});
var cljs$core$async$state_machine__11532__auto____1 = (function (state_14216){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_14216);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e14238){if((e14238 instanceof Object)){
var ex__11535__auto__ = e14238;
var statearr_14239_14256 = state_14216;
(statearr_14239_14256[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14216);

return cljs.core.cst$kw$recur;
} else {
throw e14238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__14257 = state_14216;
state_14216 = G__14257;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$state_machine__11532__auto__ = function(state_14216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11532__auto____1.call(this,state_14216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11532__auto____0;
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11532__auto____1;
return cljs$core$async$state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___14245,out))
})();
var state__11647__auto__ = (function (){var statearr_14240 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_14240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___14245);

return statearr_14240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___14245,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14258 = [];
var len__5729__auto___14328 = arguments.length;
var i__5730__auto___14329 = (0);
while(true){
if((i__5730__auto___14329 < len__5729__auto___14328)){
args14258.push((arguments[i__5730__auto___14329]));

var G__14330 = (i__5730__auto___14329 + (1));
i__5730__auto___14329 = G__14330;
continue;
} else {
}
break;
}

var G__14260 = args14258.length;
switch (G__14260) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14258.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11645__auto___14332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___14332,out){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___14332,out){
return (function (state_14298){
var state_val_14299 = (state_14298[(1)]);
if((state_val_14299 === (7))){
var inst_14294 = (state_14298[(2)]);
var state_14298__$1 = state_14298;
var statearr_14300_14333 = state_14298__$1;
(statearr_14300_14333[(2)] = inst_14294);

(statearr_14300_14333[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14299 === (1))){
var inst_14261 = (new Array(n));
var inst_14262 = inst_14261;
var inst_14263 = (0);
var state_14298__$1 = (function (){var statearr_14301 = state_14298;
(statearr_14301[(7)] = inst_14263);

(statearr_14301[(8)] = inst_14262);

return statearr_14301;
})();
var statearr_14302_14334 = state_14298__$1;
(statearr_14302_14334[(2)] = null);

(statearr_14302_14334[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14299 === (4))){
var inst_14266 = (state_14298[(9)]);
var inst_14266__$1 = (state_14298[(2)]);
var inst_14267 = (inst_14266__$1 == null);
var inst_14268 = cljs.core.not(inst_14267);
var state_14298__$1 = (function (){var statearr_14303 = state_14298;
(statearr_14303[(9)] = inst_14266__$1);

return statearr_14303;
})();
if(inst_14268){
var statearr_14304_14335 = state_14298__$1;
(statearr_14304_14335[(1)] = (5));

} else {
var statearr_14305_14336 = state_14298__$1;
(statearr_14305_14336[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14299 === (15))){
var inst_14288 = (state_14298[(2)]);
var state_14298__$1 = state_14298;
var statearr_14306_14337 = state_14298__$1;
(statearr_14306_14337[(2)] = inst_14288);

(statearr_14306_14337[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14299 === (13))){
var state_14298__$1 = state_14298;
var statearr_14307_14338 = state_14298__$1;
(statearr_14307_14338[(2)] = null);

(statearr_14307_14338[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14299 === (6))){
var inst_14263 = (state_14298[(7)]);
var inst_14284 = (inst_14263 > (0));
var state_14298__$1 = state_14298;
if(cljs.core.truth_(inst_14284)){
var statearr_14308_14339 = state_14298__$1;
(statearr_14308_14339[(1)] = (12));

} else {
var statearr_14309_14340 = state_14298__$1;
(statearr_14309_14340[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14299 === (3))){
var inst_14296 = (state_14298[(2)]);
var state_14298__$1 = state_14298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14298__$1,inst_14296);
} else {
if((state_val_14299 === (12))){
var inst_14262 = (state_14298[(8)]);
var inst_14286 = cljs.core.vec(inst_14262);
var state_14298__$1 = state_14298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14298__$1,(15),out,inst_14286);
} else {
if((state_val_14299 === (2))){
var state_14298__$1 = state_14298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14298__$1,(4),ch);
} else {
if((state_val_14299 === (11))){
var inst_14278 = (state_14298[(2)]);
var inst_14279 = (new Array(n));
var inst_14262 = inst_14279;
var inst_14263 = (0);
var state_14298__$1 = (function (){var statearr_14310 = state_14298;
(statearr_14310[(10)] = inst_14278);

(statearr_14310[(7)] = inst_14263);

(statearr_14310[(8)] = inst_14262);

return statearr_14310;
})();
var statearr_14311_14341 = state_14298__$1;
(statearr_14311_14341[(2)] = null);

(statearr_14311_14341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14299 === (9))){
var inst_14262 = (state_14298[(8)]);
var inst_14276 = cljs.core.vec(inst_14262);
var state_14298__$1 = state_14298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14298__$1,(11),out,inst_14276);
} else {
if((state_val_14299 === (5))){
var inst_14266 = (state_14298[(9)]);
var inst_14263 = (state_14298[(7)]);
var inst_14271 = (state_14298[(11)]);
var inst_14262 = (state_14298[(8)]);
var inst_14270 = (inst_14262[inst_14263] = inst_14266);
var inst_14271__$1 = (inst_14263 + (1));
var inst_14272 = (inst_14271__$1 < n);
var state_14298__$1 = (function (){var statearr_14312 = state_14298;
(statearr_14312[(12)] = inst_14270);

(statearr_14312[(11)] = inst_14271__$1);

return statearr_14312;
})();
if(cljs.core.truth_(inst_14272)){
var statearr_14313_14342 = state_14298__$1;
(statearr_14313_14342[(1)] = (8));

} else {
var statearr_14314_14343 = state_14298__$1;
(statearr_14314_14343[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14299 === (14))){
var inst_14291 = (state_14298[(2)]);
var inst_14292 = cljs.core.async.close_BANG_(out);
var state_14298__$1 = (function (){var statearr_14316 = state_14298;
(statearr_14316[(13)] = inst_14291);

return statearr_14316;
})();
var statearr_14317_14344 = state_14298__$1;
(statearr_14317_14344[(2)] = inst_14292);

(statearr_14317_14344[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14299 === (10))){
var inst_14282 = (state_14298[(2)]);
var state_14298__$1 = state_14298;
var statearr_14318_14345 = state_14298__$1;
(statearr_14318_14345[(2)] = inst_14282);

(statearr_14318_14345[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14299 === (8))){
var inst_14271 = (state_14298[(11)]);
var inst_14262 = (state_14298[(8)]);
var tmp14315 = inst_14262;
var inst_14262__$1 = tmp14315;
var inst_14263 = inst_14271;
var state_14298__$1 = (function (){var statearr_14319 = state_14298;
(statearr_14319[(7)] = inst_14263);

(statearr_14319[(8)] = inst_14262__$1);

return statearr_14319;
})();
var statearr_14320_14346 = state_14298__$1;
(statearr_14320_14346[(2)] = null);

(statearr_14320_14346[(1)] = (2));


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
});})(c__11645__auto___14332,out))
;
return ((function (switch__11531__auto__,c__11645__auto___14332,out){
return (function() {
var cljs$core$async$state_machine__11532__auto__ = null;
var cljs$core$async$state_machine__11532__auto____0 = (function (){
var statearr_14324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14324[(0)] = cljs$core$async$state_machine__11532__auto__);

(statearr_14324[(1)] = (1));

return statearr_14324;
});
var cljs$core$async$state_machine__11532__auto____1 = (function (state_14298){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_14298);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e14325){if((e14325 instanceof Object)){
var ex__11535__auto__ = e14325;
var statearr_14326_14347 = state_14298;
(statearr_14326_14347[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14298);

return cljs.core.cst$kw$recur;
} else {
throw e14325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__14348 = state_14298;
state_14298 = G__14348;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$state_machine__11532__auto__ = function(state_14298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11532__auto____1.call(this,state_14298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11532__auto____0;
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11532__auto____1;
return cljs$core$async$state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___14332,out))
})();
var state__11647__auto__ = (function (){var statearr_14327 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_14327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___14332);

return statearr_14327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___14332,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args14349 = [];
var len__5729__auto___14423 = arguments.length;
var i__5730__auto___14424 = (0);
while(true){
if((i__5730__auto___14424 < len__5729__auto___14423)){
args14349.push((arguments[i__5730__auto___14424]));

var G__14425 = (i__5730__auto___14424 + (1));
i__5730__auto___14424 = G__14425;
continue;
} else {
}
break;
}

var G__14351 = args14349.length;
switch (G__14351) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14349.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11645__auto___14427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11645__auto___14427,out){
return (function (){
var f__11646__auto__ = (function (){var switch__11531__auto__ = ((function (c__11645__auto___14427,out){
return (function (state_14393){
var state_val_14394 = (state_14393[(1)]);
if((state_val_14394 === (7))){
var inst_14389 = (state_14393[(2)]);
var state_14393__$1 = state_14393;
var statearr_14395_14428 = state_14393__$1;
(statearr_14395_14428[(2)] = inst_14389);

(statearr_14395_14428[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14394 === (1))){
var inst_14352 = [];
var inst_14353 = inst_14352;
var inst_14354 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_14393__$1 = (function (){var statearr_14396 = state_14393;
(statearr_14396[(7)] = inst_14353);

(statearr_14396[(8)] = inst_14354);

return statearr_14396;
})();
var statearr_14397_14429 = state_14393__$1;
(statearr_14397_14429[(2)] = null);

(statearr_14397_14429[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14394 === (4))){
var inst_14357 = (state_14393[(9)]);
var inst_14357__$1 = (state_14393[(2)]);
var inst_14358 = (inst_14357__$1 == null);
var inst_14359 = cljs.core.not(inst_14358);
var state_14393__$1 = (function (){var statearr_14398 = state_14393;
(statearr_14398[(9)] = inst_14357__$1);

return statearr_14398;
})();
if(inst_14359){
var statearr_14399_14430 = state_14393__$1;
(statearr_14399_14430[(1)] = (5));

} else {
var statearr_14400_14431 = state_14393__$1;
(statearr_14400_14431[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14394 === (15))){
var inst_14383 = (state_14393[(2)]);
var state_14393__$1 = state_14393;
var statearr_14401_14432 = state_14393__$1;
(statearr_14401_14432[(2)] = inst_14383);

(statearr_14401_14432[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14394 === (13))){
var state_14393__$1 = state_14393;
var statearr_14402_14433 = state_14393__$1;
(statearr_14402_14433[(2)] = null);

(statearr_14402_14433[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14394 === (6))){
var inst_14353 = (state_14393[(7)]);
var inst_14378 = inst_14353.length;
var inst_14379 = (inst_14378 > (0));
var state_14393__$1 = state_14393;
if(cljs.core.truth_(inst_14379)){
var statearr_14403_14434 = state_14393__$1;
(statearr_14403_14434[(1)] = (12));

} else {
var statearr_14404_14435 = state_14393__$1;
(statearr_14404_14435[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14394 === (3))){
var inst_14391 = (state_14393[(2)]);
var state_14393__$1 = state_14393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14393__$1,inst_14391);
} else {
if((state_val_14394 === (12))){
var inst_14353 = (state_14393[(7)]);
var inst_14381 = cljs.core.vec(inst_14353);
var state_14393__$1 = state_14393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14393__$1,(15),out,inst_14381);
} else {
if((state_val_14394 === (2))){
var state_14393__$1 = state_14393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14393__$1,(4),ch);
} else {
if((state_val_14394 === (11))){
var inst_14357 = (state_14393[(9)]);
var inst_14361 = (state_14393[(10)]);
var inst_14371 = (state_14393[(2)]);
var inst_14372 = [];
var inst_14373 = inst_14372.push(inst_14357);
var inst_14353 = inst_14372;
var inst_14354 = inst_14361;
var state_14393__$1 = (function (){var statearr_14405 = state_14393;
(statearr_14405[(11)] = inst_14371);

(statearr_14405[(7)] = inst_14353);

(statearr_14405[(12)] = inst_14373);

(statearr_14405[(8)] = inst_14354);

return statearr_14405;
})();
var statearr_14406_14436 = state_14393__$1;
(statearr_14406_14436[(2)] = null);

(statearr_14406_14436[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14394 === (9))){
var inst_14353 = (state_14393[(7)]);
var inst_14369 = cljs.core.vec(inst_14353);
var state_14393__$1 = state_14393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14393__$1,(11),out,inst_14369);
} else {
if((state_val_14394 === (5))){
var inst_14357 = (state_14393[(9)]);
var inst_14354 = (state_14393[(8)]);
var inst_14361 = (state_14393[(10)]);
var inst_14361__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14357) : f.call(null,inst_14357));
var inst_14362 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14361__$1,inst_14354);
var inst_14363 = cljs.core.keyword_identical_QMARK_(inst_14354,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_14364 = (inst_14362) || (inst_14363);
var state_14393__$1 = (function (){var statearr_14407 = state_14393;
(statearr_14407[(10)] = inst_14361__$1);

return statearr_14407;
})();
if(cljs.core.truth_(inst_14364)){
var statearr_14408_14437 = state_14393__$1;
(statearr_14408_14437[(1)] = (8));

} else {
var statearr_14409_14438 = state_14393__$1;
(statearr_14409_14438[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14394 === (14))){
var inst_14386 = (state_14393[(2)]);
var inst_14387 = cljs.core.async.close_BANG_(out);
var state_14393__$1 = (function (){var statearr_14411 = state_14393;
(statearr_14411[(13)] = inst_14386);

return statearr_14411;
})();
var statearr_14412_14439 = state_14393__$1;
(statearr_14412_14439[(2)] = inst_14387);

(statearr_14412_14439[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14394 === (10))){
var inst_14376 = (state_14393[(2)]);
var state_14393__$1 = state_14393;
var statearr_14413_14440 = state_14393__$1;
(statearr_14413_14440[(2)] = inst_14376);

(statearr_14413_14440[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14394 === (8))){
var inst_14353 = (state_14393[(7)]);
var inst_14357 = (state_14393[(9)]);
var inst_14361 = (state_14393[(10)]);
var inst_14366 = inst_14353.push(inst_14357);
var tmp14410 = inst_14353;
var inst_14353__$1 = tmp14410;
var inst_14354 = inst_14361;
var state_14393__$1 = (function (){var statearr_14414 = state_14393;
(statearr_14414[(7)] = inst_14353__$1);

(statearr_14414[(14)] = inst_14366);

(statearr_14414[(8)] = inst_14354);

return statearr_14414;
})();
var statearr_14415_14441 = state_14393__$1;
(statearr_14415_14441[(2)] = null);

(statearr_14415_14441[(1)] = (2));


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
});})(c__11645__auto___14427,out))
;
return ((function (switch__11531__auto__,c__11645__auto___14427,out){
return (function() {
var cljs$core$async$state_machine__11532__auto__ = null;
var cljs$core$async$state_machine__11532__auto____0 = (function (){
var statearr_14419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14419[(0)] = cljs$core$async$state_machine__11532__auto__);

(statearr_14419[(1)] = (1));

return statearr_14419;
});
var cljs$core$async$state_machine__11532__auto____1 = (function (state_14393){
while(true){
var ret_value__11533__auto__ = (function (){try{while(true){
var result__11534__auto__ = switch__11531__auto__(state_14393);
if(cljs.core.keyword_identical_QMARK_(result__11534__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11534__auto__;
}
break;
}
}catch (e14420){if((e14420 instanceof Object)){
var ex__11535__auto__ = e14420;
var statearr_14421_14442 = state_14393;
(statearr_14421_14442[(5)] = ex__11535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14393);

return cljs.core.cst$kw$recur;
} else {
throw e14420;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11533__auto__,cljs.core.cst$kw$recur)){
var G__14443 = state_14393;
state_14393 = G__14443;
continue;
} else {
return ret_value__11533__auto__;
}
break;
}
});
cljs$core$async$state_machine__11532__auto__ = function(state_14393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11532__auto____1.call(this,state_14393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11532__auto____0;
cljs$core$async$state_machine__11532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11532__auto____1;
return cljs$core$async$state_machine__11532__auto__;
})()
;})(switch__11531__auto__,c__11645__auto___14427,out))
})();
var state__11647__auto__ = (function (){var statearr_14422 = (f__11646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11646__auto__.cljs$core$IFn$_invoke$arity$0() : f__11646__auto__.call(null));
(statearr_14422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11645__auto___14427);

return statearr_14422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11647__auto__);
});})(c__11645__auto___14427,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
