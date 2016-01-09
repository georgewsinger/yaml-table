// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('yaml_table.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
yaml_table.core.file_path__GT_string_with_contents = (function yaml_table$core$file_path__GT_string_with_contents(path){
var fs = cljs.nodejs.require.call(null,"fs");
return fs.readFileSync(path,"utf8");
});
yaml_table.core.string__GT_yaml_object_chan = (function yaml_table$core$string__GT_yaml_object_chan(string){
var yaml = cljs.nodejs.require.call(null,"js-yaml");
var fs = cljs.nodejs.require.call(null,"fs");
var c = cljs.core.async.chan.call(null,(1));
var c__15789__auto___154364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___154364,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___154364,yaml,fs,c){
return (function (state_154341){
var state_val_154342 = (state_154341[(1)]);
if((state_val_154342 === (1))){
var inst_154338 = (function (){return ((function (state_val_154342,c__15789__auto___154364,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_154342,c__15789__auto___154364,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_154342,c__15789__auto___154364,yaml,fs,c){
return (function (state_154347){
var state_val_154348 = (state_154347[(1)]);
if((state_val_154348 === (1))){
var state_154347__$1 = state_154347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_154347__$1,(2),c,returned_yaml_object);
} else {
if((state_val_154348 === (2))){
var inst_154344 = (state_154347[(2)]);
var inst_154345 = cljs.core.async.close_BANG_.call(null,c);
var state_154347__$1 = (function (){var statearr_154349 = state_154347;
(statearr_154349[(7)] = inst_154344);

return statearr_154349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154347__$1,inst_154345);
} else {
return null;
}
}
});})(c__15789__auto____$1,state_val_154342,c__15789__auto___154364,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_154342,c__15789__auto___154364,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_154353 = [null,null,null,null,null,null,null,null];
(statearr_154353[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_154353[(1)] = (1));

return statearr_154353;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_154347){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_154347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e154354){if((e154354 instanceof Object)){
var ex__15728__auto__ = e154354;
var statearr_154355_154365 = state_154347;
(statearr_154355_154365[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154366 = state_154347;
state_154347 = G__154366;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_154347){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_154347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_154342,c__15789__auto___154364,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_154356 = f__15790__auto__.call(null);
(statearr_154356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_154356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_154342,c__15789__auto___154364,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_154342,c__15789__auto___154364,yaml,fs,c))
})();
var inst_154339 = yaml.safeLoadAll(string,inst_154338);
var state_154341__$1 = state_154341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154341__$1,inst_154339);
} else {
return null;
}
});})(c__15789__auto___154364,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___154364,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_154360 = [null,null,null,null,null,null,null];
(statearr_154360[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_154360[(1)] = (1));

return statearr_154360;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_154341){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_154341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e154361){if((e154361 instanceof Object)){
var ex__15728__auto__ = e154361;
var statearr_154362_154367 = state_154341;
(statearr_154362_154367[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154368 = state_154341;
state_154341 = G__154368;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_154341){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_154341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___154364,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_154363 = f__15790__auto__.call(null);
(statearr_154363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___154364);

return statearr_154363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___154364,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_154380){
var state_val_154381 = (state_154380[(1)]);
if((state_val_154381 === (1))){
var state_154380__$1 = state_154380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154380__$1,c);
} else {
return null;
}
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_154385 = [null,null,null,null,null,null,null];
(statearr_154385[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__);

(statearr_154385[(1)] = (1));

return statearr_154385;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1 = (function (state_154380){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_154380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e154386){if((e154386 instanceof Object)){
var ex__15728__auto__ = e154386;
var statearr_154387_154389 = state_154380;
(statearr_154387_154389[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154390 = state_154380;
state_154380 = G__154390;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = function(state_154380){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1.call(this,state_154380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_154388 = f__15790__auto__.call(null);
(statearr_154388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_154388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__))
);

return c__15789__auto__;
})()], null));
});
yaml_table.core.not_nil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
yaml_table.core.vector_with_channels__GT_channel_with_array = (function yaml_table$core$vector_with_channels__GT_channel_with_array(vwc){
var c = cljs.core.async.chan.call(null,(1));
var c__15789__auto___154477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___154477,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___154477,c){
return (function (state_154460){
var state_val_154461 = (state_154460[(1)]);
if((state_val_154461 === (1))){
var inst_154434 = cljs.core.PersistentVector.EMPTY;
var inst_154435 = vwc;
var inst_154436 = inst_154434;
var state_154460__$1 = (function (){var statearr_154462 = state_154460;
(statearr_154462[(7)] = inst_154436);

(statearr_154462[(8)] = inst_154435);

return statearr_154462;
})();
var statearr_154463_154478 = state_154460__$1;
(statearr_154463_154478[(2)] = null);

(statearr_154463_154478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154461 === (2))){
var inst_154435 = (state_154460[(8)]);
var inst_154438 = cljs.core.empty_QMARK_.call(null,inst_154435);
var state_154460__$1 = state_154460;
if(inst_154438){
var statearr_154464_154479 = state_154460__$1;
(statearr_154464_154479[(1)] = (4));

} else {
var statearr_154465_154480 = state_154460__$1;
(statearr_154465_154480[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154461 === (3))){
var inst_154458 = (state_154460[(2)]);
var state_154460__$1 = state_154460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154460__$1,inst_154458);
} else {
if((state_val_154461 === (4))){
var inst_154436 = (state_154460[(7)]);
var inst_154440 = cljs.core.clj__GT_js.call(null,inst_154436);
var state_154460__$1 = state_154460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_154460__$1,(7),c,inst_154440);
} else {
if((state_val_154461 === (5))){
var inst_154435 = (state_154460[(8)]);
var state_154460__$1 = state_154460;
return cljs.core.async.ioc_alts_BANG_.call(null,state_154460__$1,(8),inst_154435);
} else {
if((state_val_154461 === (6))){
var inst_154456 = (state_154460[(2)]);
var state_154460__$1 = state_154460;
var statearr_154466_154481 = state_154460__$1;
(statearr_154466_154481[(2)] = inst_154456);

(statearr_154466_154481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154461 === (7))){
var inst_154442 = (state_154460[(2)]);
var state_154460__$1 = state_154460;
var statearr_154467_154482 = state_154460__$1;
(statearr_154467_154482[(2)] = inst_154442);

(statearr_154467_154482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154461 === (8))){
var inst_154436 = (state_154460[(7)]);
var inst_154435 = (state_154460[(8)]);
var inst_154446 = (state_154460[(2)]);
var inst_154447 = cljs.core.nth.call(null,inst_154446,(0),null);
var inst_154448 = cljs.core.nth.call(null,inst_154446,(1),null);
var inst_154449 = [inst_154448];
var inst_154450 = cljs.core.PersistentHashSet.fromArray(inst_154449,true);
var inst_154451 = cljs.core.remove.call(null,inst_154450,inst_154435);
var inst_154452 = cljs.core.vec.call(null,inst_154451);
var inst_154453 = cljs.core.conj.call(null,inst_154436,inst_154447);
var inst_154435__$1 = inst_154452;
var inst_154436__$1 = inst_154453;
var state_154460__$1 = (function (){var statearr_154468 = state_154460;
(statearr_154468[(7)] = inst_154436__$1);

(statearr_154468[(8)] = inst_154435__$1);

return statearr_154468;
})();
var statearr_154469_154483 = state_154460__$1;
(statearr_154469_154483[(2)] = null);

(statearr_154469_154483[(1)] = (2));


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
});})(c__15789__auto___154477,c))
;
return ((function (switch__15724__auto__,c__15789__auto___154477,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0 = (function (){
var statearr_154473 = [null,null,null,null,null,null,null,null,null];
(statearr_154473[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__);

(statearr_154473[(1)] = (1));

return statearr_154473;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1 = (function (state_154460){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_154460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e154474){if((e154474 instanceof Object)){
var ex__15728__auto__ = e154474;
var statearr_154475_154484 = state_154460;
(statearr_154475_154484[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154485 = state_154460;
state_154460 = G__154485;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = function(state_154460){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1.call(this,state_154460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___154477,c))
})();
var state__15791__auto__ = (function (){var statearr_154476 = f__15790__auto__.call(null);
(statearr_154476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___154477);

return statearr_154476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___154477,c))
);


return c;
});
yaml_table.core.chan_array_of_objects_yaml__GT_table = (function yaml_table$core$chan_array_of_objects_yaml__GT_table(oc,arg2){
var res = cljs.nodejs.require.call(null,"../resources/print-overview-table-from-array.js");
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,res){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,res){
return (function (state_154503){
var state_val_154504 = (state_154503[(1)]);
if((state_val_154504 === (1))){
var state_154503__$1 = state_154503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154503__$1,(2),oc);
} else {
if((state_val_154504 === (2))){
var inst_154500 = (state_154503[(2)]);
var inst_154501 = res.printOverviewTableFromArray(inst_154500,arg2);
var state_154503__$1 = state_154503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154503__$1,inst_154501);
} else {
return null;
}
}
});})(c__15789__auto__,res))
;
return ((function (switch__15724__auto__,c__15789__auto__,res){
return (function() {
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__ = null;
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0 = (function (){
var statearr_154508 = [null,null,null,null,null,null,null];
(statearr_154508[(0)] = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__);

(statearr_154508[(1)] = (1));

return statearr_154508;
});
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1 = (function (state_154503){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_154503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e154509){if((e154509 instanceof Object)){
var ex__15728__auto__ = e154509;
var statearr_154510_154512 = state_154503;
(statearr_154510_154512[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154513 = state_154503;
state_154503 = G__154513;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__ = function(state_154503){
switch(arguments.length){
case 0:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1.call(this,state_154503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0;
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1;
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,res))
})();
var state__15791__auto__ = (function (){var statearr_154511 = f__15790__auto__.call(null);
(statearr_154511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_154511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__,res))
);

return c__15789__auto__;
});
yaml_table.core.path__GT_chan_vec_dec_strings = (function yaml_table$core$path__GT_chan_vec_dec_strings(input_path){
var c = cljs.core.async.chan.call(null,(1));
var dir = cljs.nodejs.require.call(null,"node-dir");
dir.files(input_path,((function (c,dir){
return (function (err,files){
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,c,dir){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,c,dir){
return (function (state_154535){
var state_val_154536 = (state_154535[(1)]);
if((state_val_154536 === (1))){
var inst_154529 = (function (){return ((function (state_val_154536,c__15789__auto__,c,dir){
return (function (file){
return file.endsWith(".dec");
});
;})(state_val_154536,c__15789__auto__,c,dir))
})();
var inst_154530 = files.filter(inst_154529);
var inst_154531 = cljs.core.js__GT_clj.call(null,inst_154530);
var state_154535__$1 = state_154535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_154535__$1,(2),c,inst_154531);
} else {
if((state_val_154536 === (2))){
var inst_154533 = (state_154535[(2)]);
var state_154535__$1 = state_154535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154535__$1,inst_154533);
} else {
return null;
}
}
});})(c__15789__auto__,c,dir))
;
return ((function (switch__15724__auto__,c__15789__auto__,c,dir){
return (function() {
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__ = null;
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0 = (function (){
var statearr_154540 = [null,null,null,null,null,null,null];
(statearr_154540[(0)] = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__);

(statearr_154540[(1)] = (1));

return statearr_154540;
});
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1 = (function (state_154535){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_154535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e154541){if((e154541 instanceof Object)){
var ex__15728__auto__ = e154541;
var statearr_154542_154544 = state_154535;
(statearr_154542_154544[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154545 = state_154535;
state_154535 = G__154545;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__ = function(state_154535){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1.call(this,state_154535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0;
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1;
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,c,dir))
})();
var state__15791__auto__ = (function (){var statearr_154543 = f__15790__auto__.call(null);
(statearr_154543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_154543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__,c,dir))
);

return c__15789__auto__;
});})(c,dir))
);

return c;
});
yaml_table.core._main = (function yaml_table$core$_main(var_args){
var args__14440__auto__ = [];
var len__14433__auto___154547 = arguments.length;
var i__14434__auto___154548 = (0);
while(true){
if((i__14434__auto___154548 < len__14433__auto___154547)){
args__14440__auto__.push((arguments[i__14434__auto___154548]));

var G__154549 = (i__14434__auto___154548 + (1));
i__14434__auto___154548 = G__154549;
continue;
} else {
}
break;
}

var argseq__14441__auto__ = ((((0) < args__14440__auto__.length))?(new cljs.core.IndexedSeq(args__14440__auto__.slice((0)),(0))):null);
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__14441__auto__);
});

yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var ext = (function (){var or__13375__auto__ = argv.e;
if(cljs.core.truth_(or__13375__auto__)){
return or__13375__auto__;
} else {
return "yaml";
}
})();
var path = (function (){var or__13375__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__13375__auto__)){
return or__13375__auto__;
} else {
return "/home/george/Dropbox";
}
})();
var rows = (function (){var or__13375__auto__ = argv.r;
if(cljs.core.truth_(or__13375__auto__)){
return or__13375__auto__;
} else {
return (10);
}
})();
cljs.core.println.call(null,"argv: ",argv);

cljs.core.println.call(null,"ext: ",ext);

cljs.core.println.call(null,"path: ",path);

return cljs.core.println.call(null,"rows: ",rows);
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq154546){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq154546));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;

//# sourceMappingURL=core.js.map