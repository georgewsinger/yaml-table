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
var c__15789__auto___27459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___27459,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___27459,yaml,fs,c){
return (function (state_27436){
var state_val_27437 = (state_27436[(1)]);
if((state_val_27437 === (1))){
var inst_27433 = (function (){return ((function (state_val_27437,c__15789__auto___27459,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_27437,c__15789__auto___27459,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_27437,c__15789__auto___27459,yaml,fs,c){
return (function (state_27442){
var state_val_27443 = (state_27442[(1)]);
if((state_val_27443 === (1))){
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27442__$1,(2),c,returned_yaml_object);
} else {
if((state_val_27443 === (2))){
var inst_27439 = (state_27442[(2)]);
var inst_27440 = cljs.core.async.close_BANG_.call(null,c);
var state_27442__$1 = (function (){var statearr_27444 = state_27442;
(statearr_27444[(7)] = inst_27439);

return statearr_27444;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27442__$1,inst_27440);
} else {
return null;
}
}
});})(c__15789__auto____$1,state_val_27437,c__15789__auto___27459,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_27437,c__15789__auto___27459,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_27448 = [null,null,null,null,null,null,null,null];
(statearr_27448[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_27448[(1)] = (1));

return statearr_27448;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_27442){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_27442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e27449){if((e27449 instanceof Object)){
var ex__15728__auto__ = e27449;
var statearr_27450_27460 = state_27442;
(statearr_27450_27460[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27461 = state_27442;
state_27442 = G__27461;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_27442){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_27442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_27437,c__15789__auto___27459,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_27451 = f__15790__auto__.call(null);
(statearr_27451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_27451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_27437,c__15789__auto___27459,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_27437,c__15789__auto___27459,yaml,fs,c))
})();
var inst_27434 = yaml.safeLoadAll(string,inst_27433);
var state_27436__$1 = state_27436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27436__$1,inst_27434);
} else {
return null;
}
});})(c__15789__auto___27459,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___27459,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_27455 = [null,null,null,null,null,null,null];
(statearr_27455[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_27455[(1)] = (1));

return statearr_27455;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_27436){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_27436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e27456){if((e27456 instanceof Object)){
var ex__15728__auto__ = e27456;
var statearr_27457_27462 = state_27436;
(statearr_27457_27462[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27463 = state_27436;
state_27436 = G__27463;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_27436){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_27436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___27459,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_27458 = f__15790__auto__.call(null);
(statearr_27458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___27459);

return statearr_27458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___27459,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_27475){
var state_val_27476 = (state_27475[(1)]);
if((state_val_27476 === (1))){
var state_27475__$1 = state_27475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27475__$1,c);
} else {
return null;
}
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_27480 = [null,null,null,null,null,null,null];
(statearr_27480[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__);

(statearr_27480[(1)] = (1));

return statearr_27480;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1 = (function (state_27475){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_27475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e27481){if((e27481 instanceof Object)){
var ex__15728__auto__ = e27481;
var statearr_27482_27484 = state_27475;
(statearr_27482_27484[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27485 = state_27475;
state_27475 = G__27485;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = function(state_27475){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1.call(this,state_27475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_27483 = f__15790__auto__.call(null);
(statearr_27483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_27483;
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
var c__15789__auto___27572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___27572,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___27572,c){
return (function (state_27555){
var state_val_27556 = (state_27555[(1)]);
if((state_val_27556 === (1))){
var inst_27529 = cljs.core.PersistentVector.EMPTY;
var inst_27530 = vwc;
var inst_27531 = inst_27529;
var state_27555__$1 = (function (){var statearr_27557 = state_27555;
(statearr_27557[(7)] = inst_27530);

(statearr_27557[(8)] = inst_27531);

return statearr_27557;
})();
var statearr_27558_27573 = state_27555__$1;
(statearr_27558_27573[(2)] = null);

(statearr_27558_27573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (2))){
var inst_27530 = (state_27555[(7)]);
var inst_27533 = cljs.core.empty_QMARK_.call(null,inst_27530);
var state_27555__$1 = state_27555;
if(inst_27533){
var statearr_27559_27574 = state_27555__$1;
(statearr_27559_27574[(1)] = (4));

} else {
var statearr_27560_27575 = state_27555__$1;
(statearr_27560_27575[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (3))){
var inst_27553 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27555__$1,inst_27553);
} else {
if((state_val_27556 === (4))){
var inst_27531 = (state_27555[(8)]);
var inst_27535 = cljs.core.clj__GT_js.call(null,inst_27531);
var state_27555__$1 = state_27555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27555__$1,(7),c,inst_27535);
} else {
if((state_val_27556 === (5))){
var inst_27530 = (state_27555[(7)]);
var state_27555__$1 = state_27555;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27555__$1,(8),inst_27530);
} else {
if((state_val_27556 === (6))){
var inst_27551 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27561_27576 = state_27555__$1;
(statearr_27561_27576[(2)] = inst_27551);

(statearr_27561_27576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (7))){
var inst_27537 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27562_27577 = state_27555__$1;
(statearr_27562_27577[(2)] = inst_27537);

(statearr_27562_27577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (8))){
var inst_27530 = (state_27555[(7)]);
var inst_27531 = (state_27555[(8)]);
var inst_27541 = (state_27555[(2)]);
var inst_27542 = cljs.core.nth.call(null,inst_27541,(0),null);
var inst_27543 = cljs.core.nth.call(null,inst_27541,(1),null);
var inst_27544 = [inst_27543];
var inst_27545 = cljs.core.PersistentHashSet.fromArray(inst_27544,true);
var inst_27546 = cljs.core.remove.call(null,inst_27545,inst_27530);
var inst_27547 = cljs.core.vec.call(null,inst_27546);
var inst_27548 = cljs.core.conj.call(null,inst_27531,inst_27542);
var inst_27530__$1 = inst_27547;
var inst_27531__$1 = inst_27548;
var state_27555__$1 = (function (){var statearr_27563 = state_27555;
(statearr_27563[(7)] = inst_27530__$1);

(statearr_27563[(8)] = inst_27531__$1);

return statearr_27563;
})();
var statearr_27564_27578 = state_27555__$1;
(statearr_27564_27578[(2)] = null);

(statearr_27564_27578[(1)] = (2));


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
});})(c__15789__auto___27572,c))
;
return ((function (switch__15724__auto__,c__15789__auto___27572,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0 = (function (){
var statearr_27568 = [null,null,null,null,null,null,null,null,null];
(statearr_27568[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__);

(statearr_27568[(1)] = (1));

return statearr_27568;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1 = (function (state_27555){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_27555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e27569){if((e27569 instanceof Object)){
var ex__15728__auto__ = e27569;
var statearr_27570_27579 = state_27555;
(statearr_27570_27579[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27580 = state_27555;
state_27555 = G__27580;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = function(state_27555){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1.call(this,state_27555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___27572,c))
})();
var state__15791__auto__ = (function (){var statearr_27571 = f__15790__auto__.call(null);
(statearr_27571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___27572);

return statearr_27571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___27572,c))
);


return c;
});
yaml_table.core.chan_array_of_objects_yaml__GT_table = (function yaml_table$core$chan_array_of_objects_yaml__GT_table(oc,arg2){
var res = cljs.nodejs.require.call(null,"../resources/print-overview-table-from-array.js");
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,res){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,res){
return (function (state_27598){
var state_val_27599 = (state_27598[(1)]);
if((state_val_27599 === (1))){
var state_27598__$1 = state_27598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27598__$1,(2),oc);
} else {
if((state_val_27599 === (2))){
var inst_27595 = (state_27598[(2)]);
var inst_27596 = res.printOverviewTableFromArray(inst_27595,arg2);
var state_27598__$1 = state_27598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27598__$1,inst_27596);
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
var statearr_27603 = [null,null,null,null,null,null,null];
(statearr_27603[(0)] = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__);

(statearr_27603[(1)] = (1));

return statearr_27603;
});
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1 = (function (state_27598){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_27598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e27604){if((e27604 instanceof Object)){
var ex__15728__auto__ = e27604;
var statearr_27605_27607 = state_27598;
(statearr_27605_27607[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27608 = state_27598;
state_27598 = G__27608;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__ = function(state_27598){
switch(arguments.length){
case 0:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1.call(this,state_27598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0;
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1;
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,res))
})();
var state__15791__auto__ = (function (){var statearr_27606 = f__15790__auto__.call(null);
(statearr_27606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_27606;
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
return (function (state_27630){
var state_val_27631 = (state_27630[(1)]);
if((state_val_27631 === (1))){
var inst_27624 = (function (){return ((function (state_val_27631,c__15789__auto__,c,dir){
return (function (file){
return file.endsWith(".dec");
});
;})(state_val_27631,c__15789__auto__,c,dir))
})();
var inst_27625 = files.filter(inst_27624);
var inst_27626 = cljs.core.js__GT_clj.call(null,inst_27625);
var state_27630__$1 = state_27630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27630__$1,(2),c,inst_27626);
} else {
if((state_val_27631 === (2))){
var inst_27628 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27630__$1,inst_27628);
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
var statearr_27635 = [null,null,null,null,null,null,null];
(statearr_27635[(0)] = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__);

(statearr_27635[(1)] = (1));

return statearr_27635;
});
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1 = (function (state_27630){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_27630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e27636){if((e27636 instanceof Object)){
var ex__15728__auto__ = e27636;
var statearr_27637_27639 = state_27630;
(statearr_27637_27639[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27640 = state_27630;
state_27630 = G__27640;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__ = function(state_27630){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1.call(this,state_27630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0;
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1;
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,c,dir))
})();
var state__15791__auto__ = (function (){var statearr_27638 = f__15790__auto__.call(null);
(statearr_27638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_27638;
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
var len__14433__auto___27657 = arguments.length;
var i__14434__auto___27658 = (0);
while(true){
if((i__14434__auto___27658 < len__14433__auto___27657)){
args__14440__auto__.push((arguments[i__14434__auto___27658]));

var G__27659 = (i__14434__auto___27658 + (1));
i__14434__auto___27658 = G__27659;
continue;
} else {
}
break;
}

var argseq__14441__auto__ = ((((0) < args__14440__auto__.length))?(new cljs.core.IndexedSeq(args__14440__auto__.slice((0)),(0))):null);
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__14441__auto__);
});

yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (heh){
var path = [cljs.core.str(cljs.core.first.call(null,heh))].join('');
var days = parseInt(cljs.core.second.call(null,heh));
var cv = yaml_table.core.path__GT_chan_vec_dec_strings.call(null,path);
var mf = cljs.core.comp.call(null,yaml_table.core.string__GT_yaml_object_chan,yaml_table.core.file_path__GT_string_with_contents);
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,path,days,cv,mf){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,path,days,cv,mf){
return (function (state_27648){
var state_val_27649 = (state_27648[(1)]);
if((state_val_27649 === (1))){
var state_27648__$1 = state_27648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27648__$1,(2),cv);
} else {
if((state_val_27649 === (2))){
var inst_27643 = (state_27648[(2)]);
var inst_27644 = cljs.core.mapv.call(null,mf,inst_27643);
var inst_27645 = yaml_table.core.vector_with_channels__GT_channel_with_array.call(null,inst_27644);
var inst_27646 = yaml_table.core.chan_array_of_objects_yaml__GT_table.call(null,inst_27645,days);
var state_27648__$1 = state_27648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27648__$1,inst_27646);
} else {
return null;
}
}
});})(c__15789__auto__,path,days,cv,mf))
;
return ((function (switch__15724__auto__,c__15789__auto__,path,days,cv,mf){
return (function() {
var yaml_table$core$state_machine__15725__auto__ = null;
var yaml_table$core$state_machine__15725__auto____0 = (function (){
var statearr_27653 = [null,null,null,null,null,null,null];
(statearr_27653[(0)] = yaml_table$core$state_machine__15725__auto__);

(statearr_27653[(1)] = (1));

return statearr_27653;
});
var yaml_table$core$state_machine__15725__auto____1 = (function (state_27648){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_27648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e27654){if((e27654 instanceof Object)){
var ex__15728__auto__ = e27654;
var statearr_27655_27660 = state_27648;
(statearr_27655_27660[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27661 = state_27648;
state_27648 = G__27661;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$state_machine__15725__auto__ = function(state_27648){
switch(arguments.length){
case 0:
return yaml_table$core$state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$state_machine__15725__auto____1.call(this,state_27648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$state_machine__15725__auto____0;
yaml_table$core$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$state_machine__15725__auto____1;
return yaml_table$core$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,path,days,cv,mf))
})();
var state__15791__auto__ = (function (){var statearr_27656 = f__15790__auto__.call(null);
(statearr_27656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_27656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__,path,days,cv,mf))
);

return c__15789__auto__;
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq27641){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27641));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;

//# sourceMappingURL=core.js.map