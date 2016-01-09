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
var c__15789__auto___159905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___159905,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___159905,yaml,fs,c){
return (function (state_159882){
var state_val_159883 = (state_159882[(1)]);
if((state_val_159883 === (1))){
var inst_159879 = (function (){return ((function (state_val_159883,c__15789__auto___159905,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_159883,c__15789__auto___159905,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_159883,c__15789__auto___159905,yaml,fs,c){
return (function (state_159888){
var state_val_159889 = (state_159888[(1)]);
if((state_val_159889 === (1))){
var state_159888__$1 = state_159888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159888__$1,(2),c,returned_yaml_object);
} else {
if((state_val_159889 === (2))){
var inst_159885 = (state_159888[(2)]);
var inst_159886 = cljs.core.async.close_BANG_.call(null,c);
var state_159888__$1 = (function (){var statearr_159890 = state_159888;
(statearr_159890[(7)] = inst_159885);

return statearr_159890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159888__$1,inst_159886);
} else {
return null;
}
}
});})(c__15789__auto____$1,state_val_159883,c__15789__auto___159905,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_159883,c__15789__auto___159905,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_159894 = [null,null,null,null,null,null,null,null];
(statearr_159894[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_159894[(1)] = (1));

return statearr_159894;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_159888){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_159888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e159895){if((e159895 instanceof Object)){
var ex__15728__auto__ = e159895;
var statearr_159896_159906 = state_159888;
(statearr_159896_159906[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e159895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__159907 = state_159888;
state_159888 = G__159907;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_159888){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_159888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_159883,c__15789__auto___159905,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_159897 = f__15790__auto__.call(null);
(statearr_159897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_159897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_159883,c__15789__auto___159905,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_159883,c__15789__auto___159905,yaml,fs,c))
})();
var inst_159880 = yaml.safeLoadAll(string,inst_159879);
var state_159882__$1 = state_159882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159882__$1,inst_159880);
} else {
return null;
}
});})(c__15789__auto___159905,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___159905,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_159901 = [null,null,null,null,null,null,null];
(statearr_159901[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_159901[(1)] = (1));

return statearr_159901;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_159882){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_159882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e159902){if((e159902 instanceof Object)){
var ex__15728__auto__ = e159902;
var statearr_159903_159908 = state_159882;
(statearr_159903_159908[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e159902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__159909 = state_159882;
state_159882 = G__159909;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_159882){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_159882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___159905,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_159904 = f__15790__auto__.call(null);
(statearr_159904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___159905);

return statearr_159904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___159905,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_159921){
var state_val_159922 = (state_159921[(1)]);
if((state_val_159922 === (1))){
var state_159921__$1 = state_159921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159921__$1,c);
} else {
return null;
}
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_159926 = [null,null,null,null,null,null,null];
(statearr_159926[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__);

(statearr_159926[(1)] = (1));

return statearr_159926;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1 = (function (state_159921){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_159921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e159927){if((e159927 instanceof Object)){
var ex__15728__auto__ = e159927;
var statearr_159928_159930 = state_159921;
(statearr_159928_159930[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e159927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__159931 = state_159921;
state_159921 = G__159931;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = function(state_159921){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1.call(this,state_159921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_159929 = f__15790__auto__.call(null);
(statearr_159929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_159929;
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
var c__15789__auto___160018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___160018,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___160018,c){
return (function (state_160001){
var state_val_160002 = (state_160001[(1)]);
if((state_val_160002 === (1))){
var inst_159975 = cljs.core.PersistentVector.EMPTY;
var inst_159976 = vwc;
var inst_159977 = inst_159975;
var state_160001__$1 = (function (){var statearr_160003 = state_160001;
(statearr_160003[(7)] = inst_159976);

(statearr_160003[(8)] = inst_159977);

return statearr_160003;
})();
var statearr_160004_160019 = state_160001__$1;
(statearr_160004_160019[(2)] = null);

(statearr_160004_160019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160002 === (2))){
var inst_159976 = (state_160001[(7)]);
var inst_159979 = cljs.core.empty_QMARK_.call(null,inst_159976);
var state_160001__$1 = state_160001;
if(inst_159979){
var statearr_160005_160020 = state_160001__$1;
(statearr_160005_160020[(1)] = (4));

} else {
var statearr_160006_160021 = state_160001__$1;
(statearr_160006_160021[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160002 === (3))){
var inst_159999 = (state_160001[(2)]);
var state_160001__$1 = state_160001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160001__$1,inst_159999);
} else {
if((state_val_160002 === (4))){
var inst_159977 = (state_160001[(8)]);
var inst_159981 = cljs.core.clj__GT_js.call(null,inst_159977);
var state_160001__$1 = state_160001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_160001__$1,(7),c,inst_159981);
} else {
if((state_val_160002 === (5))){
var inst_159976 = (state_160001[(7)]);
var state_160001__$1 = state_160001;
return cljs.core.async.ioc_alts_BANG_.call(null,state_160001__$1,(8),inst_159976);
} else {
if((state_val_160002 === (6))){
var inst_159997 = (state_160001[(2)]);
var state_160001__$1 = state_160001;
var statearr_160007_160022 = state_160001__$1;
(statearr_160007_160022[(2)] = inst_159997);

(statearr_160007_160022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160002 === (7))){
var inst_159983 = (state_160001[(2)]);
var state_160001__$1 = state_160001;
var statearr_160008_160023 = state_160001__$1;
(statearr_160008_160023[(2)] = inst_159983);

(statearr_160008_160023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160002 === (8))){
var inst_159976 = (state_160001[(7)]);
var inst_159977 = (state_160001[(8)]);
var inst_159987 = (state_160001[(2)]);
var inst_159988 = cljs.core.nth.call(null,inst_159987,(0),null);
var inst_159989 = cljs.core.nth.call(null,inst_159987,(1),null);
var inst_159990 = [inst_159989];
var inst_159991 = cljs.core.PersistentHashSet.fromArray(inst_159990,true);
var inst_159992 = cljs.core.remove.call(null,inst_159991,inst_159976);
var inst_159993 = cljs.core.vec.call(null,inst_159992);
var inst_159994 = cljs.core.conj.call(null,inst_159977,inst_159988);
var inst_159976__$1 = inst_159993;
var inst_159977__$1 = inst_159994;
var state_160001__$1 = (function (){var statearr_160009 = state_160001;
(statearr_160009[(7)] = inst_159976__$1);

(statearr_160009[(8)] = inst_159977__$1);

return statearr_160009;
})();
var statearr_160010_160024 = state_160001__$1;
(statearr_160010_160024[(2)] = null);

(statearr_160010_160024[(1)] = (2));


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
});})(c__15789__auto___160018,c))
;
return ((function (switch__15724__auto__,c__15789__auto___160018,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0 = (function (){
var statearr_160014 = [null,null,null,null,null,null,null,null,null];
(statearr_160014[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__);

(statearr_160014[(1)] = (1));

return statearr_160014;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1 = (function (state_160001){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_160001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e160015){if((e160015 instanceof Object)){
var ex__15728__auto__ = e160015;
var statearr_160016_160025 = state_160001;
(statearr_160016_160025[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e160015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__160026 = state_160001;
state_160001 = G__160026;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = function(state_160001){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1.call(this,state_160001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___160018,c))
})();
var state__15791__auto__ = (function (){var statearr_160017 = f__15790__auto__.call(null);
(statearr_160017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___160018);

return statearr_160017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___160018,c))
);


return c;
});
yaml_table.core.chan_array_of_objects_yaml__GT_table = (function yaml_table$core$chan_array_of_objects_yaml__GT_table(oc,arg2){
var res = cljs.nodejs.require.call(null,"../resources/print-overview-table-from-array.js");
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,res){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,res){
return (function (state_160044){
var state_val_160045 = (state_160044[(1)]);
if((state_val_160045 === (1))){
var state_160044__$1 = state_160044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_160044__$1,(2),oc);
} else {
if((state_val_160045 === (2))){
var inst_160041 = (state_160044[(2)]);
var inst_160042 = res.printOverviewTableFromArray(inst_160041,arg2);
var state_160044__$1 = state_160044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160044__$1,inst_160042);
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
var statearr_160049 = [null,null,null,null,null,null,null];
(statearr_160049[(0)] = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__);

(statearr_160049[(1)] = (1));

return statearr_160049;
});
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1 = (function (state_160044){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_160044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e160050){if((e160050 instanceof Object)){
var ex__15728__auto__ = e160050;
var statearr_160051_160053 = state_160044;
(statearr_160051_160053[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e160050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__160054 = state_160044;
state_160044 = G__160054;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__ = function(state_160044){
switch(arguments.length){
case 0:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1.call(this,state_160044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0;
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1;
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,res))
})();
var state__15791__auto__ = (function (){var statearr_160052 = f__15790__auto__.call(null);
(statearr_160052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_160052;
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
return (function (state_160076){
var state_val_160077 = (state_160076[(1)]);
if((state_val_160077 === (1))){
var inst_160070 = (function (){return ((function (state_val_160077,c__15789__auto__,c,dir){
return (function (file){
return file.endsWith(ext);
});
;})(state_val_160077,c__15789__auto__,c,dir))
})();
var inst_160071 = files.filter(inst_160070);
var inst_160072 = cljs.core.js__GT_clj.call(null,inst_160071);
var state_160076__$1 = state_160076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_160076__$1,(2),c,inst_160072);
} else {
if((state_val_160077 === (2))){
var inst_160074 = (state_160076[(2)]);
var state_160076__$1 = state_160076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160076__$1,inst_160074);
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
var statearr_160081 = [null,null,null,null,null,null,null];
(statearr_160081[(0)] = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__);

(statearr_160081[(1)] = (1));

return statearr_160081;
});
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____1 = (function (state_160076){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_160076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e160082){if((e160082 instanceof Object)){
var ex__15728__auto__ = e160082;
var statearr_160083_160085 = state_160076;
(statearr_160083_160085[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e160082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__160086 = state_160076;
state_160076 = G__160086;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__ = function(state_160076){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____1.call(this,state_160076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____0;
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto____1;
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,c,dir))
})();
var state__15791__auto__ = (function (){var statearr_160084 = f__15790__auto__.call(null);
(statearr_160084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_160084;
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
var len__14433__auto___160088 = arguments.length;
var i__14434__auto___160089 = (0);
while(true){
if((i__14434__auto___160089 < len__14433__auto___160088)){
args__14440__auto__.push((arguments[i__14434__auto___160089]));

var G__160090 = (i__14434__auto___160089 + (1));
i__14434__auto___160089 = G__160090;
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
return null;
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq160087){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq160087));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;

//# sourceMappingURL=core.js.map