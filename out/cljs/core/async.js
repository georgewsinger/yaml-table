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
var args18064 = [];
var len__14433__auto___18070 = arguments.length;
var i__14434__auto___18071 = (0);
while(true){
if((i__14434__auto___18071 < len__14433__auto___18070)){
args18064.push((arguments[i__14434__auto___18071]));

var G__18072 = (i__14434__auto___18071 + (1));
i__14434__auto___18071 = G__18072;
continue;
} else {
}
break;
}

var G__18066 = args18064.length;
switch (G__18066) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18064.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async18067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18067 = (function (f,blockable,meta18068){
this.f = f;
this.blockable = blockable;
this.meta18068 = meta18068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18069,meta18068__$1){
var self__ = this;
var _18069__$1 = this;
return (new cljs.core.async.t_cljs$core$async18067(self__.f,self__.blockable,meta18068__$1));
});

cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18069){
var self__ = this;
var _18069__$1 = this;
return self__.meta18068;
});

cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18068","meta18068",379857558,null)], null);
});

cljs.core.async.t_cljs$core$async18067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18067";

cljs.core.async.t_cljs$core$async18067.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async18067");
});

cljs.core.async.__GT_t_cljs$core$async18067 = (function cljs$core$async$__GT_t_cljs$core$async18067(f__$1,blockable__$1,meta18068){
return (new cljs.core.async.t_cljs$core$async18067(f__$1,blockable__$1,meta18068));
});

}

return (new cljs.core.async.t_cljs$core$async18067(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args18076 = [];
var len__14433__auto___18079 = arguments.length;
var i__14434__auto___18080 = (0);
while(true){
if((i__14434__auto___18080 < len__14433__auto___18079)){
args18076.push((arguments[i__14434__auto___18080]));

var G__18081 = (i__14434__auto___18080 + (1));
i__14434__auto___18080 = G__18081;
continue;
} else {
}
break;
}

var G__18078 = args18076.length;
switch (G__18078) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18076.length)].join('')));

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
var args18083 = [];
var len__14433__auto___18086 = arguments.length;
var i__14434__auto___18087 = (0);
while(true){
if((i__14434__auto___18087 < len__14433__auto___18086)){
args18083.push((arguments[i__14434__auto___18087]));

var G__18088 = (i__14434__auto___18087 + (1));
i__14434__auto___18087 = G__18088;
continue;
} else {
}
break;
}

var G__18085 = args18083.length;
switch (G__18085) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18083.length)].join('')));

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
var args18090 = [];
var len__14433__auto___18093 = arguments.length;
var i__14434__auto___18094 = (0);
while(true){
if((i__14434__auto___18094 < len__14433__auto___18093)){
args18090.push((arguments[i__14434__auto___18094]));

var G__18095 = (i__14434__auto___18094 + (1));
i__14434__auto___18094 = G__18095;
continue;
} else {
}
break;
}

var G__18092 = args18090.length;
switch (G__18092) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18090.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18097 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18097);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18097,ret){
return (function (){
return fn1.call(null,val_18097);
});})(val_18097,ret))
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
var args18098 = [];
var len__14433__auto___18101 = arguments.length;
var i__14434__auto___18102 = (0);
while(true){
if((i__14434__auto___18102 < len__14433__auto___18101)){
args18098.push((arguments[i__14434__auto___18102]));

var G__18103 = (i__14434__auto___18102 + (1));
i__14434__auto___18102 = G__18103;
continue;
} else {
}
break;
}

var G__18100 = args18098.length;
switch (G__18100) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18098.length)].join('')));

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
var n__14278__auto___18105 = n;
var x_18106 = (0);
while(true){
if((x_18106 < n__14278__auto___18105)){
(a[x_18106] = (0));

var G__18107 = (x_18106 + (1));
x_18106 = G__18107;
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

var G__18108 = (i + (1));
i = G__18108;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async18112 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18112 = (function (alt_flag,flag,meta18113){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta18113 = meta18113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18114,meta18113__$1){
var self__ = this;
var _18114__$1 = this;
return (new cljs.core.async.t_cljs$core$async18112(self__.alt_flag,self__.flag,meta18113__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18112.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18114){
var self__ = this;
var _18114__$1 = this;
return self__.meta18113;
});})(flag))
;

cljs.core.async.t_cljs$core$async18112.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18112.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18112.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18113","meta18113",1197401364,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18112.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18112";

cljs.core.async.t_cljs$core$async18112.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async18112");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18112 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18112(alt_flag__$1,flag__$1,meta18113){
return (new cljs.core.async.t_cljs$core$async18112(alt_flag__$1,flag__$1,meta18113));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18112(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18118 = (function (alt_handler,flag,cb,meta18119){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta18119 = meta18119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18120,meta18119__$1){
var self__ = this;
var _18120__$1 = this;
return (new cljs.core.async.t_cljs$core$async18118(self__.alt_handler,self__.flag,self__.cb,meta18119__$1));
});

cljs.core.async.t_cljs$core$async18118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18120){
var self__ = this;
var _18120__$1 = this;
return self__.meta18119;
});

cljs.core.async.t_cljs$core$async18118.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18119","meta18119",272831554,null)], null);
});

cljs.core.async.t_cljs$core$async18118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18118";

cljs.core.async.t_cljs$core$async18118.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async18118");
});

cljs.core.async.__GT_t_cljs$core$async18118 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18118(alt_handler__$1,flag__$1,cb__$1,meta18119){
return (new cljs.core.async.t_cljs$core$async18118(alt_handler__$1,flag__$1,cb__$1,meta18119));
});

}

return (new cljs.core.async.t_cljs$core$async18118(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18121_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18121_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18122_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18122_SHARP_,port], null));
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
var G__18123 = (i + (1));
i = G__18123;
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
var len__14433__auto___18129 = arguments.length;
var i__14434__auto___18130 = (0);
while(true){
if((i__14434__auto___18130 < len__14433__auto___18129)){
args__14440__auto__.push((arguments[i__14434__auto___18130]));

var G__18131 = (i__14434__auto___18130 + (1));
i__14434__auto___18130 = G__18131;
continue;
} else {
}
break;
}

var argseq__14441__auto__ = ((((1) < args__14440__auto__.length))?(new cljs.core.IndexedSeq(args__14440__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14441__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18126){
var map__18127 = p__18126;
var map__18127__$1 = ((((!((map__18127 == null)))?((((map__18127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18127):map__18127);
var opts = map__18127__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18124){
var G__18125 = cljs.core.first.call(null,seq18124);
var seq18124__$1 = cljs.core.next.call(null,seq18124);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18125,seq18124__$1);
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
var args18132 = [];
var len__14433__auto___18182 = arguments.length;
var i__14434__auto___18183 = (0);
while(true){
if((i__14434__auto___18183 < len__14433__auto___18182)){
args18132.push((arguments[i__14434__auto___18183]));

var G__18184 = (i__14434__auto___18183 + (1));
i__14434__auto___18183 = G__18184;
continue;
} else {
}
break;
}

var G__18134 = args18132.length;
switch (G__18134) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18132.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15789__auto___18186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___18186){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___18186){
return (function (state_18158){
var state_val_18159 = (state_18158[(1)]);
if((state_val_18159 === (7))){
var inst_18154 = (state_18158[(2)]);
var state_18158__$1 = state_18158;
var statearr_18160_18187 = state_18158__$1;
(statearr_18160_18187[(2)] = inst_18154);

(statearr_18160_18187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18159 === (1))){
var state_18158__$1 = state_18158;
var statearr_18161_18188 = state_18158__$1;
(statearr_18161_18188[(2)] = null);

(statearr_18161_18188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18159 === (4))){
var inst_18137 = (state_18158[(7)]);
var inst_18137__$1 = (state_18158[(2)]);
var inst_18138 = (inst_18137__$1 == null);
var state_18158__$1 = (function (){var statearr_18162 = state_18158;
(statearr_18162[(7)] = inst_18137__$1);

return statearr_18162;
})();
if(cljs.core.truth_(inst_18138)){
var statearr_18163_18189 = state_18158__$1;
(statearr_18163_18189[(1)] = (5));

} else {
var statearr_18164_18190 = state_18158__$1;
(statearr_18164_18190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18159 === (13))){
var state_18158__$1 = state_18158;
var statearr_18165_18191 = state_18158__$1;
(statearr_18165_18191[(2)] = null);

(statearr_18165_18191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18159 === (6))){
var inst_18137 = (state_18158[(7)]);
var state_18158__$1 = state_18158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18158__$1,(11),to,inst_18137);
} else {
if((state_val_18159 === (3))){
var inst_18156 = (state_18158[(2)]);
var state_18158__$1 = state_18158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18158__$1,inst_18156);
} else {
if((state_val_18159 === (12))){
var state_18158__$1 = state_18158;
var statearr_18166_18192 = state_18158__$1;
(statearr_18166_18192[(2)] = null);

(statearr_18166_18192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18159 === (2))){
var state_18158__$1 = state_18158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18158__$1,(4),from);
} else {
if((state_val_18159 === (11))){
var inst_18147 = (state_18158[(2)]);
var state_18158__$1 = state_18158;
if(cljs.core.truth_(inst_18147)){
var statearr_18167_18193 = state_18158__$1;
(statearr_18167_18193[(1)] = (12));

} else {
var statearr_18168_18194 = state_18158__$1;
(statearr_18168_18194[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18159 === (9))){
var state_18158__$1 = state_18158;
var statearr_18169_18195 = state_18158__$1;
(statearr_18169_18195[(2)] = null);

(statearr_18169_18195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18159 === (5))){
var state_18158__$1 = state_18158;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18170_18196 = state_18158__$1;
(statearr_18170_18196[(1)] = (8));

} else {
var statearr_18171_18197 = state_18158__$1;
(statearr_18171_18197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18159 === (14))){
var inst_18152 = (state_18158[(2)]);
var state_18158__$1 = state_18158;
var statearr_18172_18198 = state_18158__$1;
(statearr_18172_18198[(2)] = inst_18152);

(statearr_18172_18198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18159 === (10))){
var inst_18144 = (state_18158[(2)]);
var state_18158__$1 = state_18158;
var statearr_18173_18199 = state_18158__$1;
(statearr_18173_18199[(2)] = inst_18144);

(statearr_18173_18199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18159 === (8))){
var inst_18141 = cljs.core.async.close_BANG_.call(null,to);
var state_18158__$1 = state_18158;
var statearr_18174_18200 = state_18158__$1;
(statearr_18174_18200[(2)] = inst_18141);

(statearr_18174_18200[(1)] = (10));


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
});})(c__15789__auto___18186))
;
return ((function (switch__15724__auto__,c__15789__auto___18186){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_18178 = [null,null,null,null,null,null,null,null];
(statearr_18178[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_18178[(1)] = (1));

return statearr_18178;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_18158){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_18158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e18179){if((e18179 instanceof Object)){
var ex__15728__auto__ = e18179;
var statearr_18180_18201 = state_18158;
(statearr_18180_18201[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18202 = state_18158;
state_18158 = G__18202;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_18158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_18158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___18186))
})();
var state__15791__auto__ = (function (){var statearr_18181 = f__15790__auto__.call(null);
(statearr_18181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___18186);

return statearr_18181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___18186))
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
return (function (p__18386){
var vec__18387 = p__18386;
var v = cljs.core.nth.call(null,vec__18387,(0),null);
var p = cljs.core.nth.call(null,vec__18387,(1),null);
var job = vec__18387;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15789__auto___18569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___18569,res,vec__18387,v,p,job,jobs,results){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___18569,res,vec__18387,v,p,job,jobs,results){
return (function (state_18392){
var state_val_18393 = (state_18392[(1)]);
if((state_val_18393 === (1))){
var state_18392__$1 = state_18392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18392__$1,(2),res,v);
} else {
if((state_val_18393 === (2))){
var inst_18389 = (state_18392[(2)]);
var inst_18390 = cljs.core.async.close_BANG_.call(null,res);
var state_18392__$1 = (function (){var statearr_18394 = state_18392;
(statearr_18394[(7)] = inst_18389);

return statearr_18394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18392__$1,inst_18390);
} else {
return null;
}
}
});})(c__15789__auto___18569,res,vec__18387,v,p,job,jobs,results))
;
return ((function (switch__15724__auto__,c__15789__auto___18569,res,vec__18387,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_18398 = [null,null,null,null,null,null,null,null];
(statearr_18398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_18398[(1)] = (1));

return statearr_18398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_18392){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_18392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e18399){if((e18399 instanceof Object)){
var ex__15728__auto__ = e18399;
var statearr_18400_18570 = state_18392;
(statearr_18400_18570[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18571 = state_18392;
state_18392 = G__18571;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_18392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_18392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___18569,res,vec__18387,v,p,job,jobs,results))
})();
var state__15791__auto__ = (function (){var statearr_18401 = f__15790__auto__.call(null);
(statearr_18401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___18569);

return statearr_18401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___18569,res,vec__18387,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18402){
var vec__18403 = p__18402;
var v = cljs.core.nth.call(null,vec__18403,(0),null);
var p = cljs.core.nth.call(null,vec__18403,(1),null);
var job = vec__18403;
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
var n__14278__auto___18572 = n;
var __18573 = (0);
while(true){
if((__18573 < n__14278__auto___18572)){
var G__18404_18574 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18404_18574) {
case "compute":
var c__15789__auto___18576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18573,c__15789__auto___18576,G__18404_18574,n__14278__auto___18572,jobs,results,process,async){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (__18573,c__15789__auto___18576,G__18404_18574,n__14278__auto___18572,jobs,results,process,async){
return (function (state_18417){
var state_val_18418 = (state_18417[(1)]);
if((state_val_18418 === (1))){
var state_18417__$1 = state_18417;
var statearr_18419_18577 = state_18417__$1;
(statearr_18419_18577[(2)] = null);

(statearr_18419_18577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (2))){
var state_18417__$1 = state_18417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18417__$1,(4),jobs);
} else {
if((state_val_18418 === (3))){
var inst_18415 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18417__$1,inst_18415);
} else {
if((state_val_18418 === (4))){
var inst_18407 = (state_18417[(2)]);
var inst_18408 = process.call(null,inst_18407);
var state_18417__$1 = state_18417;
if(cljs.core.truth_(inst_18408)){
var statearr_18420_18578 = state_18417__$1;
(statearr_18420_18578[(1)] = (5));

} else {
var statearr_18421_18579 = state_18417__$1;
(statearr_18421_18579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (5))){
var state_18417__$1 = state_18417;
var statearr_18422_18580 = state_18417__$1;
(statearr_18422_18580[(2)] = null);

(statearr_18422_18580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (6))){
var state_18417__$1 = state_18417;
var statearr_18423_18581 = state_18417__$1;
(statearr_18423_18581[(2)] = null);

(statearr_18423_18581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (7))){
var inst_18413 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
var statearr_18424_18582 = state_18417__$1;
(statearr_18424_18582[(2)] = inst_18413);

(statearr_18424_18582[(1)] = (3));


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
});})(__18573,c__15789__auto___18576,G__18404_18574,n__14278__auto___18572,jobs,results,process,async))
;
return ((function (__18573,switch__15724__auto__,c__15789__auto___18576,G__18404_18574,n__14278__auto___18572,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_18428 = [null,null,null,null,null,null,null];
(statearr_18428[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_18428[(1)] = (1));

return statearr_18428;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_18417){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_18417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e18429){if((e18429 instanceof Object)){
var ex__15728__auto__ = e18429;
var statearr_18430_18583 = state_18417;
(statearr_18430_18583[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18584 = state_18417;
state_18417 = G__18584;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_18417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_18417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(__18573,switch__15724__auto__,c__15789__auto___18576,G__18404_18574,n__14278__auto___18572,jobs,results,process,async))
})();
var state__15791__auto__ = (function (){var statearr_18431 = f__15790__auto__.call(null);
(statearr_18431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___18576);

return statearr_18431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(__18573,c__15789__auto___18576,G__18404_18574,n__14278__auto___18572,jobs,results,process,async))
);


break;
case "async":
var c__15789__auto___18585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18573,c__15789__auto___18585,G__18404_18574,n__14278__auto___18572,jobs,results,process,async){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (__18573,c__15789__auto___18585,G__18404_18574,n__14278__auto___18572,jobs,results,process,async){
return (function (state_18444){
var state_val_18445 = (state_18444[(1)]);
if((state_val_18445 === (1))){
var state_18444__$1 = state_18444;
var statearr_18446_18586 = state_18444__$1;
(statearr_18446_18586[(2)] = null);

(statearr_18446_18586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (2))){
var state_18444__$1 = state_18444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18444__$1,(4),jobs);
} else {
if((state_val_18445 === (3))){
var inst_18442 = (state_18444[(2)]);
var state_18444__$1 = state_18444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18444__$1,inst_18442);
} else {
if((state_val_18445 === (4))){
var inst_18434 = (state_18444[(2)]);
var inst_18435 = async.call(null,inst_18434);
var state_18444__$1 = state_18444;
if(cljs.core.truth_(inst_18435)){
var statearr_18447_18587 = state_18444__$1;
(statearr_18447_18587[(1)] = (5));

} else {
var statearr_18448_18588 = state_18444__$1;
(statearr_18448_18588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (5))){
var state_18444__$1 = state_18444;
var statearr_18449_18589 = state_18444__$1;
(statearr_18449_18589[(2)] = null);

(statearr_18449_18589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (6))){
var state_18444__$1 = state_18444;
var statearr_18450_18590 = state_18444__$1;
(statearr_18450_18590[(2)] = null);

(statearr_18450_18590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (7))){
var inst_18440 = (state_18444[(2)]);
var state_18444__$1 = state_18444;
var statearr_18451_18591 = state_18444__$1;
(statearr_18451_18591[(2)] = inst_18440);

(statearr_18451_18591[(1)] = (3));


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
});})(__18573,c__15789__auto___18585,G__18404_18574,n__14278__auto___18572,jobs,results,process,async))
;
return ((function (__18573,switch__15724__auto__,c__15789__auto___18585,G__18404_18574,n__14278__auto___18572,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_18455 = [null,null,null,null,null,null,null];
(statearr_18455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_18455[(1)] = (1));

return statearr_18455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_18444){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_18444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e18456){if((e18456 instanceof Object)){
var ex__15728__auto__ = e18456;
var statearr_18457_18592 = state_18444;
(statearr_18457_18592[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18593 = state_18444;
state_18444 = G__18593;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_18444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_18444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(__18573,switch__15724__auto__,c__15789__auto___18585,G__18404_18574,n__14278__auto___18572,jobs,results,process,async))
})();
var state__15791__auto__ = (function (){var statearr_18458 = f__15790__auto__.call(null);
(statearr_18458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___18585);

return statearr_18458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(__18573,c__15789__auto___18585,G__18404_18574,n__14278__auto___18572,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18594 = (__18573 + (1));
__18573 = G__18594;
continue;
} else {
}
break;
}

var c__15789__auto___18595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___18595,jobs,results,process,async){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___18595,jobs,results,process,async){
return (function (state_18480){
var state_val_18481 = (state_18480[(1)]);
if((state_val_18481 === (1))){
var state_18480__$1 = state_18480;
var statearr_18482_18596 = state_18480__$1;
(statearr_18482_18596[(2)] = null);

(statearr_18482_18596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18481 === (2))){
var state_18480__$1 = state_18480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18480__$1,(4),from);
} else {
if((state_val_18481 === (3))){
var inst_18478 = (state_18480[(2)]);
var state_18480__$1 = state_18480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18480__$1,inst_18478);
} else {
if((state_val_18481 === (4))){
var inst_18461 = (state_18480[(7)]);
var inst_18461__$1 = (state_18480[(2)]);
var inst_18462 = (inst_18461__$1 == null);
var state_18480__$1 = (function (){var statearr_18483 = state_18480;
(statearr_18483[(7)] = inst_18461__$1);

return statearr_18483;
})();
if(cljs.core.truth_(inst_18462)){
var statearr_18484_18597 = state_18480__$1;
(statearr_18484_18597[(1)] = (5));

} else {
var statearr_18485_18598 = state_18480__$1;
(statearr_18485_18598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18481 === (5))){
var inst_18464 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18480__$1 = state_18480;
var statearr_18486_18599 = state_18480__$1;
(statearr_18486_18599[(2)] = inst_18464);

(statearr_18486_18599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18481 === (6))){
var inst_18461 = (state_18480[(7)]);
var inst_18466 = (state_18480[(8)]);
var inst_18466__$1 = cljs.core.async.chan.call(null,(1));
var inst_18467 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18468 = [inst_18461,inst_18466__$1];
var inst_18469 = (new cljs.core.PersistentVector(null,2,(5),inst_18467,inst_18468,null));
var state_18480__$1 = (function (){var statearr_18487 = state_18480;
(statearr_18487[(8)] = inst_18466__$1);

return statearr_18487;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18480__$1,(8),jobs,inst_18469);
} else {
if((state_val_18481 === (7))){
var inst_18476 = (state_18480[(2)]);
var state_18480__$1 = state_18480;
var statearr_18488_18600 = state_18480__$1;
(statearr_18488_18600[(2)] = inst_18476);

(statearr_18488_18600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18481 === (8))){
var inst_18466 = (state_18480[(8)]);
var inst_18471 = (state_18480[(2)]);
var state_18480__$1 = (function (){var statearr_18489 = state_18480;
(statearr_18489[(9)] = inst_18471);

return statearr_18489;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18480__$1,(9),results,inst_18466);
} else {
if((state_val_18481 === (9))){
var inst_18473 = (state_18480[(2)]);
var state_18480__$1 = (function (){var statearr_18490 = state_18480;
(statearr_18490[(10)] = inst_18473);

return statearr_18490;
})();
var statearr_18491_18601 = state_18480__$1;
(statearr_18491_18601[(2)] = null);

(statearr_18491_18601[(1)] = (2));


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
});})(c__15789__auto___18595,jobs,results,process,async))
;
return ((function (switch__15724__auto__,c__15789__auto___18595,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_18495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_18495[(1)] = (1));

return statearr_18495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_18480){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_18480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e18496){if((e18496 instanceof Object)){
var ex__15728__auto__ = e18496;
var statearr_18497_18602 = state_18480;
(statearr_18497_18602[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18603 = state_18480;
state_18480 = G__18603;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_18480){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_18480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___18595,jobs,results,process,async))
})();
var state__15791__auto__ = (function (){var statearr_18498 = f__15790__auto__.call(null);
(statearr_18498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___18595);

return statearr_18498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___18595,jobs,results,process,async))
);


var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,jobs,results,process,async){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,jobs,results,process,async){
return (function (state_18536){
var state_val_18537 = (state_18536[(1)]);
if((state_val_18537 === (7))){
var inst_18532 = (state_18536[(2)]);
var state_18536__$1 = state_18536;
var statearr_18538_18604 = state_18536__$1;
(statearr_18538_18604[(2)] = inst_18532);

(statearr_18538_18604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (20))){
var state_18536__$1 = state_18536;
var statearr_18539_18605 = state_18536__$1;
(statearr_18539_18605[(2)] = null);

(statearr_18539_18605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (1))){
var state_18536__$1 = state_18536;
var statearr_18540_18606 = state_18536__$1;
(statearr_18540_18606[(2)] = null);

(statearr_18540_18606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (4))){
var inst_18501 = (state_18536[(7)]);
var inst_18501__$1 = (state_18536[(2)]);
var inst_18502 = (inst_18501__$1 == null);
var state_18536__$1 = (function (){var statearr_18541 = state_18536;
(statearr_18541[(7)] = inst_18501__$1);

return statearr_18541;
})();
if(cljs.core.truth_(inst_18502)){
var statearr_18542_18607 = state_18536__$1;
(statearr_18542_18607[(1)] = (5));

} else {
var statearr_18543_18608 = state_18536__$1;
(statearr_18543_18608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (15))){
var inst_18514 = (state_18536[(8)]);
var state_18536__$1 = state_18536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18536__$1,(18),to,inst_18514);
} else {
if((state_val_18537 === (21))){
var inst_18527 = (state_18536[(2)]);
var state_18536__$1 = state_18536;
var statearr_18544_18609 = state_18536__$1;
(statearr_18544_18609[(2)] = inst_18527);

(statearr_18544_18609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (13))){
var inst_18529 = (state_18536[(2)]);
var state_18536__$1 = (function (){var statearr_18545 = state_18536;
(statearr_18545[(9)] = inst_18529);

return statearr_18545;
})();
var statearr_18546_18610 = state_18536__$1;
(statearr_18546_18610[(2)] = null);

(statearr_18546_18610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (6))){
var inst_18501 = (state_18536[(7)]);
var state_18536__$1 = state_18536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18536__$1,(11),inst_18501);
} else {
if((state_val_18537 === (17))){
var inst_18522 = (state_18536[(2)]);
var state_18536__$1 = state_18536;
if(cljs.core.truth_(inst_18522)){
var statearr_18547_18611 = state_18536__$1;
(statearr_18547_18611[(1)] = (19));

} else {
var statearr_18548_18612 = state_18536__$1;
(statearr_18548_18612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (3))){
var inst_18534 = (state_18536[(2)]);
var state_18536__$1 = state_18536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18536__$1,inst_18534);
} else {
if((state_val_18537 === (12))){
var inst_18511 = (state_18536[(10)]);
var state_18536__$1 = state_18536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18536__$1,(14),inst_18511);
} else {
if((state_val_18537 === (2))){
var state_18536__$1 = state_18536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18536__$1,(4),results);
} else {
if((state_val_18537 === (19))){
var state_18536__$1 = state_18536;
var statearr_18549_18613 = state_18536__$1;
(statearr_18549_18613[(2)] = null);

(statearr_18549_18613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (11))){
var inst_18511 = (state_18536[(2)]);
var state_18536__$1 = (function (){var statearr_18550 = state_18536;
(statearr_18550[(10)] = inst_18511);

return statearr_18550;
})();
var statearr_18551_18614 = state_18536__$1;
(statearr_18551_18614[(2)] = null);

(statearr_18551_18614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (9))){
var state_18536__$1 = state_18536;
var statearr_18552_18615 = state_18536__$1;
(statearr_18552_18615[(2)] = null);

(statearr_18552_18615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (5))){
var state_18536__$1 = state_18536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18553_18616 = state_18536__$1;
(statearr_18553_18616[(1)] = (8));

} else {
var statearr_18554_18617 = state_18536__$1;
(statearr_18554_18617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (14))){
var inst_18514 = (state_18536[(8)]);
var inst_18516 = (state_18536[(11)]);
var inst_18514__$1 = (state_18536[(2)]);
var inst_18515 = (inst_18514__$1 == null);
var inst_18516__$1 = cljs.core.not.call(null,inst_18515);
var state_18536__$1 = (function (){var statearr_18555 = state_18536;
(statearr_18555[(8)] = inst_18514__$1);

(statearr_18555[(11)] = inst_18516__$1);

return statearr_18555;
})();
if(inst_18516__$1){
var statearr_18556_18618 = state_18536__$1;
(statearr_18556_18618[(1)] = (15));

} else {
var statearr_18557_18619 = state_18536__$1;
(statearr_18557_18619[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (16))){
var inst_18516 = (state_18536[(11)]);
var state_18536__$1 = state_18536;
var statearr_18558_18620 = state_18536__$1;
(statearr_18558_18620[(2)] = inst_18516);

(statearr_18558_18620[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (10))){
var inst_18508 = (state_18536[(2)]);
var state_18536__$1 = state_18536;
var statearr_18559_18621 = state_18536__$1;
(statearr_18559_18621[(2)] = inst_18508);

(statearr_18559_18621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (18))){
var inst_18519 = (state_18536[(2)]);
var state_18536__$1 = state_18536;
var statearr_18560_18622 = state_18536__$1;
(statearr_18560_18622[(2)] = inst_18519);

(statearr_18560_18622[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18537 === (8))){
var inst_18505 = cljs.core.async.close_BANG_.call(null,to);
var state_18536__$1 = state_18536;
var statearr_18561_18623 = state_18536__$1;
(statearr_18561_18623[(2)] = inst_18505);

(statearr_18561_18623[(1)] = (10));


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
});})(c__15789__auto__,jobs,results,process,async))
;
return ((function (switch__15724__auto__,c__15789__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_18565 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_18565[(1)] = (1));

return statearr_18565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_18536){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_18536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e18566){if((e18566 instanceof Object)){
var ex__15728__auto__ = e18566;
var statearr_18567_18624 = state_18536;
(statearr_18567_18624[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18625 = state_18536;
state_18536 = G__18625;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_18536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_18536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,jobs,results,process,async))
})();
var state__15791__auto__ = (function (){var statearr_18568 = f__15790__auto__.call(null);
(statearr_18568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_18568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__,jobs,results,process,async))
);

return c__15789__auto__;
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
var args18626 = [];
var len__14433__auto___18629 = arguments.length;
var i__14434__auto___18630 = (0);
while(true){
if((i__14434__auto___18630 < len__14433__auto___18629)){
args18626.push((arguments[i__14434__auto___18630]));

var G__18631 = (i__14434__auto___18630 + (1));
i__14434__auto___18630 = G__18631;
continue;
} else {
}
break;
}

var G__18628 = args18626.length;
switch (G__18628) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18626.length)].join('')));

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
var args18633 = [];
var len__14433__auto___18636 = arguments.length;
var i__14434__auto___18637 = (0);
while(true){
if((i__14434__auto___18637 < len__14433__auto___18636)){
args18633.push((arguments[i__14434__auto___18637]));

var G__18638 = (i__14434__auto___18637 + (1));
i__14434__auto___18637 = G__18638;
continue;
} else {
}
break;
}

var G__18635 = args18633.length;
switch (G__18635) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18633.length)].join('')));

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
var args18640 = [];
var len__14433__auto___18693 = arguments.length;
var i__14434__auto___18694 = (0);
while(true){
if((i__14434__auto___18694 < len__14433__auto___18693)){
args18640.push((arguments[i__14434__auto___18694]));

var G__18695 = (i__14434__auto___18694 + (1));
i__14434__auto___18694 = G__18695;
continue;
} else {
}
break;
}

var G__18642 = args18640.length;
switch (G__18642) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18640.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15789__auto___18697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___18697,tc,fc){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___18697,tc,fc){
return (function (state_18668){
var state_val_18669 = (state_18668[(1)]);
if((state_val_18669 === (7))){
var inst_18664 = (state_18668[(2)]);
var state_18668__$1 = state_18668;
var statearr_18670_18698 = state_18668__$1;
(statearr_18670_18698[(2)] = inst_18664);

(statearr_18670_18698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (1))){
var state_18668__$1 = state_18668;
var statearr_18671_18699 = state_18668__$1;
(statearr_18671_18699[(2)] = null);

(statearr_18671_18699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (4))){
var inst_18645 = (state_18668[(7)]);
var inst_18645__$1 = (state_18668[(2)]);
var inst_18646 = (inst_18645__$1 == null);
var state_18668__$1 = (function (){var statearr_18672 = state_18668;
(statearr_18672[(7)] = inst_18645__$1);

return statearr_18672;
})();
if(cljs.core.truth_(inst_18646)){
var statearr_18673_18700 = state_18668__$1;
(statearr_18673_18700[(1)] = (5));

} else {
var statearr_18674_18701 = state_18668__$1;
(statearr_18674_18701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (13))){
var state_18668__$1 = state_18668;
var statearr_18675_18702 = state_18668__$1;
(statearr_18675_18702[(2)] = null);

(statearr_18675_18702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (6))){
var inst_18645 = (state_18668[(7)]);
var inst_18651 = p.call(null,inst_18645);
var state_18668__$1 = state_18668;
if(cljs.core.truth_(inst_18651)){
var statearr_18676_18703 = state_18668__$1;
(statearr_18676_18703[(1)] = (9));

} else {
var statearr_18677_18704 = state_18668__$1;
(statearr_18677_18704[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (3))){
var inst_18666 = (state_18668[(2)]);
var state_18668__$1 = state_18668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18668__$1,inst_18666);
} else {
if((state_val_18669 === (12))){
var state_18668__$1 = state_18668;
var statearr_18678_18705 = state_18668__$1;
(statearr_18678_18705[(2)] = null);

(statearr_18678_18705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (2))){
var state_18668__$1 = state_18668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18668__$1,(4),ch);
} else {
if((state_val_18669 === (11))){
var inst_18645 = (state_18668[(7)]);
var inst_18655 = (state_18668[(2)]);
var state_18668__$1 = state_18668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18668__$1,(8),inst_18655,inst_18645);
} else {
if((state_val_18669 === (9))){
var state_18668__$1 = state_18668;
var statearr_18679_18706 = state_18668__$1;
(statearr_18679_18706[(2)] = tc);

(statearr_18679_18706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (5))){
var inst_18648 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18649 = cljs.core.async.close_BANG_.call(null,fc);
var state_18668__$1 = (function (){var statearr_18680 = state_18668;
(statearr_18680[(8)] = inst_18648);

return statearr_18680;
})();
var statearr_18681_18707 = state_18668__$1;
(statearr_18681_18707[(2)] = inst_18649);

(statearr_18681_18707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (14))){
var inst_18662 = (state_18668[(2)]);
var state_18668__$1 = state_18668;
var statearr_18682_18708 = state_18668__$1;
(statearr_18682_18708[(2)] = inst_18662);

(statearr_18682_18708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (10))){
var state_18668__$1 = state_18668;
var statearr_18683_18709 = state_18668__$1;
(statearr_18683_18709[(2)] = fc);

(statearr_18683_18709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (8))){
var inst_18657 = (state_18668[(2)]);
var state_18668__$1 = state_18668;
if(cljs.core.truth_(inst_18657)){
var statearr_18684_18710 = state_18668__$1;
(statearr_18684_18710[(1)] = (12));

} else {
var statearr_18685_18711 = state_18668__$1;
(statearr_18685_18711[(1)] = (13));

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
});})(c__15789__auto___18697,tc,fc))
;
return ((function (switch__15724__auto__,c__15789__auto___18697,tc,fc){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_18689 = [null,null,null,null,null,null,null,null,null];
(statearr_18689[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_18689[(1)] = (1));

return statearr_18689;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_18668){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_18668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e18690){if((e18690 instanceof Object)){
var ex__15728__auto__ = e18690;
var statearr_18691_18712 = state_18668;
(statearr_18691_18712[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18713 = state_18668;
state_18668 = G__18713;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_18668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_18668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___18697,tc,fc))
})();
var state__15791__auto__ = (function (){var statearr_18692 = f__15790__auto__.call(null);
(statearr_18692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___18697);

return statearr_18692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___18697,tc,fc))
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
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_18777){
var state_val_18778 = (state_18777[(1)]);
if((state_val_18778 === (7))){
var inst_18773 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
var statearr_18779_18800 = state_18777__$1;
(statearr_18779_18800[(2)] = inst_18773);

(statearr_18779_18800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18778 === (1))){
var inst_18757 = init;
var state_18777__$1 = (function (){var statearr_18780 = state_18777;
(statearr_18780[(7)] = inst_18757);

return statearr_18780;
})();
var statearr_18781_18801 = state_18777__$1;
(statearr_18781_18801[(2)] = null);

(statearr_18781_18801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18778 === (4))){
var inst_18760 = (state_18777[(8)]);
var inst_18760__$1 = (state_18777[(2)]);
var inst_18761 = (inst_18760__$1 == null);
var state_18777__$1 = (function (){var statearr_18782 = state_18777;
(statearr_18782[(8)] = inst_18760__$1);

return statearr_18782;
})();
if(cljs.core.truth_(inst_18761)){
var statearr_18783_18802 = state_18777__$1;
(statearr_18783_18802[(1)] = (5));

} else {
var statearr_18784_18803 = state_18777__$1;
(statearr_18784_18803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18778 === (6))){
var inst_18764 = (state_18777[(9)]);
var inst_18760 = (state_18777[(8)]);
var inst_18757 = (state_18777[(7)]);
var inst_18764__$1 = f.call(null,inst_18757,inst_18760);
var inst_18765 = cljs.core.reduced_QMARK_.call(null,inst_18764__$1);
var state_18777__$1 = (function (){var statearr_18785 = state_18777;
(statearr_18785[(9)] = inst_18764__$1);

return statearr_18785;
})();
if(inst_18765){
var statearr_18786_18804 = state_18777__$1;
(statearr_18786_18804[(1)] = (8));

} else {
var statearr_18787_18805 = state_18777__$1;
(statearr_18787_18805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18778 === (3))){
var inst_18775 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18777__$1,inst_18775);
} else {
if((state_val_18778 === (2))){
var state_18777__$1 = state_18777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18777__$1,(4),ch);
} else {
if((state_val_18778 === (9))){
var inst_18764 = (state_18777[(9)]);
var inst_18757 = inst_18764;
var state_18777__$1 = (function (){var statearr_18788 = state_18777;
(statearr_18788[(7)] = inst_18757);

return statearr_18788;
})();
var statearr_18789_18806 = state_18777__$1;
(statearr_18789_18806[(2)] = null);

(statearr_18789_18806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18778 === (5))){
var inst_18757 = (state_18777[(7)]);
var state_18777__$1 = state_18777;
var statearr_18790_18807 = state_18777__$1;
(statearr_18790_18807[(2)] = inst_18757);

(statearr_18790_18807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18778 === (10))){
var inst_18771 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
var statearr_18791_18808 = state_18777__$1;
(statearr_18791_18808[(2)] = inst_18771);

(statearr_18791_18808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18778 === (8))){
var inst_18764 = (state_18777[(9)]);
var inst_18767 = cljs.core.deref.call(null,inst_18764);
var state_18777__$1 = state_18777;
var statearr_18792_18809 = state_18777__$1;
(statearr_18792_18809[(2)] = inst_18767);

(statearr_18792_18809[(1)] = (10));


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
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15725__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15725__auto____0 = (function (){
var statearr_18796 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18796[(0)] = cljs$core$async$reduce_$_state_machine__15725__auto__);

(statearr_18796[(1)] = (1));

return statearr_18796;
});
var cljs$core$async$reduce_$_state_machine__15725__auto____1 = (function (state_18777){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_18777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e18797){if((e18797 instanceof Object)){
var ex__15728__auto__ = e18797;
var statearr_18798_18810 = state_18777;
(statearr_18798_18810[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18811 = state_18777;
state_18777 = G__18811;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15725__auto__ = function(state_18777){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15725__auto____1.call(this,state_18777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15725__auto____0;
cljs$core$async$reduce_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15725__auto____1;
return cljs$core$async$reduce_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_18799 = f__15790__auto__.call(null);
(statearr_18799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_18799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__))
);

return c__15789__auto__;
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
var args18812 = [];
var len__14433__auto___18864 = arguments.length;
var i__14434__auto___18865 = (0);
while(true){
if((i__14434__auto___18865 < len__14433__auto___18864)){
args18812.push((arguments[i__14434__auto___18865]));

var G__18866 = (i__14434__auto___18865 + (1));
i__14434__auto___18865 = G__18866;
continue;
} else {
}
break;
}

var G__18814 = args18812.length;
switch (G__18814) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18812.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_18839){
var state_val_18840 = (state_18839[(1)]);
if((state_val_18840 === (7))){
var inst_18821 = (state_18839[(2)]);
var state_18839__$1 = state_18839;
var statearr_18841_18868 = state_18839__$1;
(statearr_18841_18868[(2)] = inst_18821);

(statearr_18841_18868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (1))){
var inst_18815 = cljs.core.seq.call(null,coll);
var inst_18816 = inst_18815;
var state_18839__$1 = (function (){var statearr_18842 = state_18839;
(statearr_18842[(7)] = inst_18816);

return statearr_18842;
})();
var statearr_18843_18869 = state_18839__$1;
(statearr_18843_18869[(2)] = null);

(statearr_18843_18869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (4))){
var inst_18816 = (state_18839[(7)]);
var inst_18819 = cljs.core.first.call(null,inst_18816);
var state_18839__$1 = state_18839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18839__$1,(7),ch,inst_18819);
} else {
if((state_val_18840 === (13))){
var inst_18833 = (state_18839[(2)]);
var state_18839__$1 = state_18839;
var statearr_18844_18870 = state_18839__$1;
(statearr_18844_18870[(2)] = inst_18833);

(statearr_18844_18870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (6))){
var inst_18824 = (state_18839[(2)]);
var state_18839__$1 = state_18839;
if(cljs.core.truth_(inst_18824)){
var statearr_18845_18871 = state_18839__$1;
(statearr_18845_18871[(1)] = (8));

} else {
var statearr_18846_18872 = state_18839__$1;
(statearr_18846_18872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (3))){
var inst_18837 = (state_18839[(2)]);
var state_18839__$1 = state_18839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18839__$1,inst_18837);
} else {
if((state_val_18840 === (12))){
var state_18839__$1 = state_18839;
var statearr_18847_18873 = state_18839__$1;
(statearr_18847_18873[(2)] = null);

(statearr_18847_18873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (2))){
var inst_18816 = (state_18839[(7)]);
var state_18839__$1 = state_18839;
if(cljs.core.truth_(inst_18816)){
var statearr_18848_18874 = state_18839__$1;
(statearr_18848_18874[(1)] = (4));

} else {
var statearr_18849_18875 = state_18839__$1;
(statearr_18849_18875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (11))){
var inst_18830 = cljs.core.async.close_BANG_.call(null,ch);
var state_18839__$1 = state_18839;
var statearr_18850_18876 = state_18839__$1;
(statearr_18850_18876[(2)] = inst_18830);

(statearr_18850_18876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (9))){
var state_18839__$1 = state_18839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18851_18877 = state_18839__$1;
(statearr_18851_18877[(1)] = (11));

} else {
var statearr_18852_18878 = state_18839__$1;
(statearr_18852_18878[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (5))){
var inst_18816 = (state_18839[(7)]);
var state_18839__$1 = state_18839;
var statearr_18853_18879 = state_18839__$1;
(statearr_18853_18879[(2)] = inst_18816);

(statearr_18853_18879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (10))){
var inst_18835 = (state_18839[(2)]);
var state_18839__$1 = state_18839;
var statearr_18854_18880 = state_18839__$1;
(statearr_18854_18880[(2)] = inst_18835);

(statearr_18854_18880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (8))){
var inst_18816 = (state_18839[(7)]);
var inst_18826 = cljs.core.next.call(null,inst_18816);
var inst_18816__$1 = inst_18826;
var state_18839__$1 = (function (){var statearr_18855 = state_18839;
(statearr_18855[(7)] = inst_18816__$1);

return statearr_18855;
})();
var statearr_18856_18881 = state_18839__$1;
(statearr_18856_18881[(2)] = null);

(statearr_18856_18881[(1)] = (2));


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
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_18860 = [null,null,null,null,null,null,null,null];
(statearr_18860[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_18860[(1)] = (1));

return statearr_18860;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_18839){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_18839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e18861){if((e18861 instanceof Object)){
var ex__15728__auto__ = e18861;
var statearr_18862_18882 = state_18839;
(statearr_18862_18882[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18883 = state_18839;
state_18839 = G__18883;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_18839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_18839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_18863 = f__15790__auto__.call(null);
(statearr_18863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_18863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__))
);

return c__15789__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async19105 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19105 = (function (mult,ch,cs,meta19106){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta19106 = meta19106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19107,meta19106__$1){
var self__ = this;
var _19107__$1 = this;
return (new cljs.core.async.t_cljs$core$async19105(self__.mult,self__.ch,self__.cs,meta19106__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19107){
var self__ = this;
var _19107__$1 = this;
return self__.meta19106;
});})(cs))
;

cljs.core.async.t_cljs$core$async19105.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19105.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async19105.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19105.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19105.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19105.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19106","meta19106",1494446297,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19105.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19105";

cljs.core.async.t_cljs$core$async19105.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async19105");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19105 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19105(mult__$1,ch__$1,cs__$1,meta19106){
return (new cljs.core.async.t_cljs$core$async19105(mult__$1,ch__$1,cs__$1,meta19106));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19105(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15789__auto___19326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___19326,cs,m,dchan,dctr,done){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___19326,cs,m,dchan,dctr,done){
return (function (state_19238){
var state_val_19239 = (state_19238[(1)]);
if((state_val_19239 === (7))){
var inst_19234 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19240_19327 = state_19238__$1;
(statearr_19240_19327[(2)] = inst_19234);

(statearr_19240_19327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (20))){
var inst_19139 = (state_19238[(7)]);
var inst_19149 = cljs.core.first.call(null,inst_19139);
var inst_19150 = cljs.core.nth.call(null,inst_19149,(0),null);
var inst_19151 = cljs.core.nth.call(null,inst_19149,(1),null);
var state_19238__$1 = (function (){var statearr_19241 = state_19238;
(statearr_19241[(8)] = inst_19150);

return statearr_19241;
})();
if(cljs.core.truth_(inst_19151)){
var statearr_19242_19328 = state_19238__$1;
(statearr_19242_19328[(1)] = (22));

} else {
var statearr_19243_19329 = state_19238__$1;
(statearr_19243_19329[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (27))){
var inst_19186 = (state_19238[(9)]);
var inst_19179 = (state_19238[(10)]);
var inst_19181 = (state_19238[(11)]);
var inst_19110 = (state_19238[(12)]);
var inst_19186__$1 = cljs.core._nth.call(null,inst_19179,inst_19181);
var inst_19187 = cljs.core.async.put_BANG_.call(null,inst_19186__$1,inst_19110,done);
var state_19238__$1 = (function (){var statearr_19244 = state_19238;
(statearr_19244[(9)] = inst_19186__$1);

return statearr_19244;
})();
if(cljs.core.truth_(inst_19187)){
var statearr_19245_19330 = state_19238__$1;
(statearr_19245_19330[(1)] = (30));

} else {
var statearr_19246_19331 = state_19238__$1;
(statearr_19246_19331[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (1))){
var state_19238__$1 = state_19238;
var statearr_19247_19332 = state_19238__$1;
(statearr_19247_19332[(2)] = null);

(statearr_19247_19332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (24))){
var inst_19139 = (state_19238[(7)]);
var inst_19156 = (state_19238[(2)]);
var inst_19157 = cljs.core.next.call(null,inst_19139);
var inst_19119 = inst_19157;
var inst_19120 = null;
var inst_19121 = (0);
var inst_19122 = (0);
var state_19238__$1 = (function (){var statearr_19248 = state_19238;
(statearr_19248[(13)] = inst_19121);

(statearr_19248[(14)] = inst_19120);

(statearr_19248[(15)] = inst_19122);

(statearr_19248[(16)] = inst_19119);

(statearr_19248[(17)] = inst_19156);

return statearr_19248;
})();
var statearr_19249_19333 = state_19238__$1;
(statearr_19249_19333[(2)] = null);

(statearr_19249_19333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (39))){
var state_19238__$1 = state_19238;
var statearr_19253_19334 = state_19238__$1;
(statearr_19253_19334[(2)] = null);

(statearr_19253_19334[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (4))){
var inst_19110 = (state_19238[(12)]);
var inst_19110__$1 = (state_19238[(2)]);
var inst_19111 = (inst_19110__$1 == null);
var state_19238__$1 = (function (){var statearr_19254 = state_19238;
(statearr_19254[(12)] = inst_19110__$1);

return statearr_19254;
})();
if(cljs.core.truth_(inst_19111)){
var statearr_19255_19335 = state_19238__$1;
(statearr_19255_19335[(1)] = (5));

} else {
var statearr_19256_19336 = state_19238__$1;
(statearr_19256_19336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (15))){
var inst_19121 = (state_19238[(13)]);
var inst_19120 = (state_19238[(14)]);
var inst_19122 = (state_19238[(15)]);
var inst_19119 = (state_19238[(16)]);
var inst_19135 = (state_19238[(2)]);
var inst_19136 = (inst_19122 + (1));
var tmp19250 = inst_19121;
var tmp19251 = inst_19120;
var tmp19252 = inst_19119;
var inst_19119__$1 = tmp19252;
var inst_19120__$1 = tmp19251;
var inst_19121__$1 = tmp19250;
var inst_19122__$1 = inst_19136;
var state_19238__$1 = (function (){var statearr_19257 = state_19238;
(statearr_19257[(13)] = inst_19121__$1);

(statearr_19257[(14)] = inst_19120__$1);

(statearr_19257[(18)] = inst_19135);

(statearr_19257[(15)] = inst_19122__$1);

(statearr_19257[(16)] = inst_19119__$1);

return statearr_19257;
})();
var statearr_19258_19337 = state_19238__$1;
(statearr_19258_19337[(2)] = null);

(statearr_19258_19337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (21))){
var inst_19160 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19262_19338 = state_19238__$1;
(statearr_19262_19338[(2)] = inst_19160);

(statearr_19262_19338[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (31))){
var inst_19186 = (state_19238[(9)]);
var inst_19190 = done.call(null,null);
var inst_19191 = cljs.core.async.untap_STAR_.call(null,m,inst_19186);
var state_19238__$1 = (function (){var statearr_19263 = state_19238;
(statearr_19263[(19)] = inst_19190);

return statearr_19263;
})();
var statearr_19264_19339 = state_19238__$1;
(statearr_19264_19339[(2)] = inst_19191);

(statearr_19264_19339[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (32))){
var inst_19179 = (state_19238[(10)]);
var inst_19181 = (state_19238[(11)]);
var inst_19178 = (state_19238[(20)]);
var inst_19180 = (state_19238[(21)]);
var inst_19193 = (state_19238[(2)]);
var inst_19194 = (inst_19181 + (1));
var tmp19259 = inst_19179;
var tmp19260 = inst_19178;
var tmp19261 = inst_19180;
var inst_19178__$1 = tmp19260;
var inst_19179__$1 = tmp19259;
var inst_19180__$1 = tmp19261;
var inst_19181__$1 = inst_19194;
var state_19238__$1 = (function (){var statearr_19265 = state_19238;
(statearr_19265[(10)] = inst_19179__$1);

(statearr_19265[(11)] = inst_19181__$1);

(statearr_19265[(20)] = inst_19178__$1);

(statearr_19265[(22)] = inst_19193);

(statearr_19265[(21)] = inst_19180__$1);

return statearr_19265;
})();
var statearr_19266_19340 = state_19238__$1;
(statearr_19266_19340[(2)] = null);

(statearr_19266_19340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (40))){
var inst_19206 = (state_19238[(23)]);
var inst_19210 = done.call(null,null);
var inst_19211 = cljs.core.async.untap_STAR_.call(null,m,inst_19206);
var state_19238__$1 = (function (){var statearr_19267 = state_19238;
(statearr_19267[(24)] = inst_19210);

return statearr_19267;
})();
var statearr_19268_19341 = state_19238__$1;
(statearr_19268_19341[(2)] = inst_19211);

(statearr_19268_19341[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (33))){
var inst_19197 = (state_19238[(25)]);
var inst_19199 = cljs.core.chunked_seq_QMARK_.call(null,inst_19197);
var state_19238__$1 = state_19238;
if(inst_19199){
var statearr_19269_19342 = state_19238__$1;
(statearr_19269_19342[(1)] = (36));

} else {
var statearr_19270_19343 = state_19238__$1;
(statearr_19270_19343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (13))){
var inst_19129 = (state_19238[(26)]);
var inst_19132 = cljs.core.async.close_BANG_.call(null,inst_19129);
var state_19238__$1 = state_19238;
var statearr_19271_19344 = state_19238__$1;
(statearr_19271_19344[(2)] = inst_19132);

(statearr_19271_19344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (22))){
var inst_19150 = (state_19238[(8)]);
var inst_19153 = cljs.core.async.close_BANG_.call(null,inst_19150);
var state_19238__$1 = state_19238;
var statearr_19272_19345 = state_19238__$1;
(statearr_19272_19345[(2)] = inst_19153);

(statearr_19272_19345[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (36))){
var inst_19197 = (state_19238[(25)]);
var inst_19201 = cljs.core.chunk_first.call(null,inst_19197);
var inst_19202 = cljs.core.chunk_rest.call(null,inst_19197);
var inst_19203 = cljs.core.count.call(null,inst_19201);
var inst_19178 = inst_19202;
var inst_19179 = inst_19201;
var inst_19180 = inst_19203;
var inst_19181 = (0);
var state_19238__$1 = (function (){var statearr_19273 = state_19238;
(statearr_19273[(10)] = inst_19179);

(statearr_19273[(11)] = inst_19181);

(statearr_19273[(20)] = inst_19178);

(statearr_19273[(21)] = inst_19180);

return statearr_19273;
})();
var statearr_19274_19346 = state_19238__$1;
(statearr_19274_19346[(2)] = null);

(statearr_19274_19346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (41))){
var inst_19197 = (state_19238[(25)]);
var inst_19213 = (state_19238[(2)]);
var inst_19214 = cljs.core.next.call(null,inst_19197);
var inst_19178 = inst_19214;
var inst_19179 = null;
var inst_19180 = (0);
var inst_19181 = (0);
var state_19238__$1 = (function (){var statearr_19275 = state_19238;
(statearr_19275[(27)] = inst_19213);

(statearr_19275[(10)] = inst_19179);

(statearr_19275[(11)] = inst_19181);

(statearr_19275[(20)] = inst_19178);

(statearr_19275[(21)] = inst_19180);

return statearr_19275;
})();
var statearr_19276_19347 = state_19238__$1;
(statearr_19276_19347[(2)] = null);

(statearr_19276_19347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (43))){
var state_19238__$1 = state_19238;
var statearr_19277_19348 = state_19238__$1;
(statearr_19277_19348[(2)] = null);

(statearr_19277_19348[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (29))){
var inst_19222 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19278_19349 = state_19238__$1;
(statearr_19278_19349[(2)] = inst_19222);

(statearr_19278_19349[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (44))){
var inst_19231 = (state_19238[(2)]);
var state_19238__$1 = (function (){var statearr_19279 = state_19238;
(statearr_19279[(28)] = inst_19231);

return statearr_19279;
})();
var statearr_19280_19350 = state_19238__$1;
(statearr_19280_19350[(2)] = null);

(statearr_19280_19350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (6))){
var inst_19170 = (state_19238[(29)]);
var inst_19169 = cljs.core.deref.call(null,cs);
var inst_19170__$1 = cljs.core.keys.call(null,inst_19169);
var inst_19171 = cljs.core.count.call(null,inst_19170__$1);
var inst_19172 = cljs.core.reset_BANG_.call(null,dctr,inst_19171);
var inst_19177 = cljs.core.seq.call(null,inst_19170__$1);
var inst_19178 = inst_19177;
var inst_19179 = null;
var inst_19180 = (0);
var inst_19181 = (0);
var state_19238__$1 = (function (){var statearr_19281 = state_19238;
(statearr_19281[(29)] = inst_19170__$1);

(statearr_19281[(10)] = inst_19179);

(statearr_19281[(11)] = inst_19181);

(statearr_19281[(20)] = inst_19178);

(statearr_19281[(30)] = inst_19172);

(statearr_19281[(21)] = inst_19180);

return statearr_19281;
})();
var statearr_19282_19351 = state_19238__$1;
(statearr_19282_19351[(2)] = null);

(statearr_19282_19351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (28))){
var inst_19197 = (state_19238[(25)]);
var inst_19178 = (state_19238[(20)]);
var inst_19197__$1 = cljs.core.seq.call(null,inst_19178);
var state_19238__$1 = (function (){var statearr_19283 = state_19238;
(statearr_19283[(25)] = inst_19197__$1);

return statearr_19283;
})();
if(inst_19197__$1){
var statearr_19284_19352 = state_19238__$1;
(statearr_19284_19352[(1)] = (33));

} else {
var statearr_19285_19353 = state_19238__$1;
(statearr_19285_19353[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (25))){
var inst_19181 = (state_19238[(11)]);
var inst_19180 = (state_19238[(21)]);
var inst_19183 = (inst_19181 < inst_19180);
var inst_19184 = inst_19183;
var state_19238__$1 = state_19238;
if(cljs.core.truth_(inst_19184)){
var statearr_19286_19354 = state_19238__$1;
(statearr_19286_19354[(1)] = (27));

} else {
var statearr_19287_19355 = state_19238__$1;
(statearr_19287_19355[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (34))){
var state_19238__$1 = state_19238;
var statearr_19288_19356 = state_19238__$1;
(statearr_19288_19356[(2)] = null);

(statearr_19288_19356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (17))){
var state_19238__$1 = state_19238;
var statearr_19289_19357 = state_19238__$1;
(statearr_19289_19357[(2)] = null);

(statearr_19289_19357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (3))){
var inst_19236 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19238__$1,inst_19236);
} else {
if((state_val_19239 === (12))){
var inst_19165 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19290_19358 = state_19238__$1;
(statearr_19290_19358[(2)] = inst_19165);

(statearr_19290_19358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (2))){
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19238__$1,(4),ch);
} else {
if((state_val_19239 === (23))){
var state_19238__$1 = state_19238;
var statearr_19291_19359 = state_19238__$1;
(statearr_19291_19359[(2)] = null);

(statearr_19291_19359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (35))){
var inst_19220 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19292_19360 = state_19238__$1;
(statearr_19292_19360[(2)] = inst_19220);

(statearr_19292_19360[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (19))){
var inst_19139 = (state_19238[(7)]);
var inst_19143 = cljs.core.chunk_first.call(null,inst_19139);
var inst_19144 = cljs.core.chunk_rest.call(null,inst_19139);
var inst_19145 = cljs.core.count.call(null,inst_19143);
var inst_19119 = inst_19144;
var inst_19120 = inst_19143;
var inst_19121 = inst_19145;
var inst_19122 = (0);
var state_19238__$1 = (function (){var statearr_19293 = state_19238;
(statearr_19293[(13)] = inst_19121);

(statearr_19293[(14)] = inst_19120);

(statearr_19293[(15)] = inst_19122);

(statearr_19293[(16)] = inst_19119);

return statearr_19293;
})();
var statearr_19294_19361 = state_19238__$1;
(statearr_19294_19361[(2)] = null);

(statearr_19294_19361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (11))){
var inst_19139 = (state_19238[(7)]);
var inst_19119 = (state_19238[(16)]);
var inst_19139__$1 = cljs.core.seq.call(null,inst_19119);
var state_19238__$1 = (function (){var statearr_19295 = state_19238;
(statearr_19295[(7)] = inst_19139__$1);

return statearr_19295;
})();
if(inst_19139__$1){
var statearr_19296_19362 = state_19238__$1;
(statearr_19296_19362[(1)] = (16));

} else {
var statearr_19297_19363 = state_19238__$1;
(statearr_19297_19363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (9))){
var inst_19167 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19298_19364 = state_19238__$1;
(statearr_19298_19364[(2)] = inst_19167);

(statearr_19298_19364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (5))){
var inst_19117 = cljs.core.deref.call(null,cs);
var inst_19118 = cljs.core.seq.call(null,inst_19117);
var inst_19119 = inst_19118;
var inst_19120 = null;
var inst_19121 = (0);
var inst_19122 = (0);
var state_19238__$1 = (function (){var statearr_19299 = state_19238;
(statearr_19299[(13)] = inst_19121);

(statearr_19299[(14)] = inst_19120);

(statearr_19299[(15)] = inst_19122);

(statearr_19299[(16)] = inst_19119);

return statearr_19299;
})();
var statearr_19300_19365 = state_19238__$1;
(statearr_19300_19365[(2)] = null);

(statearr_19300_19365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (14))){
var state_19238__$1 = state_19238;
var statearr_19301_19366 = state_19238__$1;
(statearr_19301_19366[(2)] = null);

(statearr_19301_19366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (45))){
var inst_19228 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19302_19367 = state_19238__$1;
(statearr_19302_19367[(2)] = inst_19228);

(statearr_19302_19367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (26))){
var inst_19170 = (state_19238[(29)]);
var inst_19224 = (state_19238[(2)]);
var inst_19225 = cljs.core.seq.call(null,inst_19170);
var state_19238__$1 = (function (){var statearr_19303 = state_19238;
(statearr_19303[(31)] = inst_19224);

return statearr_19303;
})();
if(inst_19225){
var statearr_19304_19368 = state_19238__$1;
(statearr_19304_19368[(1)] = (42));

} else {
var statearr_19305_19369 = state_19238__$1;
(statearr_19305_19369[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (16))){
var inst_19139 = (state_19238[(7)]);
var inst_19141 = cljs.core.chunked_seq_QMARK_.call(null,inst_19139);
var state_19238__$1 = state_19238;
if(inst_19141){
var statearr_19306_19370 = state_19238__$1;
(statearr_19306_19370[(1)] = (19));

} else {
var statearr_19307_19371 = state_19238__$1;
(statearr_19307_19371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (38))){
var inst_19217 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19308_19372 = state_19238__$1;
(statearr_19308_19372[(2)] = inst_19217);

(statearr_19308_19372[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (30))){
var state_19238__$1 = state_19238;
var statearr_19309_19373 = state_19238__$1;
(statearr_19309_19373[(2)] = null);

(statearr_19309_19373[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (10))){
var inst_19120 = (state_19238[(14)]);
var inst_19122 = (state_19238[(15)]);
var inst_19128 = cljs.core._nth.call(null,inst_19120,inst_19122);
var inst_19129 = cljs.core.nth.call(null,inst_19128,(0),null);
var inst_19130 = cljs.core.nth.call(null,inst_19128,(1),null);
var state_19238__$1 = (function (){var statearr_19310 = state_19238;
(statearr_19310[(26)] = inst_19129);

return statearr_19310;
})();
if(cljs.core.truth_(inst_19130)){
var statearr_19311_19374 = state_19238__$1;
(statearr_19311_19374[(1)] = (13));

} else {
var statearr_19312_19375 = state_19238__$1;
(statearr_19312_19375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (18))){
var inst_19163 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19313_19376 = state_19238__$1;
(statearr_19313_19376[(2)] = inst_19163);

(statearr_19313_19376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (42))){
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19238__$1,(45),dchan);
} else {
if((state_val_19239 === (37))){
var inst_19197 = (state_19238[(25)]);
var inst_19110 = (state_19238[(12)]);
var inst_19206 = (state_19238[(23)]);
var inst_19206__$1 = cljs.core.first.call(null,inst_19197);
var inst_19207 = cljs.core.async.put_BANG_.call(null,inst_19206__$1,inst_19110,done);
var state_19238__$1 = (function (){var statearr_19314 = state_19238;
(statearr_19314[(23)] = inst_19206__$1);

return statearr_19314;
})();
if(cljs.core.truth_(inst_19207)){
var statearr_19315_19377 = state_19238__$1;
(statearr_19315_19377[(1)] = (39));

} else {
var statearr_19316_19378 = state_19238__$1;
(statearr_19316_19378[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (8))){
var inst_19121 = (state_19238[(13)]);
var inst_19122 = (state_19238[(15)]);
var inst_19124 = (inst_19122 < inst_19121);
var inst_19125 = inst_19124;
var state_19238__$1 = state_19238;
if(cljs.core.truth_(inst_19125)){
var statearr_19317_19379 = state_19238__$1;
(statearr_19317_19379[(1)] = (10));

} else {
var statearr_19318_19380 = state_19238__$1;
(statearr_19318_19380[(1)] = (11));

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
});})(c__15789__auto___19326,cs,m,dchan,dctr,done))
;
return ((function (switch__15724__auto__,c__15789__auto___19326,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15725__auto__ = null;
var cljs$core$async$mult_$_state_machine__15725__auto____0 = (function (){
var statearr_19322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19322[(0)] = cljs$core$async$mult_$_state_machine__15725__auto__);

(statearr_19322[(1)] = (1));

return statearr_19322;
});
var cljs$core$async$mult_$_state_machine__15725__auto____1 = (function (state_19238){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_19238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e19323){if((e19323 instanceof Object)){
var ex__15728__auto__ = e19323;
var statearr_19324_19381 = state_19238;
(statearr_19324_19381[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19382 = state_19238;
state_19238 = G__19382;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15725__auto__ = function(state_19238){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15725__auto____1.call(this,state_19238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15725__auto____0;
cljs$core$async$mult_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15725__auto____1;
return cljs$core$async$mult_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___19326,cs,m,dchan,dctr,done))
})();
var state__15791__auto__ = (function (){var statearr_19325 = f__15790__auto__.call(null);
(statearr_19325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___19326);

return statearr_19325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___19326,cs,m,dchan,dctr,done))
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
var args19383 = [];
var len__14433__auto___19386 = arguments.length;
var i__14434__auto___19387 = (0);
while(true){
if((i__14434__auto___19387 < len__14433__auto___19386)){
args19383.push((arguments[i__14434__auto___19387]));

var G__19388 = (i__14434__auto___19387 + (1));
i__14434__auto___19387 = G__19388;
continue;
} else {
}
break;
}

var G__19385 = args19383.length;
switch (G__19385) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19383.length)].join('')));

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
var len__14433__auto___19400 = arguments.length;
var i__14434__auto___19401 = (0);
while(true){
if((i__14434__auto___19401 < len__14433__auto___19400)){
args__14440__auto__.push((arguments[i__14434__auto___19401]));

var G__19402 = (i__14434__auto___19401 + (1));
i__14434__auto___19401 = G__19402;
continue;
} else {
}
break;
}

var argseq__14441__auto__ = ((((3) < args__14440__auto__.length))?(new cljs.core.IndexedSeq(args__14440__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__14441__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19394){
var map__19395 = p__19394;
var map__19395__$1 = ((((!((map__19395 == null)))?((((map__19395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19395):map__19395);
var opts = map__19395__$1;
var statearr_19397_19403 = state;
(statearr_19397_19403[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__19395,map__19395__$1,opts){
return (function (val){
var statearr_19398_19404 = state;
(statearr_19398_19404[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19395,map__19395__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_19399_19405 = state;
(statearr_19399_19405[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19390){
var G__19391 = cljs.core.first.call(null,seq19390);
var seq19390__$1 = cljs.core.next.call(null,seq19390);
var G__19392 = cljs.core.first.call(null,seq19390__$1);
var seq19390__$2 = cljs.core.next.call(null,seq19390__$1);
var G__19393 = cljs.core.first.call(null,seq19390__$2);
var seq19390__$3 = cljs.core.next.call(null,seq19390__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19391,G__19392,G__19393,seq19390__$3);
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
if(typeof cljs.core.async.t_cljs$core$async19569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19569 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19570){
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
this.meta19570 = meta19570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19571,meta19570__$1){
var self__ = this;
var _19571__$1 = this;
return (new cljs.core.async.t_cljs$core$async19569(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19570__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19571){
var self__ = this;
var _19571__$1 = this;
return self__.meta19570;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19569.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19569.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19569.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19569.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19569.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19569.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19569.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19569.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19570","meta19570",-1349877567,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19569";

cljs.core.async.t_cljs$core$async19569.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async19569");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19569 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19569(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19570){
return (new cljs.core.async.t_cljs$core$async19569(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19570));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19569(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15789__auto___19732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___19732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___19732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19669){
var state_val_19670 = (state_19669[(1)]);
if((state_val_19670 === (7))){
var inst_19587 = (state_19669[(2)]);
var state_19669__$1 = state_19669;
var statearr_19671_19733 = state_19669__$1;
(statearr_19671_19733[(2)] = inst_19587);

(statearr_19671_19733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (20))){
var inst_19599 = (state_19669[(7)]);
var state_19669__$1 = state_19669;
var statearr_19672_19734 = state_19669__$1;
(statearr_19672_19734[(2)] = inst_19599);

(statearr_19672_19734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (27))){
var state_19669__$1 = state_19669;
var statearr_19673_19735 = state_19669__$1;
(statearr_19673_19735[(2)] = null);

(statearr_19673_19735[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (1))){
var inst_19575 = (state_19669[(8)]);
var inst_19575__$1 = calc_state.call(null);
var inst_19577 = (inst_19575__$1 == null);
var inst_19578 = cljs.core.not.call(null,inst_19577);
var state_19669__$1 = (function (){var statearr_19674 = state_19669;
(statearr_19674[(8)] = inst_19575__$1);

return statearr_19674;
})();
if(inst_19578){
var statearr_19675_19736 = state_19669__$1;
(statearr_19675_19736[(1)] = (2));

} else {
var statearr_19676_19737 = state_19669__$1;
(statearr_19676_19737[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (24))){
var inst_19629 = (state_19669[(9)]);
var inst_19622 = (state_19669[(10)]);
var inst_19643 = (state_19669[(11)]);
var inst_19643__$1 = inst_19622.call(null,inst_19629);
var state_19669__$1 = (function (){var statearr_19677 = state_19669;
(statearr_19677[(11)] = inst_19643__$1);

return statearr_19677;
})();
if(cljs.core.truth_(inst_19643__$1)){
var statearr_19678_19738 = state_19669__$1;
(statearr_19678_19738[(1)] = (29));

} else {
var statearr_19679_19739 = state_19669__$1;
(statearr_19679_19739[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (4))){
var inst_19590 = (state_19669[(2)]);
var state_19669__$1 = state_19669;
if(cljs.core.truth_(inst_19590)){
var statearr_19680_19740 = state_19669__$1;
(statearr_19680_19740[(1)] = (8));

} else {
var statearr_19681_19741 = state_19669__$1;
(statearr_19681_19741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (15))){
var inst_19616 = (state_19669[(2)]);
var state_19669__$1 = state_19669;
if(cljs.core.truth_(inst_19616)){
var statearr_19682_19742 = state_19669__$1;
(statearr_19682_19742[(1)] = (19));

} else {
var statearr_19683_19743 = state_19669__$1;
(statearr_19683_19743[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (21))){
var inst_19621 = (state_19669[(12)]);
var inst_19621__$1 = (state_19669[(2)]);
var inst_19622 = cljs.core.get.call(null,inst_19621__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19623 = cljs.core.get.call(null,inst_19621__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19624 = cljs.core.get.call(null,inst_19621__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19669__$1 = (function (){var statearr_19684 = state_19669;
(statearr_19684[(12)] = inst_19621__$1);

(statearr_19684[(10)] = inst_19622);

(statearr_19684[(13)] = inst_19623);

return statearr_19684;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19669__$1,(22),inst_19624);
} else {
if((state_val_19670 === (31))){
var inst_19651 = (state_19669[(2)]);
var state_19669__$1 = state_19669;
if(cljs.core.truth_(inst_19651)){
var statearr_19685_19744 = state_19669__$1;
(statearr_19685_19744[(1)] = (32));

} else {
var statearr_19686_19745 = state_19669__$1;
(statearr_19686_19745[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (32))){
var inst_19628 = (state_19669[(14)]);
var state_19669__$1 = state_19669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19669__$1,(35),out,inst_19628);
} else {
if((state_val_19670 === (33))){
var inst_19621 = (state_19669[(12)]);
var inst_19599 = inst_19621;
var state_19669__$1 = (function (){var statearr_19687 = state_19669;
(statearr_19687[(7)] = inst_19599);

return statearr_19687;
})();
var statearr_19688_19746 = state_19669__$1;
(statearr_19688_19746[(2)] = null);

(statearr_19688_19746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (13))){
var inst_19599 = (state_19669[(7)]);
var inst_19606 = inst_19599.cljs$lang$protocol_mask$partition0$;
var inst_19607 = (inst_19606 & (64));
var inst_19608 = inst_19599.cljs$core$ISeq$;
var inst_19609 = (inst_19607) || (inst_19608);
var state_19669__$1 = state_19669;
if(cljs.core.truth_(inst_19609)){
var statearr_19689_19747 = state_19669__$1;
(statearr_19689_19747[(1)] = (16));

} else {
var statearr_19690_19748 = state_19669__$1;
(statearr_19690_19748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (22))){
var inst_19629 = (state_19669[(9)]);
var inst_19628 = (state_19669[(14)]);
var inst_19627 = (state_19669[(2)]);
var inst_19628__$1 = cljs.core.nth.call(null,inst_19627,(0),null);
var inst_19629__$1 = cljs.core.nth.call(null,inst_19627,(1),null);
var inst_19630 = (inst_19628__$1 == null);
var inst_19631 = cljs.core._EQ_.call(null,inst_19629__$1,change);
var inst_19632 = (inst_19630) || (inst_19631);
var state_19669__$1 = (function (){var statearr_19691 = state_19669;
(statearr_19691[(9)] = inst_19629__$1);

(statearr_19691[(14)] = inst_19628__$1);

return statearr_19691;
})();
if(cljs.core.truth_(inst_19632)){
var statearr_19692_19749 = state_19669__$1;
(statearr_19692_19749[(1)] = (23));

} else {
var statearr_19693_19750 = state_19669__$1;
(statearr_19693_19750[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (36))){
var inst_19621 = (state_19669[(12)]);
var inst_19599 = inst_19621;
var state_19669__$1 = (function (){var statearr_19694 = state_19669;
(statearr_19694[(7)] = inst_19599);

return statearr_19694;
})();
var statearr_19695_19751 = state_19669__$1;
(statearr_19695_19751[(2)] = null);

(statearr_19695_19751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (29))){
var inst_19643 = (state_19669[(11)]);
var state_19669__$1 = state_19669;
var statearr_19696_19752 = state_19669__$1;
(statearr_19696_19752[(2)] = inst_19643);

(statearr_19696_19752[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (6))){
var state_19669__$1 = state_19669;
var statearr_19697_19753 = state_19669__$1;
(statearr_19697_19753[(2)] = false);

(statearr_19697_19753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (28))){
var inst_19639 = (state_19669[(2)]);
var inst_19640 = calc_state.call(null);
var inst_19599 = inst_19640;
var state_19669__$1 = (function (){var statearr_19698 = state_19669;
(statearr_19698[(7)] = inst_19599);

(statearr_19698[(15)] = inst_19639);

return statearr_19698;
})();
var statearr_19699_19754 = state_19669__$1;
(statearr_19699_19754[(2)] = null);

(statearr_19699_19754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (25))){
var inst_19665 = (state_19669[(2)]);
var state_19669__$1 = state_19669;
var statearr_19700_19755 = state_19669__$1;
(statearr_19700_19755[(2)] = inst_19665);

(statearr_19700_19755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (34))){
var inst_19663 = (state_19669[(2)]);
var state_19669__$1 = state_19669;
var statearr_19701_19756 = state_19669__$1;
(statearr_19701_19756[(2)] = inst_19663);

(statearr_19701_19756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (17))){
var state_19669__$1 = state_19669;
var statearr_19702_19757 = state_19669__$1;
(statearr_19702_19757[(2)] = false);

(statearr_19702_19757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (3))){
var state_19669__$1 = state_19669;
var statearr_19703_19758 = state_19669__$1;
(statearr_19703_19758[(2)] = false);

(statearr_19703_19758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (12))){
var inst_19667 = (state_19669[(2)]);
var state_19669__$1 = state_19669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19669__$1,inst_19667);
} else {
if((state_val_19670 === (2))){
var inst_19575 = (state_19669[(8)]);
var inst_19580 = inst_19575.cljs$lang$protocol_mask$partition0$;
var inst_19581 = (inst_19580 & (64));
var inst_19582 = inst_19575.cljs$core$ISeq$;
var inst_19583 = (inst_19581) || (inst_19582);
var state_19669__$1 = state_19669;
if(cljs.core.truth_(inst_19583)){
var statearr_19704_19759 = state_19669__$1;
(statearr_19704_19759[(1)] = (5));

} else {
var statearr_19705_19760 = state_19669__$1;
(statearr_19705_19760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (23))){
var inst_19628 = (state_19669[(14)]);
var inst_19634 = (inst_19628 == null);
var state_19669__$1 = state_19669;
if(cljs.core.truth_(inst_19634)){
var statearr_19706_19761 = state_19669__$1;
(statearr_19706_19761[(1)] = (26));

} else {
var statearr_19707_19762 = state_19669__$1;
(statearr_19707_19762[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (35))){
var inst_19654 = (state_19669[(2)]);
var state_19669__$1 = state_19669;
if(cljs.core.truth_(inst_19654)){
var statearr_19708_19763 = state_19669__$1;
(statearr_19708_19763[(1)] = (36));

} else {
var statearr_19709_19764 = state_19669__$1;
(statearr_19709_19764[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (19))){
var inst_19599 = (state_19669[(7)]);
var inst_19618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19599);
var state_19669__$1 = state_19669;
var statearr_19710_19765 = state_19669__$1;
(statearr_19710_19765[(2)] = inst_19618);

(statearr_19710_19765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (11))){
var inst_19599 = (state_19669[(7)]);
var inst_19603 = (inst_19599 == null);
var inst_19604 = cljs.core.not.call(null,inst_19603);
var state_19669__$1 = state_19669;
if(inst_19604){
var statearr_19711_19766 = state_19669__$1;
(statearr_19711_19766[(1)] = (13));

} else {
var statearr_19712_19767 = state_19669__$1;
(statearr_19712_19767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (9))){
var inst_19575 = (state_19669[(8)]);
var state_19669__$1 = state_19669;
var statearr_19713_19768 = state_19669__$1;
(statearr_19713_19768[(2)] = inst_19575);

(statearr_19713_19768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (5))){
var state_19669__$1 = state_19669;
var statearr_19714_19769 = state_19669__$1;
(statearr_19714_19769[(2)] = true);

(statearr_19714_19769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (14))){
var state_19669__$1 = state_19669;
var statearr_19715_19770 = state_19669__$1;
(statearr_19715_19770[(2)] = false);

(statearr_19715_19770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (26))){
var inst_19629 = (state_19669[(9)]);
var inst_19636 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19629);
var state_19669__$1 = state_19669;
var statearr_19716_19771 = state_19669__$1;
(statearr_19716_19771[(2)] = inst_19636);

(statearr_19716_19771[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (16))){
var state_19669__$1 = state_19669;
var statearr_19717_19772 = state_19669__$1;
(statearr_19717_19772[(2)] = true);

(statearr_19717_19772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (38))){
var inst_19659 = (state_19669[(2)]);
var state_19669__$1 = state_19669;
var statearr_19718_19773 = state_19669__$1;
(statearr_19718_19773[(2)] = inst_19659);

(statearr_19718_19773[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (30))){
var inst_19629 = (state_19669[(9)]);
var inst_19622 = (state_19669[(10)]);
var inst_19623 = (state_19669[(13)]);
var inst_19646 = cljs.core.empty_QMARK_.call(null,inst_19622);
var inst_19647 = inst_19623.call(null,inst_19629);
var inst_19648 = cljs.core.not.call(null,inst_19647);
var inst_19649 = (inst_19646) && (inst_19648);
var state_19669__$1 = state_19669;
var statearr_19719_19774 = state_19669__$1;
(statearr_19719_19774[(2)] = inst_19649);

(statearr_19719_19774[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (10))){
var inst_19575 = (state_19669[(8)]);
var inst_19595 = (state_19669[(2)]);
var inst_19596 = cljs.core.get.call(null,inst_19595,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19597 = cljs.core.get.call(null,inst_19595,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19598 = cljs.core.get.call(null,inst_19595,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19599 = inst_19575;
var state_19669__$1 = (function (){var statearr_19720 = state_19669;
(statearr_19720[(16)] = inst_19597);

(statearr_19720[(17)] = inst_19598);

(statearr_19720[(7)] = inst_19599);

(statearr_19720[(18)] = inst_19596);

return statearr_19720;
})();
var statearr_19721_19775 = state_19669__$1;
(statearr_19721_19775[(2)] = null);

(statearr_19721_19775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (18))){
var inst_19613 = (state_19669[(2)]);
var state_19669__$1 = state_19669;
var statearr_19722_19776 = state_19669__$1;
(statearr_19722_19776[(2)] = inst_19613);

(statearr_19722_19776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (37))){
var state_19669__$1 = state_19669;
var statearr_19723_19777 = state_19669__$1;
(statearr_19723_19777[(2)] = null);

(statearr_19723_19777[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19670 === (8))){
var inst_19575 = (state_19669[(8)]);
var inst_19592 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19575);
var state_19669__$1 = state_19669;
var statearr_19724_19778 = state_19669__$1;
(statearr_19724_19778[(2)] = inst_19592);

(statearr_19724_19778[(1)] = (10));


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
});})(c__15789__auto___19732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15724__auto__,c__15789__auto___19732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15725__auto__ = null;
var cljs$core$async$mix_$_state_machine__15725__auto____0 = (function (){
var statearr_19728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19728[(0)] = cljs$core$async$mix_$_state_machine__15725__auto__);

(statearr_19728[(1)] = (1));

return statearr_19728;
});
var cljs$core$async$mix_$_state_machine__15725__auto____1 = (function (state_19669){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_19669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e19729){if((e19729 instanceof Object)){
var ex__15728__auto__ = e19729;
var statearr_19730_19779 = state_19669;
(statearr_19730_19779[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19780 = state_19669;
state_19669 = G__19780;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15725__auto__ = function(state_19669){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15725__auto____1.call(this,state_19669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15725__auto____0;
cljs$core$async$mix_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15725__auto____1;
return cljs$core$async$mix_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___19732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15791__auto__ = (function (){var statearr_19731 = f__15790__auto__.call(null);
(statearr_19731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___19732);

return statearr_19731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___19732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19781 = [];
var len__14433__auto___19784 = arguments.length;
var i__14434__auto___19785 = (0);
while(true){
if((i__14434__auto___19785 < len__14433__auto___19784)){
args19781.push((arguments[i__14434__auto___19785]));

var G__19786 = (i__14434__auto___19785 + (1));
i__14434__auto___19785 = G__19786;
continue;
} else {
}
break;
}

var G__19783 = args19781.length;
switch (G__19783) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19781.length)].join('')));

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
var args19789 = [];
var len__14433__auto___19914 = arguments.length;
var i__14434__auto___19915 = (0);
while(true){
if((i__14434__auto___19915 < len__14433__auto___19914)){
args19789.push((arguments[i__14434__auto___19915]));

var G__19916 = (i__14434__auto___19915 + (1));
i__14434__auto___19915 = G__19916;
continue;
} else {
}
break;
}

var G__19791 = args19789.length;
switch (G__19791) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19789.length)].join('')));

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
return (function (p1__19788_SHARP_){
if(cljs.core.truth_(p1__19788_SHARP_.call(null,topic))){
return p1__19788_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19788_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13375__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19792 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19793){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19793 = meta19793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19794,meta19793__$1){
var self__ = this;
var _19794__$1 = this;
return (new cljs.core.async.t_cljs$core$async19792(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19793__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19794){
var self__ = this;
var _19794__$1 = this;
return self__.meta19793;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19792.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19792.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19792.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19792.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19792.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19792.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19792.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19792.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19793","meta19793",1217495506,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19792";

cljs.core.async.t_cljs$core$async19792.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async19792");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19792 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19792(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19793){
return (new cljs.core.async.t_cljs$core$async19792(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19793));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19792(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15789__auto___19918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___19918,mults,ensure_mult,p){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___19918,mults,ensure_mult,p){
return (function (state_19866){
var state_val_19867 = (state_19866[(1)]);
if((state_val_19867 === (7))){
var inst_19862 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
var statearr_19868_19919 = state_19866__$1;
(statearr_19868_19919[(2)] = inst_19862);

(statearr_19868_19919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (20))){
var state_19866__$1 = state_19866;
var statearr_19869_19920 = state_19866__$1;
(statearr_19869_19920[(2)] = null);

(statearr_19869_19920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (1))){
var state_19866__$1 = state_19866;
var statearr_19870_19921 = state_19866__$1;
(statearr_19870_19921[(2)] = null);

(statearr_19870_19921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (24))){
var inst_19845 = (state_19866[(7)]);
var inst_19854 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19845);
var state_19866__$1 = state_19866;
var statearr_19871_19922 = state_19866__$1;
(statearr_19871_19922[(2)] = inst_19854);

(statearr_19871_19922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (4))){
var inst_19797 = (state_19866[(8)]);
var inst_19797__$1 = (state_19866[(2)]);
var inst_19798 = (inst_19797__$1 == null);
var state_19866__$1 = (function (){var statearr_19872 = state_19866;
(statearr_19872[(8)] = inst_19797__$1);

return statearr_19872;
})();
if(cljs.core.truth_(inst_19798)){
var statearr_19873_19923 = state_19866__$1;
(statearr_19873_19923[(1)] = (5));

} else {
var statearr_19874_19924 = state_19866__$1;
(statearr_19874_19924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (15))){
var inst_19839 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
var statearr_19875_19925 = state_19866__$1;
(statearr_19875_19925[(2)] = inst_19839);

(statearr_19875_19925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (21))){
var inst_19859 = (state_19866[(2)]);
var state_19866__$1 = (function (){var statearr_19876 = state_19866;
(statearr_19876[(9)] = inst_19859);

return statearr_19876;
})();
var statearr_19877_19926 = state_19866__$1;
(statearr_19877_19926[(2)] = null);

(statearr_19877_19926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (13))){
var inst_19821 = (state_19866[(10)]);
var inst_19823 = cljs.core.chunked_seq_QMARK_.call(null,inst_19821);
var state_19866__$1 = state_19866;
if(inst_19823){
var statearr_19878_19927 = state_19866__$1;
(statearr_19878_19927[(1)] = (16));

} else {
var statearr_19879_19928 = state_19866__$1;
(statearr_19879_19928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (22))){
var inst_19851 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
if(cljs.core.truth_(inst_19851)){
var statearr_19880_19929 = state_19866__$1;
(statearr_19880_19929[(1)] = (23));

} else {
var statearr_19881_19930 = state_19866__$1;
(statearr_19881_19930[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (6))){
var inst_19845 = (state_19866[(7)]);
var inst_19847 = (state_19866[(11)]);
var inst_19797 = (state_19866[(8)]);
var inst_19845__$1 = topic_fn.call(null,inst_19797);
var inst_19846 = cljs.core.deref.call(null,mults);
var inst_19847__$1 = cljs.core.get.call(null,inst_19846,inst_19845__$1);
var state_19866__$1 = (function (){var statearr_19882 = state_19866;
(statearr_19882[(7)] = inst_19845__$1);

(statearr_19882[(11)] = inst_19847__$1);

return statearr_19882;
})();
if(cljs.core.truth_(inst_19847__$1)){
var statearr_19883_19931 = state_19866__$1;
(statearr_19883_19931[(1)] = (19));

} else {
var statearr_19884_19932 = state_19866__$1;
(statearr_19884_19932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (25))){
var inst_19856 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
var statearr_19885_19933 = state_19866__$1;
(statearr_19885_19933[(2)] = inst_19856);

(statearr_19885_19933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (17))){
var inst_19821 = (state_19866[(10)]);
var inst_19830 = cljs.core.first.call(null,inst_19821);
var inst_19831 = cljs.core.async.muxch_STAR_.call(null,inst_19830);
var inst_19832 = cljs.core.async.close_BANG_.call(null,inst_19831);
var inst_19833 = cljs.core.next.call(null,inst_19821);
var inst_19807 = inst_19833;
var inst_19808 = null;
var inst_19809 = (0);
var inst_19810 = (0);
var state_19866__$1 = (function (){var statearr_19886 = state_19866;
(statearr_19886[(12)] = inst_19807);

(statearr_19886[(13)] = inst_19810);

(statearr_19886[(14)] = inst_19808);

(statearr_19886[(15)] = inst_19809);

(statearr_19886[(16)] = inst_19832);

return statearr_19886;
})();
var statearr_19887_19934 = state_19866__$1;
(statearr_19887_19934[(2)] = null);

(statearr_19887_19934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (3))){
var inst_19864 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19866__$1,inst_19864);
} else {
if((state_val_19867 === (12))){
var inst_19841 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
var statearr_19888_19935 = state_19866__$1;
(statearr_19888_19935[(2)] = inst_19841);

(statearr_19888_19935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (2))){
var state_19866__$1 = state_19866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19866__$1,(4),ch);
} else {
if((state_val_19867 === (23))){
var state_19866__$1 = state_19866;
var statearr_19889_19936 = state_19866__$1;
(statearr_19889_19936[(2)] = null);

(statearr_19889_19936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (19))){
var inst_19847 = (state_19866[(11)]);
var inst_19797 = (state_19866[(8)]);
var inst_19849 = cljs.core.async.muxch_STAR_.call(null,inst_19847);
var state_19866__$1 = state_19866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19866__$1,(22),inst_19849,inst_19797);
} else {
if((state_val_19867 === (11))){
var inst_19807 = (state_19866[(12)]);
var inst_19821 = (state_19866[(10)]);
var inst_19821__$1 = cljs.core.seq.call(null,inst_19807);
var state_19866__$1 = (function (){var statearr_19890 = state_19866;
(statearr_19890[(10)] = inst_19821__$1);

return statearr_19890;
})();
if(inst_19821__$1){
var statearr_19891_19937 = state_19866__$1;
(statearr_19891_19937[(1)] = (13));

} else {
var statearr_19892_19938 = state_19866__$1;
(statearr_19892_19938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (9))){
var inst_19843 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
var statearr_19893_19939 = state_19866__$1;
(statearr_19893_19939[(2)] = inst_19843);

(statearr_19893_19939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (5))){
var inst_19804 = cljs.core.deref.call(null,mults);
var inst_19805 = cljs.core.vals.call(null,inst_19804);
var inst_19806 = cljs.core.seq.call(null,inst_19805);
var inst_19807 = inst_19806;
var inst_19808 = null;
var inst_19809 = (0);
var inst_19810 = (0);
var state_19866__$1 = (function (){var statearr_19894 = state_19866;
(statearr_19894[(12)] = inst_19807);

(statearr_19894[(13)] = inst_19810);

(statearr_19894[(14)] = inst_19808);

(statearr_19894[(15)] = inst_19809);

return statearr_19894;
})();
var statearr_19895_19940 = state_19866__$1;
(statearr_19895_19940[(2)] = null);

(statearr_19895_19940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (14))){
var state_19866__$1 = state_19866;
var statearr_19899_19941 = state_19866__$1;
(statearr_19899_19941[(2)] = null);

(statearr_19899_19941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (16))){
var inst_19821 = (state_19866[(10)]);
var inst_19825 = cljs.core.chunk_first.call(null,inst_19821);
var inst_19826 = cljs.core.chunk_rest.call(null,inst_19821);
var inst_19827 = cljs.core.count.call(null,inst_19825);
var inst_19807 = inst_19826;
var inst_19808 = inst_19825;
var inst_19809 = inst_19827;
var inst_19810 = (0);
var state_19866__$1 = (function (){var statearr_19900 = state_19866;
(statearr_19900[(12)] = inst_19807);

(statearr_19900[(13)] = inst_19810);

(statearr_19900[(14)] = inst_19808);

(statearr_19900[(15)] = inst_19809);

return statearr_19900;
})();
var statearr_19901_19942 = state_19866__$1;
(statearr_19901_19942[(2)] = null);

(statearr_19901_19942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (10))){
var inst_19807 = (state_19866[(12)]);
var inst_19810 = (state_19866[(13)]);
var inst_19808 = (state_19866[(14)]);
var inst_19809 = (state_19866[(15)]);
var inst_19815 = cljs.core._nth.call(null,inst_19808,inst_19810);
var inst_19816 = cljs.core.async.muxch_STAR_.call(null,inst_19815);
var inst_19817 = cljs.core.async.close_BANG_.call(null,inst_19816);
var inst_19818 = (inst_19810 + (1));
var tmp19896 = inst_19807;
var tmp19897 = inst_19808;
var tmp19898 = inst_19809;
var inst_19807__$1 = tmp19896;
var inst_19808__$1 = tmp19897;
var inst_19809__$1 = tmp19898;
var inst_19810__$1 = inst_19818;
var state_19866__$1 = (function (){var statearr_19902 = state_19866;
(statearr_19902[(12)] = inst_19807__$1);

(statearr_19902[(13)] = inst_19810__$1);

(statearr_19902[(14)] = inst_19808__$1);

(statearr_19902[(15)] = inst_19809__$1);

(statearr_19902[(17)] = inst_19817);

return statearr_19902;
})();
var statearr_19903_19943 = state_19866__$1;
(statearr_19903_19943[(2)] = null);

(statearr_19903_19943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (18))){
var inst_19836 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
var statearr_19904_19944 = state_19866__$1;
(statearr_19904_19944[(2)] = inst_19836);

(statearr_19904_19944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (8))){
var inst_19810 = (state_19866[(13)]);
var inst_19809 = (state_19866[(15)]);
var inst_19812 = (inst_19810 < inst_19809);
var inst_19813 = inst_19812;
var state_19866__$1 = state_19866;
if(cljs.core.truth_(inst_19813)){
var statearr_19905_19945 = state_19866__$1;
(statearr_19905_19945[(1)] = (10));

} else {
var statearr_19906_19946 = state_19866__$1;
(statearr_19906_19946[(1)] = (11));

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
});})(c__15789__auto___19918,mults,ensure_mult,p))
;
return ((function (switch__15724__auto__,c__15789__auto___19918,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_19910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19910[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_19910[(1)] = (1));

return statearr_19910;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_19866){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_19866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e19911){if((e19911 instanceof Object)){
var ex__15728__auto__ = e19911;
var statearr_19912_19947 = state_19866;
(statearr_19912_19947[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19948 = state_19866;
state_19866 = G__19948;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_19866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_19866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___19918,mults,ensure_mult,p))
})();
var state__15791__auto__ = (function (){var statearr_19913 = f__15790__auto__.call(null);
(statearr_19913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___19918);

return statearr_19913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___19918,mults,ensure_mult,p))
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
var args19949 = [];
var len__14433__auto___19952 = arguments.length;
var i__14434__auto___19953 = (0);
while(true){
if((i__14434__auto___19953 < len__14433__auto___19952)){
args19949.push((arguments[i__14434__auto___19953]));

var G__19954 = (i__14434__auto___19953 + (1));
i__14434__auto___19953 = G__19954;
continue;
} else {
}
break;
}

var G__19951 = args19949.length;
switch (G__19951) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19949.length)].join('')));

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
var args19956 = [];
var len__14433__auto___19959 = arguments.length;
var i__14434__auto___19960 = (0);
while(true){
if((i__14434__auto___19960 < len__14433__auto___19959)){
args19956.push((arguments[i__14434__auto___19960]));

var G__19961 = (i__14434__auto___19960 + (1));
i__14434__auto___19960 = G__19961;
continue;
} else {
}
break;
}

var G__19958 = args19956.length;
switch (G__19958) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19956.length)].join('')));

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
var args19963 = [];
var len__14433__auto___20034 = arguments.length;
var i__14434__auto___20035 = (0);
while(true){
if((i__14434__auto___20035 < len__14433__auto___20034)){
args19963.push((arguments[i__14434__auto___20035]));

var G__20036 = (i__14434__auto___20035 + (1));
i__14434__auto___20035 = G__20036;
continue;
} else {
}
break;
}

var G__19965 = args19963.length;
switch (G__19965) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19963.length)].join('')));

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
var c__15789__auto___20038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___20038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___20038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20004){
var state_val_20005 = (state_20004[(1)]);
if((state_val_20005 === (7))){
var state_20004__$1 = state_20004;
var statearr_20006_20039 = state_20004__$1;
(statearr_20006_20039[(2)] = null);

(statearr_20006_20039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20005 === (1))){
var state_20004__$1 = state_20004;
var statearr_20007_20040 = state_20004__$1;
(statearr_20007_20040[(2)] = null);

(statearr_20007_20040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20005 === (4))){
var inst_19968 = (state_20004[(7)]);
var inst_19970 = (inst_19968 < cnt);
var state_20004__$1 = state_20004;
if(cljs.core.truth_(inst_19970)){
var statearr_20008_20041 = state_20004__$1;
(statearr_20008_20041[(1)] = (6));

} else {
var statearr_20009_20042 = state_20004__$1;
(statearr_20009_20042[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20005 === (15))){
var inst_20000 = (state_20004[(2)]);
var state_20004__$1 = state_20004;
var statearr_20010_20043 = state_20004__$1;
(statearr_20010_20043[(2)] = inst_20000);

(statearr_20010_20043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20005 === (13))){
var inst_19993 = cljs.core.async.close_BANG_.call(null,out);
var state_20004__$1 = state_20004;
var statearr_20011_20044 = state_20004__$1;
(statearr_20011_20044[(2)] = inst_19993);

(statearr_20011_20044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20005 === (6))){
var state_20004__$1 = state_20004;
var statearr_20012_20045 = state_20004__$1;
(statearr_20012_20045[(2)] = null);

(statearr_20012_20045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20005 === (3))){
var inst_20002 = (state_20004[(2)]);
var state_20004__$1 = state_20004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20004__$1,inst_20002);
} else {
if((state_val_20005 === (12))){
var inst_19990 = (state_20004[(8)]);
var inst_19990__$1 = (state_20004[(2)]);
var inst_19991 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19990__$1);
var state_20004__$1 = (function (){var statearr_20013 = state_20004;
(statearr_20013[(8)] = inst_19990__$1);

return statearr_20013;
})();
if(cljs.core.truth_(inst_19991)){
var statearr_20014_20046 = state_20004__$1;
(statearr_20014_20046[(1)] = (13));

} else {
var statearr_20015_20047 = state_20004__$1;
(statearr_20015_20047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20005 === (2))){
var inst_19967 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19968 = (0);
var state_20004__$1 = (function (){var statearr_20016 = state_20004;
(statearr_20016[(9)] = inst_19967);

(statearr_20016[(7)] = inst_19968);

return statearr_20016;
})();
var statearr_20017_20048 = state_20004__$1;
(statearr_20017_20048[(2)] = null);

(statearr_20017_20048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20005 === (11))){
var inst_19968 = (state_20004[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20004,(10),Object,null,(9));
var inst_19977 = chs__$1.call(null,inst_19968);
var inst_19978 = done.call(null,inst_19968);
var inst_19979 = cljs.core.async.take_BANG_.call(null,inst_19977,inst_19978);
var state_20004__$1 = state_20004;
var statearr_20018_20049 = state_20004__$1;
(statearr_20018_20049[(2)] = inst_19979);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20004__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20005 === (9))){
var inst_19968 = (state_20004[(7)]);
var inst_19981 = (state_20004[(2)]);
var inst_19982 = (inst_19968 + (1));
var inst_19968__$1 = inst_19982;
var state_20004__$1 = (function (){var statearr_20019 = state_20004;
(statearr_20019[(7)] = inst_19968__$1);

(statearr_20019[(10)] = inst_19981);

return statearr_20019;
})();
var statearr_20020_20050 = state_20004__$1;
(statearr_20020_20050[(2)] = null);

(statearr_20020_20050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20005 === (5))){
var inst_19988 = (state_20004[(2)]);
var state_20004__$1 = (function (){var statearr_20021 = state_20004;
(statearr_20021[(11)] = inst_19988);

return statearr_20021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20004__$1,(12),dchan);
} else {
if((state_val_20005 === (14))){
var inst_19990 = (state_20004[(8)]);
var inst_19995 = cljs.core.apply.call(null,f,inst_19990);
var state_20004__$1 = state_20004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20004__$1,(16),out,inst_19995);
} else {
if((state_val_20005 === (16))){
var inst_19997 = (state_20004[(2)]);
var state_20004__$1 = (function (){var statearr_20022 = state_20004;
(statearr_20022[(12)] = inst_19997);

return statearr_20022;
})();
var statearr_20023_20051 = state_20004__$1;
(statearr_20023_20051[(2)] = null);

(statearr_20023_20051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20005 === (10))){
var inst_19972 = (state_20004[(2)]);
var inst_19973 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20004__$1 = (function (){var statearr_20024 = state_20004;
(statearr_20024[(13)] = inst_19972);

return statearr_20024;
})();
var statearr_20025_20052 = state_20004__$1;
(statearr_20025_20052[(2)] = inst_19973);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20004__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20005 === (8))){
var inst_19986 = (state_20004[(2)]);
var state_20004__$1 = state_20004;
var statearr_20026_20053 = state_20004__$1;
(statearr_20026_20053[(2)] = inst_19986);

(statearr_20026_20053[(1)] = (5));


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
});})(c__15789__auto___20038,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15724__auto__,c__15789__auto___20038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_20030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20030[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_20030[(1)] = (1));

return statearr_20030;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_20004){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_20004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e20031){if((e20031 instanceof Object)){
var ex__15728__auto__ = e20031;
var statearr_20032_20054 = state_20004;
(statearr_20032_20054[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20055 = state_20004;
state_20004 = G__20055;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_20004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_20004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___20038,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15791__auto__ = (function (){var statearr_20033 = f__15790__auto__.call(null);
(statearr_20033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___20038);

return statearr_20033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___20038,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args20057 = [];
var len__14433__auto___20113 = arguments.length;
var i__14434__auto___20114 = (0);
while(true){
if((i__14434__auto___20114 < len__14433__auto___20113)){
args20057.push((arguments[i__14434__auto___20114]));

var G__20115 = (i__14434__auto___20114 + (1));
i__14434__auto___20114 = G__20115;
continue;
} else {
}
break;
}

var G__20059 = args20057.length;
switch (G__20059) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20057.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___20117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___20117,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___20117,out){
return (function (state_20089){
var state_val_20090 = (state_20089[(1)]);
if((state_val_20090 === (7))){
var inst_20068 = (state_20089[(7)]);
var inst_20069 = (state_20089[(8)]);
var inst_20068__$1 = (state_20089[(2)]);
var inst_20069__$1 = cljs.core.nth.call(null,inst_20068__$1,(0),null);
var inst_20070 = cljs.core.nth.call(null,inst_20068__$1,(1),null);
var inst_20071 = (inst_20069__$1 == null);
var state_20089__$1 = (function (){var statearr_20091 = state_20089;
(statearr_20091[(9)] = inst_20070);

(statearr_20091[(7)] = inst_20068__$1);

(statearr_20091[(8)] = inst_20069__$1);

return statearr_20091;
})();
if(cljs.core.truth_(inst_20071)){
var statearr_20092_20118 = state_20089__$1;
(statearr_20092_20118[(1)] = (8));

} else {
var statearr_20093_20119 = state_20089__$1;
(statearr_20093_20119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (1))){
var inst_20060 = cljs.core.vec.call(null,chs);
var inst_20061 = inst_20060;
var state_20089__$1 = (function (){var statearr_20094 = state_20089;
(statearr_20094[(10)] = inst_20061);

return statearr_20094;
})();
var statearr_20095_20120 = state_20089__$1;
(statearr_20095_20120[(2)] = null);

(statearr_20095_20120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (4))){
var inst_20061 = (state_20089[(10)]);
var state_20089__$1 = state_20089;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20089__$1,(7),inst_20061);
} else {
if((state_val_20090 === (6))){
var inst_20085 = (state_20089[(2)]);
var state_20089__$1 = state_20089;
var statearr_20096_20121 = state_20089__$1;
(statearr_20096_20121[(2)] = inst_20085);

(statearr_20096_20121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (3))){
var inst_20087 = (state_20089[(2)]);
var state_20089__$1 = state_20089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20089__$1,inst_20087);
} else {
if((state_val_20090 === (2))){
var inst_20061 = (state_20089[(10)]);
var inst_20063 = cljs.core.count.call(null,inst_20061);
var inst_20064 = (inst_20063 > (0));
var state_20089__$1 = state_20089;
if(cljs.core.truth_(inst_20064)){
var statearr_20098_20122 = state_20089__$1;
(statearr_20098_20122[(1)] = (4));

} else {
var statearr_20099_20123 = state_20089__$1;
(statearr_20099_20123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (11))){
var inst_20061 = (state_20089[(10)]);
var inst_20078 = (state_20089[(2)]);
var tmp20097 = inst_20061;
var inst_20061__$1 = tmp20097;
var state_20089__$1 = (function (){var statearr_20100 = state_20089;
(statearr_20100[(11)] = inst_20078);

(statearr_20100[(10)] = inst_20061__$1);

return statearr_20100;
})();
var statearr_20101_20124 = state_20089__$1;
(statearr_20101_20124[(2)] = null);

(statearr_20101_20124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (9))){
var inst_20069 = (state_20089[(8)]);
var state_20089__$1 = state_20089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20089__$1,(11),out,inst_20069);
} else {
if((state_val_20090 === (5))){
var inst_20083 = cljs.core.async.close_BANG_.call(null,out);
var state_20089__$1 = state_20089;
var statearr_20102_20125 = state_20089__$1;
(statearr_20102_20125[(2)] = inst_20083);

(statearr_20102_20125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (10))){
var inst_20081 = (state_20089[(2)]);
var state_20089__$1 = state_20089;
var statearr_20103_20126 = state_20089__$1;
(statearr_20103_20126[(2)] = inst_20081);

(statearr_20103_20126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (8))){
var inst_20070 = (state_20089[(9)]);
var inst_20068 = (state_20089[(7)]);
var inst_20061 = (state_20089[(10)]);
var inst_20069 = (state_20089[(8)]);
var inst_20073 = (function (){var cs = inst_20061;
var vec__20066 = inst_20068;
var v = inst_20069;
var c = inst_20070;
return ((function (cs,vec__20066,v,c,inst_20070,inst_20068,inst_20061,inst_20069,state_val_20090,c__15789__auto___20117,out){
return (function (p1__20056_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20056_SHARP_);
});
;})(cs,vec__20066,v,c,inst_20070,inst_20068,inst_20061,inst_20069,state_val_20090,c__15789__auto___20117,out))
})();
var inst_20074 = cljs.core.filterv.call(null,inst_20073,inst_20061);
var inst_20061__$1 = inst_20074;
var state_20089__$1 = (function (){var statearr_20104 = state_20089;
(statearr_20104[(10)] = inst_20061__$1);

return statearr_20104;
})();
var statearr_20105_20127 = state_20089__$1;
(statearr_20105_20127[(2)] = null);

(statearr_20105_20127[(1)] = (2));


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
});})(c__15789__auto___20117,out))
;
return ((function (switch__15724__auto__,c__15789__auto___20117,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_20109 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20109[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_20109[(1)] = (1));

return statearr_20109;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_20089){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_20089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e20110){if((e20110 instanceof Object)){
var ex__15728__auto__ = e20110;
var statearr_20111_20128 = state_20089;
(statearr_20111_20128[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20129 = state_20089;
state_20089 = G__20129;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_20089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_20089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___20117,out))
})();
var state__15791__auto__ = (function (){var statearr_20112 = f__15790__auto__.call(null);
(statearr_20112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___20117);

return statearr_20112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___20117,out))
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
var args20130 = [];
var len__14433__auto___20179 = arguments.length;
var i__14434__auto___20180 = (0);
while(true){
if((i__14434__auto___20180 < len__14433__auto___20179)){
args20130.push((arguments[i__14434__auto___20180]));

var G__20181 = (i__14434__auto___20180 + (1));
i__14434__auto___20180 = G__20181;
continue;
} else {
}
break;
}

var G__20132 = args20130.length;
switch (G__20132) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20130.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___20183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___20183,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___20183,out){
return (function (state_20156){
var state_val_20157 = (state_20156[(1)]);
if((state_val_20157 === (7))){
var inst_20138 = (state_20156[(7)]);
var inst_20138__$1 = (state_20156[(2)]);
var inst_20139 = (inst_20138__$1 == null);
var inst_20140 = cljs.core.not.call(null,inst_20139);
var state_20156__$1 = (function (){var statearr_20158 = state_20156;
(statearr_20158[(7)] = inst_20138__$1);

return statearr_20158;
})();
if(inst_20140){
var statearr_20159_20184 = state_20156__$1;
(statearr_20159_20184[(1)] = (8));

} else {
var statearr_20160_20185 = state_20156__$1;
(statearr_20160_20185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20157 === (1))){
var inst_20133 = (0);
var state_20156__$1 = (function (){var statearr_20161 = state_20156;
(statearr_20161[(8)] = inst_20133);

return statearr_20161;
})();
var statearr_20162_20186 = state_20156__$1;
(statearr_20162_20186[(2)] = null);

(statearr_20162_20186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20157 === (4))){
var state_20156__$1 = state_20156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20156__$1,(7),ch);
} else {
if((state_val_20157 === (6))){
var inst_20151 = (state_20156[(2)]);
var state_20156__$1 = state_20156;
var statearr_20163_20187 = state_20156__$1;
(statearr_20163_20187[(2)] = inst_20151);

(statearr_20163_20187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20157 === (3))){
var inst_20153 = (state_20156[(2)]);
var inst_20154 = cljs.core.async.close_BANG_.call(null,out);
var state_20156__$1 = (function (){var statearr_20164 = state_20156;
(statearr_20164[(9)] = inst_20153);

return statearr_20164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20156__$1,inst_20154);
} else {
if((state_val_20157 === (2))){
var inst_20133 = (state_20156[(8)]);
var inst_20135 = (inst_20133 < n);
var state_20156__$1 = state_20156;
if(cljs.core.truth_(inst_20135)){
var statearr_20165_20188 = state_20156__$1;
(statearr_20165_20188[(1)] = (4));

} else {
var statearr_20166_20189 = state_20156__$1;
(statearr_20166_20189[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20157 === (11))){
var inst_20133 = (state_20156[(8)]);
var inst_20143 = (state_20156[(2)]);
var inst_20144 = (inst_20133 + (1));
var inst_20133__$1 = inst_20144;
var state_20156__$1 = (function (){var statearr_20167 = state_20156;
(statearr_20167[(8)] = inst_20133__$1);

(statearr_20167[(10)] = inst_20143);

return statearr_20167;
})();
var statearr_20168_20190 = state_20156__$1;
(statearr_20168_20190[(2)] = null);

(statearr_20168_20190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20157 === (9))){
var state_20156__$1 = state_20156;
var statearr_20169_20191 = state_20156__$1;
(statearr_20169_20191[(2)] = null);

(statearr_20169_20191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20157 === (5))){
var state_20156__$1 = state_20156;
var statearr_20170_20192 = state_20156__$1;
(statearr_20170_20192[(2)] = null);

(statearr_20170_20192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20157 === (10))){
var inst_20148 = (state_20156[(2)]);
var state_20156__$1 = state_20156;
var statearr_20171_20193 = state_20156__$1;
(statearr_20171_20193[(2)] = inst_20148);

(statearr_20171_20193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20157 === (8))){
var inst_20138 = (state_20156[(7)]);
var state_20156__$1 = state_20156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20156__$1,(11),out,inst_20138);
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
});})(c__15789__auto___20183,out))
;
return ((function (switch__15724__auto__,c__15789__auto___20183,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_20175 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20175[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_20175[(1)] = (1));

return statearr_20175;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_20156){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_20156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e20176){if((e20176 instanceof Object)){
var ex__15728__auto__ = e20176;
var statearr_20177_20194 = state_20156;
(statearr_20177_20194[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20195 = state_20156;
state_20156 = G__20195;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_20156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_20156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___20183,out))
})();
var state__15791__auto__ = (function (){var statearr_20178 = f__15790__auto__.call(null);
(statearr_20178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___20183);

return statearr_20178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___20183,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20203 = (function (map_LT_,f,ch,meta20204){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20204 = meta20204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20205,meta20204__$1){
var self__ = this;
var _20205__$1 = this;
return (new cljs.core.async.t_cljs$core$async20203(self__.map_LT_,self__.f,self__.ch,meta20204__$1));
});

cljs.core.async.t_cljs$core$async20203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20205){
var self__ = this;
var _20205__$1 = this;
return self__.meta20204;
});

cljs.core.async.t_cljs$core$async20203.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20203.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20203.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20206 = (function (map_LT_,f,ch,meta20204,_,fn1,meta20207){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20204 = meta20204;
this._ = _;
this.fn1 = fn1;
this.meta20207 = meta20207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20208,meta20207__$1){
var self__ = this;
var _20208__$1 = this;
return (new cljs.core.async.t_cljs$core$async20206(self__.map_LT_,self__.f,self__.ch,self__.meta20204,self__._,self__.fn1,meta20207__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20208){
var self__ = this;
var _20208__$1 = this;
return self__.meta20207;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20206.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20206.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20196_SHARP_){
return f1.call(null,(((p1__20196_SHARP_ == null))?null:self__.f.call(null,p1__20196_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20206.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20204","meta20204",-1120016618,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20203","cljs.core.async/t_cljs$core$async20203",-972708278,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20207","meta20207",739478353,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20206";

cljs.core.async.t_cljs$core$async20206.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async20206");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20206 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20206(map_LT___$1,f__$1,ch__$1,meta20204__$1,___$2,fn1__$1,meta20207){
return (new cljs.core.async.t_cljs$core$async20206(map_LT___$1,f__$1,ch__$1,meta20204__$1,___$2,fn1__$1,meta20207));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20206(self__.map_LT_,self__.f,self__.ch,self__.meta20204,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async20203.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20204","meta20204",-1120016618,null)], null);
});

cljs.core.async.t_cljs$core$async20203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20203";

cljs.core.async.t_cljs$core$async20203.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async20203");
});

cljs.core.async.__GT_t_cljs$core$async20203 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20203(map_LT___$1,f__$1,ch__$1,meta20204){
return (new cljs.core.async.t_cljs$core$async20203(map_LT___$1,f__$1,ch__$1,meta20204));
});

}

return (new cljs.core.async.t_cljs$core$async20203(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20212 = (function (map_GT_,f,ch,meta20213){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20213 = meta20213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20214,meta20213__$1){
var self__ = this;
var _20214__$1 = this;
return (new cljs.core.async.t_cljs$core$async20212(self__.map_GT_,self__.f,self__.ch,meta20213__$1));
});

cljs.core.async.t_cljs$core$async20212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20214){
var self__ = this;
var _20214__$1 = this;
return self__.meta20213;
});

cljs.core.async.t_cljs$core$async20212.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20212.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20212.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20212.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20212.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20212.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20213","meta20213",-1538414222,null)], null);
});

cljs.core.async.t_cljs$core$async20212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20212";

cljs.core.async.t_cljs$core$async20212.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async20212");
});

cljs.core.async.__GT_t_cljs$core$async20212 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20212(map_GT___$1,f__$1,ch__$1,meta20213){
return (new cljs.core.async.t_cljs$core$async20212(map_GT___$1,f__$1,ch__$1,meta20213));
});

}

return (new cljs.core.async.t_cljs$core$async20212(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20218 = (function (filter_GT_,p,ch,meta20219){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20219 = meta20219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20220,meta20219__$1){
var self__ = this;
var _20220__$1 = this;
return (new cljs.core.async.t_cljs$core$async20218(self__.filter_GT_,self__.p,self__.ch,meta20219__$1));
});

cljs.core.async.t_cljs$core$async20218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20220){
var self__ = this;
var _20220__$1 = this;
return self__.meta20219;
});

cljs.core.async.t_cljs$core$async20218.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20218.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20218.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20218.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20219","meta20219",-443547140,null)], null);
});

cljs.core.async.t_cljs$core$async20218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20218";

cljs.core.async.t_cljs$core$async20218.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async20218");
});

cljs.core.async.__GT_t_cljs$core$async20218 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20218(filter_GT___$1,p__$1,ch__$1,meta20219){
return (new cljs.core.async.t_cljs$core$async20218(filter_GT___$1,p__$1,ch__$1,meta20219));
});

}

return (new cljs.core.async.t_cljs$core$async20218(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args20221 = [];
var len__14433__auto___20265 = arguments.length;
var i__14434__auto___20266 = (0);
while(true){
if((i__14434__auto___20266 < len__14433__auto___20265)){
args20221.push((arguments[i__14434__auto___20266]));

var G__20267 = (i__14434__auto___20266 + (1));
i__14434__auto___20266 = G__20267;
continue;
} else {
}
break;
}

var G__20223 = args20221.length;
switch (G__20223) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20221.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___20269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___20269,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___20269,out){
return (function (state_20244){
var state_val_20245 = (state_20244[(1)]);
if((state_val_20245 === (7))){
var inst_20240 = (state_20244[(2)]);
var state_20244__$1 = state_20244;
var statearr_20246_20270 = state_20244__$1;
(statearr_20246_20270[(2)] = inst_20240);

(statearr_20246_20270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (1))){
var state_20244__$1 = state_20244;
var statearr_20247_20271 = state_20244__$1;
(statearr_20247_20271[(2)] = null);

(statearr_20247_20271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (4))){
var inst_20226 = (state_20244[(7)]);
var inst_20226__$1 = (state_20244[(2)]);
var inst_20227 = (inst_20226__$1 == null);
var state_20244__$1 = (function (){var statearr_20248 = state_20244;
(statearr_20248[(7)] = inst_20226__$1);

return statearr_20248;
})();
if(cljs.core.truth_(inst_20227)){
var statearr_20249_20272 = state_20244__$1;
(statearr_20249_20272[(1)] = (5));

} else {
var statearr_20250_20273 = state_20244__$1;
(statearr_20250_20273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (6))){
var inst_20226 = (state_20244[(7)]);
var inst_20231 = p.call(null,inst_20226);
var state_20244__$1 = state_20244;
if(cljs.core.truth_(inst_20231)){
var statearr_20251_20274 = state_20244__$1;
(statearr_20251_20274[(1)] = (8));

} else {
var statearr_20252_20275 = state_20244__$1;
(statearr_20252_20275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (3))){
var inst_20242 = (state_20244[(2)]);
var state_20244__$1 = state_20244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20244__$1,inst_20242);
} else {
if((state_val_20245 === (2))){
var state_20244__$1 = state_20244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20244__$1,(4),ch);
} else {
if((state_val_20245 === (11))){
var inst_20234 = (state_20244[(2)]);
var state_20244__$1 = state_20244;
var statearr_20253_20276 = state_20244__$1;
(statearr_20253_20276[(2)] = inst_20234);

(statearr_20253_20276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (9))){
var state_20244__$1 = state_20244;
var statearr_20254_20277 = state_20244__$1;
(statearr_20254_20277[(2)] = null);

(statearr_20254_20277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (5))){
var inst_20229 = cljs.core.async.close_BANG_.call(null,out);
var state_20244__$1 = state_20244;
var statearr_20255_20278 = state_20244__$1;
(statearr_20255_20278[(2)] = inst_20229);

(statearr_20255_20278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (10))){
var inst_20237 = (state_20244[(2)]);
var state_20244__$1 = (function (){var statearr_20256 = state_20244;
(statearr_20256[(8)] = inst_20237);

return statearr_20256;
})();
var statearr_20257_20279 = state_20244__$1;
(statearr_20257_20279[(2)] = null);

(statearr_20257_20279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (8))){
var inst_20226 = (state_20244[(7)]);
var state_20244__$1 = state_20244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20244__$1,(11),out,inst_20226);
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
});})(c__15789__auto___20269,out))
;
return ((function (switch__15724__auto__,c__15789__auto___20269,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_20261 = [null,null,null,null,null,null,null,null,null];
(statearr_20261[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_20261[(1)] = (1));

return statearr_20261;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_20244){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_20244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e20262){if((e20262 instanceof Object)){
var ex__15728__auto__ = e20262;
var statearr_20263_20280 = state_20244;
(statearr_20263_20280[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20281 = state_20244;
state_20244 = G__20281;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_20244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_20244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___20269,out))
})();
var state__15791__auto__ = (function (){var statearr_20264 = f__15790__auto__.call(null);
(statearr_20264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___20269);

return statearr_20264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___20269,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20282 = [];
var len__14433__auto___20285 = arguments.length;
var i__14434__auto___20286 = (0);
while(true){
if((i__14434__auto___20286 < len__14433__auto___20285)){
args20282.push((arguments[i__14434__auto___20286]));

var G__20287 = (i__14434__auto___20286 + (1));
i__14434__auto___20286 = G__20287;
continue;
} else {
}
break;
}

var G__20284 = args20282.length;
switch (G__20284) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20282.length)].join('')));

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
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_20454){
var state_val_20455 = (state_20454[(1)]);
if((state_val_20455 === (7))){
var inst_20450 = (state_20454[(2)]);
var state_20454__$1 = state_20454;
var statearr_20456_20497 = state_20454__$1;
(statearr_20456_20497[(2)] = inst_20450);

(statearr_20456_20497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (20))){
var inst_20420 = (state_20454[(7)]);
var inst_20431 = (state_20454[(2)]);
var inst_20432 = cljs.core.next.call(null,inst_20420);
var inst_20406 = inst_20432;
var inst_20407 = null;
var inst_20408 = (0);
var inst_20409 = (0);
var state_20454__$1 = (function (){var statearr_20457 = state_20454;
(statearr_20457[(8)] = inst_20408);

(statearr_20457[(9)] = inst_20409);

(statearr_20457[(10)] = inst_20407);

(statearr_20457[(11)] = inst_20406);

(statearr_20457[(12)] = inst_20431);

return statearr_20457;
})();
var statearr_20458_20498 = state_20454__$1;
(statearr_20458_20498[(2)] = null);

(statearr_20458_20498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (1))){
var state_20454__$1 = state_20454;
var statearr_20459_20499 = state_20454__$1;
(statearr_20459_20499[(2)] = null);

(statearr_20459_20499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (4))){
var inst_20395 = (state_20454[(13)]);
var inst_20395__$1 = (state_20454[(2)]);
var inst_20396 = (inst_20395__$1 == null);
var state_20454__$1 = (function (){var statearr_20460 = state_20454;
(statearr_20460[(13)] = inst_20395__$1);

return statearr_20460;
})();
if(cljs.core.truth_(inst_20396)){
var statearr_20461_20500 = state_20454__$1;
(statearr_20461_20500[(1)] = (5));

} else {
var statearr_20462_20501 = state_20454__$1;
(statearr_20462_20501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (15))){
var state_20454__$1 = state_20454;
var statearr_20466_20502 = state_20454__$1;
(statearr_20466_20502[(2)] = null);

(statearr_20466_20502[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (21))){
var state_20454__$1 = state_20454;
var statearr_20467_20503 = state_20454__$1;
(statearr_20467_20503[(2)] = null);

(statearr_20467_20503[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (13))){
var inst_20408 = (state_20454[(8)]);
var inst_20409 = (state_20454[(9)]);
var inst_20407 = (state_20454[(10)]);
var inst_20406 = (state_20454[(11)]);
var inst_20416 = (state_20454[(2)]);
var inst_20417 = (inst_20409 + (1));
var tmp20463 = inst_20408;
var tmp20464 = inst_20407;
var tmp20465 = inst_20406;
var inst_20406__$1 = tmp20465;
var inst_20407__$1 = tmp20464;
var inst_20408__$1 = tmp20463;
var inst_20409__$1 = inst_20417;
var state_20454__$1 = (function (){var statearr_20468 = state_20454;
(statearr_20468[(8)] = inst_20408__$1);

(statearr_20468[(9)] = inst_20409__$1);

(statearr_20468[(10)] = inst_20407__$1);

(statearr_20468[(14)] = inst_20416);

(statearr_20468[(11)] = inst_20406__$1);

return statearr_20468;
})();
var statearr_20469_20504 = state_20454__$1;
(statearr_20469_20504[(2)] = null);

(statearr_20469_20504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (22))){
var state_20454__$1 = state_20454;
var statearr_20470_20505 = state_20454__$1;
(statearr_20470_20505[(2)] = null);

(statearr_20470_20505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (6))){
var inst_20395 = (state_20454[(13)]);
var inst_20404 = f.call(null,inst_20395);
var inst_20405 = cljs.core.seq.call(null,inst_20404);
var inst_20406 = inst_20405;
var inst_20407 = null;
var inst_20408 = (0);
var inst_20409 = (0);
var state_20454__$1 = (function (){var statearr_20471 = state_20454;
(statearr_20471[(8)] = inst_20408);

(statearr_20471[(9)] = inst_20409);

(statearr_20471[(10)] = inst_20407);

(statearr_20471[(11)] = inst_20406);

return statearr_20471;
})();
var statearr_20472_20506 = state_20454__$1;
(statearr_20472_20506[(2)] = null);

(statearr_20472_20506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (17))){
var inst_20420 = (state_20454[(7)]);
var inst_20424 = cljs.core.chunk_first.call(null,inst_20420);
var inst_20425 = cljs.core.chunk_rest.call(null,inst_20420);
var inst_20426 = cljs.core.count.call(null,inst_20424);
var inst_20406 = inst_20425;
var inst_20407 = inst_20424;
var inst_20408 = inst_20426;
var inst_20409 = (0);
var state_20454__$1 = (function (){var statearr_20473 = state_20454;
(statearr_20473[(8)] = inst_20408);

(statearr_20473[(9)] = inst_20409);

(statearr_20473[(10)] = inst_20407);

(statearr_20473[(11)] = inst_20406);

return statearr_20473;
})();
var statearr_20474_20507 = state_20454__$1;
(statearr_20474_20507[(2)] = null);

(statearr_20474_20507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (3))){
var inst_20452 = (state_20454[(2)]);
var state_20454__$1 = state_20454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20454__$1,inst_20452);
} else {
if((state_val_20455 === (12))){
var inst_20440 = (state_20454[(2)]);
var state_20454__$1 = state_20454;
var statearr_20475_20508 = state_20454__$1;
(statearr_20475_20508[(2)] = inst_20440);

(statearr_20475_20508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (2))){
var state_20454__$1 = state_20454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20454__$1,(4),in$);
} else {
if((state_val_20455 === (23))){
var inst_20448 = (state_20454[(2)]);
var state_20454__$1 = state_20454;
var statearr_20476_20509 = state_20454__$1;
(statearr_20476_20509[(2)] = inst_20448);

(statearr_20476_20509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (19))){
var inst_20435 = (state_20454[(2)]);
var state_20454__$1 = state_20454;
var statearr_20477_20510 = state_20454__$1;
(statearr_20477_20510[(2)] = inst_20435);

(statearr_20477_20510[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (11))){
var inst_20420 = (state_20454[(7)]);
var inst_20406 = (state_20454[(11)]);
var inst_20420__$1 = cljs.core.seq.call(null,inst_20406);
var state_20454__$1 = (function (){var statearr_20478 = state_20454;
(statearr_20478[(7)] = inst_20420__$1);

return statearr_20478;
})();
if(inst_20420__$1){
var statearr_20479_20511 = state_20454__$1;
(statearr_20479_20511[(1)] = (14));

} else {
var statearr_20480_20512 = state_20454__$1;
(statearr_20480_20512[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (9))){
var inst_20442 = (state_20454[(2)]);
var inst_20443 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20454__$1 = (function (){var statearr_20481 = state_20454;
(statearr_20481[(15)] = inst_20442);

return statearr_20481;
})();
if(cljs.core.truth_(inst_20443)){
var statearr_20482_20513 = state_20454__$1;
(statearr_20482_20513[(1)] = (21));

} else {
var statearr_20483_20514 = state_20454__$1;
(statearr_20483_20514[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (5))){
var inst_20398 = cljs.core.async.close_BANG_.call(null,out);
var state_20454__$1 = state_20454;
var statearr_20484_20515 = state_20454__$1;
(statearr_20484_20515[(2)] = inst_20398);

(statearr_20484_20515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (14))){
var inst_20420 = (state_20454[(7)]);
var inst_20422 = cljs.core.chunked_seq_QMARK_.call(null,inst_20420);
var state_20454__$1 = state_20454;
if(inst_20422){
var statearr_20485_20516 = state_20454__$1;
(statearr_20485_20516[(1)] = (17));

} else {
var statearr_20486_20517 = state_20454__$1;
(statearr_20486_20517[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (16))){
var inst_20438 = (state_20454[(2)]);
var state_20454__$1 = state_20454;
var statearr_20487_20518 = state_20454__$1;
(statearr_20487_20518[(2)] = inst_20438);

(statearr_20487_20518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (10))){
var inst_20409 = (state_20454[(9)]);
var inst_20407 = (state_20454[(10)]);
var inst_20414 = cljs.core._nth.call(null,inst_20407,inst_20409);
var state_20454__$1 = state_20454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20454__$1,(13),out,inst_20414);
} else {
if((state_val_20455 === (18))){
var inst_20420 = (state_20454[(7)]);
var inst_20429 = cljs.core.first.call(null,inst_20420);
var state_20454__$1 = state_20454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20454__$1,(20),out,inst_20429);
} else {
if((state_val_20455 === (8))){
var inst_20408 = (state_20454[(8)]);
var inst_20409 = (state_20454[(9)]);
var inst_20411 = (inst_20409 < inst_20408);
var inst_20412 = inst_20411;
var state_20454__$1 = state_20454;
if(cljs.core.truth_(inst_20412)){
var statearr_20488_20519 = state_20454__$1;
(statearr_20488_20519[(1)] = (10));

} else {
var statearr_20489_20520 = state_20454__$1;
(statearr_20489_20520[(1)] = (11));

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
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_20493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20493[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__);

(statearr_20493[(1)] = (1));

return statearr_20493;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____1 = (function (state_20454){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_20454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e20494){if((e20494 instanceof Object)){
var ex__15728__auto__ = e20494;
var statearr_20495_20521 = state_20454;
(statearr_20495_20521[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20522 = state_20454;
state_20454 = G__20522;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__ = function(state_20454){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____1.call(this,state_20454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_20496 = f__15790__auto__.call(null);
(statearr_20496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_20496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__))
);

return c__15789__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20523 = [];
var len__14433__auto___20526 = arguments.length;
var i__14434__auto___20527 = (0);
while(true){
if((i__14434__auto___20527 < len__14433__auto___20526)){
args20523.push((arguments[i__14434__auto___20527]));

var G__20528 = (i__14434__auto___20527 + (1));
i__14434__auto___20527 = G__20528;
continue;
} else {
}
break;
}

var G__20525 = args20523.length;
switch (G__20525) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20523.length)].join('')));

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
var args20530 = [];
var len__14433__auto___20533 = arguments.length;
var i__14434__auto___20534 = (0);
while(true){
if((i__14434__auto___20534 < len__14433__auto___20533)){
args20530.push((arguments[i__14434__auto___20534]));

var G__20535 = (i__14434__auto___20534 + (1));
i__14434__auto___20534 = G__20535;
continue;
} else {
}
break;
}

var G__20532 = args20530.length;
switch (G__20532) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20530.length)].join('')));

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
var args20537 = [];
var len__14433__auto___20588 = arguments.length;
var i__14434__auto___20589 = (0);
while(true){
if((i__14434__auto___20589 < len__14433__auto___20588)){
args20537.push((arguments[i__14434__auto___20589]));

var G__20590 = (i__14434__auto___20589 + (1));
i__14434__auto___20589 = G__20590;
continue;
} else {
}
break;
}

var G__20539 = args20537.length;
switch (G__20539) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20537.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___20592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___20592,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___20592,out){
return (function (state_20563){
var state_val_20564 = (state_20563[(1)]);
if((state_val_20564 === (7))){
var inst_20558 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20565_20593 = state_20563__$1;
(statearr_20565_20593[(2)] = inst_20558);

(statearr_20565_20593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (1))){
var inst_20540 = null;
var state_20563__$1 = (function (){var statearr_20566 = state_20563;
(statearr_20566[(7)] = inst_20540);

return statearr_20566;
})();
var statearr_20567_20594 = state_20563__$1;
(statearr_20567_20594[(2)] = null);

(statearr_20567_20594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (4))){
var inst_20543 = (state_20563[(8)]);
var inst_20543__$1 = (state_20563[(2)]);
var inst_20544 = (inst_20543__$1 == null);
var inst_20545 = cljs.core.not.call(null,inst_20544);
var state_20563__$1 = (function (){var statearr_20568 = state_20563;
(statearr_20568[(8)] = inst_20543__$1);

return statearr_20568;
})();
if(inst_20545){
var statearr_20569_20595 = state_20563__$1;
(statearr_20569_20595[(1)] = (5));

} else {
var statearr_20570_20596 = state_20563__$1;
(statearr_20570_20596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (6))){
var state_20563__$1 = state_20563;
var statearr_20571_20597 = state_20563__$1;
(statearr_20571_20597[(2)] = null);

(statearr_20571_20597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (3))){
var inst_20560 = (state_20563[(2)]);
var inst_20561 = cljs.core.async.close_BANG_.call(null,out);
var state_20563__$1 = (function (){var statearr_20572 = state_20563;
(statearr_20572[(9)] = inst_20560);

return statearr_20572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20563__$1,inst_20561);
} else {
if((state_val_20564 === (2))){
var state_20563__$1 = state_20563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20563__$1,(4),ch);
} else {
if((state_val_20564 === (11))){
var inst_20543 = (state_20563[(8)]);
var inst_20552 = (state_20563[(2)]);
var inst_20540 = inst_20543;
var state_20563__$1 = (function (){var statearr_20573 = state_20563;
(statearr_20573[(10)] = inst_20552);

(statearr_20573[(7)] = inst_20540);

return statearr_20573;
})();
var statearr_20574_20598 = state_20563__$1;
(statearr_20574_20598[(2)] = null);

(statearr_20574_20598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (9))){
var inst_20543 = (state_20563[(8)]);
var state_20563__$1 = state_20563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20563__$1,(11),out,inst_20543);
} else {
if((state_val_20564 === (5))){
var inst_20543 = (state_20563[(8)]);
var inst_20540 = (state_20563[(7)]);
var inst_20547 = cljs.core._EQ_.call(null,inst_20543,inst_20540);
var state_20563__$1 = state_20563;
if(inst_20547){
var statearr_20576_20599 = state_20563__$1;
(statearr_20576_20599[(1)] = (8));

} else {
var statearr_20577_20600 = state_20563__$1;
(statearr_20577_20600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (10))){
var inst_20555 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20578_20601 = state_20563__$1;
(statearr_20578_20601[(2)] = inst_20555);

(statearr_20578_20601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (8))){
var inst_20540 = (state_20563[(7)]);
var tmp20575 = inst_20540;
var inst_20540__$1 = tmp20575;
var state_20563__$1 = (function (){var statearr_20579 = state_20563;
(statearr_20579[(7)] = inst_20540__$1);

return statearr_20579;
})();
var statearr_20580_20602 = state_20563__$1;
(statearr_20580_20602[(2)] = null);

(statearr_20580_20602[(1)] = (2));


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
});})(c__15789__auto___20592,out))
;
return ((function (switch__15724__auto__,c__15789__auto___20592,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_20584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20584[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_20584[(1)] = (1));

return statearr_20584;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_20563){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_20563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e20585){if((e20585 instanceof Object)){
var ex__15728__auto__ = e20585;
var statearr_20586_20603 = state_20563;
(statearr_20586_20603[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20604 = state_20563;
state_20563 = G__20604;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_20563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_20563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___20592,out))
})();
var state__15791__auto__ = (function (){var statearr_20587 = f__15790__auto__.call(null);
(statearr_20587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___20592);

return statearr_20587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___20592,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20605 = [];
var len__14433__auto___20675 = arguments.length;
var i__14434__auto___20676 = (0);
while(true){
if((i__14434__auto___20676 < len__14433__auto___20675)){
args20605.push((arguments[i__14434__auto___20676]));

var G__20677 = (i__14434__auto___20676 + (1));
i__14434__auto___20676 = G__20677;
continue;
} else {
}
break;
}

var G__20607 = args20605.length;
switch (G__20607) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20605.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___20679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___20679,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___20679,out){
return (function (state_20645){
var state_val_20646 = (state_20645[(1)]);
if((state_val_20646 === (7))){
var inst_20641 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20647_20680 = state_20645__$1;
(statearr_20647_20680[(2)] = inst_20641);

(statearr_20647_20680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (1))){
var inst_20608 = (new Array(n));
var inst_20609 = inst_20608;
var inst_20610 = (0);
var state_20645__$1 = (function (){var statearr_20648 = state_20645;
(statearr_20648[(7)] = inst_20610);

(statearr_20648[(8)] = inst_20609);

return statearr_20648;
})();
var statearr_20649_20681 = state_20645__$1;
(statearr_20649_20681[(2)] = null);

(statearr_20649_20681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (4))){
var inst_20613 = (state_20645[(9)]);
var inst_20613__$1 = (state_20645[(2)]);
var inst_20614 = (inst_20613__$1 == null);
var inst_20615 = cljs.core.not.call(null,inst_20614);
var state_20645__$1 = (function (){var statearr_20650 = state_20645;
(statearr_20650[(9)] = inst_20613__$1);

return statearr_20650;
})();
if(inst_20615){
var statearr_20651_20682 = state_20645__$1;
(statearr_20651_20682[(1)] = (5));

} else {
var statearr_20652_20683 = state_20645__$1;
(statearr_20652_20683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (15))){
var inst_20635 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20653_20684 = state_20645__$1;
(statearr_20653_20684[(2)] = inst_20635);

(statearr_20653_20684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (13))){
var state_20645__$1 = state_20645;
var statearr_20654_20685 = state_20645__$1;
(statearr_20654_20685[(2)] = null);

(statearr_20654_20685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (6))){
var inst_20610 = (state_20645[(7)]);
var inst_20631 = (inst_20610 > (0));
var state_20645__$1 = state_20645;
if(cljs.core.truth_(inst_20631)){
var statearr_20655_20686 = state_20645__$1;
(statearr_20655_20686[(1)] = (12));

} else {
var statearr_20656_20687 = state_20645__$1;
(statearr_20656_20687[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (3))){
var inst_20643 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20645__$1,inst_20643);
} else {
if((state_val_20646 === (12))){
var inst_20609 = (state_20645[(8)]);
var inst_20633 = cljs.core.vec.call(null,inst_20609);
var state_20645__$1 = state_20645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20645__$1,(15),out,inst_20633);
} else {
if((state_val_20646 === (2))){
var state_20645__$1 = state_20645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20645__$1,(4),ch);
} else {
if((state_val_20646 === (11))){
var inst_20625 = (state_20645[(2)]);
var inst_20626 = (new Array(n));
var inst_20609 = inst_20626;
var inst_20610 = (0);
var state_20645__$1 = (function (){var statearr_20657 = state_20645;
(statearr_20657[(7)] = inst_20610);

(statearr_20657[(10)] = inst_20625);

(statearr_20657[(8)] = inst_20609);

return statearr_20657;
})();
var statearr_20658_20688 = state_20645__$1;
(statearr_20658_20688[(2)] = null);

(statearr_20658_20688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (9))){
var inst_20609 = (state_20645[(8)]);
var inst_20623 = cljs.core.vec.call(null,inst_20609);
var state_20645__$1 = state_20645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20645__$1,(11),out,inst_20623);
} else {
if((state_val_20646 === (5))){
var inst_20610 = (state_20645[(7)]);
var inst_20609 = (state_20645[(8)]);
var inst_20613 = (state_20645[(9)]);
var inst_20618 = (state_20645[(11)]);
var inst_20617 = (inst_20609[inst_20610] = inst_20613);
var inst_20618__$1 = (inst_20610 + (1));
var inst_20619 = (inst_20618__$1 < n);
var state_20645__$1 = (function (){var statearr_20659 = state_20645;
(statearr_20659[(12)] = inst_20617);

(statearr_20659[(11)] = inst_20618__$1);

return statearr_20659;
})();
if(cljs.core.truth_(inst_20619)){
var statearr_20660_20689 = state_20645__$1;
(statearr_20660_20689[(1)] = (8));

} else {
var statearr_20661_20690 = state_20645__$1;
(statearr_20661_20690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (14))){
var inst_20638 = (state_20645[(2)]);
var inst_20639 = cljs.core.async.close_BANG_.call(null,out);
var state_20645__$1 = (function (){var statearr_20663 = state_20645;
(statearr_20663[(13)] = inst_20638);

return statearr_20663;
})();
var statearr_20664_20691 = state_20645__$1;
(statearr_20664_20691[(2)] = inst_20639);

(statearr_20664_20691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (10))){
var inst_20629 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20665_20692 = state_20645__$1;
(statearr_20665_20692[(2)] = inst_20629);

(statearr_20665_20692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (8))){
var inst_20609 = (state_20645[(8)]);
var inst_20618 = (state_20645[(11)]);
var tmp20662 = inst_20609;
var inst_20609__$1 = tmp20662;
var inst_20610 = inst_20618;
var state_20645__$1 = (function (){var statearr_20666 = state_20645;
(statearr_20666[(7)] = inst_20610);

(statearr_20666[(8)] = inst_20609__$1);

return statearr_20666;
})();
var statearr_20667_20693 = state_20645__$1;
(statearr_20667_20693[(2)] = null);

(statearr_20667_20693[(1)] = (2));


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
});})(c__15789__auto___20679,out))
;
return ((function (switch__15724__auto__,c__15789__auto___20679,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_20671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20671[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_20671[(1)] = (1));

return statearr_20671;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_20645){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_20645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e20672){if((e20672 instanceof Object)){
var ex__15728__auto__ = e20672;
var statearr_20673_20694 = state_20645;
(statearr_20673_20694[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20695 = state_20645;
state_20645 = G__20695;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_20645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_20645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___20679,out))
})();
var state__15791__auto__ = (function (){var statearr_20674 = f__15790__auto__.call(null);
(statearr_20674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___20679);

return statearr_20674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___20679,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20696 = [];
var len__14433__auto___20770 = arguments.length;
var i__14434__auto___20771 = (0);
while(true){
if((i__14434__auto___20771 < len__14433__auto___20770)){
args20696.push((arguments[i__14434__auto___20771]));

var G__20772 = (i__14434__auto___20771 + (1));
i__14434__auto___20771 = G__20772;
continue;
} else {
}
break;
}

var G__20698 = args20696.length;
switch (G__20698) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20696.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___20774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___20774,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___20774,out){
return (function (state_20740){
var state_val_20741 = (state_20740[(1)]);
if((state_val_20741 === (7))){
var inst_20736 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
var statearr_20742_20775 = state_20740__$1;
(statearr_20742_20775[(2)] = inst_20736);

(statearr_20742_20775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (1))){
var inst_20699 = [];
var inst_20700 = inst_20699;
var inst_20701 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20740__$1 = (function (){var statearr_20743 = state_20740;
(statearr_20743[(7)] = inst_20700);

(statearr_20743[(8)] = inst_20701);

return statearr_20743;
})();
var statearr_20744_20776 = state_20740__$1;
(statearr_20744_20776[(2)] = null);

(statearr_20744_20776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (4))){
var inst_20704 = (state_20740[(9)]);
var inst_20704__$1 = (state_20740[(2)]);
var inst_20705 = (inst_20704__$1 == null);
var inst_20706 = cljs.core.not.call(null,inst_20705);
var state_20740__$1 = (function (){var statearr_20745 = state_20740;
(statearr_20745[(9)] = inst_20704__$1);

return statearr_20745;
})();
if(inst_20706){
var statearr_20746_20777 = state_20740__$1;
(statearr_20746_20777[(1)] = (5));

} else {
var statearr_20747_20778 = state_20740__$1;
(statearr_20747_20778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (15))){
var inst_20730 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
var statearr_20748_20779 = state_20740__$1;
(statearr_20748_20779[(2)] = inst_20730);

(statearr_20748_20779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (13))){
var state_20740__$1 = state_20740;
var statearr_20749_20780 = state_20740__$1;
(statearr_20749_20780[(2)] = null);

(statearr_20749_20780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (6))){
var inst_20700 = (state_20740[(7)]);
var inst_20725 = inst_20700.length;
var inst_20726 = (inst_20725 > (0));
var state_20740__$1 = state_20740;
if(cljs.core.truth_(inst_20726)){
var statearr_20750_20781 = state_20740__$1;
(statearr_20750_20781[(1)] = (12));

} else {
var statearr_20751_20782 = state_20740__$1;
(statearr_20751_20782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (3))){
var inst_20738 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20740__$1,inst_20738);
} else {
if((state_val_20741 === (12))){
var inst_20700 = (state_20740[(7)]);
var inst_20728 = cljs.core.vec.call(null,inst_20700);
var state_20740__$1 = state_20740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20740__$1,(15),out,inst_20728);
} else {
if((state_val_20741 === (2))){
var state_20740__$1 = state_20740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20740__$1,(4),ch);
} else {
if((state_val_20741 === (11))){
var inst_20708 = (state_20740[(10)]);
var inst_20704 = (state_20740[(9)]);
var inst_20718 = (state_20740[(2)]);
var inst_20719 = [];
var inst_20720 = inst_20719.push(inst_20704);
var inst_20700 = inst_20719;
var inst_20701 = inst_20708;
var state_20740__$1 = (function (){var statearr_20752 = state_20740;
(statearr_20752[(7)] = inst_20700);

(statearr_20752[(11)] = inst_20718);

(statearr_20752[(8)] = inst_20701);

(statearr_20752[(12)] = inst_20720);

return statearr_20752;
})();
var statearr_20753_20783 = state_20740__$1;
(statearr_20753_20783[(2)] = null);

(statearr_20753_20783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (9))){
var inst_20700 = (state_20740[(7)]);
var inst_20716 = cljs.core.vec.call(null,inst_20700);
var state_20740__$1 = state_20740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20740__$1,(11),out,inst_20716);
} else {
if((state_val_20741 === (5))){
var inst_20708 = (state_20740[(10)]);
var inst_20704 = (state_20740[(9)]);
var inst_20701 = (state_20740[(8)]);
var inst_20708__$1 = f.call(null,inst_20704);
var inst_20709 = cljs.core._EQ_.call(null,inst_20708__$1,inst_20701);
var inst_20710 = cljs.core.keyword_identical_QMARK_.call(null,inst_20701,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20711 = (inst_20709) || (inst_20710);
var state_20740__$1 = (function (){var statearr_20754 = state_20740;
(statearr_20754[(10)] = inst_20708__$1);

return statearr_20754;
})();
if(cljs.core.truth_(inst_20711)){
var statearr_20755_20784 = state_20740__$1;
(statearr_20755_20784[(1)] = (8));

} else {
var statearr_20756_20785 = state_20740__$1;
(statearr_20756_20785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (14))){
var inst_20733 = (state_20740[(2)]);
var inst_20734 = cljs.core.async.close_BANG_.call(null,out);
var state_20740__$1 = (function (){var statearr_20758 = state_20740;
(statearr_20758[(13)] = inst_20733);

return statearr_20758;
})();
var statearr_20759_20786 = state_20740__$1;
(statearr_20759_20786[(2)] = inst_20734);

(statearr_20759_20786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (10))){
var inst_20723 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
var statearr_20760_20787 = state_20740__$1;
(statearr_20760_20787[(2)] = inst_20723);

(statearr_20760_20787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (8))){
var inst_20708 = (state_20740[(10)]);
var inst_20700 = (state_20740[(7)]);
var inst_20704 = (state_20740[(9)]);
var inst_20713 = inst_20700.push(inst_20704);
var tmp20757 = inst_20700;
var inst_20700__$1 = tmp20757;
var inst_20701 = inst_20708;
var state_20740__$1 = (function (){var statearr_20761 = state_20740;
(statearr_20761[(14)] = inst_20713);

(statearr_20761[(7)] = inst_20700__$1);

(statearr_20761[(8)] = inst_20701);

return statearr_20761;
})();
var statearr_20762_20788 = state_20740__$1;
(statearr_20762_20788[(2)] = null);

(statearr_20762_20788[(1)] = (2));


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
});})(c__15789__auto___20774,out))
;
return ((function (switch__15724__auto__,c__15789__auto___20774,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_20766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20766[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_20766[(1)] = (1));

return statearr_20766;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_20740){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_20740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e20767){if((e20767 instanceof Object)){
var ex__15728__auto__ = e20767;
var statearr_20768_20789 = state_20740;
(statearr_20768_20789[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20790 = state_20740;
state_20740 = G__20790;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_20740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_20740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___20774,out))
})();
var state__15791__auto__ = (function (){var statearr_20769 = f__15790__auto__.call(null);
(statearr_20769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___20774);

return statearr_20769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___20774,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map