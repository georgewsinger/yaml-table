// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('config.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
config.core.chan_matching_yaml_object__GT_chan_array_columns = (function config$core$chan_matching_yaml_object__GT_chan_array_columns(c1){
var c2 = cljs.core.async.chan.call(null,(1));
var c__15789__auto___64025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___64025,c2){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___64025,c2){
return (function (state_64016){
var state_val_64017 = (state_64016[(1)]);
if((state_val_64017 === (1))){
var state_64016__$1 = state_64016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64016__$1,(3),c1);
} else {
if((state_val_64017 === (2))){
var inst_64014 = (state_64016[(2)]);
var state_64016__$1 = state_64016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64016__$1,inst_64014);
} else {
if((state_val_64017 === (3))){
var inst_64011 = (state_64016[(2)]);
var inst_64012 = inst_64011.options;
var state_64016__$1 = state_64016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64016__$1,(2),c2,inst_64012);
} else {
return null;
}
}
}
});})(c__15789__auto___64025,c2))
;
return ((function (switch__15724__auto__,c__15789__auto___64025,c2){
return (function() {
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__ = null;
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0 = (function (){
var statearr_64021 = [null,null,null,null,null,null,null];
(statearr_64021[(0)] = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__);

(statearr_64021[(1)] = (1));

return statearr_64021;
});
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1 = (function (state_64016){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_64016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e64022){if((e64022 instanceof Object)){
var ex__15728__auto__ = e64022;
var statearr_64023_64026 = state_64016;
(statearr_64023_64026[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64027 = state_64016;
state_64016 = G__64027;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__ = function(state_64016){
switch(arguments.length){
case 0:
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1.call(this,state_64016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0;
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1;
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___64025,c2))
})();
var state__15791__auto__ = (function (){var statearr_64024 = f__15790__auto__.call(null);
(statearr_64024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___64025);

return statearr_64024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___64025,c2))
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
var c__15789__auto___64104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___64104,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___64104,yaml,fs,c){
return (function (state_64069){
var state_val_64070 = (state_64069[(1)]);
if((state_val_64070 === (1))){
var inst_64066 = (function (){return ((function (state_val_64070,c__15789__auto___64104,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_64070,c__15789__auto___64104,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_64070,c__15789__auto___64104,yaml,fs,c){
return (function (state_64082){
var state_val_64083 = (state_64082[(1)]);
if((state_val_64083 === (1))){
var inst_64071 = returned_yaml_object.file_extension;
var inst_64072 = cljs.core._EQ_.call(null,inst_64071,ext);
var state_64082__$1 = state_64082;
if(inst_64072){
var statearr_64084_64105 = state_64082__$1;
(statearr_64084_64105[(1)] = (2));

} else {
var statearr_64085_64106 = state_64082__$1;
(statearr_64085_64106[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64083 === (2))){
var inst_64074 = cljs.core.println.call(null,"chiptune");
var state_64082__$1 = (function (){var statearr_64086 = state_64082;
(statearr_64086[(7)] = inst_64074);

return statearr_64086;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64082__$1,(5),c,returned_yaml_object);
} else {
if((state_val_64083 === (3))){
var state_64082__$1 = state_64082;
var statearr_64087_64107 = state_64082__$1;
(statearr_64087_64107[(2)] = null);

(statearr_64087_64107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64083 === (4))){
var inst_64080 = (state_64082[(2)]);
var state_64082__$1 = state_64082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64082__$1,inst_64080);
} else {
if((state_val_64083 === (5))){
var inst_64076 = (state_64082[(2)]);
var inst_64077 = cljs.core.async.close_BANG_.call(null,c);
var state_64082__$1 = (function (){var statearr_64088 = state_64082;
(statearr_64088[(8)] = inst_64076);

return statearr_64088;
})();
var statearr_64089_64108 = state_64082__$1;
(statearr_64089_64108[(2)] = inst_64077);

(statearr_64089_64108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15789__auto____$1,state_val_64070,c__15789__auto___64104,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_64070,c__15789__auto___64104,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_64093 = [null,null,null,null,null,null,null,null,null];
(statearr_64093[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_64093[(1)] = (1));

return statearr_64093;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_64082){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_64082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e64094){if((e64094 instanceof Object)){
var ex__15728__auto__ = e64094;
var statearr_64095_64109 = state_64082;
(statearr_64095_64109[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64110 = state_64082;
state_64082 = G__64110;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_64082){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_64082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_64070,c__15789__auto___64104,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_64096 = f__15790__auto__.call(null);
(statearr_64096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_64096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_64070,c__15789__auto___64104,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_64070,c__15789__auto___64104,yaml,fs,c))
})();
var inst_64067 = yaml.safeLoadAll(s,inst_64066);
var state_64069__$1 = state_64069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64069__$1,inst_64067);
} else {
return null;
}
});})(c__15789__auto___64104,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___64104,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_64100 = [null,null,null,null,null,null,null];
(statearr_64100[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_64100[(1)] = (1));

return statearr_64100;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_64069){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_64069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e64101){if((e64101 instanceof Object)){
var ex__15728__auto__ = e64101;
var statearr_64102_64111 = state_64069;
(statearr_64102_64111[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64112 = state_64069;
state_64069 = G__64112;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_64069){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_64069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___64104,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_64103 = f__15790__auto__.call(null);
(statearr_64103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___64104);

return statearr_64103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___64104,yaml,fs,c))
);


return c;
});
config.core.yaml_table_config__GT_chan_array_columns = (function config$core$yaml_table_config__GT_chan_array_columns(ext){
return config.core.chan_matching_yaml_object__GT_chan_array_columns.call(null,config.core.yaml_config_string__GT_chan_matching_yaml_object.call(null,cljs.nodejs.require.call(null,"fs").readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext));
});

//# sourceMappingURL=core.js.map