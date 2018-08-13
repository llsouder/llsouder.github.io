// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24587 = arguments.length;
switch (G__24587) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24588 = (function (f,blockable,meta24589){
this.f = f;
this.blockable = blockable;
this.meta24589 = meta24589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24590,meta24589__$1){
var self__ = this;
var _24590__$1 = this;
return (new cljs.core.async.t_cljs$core$async24588(self__.f,self__.blockable,meta24589__$1));
});

cljs.core.async.t_cljs$core$async24588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24590){
var self__ = this;
var _24590__$1 = this;
return self__.meta24589;
});

cljs.core.async.t_cljs$core$async24588.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24589","meta24589",78916865,null)], null);
});

cljs.core.async.t_cljs$core$async24588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24588";

cljs.core.async.t_cljs$core$async24588.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24588");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24588.
 */
cljs.core.async.__GT_t_cljs$core$async24588 = (function cljs$core$async$__GT_t_cljs$core$async24588(f__$1,blockable__$1,meta24589){
return (new cljs.core.async.t_cljs$core$async24588(f__$1,blockable__$1,meta24589));
});

}

return (new cljs.core.async.t_cljs$core$async24588(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__24594 = arguments.length;
switch (G__24594) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__24597 = arguments.length;
switch (G__24597) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__24600 = arguments.length;
switch (G__24600) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24602 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24602);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24602,ret){
return (function (){
return fn1.call(null,val_24602);
});})(val_24602,ret))
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
var G__24604 = arguments.length;
switch (G__24604) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__4376__auto___24606 = n;
var x_24607 = (0);
while(true){
if((x_24607 < n__4376__auto___24606)){
(a[x_24607] = (0));

var G__24608 = (x_24607 + (1));
x_24607 = G__24608;
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

var G__24609 = (i + (1));
i = G__24609;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24610 = (function (flag,meta24611){
this.flag = flag;
this.meta24611 = meta24611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24612,meta24611__$1){
var self__ = this;
var _24612__$1 = this;
return (new cljs.core.async.t_cljs$core$async24610(self__.flag,meta24611__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24612){
var self__ = this;
var _24612__$1 = this;
return self__.meta24611;
});})(flag))
;

cljs.core.async.t_cljs$core$async24610.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24610.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24610.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24611","meta24611",1333661602,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24610";

cljs.core.async.t_cljs$core$async24610.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24610");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24610.
 */
cljs.core.async.__GT_t_cljs$core$async24610 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24610(flag__$1,meta24611){
return (new cljs.core.async.t_cljs$core$async24610(flag__$1,meta24611));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24610(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24613 = (function (flag,cb,meta24614){
this.flag = flag;
this.cb = cb;
this.meta24614 = meta24614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24615,meta24614__$1){
var self__ = this;
var _24615__$1 = this;
return (new cljs.core.async.t_cljs$core$async24613(self__.flag,self__.cb,meta24614__$1));
});

cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24615){
var self__ = this;
var _24615__$1 = this;
return self__.meta24614;
});

cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24614","meta24614",882595011,null)], null);
});

cljs.core.async.t_cljs$core$async24613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24613";

cljs.core.async.t_cljs$core$async24613.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24613");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24613.
 */
cljs.core.async.__GT_t_cljs$core$async24613 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24613(flag__$1,cb__$1,meta24614){
return (new cljs.core.async.t_cljs$core$async24613(flag__$1,cb__$1,meta24614));
});

}

return (new cljs.core.async.t_cljs$core$async24613(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24616_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24616_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24617_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24617_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24618 = (i + (1));
i = G__24618;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4502__auto__ = [];
var len__4499__auto___24624 = arguments.length;
var i__4500__auto___24625 = (0);
while(true){
if((i__4500__auto___24625 < len__4499__auto___24624)){
args__4502__auto__.push((arguments[i__4500__auto___24625]));

var G__24626 = (i__4500__auto___24625 + (1));
i__4500__auto___24625 = G__24626;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24621){
var map__24622 = p__24621;
var map__24622__$1 = ((((!((map__24622 == null)))?(((((map__24622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24622):map__24622);
var opts = map__24622__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24619){
var G__24620 = cljs.core.first.call(null,seq24619);
var seq24619__$1 = cljs.core.next.call(null,seq24619);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24620,seq24619__$1);
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
var G__24628 = arguments.length;
switch (G__24628) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24527__auto___24674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___24674){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___24674){
return (function (state_24652){
var state_val_24653 = (state_24652[(1)]);
if((state_val_24653 === (7))){
var inst_24648 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
var statearr_24654_24675 = state_24652__$1;
(statearr_24654_24675[(2)] = inst_24648);

(statearr_24654_24675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (1))){
var state_24652__$1 = state_24652;
var statearr_24655_24676 = state_24652__$1;
(statearr_24655_24676[(2)] = null);

(statearr_24655_24676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (4))){
var inst_24631 = (state_24652[(7)]);
var inst_24631__$1 = (state_24652[(2)]);
var inst_24632 = (inst_24631__$1 == null);
var state_24652__$1 = (function (){var statearr_24656 = state_24652;
(statearr_24656[(7)] = inst_24631__$1);

return statearr_24656;
})();
if(cljs.core.truth_(inst_24632)){
var statearr_24657_24677 = state_24652__$1;
(statearr_24657_24677[(1)] = (5));

} else {
var statearr_24658_24678 = state_24652__$1;
(statearr_24658_24678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (13))){
var state_24652__$1 = state_24652;
var statearr_24659_24679 = state_24652__$1;
(statearr_24659_24679[(2)] = null);

(statearr_24659_24679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (6))){
var inst_24631 = (state_24652[(7)]);
var state_24652__$1 = state_24652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24652__$1,(11),to,inst_24631);
} else {
if((state_val_24653 === (3))){
var inst_24650 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24652__$1,inst_24650);
} else {
if((state_val_24653 === (12))){
var state_24652__$1 = state_24652;
var statearr_24660_24680 = state_24652__$1;
(statearr_24660_24680[(2)] = null);

(statearr_24660_24680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (2))){
var state_24652__$1 = state_24652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24652__$1,(4),from);
} else {
if((state_val_24653 === (11))){
var inst_24641 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
if(cljs.core.truth_(inst_24641)){
var statearr_24661_24681 = state_24652__$1;
(statearr_24661_24681[(1)] = (12));

} else {
var statearr_24662_24682 = state_24652__$1;
(statearr_24662_24682[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (9))){
var state_24652__$1 = state_24652;
var statearr_24663_24683 = state_24652__$1;
(statearr_24663_24683[(2)] = null);

(statearr_24663_24683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (5))){
var state_24652__$1 = state_24652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24664_24684 = state_24652__$1;
(statearr_24664_24684[(1)] = (8));

} else {
var statearr_24665_24685 = state_24652__$1;
(statearr_24665_24685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (14))){
var inst_24646 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
var statearr_24666_24686 = state_24652__$1;
(statearr_24666_24686[(2)] = inst_24646);

(statearr_24666_24686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (10))){
var inst_24638 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
var statearr_24667_24687 = state_24652__$1;
(statearr_24667_24687[(2)] = inst_24638);

(statearr_24667_24687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (8))){
var inst_24635 = cljs.core.async.close_BANG_.call(null,to);
var state_24652__$1 = state_24652;
var statearr_24668_24688 = state_24652__$1;
(statearr_24668_24688[(2)] = inst_24635);

(statearr_24668_24688[(1)] = (10));


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
});})(c__24527__auto___24674))
;
return ((function (switch__24437__auto__,c__24527__auto___24674){
return (function() {
var cljs$core$async$state_machine__24438__auto__ = null;
var cljs$core$async$state_machine__24438__auto____0 = (function (){
var statearr_24669 = [null,null,null,null,null,null,null,null];
(statearr_24669[(0)] = cljs$core$async$state_machine__24438__auto__);

(statearr_24669[(1)] = (1));

return statearr_24669;
});
var cljs$core$async$state_machine__24438__auto____1 = (function (state_24652){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_24652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e24670){if((e24670 instanceof Object)){
var ex__24441__auto__ = e24670;
var statearr_24671_24689 = state_24652;
(statearr_24671_24689[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24690 = state_24652;
state_24652 = G__24690;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$state_machine__24438__auto__ = function(state_24652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24438__auto____1.call(this,state_24652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24438__auto____0;
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24438__auto____1;
return cljs$core$async$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___24674))
})();
var state__24529__auto__ = (function (){var statearr_24672 = f__24528__auto__.call(null);
(statearr_24672[(6)] = c__24527__auto___24674);

return statearr_24672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___24674))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24691){
var vec__24692 = p__24691;
var v = cljs.core.nth.call(null,vec__24692,(0),null);
var p = cljs.core.nth.call(null,vec__24692,(1),null);
var job = vec__24692;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24527__auto___24863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___24863,res,vec__24692,v,p,job,jobs,results){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___24863,res,vec__24692,v,p,job,jobs,results){
return (function (state_24699){
var state_val_24700 = (state_24699[(1)]);
if((state_val_24700 === (1))){
var state_24699__$1 = state_24699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24699__$1,(2),res,v);
} else {
if((state_val_24700 === (2))){
var inst_24696 = (state_24699[(2)]);
var inst_24697 = cljs.core.async.close_BANG_.call(null,res);
var state_24699__$1 = (function (){var statearr_24701 = state_24699;
(statearr_24701[(7)] = inst_24696);

return statearr_24701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24699__$1,inst_24697);
} else {
return null;
}
}
});})(c__24527__auto___24863,res,vec__24692,v,p,job,jobs,results))
;
return ((function (switch__24437__auto__,c__24527__auto___24863,res,vec__24692,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0 = (function (){
var statearr_24702 = [null,null,null,null,null,null,null,null];
(statearr_24702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__);

(statearr_24702[(1)] = (1));

return statearr_24702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1 = (function (state_24699){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_24699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e24703){if((e24703 instanceof Object)){
var ex__24441__auto__ = e24703;
var statearr_24704_24864 = state_24699;
(statearr_24704_24864[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24865 = state_24699;
state_24699 = G__24865;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__ = function(state_24699){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1.call(this,state_24699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___24863,res,vec__24692,v,p,job,jobs,results))
})();
var state__24529__auto__ = (function (){var statearr_24705 = f__24528__auto__.call(null);
(statearr_24705[(6)] = c__24527__auto___24863);

return statearr_24705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___24863,res,vec__24692,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24706){
var vec__24707 = p__24706;
var v = cljs.core.nth.call(null,vec__24707,(0),null);
var p = cljs.core.nth.call(null,vec__24707,(1),null);
var job = vec__24707;
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
var n__4376__auto___24866 = n;
var __24867 = (0);
while(true){
if((__24867 < n__4376__auto___24866)){
var G__24710_24868 = type;
var G__24710_24869__$1 = (((G__24710_24868 instanceof cljs.core.Keyword))?G__24710_24868.fqn:null);
switch (G__24710_24869__$1) {
case "compute":
var c__24527__auto___24871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24867,c__24527__auto___24871,G__24710_24868,G__24710_24869__$1,n__4376__auto___24866,jobs,results,process,async){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (__24867,c__24527__auto___24871,G__24710_24868,G__24710_24869__$1,n__4376__auto___24866,jobs,results,process,async){
return (function (state_24723){
var state_val_24724 = (state_24723[(1)]);
if((state_val_24724 === (1))){
var state_24723__$1 = state_24723;
var statearr_24725_24872 = state_24723__$1;
(statearr_24725_24872[(2)] = null);

(statearr_24725_24872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (2))){
var state_24723__$1 = state_24723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24723__$1,(4),jobs);
} else {
if((state_val_24724 === (3))){
var inst_24721 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24723__$1,inst_24721);
} else {
if((state_val_24724 === (4))){
var inst_24713 = (state_24723[(2)]);
var inst_24714 = process.call(null,inst_24713);
var state_24723__$1 = state_24723;
if(cljs.core.truth_(inst_24714)){
var statearr_24726_24873 = state_24723__$1;
(statearr_24726_24873[(1)] = (5));

} else {
var statearr_24727_24874 = state_24723__$1;
(statearr_24727_24874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (5))){
var state_24723__$1 = state_24723;
var statearr_24728_24875 = state_24723__$1;
(statearr_24728_24875[(2)] = null);

(statearr_24728_24875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (6))){
var state_24723__$1 = state_24723;
var statearr_24729_24876 = state_24723__$1;
(statearr_24729_24876[(2)] = null);

(statearr_24729_24876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (7))){
var inst_24719 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
var statearr_24730_24877 = state_24723__$1;
(statearr_24730_24877[(2)] = inst_24719);

(statearr_24730_24877[(1)] = (3));


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
});})(__24867,c__24527__auto___24871,G__24710_24868,G__24710_24869__$1,n__4376__auto___24866,jobs,results,process,async))
;
return ((function (__24867,switch__24437__auto__,c__24527__auto___24871,G__24710_24868,G__24710_24869__$1,n__4376__auto___24866,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0 = (function (){
var statearr_24731 = [null,null,null,null,null,null,null];
(statearr_24731[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__);

(statearr_24731[(1)] = (1));

return statearr_24731;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1 = (function (state_24723){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_24723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e24732){if((e24732 instanceof Object)){
var ex__24441__auto__ = e24732;
var statearr_24733_24878 = state_24723;
(statearr_24733_24878[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24879 = state_24723;
state_24723 = G__24879;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__ = function(state_24723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1.call(this,state_24723);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__;
})()
;})(__24867,switch__24437__auto__,c__24527__auto___24871,G__24710_24868,G__24710_24869__$1,n__4376__auto___24866,jobs,results,process,async))
})();
var state__24529__auto__ = (function (){var statearr_24734 = f__24528__auto__.call(null);
(statearr_24734[(6)] = c__24527__auto___24871);

return statearr_24734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(__24867,c__24527__auto___24871,G__24710_24868,G__24710_24869__$1,n__4376__auto___24866,jobs,results,process,async))
);


break;
case "async":
var c__24527__auto___24880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24867,c__24527__auto___24880,G__24710_24868,G__24710_24869__$1,n__4376__auto___24866,jobs,results,process,async){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (__24867,c__24527__auto___24880,G__24710_24868,G__24710_24869__$1,n__4376__auto___24866,jobs,results,process,async){
return (function (state_24747){
var state_val_24748 = (state_24747[(1)]);
if((state_val_24748 === (1))){
var state_24747__$1 = state_24747;
var statearr_24749_24881 = state_24747__$1;
(statearr_24749_24881[(2)] = null);

(statearr_24749_24881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (2))){
var state_24747__$1 = state_24747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24747__$1,(4),jobs);
} else {
if((state_val_24748 === (3))){
var inst_24745 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24747__$1,inst_24745);
} else {
if((state_val_24748 === (4))){
var inst_24737 = (state_24747[(2)]);
var inst_24738 = async.call(null,inst_24737);
var state_24747__$1 = state_24747;
if(cljs.core.truth_(inst_24738)){
var statearr_24750_24882 = state_24747__$1;
(statearr_24750_24882[(1)] = (5));

} else {
var statearr_24751_24883 = state_24747__$1;
(statearr_24751_24883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (5))){
var state_24747__$1 = state_24747;
var statearr_24752_24884 = state_24747__$1;
(statearr_24752_24884[(2)] = null);

(statearr_24752_24884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (6))){
var state_24747__$1 = state_24747;
var statearr_24753_24885 = state_24747__$1;
(statearr_24753_24885[(2)] = null);

(statearr_24753_24885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (7))){
var inst_24743 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
var statearr_24754_24886 = state_24747__$1;
(statearr_24754_24886[(2)] = inst_24743);

(statearr_24754_24886[(1)] = (3));


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
});})(__24867,c__24527__auto___24880,G__24710_24868,G__24710_24869__$1,n__4376__auto___24866,jobs,results,process,async))
;
return ((function (__24867,switch__24437__auto__,c__24527__auto___24880,G__24710_24868,G__24710_24869__$1,n__4376__auto___24866,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0 = (function (){
var statearr_24755 = [null,null,null,null,null,null,null];
(statearr_24755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__);

(statearr_24755[(1)] = (1));

return statearr_24755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1 = (function (state_24747){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_24747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e24756){if((e24756 instanceof Object)){
var ex__24441__auto__ = e24756;
var statearr_24757_24887 = state_24747;
(statearr_24757_24887[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24888 = state_24747;
state_24747 = G__24888;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__ = function(state_24747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1.call(this,state_24747);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__;
})()
;})(__24867,switch__24437__auto__,c__24527__auto___24880,G__24710_24868,G__24710_24869__$1,n__4376__auto___24866,jobs,results,process,async))
})();
var state__24529__auto__ = (function (){var statearr_24758 = f__24528__auto__.call(null);
(statearr_24758[(6)] = c__24527__auto___24880);

return statearr_24758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(__24867,c__24527__auto___24880,G__24710_24868,G__24710_24869__$1,n__4376__auto___24866,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24710_24869__$1)].join('')));

}

var G__24889 = (__24867 + (1));
__24867 = G__24889;
continue;
} else {
}
break;
}

var c__24527__auto___24890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___24890,jobs,results,process,async){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___24890,jobs,results,process,async){
return (function (state_24780){
var state_val_24781 = (state_24780[(1)]);
if((state_val_24781 === (1))){
var state_24780__$1 = state_24780;
var statearr_24782_24891 = state_24780__$1;
(statearr_24782_24891[(2)] = null);

(statearr_24782_24891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (2))){
var state_24780__$1 = state_24780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24780__$1,(4),from);
} else {
if((state_val_24781 === (3))){
var inst_24778 = (state_24780[(2)]);
var state_24780__$1 = state_24780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24780__$1,inst_24778);
} else {
if((state_val_24781 === (4))){
var inst_24761 = (state_24780[(7)]);
var inst_24761__$1 = (state_24780[(2)]);
var inst_24762 = (inst_24761__$1 == null);
var state_24780__$1 = (function (){var statearr_24783 = state_24780;
(statearr_24783[(7)] = inst_24761__$1);

return statearr_24783;
})();
if(cljs.core.truth_(inst_24762)){
var statearr_24784_24892 = state_24780__$1;
(statearr_24784_24892[(1)] = (5));

} else {
var statearr_24785_24893 = state_24780__$1;
(statearr_24785_24893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (5))){
var inst_24764 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24780__$1 = state_24780;
var statearr_24786_24894 = state_24780__$1;
(statearr_24786_24894[(2)] = inst_24764);

(statearr_24786_24894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (6))){
var inst_24766 = (state_24780[(8)]);
var inst_24761 = (state_24780[(7)]);
var inst_24766__$1 = cljs.core.async.chan.call(null,(1));
var inst_24767 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24768 = [inst_24761,inst_24766__$1];
var inst_24769 = (new cljs.core.PersistentVector(null,2,(5),inst_24767,inst_24768,null));
var state_24780__$1 = (function (){var statearr_24787 = state_24780;
(statearr_24787[(8)] = inst_24766__$1);

return statearr_24787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24780__$1,(8),jobs,inst_24769);
} else {
if((state_val_24781 === (7))){
var inst_24776 = (state_24780[(2)]);
var state_24780__$1 = state_24780;
var statearr_24788_24895 = state_24780__$1;
(statearr_24788_24895[(2)] = inst_24776);

(statearr_24788_24895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (8))){
var inst_24766 = (state_24780[(8)]);
var inst_24771 = (state_24780[(2)]);
var state_24780__$1 = (function (){var statearr_24789 = state_24780;
(statearr_24789[(9)] = inst_24771);

return statearr_24789;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24780__$1,(9),results,inst_24766);
} else {
if((state_val_24781 === (9))){
var inst_24773 = (state_24780[(2)]);
var state_24780__$1 = (function (){var statearr_24790 = state_24780;
(statearr_24790[(10)] = inst_24773);

return statearr_24790;
})();
var statearr_24791_24896 = state_24780__$1;
(statearr_24791_24896[(2)] = null);

(statearr_24791_24896[(1)] = (2));


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
});})(c__24527__auto___24890,jobs,results,process,async))
;
return ((function (switch__24437__auto__,c__24527__auto___24890,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0 = (function (){
var statearr_24792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24792[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__);

(statearr_24792[(1)] = (1));

return statearr_24792;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1 = (function (state_24780){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_24780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e24793){if((e24793 instanceof Object)){
var ex__24441__auto__ = e24793;
var statearr_24794_24897 = state_24780;
(statearr_24794_24897[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24898 = state_24780;
state_24780 = G__24898;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__ = function(state_24780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1.call(this,state_24780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___24890,jobs,results,process,async))
})();
var state__24529__auto__ = (function (){var statearr_24795 = f__24528__auto__.call(null);
(statearr_24795[(6)] = c__24527__auto___24890);

return statearr_24795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___24890,jobs,results,process,async))
);


var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto__,jobs,results,process,async){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto__,jobs,results,process,async){
return (function (state_24833){
var state_val_24834 = (state_24833[(1)]);
if((state_val_24834 === (7))){
var inst_24829 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
var statearr_24835_24899 = state_24833__$1;
(statearr_24835_24899[(2)] = inst_24829);

(statearr_24835_24899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (20))){
var state_24833__$1 = state_24833;
var statearr_24836_24900 = state_24833__$1;
(statearr_24836_24900[(2)] = null);

(statearr_24836_24900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (1))){
var state_24833__$1 = state_24833;
var statearr_24837_24901 = state_24833__$1;
(statearr_24837_24901[(2)] = null);

(statearr_24837_24901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (4))){
var inst_24798 = (state_24833[(7)]);
var inst_24798__$1 = (state_24833[(2)]);
var inst_24799 = (inst_24798__$1 == null);
var state_24833__$1 = (function (){var statearr_24838 = state_24833;
(statearr_24838[(7)] = inst_24798__$1);

return statearr_24838;
})();
if(cljs.core.truth_(inst_24799)){
var statearr_24839_24902 = state_24833__$1;
(statearr_24839_24902[(1)] = (5));

} else {
var statearr_24840_24903 = state_24833__$1;
(statearr_24840_24903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (15))){
var inst_24811 = (state_24833[(8)]);
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24833__$1,(18),to,inst_24811);
} else {
if((state_val_24834 === (21))){
var inst_24824 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
var statearr_24841_24904 = state_24833__$1;
(statearr_24841_24904[(2)] = inst_24824);

(statearr_24841_24904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (13))){
var inst_24826 = (state_24833[(2)]);
var state_24833__$1 = (function (){var statearr_24842 = state_24833;
(statearr_24842[(9)] = inst_24826);

return statearr_24842;
})();
var statearr_24843_24905 = state_24833__$1;
(statearr_24843_24905[(2)] = null);

(statearr_24843_24905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (6))){
var inst_24798 = (state_24833[(7)]);
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24833__$1,(11),inst_24798);
} else {
if((state_val_24834 === (17))){
var inst_24819 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
if(cljs.core.truth_(inst_24819)){
var statearr_24844_24906 = state_24833__$1;
(statearr_24844_24906[(1)] = (19));

} else {
var statearr_24845_24907 = state_24833__$1;
(statearr_24845_24907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (3))){
var inst_24831 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24833__$1,inst_24831);
} else {
if((state_val_24834 === (12))){
var inst_24808 = (state_24833[(10)]);
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24833__$1,(14),inst_24808);
} else {
if((state_val_24834 === (2))){
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24833__$1,(4),results);
} else {
if((state_val_24834 === (19))){
var state_24833__$1 = state_24833;
var statearr_24846_24908 = state_24833__$1;
(statearr_24846_24908[(2)] = null);

(statearr_24846_24908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (11))){
var inst_24808 = (state_24833[(2)]);
var state_24833__$1 = (function (){var statearr_24847 = state_24833;
(statearr_24847[(10)] = inst_24808);

return statearr_24847;
})();
var statearr_24848_24909 = state_24833__$1;
(statearr_24848_24909[(2)] = null);

(statearr_24848_24909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (9))){
var state_24833__$1 = state_24833;
var statearr_24849_24910 = state_24833__$1;
(statearr_24849_24910[(2)] = null);

(statearr_24849_24910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (5))){
var state_24833__$1 = state_24833;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24850_24911 = state_24833__$1;
(statearr_24850_24911[(1)] = (8));

} else {
var statearr_24851_24912 = state_24833__$1;
(statearr_24851_24912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (14))){
var inst_24813 = (state_24833[(11)]);
var inst_24811 = (state_24833[(8)]);
var inst_24811__$1 = (state_24833[(2)]);
var inst_24812 = (inst_24811__$1 == null);
var inst_24813__$1 = cljs.core.not.call(null,inst_24812);
var state_24833__$1 = (function (){var statearr_24852 = state_24833;
(statearr_24852[(11)] = inst_24813__$1);

(statearr_24852[(8)] = inst_24811__$1);

return statearr_24852;
})();
if(inst_24813__$1){
var statearr_24853_24913 = state_24833__$1;
(statearr_24853_24913[(1)] = (15));

} else {
var statearr_24854_24914 = state_24833__$1;
(statearr_24854_24914[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (16))){
var inst_24813 = (state_24833[(11)]);
var state_24833__$1 = state_24833;
var statearr_24855_24915 = state_24833__$1;
(statearr_24855_24915[(2)] = inst_24813);

(statearr_24855_24915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (10))){
var inst_24805 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
var statearr_24856_24916 = state_24833__$1;
(statearr_24856_24916[(2)] = inst_24805);

(statearr_24856_24916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (18))){
var inst_24816 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
var statearr_24857_24917 = state_24833__$1;
(statearr_24857_24917[(2)] = inst_24816);

(statearr_24857_24917[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (8))){
var inst_24802 = cljs.core.async.close_BANG_.call(null,to);
var state_24833__$1 = state_24833;
var statearr_24858_24918 = state_24833__$1;
(statearr_24858_24918[(2)] = inst_24802);

(statearr_24858_24918[(1)] = (10));


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
});})(c__24527__auto__,jobs,results,process,async))
;
return ((function (switch__24437__auto__,c__24527__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0 = (function (){
var statearr_24859 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__);

(statearr_24859[(1)] = (1));

return statearr_24859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1 = (function (state_24833){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_24833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e24860){if((e24860 instanceof Object)){
var ex__24441__auto__ = e24860;
var statearr_24861_24919 = state_24833;
(statearr_24861_24919[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24920 = state_24833;
state_24833 = G__24920;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__ = function(state_24833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1.call(this,state_24833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto__,jobs,results,process,async))
})();
var state__24529__auto__ = (function (){var statearr_24862 = f__24528__auto__.call(null);
(statearr_24862[(6)] = c__24527__auto__);

return statearr_24862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto__,jobs,results,process,async))
);

return c__24527__auto__;
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
var G__24922 = arguments.length;
switch (G__24922) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__24925 = arguments.length;
switch (G__24925) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__24928 = arguments.length;
switch (G__24928) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24527__auto___24977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___24977,tc,fc){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___24977,tc,fc){
return (function (state_24954){
var state_val_24955 = (state_24954[(1)]);
if((state_val_24955 === (7))){
var inst_24950 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
var statearr_24956_24978 = state_24954__$1;
(statearr_24956_24978[(2)] = inst_24950);

(statearr_24956_24978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (1))){
var state_24954__$1 = state_24954;
var statearr_24957_24979 = state_24954__$1;
(statearr_24957_24979[(2)] = null);

(statearr_24957_24979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (4))){
var inst_24931 = (state_24954[(7)]);
var inst_24931__$1 = (state_24954[(2)]);
var inst_24932 = (inst_24931__$1 == null);
var state_24954__$1 = (function (){var statearr_24958 = state_24954;
(statearr_24958[(7)] = inst_24931__$1);

return statearr_24958;
})();
if(cljs.core.truth_(inst_24932)){
var statearr_24959_24980 = state_24954__$1;
(statearr_24959_24980[(1)] = (5));

} else {
var statearr_24960_24981 = state_24954__$1;
(statearr_24960_24981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (13))){
var state_24954__$1 = state_24954;
var statearr_24961_24982 = state_24954__$1;
(statearr_24961_24982[(2)] = null);

(statearr_24961_24982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (6))){
var inst_24931 = (state_24954[(7)]);
var inst_24937 = p.call(null,inst_24931);
var state_24954__$1 = state_24954;
if(cljs.core.truth_(inst_24937)){
var statearr_24962_24983 = state_24954__$1;
(statearr_24962_24983[(1)] = (9));

} else {
var statearr_24963_24984 = state_24954__$1;
(statearr_24963_24984[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (3))){
var inst_24952 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24954__$1,inst_24952);
} else {
if((state_val_24955 === (12))){
var state_24954__$1 = state_24954;
var statearr_24964_24985 = state_24954__$1;
(statearr_24964_24985[(2)] = null);

(statearr_24964_24985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (2))){
var state_24954__$1 = state_24954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24954__$1,(4),ch);
} else {
if((state_val_24955 === (11))){
var inst_24931 = (state_24954[(7)]);
var inst_24941 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24954__$1,(8),inst_24941,inst_24931);
} else {
if((state_val_24955 === (9))){
var state_24954__$1 = state_24954;
var statearr_24965_24986 = state_24954__$1;
(statearr_24965_24986[(2)] = tc);

(statearr_24965_24986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (5))){
var inst_24934 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24935 = cljs.core.async.close_BANG_.call(null,fc);
var state_24954__$1 = (function (){var statearr_24966 = state_24954;
(statearr_24966[(8)] = inst_24934);

return statearr_24966;
})();
var statearr_24967_24987 = state_24954__$1;
(statearr_24967_24987[(2)] = inst_24935);

(statearr_24967_24987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (14))){
var inst_24948 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
var statearr_24968_24988 = state_24954__$1;
(statearr_24968_24988[(2)] = inst_24948);

(statearr_24968_24988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (10))){
var state_24954__$1 = state_24954;
var statearr_24969_24989 = state_24954__$1;
(statearr_24969_24989[(2)] = fc);

(statearr_24969_24989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (8))){
var inst_24943 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
if(cljs.core.truth_(inst_24943)){
var statearr_24970_24990 = state_24954__$1;
(statearr_24970_24990[(1)] = (12));

} else {
var statearr_24971_24991 = state_24954__$1;
(statearr_24971_24991[(1)] = (13));

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
});})(c__24527__auto___24977,tc,fc))
;
return ((function (switch__24437__auto__,c__24527__auto___24977,tc,fc){
return (function() {
var cljs$core$async$state_machine__24438__auto__ = null;
var cljs$core$async$state_machine__24438__auto____0 = (function (){
var statearr_24972 = [null,null,null,null,null,null,null,null,null];
(statearr_24972[(0)] = cljs$core$async$state_machine__24438__auto__);

(statearr_24972[(1)] = (1));

return statearr_24972;
});
var cljs$core$async$state_machine__24438__auto____1 = (function (state_24954){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_24954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e24973){if((e24973 instanceof Object)){
var ex__24441__auto__ = e24973;
var statearr_24974_24992 = state_24954;
(statearr_24974_24992[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24993 = state_24954;
state_24954 = G__24993;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$state_machine__24438__auto__ = function(state_24954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24438__auto____1.call(this,state_24954);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24438__auto____0;
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24438__auto____1;
return cljs$core$async$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___24977,tc,fc))
})();
var state__24529__auto__ = (function (){var statearr_24975 = f__24528__auto__.call(null);
(statearr_24975[(6)] = c__24527__auto___24977);

return statearr_24975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___24977,tc,fc))
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
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto__){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto__){
return (function (state_25014){
var state_val_25015 = (state_25014[(1)]);
if((state_val_25015 === (7))){
var inst_25010 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
var statearr_25016_25034 = state_25014__$1;
(statearr_25016_25034[(2)] = inst_25010);

(statearr_25016_25034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (1))){
var inst_24994 = init;
var state_25014__$1 = (function (){var statearr_25017 = state_25014;
(statearr_25017[(7)] = inst_24994);

return statearr_25017;
})();
var statearr_25018_25035 = state_25014__$1;
(statearr_25018_25035[(2)] = null);

(statearr_25018_25035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (4))){
var inst_24997 = (state_25014[(8)]);
var inst_24997__$1 = (state_25014[(2)]);
var inst_24998 = (inst_24997__$1 == null);
var state_25014__$1 = (function (){var statearr_25019 = state_25014;
(statearr_25019[(8)] = inst_24997__$1);

return statearr_25019;
})();
if(cljs.core.truth_(inst_24998)){
var statearr_25020_25036 = state_25014__$1;
(statearr_25020_25036[(1)] = (5));

} else {
var statearr_25021_25037 = state_25014__$1;
(statearr_25021_25037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (6))){
var inst_24997 = (state_25014[(8)]);
var inst_25001 = (state_25014[(9)]);
var inst_24994 = (state_25014[(7)]);
var inst_25001__$1 = f.call(null,inst_24994,inst_24997);
var inst_25002 = cljs.core.reduced_QMARK_.call(null,inst_25001__$1);
var state_25014__$1 = (function (){var statearr_25022 = state_25014;
(statearr_25022[(9)] = inst_25001__$1);

return statearr_25022;
})();
if(inst_25002){
var statearr_25023_25038 = state_25014__$1;
(statearr_25023_25038[(1)] = (8));

} else {
var statearr_25024_25039 = state_25014__$1;
(statearr_25024_25039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (3))){
var inst_25012 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25014__$1,inst_25012);
} else {
if((state_val_25015 === (2))){
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25014__$1,(4),ch);
} else {
if((state_val_25015 === (9))){
var inst_25001 = (state_25014[(9)]);
var inst_24994 = inst_25001;
var state_25014__$1 = (function (){var statearr_25025 = state_25014;
(statearr_25025[(7)] = inst_24994);

return statearr_25025;
})();
var statearr_25026_25040 = state_25014__$1;
(statearr_25026_25040[(2)] = null);

(statearr_25026_25040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (5))){
var inst_24994 = (state_25014[(7)]);
var state_25014__$1 = state_25014;
var statearr_25027_25041 = state_25014__$1;
(statearr_25027_25041[(2)] = inst_24994);

(statearr_25027_25041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (10))){
var inst_25008 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
var statearr_25028_25042 = state_25014__$1;
(statearr_25028_25042[(2)] = inst_25008);

(statearr_25028_25042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (8))){
var inst_25001 = (state_25014[(9)]);
var inst_25004 = cljs.core.deref.call(null,inst_25001);
var state_25014__$1 = state_25014;
var statearr_25029_25043 = state_25014__$1;
(statearr_25029_25043[(2)] = inst_25004);

(statearr_25029_25043[(1)] = (10));


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
});})(c__24527__auto__))
;
return ((function (switch__24437__auto__,c__24527__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24438__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24438__auto____0 = (function (){
var statearr_25030 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25030[(0)] = cljs$core$async$reduce_$_state_machine__24438__auto__);

(statearr_25030[(1)] = (1));

return statearr_25030;
});
var cljs$core$async$reduce_$_state_machine__24438__auto____1 = (function (state_25014){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_25014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e25031){if((e25031 instanceof Object)){
var ex__24441__auto__ = e25031;
var statearr_25032_25044 = state_25014;
(statearr_25032_25044[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25045 = state_25014;
state_25014 = G__25045;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24438__auto__ = function(state_25014){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24438__auto____1.call(this,state_25014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24438__auto____0;
cljs$core$async$reduce_$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24438__auto____1;
return cljs$core$async$reduce_$_state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto__))
})();
var state__24529__auto__ = (function (){var statearr_25033 = f__24528__auto__.call(null);
(statearr_25033[(6)] = c__24527__auto__);

return statearr_25033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto__))
);

return c__24527__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto__,f__$1){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto__,f__$1){
return (function (state_25051){
var state_val_25052 = (state_25051[(1)]);
if((state_val_25052 === (1))){
var inst_25046 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25051__$1 = state_25051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25051__$1,(2),inst_25046);
} else {
if((state_val_25052 === (2))){
var inst_25048 = (state_25051[(2)]);
var inst_25049 = f__$1.call(null,inst_25048);
var state_25051__$1 = state_25051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25051__$1,inst_25049);
} else {
return null;
}
}
});})(c__24527__auto__,f__$1))
;
return ((function (switch__24437__auto__,c__24527__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24438__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24438__auto____0 = (function (){
var statearr_25053 = [null,null,null,null,null,null,null];
(statearr_25053[(0)] = cljs$core$async$transduce_$_state_machine__24438__auto__);

(statearr_25053[(1)] = (1));

return statearr_25053;
});
var cljs$core$async$transduce_$_state_machine__24438__auto____1 = (function (state_25051){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_25051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e25054){if((e25054 instanceof Object)){
var ex__24441__auto__ = e25054;
var statearr_25055_25057 = state_25051;
(statearr_25055_25057[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25058 = state_25051;
state_25051 = G__25058;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24438__auto__ = function(state_25051){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24438__auto____1.call(this,state_25051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24438__auto____0;
cljs$core$async$transduce_$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24438__auto____1;
return cljs$core$async$transduce_$_state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto__,f__$1))
})();
var state__24529__auto__ = (function (){var statearr_25056 = f__24528__auto__.call(null);
(statearr_25056[(6)] = c__24527__auto__);

return statearr_25056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto__,f__$1))
);

return c__24527__auto__;
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
var G__25060 = arguments.length;
switch (G__25060) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto__){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto__){
return (function (state_25085){
var state_val_25086 = (state_25085[(1)]);
if((state_val_25086 === (7))){
var inst_25067 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25087_25108 = state_25085__$1;
(statearr_25087_25108[(2)] = inst_25067);

(statearr_25087_25108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (1))){
var inst_25061 = cljs.core.seq.call(null,coll);
var inst_25062 = inst_25061;
var state_25085__$1 = (function (){var statearr_25088 = state_25085;
(statearr_25088[(7)] = inst_25062);

return statearr_25088;
})();
var statearr_25089_25109 = state_25085__$1;
(statearr_25089_25109[(2)] = null);

(statearr_25089_25109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (4))){
var inst_25062 = (state_25085[(7)]);
var inst_25065 = cljs.core.first.call(null,inst_25062);
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25085__$1,(7),ch,inst_25065);
} else {
if((state_val_25086 === (13))){
var inst_25079 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25090_25110 = state_25085__$1;
(statearr_25090_25110[(2)] = inst_25079);

(statearr_25090_25110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (6))){
var inst_25070 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
if(cljs.core.truth_(inst_25070)){
var statearr_25091_25111 = state_25085__$1;
(statearr_25091_25111[(1)] = (8));

} else {
var statearr_25092_25112 = state_25085__$1;
(statearr_25092_25112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (3))){
var inst_25083 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25085__$1,inst_25083);
} else {
if((state_val_25086 === (12))){
var state_25085__$1 = state_25085;
var statearr_25093_25113 = state_25085__$1;
(statearr_25093_25113[(2)] = null);

(statearr_25093_25113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (2))){
var inst_25062 = (state_25085[(7)]);
var state_25085__$1 = state_25085;
if(cljs.core.truth_(inst_25062)){
var statearr_25094_25114 = state_25085__$1;
(statearr_25094_25114[(1)] = (4));

} else {
var statearr_25095_25115 = state_25085__$1;
(statearr_25095_25115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (11))){
var inst_25076 = cljs.core.async.close_BANG_.call(null,ch);
var state_25085__$1 = state_25085;
var statearr_25096_25116 = state_25085__$1;
(statearr_25096_25116[(2)] = inst_25076);

(statearr_25096_25116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (9))){
var state_25085__$1 = state_25085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25097_25117 = state_25085__$1;
(statearr_25097_25117[(1)] = (11));

} else {
var statearr_25098_25118 = state_25085__$1;
(statearr_25098_25118[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (5))){
var inst_25062 = (state_25085[(7)]);
var state_25085__$1 = state_25085;
var statearr_25099_25119 = state_25085__$1;
(statearr_25099_25119[(2)] = inst_25062);

(statearr_25099_25119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (10))){
var inst_25081 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25100_25120 = state_25085__$1;
(statearr_25100_25120[(2)] = inst_25081);

(statearr_25100_25120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (8))){
var inst_25062 = (state_25085[(7)]);
var inst_25072 = cljs.core.next.call(null,inst_25062);
var inst_25062__$1 = inst_25072;
var state_25085__$1 = (function (){var statearr_25101 = state_25085;
(statearr_25101[(7)] = inst_25062__$1);

return statearr_25101;
})();
var statearr_25102_25121 = state_25085__$1;
(statearr_25102_25121[(2)] = null);

(statearr_25102_25121[(1)] = (2));


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
});})(c__24527__auto__))
;
return ((function (switch__24437__auto__,c__24527__auto__){
return (function() {
var cljs$core$async$state_machine__24438__auto__ = null;
var cljs$core$async$state_machine__24438__auto____0 = (function (){
var statearr_25103 = [null,null,null,null,null,null,null,null];
(statearr_25103[(0)] = cljs$core$async$state_machine__24438__auto__);

(statearr_25103[(1)] = (1));

return statearr_25103;
});
var cljs$core$async$state_machine__24438__auto____1 = (function (state_25085){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_25085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e25104){if((e25104 instanceof Object)){
var ex__24441__auto__ = e25104;
var statearr_25105_25122 = state_25085;
(statearr_25105_25122[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25123 = state_25085;
state_25085 = G__25123;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$state_machine__24438__auto__ = function(state_25085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24438__auto____1.call(this,state_25085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24438__auto____0;
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24438__auto____1;
return cljs$core$async$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto__))
})();
var state__24529__auto__ = (function (){var statearr_25106 = f__24528__auto__.call(null);
(statearr_25106[(6)] = c__24527__auto__);

return statearr_25106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto__))
);

return c__24527__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async25124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25124 = (function (ch,cs,meta25125){
this.ch = ch;
this.cs = cs;
this.meta25125 = meta25125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25126,meta25125__$1){
var self__ = this;
var _25126__$1 = this;
return (new cljs.core.async.t_cljs$core$async25124(self__.ch,self__.cs,meta25125__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25126){
var self__ = this;
var _25126__$1 = this;
return self__.meta25125;
});})(cs))
;

cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25124.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25125","meta25125",-371314928,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25124";

cljs.core.async.t_cljs$core$async25124.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25124");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25124.
 */
cljs.core.async.__GT_t_cljs$core$async25124 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25124(ch__$1,cs__$1,meta25125){
return (new cljs.core.async.t_cljs$core$async25124(ch__$1,cs__$1,meta25125));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25124(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24527__auto___25346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___25346,cs,m,dchan,dctr,done){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___25346,cs,m,dchan,dctr,done){
return (function (state_25261){
var state_val_25262 = (state_25261[(1)]);
if((state_val_25262 === (7))){
var inst_25257 = (state_25261[(2)]);
var state_25261__$1 = state_25261;
var statearr_25263_25347 = state_25261__$1;
(statearr_25263_25347[(2)] = inst_25257);

(statearr_25263_25347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (20))){
var inst_25160 = (state_25261[(7)]);
var inst_25172 = cljs.core.first.call(null,inst_25160);
var inst_25173 = cljs.core.nth.call(null,inst_25172,(0),null);
var inst_25174 = cljs.core.nth.call(null,inst_25172,(1),null);
var state_25261__$1 = (function (){var statearr_25264 = state_25261;
(statearr_25264[(8)] = inst_25173);

return statearr_25264;
})();
if(cljs.core.truth_(inst_25174)){
var statearr_25265_25348 = state_25261__$1;
(statearr_25265_25348[(1)] = (22));

} else {
var statearr_25266_25349 = state_25261__$1;
(statearr_25266_25349[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (27))){
var inst_25204 = (state_25261[(9)]);
var inst_25129 = (state_25261[(10)]);
var inst_25202 = (state_25261[(11)]);
var inst_25209 = (state_25261[(12)]);
var inst_25209__$1 = cljs.core._nth.call(null,inst_25202,inst_25204);
var inst_25210 = cljs.core.async.put_BANG_.call(null,inst_25209__$1,inst_25129,done);
var state_25261__$1 = (function (){var statearr_25267 = state_25261;
(statearr_25267[(12)] = inst_25209__$1);

return statearr_25267;
})();
if(cljs.core.truth_(inst_25210)){
var statearr_25268_25350 = state_25261__$1;
(statearr_25268_25350[(1)] = (30));

} else {
var statearr_25269_25351 = state_25261__$1;
(statearr_25269_25351[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (1))){
var state_25261__$1 = state_25261;
var statearr_25270_25352 = state_25261__$1;
(statearr_25270_25352[(2)] = null);

(statearr_25270_25352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (24))){
var inst_25160 = (state_25261[(7)]);
var inst_25179 = (state_25261[(2)]);
var inst_25180 = cljs.core.next.call(null,inst_25160);
var inst_25138 = inst_25180;
var inst_25139 = null;
var inst_25140 = (0);
var inst_25141 = (0);
var state_25261__$1 = (function (){var statearr_25271 = state_25261;
(statearr_25271[(13)] = inst_25140);

(statearr_25271[(14)] = inst_25138);

(statearr_25271[(15)] = inst_25141);

(statearr_25271[(16)] = inst_25139);

(statearr_25271[(17)] = inst_25179);

return statearr_25271;
})();
var statearr_25272_25353 = state_25261__$1;
(statearr_25272_25353[(2)] = null);

(statearr_25272_25353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (39))){
var state_25261__$1 = state_25261;
var statearr_25276_25354 = state_25261__$1;
(statearr_25276_25354[(2)] = null);

(statearr_25276_25354[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (4))){
var inst_25129 = (state_25261[(10)]);
var inst_25129__$1 = (state_25261[(2)]);
var inst_25130 = (inst_25129__$1 == null);
var state_25261__$1 = (function (){var statearr_25277 = state_25261;
(statearr_25277[(10)] = inst_25129__$1);

return statearr_25277;
})();
if(cljs.core.truth_(inst_25130)){
var statearr_25278_25355 = state_25261__$1;
(statearr_25278_25355[(1)] = (5));

} else {
var statearr_25279_25356 = state_25261__$1;
(statearr_25279_25356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (15))){
var inst_25140 = (state_25261[(13)]);
var inst_25138 = (state_25261[(14)]);
var inst_25141 = (state_25261[(15)]);
var inst_25139 = (state_25261[(16)]);
var inst_25156 = (state_25261[(2)]);
var inst_25157 = (inst_25141 + (1));
var tmp25273 = inst_25140;
var tmp25274 = inst_25138;
var tmp25275 = inst_25139;
var inst_25138__$1 = tmp25274;
var inst_25139__$1 = tmp25275;
var inst_25140__$1 = tmp25273;
var inst_25141__$1 = inst_25157;
var state_25261__$1 = (function (){var statearr_25280 = state_25261;
(statearr_25280[(18)] = inst_25156);

(statearr_25280[(13)] = inst_25140__$1);

(statearr_25280[(14)] = inst_25138__$1);

(statearr_25280[(15)] = inst_25141__$1);

(statearr_25280[(16)] = inst_25139__$1);

return statearr_25280;
})();
var statearr_25281_25357 = state_25261__$1;
(statearr_25281_25357[(2)] = null);

(statearr_25281_25357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (21))){
var inst_25183 = (state_25261[(2)]);
var state_25261__$1 = state_25261;
var statearr_25285_25358 = state_25261__$1;
(statearr_25285_25358[(2)] = inst_25183);

(statearr_25285_25358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (31))){
var inst_25209 = (state_25261[(12)]);
var inst_25213 = done.call(null,null);
var inst_25214 = cljs.core.async.untap_STAR_.call(null,m,inst_25209);
var state_25261__$1 = (function (){var statearr_25286 = state_25261;
(statearr_25286[(19)] = inst_25213);

return statearr_25286;
})();
var statearr_25287_25359 = state_25261__$1;
(statearr_25287_25359[(2)] = inst_25214);

(statearr_25287_25359[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (32))){
var inst_25203 = (state_25261[(20)]);
var inst_25204 = (state_25261[(9)]);
var inst_25201 = (state_25261[(21)]);
var inst_25202 = (state_25261[(11)]);
var inst_25216 = (state_25261[(2)]);
var inst_25217 = (inst_25204 + (1));
var tmp25282 = inst_25203;
var tmp25283 = inst_25201;
var tmp25284 = inst_25202;
var inst_25201__$1 = tmp25283;
var inst_25202__$1 = tmp25284;
var inst_25203__$1 = tmp25282;
var inst_25204__$1 = inst_25217;
var state_25261__$1 = (function (){var statearr_25288 = state_25261;
(statearr_25288[(22)] = inst_25216);

(statearr_25288[(20)] = inst_25203__$1);

(statearr_25288[(9)] = inst_25204__$1);

(statearr_25288[(21)] = inst_25201__$1);

(statearr_25288[(11)] = inst_25202__$1);

return statearr_25288;
})();
var statearr_25289_25360 = state_25261__$1;
(statearr_25289_25360[(2)] = null);

(statearr_25289_25360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (40))){
var inst_25229 = (state_25261[(23)]);
var inst_25233 = done.call(null,null);
var inst_25234 = cljs.core.async.untap_STAR_.call(null,m,inst_25229);
var state_25261__$1 = (function (){var statearr_25290 = state_25261;
(statearr_25290[(24)] = inst_25233);

return statearr_25290;
})();
var statearr_25291_25361 = state_25261__$1;
(statearr_25291_25361[(2)] = inst_25234);

(statearr_25291_25361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (33))){
var inst_25220 = (state_25261[(25)]);
var inst_25222 = cljs.core.chunked_seq_QMARK_.call(null,inst_25220);
var state_25261__$1 = state_25261;
if(inst_25222){
var statearr_25292_25362 = state_25261__$1;
(statearr_25292_25362[(1)] = (36));

} else {
var statearr_25293_25363 = state_25261__$1;
(statearr_25293_25363[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (13))){
var inst_25150 = (state_25261[(26)]);
var inst_25153 = cljs.core.async.close_BANG_.call(null,inst_25150);
var state_25261__$1 = state_25261;
var statearr_25294_25364 = state_25261__$1;
(statearr_25294_25364[(2)] = inst_25153);

(statearr_25294_25364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (22))){
var inst_25173 = (state_25261[(8)]);
var inst_25176 = cljs.core.async.close_BANG_.call(null,inst_25173);
var state_25261__$1 = state_25261;
var statearr_25295_25365 = state_25261__$1;
(statearr_25295_25365[(2)] = inst_25176);

(statearr_25295_25365[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (36))){
var inst_25220 = (state_25261[(25)]);
var inst_25224 = cljs.core.chunk_first.call(null,inst_25220);
var inst_25225 = cljs.core.chunk_rest.call(null,inst_25220);
var inst_25226 = cljs.core.count.call(null,inst_25224);
var inst_25201 = inst_25225;
var inst_25202 = inst_25224;
var inst_25203 = inst_25226;
var inst_25204 = (0);
var state_25261__$1 = (function (){var statearr_25296 = state_25261;
(statearr_25296[(20)] = inst_25203);

(statearr_25296[(9)] = inst_25204);

(statearr_25296[(21)] = inst_25201);

(statearr_25296[(11)] = inst_25202);

return statearr_25296;
})();
var statearr_25297_25366 = state_25261__$1;
(statearr_25297_25366[(2)] = null);

(statearr_25297_25366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (41))){
var inst_25220 = (state_25261[(25)]);
var inst_25236 = (state_25261[(2)]);
var inst_25237 = cljs.core.next.call(null,inst_25220);
var inst_25201 = inst_25237;
var inst_25202 = null;
var inst_25203 = (0);
var inst_25204 = (0);
var state_25261__$1 = (function (){var statearr_25298 = state_25261;
(statearr_25298[(20)] = inst_25203);

(statearr_25298[(27)] = inst_25236);

(statearr_25298[(9)] = inst_25204);

(statearr_25298[(21)] = inst_25201);

(statearr_25298[(11)] = inst_25202);

return statearr_25298;
})();
var statearr_25299_25367 = state_25261__$1;
(statearr_25299_25367[(2)] = null);

(statearr_25299_25367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (43))){
var state_25261__$1 = state_25261;
var statearr_25300_25368 = state_25261__$1;
(statearr_25300_25368[(2)] = null);

(statearr_25300_25368[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (29))){
var inst_25245 = (state_25261[(2)]);
var state_25261__$1 = state_25261;
var statearr_25301_25369 = state_25261__$1;
(statearr_25301_25369[(2)] = inst_25245);

(statearr_25301_25369[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (44))){
var inst_25254 = (state_25261[(2)]);
var state_25261__$1 = (function (){var statearr_25302 = state_25261;
(statearr_25302[(28)] = inst_25254);

return statearr_25302;
})();
var statearr_25303_25370 = state_25261__$1;
(statearr_25303_25370[(2)] = null);

(statearr_25303_25370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (6))){
var inst_25193 = (state_25261[(29)]);
var inst_25192 = cljs.core.deref.call(null,cs);
var inst_25193__$1 = cljs.core.keys.call(null,inst_25192);
var inst_25194 = cljs.core.count.call(null,inst_25193__$1);
var inst_25195 = cljs.core.reset_BANG_.call(null,dctr,inst_25194);
var inst_25200 = cljs.core.seq.call(null,inst_25193__$1);
var inst_25201 = inst_25200;
var inst_25202 = null;
var inst_25203 = (0);
var inst_25204 = (0);
var state_25261__$1 = (function (){var statearr_25304 = state_25261;
(statearr_25304[(20)] = inst_25203);

(statearr_25304[(9)] = inst_25204);

(statearr_25304[(21)] = inst_25201);

(statearr_25304[(30)] = inst_25195);

(statearr_25304[(29)] = inst_25193__$1);

(statearr_25304[(11)] = inst_25202);

return statearr_25304;
})();
var statearr_25305_25371 = state_25261__$1;
(statearr_25305_25371[(2)] = null);

(statearr_25305_25371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (28))){
var inst_25201 = (state_25261[(21)]);
var inst_25220 = (state_25261[(25)]);
var inst_25220__$1 = cljs.core.seq.call(null,inst_25201);
var state_25261__$1 = (function (){var statearr_25306 = state_25261;
(statearr_25306[(25)] = inst_25220__$1);

return statearr_25306;
})();
if(inst_25220__$1){
var statearr_25307_25372 = state_25261__$1;
(statearr_25307_25372[(1)] = (33));

} else {
var statearr_25308_25373 = state_25261__$1;
(statearr_25308_25373[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (25))){
var inst_25203 = (state_25261[(20)]);
var inst_25204 = (state_25261[(9)]);
var inst_25206 = (inst_25204 < inst_25203);
var inst_25207 = inst_25206;
var state_25261__$1 = state_25261;
if(cljs.core.truth_(inst_25207)){
var statearr_25309_25374 = state_25261__$1;
(statearr_25309_25374[(1)] = (27));

} else {
var statearr_25310_25375 = state_25261__$1;
(statearr_25310_25375[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (34))){
var state_25261__$1 = state_25261;
var statearr_25311_25376 = state_25261__$1;
(statearr_25311_25376[(2)] = null);

(statearr_25311_25376[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (17))){
var state_25261__$1 = state_25261;
var statearr_25312_25377 = state_25261__$1;
(statearr_25312_25377[(2)] = null);

(statearr_25312_25377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (3))){
var inst_25259 = (state_25261[(2)]);
var state_25261__$1 = state_25261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25261__$1,inst_25259);
} else {
if((state_val_25262 === (12))){
var inst_25188 = (state_25261[(2)]);
var state_25261__$1 = state_25261;
var statearr_25313_25378 = state_25261__$1;
(statearr_25313_25378[(2)] = inst_25188);

(statearr_25313_25378[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (2))){
var state_25261__$1 = state_25261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25261__$1,(4),ch);
} else {
if((state_val_25262 === (23))){
var state_25261__$1 = state_25261;
var statearr_25314_25379 = state_25261__$1;
(statearr_25314_25379[(2)] = null);

(statearr_25314_25379[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (35))){
var inst_25243 = (state_25261[(2)]);
var state_25261__$1 = state_25261;
var statearr_25315_25380 = state_25261__$1;
(statearr_25315_25380[(2)] = inst_25243);

(statearr_25315_25380[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (19))){
var inst_25160 = (state_25261[(7)]);
var inst_25164 = cljs.core.chunk_first.call(null,inst_25160);
var inst_25165 = cljs.core.chunk_rest.call(null,inst_25160);
var inst_25166 = cljs.core.count.call(null,inst_25164);
var inst_25138 = inst_25165;
var inst_25139 = inst_25164;
var inst_25140 = inst_25166;
var inst_25141 = (0);
var state_25261__$1 = (function (){var statearr_25316 = state_25261;
(statearr_25316[(13)] = inst_25140);

(statearr_25316[(14)] = inst_25138);

(statearr_25316[(15)] = inst_25141);

(statearr_25316[(16)] = inst_25139);

return statearr_25316;
})();
var statearr_25317_25381 = state_25261__$1;
(statearr_25317_25381[(2)] = null);

(statearr_25317_25381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (11))){
var inst_25160 = (state_25261[(7)]);
var inst_25138 = (state_25261[(14)]);
var inst_25160__$1 = cljs.core.seq.call(null,inst_25138);
var state_25261__$1 = (function (){var statearr_25318 = state_25261;
(statearr_25318[(7)] = inst_25160__$1);

return statearr_25318;
})();
if(inst_25160__$1){
var statearr_25319_25382 = state_25261__$1;
(statearr_25319_25382[(1)] = (16));

} else {
var statearr_25320_25383 = state_25261__$1;
(statearr_25320_25383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (9))){
var inst_25190 = (state_25261[(2)]);
var state_25261__$1 = state_25261;
var statearr_25321_25384 = state_25261__$1;
(statearr_25321_25384[(2)] = inst_25190);

(statearr_25321_25384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (5))){
var inst_25136 = cljs.core.deref.call(null,cs);
var inst_25137 = cljs.core.seq.call(null,inst_25136);
var inst_25138 = inst_25137;
var inst_25139 = null;
var inst_25140 = (0);
var inst_25141 = (0);
var state_25261__$1 = (function (){var statearr_25322 = state_25261;
(statearr_25322[(13)] = inst_25140);

(statearr_25322[(14)] = inst_25138);

(statearr_25322[(15)] = inst_25141);

(statearr_25322[(16)] = inst_25139);

return statearr_25322;
})();
var statearr_25323_25385 = state_25261__$1;
(statearr_25323_25385[(2)] = null);

(statearr_25323_25385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (14))){
var state_25261__$1 = state_25261;
var statearr_25324_25386 = state_25261__$1;
(statearr_25324_25386[(2)] = null);

(statearr_25324_25386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (45))){
var inst_25251 = (state_25261[(2)]);
var state_25261__$1 = state_25261;
var statearr_25325_25387 = state_25261__$1;
(statearr_25325_25387[(2)] = inst_25251);

(statearr_25325_25387[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (26))){
var inst_25193 = (state_25261[(29)]);
var inst_25247 = (state_25261[(2)]);
var inst_25248 = cljs.core.seq.call(null,inst_25193);
var state_25261__$1 = (function (){var statearr_25326 = state_25261;
(statearr_25326[(31)] = inst_25247);

return statearr_25326;
})();
if(inst_25248){
var statearr_25327_25388 = state_25261__$1;
(statearr_25327_25388[(1)] = (42));

} else {
var statearr_25328_25389 = state_25261__$1;
(statearr_25328_25389[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (16))){
var inst_25160 = (state_25261[(7)]);
var inst_25162 = cljs.core.chunked_seq_QMARK_.call(null,inst_25160);
var state_25261__$1 = state_25261;
if(inst_25162){
var statearr_25329_25390 = state_25261__$1;
(statearr_25329_25390[(1)] = (19));

} else {
var statearr_25330_25391 = state_25261__$1;
(statearr_25330_25391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (38))){
var inst_25240 = (state_25261[(2)]);
var state_25261__$1 = state_25261;
var statearr_25331_25392 = state_25261__$1;
(statearr_25331_25392[(2)] = inst_25240);

(statearr_25331_25392[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (30))){
var state_25261__$1 = state_25261;
var statearr_25332_25393 = state_25261__$1;
(statearr_25332_25393[(2)] = null);

(statearr_25332_25393[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (10))){
var inst_25141 = (state_25261[(15)]);
var inst_25139 = (state_25261[(16)]);
var inst_25149 = cljs.core._nth.call(null,inst_25139,inst_25141);
var inst_25150 = cljs.core.nth.call(null,inst_25149,(0),null);
var inst_25151 = cljs.core.nth.call(null,inst_25149,(1),null);
var state_25261__$1 = (function (){var statearr_25333 = state_25261;
(statearr_25333[(26)] = inst_25150);

return statearr_25333;
})();
if(cljs.core.truth_(inst_25151)){
var statearr_25334_25394 = state_25261__$1;
(statearr_25334_25394[(1)] = (13));

} else {
var statearr_25335_25395 = state_25261__$1;
(statearr_25335_25395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (18))){
var inst_25186 = (state_25261[(2)]);
var state_25261__$1 = state_25261;
var statearr_25336_25396 = state_25261__$1;
(statearr_25336_25396[(2)] = inst_25186);

(statearr_25336_25396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (42))){
var state_25261__$1 = state_25261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25261__$1,(45),dchan);
} else {
if((state_val_25262 === (37))){
var inst_25229 = (state_25261[(23)]);
var inst_25129 = (state_25261[(10)]);
var inst_25220 = (state_25261[(25)]);
var inst_25229__$1 = cljs.core.first.call(null,inst_25220);
var inst_25230 = cljs.core.async.put_BANG_.call(null,inst_25229__$1,inst_25129,done);
var state_25261__$1 = (function (){var statearr_25337 = state_25261;
(statearr_25337[(23)] = inst_25229__$1);

return statearr_25337;
})();
if(cljs.core.truth_(inst_25230)){
var statearr_25338_25397 = state_25261__$1;
(statearr_25338_25397[(1)] = (39));

} else {
var statearr_25339_25398 = state_25261__$1;
(statearr_25339_25398[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25262 === (8))){
var inst_25140 = (state_25261[(13)]);
var inst_25141 = (state_25261[(15)]);
var inst_25143 = (inst_25141 < inst_25140);
var inst_25144 = inst_25143;
var state_25261__$1 = state_25261;
if(cljs.core.truth_(inst_25144)){
var statearr_25340_25399 = state_25261__$1;
(statearr_25340_25399[(1)] = (10));

} else {
var statearr_25341_25400 = state_25261__$1;
(statearr_25341_25400[(1)] = (11));

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
});})(c__24527__auto___25346,cs,m,dchan,dctr,done))
;
return ((function (switch__24437__auto__,c__24527__auto___25346,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24438__auto__ = null;
var cljs$core$async$mult_$_state_machine__24438__auto____0 = (function (){
var statearr_25342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25342[(0)] = cljs$core$async$mult_$_state_machine__24438__auto__);

(statearr_25342[(1)] = (1));

return statearr_25342;
});
var cljs$core$async$mult_$_state_machine__24438__auto____1 = (function (state_25261){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_25261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e25343){if((e25343 instanceof Object)){
var ex__24441__auto__ = e25343;
var statearr_25344_25401 = state_25261;
(statearr_25344_25401[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25402 = state_25261;
state_25261 = G__25402;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24438__auto__ = function(state_25261){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24438__auto____1.call(this,state_25261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24438__auto____0;
cljs$core$async$mult_$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24438__auto____1;
return cljs$core$async$mult_$_state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___25346,cs,m,dchan,dctr,done))
})();
var state__24529__auto__ = (function (){var statearr_25345 = f__24528__auto__.call(null);
(statearr_25345[(6)] = c__24527__auto___25346);

return statearr_25345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___25346,cs,m,dchan,dctr,done))
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
var G__25404 = arguments.length;
switch (G__25404) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25416 = arguments.length;
var i__4500__auto___25417 = (0);
while(true){
if((i__4500__auto___25417 < len__4499__auto___25416)){
args__4502__auto__.push((arguments[i__4500__auto___25417]));

var G__25418 = (i__4500__auto___25417 + (1));
i__4500__auto___25417 = G__25418;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25410){
var map__25411 = p__25410;
var map__25411__$1 = ((((!((map__25411 == null)))?(((((map__25411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25411):map__25411);
var opts = map__25411__$1;
var statearr_25413_25419 = state;
(statearr_25413_25419[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25411,map__25411__$1,opts){
return (function (val){
var statearr_25414_25420 = state;
(statearr_25414_25420[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25411,map__25411__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25415_25421 = state;
(statearr_25415_25421[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25406){
var G__25407 = cljs.core.first.call(null,seq25406);
var seq25406__$1 = cljs.core.next.call(null,seq25406);
var G__25408 = cljs.core.first.call(null,seq25406__$1);
var seq25406__$2 = cljs.core.next.call(null,seq25406__$1);
var G__25409 = cljs.core.first.call(null,seq25406__$2);
var seq25406__$3 = cljs.core.next.call(null,seq25406__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25407,G__25408,G__25409,seq25406__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25422 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25423){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25423 = meta25423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25424,meta25423__$1){
var self__ = this;
var _25424__$1 = this;
return (new cljs.core.async.t_cljs$core$async25422(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25423__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25424){
var self__ = this;
var _25424__$1 = this;
return self__.meta25423;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25422.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25423","meta25423",1015690450,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25422";

cljs.core.async.t_cljs$core$async25422.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25422");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25422.
 */
cljs.core.async.__GT_t_cljs$core$async25422 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25422(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25423){
return (new cljs.core.async.t_cljs$core$async25422(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25423));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25422(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24527__auto___25586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___25586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___25586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25526){
var state_val_25527 = (state_25526[(1)]);
if((state_val_25527 === (7))){
var inst_25441 = (state_25526[(2)]);
var state_25526__$1 = state_25526;
var statearr_25528_25587 = state_25526__$1;
(statearr_25528_25587[(2)] = inst_25441);

(statearr_25528_25587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (20))){
var inst_25453 = (state_25526[(7)]);
var state_25526__$1 = state_25526;
var statearr_25529_25588 = state_25526__$1;
(statearr_25529_25588[(2)] = inst_25453);

(statearr_25529_25588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (27))){
var state_25526__$1 = state_25526;
var statearr_25530_25589 = state_25526__$1;
(statearr_25530_25589[(2)] = null);

(statearr_25530_25589[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (1))){
var inst_25428 = (state_25526[(8)]);
var inst_25428__$1 = calc_state.call(null);
var inst_25430 = (inst_25428__$1 == null);
var inst_25431 = cljs.core.not.call(null,inst_25430);
var state_25526__$1 = (function (){var statearr_25531 = state_25526;
(statearr_25531[(8)] = inst_25428__$1);

return statearr_25531;
})();
if(inst_25431){
var statearr_25532_25590 = state_25526__$1;
(statearr_25532_25590[(1)] = (2));

} else {
var statearr_25533_25591 = state_25526__$1;
(statearr_25533_25591[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (24))){
var inst_25486 = (state_25526[(9)]);
var inst_25477 = (state_25526[(10)]);
var inst_25500 = (state_25526[(11)]);
var inst_25500__$1 = inst_25477.call(null,inst_25486);
var state_25526__$1 = (function (){var statearr_25534 = state_25526;
(statearr_25534[(11)] = inst_25500__$1);

return statearr_25534;
})();
if(cljs.core.truth_(inst_25500__$1)){
var statearr_25535_25592 = state_25526__$1;
(statearr_25535_25592[(1)] = (29));

} else {
var statearr_25536_25593 = state_25526__$1;
(statearr_25536_25593[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (4))){
var inst_25444 = (state_25526[(2)]);
var state_25526__$1 = state_25526;
if(cljs.core.truth_(inst_25444)){
var statearr_25537_25594 = state_25526__$1;
(statearr_25537_25594[(1)] = (8));

} else {
var statearr_25538_25595 = state_25526__$1;
(statearr_25538_25595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (15))){
var inst_25471 = (state_25526[(2)]);
var state_25526__$1 = state_25526;
if(cljs.core.truth_(inst_25471)){
var statearr_25539_25596 = state_25526__$1;
(statearr_25539_25596[(1)] = (19));

} else {
var statearr_25540_25597 = state_25526__$1;
(statearr_25540_25597[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (21))){
var inst_25476 = (state_25526[(12)]);
var inst_25476__$1 = (state_25526[(2)]);
var inst_25477 = cljs.core.get.call(null,inst_25476__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25478 = cljs.core.get.call(null,inst_25476__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25479 = cljs.core.get.call(null,inst_25476__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25526__$1 = (function (){var statearr_25541 = state_25526;
(statearr_25541[(13)] = inst_25478);

(statearr_25541[(10)] = inst_25477);

(statearr_25541[(12)] = inst_25476__$1);

return statearr_25541;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25526__$1,(22),inst_25479);
} else {
if((state_val_25527 === (31))){
var inst_25508 = (state_25526[(2)]);
var state_25526__$1 = state_25526;
if(cljs.core.truth_(inst_25508)){
var statearr_25542_25598 = state_25526__$1;
(statearr_25542_25598[(1)] = (32));

} else {
var statearr_25543_25599 = state_25526__$1;
(statearr_25543_25599[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (32))){
var inst_25485 = (state_25526[(14)]);
var state_25526__$1 = state_25526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25526__$1,(35),out,inst_25485);
} else {
if((state_val_25527 === (33))){
var inst_25476 = (state_25526[(12)]);
var inst_25453 = inst_25476;
var state_25526__$1 = (function (){var statearr_25544 = state_25526;
(statearr_25544[(7)] = inst_25453);

return statearr_25544;
})();
var statearr_25545_25600 = state_25526__$1;
(statearr_25545_25600[(2)] = null);

(statearr_25545_25600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (13))){
var inst_25453 = (state_25526[(7)]);
var inst_25460 = inst_25453.cljs$lang$protocol_mask$partition0$;
var inst_25461 = (inst_25460 & (64));
var inst_25462 = inst_25453.cljs$core$ISeq$;
var inst_25463 = (cljs.core.PROTOCOL_SENTINEL === inst_25462);
var inst_25464 = ((inst_25461) || (inst_25463));
var state_25526__$1 = state_25526;
if(cljs.core.truth_(inst_25464)){
var statearr_25546_25601 = state_25526__$1;
(statearr_25546_25601[(1)] = (16));

} else {
var statearr_25547_25602 = state_25526__$1;
(statearr_25547_25602[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (22))){
var inst_25486 = (state_25526[(9)]);
var inst_25485 = (state_25526[(14)]);
var inst_25484 = (state_25526[(2)]);
var inst_25485__$1 = cljs.core.nth.call(null,inst_25484,(0),null);
var inst_25486__$1 = cljs.core.nth.call(null,inst_25484,(1),null);
var inst_25487 = (inst_25485__$1 == null);
var inst_25488 = cljs.core._EQ_.call(null,inst_25486__$1,change);
var inst_25489 = ((inst_25487) || (inst_25488));
var state_25526__$1 = (function (){var statearr_25548 = state_25526;
(statearr_25548[(9)] = inst_25486__$1);

(statearr_25548[(14)] = inst_25485__$1);

return statearr_25548;
})();
if(cljs.core.truth_(inst_25489)){
var statearr_25549_25603 = state_25526__$1;
(statearr_25549_25603[(1)] = (23));

} else {
var statearr_25550_25604 = state_25526__$1;
(statearr_25550_25604[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (36))){
var inst_25476 = (state_25526[(12)]);
var inst_25453 = inst_25476;
var state_25526__$1 = (function (){var statearr_25551 = state_25526;
(statearr_25551[(7)] = inst_25453);

return statearr_25551;
})();
var statearr_25552_25605 = state_25526__$1;
(statearr_25552_25605[(2)] = null);

(statearr_25552_25605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (29))){
var inst_25500 = (state_25526[(11)]);
var state_25526__$1 = state_25526;
var statearr_25553_25606 = state_25526__$1;
(statearr_25553_25606[(2)] = inst_25500);

(statearr_25553_25606[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (6))){
var state_25526__$1 = state_25526;
var statearr_25554_25607 = state_25526__$1;
(statearr_25554_25607[(2)] = false);

(statearr_25554_25607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (28))){
var inst_25496 = (state_25526[(2)]);
var inst_25497 = calc_state.call(null);
var inst_25453 = inst_25497;
var state_25526__$1 = (function (){var statearr_25555 = state_25526;
(statearr_25555[(7)] = inst_25453);

(statearr_25555[(15)] = inst_25496);

return statearr_25555;
})();
var statearr_25556_25608 = state_25526__$1;
(statearr_25556_25608[(2)] = null);

(statearr_25556_25608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (25))){
var inst_25522 = (state_25526[(2)]);
var state_25526__$1 = state_25526;
var statearr_25557_25609 = state_25526__$1;
(statearr_25557_25609[(2)] = inst_25522);

(statearr_25557_25609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (34))){
var inst_25520 = (state_25526[(2)]);
var state_25526__$1 = state_25526;
var statearr_25558_25610 = state_25526__$1;
(statearr_25558_25610[(2)] = inst_25520);

(statearr_25558_25610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (17))){
var state_25526__$1 = state_25526;
var statearr_25559_25611 = state_25526__$1;
(statearr_25559_25611[(2)] = false);

(statearr_25559_25611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (3))){
var state_25526__$1 = state_25526;
var statearr_25560_25612 = state_25526__$1;
(statearr_25560_25612[(2)] = false);

(statearr_25560_25612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (12))){
var inst_25524 = (state_25526[(2)]);
var state_25526__$1 = state_25526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25526__$1,inst_25524);
} else {
if((state_val_25527 === (2))){
var inst_25428 = (state_25526[(8)]);
var inst_25433 = inst_25428.cljs$lang$protocol_mask$partition0$;
var inst_25434 = (inst_25433 & (64));
var inst_25435 = inst_25428.cljs$core$ISeq$;
var inst_25436 = (cljs.core.PROTOCOL_SENTINEL === inst_25435);
var inst_25437 = ((inst_25434) || (inst_25436));
var state_25526__$1 = state_25526;
if(cljs.core.truth_(inst_25437)){
var statearr_25561_25613 = state_25526__$1;
(statearr_25561_25613[(1)] = (5));

} else {
var statearr_25562_25614 = state_25526__$1;
(statearr_25562_25614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (23))){
var inst_25485 = (state_25526[(14)]);
var inst_25491 = (inst_25485 == null);
var state_25526__$1 = state_25526;
if(cljs.core.truth_(inst_25491)){
var statearr_25563_25615 = state_25526__$1;
(statearr_25563_25615[(1)] = (26));

} else {
var statearr_25564_25616 = state_25526__$1;
(statearr_25564_25616[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (35))){
var inst_25511 = (state_25526[(2)]);
var state_25526__$1 = state_25526;
if(cljs.core.truth_(inst_25511)){
var statearr_25565_25617 = state_25526__$1;
(statearr_25565_25617[(1)] = (36));

} else {
var statearr_25566_25618 = state_25526__$1;
(statearr_25566_25618[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (19))){
var inst_25453 = (state_25526[(7)]);
var inst_25473 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25453);
var state_25526__$1 = state_25526;
var statearr_25567_25619 = state_25526__$1;
(statearr_25567_25619[(2)] = inst_25473);

(statearr_25567_25619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (11))){
var inst_25453 = (state_25526[(7)]);
var inst_25457 = (inst_25453 == null);
var inst_25458 = cljs.core.not.call(null,inst_25457);
var state_25526__$1 = state_25526;
if(inst_25458){
var statearr_25568_25620 = state_25526__$1;
(statearr_25568_25620[(1)] = (13));

} else {
var statearr_25569_25621 = state_25526__$1;
(statearr_25569_25621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (9))){
var inst_25428 = (state_25526[(8)]);
var state_25526__$1 = state_25526;
var statearr_25570_25622 = state_25526__$1;
(statearr_25570_25622[(2)] = inst_25428);

(statearr_25570_25622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (5))){
var state_25526__$1 = state_25526;
var statearr_25571_25623 = state_25526__$1;
(statearr_25571_25623[(2)] = true);

(statearr_25571_25623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (14))){
var state_25526__$1 = state_25526;
var statearr_25572_25624 = state_25526__$1;
(statearr_25572_25624[(2)] = false);

(statearr_25572_25624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (26))){
var inst_25486 = (state_25526[(9)]);
var inst_25493 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25486);
var state_25526__$1 = state_25526;
var statearr_25573_25625 = state_25526__$1;
(statearr_25573_25625[(2)] = inst_25493);

(statearr_25573_25625[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (16))){
var state_25526__$1 = state_25526;
var statearr_25574_25626 = state_25526__$1;
(statearr_25574_25626[(2)] = true);

(statearr_25574_25626[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (38))){
var inst_25516 = (state_25526[(2)]);
var state_25526__$1 = state_25526;
var statearr_25575_25627 = state_25526__$1;
(statearr_25575_25627[(2)] = inst_25516);

(statearr_25575_25627[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (30))){
var inst_25478 = (state_25526[(13)]);
var inst_25486 = (state_25526[(9)]);
var inst_25477 = (state_25526[(10)]);
var inst_25503 = cljs.core.empty_QMARK_.call(null,inst_25477);
var inst_25504 = inst_25478.call(null,inst_25486);
var inst_25505 = cljs.core.not.call(null,inst_25504);
var inst_25506 = ((inst_25503) && (inst_25505));
var state_25526__$1 = state_25526;
var statearr_25576_25628 = state_25526__$1;
(statearr_25576_25628[(2)] = inst_25506);

(statearr_25576_25628[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (10))){
var inst_25428 = (state_25526[(8)]);
var inst_25449 = (state_25526[(2)]);
var inst_25450 = cljs.core.get.call(null,inst_25449,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25451 = cljs.core.get.call(null,inst_25449,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25452 = cljs.core.get.call(null,inst_25449,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25453 = inst_25428;
var state_25526__$1 = (function (){var statearr_25577 = state_25526;
(statearr_25577[(16)] = inst_25450);

(statearr_25577[(7)] = inst_25453);

(statearr_25577[(17)] = inst_25452);

(statearr_25577[(18)] = inst_25451);

return statearr_25577;
})();
var statearr_25578_25629 = state_25526__$1;
(statearr_25578_25629[(2)] = null);

(statearr_25578_25629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (18))){
var inst_25468 = (state_25526[(2)]);
var state_25526__$1 = state_25526;
var statearr_25579_25630 = state_25526__$1;
(statearr_25579_25630[(2)] = inst_25468);

(statearr_25579_25630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (37))){
var state_25526__$1 = state_25526;
var statearr_25580_25631 = state_25526__$1;
(statearr_25580_25631[(2)] = null);

(statearr_25580_25631[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (8))){
var inst_25428 = (state_25526[(8)]);
var inst_25446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25428);
var state_25526__$1 = state_25526;
var statearr_25581_25632 = state_25526__$1;
(statearr_25581_25632[(2)] = inst_25446);

(statearr_25581_25632[(1)] = (10));


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
});})(c__24527__auto___25586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24437__auto__,c__24527__auto___25586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24438__auto__ = null;
var cljs$core$async$mix_$_state_machine__24438__auto____0 = (function (){
var statearr_25582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25582[(0)] = cljs$core$async$mix_$_state_machine__24438__auto__);

(statearr_25582[(1)] = (1));

return statearr_25582;
});
var cljs$core$async$mix_$_state_machine__24438__auto____1 = (function (state_25526){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_25526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e25583){if((e25583 instanceof Object)){
var ex__24441__auto__ = e25583;
var statearr_25584_25633 = state_25526;
(statearr_25584_25633[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25634 = state_25526;
state_25526 = G__25634;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24438__auto__ = function(state_25526){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24438__auto____1.call(this,state_25526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24438__auto____0;
cljs$core$async$mix_$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24438__auto____1;
return cljs$core$async$mix_$_state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___25586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24529__auto__ = (function (){var statearr_25585 = f__24528__auto__.call(null);
(statearr_25585[(6)] = c__24527__auto___25586);

return statearr_25585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___25586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25636 = arguments.length;
switch (G__25636) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
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
var G__25640 = arguments.length;
switch (G__25640) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__25638_SHARP_){
if(cljs.core.truth_(p1__25638_SHARP_.call(null,topic))){
return p1__25638_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25638_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25641 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25642){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25642 = meta25642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25643,meta25642__$1){
var self__ = this;
var _25643__$1 = this;
return (new cljs.core.async.t_cljs$core$async25641(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25642__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25643){
var self__ = this;
var _25643__$1 = this;
return self__.meta25642;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25641.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25642","meta25642",-2146706333,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25641";

cljs.core.async.t_cljs$core$async25641.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25641");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25641.
 */
cljs.core.async.__GT_t_cljs$core$async25641 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25641(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25642){
return (new cljs.core.async.t_cljs$core$async25641(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25642));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25641(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24527__auto___25761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___25761,mults,ensure_mult,p){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___25761,mults,ensure_mult,p){
return (function (state_25715){
var state_val_25716 = (state_25715[(1)]);
if((state_val_25716 === (7))){
var inst_25711 = (state_25715[(2)]);
var state_25715__$1 = state_25715;
var statearr_25717_25762 = state_25715__$1;
(statearr_25717_25762[(2)] = inst_25711);

(statearr_25717_25762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (20))){
var state_25715__$1 = state_25715;
var statearr_25718_25763 = state_25715__$1;
(statearr_25718_25763[(2)] = null);

(statearr_25718_25763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (1))){
var state_25715__$1 = state_25715;
var statearr_25719_25764 = state_25715__$1;
(statearr_25719_25764[(2)] = null);

(statearr_25719_25764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (24))){
var inst_25694 = (state_25715[(7)]);
var inst_25703 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25694);
var state_25715__$1 = state_25715;
var statearr_25720_25765 = state_25715__$1;
(statearr_25720_25765[(2)] = inst_25703);

(statearr_25720_25765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (4))){
var inst_25646 = (state_25715[(8)]);
var inst_25646__$1 = (state_25715[(2)]);
var inst_25647 = (inst_25646__$1 == null);
var state_25715__$1 = (function (){var statearr_25721 = state_25715;
(statearr_25721[(8)] = inst_25646__$1);

return statearr_25721;
})();
if(cljs.core.truth_(inst_25647)){
var statearr_25722_25766 = state_25715__$1;
(statearr_25722_25766[(1)] = (5));

} else {
var statearr_25723_25767 = state_25715__$1;
(statearr_25723_25767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (15))){
var inst_25688 = (state_25715[(2)]);
var state_25715__$1 = state_25715;
var statearr_25724_25768 = state_25715__$1;
(statearr_25724_25768[(2)] = inst_25688);

(statearr_25724_25768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (21))){
var inst_25708 = (state_25715[(2)]);
var state_25715__$1 = (function (){var statearr_25725 = state_25715;
(statearr_25725[(9)] = inst_25708);

return statearr_25725;
})();
var statearr_25726_25769 = state_25715__$1;
(statearr_25726_25769[(2)] = null);

(statearr_25726_25769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (13))){
var inst_25670 = (state_25715[(10)]);
var inst_25672 = cljs.core.chunked_seq_QMARK_.call(null,inst_25670);
var state_25715__$1 = state_25715;
if(inst_25672){
var statearr_25727_25770 = state_25715__$1;
(statearr_25727_25770[(1)] = (16));

} else {
var statearr_25728_25771 = state_25715__$1;
(statearr_25728_25771[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (22))){
var inst_25700 = (state_25715[(2)]);
var state_25715__$1 = state_25715;
if(cljs.core.truth_(inst_25700)){
var statearr_25729_25772 = state_25715__$1;
(statearr_25729_25772[(1)] = (23));

} else {
var statearr_25730_25773 = state_25715__$1;
(statearr_25730_25773[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (6))){
var inst_25694 = (state_25715[(7)]);
var inst_25646 = (state_25715[(8)]);
var inst_25696 = (state_25715[(11)]);
var inst_25694__$1 = topic_fn.call(null,inst_25646);
var inst_25695 = cljs.core.deref.call(null,mults);
var inst_25696__$1 = cljs.core.get.call(null,inst_25695,inst_25694__$1);
var state_25715__$1 = (function (){var statearr_25731 = state_25715;
(statearr_25731[(7)] = inst_25694__$1);

(statearr_25731[(11)] = inst_25696__$1);

return statearr_25731;
})();
if(cljs.core.truth_(inst_25696__$1)){
var statearr_25732_25774 = state_25715__$1;
(statearr_25732_25774[(1)] = (19));

} else {
var statearr_25733_25775 = state_25715__$1;
(statearr_25733_25775[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (25))){
var inst_25705 = (state_25715[(2)]);
var state_25715__$1 = state_25715;
var statearr_25734_25776 = state_25715__$1;
(statearr_25734_25776[(2)] = inst_25705);

(statearr_25734_25776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (17))){
var inst_25670 = (state_25715[(10)]);
var inst_25679 = cljs.core.first.call(null,inst_25670);
var inst_25680 = cljs.core.async.muxch_STAR_.call(null,inst_25679);
var inst_25681 = cljs.core.async.close_BANG_.call(null,inst_25680);
var inst_25682 = cljs.core.next.call(null,inst_25670);
var inst_25656 = inst_25682;
var inst_25657 = null;
var inst_25658 = (0);
var inst_25659 = (0);
var state_25715__$1 = (function (){var statearr_25735 = state_25715;
(statearr_25735[(12)] = inst_25658);

(statearr_25735[(13)] = inst_25657);

(statearr_25735[(14)] = inst_25659);

(statearr_25735[(15)] = inst_25681);

(statearr_25735[(16)] = inst_25656);

return statearr_25735;
})();
var statearr_25736_25777 = state_25715__$1;
(statearr_25736_25777[(2)] = null);

(statearr_25736_25777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (3))){
var inst_25713 = (state_25715[(2)]);
var state_25715__$1 = state_25715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25715__$1,inst_25713);
} else {
if((state_val_25716 === (12))){
var inst_25690 = (state_25715[(2)]);
var state_25715__$1 = state_25715;
var statearr_25737_25778 = state_25715__$1;
(statearr_25737_25778[(2)] = inst_25690);

(statearr_25737_25778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (2))){
var state_25715__$1 = state_25715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25715__$1,(4),ch);
} else {
if((state_val_25716 === (23))){
var state_25715__$1 = state_25715;
var statearr_25738_25779 = state_25715__$1;
(statearr_25738_25779[(2)] = null);

(statearr_25738_25779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (19))){
var inst_25646 = (state_25715[(8)]);
var inst_25696 = (state_25715[(11)]);
var inst_25698 = cljs.core.async.muxch_STAR_.call(null,inst_25696);
var state_25715__$1 = state_25715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25715__$1,(22),inst_25698,inst_25646);
} else {
if((state_val_25716 === (11))){
var inst_25670 = (state_25715[(10)]);
var inst_25656 = (state_25715[(16)]);
var inst_25670__$1 = cljs.core.seq.call(null,inst_25656);
var state_25715__$1 = (function (){var statearr_25739 = state_25715;
(statearr_25739[(10)] = inst_25670__$1);

return statearr_25739;
})();
if(inst_25670__$1){
var statearr_25740_25780 = state_25715__$1;
(statearr_25740_25780[(1)] = (13));

} else {
var statearr_25741_25781 = state_25715__$1;
(statearr_25741_25781[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (9))){
var inst_25692 = (state_25715[(2)]);
var state_25715__$1 = state_25715;
var statearr_25742_25782 = state_25715__$1;
(statearr_25742_25782[(2)] = inst_25692);

(statearr_25742_25782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (5))){
var inst_25653 = cljs.core.deref.call(null,mults);
var inst_25654 = cljs.core.vals.call(null,inst_25653);
var inst_25655 = cljs.core.seq.call(null,inst_25654);
var inst_25656 = inst_25655;
var inst_25657 = null;
var inst_25658 = (0);
var inst_25659 = (0);
var state_25715__$1 = (function (){var statearr_25743 = state_25715;
(statearr_25743[(12)] = inst_25658);

(statearr_25743[(13)] = inst_25657);

(statearr_25743[(14)] = inst_25659);

(statearr_25743[(16)] = inst_25656);

return statearr_25743;
})();
var statearr_25744_25783 = state_25715__$1;
(statearr_25744_25783[(2)] = null);

(statearr_25744_25783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (14))){
var state_25715__$1 = state_25715;
var statearr_25748_25784 = state_25715__$1;
(statearr_25748_25784[(2)] = null);

(statearr_25748_25784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (16))){
var inst_25670 = (state_25715[(10)]);
var inst_25674 = cljs.core.chunk_first.call(null,inst_25670);
var inst_25675 = cljs.core.chunk_rest.call(null,inst_25670);
var inst_25676 = cljs.core.count.call(null,inst_25674);
var inst_25656 = inst_25675;
var inst_25657 = inst_25674;
var inst_25658 = inst_25676;
var inst_25659 = (0);
var state_25715__$1 = (function (){var statearr_25749 = state_25715;
(statearr_25749[(12)] = inst_25658);

(statearr_25749[(13)] = inst_25657);

(statearr_25749[(14)] = inst_25659);

(statearr_25749[(16)] = inst_25656);

return statearr_25749;
})();
var statearr_25750_25785 = state_25715__$1;
(statearr_25750_25785[(2)] = null);

(statearr_25750_25785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (10))){
var inst_25658 = (state_25715[(12)]);
var inst_25657 = (state_25715[(13)]);
var inst_25659 = (state_25715[(14)]);
var inst_25656 = (state_25715[(16)]);
var inst_25664 = cljs.core._nth.call(null,inst_25657,inst_25659);
var inst_25665 = cljs.core.async.muxch_STAR_.call(null,inst_25664);
var inst_25666 = cljs.core.async.close_BANG_.call(null,inst_25665);
var inst_25667 = (inst_25659 + (1));
var tmp25745 = inst_25658;
var tmp25746 = inst_25657;
var tmp25747 = inst_25656;
var inst_25656__$1 = tmp25747;
var inst_25657__$1 = tmp25746;
var inst_25658__$1 = tmp25745;
var inst_25659__$1 = inst_25667;
var state_25715__$1 = (function (){var statearr_25751 = state_25715;
(statearr_25751[(12)] = inst_25658__$1);

(statearr_25751[(13)] = inst_25657__$1);

(statearr_25751[(14)] = inst_25659__$1);

(statearr_25751[(17)] = inst_25666);

(statearr_25751[(16)] = inst_25656__$1);

return statearr_25751;
})();
var statearr_25752_25786 = state_25715__$1;
(statearr_25752_25786[(2)] = null);

(statearr_25752_25786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (18))){
var inst_25685 = (state_25715[(2)]);
var state_25715__$1 = state_25715;
var statearr_25753_25787 = state_25715__$1;
(statearr_25753_25787[(2)] = inst_25685);

(statearr_25753_25787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (8))){
var inst_25658 = (state_25715[(12)]);
var inst_25659 = (state_25715[(14)]);
var inst_25661 = (inst_25659 < inst_25658);
var inst_25662 = inst_25661;
var state_25715__$1 = state_25715;
if(cljs.core.truth_(inst_25662)){
var statearr_25754_25788 = state_25715__$1;
(statearr_25754_25788[(1)] = (10));

} else {
var statearr_25755_25789 = state_25715__$1;
(statearr_25755_25789[(1)] = (11));

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
});})(c__24527__auto___25761,mults,ensure_mult,p))
;
return ((function (switch__24437__auto__,c__24527__auto___25761,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24438__auto__ = null;
var cljs$core$async$state_machine__24438__auto____0 = (function (){
var statearr_25756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25756[(0)] = cljs$core$async$state_machine__24438__auto__);

(statearr_25756[(1)] = (1));

return statearr_25756;
});
var cljs$core$async$state_machine__24438__auto____1 = (function (state_25715){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_25715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e25757){if((e25757 instanceof Object)){
var ex__24441__auto__ = e25757;
var statearr_25758_25790 = state_25715;
(statearr_25758_25790[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25791 = state_25715;
state_25715 = G__25791;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$state_machine__24438__auto__ = function(state_25715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24438__auto____1.call(this,state_25715);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24438__auto____0;
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24438__auto____1;
return cljs$core$async$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___25761,mults,ensure_mult,p))
})();
var state__24529__auto__ = (function (){var statearr_25759 = f__24528__auto__.call(null);
(statearr_25759[(6)] = c__24527__auto___25761);

return statearr_25759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___25761,mults,ensure_mult,p))
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
var G__25793 = arguments.length;
switch (G__25793) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__25796 = arguments.length;
switch (G__25796) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__25799 = arguments.length;
switch (G__25799) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__24527__auto___25866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___25866,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___25866,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25838){
var state_val_25839 = (state_25838[(1)]);
if((state_val_25839 === (7))){
var state_25838__$1 = state_25838;
var statearr_25840_25867 = state_25838__$1;
(statearr_25840_25867[(2)] = null);

(statearr_25840_25867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25839 === (1))){
var state_25838__$1 = state_25838;
var statearr_25841_25868 = state_25838__$1;
(statearr_25841_25868[(2)] = null);

(statearr_25841_25868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25839 === (4))){
var inst_25802 = (state_25838[(7)]);
var inst_25804 = (inst_25802 < cnt);
var state_25838__$1 = state_25838;
if(cljs.core.truth_(inst_25804)){
var statearr_25842_25869 = state_25838__$1;
(statearr_25842_25869[(1)] = (6));

} else {
var statearr_25843_25870 = state_25838__$1;
(statearr_25843_25870[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25839 === (15))){
var inst_25834 = (state_25838[(2)]);
var state_25838__$1 = state_25838;
var statearr_25844_25871 = state_25838__$1;
(statearr_25844_25871[(2)] = inst_25834);

(statearr_25844_25871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25839 === (13))){
var inst_25827 = cljs.core.async.close_BANG_.call(null,out);
var state_25838__$1 = state_25838;
var statearr_25845_25872 = state_25838__$1;
(statearr_25845_25872[(2)] = inst_25827);

(statearr_25845_25872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25839 === (6))){
var state_25838__$1 = state_25838;
var statearr_25846_25873 = state_25838__$1;
(statearr_25846_25873[(2)] = null);

(statearr_25846_25873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25839 === (3))){
var inst_25836 = (state_25838[(2)]);
var state_25838__$1 = state_25838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25838__$1,inst_25836);
} else {
if((state_val_25839 === (12))){
var inst_25824 = (state_25838[(8)]);
var inst_25824__$1 = (state_25838[(2)]);
var inst_25825 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25824__$1);
var state_25838__$1 = (function (){var statearr_25847 = state_25838;
(statearr_25847[(8)] = inst_25824__$1);

return statearr_25847;
})();
if(cljs.core.truth_(inst_25825)){
var statearr_25848_25874 = state_25838__$1;
(statearr_25848_25874[(1)] = (13));

} else {
var statearr_25849_25875 = state_25838__$1;
(statearr_25849_25875[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25839 === (2))){
var inst_25801 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25802 = (0);
var state_25838__$1 = (function (){var statearr_25850 = state_25838;
(statearr_25850[(7)] = inst_25802);

(statearr_25850[(9)] = inst_25801);

return statearr_25850;
})();
var statearr_25851_25876 = state_25838__$1;
(statearr_25851_25876[(2)] = null);

(statearr_25851_25876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25839 === (11))){
var inst_25802 = (state_25838[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25838,(10),Object,null,(9));
var inst_25811 = chs__$1.call(null,inst_25802);
var inst_25812 = done.call(null,inst_25802);
var inst_25813 = cljs.core.async.take_BANG_.call(null,inst_25811,inst_25812);
var state_25838__$1 = state_25838;
var statearr_25852_25877 = state_25838__$1;
(statearr_25852_25877[(2)] = inst_25813);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25838__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25839 === (9))){
var inst_25802 = (state_25838[(7)]);
var inst_25815 = (state_25838[(2)]);
var inst_25816 = (inst_25802 + (1));
var inst_25802__$1 = inst_25816;
var state_25838__$1 = (function (){var statearr_25853 = state_25838;
(statearr_25853[(7)] = inst_25802__$1);

(statearr_25853[(10)] = inst_25815);

return statearr_25853;
})();
var statearr_25854_25878 = state_25838__$1;
(statearr_25854_25878[(2)] = null);

(statearr_25854_25878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25839 === (5))){
var inst_25822 = (state_25838[(2)]);
var state_25838__$1 = (function (){var statearr_25855 = state_25838;
(statearr_25855[(11)] = inst_25822);

return statearr_25855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25838__$1,(12),dchan);
} else {
if((state_val_25839 === (14))){
var inst_25824 = (state_25838[(8)]);
var inst_25829 = cljs.core.apply.call(null,f,inst_25824);
var state_25838__$1 = state_25838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25838__$1,(16),out,inst_25829);
} else {
if((state_val_25839 === (16))){
var inst_25831 = (state_25838[(2)]);
var state_25838__$1 = (function (){var statearr_25856 = state_25838;
(statearr_25856[(12)] = inst_25831);

return statearr_25856;
})();
var statearr_25857_25879 = state_25838__$1;
(statearr_25857_25879[(2)] = null);

(statearr_25857_25879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25839 === (10))){
var inst_25806 = (state_25838[(2)]);
var inst_25807 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25838__$1 = (function (){var statearr_25858 = state_25838;
(statearr_25858[(13)] = inst_25806);

return statearr_25858;
})();
var statearr_25859_25880 = state_25838__$1;
(statearr_25859_25880[(2)] = inst_25807);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25838__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25839 === (8))){
var inst_25820 = (state_25838[(2)]);
var state_25838__$1 = state_25838;
var statearr_25860_25881 = state_25838__$1;
(statearr_25860_25881[(2)] = inst_25820);

(statearr_25860_25881[(1)] = (5));


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
});})(c__24527__auto___25866,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24437__auto__,c__24527__auto___25866,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24438__auto__ = null;
var cljs$core$async$state_machine__24438__auto____0 = (function (){
var statearr_25861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25861[(0)] = cljs$core$async$state_machine__24438__auto__);

(statearr_25861[(1)] = (1));

return statearr_25861;
});
var cljs$core$async$state_machine__24438__auto____1 = (function (state_25838){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_25838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e25862){if((e25862 instanceof Object)){
var ex__24441__auto__ = e25862;
var statearr_25863_25882 = state_25838;
(statearr_25863_25882[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25883 = state_25838;
state_25838 = G__25883;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$state_machine__24438__auto__ = function(state_25838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24438__auto____1.call(this,state_25838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24438__auto____0;
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24438__auto____1;
return cljs$core$async$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___25866,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24529__auto__ = (function (){var statearr_25864 = f__24528__auto__.call(null);
(statearr_25864[(6)] = c__24527__auto___25866);

return statearr_25864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___25866,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25886 = arguments.length;
switch (G__25886) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24527__auto___25940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___25940,out){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___25940,out){
return (function (state_25918){
var state_val_25919 = (state_25918[(1)]);
if((state_val_25919 === (7))){
var inst_25898 = (state_25918[(7)]);
var inst_25897 = (state_25918[(8)]);
var inst_25897__$1 = (state_25918[(2)]);
var inst_25898__$1 = cljs.core.nth.call(null,inst_25897__$1,(0),null);
var inst_25899 = cljs.core.nth.call(null,inst_25897__$1,(1),null);
var inst_25900 = (inst_25898__$1 == null);
var state_25918__$1 = (function (){var statearr_25920 = state_25918;
(statearr_25920[(7)] = inst_25898__$1);

(statearr_25920[(9)] = inst_25899);

(statearr_25920[(8)] = inst_25897__$1);

return statearr_25920;
})();
if(cljs.core.truth_(inst_25900)){
var statearr_25921_25941 = state_25918__$1;
(statearr_25921_25941[(1)] = (8));

} else {
var statearr_25922_25942 = state_25918__$1;
(statearr_25922_25942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (1))){
var inst_25887 = cljs.core.vec.call(null,chs);
var inst_25888 = inst_25887;
var state_25918__$1 = (function (){var statearr_25923 = state_25918;
(statearr_25923[(10)] = inst_25888);

return statearr_25923;
})();
var statearr_25924_25943 = state_25918__$1;
(statearr_25924_25943[(2)] = null);

(statearr_25924_25943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (4))){
var inst_25888 = (state_25918[(10)]);
var state_25918__$1 = state_25918;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25918__$1,(7),inst_25888);
} else {
if((state_val_25919 === (6))){
var inst_25914 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
var statearr_25925_25944 = state_25918__$1;
(statearr_25925_25944[(2)] = inst_25914);

(statearr_25925_25944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (3))){
var inst_25916 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25918__$1,inst_25916);
} else {
if((state_val_25919 === (2))){
var inst_25888 = (state_25918[(10)]);
var inst_25890 = cljs.core.count.call(null,inst_25888);
var inst_25891 = (inst_25890 > (0));
var state_25918__$1 = state_25918;
if(cljs.core.truth_(inst_25891)){
var statearr_25927_25945 = state_25918__$1;
(statearr_25927_25945[(1)] = (4));

} else {
var statearr_25928_25946 = state_25918__$1;
(statearr_25928_25946[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (11))){
var inst_25888 = (state_25918[(10)]);
var inst_25907 = (state_25918[(2)]);
var tmp25926 = inst_25888;
var inst_25888__$1 = tmp25926;
var state_25918__$1 = (function (){var statearr_25929 = state_25918;
(statearr_25929[(11)] = inst_25907);

(statearr_25929[(10)] = inst_25888__$1);

return statearr_25929;
})();
var statearr_25930_25947 = state_25918__$1;
(statearr_25930_25947[(2)] = null);

(statearr_25930_25947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (9))){
var inst_25898 = (state_25918[(7)]);
var state_25918__$1 = state_25918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25918__$1,(11),out,inst_25898);
} else {
if((state_val_25919 === (5))){
var inst_25912 = cljs.core.async.close_BANG_.call(null,out);
var state_25918__$1 = state_25918;
var statearr_25931_25948 = state_25918__$1;
(statearr_25931_25948[(2)] = inst_25912);

(statearr_25931_25948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (10))){
var inst_25910 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
var statearr_25932_25949 = state_25918__$1;
(statearr_25932_25949[(2)] = inst_25910);

(statearr_25932_25949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (8))){
var inst_25898 = (state_25918[(7)]);
var inst_25899 = (state_25918[(9)]);
var inst_25897 = (state_25918[(8)]);
var inst_25888 = (state_25918[(10)]);
var inst_25902 = (function (){var cs = inst_25888;
var vec__25893 = inst_25897;
var v = inst_25898;
var c = inst_25899;
return ((function (cs,vec__25893,v,c,inst_25898,inst_25899,inst_25897,inst_25888,state_val_25919,c__24527__auto___25940,out){
return (function (p1__25884_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25884_SHARP_);
});
;})(cs,vec__25893,v,c,inst_25898,inst_25899,inst_25897,inst_25888,state_val_25919,c__24527__auto___25940,out))
})();
var inst_25903 = cljs.core.filterv.call(null,inst_25902,inst_25888);
var inst_25888__$1 = inst_25903;
var state_25918__$1 = (function (){var statearr_25933 = state_25918;
(statearr_25933[(10)] = inst_25888__$1);

return statearr_25933;
})();
var statearr_25934_25950 = state_25918__$1;
(statearr_25934_25950[(2)] = null);

(statearr_25934_25950[(1)] = (2));


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
});})(c__24527__auto___25940,out))
;
return ((function (switch__24437__auto__,c__24527__auto___25940,out){
return (function() {
var cljs$core$async$state_machine__24438__auto__ = null;
var cljs$core$async$state_machine__24438__auto____0 = (function (){
var statearr_25935 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25935[(0)] = cljs$core$async$state_machine__24438__auto__);

(statearr_25935[(1)] = (1));

return statearr_25935;
});
var cljs$core$async$state_machine__24438__auto____1 = (function (state_25918){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_25918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e25936){if((e25936 instanceof Object)){
var ex__24441__auto__ = e25936;
var statearr_25937_25951 = state_25918;
(statearr_25937_25951[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25952 = state_25918;
state_25918 = G__25952;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$state_machine__24438__auto__ = function(state_25918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24438__auto____1.call(this,state_25918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24438__auto____0;
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24438__auto____1;
return cljs$core$async$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___25940,out))
})();
var state__24529__auto__ = (function (){var statearr_25938 = f__24528__auto__.call(null);
(statearr_25938[(6)] = c__24527__auto___25940);

return statearr_25938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___25940,out))
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
var G__25954 = arguments.length;
switch (G__25954) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24527__auto___25999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___25999,out){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___25999,out){
return (function (state_25978){
var state_val_25979 = (state_25978[(1)]);
if((state_val_25979 === (7))){
var inst_25960 = (state_25978[(7)]);
var inst_25960__$1 = (state_25978[(2)]);
var inst_25961 = (inst_25960__$1 == null);
var inst_25962 = cljs.core.not.call(null,inst_25961);
var state_25978__$1 = (function (){var statearr_25980 = state_25978;
(statearr_25980[(7)] = inst_25960__$1);

return statearr_25980;
})();
if(inst_25962){
var statearr_25981_26000 = state_25978__$1;
(statearr_25981_26000[(1)] = (8));

} else {
var statearr_25982_26001 = state_25978__$1;
(statearr_25982_26001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (1))){
var inst_25955 = (0);
var state_25978__$1 = (function (){var statearr_25983 = state_25978;
(statearr_25983[(8)] = inst_25955);

return statearr_25983;
})();
var statearr_25984_26002 = state_25978__$1;
(statearr_25984_26002[(2)] = null);

(statearr_25984_26002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (4))){
var state_25978__$1 = state_25978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25978__$1,(7),ch);
} else {
if((state_val_25979 === (6))){
var inst_25973 = (state_25978[(2)]);
var state_25978__$1 = state_25978;
var statearr_25985_26003 = state_25978__$1;
(statearr_25985_26003[(2)] = inst_25973);

(statearr_25985_26003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (3))){
var inst_25975 = (state_25978[(2)]);
var inst_25976 = cljs.core.async.close_BANG_.call(null,out);
var state_25978__$1 = (function (){var statearr_25986 = state_25978;
(statearr_25986[(9)] = inst_25975);

return statearr_25986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25978__$1,inst_25976);
} else {
if((state_val_25979 === (2))){
var inst_25955 = (state_25978[(8)]);
var inst_25957 = (inst_25955 < n);
var state_25978__$1 = state_25978;
if(cljs.core.truth_(inst_25957)){
var statearr_25987_26004 = state_25978__$1;
(statearr_25987_26004[(1)] = (4));

} else {
var statearr_25988_26005 = state_25978__$1;
(statearr_25988_26005[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (11))){
var inst_25955 = (state_25978[(8)]);
var inst_25965 = (state_25978[(2)]);
var inst_25966 = (inst_25955 + (1));
var inst_25955__$1 = inst_25966;
var state_25978__$1 = (function (){var statearr_25989 = state_25978;
(statearr_25989[(10)] = inst_25965);

(statearr_25989[(8)] = inst_25955__$1);

return statearr_25989;
})();
var statearr_25990_26006 = state_25978__$1;
(statearr_25990_26006[(2)] = null);

(statearr_25990_26006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (9))){
var state_25978__$1 = state_25978;
var statearr_25991_26007 = state_25978__$1;
(statearr_25991_26007[(2)] = null);

(statearr_25991_26007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (5))){
var state_25978__$1 = state_25978;
var statearr_25992_26008 = state_25978__$1;
(statearr_25992_26008[(2)] = null);

(statearr_25992_26008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (10))){
var inst_25970 = (state_25978[(2)]);
var state_25978__$1 = state_25978;
var statearr_25993_26009 = state_25978__$1;
(statearr_25993_26009[(2)] = inst_25970);

(statearr_25993_26009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (8))){
var inst_25960 = (state_25978[(7)]);
var state_25978__$1 = state_25978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25978__$1,(11),out,inst_25960);
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
});})(c__24527__auto___25999,out))
;
return ((function (switch__24437__auto__,c__24527__auto___25999,out){
return (function() {
var cljs$core$async$state_machine__24438__auto__ = null;
var cljs$core$async$state_machine__24438__auto____0 = (function (){
var statearr_25994 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25994[(0)] = cljs$core$async$state_machine__24438__auto__);

(statearr_25994[(1)] = (1));

return statearr_25994;
});
var cljs$core$async$state_machine__24438__auto____1 = (function (state_25978){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_25978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e25995){if((e25995 instanceof Object)){
var ex__24441__auto__ = e25995;
var statearr_25996_26010 = state_25978;
(statearr_25996_26010[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26011 = state_25978;
state_25978 = G__26011;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$state_machine__24438__auto__ = function(state_25978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24438__auto____1.call(this,state_25978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24438__auto____0;
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24438__auto____1;
return cljs$core$async$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___25999,out))
})();
var state__24529__auto__ = (function (){var statearr_25997 = f__24528__auto__.call(null);
(statearr_25997[(6)] = c__24527__auto___25999);

return statearr_25997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___25999,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26013 = (function (f,ch,meta26014){
this.f = f;
this.ch = ch;
this.meta26014 = meta26014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26015,meta26014__$1){
var self__ = this;
var _26015__$1 = this;
return (new cljs.core.async.t_cljs$core$async26013(self__.f,self__.ch,meta26014__$1));
});

cljs.core.async.t_cljs$core$async26013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26015){
var self__ = this;
var _26015__$1 = this;
return self__.meta26014;
});

cljs.core.async.t_cljs$core$async26013.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26013.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26013.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26016 = (function (f,ch,meta26014,_,fn1,meta26017){
this.f = f;
this.ch = ch;
this.meta26014 = meta26014;
this._ = _;
this.fn1 = fn1;
this.meta26017 = meta26017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26018,meta26017__$1){
var self__ = this;
var _26018__$1 = this;
return (new cljs.core.async.t_cljs$core$async26016(self__.f,self__.ch,self__.meta26014,self__._,self__.fn1,meta26017__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26018){
var self__ = this;
var _26018__$1 = this;
return self__.meta26017;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26016.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26012_SHARP_){
return f1.call(null,(((p1__26012_SHARP_ == null))?null:self__.f.call(null,p1__26012_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26016.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26014","meta26014",-392557256,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26013","cljs.core.async/t_cljs$core$async26013",1125986559,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26017","meta26017",1796582727,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26016";

cljs.core.async.t_cljs$core$async26016.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26016");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26016.
 */
cljs.core.async.__GT_t_cljs$core$async26016 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26016(f__$1,ch__$1,meta26014__$1,___$2,fn1__$1,meta26017){
return (new cljs.core.async.t_cljs$core$async26016(f__$1,ch__$1,meta26014__$1,___$2,fn1__$1,meta26017));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26016(self__.f,self__.ch,self__.meta26014,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26013.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26014","meta26014",-392557256,null)], null);
});

cljs.core.async.t_cljs$core$async26013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26013";

cljs.core.async.t_cljs$core$async26013.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26013");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26013.
 */
cljs.core.async.__GT_t_cljs$core$async26013 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26013(f__$1,ch__$1,meta26014){
return (new cljs.core.async.t_cljs$core$async26013(f__$1,ch__$1,meta26014));
});

}

return (new cljs.core.async.t_cljs$core$async26013(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26019 = (function (f,ch,meta26020){
this.f = f;
this.ch = ch;
this.meta26020 = meta26020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26021,meta26020__$1){
var self__ = this;
var _26021__$1 = this;
return (new cljs.core.async.t_cljs$core$async26019(self__.f,self__.ch,meta26020__$1));
});

cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26021){
var self__ = this;
var _26021__$1 = this;
return self__.meta26020;
});

cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26020","meta26020",-778330353,null)], null);
});

cljs.core.async.t_cljs$core$async26019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26019";

cljs.core.async.t_cljs$core$async26019.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26019");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26019.
 */
cljs.core.async.__GT_t_cljs$core$async26019 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26019(f__$1,ch__$1,meta26020){
return (new cljs.core.async.t_cljs$core$async26019(f__$1,ch__$1,meta26020));
});

}

return (new cljs.core.async.t_cljs$core$async26019(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26022 = (function (p,ch,meta26023){
this.p = p;
this.ch = ch;
this.meta26023 = meta26023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26024,meta26023__$1){
var self__ = this;
var _26024__$1 = this;
return (new cljs.core.async.t_cljs$core$async26022(self__.p,self__.ch,meta26023__$1));
});

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26024){
var self__ = this;
var _26024__$1 = this;
return self__.meta26023;
});

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26023","meta26023",-1109084382,null)], null);
});

cljs.core.async.t_cljs$core$async26022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26022";

cljs.core.async.t_cljs$core$async26022.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26022");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26022.
 */
cljs.core.async.__GT_t_cljs$core$async26022 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26022(p__$1,ch__$1,meta26023){
return (new cljs.core.async.t_cljs$core$async26022(p__$1,ch__$1,meta26023));
});

}

return (new cljs.core.async.t_cljs$core$async26022(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26026 = arguments.length;
switch (G__26026) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24527__auto___26066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___26066,out){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___26066,out){
return (function (state_26047){
var state_val_26048 = (state_26047[(1)]);
if((state_val_26048 === (7))){
var inst_26043 = (state_26047[(2)]);
var state_26047__$1 = state_26047;
var statearr_26049_26067 = state_26047__$1;
(statearr_26049_26067[(2)] = inst_26043);

(statearr_26049_26067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (1))){
var state_26047__$1 = state_26047;
var statearr_26050_26068 = state_26047__$1;
(statearr_26050_26068[(2)] = null);

(statearr_26050_26068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (4))){
var inst_26029 = (state_26047[(7)]);
var inst_26029__$1 = (state_26047[(2)]);
var inst_26030 = (inst_26029__$1 == null);
var state_26047__$1 = (function (){var statearr_26051 = state_26047;
(statearr_26051[(7)] = inst_26029__$1);

return statearr_26051;
})();
if(cljs.core.truth_(inst_26030)){
var statearr_26052_26069 = state_26047__$1;
(statearr_26052_26069[(1)] = (5));

} else {
var statearr_26053_26070 = state_26047__$1;
(statearr_26053_26070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (6))){
var inst_26029 = (state_26047[(7)]);
var inst_26034 = p.call(null,inst_26029);
var state_26047__$1 = state_26047;
if(cljs.core.truth_(inst_26034)){
var statearr_26054_26071 = state_26047__$1;
(statearr_26054_26071[(1)] = (8));

} else {
var statearr_26055_26072 = state_26047__$1;
(statearr_26055_26072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (3))){
var inst_26045 = (state_26047[(2)]);
var state_26047__$1 = state_26047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26047__$1,inst_26045);
} else {
if((state_val_26048 === (2))){
var state_26047__$1 = state_26047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26047__$1,(4),ch);
} else {
if((state_val_26048 === (11))){
var inst_26037 = (state_26047[(2)]);
var state_26047__$1 = state_26047;
var statearr_26056_26073 = state_26047__$1;
(statearr_26056_26073[(2)] = inst_26037);

(statearr_26056_26073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (9))){
var state_26047__$1 = state_26047;
var statearr_26057_26074 = state_26047__$1;
(statearr_26057_26074[(2)] = null);

(statearr_26057_26074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (5))){
var inst_26032 = cljs.core.async.close_BANG_.call(null,out);
var state_26047__$1 = state_26047;
var statearr_26058_26075 = state_26047__$1;
(statearr_26058_26075[(2)] = inst_26032);

(statearr_26058_26075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (10))){
var inst_26040 = (state_26047[(2)]);
var state_26047__$1 = (function (){var statearr_26059 = state_26047;
(statearr_26059[(8)] = inst_26040);

return statearr_26059;
})();
var statearr_26060_26076 = state_26047__$1;
(statearr_26060_26076[(2)] = null);

(statearr_26060_26076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (8))){
var inst_26029 = (state_26047[(7)]);
var state_26047__$1 = state_26047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26047__$1,(11),out,inst_26029);
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
});})(c__24527__auto___26066,out))
;
return ((function (switch__24437__auto__,c__24527__auto___26066,out){
return (function() {
var cljs$core$async$state_machine__24438__auto__ = null;
var cljs$core$async$state_machine__24438__auto____0 = (function (){
var statearr_26061 = [null,null,null,null,null,null,null,null,null];
(statearr_26061[(0)] = cljs$core$async$state_machine__24438__auto__);

(statearr_26061[(1)] = (1));

return statearr_26061;
});
var cljs$core$async$state_machine__24438__auto____1 = (function (state_26047){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_26047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e26062){if((e26062 instanceof Object)){
var ex__24441__auto__ = e26062;
var statearr_26063_26077 = state_26047;
(statearr_26063_26077[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26078 = state_26047;
state_26047 = G__26078;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$state_machine__24438__auto__ = function(state_26047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24438__auto____1.call(this,state_26047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24438__auto____0;
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24438__auto____1;
return cljs$core$async$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___26066,out))
})();
var state__24529__auto__ = (function (){var statearr_26064 = f__24528__auto__.call(null);
(statearr_26064[(6)] = c__24527__auto___26066);

return statearr_26064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___26066,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26080 = arguments.length;
switch (G__26080) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto__){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto__){
return (function (state_26143){
var state_val_26144 = (state_26143[(1)]);
if((state_val_26144 === (7))){
var inst_26139 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26145_26183 = state_26143__$1;
(statearr_26145_26183[(2)] = inst_26139);

(statearr_26145_26183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (20))){
var inst_26109 = (state_26143[(7)]);
var inst_26120 = (state_26143[(2)]);
var inst_26121 = cljs.core.next.call(null,inst_26109);
var inst_26095 = inst_26121;
var inst_26096 = null;
var inst_26097 = (0);
var inst_26098 = (0);
var state_26143__$1 = (function (){var statearr_26146 = state_26143;
(statearr_26146[(8)] = inst_26098);

(statearr_26146[(9)] = inst_26120);

(statearr_26146[(10)] = inst_26095);

(statearr_26146[(11)] = inst_26096);

(statearr_26146[(12)] = inst_26097);

return statearr_26146;
})();
var statearr_26147_26184 = state_26143__$1;
(statearr_26147_26184[(2)] = null);

(statearr_26147_26184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (1))){
var state_26143__$1 = state_26143;
var statearr_26148_26185 = state_26143__$1;
(statearr_26148_26185[(2)] = null);

(statearr_26148_26185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (4))){
var inst_26084 = (state_26143[(13)]);
var inst_26084__$1 = (state_26143[(2)]);
var inst_26085 = (inst_26084__$1 == null);
var state_26143__$1 = (function (){var statearr_26149 = state_26143;
(statearr_26149[(13)] = inst_26084__$1);

return statearr_26149;
})();
if(cljs.core.truth_(inst_26085)){
var statearr_26150_26186 = state_26143__$1;
(statearr_26150_26186[(1)] = (5));

} else {
var statearr_26151_26187 = state_26143__$1;
(statearr_26151_26187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (15))){
var state_26143__$1 = state_26143;
var statearr_26155_26188 = state_26143__$1;
(statearr_26155_26188[(2)] = null);

(statearr_26155_26188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (21))){
var state_26143__$1 = state_26143;
var statearr_26156_26189 = state_26143__$1;
(statearr_26156_26189[(2)] = null);

(statearr_26156_26189[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (13))){
var inst_26098 = (state_26143[(8)]);
var inst_26095 = (state_26143[(10)]);
var inst_26096 = (state_26143[(11)]);
var inst_26097 = (state_26143[(12)]);
var inst_26105 = (state_26143[(2)]);
var inst_26106 = (inst_26098 + (1));
var tmp26152 = inst_26095;
var tmp26153 = inst_26096;
var tmp26154 = inst_26097;
var inst_26095__$1 = tmp26152;
var inst_26096__$1 = tmp26153;
var inst_26097__$1 = tmp26154;
var inst_26098__$1 = inst_26106;
var state_26143__$1 = (function (){var statearr_26157 = state_26143;
(statearr_26157[(8)] = inst_26098__$1);

(statearr_26157[(10)] = inst_26095__$1);

(statearr_26157[(11)] = inst_26096__$1);

(statearr_26157[(12)] = inst_26097__$1);

(statearr_26157[(14)] = inst_26105);

return statearr_26157;
})();
var statearr_26158_26190 = state_26143__$1;
(statearr_26158_26190[(2)] = null);

(statearr_26158_26190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (22))){
var state_26143__$1 = state_26143;
var statearr_26159_26191 = state_26143__$1;
(statearr_26159_26191[(2)] = null);

(statearr_26159_26191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (6))){
var inst_26084 = (state_26143[(13)]);
var inst_26093 = f.call(null,inst_26084);
var inst_26094 = cljs.core.seq.call(null,inst_26093);
var inst_26095 = inst_26094;
var inst_26096 = null;
var inst_26097 = (0);
var inst_26098 = (0);
var state_26143__$1 = (function (){var statearr_26160 = state_26143;
(statearr_26160[(8)] = inst_26098);

(statearr_26160[(10)] = inst_26095);

(statearr_26160[(11)] = inst_26096);

(statearr_26160[(12)] = inst_26097);

return statearr_26160;
})();
var statearr_26161_26192 = state_26143__$1;
(statearr_26161_26192[(2)] = null);

(statearr_26161_26192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (17))){
var inst_26109 = (state_26143[(7)]);
var inst_26113 = cljs.core.chunk_first.call(null,inst_26109);
var inst_26114 = cljs.core.chunk_rest.call(null,inst_26109);
var inst_26115 = cljs.core.count.call(null,inst_26113);
var inst_26095 = inst_26114;
var inst_26096 = inst_26113;
var inst_26097 = inst_26115;
var inst_26098 = (0);
var state_26143__$1 = (function (){var statearr_26162 = state_26143;
(statearr_26162[(8)] = inst_26098);

(statearr_26162[(10)] = inst_26095);

(statearr_26162[(11)] = inst_26096);

(statearr_26162[(12)] = inst_26097);

return statearr_26162;
})();
var statearr_26163_26193 = state_26143__$1;
(statearr_26163_26193[(2)] = null);

(statearr_26163_26193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (3))){
var inst_26141 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26143__$1,inst_26141);
} else {
if((state_val_26144 === (12))){
var inst_26129 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26164_26194 = state_26143__$1;
(statearr_26164_26194[(2)] = inst_26129);

(statearr_26164_26194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (2))){
var state_26143__$1 = state_26143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26143__$1,(4),in$);
} else {
if((state_val_26144 === (23))){
var inst_26137 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26165_26195 = state_26143__$1;
(statearr_26165_26195[(2)] = inst_26137);

(statearr_26165_26195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (19))){
var inst_26124 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26166_26196 = state_26143__$1;
(statearr_26166_26196[(2)] = inst_26124);

(statearr_26166_26196[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (11))){
var inst_26095 = (state_26143[(10)]);
var inst_26109 = (state_26143[(7)]);
var inst_26109__$1 = cljs.core.seq.call(null,inst_26095);
var state_26143__$1 = (function (){var statearr_26167 = state_26143;
(statearr_26167[(7)] = inst_26109__$1);

return statearr_26167;
})();
if(inst_26109__$1){
var statearr_26168_26197 = state_26143__$1;
(statearr_26168_26197[(1)] = (14));

} else {
var statearr_26169_26198 = state_26143__$1;
(statearr_26169_26198[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (9))){
var inst_26131 = (state_26143[(2)]);
var inst_26132 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26143__$1 = (function (){var statearr_26170 = state_26143;
(statearr_26170[(15)] = inst_26131);

return statearr_26170;
})();
if(cljs.core.truth_(inst_26132)){
var statearr_26171_26199 = state_26143__$1;
(statearr_26171_26199[(1)] = (21));

} else {
var statearr_26172_26200 = state_26143__$1;
(statearr_26172_26200[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (5))){
var inst_26087 = cljs.core.async.close_BANG_.call(null,out);
var state_26143__$1 = state_26143;
var statearr_26173_26201 = state_26143__$1;
(statearr_26173_26201[(2)] = inst_26087);

(statearr_26173_26201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (14))){
var inst_26109 = (state_26143[(7)]);
var inst_26111 = cljs.core.chunked_seq_QMARK_.call(null,inst_26109);
var state_26143__$1 = state_26143;
if(inst_26111){
var statearr_26174_26202 = state_26143__$1;
(statearr_26174_26202[(1)] = (17));

} else {
var statearr_26175_26203 = state_26143__$1;
(statearr_26175_26203[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (16))){
var inst_26127 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26176_26204 = state_26143__$1;
(statearr_26176_26204[(2)] = inst_26127);

(statearr_26176_26204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (10))){
var inst_26098 = (state_26143[(8)]);
var inst_26096 = (state_26143[(11)]);
var inst_26103 = cljs.core._nth.call(null,inst_26096,inst_26098);
var state_26143__$1 = state_26143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26143__$1,(13),out,inst_26103);
} else {
if((state_val_26144 === (18))){
var inst_26109 = (state_26143[(7)]);
var inst_26118 = cljs.core.first.call(null,inst_26109);
var state_26143__$1 = state_26143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26143__$1,(20),out,inst_26118);
} else {
if((state_val_26144 === (8))){
var inst_26098 = (state_26143[(8)]);
var inst_26097 = (state_26143[(12)]);
var inst_26100 = (inst_26098 < inst_26097);
var inst_26101 = inst_26100;
var state_26143__$1 = state_26143;
if(cljs.core.truth_(inst_26101)){
var statearr_26177_26205 = state_26143__$1;
(statearr_26177_26205[(1)] = (10));

} else {
var statearr_26178_26206 = state_26143__$1;
(statearr_26178_26206[(1)] = (11));

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
});})(c__24527__auto__))
;
return ((function (switch__24437__auto__,c__24527__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24438__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24438__auto____0 = (function (){
var statearr_26179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26179[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24438__auto__);

(statearr_26179[(1)] = (1));

return statearr_26179;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24438__auto____1 = (function (state_26143){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_26143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e26180){if((e26180 instanceof Object)){
var ex__24441__auto__ = e26180;
var statearr_26181_26207 = state_26143;
(statearr_26181_26207[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26208 = state_26143;
state_26143 = G__26208;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24438__auto__ = function(state_26143){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24438__auto____1.call(this,state_26143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24438__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24438__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto__))
})();
var state__24529__auto__ = (function (){var statearr_26182 = f__24528__auto__.call(null);
(statearr_26182[(6)] = c__24527__auto__);

return statearr_26182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto__))
);

return c__24527__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26210 = arguments.length;
switch (G__26210) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__26213 = arguments.length;
switch (G__26213) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__26216 = arguments.length;
switch (G__26216) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24527__auto___26263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___26263,out){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___26263,out){
return (function (state_26240){
var state_val_26241 = (state_26240[(1)]);
if((state_val_26241 === (7))){
var inst_26235 = (state_26240[(2)]);
var state_26240__$1 = state_26240;
var statearr_26242_26264 = state_26240__$1;
(statearr_26242_26264[(2)] = inst_26235);

(statearr_26242_26264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (1))){
var inst_26217 = null;
var state_26240__$1 = (function (){var statearr_26243 = state_26240;
(statearr_26243[(7)] = inst_26217);

return statearr_26243;
})();
var statearr_26244_26265 = state_26240__$1;
(statearr_26244_26265[(2)] = null);

(statearr_26244_26265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (4))){
var inst_26220 = (state_26240[(8)]);
var inst_26220__$1 = (state_26240[(2)]);
var inst_26221 = (inst_26220__$1 == null);
var inst_26222 = cljs.core.not.call(null,inst_26221);
var state_26240__$1 = (function (){var statearr_26245 = state_26240;
(statearr_26245[(8)] = inst_26220__$1);

return statearr_26245;
})();
if(inst_26222){
var statearr_26246_26266 = state_26240__$1;
(statearr_26246_26266[(1)] = (5));

} else {
var statearr_26247_26267 = state_26240__$1;
(statearr_26247_26267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (6))){
var state_26240__$1 = state_26240;
var statearr_26248_26268 = state_26240__$1;
(statearr_26248_26268[(2)] = null);

(statearr_26248_26268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (3))){
var inst_26237 = (state_26240[(2)]);
var inst_26238 = cljs.core.async.close_BANG_.call(null,out);
var state_26240__$1 = (function (){var statearr_26249 = state_26240;
(statearr_26249[(9)] = inst_26237);

return statearr_26249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26240__$1,inst_26238);
} else {
if((state_val_26241 === (2))){
var state_26240__$1 = state_26240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26240__$1,(4),ch);
} else {
if((state_val_26241 === (11))){
var inst_26220 = (state_26240[(8)]);
var inst_26229 = (state_26240[(2)]);
var inst_26217 = inst_26220;
var state_26240__$1 = (function (){var statearr_26250 = state_26240;
(statearr_26250[(10)] = inst_26229);

(statearr_26250[(7)] = inst_26217);

return statearr_26250;
})();
var statearr_26251_26269 = state_26240__$1;
(statearr_26251_26269[(2)] = null);

(statearr_26251_26269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (9))){
var inst_26220 = (state_26240[(8)]);
var state_26240__$1 = state_26240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26240__$1,(11),out,inst_26220);
} else {
if((state_val_26241 === (5))){
var inst_26217 = (state_26240[(7)]);
var inst_26220 = (state_26240[(8)]);
var inst_26224 = cljs.core._EQ_.call(null,inst_26220,inst_26217);
var state_26240__$1 = state_26240;
if(inst_26224){
var statearr_26253_26270 = state_26240__$1;
(statearr_26253_26270[(1)] = (8));

} else {
var statearr_26254_26271 = state_26240__$1;
(statearr_26254_26271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (10))){
var inst_26232 = (state_26240[(2)]);
var state_26240__$1 = state_26240;
var statearr_26255_26272 = state_26240__$1;
(statearr_26255_26272[(2)] = inst_26232);

(statearr_26255_26272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (8))){
var inst_26217 = (state_26240[(7)]);
var tmp26252 = inst_26217;
var inst_26217__$1 = tmp26252;
var state_26240__$1 = (function (){var statearr_26256 = state_26240;
(statearr_26256[(7)] = inst_26217__$1);

return statearr_26256;
})();
var statearr_26257_26273 = state_26240__$1;
(statearr_26257_26273[(2)] = null);

(statearr_26257_26273[(1)] = (2));


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
});})(c__24527__auto___26263,out))
;
return ((function (switch__24437__auto__,c__24527__auto___26263,out){
return (function() {
var cljs$core$async$state_machine__24438__auto__ = null;
var cljs$core$async$state_machine__24438__auto____0 = (function (){
var statearr_26258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26258[(0)] = cljs$core$async$state_machine__24438__auto__);

(statearr_26258[(1)] = (1));

return statearr_26258;
});
var cljs$core$async$state_machine__24438__auto____1 = (function (state_26240){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_26240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e26259){if((e26259 instanceof Object)){
var ex__24441__auto__ = e26259;
var statearr_26260_26274 = state_26240;
(statearr_26260_26274[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26275 = state_26240;
state_26240 = G__26275;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$state_machine__24438__auto__ = function(state_26240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24438__auto____1.call(this,state_26240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24438__auto____0;
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24438__auto____1;
return cljs$core$async$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___26263,out))
})();
var state__24529__auto__ = (function (){var statearr_26261 = f__24528__auto__.call(null);
(statearr_26261[(6)] = c__24527__auto___26263);

return statearr_26261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___26263,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26277 = arguments.length;
switch (G__26277) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24527__auto___26343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___26343,out){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___26343,out){
return (function (state_26315){
var state_val_26316 = (state_26315[(1)]);
if((state_val_26316 === (7))){
var inst_26311 = (state_26315[(2)]);
var state_26315__$1 = state_26315;
var statearr_26317_26344 = state_26315__$1;
(statearr_26317_26344[(2)] = inst_26311);

(statearr_26317_26344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (1))){
var inst_26278 = (new Array(n));
var inst_26279 = inst_26278;
var inst_26280 = (0);
var state_26315__$1 = (function (){var statearr_26318 = state_26315;
(statearr_26318[(7)] = inst_26279);

(statearr_26318[(8)] = inst_26280);

return statearr_26318;
})();
var statearr_26319_26345 = state_26315__$1;
(statearr_26319_26345[(2)] = null);

(statearr_26319_26345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (4))){
var inst_26283 = (state_26315[(9)]);
var inst_26283__$1 = (state_26315[(2)]);
var inst_26284 = (inst_26283__$1 == null);
var inst_26285 = cljs.core.not.call(null,inst_26284);
var state_26315__$1 = (function (){var statearr_26320 = state_26315;
(statearr_26320[(9)] = inst_26283__$1);

return statearr_26320;
})();
if(inst_26285){
var statearr_26321_26346 = state_26315__$1;
(statearr_26321_26346[(1)] = (5));

} else {
var statearr_26322_26347 = state_26315__$1;
(statearr_26322_26347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (15))){
var inst_26305 = (state_26315[(2)]);
var state_26315__$1 = state_26315;
var statearr_26323_26348 = state_26315__$1;
(statearr_26323_26348[(2)] = inst_26305);

(statearr_26323_26348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (13))){
var state_26315__$1 = state_26315;
var statearr_26324_26349 = state_26315__$1;
(statearr_26324_26349[(2)] = null);

(statearr_26324_26349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (6))){
var inst_26280 = (state_26315[(8)]);
var inst_26301 = (inst_26280 > (0));
var state_26315__$1 = state_26315;
if(cljs.core.truth_(inst_26301)){
var statearr_26325_26350 = state_26315__$1;
(statearr_26325_26350[(1)] = (12));

} else {
var statearr_26326_26351 = state_26315__$1;
(statearr_26326_26351[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (3))){
var inst_26313 = (state_26315[(2)]);
var state_26315__$1 = state_26315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26315__$1,inst_26313);
} else {
if((state_val_26316 === (12))){
var inst_26279 = (state_26315[(7)]);
var inst_26303 = cljs.core.vec.call(null,inst_26279);
var state_26315__$1 = state_26315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26315__$1,(15),out,inst_26303);
} else {
if((state_val_26316 === (2))){
var state_26315__$1 = state_26315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26315__$1,(4),ch);
} else {
if((state_val_26316 === (11))){
var inst_26295 = (state_26315[(2)]);
var inst_26296 = (new Array(n));
var inst_26279 = inst_26296;
var inst_26280 = (0);
var state_26315__$1 = (function (){var statearr_26327 = state_26315;
(statearr_26327[(7)] = inst_26279);

(statearr_26327[(8)] = inst_26280);

(statearr_26327[(10)] = inst_26295);

return statearr_26327;
})();
var statearr_26328_26352 = state_26315__$1;
(statearr_26328_26352[(2)] = null);

(statearr_26328_26352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (9))){
var inst_26279 = (state_26315[(7)]);
var inst_26293 = cljs.core.vec.call(null,inst_26279);
var state_26315__$1 = state_26315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26315__$1,(11),out,inst_26293);
} else {
if((state_val_26316 === (5))){
var inst_26283 = (state_26315[(9)]);
var inst_26279 = (state_26315[(7)]);
var inst_26280 = (state_26315[(8)]);
var inst_26288 = (state_26315[(11)]);
var inst_26287 = (inst_26279[inst_26280] = inst_26283);
var inst_26288__$1 = (inst_26280 + (1));
var inst_26289 = (inst_26288__$1 < n);
var state_26315__$1 = (function (){var statearr_26329 = state_26315;
(statearr_26329[(12)] = inst_26287);

(statearr_26329[(11)] = inst_26288__$1);

return statearr_26329;
})();
if(cljs.core.truth_(inst_26289)){
var statearr_26330_26353 = state_26315__$1;
(statearr_26330_26353[(1)] = (8));

} else {
var statearr_26331_26354 = state_26315__$1;
(statearr_26331_26354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (14))){
var inst_26308 = (state_26315[(2)]);
var inst_26309 = cljs.core.async.close_BANG_.call(null,out);
var state_26315__$1 = (function (){var statearr_26333 = state_26315;
(statearr_26333[(13)] = inst_26308);

return statearr_26333;
})();
var statearr_26334_26355 = state_26315__$1;
(statearr_26334_26355[(2)] = inst_26309);

(statearr_26334_26355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (10))){
var inst_26299 = (state_26315[(2)]);
var state_26315__$1 = state_26315;
var statearr_26335_26356 = state_26315__$1;
(statearr_26335_26356[(2)] = inst_26299);

(statearr_26335_26356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (8))){
var inst_26279 = (state_26315[(7)]);
var inst_26288 = (state_26315[(11)]);
var tmp26332 = inst_26279;
var inst_26279__$1 = tmp26332;
var inst_26280 = inst_26288;
var state_26315__$1 = (function (){var statearr_26336 = state_26315;
(statearr_26336[(7)] = inst_26279__$1);

(statearr_26336[(8)] = inst_26280);

return statearr_26336;
})();
var statearr_26337_26357 = state_26315__$1;
(statearr_26337_26357[(2)] = null);

(statearr_26337_26357[(1)] = (2));


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
});})(c__24527__auto___26343,out))
;
return ((function (switch__24437__auto__,c__24527__auto___26343,out){
return (function() {
var cljs$core$async$state_machine__24438__auto__ = null;
var cljs$core$async$state_machine__24438__auto____0 = (function (){
var statearr_26338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26338[(0)] = cljs$core$async$state_machine__24438__auto__);

(statearr_26338[(1)] = (1));

return statearr_26338;
});
var cljs$core$async$state_machine__24438__auto____1 = (function (state_26315){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_26315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e26339){if((e26339 instanceof Object)){
var ex__24441__auto__ = e26339;
var statearr_26340_26358 = state_26315;
(statearr_26340_26358[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26359 = state_26315;
state_26315 = G__26359;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$state_machine__24438__auto__ = function(state_26315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24438__auto____1.call(this,state_26315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24438__auto____0;
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24438__auto____1;
return cljs$core$async$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___26343,out))
})();
var state__24529__auto__ = (function (){var statearr_26341 = f__24528__auto__.call(null);
(statearr_26341[(6)] = c__24527__auto___26343);

return statearr_26341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___26343,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26361 = arguments.length;
switch (G__26361) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24527__auto___26431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___26431,out){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___26431,out){
return (function (state_26403){
var state_val_26404 = (state_26403[(1)]);
if((state_val_26404 === (7))){
var inst_26399 = (state_26403[(2)]);
var state_26403__$1 = state_26403;
var statearr_26405_26432 = state_26403__$1;
(statearr_26405_26432[(2)] = inst_26399);

(statearr_26405_26432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26404 === (1))){
var inst_26362 = [];
var inst_26363 = inst_26362;
var inst_26364 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26403__$1 = (function (){var statearr_26406 = state_26403;
(statearr_26406[(7)] = inst_26364);

(statearr_26406[(8)] = inst_26363);

return statearr_26406;
})();
var statearr_26407_26433 = state_26403__$1;
(statearr_26407_26433[(2)] = null);

(statearr_26407_26433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26404 === (4))){
var inst_26367 = (state_26403[(9)]);
var inst_26367__$1 = (state_26403[(2)]);
var inst_26368 = (inst_26367__$1 == null);
var inst_26369 = cljs.core.not.call(null,inst_26368);
var state_26403__$1 = (function (){var statearr_26408 = state_26403;
(statearr_26408[(9)] = inst_26367__$1);

return statearr_26408;
})();
if(inst_26369){
var statearr_26409_26434 = state_26403__$1;
(statearr_26409_26434[(1)] = (5));

} else {
var statearr_26410_26435 = state_26403__$1;
(statearr_26410_26435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26404 === (15))){
var inst_26393 = (state_26403[(2)]);
var state_26403__$1 = state_26403;
var statearr_26411_26436 = state_26403__$1;
(statearr_26411_26436[(2)] = inst_26393);

(statearr_26411_26436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26404 === (13))){
var state_26403__$1 = state_26403;
var statearr_26412_26437 = state_26403__$1;
(statearr_26412_26437[(2)] = null);

(statearr_26412_26437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26404 === (6))){
var inst_26363 = (state_26403[(8)]);
var inst_26388 = inst_26363.length;
var inst_26389 = (inst_26388 > (0));
var state_26403__$1 = state_26403;
if(cljs.core.truth_(inst_26389)){
var statearr_26413_26438 = state_26403__$1;
(statearr_26413_26438[(1)] = (12));

} else {
var statearr_26414_26439 = state_26403__$1;
(statearr_26414_26439[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26404 === (3))){
var inst_26401 = (state_26403[(2)]);
var state_26403__$1 = state_26403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26403__$1,inst_26401);
} else {
if((state_val_26404 === (12))){
var inst_26363 = (state_26403[(8)]);
var inst_26391 = cljs.core.vec.call(null,inst_26363);
var state_26403__$1 = state_26403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26403__$1,(15),out,inst_26391);
} else {
if((state_val_26404 === (2))){
var state_26403__$1 = state_26403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26403__$1,(4),ch);
} else {
if((state_val_26404 === (11))){
var inst_26367 = (state_26403[(9)]);
var inst_26371 = (state_26403[(10)]);
var inst_26381 = (state_26403[(2)]);
var inst_26382 = [];
var inst_26383 = inst_26382.push(inst_26367);
var inst_26363 = inst_26382;
var inst_26364 = inst_26371;
var state_26403__$1 = (function (){var statearr_26415 = state_26403;
(statearr_26415[(7)] = inst_26364);

(statearr_26415[(11)] = inst_26381);

(statearr_26415[(12)] = inst_26383);

(statearr_26415[(8)] = inst_26363);

return statearr_26415;
})();
var statearr_26416_26440 = state_26403__$1;
(statearr_26416_26440[(2)] = null);

(statearr_26416_26440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26404 === (9))){
var inst_26363 = (state_26403[(8)]);
var inst_26379 = cljs.core.vec.call(null,inst_26363);
var state_26403__$1 = state_26403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26403__$1,(11),out,inst_26379);
} else {
if((state_val_26404 === (5))){
var inst_26364 = (state_26403[(7)]);
var inst_26367 = (state_26403[(9)]);
var inst_26371 = (state_26403[(10)]);
var inst_26371__$1 = f.call(null,inst_26367);
var inst_26372 = cljs.core._EQ_.call(null,inst_26371__$1,inst_26364);
var inst_26373 = cljs.core.keyword_identical_QMARK_.call(null,inst_26364,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26374 = ((inst_26372) || (inst_26373));
var state_26403__$1 = (function (){var statearr_26417 = state_26403;
(statearr_26417[(10)] = inst_26371__$1);

return statearr_26417;
})();
if(cljs.core.truth_(inst_26374)){
var statearr_26418_26441 = state_26403__$1;
(statearr_26418_26441[(1)] = (8));

} else {
var statearr_26419_26442 = state_26403__$1;
(statearr_26419_26442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26404 === (14))){
var inst_26396 = (state_26403[(2)]);
var inst_26397 = cljs.core.async.close_BANG_.call(null,out);
var state_26403__$1 = (function (){var statearr_26421 = state_26403;
(statearr_26421[(13)] = inst_26396);

return statearr_26421;
})();
var statearr_26422_26443 = state_26403__$1;
(statearr_26422_26443[(2)] = inst_26397);

(statearr_26422_26443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26404 === (10))){
var inst_26386 = (state_26403[(2)]);
var state_26403__$1 = state_26403;
var statearr_26423_26444 = state_26403__$1;
(statearr_26423_26444[(2)] = inst_26386);

(statearr_26423_26444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26404 === (8))){
var inst_26367 = (state_26403[(9)]);
var inst_26371 = (state_26403[(10)]);
var inst_26363 = (state_26403[(8)]);
var inst_26376 = inst_26363.push(inst_26367);
var tmp26420 = inst_26363;
var inst_26363__$1 = tmp26420;
var inst_26364 = inst_26371;
var state_26403__$1 = (function (){var statearr_26424 = state_26403;
(statearr_26424[(7)] = inst_26364);

(statearr_26424[(14)] = inst_26376);

(statearr_26424[(8)] = inst_26363__$1);

return statearr_26424;
})();
var statearr_26425_26445 = state_26403__$1;
(statearr_26425_26445[(2)] = null);

(statearr_26425_26445[(1)] = (2));


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
});})(c__24527__auto___26431,out))
;
return ((function (switch__24437__auto__,c__24527__auto___26431,out){
return (function() {
var cljs$core$async$state_machine__24438__auto__ = null;
var cljs$core$async$state_machine__24438__auto____0 = (function (){
var statearr_26426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26426[(0)] = cljs$core$async$state_machine__24438__auto__);

(statearr_26426[(1)] = (1));

return statearr_26426;
});
var cljs$core$async$state_machine__24438__auto____1 = (function (state_26403){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_26403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e26427){if((e26427 instanceof Object)){
var ex__24441__auto__ = e26427;
var statearr_26428_26446 = state_26403;
(statearr_26428_26446[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26447 = state_26403;
state_26403 = G__26447;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
cljs$core$async$state_machine__24438__auto__ = function(state_26403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24438__auto____1.call(this,state_26403);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24438__auto____0;
cljs$core$async$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24438__auto____1;
return cljs$core$async$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___26431,out))
})();
var state__24529__auto__ = (function (){var statearr_26429 = f__24528__auto__.call(null);
(statearr_26429[(6)] = c__24527__auto___26431);

return statearr_26429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___26431,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1534123147728
