// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args15780 = [];
var len__14433__auto___15786 = arguments.length;
var i__14434__auto___15787 = (0);
while(true){
if((i__14434__auto___15787 < len__14433__auto___15786)){
args15780.push((arguments[i__14434__auto___15787]));

var G__15788 = (i__14434__auto___15787 + (1));
i__14434__auto___15787 = G__15788;
continue;
} else {
}
break;
}

var G__15782 = args15780.length;
switch (G__15782) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15780.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15783 = (function (f,blockable,meta15784){
this.f = f;
this.blockable = blockable;
this.meta15784 = meta15784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15785,meta15784__$1){
var self__ = this;
var _15785__$1 = this;
return (new cljs.core.async.t_cljs$core$async15783(self__.f,self__.blockable,meta15784__$1));
});

cljs.core.async.t_cljs$core$async15783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15785){
var self__ = this;
var _15785__$1 = this;
return self__.meta15784;
});

cljs.core.async.t_cljs$core$async15783.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15783.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15784","meta15784",1744203130,null)], null);
});

cljs.core.async.t_cljs$core$async15783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15783";

cljs.core.async.t_cljs$core$async15783.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async15783");
});

cljs.core.async.__GT_t_cljs$core$async15783 = (function cljs$core$async$__GT_t_cljs$core$async15783(f__$1,blockable__$1,meta15784){
return (new cljs.core.async.t_cljs$core$async15783(f__$1,blockable__$1,meta15784));
});

}

return (new cljs.core.async.t_cljs$core$async15783(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args15792 = [];
var len__14433__auto___15795 = arguments.length;
var i__14434__auto___15796 = (0);
while(true){
if((i__14434__auto___15796 < len__14433__auto___15795)){
args15792.push((arguments[i__14434__auto___15796]));

var G__15797 = (i__14434__auto___15796 + (1));
i__14434__auto___15796 = G__15797;
continue;
} else {
}
break;
}

var G__15794 = args15792.length;
switch (G__15794) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15792.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args15799 = [];
var len__14433__auto___15802 = arguments.length;
var i__14434__auto___15803 = (0);
while(true){
if((i__14434__auto___15803 < len__14433__auto___15802)){
args15799.push((arguments[i__14434__auto___15803]));

var G__15804 = (i__14434__auto___15803 + (1));
i__14434__auto___15803 = G__15804;
continue;
} else {
}
break;
}

var G__15801 = args15799.length;
switch (G__15801) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15799.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args15806 = [];
var len__14433__auto___15809 = arguments.length;
var i__14434__auto___15810 = (0);
while(true){
if((i__14434__auto___15810 < len__14433__auto___15809)){
args15806.push((arguments[i__14434__auto___15810]));

var G__15811 = (i__14434__auto___15810 + (1));
i__14434__auto___15810 = G__15811;
continue;
} else {
}
break;
}

var G__15808 = args15806.length;
switch (G__15808) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15806.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15813 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15813);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15813,ret){
return (function (){
return fn1.call(null,val_15813);
});})(val_15813,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args15814 = [];
var len__14433__auto___15817 = arguments.length;
var i__14434__auto___15818 = (0);
while(true){
if((i__14434__auto___15818 < len__14433__auto___15817)){
args15814.push((arguments[i__14434__auto___15818]));

var G__15819 = (i__14434__auto___15818 + (1));
i__14434__auto___15818 = G__15819;
continue;
} else {
}
break;
}

var G__15816 = args15814.length;
switch (G__15816) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15814.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__14278__auto___15821 = n;
var x_15822 = (0);
while(true){
if((x_15822 < n__14278__auto___15821)){
(a[x_15822] = (0));

var G__15823 = (x_15822 + (1));
x_15822 = G__15823;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__15824 = (i + (1));
i = G__15824;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async15828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15828 = (function (alt_flag,flag,meta15829){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15829 = meta15829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15830,meta15829__$1){
var self__ = this;
var _15830__$1 = this;
return (new cljs.core.async.t_cljs$core$async15828(self__.alt_flag,self__.flag,meta15829__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15830){
var self__ = this;
var _15830__$1 = this;
return self__.meta15829;
});})(flag))
;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15828.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15829","meta15829",-1922895238,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15828";

cljs.core.async.t_cljs$core$async15828.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async15828");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15828 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15828(alt_flag__$1,flag__$1,meta15829){
return (new cljs.core.async.t_cljs$core$async15828(alt_flag__$1,flag__$1,meta15829));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15828(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15834 = (function (alt_handler,flag,cb,meta15835){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15835 = meta15835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15836,meta15835__$1){
var self__ = this;
var _15836__$1 = this;
return (new cljs.core.async.t_cljs$core$async15834(self__.alt_handler,self__.flag,self__.cb,meta15835__$1));
});

cljs.core.async.t_cljs$core$async15834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15836){
var self__ = this;
var _15836__$1 = this;
return self__.meta15835;
});

cljs.core.async.t_cljs$core$async15834.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async15834.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15835","meta15835",-518597985,null)], null);
});

cljs.core.async.t_cljs$core$async15834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15834";

cljs.core.async.t_cljs$core$async15834.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async15834");
});

cljs.core.async.__GT_t_cljs$core$async15834 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15834(alt_handler__$1,flag__$1,cb__$1,meta15835){
return (new cljs.core.async.t_cljs$core$async15834(alt_handler__$1,flag__$1,cb__$1,meta15835));
});

}

return (new cljs.core.async.t_cljs$core$async15834(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15837_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15837_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15838_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15838_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13375__auto__ = wport;
if(cljs.core.truth_(or__13375__auto__)){
return or__13375__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15839 = (i + (1));
i = G__15839;
continue;
}
} else {
return null;
}
break;
}
})();
var or__13375__auto__ = ret;
if(cljs.core.truth_(or__13375__auto__)){
return or__13375__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__13363__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__13363__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__13363__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__14440__auto__ = [];
var len__14433__auto___15845 = arguments.length;
var i__14434__auto___15846 = (0);
while(true){
if((i__14434__auto___15846 < len__14433__auto___15845)){
args__14440__auto__.push((arguments[i__14434__auto___15846]));

var G__15847 = (i__14434__auto___15846 + (1));
i__14434__auto___15846 = G__15847;
continue;
} else {
}
break;
}

var argseq__14441__auto__ = ((((1) < args__14440__auto__.length))?(new cljs.core.IndexedSeq(args__14440__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14441__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15842){
var map__15843 = p__15842;
var map__15843__$1 = ((((!((map__15843 == null)))?((((map__15843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15843):map__15843);
var opts = map__15843__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15840){
var G__15841 = cljs.core.first.call(null,seq15840);
var seq15840__$1 = cljs.core.next.call(null,seq15840);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15841,seq15840__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args15848 = [];
var len__14433__auto___15898 = arguments.length;
var i__14434__auto___15899 = (0);
while(true){
if((i__14434__auto___15899 < len__14433__auto___15898)){
args15848.push((arguments[i__14434__auto___15899]));

var G__15900 = (i__14434__auto___15899 + (1));
i__14434__auto___15899 = G__15900;
continue;
} else {
}
break;
}

var G__15850 = args15848.length;
switch (G__15850) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15848.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15731__auto___15902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___15902){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___15902){
return (function (state_15874){
var state_val_15875 = (state_15874[(1)]);
if((state_val_15875 === (7))){
var inst_15870 = (state_15874[(2)]);
var state_15874__$1 = state_15874;
var statearr_15876_15903 = state_15874__$1;
(statearr_15876_15903[(2)] = inst_15870);

(statearr_15876_15903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (1))){
var state_15874__$1 = state_15874;
var statearr_15877_15904 = state_15874__$1;
(statearr_15877_15904[(2)] = null);

(statearr_15877_15904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (4))){
var inst_15853 = (state_15874[(7)]);
var inst_15853__$1 = (state_15874[(2)]);
var inst_15854 = (inst_15853__$1 == null);
var state_15874__$1 = (function (){var statearr_15878 = state_15874;
(statearr_15878[(7)] = inst_15853__$1);

return statearr_15878;
})();
if(cljs.core.truth_(inst_15854)){
var statearr_15879_15905 = state_15874__$1;
(statearr_15879_15905[(1)] = (5));

} else {
var statearr_15880_15906 = state_15874__$1;
(statearr_15880_15906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (13))){
var state_15874__$1 = state_15874;
var statearr_15881_15907 = state_15874__$1;
(statearr_15881_15907[(2)] = null);

(statearr_15881_15907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (6))){
var inst_15853 = (state_15874[(7)]);
var state_15874__$1 = state_15874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15874__$1,(11),to,inst_15853);
} else {
if((state_val_15875 === (3))){
var inst_15872 = (state_15874[(2)]);
var state_15874__$1 = state_15874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15874__$1,inst_15872);
} else {
if((state_val_15875 === (12))){
var state_15874__$1 = state_15874;
var statearr_15882_15908 = state_15874__$1;
(statearr_15882_15908[(2)] = null);

(statearr_15882_15908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (2))){
var state_15874__$1 = state_15874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15874__$1,(4),from);
} else {
if((state_val_15875 === (11))){
var inst_15863 = (state_15874[(2)]);
var state_15874__$1 = state_15874;
if(cljs.core.truth_(inst_15863)){
var statearr_15883_15909 = state_15874__$1;
(statearr_15883_15909[(1)] = (12));

} else {
var statearr_15884_15910 = state_15874__$1;
(statearr_15884_15910[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (9))){
var state_15874__$1 = state_15874;
var statearr_15885_15911 = state_15874__$1;
(statearr_15885_15911[(2)] = null);

(statearr_15885_15911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (5))){
var state_15874__$1 = state_15874;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15886_15912 = state_15874__$1;
(statearr_15886_15912[(1)] = (8));

} else {
var statearr_15887_15913 = state_15874__$1;
(statearr_15887_15913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (14))){
var inst_15868 = (state_15874[(2)]);
var state_15874__$1 = state_15874;
var statearr_15888_15914 = state_15874__$1;
(statearr_15888_15914[(2)] = inst_15868);

(statearr_15888_15914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (10))){
var inst_15860 = (state_15874[(2)]);
var state_15874__$1 = state_15874;
var statearr_15889_15915 = state_15874__$1;
(statearr_15889_15915[(2)] = inst_15860);

(statearr_15889_15915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (8))){
var inst_15857 = cljs.core.async.close_BANG_.call(null,to);
var state_15874__$1 = state_15874;
var statearr_15890_15916 = state_15874__$1;
(statearr_15890_15916[(2)] = inst_15857);

(statearr_15890_15916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto___15902))
;
return ((function (switch__15710__auto__,c__15731__auto___15902){
return (function() {
var cljs$core$async$state_machine__15711__auto__ = null;
var cljs$core$async$state_machine__15711__auto____0 = (function (){
var statearr_15894 = [null,null,null,null,null,null,null,null];
(statearr_15894[(0)] = cljs$core$async$state_machine__15711__auto__);

(statearr_15894[(1)] = (1));

return statearr_15894;
});
var cljs$core$async$state_machine__15711__auto____1 = (function (state_15874){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_15874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e15895){if((e15895 instanceof Object)){
var ex__15714__auto__ = e15895;
var statearr_15896_15917 = state_15874;
(statearr_15896_15917[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15918 = state_15874;
state_15874 = G__15918;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$state_machine__15711__auto__ = function(state_15874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15711__auto____1.call(this,state_15874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15711__auto____0;
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15711__auto____1;
return cljs$core$async$state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___15902))
})();
var state__15733__auto__ = (function (){var statearr_15897 = f__15732__auto__.call(null);
(statearr_15897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___15902);

return statearr_15897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___15902))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__16102){
var vec__16103 = p__16102;
var v = cljs.core.nth.call(null,vec__16103,(0),null);
var p = cljs.core.nth.call(null,vec__16103,(1),null);
var job = vec__16103;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15731__auto___16285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___16285,res,vec__16103,v,p,job,jobs,results){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___16285,res,vec__16103,v,p,job,jobs,results){
return (function (state_16108){
var state_val_16109 = (state_16108[(1)]);
if((state_val_16109 === (1))){
var state_16108__$1 = state_16108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16108__$1,(2),res,v);
} else {
if((state_val_16109 === (2))){
var inst_16105 = (state_16108[(2)]);
var inst_16106 = cljs.core.async.close_BANG_.call(null,res);
var state_16108__$1 = (function (){var statearr_16110 = state_16108;
(statearr_16110[(7)] = inst_16105);

return statearr_16110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16108__$1,inst_16106);
} else {
return null;
}
}
});})(c__15731__auto___16285,res,vec__16103,v,p,job,jobs,results))
;
return ((function (switch__15710__auto__,c__15731__auto___16285,res,vec__16103,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0 = (function (){
var statearr_16114 = [null,null,null,null,null,null,null,null];
(statearr_16114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__);

(statearr_16114[(1)] = (1));

return statearr_16114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1 = (function (state_16108){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_16108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e16115){if((e16115 instanceof Object)){
var ex__15714__auto__ = e16115;
var statearr_16116_16286 = state_16108;
(statearr_16116_16286[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16287 = state_16108;
state_16108 = G__16287;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__ = function(state_16108){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1.call(this,state_16108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___16285,res,vec__16103,v,p,job,jobs,results))
})();
var state__15733__auto__ = (function (){var statearr_16117 = f__15732__auto__.call(null);
(statearr_16117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___16285);

return statearr_16117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___16285,res,vec__16103,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16118){
var vec__16119 = p__16118;
var v = cljs.core.nth.call(null,vec__16119,(0),null);
var p = cljs.core.nth.call(null,vec__16119,(1),null);
var job = vec__16119;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__14278__auto___16288 = n;
var __16289 = (0);
while(true){
if((__16289 < n__14278__auto___16288)){
var G__16120_16290 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16120_16290) {
case "compute":
var c__15731__auto___16292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16289,c__15731__auto___16292,G__16120_16290,n__14278__auto___16288,jobs,results,process,async){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (__16289,c__15731__auto___16292,G__16120_16290,n__14278__auto___16288,jobs,results,process,async){
return (function (state_16133){
var state_val_16134 = (state_16133[(1)]);
if((state_val_16134 === (1))){
var state_16133__$1 = state_16133;
var statearr_16135_16293 = state_16133__$1;
(statearr_16135_16293[(2)] = null);

(statearr_16135_16293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16134 === (2))){
var state_16133__$1 = state_16133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16133__$1,(4),jobs);
} else {
if((state_val_16134 === (3))){
var inst_16131 = (state_16133[(2)]);
var state_16133__$1 = state_16133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16133__$1,inst_16131);
} else {
if((state_val_16134 === (4))){
var inst_16123 = (state_16133[(2)]);
var inst_16124 = process.call(null,inst_16123);
var state_16133__$1 = state_16133;
if(cljs.core.truth_(inst_16124)){
var statearr_16136_16294 = state_16133__$1;
(statearr_16136_16294[(1)] = (5));

} else {
var statearr_16137_16295 = state_16133__$1;
(statearr_16137_16295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16134 === (5))){
var state_16133__$1 = state_16133;
var statearr_16138_16296 = state_16133__$1;
(statearr_16138_16296[(2)] = null);

(statearr_16138_16296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16134 === (6))){
var state_16133__$1 = state_16133;
var statearr_16139_16297 = state_16133__$1;
(statearr_16139_16297[(2)] = null);

(statearr_16139_16297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16134 === (7))){
var inst_16129 = (state_16133[(2)]);
var state_16133__$1 = state_16133;
var statearr_16140_16298 = state_16133__$1;
(statearr_16140_16298[(2)] = inst_16129);

(statearr_16140_16298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16289,c__15731__auto___16292,G__16120_16290,n__14278__auto___16288,jobs,results,process,async))
;
return ((function (__16289,switch__15710__auto__,c__15731__auto___16292,G__16120_16290,n__14278__auto___16288,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0 = (function (){
var statearr_16144 = [null,null,null,null,null,null,null];
(statearr_16144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__);

(statearr_16144[(1)] = (1));

return statearr_16144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1 = (function (state_16133){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_16133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e16145){if((e16145 instanceof Object)){
var ex__15714__auto__ = e16145;
var statearr_16146_16299 = state_16133;
(statearr_16146_16299[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16300 = state_16133;
state_16133 = G__16300;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__ = function(state_16133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1.call(this,state_16133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__;
})()
;})(__16289,switch__15710__auto__,c__15731__auto___16292,G__16120_16290,n__14278__auto___16288,jobs,results,process,async))
})();
var state__15733__auto__ = (function (){var statearr_16147 = f__15732__auto__.call(null);
(statearr_16147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___16292);

return statearr_16147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(__16289,c__15731__auto___16292,G__16120_16290,n__14278__auto___16288,jobs,results,process,async))
);


break;
case "async":
var c__15731__auto___16301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16289,c__15731__auto___16301,G__16120_16290,n__14278__auto___16288,jobs,results,process,async){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (__16289,c__15731__auto___16301,G__16120_16290,n__14278__auto___16288,jobs,results,process,async){
return (function (state_16160){
var state_val_16161 = (state_16160[(1)]);
if((state_val_16161 === (1))){
var state_16160__$1 = state_16160;
var statearr_16162_16302 = state_16160__$1;
(statearr_16162_16302[(2)] = null);

(statearr_16162_16302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16161 === (2))){
var state_16160__$1 = state_16160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16160__$1,(4),jobs);
} else {
if((state_val_16161 === (3))){
var inst_16158 = (state_16160[(2)]);
var state_16160__$1 = state_16160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16160__$1,inst_16158);
} else {
if((state_val_16161 === (4))){
var inst_16150 = (state_16160[(2)]);
var inst_16151 = async.call(null,inst_16150);
var state_16160__$1 = state_16160;
if(cljs.core.truth_(inst_16151)){
var statearr_16163_16303 = state_16160__$1;
(statearr_16163_16303[(1)] = (5));

} else {
var statearr_16164_16304 = state_16160__$1;
(statearr_16164_16304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16161 === (5))){
var state_16160__$1 = state_16160;
var statearr_16165_16305 = state_16160__$1;
(statearr_16165_16305[(2)] = null);

(statearr_16165_16305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16161 === (6))){
var state_16160__$1 = state_16160;
var statearr_16166_16306 = state_16160__$1;
(statearr_16166_16306[(2)] = null);

(statearr_16166_16306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16161 === (7))){
var inst_16156 = (state_16160[(2)]);
var state_16160__$1 = state_16160;
var statearr_16167_16307 = state_16160__$1;
(statearr_16167_16307[(2)] = inst_16156);

(statearr_16167_16307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16289,c__15731__auto___16301,G__16120_16290,n__14278__auto___16288,jobs,results,process,async))
;
return ((function (__16289,switch__15710__auto__,c__15731__auto___16301,G__16120_16290,n__14278__auto___16288,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0 = (function (){
var statearr_16171 = [null,null,null,null,null,null,null];
(statearr_16171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__);

(statearr_16171[(1)] = (1));

return statearr_16171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1 = (function (state_16160){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_16160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e16172){if((e16172 instanceof Object)){
var ex__15714__auto__ = e16172;
var statearr_16173_16308 = state_16160;
(statearr_16173_16308[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16309 = state_16160;
state_16160 = G__16309;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__ = function(state_16160){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1.call(this,state_16160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__;
})()
;})(__16289,switch__15710__auto__,c__15731__auto___16301,G__16120_16290,n__14278__auto___16288,jobs,results,process,async))
})();
var state__15733__auto__ = (function (){var statearr_16174 = f__15732__auto__.call(null);
(statearr_16174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___16301);

return statearr_16174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(__16289,c__15731__auto___16301,G__16120_16290,n__14278__auto___16288,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16310 = (__16289 + (1));
__16289 = G__16310;
continue;
} else {
}
break;
}

var c__15731__auto___16311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___16311,jobs,results,process,async){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___16311,jobs,results,process,async){
return (function (state_16196){
var state_val_16197 = (state_16196[(1)]);
if((state_val_16197 === (1))){
var state_16196__$1 = state_16196;
var statearr_16198_16312 = state_16196__$1;
(statearr_16198_16312[(2)] = null);

(statearr_16198_16312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16197 === (2))){
var state_16196__$1 = state_16196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16196__$1,(4),from);
} else {
if((state_val_16197 === (3))){
var inst_16194 = (state_16196[(2)]);
var state_16196__$1 = state_16196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16196__$1,inst_16194);
} else {
if((state_val_16197 === (4))){
var inst_16177 = (state_16196[(7)]);
var inst_16177__$1 = (state_16196[(2)]);
var inst_16178 = (inst_16177__$1 == null);
var state_16196__$1 = (function (){var statearr_16199 = state_16196;
(statearr_16199[(7)] = inst_16177__$1);

return statearr_16199;
})();
if(cljs.core.truth_(inst_16178)){
var statearr_16200_16313 = state_16196__$1;
(statearr_16200_16313[(1)] = (5));

} else {
var statearr_16201_16314 = state_16196__$1;
(statearr_16201_16314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16197 === (5))){
var inst_16180 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16196__$1 = state_16196;
var statearr_16202_16315 = state_16196__$1;
(statearr_16202_16315[(2)] = inst_16180);

(statearr_16202_16315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16197 === (6))){
var inst_16177 = (state_16196[(7)]);
var inst_16182 = (state_16196[(8)]);
var inst_16182__$1 = cljs.core.async.chan.call(null,(1));
var inst_16183 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16184 = [inst_16177,inst_16182__$1];
var inst_16185 = (new cljs.core.PersistentVector(null,2,(5),inst_16183,inst_16184,null));
var state_16196__$1 = (function (){var statearr_16203 = state_16196;
(statearr_16203[(8)] = inst_16182__$1);

return statearr_16203;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16196__$1,(8),jobs,inst_16185);
} else {
if((state_val_16197 === (7))){
var inst_16192 = (state_16196[(2)]);
var state_16196__$1 = state_16196;
var statearr_16204_16316 = state_16196__$1;
(statearr_16204_16316[(2)] = inst_16192);

(statearr_16204_16316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16197 === (8))){
var inst_16182 = (state_16196[(8)]);
var inst_16187 = (state_16196[(2)]);
var state_16196__$1 = (function (){var statearr_16205 = state_16196;
(statearr_16205[(9)] = inst_16187);

return statearr_16205;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16196__$1,(9),results,inst_16182);
} else {
if((state_val_16197 === (9))){
var inst_16189 = (state_16196[(2)]);
var state_16196__$1 = (function (){var statearr_16206 = state_16196;
(statearr_16206[(10)] = inst_16189);

return statearr_16206;
})();
var statearr_16207_16317 = state_16196__$1;
(statearr_16207_16317[(2)] = null);

(statearr_16207_16317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto___16311,jobs,results,process,async))
;
return ((function (switch__15710__auto__,c__15731__auto___16311,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0 = (function (){
var statearr_16211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__);

(statearr_16211[(1)] = (1));

return statearr_16211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1 = (function (state_16196){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_16196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e16212){if((e16212 instanceof Object)){
var ex__15714__auto__ = e16212;
var statearr_16213_16318 = state_16196;
(statearr_16213_16318[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16319 = state_16196;
state_16196 = G__16319;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__ = function(state_16196){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1.call(this,state_16196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___16311,jobs,results,process,async))
})();
var state__15733__auto__ = (function (){var statearr_16214 = f__15732__auto__.call(null);
(statearr_16214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___16311);

return statearr_16214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___16311,jobs,results,process,async))
);


var c__15731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto__,jobs,results,process,async){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto__,jobs,results,process,async){
return (function (state_16252){
var state_val_16253 = (state_16252[(1)]);
if((state_val_16253 === (7))){
var inst_16248 = (state_16252[(2)]);
var state_16252__$1 = state_16252;
var statearr_16254_16320 = state_16252__$1;
(statearr_16254_16320[(2)] = inst_16248);

(statearr_16254_16320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (20))){
var state_16252__$1 = state_16252;
var statearr_16255_16321 = state_16252__$1;
(statearr_16255_16321[(2)] = null);

(statearr_16255_16321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (1))){
var state_16252__$1 = state_16252;
var statearr_16256_16322 = state_16252__$1;
(statearr_16256_16322[(2)] = null);

(statearr_16256_16322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (4))){
var inst_16217 = (state_16252[(7)]);
var inst_16217__$1 = (state_16252[(2)]);
var inst_16218 = (inst_16217__$1 == null);
var state_16252__$1 = (function (){var statearr_16257 = state_16252;
(statearr_16257[(7)] = inst_16217__$1);

return statearr_16257;
})();
if(cljs.core.truth_(inst_16218)){
var statearr_16258_16323 = state_16252__$1;
(statearr_16258_16323[(1)] = (5));

} else {
var statearr_16259_16324 = state_16252__$1;
(statearr_16259_16324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (15))){
var inst_16230 = (state_16252[(8)]);
var state_16252__$1 = state_16252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16252__$1,(18),to,inst_16230);
} else {
if((state_val_16253 === (21))){
var inst_16243 = (state_16252[(2)]);
var state_16252__$1 = state_16252;
var statearr_16260_16325 = state_16252__$1;
(statearr_16260_16325[(2)] = inst_16243);

(statearr_16260_16325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (13))){
var inst_16245 = (state_16252[(2)]);
var state_16252__$1 = (function (){var statearr_16261 = state_16252;
(statearr_16261[(9)] = inst_16245);

return statearr_16261;
})();
var statearr_16262_16326 = state_16252__$1;
(statearr_16262_16326[(2)] = null);

(statearr_16262_16326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (6))){
var inst_16217 = (state_16252[(7)]);
var state_16252__$1 = state_16252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16252__$1,(11),inst_16217);
} else {
if((state_val_16253 === (17))){
var inst_16238 = (state_16252[(2)]);
var state_16252__$1 = state_16252;
if(cljs.core.truth_(inst_16238)){
var statearr_16263_16327 = state_16252__$1;
(statearr_16263_16327[(1)] = (19));

} else {
var statearr_16264_16328 = state_16252__$1;
(statearr_16264_16328[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (3))){
var inst_16250 = (state_16252[(2)]);
var state_16252__$1 = state_16252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16252__$1,inst_16250);
} else {
if((state_val_16253 === (12))){
var inst_16227 = (state_16252[(10)]);
var state_16252__$1 = state_16252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16252__$1,(14),inst_16227);
} else {
if((state_val_16253 === (2))){
var state_16252__$1 = state_16252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16252__$1,(4),results);
} else {
if((state_val_16253 === (19))){
var state_16252__$1 = state_16252;
var statearr_16265_16329 = state_16252__$1;
(statearr_16265_16329[(2)] = null);

(statearr_16265_16329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (11))){
var inst_16227 = (state_16252[(2)]);
var state_16252__$1 = (function (){var statearr_16266 = state_16252;
(statearr_16266[(10)] = inst_16227);

return statearr_16266;
})();
var statearr_16267_16330 = state_16252__$1;
(statearr_16267_16330[(2)] = null);

(statearr_16267_16330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (9))){
var state_16252__$1 = state_16252;
var statearr_16268_16331 = state_16252__$1;
(statearr_16268_16331[(2)] = null);

(statearr_16268_16331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (5))){
var state_16252__$1 = state_16252;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16269_16332 = state_16252__$1;
(statearr_16269_16332[(1)] = (8));

} else {
var statearr_16270_16333 = state_16252__$1;
(statearr_16270_16333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (14))){
var inst_16232 = (state_16252[(11)]);
var inst_16230 = (state_16252[(8)]);
var inst_16230__$1 = (state_16252[(2)]);
var inst_16231 = (inst_16230__$1 == null);
var inst_16232__$1 = cljs.core.not.call(null,inst_16231);
var state_16252__$1 = (function (){var statearr_16271 = state_16252;
(statearr_16271[(11)] = inst_16232__$1);

(statearr_16271[(8)] = inst_16230__$1);

return statearr_16271;
})();
if(inst_16232__$1){
var statearr_16272_16334 = state_16252__$1;
(statearr_16272_16334[(1)] = (15));

} else {
var statearr_16273_16335 = state_16252__$1;
(statearr_16273_16335[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (16))){
var inst_16232 = (state_16252[(11)]);
var state_16252__$1 = state_16252;
var statearr_16274_16336 = state_16252__$1;
(statearr_16274_16336[(2)] = inst_16232);

(statearr_16274_16336[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (10))){
var inst_16224 = (state_16252[(2)]);
var state_16252__$1 = state_16252;
var statearr_16275_16337 = state_16252__$1;
(statearr_16275_16337[(2)] = inst_16224);

(statearr_16275_16337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (18))){
var inst_16235 = (state_16252[(2)]);
var state_16252__$1 = state_16252;
var statearr_16276_16338 = state_16252__$1;
(statearr_16276_16338[(2)] = inst_16235);

(statearr_16276_16338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (8))){
var inst_16221 = cljs.core.async.close_BANG_.call(null,to);
var state_16252__$1 = state_16252;
var statearr_16277_16339 = state_16252__$1;
(statearr_16277_16339[(2)] = inst_16221);

(statearr_16277_16339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto__,jobs,results,process,async))
;
return ((function (switch__15710__auto__,c__15731__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0 = (function (){
var statearr_16281 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__);

(statearr_16281[(1)] = (1));

return statearr_16281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1 = (function (state_16252){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_16252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e16282){if((e16282 instanceof Object)){
var ex__15714__auto__ = e16282;
var statearr_16283_16340 = state_16252;
(statearr_16283_16340[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16341 = state_16252;
state_16252 = G__16341;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__ = function(state_16252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1.call(this,state_16252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto__,jobs,results,process,async))
})();
var state__15733__auto__ = (function (){var statearr_16284 = f__15732__auto__.call(null);
(statearr_16284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto__);

return statearr_16284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto__,jobs,results,process,async))
);

return c__15731__auto__;
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
var args16342 = [];
var len__14433__auto___16345 = arguments.length;
var i__14434__auto___16346 = (0);
while(true){
if((i__14434__auto___16346 < len__14433__auto___16345)){
args16342.push((arguments[i__14434__auto___16346]));

var G__16347 = (i__14434__auto___16346 + (1));
i__14434__auto___16346 = G__16347;
continue;
} else {
}
break;
}

var G__16344 = args16342.length;
switch (G__16344) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16342.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args16349 = [];
var len__14433__auto___16352 = arguments.length;
var i__14434__auto___16353 = (0);
while(true){
if((i__14434__auto___16353 < len__14433__auto___16352)){
args16349.push((arguments[i__14434__auto___16353]));

var G__16354 = (i__14434__auto___16353 + (1));
i__14434__auto___16353 = G__16354;
continue;
} else {
}
break;
}

var G__16351 = args16349.length;
switch (G__16351) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16349.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args16356 = [];
var len__14433__auto___16409 = arguments.length;
var i__14434__auto___16410 = (0);
while(true){
if((i__14434__auto___16410 < len__14433__auto___16409)){
args16356.push((arguments[i__14434__auto___16410]));

var G__16411 = (i__14434__auto___16410 + (1));
i__14434__auto___16410 = G__16411;
continue;
} else {
}
break;
}

var G__16358 = args16356.length;
switch (G__16358) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16356.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15731__auto___16413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___16413,tc,fc){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___16413,tc,fc){
return (function (state_16384){
var state_val_16385 = (state_16384[(1)]);
if((state_val_16385 === (7))){
var inst_16380 = (state_16384[(2)]);
var state_16384__$1 = state_16384;
var statearr_16386_16414 = state_16384__$1;
(statearr_16386_16414[(2)] = inst_16380);

(statearr_16386_16414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (1))){
var state_16384__$1 = state_16384;
var statearr_16387_16415 = state_16384__$1;
(statearr_16387_16415[(2)] = null);

(statearr_16387_16415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (4))){
var inst_16361 = (state_16384[(7)]);
var inst_16361__$1 = (state_16384[(2)]);
var inst_16362 = (inst_16361__$1 == null);
var state_16384__$1 = (function (){var statearr_16388 = state_16384;
(statearr_16388[(7)] = inst_16361__$1);

return statearr_16388;
})();
if(cljs.core.truth_(inst_16362)){
var statearr_16389_16416 = state_16384__$1;
(statearr_16389_16416[(1)] = (5));

} else {
var statearr_16390_16417 = state_16384__$1;
(statearr_16390_16417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (13))){
var state_16384__$1 = state_16384;
var statearr_16391_16418 = state_16384__$1;
(statearr_16391_16418[(2)] = null);

(statearr_16391_16418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (6))){
var inst_16361 = (state_16384[(7)]);
var inst_16367 = p.call(null,inst_16361);
var state_16384__$1 = state_16384;
if(cljs.core.truth_(inst_16367)){
var statearr_16392_16419 = state_16384__$1;
(statearr_16392_16419[(1)] = (9));

} else {
var statearr_16393_16420 = state_16384__$1;
(statearr_16393_16420[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (3))){
var inst_16382 = (state_16384[(2)]);
var state_16384__$1 = state_16384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16384__$1,inst_16382);
} else {
if((state_val_16385 === (12))){
var state_16384__$1 = state_16384;
var statearr_16394_16421 = state_16384__$1;
(statearr_16394_16421[(2)] = null);

(statearr_16394_16421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (2))){
var state_16384__$1 = state_16384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16384__$1,(4),ch);
} else {
if((state_val_16385 === (11))){
var inst_16361 = (state_16384[(7)]);
var inst_16371 = (state_16384[(2)]);
var state_16384__$1 = state_16384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16384__$1,(8),inst_16371,inst_16361);
} else {
if((state_val_16385 === (9))){
var state_16384__$1 = state_16384;
var statearr_16395_16422 = state_16384__$1;
(statearr_16395_16422[(2)] = tc);

(statearr_16395_16422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (5))){
var inst_16364 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16365 = cljs.core.async.close_BANG_.call(null,fc);
var state_16384__$1 = (function (){var statearr_16396 = state_16384;
(statearr_16396[(8)] = inst_16364);

return statearr_16396;
})();
var statearr_16397_16423 = state_16384__$1;
(statearr_16397_16423[(2)] = inst_16365);

(statearr_16397_16423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (14))){
var inst_16378 = (state_16384[(2)]);
var state_16384__$1 = state_16384;
var statearr_16398_16424 = state_16384__$1;
(statearr_16398_16424[(2)] = inst_16378);

(statearr_16398_16424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (10))){
var state_16384__$1 = state_16384;
var statearr_16399_16425 = state_16384__$1;
(statearr_16399_16425[(2)] = fc);

(statearr_16399_16425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (8))){
var inst_16373 = (state_16384[(2)]);
var state_16384__$1 = state_16384;
if(cljs.core.truth_(inst_16373)){
var statearr_16400_16426 = state_16384__$1;
(statearr_16400_16426[(1)] = (12));

} else {
var statearr_16401_16427 = state_16384__$1;
(statearr_16401_16427[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto___16413,tc,fc))
;
return ((function (switch__15710__auto__,c__15731__auto___16413,tc,fc){
return (function() {
var cljs$core$async$state_machine__15711__auto__ = null;
var cljs$core$async$state_machine__15711__auto____0 = (function (){
var statearr_16405 = [null,null,null,null,null,null,null,null,null];
(statearr_16405[(0)] = cljs$core$async$state_machine__15711__auto__);

(statearr_16405[(1)] = (1));

return statearr_16405;
});
var cljs$core$async$state_machine__15711__auto____1 = (function (state_16384){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_16384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e16406){if((e16406 instanceof Object)){
var ex__15714__auto__ = e16406;
var statearr_16407_16428 = state_16384;
(statearr_16407_16428[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16429 = state_16384;
state_16384 = G__16429;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$state_machine__15711__auto__ = function(state_16384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15711__auto____1.call(this,state_16384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15711__auto____0;
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15711__auto____1;
return cljs$core$async$state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___16413,tc,fc))
})();
var state__15733__auto__ = (function (){var statearr_16408 = f__15732__auto__.call(null);
(statearr_16408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___16413);

return statearr_16408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___16413,tc,fc))
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
var c__15731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto__){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto__){
return (function (state_16493){
var state_val_16494 = (state_16493[(1)]);
if((state_val_16494 === (7))){
var inst_16489 = (state_16493[(2)]);
var state_16493__$1 = state_16493;
var statearr_16495_16516 = state_16493__$1;
(statearr_16495_16516[(2)] = inst_16489);

(statearr_16495_16516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16494 === (1))){
var inst_16473 = init;
var state_16493__$1 = (function (){var statearr_16496 = state_16493;
(statearr_16496[(7)] = inst_16473);

return statearr_16496;
})();
var statearr_16497_16517 = state_16493__$1;
(statearr_16497_16517[(2)] = null);

(statearr_16497_16517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16494 === (4))){
var inst_16476 = (state_16493[(8)]);
var inst_16476__$1 = (state_16493[(2)]);
var inst_16477 = (inst_16476__$1 == null);
var state_16493__$1 = (function (){var statearr_16498 = state_16493;
(statearr_16498[(8)] = inst_16476__$1);

return statearr_16498;
})();
if(cljs.core.truth_(inst_16477)){
var statearr_16499_16518 = state_16493__$1;
(statearr_16499_16518[(1)] = (5));

} else {
var statearr_16500_16519 = state_16493__$1;
(statearr_16500_16519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16494 === (6))){
var inst_16476 = (state_16493[(8)]);
var inst_16480 = (state_16493[(9)]);
var inst_16473 = (state_16493[(7)]);
var inst_16480__$1 = f.call(null,inst_16473,inst_16476);
var inst_16481 = cljs.core.reduced_QMARK_.call(null,inst_16480__$1);
var state_16493__$1 = (function (){var statearr_16501 = state_16493;
(statearr_16501[(9)] = inst_16480__$1);

return statearr_16501;
})();
if(inst_16481){
var statearr_16502_16520 = state_16493__$1;
(statearr_16502_16520[(1)] = (8));

} else {
var statearr_16503_16521 = state_16493__$1;
(statearr_16503_16521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16494 === (3))){
var inst_16491 = (state_16493[(2)]);
var state_16493__$1 = state_16493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16493__$1,inst_16491);
} else {
if((state_val_16494 === (2))){
var state_16493__$1 = state_16493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16493__$1,(4),ch);
} else {
if((state_val_16494 === (9))){
var inst_16480 = (state_16493[(9)]);
var inst_16473 = inst_16480;
var state_16493__$1 = (function (){var statearr_16504 = state_16493;
(statearr_16504[(7)] = inst_16473);

return statearr_16504;
})();
var statearr_16505_16522 = state_16493__$1;
(statearr_16505_16522[(2)] = null);

(statearr_16505_16522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16494 === (5))){
var inst_16473 = (state_16493[(7)]);
var state_16493__$1 = state_16493;
var statearr_16506_16523 = state_16493__$1;
(statearr_16506_16523[(2)] = inst_16473);

(statearr_16506_16523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16494 === (10))){
var inst_16487 = (state_16493[(2)]);
var state_16493__$1 = state_16493;
var statearr_16507_16524 = state_16493__$1;
(statearr_16507_16524[(2)] = inst_16487);

(statearr_16507_16524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16494 === (8))){
var inst_16480 = (state_16493[(9)]);
var inst_16483 = cljs.core.deref.call(null,inst_16480);
var state_16493__$1 = state_16493;
var statearr_16508_16525 = state_16493__$1;
(statearr_16508_16525[(2)] = inst_16483);

(statearr_16508_16525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto__))
;
return ((function (switch__15710__auto__,c__15731__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15711__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15711__auto____0 = (function (){
var statearr_16512 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16512[(0)] = cljs$core$async$reduce_$_state_machine__15711__auto__);

(statearr_16512[(1)] = (1));

return statearr_16512;
});
var cljs$core$async$reduce_$_state_machine__15711__auto____1 = (function (state_16493){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_16493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e16513){if((e16513 instanceof Object)){
var ex__15714__auto__ = e16513;
var statearr_16514_16526 = state_16493;
(statearr_16514_16526[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16527 = state_16493;
state_16493 = G__16527;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15711__auto__ = function(state_16493){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15711__auto____1.call(this,state_16493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15711__auto____0;
cljs$core$async$reduce_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15711__auto____1;
return cljs$core$async$reduce_$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto__))
})();
var state__15733__auto__ = (function (){var statearr_16515 = f__15732__auto__.call(null);
(statearr_16515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto__);

return statearr_16515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto__))
);

return c__15731__auto__;
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
var args16528 = [];
var len__14433__auto___16580 = arguments.length;
var i__14434__auto___16581 = (0);
while(true){
if((i__14434__auto___16581 < len__14433__auto___16580)){
args16528.push((arguments[i__14434__auto___16581]));

var G__16582 = (i__14434__auto___16581 + (1));
i__14434__auto___16581 = G__16582;
continue;
} else {
}
break;
}

var G__16530 = args16528.length;
switch (G__16530) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16528.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto__){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto__){
return (function (state_16555){
var state_val_16556 = (state_16555[(1)]);
if((state_val_16556 === (7))){
var inst_16537 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
var statearr_16557_16584 = state_16555__$1;
(statearr_16557_16584[(2)] = inst_16537);

(statearr_16557_16584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16556 === (1))){
var inst_16531 = cljs.core.seq.call(null,coll);
var inst_16532 = inst_16531;
var state_16555__$1 = (function (){var statearr_16558 = state_16555;
(statearr_16558[(7)] = inst_16532);

return statearr_16558;
})();
var statearr_16559_16585 = state_16555__$1;
(statearr_16559_16585[(2)] = null);

(statearr_16559_16585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16556 === (4))){
var inst_16532 = (state_16555[(7)]);
var inst_16535 = cljs.core.first.call(null,inst_16532);
var state_16555__$1 = state_16555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16555__$1,(7),ch,inst_16535);
} else {
if((state_val_16556 === (13))){
var inst_16549 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
var statearr_16560_16586 = state_16555__$1;
(statearr_16560_16586[(2)] = inst_16549);

(statearr_16560_16586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16556 === (6))){
var inst_16540 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
if(cljs.core.truth_(inst_16540)){
var statearr_16561_16587 = state_16555__$1;
(statearr_16561_16587[(1)] = (8));

} else {
var statearr_16562_16588 = state_16555__$1;
(statearr_16562_16588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16556 === (3))){
var inst_16553 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16555__$1,inst_16553);
} else {
if((state_val_16556 === (12))){
var state_16555__$1 = state_16555;
var statearr_16563_16589 = state_16555__$1;
(statearr_16563_16589[(2)] = null);

(statearr_16563_16589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16556 === (2))){
var inst_16532 = (state_16555[(7)]);
var state_16555__$1 = state_16555;
if(cljs.core.truth_(inst_16532)){
var statearr_16564_16590 = state_16555__$1;
(statearr_16564_16590[(1)] = (4));

} else {
var statearr_16565_16591 = state_16555__$1;
(statearr_16565_16591[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16556 === (11))){
var inst_16546 = cljs.core.async.close_BANG_.call(null,ch);
var state_16555__$1 = state_16555;
var statearr_16566_16592 = state_16555__$1;
(statearr_16566_16592[(2)] = inst_16546);

(statearr_16566_16592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16556 === (9))){
var state_16555__$1 = state_16555;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16567_16593 = state_16555__$1;
(statearr_16567_16593[(1)] = (11));

} else {
var statearr_16568_16594 = state_16555__$1;
(statearr_16568_16594[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16556 === (5))){
var inst_16532 = (state_16555[(7)]);
var state_16555__$1 = state_16555;
var statearr_16569_16595 = state_16555__$1;
(statearr_16569_16595[(2)] = inst_16532);

(statearr_16569_16595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16556 === (10))){
var inst_16551 = (state_16555[(2)]);
var state_16555__$1 = state_16555;
var statearr_16570_16596 = state_16555__$1;
(statearr_16570_16596[(2)] = inst_16551);

(statearr_16570_16596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16556 === (8))){
var inst_16532 = (state_16555[(7)]);
var inst_16542 = cljs.core.next.call(null,inst_16532);
var inst_16532__$1 = inst_16542;
var state_16555__$1 = (function (){var statearr_16571 = state_16555;
(statearr_16571[(7)] = inst_16532__$1);

return statearr_16571;
})();
var statearr_16572_16597 = state_16555__$1;
(statearr_16572_16597[(2)] = null);

(statearr_16572_16597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto__))
;
return ((function (switch__15710__auto__,c__15731__auto__){
return (function() {
var cljs$core$async$state_machine__15711__auto__ = null;
var cljs$core$async$state_machine__15711__auto____0 = (function (){
var statearr_16576 = [null,null,null,null,null,null,null,null];
(statearr_16576[(0)] = cljs$core$async$state_machine__15711__auto__);

(statearr_16576[(1)] = (1));

return statearr_16576;
});
var cljs$core$async$state_machine__15711__auto____1 = (function (state_16555){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_16555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e16577){if((e16577 instanceof Object)){
var ex__15714__auto__ = e16577;
var statearr_16578_16598 = state_16555;
(statearr_16578_16598[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16599 = state_16555;
state_16555 = G__16599;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$state_machine__15711__auto__ = function(state_16555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15711__auto____1.call(this,state_16555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15711__auto____0;
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15711__auto____1;
return cljs$core$async$state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto__))
})();
var state__15733__auto__ = (function (){var statearr_16579 = f__15732__auto__.call(null);
(statearr_16579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto__);

return statearr_16579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto__))
);

return c__15731__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__14030__auto__ = (((_ == null))?null:_);
var m__14031__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,_);
} else {
var m__14031__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__14030__auto__ = (((m == null))?null:m);
var m__14031__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__14031__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__14030__auto__ = (((m == null))?null:m);
var m__14031__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,m,ch);
} else {
var m__14031__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__14030__auto__ = (((m == null))?null:m);
var m__14031__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,m);
} else {
var m__14031__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16821 = (function (mult,ch,cs,meta16822){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16822 = meta16822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16823,meta16822__$1){
var self__ = this;
var _16823__$1 = this;
return (new cljs.core.async.t_cljs$core$async16821(self__.mult,self__.ch,self__.cs,meta16822__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16823){
var self__ = this;
var _16823__$1 = this;
return self__.meta16822;
});})(cs))
;

cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16821.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16822","meta16822",166971423,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16821";

cljs.core.async.t_cljs$core$async16821.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async16821");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16821 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16821(mult__$1,ch__$1,cs__$1,meta16822){
return (new cljs.core.async.t_cljs$core$async16821(mult__$1,ch__$1,cs__$1,meta16822));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16821(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15731__auto___17042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___17042,cs,m,dchan,dctr,done){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___17042,cs,m,dchan,dctr,done){
return (function (state_16954){
var state_val_16955 = (state_16954[(1)]);
if((state_val_16955 === (7))){
var inst_16950 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_16956_17043 = state_16954__$1;
(statearr_16956_17043[(2)] = inst_16950);

(statearr_16956_17043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (20))){
var inst_16855 = (state_16954[(7)]);
var inst_16865 = cljs.core.first.call(null,inst_16855);
var inst_16866 = cljs.core.nth.call(null,inst_16865,(0),null);
var inst_16867 = cljs.core.nth.call(null,inst_16865,(1),null);
var state_16954__$1 = (function (){var statearr_16957 = state_16954;
(statearr_16957[(8)] = inst_16866);

return statearr_16957;
})();
if(cljs.core.truth_(inst_16867)){
var statearr_16958_17044 = state_16954__$1;
(statearr_16958_17044[(1)] = (22));

} else {
var statearr_16959_17045 = state_16954__$1;
(statearr_16959_17045[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (27))){
var inst_16897 = (state_16954[(9)]);
var inst_16895 = (state_16954[(10)]);
var inst_16826 = (state_16954[(11)]);
var inst_16902 = (state_16954[(12)]);
var inst_16902__$1 = cljs.core._nth.call(null,inst_16895,inst_16897);
var inst_16903 = cljs.core.async.put_BANG_.call(null,inst_16902__$1,inst_16826,done);
var state_16954__$1 = (function (){var statearr_16960 = state_16954;
(statearr_16960[(12)] = inst_16902__$1);

return statearr_16960;
})();
if(cljs.core.truth_(inst_16903)){
var statearr_16961_17046 = state_16954__$1;
(statearr_16961_17046[(1)] = (30));

} else {
var statearr_16962_17047 = state_16954__$1;
(statearr_16962_17047[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (1))){
var state_16954__$1 = state_16954;
var statearr_16963_17048 = state_16954__$1;
(statearr_16963_17048[(2)] = null);

(statearr_16963_17048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (24))){
var inst_16855 = (state_16954[(7)]);
var inst_16872 = (state_16954[(2)]);
var inst_16873 = cljs.core.next.call(null,inst_16855);
var inst_16835 = inst_16873;
var inst_16836 = null;
var inst_16837 = (0);
var inst_16838 = (0);
var state_16954__$1 = (function (){var statearr_16964 = state_16954;
(statearr_16964[(13)] = inst_16872);

(statearr_16964[(14)] = inst_16835);

(statearr_16964[(15)] = inst_16838);

(statearr_16964[(16)] = inst_16836);

(statearr_16964[(17)] = inst_16837);

return statearr_16964;
})();
var statearr_16965_17049 = state_16954__$1;
(statearr_16965_17049[(2)] = null);

(statearr_16965_17049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (39))){
var state_16954__$1 = state_16954;
var statearr_16969_17050 = state_16954__$1;
(statearr_16969_17050[(2)] = null);

(statearr_16969_17050[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (4))){
var inst_16826 = (state_16954[(11)]);
var inst_16826__$1 = (state_16954[(2)]);
var inst_16827 = (inst_16826__$1 == null);
var state_16954__$1 = (function (){var statearr_16970 = state_16954;
(statearr_16970[(11)] = inst_16826__$1);

return statearr_16970;
})();
if(cljs.core.truth_(inst_16827)){
var statearr_16971_17051 = state_16954__$1;
(statearr_16971_17051[(1)] = (5));

} else {
var statearr_16972_17052 = state_16954__$1;
(statearr_16972_17052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (15))){
var inst_16835 = (state_16954[(14)]);
var inst_16838 = (state_16954[(15)]);
var inst_16836 = (state_16954[(16)]);
var inst_16837 = (state_16954[(17)]);
var inst_16851 = (state_16954[(2)]);
var inst_16852 = (inst_16838 + (1));
var tmp16966 = inst_16835;
var tmp16967 = inst_16836;
var tmp16968 = inst_16837;
var inst_16835__$1 = tmp16966;
var inst_16836__$1 = tmp16967;
var inst_16837__$1 = tmp16968;
var inst_16838__$1 = inst_16852;
var state_16954__$1 = (function (){var statearr_16973 = state_16954;
(statearr_16973[(18)] = inst_16851);

(statearr_16973[(14)] = inst_16835__$1);

(statearr_16973[(15)] = inst_16838__$1);

(statearr_16973[(16)] = inst_16836__$1);

(statearr_16973[(17)] = inst_16837__$1);

return statearr_16973;
})();
var statearr_16974_17053 = state_16954__$1;
(statearr_16974_17053[(2)] = null);

(statearr_16974_17053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (21))){
var inst_16876 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_16978_17054 = state_16954__$1;
(statearr_16978_17054[(2)] = inst_16876);

(statearr_16978_17054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (31))){
var inst_16902 = (state_16954[(12)]);
var inst_16906 = done.call(null,null);
var inst_16907 = cljs.core.async.untap_STAR_.call(null,m,inst_16902);
var state_16954__$1 = (function (){var statearr_16979 = state_16954;
(statearr_16979[(19)] = inst_16906);

return statearr_16979;
})();
var statearr_16980_17055 = state_16954__$1;
(statearr_16980_17055[(2)] = inst_16907);

(statearr_16980_17055[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (32))){
var inst_16894 = (state_16954[(20)]);
var inst_16897 = (state_16954[(9)]);
var inst_16895 = (state_16954[(10)]);
var inst_16896 = (state_16954[(21)]);
var inst_16909 = (state_16954[(2)]);
var inst_16910 = (inst_16897 + (1));
var tmp16975 = inst_16894;
var tmp16976 = inst_16895;
var tmp16977 = inst_16896;
var inst_16894__$1 = tmp16975;
var inst_16895__$1 = tmp16976;
var inst_16896__$1 = tmp16977;
var inst_16897__$1 = inst_16910;
var state_16954__$1 = (function (){var statearr_16981 = state_16954;
(statearr_16981[(20)] = inst_16894__$1);

(statearr_16981[(22)] = inst_16909);

(statearr_16981[(9)] = inst_16897__$1);

(statearr_16981[(10)] = inst_16895__$1);

(statearr_16981[(21)] = inst_16896__$1);

return statearr_16981;
})();
var statearr_16982_17056 = state_16954__$1;
(statearr_16982_17056[(2)] = null);

(statearr_16982_17056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (40))){
var inst_16922 = (state_16954[(23)]);
var inst_16926 = done.call(null,null);
var inst_16927 = cljs.core.async.untap_STAR_.call(null,m,inst_16922);
var state_16954__$1 = (function (){var statearr_16983 = state_16954;
(statearr_16983[(24)] = inst_16926);

return statearr_16983;
})();
var statearr_16984_17057 = state_16954__$1;
(statearr_16984_17057[(2)] = inst_16927);

(statearr_16984_17057[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (33))){
var inst_16913 = (state_16954[(25)]);
var inst_16915 = cljs.core.chunked_seq_QMARK_.call(null,inst_16913);
var state_16954__$1 = state_16954;
if(inst_16915){
var statearr_16985_17058 = state_16954__$1;
(statearr_16985_17058[(1)] = (36));

} else {
var statearr_16986_17059 = state_16954__$1;
(statearr_16986_17059[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (13))){
var inst_16845 = (state_16954[(26)]);
var inst_16848 = cljs.core.async.close_BANG_.call(null,inst_16845);
var state_16954__$1 = state_16954;
var statearr_16987_17060 = state_16954__$1;
(statearr_16987_17060[(2)] = inst_16848);

(statearr_16987_17060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (22))){
var inst_16866 = (state_16954[(8)]);
var inst_16869 = cljs.core.async.close_BANG_.call(null,inst_16866);
var state_16954__$1 = state_16954;
var statearr_16988_17061 = state_16954__$1;
(statearr_16988_17061[(2)] = inst_16869);

(statearr_16988_17061[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (36))){
var inst_16913 = (state_16954[(25)]);
var inst_16917 = cljs.core.chunk_first.call(null,inst_16913);
var inst_16918 = cljs.core.chunk_rest.call(null,inst_16913);
var inst_16919 = cljs.core.count.call(null,inst_16917);
var inst_16894 = inst_16918;
var inst_16895 = inst_16917;
var inst_16896 = inst_16919;
var inst_16897 = (0);
var state_16954__$1 = (function (){var statearr_16989 = state_16954;
(statearr_16989[(20)] = inst_16894);

(statearr_16989[(9)] = inst_16897);

(statearr_16989[(10)] = inst_16895);

(statearr_16989[(21)] = inst_16896);

return statearr_16989;
})();
var statearr_16990_17062 = state_16954__$1;
(statearr_16990_17062[(2)] = null);

(statearr_16990_17062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (41))){
var inst_16913 = (state_16954[(25)]);
var inst_16929 = (state_16954[(2)]);
var inst_16930 = cljs.core.next.call(null,inst_16913);
var inst_16894 = inst_16930;
var inst_16895 = null;
var inst_16896 = (0);
var inst_16897 = (0);
var state_16954__$1 = (function (){var statearr_16991 = state_16954;
(statearr_16991[(20)] = inst_16894);

(statearr_16991[(9)] = inst_16897);

(statearr_16991[(10)] = inst_16895);

(statearr_16991[(27)] = inst_16929);

(statearr_16991[(21)] = inst_16896);

return statearr_16991;
})();
var statearr_16992_17063 = state_16954__$1;
(statearr_16992_17063[(2)] = null);

(statearr_16992_17063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (43))){
var state_16954__$1 = state_16954;
var statearr_16993_17064 = state_16954__$1;
(statearr_16993_17064[(2)] = null);

(statearr_16993_17064[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (29))){
var inst_16938 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_16994_17065 = state_16954__$1;
(statearr_16994_17065[(2)] = inst_16938);

(statearr_16994_17065[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (44))){
var inst_16947 = (state_16954[(2)]);
var state_16954__$1 = (function (){var statearr_16995 = state_16954;
(statearr_16995[(28)] = inst_16947);

return statearr_16995;
})();
var statearr_16996_17066 = state_16954__$1;
(statearr_16996_17066[(2)] = null);

(statearr_16996_17066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (6))){
var inst_16886 = (state_16954[(29)]);
var inst_16885 = cljs.core.deref.call(null,cs);
var inst_16886__$1 = cljs.core.keys.call(null,inst_16885);
var inst_16887 = cljs.core.count.call(null,inst_16886__$1);
var inst_16888 = cljs.core.reset_BANG_.call(null,dctr,inst_16887);
var inst_16893 = cljs.core.seq.call(null,inst_16886__$1);
var inst_16894 = inst_16893;
var inst_16895 = null;
var inst_16896 = (0);
var inst_16897 = (0);
var state_16954__$1 = (function (){var statearr_16997 = state_16954;
(statearr_16997[(20)] = inst_16894);

(statearr_16997[(29)] = inst_16886__$1);

(statearr_16997[(30)] = inst_16888);

(statearr_16997[(9)] = inst_16897);

(statearr_16997[(10)] = inst_16895);

(statearr_16997[(21)] = inst_16896);

return statearr_16997;
})();
var statearr_16998_17067 = state_16954__$1;
(statearr_16998_17067[(2)] = null);

(statearr_16998_17067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (28))){
var inst_16894 = (state_16954[(20)]);
var inst_16913 = (state_16954[(25)]);
var inst_16913__$1 = cljs.core.seq.call(null,inst_16894);
var state_16954__$1 = (function (){var statearr_16999 = state_16954;
(statearr_16999[(25)] = inst_16913__$1);

return statearr_16999;
})();
if(inst_16913__$1){
var statearr_17000_17068 = state_16954__$1;
(statearr_17000_17068[(1)] = (33));

} else {
var statearr_17001_17069 = state_16954__$1;
(statearr_17001_17069[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (25))){
var inst_16897 = (state_16954[(9)]);
var inst_16896 = (state_16954[(21)]);
var inst_16899 = (inst_16897 < inst_16896);
var inst_16900 = inst_16899;
var state_16954__$1 = state_16954;
if(cljs.core.truth_(inst_16900)){
var statearr_17002_17070 = state_16954__$1;
(statearr_17002_17070[(1)] = (27));

} else {
var statearr_17003_17071 = state_16954__$1;
(statearr_17003_17071[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (34))){
var state_16954__$1 = state_16954;
var statearr_17004_17072 = state_16954__$1;
(statearr_17004_17072[(2)] = null);

(statearr_17004_17072[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (17))){
var state_16954__$1 = state_16954;
var statearr_17005_17073 = state_16954__$1;
(statearr_17005_17073[(2)] = null);

(statearr_17005_17073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (3))){
var inst_16952 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16954__$1,inst_16952);
} else {
if((state_val_16955 === (12))){
var inst_16881 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_17006_17074 = state_16954__$1;
(statearr_17006_17074[(2)] = inst_16881);

(statearr_17006_17074[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (2))){
var state_16954__$1 = state_16954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16954__$1,(4),ch);
} else {
if((state_val_16955 === (23))){
var state_16954__$1 = state_16954;
var statearr_17007_17075 = state_16954__$1;
(statearr_17007_17075[(2)] = null);

(statearr_17007_17075[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (35))){
var inst_16936 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_17008_17076 = state_16954__$1;
(statearr_17008_17076[(2)] = inst_16936);

(statearr_17008_17076[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (19))){
var inst_16855 = (state_16954[(7)]);
var inst_16859 = cljs.core.chunk_first.call(null,inst_16855);
var inst_16860 = cljs.core.chunk_rest.call(null,inst_16855);
var inst_16861 = cljs.core.count.call(null,inst_16859);
var inst_16835 = inst_16860;
var inst_16836 = inst_16859;
var inst_16837 = inst_16861;
var inst_16838 = (0);
var state_16954__$1 = (function (){var statearr_17009 = state_16954;
(statearr_17009[(14)] = inst_16835);

(statearr_17009[(15)] = inst_16838);

(statearr_17009[(16)] = inst_16836);

(statearr_17009[(17)] = inst_16837);

return statearr_17009;
})();
var statearr_17010_17077 = state_16954__$1;
(statearr_17010_17077[(2)] = null);

(statearr_17010_17077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (11))){
var inst_16835 = (state_16954[(14)]);
var inst_16855 = (state_16954[(7)]);
var inst_16855__$1 = cljs.core.seq.call(null,inst_16835);
var state_16954__$1 = (function (){var statearr_17011 = state_16954;
(statearr_17011[(7)] = inst_16855__$1);

return statearr_17011;
})();
if(inst_16855__$1){
var statearr_17012_17078 = state_16954__$1;
(statearr_17012_17078[(1)] = (16));

} else {
var statearr_17013_17079 = state_16954__$1;
(statearr_17013_17079[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (9))){
var inst_16883 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_17014_17080 = state_16954__$1;
(statearr_17014_17080[(2)] = inst_16883);

(statearr_17014_17080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (5))){
var inst_16833 = cljs.core.deref.call(null,cs);
var inst_16834 = cljs.core.seq.call(null,inst_16833);
var inst_16835 = inst_16834;
var inst_16836 = null;
var inst_16837 = (0);
var inst_16838 = (0);
var state_16954__$1 = (function (){var statearr_17015 = state_16954;
(statearr_17015[(14)] = inst_16835);

(statearr_17015[(15)] = inst_16838);

(statearr_17015[(16)] = inst_16836);

(statearr_17015[(17)] = inst_16837);

return statearr_17015;
})();
var statearr_17016_17081 = state_16954__$1;
(statearr_17016_17081[(2)] = null);

(statearr_17016_17081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (14))){
var state_16954__$1 = state_16954;
var statearr_17017_17082 = state_16954__$1;
(statearr_17017_17082[(2)] = null);

(statearr_17017_17082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (45))){
var inst_16944 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_17018_17083 = state_16954__$1;
(statearr_17018_17083[(2)] = inst_16944);

(statearr_17018_17083[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (26))){
var inst_16886 = (state_16954[(29)]);
var inst_16940 = (state_16954[(2)]);
var inst_16941 = cljs.core.seq.call(null,inst_16886);
var state_16954__$1 = (function (){var statearr_17019 = state_16954;
(statearr_17019[(31)] = inst_16940);

return statearr_17019;
})();
if(inst_16941){
var statearr_17020_17084 = state_16954__$1;
(statearr_17020_17084[(1)] = (42));

} else {
var statearr_17021_17085 = state_16954__$1;
(statearr_17021_17085[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (16))){
var inst_16855 = (state_16954[(7)]);
var inst_16857 = cljs.core.chunked_seq_QMARK_.call(null,inst_16855);
var state_16954__$1 = state_16954;
if(inst_16857){
var statearr_17022_17086 = state_16954__$1;
(statearr_17022_17086[(1)] = (19));

} else {
var statearr_17023_17087 = state_16954__$1;
(statearr_17023_17087[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (38))){
var inst_16933 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_17024_17088 = state_16954__$1;
(statearr_17024_17088[(2)] = inst_16933);

(statearr_17024_17088[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (30))){
var state_16954__$1 = state_16954;
var statearr_17025_17089 = state_16954__$1;
(statearr_17025_17089[(2)] = null);

(statearr_17025_17089[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (10))){
var inst_16838 = (state_16954[(15)]);
var inst_16836 = (state_16954[(16)]);
var inst_16844 = cljs.core._nth.call(null,inst_16836,inst_16838);
var inst_16845 = cljs.core.nth.call(null,inst_16844,(0),null);
var inst_16846 = cljs.core.nth.call(null,inst_16844,(1),null);
var state_16954__$1 = (function (){var statearr_17026 = state_16954;
(statearr_17026[(26)] = inst_16845);

return statearr_17026;
})();
if(cljs.core.truth_(inst_16846)){
var statearr_17027_17090 = state_16954__$1;
(statearr_17027_17090[(1)] = (13));

} else {
var statearr_17028_17091 = state_16954__$1;
(statearr_17028_17091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (18))){
var inst_16879 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_17029_17092 = state_16954__$1;
(statearr_17029_17092[(2)] = inst_16879);

(statearr_17029_17092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (42))){
var state_16954__$1 = state_16954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16954__$1,(45),dchan);
} else {
if((state_val_16955 === (37))){
var inst_16913 = (state_16954[(25)]);
var inst_16922 = (state_16954[(23)]);
var inst_16826 = (state_16954[(11)]);
var inst_16922__$1 = cljs.core.first.call(null,inst_16913);
var inst_16923 = cljs.core.async.put_BANG_.call(null,inst_16922__$1,inst_16826,done);
var state_16954__$1 = (function (){var statearr_17030 = state_16954;
(statearr_17030[(23)] = inst_16922__$1);

return statearr_17030;
})();
if(cljs.core.truth_(inst_16923)){
var statearr_17031_17093 = state_16954__$1;
(statearr_17031_17093[(1)] = (39));

} else {
var statearr_17032_17094 = state_16954__$1;
(statearr_17032_17094[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (8))){
var inst_16838 = (state_16954[(15)]);
var inst_16837 = (state_16954[(17)]);
var inst_16840 = (inst_16838 < inst_16837);
var inst_16841 = inst_16840;
var state_16954__$1 = state_16954;
if(cljs.core.truth_(inst_16841)){
var statearr_17033_17095 = state_16954__$1;
(statearr_17033_17095[(1)] = (10));

} else {
var statearr_17034_17096 = state_16954__$1;
(statearr_17034_17096[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto___17042,cs,m,dchan,dctr,done))
;
return ((function (switch__15710__auto__,c__15731__auto___17042,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15711__auto__ = null;
var cljs$core$async$mult_$_state_machine__15711__auto____0 = (function (){
var statearr_17038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17038[(0)] = cljs$core$async$mult_$_state_machine__15711__auto__);

(statearr_17038[(1)] = (1));

return statearr_17038;
});
var cljs$core$async$mult_$_state_machine__15711__auto____1 = (function (state_16954){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_16954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e17039){if((e17039 instanceof Object)){
var ex__15714__auto__ = e17039;
var statearr_17040_17097 = state_16954;
(statearr_17040_17097[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17098 = state_16954;
state_16954 = G__17098;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15711__auto__ = function(state_16954){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15711__auto____1.call(this,state_16954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15711__auto____0;
cljs$core$async$mult_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15711__auto____1;
return cljs$core$async$mult_$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___17042,cs,m,dchan,dctr,done))
})();
var state__15733__auto__ = (function (){var statearr_17041 = f__15732__auto__.call(null);
(statearr_17041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___17042);

return statearr_17041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___17042,cs,m,dchan,dctr,done))
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
var args17099 = [];
var len__14433__auto___17102 = arguments.length;
var i__14434__auto___17103 = (0);
while(true){
if((i__14434__auto___17103 < len__14433__auto___17102)){
args17099.push((arguments[i__14434__auto___17103]));

var G__17104 = (i__14434__auto___17103 + (1));
i__14434__auto___17103 = G__17104;
continue;
} else {
}
break;
}

var G__17101 = args17099.length;
switch (G__17101) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17099.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__14030__auto__ = (((m == null))?null:m);
var m__14031__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,m,ch);
} else {
var m__14031__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__14030__auto__ = (((m == null))?null:m);
var m__14031__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,m,ch);
} else {
var m__14031__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__14030__auto__ = (((m == null))?null:m);
var m__14031__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,m);
} else {
var m__14031__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__14030__auto__ = (((m == null))?null:m);
var m__14031__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,m,state_map);
} else {
var m__14031__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__14030__auto__ = (((m == null))?null:m);
var m__14031__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,m,mode);
} else {
var m__14031__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__14440__auto__ = [];
var len__14433__auto___17116 = arguments.length;
var i__14434__auto___17117 = (0);
while(true){
if((i__14434__auto___17117 < len__14433__auto___17116)){
args__14440__auto__.push((arguments[i__14434__auto___17117]));

var G__17118 = (i__14434__auto___17117 + (1));
i__14434__auto___17117 = G__17118;
continue;
} else {
}
break;
}

var argseq__14441__auto__ = ((((3) < args__14440__auto__.length))?(new cljs.core.IndexedSeq(args__14440__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__14441__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17110){
var map__17111 = p__17110;
var map__17111__$1 = ((((!((map__17111 == null)))?((((map__17111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17111):map__17111);
var opts = map__17111__$1;
var statearr_17113_17119 = state;
(statearr_17113_17119[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__17111,map__17111__$1,opts){
return (function (val){
var statearr_17114_17120 = state;
(statearr_17114_17120[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17111,map__17111__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_17115_17121 = state;
(statearr_17115_17121[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17106){
var G__17107 = cljs.core.first.call(null,seq17106);
var seq17106__$1 = cljs.core.next.call(null,seq17106);
var G__17108 = cljs.core.first.call(null,seq17106__$1);
var seq17106__$2 = cljs.core.next.call(null,seq17106__$1);
var G__17109 = cljs.core.first.call(null,seq17106__$2);
var seq17106__$3 = cljs.core.next.call(null,seq17106__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17107,G__17108,G__17109,seq17106__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17285 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17286){
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
this.meta17286 = meta17286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17287,meta17286__$1){
var self__ = this;
var _17287__$1 = this;
return (new cljs.core.async.t_cljs$core$async17285(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17286__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17287){
var self__ = this;
var _17287__$1 = this;
return self__.meta17286;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17285.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17285.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17285.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17285.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17285.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17285.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17285.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17285.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17285.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17286","meta17286",1908077742,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17285";

cljs.core.async.t_cljs$core$async17285.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async17285");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17285 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17285(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17286){
return (new cljs.core.async.t_cljs$core$async17285(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17286));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17285(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15731__auto___17448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___17448,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___17448,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17385){
var state_val_17386 = (state_17385[(1)]);
if((state_val_17386 === (7))){
var inst_17303 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
var statearr_17387_17449 = state_17385__$1;
(statearr_17387_17449[(2)] = inst_17303);

(statearr_17387_17449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (20))){
var inst_17315 = (state_17385[(7)]);
var state_17385__$1 = state_17385;
var statearr_17388_17450 = state_17385__$1;
(statearr_17388_17450[(2)] = inst_17315);

(statearr_17388_17450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (27))){
var state_17385__$1 = state_17385;
var statearr_17389_17451 = state_17385__$1;
(statearr_17389_17451[(2)] = null);

(statearr_17389_17451[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (1))){
var inst_17291 = (state_17385[(8)]);
var inst_17291__$1 = calc_state.call(null);
var inst_17293 = (inst_17291__$1 == null);
var inst_17294 = cljs.core.not.call(null,inst_17293);
var state_17385__$1 = (function (){var statearr_17390 = state_17385;
(statearr_17390[(8)] = inst_17291__$1);

return statearr_17390;
})();
if(inst_17294){
var statearr_17391_17452 = state_17385__$1;
(statearr_17391_17452[(1)] = (2));

} else {
var statearr_17392_17453 = state_17385__$1;
(statearr_17392_17453[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (24))){
var inst_17338 = (state_17385[(9)]);
var inst_17345 = (state_17385[(10)]);
var inst_17359 = (state_17385[(11)]);
var inst_17359__$1 = inst_17338.call(null,inst_17345);
var state_17385__$1 = (function (){var statearr_17393 = state_17385;
(statearr_17393[(11)] = inst_17359__$1);

return statearr_17393;
})();
if(cljs.core.truth_(inst_17359__$1)){
var statearr_17394_17454 = state_17385__$1;
(statearr_17394_17454[(1)] = (29));

} else {
var statearr_17395_17455 = state_17385__$1;
(statearr_17395_17455[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (4))){
var inst_17306 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
if(cljs.core.truth_(inst_17306)){
var statearr_17396_17456 = state_17385__$1;
(statearr_17396_17456[(1)] = (8));

} else {
var statearr_17397_17457 = state_17385__$1;
(statearr_17397_17457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (15))){
var inst_17332 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
if(cljs.core.truth_(inst_17332)){
var statearr_17398_17458 = state_17385__$1;
(statearr_17398_17458[(1)] = (19));

} else {
var statearr_17399_17459 = state_17385__$1;
(statearr_17399_17459[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (21))){
var inst_17337 = (state_17385[(12)]);
var inst_17337__$1 = (state_17385[(2)]);
var inst_17338 = cljs.core.get.call(null,inst_17337__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17339 = cljs.core.get.call(null,inst_17337__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17340 = cljs.core.get.call(null,inst_17337__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17385__$1 = (function (){var statearr_17400 = state_17385;
(statearr_17400[(9)] = inst_17338);

(statearr_17400[(12)] = inst_17337__$1);

(statearr_17400[(13)] = inst_17339);

return statearr_17400;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17385__$1,(22),inst_17340);
} else {
if((state_val_17386 === (31))){
var inst_17367 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
if(cljs.core.truth_(inst_17367)){
var statearr_17401_17460 = state_17385__$1;
(statearr_17401_17460[(1)] = (32));

} else {
var statearr_17402_17461 = state_17385__$1;
(statearr_17402_17461[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (32))){
var inst_17344 = (state_17385[(14)]);
var state_17385__$1 = state_17385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17385__$1,(35),out,inst_17344);
} else {
if((state_val_17386 === (33))){
var inst_17337 = (state_17385[(12)]);
var inst_17315 = inst_17337;
var state_17385__$1 = (function (){var statearr_17403 = state_17385;
(statearr_17403[(7)] = inst_17315);

return statearr_17403;
})();
var statearr_17404_17462 = state_17385__$1;
(statearr_17404_17462[(2)] = null);

(statearr_17404_17462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (13))){
var inst_17315 = (state_17385[(7)]);
var inst_17322 = inst_17315.cljs$lang$protocol_mask$partition0$;
var inst_17323 = (inst_17322 & (64));
var inst_17324 = inst_17315.cljs$core$ISeq$;
var inst_17325 = (inst_17323) || (inst_17324);
var state_17385__$1 = state_17385;
if(cljs.core.truth_(inst_17325)){
var statearr_17405_17463 = state_17385__$1;
(statearr_17405_17463[(1)] = (16));

} else {
var statearr_17406_17464 = state_17385__$1;
(statearr_17406_17464[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (22))){
var inst_17345 = (state_17385[(10)]);
var inst_17344 = (state_17385[(14)]);
var inst_17343 = (state_17385[(2)]);
var inst_17344__$1 = cljs.core.nth.call(null,inst_17343,(0),null);
var inst_17345__$1 = cljs.core.nth.call(null,inst_17343,(1),null);
var inst_17346 = (inst_17344__$1 == null);
var inst_17347 = cljs.core._EQ_.call(null,inst_17345__$1,change);
var inst_17348 = (inst_17346) || (inst_17347);
var state_17385__$1 = (function (){var statearr_17407 = state_17385;
(statearr_17407[(10)] = inst_17345__$1);

(statearr_17407[(14)] = inst_17344__$1);

return statearr_17407;
})();
if(cljs.core.truth_(inst_17348)){
var statearr_17408_17465 = state_17385__$1;
(statearr_17408_17465[(1)] = (23));

} else {
var statearr_17409_17466 = state_17385__$1;
(statearr_17409_17466[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (36))){
var inst_17337 = (state_17385[(12)]);
var inst_17315 = inst_17337;
var state_17385__$1 = (function (){var statearr_17410 = state_17385;
(statearr_17410[(7)] = inst_17315);

return statearr_17410;
})();
var statearr_17411_17467 = state_17385__$1;
(statearr_17411_17467[(2)] = null);

(statearr_17411_17467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (29))){
var inst_17359 = (state_17385[(11)]);
var state_17385__$1 = state_17385;
var statearr_17412_17468 = state_17385__$1;
(statearr_17412_17468[(2)] = inst_17359);

(statearr_17412_17468[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (6))){
var state_17385__$1 = state_17385;
var statearr_17413_17469 = state_17385__$1;
(statearr_17413_17469[(2)] = false);

(statearr_17413_17469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (28))){
var inst_17355 = (state_17385[(2)]);
var inst_17356 = calc_state.call(null);
var inst_17315 = inst_17356;
var state_17385__$1 = (function (){var statearr_17414 = state_17385;
(statearr_17414[(15)] = inst_17355);

(statearr_17414[(7)] = inst_17315);

return statearr_17414;
})();
var statearr_17415_17470 = state_17385__$1;
(statearr_17415_17470[(2)] = null);

(statearr_17415_17470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (25))){
var inst_17381 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
var statearr_17416_17471 = state_17385__$1;
(statearr_17416_17471[(2)] = inst_17381);

(statearr_17416_17471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (34))){
var inst_17379 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
var statearr_17417_17472 = state_17385__$1;
(statearr_17417_17472[(2)] = inst_17379);

(statearr_17417_17472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (17))){
var state_17385__$1 = state_17385;
var statearr_17418_17473 = state_17385__$1;
(statearr_17418_17473[(2)] = false);

(statearr_17418_17473[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (3))){
var state_17385__$1 = state_17385;
var statearr_17419_17474 = state_17385__$1;
(statearr_17419_17474[(2)] = false);

(statearr_17419_17474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (12))){
var inst_17383 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17385__$1,inst_17383);
} else {
if((state_val_17386 === (2))){
var inst_17291 = (state_17385[(8)]);
var inst_17296 = inst_17291.cljs$lang$protocol_mask$partition0$;
var inst_17297 = (inst_17296 & (64));
var inst_17298 = inst_17291.cljs$core$ISeq$;
var inst_17299 = (inst_17297) || (inst_17298);
var state_17385__$1 = state_17385;
if(cljs.core.truth_(inst_17299)){
var statearr_17420_17475 = state_17385__$1;
(statearr_17420_17475[(1)] = (5));

} else {
var statearr_17421_17476 = state_17385__$1;
(statearr_17421_17476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (23))){
var inst_17344 = (state_17385[(14)]);
var inst_17350 = (inst_17344 == null);
var state_17385__$1 = state_17385;
if(cljs.core.truth_(inst_17350)){
var statearr_17422_17477 = state_17385__$1;
(statearr_17422_17477[(1)] = (26));

} else {
var statearr_17423_17478 = state_17385__$1;
(statearr_17423_17478[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (35))){
var inst_17370 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
if(cljs.core.truth_(inst_17370)){
var statearr_17424_17479 = state_17385__$1;
(statearr_17424_17479[(1)] = (36));

} else {
var statearr_17425_17480 = state_17385__$1;
(statearr_17425_17480[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (19))){
var inst_17315 = (state_17385[(7)]);
var inst_17334 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17315);
var state_17385__$1 = state_17385;
var statearr_17426_17481 = state_17385__$1;
(statearr_17426_17481[(2)] = inst_17334);

(statearr_17426_17481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (11))){
var inst_17315 = (state_17385[(7)]);
var inst_17319 = (inst_17315 == null);
var inst_17320 = cljs.core.not.call(null,inst_17319);
var state_17385__$1 = state_17385;
if(inst_17320){
var statearr_17427_17482 = state_17385__$1;
(statearr_17427_17482[(1)] = (13));

} else {
var statearr_17428_17483 = state_17385__$1;
(statearr_17428_17483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (9))){
var inst_17291 = (state_17385[(8)]);
var state_17385__$1 = state_17385;
var statearr_17429_17484 = state_17385__$1;
(statearr_17429_17484[(2)] = inst_17291);

(statearr_17429_17484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (5))){
var state_17385__$1 = state_17385;
var statearr_17430_17485 = state_17385__$1;
(statearr_17430_17485[(2)] = true);

(statearr_17430_17485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (14))){
var state_17385__$1 = state_17385;
var statearr_17431_17486 = state_17385__$1;
(statearr_17431_17486[(2)] = false);

(statearr_17431_17486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (26))){
var inst_17345 = (state_17385[(10)]);
var inst_17352 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17345);
var state_17385__$1 = state_17385;
var statearr_17432_17487 = state_17385__$1;
(statearr_17432_17487[(2)] = inst_17352);

(statearr_17432_17487[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (16))){
var state_17385__$1 = state_17385;
var statearr_17433_17488 = state_17385__$1;
(statearr_17433_17488[(2)] = true);

(statearr_17433_17488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (38))){
var inst_17375 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
var statearr_17434_17489 = state_17385__$1;
(statearr_17434_17489[(2)] = inst_17375);

(statearr_17434_17489[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (30))){
var inst_17338 = (state_17385[(9)]);
var inst_17345 = (state_17385[(10)]);
var inst_17339 = (state_17385[(13)]);
var inst_17362 = cljs.core.empty_QMARK_.call(null,inst_17338);
var inst_17363 = inst_17339.call(null,inst_17345);
var inst_17364 = cljs.core.not.call(null,inst_17363);
var inst_17365 = (inst_17362) && (inst_17364);
var state_17385__$1 = state_17385;
var statearr_17435_17490 = state_17385__$1;
(statearr_17435_17490[(2)] = inst_17365);

(statearr_17435_17490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (10))){
var inst_17291 = (state_17385[(8)]);
var inst_17311 = (state_17385[(2)]);
var inst_17312 = cljs.core.get.call(null,inst_17311,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17313 = cljs.core.get.call(null,inst_17311,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17314 = cljs.core.get.call(null,inst_17311,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17315 = inst_17291;
var state_17385__$1 = (function (){var statearr_17436 = state_17385;
(statearr_17436[(16)] = inst_17312);

(statearr_17436[(17)] = inst_17314);

(statearr_17436[(18)] = inst_17313);

(statearr_17436[(7)] = inst_17315);

return statearr_17436;
})();
var statearr_17437_17491 = state_17385__$1;
(statearr_17437_17491[(2)] = null);

(statearr_17437_17491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (18))){
var inst_17329 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
var statearr_17438_17492 = state_17385__$1;
(statearr_17438_17492[(2)] = inst_17329);

(statearr_17438_17492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (37))){
var state_17385__$1 = state_17385;
var statearr_17439_17493 = state_17385__$1;
(statearr_17439_17493[(2)] = null);

(statearr_17439_17493[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (8))){
var inst_17291 = (state_17385[(8)]);
var inst_17308 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17291);
var state_17385__$1 = state_17385;
var statearr_17440_17494 = state_17385__$1;
(statearr_17440_17494[(2)] = inst_17308);

(statearr_17440_17494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto___17448,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15710__auto__,c__15731__auto___17448,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15711__auto__ = null;
var cljs$core$async$mix_$_state_machine__15711__auto____0 = (function (){
var statearr_17444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17444[(0)] = cljs$core$async$mix_$_state_machine__15711__auto__);

(statearr_17444[(1)] = (1));

return statearr_17444;
});
var cljs$core$async$mix_$_state_machine__15711__auto____1 = (function (state_17385){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_17385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e17445){if((e17445 instanceof Object)){
var ex__15714__auto__ = e17445;
var statearr_17446_17495 = state_17385;
(statearr_17446_17495[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17496 = state_17385;
state_17385 = G__17496;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15711__auto__ = function(state_17385){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15711__auto____1.call(this,state_17385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15711__auto____0;
cljs$core$async$mix_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15711__auto____1;
return cljs$core$async$mix_$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___17448,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15733__auto__ = (function (){var statearr_17447 = f__15732__auto__.call(null);
(statearr_17447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___17448);

return statearr_17447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___17448,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__14030__auto__ = (((p == null))?null:p);
var m__14031__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__14031__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__14030__auto__ = (((p == null))?null:p);
var m__14031__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,p,v,ch);
} else {
var m__14031__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17497 = [];
var len__14433__auto___17500 = arguments.length;
var i__14434__auto___17501 = (0);
while(true){
if((i__14434__auto___17501 < len__14433__auto___17500)){
args17497.push((arguments[i__14434__auto___17501]));

var G__17502 = (i__14434__auto___17501 + (1));
i__14434__auto___17501 = G__17502;
continue;
} else {
}
break;
}

var G__17499 = args17497.length;
switch (G__17499) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17497.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__14030__auto__ = (((p == null))?null:p);
var m__14031__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,p);
} else {
var m__14031__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__14030__auto__ = (((p == null))?null:p);
var m__14031__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14030__auto__)]);
if(!((m__14031__auto__ == null))){
return m__14031__auto__.call(null,p,v);
} else {
var m__14031__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__14031__auto____$1 == null))){
return m__14031__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args17505 = [];
var len__14433__auto___17630 = arguments.length;
var i__14434__auto___17631 = (0);
while(true){
if((i__14434__auto___17631 < len__14433__auto___17630)){
args17505.push((arguments[i__14434__auto___17631]));

var G__17632 = (i__14434__auto___17631 + (1));
i__14434__auto___17631 = G__17632;
continue;
} else {
}
break;
}

var G__17507 = args17505.length;
switch (G__17507) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17505.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__13375__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__13375__auto__)){
return or__13375__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13375__auto__,mults){
return (function (p1__17504_SHARP_){
if(cljs.core.truth_(p1__17504_SHARP_.call(null,topic))){
return p1__17504_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17504_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13375__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17508 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17508 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17509){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17509 = meta17509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17510,meta17509__$1){
var self__ = this;
var _17510__$1 = this;
return (new cljs.core.async.t_cljs$core$async17508(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17509__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17510){
var self__ = this;
var _17510__$1 = this;
return self__.meta17509;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17508.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17509","meta17509",-1117772147,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17508.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17508";

cljs.core.async.t_cljs$core$async17508.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async17508");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17508 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17508(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17509){
return (new cljs.core.async.t_cljs$core$async17508(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17509));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17508(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15731__auto___17634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___17634,mults,ensure_mult,p){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___17634,mults,ensure_mult,p){
return (function (state_17582){
var state_val_17583 = (state_17582[(1)]);
if((state_val_17583 === (7))){
var inst_17578 = (state_17582[(2)]);
var state_17582__$1 = state_17582;
var statearr_17584_17635 = state_17582__$1;
(statearr_17584_17635[(2)] = inst_17578);

(statearr_17584_17635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (20))){
var state_17582__$1 = state_17582;
var statearr_17585_17636 = state_17582__$1;
(statearr_17585_17636[(2)] = null);

(statearr_17585_17636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (1))){
var state_17582__$1 = state_17582;
var statearr_17586_17637 = state_17582__$1;
(statearr_17586_17637[(2)] = null);

(statearr_17586_17637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (24))){
var inst_17561 = (state_17582[(7)]);
var inst_17570 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17561);
var state_17582__$1 = state_17582;
var statearr_17587_17638 = state_17582__$1;
(statearr_17587_17638[(2)] = inst_17570);

(statearr_17587_17638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (4))){
var inst_17513 = (state_17582[(8)]);
var inst_17513__$1 = (state_17582[(2)]);
var inst_17514 = (inst_17513__$1 == null);
var state_17582__$1 = (function (){var statearr_17588 = state_17582;
(statearr_17588[(8)] = inst_17513__$1);

return statearr_17588;
})();
if(cljs.core.truth_(inst_17514)){
var statearr_17589_17639 = state_17582__$1;
(statearr_17589_17639[(1)] = (5));

} else {
var statearr_17590_17640 = state_17582__$1;
(statearr_17590_17640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (15))){
var inst_17555 = (state_17582[(2)]);
var state_17582__$1 = state_17582;
var statearr_17591_17641 = state_17582__$1;
(statearr_17591_17641[(2)] = inst_17555);

(statearr_17591_17641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (21))){
var inst_17575 = (state_17582[(2)]);
var state_17582__$1 = (function (){var statearr_17592 = state_17582;
(statearr_17592[(9)] = inst_17575);

return statearr_17592;
})();
var statearr_17593_17642 = state_17582__$1;
(statearr_17593_17642[(2)] = null);

(statearr_17593_17642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (13))){
var inst_17537 = (state_17582[(10)]);
var inst_17539 = cljs.core.chunked_seq_QMARK_.call(null,inst_17537);
var state_17582__$1 = state_17582;
if(inst_17539){
var statearr_17594_17643 = state_17582__$1;
(statearr_17594_17643[(1)] = (16));

} else {
var statearr_17595_17644 = state_17582__$1;
(statearr_17595_17644[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (22))){
var inst_17567 = (state_17582[(2)]);
var state_17582__$1 = state_17582;
if(cljs.core.truth_(inst_17567)){
var statearr_17596_17645 = state_17582__$1;
(statearr_17596_17645[(1)] = (23));

} else {
var statearr_17597_17646 = state_17582__$1;
(statearr_17597_17646[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (6))){
var inst_17563 = (state_17582[(11)]);
var inst_17513 = (state_17582[(8)]);
var inst_17561 = (state_17582[(7)]);
var inst_17561__$1 = topic_fn.call(null,inst_17513);
var inst_17562 = cljs.core.deref.call(null,mults);
var inst_17563__$1 = cljs.core.get.call(null,inst_17562,inst_17561__$1);
var state_17582__$1 = (function (){var statearr_17598 = state_17582;
(statearr_17598[(11)] = inst_17563__$1);

(statearr_17598[(7)] = inst_17561__$1);

return statearr_17598;
})();
if(cljs.core.truth_(inst_17563__$1)){
var statearr_17599_17647 = state_17582__$1;
(statearr_17599_17647[(1)] = (19));

} else {
var statearr_17600_17648 = state_17582__$1;
(statearr_17600_17648[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (25))){
var inst_17572 = (state_17582[(2)]);
var state_17582__$1 = state_17582;
var statearr_17601_17649 = state_17582__$1;
(statearr_17601_17649[(2)] = inst_17572);

(statearr_17601_17649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (17))){
var inst_17537 = (state_17582[(10)]);
var inst_17546 = cljs.core.first.call(null,inst_17537);
var inst_17547 = cljs.core.async.muxch_STAR_.call(null,inst_17546);
var inst_17548 = cljs.core.async.close_BANG_.call(null,inst_17547);
var inst_17549 = cljs.core.next.call(null,inst_17537);
var inst_17523 = inst_17549;
var inst_17524 = null;
var inst_17525 = (0);
var inst_17526 = (0);
var state_17582__$1 = (function (){var statearr_17602 = state_17582;
(statearr_17602[(12)] = inst_17523);

(statearr_17602[(13)] = inst_17524);

(statearr_17602[(14)] = inst_17525);

(statearr_17602[(15)] = inst_17548);

(statearr_17602[(16)] = inst_17526);

return statearr_17602;
})();
var statearr_17603_17650 = state_17582__$1;
(statearr_17603_17650[(2)] = null);

(statearr_17603_17650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (3))){
var inst_17580 = (state_17582[(2)]);
var state_17582__$1 = state_17582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17582__$1,inst_17580);
} else {
if((state_val_17583 === (12))){
var inst_17557 = (state_17582[(2)]);
var state_17582__$1 = state_17582;
var statearr_17604_17651 = state_17582__$1;
(statearr_17604_17651[(2)] = inst_17557);

(statearr_17604_17651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (2))){
var state_17582__$1 = state_17582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17582__$1,(4),ch);
} else {
if((state_val_17583 === (23))){
var state_17582__$1 = state_17582;
var statearr_17605_17652 = state_17582__$1;
(statearr_17605_17652[(2)] = null);

(statearr_17605_17652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (19))){
var inst_17563 = (state_17582[(11)]);
var inst_17513 = (state_17582[(8)]);
var inst_17565 = cljs.core.async.muxch_STAR_.call(null,inst_17563);
var state_17582__$1 = state_17582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17582__$1,(22),inst_17565,inst_17513);
} else {
if((state_val_17583 === (11))){
var inst_17523 = (state_17582[(12)]);
var inst_17537 = (state_17582[(10)]);
var inst_17537__$1 = cljs.core.seq.call(null,inst_17523);
var state_17582__$1 = (function (){var statearr_17606 = state_17582;
(statearr_17606[(10)] = inst_17537__$1);

return statearr_17606;
})();
if(inst_17537__$1){
var statearr_17607_17653 = state_17582__$1;
(statearr_17607_17653[(1)] = (13));

} else {
var statearr_17608_17654 = state_17582__$1;
(statearr_17608_17654[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (9))){
var inst_17559 = (state_17582[(2)]);
var state_17582__$1 = state_17582;
var statearr_17609_17655 = state_17582__$1;
(statearr_17609_17655[(2)] = inst_17559);

(statearr_17609_17655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (5))){
var inst_17520 = cljs.core.deref.call(null,mults);
var inst_17521 = cljs.core.vals.call(null,inst_17520);
var inst_17522 = cljs.core.seq.call(null,inst_17521);
var inst_17523 = inst_17522;
var inst_17524 = null;
var inst_17525 = (0);
var inst_17526 = (0);
var state_17582__$1 = (function (){var statearr_17610 = state_17582;
(statearr_17610[(12)] = inst_17523);

(statearr_17610[(13)] = inst_17524);

(statearr_17610[(14)] = inst_17525);

(statearr_17610[(16)] = inst_17526);

return statearr_17610;
})();
var statearr_17611_17656 = state_17582__$1;
(statearr_17611_17656[(2)] = null);

(statearr_17611_17656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (14))){
var state_17582__$1 = state_17582;
var statearr_17615_17657 = state_17582__$1;
(statearr_17615_17657[(2)] = null);

(statearr_17615_17657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (16))){
var inst_17537 = (state_17582[(10)]);
var inst_17541 = cljs.core.chunk_first.call(null,inst_17537);
var inst_17542 = cljs.core.chunk_rest.call(null,inst_17537);
var inst_17543 = cljs.core.count.call(null,inst_17541);
var inst_17523 = inst_17542;
var inst_17524 = inst_17541;
var inst_17525 = inst_17543;
var inst_17526 = (0);
var state_17582__$1 = (function (){var statearr_17616 = state_17582;
(statearr_17616[(12)] = inst_17523);

(statearr_17616[(13)] = inst_17524);

(statearr_17616[(14)] = inst_17525);

(statearr_17616[(16)] = inst_17526);

return statearr_17616;
})();
var statearr_17617_17658 = state_17582__$1;
(statearr_17617_17658[(2)] = null);

(statearr_17617_17658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (10))){
var inst_17523 = (state_17582[(12)]);
var inst_17524 = (state_17582[(13)]);
var inst_17525 = (state_17582[(14)]);
var inst_17526 = (state_17582[(16)]);
var inst_17531 = cljs.core._nth.call(null,inst_17524,inst_17526);
var inst_17532 = cljs.core.async.muxch_STAR_.call(null,inst_17531);
var inst_17533 = cljs.core.async.close_BANG_.call(null,inst_17532);
var inst_17534 = (inst_17526 + (1));
var tmp17612 = inst_17523;
var tmp17613 = inst_17524;
var tmp17614 = inst_17525;
var inst_17523__$1 = tmp17612;
var inst_17524__$1 = tmp17613;
var inst_17525__$1 = tmp17614;
var inst_17526__$1 = inst_17534;
var state_17582__$1 = (function (){var statearr_17618 = state_17582;
(statearr_17618[(12)] = inst_17523__$1);

(statearr_17618[(13)] = inst_17524__$1);

(statearr_17618[(17)] = inst_17533);

(statearr_17618[(14)] = inst_17525__$1);

(statearr_17618[(16)] = inst_17526__$1);

return statearr_17618;
})();
var statearr_17619_17659 = state_17582__$1;
(statearr_17619_17659[(2)] = null);

(statearr_17619_17659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (18))){
var inst_17552 = (state_17582[(2)]);
var state_17582__$1 = state_17582;
var statearr_17620_17660 = state_17582__$1;
(statearr_17620_17660[(2)] = inst_17552);

(statearr_17620_17660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17583 === (8))){
var inst_17525 = (state_17582[(14)]);
var inst_17526 = (state_17582[(16)]);
var inst_17528 = (inst_17526 < inst_17525);
var inst_17529 = inst_17528;
var state_17582__$1 = state_17582;
if(cljs.core.truth_(inst_17529)){
var statearr_17621_17661 = state_17582__$1;
(statearr_17621_17661[(1)] = (10));

} else {
var statearr_17622_17662 = state_17582__$1;
(statearr_17622_17662[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto___17634,mults,ensure_mult,p))
;
return ((function (switch__15710__auto__,c__15731__auto___17634,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15711__auto__ = null;
var cljs$core$async$state_machine__15711__auto____0 = (function (){
var statearr_17626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17626[(0)] = cljs$core$async$state_machine__15711__auto__);

(statearr_17626[(1)] = (1));

return statearr_17626;
});
var cljs$core$async$state_machine__15711__auto____1 = (function (state_17582){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_17582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e17627){if((e17627 instanceof Object)){
var ex__15714__auto__ = e17627;
var statearr_17628_17663 = state_17582;
(statearr_17628_17663[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17664 = state_17582;
state_17582 = G__17664;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$state_machine__15711__auto__ = function(state_17582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15711__auto____1.call(this,state_17582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15711__auto____0;
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15711__auto____1;
return cljs$core$async$state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___17634,mults,ensure_mult,p))
})();
var state__15733__auto__ = (function (){var statearr_17629 = f__15732__auto__.call(null);
(statearr_17629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___17634);

return statearr_17629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___17634,mults,ensure_mult,p))
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
var args17665 = [];
var len__14433__auto___17668 = arguments.length;
var i__14434__auto___17669 = (0);
while(true){
if((i__14434__auto___17669 < len__14433__auto___17668)){
args17665.push((arguments[i__14434__auto___17669]));

var G__17670 = (i__14434__auto___17669 + (1));
i__14434__auto___17669 = G__17670;
continue;
} else {
}
break;
}

var G__17667 = args17665.length;
switch (G__17667) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17665.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args17672 = [];
var len__14433__auto___17675 = arguments.length;
var i__14434__auto___17676 = (0);
while(true){
if((i__14434__auto___17676 < len__14433__auto___17675)){
args17672.push((arguments[i__14434__auto___17676]));

var G__17677 = (i__14434__auto___17676 + (1));
i__14434__auto___17676 = G__17677;
continue;
} else {
}
break;
}

var G__17674 = args17672.length;
switch (G__17674) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17672.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args17679 = [];
var len__14433__auto___17750 = arguments.length;
var i__14434__auto___17751 = (0);
while(true){
if((i__14434__auto___17751 < len__14433__auto___17750)){
args17679.push((arguments[i__14434__auto___17751]));

var G__17752 = (i__14434__auto___17751 + (1));
i__14434__auto___17751 = G__17752;
continue;
} else {
}
break;
}

var G__17681 = args17679.length;
switch (G__17681) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17679.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__15731__auto___17754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___17754,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___17754,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17720){
var state_val_17721 = (state_17720[(1)]);
if((state_val_17721 === (7))){
var state_17720__$1 = state_17720;
var statearr_17722_17755 = state_17720__$1;
(statearr_17722_17755[(2)] = null);

(statearr_17722_17755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (1))){
var state_17720__$1 = state_17720;
var statearr_17723_17756 = state_17720__$1;
(statearr_17723_17756[(2)] = null);

(statearr_17723_17756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (4))){
var inst_17684 = (state_17720[(7)]);
var inst_17686 = (inst_17684 < cnt);
var state_17720__$1 = state_17720;
if(cljs.core.truth_(inst_17686)){
var statearr_17724_17757 = state_17720__$1;
(statearr_17724_17757[(1)] = (6));

} else {
var statearr_17725_17758 = state_17720__$1;
(statearr_17725_17758[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (15))){
var inst_17716 = (state_17720[(2)]);
var state_17720__$1 = state_17720;
var statearr_17726_17759 = state_17720__$1;
(statearr_17726_17759[(2)] = inst_17716);

(statearr_17726_17759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (13))){
var inst_17709 = cljs.core.async.close_BANG_.call(null,out);
var state_17720__$1 = state_17720;
var statearr_17727_17760 = state_17720__$1;
(statearr_17727_17760[(2)] = inst_17709);

(statearr_17727_17760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (6))){
var state_17720__$1 = state_17720;
var statearr_17728_17761 = state_17720__$1;
(statearr_17728_17761[(2)] = null);

(statearr_17728_17761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (3))){
var inst_17718 = (state_17720[(2)]);
var state_17720__$1 = state_17720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17720__$1,inst_17718);
} else {
if((state_val_17721 === (12))){
var inst_17706 = (state_17720[(8)]);
var inst_17706__$1 = (state_17720[(2)]);
var inst_17707 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17706__$1);
var state_17720__$1 = (function (){var statearr_17729 = state_17720;
(statearr_17729[(8)] = inst_17706__$1);

return statearr_17729;
})();
if(cljs.core.truth_(inst_17707)){
var statearr_17730_17762 = state_17720__$1;
(statearr_17730_17762[(1)] = (13));

} else {
var statearr_17731_17763 = state_17720__$1;
(statearr_17731_17763[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (2))){
var inst_17683 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17684 = (0);
var state_17720__$1 = (function (){var statearr_17732 = state_17720;
(statearr_17732[(9)] = inst_17683);

(statearr_17732[(7)] = inst_17684);

return statearr_17732;
})();
var statearr_17733_17764 = state_17720__$1;
(statearr_17733_17764[(2)] = null);

(statearr_17733_17764[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (11))){
var inst_17684 = (state_17720[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17720,(10),Object,null,(9));
var inst_17693 = chs__$1.call(null,inst_17684);
var inst_17694 = done.call(null,inst_17684);
var inst_17695 = cljs.core.async.take_BANG_.call(null,inst_17693,inst_17694);
var state_17720__$1 = state_17720;
var statearr_17734_17765 = state_17720__$1;
(statearr_17734_17765[(2)] = inst_17695);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17720__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (9))){
var inst_17684 = (state_17720[(7)]);
var inst_17697 = (state_17720[(2)]);
var inst_17698 = (inst_17684 + (1));
var inst_17684__$1 = inst_17698;
var state_17720__$1 = (function (){var statearr_17735 = state_17720;
(statearr_17735[(10)] = inst_17697);

(statearr_17735[(7)] = inst_17684__$1);

return statearr_17735;
})();
var statearr_17736_17766 = state_17720__$1;
(statearr_17736_17766[(2)] = null);

(statearr_17736_17766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (5))){
var inst_17704 = (state_17720[(2)]);
var state_17720__$1 = (function (){var statearr_17737 = state_17720;
(statearr_17737[(11)] = inst_17704);

return statearr_17737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17720__$1,(12),dchan);
} else {
if((state_val_17721 === (14))){
var inst_17706 = (state_17720[(8)]);
var inst_17711 = cljs.core.apply.call(null,f,inst_17706);
var state_17720__$1 = state_17720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17720__$1,(16),out,inst_17711);
} else {
if((state_val_17721 === (16))){
var inst_17713 = (state_17720[(2)]);
var state_17720__$1 = (function (){var statearr_17738 = state_17720;
(statearr_17738[(12)] = inst_17713);

return statearr_17738;
})();
var statearr_17739_17767 = state_17720__$1;
(statearr_17739_17767[(2)] = null);

(statearr_17739_17767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (10))){
var inst_17688 = (state_17720[(2)]);
var inst_17689 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17720__$1 = (function (){var statearr_17740 = state_17720;
(statearr_17740[(13)] = inst_17688);

return statearr_17740;
})();
var statearr_17741_17768 = state_17720__$1;
(statearr_17741_17768[(2)] = inst_17689);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17720__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (8))){
var inst_17702 = (state_17720[(2)]);
var state_17720__$1 = state_17720;
var statearr_17742_17769 = state_17720__$1;
(statearr_17742_17769[(2)] = inst_17702);

(statearr_17742_17769[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto___17754,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15710__auto__,c__15731__auto___17754,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15711__auto__ = null;
var cljs$core$async$state_machine__15711__auto____0 = (function (){
var statearr_17746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17746[(0)] = cljs$core$async$state_machine__15711__auto__);

(statearr_17746[(1)] = (1));

return statearr_17746;
});
var cljs$core$async$state_machine__15711__auto____1 = (function (state_17720){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_17720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e17747){if((e17747 instanceof Object)){
var ex__15714__auto__ = e17747;
var statearr_17748_17770 = state_17720;
(statearr_17748_17770[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17771 = state_17720;
state_17720 = G__17771;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$state_machine__15711__auto__ = function(state_17720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15711__auto____1.call(this,state_17720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15711__auto____0;
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15711__auto____1;
return cljs$core$async$state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___17754,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15733__auto__ = (function (){var statearr_17749 = f__15732__auto__.call(null);
(statearr_17749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___17754);

return statearr_17749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___17754,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args17773 = [];
var len__14433__auto___17829 = arguments.length;
var i__14434__auto___17830 = (0);
while(true){
if((i__14434__auto___17830 < len__14433__auto___17829)){
args17773.push((arguments[i__14434__auto___17830]));

var G__17831 = (i__14434__auto___17830 + (1));
i__14434__auto___17830 = G__17831;
continue;
} else {
}
break;
}

var G__17775 = args17773.length;
switch (G__17775) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17773.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15731__auto___17833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___17833,out){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___17833,out){
return (function (state_17805){
var state_val_17806 = (state_17805[(1)]);
if((state_val_17806 === (7))){
var inst_17785 = (state_17805[(7)]);
var inst_17784 = (state_17805[(8)]);
var inst_17784__$1 = (state_17805[(2)]);
var inst_17785__$1 = cljs.core.nth.call(null,inst_17784__$1,(0),null);
var inst_17786 = cljs.core.nth.call(null,inst_17784__$1,(1),null);
var inst_17787 = (inst_17785__$1 == null);
var state_17805__$1 = (function (){var statearr_17807 = state_17805;
(statearr_17807[(7)] = inst_17785__$1);

(statearr_17807[(9)] = inst_17786);

(statearr_17807[(8)] = inst_17784__$1);

return statearr_17807;
})();
if(cljs.core.truth_(inst_17787)){
var statearr_17808_17834 = state_17805__$1;
(statearr_17808_17834[(1)] = (8));

} else {
var statearr_17809_17835 = state_17805__$1;
(statearr_17809_17835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (1))){
var inst_17776 = cljs.core.vec.call(null,chs);
var inst_17777 = inst_17776;
var state_17805__$1 = (function (){var statearr_17810 = state_17805;
(statearr_17810[(10)] = inst_17777);

return statearr_17810;
})();
var statearr_17811_17836 = state_17805__$1;
(statearr_17811_17836[(2)] = null);

(statearr_17811_17836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (4))){
var inst_17777 = (state_17805[(10)]);
var state_17805__$1 = state_17805;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17805__$1,(7),inst_17777);
} else {
if((state_val_17806 === (6))){
var inst_17801 = (state_17805[(2)]);
var state_17805__$1 = state_17805;
var statearr_17812_17837 = state_17805__$1;
(statearr_17812_17837[(2)] = inst_17801);

(statearr_17812_17837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (3))){
var inst_17803 = (state_17805[(2)]);
var state_17805__$1 = state_17805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17805__$1,inst_17803);
} else {
if((state_val_17806 === (2))){
var inst_17777 = (state_17805[(10)]);
var inst_17779 = cljs.core.count.call(null,inst_17777);
var inst_17780 = (inst_17779 > (0));
var state_17805__$1 = state_17805;
if(cljs.core.truth_(inst_17780)){
var statearr_17814_17838 = state_17805__$1;
(statearr_17814_17838[(1)] = (4));

} else {
var statearr_17815_17839 = state_17805__$1;
(statearr_17815_17839[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (11))){
var inst_17777 = (state_17805[(10)]);
var inst_17794 = (state_17805[(2)]);
var tmp17813 = inst_17777;
var inst_17777__$1 = tmp17813;
var state_17805__$1 = (function (){var statearr_17816 = state_17805;
(statearr_17816[(11)] = inst_17794);

(statearr_17816[(10)] = inst_17777__$1);

return statearr_17816;
})();
var statearr_17817_17840 = state_17805__$1;
(statearr_17817_17840[(2)] = null);

(statearr_17817_17840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (9))){
var inst_17785 = (state_17805[(7)]);
var state_17805__$1 = state_17805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17805__$1,(11),out,inst_17785);
} else {
if((state_val_17806 === (5))){
var inst_17799 = cljs.core.async.close_BANG_.call(null,out);
var state_17805__$1 = state_17805;
var statearr_17818_17841 = state_17805__$1;
(statearr_17818_17841[(2)] = inst_17799);

(statearr_17818_17841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (10))){
var inst_17797 = (state_17805[(2)]);
var state_17805__$1 = state_17805;
var statearr_17819_17842 = state_17805__$1;
(statearr_17819_17842[(2)] = inst_17797);

(statearr_17819_17842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (8))){
var inst_17777 = (state_17805[(10)]);
var inst_17785 = (state_17805[(7)]);
var inst_17786 = (state_17805[(9)]);
var inst_17784 = (state_17805[(8)]);
var inst_17789 = (function (){var cs = inst_17777;
var vec__17782 = inst_17784;
var v = inst_17785;
var c = inst_17786;
return ((function (cs,vec__17782,v,c,inst_17777,inst_17785,inst_17786,inst_17784,state_val_17806,c__15731__auto___17833,out){
return (function (p1__17772_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17772_SHARP_);
});
;})(cs,vec__17782,v,c,inst_17777,inst_17785,inst_17786,inst_17784,state_val_17806,c__15731__auto___17833,out))
})();
var inst_17790 = cljs.core.filterv.call(null,inst_17789,inst_17777);
var inst_17777__$1 = inst_17790;
var state_17805__$1 = (function (){var statearr_17820 = state_17805;
(statearr_17820[(10)] = inst_17777__$1);

return statearr_17820;
})();
var statearr_17821_17843 = state_17805__$1;
(statearr_17821_17843[(2)] = null);

(statearr_17821_17843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto___17833,out))
;
return ((function (switch__15710__auto__,c__15731__auto___17833,out){
return (function() {
var cljs$core$async$state_machine__15711__auto__ = null;
var cljs$core$async$state_machine__15711__auto____0 = (function (){
var statearr_17825 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17825[(0)] = cljs$core$async$state_machine__15711__auto__);

(statearr_17825[(1)] = (1));

return statearr_17825;
});
var cljs$core$async$state_machine__15711__auto____1 = (function (state_17805){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_17805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e17826){if((e17826 instanceof Object)){
var ex__15714__auto__ = e17826;
var statearr_17827_17844 = state_17805;
(statearr_17827_17844[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17845 = state_17805;
state_17805 = G__17845;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$state_machine__15711__auto__ = function(state_17805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15711__auto____1.call(this,state_17805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15711__auto____0;
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15711__auto____1;
return cljs$core$async$state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___17833,out))
})();
var state__15733__auto__ = (function (){var statearr_17828 = f__15732__auto__.call(null);
(statearr_17828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___17833);

return statearr_17828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___17833,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args17846 = [];
var len__14433__auto___17895 = arguments.length;
var i__14434__auto___17896 = (0);
while(true){
if((i__14434__auto___17896 < len__14433__auto___17895)){
args17846.push((arguments[i__14434__auto___17896]));

var G__17897 = (i__14434__auto___17896 + (1));
i__14434__auto___17896 = G__17897;
continue;
} else {
}
break;
}

var G__17848 = args17846.length;
switch (G__17848) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17846.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15731__auto___17899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___17899,out){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___17899,out){
return (function (state_17872){
var state_val_17873 = (state_17872[(1)]);
if((state_val_17873 === (7))){
var inst_17854 = (state_17872[(7)]);
var inst_17854__$1 = (state_17872[(2)]);
var inst_17855 = (inst_17854__$1 == null);
var inst_17856 = cljs.core.not.call(null,inst_17855);
var state_17872__$1 = (function (){var statearr_17874 = state_17872;
(statearr_17874[(7)] = inst_17854__$1);

return statearr_17874;
})();
if(inst_17856){
var statearr_17875_17900 = state_17872__$1;
(statearr_17875_17900[(1)] = (8));

} else {
var statearr_17876_17901 = state_17872__$1;
(statearr_17876_17901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17873 === (1))){
var inst_17849 = (0);
var state_17872__$1 = (function (){var statearr_17877 = state_17872;
(statearr_17877[(8)] = inst_17849);

return statearr_17877;
})();
var statearr_17878_17902 = state_17872__$1;
(statearr_17878_17902[(2)] = null);

(statearr_17878_17902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17873 === (4))){
var state_17872__$1 = state_17872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17872__$1,(7),ch);
} else {
if((state_val_17873 === (6))){
var inst_17867 = (state_17872[(2)]);
var state_17872__$1 = state_17872;
var statearr_17879_17903 = state_17872__$1;
(statearr_17879_17903[(2)] = inst_17867);

(statearr_17879_17903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17873 === (3))){
var inst_17869 = (state_17872[(2)]);
var inst_17870 = cljs.core.async.close_BANG_.call(null,out);
var state_17872__$1 = (function (){var statearr_17880 = state_17872;
(statearr_17880[(9)] = inst_17869);

return statearr_17880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17872__$1,inst_17870);
} else {
if((state_val_17873 === (2))){
var inst_17849 = (state_17872[(8)]);
var inst_17851 = (inst_17849 < n);
var state_17872__$1 = state_17872;
if(cljs.core.truth_(inst_17851)){
var statearr_17881_17904 = state_17872__$1;
(statearr_17881_17904[(1)] = (4));

} else {
var statearr_17882_17905 = state_17872__$1;
(statearr_17882_17905[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17873 === (11))){
var inst_17849 = (state_17872[(8)]);
var inst_17859 = (state_17872[(2)]);
var inst_17860 = (inst_17849 + (1));
var inst_17849__$1 = inst_17860;
var state_17872__$1 = (function (){var statearr_17883 = state_17872;
(statearr_17883[(8)] = inst_17849__$1);

(statearr_17883[(10)] = inst_17859);

return statearr_17883;
})();
var statearr_17884_17906 = state_17872__$1;
(statearr_17884_17906[(2)] = null);

(statearr_17884_17906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17873 === (9))){
var state_17872__$1 = state_17872;
var statearr_17885_17907 = state_17872__$1;
(statearr_17885_17907[(2)] = null);

(statearr_17885_17907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17873 === (5))){
var state_17872__$1 = state_17872;
var statearr_17886_17908 = state_17872__$1;
(statearr_17886_17908[(2)] = null);

(statearr_17886_17908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17873 === (10))){
var inst_17864 = (state_17872[(2)]);
var state_17872__$1 = state_17872;
var statearr_17887_17909 = state_17872__$1;
(statearr_17887_17909[(2)] = inst_17864);

(statearr_17887_17909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17873 === (8))){
var inst_17854 = (state_17872[(7)]);
var state_17872__$1 = state_17872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17872__$1,(11),out,inst_17854);
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
});})(c__15731__auto___17899,out))
;
return ((function (switch__15710__auto__,c__15731__auto___17899,out){
return (function() {
var cljs$core$async$state_machine__15711__auto__ = null;
var cljs$core$async$state_machine__15711__auto____0 = (function (){
var statearr_17891 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17891[(0)] = cljs$core$async$state_machine__15711__auto__);

(statearr_17891[(1)] = (1));

return statearr_17891;
});
var cljs$core$async$state_machine__15711__auto____1 = (function (state_17872){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_17872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e17892){if((e17892 instanceof Object)){
var ex__15714__auto__ = e17892;
var statearr_17893_17910 = state_17872;
(statearr_17893_17910[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17911 = state_17872;
state_17872 = G__17911;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$state_machine__15711__auto__ = function(state_17872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15711__auto____1.call(this,state_17872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15711__auto____0;
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15711__auto____1;
return cljs$core$async$state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___17899,out))
})();
var state__15733__auto__ = (function (){var statearr_17894 = f__15732__auto__.call(null);
(statearr_17894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___17899);

return statearr_17894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___17899,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17919 = (function (map_LT_,f,ch,meta17920){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17920 = meta17920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17921,meta17920__$1){
var self__ = this;
var _17921__$1 = this;
return (new cljs.core.async.t_cljs$core$async17919(self__.map_LT_,self__.f,self__.ch,meta17920__$1));
});

cljs.core.async.t_cljs$core$async17919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17921){
var self__ = this;
var _17921__$1 = this;
return self__.meta17920;
});

cljs.core.async.t_cljs$core$async17919.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17919.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17919.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17919.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17919.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17922 = (function (map_LT_,f,ch,meta17920,_,fn1,meta17923){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17920 = meta17920;
this._ = _;
this.fn1 = fn1;
this.meta17923 = meta17923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17924,meta17923__$1){
var self__ = this;
var _17924__$1 = this;
return (new cljs.core.async.t_cljs$core$async17922(self__.map_LT_,self__.f,self__.ch,self__.meta17920,self__._,self__.fn1,meta17923__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17924){
var self__ = this;
var _17924__$1 = this;
return self__.meta17923;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17922.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17922.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17912_SHARP_){
return f1.call(null,(((p1__17912_SHARP_ == null))?null:self__.f.call(null,p1__17912_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17922.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17920","meta17920",-1387480806,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17919","cljs.core.async/t_cljs$core$async17919",1705160948,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17923","meta17923",-1168336163,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17922";

cljs.core.async.t_cljs$core$async17922.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async17922");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17922 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17922(map_LT___$1,f__$1,ch__$1,meta17920__$1,___$2,fn1__$1,meta17923){
return (new cljs.core.async.t_cljs$core$async17922(map_LT___$1,f__$1,ch__$1,meta17920__$1,___$2,fn1__$1,meta17923));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17922(self__.map_LT_,self__.f,self__.ch,self__.meta17920,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__13363__auto__ = ret;
if(cljs.core.truth_(and__13363__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__13363__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17919.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17919.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17920","meta17920",-1387480806,null)], null);
});

cljs.core.async.t_cljs$core$async17919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17919";

cljs.core.async.t_cljs$core$async17919.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async17919");
});

cljs.core.async.__GT_t_cljs$core$async17919 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17919(map_LT___$1,f__$1,ch__$1,meta17920){
return (new cljs.core.async.t_cljs$core$async17919(map_LT___$1,f__$1,ch__$1,meta17920));
});

}

return (new cljs.core.async.t_cljs$core$async17919(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17928 = (function (map_GT_,f,ch,meta17929){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17929 = meta17929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17930,meta17929__$1){
var self__ = this;
var _17930__$1 = this;
return (new cljs.core.async.t_cljs$core$async17928(self__.map_GT_,self__.f,self__.ch,meta17929__$1));
});

cljs.core.async.t_cljs$core$async17928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17930){
var self__ = this;
var _17930__$1 = this;
return self__.meta17929;
});

cljs.core.async.t_cljs$core$async17928.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17928.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17928.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17928.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17928.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17928.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17929","meta17929",-1602399556,null)], null);
});

cljs.core.async.t_cljs$core$async17928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17928";

cljs.core.async.t_cljs$core$async17928.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async17928");
});

cljs.core.async.__GT_t_cljs$core$async17928 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17928(map_GT___$1,f__$1,ch__$1,meta17929){
return (new cljs.core.async.t_cljs$core$async17928(map_GT___$1,f__$1,ch__$1,meta17929));
});

}

return (new cljs.core.async.t_cljs$core$async17928(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17934 = (function (filter_GT_,p,ch,meta17935){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17935 = meta17935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17936,meta17935__$1){
var self__ = this;
var _17936__$1 = this;
return (new cljs.core.async.t_cljs$core$async17934(self__.filter_GT_,self__.p,self__.ch,meta17935__$1));
});

cljs.core.async.t_cljs$core$async17934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17936){
var self__ = this;
var _17936__$1 = this;
return self__.meta17935;
});

cljs.core.async.t_cljs$core$async17934.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17934.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17934.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17934.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17935","meta17935",261272022,null)], null);
});

cljs.core.async.t_cljs$core$async17934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17934";

cljs.core.async.t_cljs$core$async17934.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async17934");
});

cljs.core.async.__GT_t_cljs$core$async17934 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17934(filter_GT___$1,p__$1,ch__$1,meta17935){
return (new cljs.core.async.t_cljs$core$async17934(filter_GT___$1,p__$1,ch__$1,meta17935));
});

}

return (new cljs.core.async.t_cljs$core$async17934(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args17937 = [];
var len__14433__auto___17981 = arguments.length;
var i__14434__auto___17982 = (0);
while(true){
if((i__14434__auto___17982 < len__14433__auto___17981)){
args17937.push((arguments[i__14434__auto___17982]));

var G__17983 = (i__14434__auto___17982 + (1));
i__14434__auto___17982 = G__17983;
continue;
} else {
}
break;
}

var G__17939 = args17937.length;
switch (G__17939) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17937.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15731__auto___17985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___17985,out){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___17985,out){
return (function (state_17960){
var state_val_17961 = (state_17960[(1)]);
if((state_val_17961 === (7))){
var inst_17956 = (state_17960[(2)]);
var state_17960__$1 = state_17960;
var statearr_17962_17986 = state_17960__$1;
(statearr_17962_17986[(2)] = inst_17956);

(statearr_17962_17986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17961 === (1))){
var state_17960__$1 = state_17960;
var statearr_17963_17987 = state_17960__$1;
(statearr_17963_17987[(2)] = null);

(statearr_17963_17987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17961 === (4))){
var inst_17942 = (state_17960[(7)]);
var inst_17942__$1 = (state_17960[(2)]);
var inst_17943 = (inst_17942__$1 == null);
var state_17960__$1 = (function (){var statearr_17964 = state_17960;
(statearr_17964[(7)] = inst_17942__$1);

return statearr_17964;
})();
if(cljs.core.truth_(inst_17943)){
var statearr_17965_17988 = state_17960__$1;
(statearr_17965_17988[(1)] = (5));

} else {
var statearr_17966_17989 = state_17960__$1;
(statearr_17966_17989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17961 === (6))){
var inst_17942 = (state_17960[(7)]);
var inst_17947 = p.call(null,inst_17942);
var state_17960__$1 = state_17960;
if(cljs.core.truth_(inst_17947)){
var statearr_17967_17990 = state_17960__$1;
(statearr_17967_17990[(1)] = (8));

} else {
var statearr_17968_17991 = state_17960__$1;
(statearr_17968_17991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17961 === (3))){
var inst_17958 = (state_17960[(2)]);
var state_17960__$1 = state_17960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17960__$1,inst_17958);
} else {
if((state_val_17961 === (2))){
var state_17960__$1 = state_17960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17960__$1,(4),ch);
} else {
if((state_val_17961 === (11))){
var inst_17950 = (state_17960[(2)]);
var state_17960__$1 = state_17960;
var statearr_17969_17992 = state_17960__$1;
(statearr_17969_17992[(2)] = inst_17950);

(statearr_17969_17992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17961 === (9))){
var state_17960__$1 = state_17960;
var statearr_17970_17993 = state_17960__$1;
(statearr_17970_17993[(2)] = null);

(statearr_17970_17993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17961 === (5))){
var inst_17945 = cljs.core.async.close_BANG_.call(null,out);
var state_17960__$1 = state_17960;
var statearr_17971_17994 = state_17960__$1;
(statearr_17971_17994[(2)] = inst_17945);

(statearr_17971_17994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17961 === (10))){
var inst_17953 = (state_17960[(2)]);
var state_17960__$1 = (function (){var statearr_17972 = state_17960;
(statearr_17972[(8)] = inst_17953);

return statearr_17972;
})();
var statearr_17973_17995 = state_17960__$1;
(statearr_17973_17995[(2)] = null);

(statearr_17973_17995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17961 === (8))){
var inst_17942 = (state_17960[(7)]);
var state_17960__$1 = state_17960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17960__$1,(11),out,inst_17942);
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
});})(c__15731__auto___17985,out))
;
return ((function (switch__15710__auto__,c__15731__auto___17985,out){
return (function() {
var cljs$core$async$state_machine__15711__auto__ = null;
var cljs$core$async$state_machine__15711__auto____0 = (function (){
var statearr_17977 = [null,null,null,null,null,null,null,null,null];
(statearr_17977[(0)] = cljs$core$async$state_machine__15711__auto__);

(statearr_17977[(1)] = (1));

return statearr_17977;
});
var cljs$core$async$state_machine__15711__auto____1 = (function (state_17960){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_17960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e17978){if((e17978 instanceof Object)){
var ex__15714__auto__ = e17978;
var statearr_17979_17996 = state_17960;
(statearr_17979_17996[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17997 = state_17960;
state_17960 = G__17997;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$state_machine__15711__auto__ = function(state_17960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15711__auto____1.call(this,state_17960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15711__auto____0;
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15711__auto____1;
return cljs$core$async$state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___17985,out))
})();
var state__15733__auto__ = (function (){var statearr_17980 = f__15732__auto__.call(null);
(statearr_17980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___17985);

return statearr_17980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___17985,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17998 = [];
var len__14433__auto___18001 = arguments.length;
var i__14434__auto___18002 = (0);
while(true){
if((i__14434__auto___18002 < len__14433__auto___18001)){
args17998.push((arguments[i__14434__auto___18002]));

var G__18003 = (i__14434__auto___18002 + (1));
i__14434__auto___18002 = G__18003;
continue;
} else {
}
break;
}

var G__18000 = args17998.length;
switch (G__18000) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17998.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto__){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto__){
return (function (state_18170){
var state_val_18171 = (state_18170[(1)]);
if((state_val_18171 === (7))){
var inst_18166 = (state_18170[(2)]);
var state_18170__$1 = state_18170;
var statearr_18172_18213 = state_18170__$1;
(statearr_18172_18213[(2)] = inst_18166);

(statearr_18172_18213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (20))){
var inst_18136 = (state_18170[(7)]);
var inst_18147 = (state_18170[(2)]);
var inst_18148 = cljs.core.next.call(null,inst_18136);
var inst_18122 = inst_18148;
var inst_18123 = null;
var inst_18124 = (0);
var inst_18125 = (0);
var state_18170__$1 = (function (){var statearr_18173 = state_18170;
(statearr_18173[(8)] = inst_18123);

(statearr_18173[(9)] = inst_18124);

(statearr_18173[(10)] = inst_18125);

(statearr_18173[(11)] = inst_18122);

(statearr_18173[(12)] = inst_18147);

return statearr_18173;
})();
var statearr_18174_18214 = state_18170__$1;
(statearr_18174_18214[(2)] = null);

(statearr_18174_18214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (1))){
var state_18170__$1 = state_18170;
var statearr_18175_18215 = state_18170__$1;
(statearr_18175_18215[(2)] = null);

(statearr_18175_18215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (4))){
var inst_18111 = (state_18170[(13)]);
var inst_18111__$1 = (state_18170[(2)]);
var inst_18112 = (inst_18111__$1 == null);
var state_18170__$1 = (function (){var statearr_18176 = state_18170;
(statearr_18176[(13)] = inst_18111__$1);

return statearr_18176;
})();
if(cljs.core.truth_(inst_18112)){
var statearr_18177_18216 = state_18170__$1;
(statearr_18177_18216[(1)] = (5));

} else {
var statearr_18178_18217 = state_18170__$1;
(statearr_18178_18217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (15))){
var state_18170__$1 = state_18170;
var statearr_18182_18218 = state_18170__$1;
(statearr_18182_18218[(2)] = null);

(statearr_18182_18218[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (21))){
var state_18170__$1 = state_18170;
var statearr_18183_18219 = state_18170__$1;
(statearr_18183_18219[(2)] = null);

(statearr_18183_18219[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (13))){
var inst_18123 = (state_18170[(8)]);
var inst_18124 = (state_18170[(9)]);
var inst_18125 = (state_18170[(10)]);
var inst_18122 = (state_18170[(11)]);
var inst_18132 = (state_18170[(2)]);
var inst_18133 = (inst_18125 + (1));
var tmp18179 = inst_18123;
var tmp18180 = inst_18124;
var tmp18181 = inst_18122;
var inst_18122__$1 = tmp18181;
var inst_18123__$1 = tmp18179;
var inst_18124__$1 = tmp18180;
var inst_18125__$1 = inst_18133;
var state_18170__$1 = (function (){var statearr_18184 = state_18170;
(statearr_18184[(8)] = inst_18123__$1);

(statearr_18184[(9)] = inst_18124__$1);

(statearr_18184[(14)] = inst_18132);

(statearr_18184[(10)] = inst_18125__$1);

(statearr_18184[(11)] = inst_18122__$1);

return statearr_18184;
})();
var statearr_18185_18220 = state_18170__$1;
(statearr_18185_18220[(2)] = null);

(statearr_18185_18220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (22))){
var state_18170__$1 = state_18170;
var statearr_18186_18221 = state_18170__$1;
(statearr_18186_18221[(2)] = null);

(statearr_18186_18221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (6))){
var inst_18111 = (state_18170[(13)]);
var inst_18120 = f.call(null,inst_18111);
var inst_18121 = cljs.core.seq.call(null,inst_18120);
var inst_18122 = inst_18121;
var inst_18123 = null;
var inst_18124 = (0);
var inst_18125 = (0);
var state_18170__$1 = (function (){var statearr_18187 = state_18170;
(statearr_18187[(8)] = inst_18123);

(statearr_18187[(9)] = inst_18124);

(statearr_18187[(10)] = inst_18125);

(statearr_18187[(11)] = inst_18122);

return statearr_18187;
})();
var statearr_18188_18222 = state_18170__$1;
(statearr_18188_18222[(2)] = null);

(statearr_18188_18222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (17))){
var inst_18136 = (state_18170[(7)]);
var inst_18140 = cljs.core.chunk_first.call(null,inst_18136);
var inst_18141 = cljs.core.chunk_rest.call(null,inst_18136);
var inst_18142 = cljs.core.count.call(null,inst_18140);
var inst_18122 = inst_18141;
var inst_18123 = inst_18140;
var inst_18124 = inst_18142;
var inst_18125 = (0);
var state_18170__$1 = (function (){var statearr_18189 = state_18170;
(statearr_18189[(8)] = inst_18123);

(statearr_18189[(9)] = inst_18124);

(statearr_18189[(10)] = inst_18125);

(statearr_18189[(11)] = inst_18122);

return statearr_18189;
})();
var statearr_18190_18223 = state_18170__$1;
(statearr_18190_18223[(2)] = null);

(statearr_18190_18223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (3))){
var inst_18168 = (state_18170[(2)]);
var state_18170__$1 = state_18170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18170__$1,inst_18168);
} else {
if((state_val_18171 === (12))){
var inst_18156 = (state_18170[(2)]);
var state_18170__$1 = state_18170;
var statearr_18191_18224 = state_18170__$1;
(statearr_18191_18224[(2)] = inst_18156);

(statearr_18191_18224[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (2))){
var state_18170__$1 = state_18170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18170__$1,(4),in$);
} else {
if((state_val_18171 === (23))){
var inst_18164 = (state_18170[(2)]);
var state_18170__$1 = state_18170;
var statearr_18192_18225 = state_18170__$1;
(statearr_18192_18225[(2)] = inst_18164);

(statearr_18192_18225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (19))){
var inst_18151 = (state_18170[(2)]);
var state_18170__$1 = state_18170;
var statearr_18193_18226 = state_18170__$1;
(statearr_18193_18226[(2)] = inst_18151);

(statearr_18193_18226[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (11))){
var inst_18122 = (state_18170[(11)]);
var inst_18136 = (state_18170[(7)]);
var inst_18136__$1 = cljs.core.seq.call(null,inst_18122);
var state_18170__$1 = (function (){var statearr_18194 = state_18170;
(statearr_18194[(7)] = inst_18136__$1);

return statearr_18194;
})();
if(inst_18136__$1){
var statearr_18195_18227 = state_18170__$1;
(statearr_18195_18227[(1)] = (14));

} else {
var statearr_18196_18228 = state_18170__$1;
(statearr_18196_18228[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (9))){
var inst_18158 = (state_18170[(2)]);
var inst_18159 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18170__$1 = (function (){var statearr_18197 = state_18170;
(statearr_18197[(15)] = inst_18158);

return statearr_18197;
})();
if(cljs.core.truth_(inst_18159)){
var statearr_18198_18229 = state_18170__$1;
(statearr_18198_18229[(1)] = (21));

} else {
var statearr_18199_18230 = state_18170__$1;
(statearr_18199_18230[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (5))){
var inst_18114 = cljs.core.async.close_BANG_.call(null,out);
var state_18170__$1 = state_18170;
var statearr_18200_18231 = state_18170__$1;
(statearr_18200_18231[(2)] = inst_18114);

(statearr_18200_18231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (14))){
var inst_18136 = (state_18170[(7)]);
var inst_18138 = cljs.core.chunked_seq_QMARK_.call(null,inst_18136);
var state_18170__$1 = state_18170;
if(inst_18138){
var statearr_18201_18232 = state_18170__$1;
(statearr_18201_18232[(1)] = (17));

} else {
var statearr_18202_18233 = state_18170__$1;
(statearr_18202_18233[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (16))){
var inst_18154 = (state_18170[(2)]);
var state_18170__$1 = state_18170;
var statearr_18203_18234 = state_18170__$1;
(statearr_18203_18234[(2)] = inst_18154);

(statearr_18203_18234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (10))){
var inst_18123 = (state_18170[(8)]);
var inst_18125 = (state_18170[(10)]);
var inst_18130 = cljs.core._nth.call(null,inst_18123,inst_18125);
var state_18170__$1 = state_18170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18170__$1,(13),out,inst_18130);
} else {
if((state_val_18171 === (18))){
var inst_18136 = (state_18170[(7)]);
var inst_18145 = cljs.core.first.call(null,inst_18136);
var state_18170__$1 = state_18170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18170__$1,(20),out,inst_18145);
} else {
if((state_val_18171 === (8))){
var inst_18124 = (state_18170[(9)]);
var inst_18125 = (state_18170[(10)]);
var inst_18127 = (inst_18125 < inst_18124);
var inst_18128 = inst_18127;
var state_18170__$1 = state_18170;
if(cljs.core.truth_(inst_18128)){
var statearr_18204_18235 = state_18170__$1;
(statearr_18204_18235[(1)] = (10));

} else {
var statearr_18205_18236 = state_18170__$1;
(statearr_18205_18236[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto__))
;
return ((function (switch__15710__auto__,c__15731__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15711__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15711__auto____0 = (function (){
var statearr_18209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18209[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15711__auto__);

(statearr_18209[(1)] = (1));

return statearr_18209;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15711__auto____1 = (function (state_18170){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18210){if((e18210 instanceof Object)){
var ex__15714__auto__ = e18210;
var statearr_18211_18237 = state_18170;
(statearr_18211_18237[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18238 = state_18170;
state_18170 = G__18238;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15711__auto__ = function(state_18170){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15711__auto____1.call(this,state_18170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15711__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15711__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto__))
})();
var state__15733__auto__ = (function (){var statearr_18212 = f__15732__auto__.call(null);
(statearr_18212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto__);

return statearr_18212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto__))
);

return c__15731__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18239 = [];
var len__14433__auto___18242 = arguments.length;
var i__14434__auto___18243 = (0);
while(true){
if((i__14434__auto___18243 < len__14433__auto___18242)){
args18239.push((arguments[i__14434__auto___18243]));

var G__18244 = (i__14434__auto___18243 + (1));
i__14434__auto___18243 = G__18244;
continue;
} else {
}
break;
}

var G__18241 = args18239.length;
switch (G__18241) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18239.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args18246 = [];
var len__14433__auto___18249 = arguments.length;
var i__14434__auto___18250 = (0);
while(true){
if((i__14434__auto___18250 < len__14433__auto___18249)){
args18246.push((arguments[i__14434__auto___18250]));

var G__18251 = (i__14434__auto___18250 + (1));
i__14434__auto___18250 = G__18251;
continue;
} else {
}
break;
}

var G__18248 = args18246.length;
switch (G__18248) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18246.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args18253 = [];
var len__14433__auto___18304 = arguments.length;
var i__14434__auto___18305 = (0);
while(true){
if((i__14434__auto___18305 < len__14433__auto___18304)){
args18253.push((arguments[i__14434__auto___18305]));

var G__18306 = (i__14434__auto___18305 + (1));
i__14434__auto___18305 = G__18306;
continue;
} else {
}
break;
}

var G__18255 = args18253.length;
switch (G__18255) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18253.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15731__auto___18308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___18308,out){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___18308,out){
return (function (state_18279){
var state_val_18280 = (state_18279[(1)]);
if((state_val_18280 === (7))){
var inst_18274 = (state_18279[(2)]);
var state_18279__$1 = state_18279;
var statearr_18281_18309 = state_18279__$1;
(statearr_18281_18309[(2)] = inst_18274);

(statearr_18281_18309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18280 === (1))){
var inst_18256 = null;
var state_18279__$1 = (function (){var statearr_18282 = state_18279;
(statearr_18282[(7)] = inst_18256);

return statearr_18282;
})();
var statearr_18283_18310 = state_18279__$1;
(statearr_18283_18310[(2)] = null);

(statearr_18283_18310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18280 === (4))){
var inst_18259 = (state_18279[(8)]);
var inst_18259__$1 = (state_18279[(2)]);
var inst_18260 = (inst_18259__$1 == null);
var inst_18261 = cljs.core.not.call(null,inst_18260);
var state_18279__$1 = (function (){var statearr_18284 = state_18279;
(statearr_18284[(8)] = inst_18259__$1);

return statearr_18284;
})();
if(inst_18261){
var statearr_18285_18311 = state_18279__$1;
(statearr_18285_18311[(1)] = (5));

} else {
var statearr_18286_18312 = state_18279__$1;
(statearr_18286_18312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18280 === (6))){
var state_18279__$1 = state_18279;
var statearr_18287_18313 = state_18279__$1;
(statearr_18287_18313[(2)] = null);

(statearr_18287_18313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18280 === (3))){
var inst_18276 = (state_18279[(2)]);
var inst_18277 = cljs.core.async.close_BANG_.call(null,out);
var state_18279__$1 = (function (){var statearr_18288 = state_18279;
(statearr_18288[(9)] = inst_18276);

return statearr_18288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18279__$1,inst_18277);
} else {
if((state_val_18280 === (2))){
var state_18279__$1 = state_18279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18279__$1,(4),ch);
} else {
if((state_val_18280 === (11))){
var inst_18259 = (state_18279[(8)]);
var inst_18268 = (state_18279[(2)]);
var inst_18256 = inst_18259;
var state_18279__$1 = (function (){var statearr_18289 = state_18279;
(statearr_18289[(10)] = inst_18268);

(statearr_18289[(7)] = inst_18256);

return statearr_18289;
})();
var statearr_18290_18314 = state_18279__$1;
(statearr_18290_18314[(2)] = null);

(statearr_18290_18314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18280 === (9))){
var inst_18259 = (state_18279[(8)]);
var state_18279__$1 = state_18279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18279__$1,(11),out,inst_18259);
} else {
if((state_val_18280 === (5))){
var inst_18259 = (state_18279[(8)]);
var inst_18256 = (state_18279[(7)]);
var inst_18263 = cljs.core._EQ_.call(null,inst_18259,inst_18256);
var state_18279__$1 = state_18279;
if(inst_18263){
var statearr_18292_18315 = state_18279__$1;
(statearr_18292_18315[(1)] = (8));

} else {
var statearr_18293_18316 = state_18279__$1;
(statearr_18293_18316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18280 === (10))){
var inst_18271 = (state_18279[(2)]);
var state_18279__$1 = state_18279;
var statearr_18294_18317 = state_18279__$1;
(statearr_18294_18317[(2)] = inst_18271);

(statearr_18294_18317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18280 === (8))){
var inst_18256 = (state_18279[(7)]);
var tmp18291 = inst_18256;
var inst_18256__$1 = tmp18291;
var state_18279__$1 = (function (){var statearr_18295 = state_18279;
(statearr_18295[(7)] = inst_18256__$1);

return statearr_18295;
})();
var statearr_18296_18318 = state_18279__$1;
(statearr_18296_18318[(2)] = null);

(statearr_18296_18318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto___18308,out))
;
return ((function (switch__15710__auto__,c__15731__auto___18308,out){
return (function() {
var cljs$core$async$state_machine__15711__auto__ = null;
var cljs$core$async$state_machine__15711__auto____0 = (function (){
var statearr_18300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18300[(0)] = cljs$core$async$state_machine__15711__auto__);

(statearr_18300[(1)] = (1));

return statearr_18300;
});
var cljs$core$async$state_machine__15711__auto____1 = (function (state_18279){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18301){if((e18301 instanceof Object)){
var ex__15714__auto__ = e18301;
var statearr_18302_18319 = state_18279;
(statearr_18302_18319[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18320 = state_18279;
state_18279 = G__18320;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$state_machine__15711__auto__ = function(state_18279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15711__auto____1.call(this,state_18279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15711__auto____0;
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15711__auto____1;
return cljs$core$async$state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___18308,out))
})();
var state__15733__auto__ = (function (){var statearr_18303 = f__15732__auto__.call(null);
(statearr_18303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___18308);

return statearr_18303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___18308,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18321 = [];
var len__14433__auto___18391 = arguments.length;
var i__14434__auto___18392 = (0);
while(true){
if((i__14434__auto___18392 < len__14433__auto___18391)){
args18321.push((arguments[i__14434__auto___18392]));

var G__18393 = (i__14434__auto___18392 + (1));
i__14434__auto___18392 = G__18393;
continue;
} else {
}
break;
}

var G__18323 = args18321.length;
switch (G__18323) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18321.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15731__auto___18395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___18395,out){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___18395,out){
return (function (state_18361){
var state_val_18362 = (state_18361[(1)]);
if((state_val_18362 === (7))){
var inst_18357 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
var statearr_18363_18396 = state_18361__$1;
(statearr_18363_18396[(2)] = inst_18357);

(statearr_18363_18396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (1))){
var inst_18324 = (new Array(n));
var inst_18325 = inst_18324;
var inst_18326 = (0);
var state_18361__$1 = (function (){var statearr_18364 = state_18361;
(statearr_18364[(7)] = inst_18325);

(statearr_18364[(8)] = inst_18326);

return statearr_18364;
})();
var statearr_18365_18397 = state_18361__$1;
(statearr_18365_18397[(2)] = null);

(statearr_18365_18397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (4))){
var inst_18329 = (state_18361[(9)]);
var inst_18329__$1 = (state_18361[(2)]);
var inst_18330 = (inst_18329__$1 == null);
var inst_18331 = cljs.core.not.call(null,inst_18330);
var state_18361__$1 = (function (){var statearr_18366 = state_18361;
(statearr_18366[(9)] = inst_18329__$1);

return statearr_18366;
})();
if(inst_18331){
var statearr_18367_18398 = state_18361__$1;
(statearr_18367_18398[(1)] = (5));

} else {
var statearr_18368_18399 = state_18361__$1;
(statearr_18368_18399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (15))){
var inst_18351 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
var statearr_18369_18400 = state_18361__$1;
(statearr_18369_18400[(2)] = inst_18351);

(statearr_18369_18400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (13))){
var state_18361__$1 = state_18361;
var statearr_18370_18401 = state_18361__$1;
(statearr_18370_18401[(2)] = null);

(statearr_18370_18401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (6))){
var inst_18326 = (state_18361[(8)]);
var inst_18347 = (inst_18326 > (0));
var state_18361__$1 = state_18361;
if(cljs.core.truth_(inst_18347)){
var statearr_18371_18402 = state_18361__$1;
(statearr_18371_18402[(1)] = (12));

} else {
var statearr_18372_18403 = state_18361__$1;
(statearr_18372_18403[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (3))){
var inst_18359 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18361__$1,inst_18359);
} else {
if((state_val_18362 === (12))){
var inst_18325 = (state_18361[(7)]);
var inst_18349 = cljs.core.vec.call(null,inst_18325);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18361__$1,(15),out,inst_18349);
} else {
if((state_val_18362 === (2))){
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18361__$1,(4),ch);
} else {
if((state_val_18362 === (11))){
var inst_18341 = (state_18361[(2)]);
var inst_18342 = (new Array(n));
var inst_18325 = inst_18342;
var inst_18326 = (0);
var state_18361__$1 = (function (){var statearr_18373 = state_18361;
(statearr_18373[(7)] = inst_18325);

(statearr_18373[(8)] = inst_18326);

(statearr_18373[(10)] = inst_18341);

return statearr_18373;
})();
var statearr_18374_18404 = state_18361__$1;
(statearr_18374_18404[(2)] = null);

(statearr_18374_18404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (9))){
var inst_18325 = (state_18361[(7)]);
var inst_18339 = cljs.core.vec.call(null,inst_18325);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18361__$1,(11),out,inst_18339);
} else {
if((state_val_18362 === (5))){
var inst_18325 = (state_18361[(7)]);
var inst_18334 = (state_18361[(11)]);
var inst_18326 = (state_18361[(8)]);
var inst_18329 = (state_18361[(9)]);
var inst_18333 = (inst_18325[inst_18326] = inst_18329);
var inst_18334__$1 = (inst_18326 + (1));
var inst_18335 = (inst_18334__$1 < n);
var state_18361__$1 = (function (){var statearr_18375 = state_18361;
(statearr_18375[(12)] = inst_18333);

(statearr_18375[(11)] = inst_18334__$1);

return statearr_18375;
})();
if(cljs.core.truth_(inst_18335)){
var statearr_18376_18405 = state_18361__$1;
(statearr_18376_18405[(1)] = (8));

} else {
var statearr_18377_18406 = state_18361__$1;
(statearr_18377_18406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (14))){
var inst_18354 = (state_18361[(2)]);
var inst_18355 = cljs.core.async.close_BANG_.call(null,out);
var state_18361__$1 = (function (){var statearr_18379 = state_18361;
(statearr_18379[(13)] = inst_18354);

return statearr_18379;
})();
var statearr_18380_18407 = state_18361__$1;
(statearr_18380_18407[(2)] = inst_18355);

(statearr_18380_18407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (10))){
var inst_18345 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
var statearr_18381_18408 = state_18361__$1;
(statearr_18381_18408[(2)] = inst_18345);

(statearr_18381_18408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (8))){
var inst_18325 = (state_18361[(7)]);
var inst_18334 = (state_18361[(11)]);
var tmp18378 = inst_18325;
var inst_18325__$1 = tmp18378;
var inst_18326 = inst_18334;
var state_18361__$1 = (function (){var statearr_18382 = state_18361;
(statearr_18382[(7)] = inst_18325__$1);

(statearr_18382[(8)] = inst_18326);

return statearr_18382;
})();
var statearr_18383_18409 = state_18361__$1;
(statearr_18383_18409[(2)] = null);

(statearr_18383_18409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto___18395,out))
;
return ((function (switch__15710__auto__,c__15731__auto___18395,out){
return (function() {
var cljs$core$async$state_machine__15711__auto__ = null;
var cljs$core$async$state_machine__15711__auto____0 = (function (){
var statearr_18387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18387[(0)] = cljs$core$async$state_machine__15711__auto__);

(statearr_18387[(1)] = (1));

return statearr_18387;
});
var cljs$core$async$state_machine__15711__auto____1 = (function (state_18361){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18388){if((e18388 instanceof Object)){
var ex__15714__auto__ = e18388;
var statearr_18389_18410 = state_18361;
(statearr_18389_18410[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18411 = state_18361;
state_18361 = G__18411;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$state_machine__15711__auto__ = function(state_18361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15711__auto____1.call(this,state_18361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15711__auto____0;
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15711__auto____1;
return cljs$core$async$state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___18395,out))
})();
var state__15733__auto__ = (function (){var statearr_18390 = f__15732__auto__.call(null);
(statearr_18390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___18395);

return statearr_18390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___18395,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18412 = [];
var len__14433__auto___18486 = arguments.length;
var i__14434__auto___18487 = (0);
while(true){
if((i__14434__auto___18487 < len__14433__auto___18486)){
args18412.push((arguments[i__14434__auto___18487]));

var G__18488 = (i__14434__auto___18487 + (1));
i__14434__auto___18487 = G__18488;
continue;
} else {
}
break;
}

var G__18414 = args18412.length;
switch (G__18414) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18412.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15731__auto___18490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___18490,out){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___18490,out){
return (function (state_18456){
var state_val_18457 = (state_18456[(1)]);
if((state_val_18457 === (7))){
var inst_18452 = (state_18456[(2)]);
var state_18456__$1 = state_18456;
var statearr_18458_18491 = state_18456__$1;
(statearr_18458_18491[(2)] = inst_18452);

(statearr_18458_18491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18457 === (1))){
var inst_18415 = [];
var inst_18416 = inst_18415;
var inst_18417 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18456__$1 = (function (){var statearr_18459 = state_18456;
(statearr_18459[(7)] = inst_18417);

(statearr_18459[(8)] = inst_18416);

return statearr_18459;
})();
var statearr_18460_18492 = state_18456__$1;
(statearr_18460_18492[(2)] = null);

(statearr_18460_18492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18457 === (4))){
var inst_18420 = (state_18456[(9)]);
var inst_18420__$1 = (state_18456[(2)]);
var inst_18421 = (inst_18420__$1 == null);
var inst_18422 = cljs.core.not.call(null,inst_18421);
var state_18456__$1 = (function (){var statearr_18461 = state_18456;
(statearr_18461[(9)] = inst_18420__$1);

return statearr_18461;
})();
if(inst_18422){
var statearr_18462_18493 = state_18456__$1;
(statearr_18462_18493[(1)] = (5));

} else {
var statearr_18463_18494 = state_18456__$1;
(statearr_18463_18494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18457 === (15))){
var inst_18446 = (state_18456[(2)]);
var state_18456__$1 = state_18456;
var statearr_18464_18495 = state_18456__$1;
(statearr_18464_18495[(2)] = inst_18446);

(statearr_18464_18495[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18457 === (13))){
var state_18456__$1 = state_18456;
var statearr_18465_18496 = state_18456__$1;
(statearr_18465_18496[(2)] = null);

(statearr_18465_18496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18457 === (6))){
var inst_18416 = (state_18456[(8)]);
var inst_18441 = inst_18416.length;
var inst_18442 = (inst_18441 > (0));
var state_18456__$1 = state_18456;
if(cljs.core.truth_(inst_18442)){
var statearr_18466_18497 = state_18456__$1;
(statearr_18466_18497[(1)] = (12));

} else {
var statearr_18467_18498 = state_18456__$1;
(statearr_18467_18498[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18457 === (3))){
var inst_18454 = (state_18456[(2)]);
var state_18456__$1 = state_18456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18456__$1,inst_18454);
} else {
if((state_val_18457 === (12))){
var inst_18416 = (state_18456[(8)]);
var inst_18444 = cljs.core.vec.call(null,inst_18416);
var state_18456__$1 = state_18456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18456__$1,(15),out,inst_18444);
} else {
if((state_val_18457 === (2))){
var state_18456__$1 = state_18456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18456__$1,(4),ch);
} else {
if((state_val_18457 === (11))){
var inst_18420 = (state_18456[(9)]);
var inst_18424 = (state_18456[(10)]);
var inst_18434 = (state_18456[(2)]);
var inst_18435 = [];
var inst_18436 = inst_18435.push(inst_18420);
var inst_18416 = inst_18435;
var inst_18417 = inst_18424;
var state_18456__$1 = (function (){var statearr_18468 = state_18456;
(statearr_18468[(11)] = inst_18434);

(statearr_18468[(12)] = inst_18436);

(statearr_18468[(7)] = inst_18417);

(statearr_18468[(8)] = inst_18416);

return statearr_18468;
})();
var statearr_18469_18499 = state_18456__$1;
(statearr_18469_18499[(2)] = null);

(statearr_18469_18499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18457 === (9))){
var inst_18416 = (state_18456[(8)]);
var inst_18432 = cljs.core.vec.call(null,inst_18416);
var state_18456__$1 = state_18456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18456__$1,(11),out,inst_18432);
} else {
if((state_val_18457 === (5))){
var inst_18420 = (state_18456[(9)]);
var inst_18424 = (state_18456[(10)]);
var inst_18417 = (state_18456[(7)]);
var inst_18424__$1 = f.call(null,inst_18420);
var inst_18425 = cljs.core._EQ_.call(null,inst_18424__$1,inst_18417);
var inst_18426 = cljs.core.keyword_identical_QMARK_.call(null,inst_18417,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18427 = (inst_18425) || (inst_18426);
var state_18456__$1 = (function (){var statearr_18470 = state_18456;
(statearr_18470[(10)] = inst_18424__$1);

return statearr_18470;
})();
if(cljs.core.truth_(inst_18427)){
var statearr_18471_18500 = state_18456__$1;
(statearr_18471_18500[(1)] = (8));

} else {
var statearr_18472_18501 = state_18456__$1;
(statearr_18472_18501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18457 === (14))){
var inst_18449 = (state_18456[(2)]);
var inst_18450 = cljs.core.async.close_BANG_.call(null,out);
var state_18456__$1 = (function (){var statearr_18474 = state_18456;
(statearr_18474[(13)] = inst_18449);

return statearr_18474;
})();
var statearr_18475_18502 = state_18456__$1;
(statearr_18475_18502[(2)] = inst_18450);

(statearr_18475_18502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18457 === (10))){
var inst_18439 = (state_18456[(2)]);
var state_18456__$1 = state_18456;
var statearr_18476_18503 = state_18456__$1;
(statearr_18476_18503[(2)] = inst_18439);

(statearr_18476_18503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18457 === (8))){
var inst_18420 = (state_18456[(9)]);
var inst_18424 = (state_18456[(10)]);
var inst_18416 = (state_18456[(8)]);
var inst_18429 = inst_18416.push(inst_18420);
var tmp18473 = inst_18416;
var inst_18416__$1 = tmp18473;
var inst_18417 = inst_18424;
var state_18456__$1 = (function (){var statearr_18477 = state_18456;
(statearr_18477[(7)] = inst_18417);

(statearr_18477[(14)] = inst_18429);

(statearr_18477[(8)] = inst_18416__$1);

return statearr_18477;
})();
var statearr_18478_18504 = state_18456__$1;
(statearr_18478_18504[(2)] = null);

(statearr_18478_18504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15731__auto___18490,out))
;
return ((function (switch__15710__auto__,c__15731__auto___18490,out){
return (function() {
var cljs$core$async$state_machine__15711__auto__ = null;
var cljs$core$async$state_machine__15711__auto____0 = (function (){
var statearr_18482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18482[(0)] = cljs$core$async$state_machine__15711__auto__);

(statearr_18482[(1)] = (1));

return statearr_18482;
});
var cljs$core$async$state_machine__15711__auto____1 = (function (state_18456){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18483){if((e18483 instanceof Object)){
var ex__15714__auto__ = e18483;
var statearr_18484_18505 = state_18456;
(statearr_18484_18505[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18506 = state_18456;
state_18456 = G__18506;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
cljs$core$async$state_machine__15711__auto__ = function(state_18456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15711__auto____1.call(this,state_18456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15711__auto____0;
cljs$core$async$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15711__auto____1;
return cljs$core$async$state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___18490,out))
})();
var state__15733__auto__ = (function (){var statearr_18485 = f__15732__auto__.call(null);
(statearr_18485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___18490);

return statearr_18485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___18490,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map