// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('yaml_table.config');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
yaml_table.config.string__GT_num_yaml_docs = (function yaml_table$config$string__GT_num_yaml_docs(s){
var x__5009__auto__ = cljs.core.count(cljs.core.re_seq(/^---\n/,s));
var y__5010__auto__ = cljs.core.count(cljs.core.re_seq(/\n...$/,s));
return ((x__5009__auto__ < y__5010__auto__) ? x__5009__auto__ : y__5010__auto__);
});
yaml_table.config.yaml_config_string__GT_chan_matching_yaml_object = (function yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object(s,table_name){
var yaml = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("js-yaml") : cljs.nodejs.require.call(null,"js-yaml"));
var fs = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs"));
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__8651__auto___11017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto___11017,yaml,fs,c){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto___11017,yaml,fs,c){
return (function (state_10984){
var state_val_10985 = (state_10984[(1)]);
if((state_val_10985 === (1))){
var inst_10981 = (function (){return ((function (state_val_10985,c__8651__auto___11017,yaml,fs,c){
return (function (returned_yaml_object){
var c__8651__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto____$1,state_val_10985,c__8651__auto___11017,yaml,fs,c){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto____$1,state_val_10985,c__8651__auto___11017,yaml,fs,c){
return (function (state_10996){
var state_val_10997 = (state_10996[(1)]);
if((state_val_10997 === (1))){
var inst_10986 = (returned_yaml_object["table"]);
var inst_10987 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10986,table_name);
var state_10996__$1 = state_10996;
if(inst_10987){
var statearr_10998_11018 = state_10996__$1;
(statearr_10998_11018[(1)] = (2));

} else {
var statearr_10999_11019 = state_10996__$1;
(statearr_10999_11019[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10997 === (2))){
var state_10996__$1 = state_10996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10996__$1,(5),c,returned_yaml_object);
} else {
if((state_val_10997 === (3))){
var state_10996__$1 = state_10996;
var statearr_11000_11020 = state_10996__$1;
(statearr_11000_11020[(2)] = null);

(statearr_11000_11020[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10997 === (4))){
var inst_10994 = (state_10996[(2)]);
var state_10996__$1 = state_10996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10996__$1,inst_10994);
} else {
if((state_val_10997 === (5))){
var inst_10990 = (state_10996[(2)]);
var inst_10991 = cljs.core.async.close_BANG_(c);
var state_10996__$1 = (function (){var statearr_11001 = state_10996;
(statearr_11001[(7)] = inst_10990);

return statearr_11001;
})();
var statearr_11002_11021 = state_10996__$1;
(statearr_11002_11021[(2)] = inst_10991);

(statearr_11002_11021[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
});})(c__8651__auto____$1,state_val_10985,c__8651__auto___11017,yaml,fs,c))
;
return ((function (switch__8584__auto__,c__8651__auto____$1,state_val_10985,c__8651__auto___11017,yaml,fs,c){
return (function() {
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto__ = null;
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto____0 = (function (){
var statearr_11006 = [null,null,null,null,null,null,null,null];
(statearr_11006[(0)] = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto__);

(statearr_11006[(1)] = (1));

return statearr_11006;
});
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto____1 = (function (state_10996){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_10996);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11007){if((e11007 instanceof Object)){
var ex__8588__auto__ = e11007;
var statearr_11008_11022 = state_10996;
(statearr_11008_11022[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10996);

return cljs.core.cst$kw$recur;
} else {
throw e11007;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11023 = state_10996;
state_10996 = G__11023;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto__ = function(state_10996){
switch(arguments.length){
case 0:
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto____1.call(this,state_10996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto____0;
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto____1;
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto____$1,state_val_10985,c__8651__auto___11017,yaml,fs,c))
})();
var state__8653__auto__ = (function (){var statearr_11009 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto____$1);

return statearr_11009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto____$1,state_val_10985,c__8651__auto___11017,yaml,fs,c))
);

return c__8651__auto____$1;
});
;})(state_val_10985,c__8651__auto___11017,yaml,fs,c))
})();
var inst_10982 = yaml.safeLoadAll(s,inst_10981);
var state_10984__$1 = state_10984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10984__$1,inst_10982);
} else {
return null;
}
});})(c__8651__auto___11017,yaml,fs,c))
;
return ((function (switch__8584__auto__,c__8651__auto___11017,yaml,fs,c){
return (function() {
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto__ = null;
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto____0 = (function (){
var statearr_11013 = [null,null,null,null,null,null,null];
(statearr_11013[(0)] = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto__);

(statearr_11013[(1)] = (1));

return statearr_11013;
});
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto____1 = (function (state_10984){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_10984);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11014){if((e11014 instanceof Object)){
var ex__8588__auto__ = e11014;
var statearr_11015_11024 = state_10984;
(statearr_11015_11024[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10984);

return cljs.core.cst$kw$recur;
} else {
throw e11014;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11025 = state_10984;
state_10984 = G__11025;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto__ = function(state_10984){
switch(arguments.length){
case 0:
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto____1.call(this,state_10984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto____0;
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto____1;
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto___11017,yaml,fs,c))
})();
var state__8653__auto__ = (function (){var statearr_11016 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto___11017);

return statearr_11016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto___11017,yaml,fs,c))
);


return c;
});
yaml_table.config.yaml_table_config__GT_chan_matching_yaml_object = (function yaml_table$config$yaml_table_config__GT_chan_matching_yaml_object(table_name){
return yaml_table.config.yaml_config_string__GT_chan_matching_yaml_object((cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs")).readFileSync([cljs.core.str((cljs.nodejs.process["env"]["HOME"])),cljs.core.str("/.yaml-table")].join(''),"utf8"),table_name);
});
