// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('config.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
config.core.string__GT_num_yaml_docs = (function config$core$string__GT_num_yaml_docs(s){
var x__13713__auto__ = cljs.core.count.call(null,cljs.core.re_seq.call(null,/^---\n/,s));
var y__13714__auto__ = cljs.core.count.call(null,cljs.core.re_seq.call(null,/\n...$/,s));
return ((x__13713__auto__ < y__13714__auto__) ? x__13713__auto__ : y__13714__auto__);
});
config.core.yaml_config_string__GT_chan_matching_yaml_object = (function config$core$yaml_config_string__GT_chan_matching_yaml_object(s,ext){
var yaml = cljs.nodejs.require.call(null,"js-yaml");
var fs = cljs.nodejs.require.call(null,"fs");
var c = cljs.core.async.chan.call(null,(1));
var c__15789__auto___176816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___176816,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___176816,yaml,fs,c){
return (function (state_176783){
var state_val_176784 = (state_176783[(1)]);
if((state_val_176784 === (1))){
var inst_176780 = (function (){return ((function (state_val_176784,c__15789__auto___176816,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_176784,c__15789__auto___176816,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_176784,c__15789__auto___176816,yaml,fs,c){
return (function (state_176795){
var state_val_176796 = (state_176795[(1)]);
if((state_val_176796 === (1))){
var inst_176785 = returned_yaml_object.file_extension;
var inst_176786 = cljs.core._EQ_.call(null,inst_176785,ext);
var state_176795__$1 = state_176795;
if(inst_176786){
var statearr_176797_176817 = state_176795__$1;
(statearr_176797_176817[(1)] = (2));

} else {
var statearr_176798_176818 = state_176795__$1;
(statearr_176798_176818[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176796 === (2))){
var state_176795__$1 = state_176795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_176795__$1,(5),c,returned_yaml_object);
} else {
if((state_val_176796 === (3))){
var state_176795__$1 = state_176795;
var statearr_176799_176819 = state_176795__$1;
(statearr_176799_176819[(2)] = null);

(statearr_176799_176819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176796 === (4))){
var inst_176793 = (state_176795[(2)]);
var state_176795__$1 = state_176795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_176795__$1,inst_176793);
} else {
if((state_val_176796 === (5))){
var inst_176789 = (state_176795[(2)]);
var inst_176790 = cljs.core.async.close_BANG_.call(null,c);
var state_176795__$1 = (function (){var statearr_176800 = state_176795;
(statearr_176800[(7)] = inst_176789);

return statearr_176800;
})();
var statearr_176801_176820 = state_176795__$1;
(statearr_176801_176820[(2)] = inst_176790);

(statearr_176801_176820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15789__auto____$1,state_val_176784,c__15789__auto___176816,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_176784,c__15789__auto___176816,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_176805 = [null,null,null,null,null,null,null,null];
(statearr_176805[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_176805[(1)] = (1));

return statearr_176805;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_176795){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_176795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e176806){if((e176806 instanceof Object)){
var ex__15728__auto__ = e176806;
var statearr_176807_176821 = state_176795;
(statearr_176807_176821[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_176795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e176806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__176822 = state_176795;
state_176795 = G__176822;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_176795){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_176795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_176784,c__15789__auto___176816,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_176808 = f__15790__auto__.call(null);
(statearr_176808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_176808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_176784,c__15789__auto___176816,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_176784,c__15789__auto___176816,yaml,fs,c))
})();
var inst_176781 = yaml.safeLoadAll(s,inst_176780);
var state_176783__$1 = state_176783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_176783__$1,inst_176781);
} else {
return null;
}
});})(c__15789__auto___176816,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___176816,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_176812 = [null,null,null,null,null,null,null];
(statearr_176812[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_176812[(1)] = (1));

return statearr_176812;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_176783){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_176783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e176813){if((e176813 instanceof Object)){
var ex__15728__auto__ = e176813;
var statearr_176814_176823 = state_176783;
(statearr_176814_176823[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_176783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e176813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__176824 = state_176783;
state_176783 = G__176824;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_176783){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_176783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___176816,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_176815 = f__15790__auto__.call(null);
(statearr_176815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___176816);

return statearr_176815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___176816,yaml,fs,c))
);


return c;
});
config.core.yaml_table_config__GT_chan_matching_yaml_object = (function config$core$yaml_table_config__GT_chan_matching_yaml_object(ext){
return config.core.yaml_config_string__GT_chan_matching_yaml_object.call(null,cljs.nodejs.require.call(null,"fs").readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext);
});

//# sourceMappingURL=core.js.map