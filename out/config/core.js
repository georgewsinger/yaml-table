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
var c__15789__auto___172918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___172918,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___172918,yaml,fs,c){
return (function (state_172885){
var state_val_172886 = (state_172885[(1)]);
if((state_val_172886 === (1))){
var inst_172882 = (function (){return ((function (state_val_172886,c__15789__auto___172918,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_172886,c__15789__auto___172918,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_172886,c__15789__auto___172918,yaml,fs,c){
return (function (state_172897){
var state_val_172898 = (state_172897[(1)]);
if((state_val_172898 === (1))){
var inst_172887 = returned_yaml_object.file_extension;
var inst_172888 = cljs.core._EQ_.call(null,inst_172887,ext);
var state_172897__$1 = state_172897;
if(inst_172888){
var statearr_172899_172919 = state_172897__$1;
(statearr_172899_172919[(1)] = (2));

} else {
var statearr_172900_172920 = state_172897__$1;
(statearr_172900_172920[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_172898 === (2))){
var state_172897__$1 = state_172897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_172897__$1,(5),c,returned_yaml_object);
} else {
if((state_val_172898 === (3))){
var state_172897__$1 = state_172897;
var statearr_172901_172921 = state_172897__$1;
(statearr_172901_172921[(2)] = null);

(statearr_172901_172921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_172898 === (4))){
var inst_172895 = (state_172897[(2)]);
var state_172897__$1 = state_172897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_172897__$1,inst_172895);
} else {
if((state_val_172898 === (5))){
var inst_172891 = (state_172897[(2)]);
var inst_172892 = cljs.core.async.close_BANG_.call(null,c);
var state_172897__$1 = (function (){var statearr_172902 = state_172897;
(statearr_172902[(7)] = inst_172891);

return statearr_172902;
})();
var statearr_172903_172922 = state_172897__$1;
(statearr_172903_172922[(2)] = inst_172892);

(statearr_172903_172922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15789__auto____$1,state_val_172886,c__15789__auto___172918,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_172886,c__15789__auto___172918,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_172907 = [null,null,null,null,null,null,null,null];
(statearr_172907[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_172907[(1)] = (1));

return statearr_172907;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_172897){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_172897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e172908){if((e172908 instanceof Object)){
var ex__15728__auto__ = e172908;
var statearr_172909_172923 = state_172897;
(statearr_172909_172923[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_172897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e172908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__172924 = state_172897;
state_172897 = G__172924;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_172897){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_172897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_172886,c__15789__auto___172918,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_172910 = f__15790__auto__.call(null);
(statearr_172910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_172910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_172886,c__15789__auto___172918,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_172886,c__15789__auto___172918,yaml,fs,c))
})();
var inst_172883 = yaml.safeLoadAll(s,inst_172882);
var state_172885__$1 = state_172885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_172885__$1,inst_172883);
} else {
return null;
}
});})(c__15789__auto___172918,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___172918,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_172914 = [null,null,null,null,null,null,null];
(statearr_172914[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_172914[(1)] = (1));

return statearr_172914;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_172885){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_172885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e172915){if((e172915 instanceof Object)){
var ex__15728__auto__ = e172915;
var statearr_172916_172925 = state_172885;
(statearr_172916_172925[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_172885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e172915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__172926 = state_172885;
state_172885 = G__172926;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_172885){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_172885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___172918,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_172917 = f__15790__auto__.call(null);
(statearr_172917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___172918);

return statearr_172917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___172918,yaml,fs,c))
);


return c;
});
config.core.yaml_table_config__GT_chan_matching_yaml_object = (function config$core$yaml_table_config__GT_chan_matching_yaml_object(ext){
return config.core.yaml_config_string__GT_chan_matching_yaml_object.call(null,cljs.nodejs.require.call(null,"fs").readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext);
});

//# sourceMappingURL=core.js.map