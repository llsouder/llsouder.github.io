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
var G__24531 = arguments.length;
switch (G__24531) {
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
if(typeof cljs.core.async.t_cljs$core$async24532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24532 = (function (f,blockable,meta24533){
this.f = f;
this.blockable = blockable;
this.meta24533 = meta24533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24534,meta24533__$1){
var self__ = this;
var _24534__$1 = this;
return (new cljs.core.async.t_cljs$core$async24532(self__.f,self__.blockable,meta24533__$1));
});

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24534){
var self__ = this;
var _24534__$1 = this;
return self__.meta24533;
});

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24533","meta24533",-1418633735,null)], null);
});

cljs.core.async.t_cljs$core$async24532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24532";

cljs.core.async.t_cljs$core$async24532.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24532");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24532.
 */
cljs.core.async.__GT_t_cljs$core$async24532 = (function cljs$core$async$__GT_t_cljs$core$async24532(f__$1,blockable__$1,meta24533){
return (new cljs.core.async.t_cljs$core$async24532(f__$1,blockable__$1,meta24533));
});

}

return (new cljs.core.async.t_cljs$core$async24532(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24538 = arguments.length;
switch (G__24538) {
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
var G__24541 = arguments.length;
switch (G__24541) {
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
var G__24544 = arguments.length;
switch (G__24544) {
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
var val_24546 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24546);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24546,ret){
return (function (){
return fn1.call(null,val_24546);
});})(val_24546,ret))
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
var G__24548 = arguments.length;
switch (G__24548) {
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
var n__4376__auto___24550 = n;
var x_24551 = (0);
while(true){
if((x_24551 < n__4376__auto___24550)){
(a[x_24551] = (0));

var G__24552 = (x_24551 + (1));
x_24551 = G__24552;
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

var G__24553 = (i + (1));
i = G__24553;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24554 = (function (flag,meta24555){
this.flag = flag;
this.meta24555 = meta24555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24556,meta24555__$1){
var self__ = this;
var _24556__$1 = this;
return (new cljs.core.async.t_cljs$core$async24554(self__.flag,meta24555__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24556){
var self__ = this;
var _24556__$1 = this;
return self__.meta24555;
});})(flag))
;

cljs.core.async.t_cljs$core$async24554.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24554.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24555","meta24555",-960519603,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24554";

cljs.core.async.t_cljs$core$async24554.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24554");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24554.
 */
cljs.core.async.__GT_t_cljs$core$async24554 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24554(flag__$1,meta24555){
return (new cljs.core.async.t_cljs$core$async24554(flag__$1,meta24555));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24554(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24557 = (function (flag,cb,meta24558){
this.flag = flag;
this.cb = cb;
this.meta24558 = meta24558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24559,meta24558__$1){
var self__ = this;
var _24559__$1 = this;
return (new cljs.core.async.t_cljs$core$async24557(self__.flag,self__.cb,meta24558__$1));
});

cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24559){
var self__ = this;
var _24559__$1 = this;
return self__.meta24558;
});

cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24558","meta24558",-897552111,null)], null);
});

cljs.core.async.t_cljs$core$async24557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24557";

cljs.core.async.t_cljs$core$async24557.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24557");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24557.
 */
cljs.core.async.__GT_t_cljs$core$async24557 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24557(flag__$1,cb__$1,meta24558){
return (new cljs.core.async.t_cljs$core$async24557(flag__$1,cb__$1,meta24558));
});

}

return (new cljs.core.async.t_cljs$core$async24557(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24560_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24560_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24561_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24561_SHARP_,port], null));
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
var G__24562 = (i + (1));
i = G__24562;
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
var len__4499__auto___24568 = arguments.length;
var i__4500__auto___24569 = (0);
while(true){
if((i__4500__auto___24569 < len__4499__auto___24568)){
args__4502__auto__.push((arguments[i__4500__auto___24569]));

var G__24570 = (i__4500__auto___24569 + (1));
i__4500__auto___24569 = G__24570;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24565){
var map__24566 = p__24565;
var map__24566__$1 = ((((!((map__24566 == null)))?(((((map__24566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24566):map__24566);
var opts = map__24566__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24563){
var G__24564 = cljs.core.first.call(null,seq24563);
var seq24563__$1 = cljs.core.next.call(null,seq24563);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24564,seq24563__$1);
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
var G__24572 = arguments.length;
switch (G__24572) {
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
var c__24471__auto___24618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___24618){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___24618){
return (function (state_24596){
var state_val_24597 = (state_24596[(1)]);
if((state_val_24597 === (7))){
var inst_24592 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
var statearr_24598_24619 = state_24596__$1;
(statearr_24598_24619[(2)] = inst_24592);

(statearr_24598_24619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (1))){
var state_24596__$1 = state_24596;
var statearr_24599_24620 = state_24596__$1;
(statearr_24599_24620[(2)] = null);

(statearr_24599_24620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (4))){
var inst_24575 = (state_24596[(7)]);
var inst_24575__$1 = (state_24596[(2)]);
var inst_24576 = (inst_24575__$1 == null);
var state_24596__$1 = (function (){var statearr_24600 = state_24596;
(statearr_24600[(7)] = inst_24575__$1);

return statearr_24600;
})();
if(cljs.core.truth_(inst_24576)){
var statearr_24601_24621 = state_24596__$1;
(statearr_24601_24621[(1)] = (5));

} else {
var statearr_24602_24622 = state_24596__$1;
(statearr_24602_24622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (13))){
var state_24596__$1 = state_24596;
var statearr_24603_24623 = state_24596__$1;
(statearr_24603_24623[(2)] = null);

(statearr_24603_24623[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (6))){
var inst_24575 = (state_24596[(7)]);
var state_24596__$1 = state_24596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24596__$1,(11),to,inst_24575);
} else {
if((state_val_24597 === (3))){
var inst_24594 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24596__$1,inst_24594);
} else {
if((state_val_24597 === (12))){
var state_24596__$1 = state_24596;
var statearr_24604_24624 = state_24596__$1;
(statearr_24604_24624[(2)] = null);

(statearr_24604_24624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (2))){
var state_24596__$1 = state_24596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24596__$1,(4),from);
} else {
if((state_val_24597 === (11))){
var inst_24585 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
if(cljs.core.truth_(inst_24585)){
var statearr_24605_24625 = state_24596__$1;
(statearr_24605_24625[(1)] = (12));

} else {
var statearr_24606_24626 = state_24596__$1;
(statearr_24606_24626[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (9))){
var state_24596__$1 = state_24596;
var statearr_24607_24627 = state_24596__$1;
(statearr_24607_24627[(2)] = null);

(statearr_24607_24627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (5))){
var state_24596__$1 = state_24596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24608_24628 = state_24596__$1;
(statearr_24608_24628[(1)] = (8));

} else {
var statearr_24609_24629 = state_24596__$1;
(statearr_24609_24629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (14))){
var inst_24590 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
var statearr_24610_24630 = state_24596__$1;
(statearr_24610_24630[(2)] = inst_24590);

(statearr_24610_24630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (10))){
var inst_24582 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
var statearr_24611_24631 = state_24596__$1;
(statearr_24611_24631[(2)] = inst_24582);

(statearr_24611_24631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (8))){
var inst_24579 = cljs.core.async.close_BANG_.call(null,to);
var state_24596__$1 = state_24596;
var statearr_24612_24632 = state_24596__$1;
(statearr_24612_24632[(2)] = inst_24579);

(statearr_24612_24632[(1)] = (10));


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
});})(c__24471__auto___24618))
;
return ((function (switch__24381__auto__,c__24471__auto___24618){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_24613 = [null,null,null,null,null,null,null,null];
(statearr_24613[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_24613[(1)] = (1));

return statearr_24613;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_24596){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_24596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24614){if((e24614 instanceof Object)){
var ex__24385__auto__ = e24614;
var statearr_24615_24633 = state_24596;
(statearr_24615_24633[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24634 = state_24596;
state_24596 = G__24634;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_24596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_24596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___24618))
})();
var state__24473__auto__ = (function (){var statearr_24616 = f__24472__auto__.call(null);
(statearr_24616[(6)] = c__24471__auto___24618);

return statearr_24616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___24618))
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
return (function (p__24635){
var vec__24636 = p__24635;
var v = cljs.core.nth.call(null,vec__24636,(0),null);
var p = cljs.core.nth.call(null,vec__24636,(1),null);
var job = vec__24636;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24471__auto___24807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___24807,res,vec__24636,v,p,job,jobs,results){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___24807,res,vec__24636,v,p,job,jobs,results){
return (function (state_24643){
var state_val_24644 = (state_24643[(1)]);
if((state_val_24644 === (1))){
var state_24643__$1 = state_24643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24643__$1,(2),res,v);
} else {
if((state_val_24644 === (2))){
var inst_24640 = (state_24643[(2)]);
var inst_24641 = cljs.core.async.close_BANG_.call(null,res);
var state_24643__$1 = (function (){var statearr_24645 = state_24643;
(statearr_24645[(7)] = inst_24640);

return statearr_24645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24643__$1,inst_24641);
} else {
return null;
}
}
});})(c__24471__auto___24807,res,vec__24636,v,p,job,jobs,results))
;
return ((function (switch__24381__auto__,c__24471__auto___24807,res,vec__24636,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0 = (function (){
var statearr_24646 = [null,null,null,null,null,null,null,null];
(statearr_24646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__);

(statearr_24646[(1)] = (1));

return statearr_24646;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1 = (function (state_24643){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_24643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24647){if((e24647 instanceof Object)){
var ex__24385__auto__ = e24647;
var statearr_24648_24808 = state_24643;
(statearr_24648_24808[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24809 = state_24643;
state_24643 = G__24809;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = function(state_24643){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1.call(this,state_24643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___24807,res,vec__24636,v,p,job,jobs,results))
})();
var state__24473__auto__ = (function (){var statearr_24649 = f__24472__auto__.call(null);
(statearr_24649[(6)] = c__24471__auto___24807);

return statearr_24649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___24807,res,vec__24636,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24650){
var vec__24651 = p__24650;
var v = cljs.core.nth.call(null,vec__24651,(0),null);
var p = cljs.core.nth.call(null,vec__24651,(1),null);
var job = vec__24651;
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
var n__4376__auto___24810 = n;
var __24811 = (0);
while(true){
if((__24811 < n__4376__auto___24810)){
var G__24654_24812 = type;
var G__24654_24813__$1 = (((G__24654_24812 instanceof cljs.core.Keyword))?G__24654_24812.fqn:null);
switch (G__24654_24813__$1) {
case "compute":
var c__24471__auto___24815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24811,c__24471__auto___24815,G__24654_24812,G__24654_24813__$1,n__4376__auto___24810,jobs,results,process,async){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (__24811,c__24471__auto___24815,G__24654_24812,G__24654_24813__$1,n__4376__auto___24810,jobs,results,process,async){
return (function (state_24667){
var state_val_24668 = (state_24667[(1)]);
if((state_val_24668 === (1))){
var state_24667__$1 = state_24667;
var statearr_24669_24816 = state_24667__$1;
(statearr_24669_24816[(2)] = null);

(statearr_24669_24816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24668 === (2))){
var state_24667__$1 = state_24667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24667__$1,(4),jobs);
} else {
if((state_val_24668 === (3))){
var inst_24665 = (state_24667[(2)]);
var state_24667__$1 = state_24667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24667__$1,inst_24665);
} else {
if((state_val_24668 === (4))){
var inst_24657 = (state_24667[(2)]);
var inst_24658 = process.call(null,inst_24657);
var state_24667__$1 = state_24667;
if(cljs.core.truth_(inst_24658)){
var statearr_24670_24817 = state_24667__$1;
(statearr_24670_24817[(1)] = (5));

} else {
var statearr_24671_24818 = state_24667__$1;
(statearr_24671_24818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24668 === (5))){
var state_24667__$1 = state_24667;
var statearr_24672_24819 = state_24667__$1;
(statearr_24672_24819[(2)] = null);

(statearr_24672_24819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24668 === (6))){
var state_24667__$1 = state_24667;
var statearr_24673_24820 = state_24667__$1;
(statearr_24673_24820[(2)] = null);

(statearr_24673_24820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24668 === (7))){
var inst_24663 = (state_24667[(2)]);
var state_24667__$1 = state_24667;
var statearr_24674_24821 = state_24667__$1;
(statearr_24674_24821[(2)] = inst_24663);

(statearr_24674_24821[(1)] = (3));


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
});})(__24811,c__24471__auto___24815,G__24654_24812,G__24654_24813__$1,n__4376__auto___24810,jobs,results,process,async))
;
return ((function (__24811,switch__24381__auto__,c__24471__auto___24815,G__24654_24812,G__24654_24813__$1,n__4376__auto___24810,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0 = (function (){
var statearr_24675 = [null,null,null,null,null,null,null];
(statearr_24675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__);

(statearr_24675[(1)] = (1));

return statearr_24675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1 = (function (state_24667){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_24667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24676){if((e24676 instanceof Object)){
var ex__24385__auto__ = e24676;
var statearr_24677_24822 = state_24667;
(statearr_24677_24822[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24823 = state_24667;
state_24667 = G__24823;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = function(state_24667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1.call(this,state_24667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__;
})()
;})(__24811,switch__24381__auto__,c__24471__auto___24815,G__24654_24812,G__24654_24813__$1,n__4376__auto___24810,jobs,results,process,async))
})();
var state__24473__auto__ = (function (){var statearr_24678 = f__24472__auto__.call(null);
(statearr_24678[(6)] = c__24471__auto___24815);

return statearr_24678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(__24811,c__24471__auto___24815,G__24654_24812,G__24654_24813__$1,n__4376__auto___24810,jobs,results,process,async))
);


break;
case "async":
var c__24471__auto___24824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24811,c__24471__auto___24824,G__24654_24812,G__24654_24813__$1,n__4376__auto___24810,jobs,results,process,async){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (__24811,c__24471__auto___24824,G__24654_24812,G__24654_24813__$1,n__4376__auto___24810,jobs,results,process,async){
return (function (state_24691){
var state_val_24692 = (state_24691[(1)]);
if((state_val_24692 === (1))){
var state_24691__$1 = state_24691;
var statearr_24693_24825 = state_24691__$1;
(statearr_24693_24825[(2)] = null);

(statearr_24693_24825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (2))){
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24691__$1,(4),jobs);
} else {
if((state_val_24692 === (3))){
var inst_24689 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24691__$1,inst_24689);
} else {
if((state_val_24692 === (4))){
var inst_24681 = (state_24691[(2)]);
var inst_24682 = async.call(null,inst_24681);
var state_24691__$1 = state_24691;
if(cljs.core.truth_(inst_24682)){
var statearr_24694_24826 = state_24691__$1;
(statearr_24694_24826[(1)] = (5));

} else {
var statearr_24695_24827 = state_24691__$1;
(statearr_24695_24827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (5))){
var state_24691__$1 = state_24691;
var statearr_24696_24828 = state_24691__$1;
(statearr_24696_24828[(2)] = null);

(statearr_24696_24828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (6))){
var state_24691__$1 = state_24691;
var statearr_24697_24829 = state_24691__$1;
(statearr_24697_24829[(2)] = null);

(statearr_24697_24829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (7))){
var inst_24687 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
var statearr_24698_24830 = state_24691__$1;
(statearr_24698_24830[(2)] = inst_24687);

(statearr_24698_24830[(1)] = (3));


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
});})(__24811,c__24471__auto___24824,G__24654_24812,G__24654_24813__$1,n__4376__auto___24810,jobs,results,process,async))
;
return ((function (__24811,switch__24381__auto__,c__24471__auto___24824,G__24654_24812,G__24654_24813__$1,n__4376__auto___24810,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0 = (function (){
var statearr_24699 = [null,null,null,null,null,null,null];
(statearr_24699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__);

(statearr_24699[(1)] = (1));

return statearr_24699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1 = (function (state_24691){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_24691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24700){if((e24700 instanceof Object)){
var ex__24385__auto__ = e24700;
var statearr_24701_24831 = state_24691;
(statearr_24701_24831[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24832 = state_24691;
state_24691 = G__24832;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = function(state_24691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1.call(this,state_24691);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__;
})()
;})(__24811,switch__24381__auto__,c__24471__auto___24824,G__24654_24812,G__24654_24813__$1,n__4376__auto___24810,jobs,results,process,async))
})();
var state__24473__auto__ = (function (){var statearr_24702 = f__24472__auto__.call(null);
(statearr_24702[(6)] = c__24471__auto___24824);

return statearr_24702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(__24811,c__24471__auto___24824,G__24654_24812,G__24654_24813__$1,n__4376__auto___24810,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24654_24813__$1)].join('')));

}

var G__24833 = (__24811 + (1));
__24811 = G__24833;
continue;
} else {
}
break;
}

var c__24471__auto___24834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___24834,jobs,results,process,async){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___24834,jobs,results,process,async){
return (function (state_24724){
var state_val_24725 = (state_24724[(1)]);
if((state_val_24725 === (1))){
var state_24724__$1 = state_24724;
var statearr_24726_24835 = state_24724__$1;
(statearr_24726_24835[(2)] = null);

(statearr_24726_24835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (2))){
var state_24724__$1 = state_24724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24724__$1,(4),from);
} else {
if((state_val_24725 === (3))){
var inst_24722 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24724__$1,inst_24722);
} else {
if((state_val_24725 === (4))){
var inst_24705 = (state_24724[(7)]);
var inst_24705__$1 = (state_24724[(2)]);
var inst_24706 = (inst_24705__$1 == null);
var state_24724__$1 = (function (){var statearr_24727 = state_24724;
(statearr_24727[(7)] = inst_24705__$1);

return statearr_24727;
})();
if(cljs.core.truth_(inst_24706)){
var statearr_24728_24836 = state_24724__$1;
(statearr_24728_24836[(1)] = (5));

} else {
var statearr_24729_24837 = state_24724__$1;
(statearr_24729_24837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (5))){
var inst_24708 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24724__$1 = state_24724;
var statearr_24730_24838 = state_24724__$1;
(statearr_24730_24838[(2)] = inst_24708);

(statearr_24730_24838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (6))){
var inst_24705 = (state_24724[(7)]);
var inst_24710 = (state_24724[(8)]);
var inst_24710__$1 = cljs.core.async.chan.call(null,(1));
var inst_24711 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24712 = [inst_24705,inst_24710__$1];
var inst_24713 = (new cljs.core.PersistentVector(null,2,(5),inst_24711,inst_24712,null));
var state_24724__$1 = (function (){var statearr_24731 = state_24724;
(statearr_24731[(8)] = inst_24710__$1);

return statearr_24731;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24724__$1,(8),jobs,inst_24713);
} else {
if((state_val_24725 === (7))){
var inst_24720 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24732_24839 = state_24724__$1;
(statearr_24732_24839[(2)] = inst_24720);

(statearr_24732_24839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (8))){
var inst_24710 = (state_24724[(8)]);
var inst_24715 = (state_24724[(2)]);
var state_24724__$1 = (function (){var statearr_24733 = state_24724;
(statearr_24733[(9)] = inst_24715);

return statearr_24733;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24724__$1,(9),results,inst_24710);
} else {
if((state_val_24725 === (9))){
var inst_24717 = (state_24724[(2)]);
var state_24724__$1 = (function (){var statearr_24734 = state_24724;
(statearr_24734[(10)] = inst_24717);

return statearr_24734;
})();
var statearr_24735_24840 = state_24724__$1;
(statearr_24735_24840[(2)] = null);

(statearr_24735_24840[(1)] = (2));


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
});})(c__24471__auto___24834,jobs,results,process,async))
;
return ((function (switch__24381__auto__,c__24471__auto___24834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0 = (function (){
var statearr_24736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__);

(statearr_24736[(1)] = (1));

return statearr_24736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1 = (function (state_24724){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_24724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24737){if((e24737 instanceof Object)){
var ex__24385__auto__ = e24737;
var statearr_24738_24841 = state_24724;
(statearr_24738_24841[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24842 = state_24724;
state_24724 = G__24842;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = function(state_24724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1.call(this,state_24724);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___24834,jobs,results,process,async))
})();
var state__24473__auto__ = (function (){var statearr_24739 = f__24472__auto__.call(null);
(statearr_24739[(6)] = c__24471__auto___24834);

return statearr_24739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___24834,jobs,results,process,async))
);


var c__24471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto__,jobs,results,process,async){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto__,jobs,results,process,async){
return (function (state_24777){
var state_val_24778 = (state_24777[(1)]);
if((state_val_24778 === (7))){
var inst_24773 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
var statearr_24779_24843 = state_24777__$1;
(statearr_24779_24843[(2)] = inst_24773);

(statearr_24779_24843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (20))){
var state_24777__$1 = state_24777;
var statearr_24780_24844 = state_24777__$1;
(statearr_24780_24844[(2)] = null);

(statearr_24780_24844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (1))){
var state_24777__$1 = state_24777;
var statearr_24781_24845 = state_24777__$1;
(statearr_24781_24845[(2)] = null);

(statearr_24781_24845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (4))){
var inst_24742 = (state_24777[(7)]);
var inst_24742__$1 = (state_24777[(2)]);
var inst_24743 = (inst_24742__$1 == null);
var state_24777__$1 = (function (){var statearr_24782 = state_24777;
(statearr_24782[(7)] = inst_24742__$1);

return statearr_24782;
})();
if(cljs.core.truth_(inst_24743)){
var statearr_24783_24846 = state_24777__$1;
(statearr_24783_24846[(1)] = (5));

} else {
var statearr_24784_24847 = state_24777__$1;
(statearr_24784_24847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (15))){
var inst_24755 = (state_24777[(8)]);
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24777__$1,(18),to,inst_24755);
} else {
if((state_val_24778 === (21))){
var inst_24768 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
var statearr_24785_24848 = state_24777__$1;
(statearr_24785_24848[(2)] = inst_24768);

(statearr_24785_24848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (13))){
var inst_24770 = (state_24777[(2)]);
var state_24777__$1 = (function (){var statearr_24786 = state_24777;
(statearr_24786[(9)] = inst_24770);

return statearr_24786;
})();
var statearr_24787_24849 = state_24777__$1;
(statearr_24787_24849[(2)] = null);

(statearr_24787_24849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (6))){
var inst_24742 = (state_24777[(7)]);
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24777__$1,(11),inst_24742);
} else {
if((state_val_24778 === (17))){
var inst_24763 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
if(cljs.core.truth_(inst_24763)){
var statearr_24788_24850 = state_24777__$1;
(statearr_24788_24850[(1)] = (19));

} else {
var statearr_24789_24851 = state_24777__$1;
(statearr_24789_24851[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (3))){
var inst_24775 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24777__$1,inst_24775);
} else {
if((state_val_24778 === (12))){
var inst_24752 = (state_24777[(10)]);
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24777__$1,(14),inst_24752);
} else {
if((state_val_24778 === (2))){
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24777__$1,(4),results);
} else {
if((state_val_24778 === (19))){
var state_24777__$1 = state_24777;
var statearr_24790_24852 = state_24777__$1;
(statearr_24790_24852[(2)] = null);

(statearr_24790_24852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (11))){
var inst_24752 = (state_24777[(2)]);
var state_24777__$1 = (function (){var statearr_24791 = state_24777;
(statearr_24791[(10)] = inst_24752);

return statearr_24791;
})();
var statearr_24792_24853 = state_24777__$1;
(statearr_24792_24853[(2)] = null);

(statearr_24792_24853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (9))){
var state_24777__$1 = state_24777;
var statearr_24793_24854 = state_24777__$1;
(statearr_24793_24854[(2)] = null);

(statearr_24793_24854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (5))){
var state_24777__$1 = state_24777;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24794_24855 = state_24777__$1;
(statearr_24794_24855[(1)] = (8));

} else {
var statearr_24795_24856 = state_24777__$1;
(statearr_24795_24856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (14))){
var inst_24755 = (state_24777[(8)]);
var inst_24757 = (state_24777[(11)]);
var inst_24755__$1 = (state_24777[(2)]);
var inst_24756 = (inst_24755__$1 == null);
var inst_24757__$1 = cljs.core.not.call(null,inst_24756);
var state_24777__$1 = (function (){var statearr_24796 = state_24777;
(statearr_24796[(8)] = inst_24755__$1);

(statearr_24796[(11)] = inst_24757__$1);

return statearr_24796;
})();
if(inst_24757__$1){
var statearr_24797_24857 = state_24777__$1;
(statearr_24797_24857[(1)] = (15));

} else {
var statearr_24798_24858 = state_24777__$1;
(statearr_24798_24858[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (16))){
var inst_24757 = (state_24777[(11)]);
var state_24777__$1 = state_24777;
var statearr_24799_24859 = state_24777__$1;
(statearr_24799_24859[(2)] = inst_24757);

(statearr_24799_24859[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (10))){
var inst_24749 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
var statearr_24800_24860 = state_24777__$1;
(statearr_24800_24860[(2)] = inst_24749);

(statearr_24800_24860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (18))){
var inst_24760 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
var statearr_24801_24861 = state_24777__$1;
(statearr_24801_24861[(2)] = inst_24760);

(statearr_24801_24861[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (8))){
var inst_24746 = cljs.core.async.close_BANG_.call(null,to);
var state_24777__$1 = state_24777;
var statearr_24802_24862 = state_24777__$1;
(statearr_24802_24862[(2)] = inst_24746);

(statearr_24802_24862[(1)] = (10));


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
});})(c__24471__auto__,jobs,results,process,async))
;
return ((function (switch__24381__auto__,c__24471__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0 = (function (){
var statearr_24803 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__);

(statearr_24803[(1)] = (1));

return statearr_24803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1 = (function (state_24777){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_24777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24804){if((e24804 instanceof Object)){
var ex__24385__auto__ = e24804;
var statearr_24805_24863 = state_24777;
(statearr_24805_24863[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24864 = state_24777;
state_24777 = G__24864;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = function(state_24777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1.call(this,state_24777);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto__,jobs,results,process,async))
})();
var state__24473__auto__ = (function (){var statearr_24806 = f__24472__auto__.call(null);
(statearr_24806[(6)] = c__24471__auto__);

return statearr_24806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto__,jobs,results,process,async))
);

return c__24471__auto__;
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
var G__24866 = arguments.length;
switch (G__24866) {
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
var G__24869 = arguments.length;
switch (G__24869) {
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
var G__24872 = arguments.length;
switch (G__24872) {
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
var c__24471__auto___24921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___24921,tc,fc){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___24921,tc,fc){
return (function (state_24898){
var state_val_24899 = (state_24898[(1)]);
if((state_val_24899 === (7))){
var inst_24894 = (state_24898[(2)]);
var state_24898__$1 = state_24898;
var statearr_24900_24922 = state_24898__$1;
(statearr_24900_24922[(2)] = inst_24894);

(statearr_24900_24922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (1))){
var state_24898__$1 = state_24898;
var statearr_24901_24923 = state_24898__$1;
(statearr_24901_24923[(2)] = null);

(statearr_24901_24923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (4))){
var inst_24875 = (state_24898[(7)]);
var inst_24875__$1 = (state_24898[(2)]);
var inst_24876 = (inst_24875__$1 == null);
var state_24898__$1 = (function (){var statearr_24902 = state_24898;
(statearr_24902[(7)] = inst_24875__$1);

return statearr_24902;
})();
if(cljs.core.truth_(inst_24876)){
var statearr_24903_24924 = state_24898__$1;
(statearr_24903_24924[(1)] = (5));

} else {
var statearr_24904_24925 = state_24898__$1;
(statearr_24904_24925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (13))){
var state_24898__$1 = state_24898;
var statearr_24905_24926 = state_24898__$1;
(statearr_24905_24926[(2)] = null);

(statearr_24905_24926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (6))){
var inst_24875 = (state_24898[(7)]);
var inst_24881 = p.call(null,inst_24875);
var state_24898__$1 = state_24898;
if(cljs.core.truth_(inst_24881)){
var statearr_24906_24927 = state_24898__$1;
(statearr_24906_24927[(1)] = (9));

} else {
var statearr_24907_24928 = state_24898__$1;
(statearr_24907_24928[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (3))){
var inst_24896 = (state_24898[(2)]);
var state_24898__$1 = state_24898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24898__$1,inst_24896);
} else {
if((state_val_24899 === (12))){
var state_24898__$1 = state_24898;
var statearr_24908_24929 = state_24898__$1;
(statearr_24908_24929[(2)] = null);

(statearr_24908_24929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (2))){
var state_24898__$1 = state_24898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24898__$1,(4),ch);
} else {
if((state_val_24899 === (11))){
var inst_24875 = (state_24898[(7)]);
var inst_24885 = (state_24898[(2)]);
var state_24898__$1 = state_24898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24898__$1,(8),inst_24885,inst_24875);
} else {
if((state_val_24899 === (9))){
var state_24898__$1 = state_24898;
var statearr_24909_24930 = state_24898__$1;
(statearr_24909_24930[(2)] = tc);

(statearr_24909_24930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (5))){
var inst_24878 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24879 = cljs.core.async.close_BANG_.call(null,fc);
var state_24898__$1 = (function (){var statearr_24910 = state_24898;
(statearr_24910[(8)] = inst_24878);

return statearr_24910;
})();
var statearr_24911_24931 = state_24898__$1;
(statearr_24911_24931[(2)] = inst_24879);

(statearr_24911_24931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (14))){
var inst_24892 = (state_24898[(2)]);
var state_24898__$1 = state_24898;
var statearr_24912_24932 = state_24898__$1;
(statearr_24912_24932[(2)] = inst_24892);

(statearr_24912_24932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (10))){
var state_24898__$1 = state_24898;
var statearr_24913_24933 = state_24898__$1;
(statearr_24913_24933[(2)] = fc);

(statearr_24913_24933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (8))){
var inst_24887 = (state_24898[(2)]);
var state_24898__$1 = state_24898;
if(cljs.core.truth_(inst_24887)){
var statearr_24914_24934 = state_24898__$1;
(statearr_24914_24934[(1)] = (12));

} else {
var statearr_24915_24935 = state_24898__$1;
(statearr_24915_24935[(1)] = (13));

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
});})(c__24471__auto___24921,tc,fc))
;
return ((function (switch__24381__auto__,c__24471__auto___24921,tc,fc){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_24916 = [null,null,null,null,null,null,null,null,null];
(statearr_24916[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_24916[(1)] = (1));

return statearr_24916;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_24898){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_24898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24917){if((e24917 instanceof Object)){
var ex__24385__auto__ = e24917;
var statearr_24918_24936 = state_24898;
(statearr_24918_24936[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24937 = state_24898;
state_24898 = G__24937;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_24898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_24898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___24921,tc,fc))
})();
var state__24473__auto__ = (function (){var statearr_24919 = f__24472__auto__.call(null);
(statearr_24919[(6)] = c__24471__auto___24921);

return statearr_24919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___24921,tc,fc))
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
var c__24471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto__){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto__){
return (function (state_24958){
var state_val_24959 = (state_24958[(1)]);
if((state_val_24959 === (7))){
var inst_24954 = (state_24958[(2)]);
var state_24958__$1 = state_24958;
var statearr_24960_24978 = state_24958__$1;
(statearr_24960_24978[(2)] = inst_24954);

(statearr_24960_24978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (1))){
var inst_24938 = init;
var state_24958__$1 = (function (){var statearr_24961 = state_24958;
(statearr_24961[(7)] = inst_24938);

return statearr_24961;
})();
var statearr_24962_24979 = state_24958__$1;
(statearr_24962_24979[(2)] = null);

(statearr_24962_24979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (4))){
var inst_24941 = (state_24958[(8)]);
var inst_24941__$1 = (state_24958[(2)]);
var inst_24942 = (inst_24941__$1 == null);
var state_24958__$1 = (function (){var statearr_24963 = state_24958;
(statearr_24963[(8)] = inst_24941__$1);

return statearr_24963;
})();
if(cljs.core.truth_(inst_24942)){
var statearr_24964_24980 = state_24958__$1;
(statearr_24964_24980[(1)] = (5));

} else {
var statearr_24965_24981 = state_24958__$1;
(statearr_24965_24981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (6))){
var inst_24941 = (state_24958[(8)]);
var inst_24938 = (state_24958[(7)]);
var inst_24945 = (state_24958[(9)]);
var inst_24945__$1 = f.call(null,inst_24938,inst_24941);
var inst_24946 = cljs.core.reduced_QMARK_.call(null,inst_24945__$1);
var state_24958__$1 = (function (){var statearr_24966 = state_24958;
(statearr_24966[(9)] = inst_24945__$1);

return statearr_24966;
})();
if(inst_24946){
var statearr_24967_24982 = state_24958__$1;
(statearr_24967_24982[(1)] = (8));

} else {
var statearr_24968_24983 = state_24958__$1;
(statearr_24968_24983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (3))){
var inst_24956 = (state_24958[(2)]);
var state_24958__$1 = state_24958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24958__$1,inst_24956);
} else {
if((state_val_24959 === (2))){
var state_24958__$1 = state_24958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24958__$1,(4),ch);
} else {
if((state_val_24959 === (9))){
var inst_24945 = (state_24958[(9)]);
var inst_24938 = inst_24945;
var state_24958__$1 = (function (){var statearr_24969 = state_24958;
(statearr_24969[(7)] = inst_24938);

return statearr_24969;
})();
var statearr_24970_24984 = state_24958__$1;
(statearr_24970_24984[(2)] = null);

(statearr_24970_24984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (5))){
var inst_24938 = (state_24958[(7)]);
var state_24958__$1 = state_24958;
var statearr_24971_24985 = state_24958__$1;
(statearr_24971_24985[(2)] = inst_24938);

(statearr_24971_24985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (10))){
var inst_24952 = (state_24958[(2)]);
var state_24958__$1 = state_24958;
var statearr_24972_24986 = state_24958__$1;
(statearr_24972_24986[(2)] = inst_24952);

(statearr_24972_24986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (8))){
var inst_24945 = (state_24958[(9)]);
var inst_24948 = cljs.core.deref.call(null,inst_24945);
var state_24958__$1 = state_24958;
var statearr_24973_24987 = state_24958__$1;
(statearr_24973_24987[(2)] = inst_24948);

(statearr_24973_24987[(1)] = (10));


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
});})(c__24471__auto__))
;
return ((function (switch__24381__auto__,c__24471__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24382__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24382__auto____0 = (function (){
var statearr_24974 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24974[(0)] = cljs$core$async$reduce_$_state_machine__24382__auto__);

(statearr_24974[(1)] = (1));

return statearr_24974;
});
var cljs$core$async$reduce_$_state_machine__24382__auto____1 = (function (state_24958){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_24958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24975){if((e24975 instanceof Object)){
var ex__24385__auto__ = e24975;
var statearr_24976_24988 = state_24958;
(statearr_24976_24988[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24989 = state_24958;
state_24958 = G__24989;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24382__auto__ = function(state_24958){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24382__auto____1.call(this,state_24958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24382__auto____0;
cljs$core$async$reduce_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24382__auto____1;
return cljs$core$async$reduce_$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto__))
})();
var state__24473__auto__ = (function (){var statearr_24977 = f__24472__auto__.call(null);
(statearr_24977[(6)] = c__24471__auto__);

return statearr_24977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto__))
);

return c__24471__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto__,f__$1){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto__,f__$1){
return (function (state_24995){
var state_val_24996 = (state_24995[(1)]);
if((state_val_24996 === (1))){
var inst_24990 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24995__$1 = state_24995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24995__$1,(2),inst_24990);
} else {
if((state_val_24996 === (2))){
var inst_24992 = (state_24995[(2)]);
var inst_24993 = f__$1.call(null,inst_24992);
var state_24995__$1 = state_24995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24995__$1,inst_24993);
} else {
return null;
}
}
});})(c__24471__auto__,f__$1))
;
return ((function (switch__24381__auto__,c__24471__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24382__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24382__auto____0 = (function (){
var statearr_24997 = [null,null,null,null,null,null,null];
(statearr_24997[(0)] = cljs$core$async$transduce_$_state_machine__24382__auto__);

(statearr_24997[(1)] = (1));

return statearr_24997;
});
var cljs$core$async$transduce_$_state_machine__24382__auto____1 = (function (state_24995){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_24995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24998){if((e24998 instanceof Object)){
var ex__24385__auto__ = e24998;
var statearr_24999_25001 = state_24995;
(statearr_24999_25001[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25002 = state_24995;
state_24995 = G__25002;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24382__auto__ = function(state_24995){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24382__auto____1.call(this,state_24995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24382__auto____0;
cljs$core$async$transduce_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24382__auto____1;
return cljs$core$async$transduce_$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto__,f__$1))
})();
var state__24473__auto__ = (function (){var statearr_25000 = f__24472__auto__.call(null);
(statearr_25000[(6)] = c__24471__auto__);

return statearr_25000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto__,f__$1))
);

return c__24471__auto__;
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
var G__25004 = arguments.length;
switch (G__25004) {
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
var c__24471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto__){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto__){
return (function (state_25029){
var state_val_25030 = (state_25029[(1)]);
if((state_val_25030 === (7))){
var inst_25011 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
var statearr_25031_25052 = state_25029__$1;
(statearr_25031_25052[(2)] = inst_25011);

(statearr_25031_25052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (1))){
var inst_25005 = cljs.core.seq.call(null,coll);
var inst_25006 = inst_25005;
var state_25029__$1 = (function (){var statearr_25032 = state_25029;
(statearr_25032[(7)] = inst_25006);

return statearr_25032;
})();
var statearr_25033_25053 = state_25029__$1;
(statearr_25033_25053[(2)] = null);

(statearr_25033_25053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (4))){
var inst_25006 = (state_25029[(7)]);
var inst_25009 = cljs.core.first.call(null,inst_25006);
var state_25029__$1 = state_25029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25029__$1,(7),ch,inst_25009);
} else {
if((state_val_25030 === (13))){
var inst_25023 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
var statearr_25034_25054 = state_25029__$1;
(statearr_25034_25054[(2)] = inst_25023);

(statearr_25034_25054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (6))){
var inst_25014 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
if(cljs.core.truth_(inst_25014)){
var statearr_25035_25055 = state_25029__$1;
(statearr_25035_25055[(1)] = (8));

} else {
var statearr_25036_25056 = state_25029__$1;
(statearr_25036_25056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (3))){
var inst_25027 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25029__$1,inst_25027);
} else {
if((state_val_25030 === (12))){
var state_25029__$1 = state_25029;
var statearr_25037_25057 = state_25029__$1;
(statearr_25037_25057[(2)] = null);

(statearr_25037_25057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (2))){
var inst_25006 = (state_25029[(7)]);
var state_25029__$1 = state_25029;
if(cljs.core.truth_(inst_25006)){
var statearr_25038_25058 = state_25029__$1;
(statearr_25038_25058[(1)] = (4));

} else {
var statearr_25039_25059 = state_25029__$1;
(statearr_25039_25059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (11))){
var inst_25020 = cljs.core.async.close_BANG_.call(null,ch);
var state_25029__$1 = state_25029;
var statearr_25040_25060 = state_25029__$1;
(statearr_25040_25060[(2)] = inst_25020);

(statearr_25040_25060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (9))){
var state_25029__$1 = state_25029;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25041_25061 = state_25029__$1;
(statearr_25041_25061[(1)] = (11));

} else {
var statearr_25042_25062 = state_25029__$1;
(statearr_25042_25062[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (5))){
var inst_25006 = (state_25029[(7)]);
var state_25029__$1 = state_25029;
var statearr_25043_25063 = state_25029__$1;
(statearr_25043_25063[(2)] = inst_25006);

(statearr_25043_25063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (10))){
var inst_25025 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
var statearr_25044_25064 = state_25029__$1;
(statearr_25044_25064[(2)] = inst_25025);

(statearr_25044_25064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (8))){
var inst_25006 = (state_25029[(7)]);
var inst_25016 = cljs.core.next.call(null,inst_25006);
var inst_25006__$1 = inst_25016;
var state_25029__$1 = (function (){var statearr_25045 = state_25029;
(statearr_25045[(7)] = inst_25006__$1);

return statearr_25045;
})();
var statearr_25046_25065 = state_25029__$1;
(statearr_25046_25065[(2)] = null);

(statearr_25046_25065[(1)] = (2));


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
});})(c__24471__auto__))
;
return ((function (switch__24381__auto__,c__24471__auto__){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_25047 = [null,null,null,null,null,null,null,null];
(statearr_25047[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_25047[(1)] = (1));

return statearr_25047;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_25029){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_25029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25048){if((e25048 instanceof Object)){
var ex__24385__auto__ = e25048;
var statearr_25049_25066 = state_25029;
(statearr_25049_25066[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25067 = state_25029;
state_25029 = G__25067;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_25029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_25029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto__))
})();
var state__24473__auto__ = (function (){var statearr_25050 = f__24472__auto__.call(null);
(statearr_25050[(6)] = c__24471__auto__);

return statearr_25050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto__))
);

return c__24471__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25068 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25068 = (function (ch,cs,meta25069){
this.ch = ch;
this.cs = cs;
this.meta25069 = meta25069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25070,meta25069__$1){
var self__ = this;
var _25070__$1 = this;
return (new cljs.core.async.t_cljs$core$async25068(self__.ch,self__.cs,meta25069__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25070){
var self__ = this;
var _25070__$1 = this;
return self__.meta25069;
});})(cs))
;

cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25068.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25069","meta25069",-1917869082,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25068.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25068";

cljs.core.async.t_cljs$core$async25068.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25068");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25068.
 */
cljs.core.async.__GT_t_cljs$core$async25068 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25068(ch__$1,cs__$1,meta25069){
return (new cljs.core.async.t_cljs$core$async25068(ch__$1,cs__$1,meta25069));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25068(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24471__auto___25290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___25290,cs,m,dchan,dctr,done){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___25290,cs,m,dchan,dctr,done){
return (function (state_25205){
var state_val_25206 = (state_25205[(1)]);
if((state_val_25206 === (7))){
var inst_25201 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25207_25291 = state_25205__$1;
(statearr_25207_25291[(2)] = inst_25201);

(statearr_25207_25291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (20))){
var inst_25104 = (state_25205[(7)]);
var inst_25116 = cljs.core.first.call(null,inst_25104);
var inst_25117 = cljs.core.nth.call(null,inst_25116,(0),null);
var inst_25118 = cljs.core.nth.call(null,inst_25116,(1),null);
var state_25205__$1 = (function (){var statearr_25208 = state_25205;
(statearr_25208[(8)] = inst_25117);

return statearr_25208;
})();
if(cljs.core.truth_(inst_25118)){
var statearr_25209_25292 = state_25205__$1;
(statearr_25209_25292[(1)] = (22));

} else {
var statearr_25210_25293 = state_25205__$1;
(statearr_25210_25293[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (27))){
var inst_25153 = (state_25205[(9)]);
var inst_25146 = (state_25205[(10)]);
var inst_25148 = (state_25205[(11)]);
var inst_25073 = (state_25205[(12)]);
var inst_25153__$1 = cljs.core._nth.call(null,inst_25146,inst_25148);
var inst_25154 = cljs.core.async.put_BANG_.call(null,inst_25153__$1,inst_25073,done);
var state_25205__$1 = (function (){var statearr_25211 = state_25205;
(statearr_25211[(9)] = inst_25153__$1);

return statearr_25211;
})();
if(cljs.core.truth_(inst_25154)){
var statearr_25212_25294 = state_25205__$1;
(statearr_25212_25294[(1)] = (30));

} else {
var statearr_25213_25295 = state_25205__$1;
(statearr_25213_25295[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (1))){
var state_25205__$1 = state_25205;
var statearr_25214_25296 = state_25205__$1;
(statearr_25214_25296[(2)] = null);

(statearr_25214_25296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (24))){
var inst_25104 = (state_25205[(7)]);
var inst_25123 = (state_25205[(2)]);
var inst_25124 = cljs.core.next.call(null,inst_25104);
var inst_25082 = inst_25124;
var inst_25083 = null;
var inst_25084 = (0);
var inst_25085 = (0);
var state_25205__$1 = (function (){var statearr_25215 = state_25205;
(statearr_25215[(13)] = inst_25084);

(statearr_25215[(14)] = inst_25085);

(statearr_25215[(15)] = inst_25083);

(statearr_25215[(16)] = inst_25082);

(statearr_25215[(17)] = inst_25123);

return statearr_25215;
})();
var statearr_25216_25297 = state_25205__$1;
(statearr_25216_25297[(2)] = null);

(statearr_25216_25297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (39))){
var state_25205__$1 = state_25205;
var statearr_25220_25298 = state_25205__$1;
(statearr_25220_25298[(2)] = null);

(statearr_25220_25298[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (4))){
var inst_25073 = (state_25205[(12)]);
var inst_25073__$1 = (state_25205[(2)]);
var inst_25074 = (inst_25073__$1 == null);
var state_25205__$1 = (function (){var statearr_25221 = state_25205;
(statearr_25221[(12)] = inst_25073__$1);

return statearr_25221;
})();
if(cljs.core.truth_(inst_25074)){
var statearr_25222_25299 = state_25205__$1;
(statearr_25222_25299[(1)] = (5));

} else {
var statearr_25223_25300 = state_25205__$1;
(statearr_25223_25300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (15))){
var inst_25084 = (state_25205[(13)]);
var inst_25085 = (state_25205[(14)]);
var inst_25083 = (state_25205[(15)]);
var inst_25082 = (state_25205[(16)]);
var inst_25100 = (state_25205[(2)]);
var inst_25101 = (inst_25085 + (1));
var tmp25217 = inst_25084;
var tmp25218 = inst_25083;
var tmp25219 = inst_25082;
var inst_25082__$1 = tmp25219;
var inst_25083__$1 = tmp25218;
var inst_25084__$1 = tmp25217;
var inst_25085__$1 = inst_25101;
var state_25205__$1 = (function (){var statearr_25224 = state_25205;
(statearr_25224[(13)] = inst_25084__$1);

(statearr_25224[(14)] = inst_25085__$1);

(statearr_25224[(15)] = inst_25083__$1);

(statearr_25224[(18)] = inst_25100);

(statearr_25224[(16)] = inst_25082__$1);

return statearr_25224;
})();
var statearr_25225_25301 = state_25205__$1;
(statearr_25225_25301[(2)] = null);

(statearr_25225_25301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (21))){
var inst_25127 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25229_25302 = state_25205__$1;
(statearr_25229_25302[(2)] = inst_25127);

(statearr_25229_25302[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (31))){
var inst_25153 = (state_25205[(9)]);
var inst_25157 = done.call(null,null);
var inst_25158 = cljs.core.async.untap_STAR_.call(null,m,inst_25153);
var state_25205__$1 = (function (){var statearr_25230 = state_25205;
(statearr_25230[(19)] = inst_25157);

return statearr_25230;
})();
var statearr_25231_25303 = state_25205__$1;
(statearr_25231_25303[(2)] = inst_25158);

(statearr_25231_25303[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (32))){
var inst_25147 = (state_25205[(20)]);
var inst_25146 = (state_25205[(10)]);
var inst_25148 = (state_25205[(11)]);
var inst_25145 = (state_25205[(21)]);
var inst_25160 = (state_25205[(2)]);
var inst_25161 = (inst_25148 + (1));
var tmp25226 = inst_25147;
var tmp25227 = inst_25146;
var tmp25228 = inst_25145;
var inst_25145__$1 = tmp25228;
var inst_25146__$1 = tmp25227;
var inst_25147__$1 = tmp25226;
var inst_25148__$1 = inst_25161;
var state_25205__$1 = (function (){var statearr_25232 = state_25205;
(statearr_25232[(22)] = inst_25160);

(statearr_25232[(20)] = inst_25147__$1);

(statearr_25232[(10)] = inst_25146__$1);

(statearr_25232[(11)] = inst_25148__$1);

(statearr_25232[(21)] = inst_25145__$1);

return statearr_25232;
})();
var statearr_25233_25304 = state_25205__$1;
(statearr_25233_25304[(2)] = null);

(statearr_25233_25304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (40))){
var inst_25173 = (state_25205[(23)]);
var inst_25177 = done.call(null,null);
var inst_25178 = cljs.core.async.untap_STAR_.call(null,m,inst_25173);
var state_25205__$1 = (function (){var statearr_25234 = state_25205;
(statearr_25234[(24)] = inst_25177);

return statearr_25234;
})();
var statearr_25235_25305 = state_25205__$1;
(statearr_25235_25305[(2)] = inst_25178);

(statearr_25235_25305[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (33))){
var inst_25164 = (state_25205[(25)]);
var inst_25166 = cljs.core.chunked_seq_QMARK_.call(null,inst_25164);
var state_25205__$1 = state_25205;
if(inst_25166){
var statearr_25236_25306 = state_25205__$1;
(statearr_25236_25306[(1)] = (36));

} else {
var statearr_25237_25307 = state_25205__$1;
(statearr_25237_25307[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (13))){
var inst_25094 = (state_25205[(26)]);
var inst_25097 = cljs.core.async.close_BANG_.call(null,inst_25094);
var state_25205__$1 = state_25205;
var statearr_25238_25308 = state_25205__$1;
(statearr_25238_25308[(2)] = inst_25097);

(statearr_25238_25308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (22))){
var inst_25117 = (state_25205[(8)]);
var inst_25120 = cljs.core.async.close_BANG_.call(null,inst_25117);
var state_25205__$1 = state_25205;
var statearr_25239_25309 = state_25205__$1;
(statearr_25239_25309[(2)] = inst_25120);

(statearr_25239_25309[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (36))){
var inst_25164 = (state_25205[(25)]);
var inst_25168 = cljs.core.chunk_first.call(null,inst_25164);
var inst_25169 = cljs.core.chunk_rest.call(null,inst_25164);
var inst_25170 = cljs.core.count.call(null,inst_25168);
var inst_25145 = inst_25169;
var inst_25146 = inst_25168;
var inst_25147 = inst_25170;
var inst_25148 = (0);
var state_25205__$1 = (function (){var statearr_25240 = state_25205;
(statearr_25240[(20)] = inst_25147);

(statearr_25240[(10)] = inst_25146);

(statearr_25240[(11)] = inst_25148);

(statearr_25240[(21)] = inst_25145);

return statearr_25240;
})();
var statearr_25241_25310 = state_25205__$1;
(statearr_25241_25310[(2)] = null);

(statearr_25241_25310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (41))){
var inst_25164 = (state_25205[(25)]);
var inst_25180 = (state_25205[(2)]);
var inst_25181 = cljs.core.next.call(null,inst_25164);
var inst_25145 = inst_25181;
var inst_25146 = null;
var inst_25147 = (0);
var inst_25148 = (0);
var state_25205__$1 = (function (){var statearr_25242 = state_25205;
(statearr_25242[(20)] = inst_25147);

(statearr_25242[(10)] = inst_25146);

(statearr_25242[(11)] = inst_25148);

(statearr_25242[(21)] = inst_25145);

(statearr_25242[(27)] = inst_25180);

return statearr_25242;
})();
var statearr_25243_25311 = state_25205__$1;
(statearr_25243_25311[(2)] = null);

(statearr_25243_25311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (43))){
var state_25205__$1 = state_25205;
var statearr_25244_25312 = state_25205__$1;
(statearr_25244_25312[(2)] = null);

(statearr_25244_25312[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (29))){
var inst_25189 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25245_25313 = state_25205__$1;
(statearr_25245_25313[(2)] = inst_25189);

(statearr_25245_25313[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (44))){
var inst_25198 = (state_25205[(2)]);
var state_25205__$1 = (function (){var statearr_25246 = state_25205;
(statearr_25246[(28)] = inst_25198);

return statearr_25246;
})();
var statearr_25247_25314 = state_25205__$1;
(statearr_25247_25314[(2)] = null);

(statearr_25247_25314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (6))){
var inst_25137 = (state_25205[(29)]);
var inst_25136 = cljs.core.deref.call(null,cs);
var inst_25137__$1 = cljs.core.keys.call(null,inst_25136);
var inst_25138 = cljs.core.count.call(null,inst_25137__$1);
var inst_25139 = cljs.core.reset_BANG_.call(null,dctr,inst_25138);
var inst_25144 = cljs.core.seq.call(null,inst_25137__$1);
var inst_25145 = inst_25144;
var inst_25146 = null;
var inst_25147 = (0);
var inst_25148 = (0);
var state_25205__$1 = (function (){var statearr_25248 = state_25205;
(statearr_25248[(20)] = inst_25147);

(statearr_25248[(10)] = inst_25146);

(statearr_25248[(11)] = inst_25148);

(statearr_25248[(30)] = inst_25139);

(statearr_25248[(21)] = inst_25145);

(statearr_25248[(29)] = inst_25137__$1);

return statearr_25248;
})();
var statearr_25249_25315 = state_25205__$1;
(statearr_25249_25315[(2)] = null);

(statearr_25249_25315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (28))){
var inst_25164 = (state_25205[(25)]);
var inst_25145 = (state_25205[(21)]);
var inst_25164__$1 = cljs.core.seq.call(null,inst_25145);
var state_25205__$1 = (function (){var statearr_25250 = state_25205;
(statearr_25250[(25)] = inst_25164__$1);

return statearr_25250;
})();
if(inst_25164__$1){
var statearr_25251_25316 = state_25205__$1;
(statearr_25251_25316[(1)] = (33));

} else {
var statearr_25252_25317 = state_25205__$1;
(statearr_25252_25317[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (25))){
var inst_25147 = (state_25205[(20)]);
var inst_25148 = (state_25205[(11)]);
var inst_25150 = (inst_25148 < inst_25147);
var inst_25151 = inst_25150;
var state_25205__$1 = state_25205;
if(cljs.core.truth_(inst_25151)){
var statearr_25253_25318 = state_25205__$1;
(statearr_25253_25318[(1)] = (27));

} else {
var statearr_25254_25319 = state_25205__$1;
(statearr_25254_25319[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (34))){
var state_25205__$1 = state_25205;
var statearr_25255_25320 = state_25205__$1;
(statearr_25255_25320[(2)] = null);

(statearr_25255_25320[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (17))){
var state_25205__$1 = state_25205;
var statearr_25256_25321 = state_25205__$1;
(statearr_25256_25321[(2)] = null);

(statearr_25256_25321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (3))){
var inst_25203 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25205__$1,inst_25203);
} else {
if((state_val_25206 === (12))){
var inst_25132 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25257_25322 = state_25205__$1;
(statearr_25257_25322[(2)] = inst_25132);

(statearr_25257_25322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (2))){
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25205__$1,(4),ch);
} else {
if((state_val_25206 === (23))){
var state_25205__$1 = state_25205;
var statearr_25258_25323 = state_25205__$1;
(statearr_25258_25323[(2)] = null);

(statearr_25258_25323[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (35))){
var inst_25187 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25259_25324 = state_25205__$1;
(statearr_25259_25324[(2)] = inst_25187);

(statearr_25259_25324[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (19))){
var inst_25104 = (state_25205[(7)]);
var inst_25108 = cljs.core.chunk_first.call(null,inst_25104);
var inst_25109 = cljs.core.chunk_rest.call(null,inst_25104);
var inst_25110 = cljs.core.count.call(null,inst_25108);
var inst_25082 = inst_25109;
var inst_25083 = inst_25108;
var inst_25084 = inst_25110;
var inst_25085 = (0);
var state_25205__$1 = (function (){var statearr_25260 = state_25205;
(statearr_25260[(13)] = inst_25084);

(statearr_25260[(14)] = inst_25085);

(statearr_25260[(15)] = inst_25083);

(statearr_25260[(16)] = inst_25082);

return statearr_25260;
})();
var statearr_25261_25325 = state_25205__$1;
(statearr_25261_25325[(2)] = null);

(statearr_25261_25325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (11))){
var inst_25104 = (state_25205[(7)]);
var inst_25082 = (state_25205[(16)]);
var inst_25104__$1 = cljs.core.seq.call(null,inst_25082);
var state_25205__$1 = (function (){var statearr_25262 = state_25205;
(statearr_25262[(7)] = inst_25104__$1);

return statearr_25262;
})();
if(inst_25104__$1){
var statearr_25263_25326 = state_25205__$1;
(statearr_25263_25326[(1)] = (16));

} else {
var statearr_25264_25327 = state_25205__$1;
(statearr_25264_25327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (9))){
var inst_25134 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25265_25328 = state_25205__$1;
(statearr_25265_25328[(2)] = inst_25134);

(statearr_25265_25328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (5))){
var inst_25080 = cljs.core.deref.call(null,cs);
var inst_25081 = cljs.core.seq.call(null,inst_25080);
var inst_25082 = inst_25081;
var inst_25083 = null;
var inst_25084 = (0);
var inst_25085 = (0);
var state_25205__$1 = (function (){var statearr_25266 = state_25205;
(statearr_25266[(13)] = inst_25084);

(statearr_25266[(14)] = inst_25085);

(statearr_25266[(15)] = inst_25083);

(statearr_25266[(16)] = inst_25082);

return statearr_25266;
})();
var statearr_25267_25329 = state_25205__$1;
(statearr_25267_25329[(2)] = null);

(statearr_25267_25329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (14))){
var state_25205__$1 = state_25205;
var statearr_25268_25330 = state_25205__$1;
(statearr_25268_25330[(2)] = null);

(statearr_25268_25330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (45))){
var inst_25195 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25269_25331 = state_25205__$1;
(statearr_25269_25331[(2)] = inst_25195);

(statearr_25269_25331[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (26))){
var inst_25137 = (state_25205[(29)]);
var inst_25191 = (state_25205[(2)]);
var inst_25192 = cljs.core.seq.call(null,inst_25137);
var state_25205__$1 = (function (){var statearr_25270 = state_25205;
(statearr_25270[(31)] = inst_25191);

return statearr_25270;
})();
if(inst_25192){
var statearr_25271_25332 = state_25205__$1;
(statearr_25271_25332[(1)] = (42));

} else {
var statearr_25272_25333 = state_25205__$1;
(statearr_25272_25333[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (16))){
var inst_25104 = (state_25205[(7)]);
var inst_25106 = cljs.core.chunked_seq_QMARK_.call(null,inst_25104);
var state_25205__$1 = state_25205;
if(inst_25106){
var statearr_25273_25334 = state_25205__$1;
(statearr_25273_25334[(1)] = (19));

} else {
var statearr_25274_25335 = state_25205__$1;
(statearr_25274_25335[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (38))){
var inst_25184 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25275_25336 = state_25205__$1;
(statearr_25275_25336[(2)] = inst_25184);

(statearr_25275_25336[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (30))){
var state_25205__$1 = state_25205;
var statearr_25276_25337 = state_25205__$1;
(statearr_25276_25337[(2)] = null);

(statearr_25276_25337[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (10))){
var inst_25085 = (state_25205[(14)]);
var inst_25083 = (state_25205[(15)]);
var inst_25093 = cljs.core._nth.call(null,inst_25083,inst_25085);
var inst_25094 = cljs.core.nth.call(null,inst_25093,(0),null);
var inst_25095 = cljs.core.nth.call(null,inst_25093,(1),null);
var state_25205__$1 = (function (){var statearr_25277 = state_25205;
(statearr_25277[(26)] = inst_25094);

return statearr_25277;
})();
if(cljs.core.truth_(inst_25095)){
var statearr_25278_25338 = state_25205__$1;
(statearr_25278_25338[(1)] = (13));

} else {
var statearr_25279_25339 = state_25205__$1;
(statearr_25279_25339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (18))){
var inst_25130 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25280_25340 = state_25205__$1;
(statearr_25280_25340[(2)] = inst_25130);

(statearr_25280_25340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (42))){
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25205__$1,(45),dchan);
} else {
if((state_val_25206 === (37))){
var inst_25173 = (state_25205[(23)]);
var inst_25164 = (state_25205[(25)]);
var inst_25073 = (state_25205[(12)]);
var inst_25173__$1 = cljs.core.first.call(null,inst_25164);
var inst_25174 = cljs.core.async.put_BANG_.call(null,inst_25173__$1,inst_25073,done);
var state_25205__$1 = (function (){var statearr_25281 = state_25205;
(statearr_25281[(23)] = inst_25173__$1);

return statearr_25281;
})();
if(cljs.core.truth_(inst_25174)){
var statearr_25282_25341 = state_25205__$1;
(statearr_25282_25341[(1)] = (39));

} else {
var statearr_25283_25342 = state_25205__$1;
(statearr_25283_25342[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (8))){
var inst_25084 = (state_25205[(13)]);
var inst_25085 = (state_25205[(14)]);
var inst_25087 = (inst_25085 < inst_25084);
var inst_25088 = inst_25087;
var state_25205__$1 = state_25205;
if(cljs.core.truth_(inst_25088)){
var statearr_25284_25343 = state_25205__$1;
(statearr_25284_25343[(1)] = (10));

} else {
var statearr_25285_25344 = state_25205__$1;
(statearr_25285_25344[(1)] = (11));

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
});})(c__24471__auto___25290,cs,m,dchan,dctr,done))
;
return ((function (switch__24381__auto__,c__24471__auto___25290,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24382__auto__ = null;
var cljs$core$async$mult_$_state_machine__24382__auto____0 = (function (){
var statearr_25286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25286[(0)] = cljs$core$async$mult_$_state_machine__24382__auto__);

(statearr_25286[(1)] = (1));

return statearr_25286;
});
var cljs$core$async$mult_$_state_machine__24382__auto____1 = (function (state_25205){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_25205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25287){if((e25287 instanceof Object)){
var ex__24385__auto__ = e25287;
var statearr_25288_25345 = state_25205;
(statearr_25288_25345[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25346 = state_25205;
state_25205 = G__25346;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24382__auto__ = function(state_25205){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24382__auto____1.call(this,state_25205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24382__auto____0;
cljs$core$async$mult_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24382__auto____1;
return cljs$core$async$mult_$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___25290,cs,m,dchan,dctr,done))
})();
var state__24473__auto__ = (function (){var statearr_25289 = f__24472__auto__.call(null);
(statearr_25289[(6)] = c__24471__auto___25290);

return statearr_25289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___25290,cs,m,dchan,dctr,done))
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
var G__25348 = arguments.length;
switch (G__25348) {
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
var len__4499__auto___25360 = arguments.length;
var i__4500__auto___25361 = (0);
while(true){
if((i__4500__auto___25361 < len__4499__auto___25360)){
args__4502__auto__.push((arguments[i__4500__auto___25361]));

var G__25362 = (i__4500__auto___25361 + (1));
i__4500__auto___25361 = G__25362;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25354){
var map__25355 = p__25354;
var map__25355__$1 = ((((!((map__25355 == null)))?(((((map__25355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25355):map__25355);
var opts = map__25355__$1;
var statearr_25357_25363 = state;
(statearr_25357_25363[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25355,map__25355__$1,opts){
return (function (val){
var statearr_25358_25364 = state;
(statearr_25358_25364[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25355,map__25355__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25359_25365 = state;
(statearr_25359_25365[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25350){
var G__25351 = cljs.core.first.call(null,seq25350);
var seq25350__$1 = cljs.core.next.call(null,seq25350);
var G__25352 = cljs.core.first.call(null,seq25350__$1);
var seq25350__$2 = cljs.core.next.call(null,seq25350__$1);
var G__25353 = cljs.core.first.call(null,seq25350__$2);
var seq25350__$3 = cljs.core.next.call(null,seq25350__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25351,G__25352,G__25353,seq25350__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25366 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25367){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25367 = meta25367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25368,meta25367__$1){
var self__ = this;
var _25368__$1 = this;
return (new cljs.core.async.t_cljs$core$async25366(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25367__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25368){
var self__ = this;
var _25368__$1 = this;
return self__.meta25367;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25366.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25367","meta25367",1093706797,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25366";

cljs.core.async.t_cljs$core$async25366.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25366");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25366.
 */
cljs.core.async.__GT_t_cljs$core$async25366 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25366(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25367){
return (new cljs.core.async.t_cljs$core$async25366(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25367));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25366(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24471__auto___25530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___25530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___25530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25470){
var state_val_25471 = (state_25470[(1)]);
if((state_val_25471 === (7))){
var inst_25385 = (state_25470[(2)]);
var state_25470__$1 = state_25470;
var statearr_25472_25531 = state_25470__$1;
(statearr_25472_25531[(2)] = inst_25385);

(statearr_25472_25531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (20))){
var inst_25397 = (state_25470[(7)]);
var state_25470__$1 = state_25470;
var statearr_25473_25532 = state_25470__$1;
(statearr_25473_25532[(2)] = inst_25397);

(statearr_25473_25532[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (27))){
var state_25470__$1 = state_25470;
var statearr_25474_25533 = state_25470__$1;
(statearr_25474_25533[(2)] = null);

(statearr_25474_25533[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (1))){
var inst_25372 = (state_25470[(8)]);
var inst_25372__$1 = calc_state.call(null);
var inst_25374 = (inst_25372__$1 == null);
var inst_25375 = cljs.core.not.call(null,inst_25374);
var state_25470__$1 = (function (){var statearr_25475 = state_25470;
(statearr_25475[(8)] = inst_25372__$1);

return statearr_25475;
})();
if(inst_25375){
var statearr_25476_25534 = state_25470__$1;
(statearr_25476_25534[(1)] = (2));

} else {
var statearr_25477_25535 = state_25470__$1;
(statearr_25477_25535[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (24))){
var inst_25421 = (state_25470[(9)]);
var inst_25430 = (state_25470[(10)]);
var inst_25444 = (state_25470[(11)]);
var inst_25444__$1 = inst_25421.call(null,inst_25430);
var state_25470__$1 = (function (){var statearr_25478 = state_25470;
(statearr_25478[(11)] = inst_25444__$1);

return statearr_25478;
})();
if(cljs.core.truth_(inst_25444__$1)){
var statearr_25479_25536 = state_25470__$1;
(statearr_25479_25536[(1)] = (29));

} else {
var statearr_25480_25537 = state_25470__$1;
(statearr_25480_25537[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (4))){
var inst_25388 = (state_25470[(2)]);
var state_25470__$1 = state_25470;
if(cljs.core.truth_(inst_25388)){
var statearr_25481_25538 = state_25470__$1;
(statearr_25481_25538[(1)] = (8));

} else {
var statearr_25482_25539 = state_25470__$1;
(statearr_25482_25539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (15))){
var inst_25415 = (state_25470[(2)]);
var state_25470__$1 = state_25470;
if(cljs.core.truth_(inst_25415)){
var statearr_25483_25540 = state_25470__$1;
(statearr_25483_25540[(1)] = (19));

} else {
var statearr_25484_25541 = state_25470__$1;
(statearr_25484_25541[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (21))){
var inst_25420 = (state_25470[(12)]);
var inst_25420__$1 = (state_25470[(2)]);
var inst_25421 = cljs.core.get.call(null,inst_25420__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25422 = cljs.core.get.call(null,inst_25420__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25423 = cljs.core.get.call(null,inst_25420__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25470__$1 = (function (){var statearr_25485 = state_25470;
(statearr_25485[(13)] = inst_25422);

(statearr_25485[(9)] = inst_25421);

(statearr_25485[(12)] = inst_25420__$1);

return statearr_25485;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25470__$1,(22),inst_25423);
} else {
if((state_val_25471 === (31))){
var inst_25452 = (state_25470[(2)]);
var state_25470__$1 = state_25470;
if(cljs.core.truth_(inst_25452)){
var statearr_25486_25542 = state_25470__$1;
(statearr_25486_25542[(1)] = (32));

} else {
var statearr_25487_25543 = state_25470__$1;
(statearr_25487_25543[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (32))){
var inst_25429 = (state_25470[(14)]);
var state_25470__$1 = state_25470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25470__$1,(35),out,inst_25429);
} else {
if((state_val_25471 === (33))){
var inst_25420 = (state_25470[(12)]);
var inst_25397 = inst_25420;
var state_25470__$1 = (function (){var statearr_25488 = state_25470;
(statearr_25488[(7)] = inst_25397);

return statearr_25488;
})();
var statearr_25489_25544 = state_25470__$1;
(statearr_25489_25544[(2)] = null);

(statearr_25489_25544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (13))){
var inst_25397 = (state_25470[(7)]);
var inst_25404 = inst_25397.cljs$lang$protocol_mask$partition0$;
var inst_25405 = (inst_25404 & (64));
var inst_25406 = inst_25397.cljs$core$ISeq$;
var inst_25407 = (cljs.core.PROTOCOL_SENTINEL === inst_25406);
var inst_25408 = ((inst_25405) || (inst_25407));
var state_25470__$1 = state_25470;
if(cljs.core.truth_(inst_25408)){
var statearr_25490_25545 = state_25470__$1;
(statearr_25490_25545[(1)] = (16));

} else {
var statearr_25491_25546 = state_25470__$1;
(statearr_25491_25546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (22))){
var inst_25430 = (state_25470[(10)]);
var inst_25429 = (state_25470[(14)]);
var inst_25428 = (state_25470[(2)]);
var inst_25429__$1 = cljs.core.nth.call(null,inst_25428,(0),null);
var inst_25430__$1 = cljs.core.nth.call(null,inst_25428,(1),null);
var inst_25431 = (inst_25429__$1 == null);
var inst_25432 = cljs.core._EQ_.call(null,inst_25430__$1,change);
var inst_25433 = ((inst_25431) || (inst_25432));
var state_25470__$1 = (function (){var statearr_25492 = state_25470;
(statearr_25492[(10)] = inst_25430__$1);

(statearr_25492[(14)] = inst_25429__$1);

return statearr_25492;
})();
if(cljs.core.truth_(inst_25433)){
var statearr_25493_25547 = state_25470__$1;
(statearr_25493_25547[(1)] = (23));

} else {
var statearr_25494_25548 = state_25470__$1;
(statearr_25494_25548[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (36))){
var inst_25420 = (state_25470[(12)]);
var inst_25397 = inst_25420;
var state_25470__$1 = (function (){var statearr_25495 = state_25470;
(statearr_25495[(7)] = inst_25397);

return statearr_25495;
})();
var statearr_25496_25549 = state_25470__$1;
(statearr_25496_25549[(2)] = null);

(statearr_25496_25549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (29))){
var inst_25444 = (state_25470[(11)]);
var state_25470__$1 = state_25470;
var statearr_25497_25550 = state_25470__$1;
(statearr_25497_25550[(2)] = inst_25444);

(statearr_25497_25550[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (6))){
var state_25470__$1 = state_25470;
var statearr_25498_25551 = state_25470__$1;
(statearr_25498_25551[(2)] = false);

(statearr_25498_25551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (28))){
var inst_25440 = (state_25470[(2)]);
var inst_25441 = calc_state.call(null);
var inst_25397 = inst_25441;
var state_25470__$1 = (function (){var statearr_25499 = state_25470;
(statearr_25499[(15)] = inst_25440);

(statearr_25499[(7)] = inst_25397);

return statearr_25499;
})();
var statearr_25500_25552 = state_25470__$1;
(statearr_25500_25552[(2)] = null);

(statearr_25500_25552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (25))){
var inst_25466 = (state_25470[(2)]);
var state_25470__$1 = state_25470;
var statearr_25501_25553 = state_25470__$1;
(statearr_25501_25553[(2)] = inst_25466);

(statearr_25501_25553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (34))){
var inst_25464 = (state_25470[(2)]);
var state_25470__$1 = state_25470;
var statearr_25502_25554 = state_25470__$1;
(statearr_25502_25554[(2)] = inst_25464);

(statearr_25502_25554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (17))){
var state_25470__$1 = state_25470;
var statearr_25503_25555 = state_25470__$1;
(statearr_25503_25555[(2)] = false);

(statearr_25503_25555[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (3))){
var state_25470__$1 = state_25470;
var statearr_25504_25556 = state_25470__$1;
(statearr_25504_25556[(2)] = false);

(statearr_25504_25556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (12))){
var inst_25468 = (state_25470[(2)]);
var state_25470__$1 = state_25470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25470__$1,inst_25468);
} else {
if((state_val_25471 === (2))){
var inst_25372 = (state_25470[(8)]);
var inst_25377 = inst_25372.cljs$lang$protocol_mask$partition0$;
var inst_25378 = (inst_25377 & (64));
var inst_25379 = inst_25372.cljs$core$ISeq$;
var inst_25380 = (cljs.core.PROTOCOL_SENTINEL === inst_25379);
var inst_25381 = ((inst_25378) || (inst_25380));
var state_25470__$1 = state_25470;
if(cljs.core.truth_(inst_25381)){
var statearr_25505_25557 = state_25470__$1;
(statearr_25505_25557[(1)] = (5));

} else {
var statearr_25506_25558 = state_25470__$1;
(statearr_25506_25558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (23))){
var inst_25429 = (state_25470[(14)]);
var inst_25435 = (inst_25429 == null);
var state_25470__$1 = state_25470;
if(cljs.core.truth_(inst_25435)){
var statearr_25507_25559 = state_25470__$1;
(statearr_25507_25559[(1)] = (26));

} else {
var statearr_25508_25560 = state_25470__$1;
(statearr_25508_25560[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (35))){
var inst_25455 = (state_25470[(2)]);
var state_25470__$1 = state_25470;
if(cljs.core.truth_(inst_25455)){
var statearr_25509_25561 = state_25470__$1;
(statearr_25509_25561[(1)] = (36));

} else {
var statearr_25510_25562 = state_25470__$1;
(statearr_25510_25562[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (19))){
var inst_25397 = (state_25470[(7)]);
var inst_25417 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25397);
var state_25470__$1 = state_25470;
var statearr_25511_25563 = state_25470__$1;
(statearr_25511_25563[(2)] = inst_25417);

(statearr_25511_25563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (11))){
var inst_25397 = (state_25470[(7)]);
var inst_25401 = (inst_25397 == null);
var inst_25402 = cljs.core.not.call(null,inst_25401);
var state_25470__$1 = state_25470;
if(inst_25402){
var statearr_25512_25564 = state_25470__$1;
(statearr_25512_25564[(1)] = (13));

} else {
var statearr_25513_25565 = state_25470__$1;
(statearr_25513_25565[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (9))){
var inst_25372 = (state_25470[(8)]);
var state_25470__$1 = state_25470;
var statearr_25514_25566 = state_25470__$1;
(statearr_25514_25566[(2)] = inst_25372);

(statearr_25514_25566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (5))){
var state_25470__$1 = state_25470;
var statearr_25515_25567 = state_25470__$1;
(statearr_25515_25567[(2)] = true);

(statearr_25515_25567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (14))){
var state_25470__$1 = state_25470;
var statearr_25516_25568 = state_25470__$1;
(statearr_25516_25568[(2)] = false);

(statearr_25516_25568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (26))){
var inst_25430 = (state_25470[(10)]);
var inst_25437 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25430);
var state_25470__$1 = state_25470;
var statearr_25517_25569 = state_25470__$1;
(statearr_25517_25569[(2)] = inst_25437);

(statearr_25517_25569[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (16))){
var state_25470__$1 = state_25470;
var statearr_25518_25570 = state_25470__$1;
(statearr_25518_25570[(2)] = true);

(statearr_25518_25570[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (38))){
var inst_25460 = (state_25470[(2)]);
var state_25470__$1 = state_25470;
var statearr_25519_25571 = state_25470__$1;
(statearr_25519_25571[(2)] = inst_25460);

(statearr_25519_25571[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (30))){
var inst_25422 = (state_25470[(13)]);
var inst_25421 = (state_25470[(9)]);
var inst_25430 = (state_25470[(10)]);
var inst_25447 = cljs.core.empty_QMARK_.call(null,inst_25421);
var inst_25448 = inst_25422.call(null,inst_25430);
var inst_25449 = cljs.core.not.call(null,inst_25448);
var inst_25450 = ((inst_25447) && (inst_25449));
var state_25470__$1 = state_25470;
var statearr_25520_25572 = state_25470__$1;
(statearr_25520_25572[(2)] = inst_25450);

(statearr_25520_25572[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (10))){
var inst_25372 = (state_25470[(8)]);
var inst_25393 = (state_25470[(2)]);
var inst_25394 = cljs.core.get.call(null,inst_25393,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25395 = cljs.core.get.call(null,inst_25393,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25396 = cljs.core.get.call(null,inst_25393,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25397 = inst_25372;
var state_25470__$1 = (function (){var statearr_25521 = state_25470;
(statearr_25521[(16)] = inst_25396);

(statearr_25521[(17)] = inst_25394);

(statearr_25521[(7)] = inst_25397);

(statearr_25521[(18)] = inst_25395);

return statearr_25521;
})();
var statearr_25522_25573 = state_25470__$1;
(statearr_25522_25573[(2)] = null);

(statearr_25522_25573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (18))){
var inst_25412 = (state_25470[(2)]);
var state_25470__$1 = state_25470;
var statearr_25523_25574 = state_25470__$1;
(statearr_25523_25574[(2)] = inst_25412);

(statearr_25523_25574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (37))){
var state_25470__$1 = state_25470;
var statearr_25524_25575 = state_25470__$1;
(statearr_25524_25575[(2)] = null);

(statearr_25524_25575[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (8))){
var inst_25372 = (state_25470[(8)]);
var inst_25390 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25372);
var state_25470__$1 = state_25470;
var statearr_25525_25576 = state_25470__$1;
(statearr_25525_25576[(2)] = inst_25390);

(statearr_25525_25576[(1)] = (10));


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
});})(c__24471__auto___25530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24381__auto__,c__24471__auto___25530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24382__auto__ = null;
var cljs$core$async$mix_$_state_machine__24382__auto____0 = (function (){
var statearr_25526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25526[(0)] = cljs$core$async$mix_$_state_machine__24382__auto__);

(statearr_25526[(1)] = (1));

return statearr_25526;
});
var cljs$core$async$mix_$_state_machine__24382__auto____1 = (function (state_25470){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_25470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25527){if((e25527 instanceof Object)){
var ex__24385__auto__ = e25527;
var statearr_25528_25577 = state_25470;
(statearr_25528_25577[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25578 = state_25470;
state_25470 = G__25578;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24382__auto__ = function(state_25470){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24382__auto____1.call(this,state_25470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24382__auto____0;
cljs$core$async$mix_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24382__auto____1;
return cljs$core$async$mix_$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___25530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24473__auto__ = (function (){var statearr_25529 = f__24472__auto__.call(null);
(statearr_25529[(6)] = c__24471__auto___25530);

return statearr_25529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___25530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__25580 = arguments.length;
switch (G__25580) {
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
var G__25584 = arguments.length;
switch (G__25584) {
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
return (function (p1__25582_SHARP_){
if(cljs.core.truth_(p1__25582_SHARP_.call(null,topic))){
return p1__25582_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25582_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25585 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25586){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25586 = meta25586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25587,meta25586__$1){
var self__ = this;
var _25587__$1 = this;
return (new cljs.core.async.t_cljs$core$async25585(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25586__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25587){
var self__ = this;
var _25587__$1 = this;
return self__.meta25586;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25585.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25585.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25585.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25585.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25585.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25585.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25585.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25586","meta25586",-492612925,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25585";

cljs.core.async.t_cljs$core$async25585.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25585");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25585.
 */
cljs.core.async.__GT_t_cljs$core$async25585 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25585(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25586){
return (new cljs.core.async.t_cljs$core$async25585(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25586));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25585(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24471__auto___25705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___25705,mults,ensure_mult,p){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___25705,mults,ensure_mult,p){
return (function (state_25659){
var state_val_25660 = (state_25659[(1)]);
if((state_val_25660 === (7))){
var inst_25655 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
var statearr_25661_25706 = state_25659__$1;
(statearr_25661_25706[(2)] = inst_25655);

(statearr_25661_25706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (20))){
var state_25659__$1 = state_25659;
var statearr_25662_25707 = state_25659__$1;
(statearr_25662_25707[(2)] = null);

(statearr_25662_25707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (1))){
var state_25659__$1 = state_25659;
var statearr_25663_25708 = state_25659__$1;
(statearr_25663_25708[(2)] = null);

(statearr_25663_25708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (24))){
var inst_25638 = (state_25659[(7)]);
var inst_25647 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25638);
var state_25659__$1 = state_25659;
var statearr_25664_25709 = state_25659__$1;
(statearr_25664_25709[(2)] = inst_25647);

(statearr_25664_25709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (4))){
var inst_25590 = (state_25659[(8)]);
var inst_25590__$1 = (state_25659[(2)]);
var inst_25591 = (inst_25590__$1 == null);
var state_25659__$1 = (function (){var statearr_25665 = state_25659;
(statearr_25665[(8)] = inst_25590__$1);

return statearr_25665;
})();
if(cljs.core.truth_(inst_25591)){
var statearr_25666_25710 = state_25659__$1;
(statearr_25666_25710[(1)] = (5));

} else {
var statearr_25667_25711 = state_25659__$1;
(statearr_25667_25711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (15))){
var inst_25632 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
var statearr_25668_25712 = state_25659__$1;
(statearr_25668_25712[(2)] = inst_25632);

(statearr_25668_25712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (21))){
var inst_25652 = (state_25659[(2)]);
var state_25659__$1 = (function (){var statearr_25669 = state_25659;
(statearr_25669[(9)] = inst_25652);

return statearr_25669;
})();
var statearr_25670_25713 = state_25659__$1;
(statearr_25670_25713[(2)] = null);

(statearr_25670_25713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (13))){
var inst_25614 = (state_25659[(10)]);
var inst_25616 = cljs.core.chunked_seq_QMARK_.call(null,inst_25614);
var state_25659__$1 = state_25659;
if(inst_25616){
var statearr_25671_25714 = state_25659__$1;
(statearr_25671_25714[(1)] = (16));

} else {
var statearr_25672_25715 = state_25659__$1;
(statearr_25672_25715[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (22))){
var inst_25644 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
if(cljs.core.truth_(inst_25644)){
var statearr_25673_25716 = state_25659__$1;
(statearr_25673_25716[(1)] = (23));

} else {
var statearr_25674_25717 = state_25659__$1;
(statearr_25674_25717[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (6))){
var inst_25640 = (state_25659[(11)]);
var inst_25590 = (state_25659[(8)]);
var inst_25638 = (state_25659[(7)]);
var inst_25638__$1 = topic_fn.call(null,inst_25590);
var inst_25639 = cljs.core.deref.call(null,mults);
var inst_25640__$1 = cljs.core.get.call(null,inst_25639,inst_25638__$1);
var state_25659__$1 = (function (){var statearr_25675 = state_25659;
(statearr_25675[(11)] = inst_25640__$1);

(statearr_25675[(7)] = inst_25638__$1);

return statearr_25675;
})();
if(cljs.core.truth_(inst_25640__$1)){
var statearr_25676_25718 = state_25659__$1;
(statearr_25676_25718[(1)] = (19));

} else {
var statearr_25677_25719 = state_25659__$1;
(statearr_25677_25719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (25))){
var inst_25649 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
var statearr_25678_25720 = state_25659__$1;
(statearr_25678_25720[(2)] = inst_25649);

(statearr_25678_25720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (17))){
var inst_25614 = (state_25659[(10)]);
var inst_25623 = cljs.core.first.call(null,inst_25614);
var inst_25624 = cljs.core.async.muxch_STAR_.call(null,inst_25623);
var inst_25625 = cljs.core.async.close_BANG_.call(null,inst_25624);
var inst_25626 = cljs.core.next.call(null,inst_25614);
var inst_25600 = inst_25626;
var inst_25601 = null;
var inst_25602 = (0);
var inst_25603 = (0);
var state_25659__$1 = (function (){var statearr_25679 = state_25659;
(statearr_25679[(12)] = inst_25602);

(statearr_25679[(13)] = inst_25603);

(statearr_25679[(14)] = inst_25600);

(statearr_25679[(15)] = inst_25601);

(statearr_25679[(16)] = inst_25625);

return statearr_25679;
})();
var statearr_25680_25721 = state_25659__$1;
(statearr_25680_25721[(2)] = null);

(statearr_25680_25721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (3))){
var inst_25657 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25659__$1,inst_25657);
} else {
if((state_val_25660 === (12))){
var inst_25634 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
var statearr_25681_25722 = state_25659__$1;
(statearr_25681_25722[(2)] = inst_25634);

(statearr_25681_25722[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (2))){
var state_25659__$1 = state_25659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25659__$1,(4),ch);
} else {
if((state_val_25660 === (23))){
var state_25659__$1 = state_25659;
var statearr_25682_25723 = state_25659__$1;
(statearr_25682_25723[(2)] = null);

(statearr_25682_25723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (19))){
var inst_25640 = (state_25659[(11)]);
var inst_25590 = (state_25659[(8)]);
var inst_25642 = cljs.core.async.muxch_STAR_.call(null,inst_25640);
var state_25659__$1 = state_25659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25659__$1,(22),inst_25642,inst_25590);
} else {
if((state_val_25660 === (11))){
var inst_25600 = (state_25659[(14)]);
var inst_25614 = (state_25659[(10)]);
var inst_25614__$1 = cljs.core.seq.call(null,inst_25600);
var state_25659__$1 = (function (){var statearr_25683 = state_25659;
(statearr_25683[(10)] = inst_25614__$1);

return statearr_25683;
})();
if(inst_25614__$1){
var statearr_25684_25724 = state_25659__$1;
(statearr_25684_25724[(1)] = (13));

} else {
var statearr_25685_25725 = state_25659__$1;
(statearr_25685_25725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (9))){
var inst_25636 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
var statearr_25686_25726 = state_25659__$1;
(statearr_25686_25726[(2)] = inst_25636);

(statearr_25686_25726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (5))){
var inst_25597 = cljs.core.deref.call(null,mults);
var inst_25598 = cljs.core.vals.call(null,inst_25597);
var inst_25599 = cljs.core.seq.call(null,inst_25598);
var inst_25600 = inst_25599;
var inst_25601 = null;
var inst_25602 = (0);
var inst_25603 = (0);
var state_25659__$1 = (function (){var statearr_25687 = state_25659;
(statearr_25687[(12)] = inst_25602);

(statearr_25687[(13)] = inst_25603);

(statearr_25687[(14)] = inst_25600);

(statearr_25687[(15)] = inst_25601);

return statearr_25687;
})();
var statearr_25688_25727 = state_25659__$1;
(statearr_25688_25727[(2)] = null);

(statearr_25688_25727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (14))){
var state_25659__$1 = state_25659;
var statearr_25692_25728 = state_25659__$1;
(statearr_25692_25728[(2)] = null);

(statearr_25692_25728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (16))){
var inst_25614 = (state_25659[(10)]);
var inst_25618 = cljs.core.chunk_first.call(null,inst_25614);
var inst_25619 = cljs.core.chunk_rest.call(null,inst_25614);
var inst_25620 = cljs.core.count.call(null,inst_25618);
var inst_25600 = inst_25619;
var inst_25601 = inst_25618;
var inst_25602 = inst_25620;
var inst_25603 = (0);
var state_25659__$1 = (function (){var statearr_25693 = state_25659;
(statearr_25693[(12)] = inst_25602);

(statearr_25693[(13)] = inst_25603);

(statearr_25693[(14)] = inst_25600);

(statearr_25693[(15)] = inst_25601);

return statearr_25693;
})();
var statearr_25694_25729 = state_25659__$1;
(statearr_25694_25729[(2)] = null);

(statearr_25694_25729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (10))){
var inst_25602 = (state_25659[(12)]);
var inst_25603 = (state_25659[(13)]);
var inst_25600 = (state_25659[(14)]);
var inst_25601 = (state_25659[(15)]);
var inst_25608 = cljs.core._nth.call(null,inst_25601,inst_25603);
var inst_25609 = cljs.core.async.muxch_STAR_.call(null,inst_25608);
var inst_25610 = cljs.core.async.close_BANG_.call(null,inst_25609);
var inst_25611 = (inst_25603 + (1));
var tmp25689 = inst_25602;
var tmp25690 = inst_25600;
var tmp25691 = inst_25601;
var inst_25600__$1 = tmp25690;
var inst_25601__$1 = tmp25691;
var inst_25602__$1 = tmp25689;
var inst_25603__$1 = inst_25611;
var state_25659__$1 = (function (){var statearr_25695 = state_25659;
(statearr_25695[(12)] = inst_25602__$1);

(statearr_25695[(13)] = inst_25603__$1);

(statearr_25695[(14)] = inst_25600__$1);

(statearr_25695[(15)] = inst_25601__$1);

(statearr_25695[(17)] = inst_25610);

return statearr_25695;
})();
var statearr_25696_25730 = state_25659__$1;
(statearr_25696_25730[(2)] = null);

(statearr_25696_25730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (18))){
var inst_25629 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
var statearr_25697_25731 = state_25659__$1;
(statearr_25697_25731[(2)] = inst_25629);

(statearr_25697_25731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (8))){
var inst_25602 = (state_25659[(12)]);
var inst_25603 = (state_25659[(13)]);
var inst_25605 = (inst_25603 < inst_25602);
var inst_25606 = inst_25605;
var state_25659__$1 = state_25659;
if(cljs.core.truth_(inst_25606)){
var statearr_25698_25732 = state_25659__$1;
(statearr_25698_25732[(1)] = (10));

} else {
var statearr_25699_25733 = state_25659__$1;
(statearr_25699_25733[(1)] = (11));

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
});})(c__24471__auto___25705,mults,ensure_mult,p))
;
return ((function (switch__24381__auto__,c__24471__auto___25705,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_25700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25700[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_25700[(1)] = (1));

return statearr_25700;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_25659){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_25659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25701){if((e25701 instanceof Object)){
var ex__24385__auto__ = e25701;
var statearr_25702_25734 = state_25659;
(statearr_25702_25734[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25735 = state_25659;
state_25659 = G__25735;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_25659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_25659);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___25705,mults,ensure_mult,p))
})();
var state__24473__auto__ = (function (){var statearr_25703 = f__24472__auto__.call(null);
(statearr_25703[(6)] = c__24471__auto___25705);

return statearr_25703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___25705,mults,ensure_mult,p))
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
var G__25737 = arguments.length;
switch (G__25737) {
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
var G__25740 = arguments.length;
switch (G__25740) {
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
var G__25743 = arguments.length;
switch (G__25743) {
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
var c__24471__auto___25810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___25810,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___25810,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25782){
var state_val_25783 = (state_25782[(1)]);
if((state_val_25783 === (7))){
var state_25782__$1 = state_25782;
var statearr_25784_25811 = state_25782__$1;
(statearr_25784_25811[(2)] = null);

(statearr_25784_25811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (1))){
var state_25782__$1 = state_25782;
var statearr_25785_25812 = state_25782__$1;
(statearr_25785_25812[(2)] = null);

(statearr_25785_25812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (4))){
var inst_25746 = (state_25782[(7)]);
var inst_25748 = (inst_25746 < cnt);
var state_25782__$1 = state_25782;
if(cljs.core.truth_(inst_25748)){
var statearr_25786_25813 = state_25782__$1;
(statearr_25786_25813[(1)] = (6));

} else {
var statearr_25787_25814 = state_25782__$1;
(statearr_25787_25814[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (15))){
var inst_25778 = (state_25782[(2)]);
var state_25782__$1 = state_25782;
var statearr_25788_25815 = state_25782__$1;
(statearr_25788_25815[(2)] = inst_25778);

(statearr_25788_25815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (13))){
var inst_25771 = cljs.core.async.close_BANG_.call(null,out);
var state_25782__$1 = state_25782;
var statearr_25789_25816 = state_25782__$1;
(statearr_25789_25816[(2)] = inst_25771);

(statearr_25789_25816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (6))){
var state_25782__$1 = state_25782;
var statearr_25790_25817 = state_25782__$1;
(statearr_25790_25817[(2)] = null);

(statearr_25790_25817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (3))){
var inst_25780 = (state_25782[(2)]);
var state_25782__$1 = state_25782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25782__$1,inst_25780);
} else {
if((state_val_25783 === (12))){
var inst_25768 = (state_25782[(8)]);
var inst_25768__$1 = (state_25782[(2)]);
var inst_25769 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25768__$1);
var state_25782__$1 = (function (){var statearr_25791 = state_25782;
(statearr_25791[(8)] = inst_25768__$1);

return statearr_25791;
})();
if(cljs.core.truth_(inst_25769)){
var statearr_25792_25818 = state_25782__$1;
(statearr_25792_25818[(1)] = (13));

} else {
var statearr_25793_25819 = state_25782__$1;
(statearr_25793_25819[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (2))){
var inst_25745 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25746 = (0);
var state_25782__$1 = (function (){var statearr_25794 = state_25782;
(statearr_25794[(9)] = inst_25745);

(statearr_25794[(7)] = inst_25746);

return statearr_25794;
})();
var statearr_25795_25820 = state_25782__$1;
(statearr_25795_25820[(2)] = null);

(statearr_25795_25820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (11))){
var inst_25746 = (state_25782[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25782,(10),Object,null,(9));
var inst_25755 = chs__$1.call(null,inst_25746);
var inst_25756 = done.call(null,inst_25746);
var inst_25757 = cljs.core.async.take_BANG_.call(null,inst_25755,inst_25756);
var state_25782__$1 = state_25782;
var statearr_25796_25821 = state_25782__$1;
(statearr_25796_25821[(2)] = inst_25757);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25782__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (9))){
var inst_25746 = (state_25782[(7)]);
var inst_25759 = (state_25782[(2)]);
var inst_25760 = (inst_25746 + (1));
var inst_25746__$1 = inst_25760;
var state_25782__$1 = (function (){var statearr_25797 = state_25782;
(statearr_25797[(10)] = inst_25759);

(statearr_25797[(7)] = inst_25746__$1);

return statearr_25797;
})();
var statearr_25798_25822 = state_25782__$1;
(statearr_25798_25822[(2)] = null);

(statearr_25798_25822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (5))){
var inst_25766 = (state_25782[(2)]);
var state_25782__$1 = (function (){var statearr_25799 = state_25782;
(statearr_25799[(11)] = inst_25766);

return statearr_25799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25782__$1,(12),dchan);
} else {
if((state_val_25783 === (14))){
var inst_25768 = (state_25782[(8)]);
var inst_25773 = cljs.core.apply.call(null,f,inst_25768);
var state_25782__$1 = state_25782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25782__$1,(16),out,inst_25773);
} else {
if((state_val_25783 === (16))){
var inst_25775 = (state_25782[(2)]);
var state_25782__$1 = (function (){var statearr_25800 = state_25782;
(statearr_25800[(12)] = inst_25775);

return statearr_25800;
})();
var statearr_25801_25823 = state_25782__$1;
(statearr_25801_25823[(2)] = null);

(statearr_25801_25823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (10))){
var inst_25750 = (state_25782[(2)]);
var inst_25751 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25782__$1 = (function (){var statearr_25802 = state_25782;
(statearr_25802[(13)] = inst_25750);

return statearr_25802;
})();
var statearr_25803_25824 = state_25782__$1;
(statearr_25803_25824[(2)] = inst_25751);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25782__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (8))){
var inst_25764 = (state_25782[(2)]);
var state_25782__$1 = state_25782;
var statearr_25804_25825 = state_25782__$1;
(statearr_25804_25825[(2)] = inst_25764);

(statearr_25804_25825[(1)] = (5));


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
});})(c__24471__auto___25810,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24381__auto__,c__24471__auto___25810,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_25805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25805[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_25805[(1)] = (1));

return statearr_25805;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_25782){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_25782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25806){if((e25806 instanceof Object)){
var ex__24385__auto__ = e25806;
var statearr_25807_25826 = state_25782;
(statearr_25807_25826[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25827 = state_25782;
state_25782 = G__25827;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_25782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_25782);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___25810,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24473__auto__ = (function (){var statearr_25808 = f__24472__auto__.call(null);
(statearr_25808[(6)] = c__24471__auto___25810);

return statearr_25808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___25810,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25830 = arguments.length;
switch (G__25830) {
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
var c__24471__auto___25884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___25884,out){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___25884,out){
return (function (state_25862){
var state_val_25863 = (state_25862[(1)]);
if((state_val_25863 === (7))){
var inst_25842 = (state_25862[(7)]);
var inst_25841 = (state_25862[(8)]);
var inst_25841__$1 = (state_25862[(2)]);
var inst_25842__$1 = cljs.core.nth.call(null,inst_25841__$1,(0),null);
var inst_25843 = cljs.core.nth.call(null,inst_25841__$1,(1),null);
var inst_25844 = (inst_25842__$1 == null);
var state_25862__$1 = (function (){var statearr_25864 = state_25862;
(statearr_25864[(9)] = inst_25843);

(statearr_25864[(7)] = inst_25842__$1);

(statearr_25864[(8)] = inst_25841__$1);

return statearr_25864;
})();
if(cljs.core.truth_(inst_25844)){
var statearr_25865_25885 = state_25862__$1;
(statearr_25865_25885[(1)] = (8));

} else {
var statearr_25866_25886 = state_25862__$1;
(statearr_25866_25886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (1))){
var inst_25831 = cljs.core.vec.call(null,chs);
var inst_25832 = inst_25831;
var state_25862__$1 = (function (){var statearr_25867 = state_25862;
(statearr_25867[(10)] = inst_25832);

return statearr_25867;
})();
var statearr_25868_25887 = state_25862__$1;
(statearr_25868_25887[(2)] = null);

(statearr_25868_25887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (4))){
var inst_25832 = (state_25862[(10)]);
var state_25862__$1 = state_25862;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25862__$1,(7),inst_25832);
} else {
if((state_val_25863 === (6))){
var inst_25858 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
var statearr_25869_25888 = state_25862__$1;
(statearr_25869_25888[(2)] = inst_25858);

(statearr_25869_25888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (3))){
var inst_25860 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25862__$1,inst_25860);
} else {
if((state_val_25863 === (2))){
var inst_25832 = (state_25862[(10)]);
var inst_25834 = cljs.core.count.call(null,inst_25832);
var inst_25835 = (inst_25834 > (0));
var state_25862__$1 = state_25862;
if(cljs.core.truth_(inst_25835)){
var statearr_25871_25889 = state_25862__$1;
(statearr_25871_25889[(1)] = (4));

} else {
var statearr_25872_25890 = state_25862__$1;
(statearr_25872_25890[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (11))){
var inst_25832 = (state_25862[(10)]);
var inst_25851 = (state_25862[(2)]);
var tmp25870 = inst_25832;
var inst_25832__$1 = tmp25870;
var state_25862__$1 = (function (){var statearr_25873 = state_25862;
(statearr_25873[(10)] = inst_25832__$1);

(statearr_25873[(11)] = inst_25851);

return statearr_25873;
})();
var statearr_25874_25891 = state_25862__$1;
(statearr_25874_25891[(2)] = null);

(statearr_25874_25891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (9))){
var inst_25842 = (state_25862[(7)]);
var state_25862__$1 = state_25862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25862__$1,(11),out,inst_25842);
} else {
if((state_val_25863 === (5))){
var inst_25856 = cljs.core.async.close_BANG_.call(null,out);
var state_25862__$1 = state_25862;
var statearr_25875_25892 = state_25862__$1;
(statearr_25875_25892[(2)] = inst_25856);

(statearr_25875_25892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (10))){
var inst_25854 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
var statearr_25876_25893 = state_25862__$1;
(statearr_25876_25893[(2)] = inst_25854);

(statearr_25876_25893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (8))){
var inst_25843 = (state_25862[(9)]);
var inst_25832 = (state_25862[(10)]);
var inst_25842 = (state_25862[(7)]);
var inst_25841 = (state_25862[(8)]);
var inst_25846 = (function (){var cs = inst_25832;
var vec__25837 = inst_25841;
var v = inst_25842;
var c = inst_25843;
return ((function (cs,vec__25837,v,c,inst_25843,inst_25832,inst_25842,inst_25841,state_val_25863,c__24471__auto___25884,out){
return (function (p1__25828_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25828_SHARP_);
});
;})(cs,vec__25837,v,c,inst_25843,inst_25832,inst_25842,inst_25841,state_val_25863,c__24471__auto___25884,out))
})();
var inst_25847 = cljs.core.filterv.call(null,inst_25846,inst_25832);
var inst_25832__$1 = inst_25847;
var state_25862__$1 = (function (){var statearr_25877 = state_25862;
(statearr_25877[(10)] = inst_25832__$1);

return statearr_25877;
})();
var statearr_25878_25894 = state_25862__$1;
(statearr_25878_25894[(2)] = null);

(statearr_25878_25894[(1)] = (2));


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
});})(c__24471__auto___25884,out))
;
return ((function (switch__24381__auto__,c__24471__auto___25884,out){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_25879 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25879[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_25879[(1)] = (1));

return statearr_25879;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_25862){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_25862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25880){if((e25880 instanceof Object)){
var ex__24385__auto__ = e25880;
var statearr_25881_25895 = state_25862;
(statearr_25881_25895[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25896 = state_25862;
state_25862 = G__25896;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_25862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_25862);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___25884,out))
})();
var state__24473__auto__ = (function (){var statearr_25882 = f__24472__auto__.call(null);
(statearr_25882[(6)] = c__24471__auto___25884);

return statearr_25882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___25884,out))
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
var G__25898 = arguments.length;
switch (G__25898) {
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
var c__24471__auto___25943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___25943,out){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___25943,out){
return (function (state_25922){
var state_val_25923 = (state_25922[(1)]);
if((state_val_25923 === (7))){
var inst_25904 = (state_25922[(7)]);
var inst_25904__$1 = (state_25922[(2)]);
var inst_25905 = (inst_25904__$1 == null);
var inst_25906 = cljs.core.not.call(null,inst_25905);
var state_25922__$1 = (function (){var statearr_25924 = state_25922;
(statearr_25924[(7)] = inst_25904__$1);

return statearr_25924;
})();
if(inst_25906){
var statearr_25925_25944 = state_25922__$1;
(statearr_25925_25944[(1)] = (8));

} else {
var statearr_25926_25945 = state_25922__$1;
(statearr_25926_25945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (1))){
var inst_25899 = (0);
var state_25922__$1 = (function (){var statearr_25927 = state_25922;
(statearr_25927[(8)] = inst_25899);

return statearr_25927;
})();
var statearr_25928_25946 = state_25922__$1;
(statearr_25928_25946[(2)] = null);

(statearr_25928_25946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (4))){
var state_25922__$1 = state_25922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25922__$1,(7),ch);
} else {
if((state_val_25923 === (6))){
var inst_25917 = (state_25922[(2)]);
var state_25922__$1 = state_25922;
var statearr_25929_25947 = state_25922__$1;
(statearr_25929_25947[(2)] = inst_25917);

(statearr_25929_25947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (3))){
var inst_25919 = (state_25922[(2)]);
var inst_25920 = cljs.core.async.close_BANG_.call(null,out);
var state_25922__$1 = (function (){var statearr_25930 = state_25922;
(statearr_25930[(9)] = inst_25919);

return statearr_25930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25922__$1,inst_25920);
} else {
if((state_val_25923 === (2))){
var inst_25899 = (state_25922[(8)]);
var inst_25901 = (inst_25899 < n);
var state_25922__$1 = state_25922;
if(cljs.core.truth_(inst_25901)){
var statearr_25931_25948 = state_25922__$1;
(statearr_25931_25948[(1)] = (4));

} else {
var statearr_25932_25949 = state_25922__$1;
(statearr_25932_25949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (11))){
var inst_25899 = (state_25922[(8)]);
var inst_25909 = (state_25922[(2)]);
var inst_25910 = (inst_25899 + (1));
var inst_25899__$1 = inst_25910;
var state_25922__$1 = (function (){var statearr_25933 = state_25922;
(statearr_25933[(8)] = inst_25899__$1);

(statearr_25933[(10)] = inst_25909);

return statearr_25933;
})();
var statearr_25934_25950 = state_25922__$1;
(statearr_25934_25950[(2)] = null);

(statearr_25934_25950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (9))){
var state_25922__$1 = state_25922;
var statearr_25935_25951 = state_25922__$1;
(statearr_25935_25951[(2)] = null);

(statearr_25935_25951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (5))){
var state_25922__$1 = state_25922;
var statearr_25936_25952 = state_25922__$1;
(statearr_25936_25952[(2)] = null);

(statearr_25936_25952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (10))){
var inst_25914 = (state_25922[(2)]);
var state_25922__$1 = state_25922;
var statearr_25937_25953 = state_25922__$1;
(statearr_25937_25953[(2)] = inst_25914);

(statearr_25937_25953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (8))){
var inst_25904 = (state_25922[(7)]);
var state_25922__$1 = state_25922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25922__$1,(11),out,inst_25904);
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
});})(c__24471__auto___25943,out))
;
return ((function (switch__24381__auto__,c__24471__auto___25943,out){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_25938 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25938[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_25938[(1)] = (1));

return statearr_25938;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_25922){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_25922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25939){if((e25939 instanceof Object)){
var ex__24385__auto__ = e25939;
var statearr_25940_25954 = state_25922;
(statearr_25940_25954[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25955 = state_25922;
state_25922 = G__25955;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_25922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_25922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___25943,out))
})();
var state__24473__auto__ = (function (){var statearr_25941 = f__24472__auto__.call(null);
(statearr_25941[(6)] = c__24471__auto___25943);

return statearr_25941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___25943,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25957 = (function (f,ch,meta25958){
this.f = f;
this.ch = ch;
this.meta25958 = meta25958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25959,meta25958__$1){
var self__ = this;
var _25959__$1 = this;
return (new cljs.core.async.t_cljs$core$async25957(self__.f,self__.ch,meta25958__$1));
});

cljs.core.async.t_cljs$core$async25957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25959){
var self__ = this;
var _25959__$1 = this;
return self__.meta25958;
});

cljs.core.async.t_cljs$core$async25957.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25957.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25957.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25960 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25960 = (function (f,ch,meta25958,_,fn1,meta25961){
this.f = f;
this.ch = ch;
this.meta25958 = meta25958;
this._ = _;
this.fn1 = fn1;
this.meta25961 = meta25961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25962,meta25961__$1){
var self__ = this;
var _25962__$1 = this;
return (new cljs.core.async.t_cljs$core$async25960(self__.f,self__.ch,self__.meta25958,self__._,self__.fn1,meta25961__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25962){
var self__ = this;
var _25962__$1 = this;
return self__.meta25961;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25960.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25960.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25956_SHARP_){
return f1.call(null,(((p1__25956_SHARP_ == null))?null:self__.f.call(null,p1__25956_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25960.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25958","meta25958",637252436,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25957","cljs.core.async/t_cljs$core$async25957",188864737,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25961","meta25961",1642565486,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25960.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25960";

cljs.core.async.t_cljs$core$async25960.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25960");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25960.
 */
cljs.core.async.__GT_t_cljs$core$async25960 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25960(f__$1,ch__$1,meta25958__$1,___$2,fn1__$1,meta25961){
return (new cljs.core.async.t_cljs$core$async25960(f__$1,ch__$1,meta25958__$1,___$2,fn1__$1,meta25961));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25960(self__.f,self__.ch,self__.meta25958,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25957.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25958","meta25958",637252436,null)], null);
});

cljs.core.async.t_cljs$core$async25957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25957";

cljs.core.async.t_cljs$core$async25957.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25957");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25957.
 */
cljs.core.async.__GT_t_cljs$core$async25957 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25957(f__$1,ch__$1,meta25958){
return (new cljs.core.async.t_cljs$core$async25957(f__$1,ch__$1,meta25958));
});

}

return (new cljs.core.async.t_cljs$core$async25957(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25963 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25963 = (function (f,ch,meta25964){
this.f = f;
this.ch = ch;
this.meta25964 = meta25964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25965,meta25964__$1){
var self__ = this;
var _25965__$1 = this;
return (new cljs.core.async.t_cljs$core$async25963(self__.f,self__.ch,meta25964__$1));
});

cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25965){
var self__ = this;
var _25965__$1 = this;
return self__.meta25964;
});

cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25964","meta25964",890980822,null)], null);
});

cljs.core.async.t_cljs$core$async25963.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25963";

cljs.core.async.t_cljs$core$async25963.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25963");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25963.
 */
cljs.core.async.__GT_t_cljs$core$async25963 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25963(f__$1,ch__$1,meta25964){
return (new cljs.core.async.t_cljs$core$async25963(f__$1,ch__$1,meta25964));
});

}

return (new cljs.core.async.t_cljs$core$async25963(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25966 = (function (p,ch,meta25967){
this.p = p;
this.ch = ch;
this.meta25967 = meta25967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25968,meta25967__$1){
var self__ = this;
var _25968__$1 = this;
return (new cljs.core.async.t_cljs$core$async25966(self__.p,self__.ch,meta25967__$1));
});

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25968){
var self__ = this;
var _25968__$1 = this;
return self__.meta25967;
});

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25967","meta25967",-996129918,null)], null);
});

cljs.core.async.t_cljs$core$async25966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25966";

cljs.core.async.t_cljs$core$async25966.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25966");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25966.
 */
cljs.core.async.__GT_t_cljs$core$async25966 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25966(p__$1,ch__$1,meta25967){
return (new cljs.core.async.t_cljs$core$async25966(p__$1,ch__$1,meta25967));
});

}

return (new cljs.core.async.t_cljs$core$async25966(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25970 = arguments.length;
switch (G__25970) {
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
var c__24471__auto___26010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___26010,out){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___26010,out){
return (function (state_25991){
var state_val_25992 = (state_25991[(1)]);
if((state_val_25992 === (7))){
var inst_25987 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_25993_26011 = state_25991__$1;
(statearr_25993_26011[(2)] = inst_25987);

(statearr_25993_26011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (1))){
var state_25991__$1 = state_25991;
var statearr_25994_26012 = state_25991__$1;
(statearr_25994_26012[(2)] = null);

(statearr_25994_26012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (4))){
var inst_25973 = (state_25991[(7)]);
var inst_25973__$1 = (state_25991[(2)]);
var inst_25974 = (inst_25973__$1 == null);
var state_25991__$1 = (function (){var statearr_25995 = state_25991;
(statearr_25995[(7)] = inst_25973__$1);

return statearr_25995;
})();
if(cljs.core.truth_(inst_25974)){
var statearr_25996_26013 = state_25991__$1;
(statearr_25996_26013[(1)] = (5));

} else {
var statearr_25997_26014 = state_25991__$1;
(statearr_25997_26014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (6))){
var inst_25973 = (state_25991[(7)]);
var inst_25978 = p.call(null,inst_25973);
var state_25991__$1 = state_25991;
if(cljs.core.truth_(inst_25978)){
var statearr_25998_26015 = state_25991__$1;
(statearr_25998_26015[(1)] = (8));

} else {
var statearr_25999_26016 = state_25991__$1;
(statearr_25999_26016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (3))){
var inst_25989 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25991__$1,inst_25989);
} else {
if((state_val_25992 === (2))){
var state_25991__$1 = state_25991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25991__$1,(4),ch);
} else {
if((state_val_25992 === (11))){
var inst_25981 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_26000_26017 = state_25991__$1;
(statearr_26000_26017[(2)] = inst_25981);

(statearr_26000_26017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (9))){
var state_25991__$1 = state_25991;
var statearr_26001_26018 = state_25991__$1;
(statearr_26001_26018[(2)] = null);

(statearr_26001_26018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (5))){
var inst_25976 = cljs.core.async.close_BANG_.call(null,out);
var state_25991__$1 = state_25991;
var statearr_26002_26019 = state_25991__$1;
(statearr_26002_26019[(2)] = inst_25976);

(statearr_26002_26019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (10))){
var inst_25984 = (state_25991[(2)]);
var state_25991__$1 = (function (){var statearr_26003 = state_25991;
(statearr_26003[(8)] = inst_25984);

return statearr_26003;
})();
var statearr_26004_26020 = state_25991__$1;
(statearr_26004_26020[(2)] = null);

(statearr_26004_26020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (8))){
var inst_25973 = (state_25991[(7)]);
var state_25991__$1 = state_25991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25991__$1,(11),out,inst_25973);
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
});})(c__24471__auto___26010,out))
;
return ((function (switch__24381__auto__,c__24471__auto___26010,out){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_26005 = [null,null,null,null,null,null,null,null,null];
(statearr_26005[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_26005[(1)] = (1));

return statearr_26005;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_25991){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_25991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26006){if((e26006 instanceof Object)){
var ex__24385__auto__ = e26006;
var statearr_26007_26021 = state_25991;
(statearr_26007_26021[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26022 = state_25991;
state_25991 = G__26022;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_25991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_25991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___26010,out))
})();
var state__24473__auto__ = (function (){var statearr_26008 = f__24472__auto__.call(null);
(statearr_26008[(6)] = c__24471__auto___26010);

return statearr_26008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___26010,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26024 = arguments.length;
switch (G__26024) {
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
var c__24471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto__){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto__){
return (function (state_26087){
var state_val_26088 = (state_26087[(1)]);
if((state_val_26088 === (7))){
var inst_26083 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26089_26127 = state_26087__$1;
(statearr_26089_26127[(2)] = inst_26083);

(statearr_26089_26127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (20))){
var inst_26053 = (state_26087[(7)]);
var inst_26064 = (state_26087[(2)]);
var inst_26065 = cljs.core.next.call(null,inst_26053);
var inst_26039 = inst_26065;
var inst_26040 = null;
var inst_26041 = (0);
var inst_26042 = (0);
var state_26087__$1 = (function (){var statearr_26090 = state_26087;
(statearr_26090[(8)] = inst_26040);

(statearr_26090[(9)] = inst_26039);

(statearr_26090[(10)] = inst_26041);

(statearr_26090[(11)] = inst_26042);

(statearr_26090[(12)] = inst_26064);

return statearr_26090;
})();
var statearr_26091_26128 = state_26087__$1;
(statearr_26091_26128[(2)] = null);

(statearr_26091_26128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (1))){
var state_26087__$1 = state_26087;
var statearr_26092_26129 = state_26087__$1;
(statearr_26092_26129[(2)] = null);

(statearr_26092_26129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (4))){
var inst_26028 = (state_26087[(13)]);
var inst_26028__$1 = (state_26087[(2)]);
var inst_26029 = (inst_26028__$1 == null);
var state_26087__$1 = (function (){var statearr_26093 = state_26087;
(statearr_26093[(13)] = inst_26028__$1);

return statearr_26093;
})();
if(cljs.core.truth_(inst_26029)){
var statearr_26094_26130 = state_26087__$1;
(statearr_26094_26130[(1)] = (5));

} else {
var statearr_26095_26131 = state_26087__$1;
(statearr_26095_26131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (15))){
var state_26087__$1 = state_26087;
var statearr_26099_26132 = state_26087__$1;
(statearr_26099_26132[(2)] = null);

(statearr_26099_26132[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (21))){
var state_26087__$1 = state_26087;
var statearr_26100_26133 = state_26087__$1;
(statearr_26100_26133[(2)] = null);

(statearr_26100_26133[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (13))){
var inst_26040 = (state_26087[(8)]);
var inst_26039 = (state_26087[(9)]);
var inst_26041 = (state_26087[(10)]);
var inst_26042 = (state_26087[(11)]);
var inst_26049 = (state_26087[(2)]);
var inst_26050 = (inst_26042 + (1));
var tmp26096 = inst_26040;
var tmp26097 = inst_26039;
var tmp26098 = inst_26041;
var inst_26039__$1 = tmp26097;
var inst_26040__$1 = tmp26096;
var inst_26041__$1 = tmp26098;
var inst_26042__$1 = inst_26050;
var state_26087__$1 = (function (){var statearr_26101 = state_26087;
(statearr_26101[(14)] = inst_26049);

(statearr_26101[(8)] = inst_26040__$1);

(statearr_26101[(9)] = inst_26039__$1);

(statearr_26101[(10)] = inst_26041__$1);

(statearr_26101[(11)] = inst_26042__$1);

return statearr_26101;
})();
var statearr_26102_26134 = state_26087__$1;
(statearr_26102_26134[(2)] = null);

(statearr_26102_26134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (22))){
var state_26087__$1 = state_26087;
var statearr_26103_26135 = state_26087__$1;
(statearr_26103_26135[(2)] = null);

(statearr_26103_26135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (6))){
var inst_26028 = (state_26087[(13)]);
var inst_26037 = f.call(null,inst_26028);
var inst_26038 = cljs.core.seq.call(null,inst_26037);
var inst_26039 = inst_26038;
var inst_26040 = null;
var inst_26041 = (0);
var inst_26042 = (0);
var state_26087__$1 = (function (){var statearr_26104 = state_26087;
(statearr_26104[(8)] = inst_26040);

(statearr_26104[(9)] = inst_26039);

(statearr_26104[(10)] = inst_26041);

(statearr_26104[(11)] = inst_26042);

return statearr_26104;
})();
var statearr_26105_26136 = state_26087__$1;
(statearr_26105_26136[(2)] = null);

(statearr_26105_26136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (17))){
var inst_26053 = (state_26087[(7)]);
var inst_26057 = cljs.core.chunk_first.call(null,inst_26053);
var inst_26058 = cljs.core.chunk_rest.call(null,inst_26053);
var inst_26059 = cljs.core.count.call(null,inst_26057);
var inst_26039 = inst_26058;
var inst_26040 = inst_26057;
var inst_26041 = inst_26059;
var inst_26042 = (0);
var state_26087__$1 = (function (){var statearr_26106 = state_26087;
(statearr_26106[(8)] = inst_26040);

(statearr_26106[(9)] = inst_26039);

(statearr_26106[(10)] = inst_26041);

(statearr_26106[(11)] = inst_26042);

return statearr_26106;
})();
var statearr_26107_26137 = state_26087__$1;
(statearr_26107_26137[(2)] = null);

(statearr_26107_26137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (3))){
var inst_26085 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26087__$1,inst_26085);
} else {
if((state_val_26088 === (12))){
var inst_26073 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26108_26138 = state_26087__$1;
(statearr_26108_26138[(2)] = inst_26073);

(statearr_26108_26138[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (2))){
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26087__$1,(4),in$);
} else {
if((state_val_26088 === (23))){
var inst_26081 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26109_26139 = state_26087__$1;
(statearr_26109_26139[(2)] = inst_26081);

(statearr_26109_26139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (19))){
var inst_26068 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26110_26140 = state_26087__$1;
(statearr_26110_26140[(2)] = inst_26068);

(statearr_26110_26140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (11))){
var inst_26053 = (state_26087[(7)]);
var inst_26039 = (state_26087[(9)]);
var inst_26053__$1 = cljs.core.seq.call(null,inst_26039);
var state_26087__$1 = (function (){var statearr_26111 = state_26087;
(statearr_26111[(7)] = inst_26053__$1);

return statearr_26111;
})();
if(inst_26053__$1){
var statearr_26112_26141 = state_26087__$1;
(statearr_26112_26141[(1)] = (14));

} else {
var statearr_26113_26142 = state_26087__$1;
(statearr_26113_26142[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (9))){
var inst_26075 = (state_26087[(2)]);
var inst_26076 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26087__$1 = (function (){var statearr_26114 = state_26087;
(statearr_26114[(15)] = inst_26075);

return statearr_26114;
})();
if(cljs.core.truth_(inst_26076)){
var statearr_26115_26143 = state_26087__$1;
(statearr_26115_26143[(1)] = (21));

} else {
var statearr_26116_26144 = state_26087__$1;
(statearr_26116_26144[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (5))){
var inst_26031 = cljs.core.async.close_BANG_.call(null,out);
var state_26087__$1 = state_26087;
var statearr_26117_26145 = state_26087__$1;
(statearr_26117_26145[(2)] = inst_26031);

(statearr_26117_26145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (14))){
var inst_26053 = (state_26087[(7)]);
var inst_26055 = cljs.core.chunked_seq_QMARK_.call(null,inst_26053);
var state_26087__$1 = state_26087;
if(inst_26055){
var statearr_26118_26146 = state_26087__$1;
(statearr_26118_26146[(1)] = (17));

} else {
var statearr_26119_26147 = state_26087__$1;
(statearr_26119_26147[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (16))){
var inst_26071 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26120_26148 = state_26087__$1;
(statearr_26120_26148[(2)] = inst_26071);

(statearr_26120_26148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (10))){
var inst_26040 = (state_26087[(8)]);
var inst_26042 = (state_26087[(11)]);
var inst_26047 = cljs.core._nth.call(null,inst_26040,inst_26042);
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26087__$1,(13),out,inst_26047);
} else {
if((state_val_26088 === (18))){
var inst_26053 = (state_26087[(7)]);
var inst_26062 = cljs.core.first.call(null,inst_26053);
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26087__$1,(20),out,inst_26062);
} else {
if((state_val_26088 === (8))){
var inst_26041 = (state_26087[(10)]);
var inst_26042 = (state_26087[(11)]);
var inst_26044 = (inst_26042 < inst_26041);
var inst_26045 = inst_26044;
var state_26087__$1 = state_26087;
if(cljs.core.truth_(inst_26045)){
var statearr_26121_26149 = state_26087__$1;
(statearr_26121_26149[(1)] = (10));

} else {
var statearr_26122_26150 = state_26087__$1;
(statearr_26122_26150[(1)] = (11));

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
});})(c__24471__auto__))
;
return ((function (switch__24381__auto__,c__24471__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24382__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24382__auto____0 = (function (){
var statearr_26123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26123[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24382__auto__);

(statearr_26123[(1)] = (1));

return statearr_26123;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24382__auto____1 = (function (state_26087){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_26087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26124){if((e26124 instanceof Object)){
var ex__24385__auto__ = e26124;
var statearr_26125_26151 = state_26087;
(statearr_26125_26151[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26152 = state_26087;
state_26087 = G__26152;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24382__auto__ = function(state_26087){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24382__auto____1.call(this,state_26087);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24382__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24382__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto__))
})();
var state__24473__auto__ = (function (){var statearr_26126 = f__24472__auto__.call(null);
(statearr_26126[(6)] = c__24471__auto__);

return statearr_26126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto__))
);

return c__24471__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26154 = arguments.length;
switch (G__26154) {
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
var G__26157 = arguments.length;
switch (G__26157) {
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
var G__26160 = arguments.length;
switch (G__26160) {
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
var c__24471__auto___26207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___26207,out){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___26207,out){
return (function (state_26184){
var state_val_26185 = (state_26184[(1)]);
if((state_val_26185 === (7))){
var inst_26179 = (state_26184[(2)]);
var state_26184__$1 = state_26184;
var statearr_26186_26208 = state_26184__$1;
(statearr_26186_26208[(2)] = inst_26179);

(statearr_26186_26208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26185 === (1))){
var inst_26161 = null;
var state_26184__$1 = (function (){var statearr_26187 = state_26184;
(statearr_26187[(7)] = inst_26161);

return statearr_26187;
})();
var statearr_26188_26209 = state_26184__$1;
(statearr_26188_26209[(2)] = null);

(statearr_26188_26209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26185 === (4))){
var inst_26164 = (state_26184[(8)]);
var inst_26164__$1 = (state_26184[(2)]);
var inst_26165 = (inst_26164__$1 == null);
var inst_26166 = cljs.core.not.call(null,inst_26165);
var state_26184__$1 = (function (){var statearr_26189 = state_26184;
(statearr_26189[(8)] = inst_26164__$1);

return statearr_26189;
})();
if(inst_26166){
var statearr_26190_26210 = state_26184__$1;
(statearr_26190_26210[(1)] = (5));

} else {
var statearr_26191_26211 = state_26184__$1;
(statearr_26191_26211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26185 === (6))){
var state_26184__$1 = state_26184;
var statearr_26192_26212 = state_26184__$1;
(statearr_26192_26212[(2)] = null);

(statearr_26192_26212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26185 === (3))){
var inst_26181 = (state_26184[(2)]);
var inst_26182 = cljs.core.async.close_BANG_.call(null,out);
var state_26184__$1 = (function (){var statearr_26193 = state_26184;
(statearr_26193[(9)] = inst_26181);

return statearr_26193;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26184__$1,inst_26182);
} else {
if((state_val_26185 === (2))){
var state_26184__$1 = state_26184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26184__$1,(4),ch);
} else {
if((state_val_26185 === (11))){
var inst_26164 = (state_26184[(8)]);
var inst_26173 = (state_26184[(2)]);
var inst_26161 = inst_26164;
var state_26184__$1 = (function (){var statearr_26194 = state_26184;
(statearr_26194[(7)] = inst_26161);

(statearr_26194[(10)] = inst_26173);

return statearr_26194;
})();
var statearr_26195_26213 = state_26184__$1;
(statearr_26195_26213[(2)] = null);

(statearr_26195_26213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26185 === (9))){
var inst_26164 = (state_26184[(8)]);
var state_26184__$1 = state_26184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26184__$1,(11),out,inst_26164);
} else {
if((state_val_26185 === (5))){
var inst_26161 = (state_26184[(7)]);
var inst_26164 = (state_26184[(8)]);
var inst_26168 = cljs.core._EQ_.call(null,inst_26164,inst_26161);
var state_26184__$1 = state_26184;
if(inst_26168){
var statearr_26197_26214 = state_26184__$1;
(statearr_26197_26214[(1)] = (8));

} else {
var statearr_26198_26215 = state_26184__$1;
(statearr_26198_26215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26185 === (10))){
var inst_26176 = (state_26184[(2)]);
var state_26184__$1 = state_26184;
var statearr_26199_26216 = state_26184__$1;
(statearr_26199_26216[(2)] = inst_26176);

(statearr_26199_26216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26185 === (8))){
var inst_26161 = (state_26184[(7)]);
var tmp26196 = inst_26161;
var inst_26161__$1 = tmp26196;
var state_26184__$1 = (function (){var statearr_26200 = state_26184;
(statearr_26200[(7)] = inst_26161__$1);

return statearr_26200;
})();
var statearr_26201_26217 = state_26184__$1;
(statearr_26201_26217[(2)] = null);

(statearr_26201_26217[(1)] = (2));


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
});})(c__24471__auto___26207,out))
;
return ((function (switch__24381__auto__,c__24471__auto___26207,out){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_26202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26202[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_26202[(1)] = (1));

return statearr_26202;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_26184){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_26184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26203){if((e26203 instanceof Object)){
var ex__24385__auto__ = e26203;
var statearr_26204_26218 = state_26184;
(statearr_26204_26218[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26219 = state_26184;
state_26184 = G__26219;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_26184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_26184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___26207,out))
})();
var state__24473__auto__ = (function (){var statearr_26205 = f__24472__auto__.call(null);
(statearr_26205[(6)] = c__24471__auto___26207);

return statearr_26205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___26207,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26221 = arguments.length;
switch (G__26221) {
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
var c__24471__auto___26287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___26287,out){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___26287,out){
return (function (state_26259){
var state_val_26260 = (state_26259[(1)]);
if((state_val_26260 === (7))){
var inst_26255 = (state_26259[(2)]);
var state_26259__$1 = state_26259;
var statearr_26261_26288 = state_26259__$1;
(statearr_26261_26288[(2)] = inst_26255);

(statearr_26261_26288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (1))){
var inst_26222 = (new Array(n));
var inst_26223 = inst_26222;
var inst_26224 = (0);
var state_26259__$1 = (function (){var statearr_26262 = state_26259;
(statearr_26262[(7)] = inst_26223);

(statearr_26262[(8)] = inst_26224);

return statearr_26262;
})();
var statearr_26263_26289 = state_26259__$1;
(statearr_26263_26289[(2)] = null);

(statearr_26263_26289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (4))){
var inst_26227 = (state_26259[(9)]);
var inst_26227__$1 = (state_26259[(2)]);
var inst_26228 = (inst_26227__$1 == null);
var inst_26229 = cljs.core.not.call(null,inst_26228);
var state_26259__$1 = (function (){var statearr_26264 = state_26259;
(statearr_26264[(9)] = inst_26227__$1);

return statearr_26264;
})();
if(inst_26229){
var statearr_26265_26290 = state_26259__$1;
(statearr_26265_26290[(1)] = (5));

} else {
var statearr_26266_26291 = state_26259__$1;
(statearr_26266_26291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (15))){
var inst_26249 = (state_26259[(2)]);
var state_26259__$1 = state_26259;
var statearr_26267_26292 = state_26259__$1;
(statearr_26267_26292[(2)] = inst_26249);

(statearr_26267_26292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (13))){
var state_26259__$1 = state_26259;
var statearr_26268_26293 = state_26259__$1;
(statearr_26268_26293[(2)] = null);

(statearr_26268_26293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (6))){
var inst_26224 = (state_26259[(8)]);
var inst_26245 = (inst_26224 > (0));
var state_26259__$1 = state_26259;
if(cljs.core.truth_(inst_26245)){
var statearr_26269_26294 = state_26259__$1;
(statearr_26269_26294[(1)] = (12));

} else {
var statearr_26270_26295 = state_26259__$1;
(statearr_26270_26295[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (3))){
var inst_26257 = (state_26259[(2)]);
var state_26259__$1 = state_26259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26259__$1,inst_26257);
} else {
if((state_val_26260 === (12))){
var inst_26223 = (state_26259[(7)]);
var inst_26247 = cljs.core.vec.call(null,inst_26223);
var state_26259__$1 = state_26259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26259__$1,(15),out,inst_26247);
} else {
if((state_val_26260 === (2))){
var state_26259__$1 = state_26259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26259__$1,(4),ch);
} else {
if((state_val_26260 === (11))){
var inst_26239 = (state_26259[(2)]);
var inst_26240 = (new Array(n));
var inst_26223 = inst_26240;
var inst_26224 = (0);
var state_26259__$1 = (function (){var statearr_26271 = state_26259;
(statearr_26271[(7)] = inst_26223);

(statearr_26271[(10)] = inst_26239);

(statearr_26271[(8)] = inst_26224);

return statearr_26271;
})();
var statearr_26272_26296 = state_26259__$1;
(statearr_26272_26296[(2)] = null);

(statearr_26272_26296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (9))){
var inst_26223 = (state_26259[(7)]);
var inst_26237 = cljs.core.vec.call(null,inst_26223);
var state_26259__$1 = state_26259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26259__$1,(11),out,inst_26237);
} else {
if((state_val_26260 === (5))){
var inst_26223 = (state_26259[(7)]);
var inst_26227 = (state_26259[(9)]);
var inst_26224 = (state_26259[(8)]);
var inst_26232 = (state_26259[(11)]);
var inst_26231 = (inst_26223[inst_26224] = inst_26227);
var inst_26232__$1 = (inst_26224 + (1));
var inst_26233 = (inst_26232__$1 < n);
var state_26259__$1 = (function (){var statearr_26273 = state_26259;
(statearr_26273[(12)] = inst_26231);

(statearr_26273[(11)] = inst_26232__$1);

return statearr_26273;
})();
if(cljs.core.truth_(inst_26233)){
var statearr_26274_26297 = state_26259__$1;
(statearr_26274_26297[(1)] = (8));

} else {
var statearr_26275_26298 = state_26259__$1;
(statearr_26275_26298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (14))){
var inst_26252 = (state_26259[(2)]);
var inst_26253 = cljs.core.async.close_BANG_.call(null,out);
var state_26259__$1 = (function (){var statearr_26277 = state_26259;
(statearr_26277[(13)] = inst_26252);

return statearr_26277;
})();
var statearr_26278_26299 = state_26259__$1;
(statearr_26278_26299[(2)] = inst_26253);

(statearr_26278_26299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (10))){
var inst_26243 = (state_26259[(2)]);
var state_26259__$1 = state_26259;
var statearr_26279_26300 = state_26259__$1;
(statearr_26279_26300[(2)] = inst_26243);

(statearr_26279_26300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (8))){
var inst_26223 = (state_26259[(7)]);
var inst_26232 = (state_26259[(11)]);
var tmp26276 = inst_26223;
var inst_26223__$1 = tmp26276;
var inst_26224 = inst_26232;
var state_26259__$1 = (function (){var statearr_26280 = state_26259;
(statearr_26280[(7)] = inst_26223__$1);

(statearr_26280[(8)] = inst_26224);

return statearr_26280;
})();
var statearr_26281_26301 = state_26259__$1;
(statearr_26281_26301[(2)] = null);

(statearr_26281_26301[(1)] = (2));


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
});})(c__24471__auto___26287,out))
;
return ((function (switch__24381__auto__,c__24471__auto___26287,out){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_26282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26282[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_26282[(1)] = (1));

return statearr_26282;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_26259){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_26259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26283){if((e26283 instanceof Object)){
var ex__24385__auto__ = e26283;
var statearr_26284_26302 = state_26259;
(statearr_26284_26302[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26303 = state_26259;
state_26259 = G__26303;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_26259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_26259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___26287,out))
})();
var state__24473__auto__ = (function (){var statearr_26285 = f__24472__auto__.call(null);
(statearr_26285[(6)] = c__24471__auto___26287);

return statearr_26285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___26287,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26305 = arguments.length;
switch (G__26305) {
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
var c__24471__auto___26375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___26375,out){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___26375,out){
return (function (state_26347){
var state_val_26348 = (state_26347[(1)]);
if((state_val_26348 === (7))){
var inst_26343 = (state_26347[(2)]);
var state_26347__$1 = state_26347;
var statearr_26349_26376 = state_26347__$1;
(statearr_26349_26376[(2)] = inst_26343);

(statearr_26349_26376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (1))){
var inst_26306 = [];
var inst_26307 = inst_26306;
var inst_26308 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26347__$1 = (function (){var statearr_26350 = state_26347;
(statearr_26350[(7)] = inst_26308);

(statearr_26350[(8)] = inst_26307);

return statearr_26350;
})();
var statearr_26351_26377 = state_26347__$1;
(statearr_26351_26377[(2)] = null);

(statearr_26351_26377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (4))){
var inst_26311 = (state_26347[(9)]);
var inst_26311__$1 = (state_26347[(2)]);
var inst_26312 = (inst_26311__$1 == null);
var inst_26313 = cljs.core.not.call(null,inst_26312);
var state_26347__$1 = (function (){var statearr_26352 = state_26347;
(statearr_26352[(9)] = inst_26311__$1);

return statearr_26352;
})();
if(inst_26313){
var statearr_26353_26378 = state_26347__$1;
(statearr_26353_26378[(1)] = (5));

} else {
var statearr_26354_26379 = state_26347__$1;
(statearr_26354_26379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (15))){
var inst_26337 = (state_26347[(2)]);
var state_26347__$1 = state_26347;
var statearr_26355_26380 = state_26347__$1;
(statearr_26355_26380[(2)] = inst_26337);

(statearr_26355_26380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (13))){
var state_26347__$1 = state_26347;
var statearr_26356_26381 = state_26347__$1;
(statearr_26356_26381[(2)] = null);

(statearr_26356_26381[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (6))){
var inst_26307 = (state_26347[(8)]);
var inst_26332 = inst_26307.length;
var inst_26333 = (inst_26332 > (0));
var state_26347__$1 = state_26347;
if(cljs.core.truth_(inst_26333)){
var statearr_26357_26382 = state_26347__$1;
(statearr_26357_26382[(1)] = (12));

} else {
var statearr_26358_26383 = state_26347__$1;
(statearr_26358_26383[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (3))){
var inst_26345 = (state_26347[(2)]);
var state_26347__$1 = state_26347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26347__$1,inst_26345);
} else {
if((state_val_26348 === (12))){
var inst_26307 = (state_26347[(8)]);
var inst_26335 = cljs.core.vec.call(null,inst_26307);
var state_26347__$1 = state_26347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26347__$1,(15),out,inst_26335);
} else {
if((state_val_26348 === (2))){
var state_26347__$1 = state_26347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26347__$1,(4),ch);
} else {
if((state_val_26348 === (11))){
var inst_26315 = (state_26347[(10)]);
var inst_26311 = (state_26347[(9)]);
var inst_26325 = (state_26347[(2)]);
var inst_26326 = [];
var inst_26327 = inst_26326.push(inst_26311);
var inst_26307 = inst_26326;
var inst_26308 = inst_26315;
var state_26347__$1 = (function (){var statearr_26359 = state_26347;
(statearr_26359[(11)] = inst_26327);

(statearr_26359[(7)] = inst_26308);

(statearr_26359[(8)] = inst_26307);

(statearr_26359[(12)] = inst_26325);

return statearr_26359;
})();
var statearr_26360_26384 = state_26347__$1;
(statearr_26360_26384[(2)] = null);

(statearr_26360_26384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (9))){
var inst_26307 = (state_26347[(8)]);
var inst_26323 = cljs.core.vec.call(null,inst_26307);
var state_26347__$1 = state_26347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26347__$1,(11),out,inst_26323);
} else {
if((state_val_26348 === (5))){
var inst_26315 = (state_26347[(10)]);
var inst_26308 = (state_26347[(7)]);
var inst_26311 = (state_26347[(9)]);
var inst_26315__$1 = f.call(null,inst_26311);
var inst_26316 = cljs.core._EQ_.call(null,inst_26315__$1,inst_26308);
var inst_26317 = cljs.core.keyword_identical_QMARK_.call(null,inst_26308,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26318 = ((inst_26316) || (inst_26317));
var state_26347__$1 = (function (){var statearr_26361 = state_26347;
(statearr_26361[(10)] = inst_26315__$1);

return statearr_26361;
})();
if(cljs.core.truth_(inst_26318)){
var statearr_26362_26385 = state_26347__$1;
(statearr_26362_26385[(1)] = (8));

} else {
var statearr_26363_26386 = state_26347__$1;
(statearr_26363_26386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (14))){
var inst_26340 = (state_26347[(2)]);
var inst_26341 = cljs.core.async.close_BANG_.call(null,out);
var state_26347__$1 = (function (){var statearr_26365 = state_26347;
(statearr_26365[(13)] = inst_26340);

return statearr_26365;
})();
var statearr_26366_26387 = state_26347__$1;
(statearr_26366_26387[(2)] = inst_26341);

(statearr_26366_26387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (10))){
var inst_26330 = (state_26347[(2)]);
var state_26347__$1 = state_26347;
var statearr_26367_26388 = state_26347__$1;
(statearr_26367_26388[(2)] = inst_26330);

(statearr_26367_26388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (8))){
var inst_26315 = (state_26347[(10)]);
var inst_26311 = (state_26347[(9)]);
var inst_26307 = (state_26347[(8)]);
var inst_26320 = inst_26307.push(inst_26311);
var tmp26364 = inst_26307;
var inst_26307__$1 = tmp26364;
var inst_26308 = inst_26315;
var state_26347__$1 = (function (){var statearr_26368 = state_26347;
(statearr_26368[(7)] = inst_26308);

(statearr_26368[(8)] = inst_26307__$1);

(statearr_26368[(14)] = inst_26320);

return statearr_26368;
})();
var statearr_26369_26389 = state_26347__$1;
(statearr_26369_26389[(2)] = null);

(statearr_26369_26389[(1)] = (2));


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
});})(c__24471__auto___26375,out))
;
return ((function (switch__24381__auto__,c__24471__auto___26375,out){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_26370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26370[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_26370[(1)] = (1));

return statearr_26370;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_26347){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_26347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26371){if((e26371 instanceof Object)){
var ex__24385__auto__ = e26371;
var statearr_26372_26390 = state_26347;
(statearr_26372_26390[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26391 = state_26347;
state_26347 = G__26391;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_26347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_26347);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___26375,out))
})();
var state__24473__auto__ = (function (){var statearr_26373 = f__24472__auto__.call(null);
(statearr_26373[(6)] = c__24471__auto___26375);

return statearr_26373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___26375,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1533908785861
