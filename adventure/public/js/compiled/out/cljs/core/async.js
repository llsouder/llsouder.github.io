// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31239 = arguments.length;
switch (G__31239) {
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
if(typeof cljs.core.async.t_cljs$core$async31240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31240 = (function (f,blockable,meta31241){
this.f = f;
this.blockable = blockable;
this.meta31241 = meta31241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31242,meta31241__$1){
var self__ = this;
var _31242__$1 = this;
return (new cljs.core.async.t_cljs$core$async31240(self__.f,self__.blockable,meta31241__$1));
});

cljs.core.async.t_cljs$core$async31240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31242){
var self__ = this;
var _31242__$1 = this;
return self__.meta31241;
});

cljs.core.async.t_cljs$core$async31240.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31241","meta31241",-1259932728,null)], null);
});

cljs.core.async.t_cljs$core$async31240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31240";

cljs.core.async.t_cljs$core$async31240.cljs$lang$ctorPrWriter = (function (this__28390__auto__,writer__28391__auto__,opt__28392__auto__){
return cljs.core._write.call(null,writer__28391__auto__,"cljs.core.async/t_cljs$core$async31240");
});

cljs.core.async.__GT_t_cljs$core$async31240 = (function cljs$core$async$__GT_t_cljs$core$async31240(f__$1,blockable__$1,meta31241){
return (new cljs.core.async.t_cljs$core$async31240(f__$1,blockable__$1,meta31241));
});

}

return (new cljs.core.async.t_cljs$core$async31240(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__31246 = arguments.length;
switch (G__31246) {
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
var G__31249 = arguments.length;
switch (G__31249) {
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
var G__31252 = arguments.length;
switch (G__31252) {
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
var val_31254 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31254);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31254,ret){
return (function (){
return fn1.call(null,val_31254);
});})(val_31254,ret))
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
var G__31256 = arguments.length;
switch (G__31256) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__28710__auto___31258 = n;
var x_31259 = (0);
while(true){
if((x_31259 < n__28710__auto___31258)){
(a[x_31259] = (0));

var G__31260 = (x_31259 + (1));
x_31259 = G__31260;
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

var G__31261 = (i + (1));
i = G__31261;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31262 = (function (flag,meta31263){
this.flag = flag;
this.meta31263 = meta31263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31264,meta31263__$1){
var self__ = this;
var _31264__$1 = this;
return (new cljs.core.async.t_cljs$core$async31262(self__.flag,meta31263__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31264){
var self__ = this;
var _31264__$1 = this;
return self__.meta31263;
});})(flag))
;

cljs.core.async.t_cljs$core$async31262.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31262.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31262.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31263","meta31263",-885646522,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31262";

cljs.core.async.t_cljs$core$async31262.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28390__auto__,writer__28391__auto__,opt__28392__auto__){
return cljs.core._write.call(null,writer__28391__auto__,"cljs.core.async/t_cljs$core$async31262");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31262 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31262(flag__$1,meta31263){
return (new cljs.core.async.t_cljs$core$async31262(flag__$1,meta31263));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31262(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31265 = (function (flag,cb,meta31266){
this.flag = flag;
this.cb = cb;
this.meta31266 = meta31266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31267,meta31266__$1){
var self__ = this;
var _31267__$1 = this;
return (new cljs.core.async.t_cljs$core$async31265(self__.flag,self__.cb,meta31266__$1));
});

cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31267){
var self__ = this;
var _31267__$1 = this;
return self__.meta31266;
});

cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31266","meta31266",-175609914,null)], null);
});

cljs.core.async.t_cljs$core$async31265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31265";

cljs.core.async.t_cljs$core$async31265.cljs$lang$ctorPrWriter = (function (this__28390__auto__,writer__28391__auto__,opt__28392__auto__){
return cljs.core._write.call(null,writer__28391__auto__,"cljs.core.async/t_cljs$core$async31265");
});

cljs.core.async.__GT_t_cljs$core$async31265 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31265(flag__$1,cb__$1,meta31266){
return (new cljs.core.async.t_cljs$core$async31265(flag__$1,cb__$1,meta31266));
});

}

return (new cljs.core.async.t_cljs$core$async31265(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31268_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31268_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31269_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31269_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27765__auto__ = wport;
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31270 = (i + (1));
i = G__31270;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27765__auto__ = ret;
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27753__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27753__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27753__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__28941__auto__ = [];
var len__28934__auto___31276 = arguments.length;
var i__28935__auto___31277 = (0);
while(true){
if((i__28935__auto___31277 < len__28934__auto___31276)){
args__28941__auto__.push((arguments[i__28935__auto___31277]));

var G__31278 = (i__28935__auto___31277 + (1));
i__28935__auto___31277 = G__31278;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((1) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28942__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31273){
var map__31274 = p__31273;
var map__31274__$1 = ((((!((map__31274 == null)))?((((map__31274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31274):map__31274);
var opts = map__31274__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31271){
var G__31272 = cljs.core.first.call(null,seq31271);
var seq31271__$1 = cljs.core.next.call(null,seq31271);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31272,seq31271__$1);
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
var G__31280 = arguments.length;
switch (G__31280) {
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
var c__31193__auto___31326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___31326){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___31326){
return (function (state_31304){
var state_val_31305 = (state_31304[(1)]);
if((state_val_31305 === (7))){
var inst_31300 = (state_31304[(2)]);
var state_31304__$1 = state_31304;
var statearr_31306_31327 = state_31304__$1;
(statearr_31306_31327[(2)] = inst_31300);

(statearr_31306_31327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (1))){
var state_31304__$1 = state_31304;
var statearr_31307_31328 = state_31304__$1;
(statearr_31307_31328[(2)] = null);

(statearr_31307_31328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (4))){
var inst_31283 = (state_31304[(7)]);
var inst_31283__$1 = (state_31304[(2)]);
var inst_31284 = (inst_31283__$1 == null);
var state_31304__$1 = (function (){var statearr_31308 = state_31304;
(statearr_31308[(7)] = inst_31283__$1);

return statearr_31308;
})();
if(cljs.core.truth_(inst_31284)){
var statearr_31309_31329 = state_31304__$1;
(statearr_31309_31329[(1)] = (5));

} else {
var statearr_31310_31330 = state_31304__$1;
(statearr_31310_31330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (13))){
var state_31304__$1 = state_31304;
var statearr_31311_31331 = state_31304__$1;
(statearr_31311_31331[(2)] = null);

(statearr_31311_31331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (6))){
var inst_31283 = (state_31304[(7)]);
var state_31304__$1 = state_31304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31304__$1,(11),to,inst_31283);
} else {
if((state_val_31305 === (3))){
var inst_31302 = (state_31304[(2)]);
var state_31304__$1 = state_31304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31304__$1,inst_31302);
} else {
if((state_val_31305 === (12))){
var state_31304__$1 = state_31304;
var statearr_31312_31332 = state_31304__$1;
(statearr_31312_31332[(2)] = null);

(statearr_31312_31332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (2))){
var state_31304__$1 = state_31304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31304__$1,(4),from);
} else {
if((state_val_31305 === (11))){
var inst_31293 = (state_31304[(2)]);
var state_31304__$1 = state_31304;
if(cljs.core.truth_(inst_31293)){
var statearr_31313_31333 = state_31304__$1;
(statearr_31313_31333[(1)] = (12));

} else {
var statearr_31314_31334 = state_31304__$1;
(statearr_31314_31334[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (9))){
var state_31304__$1 = state_31304;
var statearr_31315_31335 = state_31304__$1;
(statearr_31315_31335[(2)] = null);

(statearr_31315_31335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (5))){
var state_31304__$1 = state_31304;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31316_31336 = state_31304__$1;
(statearr_31316_31336[(1)] = (8));

} else {
var statearr_31317_31337 = state_31304__$1;
(statearr_31317_31337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (14))){
var inst_31298 = (state_31304[(2)]);
var state_31304__$1 = state_31304;
var statearr_31318_31338 = state_31304__$1;
(statearr_31318_31338[(2)] = inst_31298);

(statearr_31318_31338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (10))){
var inst_31290 = (state_31304[(2)]);
var state_31304__$1 = state_31304;
var statearr_31319_31339 = state_31304__$1;
(statearr_31319_31339[(2)] = inst_31290);

(statearr_31319_31339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (8))){
var inst_31287 = cljs.core.async.close_BANG_.call(null,to);
var state_31304__$1 = state_31304;
var statearr_31320_31340 = state_31304__$1;
(statearr_31320_31340[(2)] = inst_31287);

(statearr_31320_31340[(1)] = (10));


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
});})(c__31193__auto___31326))
;
return ((function (switch__31105__auto__,c__31193__auto___31326){
return (function() {
var cljs$core$async$state_machine__31106__auto__ = null;
var cljs$core$async$state_machine__31106__auto____0 = (function (){
var statearr_31321 = [null,null,null,null,null,null,null,null];
(statearr_31321[(0)] = cljs$core$async$state_machine__31106__auto__);

(statearr_31321[(1)] = (1));

return statearr_31321;
});
var cljs$core$async$state_machine__31106__auto____1 = (function (state_31304){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_31304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e31322){if((e31322 instanceof Object)){
var ex__31109__auto__ = e31322;
var statearr_31323_31341 = state_31304;
(statearr_31323_31341[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31342 = state_31304;
state_31304 = G__31342;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$state_machine__31106__auto__ = function(state_31304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31106__auto____1.call(this,state_31304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31106__auto____0;
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31106__auto____1;
return cljs$core$async$state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___31326))
})();
var state__31195__auto__ = (function (){var statearr_31324 = f__31194__auto__.call(null);
(statearr_31324[(6)] = c__31193__auto___31326);

return statearr_31324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___31326))
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
return (function (p__31343){
var vec__31344 = p__31343;
var v = cljs.core.nth.call(null,vec__31344,(0),null);
var p = cljs.core.nth.call(null,vec__31344,(1),null);
var job = vec__31344;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31193__auto___31515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___31515,res,vec__31344,v,p,job,jobs,results){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___31515,res,vec__31344,v,p,job,jobs,results){
return (function (state_31351){
var state_val_31352 = (state_31351[(1)]);
if((state_val_31352 === (1))){
var state_31351__$1 = state_31351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31351__$1,(2),res,v);
} else {
if((state_val_31352 === (2))){
var inst_31348 = (state_31351[(2)]);
var inst_31349 = cljs.core.async.close_BANG_.call(null,res);
var state_31351__$1 = (function (){var statearr_31353 = state_31351;
(statearr_31353[(7)] = inst_31348);

return statearr_31353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31351__$1,inst_31349);
} else {
return null;
}
}
});})(c__31193__auto___31515,res,vec__31344,v,p,job,jobs,results))
;
return ((function (switch__31105__auto__,c__31193__auto___31515,res,vec__31344,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0 = (function (){
var statearr_31354 = [null,null,null,null,null,null,null,null];
(statearr_31354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__);

(statearr_31354[(1)] = (1));

return statearr_31354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1 = (function (state_31351){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_31351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e31355){if((e31355 instanceof Object)){
var ex__31109__auto__ = e31355;
var statearr_31356_31516 = state_31351;
(statearr_31356_31516[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31517 = state_31351;
state_31351 = G__31517;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__ = function(state_31351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1.call(this,state_31351);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___31515,res,vec__31344,v,p,job,jobs,results))
})();
var state__31195__auto__ = (function (){var statearr_31357 = f__31194__auto__.call(null);
(statearr_31357[(6)] = c__31193__auto___31515);

return statearr_31357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___31515,res,vec__31344,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31358){
var vec__31359 = p__31358;
var v = cljs.core.nth.call(null,vec__31359,(0),null);
var p = cljs.core.nth.call(null,vec__31359,(1),null);
var job = vec__31359;
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
var n__28710__auto___31518 = n;
var __31519 = (0);
while(true){
if((__31519 < n__28710__auto___31518)){
var G__31362_31520 = type;
var G__31362_31521__$1 = (((G__31362_31520 instanceof cljs.core.Keyword))?G__31362_31520.fqn:null);
switch (G__31362_31521__$1) {
case "compute":
var c__31193__auto___31523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31519,c__31193__auto___31523,G__31362_31520,G__31362_31521__$1,n__28710__auto___31518,jobs,results,process,async){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (__31519,c__31193__auto___31523,G__31362_31520,G__31362_31521__$1,n__28710__auto___31518,jobs,results,process,async){
return (function (state_31375){
var state_val_31376 = (state_31375[(1)]);
if((state_val_31376 === (1))){
var state_31375__$1 = state_31375;
var statearr_31377_31524 = state_31375__$1;
(statearr_31377_31524[(2)] = null);

(statearr_31377_31524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (2))){
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31375__$1,(4),jobs);
} else {
if((state_val_31376 === (3))){
var inst_31373 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31375__$1,inst_31373);
} else {
if((state_val_31376 === (4))){
var inst_31365 = (state_31375[(2)]);
var inst_31366 = process.call(null,inst_31365);
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31366)){
var statearr_31378_31525 = state_31375__$1;
(statearr_31378_31525[(1)] = (5));

} else {
var statearr_31379_31526 = state_31375__$1;
(statearr_31379_31526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (5))){
var state_31375__$1 = state_31375;
var statearr_31380_31527 = state_31375__$1;
(statearr_31380_31527[(2)] = null);

(statearr_31380_31527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (6))){
var state_31375__$1 = state_31375;
var statearr_31381_31528 = state_31375__$1;
(statearr_31381_31528[(2)] = null);

(statearr_31381_31528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (7))){
var inst_31371 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31382_31529 = state_31375__$1;
(statearr_31382_31529[(2)] = inst_31371);

(statearr_31382_31529[(1)] = (3));


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
});})(__31519,c__31193__auto___31523,G__31362_31520,G__31362_31521__$1,n__28710__auto___31518,jobs,results,process,async))
;
return ((function (__31519,switch__31105__auto__,c__31193__auto___31523,G__31362_31520,G__31362_31521__$1,n__28710__auto___31518,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0 = (function (){
var statearr_31383 = [null,null,null,null,null,null,null];
(statearr_31383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__);

(statearr_31383[(1)] = (1));

return statearr_31383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1 = (function (state_31375){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_31375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e31384){if((e31384 instanceof Object)){
var ex__31109__auto__ = e31384;
var statearr_31385_31530 = state_31375;
(statearr_31385_31530[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31531 = state_31375;
state_31375 = G__31531;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__ = function(state_31375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1.call(this,state_31375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__;
})()
;})(__31519,switch__31105__auto__,c__31193__auto___31523,G__31362_31520,G__31362_31521__$1,n__28710__auto___31518,jobs,results,process,async))
})();
var state__31195__auto__ = (function (){var statearr_31386 = f__31194__auto__.call(null);
(statearr_31386[(6)] = c__31193__auto___31523);

return statearr_31386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(__31519,c__31193__auto___31523,G__31362_31520,G__31362_31521__$1,n__28710__auto___31518,jobs,results,process,async))
);


break;
case "async":
var c__31193__auto___31532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31519,c__31193__auto___31532,G__31362_31520,G__31362_31521__$1,n__28710__auto___31518,jobs,results,process,async){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (__31519,c__31193__auto___31532,G__31362_31520,G__31362_31521__$1,n__28710__auto___31518,jobs,results,process,async){
return (function (state_31399){
var state_val_31400 = (state_31399[(1)]);
if((state_val_31400 === (1))){
var state_31399__$1 = state_31399;
var statearr_31401_31533 = state_31399__$1;
(statearr_31401_31533[(2)] = null);

(statearr_31401_31533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (2))){
var state_31399__$1 = state_31399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31399__$1,(4),jobs);
} else {
if((state_val_31400 === (3))){
var inst_31397 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31399__$1,inst_31397);
} else {
if((state_val_31400 === (4))){
var inst_31389 = (state_31399[(2)]);
var inst_31390 = async.call(null,inst_31389);
var state_31399__$1 = state_31399;
if(cljs.core.truth_(inst_31390)){
var statearr_31402_31534 = state_31399__$1;
(statearr_31402_31534[(1)] = (5));

} else {
var statearr_31403_31535 = state_31399__$1;
(statearr_31403_31535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (5))){
var state_31399__$1 = state_31399;
var statearr_31404_31536 = state_31399__$1;
(statearr_31404_31536[(2)] = null);

(statearr_31404_31536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (6))){
var state_31399__$1 = state_31399;
var statearr_31405_31537 = state_31399__$1;
(statearr_31405_31537[(2)] = null);

(statearr_31405_31537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (7))){
var inst_31395 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31406_31538 = state_31399__$1;
(statearr_31406_31538[(2)] = inst_31395);

(statearr_31406_31538[(1)] = (3));


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
});})(__31519,c__31193__auto___31532,G__31362_31520,G__31362_31521__$1,n__28710__auto___31518,jobs,results,process,async))
;
return ((function (__31519,switch__31105__auto__,c__31193__auto___31532,G__31362_31520,G__31362_31521__$1,n__28710__auto___31518,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0 = (function (){
var statearr_31407 = [null,null,null,null,null,null,null];
(statearr_31407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__);

(statearr_31407[(1)] = (1));

return statearr_31407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1 = (function (state_31399){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_31399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e31408){if((e31408 instanceof Object)){
var ex__31109__auto__ = e31408;
var statearr_31409_31539 = state_31399;
(statearr_31409_31539[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31540 = state_31399;
state_31399 = G__31540;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__ = function(state_31399){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1.call(this,state_31399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__;
})()
;})(__31519,switch__31105__auto__,c__31193__auto___31532,G__31362_31520,G__31362_31521__$1,n__28710__auto___31518,jobs,results,process,async))
})();
var state__31195__auto__ = (function (){var statearr_31410 = f__31194__auto__.call(null);
(statearr_31410[(6)] = c__31193__auto___31532);

return statearr_31410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(__31519,c__31193__auto___31532,G__31362_31520,G__31362_31521__$1,n__28710__auto___31518,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31362_31521__$1)].join('')));

}

var G__31541 = (__31519 + (1));
__31519 = G__31541;
continue;
} else {
}
break;
}

var c__31193__auto___31542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___31542,jobs,results,process,async){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___31542,jobs,results,process,async){
return (function (state_31432){
var state_val_31433 = (state_31432[(1)]);
if((state_val_31433 === (1))){
var state_31432__$1 = state_31432;
var statearr_31434_31543 = state_31432__$1;
(statearr_31434_31543[(2)] = null);

(statearr_31434_31543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (2))){
var state_31432__$1 = state_31432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31432__$1,(4),from);
} else {
if((state_val_31433 === (3))){
var inst_31430 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31432__$1,inst_31430);
} else {
if((state_val_31433 === (4))){
var inst_31413 = (state_31432[(7)]);
var inst_31413__$1 = (state_31432[(2)]);
var inst_31414 = (inst_31413__$1 == null);
var state_31432__$1 = (function (){var statearr_31435 = state_31432;
(statearr_31435[(7)] = inst_31413__$1);

return statearr_31435;
})();
if(cljs.core.truth_(inst_31414)){
var statearr_31436_31544 = state_31432__$1;
(statearr_31436_31544[(1)] = (5));

} else {
var statearr_31437_31545 = state_31432__$1;
(statearr_31437_31545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (5))){
var inst_31416 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31432__$1 = state_31432;
var statearr_31438_31546 = state_31432__$1;
(statearr_31438_31546[(2)] = inst_31416);

(statearr_31438_31546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (6))){
var inst_31418 = (state_31432[(8)]);
var inst_31413 = (state_31432[(7)]);
var inst_31418__$1 = cljs.core.async.chan.call(null,(1));
var inst_31419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31420 = [inst_31413,inst_31418__$1];
var inst_31421 = (new cljs.core.PersistentVector(null,2,(5),inst_31419,inst_31420,null));
var state_31432__$1 = (function (){var statearr_31439 = state_31432;
(statearr_31439[(8)] = inst_31418__$1);

return statearr_31439;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31432__$1,(8),jobs,inst_31421);
} else {
if((state_val_31433 === (7))){
var inst_31428 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31440_31547 = state_31432__$1;
(statearr_31440_31547[(2)] = inst_31428);

(statearr_31440_31547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (8))){
var inst_31418 = (state_31432[(8)]);
var inst_31423 = (state_31432[(2)]);
var state_31432__$1 = (function (){var statearr_31441 = state_31432;
(statearr_31441[(9)] = inst_31423);

return statearr_31441;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31432__$1,(9),results,inst_31418);
} else {
if((state_val_31433 === (9))){
var inst_31425 = (state_31432[(2)]);
var state_31432__$1 = (function (){var statearr_31442 = state_31432;
(statearr_31442[(10)] = inst_31425);

return statearr_31442;
})();
var statearr_31443_31548 = state_31432__$1;
(statearr_31443_31548[(2)] = null);

(statearr_31443_31548[(1)] = (2));


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
});})(c__31193__auto___31542,jobs,results,process,async))
;
return ((function (switch__31105__auto__,c__31193__auto___31542,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0 = (function (){
var statearr_31444 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__);

(statearr_31444[(1)] = (1));

return statearr_31444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1 = (function (state_31432){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_31432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e31445){if((e31445 instanceof Object)){
var ex__31109__auto__ = e31445;
var statearr_31446_31549 = state_31432;
(statearr_31446_31549[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31550 = state_31432;
state_31432 = G__31550;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__ = function(state_31432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1.call(this,state_31432);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___31542,jobs,results,process,async))
})();
var state__31195__auto__ = (function (){var statearr_31447 = f__31194__auto__.call(null);
(statearr_31447[(6)] = c__31193__auto___31542);

return statearr_31447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___31542,jobs,results,process,async))
);


var c__31193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto__,jobs,results,process,async){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto__,jobs,results,process,async){
return (function (state_31485){
var state_val_31486 = (state_31485[(1)]);
if((state_val_31486 === (7))){
var inst_31481 = (state_31485[(2)]);
var state_31485__$1 = state_31485;
var statearr_31487_31551 = state_31485__$1;
(statearr_31487_31551[(2)] = inst_31481);

(statearr_31487_31551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (20))){
var state_31485__$1 = state_31485;
var statearr_31488_31552 = state_31485__$1;
(statearr_31488_31552[(2)] = null);

(statearr_31488_31552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (1))){
var state_31485__$1 = state_31485;
var statearr_31489_31553 = state_31485__$1;
(statearr_31489_31553[(2)] = null);

(statearr_31489_31553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (4))){
var inst_31450 = (state_31485[(7)]);
var inst_31450__$1 = (state_31485[(2)]);
var inst_31451 = (inst_31450__$1 == null);
var state_31485__$1 = (function (){var statearr_31490 = state_31485;
(statearr_31490[(7)] = inst_31450__$1);

return statearr_31490;
})();
if(cljs.core.truth_(inst_31451)){
var statearr_31491_31554 = state_31485__$1;
(statearr_31491_31554[(1)] = (5));

} else {
var statearr_31492_31555 = state_31485__$1;
(statearr_31492_31555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (15))){
var inst_31463 = (state_31485[(8)]);
var state_31485__$1 = state_31485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31485__$1,(18),to,inst_31463);
} else {
if((state_val_31486 === (21))){
var inst_31476 = (state_31485[(2)]);
var state_31485__$1 = state_31485;
var statearr_31493_31556 = state_31485__$1;
(statearr_31493_31556[(2)] = inst_31476);

(statearr_31493_31556[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (13))){
var inst_31478 = (state_31485[(2)]);
var state_31485__$1 = (function (){var statearr_31494 = state_31485;
(statearr_31494[(9)] = inst_31478);

return statearr_31494;
})();
var statearr_31495_31557 = state_31485__$1;
(statearr_31495_31557[(2)] = null);

(statearr_31495_31557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (6))){
var inst_31450 = (state_31485[(7)]);
var state_31485__$1 = state_31485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31485__$1,(11),inst_31450);
} else {
if((state_val_31486 === (17))){
var inst_31471 = (state_31485[(2)]);
var state_31485__$1 = state_31485;
if(cljs.core.truth_(inst_31471)){
var statearr_31496_31558 = state_31485__$1;
(statearr_31496_31558[(1)] = (19));

} else {
var statearr_31497_31559 = state_31485__$1;
(statearr_31497_31559[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (3))){
var inst_31483 = (state_31485[(2)]);
var state_31485__$1 = state_31485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31485__$1,inst_31483);
} else {
if((state_val_31486 === (12))){
var inst_31460 = (state_31485[(10)]);
var state_31485__$1 = state_31485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31485__$1,(14),inst_31460);
} else {
if((state_val_31486 === (2))){
var state_31485__$1 = state_31485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31485__$1,(4),results);
} else {
if((state_val_31486 === (19))){
var state_31485__$1 = state_31485;
var statearr_31498_31560 = state_31485__$1;
(statearr_31498_31560[(2)] = null);

(statearr_31498_31560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (11))){
var inst_31460 = (state_31485[(2)]);
var state_31485__$1 = (function (){var statearr_31499 = state_31485;
(statearr_31499[(10)] = inst_31460);

return statearr_31499;
})();
var statearr_31500_31561 = state_31485__$1;
(statearr_31500_31561[(2)] = null);

(statearr_31500_31561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (9))){
var state_31485__$1 = state_31485;
var statearr_31501_31562 = state_31485__$1;
(statearr_31501_31562[(2)] = null);

(statearr_31501_31562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (5))){
var state_31485__$1 = state_31485;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31502_31563 = state_31485__$1;
(statearr_31502_31563[(1)] = (8));

} else {
var statearr_31503_31564 = state_31485__$1;
(statearr_31503_31564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (14))){
var inst_31463 = (state_31485[(8)]);
var inst_31465 = (state_31485[(11)]);
var inst_31463__$1 = (state_31485[(2)]);
var inst_31464 = (inst_31463__$1 == null);
var inst_31465__$1 = cljs.core.not.call(null,inst_31464);
var state_31485__$1 = (function (){var statearr_31504 = state_31485;
(statearr_31504[(8)] = inst_31463__$1);

(statearr_31504[(11)] = inst_31465__$1);

return statearr_31504;
})();
if(inst_31465__$1){
var statearr_31505_31565 = state_31485__$1;
(statearr_31505_31565[(1)] = (15));

} else {
var statearr_31506_31566 = state_31485__$1;
(statearr_31506_31566[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (16))){
var inst_31465 = (state_31485[(11)]);
var state_31485__$1 = state_31485;
var statearr_31507_31567 = state_31485__$1;
(statearr_31507_31567[(2)] = inst_31465);

(statearr_31507_31567[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (10))){
var inst_31457 = (state_31485[(2)]);
var state_31485__$1 = state_31485;
var statearr_31508_31568 = state_31485__$1;
(statearr_31508_31568[(2)] = inst_31457);

(statearr_31508_31568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (18))){
var inst_31468 = (state_31485[(2)]);
var state_31485__$1 = state_31485;
var statearr_31509_31569 = state_31485__$1;
(statearr_31509_31569[(2)] = inst_31468);

(statearr_31509_31569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (8))){
var inst_31454 = cljs.core.async.close_BANG_.call(null,to);
var state_31485__$1 = state_31485;
var statearr_31510_31570 = state_31485__$1;
(statearr_31510_31570[(2)] = inst_31454);

(statearr_31510_31570[(1)] = (10));


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
});})(c__31193__auto__,jobs,results,process,async))
;
return ((function (switch__31105__auto__,c__31193__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0 = (function (){
var statearr_31511 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__);

(statearr_31511[(1)] = (1));

return statearr_31511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1 = (function (state_31485){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_31485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e31512){if((e31512 instanceof Object)){
var ex__31109__auto__ = e31512;
var statearr_31513_31571 = state_31485;
(statearr_31513_31571[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31572 = state_31485;
state_31485 = G__31572;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__ = function(state_31485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1.call(this,state_31485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto__,jobs,results,process,async))
})();
var state__31195__auto__ = (function (){var statearr_31514 = f__31194__auto__.call(null);
(statearr_31514[(6)] = c__31193__auto__);

return statearr_31514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto__,jobs,results,process,async))
);

return c__31193__auto__;
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
var G__31574 = arguments.length;
switch (G__31574) {
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
var G__31577 = arguments.length;
switch (G__31577) {
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
var G__31580 = arguments.length;
switch (G__31580) {
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
var c__31193__auto___31629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___31629,tc,fc){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___31629,tc,fc){
return (function (state_31606){
var state_val_31607 = (state_31606[(1)]);
if((state_val_31607 === (7))){
var inst_31602 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31608_31630 = state_31606__$1;
(statearr_31608_31630[(2)] = inst_31602);

(statearr_31608_31630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (1))){
var state_31606__$1 = state_31606;
var statearr_31609_31631 = state_31606__$1;
(statearr_31609_31631[(2)] = null);

(statearr_31609_31631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (4))){
var inst_31583 = (state_31606[(7)]);
var inst_31583__$1 = (state_31606[(2)]);
var inst_31584 = (inst_31583__$1 == null);
var state_31606__$1 = (function (){var statearr_31610 = state_31606;
(statearr_31610[(7)] = inst_31583__$1);

return statearr_31610;
})();
if(cljs.core.truth_(inst_31584)){
var statearr_31611_31632 = state_31606__$1;
(statearr_31611_31632[(1)] = (5));

} else {
var statearr_31612_31633 = state_31606__$1;
(statearr_31612_31633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (13))){
var state_31606__$1 = state_31606;
var statearr_31613_31634 = state_31606__$1;
(statearr_31613_31634[(2)] = null);

(statearr_31613_31634[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (6))){
var inst_31583 = (state_31606[(7)]);
var inst_31589 = p.call(null,inst_31583);
var state_31606__$1 = state_31606;
if(cljs.core.truth_(inst_31589)){
var statearr_31614_31635 = state_31606__$1;
(statearr_31614_31635[(1)] = (9));

} else {
var statearr_31615_31636 = state_31606__$1;
(statearr_31615_31636[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (3))){
var inst_31604 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31606__$1,inst_31604);
} else {
if((state_val_31607 === (12))){
var state_31606__$1 = state_31606;
var statearr_31616_31637 = state_31606__$1;
(statearr_31616_31637[(2)] = null);

(statearr_31616_31637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (2))){
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31606__$1,(4),ch);
} else {
if((state_val_31607 === (11))){
var inst_31583 = (state_31606[(7)]);
var inst_31593 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31606__$1,(8),inst_31593,inst_31583);
} else {
if((state_val_31607 === (9))){
var state_31606__$1 = state_31606;
var statearr_31617_31638 = state_31606__$1;
(statearr_31617_31638[(2)] = tc);

(statearr_31617_31638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (5))){
var inst_31586 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31587 = cljs.core.async.close_BANG_.call(null,fc);
var state_31606__$1 = (function (){var statearr_31618 = state_31606;
(statearr_31618[(8)] = inst_31586);

return statearr_31618;
})();
var statearr_31619_31639 = state_31606__$1;
(statearr_31619_31639[(2)] = inst_31587);

(statearr_31619_31639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (14))){
var inst_31600 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31620_31640 = state_31606__$1;
(statearr_31620_31640[(2)] = inst_31600);

(statearr_31620_31640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (10))){
var state_31606__$1 = state_31606;
var statearr_31621_31641 = state_31606__$1;
(statearr_31621_31641[(2)] = fc);

(statearr_31621_31641[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (8))){
var inst_31595 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
if(cljs.core.truth_(inst_31595)){
var statearr_31622_31642 = state_31606__$1;
(statearr_31622_31642[(1)] = (12));

} else {
var statearr_31623_31643 = state_31606__$1;
(statearr_31623_31643[(1)] = (13));

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
});})(c__31193__auto___31629,tc,fc))
;
return ((function (switch__31105__auto__,c__31193__auto___31629,tc,fc){
return (function() {
var cljs$core$async$state_machine__31106__auto__ = null;
var cljs$core$async$state_machine__31106__auto____0 = (function (){
var statearr_31624 = [null,null,null,null,null,null,null,null,null];
(statearr_31624[(0)] = cljs$core$async$state_machine__31106__auto__);

(statearr_31624[(1)] = (1));

return statearr_31624;
});
var cljs$core$async$state_machine__31106__auto____1 = (function (state_31606){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_31606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e31625){if((e31625 instanceof Object)){
var ex__31109__auto__ = e31625;
var statearr_31626_31644 = state_31606;
(statearr_31626_31644[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31645 = state_31606;
state_31606 = G__31645;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$state_machine__31106__auto__ = function(state_31606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31106__auto____1.call(this,state_31606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31106__auto____0;
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31106__auto____1;
return cljs$core$async$state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___31629,tc,fc))
})();
var state__31195__auto__ = (function (){var statearr_31627 = f__31194__auto__.call(null);
(statearr_31627[(6)] = c__31193__auto___31629);

return statearr_31627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___31629,tc,fc))
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
var c__31193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto__){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto__){
return (function (state_31666){
var state_val_31667 = (state_31666[(1)]);
if((state_val_31667 === (7))){
var inst_31662 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31668_31686 = state_31666__$1;
(statearr_31668_31686[(2)] = inst_31662);

(statearr_31668_31686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (1))){
var inst_31646 = init;
var state_31666__$1 = (function (){var statearr_31669 = state_31666;
(statearr_31669[(7)] = inst_31646);

return statearr_31669;
})();
var statearr_31670_31687 = state_31666__$1;
(statearr_31670_31687[(2)] = null);

(statearr_31670_31687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (4))){
var inst_31649 = (state_31666[(8)]);
var inst_31649__$1 = (state_31666[(2)]);
var inst_31650 = (inst_31649__$1 == null);
var state_31666__$1 = (function (){var statearr_31671 = state_31666;
(statearr_31671[(8)] = inst_31649__$1);

return statearr_31671;
})();
if(cljs.core.truth_(inst_31650)){
var statearr_31672_31688 = state_31666__$1;
(statearr_31672_31688[(1)] = (5));

} else {
var statearr_31673_31689 = state_31666__$1;
(statearr_31673_31689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (6))){
var inst_31649 = (state_31666[(8)]);
var inst_31646 = (state_31666[(7)]);
var inst_31653 = (state_31666[(9)]);
var inst_31653__$1 = f.call(null,inst_31646,inst_31649);
var inst_31654 = cljs.core.reduced_QMARK_.call(null,inst_31653__$1);
var state_31666__$1 = (function (){var statearr_31674 = state_31666;
(statearr_31674[(9)] = inst_31653__$1);

return statearr_31674;
})();
if(inst_31654){
var statearr_31675_31690 = state_31666__$1;
(statearr_31675_31690[(1)] = (8));

} else {
var statearr_31676_31691 = state_31666__$1;
(statearr_31676_31691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (3))){
var inst_31664 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31666__$1,inst_31664);
} else {
if((state_val_31667 === (2))){
var state_31666__$1 = state_31666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31666__$1,(4),ch);
} else {
if((state_val_31667 === (9))){
var inst_31653 = (state_31666[(9)]);
var inst_31646 = inst_31653;
var state_31666__$1 = (function (){var statearr_31677 = state_31666;
(statearr_31677[(7)] = inst_31646);

return statearr_31677;
})();
var statearr_31678_31692 = state_31666__$1;
(statearr_31678_31692[(2)] = null);

(statearr_31678_31692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (5))){
var inst_31646 = (state_31666[(7)]);
var state_31666__$1 = state_31666;
var statearr_31679_31693 = state_31666__$1;
(statearr_31679_31693[(2)] = inst_31646);

(statearr_31679_31693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (10))){
var inst_31660 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31680_31694 = state_31666__$1;
(statearr_31680_31694[(2)] = inst_31660);

(statearr_31680_31694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (8))){
var inst_31653 = (state_31666[(9)]);
var inst_31656 = cljs.core.deref.call(null,inst_31653);
var state_31666__$1 = state_31666;
var statearr_31681_31695 = state_31666__$1;
(statearr_31681_31695[(2)] = inst_31656);

(statearr_31681_31695[(1)] = (10));


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
});})(c__31193__auto__))
;
return ((function (switch__31105__auto__,c__31193__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31106__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31106__auto____0 = (function (){
var statearr_31682 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31682[(0)] = cljs$core$async$reduce_$_state_machine__31106__auto__);

(statearr_31682[(1)] = (1));

return statearr_31682;
});
var cljs$core$async$reduce_$_state_machine__31106__auto____1 = (function (state_31666){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_31666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e31683){if((e31683 instanceof Object)){
var ex__31109__auto__ = e31683;
var statearr_31684_31696 = state_31666;
(statearr_31684_31696[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31697 = state_31666;
state_31666 = G__31697;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31106__auto__ = function(state_31666){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31106__auto____1.call(this,state_31666);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31106__auto____0;
cljs$core$async$reduce_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31106__auto____1;
return cljs$core$async$reduce_$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto__))
})();
var state__31195__auto__ = (function (){var statearr_31685 = f__31194__auto__.call(null);
(statearr_31685[(6)] = c__31193__auto__);

return statearr_31685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto__))
);

return c__31193__auto__;
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
var G__31699 = arguments.length;
switch (G__31699) {
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
var c__31193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto__){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto__){
return (function (state_31724){
var state_val_31725 = (state_31724[(1)]);
if((state_val_31725 === (7))){
var inst_31706 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31726_31747 = state_31724__$1;
(statearr_31726_31747[(2)] = inst_31706);

(statearr_31726_31747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (1))){
var inst_31700 = cljs.core.seq.call(null,coll);
var inst_31701 = inst_31700;
var state_31724__$1 = (function (){var statearr_31727 = state_31724;
(statearr_31727[(7)] = inst_31701);

return statearr_31727;
})();
var statearr_31728_31748 = state_31724__$1;
(statearr_31728_31748[(2)] = null);

(statearr_31728_31748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (4))){
var inst_31701 = (state_31724[(7)]);
var inst_31704 = cljs.core.first.call(null,inst_31701);
var state_31724__$1 = state_31724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31724__$1,(7),ch,inst_31704);
} else {
if((state_val_31725 === (13))){
var inst_31718 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31729_31749 = state_31724__$1;
(statearr_31729_31749[(2)] = inst_31718);

(statearr_31729_31749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (6))){
var inst_31709 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
if(cljs.core.truth_(inst_31709)){
var statearr_31730_31750 = state_31724__$1;
(statearr_31730_31750[(1)] = (8));

} else {
var statearr_31731_31751 = state_31724__$1;
(statearr_31731_31751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (3))){
var inst_31722 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31724__$1,inst_31722);
} else {
if((state_val_31725 === (12))){
var state_31724__$1 = state_31724;
var statearr_31732_31752 = state_31724__$1;
(statearr_31732_31752[(2)] = null);

(statearr_31732_31752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (2))){
var inst_31701 = (state_31724[(7)]);
var state_31724__$1 = state_31724;
if(cljs.core.truth_(inst_31701)){
var statearr_31733_31753 = state_31724__$1;
(statearr_31733_31753[(1)] = (4));

} else {
var statearr_31734_31754 = state_31724__$1;
(statearr_31734_31754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (11))){
var inst_31715 = cljs.core.async.close_BANG_.call(null,ch);
var state_31724__$1 = state_31724;
var statearr_31735_31755 = state_31724__$1;
(statearr_31735_31755[(2)] = inst_31715);

(statearr_31735_31755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (9))){
var state_31724__$1 = state_31724;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31736_31756 = state_31724__$1;
(statearr_31736_31756[(1)] = (11));

} else {
var statearr_31737_31757 = state_31724__$1;
(statearr_31737_31757[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (5))){
var inst_31701 = (state_31724[(7)]);
var state_31724__$1 = state_31724;
var statearr_31738_31758 = state_31724__$1;
(statearr_31738_31758[(2)] = inst_31701);

(statearr_31738_31758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (10))){
var inst_31720 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31739_31759 = state_31724__$1;
(statearr_31739_31759[(2)] = inst_31720);

(statearr_31739_31759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (8))){
var inst_31701 = (state_31724[(7)]);
var inst_31711 = cljs.core.next.call(null,inst_31701);
var inst_31701__$1 = inst_31711;
var state_31724__$1 = (function (){var statearr_31740 = state_31724;
(statearr_31740[(7)] = inst_31701__$1);

return statearr_31740;
})();
var statearr_31741_31760 = state_31724__$1;
(statearr_31741_31760[(2)] = null);

(statearr_31741_31760[(1)] = (2));


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
});})(c__31193__auto__))
;
return ((function (switch__31105__auto__,c__31193__auto__){
return (function() {
var cljs$core$async$state_machine__31106__auto__ = null;
var cljs$core$async$state_machine__31106__auto____0 = (function (){
var statearr_31742 = [null,null,null,null,null,null,null,null];
(statearr_31742[(0)] = cljs$core$async$state_machine__31106__auto__);

(statearr_31742[(1)] = (1));

return statearr_31742;
});
var cljs$core$async$state_machine__31106__auto____1 = (function (state_31724){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_31724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e31743){if((e31743 instanceof Object)){
var ex__31109__auto__ = e31743;
var statearr_31744_31761 = state_31724;
(statearr_31744_31761[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31762 = state_31724;
state_31724 = G__31762;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$state_machine__31106__auto__ = function(state_31724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31106__auto____1.call(this,state_31724);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31106__auto____0;
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31106__auto____1;
return cljs$core$async$state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto__))
})();
var state__31195__auto__ = (function (){var statearr_31745 = f__31194__auto__.call(null);
(statearr_31745[(6)] = c__31193__auto__);

return statearr_31745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto__))
);

return c__31193__auto__;
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
var x__28448__auto__ = (((_ == null))?null:_);
var m__28449__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,_);
} else {
var m__28449__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,_);
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
var x__28448__auto__ = (((m == null))?null:m);
var m__28449__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28449__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__28448__auto__ = (((m == null))?null:m);
var m__28449__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,m,ch);
} else {
var m__28449__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,m,ch);
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
var x__28448__auto__ = (((m == null))?null:m);
var m__28449__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,m);
} else {
var m__28449__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async31763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31763 = (function (ch,cs,meta31764){
this.ch = ch;
this.cs = cs;
this.meta31764 = meta31764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31765,meta31764__$1){
var self__ = this;
var _31765__$1 = this;
return (new cljs.core.async.t_cljs$core$async31763(self__.ch,self__.cs,meta31764__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31765){
var self__ = this;
var _31765__$1 = this;
return self__.meta31764;
});})(cs))
;

cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31763.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31764","meta31764",-68912076,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31763";

cljs.core.async.t_cljs$core$async31763.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28390__auto__,writer__28391__auto__,opt__28392__auto__){
return cljs.core._write.call(null,writer__28391__auto__,"cljs.core.async/t_cljs$core$async31763");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31763 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31763(ch__$1,cs__$1,meta31764){
return (new cljs.core.async.t_cljs$core$async31763(ch__$1,cs__$1,meta31764));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31763(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31193__auto___31985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___31985,cs,m,dchan,dctr,done){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___31985,cs,m,dchan,dctr,done){
return (function (state_31900){
var state_val_31901 = (state_31900[(1)]);
if((state_val_31901 === (7))){
var inst_31896 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31902_31986 = state_31900__$1;
(statearr_31902_31986[(2)] = inst_31896);

(statearr_31902_31986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (20))){
var inst_31799 = (state_31900[(7)]);
var inst_31811 = cljs.core.first.call(null,inst_31799);
var inst_31812 = cljs.core.nth.call(null,inst_31811,(0),null);
var inst_31813 = cljs.core.nth.call(null,inst_31811,(1),null);
var state_31900__$1 = (function (){var statearr_31903 = state_31900;
(statearr_31903[(8)] = inst_31812);

return statearr_31903;
})();
if(cljs.core.truth_(inst_31813)){
var statearr_31904_31987 = state_31900__$1;
(statearr_31904_31987[(1)] = (22));

} else {
var statearr_31905_31988 = state_31900__$1;
(statearr_31905_31988[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (27))){
var inst_31768 = (state_31900[(9)]);
var inst_31843 = (state_31900[(10)]);
var inst_31841 = (state_31900[(11)]);
var inst_31848 = (state_31900[(12)]);
var inst_31848__$1 = cljs.core._nth.call(null,inst_31841,inst_31843);
var inst_31849 = cljs.core.async.put_BANG_.call(null,inst_31848__$1,inst_31768,done);
var state_31900__$1 = (function (){var statearr_31906 = state_31900;
(statearr_31906[(12)] = inst_31848__$1);

return statearr_31906;
})();
if(cljs.core.truth_(inst_31849)){
var statearr_31907_31989 = state_31900__$1;
(statearr_31907_31989[(1)] = (30));

} else {
var statearr_31908_31990 = state_31900__$1;
(statearr_31908_31990[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (1))){
var state_31900__$1 = state_31900;
var statearr_31909_31991 = state_31900__$1;
(statearr_31909_31991[(2)] = null);

(statearr_31909_31991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (24))){
var inst_31799 = (state_31900[(7)]);
var inst_31818 = (state_31900[(2)]);
var inst_31819 = cljs.core.next.call(null,inst_31799);
var inst_31777 = inst_31819;
var inst_31778 = null;
var inst_31779 = (0);
var inst_31780 = (0);
var state_31900__$1 = (function (){var statearr_31910 = state_31900;
(statearr_31910[(13)] = inst_31779);

(statearr_31910[(14)] = inst_31818);

(statearr_31910[(15)] = inst_31778);

(statearr_31910[(16)] = inst_31777);

(statearr_31910[(17)] = inst_31780);

return statearr_31910;
})();
var statearr_31911_31992 = state_31900__$1;
(statearr_31911_31992[(2)] = null);

(statearr_31911_31992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (39))){
var state_31900__$1 = state_31900;
var statearr_31915_31993 = state_31900__$1;
(statearr_31915_31993[(2)] = null);

(statearr_31915_31993[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (4))){
var inst_31768 = (state_31900[(9)]);
var inst_31768__$1 = (state_31900[(2)]);
var inst_31769 = (inst_31768__$1 == null);
var state_31900__$1 = (function (){var statearr_31916 = state_31900;
(statearr_31916[(9)] = inst_31768__$1);

return statearr_31916;
})();
if(cljs.core.truth_(inst_31769)){
var statearr_31917_31994 = state_31900__$1;
(statearr_31917_31994[(1)] = (5));

} else {
var statearr_31918_31995 = state_31900__$1;
(statearr_31918_31995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (15))){
var inst_31779 = (state_31900[(13)]);
var inst_31778 = (state_31900[(15)]);
var inst_31777 = (state_31900[(16)]);
var inst_31780 = (state_31900[(17)]);
var inst_31795 = (state_31900[(2)]);
var inst_31796 = (inst_31780 + (1));
var tmp31912 = inst_31779;
var tmp31913 = inst_31778;
var tmp31914 = inst_31777;
var inst_31777__$1 = tmp31914;
var inst_31778__$1 = tmp31913;
var inst_31779__$1 = tmp31912;
var inst_31780__$1 = inst_31796;
var state_31900__$1 = (function (){var statearr_31919 = state_31900;
(statearr_31919[(13)] = inst_31779__$1);

(statearr_31919[(15)] = inst_31778__$1);

(statearr_31919[(16)] = inst_31777__$1);

(statearr_31919[(17)] = inst_31780__$1);

(statearr_31919[(18)] = inst_31795);

return statearr_31919;
})();
var statearr_31920_31996 = state_31900__$1;
(statearr_31920_31996[(2)] = null);

(statearr_31920_31996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (21))){
var inst_31822 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31924_31997 = state_31900__$1;
(statearr_31924_31997[(2)] = inst_31822);

(statearr_31924_31997[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (31))){
var inst_31848 = (state_31900[(12)]);
var inst_31852 = done.call(null,null);
var inst_31853 = cljs.core.async.untap_STAR_.call(null,m,inst_31848);
var state_31900__$1 = (function (){var statearr_31925 = state_31900;
(statearr_31925[(19)] = inst_31852);

return statearr_31925;
})();
var statearr_31926_31998 = state_31900__$1;
(statearr_31926_31998[(2)] = inst_31853);

(statearr_31926_31998[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (32))){
var inst_31842 = (state_31900[(20)]);
var inst_31843 = (state_31900[(10)]);
var inst_31840 = (state_31900[(21)]);
var inst_31841 = (state_31900[(11)]);
var inst_31855 = (state_31900[(2)]);
var inst_31856 = (inst_31843 + (1));
var tmp31921 = inst_31842;
var tmp31922 = inst_31840;
var tmp31923 = inst_31841;
var inst_31840__$1 = tmp31922;
var inst_31841__$1 = tmp31923;
var inst_31842__$1 = tmp31921;
var inst_31843__$1 = inst_31856;
var state_31900__$1 = (function (){var statearr_31927 = state_31900;
(statearr_31927[(20)] = inst_31842__$1);

(statearr_31927[(22)] = inst_31855);

(statearr_31927[(10)] = inst_31843__$1);

(statearr_31927[(21)] = inst_31840__$1);

(statearr_31927[(11)] = inst_31841__$1);

return statearr_31927;
})();
var statearr_31928_31999 = state_31900__$1;
(statearr_31928_31999[(2)] = null);

(statearr_31928_31999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (40))){
var inst_31868 = (state_31900[(23)]);
var inst_31872 = done.call(null,null);
var inst_31873 = cljs.core.async.untap_STAR_.call(null,m,inst_31868);
var state_31900__$1 = (function (){var statearr_31929 = state_31900;
(statearr_31929[(24)] = inst_31872);

return statearr_31929;
})();
var statearr_31930_32000 = state_31900__$1;
(statearr_31930_32000[(2)] = inst_31873);

(statearr_31930_32000[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (33))){
var inst_31859 = (state_31900[(25)]);
var inst_31861 = cljs.core.chunked_seq_QMARK_.call(null,inst_31859);
var state_31900__$1 = state_31900;
if(inst_31861){
var statearr_31931_32001 = state_31900__$1;
(statearr_31931_32001[(1)] = (36));

} else {
var statearr_31932_32002 = state_31900__$1;
(statearr_31932_32002[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (13))){
var inst_31789 = (state_31900[(26)]);
var inst_31792 = cljs.core.async.close_BANG_.call(null,inst_31789);
var state_31900__$1 = state_31900;
var statearr_31933_32003 = state_31900__$1;
(statearr_31933_32003[(2)] = inst_31792);

(statearr_31933_32003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (22))){
var inst_31812 = (state_31900[(8)]);
var inst_31815 = cljs.core.async.close_BANG_.call(null,inst_31812);
var state_31900__$1 = state_31900;
var statearr_31934_32004 = state_31900__$1;
(statearr_31934_32004[(2)] = inst_31815);

(statearr_31934_32004[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (36))){
var inst_31859 = (state_31900[(25)]);
var inst_31863 = cljs.core.chunk_first.call(null,inst_31859);
var inst_31864 = cljs.core.chunk_rest.call(null,inst_31859);
var inst_31865 = cljs.core.count.call(null,inst_31863);
var inst_31840 = inst_31864;
var inst_31841 = inst_31863;
var inst_31842 = inst_31865;
var inst_31843 = (0);
var state_31900__$1 = (function (){var statearr_31935 = state_31900;
(statearr_31935[(20)] = inst_31842);

(statearr_31935[(10)] = inst_31843);

(statearr_31935[(21)] = inst_31840);

(statearr_31935[(11)] = inst_31841);

return statearr_31935;
})();
var statearr_31936_32005 = state_31900__$1;
(statearr_31936_32005[(2)] = null);

(statearr_31936_32005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (41))){
var inst_31859 = (state_31900[(25)]);
var inst_31875 = (state_31900[(2)]);
var inst_31876 = cljs.core.next.call(null,inst_31859);
var inst_31840 = inst_31876;
var inst_31841 = null;
var inst_31842 = (0);
var inst_31843 = (0);
var state_31900__$1 = (function (){var statearr_31937 = state_31900;
(statearr_31937[(20)] = inst_31842);

(statearr_31937[(27)] = inst_31875);

(statearr_31937[(10)] = inst_31843);

(statearr_31937[(21)] = inst_31840);

(statearr_31937[(11)] = inst_31841);

return statearr_31937;
})();
var statearr_31938_32006 = state_31900__$1;
(statearr_31938_32006[(2)] = null);

(statearr_31938_32006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (43))){
var state_31900__$1 = state_31900;
var statearr_31939_32007 = state_31900__$1;
(statearr_31939_32007[(2)] = null);

(statearr_31939_32007[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (29))){
var inst_31884 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31940_32008 = state_31900__$1;
(statearr_31940_32008[(2)] = inst_31884);

(statearr_31940_32008[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (44))){
var inst_31893 = (state_31900[(2)]);
var state_31900__$1 = (function (){var statearr_31941 = state_31900;
(statearr_31941[(28)] = inst_31893);

return statearr_31941;
})();
var statearr_31942_32009 = state_31900__$1;
(statearr_31942_32009[(2)] = null);

(statearr_31942_32009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (6))){
var inst_31832 = (state_31900[(29)]);
var inst_31831 = cljs.core.deref.call(null,cs);
var inst_31832__$1 = cljs.core.keys.call(null,inst_31831);
var inst_31833 = cljs.core.count.call(null,inst_31832__$1);
var inst_31834 = cljs.core.reset_BANG_.call(null,dctr,inst_31833);
var inst_31839 = cljs.core.seq.call(null,inst_31832__$1);
var inst_31840 = inst_31839;
var inst_31841 = null;
var inst_31842 = (0);
var inst_31843 = (0);
var state_31900__$1 = (function (){var statearr_31943 = state_31900;
(statearr_31943[(30)] = inst_31834);

(statearr_31943[(20)] = inst_31842);

(statearr_31943[(29)] = inst_31832__$1);

(statearr_31943[(10)] = inst_31843);

(statearr_31943[(21)] = inst_31840);

(statearr_31943[(11)] = inst_31841);

return statearr_31943;
})();
var statearr_31944_32010 = state_31900__$1;
(statearr_31944_32010[(2)] = null);

(statearr_31944_32010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (28))){
var inst_31859 = (state_31900[(25)]);
var inst_31840 = (state_31900[(21)]);
var inst_31859__$1 = cljs.core.seq.call(null,inst_31840);
var state_31900__$1 = (function (){var statearr_31945 = state_31900;
(statearr_31945[(25)] = inst_31859__$1);

return statearr_31945;
})();
if(inst_31859__$1){
var statearr_31946_32011 = state_31900__$1;
(statearr_31946_32011[(1)] = (33));

} else {
var statearr_31947_32012 = state_31900__$1;
(statearr_31947_32012[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (25))){
var inst_31842 = (state_31900[(20)]);
var inst_31843 = (state_31900[(10)]);
var inst_31845 = (inst_31843 < inst_31842);
var inst_31846 = inst_31845;
var state_31900__$1 = state_31900;
if(cljs.core.truth_(inst_31846)){
var statearr_31948_32013 = state_31900__$1;
(statearr_31948_32013[(1)] = (27));

} else {
var statearr_31949_32014 = state_31900__$1;
(statearr_31949_32014[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (34))){
var state_31900__$1 = state_31900;
var statearr_31950_32015 = state_31900__$1;
(statearr_31950_32015[(2)] = null);

(statearr_31950_32015[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (17))){
var state_31900__$1 = state_31900;
var statearr_31951_32016 = state_31900__$1;
(statearr_31951_32016[(2)] = null);

(statearr_31951_32016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (3))){
var inst_31898 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31900__$1,inst_31898);
} else {
if((state_val_31901 === (12))){
var inst_31827 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31952_32017 = state_31900__$1;
(statearr_31952_32017[(2)] = inst_31827);

(statearr_31952_32017[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (2))){
var state_31900__$1 = state_31900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31900__$1,(4),ch);
} else {
if((state_val_31901 === (23))){
var state_31900__$1 = state_31900;
var statearr_31953_32018 = state_31900__$1;
(statearr_31953_32018[(2)] = null);

(statearr_31953_32018[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (35))){
var inst_31882 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31954_32019 = state_31900__$1;
(statearr_31954_32019[(2)] = inst_31882);

(statearr_31954_32019[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (19))){
var inst_31799 = (state_31900[(7)]);
var inst_31803 = cljs.core.chunk_first.call(null,inst_31799);
var inst_31804 = cljs.core.chunk_rest.call(null,inst_31799);
var inst_31805 = cljs.core.count.call(null,inst_31803);
var inst_31777 = inst_31804;
var inst_31778 = inst_31803;
var inst_31779 = inst_31805;
var inst_31780 = (0);
var state_31900__$1 = (function (){var statearr_31955 = state_31900;
(statearr_31955[(13)] = inst_31779);

(statearr_31955[(15)] = inst_31778);

(statearr_31955[(16)] = inst_31777);

(statearr_31955[(17)] = inst_31780);

return statearr_31955;
})();
var statearr_31956_32020 = state_31900__$1;
(statearr_31956_32020[(2)] = null);

(statearr_31956_32020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (11))){
var inst_31777 = (state_31900[(16)]);
var inst_31799 = (state_31900[(7)]);
var inst_31799__$1 = cljs.core.seq.call(null,inst_31777);
var state_31900__$1 = (function (){var statearr_31957 = state_31900;
(statearr_31957[(7)] = inst_31799__$1);

return statearr_31957;
})();
if(inst_31799__$1){
var statearr_31958_32021 = state_31900__$1;
(statearr_31958_32021[(1)] = (16));

} else {
var statearr_31959_32022 = state_31900__$1;
(statearr_31959_32022[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (9))){
var inst_31829 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31960_32023 = state_31900__$1;
(statearr_31960_32023[(2)] = inst_31829);

(statearr_31960_32023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (5))){
var inst_31775 = cljs.core.deref.call(null,cs);
var inst_31776 = cljs.core.seq.call(null,inst_31775);
var inst_31777 = inst_31776;
var inst_31778 = null;
var inst_31779 = (0);
var inst_31780 = (0);
var state_31900__$1 = (function (){var statearr_31961 = state_31900;
(statearr_31961[(13)] = inst_31779);

(statearr_31961[(15)] = inst_31778);

(statearr_31961[(16)] = inst_31777);

(statearr_31961[(17)] = inst_31780);

return statearr_31961;
})();
var statearr_31962_32024 = state_31900__$1;
(statearr_31962_32024[(2)] = null);

(statearr_31962_32024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (14))){
var state_31900__$1 = state_31900;
var statearr_31963_32025 = state_31900__$1;
(statearr_31963_32025[(2)] = null);

(statearr_31963_32025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (45))){
var inst_31890 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31964_32026 = state_31900__$1;
(statearr_31964_32026[(2)] = inst_31890);

(statearr_31964_32026[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (26))){
var inst_31832 = (state_31900[(29)]);
var inst_31886 = (state_31900[(2)]);
var inst_31887 = cljs.core.seq.call(null,inst_31832);
var state_31900__$1 = (function (){var statearr_31965 = state_31900;
(statearr_31965[(31)] = inst_31886);

return statearr_31965;
})();
if(inst_31887){
var statearr_31966_32027 = state_31900__$1;
(statearr_31966_32027[(1)] = (42));

} else {
var statearr_31967_32028 = state_31900__$1;
(statearr_31967_32028[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (16))){
var inst_31799 = (state_31900[(7)]);
var inst_31801 = cljs.core.chunked_seq_QMARK_.call(null,inst_31799);
var state_31900__$1 = state_31900;
if(inst_31801){
var statearr_31968_32029 = state_31900__$1;
(statearr_31968_32029[(1)] = (19));

} else {
var statearr_31969_32030 = state_31900__$1;
(statearr_31969_32030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (38))){
var inst_31879 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31970_32031 = state_31900__$1;
(statearr_31970_32031[(2)] = inst_31879);

(statearr_31970_32031[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (30))){
var state_31900__$1 = state_31900;
var statearr_31971_32032 = state_31900__$1;
(statearr_31971_32032[(2)] = null);

(statearr_31971_32032[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (10))){
var inst_31778 = (state_31900[(15)]);
var inst_31780 = (state_31900[(17)]);
var inst_31788 = cljs.core._nth.call(null,inst_31778,inst_31780);
var inst_31789 = cljs.core.nth.call(null,inst_31788,(0),null);
var inst_31790 = cljs.core.nth.call(null,inst_31788,(1),null);
var state_31900__$1 = (function (){var statearr_31972 = state_31900;
(statearr_31972[(26)] = inst_31789);

return statearr_31972;
})();
if(cljs.core.truth_(inst_31790)){
var statearr_31973_32033 = state_31900__$1;
(statearr_31973_32033[(1)] = (13));

} else {
var statearr_31974_32034 = state_31900__$1;
(statearr_31974_32034[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (18))){
var inst_31825 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31975_32035 = state_31900__$1;
(statearr_31975_32035[(2)] = inst_31825);

(statearr_31975_32035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (42))){
var state_31900__$1 = state_31900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31900__$1,(45),dchan);
} else {
if((state_val_31901 === (37))){
var inst_31768 = (state_31900[(9)]);
var inst_31859 = (state_31900[(25)]);
var inst_31868 = (state_31900[(23)]);
var inst_31868__$1 = cljs.core.first.call(null,inst_31859);
var inst_31869 = cljs.core.async.put_BANG_.call(null,inst_31868__$1,inst_31768,done);
var state_31900__$1 = (function (){var statearr_31976 = state_31900;
(statearr_31976[(23)] = inst_31868__$1);

return statearr_31976;
})();
if(cljs.core.truth_(inst_31869)){
var statearr_31977_32036 = state_31900__$1;
(statearr_31977_32036[(1)] = (39));

} else {
var statearr_31978_32037 = state_31900__$1;
(statearr_31978_32037[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (8))){
var inst_31779 = (state_31900[(13)]);
var inst_31780 = (state_31900[(17)]);
var inst_31782 = (inst_31780 < inst_31779);
var inst_31783 = inst_31782;
var state_31900__$1 = state_31900;
if(cljs.core.truth_(inst_31783)){
var statearr_31979_32038 = state_31900__$1;
(statearr_31979_32038[(1)] = (10));

} else {
var statearr_31980_32039 = state_31900__$1;
(statearr_31980_32039[(1)] = (11));

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
});})(c__31193__auto___31985,cs,m,dchan,dctr,done))
;
return ((function (switch__31105__auto__,c__31193__auto___31985,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31106__auto__ = null;
var cljs$core$async$mult_$_state_machine__31106__auto____0 = (function (){
var statearr_31981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31981[(0)] = cljs$core$async$mult_$_state_machine__31106__auto__);

(statearr_31981[(1)] = (1));

return statearr_31981;
});
var cljs$core$async$mult_$_state_machine__31106__auto____1 = (function (state_31900){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_31900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e31982){if((e31982 instanceof Object)){
var ex__31109__auto__ = e31982;
var statearr_31983_32040 = state_31900;
(statearr_31983_32040[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32041 = state_31900;
state_31900 = G__32041;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31106__auto__ = function(state_31900){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31106__auto____1.call(this,state_31900);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31106__auto____0;
cljs$core$async$mult_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31106__auto____1;
return cljs$core$async$mult_$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___31985,cs,m,dchan,dctr,done))
})();
var state__31195__auto__ = (function (){var statearr_31984 = f__31194__auto__.call(null);
(statearr_31984[(6)] = c__31193__auto___31985);

return statearr_31984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___31985,cs,m,dchan,dctr,done))
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
var G__32043 = arguments.length;
switch (G__32043) {
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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28448__auto__ = (((m == null))?null:m);
var m__28449__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,m,ch);
} else {
var m__28449__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,m,ch);
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
var x__28448__auto__ = (((m == null))?null:m);
var m__28449__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,m,ch);
} else {
var m__28449__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,m,ch);
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
var x__28448__auto__ = (((m == null))?null:m);
var m__28449__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,m);
} else {
var m__28449__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,m);
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
var x__28448__auto__ = (((m == null))?null:m);
var m__28449__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,m,state_map);
} else {
var m__28449__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,m,state_map);
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
var x__28448__auto__ = (((m == null))?null:m);
var m__28449__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,m,mode);
} else {
var m__28449__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28941__auto__ = [];
var len__28934__auto___32055 = arguments.length;
var i__28935__auto___32056 = (0);
while(true){
if((i__28935__auto___32056 < len__28934__auto___32055)){
args__28941__auto__.push((arguments[i__28935__auto___32056]));

var G__32057 = (i__28935__auto___32056 + (1));
i__28935__auto___32056 = G__32057;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((3) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28942__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32049){
var map__32050 = p__32049;
var map__32050__$1 = ((((!((map__32050 == null)))?((((map__32050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32050):map__32050);
var opts = map__32050__$1;
var statearr_32052_32058 = state;
(statearr_32052_32058[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32050,map__32050__$1,opts){
return (function (val){
var statearr_32053_32059 = state;
(statearr_32053_32059[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32050,map__32050__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32054_32060 = state;
(statearr_32054_32060[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32045){
var G__32046 = cljs.core.first.call(null,seq32045);
var seq32045__$1 = cljs.core.next.call(null,seq32045);
var G__32047 = cljs.core.first.call(null,seq32045__$1);
var seq32045__$2 = cljs.core.next.call(null,seq32045__$1);
var G__32048 = cljs.core.first.call(null,seq32045__$2);
var seq32045__$3 = cljs.core.next.call(null,seq32045__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32046,G__32047,G__32048,seq32045__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32061 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32062){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32062 = meta32062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32063,meta32062__$1){
var self__ = this;
var _32063__$1 = this;
return (new cljs.core.async.t_cljs$core$async32061(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32062__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32063){
var self__ = this;
var _32063__$1 = this;
return self__.meta32062;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32061.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32062","meta32062",178431361,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32061";

cljs.core.async.t_cljs$core$async32061.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28390__auto__,writer__28391__auto__,opt__28392__auto__){
return cljs.core._write.call(null,writer__28391__auto__,"cljs.core.async/t_cljs$core$async32061");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32061 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32061(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32062){
return (new cljs.core.async.t_cljs$core$async32061(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32062));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32061(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31193__auto___32225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___32225,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___32225,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32165){
var state_val_32166 = (state_32165[(1)]);
if((state_val_32166 === (7))){
var inst_32080 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32167_32226 = state_32165__$1;
(statearr_32167_32226[(2)] = inst_32080);

(statearr_32167_32226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (20))){
var inst_32092 = (state_32165[(7)]);
var state_32165__$1 = state_32165;
var statearr_32168_32227 = state_32165__$1;
(statearr_32168_32227[(2)] = inst_32092);

(statearr_32168_32227[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (27))){
var state_32165__$1 = state_32165;
var statearr_32169_32228 = state_32165__$1;
(statearr_32169_32228[(2)] = null);

(statearr_32169_32228[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (1))){
var inst_32067 = (state_32165[(8)]);
var inst_32067__$1 = calc_state.call(null);
var inst_32069 = (inst_32067__$1 == null);
var inst_32070 = cljs.core.not.call(null,inst_32069);
var state_32165__$1 = (function (){var statearr_32170 = state_32165;
(statearr_32170[(8)] = inst_32067__$1);

return statearr_32170;
})();
if(inst_32070){
var statearr_32171_32229 = state_32165__$1;
(statearr_32171_32229[(1)] = (2));

} else {
var statearr_32172_32230 = state_32165__$1;
(statearr_32172_32230[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (24))){
var inst_32139 = (state_32165[(9)]);
var inst_32116 = (state_32165[(10)]);
var inst_32125 = (state_32165[(11)]);
var inst_32139__$1 = inst_32116.call(null,inst_32125);
var state_32165__$1 = (function (){var statearr_32173 = state_32165;
(statearr_32173[(9)] = inst_32139__$1);

return statearr_32173;
})();
if(cljs.core.truth_(inst_32139__$1)){
var statearr_32174_32231 = state_32165__$1;
(statearr_32174_32231[(1)] = (29));

} else {
var statearr_32175_32232 = state_32165__$1;
(statearr_32175_32232[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (4))){
var inst_32083 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32083)){
var statearr_32176_32233 = state_32165__$1;
(statearr_32176_32233[(1)] = (8));

} else {
var statearr_32177_32234 = state_32165__$1;
(statearr_32177_32234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (15))){
var inst_32110 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32110)){
var statearr_32178_32235 = state_32165__$1;
(statearr_32178_32235[(1)] = (19));

} else {
var statearr_32179_32236 = state_32165__$1;
(statearr_32179_32236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (21))){
var inst_32115 = (state_32165[(12)]);
var inst_32115__$1 = (state_32165[(2)]);
var inst_32116 = cljs.core.get.call(null,inst_32115__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32117 = cljs.core.get.call(null,inst_32115__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32118 = cljs.core.get.call(null,inst_32115__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32165__$1 = (function (){var statearr_32180 = state_32165;
(statearr_32180[(13)] = inst_32117);

(statearr_32180[(12)] = inst_32115__$1);

(statearr_32180[(10)] = inst_32116);

return statearr_32180;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32165__$1,(22),inst_32118);
} else {
if((state_val_32166 === (31))){
var inst_32147 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32147)){
var statearr_32181_32237 = state_32165__$1;
(statearr_32181_32237[(1)] = (32));

} else {
var statearr_32182_32238 = state_32165__$1;
(statearr_32182_32238[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (32))){
var inst_32124 = (state_32165[(14)]);
var state_32165__$1 = state_32165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32165__$1,(35),out,inst_32124);
} else {
if((state_val_32166 === (33))){
var inst_32115 = (state_32165[(12)]);
var inst_32092 = inst_32115;
var state_32165__$1 = (function (){var statearr_32183 = state_32165;
(statearr_32183[(7)] = inst_32092);

return statearr_32183;
})();
var statearr_32184_32239 = state_32165__$1;
(statearr_32184_32239[(2)] = null);

(statearr_32184_32239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (13))){
var inst_32092 = (state_32165[(7)]);
var inst_32099 = inst_32092.cljs$lang$protocol_mask$partition0$;
var inst_32100 = (inst_32099 & (64));
var inst_32101 = inst_32092.cljs$core$ISeq$;
var inst_32102 = (cljs.core.PROTOCOL_SENTINEL === inst_32101);
var inst_32103 = (inst_32100) || (inst_32102);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32103)){
var statearr_32185_32240 = state_32165__$1;
(statearr_32185_32240[(1)] = (16));

} else {
var statearr_32186_32241 = state_32165__$1;
(statearr_32186_32241[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (22))){
var inst_32124 = (state_32165[(14)]);
var inst_32125 = (state_32165[(11)]);
var inst_32123 = (state_32165[(2)]);
var inst_32124__$1 = cljs.core.nth.call(null,inst_32123,(0),null);
var inst_32125__$1 = cljs.core.nth.call(null,inst_32123,(1),null);
var inst_32126 = (inst_32124__$1 == null);
var inst_32127 = cljs.core._EQ_.call(null,inst_32125__$1,change);
var inst_32128 = (inst_32126) || (inst_32127);
var state_32165__$1 = (function (){var statearr_32187 = state_32165;
(statearr_32187[(14)] = inst_32124__$1);

(statearr_32187[(11)] = inst_32125__$1);

return statearr_32187;
})();
if(cljs.core.truth_(inst_32128)){
var statearr_32188_32242 = state_32165__$1;
(statearr_32188_32242[(1)] = (23));

} else {
var statearr_32189_32243 = state_32165__$1;
(statearr_32189_32243[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (36))){
var inst_32115 = (state_32165[(12)]);
var inst_32092 = inst_32115;
var state_32165__$1 = (function (){var statearr_32190 = state_32165;
(statearr_32190[(7)] = inst_32092);

return statearr_32190;
})();
var statearr_32191_32244 = state_32165__$1;
(statearr_32191_32244[(2)] = null);

(statearr_32191_32244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (29))){
var inst_32139 = (state_32165[(9)]);
var state_32165__$1 = state_32165;
var statearr_32192_32245 = state_32165__$1;
(statearr_32192_32245[(2)] = inst_32139);

(statearr_32192_32245[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (6))){
var state_32165__$1 = state_32165;
var statearr_32193_32246 = state_32165__$1;
(statearr_32193_32246[(2)] = false);

(statearr_32193_32246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (28))){
var inst_32135 = (state_32165[(2)]);
var inst_32136 = calc_state.call(null);
var inst_32092 = inst_32136;
var state_32165__$1 = (function (){var statearr_32194 = state_32165;
(statearr_32194[(15)] = inst_32135);

(statearr_32194[(7)] = inst_32092);

return statearr_32194;
})();
var statearr_32195_32247 = state_32165__$1;
(statearr_32195_32247[(2)] = null);

(statearr_32195_32247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (25))){
var inst_32161 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32196_32248 = state_32165__$1;
(statearr_32196_32248[(2)] = inst_32161);

(statearr_32196_32248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (34))){
var inst_32159 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32197_32249 = state_32165__$1;
(statearr_32197_32249[(2)] = inst_32159);

(statearr_32197_32249[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (17))){
var state_32165__$1 = state_32165;
var statearr_32198_32250 = state_32165__$1;
(statearr_32198_32250[(2)] = false);

(statearr_32198_32250[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (3))){
var state_32165__$1 = state_32165;
var statearr_32199_32251 = state_32165__$1;
(statearr_32199_32251[(2)] = false);

(statearr_32199_32251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (12))){
var inst_32163 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32165__$1,inst_32163);
} else {
if((state_val_32166 === (2))){
var inst_32067 = (state_32165[(8)]);
var inst_32072 = inst_32067.cljs$lang$protocol_mask$partition0$;
var inst_32073 = (inst_32072 & (64));
var inst_32074 = inst_32067.cljs$core$ISeq$;
var inst_32075 = (cljs.core.PROTOCOL_SENTINEL === inst_32074);
var inst_32076 = (inst_32073) || (inst_32075);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32076)){
var statearr_32200_32252 = state_32165__$1;
(statearr_32200_32252[(1)] = (5));

} else {
var statearr_32201_32253 = state_32165__$1;
(statearr_32201_32253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (23))){
var inst_32124 = (state_32165[(14)]);
var inst_32130 = (inst_32124 == null);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32130)){
var statearr_32202_32254 = state_32165__$1;
(statearr_32202_32254[(1)] = (26));

} else {
var statearr_32203_32255 = state_32165__$1;
(statearr_32203_32255[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (35))){
var inst_32150 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32150)){
var statearr_32204_32256 = state_32165__$1;
(statearr_32204_32256[(1)] = (36));

} else {
var statearr_32205_32257 = state_32165__$1;
(statearr_32205_32257[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (19))){
var inst_32092 = (state_32165[(7)]);
var inst_32112 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32092);
var state_32165__$1 = state_32165;
var statearr_32206_32258 = state_32165__$1;
(statearr_32206_32258[(2)] = inst_32112);

(statearr_32206_32258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (11))){
var inst_32092 = (state_32165[(7)]);
var inst_32096 = (inst_32092 == null);
var inst_32097 = cljs.core.not.call(null,inst_32096);
var state_32165__$1 = state_32165;
if(inst_32097){
var statearr_32207_32259 = state_32165__$1;
(statearr_32207_32259[(1)] = (13));

} else {
var statearr_32208_32260 = state_32165__$1;
(statearr_32208_32260[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (9))){
var inst_32067 = (state_32165[(8)]);
var state_32165__$1 = state_32165;
var statearr_32209_32261 = state_32165__$1;
(statearr_32209_32261[(2)] = inst_32067);

(statearr_32209_32261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (5))){
var state_32165__$1 = state_32165;
var statearr_32210_32262 = state_32165__$1;
(statearr_32210_32262[(2)] = true);

(statearr_32210_32262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (14))){
var state_32165__$1 = state_32165;
var statearr_32211_32263 = state_32165__$1;
(statearr_32211_32263[(2)] = false);

(statearr_32211_32263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (26))){
var inst_32125 = (state_32165[(11)]);
var inst_32132 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32125);
var state_32165__$1 = state_32165;
var statearr_32212_32264 = state_32165__$1;
(statearr_32212_32264[(2)] = inst_32132);

(statearr_32212_32264[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (16))){
var state_32165__$1 = state_32165;
var statearr_32213_32265 = state_32165__$1;
(statearr_32213_32265[(2)] = true);

(statearr_32213_32265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (38))){
var inst_32155 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32214_32266 = state_32165__$1;
(statearr_32214_32266[(2)] = inst_32155);

(statearr_32214_32266[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (30))){
var inst_32117 = (state_32165[(13)]);
var inst_32116 = (state_32165[(10)]);
var inst_32125 = (state_32165[(11)]);
var inst_32142 = cljs.core.empty_QMARK_.call(null,inst_32116);
var inst_32143 = inst_32117.call(null,inst_32125);
var inst_32144 = cljs.core.not.call(null,inst_32143);
var inst_32145 = (inst_32142) && (inst_32144);
var state_32165__$1 = state_32165;
var statearr_32215_32267 = state_32165__$1;
(statearr_32215_32267[(2)] = inst_32145);

(statearr_32215_32267[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (10))){
var inst_32067 = (state_32165[(8)]);
var inst_32088 = (state_32165[(2)]);
var inst_32089 = cljs.core.get.call(null,inst_32088,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32090 = cljs.core.get.call(null,inst_32088,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32091 = cljs.core.get.call(null,inst_32088,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32092 = inst_32067;
var state_32165__$1 = (function (){var statearr_32216 = state_32165;
(statearr_32216[(16)] = inst_32091);

(statearr_32216[(17)] = inst_32089);

(statearr_32216[(18)] = inst_32090);

(statearr_32216[(7)] = inst_32092);

return statearr_32216;
})();
var statearr_32217_32268 = state_32165__$1;
(statearr_32217_32268[(2)] = null);

(statearr_32217_32268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (18))){
var inst_32107 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32218_32269 = state_32165__$1;
(statearr_32218_32269[(2)] = inst_32107);

(statearr_32218_32269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (37))){
var state_32165__$1 = state_32165;
var statearr_32219_32270 = state_32165__$1;
(statearr_32219_32270[(2)] = null);

(statearr_32219_32270[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (8))){
var inst_32067 = (state_32165[(8)]);
var inst_32085 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32067);
var state_32165__$1 = state_32165;
var statearr_32220_32271 = state_32165__$1;
(statearr_32220_32271[(2)] = inst_32085);

(statearr_32220_32271[(1)] = (10));


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
});})(c__31193__auto___32225,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31105__auto__,c__31193__auto___32225,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31106__auto__ = null;
var cljs$core$async$mix_$_state_machine__31106__auto____0 = (function (){
var statearr_32221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32221[(0)] = cljs$core$async$mix_$_state_machine__31106__auto__);

(statearr_32221[(1)] = (1));

return statearr_32221;
});
var cljs$core$async$mix_$_state_machine__31106__auto____1 = (function (state_32165){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_32165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e32222){if((e32222 instanceof Object)){
var ex__31109__auto__ = e32222;
var statearr_32223_32272 = state_32165;
(statearr_32223_32272[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32273 = state_32165;
state_32165 = G__32273;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31106__auto__ = function(state_32165){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31106__auto____1.call(this,state_32165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31106__auto____0;
cljs$core$async$mix_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31106__auto____1;
return cljs$core$async$mix_$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___32225,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31195__auto__ = (function (){var statearr_32224 = f__31194__auto__.call(null);
(statearr_32224[(6)] = c__31193__auto___32225);

return statearr_32224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___32225,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__28448__auto__ = (((p == null))?null:p);
var m__28449__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28449__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__28448__auto__ = (((p == null))?null:p);
var m__28449__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,p,v,ch);
} else {
var m__28449__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32275 = arguments.length;
switch (G__32275) {
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28448__auto__ = (((p == null))?null:p);
var m__28449__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,p);
} else {
var m__28449__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,p);
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
var x__28448__auto__ = (((p == null))?null:p);
var m__28449__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,p,v);
} else {
var m__28449__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,p,v);
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
var G__32279 = arguments.length;
switch (G__32279) {
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
var or__27765__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27765__auto__,mults){
return (function (p1__32277_SHARP_){
if(cljs.core.truth_(p1__32277_SHARP_.call(null,topic))){
return p1__32277_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32277_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27765__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32280 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32281){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32281 = meta32281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32282,meta32281__$1){
var self__ = this;
var _32282__$1 = this;
return (new cljs.core.async.t_cljs$core$async32280(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32281__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32282){
var self__ = this;
var _32282__$1 = this;
return self__.meta32281;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32280.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32281","meta32281",-851198549,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32280";

cljs.core.async.t_cljs$core$async32280.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28390__auto__,writer__28391__auto__,opt__28392__auto__){
return cljs.core._write.call(null,writer__28391__auto__,"cljs.core.async/t_cljs$core$async32280");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32280 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32280(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32281){
return (new cljs.core.async.t_cljs$core$async32280(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32281));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32280(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31193__auto___32400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___32400,mults,ensure_mult,p){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___32400,mults,ensure_mult,p){
return (function (state_32354){
var state_val_32355 = (state_32354[(1)]);
if((state_val_32355 === (7))){
var inst_32350 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32356_32401 = state_32354__$1;
(statearr_32356_32401[(2)] = inst_32350);

(statearr_32356_32401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (20))){
var state_32354__$1 = state_32354;
var statearr_32357_32402 = state_32354__$1;
(statearr_32357_32402[(2)] = null);

(statearr_32357_32402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (1))){
var state_32354__$1 = state_32354;
var statearr_32358_32403 = state_32354__$1;
(statearr_32358_32403[(2)] = null);

(statearr_32358_32403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (24))){
var inst_32333 = (state_32354[(7)]);
var inst_32342 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32333);
var state_32354__$1 = state_32354;
var statearr_32359_32404 = state_32354__$1;
(statearr_32359_32404[(2)] = inst_32342);

(statearr_32359_32404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (4))){
var inst_32285 = (state_32354[(8)]);
var inst_32285__$1 = (state_32354[(2)]);
var inst_32286 = (inst_32285__$1 == null);
var state_32354__$1 = (function (){var statearr_32360 = state_32354;
(statearr_32360[(8)] = inst_32285__$1);

return statearr_32360;
})();
if(cljs.core.truth_(inst_32286)){
var statearr_32361_32405 = state_32354__$1;
(statearr_32361_32405[(1)] = (5));

} else {
var statearr_32362_32406 = state_32354__$1;
(statearr_32362_32406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (15))){
var inst_32327 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32363_32407 = state_32354__$1;
(statearr_32363_32407[(2)] = inst_32327);

(statearr_32363_32407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (21))){
var inst_32347 = (state_32354[(2)]);
var state_32354__$1 = (function (){var statearr_32364 = state_32354;
(statearr_32364[(9)] = inst_32347);

return statearr_32364;
})();
var statearr_32365_32408 = state_32354__$1;
(statearr_32365_32408[(2)] = null);

(statearr_32365_32408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (13))){
var inst_32309 = (state_32354[(10)]);
var inst_32311 = cljs.core.chunked_seq_QMARK_.call(null,inst_32309);
var state_32354__$1 = state_32354;
if(inst_32311){
var statearr_32366_32409 = state_32354__$1;
(statearr_32366_32409[(1)] = (16));

} else {
var statearr_32367_32410 = state_32354__$1;
(statearr_32367_32410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (22))){
var inst_32339 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
if(cljs.core.truth_(inst_32339)){
var statearr_32368_32411 = state_32354__$1;
(statearr_32368_32411[(1)] = (23));

} else {
var statearr_32369_32412 = state_32354__$1;
(statearr_32369_32412[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (6))){
var inst_32335 = (state_32354[(11)]);
var inst_32333 = (state_32354[(7)]);
var inst_32285 = (state_32354[(8)]);
var inst_32333__$1 = topic_fn.call(null,inst_32285);
var inst_32334 = cljs.core.deref.call(null,mults);
var inst_32335__$1 = cljs.core.get.call(null,inst_32334,inst_32333__$1);
var state_32354__$1 = (function (){var statearr_32370 = state_32354;
(statearr_32370[(11)] = inst_32335__$1);

(statearr_32370[(7)] = inst_32333__$1);

return statearr_32370;
})();
if(cljs.core.truth_(inst_32335__$1)){
var statearr_32371_32413 = state_32354__$1;
(statearr_32371_32413[(1)] = (19));

} else {
var statearr_32372_32414 = state_32354__$1;
(statearr_32372_32414[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (25))){
var inst_32344 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32373_32415 = state_32354__$1;
(statearr_32373_32415[(2)] = inst_32344);

(statearr_32373_32415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (17))){
var inst_32309 = (state_32354[(10)]);
var inst_32318 = cljs.core.first.call(null,inst_32309);
var inst_32319 = cljs.core.async.muxch_STAR_.call(null,inst_32318);
var inst_32320 = cljs.core.async.close_BANG_.call(null,inst_32319);
var inst_32321 = cljs.core.next.call(null,inst_32309);
var inst_32295 = inst_32321;
var inst_32296 = null;
var inst_32297 = (0);
var inst_32298 = (0);
var state_32354__$1 = (function (){var statearr_32374 = state_32354;
(statearr_32374[(12)] = inst_32295);

(statearr_32374[(13)] = inst_32297);

(statearr_32374[(14)] = inst_32298);

(statearr_32374[(15)] = inst_32320);

(statearr_32374[(16)] = inst_32296);

return statearr_32374;
})();
var statearr_32375_32416 = state_32354__$1;
(statearr_32375_32416[(2)] = null);

(statearr_32375_32416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (3))){
var inst_32352 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32354__$1,inst_32352);
} else {
if((state_val_32355 === (12))){
var inst_32329 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32376_32417 = state_32354__$1;
(statearr_32376_32417[(2)] = inst_32329);

(statearr_32376_32417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (2))){
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32354__$1,(4),ch);
} else {
if((state_val_32355 === (23))){
var state_32354__$1 = state_32354;
var statearr_32377_32418 = state_32354__$1;
(statearr_32377_32418[(2)] = null);

(statearr_32377_32418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (19))){
var inst_32335 = (state_32354[(11)]);
var inst_32285 = (state_32354[(8)]);
var inst_32337 = cljs.core.async.muxch_STAR_.call(null,inst_32335);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32354__$1,(22),inst_32337,inst_32285);
} else {
if((state_val_32355 === (11))){
var inst_32295 = (state_32354[(12)]);
var inst_32309 = (state_32354[(10)]);
var inst_32309__$1 = cljs.core.seq.call(null,inst_32295);
var state_32354__$1 = (function (){var statearr_32378 = state_32354;
(statearr_32378[(10)] = inst_32309__$1);

return statearr_32378;
})();
if(inst_32309__$1){
var statearr_32379_32419 = state_32354__$1;
(statearr_32379_32419[(1)] = (13));

} else {
var statearr_32380_32420 = state_32354__$1;
(statearr_32380_32420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (9))){
var inst_32331 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32381_32421 = state_32354__$1;
(statearr_32381_32421[(2)] = inst_32331);

(statearr_32381_32421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (5))){
var inst_32292 = cljs.core.deref.call(null,mults);
var inst_32293 = cljs.core.vals.call(null,inst_32292);
var inst_32294 = cljs.core.seq.call(null,inst_32293);
var inst_32295 = inst_32294;
var inst_32296 = null;
var inst_32297 = (0);
var inst_32298 = (0);
var state_32354__$1 = (function (){var statearr_32382 = state_32354;
(statearr_32382[(12)] = inst_32295);

(statearr_32382[(13)] = inst_32297);

(statearr_32382[(14)] = inst_32298);

(statearr_32382[(16)] = inst_32296);

return statearr_32382;
})();
var statearr_32383_32422 = state_32354__$1;
(statearr_32383_32422[(2)] = null);

(statearr_32383_32422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (14))){
var state_32354__$1 = state_32354;
var statearr_32387_32423 = state_32354__$1;
(statearr_32387_32423[(2)] = null);

(statearr_32387_32423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (16))){
var inst_32309 = (state_32354[(10)]);
var inst_32313 = cljs.core.chunk_first.call(null,inst_32309);
var inst_32314 = cljs.core.chunk_rest.call(null,inst_32309);
var inst_32315 = cljs.core.count.call(null,inst_32313);
var inst_32295 = inst_32314;
var inst_32296 = inst_32313;
var inst_32297 = inst_32315;
var inst_32298 = (0);
var state_32354__$1 = (function (){var statearr_32388 = state_32354;
(statearr_32388[(12)] = inst_32295);

(statearr_32388[(13)] = inst_32297);

(statearr_32388[(14)] = inst_32298);

(statearr_32388[(16)] = inst_32296);

return statearr_32388;
})();
var statearr_32389_32424 = state_32354__$1;
(statearr_32389_32424[(2)] = null);

(statearr_32389_32424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (10))){
var inst_32295 = (state_32354[(12)]);
var inst_32297 = (state_32354[(13)]);
var inst_32298 = (state_32354[(14)]);
var inst_32296 = (state_32354[(16)]);
var inst_32303 = cljs.core._nth.call(null,inst_32296,inst_32298);
var inst_32304 = cljs.core.async.muxch_STAR_.call(null,inst_32303);
var inst_32305 = cljs.core.async.close_BANG_.call(null,inst_32304);
var inst_32306 = (inst_32298 + (1));
var tmp32384 = inst_32295;
var tmp32385 = inst_32297;
var tmp32386 = inst_32296;
var inst_32295__$1 = tmp32384;
var inst_32296__$1 = tmp32386;
var inst_32297__$1 = tmp32385;
var inst_32298__$1 = inst_32306;
var state_32354__$1 = (function (){var statearr_32390 = state_32354;
(statearr_32390[(12)] = inst_32295__$1);

(statearr_32390[(13)] = inst_32297__$1);

(statearr_32390[(14)] = inst_32298__$1);

(statearr_32390[(16)] = inst_32296__$1);

(statearr_32390[(17)] = inst_32305);

return statearr_32390;
})();
var statearr_32391_32425 = state_32354__$1;
(statearr_32391_32425[(2)] = null);

(statearr_32391_32425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (18))){
var inst_32324 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32392_32426 = state_32354__$1;
(statearr_32392_32426[(2)] = inst_32324);

(statearr_32392_32426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (8))){
var inst_32297 = (state_32354[(13)]);
var inst_32298 = (state_32354[(14)]);
var inst_32300 = (inst_32298 < inst_32297);
var inst_32301 = inst_32300;
var state_32354__$1 = state_32354;
if(cljs.core.truth_(inst_32301)){
var statearr_32393_32427 = state_32354__$1;
(statearr_32393_32427[(1)] = (10));

} else {
var statearr_32394_32428 = state_32354__$1;
(statearr_32394_32428[(1)] = (11));

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
});})(c__31193__auto___32400,mults,ensure_mult,p))
;
return ((function (switch__31105__auto__,c__31193__auto___32400,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31106__auto__ = null;
var cljs$core$async$state_machine__31106__auto____0 = (function (){
var statearr_32395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32395[(0)] = cljs$core$async$state_machine__31106__auto__);

(statearr_32395[(1)] = (1));

return statearr_32395;
});
var cljs$core$async$state_machine__31106__auto____1 = (function (state_32354){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_32354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e32396){if((e32396 instanceof Object)){
var ex__31109__auto__ = e32396;
var statearr_32397_32429 = state_32354;
(statearr_32397_32429[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32430 = state_32354;
state_32354 = G__32430;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$state_machine__31106__auto__ = function(state_32354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31106__auto____1.call(this,state_32354);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31106__auto____0;
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31106__auto____1;
return cljs$core$async$state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___32400,mults,ensure_mult,p))
})();
var state__31195__auto__ = (function (){var statearr_32398 = f__31194__auto__.call(null);
(statearr_32398[(6)] = c__31193__auto___32400);

return statearr_32398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___32400,mults,ensure_mult,p))
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
var G__32432 = arguments.length;
switch (G__32432) {
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
var G__32435 = arguments.length;
switch (G__32435) {
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
var G__32438 = arguments.length;
switch (G__32438) {
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
var c__31193__auto___32505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___32505,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___32505,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32477){
var state_val_32478 = (state_32477[(1)]);
if((state_val_32478 === (7))){
var state_32477__$1 = state_32477;
var statearr_32479_32506 = state_32477__$1;
(statearr_32479_32506[(2)] = null);

(statearr_32479_32506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (1))){
var state_32477__$1 = state_32477;
var statearr_32480_32507 = state_32477__$1;
(statearr_32480_32507[(2)] = null);

(statearr_32480_32507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (4))){
var inst_32441 = (state_32477[(7)]);
var inst_32443 = (inst_32441 < cnt);
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32443)){
var statearr_32481_32508 = state_32477__$1;
(statearr_32481_32508[(1)] = (6));

} else {
var statearr_32482_32509 = state_32477__$1;
(statearr_32482_32509[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (15))){
var inst_32473 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32483_32510 = state_32477__$1;
(statearr_32483_32510[(2)] = inst_32473);

(statearr_32483_32510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (13))){
var inst_32466 = cljs.core.async.close_BANG_.call(null,out);
var state_32477__$1 = state_32477;
var statearr_32484_32511 = state_32477__$1;
(statearr_32484_32511[(2)] = inst_32466);

(statearr_32484_32511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (6))){
var state_32477__$1 = state_32477;
var statearr_32485_32512 = state_32477__$1;
(statearr_32485_32512[(2)] = null);

(statearr_32485_32512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (3))){
var inst_32475 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32477__$1,inst_32475);
} else {
if((state_val_32478 === (12))){
var inst_32463 = (state_32477[(8)]);
var inst_32463__$1 = (state_32477[(2)]);
var inst_32464 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32463__$1);
var state_32477__$1 = (function (){var statearr_32486 = state_32477;
(statearr_32486[(8)] = inst_32463__$1);

return statearr_32486;
})();
if(cljs.core.truth_(inst_32464)){
var statearr_32487_32513 = state_32477__$1;
(statearr_32487_32513[(1)] = (13));

} else {
var statearr_32488_32514 = state_32477__$1;
(statearr_32488_32514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (2))){
var inst_32440 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32441 = (0);
var state_32477__$1 = (function (){var statearr_32489 = state_32477;
(statearr_32489[(7)] = inst_32441);

(statearr_32489[(9)] = inst_32440);

return statearr_32489;
})();
var statearr_32490_32515 = state_32477__$1;
(statearr_32490_32515[(2)] = null);

(statearr_32490_32515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (11))){
var inst_32441 = (state_32477[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32477,(10),Object,null,(9));
var inst_32450 = chs__$1.call(null,inst_32441);
var inst_32451 = done.call(null,inst_32441);
var inst_32452 = cljs.core.async.take_BANG_.call(null,inst_32450,inst_32451);
var state_32477__$1 = state_32477;
var statearr_32491_32516 = state_32477__$1;
(statearr_32491_32516[(2)] = inst_32452);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32477__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (9))){
var inst_32441 = (state_32477[(7)]);
var inst_32454 = (state_32477[(2)]);
var inst_32455 = (inst_32441 + (1));
var inst_32441__$1 = inst_32455;
var state_32477__$1 = (function (){var statearr_32492 = state_32477;
(statearr_32492[(7)] = inst_32441__$1);

(statearr_32492[(10)] = inst_32454);

return statearr_32492;
})();
var statearr_32493_32517 = state_32477__$1;
(statearr_32493_32517[(2)] = null);

(statearr_32493_32517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (5))){
var inst_32461 = (state_32477[(2)]);
var state_32477__$1 = (function (){var statearr_32494 = state_32477;
(statearr_32494[(11)] = inst_32461);

return statearr_32494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32477__$1,(12),dchan);
} else {
if((state_val_32478 === (14))){
var inst_32463 = (state_32477[(8)]);
var inst_32468 = cljs.core.apply.call(null,f,inst_32463);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32477__$1,(16),out,inst_32468);
} else {
if((state_val_32478 === (16))){
var inst_32470 = (state_32477[(2)]);
var state_32477__$1 = (function (){var statearr_32495 = state_32477;
(statearr_32495[(12)] = inst_32470);

return statearr_32495;
})();
var statearr_32496_32518 = state_32477__$1;
(statearr_32496_32518[(2)] = null);

(statearr_32496_32518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (10))){
var inst_32445 = (state_32477[(2)]);
var inst_32446 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32477__$1 = (function (){var statearr_32497 = state_32477;
(statearr_32497[(13)] = inst_32445);

return statearr_32497;
})();
var statearr_32498_32519 = state_32477__$1;
(statearr_32498_32519[(2)] = inst_32446);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32477__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (8))){
var inst_32459 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32499_32520 = state_32477__$1;
(statearr_32499_32520[(2)] = inst_32459);

(statearr_32499_32520[(1)] = (5));


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
});})(c__31193__auto___32505,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31105__auto__,c__31193__auto___32505,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31106__auto__ = null;
var cljs$core$async$state_machine__31106__auto____0 = (function (){
var statearr_32500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32500[(0)] = cljs$core$async$state_machine__31106__auto__);

(statearr_32500[(1)] = (1));

return statearr_32500;
});
var cljs$core$async$state_machine__31106__auto____1 = (function (state_32477){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_32477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e32501){if((e32501 instanceof Object)){
var ex__31109__auto__ = e32501;
var statearr_32502_32521 = state_32477;
(statearr_32502_32521[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32522 = state_32477;
state_32477 = G__32522;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$state_machine__31106__auto__ = function(state_32477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31106__auto____1.call(this,state_32477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31106__auto____0;
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31106__auto____1;
return cljs$core$async$state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___32505,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31195__auto__ = (function (){var statearr_32503 = f__31194__auto__.call(null);
(statearr_32503[(6)] = c__31193__auto___32505);

return statearr_32503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___32505,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32525 = arguments.length;
switch (G__32525) {
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
var c__31193__auto___32579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___32579,out){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___32579,out){
return (function (state_32557){
var state_val_32558 = (state_32557[(1)]);
if((state_val_32558 === (7))){
var inst_32537 = (state_32557[(7)]);
var inst_32536 = (state_32557[(8)]);
var inst_32536__$1 = (state_32557[(2)]);
var inst_32537__$1 = cljs.core.nth.call(null,inst_32536__$1,(0),null);
var inst_32538 = cljs.core.nth.call(null,inst_32536__$1,(1),null);
var inst_32539 = (inst_32537__$1 == null);
var state_32557__$1 = (function (){var statearr_32559 = state_32557;
(statearr_32559[(7)] = inst_32537__$1);

(statearr_32559[(9)] = inst_32538);

(statearr_32559[(8)] = inst_32536__$1);

return statearr_32559;
})();
if(cljs.core.truth_(inst_32539)){
var statearr_32560_32580 = state_32557__$1;
(statearr_32560_32580[(1)] = (8));

} else {
var statearr_32561_32581 = state_32557__$1;
(statearr_32561_32581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (1))){
var inst_32526 = cljs.core.vec.call(null,chs);
var inst_32527 = inst_32526;
var state_32557__$1 = (function (){var statearr_32562 = state_32557;
(statearr_32562[(10)] = inst_32527);

return statearr_32562;
})();
var statearr_32563_32582 = state_32557__$1;
(statearr_32563_32582[(2)] = null);

(statearr_32563_32582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (4))){
var inst_32527 = (state_32557[(10)]);
var state_32557__$1 = state_32557;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32557__$1,(7),inst_32527);
} else {
if((state_val_32558 === (6))){
var inst_32553 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32564_32583 = state_32557__$1;
(statearr_32564_32583[(2)] = inst_32553);

(statearr_32564_32583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (3))){
var inst_32555 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32557__$1,inst_32555);
} else {
if((state_val_32558 === (2))){
var inst_32527 = (state_32557[(10)]);
var inst_32529 = cljs.core.count.call(null,inst_32527);
var inst_32530 = (inst_32529 > (0));
var state_32557__$1 = state_32557;
if(cljs.core.truth_(inst_32530)){
var statearr_32566_32584 = state_32557__$1;
(statearr_32566_32584[(1)] = (4));

} else {
var statearr_32567_32585 = state_32557__$1;
(statearr_32567_32585[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (11))){
var inst_32527 = (state_32557[(10)]);
var inst_32546 = (state_32557[(2)]);
var tmp32565 = inst_32527;
var inst_32527__$1 = tmp32565;
var state_32557__$1 = (function (){var statearr_32568 = state_32557;
(statearr_32568[(10)] = inst_32527__$1);

(statearr_32568[(11)] = inst_32546);

return statearr_32568;
})();
var statearr_32569_32586 = state_32557__$1;
(statearr_32569_32586[(2)] = null);

(statearr_32569_32586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (9))){
var inst_32537 = (state_32557[(7)]);
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32557__$1,(11),out,inst_32537);
} else {
if((state_val_32558 === (5))){
var inst_32551 = cljs.core.async.close_BANG_.call(null,out);
var state_32557__$1 = state_32557;
var statearr_32570_32587 = state_32557__$1;
(statearr_32570_32587[(2)] = inst_32551);

(statearr_32570_32587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (10))){
var inst_32549 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32571_32588 = state_32557__$1;
(statearr_32571_32588[(2)] = inst_32549);

(statearr_32571_32588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (8))){
var inst_32527 = (state_32557[(10)]);
var inst_32537 = (state_32557[(7)]);
var inst_32538 = (state_32557[(9)]);
var inst_32536 = (state_32557[(8)]);
var inst_32541 = (function (){var cs = inst_32527;
var vec__32532 = inst_32536;
var v = inst_32537;
var c = inst_32538;
return ((function (cs,vec__32532,v,c,inst_32527,inst_32537,inst_32538,inst_32536,state_val_32558,c__31193__auto___32579,out){
return (function (p1__32523_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32523_SHARP_);
});
;})(cs,vec__32532,v,c,inst_32527,inst_32537,inst_32538,inst_32536,state_val_32558,c__31193__auto___32579,out))
})();
var inst_32542 = cljs.core.filterv.call(null,inst_32541,inst_32527);
var inst_32527__$1 = inst_32542;
var state_32557__$1 = (function (){var statearr_32572 = state_32557;
(statearr_32572[(10)] = inst_32527__$1);

return statearr_32572;
})();
var statearr_32573_32589 = state_32557__$1;
(statearr_32573_32589[(2)] = null);

(statearr_32573_32589[(1)] = (2));


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
});})(c__31193__auto___32579,out))
;
return ((function (switch__31105__auto__,c__31193__auto___32579,out){
return (function() {
var cljs$core$async$state_machine__31106__auto__ = null;
var cljs$core$async$state_machine__31106__auto____0 = (function (){
var statearr_32574 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32574[(0)] = cljs$core$async$state_machine__31106__auto__);

(statearr_32574[(1)] = (1));

return statearr_32574;
});
var cljs$core$async$state_machine__31106__auto____1 = (function (state_32557){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_32557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e32575){if((e32575 instanceof Object)){
var ex__31109__auto__ = e32575;
var statearr_32576_32590 = state_32557;
(statearr_32576_32590[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32591 = state_32557;
state_32557 = G__32591;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$state_machine__31106__auto__ = function(state_32557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31106__auto____1.call(this,state_32557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31106__auto____0;
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31106__auto____1;
return cljs$core$async$state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___32579,out))
})();
var state__31195__auto__ = (function (){var statearr_32577 = f__31194__auto__.call(null);
(statearr_32577[(6)] = c__31193__auto___32579);

return statearr_32577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___32579,out))
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
var G__32593 = arguments.length;
switch (G__32593) {
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
var c__31193__auto___32638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___32638,out){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___32638,out){
return (function (state_32617){
var state_val_32618 = (state_32617[(1)]);
if((state_val_32618 === (7))){
var inst_32599 = (state_32617[(7)]);
var inst_32599__$1 = (state_32617[(2)]);
var inst_32600 = (inst_32599__$1 == null);
var inst_32601 = cljs.core.not.call(null,inst_32600);
var state_32617__$1 = (function (){var statearr_32619 = state_32617;
(statearr_32619[(7)] = inst_32599__$1);

return statearr_32619;
})();
if(inst_32601){
var statearr_32620_32639 = state_32617__$1;
(statearr_32620_32639[(1)] = (8));

} else {
var statearr_32621_32640 = state_32617__$1;
(statearr_32621_32640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (1))){
var inst_32594 = (0);
var state_32617__$1 = (function (){var statearr_32622 = state_32617;
(statearr_32622[(8)] = inst_32594);

return statearr_32622;
})();
var statearr_32623_32641 = state_32617__$1;
(statearr_32623_32641[(2)] = null);

(statearr_32623_32641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (4))){
var state_32617__$1 = state_32617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32617__$1,(7),ch);
} else {
if((state_val_32618 === (6))){
var inst_32612 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
var statearr_32624_32642 = state_32617__$1;
(statearr_32624_32642[(2)] = inst_32612);

(statearr_32624_32642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (3))){
var inst_32614 = (state_32617[(2)]);
var inst_32615 = cljs.core.async.close_BANG_.call(null,out);
var state_32617__$1 = (function (){var statearr_32625 = state_32617;
(statearr_32625[(9)] = inst_32614);

return statearr_32625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32617__$1,inst_32615);
} else {
if((state_val_32618 === (2))){
var inst_32594 = (state_32617[(8)]);
var inst_32596 = (inst_32594 < n);
var state_32617__$1 = state_32617;
if(cljs.core.truth_(inst_32596)){
var statearr_32626_32643 = state_32617__$1;
(statearr_32626_32643[(1)] = (4));

} else {
var statearr_32627_32644 = state_32617__$1;
(statearr_32627_32644[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (11))){
var inst_32594 = (state_32617[(8)]);
var inst_32604 = (state_32617[(2)]);
var inst_32605 = (inst_32594 + (1));
var inst_32594__$1 = inst_32605;
var state_32617__$1 = (function (){var statearr_32628 = state_32617;
(statearr_32628[(10)] = inst_32604);

(statearr_32628[(8)] = inst_32594__$1);

return statearr_32628;
})();
var statearr_32629_32645 = state_32617__$1;
(statearr_32629_32645[(2)] = null);

(statearr_32629_32645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (9))){
var state_32617__$1 = state_32617;
var statearr_32630_32646 = state_32617__$1;
(statearr_32630_32646[(2)] = null);

(statearr_32630_32646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (5))){
var state_32617__$1 = state_32617;
var statearr_32631_32647 = state_32617__$1;
(statearr_32631_32647[(2)] = null);

(statearr_32631_32647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (10))){
var inst_32609 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
var statearr_32632_32648 = state_32617__$1;
(statearr_32632_32648[(2)] = inst_32609);

(statearr_32632_32648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (8))){
var inst_32599 = (state_32617[(7)]);
var state_32617__$1 = state_32617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32617__$1,(11),out,inst_32599);
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
});})(c__31193__auto___32638,out))
;
return ((function (switch__31105__auto__,c__31193__auto___32638,out){
return (function() {
var cljs$core$async$state_machine__31106__auto__ = null;
var cljs$core$async$state_machine__31106__auto____0 = (function (){
var statearr_32633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32633[(0)] = cljs$core$async$state_machine__31106__auto__);

(statearr_32633[(1)] = (1));

return statearr_32633;
});
var cljs$core$async$state_machine__31106__auto____1 = (function (state_32617){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_32617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e32634){if((e32634 instanceof Object)){
var ex__31109__auto__ = e32634;
var statearr_32635_32649 = state_32617;
(statearr_32635_32649[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32650 = state_32617;
state_32617 = G__32650;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$state_machine__31106__auto__ = function(state_32617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31106__auto____1.call(this,state_32617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31106__auto____0;
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31106__auto____1;
return cljs$core$async$state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___32638,out))
})();
var state__31195__auto__ = (function (){var statearr_32636 = f__31194__auto__.call(null);
(statearr_32636[(6)] = c__31193__auto___32638);

return statearr_32636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___32638,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32652 = (function (f,ch,meta32653){
this.f = f;
this.ch = ch;
this.meta32653 = meta32653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32654,meta32653__$1){
var self__ = this;
var _32654__$1 = this;
return (new cljs.core.async.t_cljs$core$async32652(self__.f,self__.ch,meta32653__$1));
});

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32654){
var self__ = this;
var _32654__$1 = this;
return self__.meta32653;
});

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32655 = (function (f,ch,meta32653,_,fn1,meta32656){
this.f = f;
this.ch = ch;
this.meta32653 = meta32653;
this._ = _;
this.fn1 = fn1;
this.meta32656 = meta32656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32657,meta32656__$1){
var self__ = this;
var _32657__$1 = this;
return (new cljs.core.async.t_cljs$core$async32655(self__.f,self__.ch,self__.meta32653,self__._,self__.fn1,meta32656__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32657){
var self__ = this;
var _32657__$1 = this;
return self__.meta32656;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32655.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32655.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32651_SHARP_){
return f1.call(null,(((p1__32651_SHARP_ == null))?null:self__.f.call(null,p1__32651_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32655.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32653","meta32653",-1561772565,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32652","cljs.core.async/t_cljs$core$async32652",1760064241,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32656","meta32656",1517046880,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32655";

cljs.core.async.t_cljs$core$async32655.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28390__auto__,writer__28391__auto__,opt__28392__auto__){
return cljs.core._write.call(null,writer__28391__auto__,"cljs.core.async/t_cljs$core$async32655");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32655 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32655(f__$1,ch__$1,meta32653__$1,___$2,fn1__$1,meta32656){
return (new cljs.core.async.t_cljs$core$async32655(f__$1,ch__$1,meta32653__$1,___$2,fn1__$1,meta32656));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32655(self__.f,self__.ch,self__.meta32653,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27753__auto__ = ret;
if(cljs.core.truth_(and__27753__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27753__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32653","meta32653",-1561772565,null)], null);
});

cljs.core.async.t_cljs$core$async32652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32652";

cljs.core.async.t_cljs$core$async32652.cljs$lang$ctorPrWriter = (function (this__28390__auto__,writer__28391__auto__,opt__28392__auto__){
return cljs.core._write.call(null,writer__28391__auto__,"cljs.core.async/t_cljs$core$async32652");
});

cljs.core.async.__GT_t_cljs$core$async32652 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32652(f__$1,ch__$1,meta32653){
return (new cljs.core.async.t_cljs$core$async32652(f__$1,ch__$1,meta32653));
});

}

return (new cljs.core.async.t_cljs$core$async32652(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32658 = (function (f,ch,meta32659){
this.f = f;
this.ch = ch;
this.meta32659 = meta32659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32660,meta32659__$1){
var self__ = this;
var _32660__$1 = this;
return (new cljs.core.async.t_cljs$core$async32658(self__.f,self__.ch,meta32659__$1));
});

cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32660){
var self__ = this;
var _32660__$1 = this;
return self__.meta32659;
});

cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32659","meta32659",-1486481413,null)], null);
});

cljs.core.async.t_cljs$core$async32658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32658";

cljs.core.async.t_cljs$core$async32658.cljs$lang$ctorPrWriter = (function (this__28390__auto__,writer__28391__auto__,opt__28392__auto__){
return cljs.core._write.call(null,writer__28391__auto__,"cljs.core.async/t_cljs$core$async32658");
});

cljs.core.async.__GT_t_cljs$core$async32658 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32658(f__$1,ch__$1,meta32659){
return (new cljs.core.async.t_cljs$core$async32658(f__$1,ch__$1,meta32659));
});

}

return (new cljs.core.async.t_cljs$core$async32658(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32661 = (function (p,ch,meta32662){
this.p = p;
this.ch = ch;
this.meta32662 = meta32662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32663,meta32662__$1){
var self__ = this;
var _32663__$1 = this;
return (new cljs.core.async.t_cljs$core$async32661(self__.p,self__.ch,meta32662__$1));
});

cljs.core.async.t_cljs$core$async32661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32663){
var self__ = this;
var _32663__$1 = this;
return self__.meta32662;
});

cljs.core.async.t_cljs$core$async32661.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32661.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32661.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32661.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32662","meta32662",-2007724129,null)], null);
});

cljs.core.async.t_cljs$core$async32661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32661";

cljs.core.async.t_cljs$core$async32661.cljs$lang$ctorPrWriter = (function (this__28390__auto__,writer__28391__auto__,opt__28392__auto__){
return cljs.core._write.call(null,writer__28391__auto__,"cljs.core.async/t_cljs$core$async32661");
});

cljs.core.async.__GT_t_cljs$core$async32661 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32661(p__$1,ch__$1,meta32662){
return (new cljs.core.async.t_cljs$core$async32661(p__$1,ch__$1,meta32662));
});

}

return (new cljs.core.async.t_cljs$core$async32661(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32665 = arguments.length;
switch (G__32665) {
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
var c__31193__auto___32705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___32705,out){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___32705,out){
return (function (state_32686){
var state_val_32687 = (state_32686[(1)]);
if((state_val_32687 === (7))){
var inst_32682 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
var statearr_32688_32706 = state_32686__$1;
(statearr_32688_32706[(2)] = inst_32682);

(statearr_32688_32706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (1))){
var state_32686__$1 = state_32686;
var statearr_32689_32707 = state_32686__$1;
(statearr_32689_32707[(2)] = null);

(statearr_32689_32707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (4))){
var inst_32668 = (state_32686[(7)]);
var inst_32668__$1 = (state_32686[(2)]);
var inst_32669 = (inst_32668__$1 == null);
var state_32686__$1 = (function (){var statearr_32690 = state_32686;
(statearr_32690[(7)] = inst_32668__$1);

return statearr_32690;
})();
if(cljs.core.truth_(inst_32669)){
var statearr_32691_32708 = state_32686__$1;
(statearr_32691_32708[(1)] = (5));

} else {
var statearr_32692_32709 = state_32686__$1;
(statearr_32692_32709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (6))){
var inst_32668 = (state_32686[(7)]);
var inst_32673 = p.call(null,inst_32668);
var state_32686__$1 = state_32686;
if(cljs.core.truth_(inst_32673)){
var statearr_32693_32710 = state_32686__$1;
(statearr_32693_32710[(1)] = (8));

} else {
var statearr_32694_32711 = state_32686__$1;
(statearr_32694_32711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (3))){
var inst_32684 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32686__$1,inst_32684);
} else {
if((state_val_32687 === (2))){
var state_32686__$1 = state_32686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32686__$1,(4),ch);
} else {
if((state_val_32687 === (11))){
var inst_32676 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
var statearr_32695_32712 = state_32686__$1;
(statearr_32695_32712[(2)] = inst_32676);

(statearr_32695_32712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (9))){
var state_32686__$1 = state_32686;
var statearr_32696_32713 = state_32686__$1;
(statearr_32696_32713[(2)] = null);

(statearr_32696_32713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (5))){
var inst_32671 = cljs.core.async.close_BANG_.call(null,out);
var state_32686__$1 = state_32686;
var statearr_32697_32714 = state_32686__$1;
(statearr_32697_32714[(2)] = inst_32671);

(statearr_32697_32714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (10))){
var inst_32679 = (state_32686[(2)]);
var state_32686__$1 = (function (){var statearr_32698 = state_32686;
(statearr_32698[(8)] = inst_32679);

return statearr_32698;
})();
var statearr_32699_32715 = state_32686__$1;
(statearr_32699_32715[(2)] = null);

(statearr_32699_32715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (8))){
var inst_32668 = (state_32686[(7)]);
var state_32686__$1 = state_32686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32686__$1,(11),out,inst_32668);
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
});})(c__31193__auto___32705,out))
;
return ((function (switch__31105__auto__,c__31193__auto___32705,out){
return (function() {
var cljs$core$async$state_machine__31106__auto__ = null;
var cljs$core$async$state_machine__31106__auto____0 = (function (){
var statearr_32700 = [null,null,null,null,null,null,null,null,null];
(statearr_32700[(0)] = cljs$core$async$state_machine__31106__auto__);

(statearr_32700[(1)] = (1));

return statearr_32700;
});
var cljs$core$async$state_machine__31106__auto____1 = (function (state_32686){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_32686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e32701){if((e32701 instanceof Object)){
var ex__31109__auto__ = e32701;
var statearr_32702_32716 = state_32686;
(statearr_32702_32716[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32717 = state_32686;
state_32686 = G__32717;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$state_machine__31106__auto__ = function(state_32686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31106__auto____1.call(this,state_32686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31106__auto____0;
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31106__auto____1;
return cljs$core$async$state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___32705,out))
})();
var state__31195__auto__ = (function (){var statearr_32703 = f__31194__auto__.call(null);
(statearr_32703[(6)] = c__31193__auto___32705);

return statearr_32703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___32705,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32719 = arguments.length;
switch (G__32719) {
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
var c__31193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto__){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto__){
return (function (state_32782){
var state_val_32783 = (state_32782[(1)]);
if((state_val_32783 === (7))){
var inst_32778 = (state_32782[(2)]);
var state_32782__$1 = state_32782;
var statearr_32784_32822 = state_32782__$1;
(statearr_32784_32822[(2)] = inst_32778);

(statearr_32784_32822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (20))){
var inst_32748 = (state_32782[(7)]);
var inst_32759 = (state_32782[(2)]);
var inst_32760 = cljs.core.next.call(null,inst_32748);
var inst_32734 = inst_32760;
var inst_32735 = null;
var inst_32736 = (0);
var inst_32737 = (0);
var state_32782__$1 = (function (){var statearr_32785 = state_32782;
(statearr_32785[(8)] = inst_32759);

(statearr_32785[(9)] = inst_32737);

(statearr_32785[(10)] = inst_32735);

(statearr_32785[(11)] = inst_32734);

(statearr_32785[(12)] = inst_32736);

return statearr_32785;
})();
var statearr_32786_32823 = state_32782__$1;
(statearr_32786_32823[(2)] = null);

(statearr_32786_32823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (1))){
var state_32782__$1 = state_32782;
var statearr_32787_32824 = state_32782__$1;
(statearr_32787_32824[(2)] = null);

(statearr_32787_32824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (4))){
var inst_32723 = (state_32782[(13)]);
var inst_32723__$1 = (state_32782[(2)]);
var inst_32724 = (inst_32723__$1 == null);
var state_32782__$1 = (function (){var statearr_32788 = state_32782;
(statearr_32788[(13)] = inst_32723__$1);

return statearr_32788;
})();
if(cljs.core.truth_(inst_32724)){
var statearr_32789_32825 = state_32782__$1;
(statearr_32789_32825[(1)] = (5));

} else {
var statearr_32790_32826 = state_32782__$1;
(statearr_32790_32826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (15))){
var state_32782__$1 = state_32782;
var statearr_32794_32827 = state_32782__$1;
(statearr_32794_32827[(2)] = null);

(statearr_32794_32827[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (21))){
var state_32782__$1 = state_32782;
var statearr_32795_32828 = state_32782__$1;
(statearr_32795_32828[(2)] = null);

(statearr_32795_32828[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (13))){
var inst_32737 = (state_32782[(9)]);
var inst_32735 = (state_32782[(10)]);
var inst_32734 = (state_32782[(11)]);
var inst_32736 = (state_32782[(12)]);
var inst_32744 = (state_32782[(2)]);
var inst_32745 = (inst_32737 + (1));
var tmp32791 = inst_32735;
var tmp32792 = inst_32734;
var tmp32793 = inst_32736;
var inst_32734__$1 = tmp32792;
var inst_32735__$1 = tmp32791;
var inst_32736__$1 = tmp32793;
var inst_32737__$1 = inst_32745;
var state_32782__$1 = (function (){var statearr_32796 = state_32782;
(statearr_32796[(9)] = inst_32737__$1);

(statearr_32796[(10)] = inst_32735__$1);

(statearr_32796[(11)] = inst_32734__$1);

(statearr_32796[(14)] = inst_32744);

(statearr_32796[(12)] = inst_32736__$1);

return statearr_32796;
})();
var statearr_32797_32829 = state_32782__$1;
(statearr_32797_32829[(2)] = null);

(statearr_32797_32829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (22))){
var state_32782__$1 = state_32782;
var statearr_32798_32830 = state_32782__$1;
(statearr_32798_32830[(2)] = null);

(statearr_32798_32830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (6))){
var inst_32723 = (state_32782[(13)]);
var inst_32732 = f.call(null,inst_32723);
var inst_32733 = cljs.core.seq.call(null,inst_32732);
var inst_32734 = inst_32733;
var inst_32735 = null;
var inst_32736 = (0);
var inst_32737 = (0);
var state_32782__$1 = (function (){var statearr_32799 = state_32782;
(statearr_32799[(9)] = inst_32737);

(statearr_32799[(10)] = inst_32735);

(statearr_32799[(11)] = inst_32734);

(statearr_32799[(12)] = inst_32736);

return statearr_32799;
})();
var statearr_32800_32831 = state_32782__$1;
(statearr_32800_32831[(2)] = null);

(statearr_32800_32831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (17))){
var inst_32748 = (state_32782[(7)]);
var inst_32752 = cljs.core.chunk_first.call(null,inst_32748);
var inst_32753 = cljs.core.chunk_rest.call(null,inst_32748);
var inst_32754 = cljs.core.count.call(null,inst_32752);
var inst_32734 = inst_32753;
var inst_32735 = inst_32752;
var inst_32736 = inst_32754;
var inst_32737 = (0);
var state_32782__$1 = (function (){var statearr_32801 = state_32782;
(statearr_32801[(9)] = inst_32737);

(statearr_32801[(10)] = inst_32735);

(statearr_32801[(11)] = inst_32734);

(statearr_32801[(12)] = inst_32736);

return statearr_32801;
})();
var statearr_32802_32832 = state_32782__$1;
(statearr_32802_32832[(2)] = null);

(statearr_32802_32832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (3))){
var inst_32780 = (state_32782[(2)]);
var state_32782__$1 = state_32782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32782__$1,inst_32780);
} else {
if((state_val_32783 === (12))){
var inst_32768 = (state_32782[(2)]);
var state_32782__$1 = state_32782;
var statearr_32803_32833 = state_32782__$1;
(statearr_32803_32833[(2)] = inst_32768);

(statearr_32803_32833[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (2))){
var state_32782__$1 = state_32782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32782__$1,(4),in$);
} else {
if((state_val_32783 === (23))){
var inst_32776 = (state_32782[(2)]);
var state_32782__$1 = state_32782;
var statearr_32804_32834 = state_32782__$1;
(statearr_32804_32834[(2)] = inst_32776);

(statearr_32804_32834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (19))){
var inst_32763 = (state_32782[(2)]);
var state_32782__$1 = state_32782;
var statearr_32805_32835 = state_32782__$1;
(statearr_32805_32835[(2)] = inst_32763);

(statearr_32805_32835[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (11))){
var inst_32748 = (state_32782[(7)]);
var inst_32734 = (state_32782[(11)]);
var inst_32748__$1 = cljs.core.seq.call(null,inst_32734);
var state_32782__$1 = (function (){var statearr_32806 = state_32782;
(statearr_32806[(7)] = inst_32748__$1);

return statearr_32806;
})();
if(inst_32748__$1){
var statearr_32807_32836 = state_32782__$1;
(statearr_32807_32836[(1)] = (14));

} else {
var statearr_32808_32837 = state_32782__$1;
(statearr_32808_32837[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (9))){
var inst_32770 = (state_32782[(2)]);
var inst_32771 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32782__$1 = (function (){var statearr_32809 = state_32782;
(statearr_32809[(15)] = inst_32770);

return statearr_32809;
})();
if(cljs.core.truth_(inst_32771)){
var statearr_32810_32838 = state_32782__$1;
(statearr_32810_32838[(1)] = (21));

} else {
var statearr_32811_32839 = state_32782__$1;
(statearr_32811_32839[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (5))){
var inst_32726 = cljs.core.async.close_BANG_.call(null,out);
var state_32782__$1 = state_32782;
var statearr_32812_32840 = state_32782__$1;
(statearr_32812_32840[(2)] = inst_32726);

(statearr_32812_32840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (14))){
var inst_32748 = (state_32782[(7)]);
var inst_32750 = cljs.core.chunked_seq_QMARK_.call(null,inst_32748);
var state_32782__$1 = state_32782;
if(inst_32750){
var statearr_32813_32841 = state_32782__$1;
(statearr_32813_32841[(1)] = (17));

} else {
var statearr_32814_32842 = state_32782__$1;
(statearr_32814_32842[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (16))){
var inst_32766 = (state_32782[(2)]);
var state_32782__$1 = state_32782;
var statearr_32815_32843 = state_32782__$1;
(statearr_32815_32843[(2)] = inst_32766);

(statearr_32815_32843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (10))){
var inst_32737 = (state_32782[(9)]);
var inst_32735 = (state_32782[(10)]);
var inst_32742 = cljs.core._nth.call(null,inst_32735,inst_32737);
var state_32782__$1 = state_32782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32782__$1,(13),out,inst_32742);
} else {
if((state_val_32783 === (18))){
var inst_32748 = (state_32782[(7)]);
var inst_32757 = cljs.core.first.call(null,inst_32748);
var state_32782__$1 = state_32782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32782__$1,(20),out,inst_32757);
} else {
if((state_val_32783 === (8))){
var inst_32737 = (state_32782[(9)]);
var inst_32736 = (state_32782[(12)]);
var inst_32739 = (inst_32737 < inst_32736);
var inst_32740 = inst_32739;
var state_32782__$1 = state_32782;
if(cljs.core.truth_(inst_32740)){
var statearr_32816_32844 = state_32782__$1;
(statearr_32816_32844[(1)] = (10));

} else {
var statearr_32817_32845 = state_32782__$1;
(statearr_32817_32845[(1)] = (11));

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
});})(c__31193__auto__))
;
return ((function (switch__31105__auto__,c__31193__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31106__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31106__auto____0 = (function (){
var statearr_32818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32818[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31106__auto__);

(statearr_32818[(1)] = (1));

return statearr_32818;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31106__auto____1 = (function (state_32782){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_32782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e32819){if((e32819 instanceof Object)){
var ex__31109__auto__ = e32819;
var statearr_32820_32846 = state_32782;
(statearr_32820_32846[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32847 = state_32782;
state_32782 = G__32847;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31106__auto__ = function(state_32782){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31106__auto____1.call(this,state_32782);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31106__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31106__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto__))
})();
var state__31195__auto__ = (function (){var statearr_32821 = f__31194__auto__.call(null);
(statearr_32821[(6)] = c__31193__auto__);

return statearr_32821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto__))
);

return c__31193__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32849 = arguments.length;
switch (G__32849) {
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
var G__32852 = arguments.length;
switch (G__32852) {
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
var G__32855 = arguments.length;
switch (G__32855) {
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
var c__31193__auto___32902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___32902,out){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___32902,out){
return (function (state_32879){
var state_val_32880 = (state_32879[(1)]);
if((state_val_32880 === (7))){
var inst_32874 = (state_32879[(2)]);
var state_32879__$1 = state_32879;
var statearr_32881_32903 = state_32879__$1;
(statearr_32881_32903[(2)] = inst_32874);

(statearr_32881_32903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32880 === (1))){
var inst_32856 = null;
var state_32879__$1 = (function (){var statearr_32882 = state_32879;
(statearr_32882[(7)] = inst_32856);

return statearr_32882;
})();
var statearr_32883_32904 = state_32879__$1;
(statearr_32883_32904[(2)] = null);

(statearr_32883_32904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32880 === (4))){
var inst_32859 = (state_32879[(8)]);
var inst_32859__$1 = (state_32879[(2)]);
var inst_32860 = (inst_32859__$1 == null);
var inst_32861 = cljs.core.not.call(null,inst_32860);
var state_32879__$1 = (function (){var statearr_32884 = state_32879;
(statearr_32884[(8)] = inst_32859__$1);

return statearr_32884;
})();
if(inst_32861){
var statearr_32885_32905 = state_32879__$1;
(statearr_32885_32905[(1)] = (5));

} else {
var statearr_32886_32906 = state_32879__$1;
(statearr_32886_32906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32880 === (6))){
var state_32879__$1 = state_32879;
var statearr_32887_32907 = state_32879__$1;
(statearr_32887_32907[(2)] = null);

(statearr_32887_32907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32880 === (3))){
var inst_32876 = (state_32879[(2)]);
var inst_32877 = cljs.core.async.close_BANG_.call(null,out);
var state_32879__$1 = (function (){var statearr_32888 = state_32879;
(statearr_32888[(9)] = inst_32876);

return statearr_32888;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32879__$1,inst_32877);
} else {
if((state_val_32880 === (2))){
var state_32879__$1 = state_32879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32879__$1,(4),ch);
} else {
if((state_val_32880 === (11))){
var inst_32859 = (state_32879[(8)]);
var inst_32868 = (state_32879[(2)]);
var inst_32856 = inst_32859;
var state_32879__$1 = (function (){var statearr_32889 = state_32879;
(statearr_32889[(10)] = inst_32868);

(statearr_32889[(7)] = inst_32856);

return statearr_32889;
})();
var statearr_32890_32908 = state_32879__$1;
(statearr_32890_32908[(2)] = null);

(statearr_32890_32908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32880 === (9))){
var inst_32859 = (state_32879[(8)]);
var state_32879__$1 = state_32879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32879__$1,(11),out,inst_32859);
} else {
if((state_val_32880 === (5))){
var inst_32859 = (state_32879[(8)]);
var inst_32856 = (state_32879[(7)]);
var inst_32863 = cljs.core._EQ_.call(null,inst_32859,inst_32856);
var state_32879__$1 = state_32879;
if(inst_32863){
var statearr_32892_32909 = state_32879__$1;
(statearr_32892_32909[(1)] = (8));

} else {
var statearr_32893_32910 = state_32879__$1;
(statearr_32893_32910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32880 === (10))){
var inst_32871 = (state_32879[(2)]);
var state_32879__$1 = state_32879;
var statearr_32894_32911 = state_32879__$1;
(statearr_32894_32911[(2)] = inst_32871);

(statearr_32894_32911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32880 === (8))){
var inst_32856 = (state_32879[(7)]);
var tmp32891 = inst_32856;
var inst_32856__$1 = tmp32891;
var state_32879__$1 = (function (){var statearr_32895 = state_32879;
(statearr_32895[(7)] = inst_32856__$1);

return statearr_32895;
})();
var statearr_32896_32912 = state_32879__$1;
(statearr_32896_32912[(2)] = null);

(statearr_32896_32912[(1)] = (2));


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
});})(c__31193__auto___32902,out))
;
return ((function (switch__31105__auto__,c__31193__auto___32902,out){
return (function() {
var cljs$core$async$state_machine__31106__auto__ = null;
var cljs$core$async$state_machine__31106__auto____0 = (function (){
var statearr_32897 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32897[(0)] = cljs$core$async$state_machine__31106__auto__);

(statearr_32897[(1)] = (1));

return statearr_32897;
});
var cljs$core$async$state_machine__31106__auto____1 = (function (state_32879){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_32879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e32898){if((e32898 instanceof Object)){
var ex__31109__auto__ = e32898;
var statearr_32899_32913 = state_32879;
(statearr_32899_32913[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32914 = state_32879;
state_32879 = G__32914;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$state_machine__31106__auto__ = function(state_32879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31106__auto____1.call(this,state_32879);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31106__auto____0;
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31106__auto____1;
return cljs$core$async$state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___32902,out))
})();
var state__31195__auto__ = (function (){var statearr_32900 = f__31194__auto__.call(null);
(statearr_32900[(6)] = c__31193__auto___32902);

return statearr_32900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___32902,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32916 = arguments.length;
switch (G__32916) {
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
var c__31193__auto___32982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___32982,out){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___32982,out){
return (function (state_32954){
var state_val_32955 = (state_32954[(1)]);
if((state_val_32955 === (7))){
var inst_32950 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32956_32983 = state_32954__$1;
(statearr_32956_32983[(2)] = inst_32950);

(statearr_32956_32983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (1))){
var inst_32917 = (new Array(n));
var inst_32918 = inst_32917;
var inst_32919 = (0);
var state_32954__$1 = (function (){var statearr_32957 = state_32954;
(statearr_32957[(7)] = inst_32918);

(statearr_32957[(8)] = inst_32919);

return statearr_32957;
})();
var statearr_32958_32984 = state_32954__$1;
(statearr_32958_32984[(2)] = null);

(statearr_32958_32984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (4))){
var inst_32922 = (state_32954[(9)]);
var inst_32922__$1 = (state_32954[(2)]);
var inst_32923 = (inst_32922__$1 == null);
var inst_32924 = cljs.core.not.call(null,inst_32923);
var state_32954__$1 = (function (){var statearr_32959 = state_32954;
(statearr_32959[(9)] = inst_32922__$1);

return statearr_32959;
})();
if(inst_32924){
var statearr_32960_32985 = state_32954__$1;
(statearr_32960_32985[(1)] = (5));

} else {
var statearr_32961_32986 = state_32954__$1;
(statearr_32961_32986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (15))){
var inst_32944 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32962_32987 = state_32954__$1;
(statearr_32962_32987[(2)] = inst_32944);

(statearr_32962_32987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (13))){
var state_32954__$1 = state_32954;
var statearr_32963_32988 = state_32954__$1;
(statearr_32963_32988[(2)] = null);

(statearr_32963_32988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (6))){
var inst_32919 = (state_32954[(8)]);
var inst_32940 = (inst_32919 > (0));
var state_32954__$1 = state_32954;
if(cljs.core.truth_(inst_32940)){
var statearr_32964_32989 = state_32954__$1;
(statearr_32964_32989[(1)] = (12));

} else {
var statearr_32965_32990 = state_32954__$1;
(statearr_32965_32990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (3))){
var inst_32952 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32954__$1,inst_32952);
} else {
if((state_val_32955 === (12))){
var inst_32918 = (state_32954[(7)]);
var inst_32942 = cljs.core.vec.call(null,inst_32918);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32954__$1,(15),out,inst_32942);
} else {
if((state_val_32955 === (2))){
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32954__$1,(4),ch);
} else {
if((state_val_32955 === (11))){
var inst_32934 = (state_32954[(2)]);
var inst_32935 = (new Array(n));
var inst_32918 = inst_32935;
var inst_32919 = (0);
var state_32954__$1 = (function (){var statearr_32966 = state_32954;
(statearr_32966[(7)] = inst_32918);

(statearr_32966[(8)] = inst_32919);

(statearr_32966[(10)] = inst_32934);

return statearr_32966;
})();
var statearr_32967_32991 = state_32954__$1;
(statearr_32967_32991[(2)] = null);

(statearr_32967_32991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (9))){
var inst_32918 = (state_32954[(7)]);
var inst_32932 = cljs.core.vec.call(null,inst_32918);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32954__$1,(11),out,inst_32932);
} else {
if((state_val_32955 === (5))){
var inst_32918 = (state_32954[(7)]);
var inst_32922 = (state_32954[(9)]);
var inst_32919 = (state_32954[(8)]);
var inst_32927 = (state_32954[(11)]);
var inst_32926 = (inst_32918[inst_32919] = inst_32922);
var inst_32927__$1 = (inst_32919 + (1));
var inst_32928 = (inst_32927__$1 < n);
var state_32954__$1 = (function (){var statearr_32968 = state_32954;
(statearr_32968[(12)] = inst_32926);

(statearr_32968[(11)] = inst_32927__$1);

return statearr_32968;
})();
if(cljs.core.truth_(inst_32928)){
var statearr_32969_32992 = state_32954__$1;
(statearr_32969_32992[(1)] = (8));

} else {
var statearr_32970_32993 = state_32954__$1;
(statearr_32970_32993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (14))){
var inst_32947 = (state_32954[(2)]);
var inst_32948 = cljs.core.async.close_BANG_.call(null,out);
var state_32954__$1 = (function (){var statearr_32972 = state_32954;
(statearr_32972[(13)] = inst_32947);

return statearr_32972;
})();
var statearr_32973_32994 = state_32954__$1;
(statearr_32973_32994[(2)] = inst_32948);

(statearr_32973_32994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (10))){
var inst_32938 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32974_32995 = state_32954__$1;
(statearr_32974_32995[(2)] = inst_32938);

(statearr_32974_32995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (8))){
var inst_32918 = (state_32954[(7)]);
var inst_32927 = (state_32954[(11)]);
var tmp32971 = inst_32918;
var inst_32918__$1 = tmp32971;
var inst_32919 = inst_32927;
var state_32954__$1 = (function (){var statearr_32975 = state_32954;
(statearr_32975[(7)] = inst_32918__$1);

(statearr_32975[(8)] = inst_32919);

return statearr_32975;
})();
var statearr_32976_32996 = state_32954__$1;
(statearr_32976_32996[(2)] = null);

(statearr_32976_32996[(1)] = (2));


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
});})(c__31193__auto___32982,out))
;
return ((function (switch__31105__auto__,c__31193__auto___32982,out){
return (function() {
var cljs$core$async$state_machine__31106__auto__ = null;
var cljs$core$async$state_machine__31106__auto____0 = (function (){
var statearr_32977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32977[(0)] = cljs$core$async$state_machine__31106__auto__);

(statearr_32977[(1)] = (1));

return statearr_32977;
});
var cljs$core$async$state_machine__31106__auto____1 = (function (state_32954){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_32954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e32978){if((e32978 instanceof Object)){
var ex__31109__auto__ = e32978;
var statearr_32979_32997 = state_32954;
(statearr_32979_32997[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32998 = state_32954;
state_32954 = G__32998;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$state_machine__31106__auto__ = function(state_32954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31106__auto____1.call(this,state_32954);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31106__auto____0;
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31106__auto____1;
return cljs$core$async$state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___32982,out))
})();
var state__31195__auto__ = (function (){var statearr_32980 = f__31194__auto__.call(null);
(statearr_32980[(6)] = c__31193__auto___32982);

return statearr_32980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___32982,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33000 = arguments.length;
switch (G__33000) {
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
var c__31193__auto___33070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___33070,out){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___33070,out){
return (function (state_33042){
var state_val_33043 = (state_33042[(1)]);
if((state_val_33043 === (7))){
var inst_33038 = (state_33042[(2)]);
var state_33042__$1 = state_33042;
var statearr_33044_33071 = state_33042__$1;
(statearr_33044_33071[(2)] = inst_33038);

(statearr_33044_33071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (1))){
var inst_33001 = [];
var inst_33002 = inst_33001;
var inst_33003 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33042__$1 = (function (){var statearr_33045 = state_33042;
(statearr_33045[(7)] = inst_33003);

(statearr_33045[(8)] = inst_33002);

return statearr_33045;
})();
var statearr_33046_33072 = state_33042__$1;
(statearr_33046_33072[(2)] = null);

(statearr_33046_33072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (4))){
var inst_33006 = (state_33042[(9)]);
var inst_33006__$1 = (state_33042[(2)]);
var inst_33007 = (inst_33006__$1 == null);
var inst_33008 = cljs.core.not.call(null,inst_33007);
var state_33042__$1 = (function (){var statearr_33047 = state_33042;
(statearr_33047[(9)] = inst_33006__$1);

return statearr_33047;
})();
if(inst_33008){
var statearr_33048_33073 = state_33042__$1;
(statearr_33048_33073[(1)] = (5));

} else {
var statearr_33049_33074 = state_33042__$1;
(statearr_33049_33074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (15))){
var inst_33032 = (state_33042[(2)]);
var state_33042__$1 = state_33042;
var statearr_33050_33075 = state_33042__$1;
(statearr_33050_33075[(2)] = inst_33032);

(statearr_33050_33075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (13))){
var state_33042__$1 = state_33042;
var statearr_33051_33076 = state_33042__$1;
(statearr_33051_33076[(2)] = null);

(statearr_33051_33076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (6))){
var inst_33002 = (state_33042[(8)]);
var inst_33027 = inst_33002.length;
var inst_33028 = (inst_33027 > (0));
var state_33042__$1 = state_33042;
if(cljs.core.truth_(inst_33028)){
var statearr_33052_33077 = state_33042__$1;
(statearr_33052_33077[(1)] = (12));

} else {
var statearr_33053_33078 = state_33042__$1;
(statearr_33053_33078[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (3))){
var inst_33040 = (state_33042[(2)]);
var state_33042__$1 = state_33042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33042__$1,inst_33040);
} else {
if((state_val_33043 === (12))){
var inst_33002 = (state_33042[(8)]);
var inst_33030 = cljs.core.vec.call(null,inst_33002);
var state_33042__$1 = state_33042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33042__$1,(15),out,inst_33030);
} else {
if((state_val_33043 === (2))){
var state_33042__$1 = state_33042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33042__$1,(4),ch);
} else {
if((state_val_33043 === (11))){
var inst_33006 = (state_33042[(9)]);
var inst_33010 = (state_33042[(10)]);
var inst_33020 = (state_33042[(2)]);
var inst_33021 = [];
var inst_33022 = inst_33021.push(inst_33006);
var inst_33002 = inst_33021;
var inst_33003 = inst_33010;
var state_33042__$1 = (function (){var statearr_33054 = state_33042;
(statearr_33054[(7)] = inst_33003);

(statearr_33054[(11)] = inst_33020);

(statearr_33054[(12)] = inst_33022);

(statearr_33054[(8)] = inst_33002);

return statearr_33054;
})();
var statearr_33055_33079 = state_33042__$1;
(statearr_33055_33079[(2)] = null);

(statearr_33055_33079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (9))){
var inst_33002 = (state_33042[(8)]);
var inst_33018 = cljs.core.vec.call(null,inst_33002);
var state_33042__$1 = state_33042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33042__$1,(11),out,inst_33018);
} else {
if((state_val_33043 === (5))){
var inst_33006 = (state_33042[(9)]);
var inst_33003 = (state_33042[(7)]);
var inst_33010 = (state_33042[(10)]);
var inst_33010__$1 = f.call(null,inst_33006);
var inst_33011 = cljs.core._EQ_.call(null,inst_33010__$1,inst_33003);
var inst_33012 = cljs.core.keyword_identical_QMARK_.call(null,inst_33003,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33013 = (inst_33011) || (inst_33012);
var state_33042__$1 = (function (){var statearr_33056 = state_33042;
(statearr_33056[(10)] = inst_33010__$1);

return statearr_33056;
})();
if(cljs.core.truth_(inst_33013)){
var statearr_33057_33080 = state_33042__$1;
(statearr_33057_33080[(1)] = (8));

} else {
var statearr_33058_33081 = state_33042__$1;
(statearr_33058_33081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (14))){
var inst_33035 = (state_33042[(2)]);
var inst_33036 = cljs.core.async.close_BANG_.call(null,out);
var state_33042__$1 = (function (){var statearr_33060 = state_33042;
(statearr_33060[(13)] = inst_33035);

return statearr_33060;
})();
var statearr_33061_33082 = state_33042__$1;
(statearr_33061_33082[(2)] = inst_33036);

(statearr_33061_33082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (10))){
var inst_33025 = (state_33042[(2)]);
var state_33042__$1 = state_33042;
var statearr_33062_33083 = state_33042__$1;
(statearr_33062_33083[(2)] = inst_33025);

(statearr_33062_33083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (8))){
var inst_33006 = (state_33042[(9)]);
var inst_33010 = (state_33042[(10)]);
var inst_33002 = (state_33042[(8)]);
var inst_33015 = inst_33002.push(inst_33006);
var tmp33059 = inst_33002;
var inst_33002__$1 = tmp33059;
var inst_33003 = inst_33010;
var state_33042__$1 = (function (){var statearr_33063 = state_33042;
(statearr_33063[(7)] = inst_33003);

(statearr_33063[(14)] = inst_33015);

(statearr_33063[(8)] = inst_33002__$1);

return statearr_33063;
})();
var statearr_33064_33084 = state_33042__$1;
(statearr_33064_33084[(2)] = null);

(statearr_33064_33084[(1)] = (2));


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
});})(c__31193__auto___33070,out))
;
return ((function (switch__31105__auto__,c__31193__auto___33070,out){
return (function() {
var cljs$core$async$state_machine__31106__auto__ = null;
var cljs$core$async$state_machine__31106__auto____0 = (function (){
var statearr_33065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33065[(0)] = cljs$core$async$state_machine__31106__auto__);

(statearr_33065[(1)] = (1));

return statearr_33065;
});
var cljs$core$async$state_machine__31106__auto____1 = (function (state_33042){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_33042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e33066){if((e33066 instanceof Object)){
var ex__31109__auto__ = e33066;
var statearr_33067_33085 = state_33042;
(statearr_33067_33085[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33086 = state_33042;
state_33042 = G__33086;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
cljs$core$async$state_machine__31106__auto__ = function(state_33042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31106__auto____1.call(this,state_33042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31106__auto____0;
cljs$core$async$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31106__auto____1;
return cljs$core$async$state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___33070,out))
})();
var state__31195__auto__ = (function (){var statearr_33068 = f__31194__auto__.call(null);
(statearr_33068[(6)] = c__31193__auto___33070);

return statearr_33068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___33070,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1522528339384
