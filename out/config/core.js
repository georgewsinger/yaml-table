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
var c__15789__auto___165495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___165495,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___165495,yaml,fs,c){
return (function (state_165462){
var state_val_165463 = (state_165462[(1)]);
if((state_val_165463 === (1))){
var inst_165459 = (function (){return ((function (state_val_165463,c__15789__auto___165495,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_165463,c__15789__auto___165495,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_165463,c__15789__auto___165495,yaml,fs,c){
return (function (state_165474){
var state_val_165475 = (state_165474[(1)]);
if((state_val_165475 === (1))){
var inst_165464 = returned_yaml_object.file_extension;
var inst_165465 = cljs.core._EQ_.call(null,inst_165464,ext);
var state_165474__$1 = state_165474;
if(inst_165465){
var statearr_165476_165496 = state_165474__$1;
(statearr_165476_165496[(1)] = (2));

} else {
var statearr_165477_165497 = state_165474__$1;
(statearr_165477_165497[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_165475 === (2))){
var state_165474__$1 = state_165474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_165474__$1,(5),c,returned_yaml_object);
} else {
if((state_val_165475 === (3))){
var state_165474__$1 = state_165474;
var statearr_165478_165498 = state_165474__$1;
(statearr_165478_165498[(2)] = null);

(statearr_165478_165498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_165475 === (4))){
var inst_165472 = (state_165474[(2)]);
var state_165474__$1 = state_165474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_165474__$1,inst_165472);
} else {
if((state_val_165475 === (5))){
var inst_165468 = (state_165474[(2)]);
var inst_165469 = cljs.core.async.close_BANG_.call(null,c);
var state_165474__$1 = (function (){var statearr_165479 = state_165474;
(statearr_165479[(7)] = inst_165468);

return statearr_165479;
})();
var statearr_165480_165499 = state_165474__$1;
(statearr_165480_165499[(2)] = inst_165469);

(statearr_165480_165499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15789__auto____$1,state_val_165463,c__15789__auto___165495,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_165463,c__15789__auto___165495,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_165484 = [null,null,null,null,null,null,null,null];
(statearr_165484[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_165484[(1)] = (1));

return statearr_165484;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_165474){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_165474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e165485){if((e165485 instanceof Object)){
var ex__15728__auto__ = e165485;
var statearr_165486_165500 = state_165474;
(statearr_165486_165500[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_165474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e165485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__165501 = state_165474;
state_165474 = G__165501;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_165474){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_165474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_165463,c__15789__auto___165495,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_165487 = f__15790__auto__.call(null);
(statearr_165487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_165487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_165463,c__15789__auto___165495,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_165463,c__15789__auto___165495,yaml,fs,c))
})();
var inst_165460 = yaml.safeLoadAll(s,inst_165459);
var state_165462__$1 = state_165462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_165462__$1,inst_165460);
} else {
return null;
}
});})(c__15789__auto___165495,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___165495,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_165491 = [null,null,null,null,null,null,null];
(statearr_165491[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_165491[(1)] = (1));

return statearr_165491;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_165462){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_165462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e165492){if((e165492 instanceof Object)){
var ex__15728__auto__ = e165492;
var statearr_165493_165502 = state_165462;
(statearr_165493_165502[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_165462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e165492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__165503 = state_165462;
state_165462 = G__165503;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_165462){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_165462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___165495,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_165494 = f__15790__auto__.call(null);
(statearr_165494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___165495);

return statearr_165494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___165495,yaml,fs,c))
);


return c;
});
config.core.yaml_table_config__GT_chan_matching_yaml_object = (function config$core$yaml_table_config__GT_chan_matching_yaml_object(ext){
return config.core.yaml_config_string__GT_chan_matching_yaml_object.call(null,cljs.nodejs.require.call(null,"fs").readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext);
});

//# sourceMappingURL=core.js.map