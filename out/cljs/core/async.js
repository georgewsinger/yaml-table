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
var args138757 = [];
var len__14433__auto___138763 = arguments.length;
var i__14434__auto___138764 = (0);
while(true){
if((i__14434__auto___138764 < len__14433__auto___138763)){
args138757.push((arguments[i__14434__auto___138764]));

var G__138765 = (i__14434__auto___138764 + (1));
i__14434__auto___138764 = G__138765;
continue;
} else {
}
break;
}

var G__138759 = args138757.length;
switch (G__138759) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args138757.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async138760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async138760 = (function (f,blockable,meta138761){
this.f = f;
this.blockable = blockable;
this.meta138761 = meta138761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async138760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_138762,meta138761__$1){
var self__ = this;
var _138762__$1 = this;
return (new cljs.core.async.t_cljs$core$async138760(self__.f,self__.blockable,meta138761__$1));
});

cljs.core.async.t_cljs$core$async138760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_138762){
var self__ = this;
var _138762__$1 = this;
return self__.meta138761;
});

cljs.core.async.t_cljs$core$async138760.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async138760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async138760.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async138760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async138760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta138761","meta138761",-901502057,null)], null);
});

cljs.core.async.t_cljs$core$async138760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async138760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async138760";

cljs.core.async.t_cljs$core$async138760.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async138760");
});

cljs.core.async.__GT_t_cljs$core$async138760 = (function cljs$core$async$__GT_t_cljs$core$async138760(f__$1,blockable__$1,meta138761){
return (new cljs.core.async.t_cljs$core$async138760(f__$1,blockable__$1,meta138761));
});

}

return (new cljs.core.async.t_cljs$core$async138760(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args138769 = [];
var len__14433__auto___138772 = arguments.length;
var i__14434__auto___138773 = (0);
while(true){
if((i__14434__auto___138773 < len__14433__auto___138772)){
args138769.push((arguments[i__14434__auto___138773]));

var G__138774 = (i__14434__auto___138773 + (1));
i__14434__auto___138773 = G__138774;
continue;
} else {
}
break;
}

var G__138771 = args138769.length;
switch (G__138771) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args138769.length)].join('')));

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
var args138776 = [];
var len__14433__auto___138779 = arguments.length;
var i__14434__auto___138780 = (0);
while(true){
if((i__14434__auto___138780 < len__14433__auto___138779)){
args138776.push((arguments[i__14434__auto___138780]));

var G__138781 = (i__14434__auto___138780 + (1));
i__14434__auto___138780 = G__138781;
continue;
} else {
}
break;
}

var G__138778 = args138776.length;
switch (G__138778) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args138776.length)].join('')));

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
var args138783 = [];
var len__14433__auto___138786 = arguments.length;
var i__14434__auto___138787 = (0);
while(true){
if((i__14434__auto___138787 < len__14433__auto___138786)){
args138783.push((arguments[i__14434__auto___138787]));

var G__138788 = (i__14434__auto___138787 + (1));
i__14434__auto___138787 = G__138788;
continue;
} else {
}
break;
}

var G__138785 = args138783.length;
switch (G__138785) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args138783.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_138790 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_138790);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_138790,ret){
return (function (){
return fn1.call(null,val_138790);
});})(val_138790,ret))
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
var args138791 = [];
var len__14433__auto___138794 = arguments.length;
var i__14434__auto___138795 = (0);
while(true){
if((i__14434__auto___138795 < len__14433__auto___138794)){
args138791.push((arguments[i__14434__auto___138795]));

var G__138796 = (i__14434__auto___138795 + (1));
i__14434__auto___138795 = G__138796;
continue;
} else {
}
break;
}

var G__138793 = args138791.length;
switch (G__138793) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args138791.length)].join('')));

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
var n__14278__auto___138798 = n;
var x_138799 = (0);
while(true){
if((x_138799 < n__14278__auto___138798)){
(a[x_138799] = (0));

var G__138800 = (x_138799 + (1));
x_138799 = G__138800;
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

var G__138801 = (i + (1));
i = G__138801;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async138805 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async138805 = (function (alt_flag,flag,meta138806){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta138806 = meta138806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async138805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_138807,meta138806__$1){
var self__ = this;
var _138807__$1 = this;
return (new cljs.core.async.t_cljs$core$async138805(self__.alt_flag,self__.flag,meta138806__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async138805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_138807){
var self__ = this;
var _138807__$1 = this;
return self__.meta138806;
});})(flag))
;

cljs.core.async.t_cljs$core$async138805.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async138805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async138805.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async138805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async138805.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta138806","meta138806",1932990704,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async138805.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async138805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async138805";

cljs.core.async.t_cljs$core$async138805.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async138805");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async138805 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async138805(alt_flag__$1,flag__$1,meta138806){
return (new cljs.core.async.t_cljs$core$async138805(alt_flag__$1,flag__$1,meta138806));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async138805(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async138811 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async138811 = (function (alt_handler,flag,cb,meta138812){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta138812 = meta138812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async138811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_138813,meta138812__$1){
var self__ = this;
var _138813__$1 = this;
return (new cljs.core.async.t_cljs$core$async138811(self__.alt_handler,self__.flag,self__.cb,meta138812__$1));
});

cljs.core.async.t_cljs$core$async138811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_138813){
var self__ = this;
var _138813__$1 = this;
return self__.meta138812;
});

cljs.core.async.t_cljs$core$async138811.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async138811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async138811.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async138811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async138811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta138812","meta138812",-1575166095,null)], null);
});

cljs.core.async.t_cljs$core$async138811.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async138811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async138811";

cljs.core.async.t_cljs$core$async138811.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async138811");
});

cljs.core.async.__GT_t_cljs$core$async138811 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async138811(alt_handler__$1,flag__$1,cb__$1,meta138812){
return (new cljs.core.async.t_cljs$core$async138811(alt_handler__$1,flag__$1,cb__$1,meta138812));
});

}

return (new cljs.core.async.t_cljs$core$async138811(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__138814_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__138814_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__138815_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__138815_SHARP_,port], null));
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
var G__138816 = (i + (1));
i = G__138816;
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
var len__14433__auto___138822 = arguments.length;
var i__14434__auto___138823 = (0);
while(true){
if((i__14434__auto___138823 < len__14433__auto___138822)){
args__14440__auto__.push((arguments[i__14434__auto___138823]));

var G__138824 = (i__14434__auto___138823 + (1));
i__14434__auto___138823 = G__138824;
continue;
} else {
}
break;
}

var argseq__14441__auto__ = ((((1) < args__14440__auto__.length))?(new cljs.core.IndexedSeq(args__14440__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14441__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__138819){
var map__138820 = p__138819;
var map__138820__$1 = ((((!((map__138820 == null)))?((((map__138820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__138820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__138820):map__138820);
var opts = map__138820__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq138817){
var G__138818 = cljs.core.first.call(null,seq138817);
var seq138817__$1 = cljs.core.next.call(null,seq138817);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__138818,seq138817__$1);
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
var args138825 = [];
var len__14433__auto___138875 = arguments.length;
var i__14434__auto___138876 = (0);
while(true){
if((i__14434__auto___138876 < len__14433__auto___138875)){
args138825.push((arguments[i__14434__auto___138876]));

var G__138877 = (i__14434__auto___138876 + (1));
i__14434__auto___138876 = G__138877;
continue;
} else {
}
break;
}

var G__138827 = args138825.length;
switch (G__138827) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args138825.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15789__auto___138879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___138879){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___138879){
return (function (state_138851){
var state_val_138852 = (state_138851[(1)]);
if((state_val_138852 === (7))){
var inst_138847 = (state_138851[(2)]);
var state_138851__$1 = state_138851;
var statearr_138853_138880 = state_138851__$1;
(statearr_138853_138880[(2)] = inst_138847);

(statearr_138853_138880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_138852 === (1))){
var state_138851__$1 = state_138851;
var statearr_138854_138881 = state_138851__$1;
(statearr_138854_138881[(2)] = null);

(statearr_138854_138881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_138852 === (4))){
var inst_138830 = (state_138851[(7)]);
var inst_138830__$1 = (state_138851[(2)]);
var inst_138831 = (inst_138830__$1 == null);
var state_138851__$1 = (function (){var statearr_138855 = state_138851;
(statearr_138855[(7)] = inst_138830__$1);

return statearr_138855;
})();
if(cljs.core.truth_(inst_138831)){
var statearr_138856_138882 = state_138851__$1;
(statearr_138856_138882[(1)] = (5));

} else {
var statearr_138857_138883 = state_138851__$1;
(statearr_138857_138883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_138852 === (13))){
var state_138851__$1 = state_138851;
var statearr_138858_138884 = state_138851__$1;
(statearr_138858_138884[(2)] = null);

(statearr_138858_138884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_138852 === (6))){
var inst_138830 = (state_138851[(7)]);
var state_138851__$1 = state_138851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_138851__$1,(11),to,inst_138830);
} else {
if((state_val_138852 === (3))){
var inst_138849 = (state_138851[(2)]);
var state_138851__$1 = state_138851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_138851__$1,inst_138849);
} else {
if((state_val_138852 === (12))){
var state_138851__$1 = state_138851;
var statearr_138859_138885 = state_138851__$1;
(statearr_138859_138885[(2)] = null);

(statearr_138859_138885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_138852 === (2))){
var state_138851__$1 = state_138851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_138851__$1,(4),from);
} else {
if((state_val_138852 === (11))){
var inst_138840 = (state_138851[(2)]);
var state_138851__$1 = state_138851;
if(cljs.core.truth_(inst_138840)){
var statearr_138860_138886 = state_138851__$1;
(statearr_138860_138886[(1)] = (12));

} else {
var statearr_138861_138887 = state_138851__$1;
(statearr_138861_138887[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_138852 === (9))){
var state_138851__$1 = state_138851;
var statearr_138862_138888 = state_138851__$1;
(statearr_138862_138888[(2)] = null);

(statearr_138862_138888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_138852 === (5))){
var state_138851__$1 = state_138851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_138863_138889 = state_138851__$1;
(statearr_138863_138889[(1)] = (8));

} else {
var statearr_138864_138890 = state_138851__$1;
(statearr_138864_138890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_138852 === (14))){
var inst_138845 = (state_138851[(2)]);
var state_138851__$1 = state_138851;
var statearr_138865_138891 = state_138851__$1;
(statearr_138865_138891[(2)] = inst_138845);

(statearr_138865_138891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_138852 === (10))){
var inst_138837 = (state_138851[(2)]);
var state_138851__$1 = state_138851;
var statearr_138866_138892 = state_138851__$1;
(statearr_138866_138892[(2)] = inst_138837);

(statearr_138866_138892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_138852 === (8))){
var inst_138834 = cljs.core.async.close_BANG_.call(null,to);
var state_138851__$1 = state_138851;
var statearr_138867_138893 = state_138851__$1;
(statearr_138867_138893[(2)] = inst_138834);

(statearr_138867_138893[(1)] = (10));


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
});})(c__15789__auto___138879))
;
return ((function (switch__15724__auto__,c__15789__auto___138879){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_138871 = [null,null,null,null,null,null,null,null];
(statearr_138871[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_138871[(1)] = (1));

return statearr_138871;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_138851){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_138851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e138872){if((e138872 instanceof Object)){
var ex__15728__auto__ = e138872;
var statearr_138873_138894 = state_138851;
(statearr_138873_138894[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_138851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e138872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__138895 = state_138851;
state_138851 = G__138895;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_138851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_138851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___138879))
})();
var state__15791__auto__ = (function (){var statearr_138874 = f__15790__auto__.call(null);
(statearr_138874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___138879);

return statearr_138874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___138879))
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
return (function (p__139079){
var vec__139080 = p__139079;
var v = cljs.core.nth.call(null,vec__139080,(0),null);
var p = cljs.core.nth.call(null,vec__139080,(1),null);
var job = vec__139080;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15789__auto___139262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___139262,res,vec__139080,v,p,job,jobs,results){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___139262,res,vec__139080,v,p,job,jobs,results){
return (function (state_139085){
var state_val_139086 = (state_139085[(1)]);
if((state_val_139086 === (1))){
var state_139085__$1 = state_139085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_139085__$1,(2),res,v);
} else {
if((state_val_139086 === (2))){
var inst_139082 = (state_139085[(2)]);
var inst_139083 = cljs.core.async.close_BANG_.call(null,res);
var state_139085__$1 = (function (){var statearr_139087 = state_139085;
(statearr_139087[(7)] = inst_139082);

return statearr_139087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139085__$1,inst_139083);
} else {
return null;
}
}
});})(c__15789__auto___139262,res,vec__139080,v,p,job,jobs,results))
;
return ((function (switch__15724__auto__,c__15789__auto___139262,res,vec__139080,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_139091 = [null,null,null,null,null,null,null,null];
(statearr_139091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_139091[(1)] = (1));

return statearr_139091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_139085){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_139085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e139092){if((e139092 instanceof Object)){
var ex__15728__auto__ = e139092;
var statearr_139093_139263 = state_139085;
(statearr_139093_139263[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e139092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__139264 = state_139085;
state_139085 = G__139264;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_139085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_139085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___139262,res,vec__139080,v,p,job,jobs,results))
})();
var state__15791__auto__ = (function (){var statearr_139094 = f__15790__auto__.call(null);
(statearr_139094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___139262);

return statearr_139094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___139262,res,vec__139080,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__139095){
var vec__139096 = p__139095;
var v = cljs.core.nth.call(null,vec__139096,(0),null);
var p = cljs.core.nth.call(null,vec__139096,(1),null);
var job = vec__139096;
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
var n__14278__auto___139265 = n;
var __139266 = (0);
while(true){
if((__139266 < n__14278__auto___139265)){
var G__139097_139267 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__139097_139267) {
case "compute":
var c__15789__auto___139269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__139266,c__15789__auto___139269,G__139097_139267,n__14278__auto___139265,jobs,results,process,async){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (__139266,c__15789__auto___139269,G__139097_139267,n__14278__auto___139265,jobs,results,process,async){
return (function (state_139110){
var state_val_139111 = (state_139110[(1)]);
if((state_val_139111 === (1))){
var state_139110__$1 = state_139110;
var statearr_139112_139270 = state_139110__$1;
(statearr_139112_139270[(2)] = null);

(statearr_139112_139270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139111 === (2))){
var state_139110__$1 = state_139110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139110__$1,(4),jobs);
} else {
if((state_val_139111 === (3))){
var inst_139108 = (state_139110[(2)]);
var state_139110__$1 = state_139110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139110__$1,inst_139108);
} else {
if((state_val_139111 === (4))){
var inst_139100 = (state_139110[(2)]);
var inst_139101 = process.call(null,inst_139100);
var state_139110__$1 = state_139110;
if(cljs.core.truth_(inst_139101)){
var statearr_139113_139271 = state_139110__$1;
(statearr_139113_139271[(1)] = (5));

} else {
var statearr_139114_139272 = state_139110__$1;
(statearr_139114_139272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139111 === (5))){
var state_139110__$1 = state_139110;
var statearr_139115_139273 = state_139110__$1;
(statearr_139115_139273[(2)] = null);

(statearr_139115_139273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139111 === (6))){
var state_139110__$1 = state_139110;
var statearr_139116_139274 = state_139110__$1;
(statearr_139116_139274[(2)] = null);

(statearr_139116_139274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139111 === (7))){
var inst_139106 = (state_139110[(2)]);
var state_139110__$1 = state_139110;
var statearr_139117_139275 = state_139110__$1;
(statearr_139117_139275[(2)] = inst_139106);

(statearr_139117_139275[(1)] = (3));


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
});})(__139266,c__15789__auto___139269,G__139097_139267,n__14278__auto___139265,jobs,results,process,async))
;
return ((function (__139266,switch__15724__auto__,c__15789__auto___139269,G__139097_139267,n__14278__auto___139265,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_139121 = [null,null,null,null,null,null,null];
(statearr_139121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_139121[(1)] = (1));

return statearr_139121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_139110){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_139110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e139122){if((e139122 instanceof Object)){
var ex__15728__auto__ = e139122;
var statearr_139123_139276 = state_139110;
(statearr_139123_139276[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e139122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__139277 = state_139110;
state_139110 = G__139277;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_139110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_139110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(__139266,switch__15724__auto__,c__15789__auto___139269,G__139097_139267,n__14278__auto___139265,jobs,results,process,async))
})();
var state__15791__auto__ = (function (){var statearr_139124 = f__15790__auto__.call(null);
(statearr_139124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___139269);

return statearr_139124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(__139266,c__15789__auto___139269,G__139097_139267,n__14278__auto___139265,jobs,results,process,async))
);


break;
case "async":
var c__15789__auto___139278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__139266,c__15789__auto___139278,G__139097_139267,n__14278__auto___139265,jobs,results,process,async){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (__139266,c__15789__auto___139278,G__139097_139267,n__14278__auto___139265,jobs,results,process,async){
return (function (state_139137){
var state_val_139138 = (state_139137[(1)]);
if((state_val_139138 === (1))){
var state_139137__$1 = state_139137;
var statearr_139139_139279 = state_139137__$1;
(statearr_139139_139279[(2)] = null);

(statearr_139139_139279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139138 === (2))){
var state_139137__$1 = state_139137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139137__$1,(4),jobs);
} else {
if((state_val_139138 === (3))){
var inst_139135 = (state_139137[(2)]);
var state_139137__$1 = state_139137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139137__$1,inst_139135);
} else {
if((state_val_139138 === (4))){
var inst_139127 = (state_139137[(2)]);
var inst_139128 = async.call(null,inst_139127);
var state_139137__$1 = state_139137;
if(cljs.core.truth_(inst_139128)){
var statearr_139140_139280 = state_139137__$1;
(statearr_139140_139280[(1)] = (5));

} else {
var statearr_139141_139281 = state_139137__$1;
(statearr_139141_139281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139138 === (5))){
var state_139137__$1 = state_139137;
var statearr_139142_139282 = state_139137__$1;
(statearr_139142_139282[(2)] = null);

(statearr_139142_139282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139138 === (6))){
var state_139137__$1 = state_139137;
var statearr_139143_139283 = state_139137__$1;
(statearr_139143_139283[(2)] = null);

(statearr_139143_139283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139138 === (7))){
var inst_139133 = (state_139137[(2)]);
var state_139137__$1 = state_139137;
var statearr_139144_139284 = state_139137__$1;
(statearr_139144_139284[(2)] = inst_139133);

(statearr_139144_139284[(1)] = (3));


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
});})(__139266,c__15789__auto___139278,G__139097_139267,n__14278__auto___139265,jobs,results,process,async))
;
return ((function (__139266,switch__15724__auto__,c__15789__auto___139278,G__139097_139267,n__14278__auto___139265,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_139148 = [null,null,null,null,null,null,null];
(statearr_139148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_139148[(1)] = (1));

return statearr_139148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_139137){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_139137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e139149){if((e139149 instanceof Object)){
var ex__15728__auto__ = e139149;
var statearr_139150_139285 = state_139137;
(statearr_139150_139285[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e139149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__139286 = state_139137;
state_139137 = G__139286;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_139137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_139137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(__139266,switch__15724__auto__,c__15789__auto___139278,G__139097_139267,n__14278__auto___139265,jobs,results,process,async))
})();
var state__15791__auto__ = (function (){var statearr_139151 = f__15790__auto__.call(null);
(statearr_139151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___139278);

return statearr_139151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(__139266,c__15789__auto___139278,G__139097_139267,n__14278__auto___139265,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__139287 = (__139266 + (1));
__139266 = G__139287;
continue;
} else {
}
break;
}

var c__15789__auto___139288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___139288,jobs,results,process,async){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___139288,jobs,results,process,async){
return (function (state_139173){
var state_val_139174 = (state_139173[(1)]);
if((state_val_139174 === (1))){
var state_139173__$1 = state_139173;
var statearr_139175_139289 = state_139173__$1;
(statearr_139175_139289[(2)] = null);

(statearr_139175_139289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139174 === (2))){
var state_139173__$1 = state_139173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139173__$1,(4),from);
} else {
if((state_val_139174 === (3))){
var inst_139171 = (state_139173[(2)]);
var state_139173__$1 = state_139173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139173__$1,inst_139171);
} else {
if((state_val_139174 === (4))){
var inst_139154 = (state_139173[(7)]);
var inst_139154__$1 = (state_139173[(2)]);
var inst_139155 = (inst_139154__$1 == null);
var state_139173__$1 = (function (){var statearr_139176 = state_139173;
(statearr_139176[(7)] = inst_139154__$1);

return statearr_139176;
})();
if(cljs.core.truth_(inst_139155)){
var statearr_139177_139290 = state_139173__$1;
(statearr_139177_139290[(1)] = (5));

} else {
var statearr_139178_139291 = state_139173__$1;
(statearr_139178_139291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139174 === (5))){
var inst_139157 = cljs.core.async.close_BANG_.call(null,jobs);
var state_139173__$1 = state_139173;
var statearr_139179_139292 = state_139173__$1;
(statearr_139179_139292[(2)] = inst_139157);

(statearr_139179_139292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139174 === (6))){
var inst_139154 = (state_139173[(7)]);
var inst_139159 = (state_139173[(8)]);
var inst_139159__$1 = cljs.core.async.chan.call(null,(1));
var inst_139160 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_139161 = [inst_139154,inst_139159__$1];
var inst_139162 = (new cljs.core.PersistentVector(null,2,(5),inst_139160,inst_139161,null));
var state_139173__$1 = (function (){var statearr_139180 = state_139173;
(statearr_139180[(8)] = inst_139159__$1);

return statearr_139180;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_139173__$1,(8),jobs,inst_139162);
} else {
if((state_val_139174 === (7))){
var inst_139169 = (state_139173[(2)]);
var state_139173__$1 = state_139173;
var statearr_139181_139293 = state_139173__$1;
(statearr_139181_139293[(2)] = inst_139169);

(statearr_139181_139293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139174 === (8))){
var inst_139159 = (state_139173[(8)]);
var inst_139164 = (state_139173[(2)]);
var state_139173__$1 = (function (){var statearr_139182 = state_139173;
(statearr_139182[(9)] = inst_139164);

return statearr_139182;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_139173__$1,(9),results,inst_139159);
} else {
if((state_val_139174 === (9))){
var inst_139166 = (state_139173[(2)]);
var state_139173__$1 = (function (){var statearr_139183 = state_139173;
(statearr_139183[(10)] = inst_139166);

return statearr_139183;
})();
var statearr_139184_139294 = state_139173__$1;
(statearr_139184_139294[(2)] = null);

(statearr_139184_139294[(1)] = (2));


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
});})(c__15789__auto___139288,jobs,results,process,async))
;
return ((function (switch__15724__auto__,c__15789__auto___139288,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0 = (function (){
var statearr_139188 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_139188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_139188[(1)] = (1));

return statearr_139188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_139173){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_139173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e139189){if((e139189 instanceof Object)){
var ex__15728__auto__ = e139189;
var statearr_139190_139295 = state_139173;
(statearr_139190_139295[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e139189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__139296 = state_139173;
state_139173 = G__139296;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_139173){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_139173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___139288,jobs,results,process,async))
})();
var state__15791__auto__ = (function (){var statearr_139191 = f__15790__auto__.call(null);
(statearr_139191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___139288);

return statearr_139191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___139288,jobs,results,process,async))
);


var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,jobs,results,process,async){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,jobs,results,process,async){
return (function (state_139229){
var state_val_139230 = (state_139229[(1)]);
if((state_val_139230 === (7))){
var inst_139225 = (state_139229[(2)]);
var state_139229__$1 = state_139229;
var statearr_139231_139297 = state_139229__$1;
(statearr_139231_139297[(2)] = inst_139225);

(statearr_139231_139297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (20))){
var state_139229__$1 = state_139229;
var statearr_139232_139298 = state_139229__$1;
(statearr_139232_139298[(2)] = null);

(statearr_139232_139298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (1))){
var state_139229__$1 = state_139229;
var statearr_139233_139299 = state_139229__$1;
(statearr_139233_139299[(2)] = null);

(statearr_139233_139299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (4))){
var inst_139194 = (state_139229[(7)]);
var inst_139194__$1 = (state_139229[(2)]);
var inst_139195 = (inst_139194__$1 == null);
var state_139229__$1 = (function (){var statearr_139234 = state_139229;
(statearr_139234[(7)] = inst_139194__$1);

return statearr_139234;
})();
if(cljs.core.truth_(inst_139195)){
var statearr_139235_139300 = state_139229__$1;
(statearr_139235_139300[(1)] = (5));

} else {
var statearr_139236_139301 = state_139229__$1;
(statearr_139236_139301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (15))){
var inst_139207 = (state_139229[(8)]);
var state_139229__$1 = state_139229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_139229__$1,(18),to,inst_139207);
} else {
if((state_val_139230 === (21))){
var inst_139220 = (state_139229[(2)]);
var state_139229__$1 = state_139229;
var statearr_139237_139302 = state_139229__$1;
(statearr_139237_139302[(2)] = inst_139220);

(statearr_139237_139302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (13))){
var inst_139222 = (state_139229[(2)]);
var state_139229__$1 = (function (){var statearr_139238 = state_139229;
(statearr_139238[(9)] = inst_139222);

return statearr_139238;
})();
var statearr_139239_139303 = state_139229__$1;
(statearr_139239_139303[(2)] = null);

(statearr_139239_139303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (6))){
var inst_139194 = (state_139229[(7)]);
var state_139229__$1 = state_139229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139229__$1,(11),inst_139194);
} else {
if((state_val_139230 === (17))){
var inst_139215 = (state_139229[(2)]);
var state_139229__$1 = state_139229;
if(cljs.core.truth_(inst_139215)){
var statearr_139240_139304 = state_139229__$1;
(statearr_139240_139304[(1)] = (19));

} else {
var statearr_139241_139305 = state_139229__$1;
(statearr_139241_139305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (3))){
var inst_139227 = (state_139229[(2)]);
var state_139229__$1 = state_139229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139229__$1,inst_139227);
} else {
if((state_val_139230 === (12))){
var inst_139204 = (state_139229[(10)]);
var state_139229__$1 = state_139229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139229__$1,(14),inst_139204);
} else {
if((state_val_139230 === (2))){
var state_139229__$1 = state_139229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139229__$1,(4),results);
} else {
if((state_val_139230 === (19))){
var state_139229__$1 = state_139229;
var statearr_139242_139306 = state_139229__$1;
(statearr_139242_139306[(2)] = null);

(statearr_139242_139306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (11))){
var inst_139204 = (state_139229[(2)]);
var state_139229__$1 = (function (){var statearr_139243 = state_139229;
(statearr_139243[(10)] = inst_139204);

return statearr_139243;
})();
var statearr_139244_139307 = state_139229__$1;
(statearr_139244_139307[(2)] = null);

(statearr_139244_139307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (9))){
var state_139229__$1 = state_139229;
var statearr_139245_139308 = state_139229__$1;
(statearr_139245_139308[(2)] = null);

(statearr_139245_139308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (5))){
var state_139229__$1 = state_139229;
if(cljs.core.truth_(close_QMARK_)){
var statearr_139246_139309 = state_139229__$1;
(statearr_139246_139309[(1)] = (8));

} else {
var statearr_139247_139310 = state_139229__$1;
(statearr_139247_139310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (14))){
var inst_139207 = (state_139229[(8)]);
var inst_139209 = (state_139229[(11)]);
var inst_139207__$1 = (state_139229[(2)]);
var inst_139208 = (inst_139207__$1 == null);
var inst_139209__$1 = cljs.core.not.call(null,inst_139208);
var state_139229__$1 = (function (){var statearr_139248 = state_139229;
(statearr_139248[(8)] = inst_139207__$1);

(statearr_139248[(11)] = inst_139209__$1);

return statearr_139248;
})();
if(inst_139209__$1){
var statearr_139249_139311 = state_139229__$1;
(statearr_139249_139311[(1)] = (15));

} else {
var statearr_139250_139312 = state_139229__$1;
(statearr_139250_139312[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (16))){
var inst_139209 = (state_139229[(11)]);
var state_139229__$1 = state_139229;
var statearr_139251_139313 = state_139229__$1;
(statearr_139251_139313[(2)] = inst_139209);

(statearr_139251_139313[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (10))){
var inst_139201 = (state_139229[(2)]);
var state_139229__$1 = state_139229;
var statearr_139252_139314 = state_139229__$1;
(statearr_139252_139314[(2)] = inst_139201);

(statearr_139252_139314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (18))){
var inst_139212 = (state_139229[(2)]);
var state_139229__$1 = state_139229;
var statearr_139253_139315 = state_139229__$1;
(statearr_139253_139315[(2)] = inst_139212);

(statearr_139253_139315[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139230 === (8))){
var inst_139198 = cljs.core.async.close_BANG_.call(null,to);
var state_139229__$1 = state_139229;
var statearr_139254_139316 = state_139229__$1;
(statearr_139254_139316[(2)] = inst_139198);

(statearr_139254_139316[(1)] = (10));


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
var statearr_139258 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_139258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__);

(statearr_139258[(1)] = (1));

return statearr_139258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1 = (function (state_139229){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_139229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e139259){if((e139259 instanceof Object)){
var ex__15728__auto__ = e139259;
var statearr_139260_139317 = state_139229;
(statearr_139260_139317[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e139259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__139318 = state_139229;
state_139229 = G__139318;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__ = function(state_139229){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1.call(this,state_139229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,jobs,results,process,async))
})();
var state__15791__auto__ = (function (){var statearr_139261 = f__15790__auto__.call(null);
(statearr_139261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_139261;
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
var args139319 = [];
var len__14433__auto___139322 = arguments.length;
var i__14434__auto___139323 = (0);
while(true){
if((i__14434__auto___139323 < len__14433__auto___139322)){
args139319.push((arguments[i__14434__auto___139323]));

var G__139324 = (i__14434__auto___139323 + (1));
i__14434__auto___139323 = G__139324;
continue;
} else {
}
break;
}

var G__139321 = args139319.length;
switch (G__139321) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args139319.length)].join('')));

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
var args139326 = [];
var len__14433__auto___139329 = arguments.length;
var i__14434__auto___139330 = (0);
while(true){
if((i__14434__auto___139330 < len__14433__auto___139329)){
args139326.push((arguments[i__14434__auto___139330]));

var G__139331 = (i__14434__auto___139330 + (1));
i__14434__auto___139330 = G__139331;
continue;
} else {
}
break;
}

var G__139328 = args139326.length;
switch (G__139328) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args139326.length)].join('')));

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
var args139333 = [];
var len__14433__auto___139386 = arguments.length;
var i__14434__auto___139387 = (0);
while(true){
if((i__14434__auto___139387 < len__14433__auto___139386)){
args139333.push((arguments[i__14434__auto___139387]));

var G__139388 = (i__14434__auto___139387 + (1));
i__14434__auto___139387 = G__139388;
continue;
} else {
}
break;
}

var G__139335 = args139333.length;
switch (G__139335) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args139333.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15789__auto___139390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___139390,tc,fc){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___139390,tc,fc){
return (function (state_139361){
var state_val_139362 = (state_139361[(1)]);
if((state_val_139362 === (7))){
var inst_139357 = (state_139361[(2)]);
var state_139361__$1 = state_139361;
var statearr_139363_139391 = state_139361__$1;
(statearr_139363_139391[(2)] = inst_139357);

(statearr_139363_139391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139362 === (1))){
var state_139361__$1 = state_139361;
var statearr_139364_139392 = state_139361__$1;
(statearr_139364_139392[(2)] = null);

(statearr_139364_139392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139362 === (4))){
var inst_139338 = (state_139361[(7)]);
var inst_139338__$1 = (state_139361[(2)]);
var inst_139339 = (inst_139338__$1 == null);
var state_139361__$1 = (function (){var statearr_139365 = state_139361;
(statearr_139365[(7)] = inst_139338__$1);

return statearr_139365;
})();
if(cljs.core.truth_(inst_139339)){
var statearr_139366_139393 = state_139361__$1;
(statearr_139366_139393[(1)] = (5));

} else {
var statearr_139367_139394 = state_139361__$1;
(statearr_139367_139394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139362 === (13))){
var state_139361__$1 = state_139361;
var statearr_139368_139395 = state_139361__$1;
(statearr_139368_139395[(2)] = null);

(statearr_139368_139395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139362 === (6))){
var inst_139338 = (state_139361[(7)]);
var inst_139344 = p.call(null,inst_139338);
var state_139361__$1 = state_139361;
if(cljs.core.truth_(inst_139344)){
var statearr_139369_139396 = state_139361__$1;
(statearr_139369_139396[(1)] = (9));

} else {
var statearr_139370_139397 = state_139361__$1;
(statearr_139370_139397[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139362 === (3))){
var inst_139359 = (state_139361[(2)]);
var state_139361__$1 = state_139361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139361__$1,inst_139359);
} else {
if((state_val_139362 === (12))){
var state_139361__$1 = state_139361;
var statearr_139371_139398 = state_139361__$1;
(statearr_139371_139398[(2)] = null);

(statearr_139371_139398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139362 === (2))){
var state_139361__$1 = state_139361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139361__$1,(4),ch);
} else {
if((state_val_139362 === (11))){
var inst_139338 = (state_139361[(7)]);
var inst_139348 = (state_139361[(2)]);
var state_139361__$1 = state_139361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_139361__$1,(8),inst_139348,inst_139338);
} else {
if((state_val_139362 === (9))){
var state_139361__$1 = state_139361;
var statearr_139372_139399 = state_139361__$1;
(statearr_139372_139399[(2)] = tc);

(statearr_139372_139399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139362 === (5))){
var inst_139341 = cljs.core.async.close_BANG_.call(null,tc);
var inst_139342 = cljs.core.async.close_BANG_.call(null,fc);
var state_139361__$1 = (function (){var statearr_139373 = state_139361;
(statearr_139373[(8)] = inst_139341);

return statearr_139373;
})();
var statearr_139374_139400 = state_139361__$1;
(statearr_139374_139400[(2)] = inst_139342);

(statearr_139374_139400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139362 === (14))){
var inst_139355 = (state_139361[(2)]);
var state_139361__$1 = state_139361;
var statearr_139375_139401 = state_139361__$1;
(statearr_139375_139401[(2)] = inst_139355);

(statearr_139375_139401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139362 === (10))){
var state_139361__$1 = state_139361;
var statearr_139376_139402 = state_139361__$1;
(statearr_139376_139402[(2)] = fc);

(statearr_139376_139402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139362 === (8))){
var inst_139350 = (state_139361[(2)]);
var state_139361__$1 = state_139361;
if(cljs.core.truth_(inst_139350)){
var statearr_139377_139403 = state_139361__$1;
(statearr_139377_139403[(1)] = (12));

} else {
var statearr_139378_139404 = state_139361__$1;
(statearr_139378_139404[(1)] = (13));

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
});})(c__15789__auto___139390,tc,fc))
;
return ((function (switch__15724__auto__,c__15789__auto___139390,tc,fc){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_139382 = [null,null,null,null,null,null,null,null,null];
(statearr_139382[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_139382[(1)] = (1));

return statearr_139382;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_139361){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_139361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e139383){if((e139383 instanceof Object)){
var ex__15728__auto__ = e139383;
var statearr_139384_139405 = state_139361;
(statearr_139384_139405[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e139383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__139406 = state_139361;
state_139361 = G__139406;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_139361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_139361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___139390,tc,fc))
})();
var state__15791__auto__ = (function (){var statearr_139385 = f__15790__auto__.call(null);
(statearr_139385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___139390);

return statearr_139385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___139390,tc,fc))
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
return (function (state_139470){
var state_val_139471 = (state_139470[(1)]);
if((state_val_139471 === (7))){
var inst_139466 = (state_139470[(2)]);
var state_139470__$1 = state_139470;
var statearr_139472_139493 = state_139470__$1;
(statearr_139472_139493[(2)] = inst_139466);

(statearr_139472_139493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139471 === (1))){
var inst_139450 = init;
var state_139470__$1 = (function (){var statearr_139473 = state_139470;
(statearr_139473[(7)] = inst_139450);

return statearr_139473;
})();
var statearr_139474_139494 = state_139470__$1;
(statearr_139474_139494[(2)] = null);

(statearr_139474_139494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139471 === (4))){
var inst_139453 = (state_139470[(8)]);
var inst_139453__$1 = (state_139470[(2)]);
var inst_139454 = (inst_139453__$1 == null);
var state_139470__$1 = (function (){var statearr_139475 = state_139470;
(statearr_139475[(8)] = inst_139453__$1);

return statearr_139475;
})();
if(cljs.core.truth_(inst_139454)){
var statearr_139476_139495 = state_139470__$1;
(statearr_139476_139495[(1)] = (5));

} else {
var statearr_139477_139496 = state_139470__$1;
(statearr_139477_139496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139471 === (6))){
var inst_139453 = (state_139470[(8)]);
var inst_139457 = (state_139470[(9)]);
var inst_139450 = (state_139470[(7)]);
var inst_139457__$1 = f.call(null,inst_139450,inst_139453);
var inst_139458 = cljs.core.reduced_QMARK_.call(null,inst_139457__$1);
var state_139470__$1 = (function (){var statearr_139478 = state_139470;
(statearr_139478[(9)] = inst_139457__$1);

return statearr_139478;
})();
if(inst_139458){
var statearr_139479_139497 = state_139470__$1;
(statearr_139479_139497[(1)] = (8));

} else {
var statearr_139480_139498 = state_139470__$1;
(statearr_139480_139498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139471 === (3))){
var inst_139468 = (state_139470[(2)]);
var state_139470__$1 = state_139470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139470__$1,inst_139468);
} else {
if((state_val_139471 === (2))){
var state_139470__$1 = state_139470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139470__$1,(4),ch);
} else {
if((state_val_139471 === (9))){
var inst_139457 = (state_139470[(9)]);
var inst_139450 = inst_139457;
var state_139470__$1 = (function (){var statearr_139481 = state_139470;
(statearr_139481[(7)] = inst_139450);

return statearr_139481;
})();
var statearr_139482_139499 = state_139470__$1;
(statearr_139482_139499[(2)] = null);

(statearr_139482_139499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139471 === (5))){
var inst_139450 = (state_139470[(7)]);
var state_139470__$1 = state_139470;
var statearr_139483_139500 = state_139470__$1;
(statearr_139483_139500[(2)] = inst_139450);

(statearr_139483_139500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139471 === (10))){
var inst_139464 = (state_139470[(2)]);
var state_139470__$1 = state_139470;
var statearr_139484_139501 = state_139470__$1;
(statearr_139484_139501[(2)] = inst_139464);

(statearr_139484_139501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139471 === (8))){
var inst_139457 = (state_139470[(9)]);
var inst_139460 = cljs.core.deref.call(null,inst_139457);
var state_139470__$1 = state_139470;
var statearr_139485_139502 = state_139470__$1;
(statearr_139485_139502[(2)] = inst_139460);

(statearr_139485_139502[(1)] = (10));


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
var statearr_139489 = [null,null,null,null,null,null,null,null,null,null];
(statearr_139489[(0)] = cljs$core$async$reduce_$_state_machine__15725__auto__);

(statearr_139489[(1)] = (1));

return statearr_139489;
});
var cljs$core$async$reduce_$_state_machine__15725__auto____1 = (function (state_139470){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_139470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e139490){if((e139490 instanceof Object)){
var ex__15728__auto__ = e139490;
var statearr_139491_139503 = state_139470;
(statearr_139491_139503[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e139490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__139504 = state_139470;
state_139470 = G__139504;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15725__auto__ = function(state_139470){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15725__auto____1.call(this,state_139470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15725__auto____0;
cljs$core$async$reduce_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15725__auto____1;
return cljs$core$async$reduce_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_139492 = f__15790__auto__.call(null);
(statearr_139492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_139492;
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
var args139505 = [];
var len__14433__auto___139557 = arguments.length;
var i__14434__auto___139558 = (0);
while(true){
if((i__14434__auto___139558 < len__14433__auto___139557)){
args139505.push((arguments[i__14434__auto___139558]));

var G__139559 = (i__14434__auto___139558 + (1));
i__14434__auto___139558 = G__139559;
continue;
} else {
}
break;
}

var G__139507 = args139505.length;
switch (G__139507) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args139505.length)].join('')));

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
return (function (state_139532){
var state_val_139533 = (state_139532[(1)]);
if((state_val_139533 === (7))){
var inst_139514 = (state_139532[(2)]);
var state_139532__$1 = state_139532;
var statearr_139534_139561 = state_139532__$1;
(statearr_139534_139561[(2)] = inst_139514);

(statearr_139534_139561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139533 === (1))){
var inst_139508 = cljs.core.seq.call(null,coll);
var inst_139509 = inst_139508;
var state_139532__$1 = (function (){var statearr_139535 = state_139532;
(statearr_139535[(7)] = inst_139509);

return statearr_139535;
})();
var statearr_139536_139562 = state_139532__$1;
(statearr_139536_139562[(2)] = null);

(statearr_139536_139562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139533 === (4))){
var inst_139509 = (state_139532[(7)]);
var inst_139512 = cljs.core.first.call(null,inst_139509);
var state_139532__$1 = state_139532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_139532__$1,(7),ch,inst_139512);
} else {
if((state_val_139533 === (13))){
var inst_139526 = (state_139532[(2)]);
var state_139532__$1 = state_139532;
var statearr_139537_139563 = state_139532__$1;
(statearr_139537_139563[(2)] = inst_139526);

(statearr_139537_139563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139533 === (6))){
var inst_139517 = (state_139532[(2)]);
var state_139532__$1 = state_139532;
if(cljs.core.truth_(inst_139517)){
var statearr_139538_139564 = state_139532__$1;
(statearr_139538_139564[(1)] = (8));

} else {
var statearr_139539_139565 = state_139532__$1;
(statearr_139539_139565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139533 === (3))){
var inst_139530 = (state_139532[(2)]);
var state_139532__$1 = state_139532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139532__$1,inst_139530);
} else {
if((state_val_139533 === (12))){
var state_139532__$1 = state_139532;
var statearr_139540_139566 = state_139532__$1;
(statearr_139540_139566[(2)] = null);

(statearr_139540_139566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139533 === (2))){
var inst_139509 = (state_139532[(7)]);
var state_139532__$1 = state_139532;
if(cljs.core.truth_(inst_139509)){
var statearr_139541_139567 = state_139532__$1;
(statearr_139541_139567[(1)] = (4));

} else {
var statearr_139542_139568 = state_139532__$1;
(statearr_139542_139568[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139533 === (11))){
var inst_139523 = cljs.core.async.close_BANG_.call(null,ch);
var state_139532__$1 = state_139532;
var statearr_139543_139569 = state_139532__$1;
(statearr_139543_139569[(2)] = inst_139523);

(statearr_139543_139569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139533 === (9))){
var state_139532__$1 = state_139532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_139544_139570 = state_139532__$1;
(statearr_139544_139570[(1)] = (11));

} else {
var statearr_139545_139571 = state_139532__$1;
(statearr_139545_139571[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139533 === (5))){
var inst_139509 = (state_139532[(7)]);
var state_139532__$1 = state_139532;
var statearr_139546_139572 = state_139532__$1;
(statearr_139546_139572[(2)] = inst_139509);

(statearr_139546_139572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139533 === (10))){
var inst_139528 = (state_139532[(2)]);
var state_139532__$1 = state_139532;
var statearr_139547_139573 = state_139532__$1;
(statearr_139547_139573[(2)] = inst_139528);

(statearr_139547_139573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139533 === (8))){
var inst_139509 = (state_139532[(7)]);
var inst_139519 = cljs.core.next.call(null,inst_139509);
var inst_139509__$1 = inst_139519;
var state_139532__$1 = (function (){var statearr_139548 = state_139532;
(statearr_139548[(7)] = inst_139509__$1);

return statearr_139548;
})();
var statearr_139549_139574 = state_139532__$1;
(statearr_139549_139574[(2)] = null);

(statearr_139549_139574[(1)] = (2));


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
var statearr_139553 = [null,null,null,null,null,null,null,null];
(statearr_139553[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_139553[(1)] = (1));

return statearr_139553;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_139532){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_139532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e139554){if((e139554 instanceof Object)){
var ex__15728__auto__ = e139554;
var statearr_139555_139575 = state_139532;
(statearr_139555_139575[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e139554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__139576 = state_139532;
state_139532 = G__139576;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_139532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_139532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_139556 = f__15790__auto__.call(null);
(statearr_139556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_139556;
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
if(typeof cljs.core.async.t_cljs$core$async139798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async139798 = (function (mult,ch,cs,meta139799){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta139799 = meta139799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async139798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_139800,meta139799__$1){
var self__ = this;
var _139800__$1 = this;
return (new cljs.core.async.t_cljs$core$async139798(self__.mult,self__.ch,self__.cs,meta139799__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async139798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_139800){
var self__ = this;
var _139800__$1 = this;
return self__.meta139799;
});})(cs))
;

cljs.core.async.t_cljs$core$async139798.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async139798.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async139798.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async139798.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async139798.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async139798.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async139798.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta139799","meta139799",-865879904,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async139798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async139798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async139798";

cljs.core.async.t_cljs$core$async139798.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async139798");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async139798 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async139798(mult__$1,ch__$1,cs__$1,meta139799){
return (new cljs.core.async.t_cljs$core$async139798(mult__$1,ch__$1,cs__$1,meta139799));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async139798(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15789__auto___140019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___140019,cs,m,dchan,dctr,done){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___140019,cs,m,dchan,dctr,done){
return (function (state_139931){
var state_val_139932 = (state_139931[(1)]);
if((state_val_139932 === (7))){
var inst_139927 = (state_139931[(2)]);
var state_139931__$1 = state_139931;
var statearr_139933_140020 = state_139931__$1;
(statearr_139933_140020[(2)] = inst_139927);

(statearr_139933_140020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (20))){
var inst_139832 = (state_139931[(7)]);
var inst_139842 = cljs.core.first.call(null,inst_139832);
var inst_139843 = cljs.core.nth.call(null,inst_139842,(0),null);
var inst_139844 = cljs.core.nth.call(null,inst_139842,(1),null);
var state_139931__$1 = (function (){var statearr_139934 = state_139931;
(statearr_139934[(8)] = inst_139843);

return statearr_139934;
})();
if(cljs.core.truth_(inst_139844)){
var statearr_139935_140021 = state_139931__$1;
(statearr_139935_140021[(1)] = (22));

} else {
var statearr_139936_140022 = state_139931__$1;
(statearr_139936_140022[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (27))){
var inst_139872 = (state_139931[(9)]);
var inst_139803 = (state_139931[(10)]);
var inst_139879 = (state_139931[(11)]);
var inst_139874 = (state_139931[(12)]);
var inst_139879__$1 = cljs.core._nth.call(null,inst_139872,inst_139874);
var inst_139880 = cljs.core.async.put_BANG_.call(null,inst_139879__$1,inst_139803,done);
var state_139931__$1 = (function (){var statearr_139937 = state_139931;
(statearr_139937[(11)] = inst_139879__$1);

return statearr_139937;
})();
if(cljs.core.truth_(inst_139880)){
var statearr_139938_140023 = state_139931__$1;
(statearr_139938_140023[(1)] = (30));

} else {
var statearr_139939_140024 = state_139931__$1;
(statearr_139939_140024[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (1))){
var state_139931__$1 = state_139931;
var statearr_139940_140025 = state_139931__$1;
(statearr_139940_140025[(2)] = null);

(statearr_139940_140025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (24))){
var inst_139832 = (state_139931[(7)]);
var inst_139849 = (state_139931[(2)]);
var inst_139850 = cljs.core.next.call(null,inst_139832);
var inst_139812 = inst_139850;
var inst_139813 = null;
var inst_139814 = (0);
var inst_139815 = (0);
var state_139931__$1 = (function (){var statearr_139941 = state_139931;
(statearr_139941[(13)] = inst_139814);

(statearr_139941[(14)] = inst_139849);

(statearr_139941[(15)] = inst_139812);

(statearr_139941[(16)] = inst_139815);

(statearr_139941[(17)] = inst_139813);

return statearr_139941;
})();
var statearr_139942_140026 = state_139931__$1;
(statearr_139942_140026[(2)] = null);

(statearr_139942_140026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (39))){
var state_139931__$1 = state_139931;
var statearr_139946_140027 = state_139931__$1;
(statearr_139946_140027[(2)] = null);

(statearr_139946_140027[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (4))){
var inst_139803 = (state_139931[(10)]);
var inst_139803__$1 = (state_139931[(2)]);
var inst_139804 = (inst_139803__$1 == null);
var state_139931__$1 = (function (){var statearr_139947 = state_139931;
(statearr_139947[(10)] = inst_139803__$1);

return statearr_139947;
})();
if(cljs.core.truth_(inst_139804)){
var statearr_139948_140028 = state_139931__$1;
(statearr_139948_140028[(1)] = (5));

} else {
var statearr_139949_140029 = state_139931__$1;
(statearr_139949_140029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (15))){
var inst_139814 = (state_139931[(13)]);
var inst_139812 = (state_139931[(15)]);
var inst_139815 = (state_139931[(16)]);
var inst_139813 = (state_139931[(17)]);
var inst_139828 = (state_139931[(2)]);
var inst_139829 = (inst_139815 + (1));
var tmp139943 = inst_139814;
var tmp139944 = inst_139812;
var tmp139945 = inst_139813;
var inst_139812__$1 = tmp139944;
var inst_139813__$1 = tmp139945;
var inst_139814__$1 = tmp139943;
var inst_139815__$1 = inst_139829;
var state_139931__$1 = (function (){var statearr_139950 = state_139931;
(statearr_139950[(13)] = inst_139814__$1);

(statearr_139950[(18)] = inst_139828);

(statearr_139950[(15)] = inst_139812__$1);

(statearr_139950[(16)] = inst_139815__$1);

(statearr_139950[(17)] = inst_139813__$1);

return statearr_139950;
})();
var statearr_139951_140030 = state_139931__$1;
(statearr_139951_140030[(2)] = null);

(statearr_139951_140030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (21))){
var inst_139853 = (state_139931[(2)]);
var state_139931__$1 = state_139931;
var statearr_139955_140031 = state_139931__$1;
(statearr_139955_140031[(2)] = inst_139853);

(statearr_139955_140031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (31))){
var inst_139879 = (state_139931[(11)]);
var inst_139883 = done.call(null,null);
var inst_139884 = cljs.core.async.untap_STAR_.call(null,m,inst_139879);
var state_139931__$1 = (function (){var statearr_139956 = state_139931;
(statearr_139956[(19)] = inst_139883);

return statearr_139956;
})();
var statearr_139957_140032 = state_139931__$1;
(statearr_139957_140032[(2)] = inst_139884);

(statearr_139957_140032[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (32))){
var inst_139872 = (state_139931[(9)]);
var inst_139871 = (state_139931[(20)]);
var inst_139873 = (state_139931[(21)]);
var inst_139874 = (state_139931[(12)]);
var inst_139886 = (state_139931[(2)]);
var inst_139887 = (inst_139874 + (1));
var tmp139952 = inst_139872;
var tmp139953 = inst_139871;
var tmp139954 = inst_139873;
var inst_139871__$1 = tmp139953;
var inst_139872__$1 = tmp139952;
var inst_139873__$1 = tmp139954;
var inst_139874__$1 = inst_139887;
var state_139931__$1 = (function (){var statearr_139958 = state_139931;
(statearr_139958[(9)] = inst_139872__$1);

(statearr_139958[(22)] = inst_139886);

(statearr_139958[(20)] = inst_139871__$1);

(statearr_139958[(21)] = inst_139873__$1);

(statearr_139958[(12)] = inst_139874__$1);

return statearr_139958;
})();
var statearr_139959_140033 = state_139931__$1;
(statearr_139959_140033[(2)] = null);

(statearr_139959_140033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (40))){
var inst_139899 = (state_139931[(23)]);
var inst_139903 = done.call(null,null);
var inst_139904 = cljs.core.async.untap_STAR_.call(null,m,inst_139899);
var state_139931__$1 = (function (){var statearr_139960 = state_139931;
(statearr_139960[(24)] = inst_139903);

return statearr_139960;
})();
var statearr_139961_140034 = state_139931__$1;
(statearr_139961_140034[(2)] = inst_139904);

(statearr_139961_140034[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (33))){
var inst_139890 = (state_139931[(25)]);
var inst_139892 = cljs.core.chunked_seq_QMARK_.call(null,inst_139890);
var state_139931__$1 = state_139931;
if(inst_139892){
var statearr_139962_140035 = state_139931__$1;
(statearr_139962_140035[(1)] = (36));

} else {
var statearr_139963_140036 = state_139931__$1;
(statearr_139963_140036[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (13))){
var inst_139822 = (state_139931[(26)]);
var inst_139825 = cljs.core.async.close_BANG_.call(null,inst_139822);
var state_139931__$1 = state_139931;
var statearr_139964_140037 = state_139931__$1;
(statearr_139964_140037[(2)] = inst_139825);

(statearr_139964_140037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (22))){
var inst_139843 = (state_139931[(8)]);
var inst_139846 = cljs.core.async.close_BANG_.call(null,inst_139843);
var state_139931__$1 = state_139931;
var statearr_139965_140038 = state_139931__$1;
(statearr_139965_140038[(2)] = inst_139846);

(statearr_139965_140038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (36))){
var inst_139890 = (state_139931[(25)]);
var inst_139894 = cljs.core.chunk_first.call(null,inst_139890);
var inst_139895 = cljs.core.chunk_rest.call(null,inst_139890);
var inst_139896 = cljs.core.count.call(null,inst_139894);
var inst_139871 = inst_139895;
var inst_139872 = inst_139894;
var inst_139873 = inst_139896;
var inst_139874 = (0);
var state_139931__$1 = (function (){var statearr_139966 = state_139931;
(statearr_139966[(9)] = inst_139872);

(statearr_139966[(20)] = inst_139871);

(statearr_139966[(21)] = inst_139873);

(statearr_139966[(12)] = inst_139874);

return statearr_139966;
})();
var statearr_139967_140039 = state_139931__$1;
(statearr_139967_140039[(2)] = null);

(statearr_139967_140039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (41))){
var inst_139890 = (state_139931[(25)]);
var inst_139906 = (state_139931[(2)]);
var inst_139907 = cljs.core.next.call(null,inst_139890);
var inst_139871 = inst_139907;
var inst_139872 = null;
var inst_139873 = (0);
var inst_139874 = (0);
var state_139931__$1 = (function (){var statearr_139968 = state_139931;
(statearr_139968[(9)] = inst_139872);

(statearr_139968[(27)] = inst_139906);

(statearr_139968[(20)] = inst_139871);

(statearr_139968[(21)] = inst_139873);

(statearr_139968[(12)] = inst_139874);

return statearr_139968;
})();
var statearr_139969_140040 = state_139931__$1;
(statearr_139969_140040[(2)] = null);

(statearr_139969_140040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (43))){
var state_139931__$1 = state_139931;
var statearr_139970_140041 = state_139931__$1;
(statearr_139970_140041[(2)] = null);

(statearr_139970_140041[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (29))){
var inst_139915 = (state_139931[(2)]);
var state_139931__$1 = state_139931;
var statearr_139971_140042 = state_139931__$1;
(statearr_139971_140042[(2)] = inst_139915);

(statearr_139971_140042[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (44))){
var inst_139924 = (state_139931[(2)]);
var state_139931__$1 = (function (){var statearr_139972 = state_139931;
(statearr_139972[(28)] = inst_139924);

return statearr_139972;
})();
var statearr_139973_140043 = state_139931__$1;
(statearr_139973_140043[(2)] = null);

(statearr_139973_140043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (6))){
var inst_139863 = (state_139931[(29)]);
var inst_139862 = cljs.core.deref.call(null,cs);
var inst_139863__$1 = cljs.core.keys.call(null,inst_139862);
var inst_139864 = cljs.core.count.call(null,inst_139863__$1);
var inst_139865 = cljs.core.reset_BANG_.call(null,dctr,inst_139864);
var inst_139870 = cljs.core.seq.call(null,inst_139863__$1);
var inst_139871 = inst_139870;
var inst_139872 = null;
var inst_139873 = (0);
var inst_139874 = (0);
var state_139931__$1 = (function (){var statearr_139974 = state_139931;
(statearr_139974[(29)] = inst_139863__$1);

(statearr_139974[(9)] = inst_139872);

(statearr_139974[(30)] = inst_139865);

(statearr_139974[(20)] = inst_139871);

(statearr_139974[(21)] = inst_139873);

(statearr_139974[(12)] = inst_139874);

return statearr_139974;
})();
var statearr_139975_140044 = state_139931__$1;
(statearr_139975_140044[(2)] = null);

(statearr_139975_140044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (28))){
var inst_139871 = (state_139931[(20)]);
var inst_139890 = (state_139931[(25)]);
var inst_139890__$1 = cljs.core.seq.call(null,inst_139871);
var state_139931__$1 = (function (){var statearr_139976 = state_139931;
(statearr_139976[(25)] = inst_139890__$1);

return statearr_139976;
})();
if(inst_139890__$1){
var statearr_139977_140045 = state_139931__$1;
(statearr_139977_140045[(1)] = (33));

} else {
var statearr_139978_140046 = state_139931__$1;
(statearr_139978_140046[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (25))){
var inst_139873 = (state_139931[(21)]);
var inst_139874 = (state_139931[(12)]);
var inst_139876 = (inst_139874 < inst_139873);
var inst_139877 = inst_139876;
var state_139931__$1 = state_139931;
if(cljs.core.truth_(inst_139877)){
var statearr_139979_140047 = state_139931__$1;
(statearr_139979_140047[(1)] = (27));

} else {
var statearr_139980_140048 = state_139931__$1;
(statearr_139980_140048[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (34))){
var state_139931__$1 = state_139931;
var statearr_139981_140049 = state_139931__$1;
(statearr_139981_140049[(2)] = null);

(statearr_139981_140049[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (17))){
var state_139931__$1 = state_139931;
var statearr_139982_140050 = state_139931__$1;
(statearr_139982_140050[(2)] = null);

(statearr_139982_140050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (3))){
var inst_139929 = (state_139931[(2)]);
var state_139931__$1 = state_139931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139931__$1,inst_139929);
} else {
if((state_val_139932 === (12))){
var inst_139858 = (state_139931[(2)]);
var state_139931__$1 = state_139931;
var statearr_139983_140051 = state_139931__$1;
(statearr_139983_140051[(2)] = inst_139858);

(statearr_139983_140051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (2))){
var state_139931__$1 = state_139931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139931__$1,(4),ch);
} else {
if((state_val_139932 === (23))){
var state_139931__$1 = state_139931;
var statearr_139984_140052 = state_139931__$1;
(statearr_139984_140052[(2)] = null);

(statearr_139984_140052[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (35))){
var inst_139913 = (state_139931[(2)]);
var state_139931__$1 = state_139931;
var statearr_139985_140053 = state_139931__$1;
(statearr_139985_140053[(2)] = inst_139913);

(statearr_139985_140053[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (19))){
var inst_139832 = (state_139931[(7)]);
var inst_139836 = cljs.core.chunk_first.call(null,inst_139832);
var inst_139837 = cljs.core.chunk_rest.call(null,inst_139832);
var inst_139838 = cljs.core.count.call(null,inst_139836);
var inst_139812 = inst_139837;
var inst_139813 = inst_139836;
var inst_139814 = inst_139838;
var inst_139815 = (0);
var state_139931__$1 = (function (){var statearr_139986 = state_139931;
(statearr_139986[(13)] = inst_139814);

(statearr_139986[(15)] = inst_139812);

(statearr_139986[(16)] = inst_139815);

(statearr_139986[(17)] = inst_139813);

return statearr_139986;
})();
var statearr_139987_140054 = state_139931__$1;
(statearr_139987_140054[(2)] = null);

(statearr_139987_140054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (11))){
var inst_139832 = (state_139931[(7)]);
var inst_139812 = (state_139931[(15)]);
var inst_139832__$1 = cljs.core.seq.call(null,inst_139812);
var state_139931__$1 = (function (){var statearr_139988 = state_139931;
(statearr_139988[(7)] = inst_139832__$1);

return statearr_139988;
})();
if(inst_139832__$1){
var statearr_139989_140055 = state_139931__$1;
(statearr_139989_140055[(1)] = (16));

} else {
var statearr_139990_140056 = state_139931__$1;
(statearr_139990_140056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (9))){
var inst_139860 = (state_139931[(2)]);
var state_139931__$1 = state_139931;
var statearr_139991_140057 = state_139931__$1;
(statearr_139991_140057[(2)] = inst_139860);

(statearr_139991_140057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (5))){
var inst_139810 = cljs.core.deref.call(null,cs);
var inst_139811 = cljs.core.seq.call(null,inst_139810);
var inst_139812 = inst_139811;
var inst_139813 = null;
var inst_139814 = (0);
var inst_139815 = (0);
var state_139931__$1 = (function (){var statearr_139992 = state_139931;
(statearr_139992[(13)] = inst_139814);

(statearr_139992[(15)] = inst_139812);

(statearr_139992[(16)] = inst_139815);

(statearr_139992[(17)] = inst_139813);

return statearr_139992;
})();
var statearr_139993_140058 = state_139931__$1;
(statearr_139993_140058[(2)] = null);

(statearr_139993_140058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (14))){
var state_139931__$1 = state_139931;
var statearr_139994_140059 = state_139931__$1;
(statearr_139994_140059[(2)] = null);

(statearr_139994_140059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (45))){
var inst_139921 = (state_139931[(2)]);
var state_139931__$1 = state_139931;
var statearr_139995_140060 = state_139931__$1;
(statearr_139995_140060[(2)] = inst_139921);

(statearr_139995_140060[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (26))){
var inst_139863 = (state_139931[(29)]);
var inst_139917 = (state_139931[(2)]);
var inst_139918 = cljs.core.seq.call(null,inst_139863);
var state_139931__$1 = (function (){var statearr_139996 = state_139931;
(statearr_139996[(31)] = inst_139917);

return statearr_139996;
})();
if(inst_139918){
var statearr_139997_140061 = state_139931__$1;
(statearr_139997_140061[(1)] = (42));

} else {
var statearr_139998_140062 = state_139931__$1;
(statearr_139998_140062[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (16))){
var inst_139832 = (state_139931[(7)]);
var inst_139834 = cljs.core.chunked_seq_QMARK_.call(null,inst_139832);
var state_139931__$1 = state_139931;
if(inst_139834){
var statearr_139999_140063 = state_139931__$1;
(statearr_139999_140063[(1)] = (19));

} else {
var statearr_140000_140064 = state_139931__$1;
(statearr_140000_140064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (38))){
var inst_139910 = (state_139931[(2)]);
var state_139931__$1 = state_139931;
var statearr_140001_140065 = state_139931__$1;
(statearr_140001_140065[(2)] = inst_139910);

(statearr_140001_140065[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (30))){
var state_139931__$1 = state_139931;
var statearr_140002_140066 = state_139931__$1;
(statearr_140002_140066[(2)] = null);

(statearr_140002_140066[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (10))){
var inst_139815 = (state_139931[(16)]);
var inst_139813 = (state_139931[(17)]);
var inst_139821 = cljs.core._nth.call(null,inst_139813,inst_139815);
var inst_139822 = cljs.core.nth.call(null,inst_139821,(0),null);
var inst_139823 = cljs.core.nth.call(null,inst_139821,(1),null);
var state_139931__$1 = (function (){var statearr_140003 = state_139931;
(statearr_140003[(26)] = inst_139822);

return statearr_140003;
})();
if(cljs.core.truth_(inst_139823)){
var statearr_140004_140067 = state_139931__$1;
(statearr_140004_140067[(1)] = (13));

} else {
var statearr_140005_140068 = state_139931__$1;
(statearr_140005_140068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (18))){
var inst_139856 = (state_139931[(2)]);
var state_139931__$1 = state_139931;
var statearr_140006_140069 = state_139931__$1;
(statearr_140006_140069[(2)] = inst_139856);

(statearr_140006_140069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (42))){
var state_139931__$1 = state_139931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139931__$1,(45),dchan);
} else {
if((state_val_139932 === (37))){
var inst_139803 = (state_139931[(10)]);
var inst_139899 = (state_139931[(23)]);
var inst_139890 = (state_139931[(25)]);
var inst_139899__$1 = cljs.core.first.call(null,inst_139890);
var inst_139900 = cljs.core.async.put_BANG_.call(null,inst_139899__$1,inst_139803,done);
var state_139931__$1 = (function (){var statearr_140007 = state_139931;
(statearr_140007[(23)] = inst_139899__$1);

return statearr_140007;
})();
if(cljs.core.truth_(inst_139900)){
var statearr_140008_140070 = state_139931__$1;
(statearr_140008_140070[(1)] = (39));

} else {
var statearr_140009_140071 = state_139931__$1;
(statearr_140009_140071[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139932 === (8))){
var inst_139814 = (state_139931[(13)]);
var inst_139815 = (state_139931[(16)]);
var inst_139817 = (inst_139815 < inst_139814);
var inst_139818 = inst_139817;
var state_139931__$1 = state_139931;
if(cljs.core.truth_(inst_139818)){
var statearr_140010_140072 = state_139931__$1;
(statearr_140010_140072[(1)] = (10));

} else {
var statearr_140011_140073 = state_139931__$1;
(statearr_140011_140073[(1)] = (11));

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
});})(c__15789__auto___140019,cs,m,dchan,dctr,done))
;
return ((function (switch__15724__auto__,c__15789__auto___140019,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15725__auto__ = null;
var cljs$core$async$mult_$_state_machine__15725__auto____0 = (function (){
var statearr_140015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_140015[(0)] = cljs$core$async$mult_$_state_machine__15725__auto__);

(statearr_140015[(1)] = (1));

return statearr_140015;
});
var cljs$core$async$mult_$_state_machine__15725__auto____1 = (function (state_139931){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_139931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e140016){if((e140016 instanceof Object)){
var ex__15728__auto__ = e140016;
var statearr_140017_140074 = state_139931;
(statearr_140017_140074[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e140016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__140075 = state_139931;
state_139931 = G__140075;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15725__auto__ = function(state_139931){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15725__auto____1.call(this,state_139931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15725__auto____0;
cljs$core$async$mult_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15725__auto____1;
return cljs$core$async$mult_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___140019,cs,m,dchan,dctr,done))
})();
var state__15791__auto__ = (function (){var statearr_140018 = f__15790__auto__.call(null);
(statearr_140018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___140019);

return statearr_140018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___140019,cs,m,dchan,dctr,done))
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
var args140076 = [];
var len__14433__auto___140079 = arguments.length;
var i__14434__auto___140080 = (0);
while(true){
if((i__14434__auto___140080 < len__14433__auto___140079)){
args140076.push((arguments[i__14434__auto___140080]));

var G__140081 = (i__14434__auto___140080 + (1));
i__14434__auto___140080 = G__140081;
continue;
} else {
}
break;
}

var G__140078 = args140076.length;
switch (G__140078) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args140076.length)].join('')));

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
var len__14433__auto___140093 = arguments.length;
var i__14434__auto___140094 = (0);
while(true){
if((i__14434__auto___140094 < len__14433__auto___140093)){
args__14440__auto__.push((arguments[i__14434__auto___140094]));

var G__140095 = (i__14434__auto___140094 + (1));
i__14434__auto___140094 = G__140095;
continue;
} else {
}
break;
}

var argseq__14441__auto__ = ((((3) < args__14440__auto__.length))?(new cljs.core.IndexedSeq(args__14440__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__14441__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__140087){
var map__140088 = p__140087;
var map__140088__$1 = ((((!((map__140088 == null)))?((((map__140088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__140088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__140088):map__140088);
var opts = map__140088__$1;
var statearr_140090_140096 = state;
(statearr_140090_140096[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__140088,map__140088__$1,opts){
return (function (val){
var statearr_140091_140097 = state;
(statearr_140091_140097[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__140088,map__140088__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_140092_140098 = state;
(statearr_140092_140098[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq140083){
var G__140084 = cljs.core.first.call(null,seq140083);
var seq140083__$1 = cljs.core.next.call(null,seq140083);
var G__140085 = cljs.core.first.call(null,seq140083__$1);
var seq140083__$2 = cljs.core.next.call(null,seq140083__$1);
var G__140086 = cljs.core.first.call(null,seq140083__$2);
var seq140083__$3 = cljs.core.next.call(null,seq140083__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__140084,G__140085,G__140086,seq140083__$3);
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
if(typeof cljs.core.async.t_cljs$core$async140262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async140262 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta140263){
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
this.meta140263 = meta140263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async140262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_140264,meta140263__$1){
var self__ = this;
var _140264__$1 = this;
return (new cljs.core.async.t_cljs$core$async140262(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta140263__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async140262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_140264){
var self__ = this;
var _140264__$1 = this;
return self__.meta140263;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async140262.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async140262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async140262.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async140262.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async140262.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async140262.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async140262.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async140262.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async140262.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta140263","meta140263",8342651,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async140262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async140262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async140262";

cljs.core.async.t_cljs$core$async140262.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async140262");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async140262 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async140262(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta140263){
return (new cljs.core.async.t_cljs$core$async140262(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta140263));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async140262(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15789__auto___140425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___140425,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___140425,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_140362){
var state_val_140363 = (state_140362[(1)]);
if((state_val_140363 === (7))){
var inst_140280 = (state_140362[(2)]);
var state_140362__$1 = state_140362;
var statearr_140364_140426 = state_140362__$1;
(statearr_140364_140426[(2)] = inst_140280);

(statearr_140364_140426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (20))){
var inst_140292 = (state_140362[(7)]);
var state_140362__$1 = state_140362;
var statearr_140365_140427 = state_140362__$1;
(statearr_140365_140427[(2)] = inst_140292);

(statearr_140365_140427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (27))){
var state_140362__$1 = state_140362;
var statearr_140366_140428 = state_140362__$1;
(statearr_140366_140428[(2)] = null);

(statearr_140366_140428[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (1))){
var inst_140268 = (state_140362[(8)]);
var inst_140268__$1 = calc_state.call(null);
var inst_140270 = (inst_140268__$1 == null);
var inst_140271 = cljs.core.not.call(null,inst_140270);
var state_140362__$1 = (function (){var statearr_140367 = state_140362;
(statearr_140367[(8)] = inst_140268__$1);

return statearr_140367;
})();
if(inst_140271){
var statearr_140368_140429 = state_140362__$1;
(statearr_140368_140429[(1)] = (2));

} else {
var statearr_140369_140430 = state_140362__$1;
(statearr_140369_140430[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (24))){
var inst_140315 = (state_140362[(9)]);
var inst_140336 = (state_140362[(10)]);
var inst_140322 = (state_140362[(11)]);
var inst_140336__$1 = inst_140315.call(null,inst_140322);
var state_140362__$1 = (function (){var statearr_140370 = state_140362;
(statearr_140370[(10)] = inst_140336__$1);

return statearr_140370;
})();
if(cljs.core.truth_(inst_140336__$1)){
var statearr_140371_140431 = state_140362__$1;
(statearr_140371_140431[(1)] = (29));

} else {
var statearr_140372_140432 = state_140362__$1;
(statearr_140372_140432[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (4))){
var inst_140283 = (state_140362[(2)]);
var state_140362__$1 = state_140362;
if(cljs.core.truth_(inst_140283)){
var statearr_140373_140433 = state_140362__$1;
(statearr_140373_140433[(1)] = (8));

} else {
var statearr_140374_140434 = state_140362__$1;
(statearr_140374_140434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (15))){
var inst_140309 = (state_140362[(2)]);
var state_140362__$1 = state_140362;
if(cljs.core.truth_(inst_140309)){
var statearr_140375_140435 = state_140362__$1;
(statearr_140375_140435[(1)] = (19));

} else {
var statearr_140376_140436 = state_140362__$1;
(statearr_140376_140436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (21))){
var inst_140314 = (state_140362[(12)]);
var inst_140314__$1 = (state_140362[(2)]);
var inst_140315 = cljs.core.get.call(null,inst_140314__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_140316 = cljs.core.get.call(null,inst_140314__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_140317 = cljs.core.get.call(null,inst_140314__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_140362__$1 = (function (){var statearr_140377 = state_140362;
(statearr_140377[(12)] = inst_140314__$1);

(statearr_140377[(9)] = inst_140315);

(statearr_140377[(13)] = inst_140316);

return statearr_140377;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_140362__$1,(22),inst_140317);
} else {
if((state_val_140363 === (31))){
var inst_140344 = (state_140362[(2)]);
var state_140362__$1 = state_140362;
if(cljs.core.truth_(inst_140344)){
var statearr_140378_140437 = state_140362__$1;
(statearr_140378_140437[(1)] = (32));

} else {
var statearr_140379_140438 = state_140362__$1;
(statearr_140379_140438[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (32))){
var inst_140321 = (state_140362[(14)]);
var state_140362__$1 = state_140362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140362__$1,(35),out,inst_140321);
} else {
if((state_val_140363 === (33))){
var inst_140314 = (state_140362[(12)]);
var inst_140292 = inst_140314;
var state_140362__$1 = (function (){var statearr_140380 = state_140362;
(statearr_140380[(7)] = inst_140292);

return statearr_140380;
})();
var statearr_140381_140439 = state_140362__$1;
(statearr_140381_140439[(2)] = null);

(statearr_140381_140439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (13))){
var inst_140292 = (state_140362[(7)]);
var inst_140299 = inst_140292.cljs$lang$protocol_mask$partition0$;
var inst_140300 = (inst_140299 & (64));
var inst_140301 = inst_140292.cljs$core$ISeq$;
var inst_140302 = (inst_140300) || (inst_140301);
var state_140362__$1 = state_140362;
if(cljs.core.truth_(inst_140302)){
var statearr_140382_140440 = state_140362__$1;
(statearr_140382_140440[(1)] = (16));

} else {
var statearr_140383_140441 = state_140362__$1;
(statearr_140383_140441[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (22))){
var inst_140321 = (state_140362[(14)]);
var inst_140322 = (state_140362[(11)]);
var inst_140320 = (state_140362[(2)]);
var inst_140321__$1 = cljs.core.nth.call(null,inst_140320,(0),null);
var inst_140322__$1 = cljs.core.nth.call(null,inst_140320,(1),null);
var inst_140323 = (inst_140321__$1 == null);
var inst_140324 = cljs.core._EQ_.call(null,inst_140322__$1,change);
var inst_140325 = (inst_140323) || (inst_140324);
var state_140362__$1 = (function (){var statearr_140384 = state_140362;
(statearr_140384[(14)] = inst_140321__$1);

(statearr_140384[(11)] = inst_140322__$1);

return statearr_140384;
})();
if(cljs.core.truth_(inst_140325)){
var statearr_140385_140442 = state_140362__$1;
(statearr_140385_140442[(1)] = (23));

} else {
var statearr_140386_140443 = state_140362__$1;
(statearr_140386_140443[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (36))){
var inst_140314 = (state_140362[(12)]);
var inst_140292 = inst_140314;
var state_140362__$1 = (function (){var statearr_140387 = state_140362;
(statearr_140387[(7)] = inst_140292);

return statearr_140387;
})();
var statearr_140388_140444 = state_140362__$1;
(statearr_140388_140444[(2)] = null);

(statearr_140388_140444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (29))){
var inst_140336 = (state_140362[(10)]);
var state_140362__$1 = state_140362;
var statearr_140389_140445 = state_140362__$1;
(statearr_140389_140445[(2)] = inst_140336);

(statearr_140389_140445[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (6))){
var state_140362__$1 = state_140362;
var statearr_140390_140446 = state_140362__$1;
(statearr_140390_140446[(2)] = false);

(statearr_140390_140446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (28))){
var inst_140332 = (state_140362[(2)]);
var inst_140333 = calc_state.call(null);
var inst_140292 = inst_140333;
var state_140362__$1 = (function (){var statearr_140391 = state_140362;
(statearr_140391[(7)] = inst_140292);

(statearr_140391[(15)] = inst_140332);

return statearr_140391;
})();
var statearr_140392_140447 = state_140362__$1;
(statearr_140392_140447[(2)] = null);

(statearr_140392_140447[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (25))){
var inst_140358 = (state_140362[(2)]);
var state_140362__$1 = state_140362;
var statearr_140393_140448 = state_140362__$1;
(statearr_140393_140448[(2)] = inst_140358);

(statearr_140393_140448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (34))){
var inst_140356 = (state_140362[(2)]);
var state_140362__$1 = state_140362;
var statearr_140394_140449 = state_140362__$1;
(statearr_140394_140449[(2)] = inst_140356);

(statearr_140394_140449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (17))){
var state_140362__$1 = state_140362;
var statearr_140395_140450 = state_140362__$1;
(statearr_140395_140450[(2)] = false);

(statearr_140395_140450[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (3))){
var state_140362__$1 = state_140362;
var statearr_140396_140451 = state_140362__$1;
(statearr_140396_140451[(2)] = false);

(statearr_140396_140451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (12))){
var inst_140360 = (state_140362[(2)]);
var state_140362__$1 = state_140362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140362__$1,inst_140360);
} else {
if((state_val_140363 === (2))){
var inst_140268 = (state_140362[(8)]);
var inst_140273 = inst_140268.cljs$lang$protocol_mask$partition0$;
var inst_140274 = (inst_140273 & (64));
var inst_140275 = inst_140268.cljs$core$ISeq$;
var inst_140276 = (inst_140274) || (inst_140275);
var state_140362__$1 = state_140362;
if(cljs.core.truth_(inst_140276)){
var statearr_140397_140452 = state_140362__$1;
(statearr_140397_140452[(1)] = (5));

} else {
var statearr_140398_140453 = state_140362__$1;
(statearr_140398_140453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (23))){
var inst_140321 = (state_140362[(14)]);
var inst_140327 = (inst_140321 == null);
var state_140362__$1 = state_140362;
if(cljs.core.truth_(inst_140327)){
var statearr_140399_140454 = state_140362__$1;
(statearr_140399_140454[(1)] = (26));

} else {
var statearr_140400_140455 = state_140362__$1;
(statearr_140400_140455[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (35))){
var inst_140347 = (state_140362[(2)]);
var state_140362__$1 = state_140362;
if(cljs.core.truth_(inst_140347)){
var statearr_140401_140456 = state_140362__$1;
(statearr_140401_140456[(1)] = (36));

} else {
var statearr_140402_140457 = state_140362__$1;
(statearr_140402_140457[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (19))){
var inst_140292 = (state_140362[(7)]);
var inst_140311 = cljs.core.apply.call(null,cljs.core.hash_map,inst_140292);
var state_140362__$1 = state_140362;
var statearr_140403_140458 = state_140362__$1;
(statearr_140403_140458[(2)] = inst_140311);

(statearr_140403_140458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (11))){
var inst_140292 = (state_140362[(7)]);
var inst_140296 = (inst_140292 == null);
var inst_140297 = cljs.core.not.call(null,inst_140296);
var state_140362__$1 = state_140362;
if(inst_140297){
var statearr_140404_140459 = state_140362__$1;
(statearr_140404_140459[(1)] = (13));

} else {
var statearr_140405_140460 = state_140362__$1;
(statearr_140405_140460[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (9))){
var inst_140268 = (state_140362[(8)]);
var state_140362__$1 = state_140362;
var statearr_140406_140461 = state_140362__$1;
(statearr_140406_140461[(2)] = inst_140268);

(statearr_140406_140461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (5))){
var state_140362__$1 = state_140362;
var statearr_140407_140462 = state_140362__$1;
(statearr_140407_140462[(2)] = true);

(statearr_140407_140462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (14))){
var state_140362__$1 = state_140362;
var statearr_140408_140463 = state_140362__$1;
(statearr_140408_140463[(2)] = false);

(statearr_140408_140463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (26))){
var inst_140322 = (state_140362[(11)]);
var inst_140329 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_140322);
var state_140362__$1 = state_140362;
var statearr_140409_140464 = state_140362__$1;
(statearr_140409_140464[(2)] = inst_140329);

(statearr_140409_140464[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (16))){
var state_140362__$1 = state_140362;
var statearr_140410_140465 = state_140362__$1;
(statearr_140410_140465[(2)] = true);

(statearr_140410_140465[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (38))){
var inst_140352 = (state_140362[(2)]);
var state_140362__$1 = state_140362;
var statearr_140411_140466 = state_140362__$1;
(statearr_140411_140466[(2)] = inst_140352);

(statearr_140411_140466[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (30))){
var inst_140315 = (state_140362[(9)]);
var inst_140322 = (state_140362[(11)]);
var inst_140316 = (state_140362[(13)]);
var inst_140339 = cljs.core.empty_QMARK_.call(null,inst_140315);
var inst_140340 = inst_140316.call(null,inst_140322);
var inst_140341 = cljs.core.not.call(null,inst_140340);
var inst_140342 = (inst_140339) && (inst_140341);
var state_140362__$1 = state_140362;
var statearr_140412_140467 = state_140362__$1;
(statearr_140412_140467[(2)] = inst_140342);

(statearr_140412_140467[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (10))){
var inst_140268 = (state_140362[(8)]);
var inst_140288 = (state_140362[(2)]);
var inst_140289 = cljs.core.get.call(null,inst_140288,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_140290 = cljs.core.get.call(null,inst_140288,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_140291 = cljs.core.get.call(null,inst_140288,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_140292 = inst_140268;
var state_140362__$1 = (function (){var statearr_140413 = state_140362;
(statearr_140413[(16)] = inst_140289);

(statearr_140413[(7)] = inst_140292);

(statearr_140413[(17)] = inst_140290);

(statearr_140413[(18)] = inst_140291);

return statearr_140413;
})();
var statearr_140414_140468 = state_140362__$1;
(statearr_140414_140468[(2)] = null);

(statearr_140414_140468[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (18))){
var inst_140306 = (state_140362[(2)]);
var state_140362__$1 = state_140362;
var statearr_140415_140469 = state_140362__$1;
(statearr_140415_140469[(2)] = inst_140306);

(statearr_140415_140469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (37))){
var state_140362__$1 = state_140362;
var statearr_140416_140470 = state_140362__$1;
(statearr_140416_140470[(2)] = null);

(statearr_140416_140470[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140363 === (8))){
var inst_140268 = (state_140362[(8)]);
var inst_140285 = cljs.core.apply.call(null,cljs.core.hash_map,inst_140268);
var state_140362__$1 = state_140362;
var statearr_140417_140471 = state_140362__$1;
(statearr_140417_140471[(2)] = inst_140285);

(statearr_140417_140471[(1)] = (10));


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
});})(c__15789__auto___140425,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15724__auto__,c__15789__auto___140425,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15725__auto__ = null;
var cljs$core$async$mix_$_state_machine__15725__auto____0 = (function (){
var statearr_140421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_140421[(0)] = cljs$core$async$mix_$_state_machine__15725__auto__);

(statearr_140421[(1)] = (1));

return statearr_140421;
});
var cljs$core$async$mix_$_state_machine__15725__auto____1 = (function (state_140362){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_140362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e140422){if((e140422 instanceof Object)){
var ex__15728__auto__ = e140422;
var statearr_140423_140472 = state_140362;
(statearr_140423_140472[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e140422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__140473 = state_140362;
state_140362 = G__140473;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15725__auto__ = function(state_140362){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15725__auto____1.call(this,state_140362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15725__auto____0;
cljs$core$async$mix_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15725__auto____1;
return cljs$core$async$mix_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___140425,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15791__auto__ = (function (){var statearr_140424 = f__15790__auto__.call(null);
(statearr_140424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___140425);

return statearr_140424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___140425,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args140474 = [];
var len__14433__auto___140477 = arguments.length;
var i__14434__auto___140478 = (0);
while(true){
if((i__14434__auto___140478 < len__14433__auto___140477)){
args140474.push((arguments[i__14434__auto___140478]));

var G__140479 = (i__14434__auto___140478 + (1));
i__14434__auto___140478 = G__140479;
continue;
} else {
}
break;
}

var G__140476 = args140474.length;
switch (G__140476) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args140474.length)].join('')));

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
var args140482 = [];
var len__14433__auto___140607 = arguments.length;
var i__14434__auto___140608 = (0);
while(true){
if((i__14434__auto___140608 < len__14433__auto___140607)){
args140482.push((arguments[i__14434__auto___140608]));

var G__140609 = (i__14434__auto___140608 + (1));
i__14434__auto___140608 = G__140609;
continue;
} else {
}
break;
}

var G__140484 = args140482.length;
switch (G__140484) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args140482.length)].join('')));

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
return (function (p1__140481_SHARP_){
if(cljs.core.truth_(p1__140481_SHARP_.call(null,topic))){
return p1__140481_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__140481_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13375__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async140485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async140485 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta140486){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta140486 = meta140486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async140485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_140487,meta140486__$1){
var self__ = this;
var _140487__$1 = this;
return (new cljs.core.async.t_cljs$core$async140485(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta140486__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async140485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_140487){
var self__ = this;
var _140487__$1 = this;
return self__.meta140486;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async140485.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async140485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async140485.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async140485.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async140485.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async140485.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async140485.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async140485.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta140486","meta140486",-812062721,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async140485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async140485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async140485";

cljs.core.async.t_cljs$core$async140485.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async140485");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async140485 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async140485(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta140486){
return (new cljs.core.async.t_cljs$core$async140485(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta140486));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async140485(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15789__auto___140611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___140611,mults,ensure_mult,p){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___140611,mults,ensure_mult,p){
return (function (state_140559){
var state_val_140560 = (state_140559[(1)]);
if((state_val_140560 === (7))){
var inst_140555 = (state_140559[(2)]);
var state_140559__$1 = state_140559;
var statearr_140561_140612 = state_140559__$1;
(statearr_140561_140612[(2)] = inst_140555);

(statearr_140561_140612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (20))){
var state_140559__$1 = state_140559;
var statearr_140562_140613 = state_140559__$1;
(statearr_140562_140613[(2)] = null);

(statearr_140562_140613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (1))){
var state_140559__$1 = state_140559;
var statearr_140563_140614 = state_140559__$1;
(statearr_140563_140614[(2)] = null);

(statearr_140563_140614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (24))){
var inst_140538 = (state_140559[(7)]);
var inst_140547 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_140538);
var state_140559__$1 = state_140559;
var statearr_140564_140615 = state_140559__$1;
(statearr_140564_140615[(2)] = inst_140547);

(statearr_140564_140615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (4))){
var inst_140490 = (state_140559[(8)]);
var inst_140490__$1 = (state_140559[(2)]);
var inst_140491 = (inst_140490__$1 == null);
var state_140559__$1 = (function (){var statearr_140565 = state_140559;
(statearr_140565[(8)] = inst_140490__$1);

return statearr_140565;
})();
if(cljs.core.truth_(inst_140491)){
var statearr_140566_140616 = state_140559__$1;
(statearr_140566_140616[(1)] = (5));

} else {
var statearr_140567_140617 = state_140559__$1;
(statearr_140567_140617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (15))){
var inst_140532 = (state_140559[(2)]);
var state_140559__$1 = state_140559;
var statearr_140568_140618 = state_140559__$1;
(statearr_140568_140618[(2)] = inst_140532);

(statearr_140568_140618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (21))){
var inst_140552 = (state_140559[(2)]);
var state_140559__$1 = (function (){var statearr_140569 = state_140559;
(statearr_140569[(9)] = inst_140552);

return statearr_140569;
})();
var statearr_140570_140619 = state_140559__$1;
(statearr_140570_140619[(2)] = null);

(statearr_140570_140619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (13))){
var inst_140514 = (state_140559[(10)]);
var inst_140516 = cljs.core.chunked_seq_QMARK_.call(null,inst_140514);
var state_140559__$1 = state_140559;
if(inst_140516){
var statearr_140571_140620 = state_140559__$1;
(statearr_140571_140620[(1)] = (16));

} else {
var statearr_140572_140621 = state_140559__$1;
(statearr_140572_140621[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (22))){
var inst_140544 = (state_140559[(2)]);
var state_140559__$1 = state_140559;
if(cljs.core.truth_(inst_140544)){
var statearr_140573_140622 = state_140559__$1;
(statearr_140573_140622[(1)] = (23));

} else {
var statearr_140574_140623 = state_140559__$1;
(statearr_140574_140623[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (6))){
var inst_140538 = (state_140559[(7)]);
var inst_140490 = (state_140559[(8)]);
var inst_140540 = (state_140559[(11)]);
var inst_140538__$1 = topic_fn.call(null,inst_140490);
var inst_140539 = cljs.core.deref.call(null,mults);
var inst_140540__$1 = cljs.core.get.call(null,inst_140539,inst_140538__$1);
var state_140559__$1 = (function (){var statearr_140575 = state_140559;
(statearr_140575[(7)] = inst_140538__$1);

(statearr_140575[(11)] = inst_140540__$1);

return statearr_140575;
})();
if(cljs.core.truth_(inst_140540__$1)){
var statearr_140576_140624 = state_140559__$1;
(statearr_140576_140624[(1)] = (19));

} else {
var statearr_140577_140625 = state_140559__$1;
(statearr_140577_140625[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (25))){
var inst_140549 = (state_140559[(2)]);
var state_140559__$1 = state_140559;
var statearr_140578_140626 = state_140559__$1;
(statearr_140578_140626[(2)] = inst_140549);

(statearr_140578_140626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (17))){
var inst_140514 = (state_140559[(10)]);
var inst_140523 = cljs.core.first.call(null,inst_140514);
var inst_140524 = cljs.core.async.muxch_STAR_.call(null,inst_140523);
var inst_140525 = cljs.core.async.close_BANG_.call(null,inst_140524);
var inst_140526 = cljs.core.next.call(null,inst_140514);
var inst_140500 = inst_140526;
var inst_140501 = null;
var inst_140502 = (0);
var inst_140503 = (0);
var state_140559__$1 = (function (){var statearr_140579 = state_140559;
(statearr_140579[(12)] = inst_140500);

(statearr_140579[(13)] = inst_140502);

(statearr_140579[(14)] = inst_140501);

(statearr_140579[(15)] = inst_140525);

(statearr_140579[(16)] = inst_140503);

return statearr_140579;
})();
var statearr_140580_140627 = state_140559__$1;
(statearr_140580_140627[(2)] = null);

(statearr_140580_140627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (3))){
var inst_140557 = (state_140559[(2)]);
var state_140559__$1 = state_140559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140559__$1,inst_140557);
} else {
if((state_val_140560 === (12))){
var inst_140534 = (state_140559[(2)]);
var state_140559__$1 = state_140559;
var statearr_140581_140628 = state_140559__$1;
(statearr_140581_140628[(2)] = inst_140534);

(statearr_140581_140628[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (2))){
var state_140559__$1 = state_140559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140559__$1,(4),ch);
} else {
if((state_val_140560 === (23))){
var state_140559__$1 = state_140559;
var statearr_140582_140629 = state_140559__$1;
(statearr_140582_140629[(2)] = null);

(statearr_140582_140629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (19))){
var inst_140490 = (state_140559[(8)]);
var inst_140540 = (state_140559[(11)]);
var inst_140542 = cljs.core.async.muxch_STAR_.call(null,inst_140540);
var state_140559__$1 = state_140559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140559__$1,(22),inst_140542,inst_140490);
} else {
if((state_val_140560 === (11))){
var inst_140514 = (state_140559[(10)]);
var inst_140500 = (state_140559[(12)]);
var inst_140514__$1 = cljs.core.seq.call(null,inst_140500);
var state_140559__$1 = (function (){var statearr_140583 = state_140559;
(statearr_140583[(10)] = inst_140514__$1);

return statearr_140583;
})();
if(inst_140514__$1){
var statearr_140584_140630 = state_140559__$1;
(statearr_140584_140630[(1)] = (13));

} else {
var statearr_140585_140631 = state_140559__$1;
(statearr_140585_140631[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (9))){
var inst_140536 = (state_140559[(2)]);
var state_140559__$1 = state_140559;
var statearr_140586_140632 = state_140559__$1;
(statearr_140586_140632[(2)] = inst_140536);

(statearr_140586_140632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (5))){
var inst_140497 = cljs.core.deref.call(null,mults);
var inst_140498 = cljs.core.vals.call(null,inst_140497);
var inst_140499 = cljs.core.seq.call(null,inst_140498);
var inst_140500 = inst_140499;
var inst_140501 = null;
var inst_140502 = (0);
var inst_140503 = (0);
var state_140559__$1 = (function (){var statearr_140587 = state_140559;
(statearr_140587[(12)] = inst_140500);

(statearr_140587[(13)] = inst_140502);

(statearr_140587[(14)] = inst_140501);

(statearr_140587[(16)] = inst_140503);

return statearr_140587;
})();
var statearr_140588_140633 = state_140559__$1;
(statearr_140588_140633[(2)] = null);

(statearr_140588_140633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (14))){
var state_140559__$1 = state_140559;
var statearr_140592_140634 = state_140559__$1;
(statearr_140592_140634[(2)] = null);

(statearr_140592_140634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (16))){
var inst_140514 = (state_140559[(10)]);
var inst_140518 = cljs.core.chunk_first.call(null,inst_140514);
var inst_140519 = cljs.core.chunk_rest.call(null,inst_140514);
var inst_140520 = cljs.core.count.call(null,inst_140518);
var inst_140500 = inst_140519;
var inst_140501 = inst_140518;
var inst_140502 = inst_140520;
var inst_140503 = (0);
var state_140559__$1 = (function (){var statearr_140593 = state_140559;
(statearr_140593[(12)] = inst_140500);

(statearr_140593[(13)] = inst_140502);

(statearr_140593[(14)] = inst_140501);

(statearr_140593[(16)] = inst_140503);

return statearr_140593;
})();
var statearr_140594_140635 = state_140559__$1;
(statearr_140594_140635[(2)] = null);

(statearr_140594_140635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (10))){
var inst_140500 = (state_140559[(12)]);
var inst_140502 = (state_140559[(13)]);
var inst_140501 = (state_140559[(14)]);
var inst_140503 = (state_140559[(16)]);
var inst_140508 = cljs.core._nth.call(null,inst_140501,inst_140503);
var inst_140509 = cljs.core.async.muxch_STAR_.call(null,inst_140508);
var inst_140510 = cljs.core.async.close_BANG_.call(null,inst_140509);
var inst_140511 = (inst_140503 + (1));
var tmp140589 = inst_140500;
var tmp140590 = inst_140502;
var tmp140591 = inst_140501;
var inst_140500__$1 = tmp140589;
var inst_140501__$1 = tmp140591;
var inst_140502__$1 = tmp140590;
var inst_140503__$1 = inst_140511;
var state_140559__$1 = (function (){var statearr_140595 = state_140559;
(statearr_140595[(17)] = inst_140510);

(statearr_140595[(12)] = inst_140500__$1);

(statearr_140595[(13)] = inst_140502__$1);

(statearr_140595[(14)] = inst_140501__$1);

(statearr_140595[(16)] = inst_140503__$1);

return statearr_140595;
})();
var statearr_140596_140636 = state_140559__$1;
(statearr_140596_140636[(2)] = null);

(statearr_140596_140636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (18))){
var inst_140529 = (state_140559[(2)]);
var state_140559__$1 = state_140559;
var statearr_140597_140637 = state_140559__$1;
(statearr_140597_140637[(2)] = inst_140529);

(statearr_140597_140637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140560 === (8))){
var inst_140502 = (state_140559[(13)]);
var inst_140503 = (state_140559[(16)]);
var inst_140505 = (inst_140503 < inst_140502);
var inst_140506 = inst_140505;
var state_140559__$1 = state_140559;
if(cljs.core.truth_(inst_140506)){
var statearr_140598_140638 = state_140559__$1;
(statearr_140598_140638[(1)] = (10));

} else {
var statearr_140599_140639 = state_140559__$1;
(statearr_140599_140639[(1)] = (11));

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
});})(c__15789__auto___140611,mults,ensure_mult,p))
;
return ((function (switch__15724__auto__,c__15789__auto___140611,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_140603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_140603[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_140603[(1)] = (1));

return statearr_140603;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_140559){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_140559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e140604){if((e140604 instanceof Object)){
var ex__15728__auto__ = e140604;
var statearr_140605_140640 = state_140559;
(statearr_140605_140640[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e140604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__140641 = state_140559;
state_140559 = G__140641;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_140559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_140559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___140611,mults,ensure_mult,p))
})();
var state__15791__auto__ = (function (){var statearr_140606 = f__15790__auto__.call(null);
(statearr_140606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___140611);

return statearr_140606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___140611,mults,ensure_mult,p))
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
var args140642 = [];
var len__14433__auto___140645 = arguments.length;
var i__14434__auto___140646 = (0);
while(true){
if((i__14434__auto___140646 < len__14433__auto___140645)){
args140642.push((arguments[i__14434__auto___140646]));

var G__140647 = (i__14434__auto___140646 + (1));
i__14434__auto___140646 = G__140647;
continue;
} else {
}
break;
}

var G__140644 = args140642.length;
switch (G__140644) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args140642.length)].join('')));

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
var args140649 = [];
var len__14433__auto___140652 = arguments.length;
var i__14434__auto___140653 = (0);
while(true){
if((i__14434__auto___140653 < len__14433__auto___140652)){
args140649.push((arguments[i__14434__auto___140653]));

var G__140654 = (i__14434__auto___140653 + (1));
i__14434__auto___140653 = G__140654;
continue;
} else {
}
break;
}

var G__140651 = args140649.length;
switch (G__140651) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args140649.length)].join('')));

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
var args140656 = [];
var len__14433__auto___140727 = arguments.length;
var i__14434__auto___140728 = (0);
while(true){
if((i__14434__auto___140728 < len__14433__auto___140727)){
args140656.push((arguments[i__14434__auto___140728]));

var G__140729 = (i__14434__auto___140728 + (1));
i__14434__auto___140728 = G__140729;
continue;
} else {
}
break;
}

var G__140658 = args140656.length;
switch (G__140658) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args140656.length)].join('')));

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
var c__15789__auto___140731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___140731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___140731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_140697){
var state_val_140698 = (state_140697[(1)]);
if((state_val_140698 === (7))){
var state_140697__$1 = state_140697;
var statearr_140699_140732 = state_140697__$1;
(statearr_140699_140732[(2)] = null);

(statearr_140699_140732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140698 === (1))){
var state_140697__$1 = state_140697;
var statearr_140700_140733 = state_140697__$1;
(statearr_140700_140733[(2)] = null);

(statearr_140700_140733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140698 === (4))){
var inst_140661 = (state_140697[(7)]);
var inst_140663 = (inst_140661 < cnt);
var state_140697__$1 = state_140697;
if(cljs.core.truth_(inst_140663)){
var statearr_140701_140734 = state_140697__$1;
(statearr_140701_140734[(1)] = (6));

} else {
var statearr_140702_140735 = state_140697__$1;
(statearr_140702_140735[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140698 === (15))){
var inst_140693 = (state_140697[(2)]);
var state_140697__$1 = state_140697;
var statearr_140703_140736 = state_140697__$1;
(statearr_140703_140736[(2)] = inst_140693);

(statearr_140703_140736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140698 === (13))){
var inst_140686 = cljs.core.async.close_BANG_.call(null,out);
var state_140697__$1 = state_140697;
var statearr_140704_140737 = state_140697__$1;
(statearr_140704_140737[(2)] = inst_140686);

(statearr_140704_140737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140698 === (6))){
var state_140697__$1 = state_140697;
var statearr_140705_140738 = state_140697__$1;
(statearr_140705_140738[(2)] = null);

(statearr_140705_140738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140698 === (3))){
var inst_140695 = (state_140697[(2)]);
var state_140697__$1 = state_140697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140697__$1,inst_140695);
} else {
if((state_val_140698 === (12))){
var inst_140683 = (state_140697[(8)]);
var inst_140683__$1 = (state_140697[(2)]);
var inst_140684 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_140683__$1);
var state_140697__$1 = (function (){var statearr_140706 = state_140697;
(statearr_140706[(8)] = inst_140683__$1);

return statearr_140706;
})();
if(cljs.core.truth_(inst_140684)){
var statearr_140707_140739 = state_140697__$1;
(statearr_140707_140739[(1)] = (13));

} else {
var statearr_140708_140740 = state_140697__$1;
(statearr_140708_140740[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140698 === (2))){
var inst_140660 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_140661 = (0);
var state_140697__$1 = (function (){var statearr_140709 = state_140697;
(statearr_140709[(9)] = inst_140660);

(statearr_140709[(7)] = inst_140661);

return statearr_140709;
})();
var statearr_140710_140741 = state_140697__$1;
(statearr_140710_140741[(2)] = null);

(statearr_140710_140741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140698 === (11))){
var inst_140661 = (state_140697[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_140697,(10),Object,null,(9));
var inst_140670 = chs__$1.call(null,inst_140661);
var inst_140671 = done.call(null,inst_140661);
var inst_140672 = cljs.core.async.take_BANG_.call(null,inst_140670,inst_140671);
var state_140697__$1 = state_140697;
var statearr_140711_140742 = state_140697__$1;
(statearr_140711_140742[(2)] = inst_140672);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140697__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140698 === (9))){
var inst_140661 = (state_140697[(7)]);
var inst_140674 = (state_140697[(2)]);
var inst_140675 = (inst_140661 + (1));
var inst_140661__$1 = inst_140675;
var state_140697__$1 = (function (){var statearr_140712 = state_140697;
(statearr_140712[(7)] = inst_140661__$1);

(statearr_140712[(10)] = inst_140674);

return statearr_140712;
})();
var statearr_140713_140743 = state_140697__$1;
(statearr_140713_140743[(2)] = null);

(statearr_140713_140743[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140698 === (5))){
var inst_140681 = (state_140697[(2)]);
var state_140697__$1 = (function (){var statearr_140714 = state_140697;
(statearr_140714[(11)] = inst_140681);

return statearr_140714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140697__$1,(12),dchan);
} else {
if((state_val_140698 === (14))){
var inst_140683 = (state_140697[(8)]);
var inst_140688 = cljs.core.apply.call(null,f,inst_140683);
var state_140697__$1 = state_140697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140697__$1,(16),out,inst_140688);
} else {
if((state_val_140698 === (16))){
var inst_140690 = (state_140697[(2)]);
var state_140697__$1 = (function (){var statearr_140715 = state_140697;
(statearr_140715[(12)] = inst_140690);

return statearr_140715;
})();
var statearr_140716_140744 = state_140697__$1;
(statearr_140716_140744[(2)] = null);

(statearr_140716_140744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140698 === (10))){
var inst_140665 = (state_140697[(2)]);
var inst_140666 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_140697__$1 = (function (){var statearr_140717 = state_140697;
(statearr_140717[(13)] = inst_140665);

return statearr_140717;
})();
var statearr_140718_140745 = state_140697__$1;
(statearr_140718_140745[(2)] = inst_140666);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140697__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140698 === (8))){
var inst_140679 = (state_140697[(2)]);
var state_140697__$1 = state_140697;
var statearr_140719_140746 = state_140697__$1;
(statearr_140719_140746[(2)] = inst_140679);

(statearr_140719_140746[(1)] = (5));


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
});})(c__15789__auto___140731,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15724__auto__,c__15789__auto___140731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_140723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_140723[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_140723[(1)] = (1));

return statearr_140723;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_140697){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_140697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e140724){if((e140724 instanceof Object)){
var ex__15728__auto__ = e140724;
var statearr_140725_140747 = state_140697;
(statearr_140725_140747[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e140724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__140748 = state_140697;
state_140697 = G__140748;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_140697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_140697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___140731,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15791__auto__ = (function (){var statearr_140726 = f__15790__auto__.call(null);
(statearr_140726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___140731);

return statearr_140726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___140731,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args140750 = [];
var len__14433__auto___140806 = arguments.length;
var i__14434__auto___140807 = (0);
while(true){
if((i__14434__auto___140807 < len__14433__auto___140806)){
args140750.push((arguments[i__14434__auto___140807]));

var G__140808 = (i__14434__auto___140807 + (1));
i__14434__auto___140807 = G__140808;
continue;
} else {
}
break;
}

var G__140752 = args140750.length;
switch (G__140752) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args140750.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___140810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___140810,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___140810,out){
return (function (state_140782){
var state_val_140783 = (state_140782[(1)]);
if((state_val_140783 === (7))){
var inst_140762 = (state_140782[(7)]);
var inst_140761 = (state_140782[(8)]);
var inst_140761__$1 = (state_140782[(2)]);
var inst_140762__$1 = cljs.core.nth.call(null,inst_140761__$1,(0),null);
var inst_140763 = cljs.core.nth.call(null,inst_140761__$1,(1),null);
var inst_140764 = (inst_140762__$1 == null);
var state_140782__$1 = (function (){var statearr_140784 = state_140782;
(statearr_140784[(9)] = inst_140763);

(statearr_140784[(7)] = inst_140762__$1);

(statearr_140784[(8)] = inst_140761__$1);

return statearr_140784;
})();
if(cljs.core.truth_(inst_140764)){
var statearr_140785_140811 = state_140782__$1;
(statearr_140785_140811[(1)] = (8));

} else {
var statearr_140786_140812 = state_140782__$1;
(statearr_140786_140812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140783 === (1))){
var inst_140753 = cljs.core.vec.call(null,chs);
var inst_140754 = inst_140753;
var state_140782__$1 = (function (){var statearr_140787 = state_140782;
(statearr_140787[(10)] = inst_140754);

return statearr_140787;
})();
var statearr_140788_140813 = state_140782__$1;
(statearr_140788_140813[(2)] = null);

(statearr_140788_140813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140783 === (4))){
var inst_140754 = (state_140782[(10)]);
var state_140782__$1 = state_140782;
return cljs.core.async.ioc_alts_BANG_.call(null,state_140782__$1,(7),inst_140754);
} else {
if((state_val_140783 === (6))){
var inst_140778 = (state_140782[(2)]);
var state_140782__$1 = state_140782;
var statearr_140789_140814 = state_140782__$1;
(statearr_140789_140814[(2)] = inst_140778);

(statearr_140789_140814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140783 === (3))){
var inst_140780 = (state_140782[(2)]);
var state_140782__$1 = state_140782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140782__$1,inst_140780);
} else {
if((state_val_140783 === (2))){
var inst_140754 = (state_140782[(10)]);
var inst_140756 = cljs.core.count.call(null,inst_140754);
var inst_140757 = (inst_140756 > (0));
var state_140782__$1 = state_140782;
if(cljs.core.truth_(inst_140757)){
var statearr_140791_140815 = state_140782__$1;
(statearr_140791_140815[(1)] = (4));

} else {
var statearr_140792_140816 = state_140782__$1;
(statearr_140792_140816[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140783 === (11))){
var inst_140754 = (state_140782[(10)]);
var inst_140771 = (state_140782[(2)]);
var tmp140790 = inst_140754;
var inst_140754__$1 = tmp140790;
var state_140782__$1 = (function (){var statearr_140793 = state_140782;
(statearr_140793[(11)] = inst_140771);

(statearr_140793[(10)] = inst_140754__$1);

return statearr_140793;
})();
var statearr_140794_140817 = state_140782__$1;
(statearr_140794_140817[(2)] = null);

(statearr_140794_140817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140783 === (9))){
var inst_140762 = (state_140782[(7)]);
var state_140782__$1 = state_140782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140782__$1,(11),out,inst_140762);
} else {
if((state_val_140783 === (5))){
var inst_140776 = cljs.core.async.close_BANG_.call(null,out);
var state_140782__$1 = state_140782;
var statearr_140795_140818 = state_140782__$1;
(statearr_140795_140818[(2)] = inst_140776);

(statearr_140795_140818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140783 === (10))){
var inst_140774 = (state_140782[(2)]);
var state_140782__$1 = state_140782;
var statearr_140796_140819 = state_140782__$1;
(statearr_140796_140819[(2)] = inst_140774);

(statearr_140796_140819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140783 === (8))){
var inst_140763 = (state_140782[(9)]);
var inst_140762 = (state_140782[(7)]);
var inst_140754 = (state_140782[(10)]);
var inst_140761 = (state_140782[(8)]);
var inst_140766 = (function (){var cs = inst_140754;
var vec__140759 = inst_140761;
var v = inst_140762;
var c = inst_140763;
return ((function (cs,vec__140759,v,c,inst_140763,inst_140762,inst_140754,inst_140761,state_val_140783,c__15789__auto___140810,out){
return (function (p1__140749_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__140749_SHARP_);
});
;})(cs,vec__140759,v,c,inst_140763,inst_140762,inst_140754,inst_140761,state_val_140783,c__15789__auto___140810,out))
})();
var inst_140767 = cljs.core.filterv.call(null,inst_140766,inst_140754);
var inst_140754__$1 = inst_140767;
var state_140782__$1 = (function (){var statearr_140797 = state_140782;
(statearr_140797[(10)] = inst_140754__$1);

return statearr_140797;
})();
var statearr_140798_140820 = state_140782__$1;
(statearr_140798_140820[(2)] = null);

(statearr_140798_140820[(1)] = (2));


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
});})(c__15789__auto___140810,out))
;
return ((function (switch__15724__auto__,c__15789__auto___140810,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_140802 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_140802[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_140802[(1)] = (1));

return statearr_140802;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_140782){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_140782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e140803){if((e140803 instanceof Object)){
var ex__15728__auto__ = e140803;
var statearr_140804_140821 = state_140782;
(statearr_140804_140821[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e140803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__140822 = state_140782;
state_140782 = G__140822;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_140782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_140782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___140810,out))
})();
var state__15791__auto__ = (function (){var statearr_140805 = f__15790__auto__.call(null);
(statearr_140805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___140810);

return statearr_140805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___140810,out))
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
var args140823 = [];
var len__14433__auto___140872 = arguments.length;
var i__14434__auto___140873 = (0);
while(true){
if((i__14434__auto___140873 < len__14433__auto___140872)){
args140823.push((arguments[i__14434__auto___140873]));

var G__140874 = (i__14434__auto___140873 + (1));
i__14434__auto___140873 = G__140874;
continue;
} else {
}
break;
}

var G__140825 = args140823.length;
switch (G__140825) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args140823.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___140876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___140876,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___140876,out){
return (function (state_140849){
var state_val_140850 = (state_140849[(1)]);
if((state_val_140850 === (7))){
var inst_140831 = (state_140849[(7)]);
var inst_140831__$1 = (state_140849[(2)]);
var inst_140832 = (inst_140831__$1 == null);
var inst_140833 = cljs.core.not.call(null,inst_140832);
var state_140849__$1 = (function (){var statearr_140851 = state_140849;
(statearr_140851[(7)] = inst_140831__$1);

return statearr_140851;
})();
if(inst_140833){
var statearr_140852_140877 = state_140849__$1;
(statearr_140852_140877[(1)] = (8));

} else {
var statearr_140853_140878 = state_140849__$1;
(statearr_140853_140878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140850 === (1))){
var inst_140826 = (0);
var state_140849__$1 = (function (){var statearr_140854 = state_140849;
(statearr_140854[(8)] = inst_140826);

return statearr_140854;
})();
var statearr_140855_140879 = state_140849__$1;
(statearr_140855_140879[(2)] = null);

(statearr_140855_140879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140850 === (4))){
var state_140849__$1 = state_140849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140849__$1,(7),ch);
} else {
if((state_val_140850 === (6))){
var inst_140844 = (state_140849[(2)]);
var state_140849__$1 = state_140849;
var statearr_140856_140880 = state_140849__$1;
(statearr_140856_140880[(2)] = inst_140844);

(statearr_140856_140880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140850 === (3))){
var inst_140846 = (state_140849[(2)]);
var inst_140847 = cljs.core.async.close_BANG_.call(null,out);
var state_140849__$1 = (function (){var statearr_140857 = state_140849;
(statearr_140857[(9)] = inst_140846);

return statearr_140857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140849__$1,inst_140847);
} else {
if((state_val_140850 === (2))){
var inst_140826 = (state_140849[(8)]);
var inst_140828 = (inst_140826 < n);
var state_140849__$1 = state_140849;
if(cljs.core.truth_(inst_140828)){
var statearr_140858_140881 = state_140849__$1;
(statearr_140858_140881[(1)] = (4));

} else {
var statearr_140859_140882 = state_140849__$1;
(statearr_140859_140882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140850 === (11))){
var inst_140826 = (state_140849[(8)]);
var inst_140836 = (state_140849[(2)]);
var inst_140837 = (inst_140826 + (1));
var inst_140826__$1 = inst_140837;
var state_140849__$1 = (function (){var statearr_140860 = state_140849;
(statearr_140860[(8)] = inst_140826__$1);

(statearr_140860[(10)] = inst_140836);

return statearr_140860;
})();
var statearr_140861_140883 = state_140849__$1;
(statearr_140861_140883[(2)] = null);

(statearr_140861_140883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140850 === (9))){
var state_140849__$1 = state_140849;
var statearr_140862_140884 = state_140849__$1;
(statearr_140862_140884[(2)] = null);

(statearr_140862_140884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140850 === (5))){
var state_140849__$1 = state_140849;
var statearr_140863_140885 = state_140849__$1;
(statearr_140863_140885[(2)] = null);

(statearr_140863_140885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140850 === (10))){
var inst_140841 = (state_140849[(2)]);
var state_140849__$1 = state_140849;
var statearr_140864_140886 = state_140849__$1;
(statearr_140864_140886[(2)] = inst_140841);

(statearr_140864_140886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140850 === (8))){
var inst_140831 = (state_140849[(7)]);
var state_140849__$1 = state_140849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140849__$1,(11),out,inst_140831);
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
});})(c__15789__auto___140876,out))
;
return ((function (switch__15724__auto__,c__15789__auto___140876,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_140868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_140868[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_140868[(1)] = (1));

return statearr_140868;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_140849){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_140849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e140869){if((e140869 instanceof Object)){
var ex__15728__auto__ = e140869;
var statearr_140870_140887 = state_140849;
(statearr_140870_140887[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e140869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__140888 = state_140849;
state_140849 = G__140888;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_140849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_140849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___140876,out))
})();
var state__15791__auto__ = (function (){var statearr_140871 = f__15790__auto__.call(null);
(statearr_140871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___140876);

return statearr_140871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___140876,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async140896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async140896 = (function (map_LT_,f,ch,meta140897){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta140897 = meta140897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async140896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_140898,meta140897__$1){
var self__ = this;
var _140898__$1 = this;
return (new cljs.core.async.t_cljs$core$async140896(self__.map_LT_,self__.f,self__.ch,meta140897__$1));
});

cljs.core.async.t_cljs$core$async140896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_140898){
var self__ = this;
var _140898__$1 = this;
return self__.meta140897;
});

cljs.core.async.t_cljs$core$async140896.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async140896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async140896.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async140896.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async140896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async140899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async140899 = (function (map_LT_,f,ch,meta140897,_,fn1,meta140900){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta140897 = meta140897;
this._ = _;
this.fn1 = fn1;
this.meta140900 = meta140900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async140899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_140901,meta140900__$1){
var self__ = this;
var _140901__$1 = this;
return (new cljs.core.async.t_cljs$core$async140899(self__.map_LT_,self__.f,self__.ch,self__.meta140897,self__._,self__.fn1,meta140900__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async140899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_140901){
var self__ = this;
var _140901__$1 = this;
return self__.meta140900;
});})(___$1))
;

cljs.core.async.t_cljs$core$async140899.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async140899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async140899.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async140899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__140889_SHARP_){
return f1.call(null,(((p1__140889_SHARP_ == null))?null:self__.f.call(null,p1__140889_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async140899.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta140897","meta140897",863209709,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async140896","cljs.core.async/t_cljs$core$async140896",-169342683,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta140900","meta140900",-1427257600,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async140899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async140899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async140899";

cljs.core.async.t_cljs$core$async140899.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async140899");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async140899 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async140899(map_LT___$1,f__$1,ch__$1,meta140897__$1,___$2,fn1__$1,meta140900){
return (new cljs.core.async.t_cljs$core$async140899(map_LT___$1,f__$1,ch__$1,meta140897__$1,___$2,fn1__$1,meta140900));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async140899(self__.map_LT_,self__.f,self__.ch,self__.meta140897,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async140896.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async140896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async140896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta140897","meta140897",863209709,null)], null);
});

cljs.core.async.t_cljs$core$async140896.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async140896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async140896";

cljs.core.async.t_cljs$core$async140896.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async140896");
});

cljs.core.async.__GT_t_cljs$core$async140896 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async140896(map_LT___$1,f__$1,ch__$1,meta140897){
return (new cljs.core.async.t_cljs$core$async140896(map_LT___$1,f__$1,ch__$1,meta140897));
});

}

return (new cljs.core.async.t_cljs$core$async140896(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async140905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async140905 = (function (map_GT_,f,ch,meta140906){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta140906 = meta140906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async140905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_140907,meta140906__$1){
var self__ = this;
var _140907__$1 = this;
return (new cljs.core.async.t_cljs$core$async140905(self__.map_GT_,self__.f,self__.ch,meta140906__$1));
});

cljs.core.async.t_cljs$core$async140905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_140907){
var self__ = this;
var _140907__$1 = this;
return self__.meta140906;
});

cljs.core.async.t_cljs$core$async140905.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async140905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async140905.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async140905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async140905.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async140905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async140905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta140906","meta140906",-1329706794,null)], null);
});

cljs.core.async.t_cljs$core$async140905.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async140905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async140905";

cljs.core.async.t_cljs$core$async140905.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async140905");
});

cljs.core.async.__GT_t_cljs$core$async140905 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async140905(map_GT___$1,f__$1,ch__$1,meta140906){
return (new cljs.core.async.t_cljs$core$async140905(map_GT___$1,f__$1,ch__$1,meta140906));
});

}

return (new cljs.core.async.t_cljs$core$async140905(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async140911 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async140911 = (function (filter_GT_,p,ch,meta140912){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta140912 = meta140912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async140911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_140913,meta140912__$1){
var self__ = this;
var _140913__$1 = this;
return (new cljs.core.async.t_cljs$core$async140911(self__.filter_GT_,self__.p,self__.ch,meta140912__$1));
});

cljs.core.async.t_cljs$core$async140911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_140913){
var self__ = this;
var _140913__$1 = this;
return self__.meta140912;
});

cljs.core.async.t_cljs$core$async140911.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async140911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async140911.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async140911.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async140911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async140911.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async140911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async140911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta140912","meta140912",1820248094,null)], null);
});

cljs.core.async.t_cljs$core$async140911.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async140911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async140911";

cljs.core.async.t_cljs$core$async140911.cljs$lang$ctorPrWriter = (function (this__13973__auto__,writer__13974__auto__,opt__13975__auto__){
return cljs.core._write.call(null,writer__13974__auto__,"cljs.core.async/t_cljs$core$async140911");
});

cljs.core.async.__GT_t_cljs$core$async140911 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async140911(filter_GT___$1,p__$1,ch__$1,meta140912){
return (new cljs.core.async.t_cljs$core$async140911(filter_GT___$1,p__$1,ch__$1,meta140912));
});

}

return (new cljs.core.async.t_cljs$core$async140911(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args140914 = [];
var len__14433__auto___140958 = arguments.length;
var i__14434__auto___140959 = (0);
while(true){
if((i__14434__auto___140959 < len__14433__auto___140958)){
args140914.push((arguments[i__14434__auto___140959]));

var G__140960 = (i__14434__auto___140959 + (1));
i__14434__auto___140959 = G__140960;
continue;
} else {
}
break;
}

var G__140916 = args140914.length;
switch (G__140916) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args140914.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___140962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___140962,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___140962,out){
return (function (state_140937){
var state_val_140938 = (state_140937[(1)]);
if((state_val_140938 === (7))){
var inst_140933 = (state_140937[(2)]);
var state_140937__$1 = state_140937;
var statearr_140939_140963 = state_140937__$1;
(statearr_140939_140963[(2)] = inst_140933);

(statearr_140939_140963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140938 === (1))){
var state_140937__$1 = state_140937;
var statearr_140940_140964 = state_140937__$1;
(statearr_140940_140964[(2)] = null);

(statearr_140940_140964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140938 === (4))){
var inst_140919 = (state_140937[(7)]);
var inst_140919__$1 = (state_140937[(2)]);
var inst_140920 = (inst_140919__$1 == null);
var state_140937__$1 = (function (){var statearr_140941 = state_140937;
(statearr_140941[(7)] = inst_140919__$1);

return statearr_140941;
})();
if(cljs.core.truth_(inst_140920)){
var statearr_140942_140965 = state_140937__$1;
(statearr_140942_140965[(1)] = (5));

} else {
var statearr_140943_140966 = state_140937__$1;
(statearr_140943_140966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140938 === (6))){
var inst_140919 = (state_140937[(7)]);
var inst_140924 = p.call(null,inst_140919);
var state_140937__$1 = state_140937;
if(cljs.core.truth_(inst_140924)){
var statearr_140944_140967 = state_140937__$1;
(statearr_140944_140967[(1)] = (8));

} else {
var statearr_140945_140968 = state_140937__$1;
(statearr_140945_140968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140938 === (3))){
var inst_140935 = (state_140937[(2)]);
var state_140937__$1 = state_140937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140937__$1,inst_140935);
} else {
if((state_val_140938 === (2))){
var state_140937__$1 = state_140937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140937__$1,(4),ch);
} else {
if((state_val_140938 === (11))){
var inst_140927 = (state_140937[(2)]);
var state_140937__$1 = state_140937;
var statearr_140946_140969 = state_140937__$1;
(statearr_140946_140969[(2)] = inst_140927);

(statearr_140946_140969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140938 === (9))){
var state_140937__$1 = state_140937;
var statearr_140947_140970 = state_140937__$1;
(statearr_140947_140970[(2)] = null);

(statearr_140947_140970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140938 === (5))){
var inst_140922 = cljs.core.async.close_BANG_.call(null,out);
var state_140937__$1 = state_140937;
var statearr_140948_140971 = state_140937__$1;
(statearr_140948_140971[(2)] = inst_140922);

(statearr_140948_140971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140938 === (10))){
var inst_140930 = (state_140937[(2)]);
var state_140937__$1 = (function (){var statearr_140949 = state_140937;
(statearr_140949[(8)] = inst_140930);

return statearr_140949;
})();
var statearr_140950_140972 = state_140937__$1;
(statearr_140950_140972[(2)] = null);

(statearr_140950_140972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140938 === (8))){
var inst_140919 = (state_140937[(7)]);
var state_140937__$1 = state_140937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140937__$1,(11),out,inst_140919);
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
});})(c__15789__auto___140962,out))
;
return ((function (switch__15724__auto__,c__15789__auto___140962,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_140954 = [null,null,null,null,null,null,null,null,null];
(statearr_140954[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_140954[(1)] = (1));

return statearr_140954;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_140937){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_140937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e140955){if((e140955 instanceof Object)){
var ex__15728__auto__ = e140955;
var statearr_140956_140973 = state_140937;
(statearr_140956_140973[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e140955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__140974 = state_140937;
state_140937 = G__140974;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_140937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_140937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___140962,out))
})();
var state__15791__auto__ = (function (){var statearr_140957 = f__15790__auto__.call(null);
(statearr_140957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___140962);

return statearr_140957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___140962,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args140975 = [];
var len__14433__auto___140978 = arguments.length;
var i__14434__auto___140979 = (0);
while(true){
if((i__14434__auto___140979 < len__14433__auto___140978)){
args140975.push((arguments[i__14434__auto___140979]));

var G__140980 = (i__14434__auto___140979 + (1));
i__14434__auto___140979 = G__140980;
continue;
} else {
}
break;
}

var G__140977 = args140975.length;
switch (G__140977) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args140975.length)].join('')));

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
return (function (state_141147){
var state_val_141148 = (state_141147[(1)]);
if((state_val_141148 === (7))){
var inst_141143 = (state_141147[(2)]);
var state_141147__$1 = state_141147;
var statearr_141149_141190 = state_141147__$1;
(statearr_141149_141190[(2)] = inst_141143);

(statearr_141149_141190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (20))){
var inst_141113 = (state_141147[(7)]);
var inst_141124 = (state_141147[(2)]);
var inst_141125 = cljs.core.next.call(null,inst_141113);
var inst_141099 = inst_141125;
var inst_141100 = null;
var inst_141101 = (0);
var inst_141102 = (0);
var state_141147__$1 = (function (){var statearr_141150 = state_141147;
(statearr_141150[(8)] = inst_141102);

(statearr_141150[(9)] = inst_141100);

(statearr_141150[(10)] = inst_141101);

(statearr_141150[(11)] = inst_141099);

(statearr_141150[(12)] = inst_141124);

return statearr_141150;
})();
var statearr_141151_141191 = state_141147__$1;
(statearr_141151_141191[(2)] = null);

(statearr_141151_141191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (1))){
var state_141147__$1 = state_141147;
var statearr_141152_141192 = state_141147__$1;
(statearr_141152_141192[(2)] = null);

(statearr_141152_141192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (4))){
var inst_141088 = (state_141147[(13)]);
var inst_141088__$1 = (state_141147[(2)]);
var inst_141089 = (inst_141088__$1 == null);
var state_141147__$1 = (function (){var statearr_141153 = state_141147;
(statearr_141153[(13)] = inst_141088__$1);

return statearr_141153;
})();
if(cljs.core.truth_(inst_141089)){
var statearr_141154_141193 = state_141147__$1;
(statearr_141154_141193[(1)] = (5));

} else {
var statearr_141155_141194 = state_141147__$1;
(statearr_141155_141194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (15))){
var state_141147__$1 = state_141147;
var statearr_141159_141195 = state_141147__$1;
(statearr_141159_141195[(2)] = null);

(statearr_141159_141195[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (21))){
var state_141147__$1 = state_141147;
var statearr_141160_141196 = state_141147__$1;
(statearr_141160_141196[(2)] = null);

(statearr_141160_141196[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (13))){
var inst_141102 = (state_141147[(8)]);
var inst_141100 = (state_141147[(9)]);
var inst_141101 = (state_141147[(10)]);
var inst_141099 = (state_141147[(11)]);
var inst_141109 = (state_141147[(2)]);
var inst_141110 = (inst_141102 + (1));
var tmp141156 = inst_141100;
var tmp141157 = inst_141101;
var tmp141158 = inst_141099;
var inst_141099__$1 = tmp141158;
var inst_141100__$1 = tmp141156;
var inst_141101__$1 = tmp141157;
var inst_141102__$1 = inst_141110;
var state_141147__$1 = (function (){var statearr_141161 = state_141147;
(statearr_141161[(8)] = inst_141102__$1);

(statearr_141161[(9)] = inst_141100__$1);

(statearr_141161[(14)] = inst_141109);

(statearr_141161[(10)] = inst_141101__$1);

(statearr_141161[(11)] = inst_141099__$1);

return statearr_141161;
})();
var statearr_141162_141197 = state_141147__$1;
(statearr_141162_141197[(2)] = null);

(statearr_141162_141197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (22))){
var state_141147__$1 = state_141147;
var statearr_141163_141198 = state_141147__$1;
(statearr_141163_141198[(2)] = null);

(statearr_141163_141198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (6))){
var inst_141088 = (state_141147[(13)]);
var inst_141097 = f.call(null,inst_141088);
var inst_141098 = cljs.core.seq.call(null,inst_141097);
var inst_141099 = inst_141098;
var inst_141100 = null;
var inst_141101 = (0);
var inst_141102 = (0);
var state_141147__$1 = (function (){var statearr_141164 = state_141147;
(statearr_141164[(8)] = inst_141102);

(statearr_141164[(9)] = inst_141100);

(statearr_141164[(10)] = inst_141101);

(statearr_141164[(11)] = inst_141099);

return statearr_141164;
})();
var statearr_141165_141199 = state_141147__$1;
(statearr_141165_141199[(2)] = null);

(statearr_141165_141199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (17))){
var inst_141113 = (state_141147[(7)]);
var inst_141117 = cljs.core.chunk_first.call(null,inst_141113);
var inst_141118 = cljs.core.chunk_rest.call(null,inst_141113);
var inst_141119 = cljs.core.count.call(null,inst_141117);
var inst_141099 = inst_141118;
var inst_141100 = inst_141117;
var inst_141101 = inst_141119;
var inst_141102 = (0);
var state_141147__$1 = (function (){var statearr_141166 = state_141147;
(statearr_141166[(8)] = inst_141102);

(statearr_141166[(9)] = inst_141100);

(statearr_141166[(10)] = inst_141101);

(statearr_141166[(11)] = inst_141099);

return statearr_141166;
})();
var statearr_141167_141200 = state_141147__$1;
(statearr_141167_141200[(2)] = null);

(statearr_141167_141200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (3))){
var inst_141145 = (state_141147[(2)]);
var state_141147__$1 = state_141147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_141147__$1,inst_141145);
} else {
if((state_val_141148 === (12))){
var inst_141133 = (state_141147[(2)]);
var state_141147__$1 = state_141147;
var statearr_141168_141201 = state_141147__$1;
(statearr_141168_141201[(2)] = inst_141133);

(statearr_141168_141201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (2))){
var state_141147__$1 = state_141147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_141147__$1,(4),in$);
} else {
if((state_val_141148 === (23))){
var inst_141141 = (state_141147[(2)]);
var state_141147__$1 = state_141147;
var statearr_141169_141202 = state_141147__$1;
(statearr_141169_141202[(2)] = inst_141141);

(statearr_141169_141202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (19))){
var inst_141128 = (state_141147[(2)]);
var state_141147__$1 = state_141147;
var statearr_141170_141203 = state_141147__$1;
(statearr_141170_141203[(2)] = inst_141128);

(statearr_141170_141203[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (11))){
var inst_141113 = (state_141147[(7)]);
var inst_141099 = (state_141147[(11)]);
var inst_141113__$1 = cljs.core.seq.call(null,inst_141099);
var state_141147__$1 = (function (){var statearr_141171 = state_141147;
(statearr_141171[(7)] = inst_141113__$1);

return statearr_141171;
})();
if(inst_141113__$1){
var statearr_141172_141204 = state_141147__$1;
(statearr_141172_141204[(1)] = (14));

} else {
var statearr_141173_141205 = state_141147__$1;
(statearr_141173_141205[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (9))){
var inst_141135 = (state_141147[(2)]);
var inst_141136 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_141147__$1 = (function (){var statearr_141174 = state_141147;
(statearr_141174[(15)] = inst_141135);

return statearr_141174;
})();
if(cljs.core.truth_(inst_141136)){
var statearr_141175_141206 = state_141147__$1;
(statearr_141175_141206[(1)] = (21));

} else {
var statearr_141176_141207 = state_141147__$1;
(statearr_141176_141207[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (5))){
var inst_141091 = cljs.core.async.close_BANG_.call(null,out);
var state_141147__$1 = state_141147;
var statearr_141177_141208 = state_141147__$1;
(statearr_141177_141208[(2)] = inst_141091);

(statearr_141177_141208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (14))){
var inst_141113 = (state_141147[(7)]);
var inst_141115 = cljs.core.chunked_seq_QMARK_.call(null,inst_141113);
var state_141147__$1 = state_141147;
if(inst_141115){
var statearr_141178_141209 = state_141147__$1;
(statearr_141178_141209[(1)] = (17));

} else {
var statearr_141179_141210 = state_141147__$1;
(statearr_141179_141210[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (16))){
var inst_141131 = (state_141147[(2)]);
var state_141147__$1 = state_141147;
var statearr_141180_141211 = state_141147__$1;
(statearr_141180_141211[(2)] = inst_141131);

(statearr_141180_141211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141148 === (10))){
var inst_141102 = (state_141147[(8)]);
var inst_141100 = (state_141147[(9)]);
var inst_141107 = cljs.core._nth.call(null,inst_141100,inst_141102);
var state_141147__$1 = state_141147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_141147__$1,(13),out,inst_141107);
} else {
if((state_val_141148 === (18))){
var inst_141113 = (state_141147[(7)]);
var inst_141122 = cljs.core.first.call(null,inst_141113);
var state_141147__$1 = state_141147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_141147__$1,(20),out,inst_141122);
} else {
if((state_val_141148 === (8))){
var inst_141102 = (state_141147[(8)]);
var inst_141101 = (state_141147[(10)]);
var inst_141104 = (inst_141102 < inst_141101);
var inst_141105 = inst_141104;
var state_141147__$1 = state_141147;
if(cljs.core.truth_(inst_141105)){
var statearr_141181_141212 = state_141147__$1;
(statearr_141181_141212[(1)] = (10));

} else {
var statearr_141182_141213 = state_141147__$1;
(statearr_141182_141213[(1)] = (11));

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
var statearr_141186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_141186[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__);

(statearr_141186[(1)] = (1));

return statearr_141186;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____1 = (function (state_141147){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_141147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e141187){if((e141187 instanceof Object)){
var ex__15728__auto__ = e141187;
var statearr_141188_141214 = state_141147;
(statearr_141188_141214[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_141147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e141187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141215 = state_141147;
state_141147 = G__141215;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__ = function(state_141147){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____1.call(this,state_141147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15725__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_141189 = f__15790__auto__.call(null);
(statearr_141189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_141189;
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
var args141216 = [];
var len__14433__auto___141219 = arguments.length;
var i__14434__auto___141220 = (0);
while(true){
if((i__14434__auto___141220 < len__14433__auto___141219)){
args141216.push((arguments[i__14434__auto___141220]));

var G__141221 = (i__14434__auto___141220 + (1));
i__14434__auto___141220 = G__141221;
continue;
} else {
}
break;
}

var G__141218 = args141216.length;
switch (G__141218) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args141216.length)].join('')));

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
var args141223 = [];
var len__14433__auto___141226 = arguments.length;
var i__14434__auto___141227 = (0);
while(true){
if((i__14434__auto___141227 < len__14433__auto___141226)){
args141223.push((arguments[i__14434__auto___141227]));

var G__141228 = (i__14434__auto___141227 + (1));
i__14434__auto___141227 = G__141228;
continue;
} else {
}
break;
}

var G__141225 = args141223.length;
switch (G__141225) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args141223.length)].join('')));

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
var args141230 = [];
var len__14433__auto___141281 = arguments.length;
var i__14434__auto___141282 = (0);
while(true){
if((i__14434__auto___141282 < len__14433__auto___141281)){
args141230.push((arguments[i__14434__auto___141282]));

var G__141283 = (i__14434__auto___141282 + (1));
i__14434__auto___141282 = G__141283;
continue;
} else {
}
break;
}

var G__141232 = args141230.length;
switch (G__141232) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args141230.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___141285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___141285,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___141285,out){
return (function (state_141256){
var state_val_141257 = (state_141256[(1)]);
if((state_val_141257 === (7))){
var inst_141251 = (state_141256[(2)]);
var state_141256__$1 = state_141256;
var statearr_141258_141286 = state_141256__$1;
(statearr_141258_141286[(2)] = inst_141251);

(statearr_141258_141286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141257 === (1))){
var inst_141233 = null;
var state_141256__$1 = (function (){var statearr_141259 = state_141256;
(statearr_141259[(7)] = inst_141233);

return statearr_141259;
})();
var statearr_141260_141287 = state_141256__$1;
(statearr_141260_141287[(2)] = null);

(statearr_141260_141287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141257 === (4))){
var inst_141236 = (state_141256[(8)]);
var inst_141236__$1 = (state_141256[(2)]);
var inst_141237 = (inst_141236__$1 == null);
var inst_141238 = cljs.core.not.call(null,inst_141237);
var state_141256__$1 = (function (){var statearr_141261 = state_141256;
(statearr_141261[(8)] = inst_141236__$1);

return statearr_141261;
})();
if(inst_141238){
var statearr_141262_141288 = state_141256__$1;
(statearr_141262_141288[(1)] = (5));

} else {
var statearr_141263_141289 = state_141256__$1;
(statearr_141263_141289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141257 === (6))){
var state_141256__$1 = state_141256;
var statearr_141264_141290 = state_141256__$1;
(statearr_141264_141290[(2)] = null);

(statearr_141264_141290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141257 === (3))){
var inst_141253 = (state_141256[(2)]);
var inst_141254 = cljs.core.async.close_BANG_.call(null,out);
var state_141256__$1 = (function (){var statearr_141265 = state_141256;
(statearr_141265[(9)] = inst_141253);

return statearr_141265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_141256__$1,inst_141254);
} else {
if((state_val_141257 === (2))){
var state_141256__$1 = state_141256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_141256__$1,(4),ch);
} else {
if((state_val_141257 === (11))){
var inst_141236 = (state_141256[(8)]);
var inst_141245 = (state_141256[(2)]);
var inst_141233 = inst_141236;
var state_141256__$1 = (function (){var statearr_141266 = state_141256;
(statearr_141266[(7)] = inst_141233);

(statearr_141266[(10)] = inst_141245);

return statearr_141266;
})();
var statearr_141267_141291 = state_141256__$1;
(statearr_141267_141291[(2)] = null);

(statearr_141267_141291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141257 === (9))){
var inst_141236 = (state_141256[(8)]);
var state_141256__$1 = state_141256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_141256__$1,(11),out,inst_141236);
} else {
if((state_val_141257 === (5))){
var inst_141233 = (state_141256[(7)]);
var inst_141236 = (state_141256[(8)]);
var inst_141240 = cljs.core._EQ_.call(null,inst_141236,inst_141233);
var state_141256__$1 = state_141256;
if(inst_141240){
var statearr_141269_141292 = state_141256__$1;
(statearr_141269_141292[(1)] = (8));

} else {
var statearr_141270_141293 = state_141256__$1;
(statearr_141270_141293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141257 === (10))){
var inst_141248 = (state_141256[(2)]);
var state_141256__$1 = state_141256;
var statearr_141271_141294 = state_141256__$1;
(statearr_141271_141294[(2)] = inst_141248);

(statearr_141271_141294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141257 === (8))){
var inst_141233 = (state_141256[(7)]);
var tmp141268 = inst_141233;
var inst_141233__$1 = tmp141268;
var state_141256__$1 = (function (){var statearr_141272 = state_141256;
(statearr_141272[(7)] = inst_141233__$1);

return statearr_141272;
})();
var statearr_141273_141295 = state_141256__$1;
(statearr_141273_141295[(2)] = null);

(statearr_141273_141295[(1)] = (2));


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
});})(c__15789__auto___141285,out))
;
return ((function (switch__15724__auto__,c__15789__auto___141285,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_141277 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_141277[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_141277[(1)] = (1));

return statearr_141277;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_141256){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_141256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e141278){if((e141278 instanceof Object)){
var ex__15728__auto__ = e141278;
var statearr_141279_141296 = state_141256;
(statearr_141279_141296[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_141256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e141278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141297 = state_141256;
state_141256 = G__141297;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_141256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_141256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___141285,out))
})();
var state__15791__auto__ = (function (){var statearr_141280 = f__15790__auto__.call(null);
(statearr_141280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___141285);

return statearr_141280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___141285,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args141298 = [];
var len__14433__auto___141368 = arguments.length;
var i__14434__auto___141369 = (0);
while(true){
if((i__14434__auto___141369 < len__14433__auto___141368)){
args141298.push((arguments[i__14434__auto___141369]));

var G__141370 = (i__14434__auto___141369 + (1));
i__14434__auto___141369 = G__141370;
continue;
} else {
}
break;
}

var G__141300 = args141298.length;
switch (G__141300) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args141298.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___141372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___141372,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___141372,out){
return (function (state_141338){
var state_val_141339 = (state_141338[(1)]);
if((state_val_141339 === (7))){
var inst_141334 = (state_141338[(2)]);
var state_141338__$1 = state_141338;
var statearr_141340_141373 = state_141338__$1;
(statearr_141340_141373[(2)] = inst_141334);

(statearr_141340_141373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141339 === (1))){
var inst_141301 = (new Array(n));
var inst_141302 = inst_141301;
var inst_141303 = (0);
var state_141338__$1 = (function (){var statearr_141341 = state_141338;
(statearr_141341[(7)] = inst_141302);

(statearr_141341[(8)] = inst_141303);

return statearr_141341;
})();
var statearr_141342_141374 = state_141338__$1;
(statearr_141342_141374[(2)] = null);

(statearr_141342_141374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141339 === (4))){
var inst_141306 = (state_141338[(9)]);
var inst_141306__$1 = (state_141338[(2)]);
var inst_141307 = (inst_141306__$1 == null);
var inst_141308 = cljs.core.not.call(null,inst_141307);
var state_141338__$1 = (function (){var statearr_141343 = state_141338;
(statearr_141343[(9)] = inst_141306__$1);

return statearr_141343;
})();
if(inst_141308){
var statearr_141344_141375 = state_141338__$1;
(statearr_141344_141375[(1)] = (5));

} else {
var statearr_141345_141376 = state_141338__$1;
(statearr_141345_141376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141339 === (15))){
var inst_141328 = (state_141338[(2)]);
var state_141338__$1 = state_141338;
var statearr_141346_141377 = state_141338__$1;
(statearr_141346_141377[(2)] = inst_141328);

(statearr_141346_141377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141339 === (13))){
var state_141338__$1 = state_141338;
var statearr_141347_141378 = state_141338__$1;
(statearr_141347_141378[(2)] = null);

(statearr_141347_141378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141339 === (6))){
var inst_141303 = (state_141338[(8)]);
var inst_141324 = (inst_141303 > (0));
var state_141338__$1 = state_141338;
if(cljs.core.truth_(inst_141324)){
var statearr_141348_141379 = state_141338__$1;
(statearr_141348_141379[(1)] = (12));

} else {
var statearr_141349_141380 = state_141338__$1;
(statearr_141349_141380[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141339 === (3))){
var inst_141336 = (state_141338[(2)]);
var state_141338__$1 = state_141338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_141338__$1,inst_141336);
} else {
if((state_val_141339 === (12))){
var inst_141302 = (state_141338[(7)]);
var inst_141326 = cljs.core.vec.call(null,inst_141302);
var state_141338__$1 = state_141338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_141338__$1,(15),out,inst_141326);
} else {
if((state_val_141339 === (2))){
var state_141338__$1 = state_141338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_141338__$1,(4),ch);
} else {
if((state_val_141339 === (11))){
var inst_141318 = (state_141338[(2)]);
var inst_141319 = (new Array(n));
var inst_141302 = inst_141319;
var inst_141303 = (0);
var state_141338__$1 = (function (){var statearr_141350 = state_141338;
(statearr_141350[(10)] = inst_141318);

(statearr_141350[(7)] = inst_141302);

(statearr_141350[(8)] = inst_141303);

return statearr_141350;
})();
var statearr_141351_141381 = state_141338__$1;
(statearr_141351_141381[(2)] = null);

(statearr_141351_141381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141339 === (9))){
var inst_141302 = (state_141338[(7)]);
var inst_141316 = cljs.core.vec.call(null,inst_141302);
var state_141338__$1 = state_141338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_141338__$1,(11),out,inst_141316);
} else {
if((state_val_141339 === (5))){
var inst_141311 = (state_141338[(11)]);
var inst_141302 = (state_141338[(7)]);
var inst_141303 = (state_141338[(8)]);
var inst_141306 = (state_141338[(9)]);
var inst_141310 = (inst_141302[inst_141303] = inst_141306);
var inst_141311__$1 = (inst_141303 + (1));
var inst_141312 = (inst_141311__$1 < n);
var state_141338__$1 = (function (){var statearr_141352 = state_141338;
(statearr_141352[(11)] = inst_141311__$1);

(statearr_141352[(12)] = inst_141310);

return statearr_141352;
})();
if(cljs.core.truth_(inst_141312)){
var statearr_141353_141382 = state_141338__$1;
(statearr_141353_141382[(1)] = (8));

} else {
var statearr_141354_141383 = state_141338__$1;
(statearr_141354_141383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141339 === (14))){
var inst_141331 = (state_141338[(2)]);
var inst_141332 = cljs.core.async.close_BANG_.call(null,out);
var state_141338__$1 = (function (){var statearr_141356 = state_141338;
(statearr_141356[(13)] = inst_141331);

return statearr_141356;
})();
var statearr_141357_141384 = state_141338__$1;
(statearr_141357_141384[(2)] = inst_141332);

(statearr_141357_141384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141339 === (10))){
var inst_141322 = (state_141338[(2)]);
var state_141338__$1 = state_141338;
var statearr_141358_141385 = state_141338__$1;
(statearr_141358_141385[(2)] = inst_141322);

(statearr_141358_141385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141339 === (8))){
var inst_141311 = (state_141338[(11)]);
var inst_141302 = (state_141338[(7)]);
var tmp141355 = inst_141302;
var inst_141302__$1 = tmp141355;
var inst_141303 = inst_141311;
var state_141338__$1 = (function (){var statearr_141359 = state_141338;
(statearr_141359[(7)] = inst_141302__$1);

(statearr_141359[(8)] = inst_141303);

return statearr_141359;
})();
var statearr_141360_141386 = state_141338__$1;
(statearr_141360_141386[(2)] = null);

(statearr_141360_141386[(1)] = (2));


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
});})(c__15789__auto___141372,out))
;
return ((function (switch__15724__auto__,c__15789__auto___141372,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_141364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_141364[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_141364[(1)] = (1));

return statearr_141364;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_141338){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_141338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e141365){if((e141365 instanceof Object)){
var ex__15728__auto__ = e141365;
var statearr_141366_141387 = state_141338;
(statearr_141366_141387[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_141338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e141365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141388 = state_141338;
state_141338 = G__141388;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_141338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_141338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___141372,out))
})();
var state__15791__auto__ = (function (){var statearr_141367 = f__15790__auto__.call(null);
(statearr_141367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___141372);

return statearr_141367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___141372,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args141389 = [];
var len__14433__auto___141463 = arguments.length;
var i__14434__auto___141464 = (0);
while(true){
if((i__14434__auto___141464 < len__14433__auto___141463)){
args141389.push((arguments[i__14434__auto___141464]));

var G__141465 = (i__14434__auto___141464 + (1));
i__14434__auto___141464 = G__141465;
continue;
} else {
}
break;
}

var G__141391 = args141389.length;
switch (G__141391) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args141389.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15789__auto___141467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___141467,out){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___141467,out){
return (function (state_141433){
var state_val_141434 = (state_141433[(1)]);
if((state_val_141434 === (7))){
var inst_141429 = (state_141433[(2)]);
var state_141433__$1 = state_141433;
var statearr_141435_141468 = state_141433__$1;
(statearr_141435_141468[(2)] = inst_141429);

(statearr_141435_141468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141434 === (1))){
var inst_141392 = [];
var inst_141393 = inst_141392;
var inst_141394 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_141433__$1 = (function (){var statearr_141436 = state_141433;
(statearr_141436[(7)] = inst_141393);

(statearr_141436[(8)] = inst_141394);

return statearr_141436;
})();
var statearr_141437_141469 = state_141433__$1;
(statearr_141437_141469[(2)] = null);

(statearr_141437_141469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141434 === (4))){
var inst_141397 = (state_141433[(9)]);
var inst_141397__$1 = (state_141433[(2)]);
var inst_141398 = (inst_141397__$1 == null);
var inst_141399 = cljs.core.not.call(null,inst_141398);
var state_141433__$1 = (function (){var statearr_141438 = state_141433;
(statearr_141438[(9)] = inst_141397__$1);

return statearr_141438;
})();
if(inst_141399){
var statearr_141439_141470 = state_141433__$1;
(statearr_141439_141470[(1)] = (5));

} else {
var statearr_141440_141471 = state_141433__$1;
(statearr_141440_141471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141434 === (15))){
var inst_141423 = (state_141433[(2)]);
var state_141433__$1 = state_141433;
var statearr_141441_141472 = state_141433__$1;
(statearr_141441_141472[(2)] = inst_141423);

(statearr_141441_141472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141434 === (13))){
var state_141433__$1 = state_141433;
var statearr_141442_141473 = state_141433__$1;
(statearr_141442_141473[(2)] = null);

(statearr_141442_141473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141434 === (6))){
var inst_141393 = (state_141433[(7)]);
var inst_141418 = inst_141393.length;
var inst_141419 = (inst_141418 > (0));
var state_141433__$1 = state_141433;
if(cljs.core.truth_(inst_141419)){
var statearr_141443_141474 = state_141433__$1;
(statearr_141443_141474[(1)] = (12));

} else {
var statearr_141444_141475 = state_141433__$1;
(statearr_141444_141475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141434 === (3))){
var inst_141431 = (state_141433[(2)]);
var state_141433__$1 = state_141433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_141433__$1,inst_141431);
} else {
if((state_val_141434 === (12))){
var inst_141393 = (state_141433[(7)]);
var inst_141421 = cljs.core.vec.call(null,inst_141393);
var state_141433__$1 = state_141433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_141433__$1,(15),out,inst_141421);
} else {
if((state_val_141434 === (2))){
var state_141433__$1 = state_141433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_141433__$1,(4),ch);
} else {
if((state_val_141434 === (11))){
var inst_141401 = (state_141433[(10)]);
var inst_141397 = (state_141433[(9)]);
var inst_141411 = (state_141433[(2)]);
var inst_141412 = [];
var inst_141413 = inst_141412.push(inst_141397);
var inst_141393 = inst_141412;
var inst_141394 = inst_141401;
var state_141433__$1 = (function (){var statearr_141445 = state_141433;
(statearr_141445[(11)] = inst_141411);

(statearr_141445[(12)] = inst_141413);

(statearr_141445[(7)] = inst_141393);

(statearr_141445[(8)] = inst_141394);

return statearr_141445;
})();
var statearr_141446_141476 = state_141433__$1;
(statearr_141446_141476[(2)] = null);

(statearr_141446_141476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141434 === (9))){
var inst_141393 = (state_141433[(7)]);
var inst_141409 = cljs.core.vec.call(null,inst_141393);
var state_141433__$1 = state_141433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_141433__$1,(11),out,inst_141409);
} else {
if((state_val_141434 === (5))){
var inst_141401 = (state_141433[(10)]);
var inst_141394 = (state_141433[(8)]);
var inst_141397 = (state_141433[(9)]);
var inst_141401__$1 = f.call(null,inst_141397);
var inst_141402 = cljs.core._EQ_.call(null,inst_141401__$1,inst_141394);
var inst_141403 = cljs.core.keyword_identical_QMARK_.call(null,inst_141394,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_141404 = (inst_141402) || (inst_141403);
var state_141433__$1 = (function (){var statearr_141447 = state_141433;
(statearr_141447[(10)] = inst_141401__$1);

return statearr_141447;
})();
if(cljs.core.truth_(inst_141404)){
var statearr_141448_141477 = state_141433__$1;
(statearr_141448_141477[(1)] = (8));

} else {
var statearr_141449_141478 = state_141433__$1;
(statearr_141449_141478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141434 === (14))){
var inst_141426 = (state_141433[(2)]);
var inst_141427 = cljs.core.async.close_BANG_.call(null,out);
var state_141433__$1 = (function (){var statearr_141451 = state_141433;
(statearr_141451[(13)] = inst_141426);

return statearr_141451;
})();
var statearr_141452_141479 = state_141433__$1;
(statearr_141452_141479[(2)] = inst_141427);

(statearr_141452_141479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141434 === (10))){
var inst_141416 = (state_141433[(2)]);
var state_141433__$1 = state_141433;
var statearr_141453_141480 = state_141433__$1;
(statearr_141453_141480[(2)] = inst_141416);

(statearr_141453_141480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141434 === (8))){
var inst_141393 = (state_141433[(7)]);
var inst_141401 = (state_141433[(10)]);
var inst_141397 = (state_141433[(9)]);
var inst_141406 = inst_141393.push(inst_141397);
var tmp141450 = inst_141393;
var inst_141393__$1 = tmp141450;
var inst_141394 = inst_141401;
var state_141433__$1 = (function (){var statearr_141454 = state_141433;
(statearr_141454[(7)] = inst_141393__$1);

(statearr_141454[(8)] = inst_141394);

(statearr_141454[(14)] = inst_141406);

return statearr_141454;
})();
var statearr_141455_141481 = state_141433__$1;
(statearr_141455_141481[(2)] = null);

(statearr_141455_141481[(1)] = (2));


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
});})(c__15789__auto___141467,out))
;
return ((function (switch__15724__auto__,c__15789__auto___141467,out){
return (function() {
var cljs$core$async$state_machine__15725__auto__ = null;
var cljs$core$async$state_machine__15725__auto____0 = (function (){
var statearr_141459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_141459[(0)] = cljs$core$async$state_machine__15725__auto__);

(statearr_141459[(1)] = (1));

return statearr_141459;
});
var cljs$core$async$state_machine__15725__auto____1 = (function (state_141433){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_141433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e141460){if((e141460 instanceof Object)){
var ex__15728__auto__ = e141460;
var statearr_141461_141482 = state_141433;
(statearr_141461_141482[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_141433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e141460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141483 = state_141433;
state_141433 = G__141483;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
cljs$core$async$state_machine__15725__auto__ = function(state_141433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15725__auto____1.call(this,state_141433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15725__auto____0;
cljs$core$async$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15725__auto____1;
return cljs$core$async$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___141467,out))
})();
var state__15791__auto__ = (function (){var statearr_141462 = f__15790__auto__.call(null);
(statearr_141462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___141467);

return statearr_141462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___141467,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map