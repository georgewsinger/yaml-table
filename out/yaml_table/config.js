// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('yaml_table.config');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
yaml_table.config.string__GT_num_yaml_docs = (function yaml_table$config$string__GT_num_yaml_docs(s){
var x__13713__auto__ = cljs.core.count.call(null,cljs.core.re_seq.call(null,/^---\n/,s));
var y__13714__auto__ = cljs.core.count.call(null,cljs.core.re_seq.call(null,/\n...$/,s));
return ((x__13713__auto__ < y__13714__auto__) ? x__13713__auto__ : y__13714__auto__);
});
yaml_table.config.yaml_config_string__GT_chan_matching_yaml_object = (function yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object(s,table_name){
var yaml = cljs.nodejs.require.call(null,"js-yaml");
var fs = cljs.nodejs.require.call(null,"fs");
var c = cljs.core.async.chan.call(null,(1));
var c__15731__auto___18731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___18731,yaml,fs,c){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___18731,yaml,fs,c){
return (function (state_18698){
var state_val_18699 = (state_18698[(1)]);
if((state_val_18699 === (1))){
var inst_18695 = (function (){return ((function (state_val_18699,c__15731__auto___18731,yaml,fs,c){
return (function (returned_yaml_object){
var c__15731__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto____$1,state_val_18699,c__15731__auto___18731,yaml,fs,c){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto____$1,state_val_18699,c__15731__auto___18731,yaml,fs,c){
return (function (state_18710){
var state_val_18711 = (state_18710[(1)]);
if((state_val_18711 === (1))){
var inst_18700 = (returned_yaml_object["table"]);
var inst_18701 = cljs.core._EQ_.call(null,inst_18700,table_name);
var state_18710__$1 = state_18710;
if(inst_18701){
var statearr_18712_18732 = state_18710__$1;
(statearr_18712_18732[(1)] = (2));

} else {
var statearr_18713_18733 = state_18710__$1;
(statearr_18713_18733[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (2))){
var state_18710__$1 = state_18710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18710__$1,(5),c,returned_yaml_object);
} else {
if((state_val_18711 === (3))){
var state_18710__$1 = state_18710;
var statearr_18714_18734 = state_18710__$1;
(statearr_18714_18734[(2)] = null);

(statearr_18714_18734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (4))){
var inst_18708 = (state_18710[(2)]);
var state_18710__$1 = state_18710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18710__$1,inst_18708);
} else {
if((state_val_18711 === (5))){
var inst_18704 = (state_18710[(2)]);
var inst_18705 = cljs.core.async.close_BANG_.call(null,c);
var state_18710__$1 = (function (){var statearr_18715 = state_18710;
(statearr_18715[(7)] = inst_18704);

return statearr_18715;
})();
var statearr_18716_18735 = state_18710__$1;
(statearr_18716_18735[(2)] = inst_18705);

(statearr_18716_18735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15731__auto____$1,state_val_18699,c__15731__auto___18731,yaml,fs,c))
;
return ((function (switch__15710__auto__,c__15731__auto____$1,state_val_18699,c__15731__auto___18731,yaml,fs,c){
return (function() {
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto__ = null;
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto____0 = (function (){
var statearr_18720 = [null,null,null,null,null,null,null,null];
(statearr_18720[(0)] = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto__);

(statearr_18720[(1)] = (1));

return statearr_18720;
});
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto____1 = (function (state_18710){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18721){if((e18721 instanceof Object)){
var ex__15714__auto__ = e18721;
var statearr_18722_18736 = state_18710;
(statearr_18722_18736[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18737 = state_18710;
state_18710 = G__18737;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto__ = function(state_18710){
switch(arguments.length){
case 0:
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto____0.call(this);
case 1:
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto____1.call(this,state_18710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto____0;
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto____1;
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto____$1,state_val_18699,c__15731__auto___18731,yaml,fs,c))
})();
var state__15733__auto__ = (function (){var statearr_18723 = f__15732__auto__.call(null);
(statearr_18723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto____$1);

return statearr_18723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto____$1,state_val_18699,c__15731__auto___18731,yaml,fs,c))
);

return c__15731__auto____$1;
});
;})(state_val_18699,c__15731__auto___18731,yaml,fs,c))
})();
var inst_18696 = yaml.safeLoadAll(s,inst_18695);
var state_18698__$1 = state_18698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18698__$1,inst_18696);
} else {
return null;
}
});})(c__15731__auto___18731,yaml,fs,c))
;
return ((function (switch__15710__auto__,c__15731__auto___18731,yaml,fs,c){
return (function() {
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto__ = null;
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto____0 = (function (){
var statearr_18727 = [null,null,null,null,null,null,null];
(statearr_18727[(0)] = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto__);

(statearr_18727[(1)] = (1));

return statearr_18727;
});
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto____1 = (function (state_18698){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18728){if((e18728 instanceof Object)){
var ex__15714__auto__ = e18728;
var statearr_18729_18738 = state_18698;
(statearr_18729_18738[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18739 = state_18698;
state_18698 = G__18739;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto__ = function(state_18698){
switch(arguments.length){
case 0:
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto____0.call(this);
case 1:
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto____1.call(this,state_18698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto____0;
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto____1;
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___18731,yaml,fs,c))
})();
var state__15733__auto__ = (function (){var statearr_18730 = f__15732__auto__.call(null);
(statearr_18730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___18731);

return statearr_18730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___18731,yaml,fs,c))
);


return c;
});
yaml_table.config.yaml_table_config__GT_chan_matching_yaml_object = (function yaml_table$config$yaml_table_config__GT_chan_matching_yaml_object(table_name){
return yaml_table.config.yaml_config_string__GT_chan_matching_yaml_object.call(null,cljs.nodejs.require.call(null,"fs").readFileSync([cljs.core.str((cljs.nodejs.process["env"]["HOME"])),cljs.core.str("/.yaml-table")].join(''),"utf8"),table_name);
});

//# sourceMappingURL=config.js.map