// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('config.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
config.core.chan_matching_yaml_object__GT_chan_array_columns = (function config$core$chan_matching_yaml_object__GT_chan_array_columns(c1){
var c2 = cljs.core.async.chan.call(null,(1));
var c__15789__auto___66012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___66012,c2){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___66012,c2){
return (function (state_66003){
var state_val_66004 = (state_66003[(1)]);
if((state_val_66004 === (1))){
var state_66003__$1 = state_66003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66003__$1,(3),c1);
} else {
if((state_val_66004 === (2))){
var inst_66001 = (state_66003[(2)]);
var state_66003__$1 = state_66003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66003__$1,inst_66001);
} else {
if((state_val_66004 === (3))){
var inst_65998 = (state_66003[(2)]);
var inst_65999 = inst_65998.options;
var state_66003__$1 = state_66003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66003__$1,(2),c2,inst_65999);
} else {
return null;
}
}
}
});})(c__15789__auto___66012,c2))
;
return ((function (switch__15724__auto__,c__15789__auto___66012,c2){
return (function() {
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__ = null;
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0 = (function (){
var statearr_66008 = [null,null,null,null,null,null,null];
(statearr_66008[(0)] = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__);

(statearr_66008[(1)] = (1));

return statearr_66008;
});
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1 = (function (state_66003){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_66003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e66009){if((e66009 instanceof Object)){
var ex__15728__auto__ = e66009;
var statearr_66010_66013 = state_66003;
(statearr_66010_66013[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66014 = state_66003;
state_66003 = G__66014;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__ = function(state_66003){
switch(arguments.length){
case 0:
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1.call(this,state_66003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0;
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1;
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___66012,c2))
})();
var state__15791__auto__ = (function (){var statearr_66011 = f__15790__auto__.call(null);
(statearr_66011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___66012);

return statearr_66011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___66012,c2))
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
var c__15789__auto___66087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___66087,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___66087,yaml,fs,c){
return (function (state_66054){
var state_val_66055 = (state_66054[(1)]);
if((state_val_66055 === (1))){
var inst_66051 = (function (){return ((function (state_val_66055,c__15789__auto___66087,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_66055,c__15789__auto___66087,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_66055,c__15789__auto___66087,yaml,fs,c){
return (function (state_66066){
var state_val_66067 = (state_66066[(1)]);
if((state_val_66067 === (1))){
var inst_66056 = returned_yaml_object.file_extension;
var inst_66057 = cljs.core._EQ_.call(null,inst_66056,ext);
var state_66066__$1 = state_66066;
if(inst_66057){
var statearr_66068_66088 = state_66066__$1;
(statearr_66068_66088[(1)] = (2));

} else {
var statearr_66069_66089 = state_66066__$1;
(statearr_66069_66089[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66067 === (2))){
var state_66066__$1 = state_66066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66066__$1,(5),c,returned_yaml_object);
} else {
if((state_val_66067 === (3))){
var state_66066__$1 = state_66066;
var statearr_66070_66090 = state_66066__$1;
(statearr_66070_66090[(2)] = null);

(statearr_66070_66090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66067 === (4))){
var inst_66064 = (state_66066[(2)]);
var state_66066__$1 = state_66066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66066__$1,inst_66064);
} else {
if((state_val_66067 === (5))){
var inst_66060 = (state_66066[(2)]);
var inst_66061 = cljs.core.async.close_BANG_.call(null,c);
var state_66066__$1 = (function (){var statearr_66071 = state_66066;
(statearr_66071[(7)] = inst_66060);

return statearr_66071;
})();
var statearr_66072_66091 = state_66066__$1;
(statearr_66072_66091[(2)] = inst_66061);

(statearr_66072_66091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15789__auto____$1,state_val_66055,c__15789__auto___66087,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_66055,c__15789__auto___66087,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_66076 = [null,null,null,null,null,null,null,null];
(statearr_66076[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_66076[(1)] = (1));

return statearr_66076;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_66066){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_66066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e66077){if((e66077 instanceof Object)){
var ex__15728__auto__ = e66077;
var statearr_66078_66092 = state_66066;
(statearr_66078_66092[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66093 = state_66066;
state_66066 = G__66093;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_66066){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_66066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_66055,c__15789__auto___66087,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_66079 = f__15790__auto__.call(null);
(statearr_66079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_66079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_66055,c__15789__auto___66087,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_66055,c__15789__auto___66087,yaml,fs,c))
})();
var inst_66052 = yaml.safeLoadAll(s,inst_66051);
var state_66054__$1 = state_66054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66054__$1,inst_66052);
} else {
return null;
}
});})(c__15789__auto___66087,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___66087,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_66083 = [null,null,null,null,null,null,null];
(statearr_66083[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_66083[(1)] = (1));

return statearr_66083;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_66054){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_66054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e66084){if((e66084 instanceof Object)){
var ex__15728__auto__ = e66084;
var statearr_66085_66094 = state_66054;
(statearr_66085_66094[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66095 = state_66054;
state_66054 = G__66095;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_66054){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_66054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___66087,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_66086 = f__15790__auto__.call(null);
(statearr_66086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___66087);

return statearr_66086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___66087,yaml,fs,c))
);


return c;
});
config.core.yaml_table_config__GT_chan_array_columns = (function config$core$yaml_table_config__GT_chan_array_columns(ext){
return config.core.chan_matching_yaml_object__GT_chan_array_columns.call(null,config.core.yaml_config_string__GT_chan_matching_yaml_object.call(null,cljs.nodejs.require.call(null,"fs").readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext));
});

//# sourceMappingURL=core.js.map