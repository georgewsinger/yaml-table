// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('yaml_table.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_();
yaml_table.core.file_path__GT_string_with_contents = (function yaml_table$core$file_path__GT_string_with_contents(path){
var fs = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs"));
return fs.readFileSync(path,"utf8");
});
yaml_table.core.string__GT_yaml_object_chan = (function yaml_table$core$string__GT_yaml_object_chan(string){
var yaml = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("js-yaml") : cljs.nodejs.require.call(null,"js-yaml"));
var fs = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs"));
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__8651__auto___10997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto___10997,yaml,fs,c){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto___10997,yaml,fs,c){
return (function (state_10974){
var state_val_10975 = (state_10974[(1)]);
if((state_val_10975 === (1))){
var inst_10971 = (function (){return ((function (state_val_10975,c__8651__auto___10997,yaml,fs,c){
return (function (returned_yaml_object){
var c__8651__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto____$1,state_val_10975,c__8651__auto___10997,yaml,fs,c){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto____$1,state_val_10975,c__8651__auto___10997,yaml,fs,c){
return (function (state_10980){
var state_val_10981 = (state_10980[(1)]);
if((state_val_10981 === (1))){
var state_10980__$1 = state_10980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10980__$1,(2),c,returned_yaml_object);
} else {
if((state_val_10981 === (2))){
var inst_10977 = (state_10980[(2)]);
var inst_10978 = cljs.core.async.close_BANG_(c);
var state_10980__$1 = (function (){var statearr_10982 = state_10980;
(statearr_10982[(7)] = inst_10977);

return statearr_10982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10980__$1,inst_10978);
} else {
return null;
}
}
});})(c__8651__auto____$1,state_val_10975,c__8651__auto___10997,yaml,fs,c))
;
return ((function (switch__8584__auto__,c__8651__auto____$1,state_val_10975,c__8651__auto___10997,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____0 = (function (){
var statearr_10986 = [null,null,null,null,null,null,null,null];
(statearr_10986[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__);

(statearr_10986[(1)] = (1));

return statearr_10986;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____1 = (function (state_10980){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_10980);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e10987){if((e10987 instanceof Object)){
var ex__8588__auto__ = e10987;
var statearr_10988_10998 = state_10980;
(statearr_10988_10998[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10980);

return cljs.core.cst$kw$recur;
} else {
throw e10987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__10999 = state_10980;
state_10980 = G__10999;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__ = function(state_10980){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____1.call(this,state_10980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto____$1,state_val_10975,c__8651__auto___10997,yaml,fs,c))
})();
var state__8653__auto__ = (function (){var statearr_10989 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_10989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto____$1);

return statearr_10989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto____$1,state_val_10975,c__8651__auto___10997,yaml,fs,c))
);

return c__8651__auto____$1;
});
;})(state_val_10975,c__8651__auto___10997,yaml,fs,c))
})();
var inst_10972 = yaml.safeLoadAll(string,inst_10971);
var state_10974__$1 = state_10974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10974__$1,inst_10972);
} else {
return null;
}
});})(c__8651__auto___10997,yaml,fs,c))
;
return ((function (switch__8584__auto__,c__8651__auto___10997,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____0 = (function (){
var statearr_10993 = [null,null,null,null,null,null,null];
(statearr_10993[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__);

(statearr_10993[(1)] = (1));

return statearr_10993;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____1 = (function (state_10974){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_10974);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e10994){if((e10994 instanceof Object)){
var ex__8588__auto__ = e10994;
var statearr_10995_11000 = state_10974;
(statearr_10995_11000[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10974);

return cljs.core.cst$kw$recur;
} else {
throw e10994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11001 = state_10974;
state_10974 = G__11001;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__ = function(state_10974){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____1.call(this,state_10974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto___10997,yaml,fs,c))
})();
var state__8653__auto__ = (function (){var statearr_10996 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_10996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto___10997);

return statearr_10996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto___10997,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__8651__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto__){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto__){
return (function (state_11013){
var state_val_11014 = (state_11013[(1)]);
if((state_val_11014 === (1))){
var state_11013__$1 = state_11013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11013__$1,c);
} else {
return null;
}
});})(c__8651__auto__))
;
return ((function (switch__8584__auto__,c__8651__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto____0 = (function (){
var statearr_11018 = [null,null,null,null,null,null,null];
(statearr_11018[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto__);

(statearr_11018[(1)] = (1));

return statearr_11018;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto____1 = (function (state_11013){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_11013);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11019){if((e11019 instanceof Object)){
var ex__8588__auto__ = e11019;
var statearr_11020_11022 = state_11013;
(statearr_11020_11022[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11013);

return cljs.core.cst$kw$recur;
} else {
throw e11019;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11023 = state_11013;
state_11013 = G__11023;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto__ = function(state_11013){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto____1.call(this,state_11013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto__))
})();
var state__8653__auto__ = (function (){var statearr_11021 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto__);

return statearr_11021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto__))
);

return c__8651__auto__;
})()], null));
});
yaml_table.core.not_nil_QMARK_ = cljs.core.complement(cljs.core.nil_QMARK_);
yaml_table.core.vector_with_channels__GT_channel_with_array = (function yaml_table$core$vector_with_channels__GT_channel_with_array(vwc){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__8651__auto___11110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto___11110,c){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto___11110,c){
return (function (state_11093){
var state_val_11094 = (state_11093[(1)]);
if((state_val_11094 === (1))){
var inst_11067 = cljs.core.PersistentVector.EMPTY;
var inst_11068 = vwc;
var inst_11069 = inst_11067;
var state_11093__$1 = (function (){var statearr_11095 = state_11093;
(statearr_11095[(7)] = inst_11069);

(statearr_11095[(8)] = inst_11068);

return statearr_11095;
})();
var statearr_11096_11111 = state_11093__$1;
(statearr_11096_11111[(2)] = null);

(statearr_11096_11111[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11094 === (2))){
var inst_11068 = (state_11093[(8)]);
var inst_11071 = cljs.core.empty_QMARK_(inst_11068);
var state_11093__$1 = state_11093;
if(inst_11071){
var statearr_11097_11112 = state_11093__$1;
(statearr_11097_11112[(1)] = (4));

} else {
var statearr_11098_11113 = state_11093__$1;
(statearr_11098_11113[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11094 === (3))){
var inst_11091 = (state_11093[(2)]);
var state_11093__$1 = state_11093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11093__$1,inst_11091);
} else {
if((state_val_11094 === (4))){
var inst_11069 = (state_11093[(7)]);
var inst_11073 = cljs.core.clj__GT_js(inst_11069);
var state_11093__$1 = state_11093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11093__$1,(7),c,inst_11073);
} else {
if((state_val_11094 === (5))){
var inst_11068 = (state_11093[(8)]);
var state_11093__$1 = state_11093;
return cljs.core.async.ioc_alts_BANG_(state_11093__$1,(8),inst_11068);
} else {
if((state_val_11094 === (6))){
var inst_11089 = (state_11093[(2)]);
var state_11093__$1 = state_11093;
var statearr_11099_11114 = state_11093__$1;
(statearr_11099_11114[(2)] = inst_11089);

(statearr_11099_11114[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11094 === (7))){
var inst_11075 = (state_11093[(2)]);
var state_11093__$1 = state_11093;
var statearr_11100_11115 = state_11093__$1;
(statearr_11100_11115[(2)] = inst_11075);

(statearr_11100_11115[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11094 === (8))){
var inst_11069 = (state_11093[(7)]);
var inst_11068 = (state_11093[(8)]);
var inst_11079 = (state_11093[(2)]);
var inst_11080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11079,(0),null);
var inst_11081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11079,(1),null);
var inst_11082 = [inst_11081];
var inst_11083 = cljs.core.PersistentHashSet.fromArray(inst_11082,true);
var inst_11084 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_11083,inst_11068);
var inst_11085 = cljs.core.vec(inst_11084);
var inst_11086 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_11069,inst_11080);
var inst_11068__$1 = inst_11085;
var inst_11069__$1 = inst_11086;
var state_11093__$1 = (function (){var statearr_11101 = state_11093;
(statearr_11101[(7)] = inst_11069__$1);

(statearr_11101[(8)] = inst_11068__$1);

return statearr_11101;
})();
var statearr_11102_11116 = state_11093__$1;
(statearr_11102_11116[(2)] = null);

(statearr_11102_11116[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__8651__auto___11110,c))
;
return ((function (switch__8584__auto__,c__8651__auto___11110,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto____0 = (function (){
var statearr_11106 = [null,null,null,null,null,null,null,null,null];
(statearr_11106[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto__);

(statearr_11106[(1)] = (1));

return statearr_11106;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto____1 = (function (state_11093){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_11093);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11107){if((e11107 instanceof Object)){
var ex__8588__auto__ = e11107;
var statearr_11108_11117 = state_11093;
(statearr_11108_11117[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11093);

return cljs.core.cst$kw$recur;
} else {
throw e11107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11118 = state_11093;
state_11093 = G__11118;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto__ = function(state_11093){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto____1.call(this,state_11093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto___11110,c))
})();
var state__8653__auto__ = (function (){var statearr_11109 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto___11110);

return statearr_11109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto___11110,c))
);


return c;
});
yaml_table.core.chan_array_of_objects_yaml__GT_table = (function yaml_table$core$chan_array_of_objects_yaml__GT_table(oc,arg2){
var res = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("../resources/print-overview-table-from-array.js") : cljs.nodejs.require.call(null,"../resources/print-overview-table-from-array.js"));
var c__8651__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto__,res){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto__,res){
return (function (state_11136){
var state_val_11137 = (state_11136[(1)]);
if((state_val_11137 === (1))){
var state_11136__$1 = state_11136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11136__$1,(2),oc);
} else {
if((state_val_11137 === (2))){
var inst_11133 = (state_11136[(2)]);
var inst_11134 = res.printOverviewTableFromArray(inst_11133,arg2);
var state_11136__$1 = state_11136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11136__$1,inst_11134);
} else {
return null;
}
}
});})(c__8651__auto__,res))
;
return ((function (switch__8584__auto__,c__8651__auto__,res){
return (function() {
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8585__auto__ = null;
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8585__auto____0 = (function (){
var statearr_11141 = [null,null,null,null,null,null,null];
(statearr_11141[(0)] = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8585__auto__);

(statearr_11141[(1)] = (1));

return statearr_11141;
});
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8585__auto____1 = (function (state_11136){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_11136);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11142){if((e11142 instanceof Object)){
var ex__8588__auto__ = e11142;
var statearr_11143_11145 = state_11136;
(statearr_11143_11145[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11136);

return cljs.core.cst$kw$recur;
} else {
throw e11142;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11146 = state_11136;
state_11136 = G__11146;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8585__auto__ = function(state_11136){
switch(arguments.length){
case 0:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8585__auto____1.call(this,state_11136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8585__auto____0;
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8585__auto____1;
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto__,res))
})();
var state__8653__auto__ = (function (){var statearr_11144 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto__);

return statearr_11144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto__,res))
);

return c__8651__auto__;
});
yaml_table.core.path__GT_chan_vec_dec_strings = (function yaml_table$core$path__GT_chan_vec_dec_strings(input_path){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dir = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("node-dir") : cljs.nodejs.require.call(null,"node-dir"));
dir.files(input_path,((function (c,dir){
return (function (err,files){
var c__8651__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto__,c,dir){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto__,c,dir){
return (function (state_11168){
var state_val_11169 = (state_11168[(1)]);
if((state_val_11169 === (1))){
var inst_11162 = (function (){return ((function (state_val_11169,c__8651__auto__,c,dir){
return (function (file){
return file.endsWith(".dec");
});
;})(state_val_11169,c__8651__auto__,c,dir))
})();
var inst_11163 = files.filter(inst_11162);
var inst_11164 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_11163);
var state_11168__$1 = state_11168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11168__$1,(2),c,inst_11164);
} else {
if((state_val_11169 === (2))){
var inst_11166 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11168__$1,inst_11166);
} else {
return null;
}
}
});})(c__8651__auto__,c,dir))
;
return ((function (switch__8584__auto__,c__8651__auto__,c,dir){
return (function() {
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8585__auto__ = null;
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8585__auto____0 = (function (){
var statearr_11173 = [null,null,null,null,null,null,null];
(statearr_11173[(0)] = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8585__auto__);

(statearr_11173[(1)] = (1));

return statearr_11173;
});
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8585__auto____1 = (function (state_11168){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_11168);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11174){if((e11174 instanceof Object)){
var ex__8588__auto__ = e11174;
var statearr_11175_11177 = state_11168;
(statearr_11175_11177[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11168);

return cljs.core.cst$kw$recur;
} else {
throw e11174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11178 = state_11168;
state_11168 = G__11178;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8585__auto__ = function(state_11168){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8585__auto____1.call(this,state_11168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8585__auto____0;
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8585__auto____1;
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto__,c,dir))
})();
var state__8653__auto__ = (function (){var statearr_11176 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto__);

return statearr_11176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto__,c,dir))
);

return c__8651__auto__;
});})(c,dir))
);

return c;
});
yaml_table.core._main = (function yaml_table$core$_main(var_args){
var args__5736__auto__ = [];
var len__5729__auto___11196 = arguments.length;
var i__5730__auto___11197 = (0);
while(true){
if((i__5730__auto___11197 < len__5729__auto___11196)){
args__5736__auto__.push((arguments[i__5730__auto___11197]));

var G__11198 = (i__5730__auto___11197 + (1));
i__5730__auto___11197 = G__11198;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (heh){
var path = [cljs.core.str(cljs.core.first(heh))].join('');
var days = (function (){var G__11180 = cljs.core.second(heh);
return parseInt(G__11180);
})();
var cv = yaml_table.core.path__GT_chan_vec_dec_strings(path);
var mf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(yaml_table.core.string__GT_yaml_object_chan,yaml_table.core.file_path__GT_string_with_contents);
var c__8651__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto__,path,days,cv,mf){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto__,path,days,cv,mf){
return (function (state_11187){
var state_val_11188 = (state_11187[(1)]);
if((state_val_11188 === (1))){
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11187__$1,(2),cv);
} else {
if((state_val_11188 === (2))){
var inst_11182 = (state_11187[(2)]);
var inst_11183 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(mf,inst_11182);
var inst_11184 = yaml_table.core.vector_with_channels__GT_channel_with_array(inst_11183);
var inst_11185 = yaml_table.core.chan_array_of_objects_yaml__GT_table(inst_11184,days);
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11187__$1,inst_11185);
} else {
return null;
}
}
});})(c__8651__auto__,path,days,cv,mf))
;
return ((function (switch__8584__auto__,c__8651__auto__,path,days,cv,mf){
return (function() {
var yaml_table$core$state_machine__8585__auto__ = null;
var yaml_table$core$state_machine__8585__auto____0 = (function (){
var statearr_11192 = [null,null,null,null,null,null,null];
(statearr_11192[(0)] = yaml_table$core$state_machine__8585__auto__);

(statearr_11192[(1)] = (1));

return statearr_11192;
});
var yaml_table$core$state_machine__8585__auto____1 = (function (state_11187){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_11187);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11193){if((e11193 instanceof Object)){
var ex__8588__auto__ = e11193;
var statearr_11194_11199 = state_11187;
(statearr_11194_11199[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11187);

return cljs.core.cst$kw$recur;
} else {
throw e11193;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11200 = state_11187;
state_11187 = G__11200;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$state_machine__8585__auto__ = function(state_11187){
switch(arguments.length){
case 0:
return yaml_table$core$state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$state_machine__8585__auto____1.call(this,state_11187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$state_machine__8585__auto____0;
yaml_table$core$state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$state_machine__8585__auto____1;
return yaml_table$core$state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto__,path,days,cv,mf))
})();
var state__8653__auto__ = (function (){var statearr_11195 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto__);

return statearr_11195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto__,path,days,cv,mf))
);

return c__8651__auto__;
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq11179){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11179));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;
