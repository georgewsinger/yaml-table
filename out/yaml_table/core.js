// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('yaml_table.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
yaml_table.core.file_path__GT_string_with_contents = (function yaml_table$core$file_path__GT_string_with_contents(path){
var fs = cljs.nodejs.require.call(null,"fs");
return fs.readFileSync(path,"utf8");
});
yaml_table.core.string__GT_yaml_object_chan = (function yaml_table$core$string__GT_yaml_object_chan(string){
var yaml = cljs.nodejs.require.call(null,"js-yaml");
var fs = cljs.nodejs.require.call(null,"fs");
var c = cljs.core.async.chan.call(null,(1));
var c__15789__auto___143049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___143049,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___143049,yaml,fs,c){
return (function (state_143026){
var state_val_143027 = (state_143026[(1)]);
if((state_val_143027 === (1))){
var inst_143023 = (function (){return ((function (state_val_143027,c__15789__auto___143049,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_143027,c__15789__auto___143049,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_143027,c__15789__auto___143049,yaml,fs,c){
return (function (state_143032){
var state_val_143033 = (state_143032[(1)]);
if((state_val_143033 === (1))){
var state_143032__$1 = state_143032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143032__$1,(2),c,returned_yaml_object);
} else {
if((state_val_143033 === (2))){
var inst_143029 = (state_143032[(2)]);
var inst_143030 = cljs.core.async.close_BANG_.call(null,c);
var state_143032__$1 = (function (){var statearr_143034 = state_143032;
(statearr_143034[(7)] = inst_143029);

return statearr_143034;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143032__$1,inst_143030);
} else {
return null;
}
}
});})(c__15789__auto____$1,state_val_143027,c__15789__auto___143049,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_143027,c__15789__auto___143049,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_143038 = [null,null,null,null,null,null,null,null];
(statearr_143038[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_143038[(1)] = (1));

return statearr_143038;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_143032){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_143032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e143039){if((e143039 instanceof Object)){
var ex__15728__auto__ = e143039;
var statearr_143040_143050 = state_143032;
(statearr_143040_143050[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e143039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__143051 = state_143032;
state_143032 = G__143051;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_143032){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_143032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_143027,c__15789__auto___143049,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_143041 = f__15790__auto__.call(null);
(statearr_143041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_143041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_143027,c__15789__auto___143049,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_143027,c__15789__auto___143049,yaml,fs,c))
})();
var inst_143024 = yaml.safeLoadAll(string,inst_143023);
var state_143026__$1 = state_143026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143026__$1,inst_143024);
} else {
return null;
}
});})(c__15789__auto___143049,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___143049,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_143045 = [null,null,null,null,null,null,null];
(statearr_143045[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_143045[(1)] = (1));

return statearr_143045;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_143026){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_143026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e143046){if((e143046 instanceof Object)){
var ex__15728__auto__ = e143046;
var statearr_143047_143052 = state_143026;
(statearr_143047_143052[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e143046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__143053 = state_143026;
state_143026 = G__143053;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_143026){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_143026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___143049,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_143048 = f__15790__auto__.call(null);
(statearr_143048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___143049);

return statearr_143048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___143049,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_143065){
var state_val_143066 = (state_143065[(1)]);
if((state_val_143066 === (1))){
var state_143065__$1 = state_143065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143065__$1,c);
} else {
return null;
}
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_143070 = [null,null,null,null,null,null,null];
(statearr_143070[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__);

(statearr_143070[(1)] = (1));

return statearr_143070;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1 = (function (state_143065){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_143065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e143071){if((e143071 instanceof Object)){
var ex__15728__auto__ = e143071;
var statearr_143072_143074 = state_143065;
(statearr_143072_143074[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e143071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__143075 = state_143065;
state_143065 = G__143075;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = function(state_143065){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1.call(this,state_143065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_143073 = f__15790__auto__.call(null);
(statearr_143073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_143073;
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
var c__15789__auto___143162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___143162,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___143162,c){
return (function (state_143145){
var state_val_143146 = (state_143145[(1)]);
if((state_val_143146 === (1))){
var inst_143119 = cljs.core.PersistentVector.EMPTY;
var inst_143120 = vwc;
var inst_143121 = inst_143119;
var state_143145__$1 = (function (){var statearr_143147 = state_143145;
(statearr_143147[(7)] = inst_143121);

(statearr_143147[(8)] = inst_143120);

return statearr_143147;
})();
var statearr_143148_143163 = state_143145__$1;
(statearr_143148_143163[(2)] = null);

(statearr_143148_143163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143146 === (2))){
var inst_143120 = (state_143145[(8)]);
var inst_143123 = cljs.core.empty_QMARK_.call(null,inst_143120);
var state_143145__$1 = state_143145;
if(inst_143123){
var statearr_143149_143164 = state_143145__$1;
(statearr_143149_143164[(1)] = (4));

} else {
var statearr_143150_143165 = state_143145__$1;
(statearr_143150_143165[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143146 === (3))){
var inst_143143 = (state_143145[(2)]);
var state_143145__$1 = state_143145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143145__$1,inst_143143);
} else {
if((state_val_143146 === (4))){
var inst_143121 = (state_143145[(7)]);
var inst_143125 = cljs.core.clj__GT_js.call(null,inst_143121);
var state_143145__$1 = state_143145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143145__$1,(7),c,inst_143125);
} else {
if((state_val_143146 === (5))){
var inst_143120 = (state_143145[(8)]);
var state_143145__$1 = state_143145;
return cljs.core.async.ioc_alts_BANG_.call(null,state_143145__$1,(8),inst_143120);
} else {
if((state_val_143146 === (6))){
var inst_143141 = (state_143145[(2)]);
var state_143145__$1 = state_143145;
var statearr_143151_143166 = state_143145__$1;
(statearr_143151_143166[(2)] = inst_143141);

(statearr_143151_143166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143146 === (7))){
var inst_143127 = (state_143145[(2)]);
var state_143145__$1 = state_143145;
var statearr_143152_143167 = state_143145__$1;
(statearr_143152_143167[(2)] = inst_143127);

(statearr_143152_143167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143146 === (8))){
var inst_143121 = (state_143145[(7)]);
var inst_143120 = (state_143145[(8)]);
var inst_143131 = (state_143145[(2)]);
var inst_143132 = cljs.core.nth.call(null,inst_143131,(0),null);
var inst_143133 = cljs.core.nth.call(null,inst_143131,(1),null);
var inst_143134 = [inst_143133];
var inst_143135 = cljs.core.PersistentHashSet.fromArray(inst_143134,true);
var inst_143136 = cljs.core.remove.call(null,inst_143135,inst_143120);
var inst_143137 = cljs.core.vec.call(null,inst_143136);
var inst_143138 = cljs.core.conj.call(null,inst_143121,inst_143132);
var inst_143120__$1 = inst_143137;
var inst_143121__$1 = inst_143138;
var state_143145__$1 = (function (){var statearr_143153 = state_143145;
(statearr_143153[(7)] = inst_143121__$1);

(statearr_143153[(8)] = inst_143120__$1);

return statearr_143153;
})();
var statearr_143154_143168 = state_143145__$1;
(statearr_143154_143168[(2)] = null);

(statearr_143154_143168[(1)] = (2));


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
});})(c__15789__auto___143162,c))
;
return ((function (switch__15724__auto__,c__15789__auto___143162,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0 = (function (){
var statearr_143158 = [null,null,null,null,null,null,null,null,null];
(statearr_143158[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__);

(statearr_143158[(1)] = (1));

return statearr_143158;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1 = (function (state_143145){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_143145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e143159){if((e143159 instanceof Object)){
var ex__15728__auto__ = e143159;
var statearr_143160_143169 = state_143145;
(statearr_143160_143169[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e143159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__143170 = state_143145;
state_143145 = G__143170;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = function(state_143145){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1.call(this,state_143145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___143162,c))
})();
var state__15791__auto__ = (function (){var statearr_143161 = f__15790__auto__.call(null);
(statearr_143161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___143162);

return statearr_143161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___143162,c))
);


return c;
});
yaml_table.core.chan_array_of_objects_yaml__GT_table = (function yaml_table$core$chan_array_of_objects_yaml__GT_table(oc,arg2){
var res = cljs.nodejs.require.call(null,"../resources/print-overview-table-from-array.js");
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,res){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,res){
return (function (state_143188){
var state_val_143189 = (state_143188[(1)]);
if((state_val_143189 === (1))){
var state_143188__$1 = state_143188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143188__$1,(2),oc);
} else {
if((state_val_143189 === (2))){
var inst_143185 = (state_143188[(2)]);
var inst_143186 = res.printOverviewTableFromArray(inst_143185,arg2);
var state_143188__$1 = state_143188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143188__$1,inst_143186);
} else {
return null;
}
}
});})(c__15789__auto__,res))
;
return ((function (switch__15724__auto__,c__15789__auto__,res){
return (function() {
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__ = null;
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0 = (function (){
var statearr_143193 = [null,null,null,null,null,null,null];
(statearr_143193[(0)] = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__);

(statearr_143193[(1)] = (1));

return statearr_143193;
});
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1 = (function (state_143188){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_143188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e143194){if((e143194 instanceof Object)){
var ex__15728__auto__ = e143194;
var statearr_143195_143197 = state_143188;
(statearr_143195_143197[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e143194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__143198 = state_143188;
state_143188 = G__143198;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__ = function(state_143188){
switch(arguments.length){
case 0:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1.call(this,state_143188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0;
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1;
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,res))
})();
var state__15791__auto__ = (function (){var statearr_143196 = f__15790__auto__.call(null);
(statearr_143196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_143196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__,res))
);

return c__15789__auto__;
});
yaml_table.core.path__GT_chan_vec_dec_strings = (function yaml_table$core$path__GT_chan_vec_dec_strings(input_path){
var c = cljs.core.async.chan.call(null,(1));
var dir = cljs.nodejs.require.call(null,"node-dir");
dir.files(input_path,((function (c,dir){
return (function (err,files){
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,c,dir){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,c,dir){
return (function (state_143220){
var state_val_143221 = (state_143220[(1)]);
if((state_val_143221 === (1))){
var inst_143214 = (function (){return ((function (state_val_143221,c__15789__auto__,c,dir){
return (function (file){
return file.endsWith(".dec");
});
;})(state_val_143221,c__15789__auto__,c,dir))
})();
var inst_143215 = files.filter(inst_143214);
var inst_143216 = cljs.core.js__GT_clj.call(null,inst_143215);
var state_143220__$1 = state_143220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143220__$1,(2),c,inst_143216);
} else {
if((state_val_143221 === (2))){
var inst_143218 = (state_143220[(2)]);
var state_143220__$1 = state_143220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143220__$1,inst_143218);
} else {
return null;
}
}
});})(c__15789__auto__,c,dir))
;
return ((function (switch__15724__auto__,c__15789__auto__,c,dir){
return (function() {
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__ = null;
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0 = (function (){
var statearr_143225 = [null,null,null,null,null,null,null];
(statearr_143225[(0)] = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__);

(statearr_143225[(1)] = (1));

return statearr_143225;
});
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1 = (function (state_143220){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_143220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e143226){if((e143226 instanceof Object)){
var ex__15728__auto__ = e143226;
var statearr_143227_143229 = state_143220;
(statearr_143227_143229[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e143226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__143230 = state_143220;
state_143220 = G__143230;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__ = function(state_143220){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1.call(this,state_143220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0;
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1;
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,c,dir))
})();
var state__15791__auto__ = (function (){var statearr_143228 = f__15790__auto__.call(null);
(statearr_143228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_143228;
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
var len__14433__auto___143232 = arguments.length;
var i__14434__auto___143233 = (0);
while(true){
if((i__14434__auto___143233 < len__14433__auto___143232)){
args__14440__auto__.push((arguments[i__14434__auto___143233]));

var G__143234 = (i__14434__auto___143233 + (1));
i__14434__auto___143233 = G__143234;
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
var ext = argv.e;
var path = ((argv["_"])[(0)]);
var rows = argv.r;
cljs.core.println.call(null,"argv: ",argv);

cljs.core.println.call(null,"ext: ",ext);

cljs.core.println.call(null,"path: ",path);

return cljs.core.println.call(null,"rows: ",rows);
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq143231){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq143231));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;

//# sourceMappingURL=core.js.map