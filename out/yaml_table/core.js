// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('yaml_table.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('yaml_table.config');
cljs.nodejs.enable_util_print_BANG_.call(null);
yaml_table.core.file_path__GT_string_with_contents = (function yaml_table$core$file_path__GT_string_with_contents(path){
var fs = cljs.nodejs.require.call(null,"fs");
return fs.readFileSync(path,"utf8");
});
yaml_table.core.string__GT_yaml_object_chan = (function yaml_table$core$string__GT_yaml_object_chan(string){
var yaml = cljs.nodejs.require.call(null,"js-yaml");
var fs = cljs.nodejs.require.call(null,"fs");
var c = cljs.core.async.chan.call(null,(1));
var c__15789__auto___172981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___172981,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___172981,yaml,fs,c){
return (function (state_172958){
var state_val_172959 = (state_172958[(1)]);
if((state_val_172959 === (1))){
var inst_172955 = (function (){return ((function (state_val_172959,c__15789__auto___172981,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_172959,c__15789__auto___172981,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_172959,c__15789__auto___172981,yaml,fs,c){
return (function (state_172964){
var state_val_172965 = (state_172964[(1)]);
if((state_val_172965 === (1))){
var state_172964__$1 = state_172964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_172964__$1,(2),c,returned_yaml_object);
} else {
if((state_val_172965 === (2))){
var inst_172961 = (state_172964[(2)]);
var inst_172962 = cljs.core.async.close_BANG_.call(null,c);
var state_172964__$1 = (function (){var statearr_172966 = state_172964;
(statearr_172966[(7)] = inst_172961);

return statearr_172966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_172964__$1,inst_172962);
} else {
return null;
}
}
});})(c__15789__auto____$1,state_val_172959,c__15789__auto___172981,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_172959,c__15789__auto___172981,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_172970 = [null,null,null,null,null,null,null,null];
(statearr_172970[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_172970[(1)] = (1));

return statearr_172970;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_172964){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_172964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e172971){if((e172971 instanceof Object)){
var ex__15728__auto__ = e172971;
var statearr_172972_172982 = state_172964;
(statearr_172972_172982[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_172964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e172971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__172983 = state_172964;
state_172964 = G__172983;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_172964){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_172964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_172959,c__15789__auto___172981,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_172973 = f__15790__auto__.call(null);
(statearr_172973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_172973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_172959,c__15789__auto___172981,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_172959,c__15789__auto___172981,yaml,fs,c))
})();
var inst_172956 = yaml.safeLoadAll(string,inst_172955);
var state_172958__$1 = state_172958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_172958__$1,inst_172956);
} else {
return null;
}
});})(c__15789__auto___172981,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___172981,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_172977 = [null,null,null,null,null,null,null];
(statearr_172977[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_172977[(1)] = (1));

return statearr_172977;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_172958){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_172958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e172978){if((e172978 instanceof Object)){
var ex__15728__auto__ = e172978;
var statearr_172979_172984 = state_172958;
(statearr_172979_172984[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_172958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e172978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__172985 = state_172958;
state_172958 = G__172985;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_172958){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_172958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___172981,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_172980 = f__15790__auto__.call(null);
(statearr_172980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___172981);

return statearr_172980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___172981,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_172997){
var state_val_172998 = (state_172997[(1)]);
if((state_val_172998 === (1))){
var state_172997__$1 = state_172997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_172997__$1,c);
} else {
return null;
}
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_173002 = [null,null,null,null,null,null,null];
(statearr_173002[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__);

(statearr_173002[(1)] = (1));

return statearr_173002;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1 = (function (state_172997){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_172997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e173003){if((e173003 instanceof Object)){
var ex__15728__auto__ = e173003;
var statearr_173004_173006 = state_172997;
(statearr_173004_173006[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_172997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e173003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__173007 = state_172997;
state_172997 = G__173007;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = function(state_172997){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1.call(this,state_172997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_173005 = f__15790__auto__.call(null);
(statearr_173005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_173005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__))
);

return c__15789__auto__;
})()], null));
});
yaml_table.core.not_nil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
yaml_table.core.vector_with_channels__GT_channel_with_array = (function yaml_table$core$vector_with_channels__GT_channel_with_array(vwc){
var c = cljs.core.async.chan.call(null,(1));
var c__15789__auto___173094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___173094,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___173094,c){
return (function (state_173077){
var state_val_173078 = (state_173077[(1)]);
if((state_val_173078 === (1))){
var inst_173051 = cljs.core.PersistentVector.EMPTY;
var inst_173052 = vwc;
var inst_173053 = inst_173051;
var state_173077__$1 = (function (){var statearr_173079 = state_173077;
(statearr_173079[(7)] = inst_173052);

(statearr_173079[(8)] = inst_173053);

return statearr_173079;
})();
var statearr_173080_173095 = state_173077__$1;
(statearr_173080_173095[(2)] = null);

(statearr_173080_173095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173078 === (2))){
var inst_173052 = (state_173077[(7)]);
var inst_173055 = cljs.core.empty_QMARK_.call(null,inst_173052);
var state_173077__$1 = state_173077;
if(inst_173055){
var statearr_173081_173096 = state_173077__$1;
(statearr_173081_173096[(1)] = (4));

} else {
var statearr_173082_173097 = state_173077__$1;
(statearr_173082_173097[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173078 === (3))){
var inst_173075 = (state_173077[(2)]);
var state_173077__$1 = state_173077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_173077__$1,inst_173075);
} else {
if((state_val_173078 === (4))){
var inst_173053 = (state_173077[(8)]);
var inst_173057 = cljs.core.clj__GT_js.call(null,inst_173053);
var state_173077__$1 = state_173077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_173077__$1,(7),c,inst_173057);
} else {
if((state_val_173078 === (5))){
var inst_173052 = (state_173077[(7)]);
var state_173077__$1 = state_173077;
return cljs.core.async.ioc_alts_BANG_.call(null,state_173077__$1,(8),inst_173052);
} else {
if((state_val_173078 === (6))){
var inst_173073 = (state_173077[(2)]);
var state_173077__$1 = state_173077;
var statearr_173083_173098 = state_173077__$1;
(statearr_173083_173098[(2)] = inst_173073);

(statearr_173083_173098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173078 === (7))){
var inst_173059 = (state_173077[(2)]);
var state_173077__$1 = state_173077;
var statearr_173084_173099 = state_173077__$1;
(statearr_173084_173099[(2)] = inst_173059);

(statearr_173084_173099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173078 === (8))){
var inst_173052 = (state_173077[(7)]);
var inst_173053 = (state_173077[(8)]);
var inst_173063 = (state_173077[(2)]);
var inst_173064 = cljs.core.nth.call(null,inst_173063,(0),null);
var inst_173065 = cljs.core.nth.call(null,inst_173063,(1),null);
var inst_173066 = [inst_173065];
var inst_173067 = cljs.core.PersistentHashSet.fromArray(inst_173066,true);
var inst_173068 = cljs.core.remove.call(null,inst_173067,inst_173052);
var inst_173069 = cljs.core.vec.call(null,inst_173068);
var inst_173070 = cljs.core.conj.call(null,inst_173053,inst_173064);
var inst_173052__$1 = inst_173069;
var inst_173053__$1 = inst_173070;
var state_173077__$1 = (function (){var statearr_173085 = state_173077;
(statearr_173085[(7)] = inst_173052__$1);

(statearr_173085[(8)] = inst_173053__$1);

return statearr_173085;
})();
var statearr_173086_173100 = state_173077__$1;
(statearr_173086_173100[(2)] = null);

(statearr_173086_173100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__15789__auto___173094,c))
;
return ((function (switch__15724__auto__,c__15789__auto___173094,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0 = (function (){
var statearr_173090 = [null,null,null,null,null,null,null,null,null];
(statearr_173090[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__);

(statearr_173090[(1)] = (1));

return statearr_173090;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1 = (function (state_173077){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_173077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e173091){if((e173091 instanceof Object)){
var ex__15728__auto__ = e173091;
var statearr_173092_173101 = state_173077;
(statearr_173092_173101[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_173077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e173091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__173102 = state_173077;
state_173077 = G__173102;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = function(state_173077){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1.call(this,state_173077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___173094,c))
})();
var state__15791__auto__ = (function (){var statearr_173093 = f__15790__auto__.call(null);
(statearr_173093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___173094);

return statearr_173093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___173094,c))
);


return c;
});
yaml_table.core.chan_table_package__GT_table = (function yaml_table$core$chan_table_package__GT_table(yaml_config_chan,arr_chan,rows){
var res = cljs.nodejs.require.call(null,"../resources/print-yaml-table.js");
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,res){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,res){
return (function (state_173125){
var state_val_173126 = (state_173125[(1)]);
if((state_val_173126 === (1))){
var state_173125__$1 = state_173125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_173125__$1,(2),yaml_config_chan);
} else {
if((state_val_173126 === (2))){
var inst_173120 = (state_173125[(2)]);
var state_173125__$1 = (function (){var statearr_173127 = state_173125;
(statearr_173127[(7)] = inst_173120);

return statearr_173127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_173125__$1,(3),arr_chan);
} else {
if((state_val_173126 === (3))){
var inst_173120 = (state_173125[(7)]);
var inst_173122 = (state_173125[(2)]);
var inst_173123 = res.printYamlTable(inst_173120,inst_173122,rows);
var state_173125__$1 = state_173125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_173125__$1,inst_173123);
} else {
return null;
}
}
}
});})(c__15789__auto__,res))
;
return ((function (switch__15724__auto__,c__15789__auto__,res){
return (function() {
var yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto__ = null;
var yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto____0 = (function (){
var statearr_173131 = [null,null,null,null,null,null,null,null];
(statearr_173131[(0)] = yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto__);

(statearr_173131[(1)] = (1));

return statearr_173131;
});
var yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto____1 = (function (state_173125){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_173125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e173132){if((e173132 instanceof Object)){
var ex__15728__auto__ = e173132;
var statearr_173133_173135 = state_173125;
(statearr_173133_173135[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_173125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e173132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__173136 = state_173125;
state_173125 = G__173136;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto__ = function(state_173125){
switch(arguments.length){
case 0:
return yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto____1.call(this,state_173125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto____0;
yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto____1;
return yaml_table$core$chan_table_package__GT_table_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,res))
})();
var state__15791__auto__ = (function (){var statearr_173134 = f__15790__auto__.call(null);
(statearr_173134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_173134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__,res))
);

return c__15789__auto__;
});
yaml_table.core.path__GT_chan_vec_ext_strings = (function yaml_table$core$path__GT_chan_vec_ext_strings(path,ext){
var c = cljs.core.async.chan.call(null,(1));
var dir = cljs.nodejs.require.call(null,"node-dir");
dir.files(path,((function (c,dir){
return (function (err,files){
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,c,dir){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,c,dir){
return (function (state_173158){
var state_val_173159 = (state_173158[(1)]);
if((state_val_173159 === (1))){
var inst_173152 = (function (){return ((function (state_val_173159,c__15789__auto__,c,dir){
return (function (file){
return file.endsWith(ext);
});
;})(state_val_173159,c__15789__auto__,c,dir))
})();
var inst_173153 = files.filter(inst_173152);
var inst_173154 = cljs.core.js__GT_clj.call(null,inst_173153);
var state_173158__$1 = state_173158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_173158__$1,(2),c,inst_173154);
} else {
if((state_val_173159 === (2))){
var inst_173156 = (state_173158[(2)]);
var state_173158__$1 = state_173158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_173158__$1,inst_173156);
} else {
return null;
}
}
});})(c__15789__auto__,c,dir))
;
return ((function (switch__15724__auto__,c__15789__auto__,c,dir){
return (function() {
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__ = null;
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____0 = (function (){
var statearr_173163 = [null,null,null,null,null,null,null];
(statearr_173163[(0)] = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__);

(statearr_173163[(1)] = (1));

return statearr_173163;
});
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____1 = (function (state_173158){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_173158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e173164){if((e173164 instanceof Object)){
var ex__15728__auto__ = e173164;
var statearr_173165_173167 = state_173158;
(statearr_173165_173167[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_173158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e173164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__173168 = state_173158;
state_173158 = G__173168;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__ = function(state_173158){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____1.call(this,state_173158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____0;
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____1;
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,c,dir))
})();
var state__15791__auto__ = (function (){var statearr_173166 = f__15790__auto__.call(null);
(statearr_173166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_173166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__,c,dir))
);

return c__15789__auto__;
});})(c,dir))
);

return c;
});
yaml_table.core._main = (function yaml_table$core$_main(var_args){
var args__14440__auto__ = [];
var len__14433__auto___173185 = arguments.length;
var i__14434__auto___173186 = (0);
while(true){
if((i__14434__auto___173186 < len__14433__auto___173185)){
args__14440__auto__.push((arguments[i__14434__auto___173186]));

var G__173187 = (i__14434__auto___173186 + (1));
i__14434__auto___173186 = G__173187;
continue;
} else {
}
break;
}

var argseq__14441__auto__ = ((((0) < args__14440__auto__.length))?(new cljs.core.IndexedSeq(args__14440__auto__.slice((0)),(0))):null);
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__14441__auto__);
});

yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var ext = (function (){var or__13375__auto__ = argv.e;
if(cljs.core.truth_(or__13375__auto__)){
return or__13375__auto__;
} else {
return "yaml";
}
})();
var path = (function (){var or__13375__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__13375__auto__)){
return or__13375__auto__;
} else {
return "/home/george/Dropbox";
}
})();
var rows = (function (){var or__13375__auto__ = parseInt(argv.r);
if(cljs.core.truth_(or__13375__auto__)){
return or__13375__auto__;
} else {
return (10);
}
})();
var yaml_config_chan = yaml_table.config.yaml_table_config__GT_chan_matching_yaml_object.call(null,ext);
var cv = yaml_table.core.path__GT_chan_vec_ext_strings.call(null,path,ext);
var mf = cljs.core.comp.call(null,yaml_table.core.string__GT_yaml_object_chan,yaml_table.core.file_path__GT_string_with_contents);
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,minimist,argv,ext,path,rows,yaml_config_chan,cv,mf){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,minimist,argv,ext,path,rows,yaml_config_chan,cv,mf){
return (function (state_173176){
var state_val_173177 = (state_173176[(1)]);
if((state_val_173177 === (1))){
var state_173176__$1 = state_173176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_173176__$1,(2),cv);
} else {
if((state_val_173177 === (2))){
var inst_173171 = (state_173176[(2)]);
var inst_173172 = cljs.core.mapv.call(null,mf,inst_173171);
var inst_173173 = yaml_table.core.vector_with_channels__GT_channel_with_array.call(null,inst_173172);
var inst_173174 = yaml_table.core.chan_table_package__GT_table.call(null,yaml_config_chan,inst_173173,rows);
var state_173176__$1 = state_173176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_173176__$1,inst_173174);
} else {
return null;
}
}
});})(c__15789__auto__,minimist,argv,ext,path,rows,yaml_config_chan,cv,mf))
;
return ((function (switch__15724__auto__,c__15789__auto__,minimist,argv,ext,path,rows,yaml_config_chan,cv,mf){
return (function() {
var yaml_table$core$state_machine__15725__auto__ = null;
var yaml_table$core$state_machine__15725__auto____0 = (function (){
var statearr_173181 = [null,null,null,null,null,null,null];
(statearr_173181[(0)] = yaml_table$core$state_machine__15725__auto__);

(statearr_173181[(1)] = (1));

return statearr_173181;
});
var yaml_table$core$state_machine__15725__auto____1 = (function (state_173176){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_173176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e173182){if((e173182 instanceof Object)){
var ex__15728__auto__ = e173182;
var statearr_173183_173188 = state_173176;
(statearr_173183_173188[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_173176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e173182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__173189 = state_173176;
state_173176 = G__173189;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$state_machine__15725__auto__ = function(state_173176){
switch(arguments.length){
case 0:
return yaml_table$core$state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$state_machine__15725__auto____1.call(this,state_173176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$state_machine__15725__auto____0;
yaml_table$core$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$state_machine__15725__auto____1;
return yaml_table$core$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,minimist,argv,ext,path,rows,yaml_config_chan,cv,mf))
})();
var state__15791__auto__ = (function (){var statearr_173184 = f__15790__auto__.call(null);
(statearr_173184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_173184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__,minimist,argv,ext,path,rows,yaml_config_chan,cv,mf))
);

return c__15789__auto__;
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq173169){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq173169));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;

//# sourceMappingURL=core.js.map