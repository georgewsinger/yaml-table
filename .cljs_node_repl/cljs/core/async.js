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
var args18182 = [];
var len__14436__auto___18188 = arguments.length;
var i__14437__auto___18189 = (0);
while(true){
if((i__14437__auto___18189 < len__14436__auto___18188)){
args18182.push((arguments[i__14437__auto___18189]));

var G__18190 = (i__14437__auto___18189 + (1));
i__14437__auto___18189 = G__18190;
continue;
} else {
}
break;
}

var G__18184 = args18182.length;
switch (G__18184) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18182.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async18185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18185 = (function (f,blockable,meta18186){
this.f = f;
this.blockable = blockable;
this.meta18186 = meta18186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18187,meta18186__$1){
var self__ = this;
var _18187__$1 = this;
return (new cljs.core.async.t_cljs$core$async18185(self__.f,self__.blockable,meta18186__$1));
});

cljs.core.async.t_cljs$core$async18185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18187){
var self__ = this;
var _18187__$1 = this;
return self__.meta18186;
});

cljs.core.async.t_cljs$core$async18185.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18185.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18186","meta18186",2028537877,null)], null);
});

cljs.core.async.t_cljs$core$async18185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18185";

cljs.core.async.t_cljs$core$async18185.cljs$lang$ctorPrWriter = (function (this__13976__auto__,writer__13977__auto__,opt__13978__auto__){
return cljs.core._write.call(null,writer__13977__auto__,"cljs.core.async/t_cljs$core$async18185");
});

cljs.core.async.__GT_t_cljs$core$async18185 = (function cljs$core$async$__GT_t_cljs$core$async18185(f__$1,blockable__$1,meta18186){
return (new cljs.core.async.t_cljs$core$async18185(f__$1,blockable__$1,meta18186));
});

}

return (new cljs.core.async.t_cljs$core$async18185(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args18194 = [];
var len__14436__auto___18197 = arguments.length;
var i__14437__auto___18198 = (0);
while(true){
if((i__14437__auto___18198 < len__14436__auto___18197)){
args18194.push((arguments[i__14437__auto___18198]));

var G__18199 = (i__14437__auto___18198 + (1));
i__14437__auto___18198 = G__18199;
continue;
} else {
}
break;
}

var G__18196 = args18194.length;
switch (G__18196) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18194.length)].join('')));

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
var args18201 = [];
var len__14436__auto___18204 = arguments.length;
var i__14437__auto___18205 = (0);
while(true){
if((i__14437__auto___18205 < len__14436__auto___18204)){
args18201.push((arguments[i__14437__auto___18205]));

var G__18206 = (i__14437__auto___18205 + (1));
i__14437__auto___18205 = G__18206;
continue;
} else {
}
break;
}

var G__18203 = args18201.length;
switch (G__18203) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18201.length)].join('')));

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
var args18208 = [];
var len__14436__auto___18211 = arguments.length;
var i__14437__auto___18212 = (0);
while(true){
if((i__14437__auto___18212 < len__14436__auto___18211)){
args18208.push((arguments[i__14437__auto___18212]));

var G__18213 = (i__14437__auto___18212 + (1));
i__14437__auto___18212 = G__18213;
continue;
} else {
}
break;
}

var G__18210 = args18208.length;
switch (G__18210) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18208.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18215 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18215);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18215,ret){
return (function (){
return fn1.call(null,val_18215);
});})(val_18215,ret))
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
var args18216 = [];
var len__14436__auto___18219 = arguments.length;
var i__14437__auto___18220 = (0);
while(true){
if((i__14437__auto___18220 < len__14436__auto___18219)){
args18216.push((arguments[i__14437__auto___18220]));

var G__18221 = (i__14437__auto___18220 + (1));
i__14437__auto___18220 = G__18221;
continue;
} else {
}
break;
}

var G__18218 = args18216.length;
switch (G__18218) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18216.length)].join('')));

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
var n__14281__auto___18223 = n;
var x_18224 = (0);
while(true){
if((x_18224 < n__14281__auto___18223)){
(a[x_18224] = (0));

var G__18225 = (x_18224 + (1));
x_18224 = G__18225;
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

var G__18226 = (i + (1));
i = G__18226;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async18230 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18230 = (function (alt_flag,flag,meta18231){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta18231 = meta18231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18232,meta18231__$1){
var self__ = this;
var _18232__$1 = this;
return (new cljs.core.async.t_cljs$core$async18230(self__.alt_flag,self__.flag,meta18231__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18232){
var self__ = this;
var _18232__$1 = this;
return self__.meta18231;
});})(flag))
;

cljs.core.async.t_cljs$core$async18230.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18230.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18230.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18230.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18230.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18231","meta18231",2065300677,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18230.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18230";

cljs.core.async.t_cljs$core$async18230.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13976__auto__,writer__13977__auto__,opt__13978__auto__){
return cljs.core._write.call(null,writer__13977__auto__,"cljs.core.async/t_cljs$core$async18230");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18230 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18230(alt_flag__$1,flag__$1,meta18231){
return (new cljs.core.async.t_cljs$core$async18230(alt_flag__$1,flag__$1,meta18231));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18230(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18236 = (function (alt_handler,flag,cb,meta18237){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta18237 = meta18237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18238,meta18237__$1){
var self__ = this;
var _18238__$1 = this;
return (new cljs.core.async.t_cljs$core$async18236(self__.alt_handler,self__.flag,self__.cb,meta18237__$1));
});

cljs.core.async.t_cljs$core$async18236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18238){
var self__ = this;
var _18238__$1 = this;
return self__.meta18237;
});

cljs.core.async.t_cljs$core$async18236.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18236.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18237","meta18237",-196411159,null)], null);
});

cljs.core.async.t_cljs$core$async18236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18236";

cljs.core.async.t_cljs$core$async18236.cljs$lang$ctorPrWriter = (function (this__13976__auto__,writer__13977__auto__,opt__13978__auto__){
return cljs.core._write.call(null,writer__13977__auto__,"cljs.core.async/t_cljs$core$async18236");
});

cljs.core.async.__GT_t_cljs$core$async18236 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18236(alt_handler__$1,flag__$1,cb__$1,meta18237){
return (new cljs.core.async.t_cljs$core$async18236(alt_handler__$1,flag__$1,cb__$1,meta18237));
});

}

return (new cljs.core.async.t_cljs$core$async18236(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18239_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18239_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18240_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18240_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13378__auto__ = wport;
if(cljs.core.truth_(or__13378__auto__)){
return or__13378__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18241 = (i + (1));
i = G__18241;
continue;
}
} else {
return null;
}
break;
}
})();
var or__13378__auto__ = ret;
if(cljs.core.truth_(or__13378__auto__)){
return or__13378__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__13366__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__13366__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__13366__auto__;
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
var args__14443__auto__ = [];
var len__14436__auto___18247 = arguments.length;
var i__14437__auto___18248 = (0);
while(true){
if((i__14437__auto___18248 < len__14436__auto___18247)){
args__14443__auto__.push((arguments[i__14437__auto___18248]));

var G__18249 = (i__14437__auto___18248 + (1));
i__14437__auto___18248 = G__18249;
continue;
} else {
}
break;
}

var argseq__14444__auto__ = ((((1) < args__14443__auto__.length))?(new cljs.core.IndexedSeq(args__14443__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14444__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18244){
var map__18245 = p__18244;
var map__18245__$1 = ((((!((map__18245 == null)))?((((map__18245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18245):map__18245);
var opts = map__18245__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18242){
var G__18243 = cljs.core.first.call(null,seq18242);
var seq18242__$1 = cljs.core.next.call(null,seq18242);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18243,seq18242__$1);
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
var args18250 = [];
var len__14436__auto___18300 = arguments.length;
var i__14437__auto___18301 = (0);
while(true){
if((i__14437__auto___18301 < len__14436__auto___18300)){
args18250.push((arguments[i__14437__auto___18301]));

var G__18302 = (i__14437__auto___18301 + (1));
i__14437__auto___18301 = G__18302;
continue;
} else {
}
break;
}

var G__18252 = args18250.length;
switch (G__18252) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18250.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15907__auto___18304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___18304){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___18304){
return (function (state_18276){
var state_val_18277 = (state_18276[(1)]);
if((state_val_18277 === (7))){
var inst_18272 = (state_18276[(2)]);
var state_18276__$1 = state_18276;
var statearr_18278_18305 = state_18276__$1;
(statearr_18278_18305[(2)] = inst_18272);

(statearr_18278_18305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (1))){
var state_18276__$1 = state_18276;
var statearr_18279_18306 = state_18276__$1;
(statearr_18279_18306[(2)] = null);

(statearr_18279_18306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (4))){
var inst_18255 = (state_18276[(7)]);
var inst_18255__$1 = (state_18276[(2)]);
var inst_18256 = (inst_18255__$1 == null);
var state_18276__$1 = (function (){var statearr_18280 = state_18276;
(statearr_18280[(7)] = inst_18255__$1);

return statearr_18280;
})();
if(cljs.core.truth_(inst_18256)){
var statearr_18281_18307 = state_18276__$1;
(statearr_18281_18307[(1)] = (5));

} else {
var statearr_18282_18308 = state_18276__$1;
(statearr_18282_18308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (13))){
var state_18276__$1 = state_18276;
var statearr_18283_18309 = state_18276__$1;
(statearr_18283_18309[(2)] = null);

(statearr_18283_18309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (6))){
var inst_18255 = (state_18276[(7)]);
var state_18276__$1 = state_18276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18276__$1,(11),to,inst_18255);
} else {
if((state_val_18277 === (3))){
var inst_18274 = (state_18276[(2)]);
var state_18276__$1 = state_18276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18276__$1,inst_18274);
} else {
if((state_val_18277 === (12))){
var state_18276__$1 = state_18276;
var statearr_18284_18310 = state_18276__$1;
(statearr_18284_18310[(2)] = null);

(statearr_18284_18310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (2))){
var state_18276__$1 = state_18276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18276__$1,(4),from);
} else {
if((state_val_18277 === (11))){
var inst_18265 = (state_18276[(2)]);
var state_18276__$1 = state_18276;
if(cljs.core.truth_(inst_18265)){
var statearr_18285_18311 = state_18276__$1;
(statearr_18285_18311[(1)] = (12));

} else {
var statearr_18286_18312 = state_18276__$1;
(statearr_18286_18312[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (9))){
var state_18276__$1 = state_18276;
var statearr_18287_18313 = state_18276__$1;
(statearr_18287_18313[(2)] = null);

(statearr_18287_18313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (5))){
var state_18276__$1 = state_18276;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18288_18314 = state_18276__$1;
(statearr_18288_18314[(1)] = (8));

} else {
var statearr_18289_18315 = state_18276__$1;
(statearr_18289_18315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (14))){
var inst_18270 = (state_18276[(2)]);
var state_18276__$1 = state_18276;
var statearr_18290_18316 = state_18276__$1;
(statearr_18290_18316[(2)] = inst_18270);

(statearr_18290_18316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (10))){
var inst_18262 = (state_18276[(2)]);
var state_18276__$1 = state_18276;
var statearr_18291_18317 = state_18276__$1;
(statearr_18291_18317[(2)] = inst_18262);

(statearr_18291_18317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (8))){
var inst_18259 = cljs.core.async.close_BANG_.call(null,to);
var state_18276__$1 = state_18276;
var statearr_18292_18318 = state_18276__$1;
(statearr_18292_18318[(2)] = inst_18259);

(statearr_18292_18318[(1)] = (10));


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
});})(c__15907__auto___18304))
;
return ((function (switch__15842__auto__,c__15907__auto___18304){
return (function() {
var cljs$core$async$state_machine__15843__auto__ = null;
var cljs$core$async$state_machine__15843__auto____0 = (function (){
var statearr_18296 = [null,null,null,null,null,null,null,null];
(statearr_18296[(0)] = cljs$core$async$state_machine__15843__auto__);

(statearr_18296[(1)] = (1));

return statearr_18296;
});
var cljs$core$async$state_machine__15843__auto____1 = (function (state_18276){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_18276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e18297){if((e18297 instanceof Object)){
var ex__15846__auto__ = e18297;
var statearr_18298_18319 = state_18276;
(statearr_18298_18319[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18320 = state_18276;
state_18276 = G__18320;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$state_machine__15843__auto__ = function(state_18276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15843__auto____1.call(this,state_18276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15843__auto____0;
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15843__auto____1;
return cljs$core$async$state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___18304))
})();
var state__15909__auto__ = (function (){var statearr_18299 = f__15908__auto__.call(null);
(statearr_18299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___18304);

return statearr_18299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___18304))
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
return (function (p__18504){
var vec__18505 = p__18504;
var v = cljs.core.nth.call(null,vec__18505,(0),null);
var p = cljs.core.nth.call(null,vec__18505,(1),null);
var job = vec__18505;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15907__auto___18687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___18687,res,vec__18505,v,p,job,jobs,results){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___18687,res,vec__18505,v,p,job,jobs,results){
return (function (state_18510){
var state_val_18511 = (state_18510[(1)]);
if((state_val_18511 === (1))){
var state_18510__$1 = state_18510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18510__$1,(2),res,v);
} else {
if((state_val_18511 === (2))){
var inst_18507 = (state_18510[(2)]);
var inst_18508 = cljs.core.async.close_BANG_.call(null,res);
var state_18510__$1 = (function (){var statearr_18512 = state_18510;
(statearr_18512[(7)] = inst_18507);

return statearr_18512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18510__$1,inst_18508);
} else {
return null;
}
}
});})(c__15907__auto___18687,res,vec__18505,v,p,job,jobs,results))
;
return ((function (switch__15842__auto__,c__15907__auto___18687,res,vec__18505,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0 = (function (){
var statearr_18516 = [null,null,null,null,null,null,null,null];
(statearr_18516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__);

(statearr_18516[(1)] = (1));

return statearr_18516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1 = (function (state_18510){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_18510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e18517){if((e18517 instanceof Object)){
var ex__15846__auto__ = e18517;
var statearr_18518_18688 = state_18510;
(statearr_18518_18688[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18689 = state_18510;
state_18510 = G__18689;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__ = function(state_18510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1.call(this,state_18510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___18687,res,vec__18505,v,p,job,jobs,results))
})();
var state__15909__auto__ = (function (){var statearr_18519 = f__15908__auto__.call(null);
(statearr_18519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___18687);

return statearr_18519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___18687,res,vec__18505,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18520){
var vec__18521 = p__18520;
var v = cljs.core.nth.call(null,vec__18521,(0),null);
var p = cljs.core.nth.call(null,vec__18521,(1),null);
var job = vec__18521;
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
var n__14281__auto___18690 = n;
var __18691 = (0);
while(true){
if((__18691 < n__14281__auto___18690)){
var G__18522_18692 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18522_18692) {
case "compute":
var c__15907__auto___18694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18691,c__15907__auto___18694,G__18522_18692,n__14281__auto___18690,jobs,results,process,async){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (__18691,c__15907__auto___18694,G__18522_18692,n__14281__auto___18690,jobs,results,process,async){
return (function (state_18535){
var state_val_18536 = (state_18535[(1)]);
if((state_val_18536 === (1))){
var state_18535__$1 = state_18535;
var statearr_18537_18695 = state_18535__$1;
(statearr_18537_18695[(2)] = null);

(statearr_18537_18695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (2))){
var state_18535__$1 = state_18535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18535__$1,(4),jobs);
} else {
if((state_val_18536 === (3))){
var inst_18533 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18535__$1,inst_18533);
} else {
if((state_val_18536 === (4))){
var inst_18525 = (state_18535[(2)]);
var inst_18526 = process.call(null,inst_18525);
var state_18535__$1 = state_18535;
if(cljs.core.truth_(inst_18526)){
var statearr_18538_18696 = state_18535__$1;
(statearr_18538_18696[(1)] = (5));

} else {
var statearr_18539_18697 = state_18535__$1;
(statearr_18539_18697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (5))){
var state_18535__$1 = state_18535;
var statearr_18540_18698 = state_18535__$1;
(statearr_18540_18698[(2)] = null);

(statearr_18540_18698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (6))){
var state_18535__$1 = state_18535;
var statearr_18541_18699 = state_18535__$1;
(statearr_18541_18699[(2)] = null);

(statearr_18541_18699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (7))){
var inst_18531 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18542_18700 = state_18535__$1;
(statearr_18542_18700[(2)] = inst_18531);

(statearr_18542_18700[(1)] = (3));


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
});})(__18691,c__15907__auto___18694,G__18522_18692,n__14281__auto___18690,jobs,results,process,async))
;
return ((function (__18691,switch__15842__auto__,c__15907__auto___18694,G__18522_18692,n__14281__auto___18690,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0 = (function (){
var statearr_18546 = [null,null,null,null,null,null,null];
(statearr_18546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__);

(statearr_18546[(1)] = (1));

return statearr_18546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1 = (function (state_18535){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_18535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e18547){if((e18547 instanceof Object)){
var ex__15846__auto__ = e18547;
var statearr_18548_18701 = state_18535;
(statearr_18548_18701[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18702 = state_18535;
state_18535 = G__18702;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__ = function(state_18535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1.call(this,state_18535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__;
})()
;})(__18691,switch__15842__auto__,c__15907__auto___18694,G__18522_18692,n__14281__auto___18690,jobs,results,process,async))
})();
var state__15909__auto__ = (function (){var statearr_18549 = f__15908__auto__.call(null);
(statearr_18549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___18694);

return statearr_18549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(__18691,c__15907__auto___18694,G__18522_18692,n__14281__auto___18690,jobs,results,process,async))
);


break;
case "async":
var c__15907__auto___18703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18691,c__15907__auto___18703,G__18522_18692,n__14281__auto___18690,jobs,results,process,async){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (__18691,c__15907__auto___18703,G__18522_18692,n__14281__auto___18690,jobs,results,process,async){
return (function (state_18562){
var state_val_18563 = (state_18562[(1)]);
if((state_val_18563 === (1))){
var state_18562__$1 = state_18562;
var statearr_18564_18704 = state_18562__$1;
(statearr_18564_18704[(2)] = null);

(statearr_18564_18704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (2))){
var state_18562__$1 = state_18562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18562__$1,(4),jobs);
} else {
if((state_val_18563 === (3))){
var inst_18560 = (state_18562[(2)]);
var state_18562__$1 = state_18562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18562__$1,inst_18560);
} else {
if((state_val_18563 === (4))){
var inst_18552 = (state_18562[(2)]);
var inst_18553 = async.call(null,inst_18552);
var state_18562__$1 = state_18562;
if(cljs.core.truth_(inst_18553)){
var statearr_18565_18705 = state_18562__$1;
(statearr_18565_18705[(1)] = (5));

} else {
var statearr_18566_18706 = state_18562__$1;
(statearr_18566_18706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (5))){
var state_18562__$1 = state_18562;
var statearr_18567_18707 = state_18562__$1;
(statearr_18567_18707[(2)] = null);

(statearr_18567_18707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (6))){
var state_18562__$1 = state_18562;
var statearr_18568_18708 = state_18562__$1;
(statearr_18568_18708[(2)] = null);

(statearr_18568_18708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (7))){
var inst_18558 = (state_18562[(2)]);
var state_18562__$1 = state_18562;
var statearr_18569_18709 = state_18562__$1;
(statearr_18569_18709[(2)] = inst_18558);

(statearr_18569_18709[(1)] = (3));


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
});})(__18691,c__15907__auto___18703,G__18522_18692,n__14281__auto___18690,jobs,results,process,async))
;
return ((function (__18691,switch__15842__auto__,c__15907__auto___18703,G__18522_18692,n__14281__auto___18690,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0 = (function (){
var statearr_18573 = [null,null,null,null,null,null,null];
(statearr_18573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__);

(statearr_18573[(1)] = (1));

return statearr_18573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1 = (function (state_18562){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_18562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e18574){if((e18574 instanceof Object)){
var ex__15846__auto__ = e18574;
var statearr_18575_18710 = state_18562;
(statearr_18575_18710[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18711 = state_18562;
state_18562 = G__18711;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__ = function(state_18562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1.call(this,state_18562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__;
})()
;})(__18691,switch__15842__auto__,c__15907__auto___18703,G__18522_18692,n__14281__auto___18690,jobs,results,process,async))
})();
var state__15909__auto__ = (function (){var statearr_18576 = f__15908__auto__.call(null);
(statearr_18576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___18703);

return statearr_18576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(__18691,c__15907__auto___18703,G__18522_18692,n__14281__auto___18690,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18712 = (__18691 + (1));
__18691 = G__18712;
continue;
} else {
}
break;
}

var c__15907__auto___18713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___18713,jobs,results,process,async){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___18713,jobs,results,process,async){
return (function (state_18598){
var state_val_18599 = (state_18598[(1)]);
if((state_val_18599 === (1))){
var state_18598__$1 = state_18598;
var statearr_18600_18714 = state_18598__$1;
(statearr_18600_18714[(2)] = null);

(statearr_18600_18714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18599 === (2))){
var state_18598__$1 = state_18598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18598__$1,(4),from);
} else {
if((state_val_18599 === (3))){
var inst_18596 = (state_18598[(2)]);
var state_18598__$1 = state_18598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18598__$1,inst_18596);
} else {
if((state_val_18599 === (4))){
var inst_18579 = (state_18598[(7)]);
var inst_18579__$1 = (state_18598[(2)]);
var inst_18580 = (inst_18579__$1 == null);
var state_18598__$1 = (function (){var statearr_18601 = state_18598;
(statearr_18601[(7)] = inst_18579__$1);

return statearr_18601;
})();
if(cljs.core.truth_(inst_18580)){
var statearr_18602_18715 = state_18598__$1;
(statearr_18602_18715[(1)] = (5));

} else {
var statearr_18603_18716 = state_18598__$1;
(statearr_18603_18716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18599 === (5))){
var inst_18582 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18598__$1 = state_18598;
var statearr_18604_18717 = state_18598__$1;
(statearr_18604_18717[(2)] = inst_18582);

(statearr_18604_18717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18599 === (6))){
var inst_18584 = (state_18598[(8)]);
var inst_18579 = (state_18598[(7)]);
var inst_18584__$1 = cljs.core.async.chan.call(null,(1));
var inst_18585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18586 = [inst_18579,inst_18584__$1];
var inst_18587 = (new cljs.core.PersistentVector(null,2,(5),inst_18585,inst_18586,null));
var state_18598__$1 = (function (){var statearr_18605 = state_18598;
(statearr_18605[(8)] = inst_18584__$1);

return statearr_18605;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18598__$1,(8),jobs,inst_18587);
} else {
if((state_val_18599 === (7))){
var inst_18594 = (state_18598[(2)]);
var state_18598__$1 = state_18598;
var statearr_18606_18718 = state_18598__$1;
(statearr_18606_18718[(2)] = inst_18594);

(statearr_18606_18718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18599 === (8))){
var inst_18584 = (state_18598[(8)]);
var inst_18589 = (state_18598[(2)]);
var state_18598__$1 = (function (){var statearr_18607 = state_18598;
(statearr_18607[(9)] = inst_18589);

return statearr_18607;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18598__$1,(9),results,inst_18584);
} else {
if((state_val_18599 === (9))){
var inst_18591 = (state_18598[(2)]);
var state_18598__$1 = (function (){var statearr_18608 = state_18598;
(statearr_18608[(10)] = inst_18591);

return statearr_18608;
})();
var statearr_18609_18719 = state_18598__$1;
(statearr_18609_18719[(2)] = null);

(statearr_18609_18719[(1)] = (2));


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
});})(c__15907__auto___18713,jobs,results,process,async))
;
return ((function (switch__15842__auto__,c__15907__auto___18713,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0 = (function (){
var statearr_18613 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__);

(statearr_18613[(1)] = (1));

return statearr_18613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1 = (function (state_18598){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_18598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e18614){if((e18614 instanceof Object)){
var ex__15846__auto__ = e18614;
var statearr_18615_18720 = state_18598;
(statearr_18615_18720[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18721 = state_18598;
state_18598 = G__18721;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__ = function(state_18598){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1.call(this,state_18598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___18713,jobs,results,process,async))
})();
var state__15909__auto__ = (function (){var statearr_18616 = f__15908__auto__.call(null);
(statearr_18616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___18713);

return statearr_18616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___18713,jobs,results,process,async))
);


var c__15907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto__,jobs,results,process,async){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto__,jobs,results,process,async){
return (function (state_18654){
var state_val_18655 = (state_18654[(1)]);
if((state_val_18655 === (7))){
var inst_18650 = (state_18654[(2)]);
var state_18654__$1 = state_18654;
var statearr_18656_18722 = state_18654__$1;
(statearr_18656_18722[(2)] = inst_18650);

(statearr_18656_18722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (20))){
var state_18654__$1 = state_18654;
var statearr_18657_18723 = state_18654__$1;
(statearr_18657_18723[(2)] = null);

(statearr_18657_18723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (1))){
var state_18654__$1 = state_18654;
var statearr_18658_18724 = state_18654__$1;
(statearr_18658_18724[(2)] = null);

(statearr_18658_18724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (4))){
var inst_18619 = (state_18654[(7)]);
var inst_18619__$1 = (state_18654[(2)]);
var inst_18620 = (inst_18619__$1 == null);
var state_18654__$1 = (function (){var statearr_18659 = state_18654;
(statearr_18659[(7)] = inst_18619__$1);

return statearr_18659;
})();
if(cljs.core.truth_(inst_18620)){
var statearr_18660_18725 = state_18654__$1;
(statearr_18660_18725[(1)] = (5));

} else {
var statearr_18661_18726 = state_18654__$1;
(statearr_18661_18726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (15))){
var inst_18632 = (state_18654[(8)]);
var state_18654__$1 = state_18654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18654__$1,(18),to,inst_18632);
} else {
if((state_val_18655 === (21))){
var inst_18645 = (state_18654[(2)]);
var state_18654__$1 = state_18654;
var statearr_18662_18727 = state_18654__$1;
(statearr_18662_18727[(2)] = inst_18645);

(statearr_18662_18727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (13))){
var inst_18647 = (state_18654[(2)]);
var state_18654__$1 = (function (){var statearr_18663 = state_18654;
(statearr_18663[(9)] = inst_18647);

return statearr_18663;
})();
var statearr_18664_18728 = state_18654__$1;
(statearr_18664_18728[(2)] = null);

(statearr_18664_18728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (6))){
var inst_18619 = (state_18654[(7)]);
var state_18654__$1 = state_18654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18654__$1,(11),inst_18619);
} else {
if((state_val_18655 === (17))){
var inst_18640 = (state_18654[(2)]);
var state_18654__$1 = state_18654;
if(cljs.core.truth_(inst_18640)){
var statearr_18665_18729 = state_18654__$1;
(statearr_18665_18729[(1)] = (19));

} else {
var statearr_18666_18730 = state_18654__$1;
(statearr_18666_18730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (3))){
var inst_18652 = (state_18654[(2)]);
var state_18654__$1 = state_18654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18654__$1,inst_18652);
} else {
if((state_val_18655 === (12))){
var inst_18629 = (state_18654[(10)]);
var state_18654__$1 = state_18654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18654__$1,(14),inst_18629);
} else {
if((state_val_18655 === (2))){
var state_18654__$1 = state_18654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18654__$1,(4),results);
} else {
if((state_val_18655 === (19))){
var state_18654__$1 = state_18654;
var statearr_18667_18731 = state_18654__$1;
(statearr_18667_18731[(2)] = null);

(statearr_18667_18731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (11))){
var inst_18629 = (state_18654[(2)]);
var state_18654__$1 = (function (){var statearr_18668 = state_18654;
(statearr_18668[(10)] = inst_18629);

return statearr_18668;
})();
var statearr_18669_18732 = state_18654__$1;
(statearr_18669_18732[(2)] = null);

(statearr_18669_18732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (9))){
var state_18654__$1 = state_18654;
var statearr_18670_18733 = state_18654__$1;
(statearr_18670_18733[(2)] = null);

(statearr_18670_18733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (5))){
var state_18654__$1 = state_18654;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18671_18734 = state_18654__$1;
(statearr_18671_18734[(1)] = (8));

} else {
var statearr_18672_18735 = state_18654__$1;
(statearr_18672_18735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (14))){
var inst_18632 = (state_18654[(8)]);
var inst_18634 = (state_18654[(11)]);
var inst_18632__$1 = (state_18654[(2)]);
var inst_18633 = (inst_18632__$1 == null);
var inst_18634__$1 = cljs.core.not.call(null,inst_18633);
var state_18654__$1 = (function (){var statearr_18673 = state_18654;
(statearr_18673[(8)] = inst_18632__$1);

(statearr_18673[(11)] = inst_18634__$1);

return statearr_18673;
})();
if(inst_18634__$1){
var statearr_18674_18736 = state_18654__$1;
(statearr_18674_18736[(1)] = (15));

} else {
var statearr_18675_18737 = state_18654__$1;
(statearr_18675_18737[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (16))){
var inst_18634 = (state_18654[(11)]);
var state_18654__$1 = state_18654;
var statearr_18676_18738 = state_18654__$1;
(statearr_18676_18738[(2)] = inst_18634);

(statearr_18676_18738[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (10))){
var inst_18626 = (state_18654[(2)]);
var state_18654__$1 = state_18654;
var statearr_18677_18739 = state_18654__$1;
(statearr_18677_18739[(2)] = inst_18626);

(statearr_18677_18739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (18))){
var inst_18637 = (state_18654[(2)]);
var state_18654__$1 = state_18654;
var statearr_18678_18740 = state_18654__$1;
(statearr_18678_18740[(2)] = inst_18637);

(statearr_18678_18740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (8))){
var inst_18623 = cljs.core.async.close_BANG_.call(null,to);
var state_18654__$1 = state_18654;
var statearr_18679_18741 = state_18654__$1;
(statearr_18679_18741[(2)] = inst_18623);

(statearr_18679_18741[(1)] = (10));


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
});})(c__15907__auto__,jobs,results,process,async))
;
return ((function (switch__15842__auto__,c__15907__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0 = (function (){
var statearr_18683 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__);

(statearr_18683[(1)] = (1));

return statearr_18683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1 = (function (state_18654){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_18654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e18684){if((e18684 instanceof Object)){
var ex__15846__auto__ = e18684;
var statearr_18685_18742 = state_18654;
(statearr_18685_18742[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18743 = state_18654;
state_18654 = G__18743;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__ = function(state_18654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1.call(this,state_18654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto__,jobs,results,process,async))
})();
var state__15909__auto__ = (function (){var statearr_18686 = f__15908__auto__.call(null);
(statearr_18686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto__);

return statearr_18686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto__,jobs,results,process,async))
);

return c__15907__auto__;
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
var args18744 = [];
var len__14436__auto___18747 = arguments.length;
var i__14437__auto___18748 = (0);
while(true){
if((i__14437__auto___18748 < len__14436__auto___18747)){
args18744.push((arguments[i__14437__auto___18748]));

var G__18749 = (i__14437__auto___18748 + (1));
i__14437__auto___18748 = G__18749;
continue;
} else {
}
break;
}

var G__18746 = args18744.length;
switch (G__18746) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18744.length)].join('')));

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
var args18751 = [];
var len__14436__auto___18754 = arguments.length;
var i__14437__auto___18755 = (0);
while(true){
if((i__14437__auto___18755 < len__14436__auto___18754)){
args18751.push((arguments[i__14437__auto___18755]));

var G__18756 = (i__14437__auto___18755 + (1));
i__14437__auto___18755 = G__18756;
continue;
} else {
}
break;
}

var G__18753 = args18751.length;
switch (G__18753) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18751.length)].join('')));

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
var args18758 = [];
var len__14436__auto___18811 = arguments.length;
var i__14437__auto___18812 = (0);
while(true){
if((i__14437__auto___18812 < len__14436__auto___18811)){
args18758.push((arguments[i__14437__auto___18812]));

var G__18813 = (i__14437__auto___18812 + (1));
i__14437__auto___18812 = G__18813;
continue;
} else {
}
break;
}

var G__18760 = args18758.length;
switch (G__18760) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18758.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15907__auto___18815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___18815,tc,fc){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___18815,tc,fc){
return (function (state_18786){
var state_val_18787 = (state_18786[(1)]);
if((state_val_18787 === (7))){
var inst_18782 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
var statearr_18788_18816 = state_18786__$1;
(statearr_18788_18816[(2)] = inst_18782);

(statearr_18788_18816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18787 === (1))){
var state_18786__$1 = state_18786;
var statearr_18789_18817 = state_18786__$1;
(statearr_18789_18817[(2)] = null);

(statearr_18789_18817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18787 === (4))){
var inst_18763 = (state_18786[(7)]);
var inst_18763__$1 = (state_18786[(2)]);
var inst_18764 = (inst_18763__$1 == null);
var state_18786__$1 = (function (){var statearr_18790 = state_18786;
(statearr_18790[(7)] = inst_18763__$1);

return statearr_18790;
})();
if(cljs.core.truth_(inst_18764)){
var statearr_18791_18818 = state_18786__$1;
(statearr_18791_18818[(1)] = (5));

} else {
var statearr_18792_18819 = state_18786__$1;
(statearr_18792_18819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18787 === (13))){
var state_18786__$1 = state_18786;
var statearr_18793_18820 = state_18786__$1;
(statearr_18793_18820[(2)] = null);

(statearr_18793_18820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18787 === (6))){
var inst_18763 = (state_18786[(7)]);
var inst_18769 = p.call(null,inst_18763);
var state_18786__$1 = state_18786;
if(cljs.core.truth_(inst_18769)){
var statearr_18794_18821 = state_18786__$1;
(statearr_18794_18821[(1)] = (9));

} else {
var statearr_18795_18822 = state_18786__$1;
(statearr_18795_18822[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18787 === (3))){
var inst_18784 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18786__$1,inst_18784);
} else {
if((state_val_18787 === (12))){
var state_18786__$1 = state_18786;
var statearr_18796_18823 = state_18786__$1;
(statearr_18796_18823[(2)] = null);

(statearr_18796_18823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18787 === (2))){
var state_18786__$1 = state_18786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18786__$1,(4),ch);
} else {
if((state_val_18787 === (11))){
var inst_18763 = (state_18786[(7)]);
var inst_18773 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18786__$1,(8),inst_18773,inst_18763);
} else {
if((state_val_18787 === (9))){
var state_18786__$1 = state_18786;
var statearr_18797_18824 = state_18786__$1;
(statearr_18797_18824[(2)] = tc);

(statearr_18797_18824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18787 === (5))){
var inst_18766 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18767 = cljs.core.async.close_BANG_.call(null,fc);
var state_18786__$1 = (function (){var statearr_18798 = state_18786;
(statearr_18798[(8)] = inst_18766);

return statearr_18798;
})();
var statearr_18799_18825 = state_18786__$1;
(statearr_18799_18825[(2)] = inst_18767);

(statearr_18799_18825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18787 === (14))){
var inst_18780 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
var statearr_18800_18826 = state_18786__$1;
(statearr_18800_18826[(2)] = inst_18780);

(statearr_18800_18826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18787 === (10))){
var state_18786__$1 = state_18786;
var statearr_18801_18827 = state_18786__$1;
(statearr_18801_18827[(2)] = fc);

(statearr_18801_18827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18787 === (8))){
var inst_18775 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
if(cljs.core.truth_(inst_18775)){
var statearr_18802_18828 = state_18786__$1;
(statearr_18802_18828[(1)] = (12));

} else {
var statearr_18803_18829 = state_18786__$1;
(statearr_18803_18829[(1)] = (13));

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
});})(c__15907__auto___18815,tc,fc))
;
return ((function (switch__15842__auto__,c__15907__auto___18815,tc,fc){
return (function() {
var cljs$core$async$state_machine__15843__auto__ = null;
var cljs$core$async$state_machine__15843__auto____0 = (function (){
var statearr_18807 = [null,null,null,null,null,null,null,null,null];
(statearr_18807[(0)] = cljs$core$async$state_machine__15843__auto__);

(statearr_18807[(1)] = (1));

return statearr_18807;
});
var cljs$core$async$state_machine__15843__auto____1 = (function (state_18786){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_18786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e18808){if((e18808 instanceof Object)){
var ex__15846__auto__ = e18808;
var statearr_18809_18830 = state_18786;
(statearr_18809_18830[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18831 = state_18786;
state_18786 = G__18831;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$state_machine__15843__auto__ = function(state_18786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15843__auto____1.call(this,state_18786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15843__auto____0;
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15843__auto____1;
return cljs$core$async$state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___18815,tc,fc))
})();
var state__15909__auto__ = (function (){var statearr_18810 = f__15908__auto__.call(null);
(statearr_18810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___18815);

return statearr_18810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___18815,tc,fc))
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
var c__15907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto__){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto__){
return (function (state_18895){
var state_val_18896 = (state_18895[(1)]);
if((state_val_18896 === (7))){
var inst_18891 = (state_18895[(2)]);
var state_18895__$1 = state_18895;
var statearr_18897_18918 = state_18895__$1;
(statearr_18897_18918[(2)] = inst_18891);

(statearr_18897_18918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18896 === (1))){
var inst_18875 = init;
var state_18895__$1 = (function (){var statearr_18898 = state_18895;
(statearr_18898[(7)] = inst_18875);

return statearr_18898;
})();
var statearr_18899_18919 = state_18895__$1;
(statearr_18899_18919[(2)] = null);

(statearr_18899_18919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18896 === (4))){
var inst_18878 = (state_18895[(8)]);
var inst_18878__$1 = (state_18895[(2)]);
var inst_18879 = (inst_18878__$1 == null);
var state_18895__$1 = (function (){var statearr_18900 = state_18895;
(statearr_18900[(8)] = inst_18878__$1);

return statearr_18900;
})();
if(cljs.core.truth_(inst_18879)){
var statearr_18901_18920 = state_18895__$1;
(statearr_18901_18920[(1)] = (5));

} else {
var statearr_18902_18921 = state_18895__$1;
(statearr_18902_18921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18896 === (6))){
var inst_18878 = (state_18895[(8)]);
var inst_18875 = (state_18895[(7)]);
var inst_18882 = (state_18895[(9)]);
var inst_18882__$1 = f.call(null,inst_18875,inst_18878);
var inst_18883 = cljs.core.reduced_QMARK_.call(null,inst_18882__$1);
var state_18895__$1 = (function (){var statearr_18903 = state_18895;
(statearr_18903[(9)] = inst_18882__$1);

return statearr_18903;
})();
if(inst_18883){
var statearr_18904_18922 = state_18895__$1;
(statearr_18904_18922[(1)] = (8));

} else {
var statearr_18905_18923 = state_18895__$1;
(statearr_18905_18923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18896 === (3))){
var inst_18893 = (state_18895[(2)]);
var state_18895__$1 = state_18895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18895__$1,inst_18893);
} else {
if((state_val_18896 === (2))){
var state_18895__$1 = state_18895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18895__$1,(4),ch);
} else {
if((state_val_18896 === (9))){
var inst_18882 = (state_18895[(9)]);
var inst_18875 = inst_18882;
var state_18895__$1 = (function (){var statearr_18906 = state_18895;
(statearr_18906[(7)] = inst_18875);

return statearr_18906;
})();
var statearr_18907_18924 = state_18895__$1;
(statearr_18907_18924[(2)] = null);

(statearr_18907_18924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18896 === (5))){
var inst_18875 = (state_18895[(7)]);
var state_18895__$1 = state_18895;
var statearr_18908_18925 = state_18895__$1;
(statearr_18908_18925[(2)] = inst_18875);

(statearr_18908_18925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18896 === (10))){
var inst_18889 = (state_18895[(2)]);
var state_18895__$1 = state_18895;
var statearr_18909_18926 = state_18895__$1;
(statearr_18909_18926[(2)] = inst_18889);

(statearr_18909_18926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18896 === (8))){
var inst_18882 = (state_18895[(9)]);
var inst_18885 = cljs.core.deref.call(null,inst_18882);
var state_18895__$1 = state_18895;
var statearr_18910_18927 = state_18895__$1;
(statearr_18910_18927[(2)] = inst_18885);

(statearr_18910_18927[(1)] = (10));


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
});})(c__15907__auto__))
;
return ((function (switch__15842__auto__,c__15907__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15843__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15843__auto____0 = (function (){
var statearr_18914 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18914[(0)] = cljs$core$async$reduce_$_state_machine__15843__auto__);

(statearr_18914[(1)] = (1));

return statearr_18914;
});
var cljs$core$async$reduce_$_state_machine__15843__auto____1 = (function (state_18895){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_18895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e18915){if((e18915 instanceof Object)){
var ex__15846__auto__ = e18915;
var statearr_18916_18928 = state_18895;
(statearr_18916_18928[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18929 = state_18895;
state_18895 = G__18929;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15843__auto__ = function(state_18895){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15843__auto____1.call(this,state_18895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15843__auto____0;
cljs$core$async$reduce_$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15843__auto____1;
return cljs$core$async$reduce_$_state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto__))
})();
var state__15909__auto__ = (function (){var statearr_18917 = f__15908__auto__.call(null);
(statearr_18917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto__);

return statearr_18917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto__))
);

return c__15907__auto__;
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
var args18930 = [];
var len__14436__auto___18982 = arguments.length;
var i__14437__auto___18983 = (0);
while(true){
if((i__14437__auto___18983 < len__14436__auto___18982)){
args18930.push((arguments[i__14437__auto___18983]));

var G__18984 = (i__14437__auto___18983 + (1));
i__14437__auto___18983 = G__18984;
continue;
} else {
}
break;
}

var G__18932 = args18930.length;
switch (G__18932) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18930.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto__){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto__){
return (function (state_18957){
var state_val_18958 = (state_18957[(1)]);
if((state_val_18958 === (7))){
var inst_18939 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
var statearr_18959_18986 = state_18957__$1;
(statearr_18959_18986[(2)] = inst_18939);

(statearr_18959_18986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (1))){
var inst_18933 = cljs.core.seq.call(null,coll);
var inst_18934 = inst_18933;
var state_18957__$1 = (function (){var statearr_18960 = state_18957;
(statearr_18960[(7)] = inst_18934);

return statearr_18960;
})();
var statearr_18961_18987 = state_18957__$1;
(statearr_18961_18987[(2)] = null);

(statearr_18961_18987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (4))){
var inst_18934 = (state_18957[(7)]);
var inst_18937 = cljs.core.first.call(null,inst_18934);
var state_18957__$1 = state_18957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18957__$1,(7),ch,inst_18937);
} else {
if((state_val_18958 === (13))){
var inst_18951 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
var statearr_18962_18988 = state_18957__$1;
(statearr_18962_18988[(2)] = inst_18951);

(statearr_18962_18988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (6))){
var inst_18942 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
if(cljs.core.truth_(inst_18942)){
var statearr_18963_18989 = state_18957__$1;
(statearr_18963_18989[(1)] = (8));

} else {
var statearr_18964_18990 = state_18957__$1;
(statearr_18964_18990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (3))){
var inst_18955 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18957__$1,inst_18955);
} else {
if((state_val_18958 === (12))){
var state_18957__$1 = state_18957;
var statearr_18965_18991 = state_18957__$1;
(statearr_18965_18991[(2)] = null);

(statearr_18965_18991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (2))){
var inst_18934 = (state_18957[(7)]);
var state_18957__$1 = state_18957;
if(cljs.core.truth_(inst_18934)){
var statearr_18966_18992 = state_18957__$1;
(statearr_18966_18992[(1)] = (4));

} else {
var statearr_18967_18993 = state_18957__$1;
(statearr_18967_18993[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (11))){
var inst_18948 = cljs.core.async.close_BANG_.call(null,ch);
var state_18957__$1 = state_18957;
var statearr_18968_18994 = state_18957__$1;
(statearr_18968_18994[(2)] = inst_18948);

(statearr_18968_18994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (9))){
var state_18957__$1 = state_18957;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18969_18995 = state_18957__$1;
(statearr_18969_18995[(1)] = (11));

} else {
var statearr_18970_18996 = state_18957__$1;
(statearr_18970_18996[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (5))){
var inst_18934 = (state_18957[(7)]);
var state_18957__$1 = state_18957;
var statearr_18971_18997 = state_18957__$1;
(statearr_18971_18997[(2)] = inst_18934);

(statearr_18971_18997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (10))){
var inst_18953 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
var statearr_18972_18998 = state_18957__$1;
(statearr_18972_18998[(2)] = inst_18953);

(statearr_18972_18998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (8))){
var inst_18934 = (state_18957[(7)]);
var inst_18944 = cljs.core.next.call(null,inst_18934);
var inst_18934__$1 = inst_18944;
var state_18957__$1 = (function (){var statearr_18973 = state_18957;
(statearr_18973[(7)] = inst_18934__$1);

return statearr_18973;
})();
var statearr_18974_18999 = state_18957__$1;
(statearr_18974_18999[(2)] = null);

(statearr_18974_18999[(1)] = (2));


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
});})(c__15907__auto__))
;
return ((function (switch__15842__auto__,c__15907__auto__){
return (function() {
var cljs$core$async$state_machine__15843__auto__ = null;
var cljs$core$async$state_machine__15843__auto____0 = (function (){
var statearr_18978 = [null,null,null,null,null,null,null,null];
(statearr_18978[(0)] = cljs$core$async$state_machine__15843__auto__);

(statearr_18978[(1)] = (1));

return statearr_18978;
});
var cljs$core$async$state_machine__15843__auto____1 = (function (state_18957){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_18957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e18979){if((e18979 instanceof Object)){
var ex__15846__auto__ = e18979;
var statearr_18980_19000 = state_18957;
(statearr_18980_19000[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19001 = state_18957;
state_18957 = G__19001;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$state_machine__15843__auto__ = function(state_18957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15843__auto____1.call(this,state_18957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15843__auto____0;
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15843__auto____1;
return cljs$core$async$state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto__))
})();
var state__15909__auto__ = (function (){var statearr_18981 = f__15908__auto__.call(null);
(statearr_18981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto__);

return statearr_18981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto__))
);

return c__15907__auto__;
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
var x__14033__auto__ = (((_ == null))?null:_);
var m__14034__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,_);
} else {
var m__14034__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,_);
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
var x__14033__auto__ = (((m == null))?null:m);
var m__14034__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__14034__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__14033__auto__ = (((m == null))?null:m);
var m__14034__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,m,ch);
} else {
var m__14034__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,m,ch);
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
var x__14033__auto__ = (((m == null))?null:m);
var m__14034__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,m);
} else {
var m__14034__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async19223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19223 = (function (mult,ch,cs,meta19224){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta19224 = meta19224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19225,meta19224__$1){
var self__ = this;
var _19225__$1 = this;
return (new cljs.core.async.t_cljs$core$async19223(self__.mult,self__.ch,self__.cs,meta19224__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19225){
var self__ = this;
var _19225__$1 = this;
return self__.meta19224;
});})(cs))
;

cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19223.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19224","meta19224",-1613615279,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19223";

cljs.core.async.t_cljs$core$async19223.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13976__auto__,writer__13977__auto__,opt__13978__auto__){
return cljs.core._write.call(null,writer__13977__auto__,"cljs.core.async/t_cljs$core$async19223");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19223 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19223(mult__$1,ch__$1,cs__$1,meta19224){
return (new cljs.core.async.t_cljs$core$async19223(mult__$1,ch__$1,cs__$1,meta19224));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19223(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15907__auto___19444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___19444,cs,m,dchan,dctr,done){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___19444,cs,m,dchan,dctr,done){
return (function (state_19356){
var state_val_19357 = (state_19356[(1)]);
if((state_val_19357 === (7))){
var inst_19352 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
var statearr_19358_19445 = state_19356__$1;
(statearr_19358_19445[(2)] = inst_19352);

(statearr_19358_19445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (20))){
var inst_19257 = (state_19356[(7)]);
var inst_19267 = cljs.core.first.call(null,inst_19257);
var inst_19268 = cljs.core.nth.call(null,inst_19267,(0),null);
var inst_19269 = cljs.core.nth.call(null,inst_19267,(1),null);
var state_19356__$1 = (function (){var statearr_19359 = state_19356;
(statearr_19359[(8)] = inst_19268);

return statearr_19359;
})();
if(cljs.core.truth_(inst_19269)){
var statearr_19360_19446 = state_19356__$1;
(statearr_19360_19446[(1)] = (22));

} else {
var statearr_19361_19447 = state_19356__$1;
(statearr_19361_19447[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (27))){
var inst_19228 = (state_19356[(9)]);
var inst_19299 = (state_19356[(10)]);
var inst_19304 = (state_19356[(11)]);
var inst_19297 = (state_19356[(12)]);
var inst_19304__$1 = cljs.core._nth.call(null,inst_19297,inst_19299);
var inst_19305 = cljs.core.async.put_BANG_.call(null,inst_19304__$1,inst_19228,done);
var state_19356__$1 = (function (){var statearr_19362 = state_19356;
(statearr_19362[(11)] = inst_19304__$1);

return statearr_19362;
})();
if(cljs.core.truth_(inst_19305)){
var statearr_19363_19448 = state_19356__$1;
(statearr_19363_19448[(1)] = (30));

} else {
var statearr_19364_19449 = state_19356__$1;
(statearr_19364_19449[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (1))){
var state_19356__$1 = state_19356;
var statearr_19365_19450 = state_19356__$1;
(statearr_19365_19450[(2)] = null);

(statearr_19365_19450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (24))){
var inst_19257 = (state_19356[(7)]);
var inst_19274 = (state_19356[(2)]);
var inst_19275 = cljs.core.next.call(null,inst_19257);
var inst_19237 = inst_19275;
var inst_19238 = null;
var inst_19239 = (0);
var inst_19240 = (0);
var state_19356__$1 = (function (){var statearr_19366 = state_19356;
(statearr_19366[(13)] = inst_19237);

(statearr_19366[(14)] = inst_19240);

(statearr_19366[(15)] = inst_19238);

(statearr_19366[(16)] = inst_19274);

(statearr_19366[(17)] = inst_19239);

return statearr_19366;
})();
var statearr_19367_19451 = state_19356__$1;
(statearr_19367_19451[(2)] = null);

(statearr_19367_19451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (39))){
var state_19356__$1 = state_19356;
var statearr_19371_19452 = state_19356__$1;
(statearr_19371_19452[(2)] = null);

(statearr_19371_19452[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (4))){
var inst_19228 = (state_19356[(9)]);
var inst_19228__$1 = (state_19356[(2)]);
var inst_19229 = (inst_19228__$1 == null);
var state_19356__$1 = (function (){var statearr_19372 = state_19356;
(statearr_19372[(9)] = inst_19228__$1);

return statearr_19372;
})();
if(cljs.core.truth_(inst_19229)){
var statearr_19373_19453 = state_19356__$1;
(statearr_19373_19453[(1)] = (5));

} else {
var statearr_19374_19454 = state_19356__$1;
(statearr_19374_19454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (15))){
var inst_19237 = (state_19356[(13)]);
var inst_19240 = (state_19356[(14)]);
var inst_19238 = (state_19356[(15)]);
var inst_19239 = (state_19356[(17)]);
var inst_19253 = (state_19356[(2)]);
var inst_19254 = (inst_19240 + (1));
var tmp19368 = inst_19237;
var tmp19369 = inst_19238;
var tmp19370 = inst_19239;
var inst_19237__$1 = tmp19368;
var inst_19238__$1 = tmp19369;
var inst_19239__$1 = tmp19370;
var inst_19240__$1 = inst_19254;
var state_19356__$1 = (function (){var statearr_19375 = state_19356;
(statearr_19375[(13)] = inst_19237__$1);

(statearr_19375[(18)] = inst_19253);

(statearr_19375[(14)] = inst_19240__$1);

(statearr_19375[(15)] = inst_19238__$1);

(statearr_19375[(17)] = inst_19239__$1);

return statearr_19375;
})();
var statearr_19376_19455 = state_19356__$1;
(statearr_19376_19455[(2)] = null);

(statearr_19376_19455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (21))){
var inst_19278 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
var statearr_19380_19456 = state_19356__$1;
(statearr_19380_19456[(2)] = inst_19278);

(statearr_19380_19456[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (31))){
var inst_19304 = (state_19356[(11)]);
var inst_19308 = done.call(null,null);
var inst_19309 = cljs.core.async.untap_STAR_.call(null,m,inst_19304);
var state_19356__$1 = (function (){var statearr_19381 = state_19356;
(statearr_19381[(19)] = inst_19308);

return statearr_19381;
})();
var statearr_19382_19457 = state_19356__$1;
(statearr_19382_19457[(2)] = inst_19309);

(statearr_19382_19457[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (32))){
var inst_19299 = (state_19356[(10)]);
var inst_19296 = (state_19356[(20)]);
var inst_19298 = (state_19356[(21)]);
var inst_19297 = (state_19356[(12)]);
var inst_19311 = (state_19356[(2)]);
var inst_19312 = (inst_19299 + (1));
var tmp19377 = inst_19296;
var tmp19378 = inst_19298;
var tmp19379 = inst_19297;
var inst_19296__$1 = tmp19377;
var inst_19297__$1 = tmp19379;
var inst_19298__$1 = tmp19378;
var inst_19299__$1 = inst_19312;
var state_19356__$1 = (function (){var statearr_19383 = state_19356;
(statearr_19383[(10)] = inst_19299__$1);

(statearr_19383[(22)] = inst_19311);

(statearr_19383[(20)] = inst_19296__$1);

(statearr_19383[(21)] = inst_19298__$1);

(statearr_19383[(12)] = inst_19297__$1);

return statearr_19383;
})();
var statearr_19384_19458 = state_19356__$1;
(statearr_19384_19458[(2)] = null);

(statearr_19384_19458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (40))){
var inst_19324 = (state_19356[(23)]);
var inst_19328 = done.call(null,null);
var inst_19329 = cljs.core.async.untap_STAR_.call(null,m,inst_19324);
var state_19356__$1 = (function (){var statearr_19385 = state_19356;
(statearr_19385[(24)] = inst_19328);

return statearr_19385;
})();
var statearr_19386_19459 = state_19356__$1;
(statearr_19386_19459[(2)] = inst_19329);

(statearr_19386_19459[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (33))){
var inst_19315 = (state_19356[(25)]);
var inst_19317 = cljs.core.chunked_seq_QMARK_.call(null,inst_19315);
var state_19356__$1 = state_19356;
if(inst_19317){
var statearr_19387_19460 = state_19356__$1;
(statearr_19387_19460[(1)] = (36));

} else {
var statearr_19388_19461 = state_19356__$1;
(statearr_19388_19461[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (13))){
var inst_19247 = (state_19356[(26)]);
var inst_19250 = cljs.core.async.close_BANG_.call(null,inst_19247);
var state_19356__$1 = state_19356;
var statearr_19389_19462 = state_19356__$1;
(statearr_19389_19462[(2)] = inst_19250);

(statearr_19389_19462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (22))){
var inst_19268 = (state_19356[(8)]);
var inst_19271 = cljs.core.async.close_BANG_.call(null,inst_19268);
var state_19356__$1 = state_19356;
var statearr_19390_19463 = state_19356__$1;
(statearr_19390_19463[(2)] = inst_19271);

(statearr_19390_19463[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (36))){
var inst_19315 = (state_19356[(25)]);
var inst_19319 = cljs.core.chunk_first.call(null,inst_19315);
var inst_19320 = cljs.core.chunk_rest.call(null,inst_19315);
var inst_19321 = cljs.core.count.call(null,inst_19319);
var inst_19296 = inst_19320;
var inst_19297 = inst_19319;
var inst_19298 = inst_19321;
var inst_19299 = (0);
var state_19356__$1 = (function (){var statearr_19391 = state_19356;
(statearr_19391[(10)] = inst_19299);

(statearr_19391[(20)] = inst_19296);

(statearr_19391[(21)] = inst_19298);

(statearr_19391[(12)] = inst_19297);

return statearr_19391;
})();
var statearr_19392_19464 = state_19356__$1;
(statearr_19392_19464[(2)] = null);

(statearr_19392_19464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (41))){
var inst_19315 = (state_19356[(25)]);
var inst_19331 = (state_19356[(2)]);
var inst_19332 = cljs.core.next.call(null,inst_19315);
var inst_19296 = inst_19332;
var inst_19297 = null;
var inst_19298 = (0);
var inst_19299 = (0);
var state_19356__$1 = (function (){var statearr_19393 = state_19356;
(statearr_19393[(27)] = inst_19331);

(statearr_19393[(10)] = inst_19299);

(statearr_19393[(20)] = inst_19296);

(statearr_19393[(21)] = inst_19298);

(statearr_19393[(12)] = inst_19297);

return statearr_19393;
})();
var statearr_19394_19465 = state_19356__$1;
(statearr_19394_19465[(2)] = null);

(statearr_19394_19465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (43))){
var state_19356__$1 = state_19356;
var statearr_19395_19466 = state_19356__$1;
(statearr_19395_19466[(2)] = null);

(statearr_19395_19466[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (29))){
var inst_19340 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
var statearr_19396_19467 = state_19356__$1;
(statearr_19396_19467[(2)] = inst_19340);

(statearr_19396_19467[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (44))){
var inst_19349 = (state_19356[(2)]);
var state_19356__$1 = (function (){var statearr_19397 = state_19356;
(statearr_19397[(28)] = inst_19349);

return statearr_19397;
})();
var statearr_19398_19468 = state_19356__$1;
(statearr_19398_19468[(2)] = null);

(statearr_19398_19468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (6))){
var inst_19288 = (state_19356[(29)]);
var inst_19287 = cljs.core.deref.call(null,cs);
var inst_19288__$1 = cljs.core.keys.call(null,inst_19287);
var inst_19289 = cljs.core.count.call(null,inst_19288__$1);
var inst_19290 = cljs.core.reset_BANG_.call(null,dctr,inst_19289);
var inst_19295 = cljs.core.seq.call(null,inst_19288__$1);
var inst_19296 = inst_19295;
var inst_19297 = null;
var inst_19298 = (0);
var inst_19299 = (0);
var state_19356__$1 = (function (){var statearr_19399 = state_19356;
(statearr_19399[(10)] = inst_19299);

(statearr_19399[(20)] = inst_19296);

(statearr_19399[(30)] = inst_19290);

(statearr_19399[(21)] = inst_19298);

(statearr_19399[(29)] = inst_19288__$1);

(statearr_19399[(12)] = inst_19297);

return statearr_19399;
})();
var statearr_19400_19469 = state_19356__$1;
(statearr_19400_19469[(2)] = null);

(statearr_19400_19469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (28))){
var inst_19296 = (state_19356[(20)]);
var inst_19315 = (state_19356[(25)]);
var inst_19315__$1 = cljs.core.seq.call(null,inst_19296);
var state_19356__$1 = (function (){var statearr_19401 = state_19356;
(statearr_19401[(25)] = inst_19315__$1);

return statearr_19401;
})();
if(inst_19315__$1){
var statearr_19402_19470 = state_19356__$1;
(statearr_19402_19470[(1)] = (33));

} else {
var statearr_19403_19471 = state_19356__$1;
(statearr_19403_19471[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (25))){
var inst_19299 = (state_19356[(10)]);
var inst_19298 = (state_19356[(21)]);
var inst_19301 = (inst_19299 < inst_19298);
var inst_19302 = inst_19301;
var state_19356__$1 = state_19356;
if(cljs.core.truth_(inst_19302)){
var statearr_19404_19472 = state_19356__$1;
(statearr_19404_19472[(1)] = (27));

} else {
var statearr_19405_19473 = state_19356__$1;
(statearr_19405_19473[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (34))){
var state_19356__$1 = state_19356;
var statearr_19406_19474 = state_19356__$1;
(statearr_19406_19474[(2)] = null);

(statearr_19406_19474[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (17))){
var state_19356__$1 = state_19356;
var statearr_19407_19475 = state_19356__$1;
(statearr_19407_19475[(2)] = null);

(statearr_19407_19475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (3))){
var inst_19354 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19356__$1,inst_19354);
} else {
if((state_val_19357 === (12))){
var inst_19283 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
var statearr_19408_19476 = state_19356__$1;
(statearr_19408_19476[(2)] = inst_19283);

(statearr_19408_19476[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (2))){
var state_19356__$1 = state_19356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19356__$1,(4),ch);
} else {
if((state_val_19357 === (23))){
var state_19356__$1 = state_19356;
var statearr_19409_19477 = state_19356__$1;
(statearr_19409_19477[(2)] = null);

(statearr_19409_19477[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (35))){
var inst_19338 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
var statearr_19410_19478 = state_19356__$1;
(statearr_19410_19478[(2)] = inst_19338);

(statearr_19410_19478[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (19))){
var inst_19257 = (state_19356[(7)]);
var inst_19261 = cljs.core.chunk_first.call(null,inst_19257);
var inst_19262 = cljs.core.chunk_rest.call(null,inst_19257);
var inst_19263 = cljs.core.count.call(null,inst_19261);
var inst_19237 = inst_19262;
var inst_19238 = inst_19261;
var inst_19239 = inst_19263;
var inst_19240 = (0);
var state_19356__$1 = (function (){var statearr_19411 = state_19356;
(statearr_19411[(13)] = inst_19237);

(statearr_19411[(14)] = inst_19240);

(statearr_19411[(15)] = inst_19238);

(statearr_19411[(17)] = inst_19239);

return statearr_19411;
})();
var statearr_19412_19479 = state_19356__$1;
(statearr_19412_19479[(2)] = null);

(statearr_19412_19479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (11))){
var inst_19257 = (state_19356[(7)]);
var inst_19237 = (state_19356[(13)]);
var inst_19257__$1 = cljs.core.seq.call(null,inst_19237);
var state_19356__$1 = (function (){var statearr_19413 = state_19356;
(statearr_19413[(7)] = inst_19257__$1);

return statearr_19413;
})();
if(inst_19257__$1){
var statearr_19414_19480 = state_19356__$1;
(statearr_19414_19480[(1)] = (16));

} else {
var statearr_19415_19481 = state_19356__$1;
(statearr_19415_19481[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (9))){
var inst_19285 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
var statearr_19416_19482 = state_19356__$1;
(statearr_19416_19482[(2)] = inst_19285);

(statearr_19416_19482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (5))){
var inst_19235 = cljs.core.deref.call(null,cs);
var inst_19236 = cljs.core.seq.call(null,inst_19235);
var inst_19237 = inst_19236;
var inst_19238 = null;
var inst_19239 = (0);
var inst_19240 = (0);
var state_19356__$1 = (function (){var statearr_19417 = state_19356;
(statearr_19417[(13)] = inst_19237);

(statearr_19417[(14)] = inst_19240);

(statearr_19417[(15)] = inst_19238);

(statearr_19417[(17)] = inst_19239);

return statearr_19417;
})();
var statearr_19418_19483 = state_19356__$1;
(statearr_19418_19483[(2)] = null);

(statearr_19418_19483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (14))){
var state_19356__$1 = state_19356;
var statearr_19419_19484 = state_19356__$1;
(statearr_19419_19484[(2)] = null);

(statearr_19419_19484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (45))){
var inst_19346 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
var statearr_19420_19485 = state_19356__$1;
(statearr_19420_19485[(2)] = inst_19346);

(statearr_19420_19485[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (26))){
var inst_19288 = (state_19356[(29)]);
var inst_19342 = (state_19356[(2)]);
var inst_19343 = cljs.core.seq.call(null,inst_19288);
var state_19356__$1 = (function (){var statearr_19421 = state_19356;
(statearr_19421[(31)] = inst_19342);

return statearr_19421;
})();
if(inst_19343){
var statearr_19422_19486 = state_19356__$1;
(statearr_19422_19486[(1)] = (42));

} else {
var statearr_19423_19487 = state_19356__$1;
(statearr_19423_19487[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (16))){
var inst_19257 = (state_19356[(7)]);
var inst_19259 = cljs.core.chunked_seq_QMARK_.call(null,inst_19257);
var state_19356__$1 = state_19356;
if(inst_19259){
var statearr_19424_19488 = state_19356__$1;
(statearr_19424_19488[(1)] = (19));

} else {
var statearr_19425_19489 = state_19356__$1;
(statearr_19425_19489[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (38))){
var inst_19335 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
var statearr_19426_19490 = state_19356__$1;
(statearr_19426_19490[(2)] = inst_19335);

(statearr_19426_19490[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (30))){
var state_19356__$1 = state_19356;
var statearr_19427_19491 = state_19356__$1;
(statearr_19427_19491[(2)] = null);

(statearr_19427_19491[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (10))){
var inst_19240 = (state_19356[(14)]);
var inst_19238 = (state_19356[(15)]);
var inst_19246 = cljs.core._nth.call(null,inst_19238,inst_19240);
var inst_19247 = cljs.core.nth.call(null,inst_19246,(0),null);
var inst_19248 = cljs.core.nth.call(null,inst_19246,(1),null);
var state_19356__$1 = (function (){var statearr_19428 = state_19356;
(statearr_19428[(26)] = inst_19247);

return statearr_19428;
})();
if(cljs.core.truth_(inst_19248)){
var statearr_19429_19492 = state_19356__$1;
(statearr_19429_19492[(1)] = (13));

} else {
var statearr_19430_19493 = state_19356__$1;
(statearr_19430_19493[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (18))){
var inst_19281 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
var statearr_19431_19494 = state_19356__$1;
(statearr_19431_19494[(2)] = inst_19281);

(statearr_19431_19494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (42))){
var state_19356__$1 = state_19356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19356__$1,(45),dchan);
} else {
if((state_val_19357 === (37))){
var inst_19228 = (state_19356[(9)]);
var inst_19324 = (state_19356[(23)]);
var inst_19315 = (state_19356[(25)]);
var inst_19324__$1 = cljs.core.first.call(null,inst_19315);
var inst_19325 = cljs.core.async.put_BANG_.call(null,inst_19324__$1,inst_19228,done);
var state_19356__$1 = (function (){var statearr_19432 = state_19356;
(statearr_19432[(23)] = inst_19324__$1);

return statearr_19432;
})();
if(cljs.core.truth_(inst_19325)){
var statearr_19433_19495 = state_19356__$1;
(statearr_19433_19495[(1)] = (39));

} else {
var statearr_19434_19496 = state_19356__$1;
(statearr_19434_19496[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (8))){
var inst_19240 = (state_19356[(14)]);
var inst_19239 = (state_19356[(17)]);
var inst_19242 = (inst_19240 < inst_19239);
var inst_19243 = inst_19242;
var state_19356__$1 = state_19356;
if(cljs.core.truth_(inst_19243)){
var statearr_19435_19497 = state_19356__$1;
(statearr_19435_19497[(1)] = (10));

} else {
var statearr_19436_19498 = state_19356__$1;
(statearr_19436_19498[(1)] = (11));

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
});})(c__15907__auto___19444,cs,m,dchan,dctr,done))
;
return ((function (switch__15842__auto__,c__15907__auto___19444,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15843__auto__ = null;
var cljs$core$async$mult_$_state_machine__15843__auto____0 = (function (){
var statearr_19440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19440[(0)] = cljs$core$async$mult_$_state_machine__15843__auto__);

(statearr_19440[(1)] = (1));

return statearr_19440;
});
var cljs$core$async$mult_$_state_machine__15843__auto____1 = (function (state_19356){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_19356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e19441){if((e19441 instanceof Object)){
var ex__15846__auto__ = e19441;
var statearr_19442_19499 = state_19356;
(statearr_19442_19499[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19500 = state_19356;
state_19356 = G__19500;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15843__auto__ = function(state_19356){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15843__auto____1.call(this,state_19356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15843__auto____0;
cljs$core$async$mult_$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15843__auto____1;
return cljs$core$async$mult_$_state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___19444,cs,m,dchan,dctr,done))
})();
var state__15909__auto__ = (function (){var statearr_19443 = f__15908__auto__.call(null);
(statearr_19443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___19444);

return statearr_19443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___19444,cs,m,dchan,dctr,done))
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
var args19501 = [];
var len__14436__auto___19504 = arguments.length;
var i__14437__auto___19505 = (0);
while(true){
if((i__14437__auto___19505 < len__14436__auto___19504)){
args19501.push((arguments[i__14437__auto___19505]));

var G__19506 = (i__14437__auto___19505 + (1));
i__14437__auto___19505 = G__19506;
continue;
} else {
}
break;
}

var G__19503 = args19501.length;
switch (G__19503) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19501.length)].join('')));

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
var x__14033__auto__ = (((m == null))?null:m);
var m__14034__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,m,ch);
} else {
var m__14034__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,m,ch);
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
var x__14033__auto__ = (((m == null))?null:m);
var m__14034__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,m,ch);
} else {
var m__14034__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,m,ch);
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
var x__14033__auto__ = (((m == null))?null:m);
var m__14034__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,m);
} else {
var m__14034__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,m);
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
var x__14033__auto__ = (((m == null))?null:m);
var m__14034__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,m,state_map);
} else {
var m__14034__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,m,state_map);
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
var x__14033__auto__ = (((m == null))?null:m);
var m__14034__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,m,mode);
} else {
var m__14034__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__14443__auto__ = [];
var len__14436__auto___19518 = arguments.length;
var i__14437__auto___19519 = (0);
while(true){
if((i__14437__auto___19519 < len__14436__auto___19518)){
args__14443__auto__.push((arguments[i__14437__auto___19519]));

var G__19520 = (i__14437__auto___19519 + (1));
i__14437__auto___19519 = G__19520;
continue;
} else {
}
break;
}

var argseq__14444__auto__ = ((((3) < args__14443__auto__.length))?(new cljs.core.IndexedSeq(args__14443__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__14444__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19512){
var map__19513 = p__19512;
var map__19513__$1 = ((((!((map__19513 == null)))?((((map__19513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19513):map__19513);
var opts = map__19513__$1;
var statearr_19515_19521 = state;
(statearr_19515_19521[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__19513,map__19513__$1,opts){
return (function (val){
var statearr_19516_19522 = state;
(statearr_19516_19522[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19513,map__19513__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_19517_19523 = state;
(statearr_19517_19523[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19508){
var G__19509 = cljs.core.first.call(null,seq19508);
var seq19508__$1 = cljs.core.next.call(null,seq19508);
var G__19510 = cljs.core.first.call(null,seq19508__$1);
var seq19508__$2 = cljs.core.next.call(null,seq19508__$1);
var G__19511 = cljs.core.first.call(null,seq19508__$2);
var seq19508__$3 = cljs.core.next.call(null,seq19508__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19509,G__19510,G__19511,seq19508__$3);
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
if(typeof cljs.core.async.t_cljs$core$async19687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19687 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19688){
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
this.meta19688 = meta19688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19689,meta19688__$1){
var self__ = this;
var _19689__$1 = this;
return (new cljs.core.async.t_cljs$core$async19687(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19688__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19689){
var self__ = this;
var _19689__$1 = this;
return self__.meta19688;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19687.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19687.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19687.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19687.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19687.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19687.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19687.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19687.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19688","meta19688",2141879974,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19687";

cljs.core.async.t_cljs$core$async19687.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13976__auto__,writer__13977__auto__,opt__13978__auto__){
return cljs.core._write.call(null,writer__13977__auto__,"cljs.core.async/t_cljs$core$async19687");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19687 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19687(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19688){
return (new cljs.core.async.t_cljs$core$async19687(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19688));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19687(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15907__auto___19850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___19850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___19850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19787){
var state_val_19788 = (state_19787[(1)]);
if((state_val_19788 === (7))){
var inst_19705 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
var statearr_19789_19851 = state_19787__$1;
(statearr_19789_19851[(2)] = inst_19705);

(statearr_19789_19851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (20))){
var inst_19717 = (state_19787[(7)]);
var state_19787__$1 = state_19787;
var statearr_19790_19852 = state_19787__$1;
(statearr_19790_19852[(2)] = inst_19717);

(statearr_19790_19852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (27))){
var state_19787__$1 = state_19787;
var statearr_19791_19853 = state_19787__$1;
(statearr_19791_19853[(2)] = null);

(statearr_19791_19853[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (1))){
var inst_19693 = (state_19787[(8)]);
var inst_19693__$1 = calc_state.call(null);
var inst_19695 = (inst_19693__$1 == null);
var inst_19696 = cljs.core.not.call(null,inst_19695);
var state_19787__$1 = (function (){var statearr_19792 = state_19787;
(statearr_19792[(8)] = inst_19693__$1);

return statearr_19792;
})();
if(inst_19696){
var statearr_19793_19854 = state_19787__$1;
(statearr_19793_19854[(1)] = (2));

} else {
var statearr_19794_19855 = state_19787__$1;
(statearr_19794_19855[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (24))){
var inst_19740 = (state_19787[(9)]);
var inst_19761 = (state_19787[(10)]);
var inst_19747 = (state_19787[(11)]);
var inst_19761__$1 = inst_19740.call(null,inst_19747);
var state_19787__$1 = (function (){var statearr_19795 = state_19787;
(statearr_19795[(10)] = inst_19761__$1);

return statearr_19795;
})();
if(cljs.core.truth_(inst_19761__$1)){
var statearr_19796_19856 = state_19787__$1;
(statearr_19796_19856[(1)] = (29));

} else {
var statearr_19797_19857 = state_19787__$1;
(statearr_19797_19857[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (4))){
var inst_19708 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
if(cljs.core.truth_(inst_19708)){
var statearr_19798_19858 = state_19787__$1;
(statearr_19798_19858[(1)] = (8));

} else {
var statearr_19799_19859 = state_19787__$1;
(statearr_19799_19859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (15))){
var inst_19734 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
if(cljs.core.truth_(inst_19734)){
var statearr_19800_19860 = state_19787__$1;
(statearr_19800_19860[(1)] = (19));

} else {
var statearr_19801_19861 = state_19787__$1;
(statearr_19801_19861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (21))){
var inst_19739 = (state_19787[(12)]);
var inst_19739__$1 = (state_19787[(2)]);
var inst_19740 = cljs.core.get.call(null,inst_19739__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19741 = cljs.core.get.call(null,inst_19739__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19742 = cljs.core.get.call(null,inst_19739__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19787__$1 = (function (){var statearr_19802 = state_19787;
(statearr_19802[(9)] = inst_19740);

(statearr_19802[(12)] = inst_19739__$1);

(statearr_19802[(13)] = inst_19741);

return statearr_19802;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19787__$1,(22),inst_19742);
} else {
if((state_val_19788 === (31))){
var inst_19769 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
if(cljs.core.truth_(inst_19769)){
var statearr_19803_19862 = state_19787__$1;
(statearr_19803_19862[(1)] = (32));

} else {
var statearr_19804_19863 = state_19787__$1;
(statearr_19804_19863[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (32))){
var inst_19746 = (state_19787[(14)]);
var state_19787__$1 = state_19787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19787__$1,(35),out,inst_19746);
} else {
if((state_val_19788 === (33))){
var inst_19739 = (state_19787[(12)]);
var inst_19717 = inst_19739;
var state_19787__$1 = (function (){var statearr_19805 = state_19787;
(statearr_19805[(7)] = inst_19717);

return statearr_19805;
})();
var statearr_19806_19864 = state_19787__$1;
(statearr_19806_19864[(2)] = null);

(statearr_19806_19864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (13))){
var inst_19717 = (state_19787[(7)]);
var inst_19724 = inst_19717.cljs$lang$protocol_mask$partition0$;
var inst_19725 = (inst_19724 & (64));
var inst_19726 = inst_19717.cljs$core$ISeq$;
var inst_19727 = (inst_19725) || (inst_19726);
var state_19787__$1 = state_19787;
if(cljs.core.truth_(inst_19727)){
var statearr_19807_19865 = state_19787__$1;
(statearr_19807_19865[(1)] = (16));

} else {
var statearr_19808_19866 = state_19787__$1;
(statearr_19808_19866[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (22))){
var inst_19747 = (state_19787[(11)]);
var inst_19746 = (state_19787[(14)]);
var inst_19745 = (state_19787[(2)]);
var inst_19746__$1 = cljs.core.nth.call(null,inst_19745,(0),null);
var inst_19747__$1 = cljs.core.nth.call(null,inst_19745,(1),null);
var inst_19748 = (inst_19746__$1 == null);
var inst_19749 = cljs.core._EQ_.call(null,inst_19747__$1,change);
var inst_19750 = (inst_19748) || (inst_19749);
var state_19787__$1 = (function (){var statearr_19809 = state_19787;
(statearr_19809[(11)] = inst_19747__$1);

(statearr_19809[(14)] = inst_19746__$1);

return statearr_19809;
})();
if(cljs.core.truth_(inst_19750)){
var statearr_19810_19867 = state_19787__$1;
(statearr_19810_19867[(1)] = (23));

} else {
var statearr_19811_19868 = state_19787__$1;
(statearr_19811_19868[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (36))){
var inst_19739 = (state_19787[(12)]);
var inst_19717 = inst_19739;
var state_19787__$1 = (function (){var statearr_19812 = state_19787;
(statearr_19812[(7)] = inst_19717);

return statearr_19812;
})();
var statearr_19813_19869 = state_19787__$1;
(statearr_19813_19869[(2)] = null);

(statearr_19813_19869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (29))){
var inst_19761 = (state_19787[(10)]);
var state_19787__$1 = state_19787;
var statearr_19814_19870 = state_19787__$1;
(statearr_19814_19870[(2)] = inst_19761);

(statearr_19814_19870[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (6))){
var state_19787__$1 = state_19787;
var statearr_19815_19871 = state_19787__$1;
(statearr_19815_19871[(2)] = false);

(statearr_19815_19871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (28))){
var inst_19757 = (state_19787[(2)]);
var inst_19758 = calc_state.call(null);
var inst_19717 = inst_19758;
var state_19787__$1 = (function (){var statearr_19816 = state_19787;
(statearr_19816[(15)] = inst_19757);

(statearr_19816[(7)] = inst_19717);

return statearr_19816;
})();
var statearr_19817_19872 = state_19787__$1;
(statearr_19817_19872[(2)] = null);

(statearr_19817_19872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (25))){
var inst_19783 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
var statearr_19818_19873 = state_19787__$1;
(statearr_19818_19873[(2)] = inst_19783);

(statearr_19818_19873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (34))){
var inst_19781 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
var statearr_19819_19874 = state_19787__$1;
(statearr_19819_19874[(2)] = inst_19781);

(statearr_19819_19874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (17))){
var state_19787__$1 = state_19787;
var statearr_19820_19875 = state_19787__$1;
(statearr_19820_19875[(2)] = false);

(statearr_19820_19875[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (3))){
var state_19787__$1 = state_19787;
var statearr_19821_19876 = state_19787__$1;
(statearr_19821_19876[(2)] = false);

(statearr_19821_19876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (12))){
var inst_19785 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19787__$1,inst_19785);
} else {
if((state_val_19788 === (2))){
var inst_19693 = (state_19787[(8)]);
var inst_19698 = inst_19693.cljs$lang$protocol_mask$partition0$;
var inst_19699 = (inst_19698 & (64));
var inst_19700 = inst_19693.cljs$core$ISeq$;
var inst_19701 = (inst_19699) || (inst_19700);
var state_19787__$1 = state_19787;
if(cljs.core.truth_(inst_19701)){
var statearr_19822_19877 = state_19787__$1;
(statearr_19822_19877[(1)] = (5));

} else {
var statearr_19823_19878 = state_19787__$1;
(statearr_19823_19878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (23))){
var inst_19746 = (state_19787[(14)]);
var inst_19752 = (inst_19746 == null);
var state_19787__$1 = state_19787;
if(cljs.core.truth_(inst_19752)){
var statearr_19824_19879 = state_19787__$1;
(statearr_19824_19879[(1)] = (26));

} else {
var statearr_19825_19880 = state_19787__$1;
(statearr_19825_19880[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (35))){
var inst_19772 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
if(cljs.core.truth_(inst_19772)){
var statearr_19826_19881 = state_19787__$1;
(statearr_19826_19881[(1)] = (36));

} else {
var statearr_19827_19882 = state_19787__$1;
(statearr_19827_19882[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (19))){
var inst_19717 = (state_19787[(7)]);
var inst_19736 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19717);
var state_19787__$1 = state_19787;
var statearr_19828_19883 = state_19787__$1;
(statearr_19828_19883[(2)] = inst_19736);

(statearr_19828_19883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (11))){
var inst_19717 = (state_19787[(7)]);
var inst_19721 = (inst_19717 == null);
var inst_19722 = cljs.core.not.call(null,inst_19721);
var state_19787__$1 = state_19787;
if(inst_19722){
var statearr_19829_19884 = state_19787__$1;
(statearr_19829_19884[(1)] = (13));

} else {
var statearr_19830_19885 = state_19787__$1;
(statearr_19830_19885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (9))){
var inst_19693 = (state_19787[(8)]);
var state_19787__$1 = state_19787;
var statearr_19831_19886 = state_19787__$1;
(statearr_19831_19886[(2)] = inst_19693);

(statearr_19831_19886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (5))){
var state_19787__$1 = state_19787;
var statearr_19832_19887 = state_19787__$1;
(statearr_19832_19887[(2)] = true);

(statearr_19832_19887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (14))){
var state_19787__$1 = state_19787;
var statearr_19833_19888 = state_19787__$1;
(statearr_19833_19888[(2)] = false);

(statearr_19833_19888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (26))){
var inst_19747 = (state_19787[(11)]);
var inst_19754 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19747);
var state_19787__$1 = state_19787;
var statearr_19834_19889 = state_19787__$1;
(statearr_19834_19889[(2)] = inst_19754);

(statearr_19834_19889[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (16))){
var state_19787__$1 = state_19787;
var statearr_19835_19890 = state_19787__$1;
(statearr_19835_19890[(2)] = true);

(statearr_19835_19890[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (38))){
var inst_19777 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
var statearr_19836_19891 = state_19787__$1;
(statearr_19836_19891[(2)] = inst_19777);

(statearr_19836_19891[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (30))){
var inst_19740 = (state_19787[(9)]);
var inst_19741 = (state_19787[(13)]);
var inst_19747 = (state_19787[(11)]);
var inst_19764 = cljs.core.empty_QMARK_.call(null,inst_19740);
var inst_19765 = inst_19741.call(null,inst_19747);
var inst_19766 = cljs.core.not.call(null,inst_19765);
var inst_19767 = (inst_19764) && (inst_19766);
var state_19787__$1 = state_19787;
var statearr_19837_19892 = state_19787__$1;
(statearr_19837_19892[(2)] = inst_19767);

(statearr_19837_19892[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (10))){
var inst_19693 = (state_19787[(8)]);
var inst_19713 = (state_19787[(2)]);
var inst_19714 = cljs.core.get.call(null,inst_19713,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19715 = cljs.core.get.call(null,inst_19713,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19716 = cljs.core.get.call(null,inst_19713,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19717 = inst_19693;
var state_19787__$1 = (function (){var statearr_19838 = state_19787;
(statearr_19838[(16)] = inst_19715);

(statearr_19838[(7)] = inst_19717);

(statearr_19838[(17)] = inst_19716);

(statearr_19838[(18)] = inst_19714);

return statearr_19838;
})();
var statearr_19839_19893 = state_19787__$1;
(statearr_19839_19893[(2)] = null);

(statearr_19839_19893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (18))){
var inst_19731 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
var statearr_19840_19894 = state_19787__$1;
(statearr_19840_19894[(2)] = inst_19731);

(statearr_19840_19894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (37))){
var state_19787__$1 = state_19787;
var statearr_19841_19895 = state_19787__$1;
(statearr_19841_19895[(2)] = null);

(statearr_19841_19895[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (8))){
var inst_19693 = (state_19787[(8)]);
var inst_19710 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19693);
var state_19787__$1 = state_19787;
var statearr_19842_19896 = state_19787__$1;
(statearr_19842_19896[(2)] = inst_19710);

(statearr_19842_19896[(1)] = (10));


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
});})(c__15907__auto___19850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15842__auto__,c__15907__auto___19850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15843__auto__ = null;
var cljs$core$async$mix_$_state_machine__15843__auto____0 = (function (){
var statearr_19846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19846[(0)] = cljs$core$async$mix_$_state_machine__15843__auto__);

(statearr_19846[(1)] = (1));

return statearr_19846;
});
var cljs$core$async$mix_$_state_machine__15843__auto____1 = (function (state_19787){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_19787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e19847){if((e19847 instanceof Object)){
var ex__15846__auto__ = e19847;
var statearr_19848_19897 = state_19787;
(statearr_19848_19897[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19898 = state_19787;
state_19787 = G__19898;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15843__auto__ = function(state_19787){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15843__auto____1.call(this,state_19787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15843__auto____0;
cljs$core$async$mix_$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15843__auto____1;
return cljs$core$async$mix_$_state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___19850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15909__auto__ = (function (){var statearr_19849 = f__15908__auto__.call(null);
(statearr_19849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___19850);

return statearr_19849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___19850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__14033__auto__ = (((p == null))?null:p);
var m__14034__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__14034__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__14033__auto__ = (((p == null))?null:p);
var m__14034__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,p,v,ch);
} else {
var m__14034__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args19899 = [];
var len__14436__auto___19902 = arguments.length;
var i__14437__auto___19903 = (0);
while(true){
if((i__14437__auto___19903 < len__14436__auto___19902)){
args19899.push((arguments[i__14437__auto___19903]));

var G__19904 = (i__14437__auto___19903 + (1));
i__14437__auto___19903 = G__19904;
continue;
} else {
}
break;
}

var G__19901 = args19899.length;
switch (G__19901) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19899.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__14033__auto__ = (((p == null))?null:p);
var m__14034__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,p);
} else {
var m__14034__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,p);
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
var x__14033__auto__ = (((p == null))?null:p);
var m__14034__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14033__auto__)]);
if(!((m__14034__auto__ == null))){
return m__14034__auto__.call(null,p,v);
} else {
var m__14034__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__14034__auto____$1 == null))){
return m__14034__auto____$1.call(null,p,v);
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
var args19907 = [];
var len__14436__auto___20032 = arguments.length;
var i__14437__auto___20033 = (0);
while(true){
if((i__14437__auto___20033 < len__14436__auto___20032)){
args19907.push((arguments[i__14437__auto___20033]));

var G__20034 = (i__14437__auto___20033 + (1));
i__14437__auto___20033 = G__20034;
continue;
} else {
}
break;
}

var G__19909 = args19907.length;
switch (G__19909) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19907.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__13378__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__13378__auto__)){
return or__13378__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13378__auto__,mults){
return (function (p1__19906_SHARP_){
if(cljs.core.truth_(p1__19906_SHARP_.call(null,topic))){
return p1__19906_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19906_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13378__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19910 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19911){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19911 = meta19911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19912,meta19911__$1){
var self__ = this;
var _19912__$1 = this;
return (new cljs.core.async.t_cljs$core$async19910(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19911__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19912){
var self__ = this;
var _19912__$1 = this;
return self__.meta19911;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19910.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19910.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19910.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19910.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19910.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19910.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19910.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19910.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19911","meta19911",-314978251,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19910";

cljs.core.async.t_cljs$core$async19910.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13976__auto__,writer__13977__auto__,opt__13978__auto__){
return cljs.core._write.call(null,writer__13977__auto__,"cljs.core.async/t_cljs$core$async19910");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19910 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19910(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19911){
return (new cljs.core.async.t_cljs$core$async19910(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19911));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19910(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15907__auto___20036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___20036,mults,ensure_mult,p){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___20036,mults,ensure_mult,p){
return (function (state_19984){
var state_val_19985 = (state_19984[(1)]);
if((state_val_19985 === (7))){
var inst_19980 = (state_19984[(2)]);
var state_19984__$1 = state_19984;
var statearr_19986_20037 = state_19984__$1;
(statearr_19986_20037[(2)] = inst_19980);

(statearr_19986_20037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (20))){
var state_19984__$1 = state_19984;
var statearr_19987_20038 = state_19984__$1;
(statearr_19987_20038[(2)] = null);

(statearr_19987_20038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (1))){
var state_19984__$1 = state_19984;
var statearr_19988_20039 = state_19984__$1;
(statearr_19988_20039[(2)] = null);

(statearr_19988_20039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (24))){
var inst_19963 = (state_19984[(7)]);
var inst_19972 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19963);
var state_19984__$1 = state_19984;
var statearr_19989_20040 = state_19984__$1;
(statearr_19989_20040[(2)] = inst_19972);

(statearr_19989_20040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (4))){
var inst_19915 = (state_19984[(8)]);
var inst_19915__$1 = (state_19984[(2)]);
var inst_19916 = (inst_19915__$1 == null);
var state_19984__$1 = (function (){var statearr_19990 = state_19984;
(statearr_19990[(8)] = inst_19915__$1);

return statearr_19990;
})();
if(cljs.core.truth_(inst_19916)){
var statearr_19991_20041 = state_19984__$1;
(statearr_19991_20041[(1)] = (5));

} else {
var statearr_19992_20042 = state_19984__$1;
(statearr_19992_20042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (15))){
var inst_19957 = (state_19984[(2)]);
var state_19984__$1 = state_19984;
var statearr_19993_20043 = state_19984__$1;
(statearr_19993_20043[(2)] = inst_19957);

(statearr_19993_20043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (21))){
var inst_19977 = (state_19984[(2)]);
var state_19984__$1 = (function (){var statearr_19994 = state_19984;
(statearr_19994[(9)] = inst_19977);

return statearr_19994;
})();
var statearr_19995_20044 = state_19984__$1;
(statearr_19995_20044[(2)] = null);

(statearr_19995_20044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (13))){
var inst_19939 = (state_19984[(10)]);
var inst_19941 = cljs.core.chunked_seq_QMARK_.call(null,inst_19939);
var state_19984__$1 = state_19984;
if(inst_19941){
var statearr_19996_20045 = state_19984__$1;
(statearr_19996_20045[(1)] = (16));

} else {
var statearr_19997_20046 = state_19984__$1;
(statearr_19997_20046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (22))){
var inst_19969 = (state_19984[(2)]);
var state_19984__$1 = state_19984;
if(cljs.core.truth_(inst_19969)){
var statearr_19998_20047 = state_19984__$1;
(statearr_19998_20047[(1)] = (23));

} else {
var statearr_19999_20048 = state_19984__$1;
(statearr_19999_20048[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (6))){
var inst_19965 = (state_19984[(11)]);
var inst_19915 = (state_19984[(8)]);
var inst_19963 = (state_19984[(7)]);
var inst_19963__$1 = topic_fn.call(null,inst_19915);
var inst_19964 = cljs.core.deref.call(null,mults);
var inst_19965__$1 = cljs.core.get.call(null,inst_19964,inst_19963__$1);
var state_19984__$1 = (function (){var statearr_20000 = state_19984;
(statearr_20000[(11)] = inst_19965__$1);

(statearr_20000[(7)] = inst_19963__$1);

return statearr_20000;
})();
if(cljs.core.truth_(inst_19965__$1)){
var statearr_20001_20049 = state_19984__$1;
(statearr_20001_20049[(1)] = (19));

} else {
var statearr_20002_20050 = state_19984__$1;
(statearr_20002_20050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (25))){
var inst_19974 = (state_19984[(2)]);
var state_19984__$1 = state_19984;
var statearr_20003_20051 = state_19984__$1;
(statearr_20003_20051[(2)] = inst_19974);

(statearr_20003_20051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (17))){
var inst_19939 = (state_19984[(10)]);
var inst_19948 = cljs.core.first.call(null,inst_19939);
var inst_19949 = cljs.core.async.muxch_STAR_.call(null,inst_19948);
var inst_19950 = cljs.core.async.close_BANG_.call(null,inst_19949);
var inst_19951 = cljs.core.next.call(null,inst_19939);
var inst_19925 = inst_19951;
var inst_19926 = null;
var inst_19927 = (0);
var inst_19928 = (0);
var state_19984__$1 = (function (){var statearr_20004 = state_19984;
(statearr_20004[(12)] = inst_19925);

(statearr_20004[(13)] = inst_19927);

(statearr_20004[(14)] = inst_19926);

(statearr_20004[(15)] = inst_19928);

(statearr_20004[(16)] = inst_19950);

return statearr_20004;
})();
var statearr_20005_20052 = state_19984__$1;
(statearr_20005_20052[(2)] = null);

(statearr_20005_20052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (3))){
var inst_19982 = (state_19984[(2)]);
var state_19984__$1 = state_19984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19984__$1,inst_19982);
} else {
if((state_val_19985 === (12))){
var inst_19959 = (state_19984[(2)]);
var state_19984__$1 = state_19984;
var statearr_20006_20053 = state_19984__$1;
(statearr_20006_20053[(2)] = inst_19959);

(statearr_20006_20053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (2))){
var state_19984__$1 = state_19984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19984__$1,(4),ch);
} else {
if((state_val_19985 === (23))){
var state_19984__$1 = state_19984;
var statearr_20007_20054 = state_19984__$1;
(statearr_20007_20054[(2)] = null);

(statearr_20007_20054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (19))){
var inst_19965 = (state_19984[(11)]);
var inst_19915 = (state_19984[(8)]);
var inst_19967 = cljs.core.async.muxch_STAR_.call(null,inst_19965);
var state_19984__$1 = state_19984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19984__$1,(22),inst_19967,inst_19915);
} else {
if((state_val_19985 === (11))){
var inst_19925 = (state_19984[(12)]);
var inst_19939 = (state_19984[(10)]);
var inst_19939__$1 = cljs.core.seq.call(null,inst_19925);
var state_19984__$1 = (function (){var statearr_20008 = state_19984;
(statearr_20008[(10)] = inst_19939__$1);

return statearr_20008;
})();
if(inst_19939__$1){
var statearr_20009_20055 = state_19984__$1;
(statearr_20009_20055[(1)] = (13));

} else {
var statearr_20010_20056 = state_19984__$1;
(statearr_20010_20056[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (9))){
var inst_19961 = (state_19984[(2)]);
var state_19984__$1 = state_19984;
var statearr_20011_20057 = state_19984__$1;
(statearr_20011_20057[(2)] = inst_19961);

(statearr_20011_20057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (5))){
var inst_19922 = cljs.core.deref.call(null,mults);
var inst_19923 = cljs.core.vals.call(null,inst_19922);
var inst_19924 = cljs.core.seq.call(null,inst_19923);
var inst_19925 = inst_19924;
var inst_19926 = null;
var inst_19927 = (0);
var inst_19928 = (0);
var state_19984__$1 = (function (){var statearr_20012 = state_19984;
(statearr_20012[(12)] = inst_19925);

(statearr_20012[(13)] = inst_19927);

(statearr_20012[(14)] = inst_19926);

(statearr_20012[(15)] = inst_19928);

return statearr_20012;
})();
var statearr_20013_20058 = state_19984__$1;
(statearr_20013_20058[(2)] = null);

(statearr_20013_20058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (14))){
var state_19984__$1 = state_19984;
var statearr_20017_20059 = state_19984__$1;
(statearr_20017_20059[(2)] = null);

(statearr_20017_20059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (16))){
var inst_19939 = (state_19984[(10)]);
var inst_19943 = cljs.core.chunk_first.call(null,inst_19939);
var inst_19944 = cljs.core.chunk_rest.call(null,inst_19939);
var inst_19945 = cljs.core.count.call(null,inst_19943);
var inst_19925 = inst_19944;
var inst_19926 = inst_19943;
var inst_19927 = inst_19945;
var inst_19928 = (0);
var state_19984__$1 = (function (){var statearr_20018 = state_19984;
(statearr_20018[(12)] = inst_19925);

(statearr_20018[(13)] = inst_19927);

(statearr_20018[(14)] = inst_19926);

(statearr_20018[(15)] = inst_19928);

return statearr_20018;
})();
var statearr_20019_20060 = state_19984__$1;
(statearr_20019_20060[(2)] = null);

(statearr_20019_20060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (10))){
var inst_19925 = (state_19984[(12)]);
var inst_19927 = (state_19984[(13)]);
var inst_19926 = (state_19984[(14)]);
var inst_19928 = (state_19984[(15)]);
var inst_19933 = cljs.core._nth.call(null,inst_19926,inst_19928);
var inst_19934 = cljs.core.async.muxch_STAR_.call(null,inst_19933);
var inst_19935 = cljs.core.async.close_BANG_.call(null,inst_19934);
var inst_19936 = (inst_19928 + (1));
var tmp20014 = inst_19925;
var tmp20015 = inst_19927;
var tmp20016 = inst_19926;
var inst_19925__$1 = tmp20014;
var inst_19926__$1 = tmp20016;
var inst_19927__$1 = tmp20015;
var inst_19928__$1 = inst_19936;
var state_19984__$1 = (function (){var statearr_20020 = state_19984;
(statearr_20020[(12)] = inst_19925__$1);

(statearr_20020[(13)] = inst_19927__$1);

(statearr_20020[(14)] = inst_19926__$1);

(statearr_20020[(17)] = inst_19935);

(statearr_20020[(15)] = inst_19928__$1);

return statearr_20020;
})();
var statearr_20021_20061 = state_19984__$1;
(statearr_20021_20061[(2)] = null);

(statearr_20021_20061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (18))){
var inst_19954 = (state_19984[(2)]);
var state_19984__$1 = state_19984;
var statearr_20022_20062 = state_19984__$1;
(statearr_20022_20062[(2)] = inst_19954);

(statearr_20022_20062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19985 === (8))){
var inst_19927 = (state_19984[(13)]);
var inst_19928 = (state_19984[(15)]);
var inst_19930 = (inst_19928 < inst_19927);
var inst_19931 = inst_19930;
var state_19984__$1 = state_19984;
if(cljs.core.truth_(inst_19931)){
var statearr_20023_20063 = state_19984__$1;
(statearr_20023_20063[(1)] = (10));

} else {
var statearr_20024_20064 = state_19984__$1;
(statearr_20024_20064[(1)] = (11));

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
});})(c__15907__auto___20036,mults,ensure_mult,p))
;
return ((function (switch__15842__auto__,c__15907__auto___20036,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15843__auto__ = null;
var cljs$core$async$state_machine__15843__auto____0 = (function (){
var statearr_20028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20028[(0)] = cljs$core$async$state_machine__15843__auto__);

(statearr_20028[(1)] = (1));

return statearr_20028;
});
var cljs$core$async$state_machine__15843__auto____1 = (function (state_19984){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_19984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e20029){if((e20029 instanceof Object)){
var ex__15846__auto__ = e20029;
var statearr_20030_20065 = state_19984;
(statearr_20030_20065[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20066 = state_19984;
state_19984 = G__20066;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$state_machine__15843__auto__ = function(state_19984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15843__auto____1.call(this,state_19984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15843__auto____0;
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15843__auto____1;
return cljs$core$async$state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___20036,mults,ensure_mult,p))
})();
var state__15909__auto__ = (function (){var statearr_20031 = f__15908__auto__.call(null);
(statearr_20031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___20036);

return statearr_20031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___20036,mults,ensure_mult,p))
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
var args20067 = [];
var len__14436__auto___20070 = arguments.length;
var i__14437__auto___20071 = (0);
while(true){
if((i__14437__auto___20071 < len__14436__auto___20070)){
args20067.push((arguments[i__14437__auto___20071]));

var G__20072 = (i__14437__auto___20071 + (1));
i__14437__auto___20071 = G__20072;
continue;
} else {
}
break;
}

var G__20069 = args20067.length;
switch (G__20069) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20067.length)].join('')));

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
var args20074 = [];
var len__14436__auto___20077 = arguments.length;
var i__14437__auto___20078 = (0);
while(true){
if((i__14437__auto___20078 < len__14436__auto___20077)){
args20074.push((arguments[i__14437__auto___20078]));

var G__20079 = (i__14437__auto___20078 + (1));
i__14437__auto___20078 = G__20079;
continue;
} else {
}
break;
}

var G__20076 = args20074.length;
switch (G__20076) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20074.length)].join('')));

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
var args20081 = [];
var len__14436__auto___20152 = arguments.length;
var i__14437__auto___20153 = (0);
while(true){
if((i__14437__auto___20153 < len__14436__auto___20152)){
args20081.push((arguments[i__14437__auto___20153]));

var G__20154 = (i__14437__auto___20153 + (1));
i__14437__auto___20153 = G__20154;
continue;
} else {
}
break;
}

var G__20083 = args20081.length;
switch (G__20083) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20081.length)].join('')));

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
var c__15907__auto___20156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___20156,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___20156,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20122){
var state_val_20123 = (state_20122[(1)]);
if((state_val_20123 === (7))){
var state_20122__$1 = state_20122;
var statearr_20124_20157 = state_20122__$1;
(statearr_20124_20157[(2)] = null);

(statearr_20124_20157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (1))){
var state_20122__$1 = state_20122;
var statearr_20125_20158 = state_20122__$1;
(statearr_20125_20158[(2)] = null);

(statearr_20125_20158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (4))){
var inst_20086 = (state_20122[(7)]);
var inst_20088 = (inst_20086 < cnt);
var state_20122__$1 = state_20122;
if(cljs.core.truth_(inst_20088)){
var statearr_20126_20159 = state_20122__$1;
(statearr_20126_20159[(1)] = (6));

} else {
var statearr_20127_20160 = state_20122__$1;
(statearr_20127_20160[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (15))){
var inst_20118 = (state_20122[(2)]);
var state_20122__$1 = state_20122;
var statearr_20128_20161 = state_20122__$1;
(statearr_20128_20161[(2)] = inst_20118);

(statearr_20128_20161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (13))){
var inst_20111 = cljs.core.async.close_BANG_.call(null,out);
var state_20122__$1 = state_20122;
var statearr_20129_20162 = state_20122__$1;
(statearr_20129_20162[(2)] = inst_20111);

(statearr_20129_20162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (6))){
var state_20122__$1 = state_20122;
var statearr_20130_20163 = state_20122__$1;
(statearr_20130_20163[(2)] = null);

(statearr_20130_20163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (3))){
var inst_20120 = (state_20122[(2)]);
var state_20122__$1 = state_20122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20122__$1,inst_20120);
} else {
if((state_val_20123 === (12))){
var inst_20108 = (state_20122[(8)]);
var inst_20108__$1 = (state_20122[(2)]);
var inst_20109 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20108__$1);
var state_20122__$1 = (function (){var statearr_20131 = state_20122;
(statearr_20131[(8)] = inst_20108__$1);

return statearr_20131;
})();
if(cljs.core.truth_(inst_20109)){
var statearr_20132_20164 = state_20122__$1;
(statearr_20132_20164[(1)] = (13));

} else {
var statearr_20133_20165 = state_20122__$1;
(statearr_20133_20165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (2))){
var inst_20085 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20086 = (0);
var state_20122__$1 = (function (){var statearr_20134 = state_20122;
(statearr_20134[(7)] = inst_20086);

(statearr_20134[(9)] = inst_20085);

return statearr_20134;
})();
var statearr_20135_20166 = state_20122__$1;
(statearr_20135_20166[(2)] = null);

(statearr_20135_20166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (11))){
var inst_20086 = (state_20122[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20122,(10),Object,null,(9));
var inst_20095 = chs__$1.call(null,inst_20086);
var inst_20096 = done.call(null,inst_20086);
var inst_20097 = cljs.core.async.take_BANG_.call(null,inst_20095,inst_20096);
var state_20122__$1 = state_20122;
var statearr_20136_20167 = state_20122__$1;
(statearr_20136_20167[(2)] = inst_20097);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (9))){
var inst_20086 = (state_20122[(7)]);
var inst_20099 = (state_20122[(2)]);
var inst_20100 = (inst_20086 + (1));
var inst_20086__$1 = inst_20100;
var state_20122__$1 = (function (){var statearr_20137 = state_20122;
(statearr_20137[(7)] = inst_20086__$1);

(statearr_20137[(10)] = inst_20099);

return statearr_20137;
})();
var statearr_20138_20168 = state_20122__$1;
(statearr_20138_20168[(2)] = null);

(statearr_20138_20168[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (5))){
var inst_20106 = (state_20122[(2)]);
var state_20122__$1 = (function (){var statearr_20139 = state_20122;
(statearr_20139[(11)] = inst_20106);

return statearr_20139;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20122__$1,(12),dchan);
} else {
if((state_val_20123 === (14))){
var inst_20108 = (state_20122[(8)]);
var inst_20113 = cljs.core.apply.call(null,f,inst_20108);
var state_20122__$1 = state_20122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20122__$1,(16),out,inst_20113);
} else {
if((state_val_20123 === (16))){
var inst_20115 = (state_20122[(2)]);
var state_20122__$1 = (function (){var statearr_20140 = state_20122;
(statearr_20140[(12)] = inst_20115);

return statearr_20140;
})();
var statearr_20141_20169 = state_20122__$1;
(statearr_20141_20169[(2)] = null);

(statearr_20141_20169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (10))){
var inst_20090 = (state_20122[(2)]);
var inst_20091 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20122__$1 = (function (){var statearr_20142 = state_20122;
(statearr_20142[(13)] = inst_20090);

return statearr_20142;
})();
var statearr_20143_20170 = state_20122__$1;
(statearr_20143_20170[(2)] = inst_20091);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (8))){
var inst_20104 = (state_20122[(2)]);
var state_20122__$1 = state_20122;
var statearr_20144_20171 = state_20122__$1;
(statearr_20144_20171[(2)] = inst_20104);

(statearr_20144_20171[(1)] = (5));


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
});})(c__15907__auto___20156,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15842__auto__,c__15907__auto___20156,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15843__auto__ = null;
var cljs$core$async$state_machine__15843__auto____0 = (function (){
var statearr_20148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20148[(0)] = cljs$core$async$state_machine__15843__auto__);

(statearr_20148[(1)] = (1));

return statearr_20148;
});
var cljs$core$async$state_machine__15843__auto____1 = (function (state_20122){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_20122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e20149){if((e20149 instanceof Object)){
var ex__15846__auto__ = e20149;
var statearr_20150_20172 = state_20122;
(statearr_20150_20172[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20173 = state_20122;
state_20122 = G__20173;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$state_machine__15843__auto__ = function(state_20122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15843__auto____1.call(this,state_20122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15843__auto____0;
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15843__auto____1;
return cljs$core$async$state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___20156,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15909__auto__ = (function (){var statearr_20151 = f__15908__auto__.call(null);
(statearr_20151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___20156);

return statearr_20151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___20156,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args20175 = [];
var len__14436__auto___20231 = arguments.length;
var i__14437__auto___20232 = (0);
while(true){
if((i__14437__auto___20232 < len__14436__auto___20231)){
args20175.push((arguments[i__14437__auto___20232]));

var G__20233 = (i__14437__auto___20232 + (1));
i__14437__auto___20232 = G__20233;
continue;
} else {
}
break;
}

var G__20177 = args20175.length;
switch (G__20177) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20175.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15907__auto___20235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___20235,out){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___20235,out){
return (function (state_20207){
var state_val_20208 = (state_20207[(1)]);
if((state_val_20208 === (7))){
var inst_20186 = (state_20207[(7)]);
var inst_20187 = (state_20207[(8)]);
var inst_20186__$1 = (state_20207[(2)]);
var inst_20187__$1 = cljs.core.nth.call(null,inst_20186__$1,(0),null);
var inst_20188 = cljs.core.nth.call(null,inst_20186__$1,(1),null);
var inst_20189 = (inst_20187__$1 == null);
var state_20207__$1 = (function (){var statearr_20209 = state_20207;
(statearr_20209[(7)] = inst_20186__$1);

(statearr_20209[(8)] = inst_20187__$1);

(statearr_20209[(9)] = inst_20188);

return statearr_20209;
})();
if(cljs.core.truth_(inst_20189)){
var statearr_20210_20236 = state_20207__$1;
(statearr_20210_20236[(1)] = (8));

} else {
var statearr_20211_20237 = state_20207__$1;
(statearr_20211_20237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (1))){
var inst_20178 = cljs.core.vec.call(null,chs);
var inst_20179 = inst_20178;
var state_20207__$1 = (function (){var statearr_20212 = state_20207;
(statearr_20212[(10)] = inst_20179);

return statearr_20212;
})();
var statearr_20213_20238 = state_20207__$1;
(statearr_20213_20238[(2)] = null);

(statearr_20213_20238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (4))){
var inst_20179 = (state_20207[(10)]);
var state_20207__$1 = state_20207;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20207__$1,(7),inst_20179);
} else {
if((state_val_20208 === (6))){
var inst_20203 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
var statearr_20214_20239 = state_20207__$1;
(statearr_20214_20239[(2)] = inst_20203);

(statearr_20214_20239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (3))){
var inst_20205 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20207__$1,inst_20205);
} else {
if((state_val_20208 === (2))){
var inst_20179 = (state_20207[(10)]);
var inst_20181 = cljs.core.count.call(null,inst_20179);
var inst_20182 = (inst_20181 > (0));
var state_20207__$1 = state_20207;
if(cljs.core.truth_(inst_20182)){
var statearr_20216_20240 = state_20207__$1;
(statearr_20216_20240[(1)] = (4));

} else {
var statearr_20217_20241 = state_20207__$1;
(statearr_20217_20241[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (11))){
var inst_20179 = (state_20207[(10)]);
var inst_20196 = (state_20207[(2)]);
var tmp20215 = inst_20179;
var inst_20179__$1 = tmp20215;
var state_20207__$1 = (function (){var statearr_20218 = state_20207;
(statearr_20218[(11)] = inst_20196);

(statearr_20218[(10)] = inst_20179__$1);

return statearr_20218;
})();
var statearr_20219_20242 = state_20207__$1;
(statearr_20219_20242[(2)] = null);

(statearr_20219_20242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (9))){
var inst_20187 = (state_20207[(8)]);
var state_20207__$1 = state_20207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20207__$1,(11),out,inst_20187);
} else {
if((state_val_20208 === (5))){
var inst_20201 = cljs.core.async.close_BANG_.call(null,out);
var state_20207__$1 = state_20207;
var statearr_20220_20243 = state_20207__$1;
(statearr_20220_20243[(2)] = inst_20201);

(statearr_20220_20243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (10))){
var inst_20199 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
var statearr_20221_20244 = state_20207__$1;
(statearr_20221_20244[(2)] = inst_20199);

(statearr_20221_20244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (8))){
var inst_20186 = (state_20207[(7)]);
var inst_20187 = (state_20207[(8)]);
var inst_20179 = (state_20207[(10)]);
var inst_20188 = (state_20207[(9)]);
var inst_20191 = (function (){var cs = inst_20179;
var vec__20184 = inst_20186;
var v = inst_20187;
var c = inst_20188;
return ((function (cs,vec__20184,v,c,inst_20186,inst_20187,inst_20179,inst_20188,state_val_20208,c__15907__auto___20235,out){
return (function (p1__20174_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20174_SHARP_);
});
;})(cs,vec__20184,v,c,inst_20186,inst_20187,inst_20179,inst_20188,state_val_20208,c__15907__auto___20235,out))
})();
var inst_20192 = cljs.core.filterv.call(null,inst_20191,inst_20179);
var inst_20179__$1 = inst_20192;
var state_20207__$1 = (function (){var statearr_20222 = state_20207;
(statearr_20222[(10)] = inst_20179__$1);

return statearr_20222;
})();
var statearr_20223_20245 = state_20207__$1;
(statearr_20223_20245[(2)] = null);

(statearr_20223_20245[(1)] = (2));


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
});})(c__15907__auto___20235,out))
;
return ((function (switch__15842__auto__,c__15907__auto___20235,out){
return (function() {
var cljs$core$async$state_machine__15843__auto__ = null;
var cljs$core$async$state_machine__15843__auto____0 = (function (){
var statearr_20227 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20227[(0)] = cljs$core$async$state_machine__15843__auto__);

(statearr_20227[(1)] = (1));

return statearr_20227;
});
var cljs$core$async$state_machine__15843__auto____1 = (function (state_20207){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_20207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e20228){if((e20228 instanceof Object)){
var ex__15846__auto__ = e20228;
var statearr_20229_20246 = state_20207;
(statearr_20229_20246[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20247 = state_20207;
state_20207 = G__20247;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$state_machine__15843__auto__ = function(state_20207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15843__auto____1.call(this,state_20207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15843__auto____0;
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15843__auto____1;
return cljs$core$async$state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___20235,out))
})();
var state__15909__auto__ = (function (){var statearr_20230 = f__15908__auto__.call(null);
(statearr_20230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___20235);

return statearr_20230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___20235,out))
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
var args20248 = [];
var len__14436__auto___20297 = arguments.length;
var i__14437__auto___20298 = (0);
while(true){
if((i__14437__auto___20298 < len__14436__auto___20297)){
args20248.push((arguments[i__14437__auto___20298]));

var G__20299 = (i__14437__auto___20298 + (1));
i__14437__auto___20298 = G__20299;
continue;
} else {
}
break;
}

var G__20250 = args20248.length;
switch (G__20250) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20248.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15907__auto___20301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___20301,out){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___20301,out){
return (function (state_20274){
var state_val_20275 = (state_20274[(1)]);
if((state_val_20275 === (7))){
var inst_20256 = (state_20274[(7)]);
var inst_20256__$1 = (state_20274[(2)]);
var inst_20257 = (inst_20256__$1 == null);
var inst_20258 = cljs.core.not.call(null,inst_20257);
var state_20274__$1 = (function (){var statearr_20276 = state_20274;
(statearr_20276[(7)] = inst_20256__$1);

return statearr_20276;
})();
if(inst_20258){
var statearr_20277_20302 = state_20274__$1;
(statearr_20277_20302[(1)] = (8));

} else {
var statearr_20278_20303 = state_20274__$1;
(statearr_20278_20303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (1))){
var inst_20251 = (0);
var state_20274__$1 = (function (){var statearr_20279 = state_20274;
(statearr_20279[(8)] = inst_20251);

return statearr_20279;
})();
var statearr_20280_20304 = state_20274__$1;
(statearr_20280_20304[(2)] = null);

(statearr_20280_20304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (4))){
var state_20274__$1 = state_20274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20274__$1,(7),ch);
} else {
if((state_val_20275 === (6))){
var inst_20269 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
var statearr_20281_20305 = state_20274__$1;
(statearr_20281_20305[(2)] = inst_20269);

(statearr_20281_20305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (3))){
var inst_20271 = (state_20274[(2)]);
var inst_20272 = cljs.core.async.close_BANG_.call(null,out);
var state_20274__$1 = (function (){var statearr_20282 = state_20274;
(statearr_20282[(9)] = inst_20271);

return statearr_20282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20274__$1,inst_20272);
} else {
if((state_val_20275 === (2))){
var inst_20251 = (state_20274[(8)]);
var inst_20253 = (inst_20251 < n);
var state_20274__$1 = state_20274;
if(cljs.core.truth_(inst_20253)){
var statearr_20283_20306 = state_20274__$1;
(statearr_20283_20306[(1)] = (4));

} else {
var statearr_20284_20307 = state_20274__$1;
(statearr_20284_20307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (11))){
var inst_20251 = (state_20274[(8)]);
var inst_20261 = (state_20274[(2)]);
var inst_20262 = (inst_20251 + (1));
var inst_20251__$1 = inst_20262;
var state_20274__$1 = (function (){var statearr_20285 = state_20274;
(statearr_20285[(10)] = inst_20261);

(statearr_20285[(8)] = inst_20251__$1);

return statearr_20285;
})();
var statearr_20286_20308 = state_20274__$1;
(statearr_20286_20308[(2)] = null);

(statearr_20286_20308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (9))){
var state_20274__$1 = state_20274;
var statearr_20287_20309 = state_20274__$1;
(statearr_20287_20309[(2)] = null);

(statearr_20287_20309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (5))){
var state_20274__$1 = state_20274;
var statearr_20288_20310 = state_20274__$1;
(statearr_20288_20310[(2)] = null);

(statearr_20288_20310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (10))){
var inst_20266 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
var statearr_20289_20311 = state_20274__$1;
(statearr_20289_20311[(2)] = inst_20266);

(statearr_20289_20311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (8))){
var inst_20256 = (state_20274[(7)]);
var state_20274__$1 = state_20274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20274__$1,(11),out,inst_20256);
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
});})(c__15907__auto___20301,out))
;
return ((function (switch__15842__auto__,c__15907__auto___20301,out){
return (function() {
var cljs$core$async$state_machine__15843__auto__ = null;
var cljs$core$async$state_machine__15843__auto____0 = (function (){
var statearr_20293 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20293[(0)] = cljs$core$async$state_machine__15843__auto__);

(statearr_20293[(1)] = (1));

return statearr_20293;
});
var cljs$core$async$state_machine__15843__auto____1 = (function (state_20274){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_20274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e20294){if((e20294 instanceof Object)){
var ex__15846__auto__ = e20294;
var statearr_20295_20312 = state_20274;
(statearr_20295_20312[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20313 = state_20274;
state_20274 = G__20313;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$state_machine__15843__auto__ = function(state_20274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15843__auto____1.call(this,state_20274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15843__auto____0;
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15843__auto____1;
return cljs$core$async$state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___20301,out))
})();
var state__15909__auto__ = (function (){var statearr_20296 = f__15908__auto__.call(null);
(statearr_20296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___20301);

return statearr_20296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___20301,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20321 = (function (map_LT_,f,ch,meta20322){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20322 = meta20322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20323,meta20322__$1){
var self__ = this;
var _20323__$1 = this;
return (new cljs.core.async.t_cljs$core$async20321(self__.map_LT_,self__.f,self__.ch,meta20322__$1));
});

cljs.core.async.t_cljs$core$async20321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20323){
var self__ = this;
var _20323__$1 = this;
return self__.meta20322;
});

cljs.core.async.t_cljs$core$async20321.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20321.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20321.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20321.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20321.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20324 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20324 = (function (map_LT_,f,ch,meta20322,_,fn1,meta20325){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20322 = meta20322;
this._ = _;
this.fn1 = fn1;
this.meta20325 = meta20325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20326,meta20325__$1){
var self__ = this;
var _20326__$1 = this;
return (new cljs.core.async.t_cljs$core$async20324(self__.map_LT_,self__.f,self__.ch,self__.meta20322,self__._,self__.fn1,meta20325__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20326){
var self__ = this;
var _20326__$1 = this;
return self__.meta20325;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20324.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20324.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20314_SHARP_){
return f1.call(null,(((p1__20314_SHARP_ == null))?null:self__.f.call(null,p1__20314_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20324.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20322","meta20322",761870023,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20321","cljs.core.async/t_cljs$core$async20321",1464504615,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20325","meta20325",-1737835931,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20324.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20324";

cljs.core.async.t_cljs$core$async20324.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13976__auto__,writer__13977__auto__,opt__13978__auto__){
return cljs.core._write.call(null,writer__13977__auto__,"cljs.core.async/t_cljs$core$async20324");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20324 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20324(map_LT___$1,f__$1,ch__$1,meta20322__$1,___$2,fn1__$1,meta20325){
return (new cljs.core.async.t_cljs$core$async20324(map_LT___$1,f__$1,ch__$1,meta20322__$1,___$2,fn1__$1,meta20325));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20324(self__.map_LT_,self__.f,self__.ch,self__.meta20322,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__13366__auto__ = ret;
if(cljs.core.truth_(and__13366__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__13366__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20321.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20321.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20322","meta20322",761870023,null)], null);
});

cljs.core.async.t_cljs$core$async20321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20321";

cljs.core.async.t_cljs$core$async20321.cljs$lang$ctorPrWriter = (function (this__13976__auto__,writer__13977__auto__,opt__13978__auto__){
return cljs.core._write.call(null,writer__13977__auto__,"cljs.core.async/t_cljs$core$async20321");
});

cljs.core.async.__GT_t_cljs$core$async20321 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20321(map_LT___$1,f__$1,ch__$1,meta20322){
return (new cljs.core.async.t_cljs$core$async20321(map_LT___$1,f__$1,ch__$1,meta20322));
});

}

return (new cljs.core.async.t_cljs$core$async20321(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20330 = (function (map_GT_,f,ch,meta20331){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20331 = meta20331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20332,meta20331__$1){
var self__ = this;
var _20332__$1 = this;
return (new cljs.core.async.t_cljs$core$async20330(self__.map_GT_,self__.f,self__.ch,meta20331__$1));
});

cljs.core.async.t_cljs$core$async20330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20332){
var self__ = this;
var _20332__$1 = this;
return self__.meta20331;
});

cljs.core.async.t_cljs$core$async20330.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20330.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20330.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20331","meta20331",-440817813,null)], null);
});

cljs.core.async.t_cljs$core$async20330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20330";

cljs.core.async.t_cljs$core$async20330.cljs$lang$ctorPrWriter = (function (this__13976__auto__,writer__13977__auto__,opt__13978__auto__){
return cljs.core._write.call(null,writer__13977__auto__,"cljs.core.async/t_cljs$core$async20330");
});

cljs.core.async.__GT_t_cljs$core$async20330 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20330(map_GT___$1,f__$1,ch__$1,meta20331){
return (new cljs.core.async.t_cljs$core$async20330(map_GT___$1,f__$1,ch__$1,meta20331));
});

}

return (new cljs.core.async.t_cljs$core$async20330(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20336 = (function (filter_GT_,p,ch,meta20337){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20337 = meta20337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20338,meta20337__$1){
var self__ = this;
var _20338__$1 = this;
return (new cljs.core.async.t_cljs$core$async20336(self__.filter_GT_,self__.p,self__.ch,meta20337__$1));
});

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20338){
var self__ = this;
var _20338__$1 = this;
return self__.meta20337;
});

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20337","meta20337",236377690,null)], null);
});

cljs.core.async.t_cljs$core$async20336.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20336";

cljs.core.async.t_cljs$core$async20336.cljs$lang$ctorPrWriter = (function (this__13976__auto__,writer__13977__auto__,opt__13978__auto__){
return cljs.core._write.call(null,writer__13977__auto__,"cljs.core.async/t_cljs$core$async20336");
});

cljs.core.async.__GT_t_cljs$core$async20336 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20336(filter_GT___$1,p__$1,ch__$1,meta20337){
return (new cljs.core.async.t_cljs$core$async20336(filter_GT___$1,p__$1,ch__$1,meta20337));
});

}

return (new cljs.core.async.t_cljs$core$async20336(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args20339 = [];
var len__14436__auto___20383 = arguments.length;
var i__14437__auto___20384 = (0);
while(true){
if((i__14437__auto___20384 < len__14436__auto___20383)){
args20339.push((arguments[i__14437__auto___20384]));

var G__20385 = (i__14437__auto___20384 + (1));
i__14437__auto___20384 = G__20385;
continue;
} else {
}
break;
}

var G__20341 = args20339.length;
switch (G__20341) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20339.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15907__auto___20387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___20387,out){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___20387,out){
return (function (state_20362){
var state_val_20363 = (state_20362[(1)]);
if((state_val_20363 === (7))){
var inst_20358 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20364_20388 = state_20362__$1;
(statearr_20364_20388[(2)] = inst_20358);

(statearr_20364_20388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (1))){
var state_20362__$1 = state_20362;
var statearr_20365_20389 = state_20362__$1;
(statearr_20365_20389[(2)] = null);

(statearr_20365_20389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (4))){
var inst_20344 = (state_20362[(7)]);
var inst_20344__$1 = (state_20362[(2)]);
var inst_20345 = (inst_20344__$1 == null);
var state_20362__$1 = (function (){var statearr_20366 = state_20362;
(statearr_20366[(7)] = inst_20344__$1);

return statearr_20366;
})();
if(cljs.core.truth_(inst_20345)){
var statearr_20367_20390 = state_20362__$1;
(statearr_20367_20390[(1)] = (5));

} else {
var statearr_20368_20391 = state_20362__$1;
(statearr_20368_20391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (6))){
var inst_20344 = (state_20362[(7)]);
var inst_20349 = p.call(null,inst_20344);
var state_20362__$1 = state_20362;
if(cljs.core.truth_(inst_20349)){
var statearr_20369_20392 = state_20362__$1;
(statearr_20369_20392[(1)] = (8));

} else {
var statearr_20370_20393 = state_20362__$1;
(statearr_20370_20393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (3))){
var inst_20360 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20362__$1,inst_20360);
} else {
if((state_val_20363 === (2))){
var state_20362__$1 = state_20362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20362__$1,(4),ch);
} else {
if((state_val_20363 === (11))){
var inst_20352 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20371_20394 = state_20362__$1;
(statearr_20371_20394[(2)] = inst_20352);

(statearr_20371_20394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (9))){
var state_20362__$1 = state_20362;
var statearr_20372_20395 = state_20362__$1;
(statearr_20372_20395[(2)] = null);

(statearr_20372_20395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (5))){
var inst_20347 = cljs.core.async.close_BANG_.call(null,out);
var state_20362__$1 = state_20362;
var statearr_20373_20396 = state_20362__$1;
(statearr_20373_20396[(2)] = inst_20347);

(statearr_20373_20396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (10))){
var inst_20355 = (state_20362[(2)]);
var state_20362__$1 = (function (){var statearr_20374 = state_20362;
(statearr_20374[(8)] = inst_20355);

return statearr_20374;
})();
var statearr_20375_20397 = state_20362__$1;
(statearr_20375_20397[(2)] = null);

(statearr_20375_20397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (8))){
var inst_20344 = (state_20362[(7)]);
var state_20362__$1 = state_20362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20362__$1,(11),out,inst_20344);
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
});})(c__15907__auto___20387,out))
;
return ((function (switch__15842__auto__,c__15907__auto___20387,out){
return (function() {
var cljs$core$async$state_machine__15843__auto__ = null;
var cljs$core$async$state_machine__15843__auto____0 = (function (){
var statearr_20379 = [null,null,null,null,null,null,null,null,null];
(statearr_20379[(0)] = cljs$core$async$state_machine__15843__auto__);

(statearr_20379[(1)] = (1));

return statearr_20379;
});
var cljs$core$async$state_machine__15843__auto____1 = (function (state_20362){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_20362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e20380){if((e20380 instanceof Object)){
var ex__15846__auto__ = e20380;
var statearr_20381_20398 = state_20362;
(statearr_20381_20398[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20399 = state_20362;
state_20362 = G__20399;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$state_machine__15843__auto__ = function(state_20362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15843__auto____1.call(this,state_20362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15843__auto____0;
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15843__auto____1;
return cljs$core$async$state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___20387,out))
})();
var state__15909__auto__ = (function (){var statearr_20382 = f__15908__auto__.call(null);
(statearr_20382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___20387);

return statearr_20382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___20387,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20400 = [];
var len__14436__auto___20403 = arguments.length;
var i__14437__auto___20404 = (0);
while(true){
if((i__14437__auto___20404 < len__14436__auto___20403)){
args20400.push((arguments[i__14437__auto___20404]));

var G__20405 = (i__14437__auto___20404 + (1));
i__14437__auto___20404 = G__20405;
continue;
} else {
}
break;
}

var G__20402 = args20400.length;
switch (G__20402) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20400.length)].join('')));

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
var c__15907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto__){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto__){
return (function (state_20572){
var state_val_20573 = (state_20572[(1)]);
if((state_val_20573 === (7))){
var inst_20568 = (state_20572[(2)]);
var state_20572__$1 = state_20572;
var statearr_20574_20615 = state_20572__$1;
(statearr_20574_20615[(2)] = inst_20568);

(statearr_20574_20615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (20))){
var inst_20538 = (state_20572[(7)]);
var inst_20549 = (state_20572[(2)]);
var inst_20550 = cljs.core.next.call(null,inst_20538);
var inst_20524 = inst_20550;
var inst_20525 = null;
var inst_20526 = (0);
var inst_20527 = (0);
var state_20572__$1 = (function (){var statearr_20575 = state_20572;
(statearr_20575[(8)] = inst_20526);

(statearr_20575[(9)] = inst_20524);

(statearr_20575[(10)] = inst_20525);

(statearr_20575[(11)] = inst_20527);

(statearr_20575[(12)] = inst_20549);

return statearr_20575;
})();
var statearr_20576_20616 = state_20572__$1;
(statearr_20576_20616[(2)] = null);

(statearr_20576_20616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (1))){
var state_20572__$1 = state_20572;
var statearr_20577_20617 = state_20572__$1;
(statearr_20577_20617[(2)] = null);

(statearr_20577_20617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (4))){
var inst_20513 = (state_20572[(13)]);
var inst_20513__$1 = (state_20572[(2)]);
var inst_20514 = (inst_20513__$1 == null);
var state_20572__$1 = (function (){var statearr_20578 = state_20572;
(statearr_20578[(13)] = inst_20513__$1);

return statearr_20578;
})();
if(cljs.core.truth_(inst_20514)){
var statearr_20579_20618 = state_20572__$1;
(statearr_20579_20618[(1)] = (5));

} else {
var statearr_20580_20619 = state_20572__$1;
(statearr_20580_20619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (15))){
var state_20572__$1 = state_20572;
var statearr_20584_20620 = state_20572__$1;
(statearr_20584_20620[(2)] = null);

(statearr_20584_20620[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (21))){
var state_20572__$1 = state_20572;
var statearr_20585_20621 = state_20572__$1;
(statearr_20585_20621[(2)] = null);

(statearr_20585_20621[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (13))){
var inst_20526 = (state_20572[(8)]);
var inst_20524 = (state_20572[(9)]);
var inst_20525 = (state_20572[(10)]);
var inst_20527 = (state_20572[(11)]);
var inst_20534 = (state_20572[(2)]);
var inst_20535 = (inst_20527 + (1));
var tmp20581 = inst_20526;
var tmp20582 = inst_20524;
var tmp20583 = inst_20525;
var inst_20524__$1 = tmp20582;
var inst_20525__$1 = tmp20583;
var inst_20526__$1 = tmp20581;
var inst_20527__$1 = inst_20535;
var state_20572__$1 = (function (){var statearr_20586 = state_20572;
(statearr_20586[(14)] = inst_20534);

(statearr_20586[(8)] = inst_20526__$1);

(statearr_20586[(9)] = inst_20524__$1);

(statearr_20586[(10)] = inst_20525__$1);

(statearr_20586[(11)] = inst_20527__$1);

return statearr_20586;
})();
var statearr_20587_20622 = state_20572__$1;
(statearr_20587_20622[(2)] = null);

(statearr_20587_20622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (22))){
var state_20572__$1 = state_20572;
var statearr_20588_20623 = state_20572__$1;
(statearr_20588_20623[(2)] = null);

(statearr_20588_20623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (6))){
var inst_20513 = (state_20572[(13)]);
var inst_20522 = f.call(null,inst_20513);
var inst_20523 = cljs.core.seq.call(null,inst_20522);
var inst_20524 = inst_20523;
var inst_20525 = null;
var inst_20526 = (0);
var inst_20527 = (0);
var state_20572__$1 = (function (){var statearr_20589 = state_20572;
(statearr_20589[(8)] = inst_20526);

(statearr_20589[(9)] = inst_20524);

(statearr_20589[(10)] = inst_20525);

(statearr_20589[(11)] = inst_20527);

return statearr_20589;
})();
var statearr_20590_20624 = state_20572__$1;
(statearr_20590_20624[(2)] = null);

(statearr_20590_20624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (17))){
var inst_20538 = (state_20572[(7)]);
var inst_20542 = cljs.core.chunk_first.call(null,inst_20538);
var inst_20543 = cljs.core.chunk_rest.call(null,inst_20538);
var inst_20544 = cljs.core.count.call(null,inst_20542);
var inst_20524 = inst_20543;
var inst_20525 = inst_20542;
var inst_20526 = inst_20544;
var inst_20527 = (0);
var state_20572__$1 = (function (){var statearr_20591 = state_20572;
(statearr_20591[(8)] = inst_20526);

(statearr_20591[(9)] = inst_20524);

(statearr_20591[(10)] = inst_20525);

(statearr_20591[(11)] = inst_20527);

return statearr_20591;
})();
var statearr_20592_20625 = state_20572__$1;
(statearr_20592_20625[(2)] = null);

(statearr_20592_20625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (3))){
var inst_20570 = (state_20572[(2)]);
var state_20572__$1 = state_20572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20572__$1,inst_20570);
} else {
if((state_val_20573 === (12))){
var inst_20558 = (state_20572[(2)]);
var state_20572__$1 = state_20572;
var statearr_20593_20626 = state_20572__$1;
(statearr_20593_20626[(2)] = inst_20558);

(statearr_20593_20626[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (2))){
var state_20572__$1 = state_20572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20572__$1,(4),in$);
} else {
if((state_val_20573 === (23))){
var inst_20566 = (state_20572[(2)]);
var state_20572__$1 = state_20572;
var statearr_20594_20627 = state_20572__$1;
(statearr_20594_20627[(2)] = inst_20566);

(statearr_20594_20627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (19))){
var inst_20553 = (state_20572[(2)]);
var state_20572__$1 = state_20572;
var statearr_20595_20628 = state_20572__$1;
(statearr_20595_20628[(2)] = inst_20553);

(statearr_20595_20628[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (11))){
var inst_20524 = (state_20572[(9)]);
var inst_20538 = (state_20572[(7)]);
var inst_20538__$1 = cljs.core.seq.call(null,inst_20524);
var state_20572__$1 = (function (){var statearr_20596 = state_20572;
(statearr_20596[(7)] = inst_20538__$1);

return statearr_20596;
})();
if(inst_20538__$1){
var statearr_20597_20629 = state_20572__$1;
(statearr_20597_20629[(1)] = (14));

} else {
var statearr_20598_20630 = state_20572__$1;
(statearr_20598_20630[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (9))){
var inst_20560 = (state_20572[(2)]);
var inst_20561 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20572__$1 = (function (){var statearr_20599 = state_20572;
(statearr_20599[(15)] = inst_20560);

return statearr_20599;
})();
if(cljs.core.truth_(inst_20561)){
var statearr_20600_20631 = state_20572__$1;
(statearr_20600_20631[(1)] = (21));

} else {
var statearr_20601_20632 = state_20572__$1;
(statearr_20601_20632[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (5))){
var inst_20516 = cljs.core.async.close_BANG_.call(null,out);
var state_20572__$1 = state_20572;
var statearr_20602_20633 = state_20572__$1;
(statearr_20602_20633[(2)] = inst_20516);

(statearr_20602_20633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (14))){
var inst_20538 = (state_20572[(7)]);
var inst_20540 = cljs.core.chunked_seq_QMARK_.call(null,inst_20538);
var state_20572__$1 = state_20572;
if(inst_20540){
var statearr_20603_20634 = state_20572__$1;
(statearr_20603_20634[(1)] = (17));

} else {
var statearr_20604_20635 = state_20572__$1;
(statearr_20604_20635[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (16))){
var inst_20556 = (state_20572[(2)]);
var state_20572__$1 = state_20572;
var statearr_20605_20636 = state_20572__$1;
(statearr_20605_20636[(2)] = inst_20556);

(statearr_20605_20636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20573 === (10))){
var inst_20525 = (state_20572[(10)]);
var inst_20527 = (state_20572[(11)]);
var inst_20532 = cljs.core._nth.call(null,inst_20525,inst_20527);
var state_20572__$1 = state_20572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20572__$1,(13),out,inst_20532);
} else {
if((state_val_20573 === (18))){
var inst_20538 = (state_20572[(7)]);
var inst_20547 = cljs.core.first.call(null,inst_20538);
var state_20572__$1 = state_20572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20572__$1,(20),out,inst_20547);
} else {
if((state_val_20573 === (8))){
var inst_20526 = (state_20572[(8)]);
var inst_20527 = (state_20572[(11)]);
var inst_20529 = (inst_20527 < inst_20526);
var inst_20530 = inst_20529;
var state_20572__$1 = state_20572;
if(cljs.core.truth_(inst_20530)){
var statearr_20606_20637 = state_20572__$1;
(statearr_20606_20637[(1)] = (10));

} else {
var statearr_20607_20638 = state_20572__$1;
(statearr_20607_20638[(1)] = (11));

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
});})(c__15907__auto__))
;
return ((function (switch__15842__auto__,c__15907__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15843__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15843__auto____0 = (function (){
var statearr_20611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20611[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15843__auto__);

(statearr_20611[(1)] = (1));

return statearr_20611;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15843__auto____1 = (function (state_20572){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_20572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e20612){if((e20612 instanceof Object)){
var ex__15846__auto__ = e20612;
var statearr_20613_20639 = state_20572;
(statearr_20613_20639[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20640 = state_20572;
state_20572 = G__20640;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15843__auto__ = function(state_20572){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15843__auto____1.call(this,state_20572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15843__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15843__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto__))
})();
var state__15909__auto__ = (function (){var statearr_20614 = f__15908__auto__.call(null);
(statearr_20614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto__);

return statearr_20614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto__))
);

return c__15907__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20641 = [];
var len__14436__auto___20644 = arguments.length;
var i__14437__auto___20645 = (0);
while(true){
if((i__14437__auto___20645 < len__14436__auto___20644)){
args20641.push((arguments[i__14437__auto___20645]));

var G__20646 = (i__14437__auto___20645 + (1));
i__14437__auto___20645 = G__20646;
continue;
} else {
}
break;
}

var G__20643 = args20641.length;
switch (G__20643) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20641.length)].join('')));

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
var args20648 = [];
var len__14436__auto___20651 = arguments.length;
var i__14437__auto___20652 = (0);
while(true){
if((i__14437__auto___20652 < len__14436__auto___20651)){
args20648.push((arguments[i__14437__auto___20652]));

var G__20653 = (i__14437__auto___20652 + (1));
i__14437__auto___20652 = G__20653;
continue;
} else {
}
break;
}

var G__20650 = args20648.length;
switch (G__20650) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20648.length)].join('')));

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
var args20655 = [];
var len__14436__auto___20706 = arguments.length;
var i__14437__auto___20707 = (0);
while(true){
if((i__14437__auto___20707 < len__14436__auto___20706)){
args20655.push((arguments[i__14437__auto___20707]));

var G__20708 = (i__14437__auto___20707 + (1));
i__14437__auto___20707 = G__20708;
continue;
} else {
}
break;
}

var G__20657 = args20655.length;
switch (G__20657) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20655.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15907__auto___20710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___20710,out){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___20710,out){
return (function (state_20681){
var state_val_20682 = (state_20681[(1)]);
if((state_val_20682 === (7))){
var inst_20676 = (state_20681[(2)]);
var state_20681__$1 = state_20681;
var statearr_20683_20711 = state_20681__$1;
(statearr_20683_20711[(2)] = inst_20676);

(statearr_20683_20711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (1))){
var inst_20658 = null;
var state_20681__$1 = (function (){var statearr_20684 = state_20681;
(statearr_20684[(7)] = inst_20658);

return statearr_20684;
})();
var statearr_20685_20712 = state_20681__$1;
(statearr_20685_20712[(2)] = null);

(statearr_20685_20712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (4))){
var inst_20661 = (state_20681[(8)]);
var inst_20661__$1 = (state_20681[(2)]);
var inst_20662 = (inst_20661__$1 == null);
var inst_20663 = cljs.core.not.call(null,inst_20662);
var state_20681__$1 = (function (){var statearr_20686 = state_20681;
(statearr_20686[(8)] = inst_20661__$1);

return statearr_20686;
})();
if(inst_20663){
var statearr_20687_20713 = state_20681__$1;
(statearr_20687_20713[(1)] = (5));

} else {
var statearr_20688_20714 = state_20681__$1;
(statearr_20688_20714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (6))){
var state_20681__$1 = state_20681;
var statearr_20689_20715 = state_20681__$1;
(statearr_20689_20715[(2)] = null);

(statearr_20689_20715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (3))){
var inst_20678 = (state_20681[(2)]);
var inst_20679 = cljs.core.async.close_BANG_.call(null,out);
var state_20681__$1 = (function (){var statearr_20690 = state_20681;
(statearr_20690[(9)] = inst_20678);

return statearr_20690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20681__$1,inst_20679);
} else {
if((state_val_20682 === (2))){
var state_20681__$1 = state_20681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20681__$1,(4),ch);
} else {
if((state_val_20682 === (11))){
var inst_20661 = (state_20681[(8)]);
var inst_20670 = (state_20681[(2)]);
var inst_20658 = inst_20661;
var state_20681__$1 = (function (){var statearr_20691 = state_20681;
(statearr_20691[(10)] = inst_20670);

(statearr_20691[(7)] = inst_20658);

return statearr_20691;
})();
var statearr_20692_20716 = state_20681__$1;
(statearr_20692_20716[(2)] = null);

(statearr_20692_20716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (9))){
var inst_20661 = (state_20681[(8)]);
var state_20681__$1 = state_20681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20681__$1,(11),out,inst_20661);
} else {
if((state_val_20682 === (5))){
var inst_20658 = (state_20681[(7)]);
var inst_20661 = (state_20681[(8)]);
var inst_20665 = cljs.core._EQ_.call(null,inst_20661,inst_20658);
var state_20681__$1 = state_20681;
if(inst_20665){
var statearr_20694_20717 = state_20681__$1;
(statearr_20694_20717[(1)] = (8));

} else {
var statearr_20695_20718 = state_20681__$1;
(statearr_20695_20718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (10))){
var inst_20673 = (state_20681[(2)]);
var state_20681__$1 = state_20681;
var statearr_20696_20719 = state_20681__$1;
(statearr_20696_20719[(2)] = inst_20673);

(statearr_20696_20719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (8))){
var inst_20658 = (state_20681[(7)]);
var tmp20693 = inst_20658;
var inst_20658__$1 = tmp20693;
var state_20681__$1 = (function (){var statearr_20697 = state_20681;
(statearr_20697[(7)] = inst_20658__$1);

return statearr_20697;
})();
var statearr_20698_20720 = state_20681__$1;
(statearr_20698_20720[(2)] = null);

(statearr_20698_20720[(1)] = (2));


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
});})(c__15907__auto___20710,out))
;
return ((function (switch__15842__auto__,c__15907__auto___20710,out){
return (function() {
var cljs$core$async$state_machine__15843__auto__ = null;
var cljs$core$async$state_machine__15843__auto____0 = (function (){
var statearr_20702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20702[(0)] = cljs$core$async$state_machine__15843__auto__);

(statearr_20702[(1)] = (1));

return statearr_20702;
});
var cljs$core$async$state_machine__15843__auto____1 = (function (state_20681){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_20681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e20703){if((e20703 instanceof Object)){
var ex__15846__auto__ = e20703;
var statearr_20704_20721 = state_20681;
(statearr_20704_20721[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20722 = state_20681;
state_20681 = G__20722;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$state_machine__15843__auto__ = function(state_20681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15843__auto____1.call(this,state_20681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15843__auto____0;
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15843__auto____1;
return cljs$core$async$state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___20710,out))
})();
var state__15909__auto__ = (function (){var statearr_20705 = f__15908__auto__.call(null);
(statearr_20705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___20710);

return statearr_20705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___20710,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20723 = [];
var len__14436__auto___20793 = arguments.length;
var i__14437__auto___20794 = (0);
while(true){
if((i__14437__auto___20794 < len__14436__auto___20793)){
args20723.push((arguments[i__14437__auto___20794]));

var G__20795 = (i__14437__auto___20794 + (1));
i__14437__auto___20794 = G__20795;
continue;
} else {
}
break;
}

var G__20725 = args20723.length;
switch (G__20725) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20723.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15907__auto___20797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___20797,out){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___20797,out){
return (function (state_20763){
var state_val_20764 = (state_20763[(1)]);
if((state_val_20764 === (7))){
var inst_20759 = (state_20763[(2)]);
var state_20763__$1 = state_20763;
var statearr_20765_20798 = state_20763__$1;
(statearr_20765_20798[(2)] = inst_20759);

(statearr_20765_20798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (1))){
var inst_20726 = (new Array(n));
var inst_20727 = inst_20726;
var inst_20728 = (0);
var state_20763__$1 = (function (){var statearr_20766 = state_20763;
(statearr_20766[(7)] = inst_20728);

(statearr_20766[(8)] = inst_20727);

return statearr_20766;
})();
var statearr_20767_20799 = state_20763__$1;
(statearr_20767_20799[(2)] = null);

(statearr_20767_20799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (4))){
var inst_20731 = (state_20763[(9)]);
var inst_20731__$1 = (state_20763[(2)]);
var inst_20732 = (inst_20731__$1 == null);
var inst_20733 = cljs.core.not.call(null,inst_20732);
var state_20763__$1 = (function (){var statearr_20768 = state_20763;
(statearr_20768[(9)] = inst_20731__$1);

return statearr_20768;
})();
if(inst_20733){
var statearr_20769_20800 = state_20763__$1;
(statearr_20769_20800[(1)] = (5));

} else {
var statearr_20770_20801 = state_20763__$1;
(statearr_20770_20801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (15))){
var inst_20753 = (state_20763[(2)]);
var state_20763__$1 = state_20763;
var statearr_20771_20802 = state_20763__$1;
(statearr_20771_20802[(2)] = inst_20753);

(statearr_20771_20802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (13))){
var state_20763__$1 = state_20763;
var statearr_20772_20803 = state_20763__$1;
(statearr_20772_20803[(2)] = null);

(statearr_20772_20803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (6))){
var inst_20728 = (state_20763[(7)]);
var inst_20749 = (inst_20728 > (0));
var state_20763__$1 = state_20763;
if(cljs.core.truth_(inst_20749)){
var statearr_20773_20804 = state_20763__$1;
(statearr_20773_20804[(1)] = (12));

} else {
var statearr_20774_20805 = state_20763__$1;
(statearr_20774_20805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (3))){
var inst_20761 = (state_20763[(2)]);
var state_20763__$1 = state_20763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20763__$1,inst_20761);
} else {
if((state_val_20764 === (12))){
var inst_20727 = (state_20763[(8)]);
var inst_20751 = cljs.core.vec.call(null,inst_20727);
var state_20763__$1 = state_20763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20763__$1,(15),out,inst_20751);
} else {
if((state_val_20764 === (2))){
var state_20763__$1 = state_20763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20763__$1,(4),ch);
} else {
if((state_val_20764 === (11))){
var inst_20743 = (state_20763[(2)]);
var inst_20744 = (new Array(n));
var inst_20727 = inst_20744;
var inst_20728 = (0);
var state_20763__$1 = (function (){var statearr_20775 = state_20763;
(statearr_20775[(7)] = inst_20728);

(statearr_20775[(8)] = inst_20727);

(statearr_20775[(10)] = inst_20743);

return statearr_20775;
})();
var statearr_20776_20806 = state_20763__$1;
(statearr_20776_20806[(2)] = null);

(statearr_20776_20806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (9))){
var inst_20727 = (state_20763[(8)]);
var inst_20741 = cljs.core.vec.call(null,inst_20727);
var state_20763__$1 = state_20763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20763__$1,(11),out,inst_20741);
} else {
if((state_val_20764 === (5))){
var inst_20728 = (state_20763[(7)]);
var inst_20731 = (state_20763[(9)]);
var inst_20727 = (state_20763[(8)]);
var inst_20736 = (state_20763[(11)]);
var inst_20735 = (inst_20727[inst_20728] = inst_20731);
var inst_20736__$1 = (inst_20728 + (1));
var inst_20737 = (inst_20736__$1 < n);
var state_20763__$1 = (function (){var statearr_20777 = state_20763;
(statearr_20777[(11)] = inst_20736__$1);

(statearr_20777[(12)] = inst_20735);

return statearr_20777;
})();
if(cljs.core.truth_(inst_20737)){
var statearr_20778_20807 = state_20763__$1;
(statearr_20778_20807[(1)] = (8));

} else {
var statearr_20779_20808 = state_20763__$1;
(statearr_20779_20808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (14))){
var inst_20756 = (state_20763[(2)]);
var inst_20757 = cljs.core.async.close_BANG_.call(null,out);
var state_20763__$1 = (function (){var statearr_20781 = state_20763;
(statearr_20781[(13)] = inst_20756);

return statearr_20781;
})();
var statearr_20782_20809 = state_20763__$1;
(statearr_20782_20809[(2)] = inst_20757);

(statearr_20782_20809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (10))){
var inst_20747 = (state_20763[(2)]);
var state_20763__$1 = state_20763;
var statearr_20783_20810 = state_20763__$1;
(statearr_20783_20810[(2)] = inst_20747);

(statearr_20783_20810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (8))){
var inst_20727 = (state_20763[(8)]);
var inst_20736 = (state_20763[(11)]);
var tmp20780 = inst_20727;
var inst_20727__$1 = tmp20780;
var inst_20728 = inst_20736;
var state_20763__$1 = (function (){var statearr_20784 = state_20763;
(statearr_20784[(7)] = inst_20728);

(statearr_20784[(8)] = inst_20727__$1);

return statearr_20784;
})();
var statearr_20785_20811 = state_20763__$1;
(statearr_20785_20811[(2)] = null);

(statearr_20785_20811[(1)] = (2));


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
});})(c__15907__auto___20797,out))
;
return ((function (switch__15842__auto__,c__15907__auto___20797,out){
return (function() {
var cljs$core$async$state_machine__15843__auto__ = null;
var cljs$core$async$state_machine__15843__auto____0 = (function (){
var statearr_20789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20789[(0)] = cljs$core$async$state_machine__15843__auto__);

(statearr_20789[(1)] = (1));

return statearr_20789;
});
var cljs$core$async$state_machine__15843__auto____1 = (function (state_20763){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_20763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e20790){if((e20790 instanceof Object)){
var ex__15846__auto__ = e20790;
var statearr_20791_20812 = state_20763;
(statearr_20791_20812[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20813 = state_20763;
state_20763 = G__20813;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$state_machine__15843__auto__ = function(state_20763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15843__auto____1.call(this,state_20763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15843__auto____0;
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15843__auto____1;
return cljs$core$async$state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___20797,out))
})();
var state__15909__auto__ = (function (){var statearr_20792 = f__15908__auto__.call(null);
(statearr_20792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___20797);

return statearr_20792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___20797,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20814 = [];
var len__14436__auto___20888 = arguments.length;
var i__14437__auto___20889 = (0);
while(true){
if((i__14437__auto___20889 < len__14436__auto___20888)){
args20814.push((arguments[i__14437__auto___20889]));

var G__20890 = (i__14437__auto___20889 + (1));
i__14437__auto___20889 = G__20890;
continue;
} else {
}
break;
}

var G__20816 = args20814.length;
switch (G__20816) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20814.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15907__auto___20892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15907__auto___20892,out){
return (function (){
var f__15908__auto__ = (function (){var switch__15842__auto__ = ((function (c__15907__auto___20892,out){
return (function (state_20858){
var state_val_20859 = (state_20858[(1)]);
if((state_val_20859 === (7))){
var inst_20854 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20860_20893 = state_20858__$1;
(statearr_20860_20893[(2)] = inst_20854);

(statearr_20860_20893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (1))){
var inst_20817 = [];
var inst_20818 = inst_20817;
var inst_20819 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20858__$1 = (function (){var statearr_20861 = state_20858;
(statearr_20861[(7)] = inst_20818);

(statearr_20861[(8)] = inst_20819);

return statearr_20861;
})();
var statearr_20862_20894 = state_20858__$1;
(statearr_20862_20894[(2)] = null);

(statearr_20862_20894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (4))){
var inst_20822 = (state_20858[(9)]);
var inst_20822__$1 = (state_20858[(2)]);
var inst_20823 = (inst_20822__$1 == null);
var inst_20824 = cljs.core.not.call(null,inst_20823);
var state_20858__$1 = (function (){var statearr_20863 = state_20858;
(statearr_20863[(9)] = inst_20822__$1);

return statearr_20863;
})();
if(inst_20824){
var statearr_20864_20895 = state_20858__$1;
(statearr_20864_20895[(1)] = (5));

} else {
var statearr_20865_20896 = state_20858__$1;
(statearr_20865_20896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (15))){
var inst_20848 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20866_20897 = state_20858__$1;
(statearr_20866_20897[(2)] = inst_20848);

(statearr_20866_20897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (13))){
var state_20858__$1 = state_20858;
var statearr_20867_20898 = state_20858__$1;
(statearr_20867_20898[(2)] = null);

(statearr_20867_20898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (6))){
var inst_20818 = (state_20858[(7)]);
var inst_20843 = inst_20818.length;
var inst_20844 = (inst_20843 > (0));
var state_20858__$1 = state_20858;
if(cljs.core.truth_(inst_20844)){
var statearr_20868_20899 = state_20858__$1;
(statearr_20868_20899[(1)] = (12));

} else {
var statearr_20869_20900 = state_20858__$1;
(statearr_20869_20900[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (3))){
var inst_20856 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20858__$1,inst_20856);
} else {
if((state_val_20859 === (12))){
var inst_20818 = (state_20858[(7)]);
var inst_20846 = cljs.core.vec.call(null,inst_20818);
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20858__$1,(15),out,inst_20846);
} else {
if((state_val_20859 === (2))){
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20858__$1,(4),ch);
} else {
if((state_val_20859 === (11))){
var inst_20822 = (state_20858[(9)]);
var inst_20826 = (state_20858[(10)]);
var inst_20836 = (state_20858[(2)]);
var inst_20837 = [];
var inst_20838 = inst_20837.push(inst_20822);
var inst_20818 = inst_20837;
var inst_20819 = inst_20826;
var state_20858__$1 = (function (){var statearr_20870 = state_20858;
(statearr_20870[(7)] = inst_20818);

(statearr_20870[(8)] = inst_20819);

(statearr_20870[(11)] = inst_20836);

(statearr_20870[(12)] = inst_20838);

return statearr_20870;
})();
var statearr_20871_20901 = state_20858__$1;
(statearr_20871_20901[(2)] = null);

(statearr_20871_20901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (9))){
var inst_20818 = (state_20858[(7)]);
var inst_20834 = cljs.core.vec.call(null,inst_20818);
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20858__$1,(11),out,inst_20834);
} else {
if((state_val_20859 === (5))){
var inst_20822 = (state_20858[(9)]);
var inst_20819 = (state_20858[(8)]);
var inst_20826 = (state_20858[(10)]);
var inst_20826__$1 = f.call(null,inst_20822);
var inst_20827 = cljs.core._EQ_.call(null,inst_20826__$1,inst_20819);
var inst_20828 = cljs.core.keyword_identical_QMARK_.call(null,inst_20819,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20829 = (inst_20827) || (inst_20828);
var state_20858__$1 = (function (){var statearr_20872 = state_20858;
(statearr_20872[(10)] = inst_20826__$1);

return statearr_20872;
})();
if(cljs.core.truth_(inst_20829)){
var statearr_20873_20902 = state_20858__$1;
(statearr_20873_20902[(1)] = (8));

} else {
var statearr_20874_20903 = state_20858__$1;
(statearr_20874_20903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (14))){
var inst_20851 = (state_20858[(2)]);
var inst_20852 = cljs.core.async.close_BANG_.call(null,out);
var state_20858__$1 = (function (){var statearr_20876 = state_20858;
(statearr_20876[(13)] = inst_20851);

return statearr_20876;
})();
var statearr_20877_20904 = state_20858__$1;
(statearr_20877_20904[(2)] = inst_20852);

(statearr_20877_20904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (10))){
var inst_20841 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20878_20905 = state_20858__$1;
(statearr_20878_20905[(2)] = inst_20841);

(statearr_20878_20905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (8))){
var inst_20822 = (state_20858[(9)]);
var inst_20818 = (state_20858[(7)]);
var inst_20826 = (state_20858[(10)]);
var inst_20831 = inst_20818.push(inst_20822);
var tmp20875 = inst_20818;
var inst_20818__$1 = tmp20875;
var inst_20819 = inst_20826;
var state_20858__$1 = (function (){var statearr_20879 = state_20858;
(statearr_20879[(7)] = inst_20818__$1);

(statearr_20879[(8)] = inst_20819);

(statearr_20879[(14)] = inst_20831);

return statearr_20879;
})();
var statearr_20880_20906 = state_20858__$1;
(statearr_20880_20906[(2)] = null);

(statearr_20880_20906[(1)] = (2));


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
});})(c__15907__auto___20892,out))
;
return ((function (switch__15842__auto__,c__15907__auto___20892,out){
return (function() {
var cljs$core$async$state_machine__15843__auto__ = null;
var cljs$core$async$state_machine__15843__auto____0 = (function (){
var statearr_20884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20884[(0)] = cljs$core$async$state_machine__15843__auto__);

(statearr_20884[(1)] = (1));

return statearr_20884;
});
var cljs$core$async$state_machine__15843__auto____1 = (function (state_20858){
while(true){
var ret_value__15844__auto__ = (function (){try{while(true){
var result__15845__auto__ = switch__15842__auto__.call(null,state_20858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15845__auto__;
}
break;
}
}catch (e20885){if((e20885 instanceof Object)){
var ex__15846__auto__ = e20885;
var statearr_20886_20907 = state_20858;
(statearr_20886_20907[(5)] = ex__15846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20908 = state_20858;
state_20858 = G__20908;
continue;
} else {
return ret_value__15844__auto__;
}
break;
}
});
cljs$core$async$state_machine__15843__auto__ = function(state_20858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15843__auto____1.call(this,state_20858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15843__auto____0;
cljs$core$async$state_machine__15843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15843__auto____1;
return cljs$core$async$state_machine__15843__auto__;
})()
;})(switch__15842__auto__,c__15907__auto___20892,out))
})();
var state__15909__auto__ = (function (){var statearr_20887 = f__15908__auto__.call(null);
(statearr_20887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15907__auto___20892);

return statearr_20887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15909__auto__);
});})(c__15907__auto___20892,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map