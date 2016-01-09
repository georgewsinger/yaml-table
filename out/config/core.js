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
var c__15789__auto___154301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___154301,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___154301,yaml,fs,c){
return (function (state_154268){
var state_val_154269 = (state_154268[(1)]);
if((state_val_154269 === (1))){
var inst_154265 = (function (){return ((function (state_val_154269,c__15789__auto___154301,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_154269,c__15789__auto___154301,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_154269,c__15789__auto___154301,yaml,fs,c){
return (function (state_154280){
var state_val_154281 = (state_154280[(1)]);
if((state_val_154281 === (1))){
var inst_154270 = returned_yaml_object.file_extension;
var inst_154271 = cljs.core._EQ_.call(null,inst_154270,ext);
var state_154280__$1 = state_154280;
if(inst_154271){
var statearr_154282_154302 = state_154280__$1;
(statearr_154282_154302[(1)] = (2));

} else {
var statearr_154283_154303 = state_154280__$1;
(statearr_154283_154303[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154281 === (2))){
var state_154280__$1 = state_154280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_154280__$1,(5),c,returned_yaml_object);
} else {
if((state_val_154281 === (3))){
var state_154280__$1 = state_154280;
var statearr_154284_154304 = state_154280__$1;
(statearr_154284_154304[(2)] = null);

(statearr_154284_154304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154281 === (4))){
var inst_154278 = (state_154280[(2)]);
var state_154280__$1 = state_154280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154280__$1,inst_154278);
} else {
if((state_val_154281 === (5))){
var inst_154274 = (state_154280[(2)]);
var inst_154275 = cljs.core.async.close_BANG_.call(null,c);
var state_154280__$1 = (function (){var statearr_154285 = state_154280;
(statearr_154285[(7)] = inst_154274);

return statearr_154285;
})();
var statearr_154286_154305 = state_154280__$1;
(statearr_154286_154305[(2)] = inst_154275);

(statearr_154286_154305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15789__auto____$1,state_val_154269,c__15789__auto___154301,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_154269,c__15789__auto___154301,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_154290 = [null,null,null,null,null,null,null,null];
(statearr_154290[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_154290[(1)] = (1));

return statearr_154290;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_154280){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_154280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e154291){if((e154291 instanceof Object)){
var ex__15728__auto__ = e154291;
var statearr_154292_154306 = state_154280;
(statearr_154292_154306[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154307 = state_154280;
state_154280 = G__154307;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_154280){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_154280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_154269,c__15789__auto___154301,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_154293 = f__15790__auto__.call(null);
(statearr_154293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_154293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_154269,c__15789__auto___154301,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_154269,c__15789__auto___154301,yaml,fs,c))
})();
var inst_154266 = yaml.safeLoadAll(s,inst_154265);
var state_154268__$1 = state_154268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154268__$1,inst_154266);
} else {
return null;
}
});})(c__15789__auto___154301,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___154301,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_154297 = [null,null,null,null,null,null,null];
(statearr_154297[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_154297[(1)] = (1));

return statearr_154297;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_154268){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_154268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e154298){if((e154298 instanceof Object)){
var ex__15728__auto__ = e154298;
var statearr_154299_154308 = state_154268;
(statearr_154299_154308[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154309 = state_154268;
state_154268 = G__154309;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_154268){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_154268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___154301,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_154300 = f__15790__auto__.call(null);
(statearr_154300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___154301);

return statearr_154300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___154301,yaml,fs,c))
);


return c;
});
config.core.yaml_table_config__GT_chan_matching_yaml_object = (function config$core$yaml_table_config__GT_chan_matching_yaml_object(ext){
return config.core.yaml_config_string__GT_chan_matching_yaml_object.call(null,cljs.nodejs.require.call(null,"fs").readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext);
});

//# sourceMappingURL=core.js.map