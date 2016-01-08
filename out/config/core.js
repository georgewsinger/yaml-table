// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('config.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
config.core.chan_matching_yaml_object__GT_chan_array_columns = (function config$core$chan_matching_yaml_object__GT_chan_array_columns(c1){
var c2 = cljs.core.async.chan.call(null,(1));
var c__15789__auto___27325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___27325,c2){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___27325,c2){
return (function (state_27316){
var state_val_27317 = (state_27316[(1)]);
if((state_val_27317 === (1))){
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27316__$1,(3),c1);
} else {
if((state_val_27317 === (2))){
var inst_27314 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27316__$1,inst_27314);
} else {
if((state_val_27317 === (3))){
var inst_27311 = (state_27316[(2)]);
var inst_27312 = inst_27311.columns;
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27316__$1,(2),c2,inst_27312);
} else {
return null;
}
}
}
});})(c__15789__auto___27325,c2))
;
return ((function (switch__15724__auto__,c__15789__auto___27325,c2){
return (function() {
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__ = null;
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0 = (function (){
var statearr_27321 = [null,null,null,null,null,null,null];
(statearr_27321[(0)] = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__);

(statearr_27321[(1)] = (1));

return statearr_27321;
});
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1 = (function (state_27316){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_27316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e27322){if((e27322 instanceof Object)){
var ex__15728__auto__ = e27322;
var statearr_27323_27326 = state_27316;
(statearr_27323_27326[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27327 = state_27316;
state_27316 = G__27327;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__ = function(state_27316){
switch(arguments.length){
case 0:
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1.call(this,state_27316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0;
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1;
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___27325,c2))
})();
var state__15791__auto__ = (function (){var statearr_27324 = f__15790__auto__.call(null);
(statearr_27324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___27325);

return statearr_27324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___27325,c2))
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
var c__15789__auto___27396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___27396,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___27396,yaml,fs,c){
return (function (state_27365){
var state_val_27366 = (state_27365[(1)]);
if((state_val_27366 === (1))){
var inst_27362 = (function (){return ((function (state_val_27366,c__15789__auto___27396,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_27366,c__15789__auto___27396,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_27366,c__15789__auto___27396,yaml,fs,c){
return (function (state_27376){
var state_val_27377 = (state_27376[(1)]);
if((state_val_27377 === (1))){
var inst_27367 = cljs.core._EQ_.call(null,returned_yaml_object.file_extesion,ext);
var state_27376__$1 = state_27376;
if(inst_27367){
var statearr_27378_27397 = state_27376__$1;
(statearr_27378_27397[(1)] = (2));

} else {
var statearr_27379_27398 = state_27376__$1;
(statearr_27379_27398[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (2))){
var state_27376__$1 = state_27376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27376__$1,(5),c,returned_yaml_object);
} else {
if((state_val_27377 === (3))){
var inst_27372 = cljs.core.async.close_BANG_.call(null,c);
var state_27376__$1 = state_27376;
var statearr_27380_27399 = state_27376__$1;
(statearr_27380_27399[(2)] = inst_27372);

(statearr_27380_27399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (4))){
var inst_27374 = (state_27376[(2)]);
var state_27376__$1 = state_27376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27376__$1,inst_27374);
} else {
if((state_val_27377 === (5))){
var inst_27370 = (state_27376[(2)]);
var state_27376__$1 = state_27376;
var statearr_27381_27400 = state_27376__$1;
(statearr_27381_27400[(2)] = inst_27370);

(statearr_27381_27400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15789__auto____$1,state_val_27366,c__15789__auto___27396,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_27366,c__15789__auto___27396,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_27385 = [null,null,null,null,null,null,null];
(statearr_27385[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_27385[(1)] = (1));

return statearr_27385;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_27376){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_27376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e27386){if((e27386 instanceof Object)){
var ex__15728__auto__ = e27386;
var statearr_27387_27401 = state_27376;
(statearr_27387_27401[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27402 = state_27376;
state_27376 = G__27402;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_27376){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_27376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_27366,c__15789__auto___27396,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_27388 = f__15790__auto__.call(null);
(statearr_27388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_27388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_27366,c__15789__auto___27396,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_27366,c__15789__auto___27396,yaml,fs,c))
})();
var inst_27363 = yaml.safeLoadAll(s,inst_27362);
var state_27365__$1 = state_27365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27365__$1,inst_27363);
} else {
return null;
}
});})(c__15789__auto___27396,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___27396,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_27392 = [null,null,null,null,null,null,null];
(statearr_27392[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_27392[(1)] = (1));

return statearr_27392;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_27365){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_27365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e27393){if((e27393 instanceof Object)){
var ex__15728__auto__ = e27393;
var statearr_27394_27403 = state_27365;
(statearr_27394_27403[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27404 = state_27365;
state_27365 = G__27404;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_27365){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_27365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___27396,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_27395 = f__15790__auto__.call(null);
(statearr_27395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___27396);

return statearr_27395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___27396,yaml,fs,c))
);


return c;
});
config.core.yaml_table_config__GT_chan_array_columns = (function config$core$yaml_table_config__GT_chan_array_columns(ext){
return config.core.chan_matching_yaml_object__GT_chan_array_columns.call(null,config.core.yaml_config_string__GT_chan_matching_yaml_object.call(null,cljs.nodejs.require.call(null,"fs").readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext));
});
config.core.yaml_table_config__GT_chan_array_columns.call(null,".dec");

//# sourceMappingURL=core.js.map