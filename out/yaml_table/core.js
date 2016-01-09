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
var c__15789__auto___155310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___155310,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___155310,yaml,fs,c){
return (function (state_155287){
var state_val_155288 = (state_155287[(1)]);
if((state_val_155288 === (1))){
var inst_155284 = (function (){return ((function (state_val_155288,c__15789__auto___155310,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_155288,c__15789__auto___155310,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_155288,c__15789__auto___155310,yaml,fs,c){
return (function (state_155293){
var state_val_155294 = (state_155293[(1)]);
if((state_val_155294 === (1))){
var state_155293__$1 = state_155293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_155293__$1,(2),c,returned_yaml_object);
} else {
if((state_val_155294 === (2))){
var inst_155290 = (state_155293[(2)]);
var inst_155291 = cljs.core.async.close_BANG_.call(null,c);
var state_155293__$1 = (function (){var statearr_155295 = state_155293;
(statearr_155295[(7)] = inst_155290);

return statearr_155295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155293__$1,inst_155291);
} else {
return null;
}
}
});})(c__15789__auto____$1,state_val_155288,c__15789__auto___155310,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_155288,c__15789__auto___155310,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_155299 = [null,null,null,null,null,null,null,null];
(statearr_155299[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_155299[(1)] = (1));

return statearr_155299;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_155293){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_155293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e155300){if((e155300 instanceof Object)){
var ex__15728__auto__ = e155300;
var statearr_155301_155311 = state_155293;
(statearr_155301_155311[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155312 = state_155293;
state_155293 = G__155312;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_155293){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_155293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_155288,c__15789__auto___155310,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_155302 = f__15790__auto__.call(null);
(statearr_155302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_155302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_155288,c__15789__auto___155310,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_155288,c__15789__auto___155310,yaml,fs,c))
})();
var inst_155285 = yaml.safeLoadAll(string,inst_155284);
var state_155287__$1 = state_155287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155287__$1,inst_155285);
} else {
return null;
}
});})(c__15789__auto___155310,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___155310,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_155306 = [null,null,null,null,null,null,null];
(statearr_155306[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_155306[(1)] = (1));

return statearr_155306;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_155287){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_155287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e155307){if((e155307 instanceof Object)){
var ex__15728__auto__ = e155307;
var statearr_155308_155313 = state_155287;
(statearr_155308_155313[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155314 = state_155287;
state_155287 = G__155314;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_155287){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_155287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___155310,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_155309 = f__15790__auto__.call(null);
(statearr_155309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___155310);

return statearr_155309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___155310,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_155326){
var state_val_155327 = (state_155326[(1)]);
if((state_val_155327 === (1))){
var state_155326__$1 = state_155326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155326__$1,c);
} else {
return null;
}
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_155331 = [null,null,null,null,null,null,null];
(statearr_155331[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__);

(statearr_155331[(1)] = (1));

return statearr_155331;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1 = (function (state_155326){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_155326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e155332){if((e155332 instanceof Object)){
var ex__15728__auto__ = e155332;
var statearr_155333_155335 = state_155326;
(statearr_155333_155335[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155336 = state_155326;
state_155326 = G__155336;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = function(state_155326){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1.call(this,state_155326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_155334 = f__15790__auto__.call(null);
(statearr_155334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_155334;
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
var c__15789__auto___155423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___155423,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___155423,c){
return (function (state_155406){
var state_val_155407 = (state_155406[(1)]);
if((state_val_155407 === (1))){
var inst_155380 = cljs.core.PersistentVector.EMPTY;
var inst_155381 = vwc;
var inst_155382 = inst_155380;
var state_155406__$1 = (function (){var statearr_155408 = state_155406;
(statearr_155408[(7)] = inst_155382);

(statearr_155408[(8)] = inst_155381);

return statearr_155408;
})();
var statearr_155409_155424 = state_155406__$1;
(statearr_155409_155424[(2)] = null);

(statearr_155409_155424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155407 === (2))){
var inst_155381 = (state_155406[(8)]);
var inst_155384 = cljs.core.empty_QMARK_.call(null,inst_155381);
var state_155406__$1 = state_155406;
if(inst_155384){
var statearr_155410_155425 = state_155406__$1;
(statearr_155410_155425[(1)] = (4));

} else {
var statearr_155411_155426 = state_155406__$1;
(statearr_155411_155426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155407 === (3))){
var inst_155404 = (state_155406[(2)]);
var state_155406__$1 = state_155406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155406__$1,inst_155404);
} else {
if((state_val_155407 === (4))){
var inst_155382 = (state_155406[(7)]);
var inst_155386 = cljs.core.clj__GT_js.call(null,inst_155382);
var state_155406__$1 = state_155406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_155406__$1,(7),c,inst_155386);
} else {
if((state_val_155407 === (5))){
var inst_155381 = (state_155406[(8)]);
var state_155406__$1 = state_155406;
return cljs.core.async.ioc_alts_BANG_.call(null,state_155406__$1,(8),inst_155381);
} else {
if((state_val_155407 === (6))){
var inst_155402 = (state_155406[(2)]);
var state_155406__$1 = state_155406;
var statearr_155412_155427 = state_155406__$1;
(statearr_155412_155427[(2)] = inst_155402);

(statearr_155412_155427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155407 === (7))){
var inst_155388 = (state_155406[(2)]);
var state_155406__$1 = state_155406;
var statearr_155413_155428 = state_155406__$1;
(statearr_155413_155428[(2)] = inst_155388);

(statearr_155413_155428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155407 === (8))){
var inst_155382 = (state_155406[(7)]);
var inst_155381 = (state_155406[(8)]);
var inst_155392 = (state_155406[(2)]);
var inst_155393 = cljs.core.nth.call(null,inst_155392,(0),null);
var inst_155394 = cljs.core.nth.call(null,inst_155392,(1),null);
var inst_155395 = [inst_155394];
var inst_155396 = cljs.core.PersistentHashSet.fromArray(inst_155395,true);
var inst_155397 = cljs.core.remove.call(null,inst_155396,inst_155381);
var inst_155398 = cljs.core.vec.call(null,inst_155397);
var inst_155399 = cljs.core.conj.call(null,inst_155382,inst_155393);
var inst_155381__$1 = inst_155398;
var inst_155382__$1 = inst_155399;
var state_155406__$1 = (function (){var statearr_155414 = state_155406;
(statearr_155414[(7)] = inst_155382__$1);

(statearr_155414[(8)] = inst_155381__$1);

return statearr_155414;
})();
var statearr_155415_155429 = state_155406__$1;
(statearr_155415_155429[(2)] = null);

(statearr_155415_155429[(1)] = (2));


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
});})(c__15789__auto___155423,c))
;
return ((function (switch__15724__auto__,c__15789__auto___155423,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0 = (function (){
var statearr_155419 = [null,null,null,null,null,null,null,null,null];
(statearr_155419[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__);

(statearr_155419[(1)] = (1));

return statearr_155419;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1 = (function (state_155406){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_155406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e155420){if((e155420 instanceof Object)){
var ex__15728__auto__ = e155420;
var statearr_155421_155430 = state_155406;
(statearr_155421_155430[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155431 = state_155406;
state_155406 = G__155431;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = function(state_155406){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1.call(this,state_155406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___155423,c))
})();
var state__15791__auto__ = (function (){var statearr_155422 = f__15790__auto__.call(null);
(statearr_155422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___155423);

return statearr_155422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___155423,c))
);


return c;
});
yaml_table.core.chan_array_of_objects_yaml__GT_table = (function yaml_table$core$chan_array_of_objects_yaml__GT_table(oc,arg2){
var res = cljs.nodejs.require.call(null,"../resources/print-overview-table-from-array.js");
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,res){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,res){
return (function (state_155449){
var state_val_155450 = (state_155449[(1)]);
if((state_val_155450 === (1))){
var state_155449__$1 = state_155449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155449__$1,(2),oc);
} else {
if((state_val_155450 === (2))){
var inst_155446 = (state_155449[(2)]);
var inst_155447 = res.printOverviewTableFromArray(inst_155446,arg2);
var state_155449__$1 = state_155449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155449__$1,inst_155447);
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
var statearr_155454 = [null,null,null,null,null,null,null];
(statearr_155454[(0)] = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__);

(statearr_155454[(1)] = (1));

return statearr_155454;
});
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1 = (function (state_155449){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_155449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e155455){if((e155455 instanceof Object)){
var ex__15728__auto__ = e155455;
var statearr_155456_155458 = state_155449;
(statearr_155456_155458[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155459 = state_155449;
state_155449 = G__155459;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__ = function(state_155449){
switch(arguments.length){
case 0:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1.call(this,state_155449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0;
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1;
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,res))
})();
var state__15791__auto__ = (function (){var statearr_155457 = f__15790__auto__.call(null);
(statearr_155457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_155457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__,res))
);

return c__15789__auto__;
});
yaml_table.core.path__GT_chan_vec_ext_strings = (function yaml_table$core$path__GT_chan_vec_ext_strings(path,ext){
var c = cljs.core.async.chan.call(null,(1));
var dir = cljs.nodejs.require.call(null,"node-dir");
dir.files(path,((function (c,dir){
return (function (err,files){
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,c,dir){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,c,dir){
return (function (state_155481){
var state_val_155482 = (state_155481[(1)]);
if((state_val_155482 === (1))){
var inst_155475 = (function (){return ((function (state_val_155482,c__15789__auto__,c,dir){
return (function (file){
return file.endsWith(ext);
});
;})(state_val_155482,c__15789__auto__,c,dir))
})();
var inst_155476 = files.filter(inst_155475);
var inst_155477 = cljs.core.js__GT_clj.call(null,inst_155476);
var state_155481__$1 = state_155481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_155481__$1,(2),c,inst_155477);
} else {
if((state_val_155482 === (2))){
var inst_155479 = (state_155481[(2)]);
var state_155481__$1 = state_155481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155481__$1,inst_155479);
} else {
return null;
}
}
});})(c__15789__auto__,c,dir))
;
return ((function (switch__15724__auto__,c__15789__auto__,c,dir){
return (function() {
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__ = null;
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____0 = (function (){
var statearr_155486 = [null,null,null,null,null,null,null];
(statearr_155486[(0)] = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__);

(statearr_155486[(1)] = (1));

return statearr_155486;
});
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____1 = (function (state_155481){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_155481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e155487){if((e155487 instanceof Object)){
var ex__15728__auto__ = e155487;
var statearr_155488_155490 = state_155481;
(statearr_155488_155490[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155491 = state_155481;
state_155481 = G__155491;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__ = function(state_155481){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____1.call(this,state_155481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____0;
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____1;
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,c,dir))
})();
var state__15791__auto__ = (function (){var statearr_155489 = f__15790__auto__.call(null);
(statearr_155489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_155489;
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
var len__14433__auto___155493 = arguments.length;
var i__14434__auto___155494 = (0);
while(true){
if((i__14434__auto___155494 < len__14433__auto___155493)){
args__14440__auto__.push((arguments[i__14434__auto___155494]));

var G__155495 = (i__14434__auto___155494 + (1));
i__14434__auto___155494 = G__155495;
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

yaml_table.core._main.cljs$lang$applyTo = (function (seq155492){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq155492));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;

//# sourceMappingURL=core.js.map