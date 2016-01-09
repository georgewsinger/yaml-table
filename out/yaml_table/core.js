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
var c__15789__auto___165558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___165558,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___165558,yaml,fs,c){
return (function (state_165535){
var state_val_165536 = (state_165535[(1)]);
if((state_val_165536 === (1))){
var inst_165532 = (function (){return ((function (state_val_165536,c__15789__auto___165558,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_165536,c__15789__auto___165558,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_165536,c__15789__auto___165558,yaml,fs,c){
return (function (state_165541){
var state_val_165542 = (state_165541[(1)]);
if((state_val_165542 === (1))){
var state_165541__$1 = state_165541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_165541__$1,(2),c,returned_yaml_object);
} else {
if((state_val_165542 === (2))){
var inst_165538 = (state_165541[(2)]);
var inst_165539 = cljs.core.async.close_BANG_.call(null,c);
var state_165541__$1 = (function (){var statearr_165543 = state_165541;
(statearr_165543[(7)] = inst_165538);

return statearr_165543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_165541__$1,inst_165539);
} else {
return null;
}
}
});})(c__15789__auto____$1,state_val_165536,c__15789__auto___165558,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_165536,c__15789__auto___165558,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_165547 = [null,null,null,null,null,null,null,null];
(statearr_165547[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_165547[(1)] = (1));

return statearr_165547;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_165541){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_165541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e165548){if((e165548 instanceof Object)){
var ex__15728__auto__ = e165548;
var statearr_165549_165559 = state_165541;
(statearr_165549_165559[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_165541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e165548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__165560 = state_165541;
state_165541 = G__165560;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_165541){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_165541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_165536,c__15789__auto___165558,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_165550 = f__15790__auto__.call(null);
(statearr_165550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_165550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_165536,c__15789__auto___165558,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_165536,c__15789__auto___165558,yaml,fs,c))
})();
var inst_165533 = yaml.safeLoadAll(string,inst_165532);
var state_165535__$1 = state_165535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_165535__$1,inst_165533);
} else {
return null;
}
});})(c__15789__auto___165558,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___165558,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_165554 = [null,null,null,null,null,null,null];
(statearr_165554[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_165554[(1)] = (1));

return statearr_165554;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_165535){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_165535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e165555){if((e165555 instanceof Object)){
var ex__15728__auto__ = e165555;
var statearr_165556_165561 = state_165535;
(statearr_165556_165561[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_165535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e165555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__165562 = state_165535;
state_165535 = G__165562;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_165535){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_165535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___165558,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_165557 = f__15790__auto__.call(null);
(statearr_165557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___165558);

return statearr_165557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___165558,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_165574){
var state_val_165575 = (state_165574[(1)]);
if((state_val_165575 === (1))){
var state_165574__$1 = state_165574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_165574__$1,c);
} else {
return null;
}
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_165579 = [null,null,null,null,null,null,null];
(statearr_165579[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__);

(statearr_165579[(1)] = (1));

return statearr_165579;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1 = (function (state_165574){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_165574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e165580){if((e165580 instanceof Object)){
var ex__15728__auto__ = e165580;
var statearr_165581_165583 = state_165574;
(statearr_165581_165583[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_165574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e165580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__165584 = state_165574;
state_165574 = G__165584;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = function(state_165574){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1.call(this,state_165574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_165582 = f__15790__auto__.call(null);
(statearr_165582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_165582;
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
var c__15789__auto___165671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___165671,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___165671,c){
return (function (state_165654){
var state_val_165655 = (state_165654[(1)]);
if((state_val_165655 === (1))){
var inst_165628 = cljs.core.PersistentVector.EMPTY;
var inst_165629 = vwc;
var inst_165630 = inst_165628;
var state_165654__$1 = (function (){var statearr_165656 = state_165654;
(statearr_165656[(7)] = inst_165629);

(statearr_165656[(8)] = inst_165630);

return statearr_165656;
})();
var statearr_165657_165672 = state_165654__$1;
(statearr_165657_165672[(2)] = null);

(statearr_165657_165672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_165655 === (2))){
var inst_165629 = (state_165654[(7)]);
var inst_165632 = cljs.core.empty_QMARK_.call(null,inst_165629);
var state_165654__$1 = state_165654;
if(inst_165632){
var statearr_165658_165673 = state_165654__$1;
(statearr_165658_165673[(1)] = (4));

} else {
var statearr_165659_165674 = state_165654__$1;
(statearr_165659_165674[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_165655 === (3))){
var inst_165652 = (state_165654[(2)]);
var state_165654__$1 = state_165654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_165654__$1,inst_165652);
} else {
if((state_val_165655 === (4))){
var inst_165630 = (state_165654[(8)]);
var inst_165634 = cljs.core.clj__GT_js.call(null,inst_165630);
var state_165654__$1 = state_165654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_165654__$1,(7),c,inst_165634);
} else {
if((state_val_165655 === (5))){
var inst_165629 = (state_165654[(7)]);
var state_165654__$1 = state_165654;
return cljs.core.async.ioc_alts_BANG_.call(null,state_165654__$1,(8),inst_165629);
} else {
if((state_val_165655 === (6))){
var inst_165650 = (state_165654[(2)]);
var state_165654__$1 = state_165654;
var statearr_165660_165675 = state_165654__$1;
(statearr_165660_165675[(2)] = inst_165650);

(statearr_165660_165675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_165655 === (7))){
var inst_165636 = (state_165654[(2)]);
var state_165654__$1 = state_165654;
var statearr_165661_165676 = state_165654__$1;
(statearr_165661_165676[(2)] = inst_165636);

(statearr_165661_165676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_165655 === (8))){
var inst_165629 = (state_165654[(7)]);
var inst_165630 = (state_165654[(8)]);
var inst_165640 = (state_165654[(2)]);
var inst_165641 = cljs.core.nth.call(null,inst_165640,(0),null);
var inst_165642 = cljs.core.nth.call(null,inst_165640,(1),null);
var inst_165643 = [inst_165642];
var inst_165644 = cljs.core.PersistentHashSet.fromArray(inst_165643,true);
var inst_165645 = cljs.core.remove.call(null,inst_165644,inst_165629);
var inst_165646 = cljs.core.vec.call(null,inst_165645);
var inst_165647 = cljs.core.conj.call(null,inst_165630,inst_165641);
var inst_165629__$1 = inst_165646;
var inst_165630__$1 = inst_165647;
var state_165654__$1 = (function (){var statearr_165662 = state_165654;
(statearr_165662[(7)] = inst_165629__$1);

(statearr_165662[(8)] = inst_165630__$1);

return statearr_165662;
})();
var statearr_165663_165677 = state_165654__$1;
(statearr_165663_165677[(2)] = null);

(statearr_165663_165677[(1)] = (2));


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
});})(c__15789__auto___165671,c))
;
return ((function (switch__15724__auto__,c__15789__auto___165671,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0 = (function (){
var statearr_165667 = [null,null,null,null,null,null,null,null,null];
(statearr_165667[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__);

(statearr_165667[(1)] = (1));

return statearr_165667;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1 = (function (state_165654){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_165654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e165668){if((e165668 instanceof Object)){
var ex__15728__auto__ = e165668;
var statearr_165669_165678 = state_165654;
(statearr_165669_165678[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_165654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e165668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__165679 = state_165654;
state_165654 = G__165679;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = function(state_165654){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1.call(this,state_165654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___165671,c))
})();
var state__15791__auto__ = (function (){var statearr_165670 = f__15790__auto__.call(null);
(statearr_165670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___165671);

return statearr_165670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___165671,c))
);


return c;
});
yaml_table.core.chan_table_package__GT_table = (function yaml_table$core$chan_table_package__GT_table(yaml_config_chan,arr_chan,rows){
var res = cljs.nodejs.require.call(null,"../resources/print-yaml-table.js");
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,res){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,res){
return (function (state_165702){
var state_val_165703 = (state_165702[(1)]);
if((state_val_165703 === (1))){
var state_165702__$1 = state_165702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_165702__$1,(2),yaml_config_chan);
} else {
if((state_val_165703 === (2))){
var inst_165697 = (state_165702[(2)]);
var state_165702__$1 = (function (){var statearr_165704 = state_165702;
(statearr_165704[(7)] = inst_165697);

return statearr_165704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_165702__$1,(3),arr_chan);
} else {
if((state_val_165703 === (3))){
var inst_165697 = (state_165702[(7)]);
var inst_165699 = (state_165702[(2)]);
var inst_165700 = res.printYamlTable(inst_165697,inst_165699,rows);
var state_165702__$1 = state_165702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_165702__$1,inst_165700);
} else {
return null;
}
}
}
});})(c__15789__auto__,res))
;
return ((function (switch__15724__auto__,c__15789__auto__,res){
return (function() {
var yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto__ = null;
var yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto____0 = (function (){
var statearr_165708 = [null,null,null,null,null,null,null,null];
(statearr_165708[(0)] = yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto__);

(statearr_165708[(1)] = (1));

return statearr_165708;
});
var yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto____1 = (function (state_165702){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_165702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e165709){if((e165709 instanceof Object)){
var ex__15728__auto__ = e165709;
var statearr_165710_165712 = state_165702;
(statearr_165710_165712[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_165702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e165709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__165713 = state_165702;
state_165702 = G__165713;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto__ = function(state_165702){
switch(arguments.length){
case 0:
return yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto____1.call(this,state_165702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto____0;
yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto____1;
return yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,res))
})();
var state__15791__auto__ = (function (){var statearr_165711 = f__15790__auto__.call(null);
(statearr_165711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_165711;
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
return (function (state_165735){
var state_val_165736 = (state_165735[(1)]);
if((state_val_165736 === (1))){
var inst_165729 = (function (){return ((function (state_val_165736,c__15789__auto__,c,dir){
return (function (file){
return file.endsWith(ext);
});
;})(state_val_165736,c__15789__auto__,c,dir))
})();
var inst_165730 = files.filter(inst_165729);
var inst_165731 = cljs.core.js__GT_clj.call(null,inst_165730);
var state_165735__$1 = state_165735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_165735__$1,(2),c,inst_165731);
} else {
if((state_val_165736 === (2))){
var inst_165733 = (state_165735[(2)]);
var state_165735__$1 = state_165735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_165735__$1,inst_165733);
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
var statearr_165740 = [null,null,null,null,null,null,null];
(statearr_165740[(0)] = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__);

(statearr_165740[(1)] = (1));

return statearr_165740;
});
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____1 = (function (state_165735){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_165735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e165741){if((e165741 instanceof Object)){
var ex__15728__auto__ = e165741;
var statearr_165742_165744 = state_165735;
(statearr_165742_165744[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_165735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e165741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__165745 = state_165735;
state_165735 = G__165745;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__ = function(state_165735){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____1.call(this,state_165735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____0;
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____1;
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,c,dir))
})();
var state__15791__auto__ = (function (){var statearr_165743 = f__15790__auto__.call(null);
(statearr_165743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_165743;
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
var len__14433__auto___165747 = arguments.length;
var i__14434__auto___165748 = (0);
while(true){
if((i__14434__auto___165748 < len__14433__auto___165747)){
args__14440__auto__.push((arguments[i__14434__auto___165748]));

var G__165749 = (i__14434__auto___165748 + (1));
i__14434__auto___165748 = G__165749;
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
var rows = (function (){var or__13375__auto__ = parseInt(argv.r);
if(cljs.core.truth_(or__13375__auto__)){
return or__13375__auto__;
} else {
return (10);
}
})();
var cv = yaml_table.core.path__GT_chan_vec_ext_strings.call(null,path,ext);
var mf = cljs.core.comp.call(null,yaml_table.core.string__GT_yaml_object_chan,yaml_table.core.file_path__GT_string_with_contents);
return null;
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq165746){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165746));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;

//# sourceMappingURL=core.js.map