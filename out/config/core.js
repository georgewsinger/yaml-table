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
var c__15789__auto___159842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___159842,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___159842,yaml,fs,c){
return (function (state_159809){
var state_val_159810 = (state_159809[(1)]);
if((state_val_159810 === (1))){
var inst_159806 = (function (){return ((function (state_val_159810,c__15789__auto___159842,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_159810,c__15789__auto___159842,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_159810,c__15789__auto___159842,yaml,fs,c){
return (function (state_159821){
var state_val_159822 = (state_159821[(1)]);
if((state_val_159822 === (1))){
var inst_159811 = returned_yaml_object.file_extension;
var inst_159812 = cljs.core._EQ_.call(null,inst_159811,ext);
var state_159821__$1 = state_159821;
if(inst_159812){
var statearr_159823_159843 = state_159821__$1;
(statearr_159823_159843[(1)] = (2));

} else {
var statearr_159824_159844 = state_159821__$1;
(statearr_159824_159844[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159822 === (2))){
var state_159821__$1 = state_159821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159821__$1,(5),c,returned_yaml_object);
} else {
if((state_val_159822 === (3))){
var state_159821__$1 = state_159821;
var statearr_159825_159845 = state_159821__$1;
(statearr_159825_159845[(2)] = null);

(statearr_159825_159845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159822 === (4))){
var inst_159819 = (state_159821[(2)]);
var state_159821__$1 = state_159821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159821__$1,inst_159819);
} else {
if((state_val_159822 === (5))){
var inst_159815 = (state_159821[(2)]);
var inst_159816 = cljs.core.async.close_BANG_.call(null,c);
var state_159821__$1 = (function (){var statearr_159826 = state_159821;
(statearr_159826[(7)] = inst_159815);

return statearr_159826;
})();
var statearr_159827_159846 = state_159821__$1;
(statearr_159827_159846[(2)] = inst_159816);

(statearr_159827_159846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15789__auto____$1,state_val_159810,c__15789__auto___159842,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_159810,c__15789__auto___159842,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_159831 = [null,null,null,null,null,null,null,null];
(statearr_159831[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_159831[(1)] = (1));

return statearr_159831;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_159821){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_159821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e159832){if((e159832 instanceof Object)){
var ex__15728__auto__ = e159832;
var statearr_159833_159847 = state_159821;
(statearr_159833_159847[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e159832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__159848 = state_159821;
state_159821 = G__159848;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_159821){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_159821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_159810,c__15789__auto___159842,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_159834 = f__15790__auto__.call(null);
(statearr_159834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_159834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_159810,c__15789__auto___159842,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_159810,c__15789__auto___159842,yaml,fs,c))
})();
var inst_159807 = yaml.safeLoadAll(s,inst_159806);
var state_159809__$1 = state_159809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159809__$1,inst_159807);
} else {
return null;
}
});})(c__15789__auto___159842,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___159842,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_159838 = [null,null,null,null,null,null,null];
(statearr_159838[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_159838[(1)] = (1));

return statearr_159838;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_159809){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_159809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e159839){if((e159839 instanceof Object)){
var ex__15728__auto__ = e159839;
var statearr_159840_159849 = state_159809;
(statearr_159840_159849[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e159839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__159850 = state_159809;
state_159809 = G__159850;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_159809){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_159809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___159842,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_159841 = f__15790__auto__.call(null);
(statearr_159841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___159842);

return statearr_159841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___159842,yaml,fs,c))
);


return c;
});
config.core.yaml_table_config__GT_chan_matching_yaml_object = (function config$core$yaml_table_config__GT_chan_matching_yaml_object(ext){
return config.core.yaml_config_string__GT_chan_matching_yaml_object.call(null,cljs.nodejs.require.call(null,"fs").readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext);
});

//# sourceMappingURL=core.js.map