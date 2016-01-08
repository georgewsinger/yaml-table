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
var c__15789__auto___42878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___42878,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___42878,yaml,fs,c){
return (function (state_42855){
var state_val_42856 = (state_42855[(1)]);
if((state_val_42856 === (1))){
var inst_42852 = (function (){return ((function (state_val_42856,c__15789__auto___42878,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_42856,c__15789__auto___42878,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_42856,c__15789__auto___42878,yaml,fs,c){
return (function (state_42861){
var state_val_42862 = (state_42861[(1)]);
if((state_val_42862 === (1))){
var state_42861__$1 = state_42861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42861__$1,(2),c,returned_yaml_object);
} else {
if((state_val_42862 === (2))){
var inst_42858 = (state_42861[(2)]);
var inst_42859 = cljs.core.async.close_BANG_.call(null,c);
var state_42861__$1 = (function (){var statearr_42863 = state_42861;
(statearr_42863[(7)] = inst_42858);

return statearr_42863;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42861__$1,inst_42859);
} else {
return null;
}
}
});})(c__15789__auto____$1,state_val_42856,c__15789__auto___42878,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_42856,c__15789__auto___42878,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_42867 = [null,null,null,null,null,null,null,null];
(statearr_42867[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_42867[(1)] = (1));

return statearr_42867;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_42861){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_42861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e42868){if((e42868 instanceof Object)){
var ex__15728__auto__ = e42868;
var statearr_42869_42879 = state_42861;
(statearr_42869_42879[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42880 = state_42861;
state_42861 = G__42880;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_42861){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_42861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_42856,c__15789__auto___42878,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_42870 = f__15790__auto__.call(null);
(statearr_42870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_42870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_42856,c__15789__auto___42878,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_42856,c__15789__auto___42878,yaml,fs,c))
})();
var inst_42853 = yaml.safeLoadAll(string,inst_42852);
var state_42855__$1 = state_42855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42855__$1,inst_42853);
} else {
return null;
}
});})(c__15789__auto___42878,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___42878,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_42874 = [null,null,null,null,null,null,null];
(statearr_42874[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_42874[(1)] = (1));

return statearr_42874;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_42855){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_42855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e42875){if((e42875 instanceof Object)){
var ex__15728__auto__ = e42875;
var statearr_42876_42881 = state_42855;
(statearr_42876_42881[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42882 = state_42855;
state_42855 = G__42882;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_42855){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_42855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___42878,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_42877 = f__15790__auto__.call(null);
(statearr_42877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___42878);

return statearr_42877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___42878,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_42894){
var state_val_42895 = (state_42894[(1)]);
if((state_val_42895 === (1))){
var state_42894__$1 = state_42894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42894__$1,c);
} else {
return null;
}
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_42899 = [null,null,null,null,null,null,null];
(statearr_42899[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__);

(statearr_42899[(1)] = (1));

return statearr_42899;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1 = (function (state_42894){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_42894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e42900){if((e42900 instanceof Object)){
var ex__15728__auto__ = e42900;
var statearr_42901_42903 = state_42894;
(statearr_42901_42903[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42904 = state_42894;
state_42894 = G__42904;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = function(state_42894){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1.call(this,state_42894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_42902 = f__15790__auto__.call(null);
(statearr_42902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_42902;
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
var c__15789__auto___42991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___42991,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___42991,c){
return (function (state_42974){
var state_val_42975 = (state_42974[(1)]);
if((state_val_42975 === (1))){
var inst_42948 = cljs.core.PersistentVector.EMPTY;
var inst_42949 = vwc;
var inst_42950 = inst_42948;
var state_42974__$1 = (function (){var statearr_42976 = state_42974;
(statearr_42976[(7)] = inst_42949);

(statearr_42976[(8)] = inst_42950);

return statearr_42976;
})();
var statearr_42977_42992 = state_42974__$1;
(statearr_42977_42992[(2)] = null);

(statearr_42977_42992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42975 === (2))){
var inst_42949 = (state_42974[(7)]);
var inst_42952 = cljs.core.empty_QMARK_.call(null,inst_42949);
var state_42974__$1 = state_42974;
if(inst_42952){
var statearr_42978_42993 = state_42974__$1;
(statearr_42978_42993[(1)] = (4));

} else {
var statearr_42979_42994 = state_42974__$1;
(statearr_42979_42994[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42975 === (3))){
var inst_42972 = (state_42974[(2)]);
var state_42974__$1 = state_42974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42974__$1,inst_42972);
} else {
if((state_val_42975 === (4))){
var inst_42950 = (state_42974[(8)]);
var inst_42954 = cljs.core.clj__GT_js.call(null,inst_42950);
var state_42974__$1 = state_42974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42974__$1,(7),c,inst_42954);
} else {
if((state_val_42975 === (5))){
var inst_42949 = (state_42974[(7)]);
var state_42974__$1 = state_42974;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42974__$1,(8),inst_42949);
} else {
if((state_val_42975 === (6))){
var inst_42970 = (state_42974[(2)]);
var state_42974__$1 = state_42974;
var statearr_42980_42995 = state_42974__$1;
(statearr_42980_42995[(2)] = inst_42970);

(statearr_42980_42995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42975 === (7))){
var inst_42956 = (state_42974[(2)]);
var state_42974__$1 = state_42974;
var statearr_42981_42996 = state_42974__$1;
(statearr_42981_42996[(2)] = inst_42956);

(statearr_42981_42996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42975 === (8))){
var inst_42949 = (state_42974[(7)]);
var inst_42950 = (state_42974[(8)]);
var inst_42960 = (state_42974[(2)]);
var inst_42961 = cljs.core.nth.call(null,inst_42960,(0),null);
var inst_42962 = cljs.core.nth.call(null,inst_42960,(1),null);
var inst_42963 = [inst_42962];
var inst_42964 = cljs.core.PersistentHashSet.fromArray(inst_42963,true);
var inst_42965 = cljs.core.remove.call(null,inst_42964,inst_42949);
var inst_42966 = cljs.core.vec.call(null,inst_42965);
var inst_42967 = cljs.core.conj.call(null,inst_42950,inst_42961);
var inst_42949__$1 = inst_42966;
var inst_42950__$1 = inst_42967;
var state_42974__$1 = (function (){var statearr_42982 = state_42974;
(statearr_42982[(7)] = inst_42949__$1);

(statearr_42982[(8)] = inst_42950__$1);

return statearr_42982;
})();
var statearr_42983_42997 = state_42974__$1;
(statearr_42983_42997[(2)] = null);

(statearr_42983_42997[(1)] = (2));


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
});})(c__15789__auto___42991,c))
;
return ((function (switch__15724__auto__,c__15789__auto___42991,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0 = (function (){
var statearr_42987 = [null,null,null,null,null,null,null,null,null];
(statearr_42987[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__);

(statearr_42987[(1)] = (1));

return statearr_42987;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1 = (function (state_42974){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_42974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e42988){if((e42988 instanceof Object)){
var ex__15728__auto__ = e42988;
var statearr_42989_42998 = state_42974;
(statearr_42989_42998[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42999 = state_42974;
state_42974 = G__42999;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = function(state_42974){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1.call(this,state_42974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___42991,c))
})();
var state__15791__auto__ = (function (){var statearr_42990 = f__15790__auto__.call(null);
(statearr_42990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___42991);

return statearr_42990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___42991,c))
);


return c;
});
yaml_table.core.chan_array_of_objects_yaml__GT_table = (function yaml_table$core$chan_array_of_objects_yaml__GT_table(oc,arg2){
var res = cljs.nodejs.require.call(null,"../resources/print-overview-table-from-array.js");
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,res){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,res){
return (function (state_43017){
var state_val_43018 = (state_43017[(1)]);
if((state_val_43018 === (1))){
var state_43017__$1 = state_43017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43017__$1,(2),oc);
} else {
if((state_val_43018 === (2))){
var inst_43014 = (state_43017[(2)]);
var inst_43015 = res.printOverviewTableFromArray(inst_43014,arg2);
var state_43017__$1 = state_43017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43017__$1,inst_43015);
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
var statearr_43022 = [null,null,null,null,null,null,null];
(statearr_43022[(0)] = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__);

(statearr_43022[(1)] = (1));

return statearr_43022;
});
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1 = (function (state_43017){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_43017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e43023){if((e43023 instanceof Object)){
var ex__15728__auto__ = e43023;
var statearr_43024_43026 = state_43017;
(statearr_43024_43026[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43027 = state_43017;
state_43017 = G__43027;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__ = function(state_43017){
switch(arguments.length){
case 0:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1.call(this,state_43017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0;
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1;
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,res))
})();
var state__15791__auto__ = (function (){var statearr_43025 = f__15790__auto__.call(null);
(statearr_43025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_43025;
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
return (function (state_43049){
var state_val_43050 = (state_43049[(1)]);
if((state_val_43050 === (1))){
var inst_43043 = (function (){return ((function (state_val_43050,c__15789__auto__,c,dir){
return (function (file){
return file.endsWith(".dec");
});
;})(state_val_43050,c__15789__auto__,c,dir))
})();
var inst_43044 = files.filter(inst_43043);
var inst_43045 = cljs.core.js__GT_clj.call(null,inst_43044);
var state_43049__$1 = state_43049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43049__$1,(2),c,inst_43045);
} else {
if((state_val_43050 === (2))){
var inst_43047 = (state_43049[(2)]);
var state_43049__$1 = state_43049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43049__$1,inst_43047);
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
var statearr_43054 = [null,null,null,null,null,null,null];
(statearr_43054[(0)] = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__);

(statearr_43054[(1)] = (1));

return statearr_43054;
});
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1 = (function (state_43049){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_43049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e43055){if((e43055 instanceof Object)){
var ex__15728__auto__ = e43055;
var statearr_43056_43058 = state_43049;
(statearr_43056_43058[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43059 = state_43049;
state_43049 = G__43059;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__ = function(state_43049){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1.call(this,state_43049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0;
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1;
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,c,dir))
})();
var state__15791__auto__ = (function (){var statearr_43057 = f__15790__auto__.call(null);
(statearr_43057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_43057;
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
var len__14433__auto___43076 = arguments.length;
var i__14434__auto___43077 = (0);
while(true){
if((i__14434__auto___43077 < len__14433__auto___43076)){
args__14440__auto__.push((arguments[i__14434__auto___43077]));

var G__43078 = (i__14434__auto___43077 + (1));
i__14434__auto___43077 = G__43078;
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
return (function (state_43067){
var state_val_43068 = (state_43067[(1)]);
if((state_val_43068 === (1))){
var state_43067__$1 = state_43067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43067__$1,(2),cv);
} else {
if((state_val_43068 === (2))){
var inst_43062 = (state_43067[(2)]);
var inst_43063 = cljs.core.mapv.call(null,mf,inst_43062);
var inst_43064 = yaml_table.core.vector_with_channels__GT_channel_with_array.call(null,inst_43063);
var inst_43065 = yaml_table.core.chan_array_of_objects_yaml__GT_table.call(null,inst_43064,days);
var state_43067__$1 = state_43067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43067__$1,inst_43065);
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
var statearr_43072 = [null,null,null,null,null,null,null];
(statearr_43072[(0)] = yaml_table$core$state_machine__15725__auto__);

(statearr_43072[(1)] = (1));

return statearr_43072;
});
var yaml_table$core$state_machine__15725__auto____1 = (function (state_43067){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_43067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e43073){if((e43073 instanceof Object)){
var ex__15728__auto__ = e43073;
var statearr_43074_43079 = state_43067;
(statearr_43074_43079[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43080 = state_43067;
state_43067 = G__43080;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$state_machine__15725__auto__ = function(state_43067){
switch(arguments.length){
case 0:
return yaml_table$core$state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$state_machine__15725__auto____1.call(this,state_43067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$state_machine__15725__auto____0;
yaml_table$core$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$state_machine__15725__auto____1;
return yaml_table$core$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,path,days,cv,mf))
})();
var state__15791__auto__ = (function (){var statearr_43075 = f__15790__auto__.call(null);
(statearr_43075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_43075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__,path,days,cv,mf))
);

return c__15789__auto__;
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq43060){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43060));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;

//# sourceMappingURL=core.js.map