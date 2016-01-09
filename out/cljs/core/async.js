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
var args144653 = [];
var len__14433__auto___144659 = arguments.length;
var i__14434__auto___144660 = (0);
while(true){
if((i__14434__auto___144660 < len__14433__auto___144659)){
args144653.push((arguments[i__14434__auto___144660]));

var G__144661 = (i__14434__auto___144660 + (1));
i__14434__auto___144660 = G__144661;
continue;
} else {
}
break;
}

var G__144655 = args144653.length;
switch (G__144655) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args144653.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async144656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async144656 = (function (f,blockable,meta144657){
this.f = f;
this.blockable = blockable;
this.meta144657 = meta144657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async144656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_144658,meta144657__$1){
var self__ = this;
var _144658__$1 = this;
return (new cljs.core.async.t_cljs$core$async144656(self__.f,self__.blockable,meta144657__$1));
});

cljs.core.async.t_cljs$core$async144656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_144658){
var self__ = this;
var _144658__$1 = this;
return self__.meta144657;
});

cljs.core.async.t_cljs$core$async144656.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async144656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async144656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async144656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async144656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta144657","meta144657",-57644204,null)], null);
});

cljs.core.async.t_cljs$core$async144656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async144656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async144656";

cljs.core.async.t_cljs$core$async144656.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async144656");
});

cljs.core.async.__GT_t_cljs$core$async144656 = (function cljs$core$async$__GT_t_cljs$core$async144656(f__$1,blockable__$1,meta144657){
return (new cljs.core.async.t_cljs$core$async144656(f__$1,blockable__$1,meta144657));
});

}

return (new cljs.core.async.t_cljs$core$async144656(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args144665 = [];
var len__14433__auto___144668 = arguments.length;
var i__14434__auto___144669 = (0);
while(true){
if((i__14434__auto___144669 < len__14433__auto___144668)){
args144665.push((arguments[i__14434__auto___144669]));

var G__144670 = (i__14434__auto___144669 + (1));
i__14434__auto___144669 = G__144670;
continue;
} else {
}
break;
}

var G__144667 = args144665.length;
switch (G__144667) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args144665.length)].join('')));

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
var args144672 = [];
var len__14433__auto___144675 = arguments.length;
var i__14434__auto___144676 = (0);
while(true){
if((i__14434__auto___144676 < len__14433__auto___144675)){
args144672.push((arguments[i__14434__auto___144676]));

var G__144677 = (i__14434__auto___144676 + (1));
i__14434__auto___144676 = G__144677;
continue;
} else {
}
break;
}

var G__144674 = args144672.length;
switch (G__144674) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args144672.length)].join('')));

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
var args144679 = [];
var len__14433__auto___144682 = arguments.length;
var i__14434__auto___144683 = (0);
while(true){
if((i__14434__auto___144683 < len__14433__auto___144682)){
args144679.push((arguments[i__14434__auto___144683]));

var G__144684 = (i__14434__auto___144683 + (1));
i__14434__auto___144683 = G__144684;
continue;
} else {
}
break;
}

var G__144681 = args144679.length;
switch (G__144681) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args144679.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_144686 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_144686);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_144686,ret){
return (function (){
return fn1.call(null,val_144686);
});})(val_144686,ret))
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
var args144687 = [];
var len__14433__auto___144690 = arguments.length;
var i__14434__auto___144691 = (0);
while(true){
if((i__14434__auto___144691 < len__14433__auto___144690)){
args144687.push((arguments[i__14434__auto___144691]));

var G__144692 = (i__14434__auto___144691 + (1));
i__14434__auto___144691 = G__144692;
continue;
} else {
}
break;
}

var G__144689 = args144687.length;
switch (G__144689) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args144687.length)].join('')));

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
var n__14278__auto___144694 = n;
var x_144695 = (0);
while(true){
if((x_144695 < n__14278__auto___144694)){
(a[x_144695] = (0));

var G__144696 = (x_144695 + (1));
x_144695 = G__144696;
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

var G__144697 = (i + (1));
i = G__144697;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async144701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async144701 = (function (alt_flag,flag,meta144702){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta144702 = meta144702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async144701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_144703,meta144702__$1){
var self__ = this;
var _144703__$1 = this;
return (new cljs.core.async.t_cljs$core$async144701(self__.alt_flag,self__.flag,meta144702__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async144701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_144703){
var self__ = this;
var _144703__$1 = this;
return self__.meta144702;
});})(flag))
;

cljs.core.async.t_cljs$core$async144701.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async144701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async144701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async144701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async144701.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta144702","meta144702",-2125648688,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async144701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async144701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async144701";

cljs.core.async.t_cljs$core$async144701.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async144701");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async144701 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async144701(alt_flag__$1,flag__$1,meta144702){
return (new cljs.core.async.t_cljs$core$async144701(alt_flag__$1,flag__$1,meta144702));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async144701(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async144707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async144707 = (function (alt_handler,flag,cb,meta144708){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta144708 = meta144708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async144707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_144709,meta144708__$1){
var self__ = this;
var _144709__$1 = this;
return (new cljs.core.async.t_cljs$core$async144707(self__.alt_handler,self__.flag,self__.cb,meta144708__$1));
});

cljs.core.async.t_cljs$core$async144707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_144709){
var self__ = this;
var _144709__$1 = this;
return self__.meta144708;
});

cljs.core.async.t_cljs$core$async144707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async144707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async144707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async144707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async144707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta144708","meta144708",-1876378300,null)], null);
});

cljs.core.async.t_cljs$core$async144707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async144707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async144707";

cljs.core.async.t_cljs$core$async144707.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async144707");
});

cljs.core.async.__GT_t_cljs$core$async144707 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async144707(alt_handler__$1,flag__$1,cb__$1,meta144708){
return (new cljs.core.async.t_cljs$core$async144707(alt_handler__$1,flag__$1,cb__$1,meta144708));
});

}

return (new cljs.core.async.t_cljs$core$async144707(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__144710_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__144710_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__144711_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__144711_SHARP_,port], null));
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
var G__144712 = (i + (1));
i = G__144712;
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
var len__14433__auto___144718 = arguments.length;
var i__14434__auto___144719 = (0);
while(true){
if((i__14434__auto___144719 < len__14433__auto___144718)){
args__14440__auto__.push((arguments[i__14434__auto___144719]));

var G__144720 = (i__14434__auto___144719 + (1));
i__14434__auto___144719 = G__144720;
continue;
} else {
}
break;
}

var argseq__14441__auto__ = ((((1) < args__14440__auto__.length))?(new cljs.core.IndexedSeq(args__14440__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14441__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__144715){
var map__144716 = p__144715;
var map__144716__$1 = ((((!((map__144716 == null)))?((((map__144716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144716):map__144716);
var opts = map__144716__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq144713){
var G__144714 = cljs.core.first.call(null,seq144713);
var seq144713__$1 = cljs.core.next.call(null,seq144713);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__144714,seq144713__$1);
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
var args144721 = [];
var len__14433__auto___144771 = arguments.length;
var i__14434__auto___144772 = (0);
while(true){
if((i__14434__auto___144772 < len__14433__auto___144771)){
args144721.push((arguments[i__14434__auto___144772]));

var G__144773 = (i__14434__auto___144772 + (1));
i__14434__auto___144772 = G__144773;
continue;
} else {
}
break;
}

var G__144723 = args144721.length;
switch (G__144723) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args144721.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15789__auto___144775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___144775){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___144775){
return (function (state_144747){
var state_val_144748 = (state_144747[(1)]);
if((state_val_144748 === (7))){
var inst_144743 = (state_144747[(2)]);
var state_144747__$1 = state_144747;
var statearr_144749_144776 = state_144747__$1;
(statearr_144749_144776[(2)] = inst_144743);

(statearr_144749_144776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144748 === (1))){
var state_144747__$1 = state_144747;
var statearr_144750_144777 = state_144747__$1;
(statearr_144750_144777[(2)] = null);

(statearr_144750_144777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144748 === (4))){
var inst_144726 = (state_144747[(7)]);
var inst_144726__$1 = (state_144747[(2)]);
var inst_144727 = (inst_144726__$1 == null);
var state_144747__$1 = (function (){var statearr_144751 = state_144747;
(statearr_144751[(7)] = inst_144726__$1);

return statearr_144751;
})();
if(cljs.core.truth_(inst_144727)){
var statearr_144752_144778 = state_144747__$1;
(statearr_144752_144778[(1)] = (5));

} else {
var statearr_144753_144779 = state_144747__$1;
(statearr_144753_144779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144748 === (13))){
var state_144747__$1 = state_144747;
var statearr_144754_144780 = state_144747__$1;
(statearr_144754_144780[(2)] = null);

(statearr_144754_144780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144748 === (6))){
var inst_144726 = (state_144747[(7)]);
var state_144747__$1 = state_144747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144747__$1,(11),to,inst_144726);
} else {
if((state_val_144748 === (3))){
var inst_144745 = (state_144747[(2)]);
var state_144747__$1 = state_144747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144747__$1,inst_144745);
} else {
if((state_val_144748 === (12))){
var state_144747__$1 = state_144747;
var statearr_144755_144781 = state_144747__$1;
(statearr_144755_144781[(2)] = null);

(statearr_144755_144781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144748 === (2))){
var state_144747__$1 = state_144747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144747__$1,(4),from);
} else {
if((state_val_144748 === (11))){
var inst_144736 = (state_144747[(2)]);
var state_144747__$1 = state_144747;
if(cljs.core.truth_(inst_144736)){
var statearr_144756_144782 = state_144747__$1;
(statearr_144756_144782[(1)] = (12));

} else {
var statearr_144757_144783 = state_144747__$1;
(statearr_144757_144783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144748 === (9))){
var state_144747__$1 = state_144747;
var statearr_144758_144784 = state_144747__$1;
(statearr_144758_144784[(2)] = null);

(statearr_144758_144784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144748 === (5))){
var state_144747__$1 = state_144747;
if(cljs.core.truth_(close_QMARK_)){
var statearr_144759_144785 = state_144747__$1;
(statearr_144759_144785[(1)] = (8));

} else {
var statearr_144760_144786 = state_144747__$1;
(statearr_144760_144786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144748 === (14))){
var inst_144741 = (state_144747[(2)]);
var state_144747__$1 = state_144747;
var statearr_144761_144787 = state_144747__$1;
(statearr_144761_144787[(2)] = inst_144741);

(statearr_144761_144787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144748 === (10))){
var inst_144733 = (state_144747[(2)]);
var state_144747__$1 = state_144747;
var statearr_144762_144788 = state_144747__$1;
(statearr_144762_144788[(2)] = inst_144733);

(statearr_144762_144788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144748 === (8))){
var inst_144730 = cljs.core.async.close_BANG_.call(null,to);
var state_144747__$1 = state_144747;
var statearr_144763_144789 = state_144747__$1;
(statearr_144763_144789[(2)] = inst_144730);

(statearr_144763_144789[(1)] = (10));


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
});})(c__15789__auto___144775))
;
return ((function (switch__15724__auto__,c__15789__auto___144775){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_144767 = [null,null,null,null,null,null,null,null];
(statearr_144767[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_144767[(1)] = (1));

return statearr_144767;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_144747){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_144747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e144768){if((e144768 instanceof Object)){
var ex__15728__auto__ = e144768;
var statearr_144769_144790 = state_144747;
(statearr_144769_144790[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e144768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__144791 = state_144747;
state_144747 = G__144791;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_144747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_144747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___144775))
})();
var state__15791__auto__ = (function (){var statearr_144770 = f__15790__auto__.call(null);
(statearr_144770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___144775);

return statearr_144770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___144775))
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
return (function (p__144975){
var vec__144976 = p__144975;
var v = cljs.core.nth.call(null,vec__144976,(0),null);
var p = cljs.core.nth.call(null,vec__144976,(1),null);
var job = vec__144976;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15789__auto___145158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___145158,res,vec__144976,v,p,job,jobs,results){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___145158,res,vec__144976,v,p,job,jobs,results){
return (function (state_144981){
var state_val_144982 = (state_144981[(1)]);
if((state_val_144982 === (1))){
var state_144981__$1 = state_144981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144981__$1,(2),res,v);
} else {
if((state_val_144982 === (2))){
var inst_144978 = (state_144981[(2)]);
var inst_144979 = cljs.core.async.close_BANG_.call(null,res);
var state_144981__$1 = (function (){var statearr_144983 = state_144981;
(statearr_144983[(7)] = inst_144978);

return statearr_144983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144981__$1,inst_144979);
} else {
return null;
}
}
});})(c__15789__auto___145158,res,vec__144976,v,p,job,jobs,results))
;
return ((function (switch__15724__auto__,c__15789__auto___145158,res,vec__144976,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_144987 = [null,null,null,null,null,null,null,null];
(statearr_144987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_144987[(1)] = (1));

return statearr_144987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_144981){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_144981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e144988){if((e144988 instanceof Object)){
var ex__15728__auto__ = e144988;
var statearr_144989_145159 = state_144981;
(statearr_144989_145159[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e144988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145160 = state_144981;
state_144981 = G__145160;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_144981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_144981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___145158,res,vec__144976,v,p,job,jobs,results))
})();
var state__15791__auto__ = (function (){var statearr_144990 = f__15790__auto__.call(null);
(statearr_144990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___145158);

return statearr_144990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___145158,res,vec__144976,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__144991){
var vec__144992 = p__144991;
var v = cljs.core.nth.call(null,vec__144992,(0),null);
var p = cljs.core.nth.call(null,vec__144992,(1),null);
var job = vec__144992;
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
var n__14278__auto___145161 = n;
var __145162 = (0);
while(true){
if((__145162 < n__14278__auto___145161)){
var G__144993_145163 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__144993_145163) {
case "compute":
var c__15789__auto___145165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__145162,c__15789__auto___145165,G__144993_145163,n__14278__auto___145161,jobs,results,process,async){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (__145162,c__15789__auto___145165,G__144993_145163,n__14278__auto___145161,jobs,results,process,async){
return (function (state_145006){
var state_val_145007 = (state_145006[(1)]);
if((state_val_145007 === (1))){
var state_145006__$1 = state_145006;
var statearr_145008_145166 = state_145006__$1;
(statearr_145008_145166[(2)] = null);

(statearr_145008_145166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145007 === (2))){
var state_145006__$1 = state_145006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145006__$1,(4),jobs);
} else {
if((state_val_145007 === (3))){
var inst_145004 = (state_145006[(2)]);
var state_145006__$1 = state_145006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145006__$1,inst_145004);
} else {
if((state_val_145007 === (4))){
var inst_144996 = (state_145006[(2)]);
var inst_144997 = process.call(null,inst_144996);
var state_145006__$1 = state_145006;
if(cljs.core.truth_(inst_144997)){
var statearr_145009_145167 = state_145006__$1;
(statearr_145009_145167[(1)] = (5));

} else {
var statearr_145010_145168 = state_145006__$1;
(statearr_145010_145168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145007 === (5))){
var state_145006__$1 = state_145006;
var statearr_145011_145169 = state_145006__$1;
(statearr_145011_145169[(2)] = null);

(statearr_145011_145169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145007 === (6))){
var state_145006__$1 = state_145006;
var statearr_145012_145170 = state_145006__$1;
(statearr_145012_145170[(2)] = null);

(statearr_145012_145170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145007 === (7))){
var inst_145002 = (state_145006[(2)]);
var state_145006__$1 = state_145006;
var statearr_145013_145171 = state_145006__$1;
(statearr_145013_145171[(2)] = inst_145002);

(statearr_145013_145171[(1)] = (3));


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
});})(__145162,c__15789__auto___145165,G__144993_145163,n__14278__auto___145161,jobs,results,process,async))
;
return ((function (__145162,switch__15724__auto__,c__15789__auto___145165,G__144993_145163,n__14278__auto___145161,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_145017 = [null,null,null,null,null,null,null];
(statearr_145017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_145017[(1)] = (1));

return statearr_145017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_145006){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_145006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e145018){if((e145018 instanceof Object)){
var ex__15728__auto__ = e145018;
var statearr_145019_145172 = state_145006;
(statearr_145019_145172[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e145018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145173 = state_145006;
state_145006 = G__145173;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_145006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_145006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(__145162,switch__15724__auto__,c__15789__auto___145165,G__144993_145163,n__14278__auto___145161,jobs,results,process,async))
})();
var state__15791__auto__ = (function (){var statearr_145020 = f__15790__auto__.call(null);
(statearr_145020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___145165);

return statearr_145020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(__145162,c__15789__auto___145165,G__144993_145163,n__14278__auto___145161,jobs,results,process,async))
);


break;
case "async":
var c__15789__auto___145174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__145162,c__15789__auto___145174,G__144993_145163,n__14278__auto___145161,jobs,results,process,async){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (__145162,c__15789__auto___145174,G__144993_145163,n__14278__auto___145161,jobs,results,process,async){
return (function (state_145033){
var state_val_145034 = (state_145033[(1)]);
if((state_val_145034 === (1))){
var state_145033__$1 = state_145033;
var statearr_145035_145175 = state_145033__$1;
(statearr_145035_145175[(2)] = null);

(statearr_145035_145175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145034 === (2))){
var state_145033__$1 = state_145033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145033__$1,(4),jobs);
} else {
if((state_val_145034 === (3))){
var inst_145031 = (state_145033[(2)]);
var state_145033__$1 = state_145033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145033__$1,inst_145031);
} else {
if((state_val_145034 === (4))){
var inst_145023 = (state_145033[(2)]);
var inst_145024 = async.call(null,inst_145023);
var state_145033__$1 = state_145033;
if(cljs.core.truth_(inst_145024)){
var statearr_145036_145176 = state_145033__$1;
(statearr_145036_145176[(1)] = (5));

} else {
var statearr_145037_145177 = state_145033__$1;
(statearr_145037_145177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145034 === (5))){
var state_145033__$1 = state_145033;
var statearr_145038_145178 = state_145033__$1;
(statearr_145038_145178[(2)] = null);

(statearr_145038_145178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145034 === (6))){
var state_145033__$1 = state_145033;
var statearr_145039_145179 = state_145033__$1;
(statearr_145039_145179[(2)] = null);

(statearr_145039_145179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145034 === (7))){
var inst_145029 = (state_145033[(2)]);
var state_145033__$1 = state_145033;
var statearr_145040_145180 = state_145033__$1;
(statearr_145040_145180[(2)] = inst_145029);

(statearr_145040_145180[(1)] = (3));


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
});})(__145162,c__15789__auto___145174,G__144993_145163,n__14278__auto___145161,jobs,results,process,async))
;
return ((function (__145162,switch__15724__auto__,c__15789__auto___145174,G__144993_145163,n__14278__auto___145161,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_145044 = [null,null,null,null,null,null,null];
(statearr_145044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_145044[(1)] = (1));

return statearr_145044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_145033){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_145033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e145045){if((e145045 instanceof Object)){
var ex__15728__auto__ = e145045;
var statearr_145046_145181 = state_145033;
(statearr_145046_145181[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e145045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145182 = state_145033;
state_145033 = G__145182;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_145033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_145033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(__145162,switch__15724__auto__,c__15789__auto___145174,G__144993_145163,n__14278__auto___145161,jobs,results,process,async))
})();
var state__15791__auto__ = (function (){var statearr_145047 = f__15790__auto__.call(null);
(statearr_145047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___145174);

return statearr_145047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(__145162,c__15789__auto___145174,G__144993_145163,n__14278__auto___145161,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__145183 = (__145162 + (1));
__145162 = G__145183;
continue;
} else {
}
break;
}

var c__15789__auto___145184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___145184,jobs,results,process,async){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___145184,jobs,results,process,async){
return (function (state_145069){
var state_val_145070 = (state_145069[(1)]);
if((state_val_145070 === (1))){
var state_145069__$1 = state_145069;
var statearr_145071_145185 = state_145069__$1;
(statearr_145071_145185[(2)] = null);

(statearr_145071_145185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145070 === (2))){
var state_145069__$1 = state_145069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145069__$1,(4),from);
} else {
if((state_val_145070 === (3))){
var inst_145067 = (state_145069[(2)]);
var state_145069__$1 = state_145069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145069__$1,inst_145067);
} else {
if((state_val_145070 === (4))){
var inst_145050 = (state_145069[(7)]);
var inst_145050__$1 = (state_145069[(2)]);
var inst_145051 = (inst_145050__$1 == null);
var state_145069__$1 = (function (){var statearr_145072 = state_145069;
(statearr_145072[(7)] = inst_145050__$1);

return statearr_145072;
})();
if(cljs.core.truth_(inst_145051)){
var statearr_145073_145186 = state_145069__$1;
(statearr_145073_145186[(1)] = (5));

} else {
var statearr_145074_145187 = state_145069__$1;
(statearr_145074_145187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145070 === (5))){
var inst_145053 = cljs.core.async.close_BANG_.call(null,jobs);
var state_145069__$1 = state_145069;
var statearr_145075_145188 = state_145069__$1;
(statearr_145075_145188[(2)] = inst_145053);

(statearr_145075_145188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145070 === (6))){
var inst_145055 = (state_145069[(8)]);
var inst_145050 = (state_145069[(7)]);
var inst_145055__$1 = cljs.core.async.chan.call(null,(1));
var inst_145056 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_145057 = [inst_145050,inst_145055__$1];
var inst_145058 = (new cljs.core.PersistentVector(null,2,(5),inst_145056,inst_145057,null));
var state_145069__$1 = (function (){var statearr_145076 = state_145069;
(statearr_145076[(8)] = inst_145055__$1);

return statearr_145076;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145069__$1,(8),jobs,inst_145058);
} else {
if((state_val_145070 === (7))){
var inst_145065 = (state_145069[(2)]);
var state_145069__$1 = state_145069;
var statearr_145077_145189 = state_145069__$1;
(statearr_145077_145189[(2)] = inst_145065);

(statearr_145077_145189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145070 === (8))){
var inst_145055 = (state_145069[(8)]);
var inst_145060 = (state_145069[(2)]);
var state_145069__$1 = (function (){var statearr_145078 = state_145069;
(statearr_145078[(9)] = inst_145060);

return statearr_145078;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145069__$1,(9),results,inst_145055);
} else {
if((state_val_145070 === (9))){
var inst_145062 = (state_145069[(2)]);
var state_145069__$1 = (function (){var statearr_145079 = state_145069;
(statearr_145079[(10)] = inst_145062);

return statearr_145079;
})();
var statearr_145080_145190 = state_145069__$1;
(statearr_145080_145190[(2)] = null);

(statearr_145080_145190[(1)] = (2));


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
});})(c__15789__auto___145184,jobs,results,process,async))
;
return ((function (switch__15724__auto__,c__15789__auto___145184,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_145084 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_145084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_145084[(1)] = (1));

return statearr_145084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_145069){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_145069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e145085){if((e145085 instanceof Object)){
var ex__15728__auto__ = e145085;
var statearr_145086_145191 = state_145069;
(statearr_145086_145191[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e145085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145192 = state_145069;
state_145069 = G__145192;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_145069){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_145069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___145184,jobs,results,process,async))
})();
var state__15791__auto__ = (function (){var statearr_145087 = f__15790__auto__.call(null);
(statearr_145087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___145184);

return statearr_145087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___145184,jobs,results,process,async))
);


var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,jobs,results,process,async){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,jobs,results,process,async){
return (function (state_145125){
var state_val_145126 = (state_145125[(1)]);
if((state_val_145126 === (7))){
var inst_145121 = (state_145125[(2)]);
var state_145125__$1 = state_145125;
var statearr_145127_145193 = state_145125__$1;
(statearr_145127_145193[(2)] = inst_145121);

(statearr_145127_145193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (20))){
var state_145125__$1 = state_145125;
var statearr_145128_145194 = state_145125__$1;
(statearr_145128_145194[(2)] = null);

(statearr_145128_145194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (1))){
var state_145125__$1 = state_145125;
var statearr_145129_145195 = state_145125__$1;
(statearr_145129_145195[(2)] = null);

(statearr_145129_145195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (4))){
var inst_145090 = (state_145125[(7)]);
var inst_145090__$1 = (state_145125[(2)]);
var inst_145091 = (inst_145090__$1 == null);
var state_145125__$1 = (function (){var statearr_145130 = state_145125;
(statearr_145130[(7)] = inst_145090__$1);

return statearr_145130;
})();
if(cljs.core.truth_(inst_145091)){
var statearr_145131_145196 = state_145125__$1;
(statearr_145131_145196[(1)] = (5));

} else {
var statearr_145132_145197 = state_145125__$1;
(statearr_145132_145197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (15))){
var inst_145103 = (state_145125[(8)]);
var state_145125__$1 = state_145125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145125__$1,(18),to,inst_145103);
} else {
if((state_val_145126 === (21))){
var inst_145116 = (state_145125[(2)]);
var state_145125__$1 = state_145125;
var statearr_145133_145198 = state_145125__$1;
(statearr_145133_145198[(2)] = inst_145116);

(statearr_145133_145198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (13))){
var inst_145118 = (state_145125[(2)]);
var state_145125__$1 = (function (){var statearr_145134 = state_145125;
(statearr_145134[(9)] = inst_145118);

return statearr_145134;
})();
var statearr_145135_145199 = state_145125__$1;
(statearr_145135_145199[(2)] = null);

(statearr_145135_145199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (6))){
var inst_145090 = (state_145125[(7)]);
var state_145125__$1 = state_145125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145125__$1,(11),inst_145090);
} else {
if((state_val_145126 === (17))){
var inst_145111 = (state_145125[(2)]);
var state_145125__$1 = state_145125;
if(cljs.core.truth_(inst_145111)){
var statearr_145136_145200 = state_145125__$1;
(statearr_145136_145200[(1)] = (19));

} else {
var statearr_145137_145201 = state_145125__$1;
(statearr_145137_145201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (3))){
var inst_145123 = (state_145125[(2)]);
var state_145125__$1 = state_145125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145125__$1,inst_145123);
} else {
if((state_val_145126 === (12))){
var inst_145100 = (state_145125[(10)]);
var state_145125__$1 = state_145125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145125__$1,(14),inst_145100);
} else {
if((state_val_145126 === (2))){
var state_145125__$1 = state_145125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145125__$1,(4),results);
} else {
if((state_val_145126 === (19))){
var state_145125__$1 = state_145125;
var statearr_145138_145202 = state_145125__$1;
(statearr_145138_145202[(2)] = null);

(statearr_145138_145202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (11))){
var inst_145100 = (state_145125[(2)]);
var state_145125__$1 = (function (){var statearr_145139 = state_145125;
(statearr_145139[(10)] = inst_145100);

return statearr_145139;
})();
var statearr_145140_145203 = state_145125__$1;
(statearr_145140_145203[(2)] = null);

(statearr_145140_145203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (9))){
var state_145125__$1 = state_145125;
var statearr_145141_145204 = state_145125__$1;
(statearr_145141_145204[(2)] = null);

(statearr_145141_145204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (5))){
var state_145125__$1 = state_145125;
if(cljs.core.truth_(close_QMARK_)){
var statearr_145142_145205 = state_145125__$1;
(statearr_145142_145205[(1)] = (8));

} else {
var statearr_145143_145206 = state_145125__$1;
(statearr_145143_145206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (14))){
var inst_145103 = (state_145125[(8)]);
var inst_145105 = (state_145125[(11)]);
var inst_145103__$1 = (state_145125[(2)]);
var inst_145104 = (inst_145103__$1 == null);
var inst_145105__$1 = cljs.core.not.call(null,inst_145104);
var state_145125__$1 = (function (){var statearr_145144 = state_145125;
(statearr_145144[(8)] = inst_145103__$1);

(statearr_145144[(11)] = inst_145105__$1);

return statearr_145144;
})();
if(inst_145105__$1){
var statearr_145145_145207 = state_145125__$1;
(statearr_145145_145207[(1)] = (15));

} else {
var statearr_145146_145208 = state_145125__$1;
(statearr_145146_145208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (16))){
var inst_145105 = (state_145125[(11)]);
var state_145125__$1 = state_145125;
var statearr_145147_145209 = state_145125__$1;
(statearr_145147_145209[(2)] = inst_145105);

(statearr_145147_145209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (10))){
var inst_145097 = (state_145125[(2)]);
var state_145125__$1 = state_145125;
var statearr_145148_145210 = state_145125__$1;
(statearr_145148_145210[(2)] = inst_145097);

(statearr_145148_145210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (18))){
var inst_145108 = (state_145125[(2)]);
var state_145125__$1 = state_145125;
var statearr_145149_145211 = state_145125__$1;
(statearr_145149_145211[(2)] = inst_145108);

(statearr_145149_145211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145126 === (8))){
var inst_145094 = cljs.core.async.close_BANG_.call(null,to);
var state_145125__$1 = state_145125;
var statearr_145150_145212 = state_145125__$1;
(statearr_145150_145212[(2)] = inst_145094);

(statearr_145150_145212[(1)] = (10));


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
var statearr_145154 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_145154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_145154[(1)] = (1));

return statearr_145154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_145125){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_145125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e145155){if((e145155 instanceof Object)){
var ex__15728__auto__ = e145155;
var statearr_145156_145213 = state_145125;
(statearr_145156_145213[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e145155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145214 = state_145125;
state_145125 = G__145214;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_145125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_145125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,jobs,results,process,async))
})();
var state__15791__auto__ = (function (){var statearr_145157 = f__15790__auto__.call(null);
(statearr_145157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_145157;
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
var args145215 = [];
var len__14433__auto___145218 = arguments.length;
var i__14434__auto___145219 = (0);
while(true){
if((i__14434__auto___145219 < len__14433__auto___145218)){
args145215.push((arguments[i__14434__auto___145219]));

var G__145220 = (i__14434__auto___145219 + (1));
i__14434__auto___145219 = G__145220;
continue;
} else {
}
break;
}

var G__145217 = args145215.length;
switch (G__145217) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args145215.length)].join('')));

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
var args145222 = [];
var len__14433__auto___145225 = arguments.length;
var i__14434__auto___145226 = (0);
while(true){
if((i__14434__auto___145226 < len__14433__auto___145225)){
args145222.push((arguments[i__14434__auto___145226]));

var G__145227 = (i__14434__auto___145226 + (1));
i__14434__auto___145226 = G__145227;
continue;
} else {
}
break;
}

var G__145224 = args145222.length;
switch (G__145224) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args145222.length)].join('')));

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
var args145229 = [];
var len__14433__auto___145282 = arguments.length;
var i__14434__auto___145283 = (0);
while(true){
if((i__14434__auto___145283 < len__14433__auto___145282)){
args145229.push((arguments[i__14434__auto___145283]));

var G__145284 = (i__14434__auto___145283 + (1));
i__14434__auto___145283 = G__145284;
continue;
} else {
}
break;
}

var G__145231 = args145229.length;
switch (G__145231) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args145229.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15789__auto___145286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___145286,tc,fc){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___145286,tc,fc){
return (function (state_145257){
var state_val_145258 = (state_145257[(1)]);
if((state_val_145258 === (7))){
var inst_145253 = (state_145257[(2)]);
var state_145257__$1 = state_145257;
var statearr_145259_145287 = state_145257__$1;
(statearr_145259_145287[(2)] = inst_145253);

(statearr_145259_145287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145258 === (1))){
var state_145257__$1 = state_145257;
var statearr_145260_145288 = state_145257__$1;
(statearr_145260_145288[(2)] = null);

(statearr_145260_145288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145258 === (4))){
var inst_145234 = (state_145257[(7)]);
var inst_145234__$1 = (state_145257[(2)]);
var inst_145235 = (inst_145234__$1 == null);
var state_145257__$1 = (function (){var statearr_145261 = state_145257;
(statearr_145261[(7)] = inst_145234__$1);

return statearr_145261;
})();
if(cljs.core.truth_(inst_145235)){
var statearr_145262_145289 = state_145257__$1;
(statearr_145262_145289[(1)] = (5));

} else {
var statearr_145263_145290 = state_145257__$1;
(statearr_145263_145290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145258 === (13))){
var state_145257__$1 = state_145257;
var statearr_145264_145291 = state_145257__$1;
(statearr_145264_145291[(2)] = null);

(statearr_145264_145291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145258 === (6))){
var inst_145234 = (state_145257[(7)]);
var inst_145240 = p.call(null,inst_145234);
var state_145257__$1 = state_145257;
if(cljs.core.truth_(inst_145240)){
var statearr_145265_145292 = state_145257__$1;
(statearr_145265_145292[(1)] = (9));

} else {
var statearr_145266_145293 = state_145257__$1;
(statearr_145266_145293[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145258 === (3))){
var inst_145255 = (state_145257[(2)]);
var state_145257__$1 = state_145257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145257__$1,inst_145255);
} else {
if((state_val_145258 === (12))){
var state_145257__$1 = state_145257;
var statearr_145267_145294 = state_145257__$1;
(statearr_145267_145294[(2)] = null);

(statearr_145267_145294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145258 === (2))){
var state_145257__$1 = state_145257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145257__$1,(4),ch);
} else {
if((state_val_145258 === (11))){
var inst_145234 = (state_145257[(7)]);
var inst_145244 = (state_145257[(2)]);
var state_145257__$1 = state_145257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145257__$1,(8),inst_145244,inst_145234);
} else {
if((state_val_145258 === (9))){
var state_145257__$1 = state_145257;
var statearr_145268_145295 = state_145257__$1;
(statearr_145268_145295[(2)] = tc);

(statearr_145268_145295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145258 === (5))){
var inst_145237 = cljs.core.async.close_BANG_.call(null,tc);
var inst_145238 = cljs.core.async.close_BANG_.call(null,fc);
var state_145257__$1 = (function (){var statearr_145269 = state_145257;
(statearr_145269[(8)] = inst_145237);

return statearr_145269;
})();
var statearr_145270_145296 = state_145257__$1;
(statearr_145270_145296[(2)] = inst_145238);

(statearr_145270_145296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145258 === (14))){
var inst_145251 = (state_145257[(2)]);
var state_145257__$1 = state_145257;
var statearr_145271_145297 = state_145257__$1;
(statearr_145271_145297[(2)] = inst_145251);

(statearr_145271_145297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145258 === (10))){
var state_145257__$1 = state_145257;
var statearr_145272_145298 = state_145257__$1;
(statearr_145272_145298[(2)] = fc);

(statearr_145272_145298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145258 === (8))){
var inst_145246 = (state_145257[(2)]);
var state_145257__$1 = state_145257;
if(cljs.core.truth_(inst_145246)){
var statearr_145273_145299 = state_145257__$1;
(statearr_145273_145299[(1)] = (12));

} else {
var statearr_145274_145300 = state_145257__$1;
(statearr_145274_145300[(1)] = (13));

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
});})(c__15789__auto___145286,tc,fc))
;
return ((function (switch__15724__auto__,c__15789__auto___145286,tc,fc){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_145278 = [null,null,null,null,null,null,null,null,null];
(statearr_145278[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_145278[(1)] = (1));

return statearr_145278;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_145257){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_145257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e145279){if((e145279 instanceof Object)){
var ex__15728__auto__ = e145279;
var statearr_145280_145301 = state_145257;
(statearr_145280_145301[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e145279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145302 = state_145257;
state_145257 = G__145302;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_145257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_145257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___145286,tc,fc))
})();
var state__15791__auto__ = (function (){var statearr_145281 = f__15790__auto__.call(null);
(statearr_145281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___145286);

return statearr_145281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___145286,tc,fc))
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
return (function (state_145366){
var state_val_145367 = (state_145366[(1)]);
if((state_val_145367 === (7))){
var inst_145362 = (state_145366[(2)]);
var state_145366__$1 = state_145366;
var statearr_145368_145389 = state_145366__$1;
(statearr_145368_145389[(2)] = inst_145362);

(statearr_145368_145389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145367 === (1))){
var inst_145346 = init;
var state_145366__$1 = (function (){var statearr_145369 = state_145366;
(statearr_145369[(7)] = inst_145346);

return statearr_145369;
})();
var statearr_145370_145390 = state_145366__$1;
(statearr_145370_145390[(2)] = null);

(statearr_145370_145390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145367 === (4))){
var inst_145349 = (state_145366[(8)]);
var inst_145349__$1 = (state_145366[(2)]);
var inst_145350 = (inst_145349__$1 == null);
var state_145366__$1 = (function (){var statearr_145371 = state_145366;
(statearr_145371[(8)] = inst_145349__$1);

return statearr_145371;
})();
if(cljs.core.truth_(inst_145350)){
var statearr_145372_145391 = state_145366__$1;
(statearr_145372_145391[(1)] = (5));

} else {
var statearr_145373_145392 = state_145366__$1;
(statearr_145373_145392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145367 === (6))){
var inst_145346 = (state_145366[(7)]);
var inst_145349 = (state_145366[(8)]);
var inst_145353 = (state_145366[(9)]);
var inst_145353__$1 = f.call(null,inst_145346,inst_145349);
var inst_145354 = cljs.core.reduced_QMARK_.call(null,inst_145353__$1);
var state_145366__$1 = (function (){var statearr_145374 = state_145366;
(statearr_145374[(9)] = inst_145353__$1);

return statearr_145374;
})();
if(inst_145354){
var statearr_145375_145393 = state_145366__$1;
(statearr_145375_145393[(1)] = (8));

} else {
var statearr_145376_145394 = state_145366__$1;
(statearr_145376_145394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145367 === (3))){
var inst_145364 = (state_145366[(2)]);
var state_145366__$1 = state_145366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145366__$1,inst_145364);
} else {
if((state_val_145367 === (2))){
var state_145366__$1 = state_145366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145366__$1,(4),ch);
} else {
if((state_val_145367 === (9))){
var inst_145353 = (state_145366[(9)]);
var inst_145346 = inst_145353;
var state_145366__$1 = (function (){var statearr_145377 = state_145366;
(statearr_145377[(7)] = inst_145346);

return statearr_145377;
})();
var statearr_145378_145395 = state_145366__$1;
(statearr_145378_145395[(2)] = null);

(statearr_145378_145395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145367 === (5))){
var inst_145346 = (state_145366[(7)]);
var state_145366__$1 = state_145366;
var statearr_145379_145396 = state_145366__$1;
(statearr_145379_145396[(2)] = inst_145346);

(statearr_145379_145396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145367 === (10))){
var inst_145360 = (state_145366[(2)]);
var state_145366__$1 = state_145366;
var statearr_145380_145397 = state_145366__$1;
(statearr_145380_145397[(2)] = inst_145360);

(statearr_145380_145397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145367 === (8))){
var inst_145353 = (state_145366[(9)]);
var inst_145356 = cljs.core.deref.call(null,inst_145353);
var state_145366__$1 = state_145366;
var statearr_145381_145398 = state_145366__$1;
(statearr_145381_145398[(2)] = inst_145356);

(statearr_145381_145398[(1)] = (10));


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
var statearr_145385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_145385[(0)] = cljs$core$async$reduce_$_state_machine__15725__auto__);

(statearr_145385[(1)] = (1));

return statearr_145385;
});
var cljs$core$async$reduce_$_state_machine__15725__auto____1 = (function (state_145366){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_145366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e145386){if((e145386 instanceof Object)){
var ex__15728__auto__ = e145386;
var statearr_145387_145399 = state_145366;
(statearr_145387_145399[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e145386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145400 = state_145366;
state_145366 = G__145400;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15725__auto__ = function(state_145366){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15725__auto____1.call(this,state_145366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15725__auto____0;
cljs$core$async$reduce_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15725__auto____1;
return cljs$core$async$reduce_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_145388 = f__15790__auto__.call(null);
(statearr_145388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_145388;
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
var args145401 = [];
var len__14433__auto___145453 = arguments.length;
var i__14434__auto___145454 = (0);
while(true){
if((i__14434__auto___145454 < len__14433__auto___145453)){
args145401.push((arguments[i__14434__auto___145454]));

var G__145455 = (i__14434__auto___145454 + (1));
i__14434__auto___145454 = G__145455;
continue;
} else {
}
break;
}

var G__145403 = args145401.length;
switch (G__145403) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args145401.length)].join('')));

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
return (function (state_145428){
var state_val_145429 = (state_145428[(1)]);
if((state_val_145429 === (7))){
var inst_145410 = (state_145428[(2)]);
var state_145428__$1 = state_145428;
var statearr_145430_145457 = state_145428__$1;
(statearr_145430_145457[(2)] = inst_145410);

(statearr_145430_145457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145429 === (1))){
var inst_145404 = cljs.core.seq.call(null,coll);
var inst_145405 = inst_145404;
var state_145428__$1 = (function (){var statearr_145431 = state_145428;
(statearr_145431[(7)] = inst_145405);

return statearr_145431;
})();
var statearr_145432_145458 = state_145428__$1;
(statearr_145432_145458[(2)] = null);

(statearr_145432_145458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145429 === (4))){
var inst_145405 = (state_145428[(7)]);
var inst_145408 = cljs.core.first.call(null,inst_145405);
var state_145428__$1 = state_145428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145428__$1,(7),ch,inst_145408);
} else {
if((state_val_145429 === (13))){
var inst_145422 = (state_145428[(2)]);
var state_145428__$1 = state_145428;
var statearr_145433_145459 = state_145428__$1;
(statearr_145433_145459[(2)] = inst_145422);

(statearr_145433_145459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145429 === (6))){
var inst_145413 = (state_145428[(2)]);
var state_145428__$1 = state_145428;
if(cljs.core.truth_(inst_145413)){
var statearr_145434_145460 = state_145428__$1;
(statearr_145434_145460[(1)] = (8));

} else {
var statearr_145435_145461 = state_145428__$1;
(statearr_145435_145461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145429 === (3))){
var inst_145426 = (state_145428[(2)]);
var state_145428__$1 = state_145428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145428__$1,inst_145426);
} else {
if((state_val_145429 === (12))){
var state_145428__$1 = state_145428;
var statearr_145436_145462 = state_145428__$1;
(statearr_145436_145462[(2)] = null);

(statearr_145436_145462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145429 === (2))){
var inst_145405 = (state_145428[(7)]);
var state_145428__$1 = state_145428;
if(cljs.core.truth_(inst_145405)){
var statearr_145437_145463 = state_145428__$1;
(statearr_145437_145463[(1)] = (4));

} else {
var statearr_145438_145464 = state_145428__$1;
(statearr_145438_145464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145429 === (11))){
var inst_145419 = cljs.core.async.close_BANG_.call(null,ch);
var state_145428__$1 = state_145428;
var statearr_145439_145465 = state_145428__$1;
(statearr_145439_145465[(2)] = inst_145419);

(statearr_145439_145465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145429 === (9))){
var state_145428__$1 = state_145428;
if(cljs.core.truth_(close_QMARK_)){
var statearr_145440_145466 = state_145428__$1;
(statearr_145440_145466[(1)] = (11));

} else {
var statearr_145441_145467 = state_145428__$1;
(statearr_145441_145467[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145429 === (5))){
var inst_145405 = (state_145428[(7)]);
var state_145428__$1 = state_145428;
var statearr_145442_145468 = state_145428__$1;
(statearr_145442_145468[(2)] = inst_145405);

(statearr_145442_145468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145429 === (10))){
var inst_145424 = (state_145428[(2)]);
var state_145428__$1 = state_145428;
var statearr_145443_145469 = state_145428__$1;
(statearr_145443_145469[(2)] = inst_145424);

(statearr_145443_145469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145429 === (8))){
var inst_145405 = (state_145428[(7)]);
var inst_145415 = cljs.core.next.call(null,inst_145405);
var inst_145405__$1 = inst_145415;
var state_145428__$1 = (function (){var statearr_145444 = state_145428;
(statearr_145444[(7)] = inst_145405__$1);

return statearr_145444;
})();
var statearr_145445_145470 = state_145428__$1;
(statearr_145445_145470[(2)] = null);

(statearr_145445_145470[(1)] = (2));


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
var statearr_145449 = [null,null,null,null,null,null,null,null];
(statearr_145449[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_145449[(1)] = (1));

return statearr_145449;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_145428){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_145428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e145450){if((e145450 instanceof Object)){
var ex__15728__auto__ = e145450;
var statearr_145451_145471 = state_145428;
(statearr_145451_145471[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e145450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145472 = state_145428;
state_145428 = G__145472;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_145428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_145428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_145452 = f__15790__auto__.call(null);
(statearr_145452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_145452;
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
if(typeof cljs.core.async.t_cljs$core$async145694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async145694 = (function (mult,ch,cs,meta145695){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta145695 = meta145695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async145694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_145696,meta145695__$1){
var self__ = this;
var _145696__$1 = this;
return (new cljs.core.async.t_cljs$core$async145694(self__.mult,self__.ch,self__.cs,meta145695__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async145694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_145696){
var self__ = this;
var _145696__$1 = this;
return self__.meta145695;
});})(cs))
;

cljs.core.async.t_cljs$core$async145694.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async145694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async145694.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async145694.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async145694.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async145694.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async145694.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta145695","meta145695",233821434,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async145694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async145694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async145694";

cljs.core.async.t_cljs$core$async145694.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async145694");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async145694 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async145694(mult__$1,ch__$1,cs__$1,meta145695){
return (new cljs.core.async.t_cljs$core$async145694(mult__$1,ch__$1,cs__$1,meta145695));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async145694(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15789__auto___145915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___145915,cs,m,dchan,dctr,done){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___145915,cs,m,dchan,dctr,done){
return (function (state_145827){
var state_val_145828 = (state_145827[(1)]);
if((state_val_145828 === (7))){
var inst_145823 = (state_145827[(2)]);
var state_145827__$1 = state_145827;
var statearr_145829_145916 = state_145827__$1;
(statearr_145829_145916[(2)] = inst_145823);

(statearr_145829_145916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (20))){
var inst_145728 = (state_145827[(7)]);
var inst_145738 = cljs.core.first.call(null,inst_145728);
var inst_145739 = cljs.core.nth.call(null,inst_145738,(0),null);
var inst_145740 = cljs.core.nth.call(null,inst_145738,(1),null);
var state_145827__$1 = (function (){var statearr_145830 = state_145827;
(statearr_145830[(8)] = inst_145739);

return statearr_145830;
})();
if(cljs.core.truth_(inst_145740)){
var statearr_145831_145917 = state_145827__$1;
(statearr_145831_145917[(1)] = (22));

} else {
var statearr_145832_145918 = state_145827__$1;
(statearr_145832_145918[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (27))){
var inst_145768 = (state_145827[(9)]);
var inst_145775 = (state_145827[(10)]);
var inst_145699 = (state_145827[(11)]);
var inst_145770 = (state_145827[(12)]);
var inst_145775__$1 = cljs.core._nth.call(null,inst_145768,inst_145770);
var inst_145776 = cljs.core.async.put_BANG_.call(null,inst_145775__$1,inst_145699,done);
var state_145827__$1 = (function (){var statearr_145833 = state_145827;
(statearr_145833[(10)] = inst_145775__$1);

return statearr_145833;
})();
if(cljs.core.truth_(inst_145776)){
var statearr_145834_145919 = state_145827__$1;
(statearr_145834_145919[(1)] = (30));

} else {
var statearr_145835_145920 = state_145827__$1;
(statearr_145835_145920[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (1))){
var state_145827__$1 = state_145827;
var statearr_145836_145921 = state_145827__$1;
(statearr_145836_145921[(2)] = null);

(statearr_145836_145921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (24))){
var inst_145728 = (state_145827[(7)]);
var inst_145745 = (state_145827[(2)]);
var inst_145746 = cljs.core.next.call(null,inst_145728);
var inst_145708 = inst_145746;
var inst_145709 = null;
var inst_145710 = (0);
var inst_145711 = (0);
var state_145827__$1 = (function (){var statearr_145837 = state_145827;
(statearr_145837[(13)] = inst_145710);

(statearr_145837[(14)] = inst_145708);

(statearr_145837[(15)] = inst_145709);

(statearr_145837[(16)] = inst_145745);

(statearr_145837[(17)] = inst_145711);

return statearr_145837;
})();
var statearr_145838_145922 = state_145827__$1;
(statearr_145838_145922[(2)] = null);

(statearr_145838_145922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (39))){
var state_145827__$1 = state_145827;
var statearr_145842_145923 = state_145827__$1;
(statearr_145842_145923[(2)] = null);

(statearr_145842_145923[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (4))){
var inst_145699 = (state_145827[(11)]);
var inst_145699__$1 = (state_145827[(2)]);
var inst_145700 = (inst_145699__$1 == null);
var state_145827__$1 = (function (){var statearr_145843 = state_145827;
(statearr_145843[(11)] = inst_145699__$1);

return statearr_145843;
})();
if(cljs.core.truth_(inst_145700)){
var statearr_145844_145924 = state_145827__$1;
(statearr_145844_145924[(1)] = (5));

} else {
var statearr_145845_145925 = state_145827__$1;
(statearr_145845_145925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (15))){
var inst_145710 = (state_145827[(13)]);
var inst_145708 = (state_145827[(14)]);
var inst_145709 = (state_145827[(15)]);
var inst_145711 = (state_145827[(17)]);
var inst_145724 = (state_145827[(2)]);
var inst_145725 = (inst_145711 + (1));
var tmp145839 = inst_145710;
var tmp145840 = inst_145708;
var tmp145841 = inst_145709;
var inst_145708__$1 = tmp145840;
var inst_145709__$1 = tmp145841;
var inst_145710__$1 = tmp145839;
var inst_145711__$1 = inst_145725;
var state_145827__$1 = (function (){var statearr_145846 = state_145827;
(statearr_145846[(13)] = inst_145710__$1);

(statearr_145846[(14)] = inst_145708__$1);

(statearr_145846[(15)] = inst_145709__$1);

(statearr_145846[(18)] = inst_145724);

(statearr_145846[(17)] = inst_145711__$1);

return statearr_145846;
})();
var statearr_145847_145926 = state_145827__$1;
(statearr_145847_145926[(2)] = null);

(statearr_145847_145926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (21))){
var inst_145749 = (state_145827[(2)]);
var state_145827__$1 = state_145827;
var statearr_145851_145927 = state_145827__$1;
(statearr_145851_145927[(2)] = inst_145749);

(statearr_145851_145927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (31))){
var inst_145775 = (state_145827[(10)]);
var inst_145779 = done.call(null,null);
var inst_145780 = cljs.core.async.untap_STAR_.call(null,m,inst_145775);
var state_145827__$1 = (function (){var statearr_145852 = state_145827;
(statearr_145852[(19)] = inst_145779);

return statearr_145852;
})();
var statearr_145853_145928 = state_145827__$1;
(statearr_145853_145928[(2)] = inst_145780);

(statearr_145853_145928[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (32))){
var inst_145768 = (state_145827[(9)]);
var inst_145770 = (state_145827[(12)]);
var inst_145769 = (state_145827[(20)]);
var inst_145767 = (state_145827[(21)]);
var inst_145782 = (state_145827[(2)]);
var inst_145783 = (inst_145770 + (1));
var tmp145848 = inst_145768;
var tmp145849 = inst_145769;
var tmp145850 = inst_145767;
var inst_145767__$1 = tmp145850;
var inst_145768__$1 = tmp145848;
var inst_145769__$1 = tmp145849;
var inst_145770__$1 = inst_145783;
var state_145827__$1 = (function (){var statearr_145854 = state_145827;
(statearr_145854[(22)] = inst_145782);

(statearr_145854[(9)] = inst_145768__$1);

(statearr_145854[(12)] = inst_145770__$1);

(statearr_145854[(20)] = inst_145769__$1);

(statearr_145854[(21)] = inst_145767__$1);

return statearr_145854;
})();
var statearr_145855_145929 = state_145827__$1;
(statearr_145855_145929[(2)] = null);

(statearr_145855_145929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (40))){
var inst_145795 = (state_145827[(23)]);
var inst_145799 = done.call(null,null);
var inst_145800 = cljs.core.async.untap_STAR_.call(null,m,inst_145795);
var state_145827__$1 = (function (){var statearr_145856 = state_145827;
(statearr_145856[(24)] = inst_145799);

return statearr_145856;
})();
var statearr_145857_145930 = state_145827__$1;
(statearr_145857_145930[(2)] = inst_145800);

(statearr_145857_145930[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (33))){
var inst_145786 = (state_145827[(25)]);
var inst_145788 = cljs.core.chunked_seq_QMARK_.call(null,inst_145786);
var state_145827__$1 = state_145827;
if(inst_145788){
var statearr_145858_145931 = state_145827__$1;
(statearr_145858_145931[(1)] = (36));

} else {
var statearr_145859_145932 = state_145827__$1;
(statearr_145859_145932[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (13))){
var inst_145718 = (state_145827[(26)]);
var inst_145721 = cljs.core.async.close_BANG_.call(null,inst_145718);
var state_145827__$1 = state_145827;
var statearr_145860_145933 = state_145827__$1;
(statearr_145860_145933[(2)] = inst_145721);

(statearr_145860_145933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (22))){
var inst_145739 = (state_145827[(8)]);
var inst_145742 = cljs.core.async.close_BANG_.call(null,inst_145739);
var state_145827__$1 = state_145827;
var statearr_145861_145934 = state_145827__$1;
(statearr_145861_145934[(2)] = inst_145742);

(statearr_145861_145934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (36))){
var inst_145786 = (state_145827[(25)]);
var inst_145790 = cljs.core.chunk_first.call(null,inst_145786);
var inst_145791 = cljs.core.chunk_rest.call(null,inst_145786);
var inst_145792 = cljs.core.count.call(null,inst_145790);
var inst_145767 = inst_145791;
var inst_145768 = inst_145790;
var inst_145769 = inst_145792;
var inst_145770 = (0);
var state_145827__$1 = (function (){var statearr_145862 = state_145827;
(statearr_145862[(9)] = inst_145768);

(statearr_145862[(12)] = inst_145770);

(statearr_145862[(20)] = inst_145769);

(statearr_145862[(21)] = inst_145767);

return statearr_145862;
})();
var statearr_145863_145935 = state_145827__$1;
(statearr_145863_145935[(2)] = null);

(statearr_145863_145935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (41))){
var inst_145786 = (state_145827[(25)]);
var inst_145802 = (state_145827[(2)]);
var inst_145803 = cljs.core.next.call(null,inst_145786);
var inst_145767 = inst_145803;
var inst_145768 = null;
var inst_145769 = (0);
var inst_145770 = (0);
var state_145827__$1 = (function (){var statearr_145864 = state_145827;
(statearr_145864[(9)] = inst_145768);

(statearr_145864[(27)] = inst_145802);

(statearr_145864[(12)] = inst_145770);

(statearr_145864[(20)] = inst_145769);

(statearr_145864[(21)] = inst_145767);

return statearr_145864;
})();
var statearr_145865_145936 = state_145827__$1;
(statearr_145865_145936[(2)] = null);

(statearr_145865_145936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (43))){
var state_145827__$1 = state_145827;
var statearr_145866_145937 = state_145827__$1;
(statearr_145866_145937[(2)] = null);

(statearr_145866_145937[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (29))){
var inst_145811 = (state_145827[(2)]);
var state_145827__$1 = state_145827;
var statearr_145867_145938 = state_145827__$1;
(statearr_145867_145938[(2)] = inst_145811);

(statearr_145867_145938[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (44))){
var inst_145820 = (state_145827[(2)]);
var state_145827__$1 = (function (){var statearr_145868 = state_145827;
(statearr_145868[(28)] = inst_145820);

return statearr_145868;
})();
var statearr_145869_145939 = state_145827__$1;
(statearr_145869_145939[(2)] = null);

(statearr_145869_145939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (6))){
var inst_145759 = (state_145827[(29)]);
var inst_145758 = cljs.core.deref.call(null,cs);
var inst_145759__$1 = cljs.core.keys.call(null,inst_145758);
var inst_145760 = cljs.core.count.call(null,inst_145759__$1);
var inst_145761 = cljs.core.reset_BANG_.call(null,dctr,inst_145760);
var inst_145766 = cljs.core.seq.call(null,inst_145759__$1);
var inst_145767 = inst_145766;
var inst_145768 = null;
var inst_145769 = (0);
var inst_145770 = (0);
var state_145827__$1 = (function (){var statearr_145870 = state_145827;
(statearr_145870[(9)] = inst_145768);

(statearr_145870[(29)] = inst_145759__$1);

(statearr_145870[(30)] = inst_145761);

(statearr_145870[(12)] = inst_145770);

(statearr_145870[(20)] = inst_145769);

(statearr_145870[(21)] = inst_145767);

return statearr_145870;
})();
var statearr_145871_145940 = state_145827__$1;
(statearr_145871_145940[(2)] = null);

(statearr_145871_145940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (28))){
var inst_145786 = (state_145827[(25)]);
var inst_145767 = (state_145827[(21)]);
var inst_145786__$1 = cljs.core.seq.call(null,inst_145767);
var state_145827__$1 = (function (){var statearr_145872 = state_145827;
(statearr_145872[(25)] = inst_145786__$1);

return statearr_145872;
})();
if(inst_145786__$1){
var statearr_145873_145941 = state_145827__$1;
(statearr_145873_145941[(1)] = (33));

} else {
var statearr_145874_145942 = state_145827__$1;
(statearr_145874_145942[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (25))){
var inst_145770 = (state_145827[(12)]);
var inst_145769 = (state_145827[(20)]);
var inst_145772 = (inst_145770 < inst_145769);
var inst_145773 = inst_145772;
var state_145827__$1 = state_145827;
if(cljs.core.truth_(inst_145773)){
var statearr_145875_145943 = state_145827__$1;
(statearr_145875_145943[(1)] = (27));

} else {
var statearr_145876_145944 = state_145827__$1;
(statearr_145876_145944[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (34))){
var state_145827__$1 = state_145827;
var statearr_145877_145945 = state_145827__$1;
(statearr_145877_145945[(2)] = null);

(statearr_145877_145945[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (17))){
var state_145827__$1 = state_145827;
var statearr_145878_145946 = state_145827__$1;
(statearr_145878_145946[(2)] = null);

(statearr_145878_145946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (3))){
var inst_145825 = (state_145827[(2)]);
var state_145827__$1 = state_145827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145827__$1,inst_145825);
} else {
if((state_val_145828 === (12))){
var inst_145754 = (state_145827[(2)]);
var state_145827__$1 = state_145827;
var statearr_145879_145947 = state_145827__$1;
(statearr_145879_145947[(2)] = inst_145754);

(statearr_145879_145947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (2))){
var state_145827__$1 = state_145827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145827__$1,(4),ch);
} else {
if((state_val_145828 === (23))){
var state_145827__$1 = state_145827;
var statearr_145880_145948 = state_145827__$1;
(statearr_145880_145948[(2)] = null);

(statearr_145880_145948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (35))){
var inst_145809 = (state_145827[(2)]);
var state_145827__$1 = state_145827;
var statearr_145881_145949 = state_145827__$1;
(statearr_145881_145949[(2)] = inst_145809);

(statearr_145881_145949[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (19))){
var inst_145728 = (state_145827[(7)]);
var inst_145732 = cljs.core.chunk_first.call(null,inst_145728);
var inst_145733 = cljs.core.chunk_rest.call(null,inst_145728);
var inst_145734 = cljs.core.count.call(null,inst_145732);
var inst_145708 = inst_145733;
var inst_145709 = inst_145732;
var inst_145710 = inst_145734;
var inst_145711 = (0);
var state_145827__$1 = (function (){var statearr_145882 = state_145827;
(statearr_145882[(13)] = inst_145710);

(statearr_145882[(14)] = inst_145708);

(statearr_145882[(15)] = inst_145709);

(statearr_145882[(17)] = inst_145711);

return statearr_145882;
})();
var statearr_145883_145950 = state_145827__$1;
(statearr_145883_145950[(2)] = null);

(statearr_145883_145950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (11))){
var inst_145728 = (state_145827[(7)]);
var inst_145708 = (state_145827[(14)]);
var inst_145728__$1 = cljs.core.seq.call(null,inst_145708);
var state_145827__$1 = (function (){var statearr_145884 = state_145827;
(statearr_145884[(7)] = inst_145728__$1);

return statearr_145884;
})();
if(inst_145728__$1){
var statearr_145885_145951 = state_145827__$1;
(statearr_145885_145951[(1)] = (16));

} else {
var statearr_145886_145952 = state_145827__$1;
(statearr_145886_145952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (9))){
var inst_145756 = (state_145827[(2)]);
var state_145827__$1 = state_145827;
var statearr_145887_145953 = state_145827__$1;
(statearr_145887_145953[(2)] = inst_145756);

(statearr_145887_145953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (5))){
var inst_145706 = cljs.core.deref.call(null,cs);
var inst_145707 = cljs.core.seq.call(null,inst_145706);
var inst_145708 = inst_145707;
var inst_145709 = null;
var inst_145710 = (0);
var inst_145711 = (0);
var state_145827__$1 = (function (){var statearr_145888 = state_145827;
(statearr_145888[(13)] = inst_145710);

(statearr_145888[(14)] = inst_145708);

(statearr_145888[(15)] = inst_145709);

(statearr_145888[(17)] = inst_145711);

return statearr_145888;
})();
var statearr_145889_145954 = state_145827__$1;
(statearr_145889_145954[(2)] = null);

(statearr_145889_145954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (14))){
var state_145827__$1 = state_145827;
var statearr_145890_145955 = state_145827__$1;
(statearr_145890_145955[(2)] = null);

(statearr_145890_145955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (45))){
var inst_145817 = (state_145827[(2)]);
var state_145827__$1 = state_145827;
var statearr_145891_145956 = state_145827__$1;
(statearr_145891_145956[(2)] = inst_145817);

(statearr_145891_145956[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (26))){
var inst_145759 = (state_145827[(29)]);
var inst_145813 = (state_145827[(2)]);
var inst_145814 = cljs.core.seq.call(null,inst_145759);
var state_145827__$1 = (function (){var statearr_145892 = state_145827;
(statearr_145892[(31)] = inst_145813);

return statearr_145892;
})();
if(inst_145814){
var statearr_145893_145957 = state_145827__$1;
(statearr_145893_145957[(1)] = (42));

} else {
var statearr_145894_145958 = state_145827__$1;
(statearr_145894_145958[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (16))){
var inst_145728 = (state_145827[(7)]);
var inst_145730 = cljs.core.chunked_seq_QMARK_.call(null,inst_145728);
var state_145827__$1 = state_145827;
if(inst_145730){
var statearr_145895_145959 = state_145827__$1;
(statearr_145895_145959[(1)] = (19));

} else {
var statearr_145896_145960 = state_145827__$1;
(statearr_145896_145960[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (38))){
var inst_145806 = (state_145827[(2)]);
var state_145827__$1 = state_145827;
var statearr_145897_145961 = state_145827__$1;
(statearr_145897_145961[(2)] = inst_145806);

(statearr_145897_145961[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (30))){
var state_145827__$1 = state_145827;
var statearr_145898_145962 = state_145827__$1;
(statearr_145898_145962[(2)] = null);

(statearr_145898_145962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (10))){
var inst_145709 = (state_145827[(15)]);
var inst_145711 = (state_145827[(17)]);
var inst_145717 = cljs.core._nth.call(null,inst_145709,inst_145711);
var inst_145718 = cljs.core.nth.call(null,inst_145717,(0),null);
var inst_145719 = cljs.core.nth.call(null,inst_145717,(1),null);
var state_145827__$1 = (function (){var statearr_145899 = state_145827;
(statearr_145899[(26)] = inst_145718);

return statearr_145899;
})();
if(cljs.core.truth_(inst_145719)){
var statearr_145900_145963 = state_145827__$1;
(statearr_145900_145963[(1)] = (13));

} else {
var statearr_145901_145964 = state_145827__$1;
(statearr_145901_145964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (18))){
var inst_145752 = (state_145827[(2)]);
var state_145827__$1 = state_145827;
var statearr_145902_145965 = state_145827__$1;
(statearr_145902_145965[(2)] = inst_145752);

(statearr_145902_145965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (42))){
var state_145827__$1 = state_145827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145827__$1,(45),dchan);
} else {
if((state_val_145828 === (37))){
var inst_145795 = (state_145827[(23)]);
var inst_145786 = (state_145827[(25)]);
var inst_145699 = (state_145827[(11)]);
var inst_145795__$1 = cljs.core.first.call(null,inst_145786);
var inst_145796 = cljs.core.async.put_BANG_.call(null,inst_145795__$1,inst_145699,done);
var state_145827__$1 = (function (){var statearr_145903 = state_145827;
(statearr_145903[(23)] = inst_145795__$1);

return statearr_145903;
})();
if(cljs.core.truth_(inst_145796)){
var statearr_145904_145966 = state_145827__$1;
(statearr_145904_145966[(1)] = (39));

} else {
var statearr_145905_145967 = state_145827__$1;
(statearr_145905_145967[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145828 === (8))){
var inst_145710 = (state_145827[(13)]);
var inst_145711 = (state_145827[(17)]);
var inst_145713 = (inst_145711 < inst_145710);
var inst_145714 = inst_145713;
var state_145827__$1 = state_145827;
if(cljs.core.truth_(inst_145714)){
var statearr_145906_145968 = state_145827__$1;
(statearr_145906_145968[(1)] = (10));

} else {
var statearr_145907_145969 = state_145827__$1;
(statearr_145907_145969[(1)] = (11));

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
});})(c__15789__auto___145915,cs,m,dchan,dctr,done))
;
return ((function (switch__15724__auto__,c__15789__auto___145915,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15725__auto__ = null;
var cljs$core$async$mult_$_state_machine__15725__auto____0 = (function (){
var statearr_145911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_145911[(0)] = cljs$core$async$mult_$_state_machine__15725__auto__);

(statearr_145911[(1)] = (1));

return statearr_145911;
});
var cljs$core$async$mult_$_state_machine__15725__auto____1 = (function (state_145827){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_145827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e145912){if((e145912 instanceof Object)){
var ex__15728__auto__ = e145912;
var statearr_145913_145970 = state_145827;
(statearr_145913_145970[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e145912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145971 = state_145827;
state_145827 = G__145971;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15725__auto__ = function(state_145827){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15725__auto____1.call(this,state_145827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15725__auto____0;
cljs$core$async$mult_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15725__auto____1;
return cljs$core$async$mult_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___145915,cs,m,dchan,dctr,done))
})();
var state__15791__auto__ = (function (){var statearr_145914 = f__15790__auto__.call(null);
(statearr_145914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___145915);

return statearr_145914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___145915,cs,m,dchan,dctr,done))
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
var args145972 = [];
var len__14433__auto___145975 = arguments.length;
var i__14434__auto___145976 = (0);
while(true){
if((i__14434__auto___145976 < len__14433__auto___145975)){
args145972.push((arguments[i__14434__auto___145976]));

var G__145977 = (i__14434__auto___145976 + (1));
i__14434__auto___145976 = G__145977;
continue;
} else {
}
break;
}

var G__145974 = args145972.length;
switch (G__145974) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args145972.length)].join('')));

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
var len__14433__auto___145989 = arguments.length;
var i__14434__auto___145990 = (0);
while(true){
if((i__14434__auto___145990 < len__14433__auto___145989)){
args__14440__auto__.push((arguments[i__14434__auto___145990]));

var G__145991 = (i__14434__auto___145990 + (1));
i__14434__auto___145990 = G__145991;
continue;
} else {
}
break;
}

var argseq__14441__auto__ = ((((3) < args__14440__auto__.length))?(new cljs.core.IndexedSeq(args__14440__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__14441__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__145983){
var map__145984 = p__145983;
var map__145984__$1 = ((((!((map__145984 == null)))?((((map__145984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__145984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__145984):map__145984);
var opts = map__145984__$1;
var statearr_145986_145992 = state;
(statearr_145986_145992[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__145984,map__145984__$1,opts){
return (function (val){
var statearr_145987_145993 = state;
(statearr_145987_145993[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__145984,map__145984__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_145988_145994 = state;
(statearr_145988_145994[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq145979){
var G__145980 = cljs.core.first.call(null,seq145979);
var seq145979__$1 = cljs.core.next.call(null,seq145979);
var G__145981 = cljs.core.first.call(null,seq145979__$1);
var seq145979__$2 = cljs.core.next.call(null,seq145979__$1);
var G__145982 = cljs.core.first.call(null,seq145979__$2);
var seq145979__$3 = cljs.core.next.call(null,seq145979__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__145980,G__145981,G__145982,seq145979__$3);
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
if(typeof cljs.core.async.t_cljs$core$async146158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async146158 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta146159){
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
this.meta146159 = meta146159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async146158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_146160,meta146159__$1){
var self__ = this;
var _146160__$1 = this;
return (new cljs.core.async.t_cljs$core$async146158(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta146159__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async146158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_146160){
var self__ = this;
var _146160__$1 = this;
return self__.meta146159;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async146158.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async146158.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async146158.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async146158.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async146158.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async146158.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async146158.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async146158.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async146158.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta146159","meta146159",-2132855832,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async146158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async146158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async146158";

cljs.core.async.t_cljs$core$async146158.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async146158");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async146158 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async146158(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta146159){
return (new cljs.core.async.t_cljs$core$async146158(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta146159));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async146158(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15789__auto___146321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___146321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___146321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_146258){
var state_val_146259 = (state_146258[(1)]);
if((state_val_146259 === (7))){
var inst_146176 = (state_146258[(2)]);
var state_146258__$1 = state_146258;
var statearr_146260_146322 = state_146258__$1;
(statearr_146260_146322[(2)] = inst_146176);

(statearr_146260_146322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (20))){
var inst_146188 = (state_146258[(7)]);
var state_146258__$1 = state_146258;
var statearr_146261_146323 = state_146258__$1;
(statearr_146261_146323[(2)] = inst_146188);

(statearr_146261_146323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (27))){
var state_146258__$1 = state_146258;
var statearr_146262_146324 = state_146258__$1;
(statearr_146262_146324[(2)] = null);

(statearr_146262_146324[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (1))){
var inst_146164 = (state_146258[(8)]);
var inst_146164__$1 = calc_state.call(null);
var inst_146166 = (inst_146164__$1 == null);
var inst_146167 = cljs.core.not.call(null,inst_146166);
var state_146258__$1 = (function (){var statearr_146263 = state_146258;
(statearr_146263[(8)] = inst_146164__$1);

return statearr_146263;
})();
if(inst_146167){
var statearr_146264_146325 = state_146258__$1;
(statearr_146264_146325[(1)] = (2));

} else {
var statearr_146265_146326 = state_146258__$1;
(statearr_146265_146326[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (24))){
var inst_146218 = (state_146258[(9)]);
var inst_146232 = (state_146258[(10)]);
var inst_146211 = (state_146258[(11)]);
var inst_146232__$1 = inst_146211.call(null,inst_146218);
var state_146258__$1 = (function (){var statearr_146266 = state_146258;
(statearr_146266[(10)] = inst_146232__$1);

return statearr_146266;
})();
if(cljs.core.truth_(inst_146232__$1)){
var statearr_146267_146327 = state_146258__$1;
(statearr_146267_146327[(1)] = (29));

} else {
var statearr_146268_146328 = state_146258__$1;
(statearr_146268_146328[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (4))){
var inst_146179 = (state_146258[(2)]);
var state_146258__$1 = state_146258;
if(cljs.core.truth_(inst_146179)){
var statearr_146269_146329 = state_146258__$1;
(statearr_146269_146329[(1)] = (8));

} else {
var statearr_146270_146330 = state_146258__$1;
(statearr_146270_146330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (15))){
var inst_146205 = (state_146258[(2)]);
var state_146258__$1 = state_146258;
if(cljs.core.truth_(inst_146205)){
var statearr_146271_146331 = state_146258__$1;
(statearr_146271_146331[(1)] = (19));

} else {
var statearr_146272_146332 = state_146258__$1;
(statearr_146272_146332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (21))){
var inst_146210 = (state_146258[(12)]);
var inst_146210__$1 = (state_146258[(2)]);
var inst_146211 = cljs.core.get.call(null,inst_146210__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_146212 = cljs.core.get.call(null,inst_146210__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_146213 = cljs.core.get.call(null,inst_146210__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_146258__$1 = (function (){var statearr_146273 = state_146258;
(statearr_146273[(13)] = inst_146212);

(statearr_146273[(11)] = inst_146211);

(statearr_146273[(12)] = inst_146210__$1);

return statearr_146273;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_146258__$1,(22),inst_146213);
} else {
if((state_val_146259 === (31))){
var inst_146240 = (state_146258[(2)]);
var state_146258__$1 = state_146258;
if(cljs.core.truth_(inst_146240)){
var statearr_146274_146333 = state_146258__$1;
(statearr_146274_146333[(1)] = (32));

} else {
var statearr_146275_146334 = state_146258__$1;
(statearr_146275_146334[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (32))){
var inst_146217 = (state_146258[(14)]);
var state_146258__$1 = state_146258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_146258__$1,(35),out,inst_146217);
} else {
if((state_val_146259 === (33))){
var inst_146210 = (state_146258[(12)]);
var inst_146188 = inst_146210;
var state_146258__$1 = (function (){var statearr_146276 = state_146258;
(statearr_146276[(7)] = inst_146188);

return statearr_146276;
})();
var statearr_146277_146335 = state_146258__$1;
(statearr_146277_146335[(2)] = null);

(statearr_146277_146335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (13))){
var inst_146188 = (state_146258[(7)]);
var inst_146195 = inst_146188.cljs$lang$protocol_mask$partition0$;
var inst_146196 = (inst_146195 & (64));
var inst_146197 = inst_146188.cljs$core$ISeq$;
var inst_146198 = (inst_146196) || (inst_146197);
var state_146258__$1 = state_146258;
if(cljs.core.truth_(inst_146198)){
var statearr_146278_146336 = state_146258__$1;
(statearr_146278_146336[(1)] = (16));

} else {
var statearr_146279_146337 = state_146258__$1;
(statearr_146279_146337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (22))){
var inst_146218 = (state_146258[(9)]);
var inst_146217 = (state_146258[(14)]);
var inst_146216 = (state_146258[(2)]);
var inst_146217__$1 = cljs.core.nth.call(null,inst_146216,(0),null);
var inst_146218__$1 = cljs.core.nth.call(null,inst_146216,(1),null);
var inst_146219 = (inst_146217__$1 == null);
var inst_146220 = cljs.core._EQ_.call(null,inst_146218__$1,change);
var inst_146221 = (inst_146219) || (inst_146220);
var state_146258__$1 = (function (){var statearr_146280 = state_146258;
(statearr_146280[(9)] = inst_146218__$1);

(statearr_146280[(14)] = inst_146217__$1);

return statearr_146280;
})();
if(cljs.core.truth_(inst_146221)){
var statearr_146281_146338 = state_146258__$1;
(statearr_146281_146338[(1)] = (23));

} else {
var statearr_146282_146339 = state_146258__$1;
(statearr_146282_146339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (36))){
var inst_146210 = (state_146258[(12)]);
var inst_146188 = inst_146210;
var state_146258__$1 = (function (){var statearr_146283 = state_146258;
(statearr_146283[(7)] = inst_146188);

return statearr_146283;
})();
var statearr_146284_146340 = state_146258__$1;
(statearr_146284_146340[(2)] = null);

(statearr_146284_146340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (29))){
var inst_146232 = (state_146258[(10)]);
var state_146258__$1 = state_146258;
var statearr_146285_146341 = state_146258__$1;
(statearr_146285_146341[(2)] = inst_146232);

(statearr_146285_146341[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (6))){
var state_146258__$1 = state_146258;
var statearr_146286_146342 = state_146258__$1;
(statearr_146286_146342[(2)] = false);

(statearr_146286_146342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (28))){
var inst_146228 = (state_146258[(2)]);
var inst_146229 = calc_state.call(null);
var inst_146188 = inst_146229;
var state_146258__$1 = (function (){var statearr_146287 = state_146258;
(statearr_146287[(15)] = inst_146228);

(statearr_146287[(7)] = inst_146188);

return statearr_146287;
})();
var statearr_146288_146343 = state_146258__$1;
(statearr_146288_146343[(2)] = null);

(statearr_146288_146343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (25))){
var inst_146254 = (state_146258[(2)]);
var state_146258__$1 = state_146258;
var statearr_146289_146344 = state_146258__$1;
(statearr_146289_146344[(2)] = inst_146254);

(statearr_146289_146344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (34))){
var inst_146252 = (state_146258[(2)]);
var state_146258__$1 = state_146258;
var statearr_146290_146345 = state_146258__$1;
(statearr_146290_146345[(2)] = inst_146252);

(statearr_146290_146345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (17))){
var state_146258__$1 = state_146258;
var statearr_146291_146346 = state_146258__$1;
(statearr_146291_146346[(2)] = false);

(statearr_146291_146346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (3))){
var state_146258__$1 = state_146258;
var statearr_146292_146347 = state_146258__$1;
(statearr_146292_146347[(2)] = false);

(statearr_146292_146347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (12))){
var inst_146256 = (state_146258[(2)]);
var state_146258__$1 = state_146258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_146258__$1,inst_146256);
} else {
if((state_val_146259 === (2))){
var inst_146164 = (state_146258[(8)]);
var inst_146169 = inst_146164.cljs$lang$protocol_mask$partition0$;
var inst_146170 = (inst_146169 & (64));
var inst_146171 = inst_146164.cljs$core$ISeq$;
var inst_146172 = (inst_146170) || (inst_146171);
var state_146258__$1 = state_146258;
if(cljs.core.truth_(inst_146172)){
var statearr_146293_146348 = state_146258__$1;
(statearr_146293_146348[(1)] = (5));

} else {
var statearr_146294_146349 = state_146258__$1;
(statearr_146294_146349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (23))){
var inst_146217 = (state_146258[(14)]);
var inst_146223 = (inst_146217 == null);
var state_146258__$1 = state_146258;
if(cljs.core.truth_(inst_146223)){
var statearr_146295_146350 = state_146258__$1;
(statearr_146295_146350[(1)] = (26));

} else {
var statearr_146296_146351 = state_146258__$1;
(statearr_146296_146351[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (35))){
var inst_146243 = (state_146258[(2)]);
var state_146258__$1 = state_146258;
if(cljs.core.truth_(inst_146243)){
var statearr_146297_146352 = state_146258__$1;
(statearr_146297_146352[(1)] = (36));

} else {
var statearr_146298_146353 = state_146258__$1;
(statearr_146298_146353[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (19))){
var inst_146188 = (state_146258[(7)]);
var inst_146207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_146188);
var state_146258__$1 = state_146258;
var statearr_146299_146354 = state_146258__$1;
(statearr_146299_146354[(2)] = inst_146207);

(statearr_146299_146354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (11))){
var inst_146188 = (state_146258[(7)]);
var inst_146192 = (inst_146188 == null);
var inst_146193 = cljs.core.not.call(null,inst_146192);
var state_146258__$1 = state_146258;
if(inst_146193){
var statearr_146300_146355 = state_146258__$1;
(statearr_146300_146355[(1)] = (13));

} else {
var statearr_146301_146356 = state_146258__$1;
(statearr_146301_146356[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (9))){
var inst_146164 = (state_146258[(8)]);
var state_146258__$1 = state_146258;
var statearr_146302_146357 = state_146258__$1;
(statearr_146302_146357[(2)] = inst_146164);

(statearr_146302_146357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (5))){
var state_146258__$1 = state_146258;
var statearr_146303_146358 = state_146258__$1;
(statearr_146303_146358[(2)] = true);

(statearr_146303_146358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (14))){
var state_146258__$1 = state_146258;
var statearr_146304_146359 = state_146258__$1;
(statearr_146304_146359[(2)] = false);

(statearr_146304_146359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (26))){
var inst_146218 = (state_146258[(9)]);
var inst_146225 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_146218);
var state_146258__$1 = state_146258;
var statearr_146305_146360 = state_146258__$1;
(statearr_146305_146360[(2)] = inst_146225);

(statearr_146305_146360[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (16))){
var state_146258__$1 = state_146258;
var statearr_146306_146361 = state_146258__$1;
(statearr_146306_146361[(2)] = true);

(statearr_146306_146361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (38))){
var inst_146248 = (state_146258[(2)]);
var state_146258__$1 = state_146258;
var statearr_146307_146362 = state_146258__$1;
(statearr_146307_146362[(2)] = inst_146248);

(statearr_146307_146362[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (30))){
var inst_146212 = (state_146258[(13)]);
var inst_146218 = (state_146258[(9)]);
var inst_146211 = (state_146258[(11)]);
var inst_146235 = cljs.core.empty_QMARK_.call(null,inst_146211);
var inst_146236 = inst_146212.call(null,inst_146218);
var inst_146237 = cljs.core.not.call(null,inst_146236);
var inst_146238 = (inst_146235) && (inst_146237);
var state_146258__$1 = state_146258;
var statearr_146308_146363 = state_146258__$1;
(statearr_146308_146363[(2)] = inst_146238);

(statearr_146308_146363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (10))){
var inst_146164 = (state_146258[(8)]);
var inst_146184 = (state_146258[(2)]);
var inst_146185 = cljs.core.get.call(null,inst_146184,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_146186 = cljs.core.get.call(null,inst_146184,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_146187 = cljs.core.get.call(null,inst_146184,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_146188 = inst_146164;
var state_146258__$1 = (function (){var statearr_146309 = state_146258;
(statearr_146309[(16)] = inst_146187);

(statearr_146309[(17)] = inst_146185);

(statearr_146309[(18)] = inst_146186);

(statearr_146309[(7)] = inst_146188);

return statearr_146309;
})();
var statearr_146310_146364 = state_146258__$1;
(statearr_146310_146364[(2)] = null);

(statearr_146310_146364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (18))){
var inst_146202 = (state_146258[(2)]);
var state_146258__$1 = state_146258;
var statearr_146311_146365 = state_146258__$1;
(statearr_146311_146365[(2)] = inst_146202);

(statearr_146311_146365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (37))){
var state_146258__$1 = state_146258;
var statearr_146312_146366 = state_146258__$1;
(statearr_146312_146366[(2)] = null);

(statearr_146312_146366[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146259 === (8))){
var inst_146164 = (state_146258[(8)]);
var inst_146181 = cljs.core.apply.call(null,cljs.core.hash_map,inst_146164);
var state_146258__$1 = state_146258;
var statearr_146313_146367 = state_146258__$1;
(statearr_146313_146367[(2)] = inst_146181);

(statearr_146313_146367[(1)] = (10));


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
});})(c__15789__auto___146321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15724__auto__,c__15789__auto___146321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15725__auto__ = null;
var cljs$core$async$mix_$_state_machine__15725__auto____0 = (function (){
var statearr_146317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_146317[(0)] = cljs$core$async$mix_$_state_machine__15725__auto__);

(statearr_146317[(1)] = (1));

return statearr_146317;
});
var cljs$core$async$mix_$_state_machine__15725__auto____1 = (function (state_146258){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_146258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e146318){if((e146318 instanceof Object)){
var ex__15728__auto__ = e146318;
var statearr_146319_146368 = state_146258;
(statearr_146319_146368[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_146258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e146318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__146369 = state_146258;
state_146258 = G__146369;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15725__auto__ = function(state_146258){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15725__auto____1.call(this,state_146258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15725__auto____0;
cljs$core$async$mix_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15725__auto____1;
return cljs$core$async$mix_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___146321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15791__auto__ = (function (){var statearr_146320 = f__15790__auto__.call(null);
(statearr_146320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___146321);

return statearr_146320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___146321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args146370 = [];
var len__14433__auto___146373 = arguments.length;
var i__14434__auto___146374 = (0);
while(true){
if((i__14434__auto___146374 < len__14433__auto___146373)){
args146370.push((arguments[i__14434__auto___146374]));

var G__146375 = (i__14434__auto___146374 + (1));
i__14434__auto___146374 = G__146375;
continue;
} else {
}
break;
}

var G__146372 = args146370.length;
switch (G__146372) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args146370.length)].join('')));

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
var args146378 = [];
var len__14433__auto___146503 = arguments.length;
var i__14434__auto___146504 = (0);
while(true){
if((i__14434__auto___146504 < len__14433__auto___146503)){
args146378.push((arguments[i__14434__auto___146504]));

var G__146505 = (i__14434__auto___146504 + (1));
i__14434__auto___146504 = G__146505;
continue;
} else {
}
break;
}

var G__146380 = args146378.length;
switch (G__146380) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args146378.length)].join('')));

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
return (function (p1__146377_SHARP_){
if(cljs.core.truth_(p1__146377_SHARP_.call(null,topic))){
return p1__146377_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__146377_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13375__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async146381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async146381 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta146382){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta146382 = meta146382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async146381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_146383,meta146382__$1){
var self__ = this;
var _146383__$1 = this;
return (new cljs.core.async.t_cljs$core$async146381(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta146382__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async146381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_146383){
var self__ = this;
var _146383__$1 = this;
return self__.meta146382;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async146381.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async146381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async146381.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async146381.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async146381.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async146381.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async146381.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async146381.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta146382","meta146382",948041669,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async146381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async146381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async146381";

cljs.core.async.t_cljs$core$async146381.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async146381");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async146381 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async146381(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta146382){
return (new cljs.core.async.t_cljs$core$async146381(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta146382));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async146381(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15789__auto___146507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___146507,mults,ensure_mult,p){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___146507,mults,ensure_mult,p){
return (function (state_146455){
var state_val_146456 = (state_146455[(1)]);
if((state_val_146456 === (7))){
var inst_146451 = (state_146455[(2)]);
var state_146455__$1 = state_146455;
var statearr_146457_146508 = state_146455__$1;
(statearr_146457_146508[(2)] = inst_146451);

(statearr_146457_146508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (20))){
var state_146455__$1 = state_146455;
var statearr_146458_146509 = state_146455__$1;
(statearr_146458_146509[(2)] = null);

(statearr_146458_146509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (1))){
var state_146455__$1 = state_146455;
var statearr_146459_146510 = state_146455__$1;
(statearr_146459_146510[(2)] = null);

(statearr_146459_146510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (24))){
var inst_146434 = (state_146455[(7)]);
var inst_146443 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_146434);
var state_146455__$1 = state_146455;
var statearr_146460_146511 = state_146455__$1;
(statearr_146460_146511[(2)] = inst_146443);

(statearr_146460_146511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (4))){
var inst_146386 = (state_146455[(8)]);
var inst_146386__$1 = (state_146455[(2)]);
var inst_146387 = (inst_146386__$1 == null);
var state_146455__$1 = (function (){var statearr_146461 = state_146455;
(statearr_146461[(8)] = inst_146386__$1);

return statearr_146461;
})();
if(cljs.core.truth_(inst_146387)){
var statearr_146462_146512 = state_146455__$1;
(statearr_146462_146512[(1)] = (5));

} else {
var statearr_146463_146513 = state_146455__$1;
(statearr_146463_146513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (15))){
var inst_146428 = (state_146455[(2)]);
var state_146455__$1 = state_146455;
var statearr_146464_146514 = state_146455__$1;
(statearr_146464_146514[(2)] = inst_146428);

(statearr_146464_146514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (21))){
var inst_146448 = (state_146455[(2)]);
var state_146455__$1 = (function (){var statearr_146465 = state_146455;
(statearr_146465[(9)] = inst_146448);

return statearr_146465;
})();
var statearr_146466_146515 = state_146455__$1;
(statearr_146466_146515[(2)] = null);

(statearr_146466_146515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (13))){
var inst_146410 = (state_146455[(10)]);
var inst_146412 = cljs.core.chunked_seq_QMARK_.call(null,inst_146410);
var state_146455__$1 = state_146455;
if(inst_146412){
var statearr_146467_146516 = state_146455__$1;
(statearr_146467_146516[(1)] = (16));

} else {
var statearr_146468_146517 = state_146455__$1;
(statearr_146468_146517[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (22))){
var inst_146440 = (state_146455[(2)]);
var state_146455__$1 = state_146455;
if(cljs.core.truth_(inst_146440)){
var statearr_146469_146518 = state_146455__$1;
(statearr_146469_146518[(1)] = (23));

} else {
var statearr_146470_146519 = state_146455__$1;
(statearr_146470_146519[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (6))){
var inst_146386 = (state_146455[(8)]);
var inst_146436 = (state_146455[(11)]);
var inst_146434 = (state_146455[(7)]);
var inst_146434__$1 = topic_fn.call(null,inst_146386);
var inst_146435 = cljs.core.deref.call(null,mults);
var inst_146436__$1 = cljs.core.get.call(null,inst_146435,inst_146434__$1);
var state_146455__$1 = (function (){var statearr_146471 = state_146455;
(statearr_146471[(11)] = inst_146436__$1);

(statearr_146471[(7)] = inst_146434__$1);

return statearr_146471;
})();
if(cljs.core.truth_(inst_146436__$1)){
var statearr_146472_146520 = state_146455__$1;
(statearr_146472_146520[(1)] = (19));

} else {
var statearr_146473_146521 = state_146455__$1;
(statearr_146473_146521[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (25))){
var inst_146445 = (state_146455[(2)]);
var state_146455__$1 = state_146455;
var statearr_146474_146522 = state_146455__$1;
(statearr_146474_146522[(2)] = inst_146445);

(statearr_146474_146522[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (17))){
var inst_146410 = (state_146455[(10)]);
var inst_146419 = cljs.core.first.call(null,inst_146410);
var inst_146420 = cljs.core.async.muxch_STAR_.call(null,inst_146419);
var inst_146421 = cljs.core.async.close_BANG_.call(null,inst_146420);
var inst_146422 = cljs.core.next.call(null,inst_146410);
var inst_146396 = inst_146422;
var inst_146397 = null;
var inst_146398 = (0);
var inst_146399 = (0);
var state_146455__$1 = (function (){var statearr_146475 = state_146455;
(statearr_146475[(12)] = inst_146397);

(statearr_146475[(13)] = inst_146399);

(statearr_146475[(14)] = inst_146421);

(statearr_146475[(15)] = inst_146396);

(statearr_146475[(16)] = inst_146398);

return statearr_146475;
})();
var statearr_146476_146523 = state_146455__$1;
(statearr_146476_146523[(2)] = null);

(statearr_146476_146523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (3))){
var inst_146453 = (state_146455[(2)]);
var state_146455__$1 = state_146455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_146455__$1,inst_146453);
} else {
if((state_val_146456 === (12))){
var inst_146430 = (state_146455[(2)]);
var state_146455__$1 = state_146455;
var statearr_146477_146524 = state_146455__$1;
(statearr_146477_146524[(2)] = inst_146430);

(statearr_146477_146524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (2))){
var state_146455__$1 = state_146455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_146455__$1,(4),ch);
} else {
if((state_val_146456 === (23))){
var state_146455__$1 = state_146455;
var statearr_146478_146525 = state_146455__$1;
(statearr_146478_146525[(2)] = null);

(statearr_146478_146525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (19))){
var inst_146386 = (state_146455[(8)]);
var inst_146436 = (state_146455[(11)]);
var inst_146438 = cljs.core.async.muxch_STAR_.call(null,inst_146436);
var state_146455__$1 = state_146455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_146455__$1,(22),inst_146438,inst_146386);
} else {
if((state_val_146456 === (11))){
var inst_146410 = (state_146455[(10)]);
var inst_146396 = (state_146455[(15)]);
var inst_146410__$1 = cljs.core.seq.call(null,inst_146396);
var state_146455__$1 = (function (){var statearr_146479 = state_146455;
(statearr_146479[(10)] = inst_146410__$1);

return statearr_146479;
})();
if(inst_146410__$1){
var statearr_146480_146526 = state_146455__$1;
(statearr_146480_146526[(1)] = (13));

} else {
var statearr_146481_146527 = state_146455__$1;
(statearr_146481_146527[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (9))){
var inst_146432 = (state_146455[(2)]);
var state_146455__$1 = state_146455;
var statearr_146482_146528 = state_146455__$1;
(statearr_146482_146528[(2)] = inst_146432);

(statearr_146482_146528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (5))){
var inst_146393 = cljs.core.deref.call(null,mults);
var inst_146394 = cljs.core.vals.call(null,inst_146393);
var inst_146395 = cljs.core.seq.call(null,inst_146394);
var inst_146396 = inst_146395;
var inst_146397 = null;
var inst_146398 = (0);
var inst_146399 = (0);
var state_146455__$1 = (function (){var statearr_146483 = state_146455;
(statearr_146483[(12)] = inst_146397);

(statearr_146483[(13)] = inst_146399);

(statearr_146483[(15)] = inst_146396);

(statearr_146483[(16)] = inst_146398);

return statearr_146483;
})();
var statearr_146484_146529 = state_146455__$1;
(statearr_146484_146529[(2)] = null);

(statearr_146484_146529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (14))){
var state_146455__$1 = state_146455;
var statearr_146488_146530 = state_146455__$1;
(statearr_146488_146530[(2)] = null);

(statearr_146488_146530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (16))){
var inst_146410 = (state_146455[(10)]);
var inst_146414 = cljs.core.chunk_first.call(null,inst_146410);
var inst_146415 = cljs.core.chunk_rest.call(null,inst_146410);
var inst_146416 = cljs.core.count.call(null,inst_146414);
var inst_146396 = inst_146415;
var inst_146397 = inst_146414;
var inst_146398 = inst_146416;
var inst_146399 = (0);
var state_146455__$1 = (function (){var statearr_146489 = state_146455;
(statearr_146489[(12)] = inst_146397);

(statearr_146489[(13)] = inst_146399);

(statearr_146489[(15)] = inst_146396);

(statearr_146489[(16)] = inst_146398);

return statearr_146489;
})();
var statearr_146490_146531 = state_146455__$1;
(statearr_146490_146531[(2)] = null);

(statearr_146490_146531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (10))){
var inst_146397 = (state_146455[(12)]);
var inst_146399 = (state_146455[(13)]);
var inst_146396 = (state_146455[(15)]);
var inst_146398 = (state_146455[(16)]);
var inst_146404 = cljs.core._nth.call(null,inst_146397,inst_146399);
var inst_146405 = cljs.core.async.muxch_STAR_.call(null,inst_146404);
var inst_146406 = cljs.core.async.close_BANG_.call(null,inst_146405);
var inst_146407 = (inst_146399 + (1));
var tmp146485 = inst_146397;
var tmp146486 = inst_146396;
var tmp146487 = inst_146398;
var inst_146396__$1 = tmp146486;
var inst_146397__$1 = tmp146485;
var inst_146398__$1 = tmp146487;
var inst_146399__$1 = inst_146407;
var state_146455__$1 = (function (){var statearr_146491 = state_146455;
(statearr_146491[(12)] = inst_146397__$1);

(statearr_146491[(13)] = inst_146399__$1);

(statearr_146491[(15)] = inst_146396__$1);

(statearr_146491[(17)] = inst_146406);

(statearr_146491[(16)] = inst_146398__$1);

return statearr_146491;
})();
var statearr_146492_146532 = state_146455__$1;
(statearr_146492_146532[(2)] = null);

(statearr_146492_146532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (18))){
var inst_146425 = (state_146455[(2)]);
var state_146455__$1 = state_146455;
var statearr_146493_146533 = state_146455__$1;
(statearr_146493_146533[(2)] = inst_146425);

(statearr_146493_146533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146456 === (8))){
var inst_146399 = (state_146455[(13)]);
var inst_146398 = (state_146455[(16)]);
var inst_146401 = (inst_146399 < inst_146398);
var inst_146402 = inst_146401;
var state_146455__$1 = state_146455;
if(cljs.core.truth_(inst_146402)){
var statearr_146494_146534 = state_146455__$1;
(statearr_146494_146534[(1)] = (10));

} else {
var statearr_146495_146535 = state_146455__$1;
(statearr_146495_146535[(1)] = (11));

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
});})(c__15789__auto___146507,mults,ensure_mult,p))
;
return ((function (switch__15724__auto__,c__15789__auto___146507,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_146499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_146499[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_146499[(1)] = (1));

return statearr_146499;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_146455){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_146455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e146500){if((e146500 instanceof Object)){
var ex__15728__auto__ = e146500;
var statearr_146501_146536 = state_146455;
(statearr_146501_146536[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_146455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e146500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__146537 = state_146455;
state_146455 = G__146537;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_146455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_146455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___146507,mults,ensure_mult,p))
})();
var state__15791__auto__ = (function (){var statearr_146502 = f__15790__auto__.call(null);
(statearr_146502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___146507);

return statearr_146502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___146507,mults,ensure_mult,p))
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
var args146538 = [];
var len__14433__auto___146541 = arguments.length;
var i__14434__auto___146542 = (0);
while(true){
if((i__14434__auto___146542 < len__14433__auto___146541)){
args146538.push((arguments[i__14434__auto___146542]));

var G__146543 = (i__14434__auto___146542 + (1));
i__14434__auto___146542 = G__146543;
continue;
} else {
}
break;
}

var G__146540 = args146538.length;
switch (G__146540) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args146538.length)].join('')));

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
var args146545 = [];
var len__14433__auto___146548 = arguments.length;
var i__14434__auto___146549 = (0);
while(true){
if((i__14434__auto___146549 < len__14433__auto___146548)){
args146545.push((arguments[i__14434__auto___146549]));

var G__146550 = (i__14434__auto___146549 + (1));
i__14434__auto___146549 = G__146550;
continue;
} else {
}
break;
}

var G__146547 = args146545.length;
switch (G__146547) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args146545.length)].join('')));

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
var args146552 = [];
var len__14433__auto___146623 = arguments.length;
var i__14434__auto___146624 = (0);
while(true){
if((i__14434__auto___146624 < len__14433__auto___146623)){
args146552.push((arguments[i__14434__auto___146624]));

var G__146625 = (i__14434__auto___146624 + (1));
i__14434__auto___146624 = G__146625;
continue;
} else {
}
break;
}

var G__146554 = args146552.length;
switch (G__146554) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args146552.length)].join('')));

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
var c__15789__auto___146627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___146627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___146627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_146593){
var state_val_146594 = (state_146593[(1)]);
if((state_val_146594 === (7))){
var state_146593__$1 = state_146593;
var statearr_146595_146628 = state_146593__$1;
(statearr_146595_146628[(2)] = null);

(statearr_146595_146628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146594 === (1))){
var state_146593__$1 = state_146593;
var statearr_146596_146629 = state_146593__$1;
(statearr_146596_146629[(2)] = null);

(statearr_146596_146629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146594 === (4))){
var inst_146557 = (state_146593[(7)]);
var inst_146559 = (inst_146557 < cnt);
var state_146593__$1 = state_146593;
if(cljs.core.truth_(inst_146559)){
var statearr_146597_146630 = state_146593__$1;
(statearr_146597_146630[(1)] = (6));

} else {
var statearr_146598_146631 = state_146593__$1;
(statearr_146598_146631[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146594 === (15))){
var inst_146589 = (state_146593[(2)]);
var state_146593__$1 = state_146593;
var statearr_146599_146632 = state_146593__$1;
(statearr_146599_146632[(2)] = inst_146589);

(statearr_146599_146632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146594 === (13))){
var inst_146582 = cljs.core.async.close_BANG_.call(null,out);
var state_146593__$1 = state_146593;
var statearr_146600_146633 = state_146593__$1;
(statearr_146600_146633[(2)] = inst_146582);

(statearr_146600_146633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146594 === (6))){
var state_146593__$1 = state_146593;
var statearr_146601_146634 = state_146593__$1;
(statearr_146601_146634[(2)] = null);

(statearr_146601_146634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146594 === (3))){
var inst_146591 = (state_146593[(2)]);
var state_146593__$1 = state_146593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_146593__$1,inst_146591);
} else {
if((state_val_146594 === (12))){
var inst_146579 = (state_146593[(8)]);
var inst_146579__$1 = (state_146593[(2)]);
var inst_146580 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_146579__$1);
var state_146593__$1 = (function (){var statearr_146602 = state_146593;
(statearr_146602[(8)] = inst_146579__$1);

return statearr_146602;
})();
if(cljs.core.truth_(inst_146580)){
var statearr_146603_146635 = state_146593__$1;
(statearr_146603_146635[(1)] = (13));

} else {
var statearr_146604_146636 = state_146593__$1;
(statearr_146604_146636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146594 === (2))){
var inst_146556 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_146557 = (0);
var state_146593__$1 = (function (){var statearr_146605 = state_146593;
(statearr_146605[(9)] = inst_146556);

(statearr_146605[(7)] = inst_146557);

return statearr_146605;
})();
var statearr_146606_146637 = state_146593__$1;
(statearr_146606_146637[(2)] = null);

(statearr_146606_146637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146594 === (11))){
var inst_146557 = (state_146593[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_146593,(10),Object,null,(9));
var inst_146566 = chs__$1.call(null,inst_146557);
var inst_146567 = done.call(null,inst_146557);
var inst_146568 = cljs.core.async.take_BANG_.call(null,inst_146566,inst_146567);
var state_146593__$1 = state_146593;
var statearr_146607_146638 = state_146593__$1;
(statearr_146607_146638[(2)] = inst_146568);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_146593__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146594 === (9))){
var inst_146557 = (state_146593[(7)]);
var inst_146570 = (state_146593[(2)]);
var inst_146571 = (inst_146557 + (1));
var inst_146557__$1 = inst_146571;
var state_146593__$1 = (function (){var statearr_146608 = state_146593;
(statearr_146608[(10)] = inst_146570);

(statearr_146608[(7)] = inst_146557__$1);

return statearr_146608;
})();
var statearr_146609_146639 = state_146593__$1;
(statearr_146609_146639[(2)] = null);

(statearr_146609_146639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146594 === (5))){
var inst_146577 = (state_146593[(2)]);
var state_146593__$1 = (function (){var statearr_146610 = state_146593;
(statearr_146610[(11)] = inst_146577);

return statearr_146610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_146593__$1,(12),dchan);
} else {
if((state_val_146594 === (14))){
var inst_146579 = (state_146593[(8)]);
var inst_146584 = cljs.core.apply.call(null,f,inst_146579);
var state_146593__$1 = state_146593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_146593__$1,(16),out,inst_146584);
} else {
if((state_val_146594 === (16))){
var inst_146586 = (state_146593[(2)]);
var state_146593__$1 = (function (){var statearr_146611 = state_146593;
(statearr_146611[(12)] = inst_146586);

return statearr_146611;
})();
var statearr_146612_146640 = state_146593__$1;
(statearr_146612_146640[(2)] = null);

(statearr_146612_146640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146594 === (10))){
var inst_146561 = (state_146593[(2)]);
var inst_146562 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_146593__$1 = (function (){var statearr_146613 = state_146593;
(statearr_146613[(13)] = inst_146561);

return statearr_146613;
})();
var statearr_146614_146641 = state_146593__$1;
(statearr_146614_146641[(2)] = inst_146562);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_146593__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146594 === (8))){
var inst_146575 = (state_146593[(2)]);
var state_146593__$1 = state_146593;
var statearr_146615_146642 = state_146593__$1;
(statearr_146615_146642[(2)] = inst_146575);

(statearr_146615_146642[(1)] = (5));


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
});})(c__15789__auto___146627,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15724__auto__,c__15789__auto___146627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_146619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_146619[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_146619[(1)] = (1));

return statearr_146619;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_146593){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_146593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e146620){if((e146620 instanceof Object)){
var ex__15728__auto__ = e146620;
var statearr_146621_146643 = state_146593;
(statearr_146621_146643[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_146593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e146620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__146644 = state_146593;
state_146593 = G__146644;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_146593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_146593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___146627,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15791__auto__ = (function (){var statearr_146622 = f__15790__auto__.call(null);
(statearr_146622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___146627);

return statearr_146622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___146627,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args146646 = [];
var len__14433__auto___146702 = arguments.length;
var i__14434__auto___146703 = (0);
while(true){
if((i__14434__auto___146703 < len__14433__auto___146702)){
args146646.push((arguments[i__14434__auto___146703]));

var G__146704 = (i__14434__auto___146703 + (1));
i__14434__auto___146703 = G__146704;
continue;
} else {
}
break;
}

var G__146648 = args146646.length;
switch (G__146648) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args146646.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___146706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___146706,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___146706,out){
return (function (state_146678){
var state_val_146679 = (state_146678[(1)]);
if((state_val_146679 === (7))){
var inst_146658 = (state_146678[(7)]);
var inst_146657 = (state_146678[(8)]);
var inst_146657__$1 = (state_146678[(2)]);
var inst_146658__$1 = cljs.core.nth.call(null,inst_146657__$1,(0),null);
var inst_146659 = cljs.core.nth.call(null,inst_146657__$1,(1),null);
var inst_146660 = (inst_146658__$1 == null);
var state_146678__$1 = (function (){var statearr_146680 = state_146678;
(statearr_146680[(7)] = inst_146658__$1);

(statearr_146680[(8)] = inst_146657__$1);

(statearr_146680[(9)] = inst_146659);

return statearr_146680;
})();
if(cljs.core.truth_(inst_146660)){
var statearr_146681_146707 = state_146678__$1;
(statearr_146681_146707[(1)] = (8));

} else {
var statearr_146682_146708 = state_146678__$1;
(statearr_146682_146708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146679 === (1))){
var inst_146649 = cljs.core.vec.call(null,chs);
var inst_146650 = inst_146649;
var state_146678__$1 = (function (){var statearr_146683 = state_146678;
(statearr_146683[(10)] = inst_146650);

return statearr_146683;
})();
var statearr_146684_146709 = state_146678__$1;
(statearr_146684_146709[(2)] = null);

(statearr_146684_146709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146679 === (4))){
var inst_146650 = (state_146678[(10)]);
var state_146678__$1 = state_146678;
return cljs.core.async.ioc_alts_BANG_.call(null,state_146678__$1,(7),inst_146650);
} else {
if((state_val_146679 === (6))){
var inst_146674 = (state_146678[(2)]);
var state_146678__$1 = state_146678;
var statearr_146685_146710 = state_146678__$1;
(statearr_146685_146710[(2)] = inst_146674);

(statearr_146685_146710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146679 === (3))){
var inst_146676 = (state_146678[(2)]);
var state_146678__$1 = state_146678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_146678__$1,inst_146676);
} else {
if((state_val_146679 === (2))){
var inst_146650 = (state_146678[(10)]);
var inst_146652 = cljs.core.count.call(null,inst_146650);
var inst_146653 = (inst_146652 > (0));
var state_146678__$1 = state_146678;
if(cljs.core.truth_(inst_146653)){
var statearr_146687_146711 = state_146678__$1;
(statearr_146687_146711[(1)] = (4));

} else {
var statearr_146688_146712 = state_146678__$1;
(statearr_146688_146712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146679 === (11))){
var inst_146650 = (state_146678[(10)]);
var inst_146667 = (state_146678[(2)]);
var tmp146686 = inst_146650;
var inst_146650__$1 = tmp146686;
var state_146678__$1 = (function (){var statearr_146689 = state_146678;
(statearr_146689[(10)] = inst_146650__$1);

(statearr_146689[(11)] = inst_146667);

return statearr_146689;
})();
var statearr_146690_146713 = state_146678__$1;
(statearr_146690_146713[(2)] = null);

(statearr_146690_146713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146679 === (9))){
var inst_146658 = (state_146678[(7)]);
var state_146678__$1 = state_146678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_146678__$1,(11),out,inst_146658);
} else {
if((state_val_146679 === (5))){
var inst_146672 = cljs.core.async.close_BANG_.call(null,out);
var state_146678__$1 = state_146678;
var statearr_146691_146714 = state_146678__$1;
(statearr_146691_146714[(2)] = inst_146672);

(statearr_146691_146714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146679 === (10))){
var inst_146670 = (state_146678[(2)]);
var state_146678__$1 = state_146678;
var statearr_146692_146715 = state_146678__$1;
(statearr_146692_146715[(2)] = inst_146670);

(statearr_146692_146715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146679 === (8))){
var inst_146658 = (state_146678[(7)]);
var inst_146650 = (state_146678[(10)]);
var inst_146657 = (state_146678[(8)]);
var inst_146659 = (state_146678[(9)]);
var inst_146662 = (function (){var cs = inst_146650;
var vec__146655 = inst_146657;
var v = inst_146658;
var c = inst_146659;
return ((function (cs,vec__146655,v,c,inst_146658,inst_146650,inst_146657,inst_146659,state_val_146679,c__15789__auto___146706,out){
return (function (p1__146645_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__146645_SHARP_);
});
;})(cs,vec__146655,v,c,inst_146658,inst_146650,inst_146657,inst_146659,state_val_146679,c__15789__auto___146706,out))
})();
var inst_146663 = cljs.core.filterv.call(null,inst_146662,inst_146650);
var inst_146650__$1 = inst_146663;
var state_146678__$1 = (function (){var statearr_146693 = state_146678;
(statearr_146693[(10)] = inst_146650__$1);

return statearr_146693;
})();
var statearr_146694_146716 = state_146678__$1;
(statearr_146694_146716[(2)] = null);

(statearr_146694_146716[(1)] = (2));


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
});})(c__15789__auto___146706,out))
;
return ((function (switch__15724__auto__,c__15789__auto___146706,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_146698 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_146698[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_146698[(1)] = (1));

return statearr_146698;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_146678){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_146678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e146699){if((e146699 instanceof Object)){
var ex__15728__auto__ = e146699;
var statearr_146700_146717 = state_146678;
(statearr_146700_146717[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_146678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e146699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__146718 = state_146678;
state_146678 = G__146718;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_146678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_146678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___146706,out))
})();
var state__15791__auto__ = (function (){var statearr_146701 = f__15790__auto__.call(null);
(statearr_146701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___146706);

return statearr_146701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___146706,out))
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
var args146719 = [];
var len__14433__auto___146768 = arguments.length;
var i__14434__auto___146769 = (0);
while(true){
if((i__14434__auto___146769 < len__14433__auto___146768)){
args146719.push((arguments[i__14434__auto___146769]));

var G__146770 = (i__14434__auto___146769 + (1));
i__14434__auto___146769 = G__146770;
continue;
} else {
}
break;
}

var G__146721 = args146719.length;
switch (G__146721) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args146719.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___146772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___146772,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___146772,out){
return (function (state_146745){
var state_val_146746 = (state_146745[(1)]);
if((state_val_146746 === (7))){
var inst_146727 = (state_146745[(7)]);
var inst_146727__$1 = (state_146745[(2)]);
var inst_146728 = (inst_146727__$1 == null);
var inst_146729 = cljs.core.not.call(null,inst_146728);
var state_146745__$1 = (function (){var statearr_146747 = state_146745;
(statearr_146747[(7)] = inst_146727__$1);

return statearr_146747;
})();
if(inst_146729){
var statearr_146748_146773 = state_146745__$1;
(statearr_146748_146773[(1)] = (8));

} else {
var statearr_146749_146774 = state_146745__$1;
(statearr_146749_146774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146746 === (1))){
var inst_146722 = (0);
var state_146745__$1 = (function (){var statearr_146750 = state_146745;
(statearr_146750[(8)] = inst_146722);

return statearr_146750;
})();
var statearr_146751_146775 = state_146745__$1;
(statearr_146751_146775[(2)] = null);

(statearr_146751_146775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146746 === (4))){
var state_146745__$1 = state_146745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_146745__$1,(7),ch);
} else {
if((state_val_146746 === (6))){
var inst_146740 = (state_146745[(2)]);
var state_146745__$1 = state_146745;
var statearr_146752_146776 = state_146745__$1;
(statearr_146752_146776[(2)] = inst_146740);

(statearr_146752_146776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146746 === (3))){
var inst_146742 = (state_146745[(2)]);
var inst_146743 = cljs.core.async.close_BANG_.call(null,out);
var state_146745__$1 = (function (){var statearr_146753 = state_146745;
(statearr_146753[(9)] = inst_146742);

return statearr_146753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_146745__$1,inst_146743);
} else {
if((state_val_146746 === (2))){
var inst_146722 = (state_146745[(8)]);
var inst_146724 = (inst_146722 < n);
var state_146745__$1 = state_146745;
if(cljs.core.truth_(inst_146724)){
var statearr_146754_146777 = state_146745__$1;
(statearr_146754_146777[(1)] = (4));

} else {
var statearr_146755_146778 = state_146745__$1;
(statearr_146755_146778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146746 === (11))){
var inst_146722 = (state_146745[(8)]);
var inst_146732 = (state_146745[(2)]);
var inst_146733 = (inst_146722 + (1));
var inst_146722__$1 = inst_146733;
var state_146745__$1 = (function (){var statearr_146756 = state_146745;
(statearr_146756[(8)] = inst_146722__$1);

(statearr_146756[(10)] = inst_146732);

return statearr_146756;
})();
var statearr_146757_146779 = state_146745__$1;
(statearr_146757_146779[(2)] = null);

(statearr_146757_146779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146746 === (9))){
var state_146745__$1 = state_146745;
var statearr_146758_146780 = state_146745__$1;
(statearr_146758_146780[(2)] = null);

(statearr_146758_146780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146746 === (5))){
var state_146745__$1 = state_146745;
var statearr_146759_146781 = state_146745__$1;
(statearr_146759_146781[(2)] = null);

(statearr_146759_146781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146746 === (10))){
var inst_146737 = (state_146745[(2)]);
var state_146745__$1 = state_146745;
var statearr_146760_146782 = state_146745__$1;
(statearr_146760_146782[(2)] = inst_146737);

(statearr_146760_146782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146746 === (8))){
var inst_146727 = (state_146745[(7)]);
var state_146745__$1 = state_146745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_146745__$1,(11),out,inst_146727);
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
});})(c__15789__auto___146772,out))
;
return ((function (switch__15724__auto__,c__15789__auto___146772,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_146764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_146764[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_146764[(1)] = (1));

return statearr_146764;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_146745){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_146745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e146765){if((e146765 instanceof Object)){
var ex__15728__auto__ = e146765;
var statearr_146766_146783 = state_146745;
(statearr_146766_146783[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_146745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e146765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__146784 = state_146745;
state_146745 = G__146784;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_146745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_146745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___146772,out))
})();
var state__15791__auto__ = (function (){var statearr_146767 = f__15790__auto__.call(null);
(statearr_146767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___146772);

return statearr_146767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___146772,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async146792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async146792 = (function (map_LT_,f,ch,meta146793){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta146793 = meta146793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async146792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_146794,meta146793__$1){
var self__ = this;
var _146794__$1 = this;
return (new cljs.core.async.t_cljs$core$async146792(self__.map_LT_,self__.f,self__.ch,meta146793__$1));
});

cljs.core.async.t_cljs$core$async146792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_146794){
var self__ = this;
var _146794__$1 = this;
return self__.meta146793;
});

cljs.core.async.t_cljs$core$async146792.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async146792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async146792.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async146792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async146792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async146795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async146795 = (function (map_LT_,f,ch,meta146793,_,fn1,meta146796){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta146793 = meta146793;
this._ = _;
this.fn1 = fn1;
this.meta146796 = meta146796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async146795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_146797,meta146796__$1){
var self__ = this;
var _146797__$1 = this;
return (new cljs.core.async.t_cljs$core$async146795(self__.map_LT_,self__.f,self__.ch,self__.meta146793,self__._,self__.fn1,meta146796__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async146795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_146797){
var self__ = this;
var _146797__$1 = this;
return self__.meta146796;
});})(___$1))
;

cljs.core.async.t_cljs$core$async146795.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async146795.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async146795.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async146795.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__146785_SHARP_){
return f1.call(null,(((p1__146785_SHARP_ == null))?null:self__.f.call(null,p1__146785_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async146795.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta146793","meta146793",639292906,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async146792","cljs.core.async/t_cljs$core$async146792",957453818,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta146796","meta146796",634737624,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async146795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async146795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async146795";

cljs.core.async.t_cljs$core$async146795.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async146795");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async146795 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async146795(map_LT___$1,f__$1,ch__$1,meta146793__$1,___$2,fn1__$1,meta146796){
return (new cljs.core.async.t_cljs$core$async146795(map_LT___$1,f__$1,ch__$1,meta146793__$1,___$2,fn1__$1,meta146796));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async146795(self__.map_LT_,self__.f,self__.ch,self__.meta146793,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async146792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async146792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async146792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta146793","meta146793",639292906,null)], null);
});

cljs.core.async.t_cljs$core$async146792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async146792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async146792";

cljs.core.async.t_cljs$core$async146792.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async146792");
});

cljs.core.async.__GT_t_cljs$core$async146792 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async146792(map_LT___$1,f__$1,ch__$1,meta146793){
return (new cljs.core.async.t_cljs$core$async146792(map_LT___$1,f__$1,ch__$1,meta146793));
});

}

return (new cljs.core.async.t_cljs$core$async146792(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async146801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async146801 = (function (map_GT_,f,ch,meta146802){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta146802 = meta146802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async146801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_146803,meta146802__$1){
var self__ = this;
var _146803__$1 = this;
return (new cljs.core.async.t_cljs$core$async146801(self__.map_GT_,self__.f,self__.ch,meta146802__$1));
});

cljs.core.async.t_cljs$core$async146801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_146803){
var self__ = this;
var _146803__$1 = this;
return self__.meta146802;
});

cljs.core.async.t_cljs$core$async146801.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async146801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async146801.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async146801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async146801.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async146801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async146801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta146802","meta146802",403724989,null)], null);
});

cljs.core.async.t_cljs$core$async146801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async146801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async146801";

cljs.core.async.t_cljs$core$async146801.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async146801");
});

cljs.core.async.__GT_t_cljs$core$async146801 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async146801(map_GT___$1,f__$1,ch__$1,meta146802){
return (new cljs.core.async.t_cljs$core$async146801(map_GT___$1,f__$1,ch__$1,meta146802));
});

}

return (new cljs.core.async.t_cljs$core$async146801(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async146807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async146807 = (function (filter_GT_,p,ch,meta146808){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta146808 = meta146808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async146807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_146809,meta146808__$1){
var self__ = this;
var _146809__$1 = this;
return (new cljs.core.async.t_cljs$core$async146807(self__.filter_GT_,self__.p,self__.ch,meta146808__$1));
});

cljs.core.async.t_cljs$core$async146807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_146809){
var self__ = this;
var _146809__$1 = this;
return self__.meta146808;
});

cljs.core.async.t_cljs$core$async146807.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async146807.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async146807.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async146807.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async146807.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async146807.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async146807.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async146807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta146808","meta146808",-1871283329,null)], null);
});

cljs.core.async.t_cljs$core$async146807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async146807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async146807";

cljs.core.async.t_cljs$core$async146807.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async146807");
});

cljs.core.async.__GT_t_cljs$core$async146807 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async146807(filter_GT___$1,p__$1,ch__$1,meta146808){
return (new cljs.core.async.t_cljs$core$async146807(filter_GT___$1,p__$1,ch__$1,meta146808));
});

}

return (new cljs.core.async.t_cljs$core$async146807(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args146810 = [];
var len__14433__auto___146854 = arguments.length;
var i__14434__auto___146855 = (0);
while(true){
if((i__14434__auto___146855 < len__14433__auto___146854)){
args146810.push((arguments[i__14434__auto___146855]));

var G__146856 = (i__14434__auto___146855 + (1));
i__14434__auto___146855 = G__146856;
continue;
} else {
}
break;
}

var G__146812 = args146810.length;
switch (G__146812) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args146810.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___146858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___146858,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___146858,out){
return (function (state_146833){
var state_val_146834 = (state_146833[(1)]);
if((state_val_146834 === (7))){
var inst_146829 = (state_146833[(2)]);
var state_146833__$1 = state_146833;
var statearr_146835_146859 = state_146833__$1;
(statearr_146835_146859[(2)] = inst_146829);

(statearr_146835_146859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146834 === (1))){
var state_146833__$1 = state_146833;
var statearr_146836_146860 = state_146833__$1;
(statearr_146836_146860[(2)] = null);

(statearr_146836_146860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146834 === (4))){
var inst_146815 = (state_146833[(7)]);
var inst_146815__$1 = (state_146833[(2)]);
var inst_146816 = (inst_146815__$1 == null);
var state_146833__$1 = (function (){var statearr_146837 = state_146833;
(statearr_146837[(7)] = inst_146815__$1);

return statearr_146837;
})();
if(cljs.core.truth_(inst_146816)){
var statearr_146838_146861 = state_146833__$1;
(statearr_146838_146861[(1)] = (5));

} else {
var statearr_146839_146862 = state_146833__$1;
(statearr_146839_146862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146834 === (6))){
var inst_146815 = (state_146833[(7)]);
var inst_146820 = p.call(null,inst_146815);
var state_146833__$1 = state_146833;
if(cljs.core.truth_(inst_146820)){
var statearr_146840_146863 = state_146833__$1;
(statearr_146840_146863[(1)] = (8));

} else {
var statearr_146841_146864 = state_146833__$1;
(statearr_146841_146864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146834 === (3))){
var inst_146831 = (state_146833[(2)]);
var state_146833__$1 = state_146833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_146833__$1,inst_146831);
} else {
if((state_val_146834 === (2))){
var state_146833__$1 = state_146833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_146833__$1,(4),ch);
} else {
if((state_val_146834 === (11))){
var inst_146823 = (state_146833[(2)]);
var state_146833__$1 = state_146833;
var statearr_146842_146865 = state_146833__$1;
(statearr_146842_146865[(2)] = inst_146823);

(statearr_146842_146865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146834 === (9))){
var state_146833__$1 = state_146833;
var statearr_146843_146866 = state_146833__$1;
(statearr_146843_146866[(2)] = null);

(statearr_146843_146866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146834 === (5))){
var inst_146818 = cljs.core.async.close_BANG_.call(null,out);
var state_146833__$1 = state_146833;
var statearr_146844_146867 = state_146833__$1;
(statearr_146844_146867[(2)] = inst_146818);

(statearr_146844_146867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146834 === (10))){
var inst_146826 = (state_146833[(2)]);
var state_146833__$1 = (function (){var statearr_146845 = state_146833;
(statearr_146845[(8)] = inst_146826);

return statearr_146845;
})();
var statearr_146846_146868 = state_146833__$1;
(statearr_146846_146868[(2)] = null);

(statearr_146846_146868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_146834 === (8))){
var inst_146815 = (state_146833[(7)]);
var state_146833__$1 = state_146833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_146833__$1,(11),out,inst_146815);
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
});})(c__15789__auto___146858,out))
;
return ((function (switch__15724__auto__,c__15789__auto___146858,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_146850 = [null,null,null,null,null,null,null,null,null];
(statearr_146850[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_146850[(1)] = (1));

return statearr_146850;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_146833){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_146833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e146851){if((e146851 instanceof Object)){
var ex__15728__auto__ = e146851;
var statearr_146852_146869 = state_146833;
(statearr_146852_146869[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_146833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e146851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__146870 = state_146833;
state_146833 = G__146870;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_146833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_146833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___146858,out))
})();
var state__15791__auto__ = (function (){var statearr_146853 = f__15790__auto__.call(null);
(statearr_146853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___146858);

return statearr_146853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___146858,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args146871 = [];
var len__14433__auto___146874 = arguments.length;
var i__14434__auto___146875 = (0);
while(true){
if((i__14434__auto___146875 < len__14433__auto___146874)){
args146871.push((arguments[i__14434__auto___146875]));

var G__146876 = (i__14434__auto___146875 + (1));
i__14434__auto___146875 = G__146876;
continue;
} else {
}
break;
}

var G__146873 = args146871.length;
switch (G__146873) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args146871.length)].join('')));

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
return (function (state_147043){
var state_val_147044 = (state_147043[(1)]);
if((state_val_147044 === (7))){
var inst_147039 = (state_147043[(2)]);
var state_147043__$1 = state_147043;
var statearr_147045_147086 = state_147043__$1;
(statearr_147045_147086[(2)] = inst_147039);

(statearr_147045_147086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (20))){
var inst_147009 = (state_147043[(7)]);
var inst_147020 = (state_147043[(2)]);
var inst_147021 = cljs.core.next.call(null,inst_147009);
var inst_146995 = inst_147021;
var inst_146996 = null;
var inst_146997 = (0);
var inst_146998 = (0);
var state_147043__$1 = (function (){var statearr_147046 = state_147043;
(statearr_147046[(8)] = inst_146996);

(statearr_147046[(9)] = inst_146995);

(statearr_147046[(10)] = inst_146998);

(statearr_147046[(11)] = inst_146997);

(statearr_147046[(12)] = inst_147020);

return statearr_147046;
})();
var statearr_147047_147087 = state_147043__$1;
(statearr_147047_147087[(2)] = null);

(statearr_147047_147087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (1))){
var state_147043__$1 = state_147043;
var statearr_147048_147088 = state_147043__$1;
(statearr_147048_147088[(2)] = null);

(statearr_147048_147088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (4))){
var inst_146984 = (state_147043[(13)]);
var inst_146984__$1 = (state_147043[(2)]);
var inst_146985 = (inst_146984__$1 == null);
var state_147043__$1 = (function (){var statearr_147049 = state_147043;
(statearr_147049[(13)] = inst_146984__$1);

return statearr_147049;
})();
if(cljs.core.truth_(inst_146985)){
var statearr_147050_147089 = state_147043__$1;
(statearr_147050_147089[(1)] = (5));

} else {
var statearr_147051_147090 = state_147043__$1;
(statearr_147051_147090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (15))){
var state_147043__$1 = state_147043;
var statearr_147055_147091 = state_147043__$1;
(statearr_147055_147091[(2)] = null);

(statearr_147055_147091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (21))){
var state_147043__$1 = state_147043;
var statearr_147056_147092 = state_147043__$1;
(statearr_147056_147092[(2)] = null);

(statearr_147056_147092[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (13))){
var inst_146996 = (state_147043[(8)]);
var inst_146995 = (state_147043[(9)]);
var inst_146998 = (state_147043[(10)]);
var inst_146997 = (state_147043[(11)]);
var inst_147005 = (state_147043[(2)]);
var inst_147006 = (inst_146998 + (1));
var tmp147052 = inst_146996;
var tmp147053 = inst_146995;
var tmp147054 = inst_146997;
var inst_146995__$1 = tmp147053;
var inst_146996__$1 = tmp147052;
var inst_146997__$1 = tmp147054;
var inst_146998__$1 = inst_147006;
var state_147043__$1 = (function (){var statearr_147057 = state_147043;
(statearr_147057[(8)] = inst_146996__$1);

(statearr_147057[(9)] = inst_146995__$1);

(statearr_147057[(14)] = inst_147005);

(statearr_147057[(10)] = inst_146998__$1);

(statearr_147057[(11)] = inst_146997__$1);

return statearr_147057;
})();
var statearr_147058_147093 = state_147043__$1;
(statearr_147058_147093[(2)] = null);

(statearr_147058_147093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (22))){
var state_147043__$1 = state_147043;
var statearr_147059_147094 = state_147043__$1;
(statearr_147059_147094[(2)] = null);

(statearr_147059_147094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (6))){
var inst_146984 = (state_147043[(13)]);
var inst_146993 = f.call(null,inst_146984);
var inst_146994 = cljs.core.seq.call(null,inst_146993);
var inst_146995 = inst_146994;
var inst_146996 = null;
var inst_146997 = (0);
var inst_146998 = (0);
var state_147043__$1 = (function (){var statearr_147060 = state_147043;
(statearr_147060[(8)] = inst_146996);

(statearr_147060[(9)] = inst_146995);

(statearr_147060[(10)] = inst_146998);

(statearr_147060[(11)] = inst_146997);

return statearr_147060;
})();
var statearr_147061_147095 = state_147043__$1;
(statearr_147061_147095[(2)] = null);

(statearr_147061_147095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (17))){
var inst_147009 = (state_147043[(7)]);
var inst_147013 = cljs.core.chunk_first.call(null,inst_147009);
var inst_147014 = cljs.core.chunk_rest.call(null,inst_147009);
var inst_147015 = cljs.core.count.call(null,inst_147013);
var inst_146995 = inst_147014;
var inst_146996 = inst_147013;
var inst_146997 = inst_147015;
var inst_146998 = (0);
var state_147043__$1 = (function (){var statearr_147062 = state_147043;
(statearr_147062[(8)] = inst_146996);

(statearr_147062[(9)] = inst_146995);

(statearr_147062[(10)] = inst_146998);

(statearr_147062[(11)] = inst_146997);

return statearr_147062;
})();
var statearr_147063_147096 = state_147043__$1;
(statearr_147063_147096[(2)] = null);

(statearr_147063_147096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (3))){
var inst_147041 = (state_147043[(2)]);
var state_147043__$1 = state_147043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_147043__$1,inst_147041);
} else {
if((state_val_147044 === (12))){
var inst_147029 = (state_147043[(2)]);
var state_147043__$1 = state_147043;
var statearr_147064_147097 = state_147043__$1;
(statearr_147064_147097[(2)] = inst_147029);

(statearr_147064_147097[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (2))){
var state_147043__$1 = state_147043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_147043__$1,(4),in$);
} else {
if((state_val_147044 === (23))){
var inst_147037 = (state_147043[(2)]);
var state_147043__$1 = state_147043;
var statearr_147065_147098 = state_147043__$1;
(statearr_147065_147098[(2)] = inst_147037);

(statearr_147065_147098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (19))){
var inst_147024 = (state_147043[(2)]);
var state_147043__$1 = state_147043;
var statearr_147066_147099 = state_147043__$1;
(statearr_147066_147099[(2)] = inst_147024);

(statearr_147066_147099[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (11))){
var inst_146995 = (state_147043[(9)]);
var inst_147009 = (state_147043[(7)]);
var inst_147009__$1 = cljs.core.seq.call(null,inst_146995);
var state_147043__$1 = (function (){var statearr_147067 = state_147043;
(statearr_147067[(7)] = inst_147009__$1);

return statearr_147067;
})();
if(inst_147009__$1){
var statearr_147068_147100 = state_147043__$1;
(statearr_147068_147100[(1)] = (14));

} else {
var statearr_147069_147101 = state_147043__$1;
(statearr_147069_147101[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (9))){
var inst_147031 = (state_147043[(2)]);
var inst_147032 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_147043__$1 = (function (){var statearr_147070 = state_147043;
(statearr_147070[(15)] = inst_147031);

return statearr_147070;
})();
if(cljs.core.truth_(inst_147032)){
var statearr_147071_147102 = state_147043__$1;
(statearr_147071_147102[(1)] = (21));

} else {
var statearr_147072_147103 = state_147043__$1;
(statearr_147072_147103[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (5))){
var inst_146987 = cljs.core.async.close_BANG_.call(null,out);
var state_147043__$1 = state_147043;
var statearr_147073_147104 = state_147043__$1;
(statearr_147073_147104[(2)] = inst_146987);

(statearr_147073_147104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (14))){
var inst_147009 = (state_147043[(7)]);
var inst_147011 = cljs.core.chunked_seq_QMARK_.call(null,inst_147009);
var state_147043__$1 = state_147043;
if(inst_147011){
var statearr_147074_147105 = state_147043__$1;
(statearr_147074_147105[(1)] = (17));

} else {
var statearr_147075_147106 = state_147043__$1;
(statearr_147075_147106[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (16))){
var inst_147027 = (state_147043[(2)]);
var state_147043__$1 = state_147043;
var statearr_147076_147107 = state_147043__$1;
(statearr_147076_147107[(2)] = inst_147027);

(statearr_147076_147107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147044 === (10))){
var inst_146996 = (state_147043[(8)]);
var inst_146998 = (state_147043[(10)]);
var inst_147003 = cljs.core._nth.call(null,inst_146996,inst_146998);
var state_147043__$1 = state_147043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_147043__$1,(13),out,inst_147003);
} else {
if((state_val_147044 === (18))){
var inst_147009 = (state_147043[(7)]);
var inst_147018 = cljs.core.first.call(null,inst_147009);
var state_147043__$1 = state_147043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_147043__$1,(20),out,inst_147018);
} else {
if((state_val_147044 === (8))){
var inst_146998 = (state_147043[(10)]);
var inst_146997 = (state_147043[(11)]);
var inst_147000 = (inst_146998 < inst_146997);
var inst_147001 = inst_147000;
var state_147043__$1 = state_147043;
if(cljs.core.truth_(inst_147001)){
var statearr_147077_147108 = state_147043__$1;
(statearr_147077_147108[(1)] = (10));

} else {
var statearr_147078_147109 = state_147043__$1;
(statearr_147078_147109[(1)] = (11));

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
var statearr_147082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_147082[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__);

(statearr_147082[(1)] = (1));

return statearr_147082;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____1 = (function (state_147043){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_147043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e147083){if((e147083 instanceof Object)){
var ex__15728__auto__ = e147083;
var statearr_147084_147110 = state_147043;
(statearr_147084_147110[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_147043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e147083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__147111 = state_147043;
state_147043 = G__147111;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__ = function(state_147043){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____1.call(this,state_147043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_147085 = f__15790__auto__.call(null);
(statearr_147085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_147085;
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
var args147112 = [];
var len__14433__auto___147115 = arguments.length;
var i__14434__auto___147116 = (0);
while(true){
if((i__14434__auto___147116 < len__14433__auto___147115)){
args147112.push((arguments[i__14434__auto___147116]));

var G__147117 = (i__14434__auto___147116 + (1));
i__14434__auto___147116 = G__147117;
continue;
} else {
}
break;
}

var G__147114 = args147112.length;
switch (G__147114) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args147112.length)].join('')));

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
var args147119 = [];
var len__14433__auto___147122 = arguments.length;
var i__14434__auto___147123 = (0);
while(true){
if((i__14434__auto___147123 < len__14433__auto___147122)){
args147119.push((arguments[i__14434__auto___147123]));

var G__147124 = (i__14434__auto___147123 + (1));
i__14434__auto___147123 = G__147124;
continue;
} else {
}
break;
}

var G__147121 = args147119.length;
switch (G__147121) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args147119.length)].join('')));

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
var args147126 = [];
var len__14433__auto___147177 = arguments.length;
var i__14434__auto___147178 = (0);
while(true){
if((i__14434__auto___147178 < len__14433__auto___147177)){
args147126.push((arguments[i__14434__auto___147178]));

var G__147179 = (i__14434__auto___147178 + (1));
i__14434__auto___147178 = G__147179;
continue;
} else {
}
break;
}

var G__147128 = args147126.length;
switch (G__147128) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args147126.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___147181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___147181,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___147181,out){
return (function (state_147152){
var state_val_147153 = (state_147152[(1)]);
if((state_val_147153 === (7))){
var inst_147147 = (state_147152[(2)]);
var state_147152__$1 = state_147152;
var statearr_147154_147182 = state_147152__$1;
(statearr_147154_147182[(2)] = inst_147147);

(statearr_147154_147182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147153 === (1))){
var inst_147129 = null;
var state_147152__$1 = (function (){var statearr_147155 = state_147152;
(statearr_147155[(7)] = inst_147129);

return statearr_147155;
})();
var statearr_147156_147183 = state_147152__$1;
(statearr_147156_147183[(2)] = null);

(statearr_147156_147183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147153 === (4))){
var inst_147132 = (state_147152[(8)]);
var inst_147132__$1 = (state_147152[(2)]);
var inst_147133 = (inst_147132__$1 == null);
var inst_147134 = cljs.core.not.call(null,inst_147133);
var state_147152__$1 = (function (){var statearr_147157 = state_147152;
(statearr_147157[(8)] = inst_147132__$1);

return statearr_147157;
})();
if(inst_147134){
var statearr_147158_147184 = state_147152__$1;
(statearr_147158_147184[(1)] = (5));

} else {
var statearr_147159_147185 = state_147152__$1;
(statearr_147159_147185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147153 === (6))){
var state_147152__$1 = state_147152;
var statearr_147160_147186 = state_147152__$1;
(statearr_147160_147186[(2)] = null);

(statearr_147160_147186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147153 === (3))){
var inst_147149 = (state_147152[(2)]);
var inst_147150 = cljs.core.async.close_BANG_.call(null,out);
var state_147152__$1 = (function (){var statearr_147161 = state_147152;
(statearr_147161[(9)] = inst_147149);

return statearr_147161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_147152__$1,inst_147150);
} else {
if((state_val_147153 === (2))){
var state_147152__$1 = state_147152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_147152__$1,(4),ch);
} else {
if((state_val_147153 === (11))){
var inst_147132 = (state_147152[(8)]);
var inst_147141 = (state_147152[(2)]);
var inst_147129 = inst_147132;
var state_147152__$1 = (function (){var statearr_147162 = state_147152;
(statearr_147162[(10)] = inst_147141);

(statearr_147162[(7)] = inst_147129);

return statearr_147162;
})();
var statearr_147163_147187 = state_147152__$1;
(statearr_147163_147187[(2)] = null);

(statearr_147163_147187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147153 === (9))){
var inst_147132 = (state_147152[(8)]);
var state_147152__$1 = state_147152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_147152__$1,(11),out,inst_147132);
} else {
if((state_val_147153 === (5))){
var inst_147132 = (state_147152[(8)]);
var inst_147129 = (state_147152[(7)]);
var inst_147136 = cljs.core._EQ_.call(null,inst_147132,inst_147129);
var state_147152__$1 = state_147152;
if(inst_147136){
var statearr_147165_147188 = state_147152__$1;
(statearr_147165_147188[(1)] = (8));

} else {
var statearr_147166_147189 = state_147152__$1;
(statearr_147166_147189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147153 === (10))){
var inst_147144 = (state_147152[(2)]);
var state_147152__$1 = state_147152;
var statearr_147167_147190 = state_147152__$1;
(statearr_147167_147190[(2)] = inst_147144);

(statearr_147167_147190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147153 === (8))){
var inst_147129 = (state_147152[(7)]);
var tmp147164 = inst_147129;
var inst_147129__$1 = tmp147164;
var state_147152__$1 = (function (){var statearr_147168 = state_147152;
(statearr_147168[(7)] = inst_147129__$1);

return statearr_147168;
})();
var statearr_147169_147191 = state_147152__$1;
(statearr_147169_147191[(2)] = null);

(statearr_147169_147191[(1)] = (2));


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
});})(c__15789__auto___147181,out))
;
return ((function (switch__15724__auto__,c__15789__auto___147181,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_147173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_147173[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_147173[(1)] = (1));

return statearr_147173;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_147152){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_147152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e147174){if((e147174 instanceof Object)){
var ex__15728__auto__ = e147174;
var statearr_147175_147192 = state_147152;
(statearr_147175_147192[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_147152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e147174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__147193 = state_147152;
state_147152 = G__147193;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_147152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_147152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___147181,out))
})();
var state__15791__auto__ = (function (){var statearr_147176 = f__15790__auto__.call(null);
(statearr_147176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___147181);

return statearr_147176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___147181,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args147194 = [];
var len__14433__auto___147264 = arguments.length;
var i__14434__auto___147265 = (0);
while(true){
if((i__14434__auto___147265 < len__14433__auto___147264)){
args147194.push((arguments[i__14434__auto___147265]));

var G__147266 = (i__14434__auto___147265 + (1));
i__14434__auto___147265 = G__147266;
continue;
} else {
}
break;
}

var G__147196 = args147194.length;
switch (G__147196) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args147194.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___147268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___147268,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___147268,out){
return (function (state_147234){
var state_val_147235 = (state_147234[(1)]);
if((state_val_147235 === (7))){
var inst_147230 = (state_147234[(2)]);
var state_147234__$1 = state_147234;
var statearr_147236_147269 = state_147234__$1;
(statearr_147236_147269[(2)] = inst_147230);

(statearr_147236_147269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147235 === (1))){
var inst_147197 = (new Array(n));
var inst_147198 = inst_147197;
var inst_147199 = (0);
var state_147234__$1 = (function (){var statearr_147237 = state_147234;
(statearr_147237[(7)] = inst_147199);

(statearr_147237[(8)] = inst_147198);

return statearr_147237;
})();
var statearr_147238_147270 = state_147234__$1;
(statearr_147238_147270[(2)] = null);

(statearr_147238_147270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147235 === (4))){
var inst_147202 = (state_147234[(9)]);
var inst_147202__$1 = (state_147234[(2)]);
var inst_147203 = (inst_147202__$1 == null);
var inst_147204 = cljs.core.not.call(null,inst_147203);
var state_147234__$1 = (function (){var statearr_147239 = state_147234;
(statearr_147239[(9)] = inst_147202__$1);

return statearr_147239;
})();
if(inst_147204){
var statearr_147240_147271 = state_147234__$1;
(statearr_147240_147271[(1)] = (5));

} else {
var statearr_147241_147272 = state_147234__$1;
(statearr_147241_147272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147235 === (15))){
var inst_147224 = (state_147234[(2)]);
var state_147234__$1 = state_147234;
var statearr_147242_147273 = state_147234__$1;
(statearr_147242_147273[(2)] = inst_147224);

(statearr_147242_147273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147235 === (13))){
var state_147234__$1 = state_147234;
var statearr_147243_147274 = state_147234__$1;
(statearr_147243_147274[(2)] = null);

(statearr_147243_147274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147235 === (6))){
var inst_147199 = (state_147234[(7)]);
var inst_147220 = (inst_147199 > (0));
var state_147234__$1 = state_147234;
if(cljs.core.truth_(inst_147220)){
var statearr_147244_147275 = state_147234__$1;
(statearr_147244_147275[(1)] = (12));

} else {
var statearr_147245_147276 = state_147234__$1;
(statearr_147245_147276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147235 === (3))){
var inst_147232 = (state_147234[(2)]);
var state_147234__$1 = state_147234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_147234__$1,inst_147232);
} else {
if((state_val_147235 === (12))){
var inst_147198 = (state_147234[(8)]);
var inst_147222 = cljs.core.vec.call(null,inst_147198);
var state_147234__$1 = state_147234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_147234__$1,(15),out,inst_147222);
} else {
if((state_val_147235 === (2))){
var state_147234__$1 = state_147234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_147234__$1,(4),ch);
} else {
if((state_val_147235 === (11))){
var inst_147214 = (state_147234[(2)]);
var inst_147215 = (new Array(n));
var inst_147198 = inst_147215;
var inst_147199 = (0);
var state_147234__$1 = (function (){var statearr_147246 = state_147234;
(statearr_147246[(10)] = inst_147214);

(statearr_147246[(7)] = inst_147199);

(statearr_147246[(8)] = inst_147198);

return statearr_147246;
})();
var statearr_147247_147277 = state_147234__$1;
(statearr_147247_147277[(2)] = null);

(statearr_147247_147277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147235 === (9))){
var inst_147198 = (state_147234[(8)]);
var inst_147212 = cljs.core.vec.call(null,inst_147198);
var state_147234__$1 = state_147234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_147234__$1,(11),out,inst_147212);
} else {
if((state_val_147235 === (5))){
var inst_147202 = (state_147234[(9)]);
var inst_147207 = (state_147234[(11)]);
var inst_147199 = (state_147234[(7)]);
var inst_147198 = (state_147234[(8)]);
var inst_147206 = (inst_147198[inst_147199] = inst_147202);
var inst_147207__$1 = (inst_147199 + (1));
var inst_147208 = (inst_147207__$1 < n);
var state_147234__$1 = (function (){var statearr_147248 = state_147234;
(statearr_147248[(12)] = inst_147206);

(statearr_147248[(11)] = inst_147207__$1);

return statearr_147248;
})();
if(cljs.core.truth_(inst_147208)){
var statearr_147249_147278 = state_147234__$1;
(statearr_147249_147278[(1)] = (8));

} else {
var statearr_147250_147279 = state_147234__$1;
(statearr_147250_147279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147235 === (14))){
var inst_147227 = (state_147234[(2)]);
var inst_147228 = cljs.core.async.close_BANG_.call(null,out);
var state_147234__$1 = (function (){var statearr_147252 = state_147234;
(statearr_147252[(13)] = inst_147227);

return statearr_147252;
})();
var statearr_147253_147280 = state_147234__$1;
(statearr_147253_147280[(2)] = inst_147228);

(statearr_147253_147280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147235 === (10))){
var inst_147218 = (state_147234[(2)]);
var state_147234__$1 = state_147234;
var statearr_147254_147281 = state_147234__$1;
(statearr_147254_147281[(2)] = inst_147218);

(statearr_147254_147281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147235 === (8))){
var inst_147207 = (state_147234[(11)]);
var inst_147198 = (state_147234[(8)]);
var tmp147251 = inst_147198;
var inst_147198__$1 = tmp147251;
var inst_147199 = inst_147207;
var state_147234__$1 = (function (){var statearr_147255 = state_147234;
(statearr_147255[(7)] = inst_147199);

(statearr_147255[(8)] = inst_147198__$1);

return statearr_147255;
})();
var statearr_147256_147282 = state_147234__$1;
(statearr_147256_147282[(2)] = null);

(statearr_147256_147282[(1)] = (2));


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
});})(c__15789__auto___147268,out))
;
return ((function (switch__15724__auto__,c__15789__auto___147268,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_147260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_147260[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_147260[(1)] = (1));

return statearr_147260;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_147234){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_147234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e147261){if((e147261 instanceof Object)){
var ex__15728__auto__ = e147261;
var statearr_147262_147283 = state_147234;
(statearr_147262_147283[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_147234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e147261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__147284 = state_147234;
state_147234 = G__147284;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_147234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_147234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___147268,out))
})();
var state__15791__auto__ = (function (){var statearr_147263 = f__15790__auto__.call(null);
(statearr_147263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___147268);

return statearr_147263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___147268,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args147285 = [];
var len__14433__auto___147359 = arguments.length;
var i__14434__auto___147360 = (0);
while(true){
if((i__14434__auto___147360 < len__14433__auto___147359)){
args147285.push((arguments[i__14434__auto___147360]));

var G__147361 = (i__14434__auto___147360 + (1));
i__14434__auto___147360 = G__147361;
continue;
} else {
}
break;
}

var G__147287 = args147285.length;
switch (G__147287) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args147285.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___147363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___147363,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___147363,out){
return (function (state_147329){
var state_val_147330 = (state_147329[(1)]);
if((state_val_147330 === (7))){
var inst_147325 = (state_147329[(2)]);
var state_147329__$1 = state_147329;
var statearr_147331_147364 = state_147329__$1;
(statearr_147331_147364[(2)] = inst_147325);

(statearr_147331_147364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147330 === (1))){
var inst_147288 = [];
var inst_147289 = inst_147288;
var inst_147290 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_147329__$1 = (function (){var statearr_147332 = state_147329;
(statearr_147332[(7)] = inst_147289);

(statearr_147332[(8)] = inst_147290);

return statearr_147332;
})();
var statearr_147333_147365 = state_147329__$1;
(statearr_147333_147365[(2)] = null);

(statearr_147333_147365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147330 === (4))){
var inst_147293 = (state_147329[(9)]);
var inst_147293__$1 = (state_147329[(2)]);
var inst_147294 = (inst_147293__$1 == null);
var inst_147295 = cljs.core.not.call(null,inst_147294);
var state_147329__$1 = (function (){var statearr_147334 = state_147329;
(statearr_147334[(9)] = inst_147293__$1);

return statearr_147334;
})();
if(inst_147295){
var statearr_147335_147366 = state_147329__$1;
(statearr_147335_147366[(1)] = (5));

} else {
var statearr_147336_147367 = state_147329__$1;
(statearr_147336_147367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147330 === (15))){
var inst_147319 = (state_147329[(2)]);
var state_147329__$1 = state_147329;
var statearr_147337_147368 = state_147329__$1;
(statearr_147337_147368[(2)] = inst_147319);

(statearr_147337_147368[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147330 === (13))){
var state_147329__$1 = state_147329;
var statearr_147338_147369 = state_147329__$1;
(statearr_147338_147369[(2)] = null);

(statearr_147338_147369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147330 === (6))){
var inst_147289 = (state_147329[(7)]);
var inst_147314 = inst_147289.length;
var inst_147315 = (inst_147314 > (0));
var state_147329__$1 = state_147329;
if(cljs.core.truth_(inst_147315)){
var statearr_147339_147370 = state_147329__$1;
(statearr_147339_147370[(1)] = (12));

} else {
var statearr_147340_147371 = state_147329__$1;
(statearr_147340_147371[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147330 === (3))){
var inst_147327 = (state_147329[(2)]);
var state_147329__$1 = state_147329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_147329__$1,inst_147327);
} else {
if((state_val_147330 === (12))){
var inst_147289 = (state_147329[(7)]);
var inst_147317 = cljs.core.vec.call(null,inst_147289);
var state_147329__$1 = state_147329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_147329__$1,(15),out,inst_147317);
} else {
if((state_val_147330 === (2))){
var state_147329__$1 = state_147329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_147329__$1,(4),ch);
} else {
if((state_val_147330 === (11))){
var inst_147297 = (state_147329[(10)]);
var inst_147293 = (state_147329[(9)]);
var inst_147307 = (state_147329[(2)]);
var inst_147308 = [];
var inst_147309 = inst_147308.push(inst_147293);
var inst_147289 = inst_147308;
var inst_147290 = inst_147297;
var state_147329__$1 = (function (){var statearr_147341 = state_147329;
(statearr_147341[(7)] = inst_147289);

(statearr_147341[(11)] = inst_147309);

(statearr_147341[(8)] = inst_147290);

(statearr_147341[(12)] = inst_147307);

return statearr_147341;
})();
var statearr_147342_147372 = state_147329__$1;
(statearr_147342_147372[(2)] = null);

(statearr_147342_147372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147330 === (9))){
var inst_147289 = (state_147329[(7)]);
var inst_147305 = cljs.core.vec.call(null,inst_147289);
var state_147329__$1 = state_147329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_147329__$1,(11),out,inst_147305);
} else {
if((state_val_147330 === (5))){
var inst_147297 = (state_147329[(10)]);
var inst_147290 = (state_147329[(8)]);
var inst_147293 = (state_147329[(9)]);
var inst_147297__$1 = f.call(null,inst_147293);
var inst_147298 = cljs.core._EQ_.call(null,inst_147297__$1,inst_147290);
var inst_147299 = cljs.core.keyword_identical_QMARK_.call(null,inst_147290,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_147300 = (inst_147298) || (inst_147299);
var state_147329__$1 = (function (){var statearr_147343 = state_147329;
(statearr_147343[(10)] = inst_147297__$1);

return statearr_147343;
})();
if(cljs.core.truth_(inst_147300)){
var statearr_147344_147373 = state_147329__$1;
(statearr_147344_147373[(1)] = (8));

} else {
var statearr_147345_147374 = state_147329__$1;
(statearr_147345_147374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147330 === (14))){
var inst_147322 = (state_147329[(2)]);
var inst_147323 = cljs.core.async.close_BANG_.call(null,out);
var state_147329__$1 = (function (){var statearr_147347 = state_147329;
(statearr_147347[(13)] = inst_147322);

return statearr_147347;
})();
var statearr_147348_147375 = state_147329__$1;
(statearr_147348_147375[(2)] = inst_147323);

(statearr_147348_147375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147330 === (10))){
var inst_147312 = (state_147329[(2)]);
var state_147329__$1 = state_147329;
var statearr_147349_147376 = state_147329__$1;
(statearr_147349_147376[(2)] = inst_147312);

(statearr_147349_147376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_147330 === (8))){
var inst_147289 = (state_147329[(7)]);
var inst_147297 = (state_147329[(10)]);
var inst_147293 = (state_147329[(9)]);
var inst_147302 = inst_147289.push(inst_147293);
var tmp147346 = inst_147289;
var inst_147289__$1 = tmp147346;
var inst_147290 = inst_147297;
var state_147329__$1 = (function (){var statearr_147350 = state_147329;
(statearr_147350[(7)] = inst_147289__$1);

(statearr_147350[(14)] = inst_147302);

(statearr_147350[(8)] = inst_147290);

return statearr_147350;
})();
var statearr_147351_147377 = state_147329__$1;
(statearr_147351_147377[(2)] = null);

(statearr_147351_147377[(1)] = (2));


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
});})(c__15789__auto___147363,out))
;
return ((function (switch__15724__auto__,c__15789__auto___147363,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_147355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_147355[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_147355[(1)] = (1));

return statearr_147355;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_147329){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_147329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e147356){if((e147356 instanceof Object)){
var ex__15728__auto__ = e147356;
var statearr_147357_147378 = state_147329;
(statearr_147357_147378[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_147329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e147356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__147379 = state_147329;
state_147329 = G__147379;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_147329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_147329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___147363,out))
})();
var state__15791__auto__ = (function (){var statearr_147358 = f__15790__auto__.call(null);
(statearr_147358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___147363);

return statearr_147358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___147363,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map