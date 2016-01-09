// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('config.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
config.core.chan_matching_yaml_object__GT_chan_array_columns = (function config$core$chan_matching_yaml_object__GT_chan_array_columns(c1){
var c2 = cljs.core.async.chan.call(null,(1));
var c__15789__auto___142911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___142911,c2){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___142911,c2){
return (function (state_142902){
var state_val_142903 = (state_142902[(1)]);
if((state_val_142903 === (1))){
var state_142902__$1 = state_142902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_142902__$1,(3),c1);
} else {
if((state_val_142903 === (2))){
var inst_142900 = (state_142902[(2)]);
var state_142902__$1 = state_142902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_142902__$1,inst_142900);
} else {
if((state_val_142903 === (3))){
var inst_142897 = (state_142902[(2)]);
var inst_142898 = inst_142897.options;
var state_142902__$1 = state_142902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_142902__$1,(2),c2,inst_142898);
} else {
return null;
}
}
}
});})(c__15789__auto___142911,c2))
;
return ((function (switch__15724__auto__,c__15789__auto___142911,c2){
return (function() {
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__ = null;
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0 = (function (){
var statearr_142907 = [null,null,null,null,null,null,null];
(statearr_142907[(0)] = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__);

(statearr_142907[(1)] = (1));

return statearr_142907;
});
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1 = (function (state_142902){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_142902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e142908){if((e142908 instanceof Object)){
var ex__15728__auto__ = e142908;
var statearr_142909_142912 = state_142902;
(statearr_142909_142912[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e142908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__142913 = state_142902;
state_142902 = G__142913;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__ = function(state_142902){
switch(arguments.length){
case 0:
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1.call(this,state_142902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0;
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1;
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___142911,c2))
})();
var state__15791__auto__ = (function (){var statearr_142910 = f__15790__auto__.call(null);
(statearr_142910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___142911);

return statearr_142910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___142911,c2))
);


return c2;
});
config.core.string__GT_num_yaml_docs = (function config$core$string__GT_num_yaml_docs(s){
var x__13713__auto__ = cljs.core.count.call(null,cljs.core.re_seq.call(null,/^---\n/,s));
var y__13714__auto__ = cljs.core.count.call(null,cljs.core.re_seq.call(null,/\n...$/,s));
return ((x__13713__auto__ < y__13714__auto__) ? x__13713__auto__ : y__13714__auto__);
});
config.core.yaml_config_string__GT_chan_matching_yaml_object = (function config$core$yaml_config_string__GT_chan_matching_yaml_object(s,ext){
var yaml = cljs.nodejs.require.call(null,"js-yaml");
var fs = cljs.nodejs.require.call(null,"fs");
var c = cljs.core.async.chan.call(null,(1));
var c__15789__auto___142986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___142986,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___142986,yaml,fs,c){
return (function (state_142953){
var state_val_142954 = (state_142953[(1)]);
if((state_val_142954 === (1))){
var inst_142950 = (function (){return ((function (state_val_142954,c__15789__auto___142986,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_142954,c__15789__auto___142986,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_142954,c__15789__auto___142986,yaml,fs,c){
return (function (state_142965){
var state_val_142966 = (state_142965[(1)]);
if((state_val_142966 === (1))){
var inst_142955 = returned_yaml_object.file_extension;
var inst_142956 = cljs.core._EQ_.call(null,inst_142955,ext);
var state_142965__$1 = state_142965;
if(inst_142956){
var statearr_142967_142987 = state_142965__$1;
(statearr_142967_142987[(1)] = (2));

} else {
var statearr_142968_142988 = state_142965__$1;
(statearr_142968_142988[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142966 === (2))){
var state_142965__$1 = state_142965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_142965__$1,(5),c,returned_yaml_object);
} else {
if((state_val_142966 === (3))){
var state_142965__$1 = state_142965;
var statearr_142969_142989 = state_142965__$1;
(statearr_142969_142989[(2)] = null);

(statearr_142969_142989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142966 === (4))){
var inst_142963 = (state_142965[(2)]);
var state_142965__$1 = state_142965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_142965__$1,inst_142963);
} else {
if((state_val_142966 === (5))){
var inst_142959 = (state_142965[(2)]);
var inst_142960 = cljs.core.async.close_BANG_.call(null,c);
var state_142965__$1 = (function (){var statearr_142970 = state_142965;
(statearr_142970[(7)] = inst_142959);

return statearr_142970;
})();
var statearr_142971_142990 = state_142965__$1;
(statearr_142971_142990[(2)] = inst_142960);

(statearr_142971_142990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15789__auto____$1,state_val_142954,c__15789__auto___142986,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_142954,c__15789__auto___142986,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_142975 = [null,null,null,null,null,null,null,null];
(statearr_142975[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_142975[(1)] = (1));

return statearr_142975;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_142965){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_142965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e142976){if((e142976 instanceof Object)){
var ex__15728__auto__ = e142976;
var statearr_142977_142991 = state_142965;
(statearr_142977_142991[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e142976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__142992 = state_142965;
state_142965 = G__142992;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_142965){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_142965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_142954,c__15789__auto___142986,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_142978 = f__15790__auto__.call(null);
(statearr_142978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_142978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_142954,c__15789__auto___142986,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_142954,c__15789__auto___142986,yaml,fs,c))
})();
var inst_142951 = yaml.safeLoadAll(s,inst_142950);
var state_142953__$1 = state_142953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_142953__$1,inst_142951);
} else {
return null;
}
});})(c__15789__auto___142986,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___142986,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_142982 = [null,null,null,null,null,null,null];
(statearr_142982[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_142982[(1)] = (1));

return statearr_142982;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_142953){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_142953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e142983){if((e142983 instanceof Object)){
var ex__15728__auto__ = e142983;
var statearr_142984_142993 = state_142953;
(statearr_142984_142993[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e142983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__142994 = state_142953;
state_142953 = G__142994;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_142953){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_142953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___142986,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_142985 = f__15790__auto__.call(null);
(statearr_142985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___142986);

return statearr_142985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___142986,yaml,fs,c))
);


return c;
});
config.core.yaml_table_config__GT_chan_array_columns = (function config$core$yaml_table_config__GT_chan_array_columns(ext){
return config.core.chan_matching_yaml_object__GT_chan_array_columns.call(null,config.core.yaml_config_string__GT_chan_matching_yaml_object.call(null,cljs.nodejs.require.call(null,"fs").readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext));
});

//# sourceMappingURL=core.js.map