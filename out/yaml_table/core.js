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
var c__15789__auto___64167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___64167,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___64167,yaml,fs,c){
return (function (state_64144){
var state_val_64145 = (state_64144[(1)]);
if((state_val_64145 === (1))){
var inst_64141 = (function (){return ((function (state_val_64145,c__15789__auto___64167,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_64145,c__15789__auto___64167,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_64145,c__15789__auto___64167,yaml,fs,c){
return (function (state_64150){
var state_val_64151 = (state_64150[(1)]);
if((state_val_64151 === (1))){
var state_64150__$1 = state_64150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64150__$1,(2),c,returned_yaml_object);
} else {
if((state_val_64151 === (2))){
var inst_64147 = (state_64150[(2)]);
var inst_64148 = cljs.core.async.close_BANG_.call(null,c);
var state_64150__$1 = (function (){var statearr_64152 = state_64150;
(statearr_64152[(7)] = inst_64147);

return statearr_64152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64150__$1,inst_64148);
} else {
return null;
}
}
});})(c__15789__auto____$1,state_val_64145,c__15789__auto___64167,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_64145,c__15789__auto___64167,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_64156 = [null,null,null,null,null,null,null,null];
(statearr_64156[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_64156[(1)] = (1));

return statearr_64156;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_64150){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_64150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e64157){if((e64157 instanceof Object)){
var ex__15728__auto__ = e64157;
var statearr_64158_64168 = state_64150;
(statearr_64158_64168[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64169 = state_64150;
state_64150 = G__64169;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_64150){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_64150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_64145,c__15789__auto___64167,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_64159 = f__15790__auto__.call(null);
(statearr_64159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_64159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_64145,c__15789__auto___64167,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_64145,c__15789__auto___64167,yaml,fs,c))
})();
var inst_64142 = yaml.safeLoadAll(string,inst_64141);
var state_64144__$1 = state_64144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64144__$1,inst_64142);
} else {
return null;
}
});})(c__15789__auto___64167,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___64167,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_64163 = [null,null,null,null,null,null,null];
(statearr_64163[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_64163[(1)] = (1));

return statearr_64163;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_64144){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_64144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e64164){if((e64164 instanceof Object)){
var ex__15728__auto__ = e64164;
var statearr_64165_64170 = state_64144;
(statearr_64165_64170[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64171 = state_64144;
state_64144 = G__64171;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_64144){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_64144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___64167,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_64166 = f__15790__auto__.call(null);
(statearr_64166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___64167);

return statearr_64166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___64167,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_64183){
var state_val_64184 = (state_64183[(1)]);
if((state_val_64184 === (1))){
var state_64183__$1 = state_64183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64183__$1,c);
} else {
return null;
}
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_64188 = [null,null,null,null,null,null,null];
(statearr_64188[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__);

(statearr_64188[(1)] = (1));

return statearr_64188;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1 = (function (state_64183){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_64183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e64189){if((e64189 instanceof Object)){
var ex__15728__auto__ = e64189;
var statearr_64190_64192 = state_64183;
(statearr_64190_64192[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64193 = state_64183;
state_64183 = G__64193;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = function(state_64183){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1.call(this,state_64183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_64191 = f__15790__auto__.call(null);
(statearr_64191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_64191;
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
var c__15789__auto___64280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___64280,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___64280,c){
return (function (state_64263){
var state_val_64264 = (state_64263[(1)]);
if((state_val_64264 === (1))){
var inst_64237 = cljs.core.PersistentVector.EMPTY;
var inst_64238 = vwc;
var inst_64239 = inst_64237;
var state_64263__$1 = (function (){var statearr_64265 = state_64263;
(statearr_64265[(7)] = inst_64239);

(statearr_64265[(8)] = inst_64238);

return statearr_64265;
})();
var statearr_64266_64281 = state_64263__$1;
(statearr_64266_64281[(2)] = null);

(statearr_64266_64281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (2))){
var inst_64238 = (state_64263[(8)]);
var inst_64241 = cljs.core.empty_QMARK_.call(null,inst_64238);
var state_64263__$1 = state_64263;
if(inst_64241){
var statearr_64267_64282 = state_64263__$1;
(statearr_64267_64282[(1)] = (4));

} else {
var statearr_64268_64283 = state_64263__$1;
(statearr_64268_64283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (3))){
var inst_64261 = (state_64263[(2)]);
var state_64263__$1 = state_64263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64263__$1,inst_64261);
} else {
if((state_val_64264 === (4))){
var inst_64239 = (state_64263[(7)]);
var inst_64243 = cljs.core.clj__GT_js.call(null,inst_64239);
var state_64263__$1 = state_64263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64263__$1,(7),c,inst_64243);
} else {
if((state_val_64264 === (5))){
var inst_64238 = (state_64263[(8)]);
var state_64263__$1 = state_64263;
return cljs.core.async.ioc_alts_BANG_.call(null,state_64263__$1,(8),inst_64238);
} else {
if((state_val_64264 === (6))){
var inst_64259 = (state_64263[(2)]);
var state_64263__$1 = state_64263;
var statearr_64269_64284 = state_64263__$1;
(statearr_64269_64284[(2)] = inst_64259);

(statearr_64269_64284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (7))){
var inst_64245 = (state_64263[(2)]);
var state_64263__$1 = state_64263;
var statearr_64270_64285 = state_64263__$1;
(statearr_64270_64285[(2)] = inst_64245);

(statearr_64270_64285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (8))){
var inst_64239 = (state_64263[(7)]);
var inst_64238 = (state_64263[(8)]);
var inst_64249 = (state_64263[(2)]);
var inst_64250 = cljs.core.nth.call(null,inst_64249,(0),null);
var inst_64251 = cljs.core.nth.call(null,inst_64249,(1),null);
var inst_64252 = [inst_64251];
var inst_64253 = cljs.core.PersistentHashSet.fromArray(inst_64252,true);
var inst_64254 = cljs.core.remove.call(null,inst_64253,inst_64238);
var inst_64255 = cljs.core.vec.call(null,inst_64254);
var inst_64256 = cljs.core.conj.call(null,inst_64239,inst_64250);
var inst_64238__$1 = inst_64255;
var inst_64239__$1 = inst_64256;
var state_64263__$1 = (function (){var statearr_64271 = state_64263;
(statearr_64271[(7)] = inst_64239__$1);

(statearr_64271[(8)] = inst_64238__$1);

return statearr_64271;
})();
var statearr_64272_64286 = state_64263__$1;
(statearr_64272_64286[(2)] = null);

(statearr_64272_64286[(1)] = (2));


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
});})(c__15789__auto___64280,c))
;
return ((function (switch__15724__auto__,c__15789__auto___64280,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0 = (function (){
var statearr_64276 = [null,null,null,null,null,null,null,null,null];
(statearr_64276[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__);

(statearr_64276[(1)] = (1));

return statearr_64276;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1 = (function (state_64263){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_64263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e64277){if((e64277 instanceof Object)){
var ex__15728__auto__ = e64277;
var statearr_64278_64287 = state_64263;
(statearr_64278_64287[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64288 = state_64263;
state_64263 = G__64288;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = function(state_64263){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1.call(this,state_64263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___64280,c))
})();
var state__15791__auto__ = (function (){var statearr_64279 = f__15790__auto__.call(null);
(statearr_64279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___64280);

return statearr_64279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___64280,c))
);


return c;
});
yaml_table.core.chan_array_of_objects_yaml__GT_table = (function yaml_table$core$chan_array_of_objects_yaml__GT_table(oc,arg2){
var res = cljs.nodejs.require.call(null,"../resources/print-overview-table-from-array.js");
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,res){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,res){
return (function (state_64306){
var state_val_64307 = (state_64306[(1)]);
if((state_val_64307 === (1))){
var state_64306__$1 = state_64306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64306__$1,(2),oc);
} else {
if((state_val_64307 === (2))){
var inst_64303 = (state_64306[(2)]);
var inst_64304 = res.printOverviewTableFromArray(inst_64303,arg2);
var state_64306__$1 = state_64306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64306__$1,inst_64304);
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
var statearr_64311 = [null,null,null,null,null,null,null];
(statearr_64311[(0)] = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__);

(statearr_64311[(1)] = (1));

return statearr_64311;
});
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1 = (function (state_64306){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_64306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e64312){if((e64312 instanceof Object)){
var ex__15728__auto__ = e64312;
var statearr_64313_64315 = state_64306;
(statearr_64313_64315[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64316 = state_64306;
state_64306 = G__64316;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__ = function(state_64306){
switch(arguments.length){
case 0:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1.call(this,state_64306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0;
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1;
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,res))
})();
var state__15791__auto__ = (function (){var statearr_64314 = f__15790__auto__.call(null);
(statearr_64314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_64314;
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
return (function (state_64338){
var state_val_64339 = (state_64338[(1)]);
if((state_val_64339 === (1))){
var inst_64332 = (function (){return ((function (state_val_64339,c__15789__auto__,c,dir){
return (function (file){
return file.endsWith(".dec");
});
;})(state_val_64339,c__15789__auto__,c,dir))
})();
var inst_64333 = files.filter(inst_64332);
var inst_64334 = cljs.core.js__GT_clj.call(null,inst_64333);
var state_64338__$1 = state_64338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64338__$1,(2),c,inst_64334);
} else {
if((state_val_64339 === (2))){
var inst_64336 = (state_64338[(2)]);
var state_64338__$1 = state_64338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64338__$1,inst_64336);
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
var statearr_64343 = [null,null,null,null,null,null,null];
(statearr_64343[(0)] = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__);

(statearr_64343[(1)] = (1));

return statearr_64343;
});
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1 = (function (state_64338){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_64338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e64344){if((e64344 instanceof Object)){
var ex__15728__auto__ = e64344;
var statearr_64345_64347 = state_64338;
(statearr_64345_64347[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64348 = state_64338;
state_64338 = G__64348;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__ = function(state_64338){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1.call(this,state_64338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0;
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1;
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,c,dir))
})();
var state__15791__auto__ = (function (){var statearr_64346 = f__15790__auto__.call(null);
(statearr_64346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_64346;
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
var len__14433__auto___64365 = arguments.length;
var i__14434__auto___64366 = (0);
while(true){
if((i__14434__auto___64366 < len__14433__auto___64365)){
args__14440__auto__.push((arguments[i__14434__auto___64366]));

var G__64367 = (i__14434__auto___64366 + (1));
i__14434__auto___64366 = G__64367;
continue;
} else {
}
break;
}

var argseq__14441__auto__ = ((((0) < args__14440__auto__.length))?(new cljs.core.IndexedSeq(args__14440__auto__.slice((0)),(0))):null);
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__14441__auto__);
});

yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (heh){
var path = [cljs.core.str(cljs.core.first.call(null,heh))].join('');
var days = parseInt(cljs.core.second.call(null,heh));
var cv = yaml_table.core.path__GT_chan_vec_dec_strings.call(null,path);
var mf = cljs.core.comp.call(null,yaml_table.core.string__GT_yaml_object_chan,yaml_table.core.file_path__GT_string_with_contents);
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,path,days,cv,mf){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,path,days,cv,mf){
return (function (state_64356){
var state_val_64357 = (state_64356[(1)]);
if((state_val_64357 === (1))){
var state_64356__$1 = state_64356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64356__$1,(2),cv);
} else {
if((state_val_64357 === (2))){
var inst_64351 = (state_64356[(2)]);
var inst_64352 = cljs.core.mapv.call(null,mf,inst_64351);
var inst_64353 = yaml_table.core.vector_with_channels__GT_channel_with_array.call(null,inst_64352);
var inst_64354 = yaml_table.core.chan_array_of_objects_yaml__GT_table.call(null,inst_64353,days);
var state_64356__$1 = state_64356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64356__$1,inst_64354);
} else {
return null;
}
}
});})(c__15789__auto__,path,days,cv,mf))
;
return ((function (switch__15724__auto__,c__15789__auto__,path,days,cv,mf){
return (function() {
var yaml_table$core$state_machine__15725__auto__ = null;
var yaml_table$core$state_machine__15725__auto____0 = (function (){
var statearr_64361 = [null,null,null,null,null,null,null];
(statearr_64361[(0)] = yaml_table$core$state_machine__15725__auto__);

(statearr_64361[(1)] = (1));

return statearr_64361;
});
var yaml_table$core$state_machine__15725__auto____1 = (function (state_64356){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_64356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e64362){if((e64362 instanceof Object)){
var ex__15728__auto__ = e64362;
var statearr_64363_64368 = state_64356;
(statearr_64363_64368[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64369 = state_64356;
state_64356 = G__64369;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$state_machine__15725__auto__ = function(state_64356){
switch(arguments.length){
case 0:
return yaml_table$core$state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$state_machine__15725__auto____1.call(this,state_64356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$state_machine__15725__auto____0;
yaml_table$core$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$state_machine__15725__auto____1;
return yaml_table$core$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,path,days,cv,mf))
})();
var state__15791__auto__ = (function (){var statearr_64364 = f__15790__auto__.call(null);
(statearr_64364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_64364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__,path,days,cv,mf))
);

return c__15789__auto__;
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq64349){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64349));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;

//# sourceMappingURL=core.js.map