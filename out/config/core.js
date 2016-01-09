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
var c__15789__auto___155247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___155247,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___155247,yaml,fs,c){
return (function (state_155214){
var state_val_155215 = (state_155214[(1)]);
if((state_val_155215 === (1))){
var inst_155211 = (function (){return ((function (state_val_155215,c__15789__auto___155247,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_155215,c__15789__auto___155247,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_155215,c__15789__auto___155247,yaml,fs,c){
return (function (state_155226){
var state_val_155227 = (state_155226[(1)]);
if((state_val_155227 === (1))){
var inst_155216 = returned_yaml_object.file_extension;
var inst_155217 = cljs.core._EQ_.call(null,inst_155216,ext);
var state_155226__$1 = state_155226;
if(inst_155217){
var statearr_155228_155248 = state_155226__$1;
(statearr_155228_155248[(1)] = (2));

} else {
var statearr_155229_155249 = state_155226__$1;
(statearr_155229_155249[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155227 === (2))){
var state_155226__$1 = state_155226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_155226__$1,(5),c,returned_yaml_object);
} else {
if((state_val_155227 === (3))){
var state_155226__$1 = state_155226;
var statearr_155230_155250 = state_155226__$1;
(statearr_155230_155250[(2)] = null);

(statearr_155230_155250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155227 === (4))){
var inst_155224 = (state_155226[(2)]);
var state_155226__$1 = state_155226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155226__$1,inst_155224);
} else {
if((state_val_155227 === (5))){
var inst_155220 = (state_155226[(2)]);
var inst_155221 = cljs.core.async.close_BANG_.call(null,c);
var state_155226__$1 = (function (){var statearr_155231 = state_155226;
(statearr_155231[(7)] = inst_155220);

return statearr_155231;
})();
var statearr_155232_155251 = state_155226__$1;
(statearr_155232_155251[(2)] = inst_155221);

(statearr_155232_155251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15789__auto____$1,state_val_155215,c__15789__auto___155247,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_155215,c__15789__auto___155247,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_155236 = [null,null,null,null,null,null,null,null];
(statearr_155236[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_155236[(1)] = (1));

return statearr_155236;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_155226){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_155226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e155237){if((e155237 instanceof Object)){
var ex__15728__auto__ = e155237;
var statearr_155238_155252 = state_155226;
(statearr_155238_155252[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155253 = state_155226;
state_155226 = G__155253;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_155226){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_155226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_155215,c__15789__auto___155247,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_155239 = f__15790__auto__.call(null);
(statearr_155239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_155239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_155215,c__15789__auto___155247,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_155215,c__15789__auto___155247,yaml,fs,c))
})();
var inst_155212 = yaml.safeLoadAll(s,inst_155211);
var state_155214__$1 = state_155214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155214__$1,inst_155212);
} else {
return null;
}
});})(c__15789__auto___155247,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___155247,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_155243 = [null,null,null,null,null,null,null];
(statearr_155243[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_155243[(1)] = (1));

return statearr_155243;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_155214){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_155214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e155244){if((e155244 instanceof Object)){
var ex__15728__auto__ = e155244;
var statearr_155245_155254 = state_155214;
(statearr_155245_155254[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155255 = state_155214;
state_155214 = G__155255;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_155214){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_155214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___155247,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_155246 = f__15790__auto__.call(null);
(statearr_155246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___155247);

return statearr_155246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___155247,yaml,fs,c))
);


return c;
});
config.core.yaml_table_config__GT_chan_matching_yaml_object = (function config$core$yaml_table_config__GT_chan_matching_yaml_object(ext){
return config.core.yaml_config_string__GT_chan_matching_yaml_object.call(null,cljs.nodejs.require.call(null,"fs").readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext);
});

//# sourceMappingURL=core.js.map