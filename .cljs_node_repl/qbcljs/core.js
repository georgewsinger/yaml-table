// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('qbcljs.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
qbcljs.core._main = (function qbcljs$core$_main(){
console.log("console.log");

cljs.core.println.call(null,"println test");

var c_26473 = cljs.core.async.chan.call(null);
var c__15891__auto___26474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15891__auto___26474,c_26473){
return (function (){
var f__15892__auto__ = (function (){var switch__15779__auto__ = ((function (c__15891__auto___26474,c_26473){
return (function (state_26426){
var state_val_26427 = (state_26426[(1)]);
if((state_val_26427 === (1))){
var state_26426__$1 = state_26426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26426__$1,(2),c_26473,"hello!");
} else {
if((state_val_26427 === (2))){
var inst_26424 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26426__$1,inst_26424);
} else {
return null;
}
}
});})(c__15891__auto___26474,c_26473))
;
return ((function (switch__15779__auto__,c__15891__auto___26474,c_26473){
return (function() {
var qbcljs$core$_main_$_state_machine__15780__auto__ = null;
var qbcljs$core$_main_$_state_machine__15780__auto____0 = (function (){
var statearr_26431 = [null,null,null,null,null,null,null];
(statearr_26431[(0)] = qbcljs$core$_main_$_state_machine__15780__auto__);

(statearr_26431[(1)] = (1));

return statearr_26431;
});
var qbcljs$core$_main_$_state_machine__15780__auto____1 = (function (state_26426){
while(true){
var ret_value__15781__auto__ = (function (){try{while(true){
var result__15782__auto__ = switch__15779__auto__.call(null,state_26426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15782__auto__;
}
break;
}
}catch (e26432){if((e26432 instanceof Object)){
var ex__15783__auto__ = e26432;
var statearr_26433_26475 = state_26426;
(statearr_26433_26475[(5)] = ex__15783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26476 = state_26426;
state_26426 = G__26476;
continue;
} else {
return ret_value__15781__auto__;
}
break;
}
});
qbcljs$core$_main_$_state_machine__15780__auto__ = function(state_26426){
switch(arguments.length){
case 0:
return qbcljs$core$_main_$_state_machine__15780__auto____0.call(this);
case 1:
return qbcljs$core$_main_$_state_machine__15780__auto____1.call(this,state_26426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
qbcljs$core$_main_$_state_machine__15780__auto__.cljs$core$IFn$_invoke$arity$0 = qbcljs$core$_main_$_state_machine__15780__auto____0;
qbcljs$core$_main_$_state_machine__15780__auto__.cljs$core$IFn$_invoke$arity$1 = qbcljs$core$_main_$_state_machine__15780__auto____1;
return qbcljs$core$_main_$_state_machine__15780__auto__;
})()
;})(switch__15779__auto__,c__15891__auto___26474,c_26473))
})();
var state__15893__auto__ = (function (){var statearr_26434 = f__15892__auto__.call(null);
(statearr_26434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15891__auto___26474);

return statearr_26434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15893__auto__);
});})(c__15891__auto___26474,c_26473))
);


var c__15891__auto___26477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15891__auto___26477,c_26473){
return (function (){
var f__15892__auto__ = (function (){var switch__15779__auto__ = ((function (c__15891__auto___26477,c_26473){
return (function (state_26439){
var state_val_26440 = (state_26439[(1)]);
if((state_val_26440 === (1))){
var state_26439__$1 = state_26439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26439__$1,(2),c_26473);
} else {
if((state_val_26440 === (2))){
var inst_26436 = (state_26439[(2)]);
var inst_26437 = console.log(inst_26436);
var state_26439__$1 = state_26439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26439__$1,inst_26437);
} else {
return null;
}
}
});})(c__15891__auto___26477,c_26473))
;
return ((function (switch__15779__auto__,c__15891__auto___26477,c_26473){
return (function() {
var qbcljs$core$_main_$_state_machine__15780__auto__ = null;
var qbcljs$core$_main_$_state_machine__15780__auto____0 = (function (){
var statearr_26444 = [null,null,null,null,null,null,null];
(statearr_26444[(0)] = qbcljs$core$_main_$_state_machine__15780__auto__);

(statearr_26444[(1)] = (1));

return statearr_26444;
});
var qbcljs$core$_main_$_state_machine__15780__auto____1 = (function (state_26439){
while(true){
var ret_value__15781__auto__ = (function (){try{while(true){
var result__15782__auto__ = switch__15779__auto__.call(null,state_26439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15782__auto__;
}
break;
}
}catch (e26445){if((e26445 instanceof Object)){
var ex__15783__auto__ = e26445;
var statearr_26446_26478 = state_26439;
(statearr_26446_26478[(5)] = ex__15783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26479 = state_26439;
state_26439 = G__26479;
continue;
} else {
return ret_value__15781__auto__;
}
break;
}
});
qbcljs$core$_main_$_state_machine__15780__auto__ = function(state_26439){
switch(arguments.length){
case 0:
return qbcljs$core$_main_$_state_machine__15780__auto____0.call(this);
case 1:
return qbcljs$core$_main_$_state_machine__15780__auto____1.call(this,state_26439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
qbcljs$core$_main_$_state_machine__15780__auto__.cljs$core$IFn$_invoke$arity$0 = qbcljs$core$_main_$_state_machine__15780__auto____0;
qbcljs$core$_main_$_state_machine__15780__auto__.cljs$core$IFn$_invoke$arity$1 = qbcljs$core$_main_$_state_machine__15780__auto____1;
return qbcljs$core$_main_$_state_machine__15780__auto__;
})()
;})(switch__15779__auto__,c__15891__auto___26477,c_26473))
})();
var state__15893__auto__ = (function (){var statearr_26447 = f__15892__auto__.call(null);
(statearr_26447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15891__auto___26477);

return statearr_26447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15893__auto__);
});})(c__15891__auto___26477,c_26473))
);


var c = cljs.core.async.chan.call(null);
var c__15891__auto___26480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15891__auto___26480,c){
return (function (){
var f__15892__auto__ = (function (){var switch__15779__auto__ = ((function (c__15891__auto___26480,c){
return (function (state_26452){
var state_val_26453 = (state_26452[(1)]);
if((state_val_26453 === (1))){
var state_26452__$1 = state_26452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26452__$1,(2),c);
} else {
if((state_val_26453 === (2))){
var inst_26449 = (state_26452[(2)]);
var inst_26450 = console.log(inst_26449);
var state_26452__$1 = state_26452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26452__$1,inst_26450);
} else {
return null;
}
}
});})(c__15891__auto___26480,c))
;
return ((function (switch__15779__auto__,c__15891__auto___26480,c){
return (function() {
var qbcljs$core$_main_$_state_machine__15780__auto__ = null;
var qbcljs$core$_main_$_state_machine__15780__auto____0 = (function (){
var statearr_26457 = [null,null,null,null,null,null,null];
(statearr_26457[(0)] = qbcljs$core$_main_$_state_machine__15780__auto__);

(statearr_26457[(1)] = (1));

return statearr_26457;
});
var qbcljs$core$_main_$_state_machine__15780__auto____1 = (function (state_26452){
while(true){
var ret_value__15781__auto__ = (function (){try{while(true){
var result__15782__auto__ = switch__15779__auto__.call(null,state_26452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15782__auto__;
}
break;
}
}catch (e26458){if((e26458 instanceof Object)){
var ex__15783__auto__ = e26458;
var statearr_26459_26481 = state_26452;
(statearr_26459_26481[(5)] = ex__15783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26482 = state_26452;
state_26452 = G__26482;
continue;
} else {
return ret_value__15781__auto__;
}
break;
}
});
qbcljs$core$_main_$_state_machine__15780__auto__ = function(state_26452){
switch(arguments.length){
case 0:
return qbcljs$core$_main_$_state_machine__15780__auto____0.call(this);
case 1:
return qbcljs$core$_main_$_state_machine__15780__auto____1.call(this,state_26452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
qbcljs$core$_main_$_state_machine__15780__auto__.cljs$core$IFn$_invoke$arity$0 = qbcljs$core$_main_$_state_machine__15780__auto____0;
qbcljs$core$_main_$_state_machine__15780__auto__.cljs$core$IFn$_invoke$arity$1 = qbcljs$core$_main_$_state_machine__15780__auto____1;
return qbcljs$core$_main_$_state_machine__15780__auto__;
})()
;})(switch__15779__auto__,c__15891__auto___26480,c))
})();
var state__15893__auto__ = (function (){var statearr_26460 = f__15892__auto__.call(null);
(statearr_26460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15891__auto___26480);

return statearr_26460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15893__auto__);
});})(c__15891__auto___26480,c))
);


var c__15891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15891__auto__,c){
return (function (){
var f__15892__auto__ = (function (){var switch__15779__auto__ = ((function (c__15891__auto__,c){
return (function (state_26464){
var state_val_26465 = (state_26464[(1)]);
if((state_val_26465 === (1))){
var state_26464__$1 = state_26464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26464__$1,(2),c,"later");
} else {
if((state_val_26465 === (2))){
var inst_26462 = (state_26464[(2)]);
var state_26464__$1 = state_26464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26464__$1,inst_26462);
} else {
return null;
}
}
});})(c__15891__auto__,c))
;
return ((function (switch__15779__auto__,c__15891__auto__,c){
return (function() {
var qbcljs$core$_main_$_state_machine__15780__auto__ = null;
var qbcljs$core$_main_$_state_machine__15780__auto____0 = (function (){
var statearr_26469 = [null,null,null,null,null,null,null];
(statearr_26469[(0)] = qbcljs$core$_main_$_state_machine__15780__auto__);

(statearr_26469[(1)] = (1));

return statearr_26469;
});
var qbcljs$core$_main_$_state_machine__15780__auto____1 = (function (state_26464){
while(true){
var ret_value__15781__auto__ = (function (){try{while(true){
var result__15782__auto__ = switch__15779__auto__.call(null,state_26464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15782__auto__;
}
break;
}
}catch (e26470){if((e26470 instanceof Object)){
var ex__15783__auto__ = e26470;
var statearr_26471_26483 = state_26464;
(statearr_26471_26483[(5)] = ex__15783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26484 = state_26464;
state_26464 = G__26484;
continue;
} else {
return ret_value__15781__auto__;
}
break;
}
});
qbcljs$core$_main_$_state_machine__15780__auto__ = function(state_26464){
switch(arguments.length){
case 0:
return qbcljs$core$_main_$_state_machine__15780__auto____0.call(this);
case 1:
return qbcljs$core$_main_$_state_machine__15780__auto____1.call(this,state_26464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
qbcljs$core$_main_$_state_machine__15780__auto__.cljs$core$IFn$_invoke$arity$0 = qbcljs$core$_main_$_state_machine__15780__auto____0;
qbcljs$core$_main_$_state_machine__15780__auto__.cljs$core$IFn$_invoke$arity$1 = qbcljs$core$_main_$_state_machine__15780__auto____1;
return qbcljs$core$_main_$_state_machine__15780__auto__;
})()
;})(switch__15779__auto__,c__15891__auto__,c))
})();
var state__15893__auto__ = (function (){var statearr_26472 = f__15892__auto__.call(null);
(statearr_26472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15891__auto__);

return statearr_26472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15893__auto__);
});})(c__15891__auto__,c))
);

return c__15891__auto__;
});
cljs.core._STAR_main_cli_fn_STAR_ = qbcljs.core._main;

//# sourceMappingURL=core.js.map