// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('config.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
config.core.chan_matching_yaml_object__GT_chan_array_columns = (function config$core$chan_matching_yaml_object__GT_chan_array_columns(c1){
var c2 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__8735__auto___11815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___11815,c2){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___11815,c2){
return (function (state_11806){
var state_val_11807 = (state_11806[(1)]);
if((state_val_11807 === (1))){
var state_11806__$1 = state_11806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11806__$1,(3),c1);
} else {
if((state_val_11807 === (2))){
var inst_11804 = (state_11806[(2)]);
var state_11806__$1 = state_11806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11806__$1,inst_11804);
} else {
if((state_val_11807 === (3))){
var inst_11801 = (state_11806[(2)]);
var inst_11802 = inst_11801.options;
var state_11806__$1 = state_11806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11806__$1,(2),c2,inst_11802);
} else {
return null;
}
}
}
});})(c__8735__auto___11815,c2))
;
return ((function (switch__8621__auto__,c__8735__auto___11815,c2){
return (function() {
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__8622__auto__ = null;
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__8622__auto____0 = (function (){
var statearr_11811 = [null,null,null,null,null,null,null];
(statearr_11811[(0)] = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__8622__auto__);

(statearr_11811[(1)] = (1));

return statearr_11811;
});
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__8622__auto____1 = (function (state_11806){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11806);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11812){if((e11812 instanceof Object)){
var ex__8625__auto__ = e11812;
var statearr_11813_11816 = state_11806;
(statearr_11813_11816[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11806);

return cljs.core.cst$kw$recur;
} else {
throw e11812;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11817 = state_11806;
state_11806 = G__11817;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__8622__auto__ = function(state_11806){
switch(arguments.length){
case 0:
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__8622__auto____0.call(this);
case 1:
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__8622__auto____1.call(this,state_11806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__8622__auto____0;
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__8622__auto____1;
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___11815,c2))
})();
var state__8737__auto__ = (function (){var statearr_11814 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___11815);

return statearr_11814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___11815,c2))
);


return c2;
});
config.core.string__GT_num_yaml_docs = (function config$core$string__GT_num_yaml_docs(s){
var x__5009__auto__ = cljs.core.count(cljs.core.re_seq(/^---\n/,s));
var y__5010__auto__ = cljs.core.count(cljs.core.re_seq(/\n...$/,s));
return ((x__5009__auto__ < y__5010__auto__) ? x__5009__auto__ : y__5010__auto__);
});
config.core.yaml_config_string__GT_chan_matching_yaml_object = (function config$core$yaml_config_string__GT_chan_matching_yaml_object(s,ext){
var yaml = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("js-yaml") : cljs.nodejs.require.call(null,"js-yaml"));
var fs = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs"));
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__8735__auto___11890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___11890,yaml,fs,c){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___11890,yaml,fs,c){
return (function (state_11857){
var state_val_11858 = (state_11857[(1)]);
if((state_val_11858 === (1))){
var inst_11854 = (function (){return ((function (state_val_11858,c__8735__auto___11890,yaml,fs,c){
return (function (returned_yaml_object){
var c__8735__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto____$1,state_val_11858,c__8735__auto___11890,yaml,fs,c){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto____$1,state_val_11858,c__8735__auto___11890,yaml,fs,c){
return (function (state_11869){
var state_val_11870 = (state_11869[(1)]);
if((state_val_11870 === (1))){
var inst_11859 = returned_yaml_object.file_extension;
var inst_11860 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11859,ext);
var state_11869__$1 = state_11869;
if(inst_11860){
var statearr_11871_11891 = state_11869__$1;
(statearr_11871_11891[(1)] = (2));

} else {
var statearr_11872_11892 = state_11869__$1;
(statearr_11872_11892[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11870 === (2))){
var state_11869__$1 = state_11869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11869__$1,(5),c,returned_yaml_object);
} else {
if((state_val_11870 === (3))){
var state_11869__$1 = state_11869;
var statearr_11873_11893 = state_11869__$1;
(statearr_11873_11893[(2)] = null);

(statearr_11873_11893[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11870 === (4))){
var inst_11867 = (state_11869[(2)]);
var state_11869__$1 = state_11869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11869__$1,inst_11867);
} else {
if((state_val_11870 === (5))){
var inst_11863 = (state_11869[(2)]);
var inst_11864 = cljs.core.async.close_BANG_(c);
var state_11869__$1 = (function (){var statearr_11874 = state_11869;
(statearr_11874[(7)] = inst_11863);

return statearr_11874;
})();
var statearr_11875_11894 = state_11869__$1;
(statearr_11875_11894[(2)] = inst_11864);

(statearr_11875_11894[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
});})(c__8735__auto____$1,state_val_11858,c__8735__auto___11890,yaml,fs,c))
;
return ((function (switch__8621__auto__,c__8735__auto____$1,state_val_11858,c__8735__auto___11890,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____0 = (function (){
var statearr_11879 = [null,null,null,null,null,null,null,null];
(statearr_11879[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__);

(statearr_11879[(1)] = (1));

return statearr_11879;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____1 = (function (state_11869){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11869);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11880){if((e11880 instanceof Object)){
var ex__8625__auto__ = e11880;
var statearr_11881_11895 = state_11869;
(statearr_11881_11895[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11869);

return cljs.core.cst$kw$recur;
} else {
throw e11880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11896 = state_11869;
state_11869 = G__11896;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__ = function(state_11869){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____1.call(this,state_11869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto____$1,state_val_11858,c__8735__auto___11890,yaml,fs,c))
})();
var state__8737__auto__ = (function (){var statearr_11882 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto____$1);

return statearr_11882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto____$1,state_val_11858,c__8735__auto___11890,yaml,fs,c))
);

return c__8735__auto____$1;
});
;})(state_val_11858,c__8735__auto___11890,yaml,fs,c))
})();
var inst_11855 = yaml.safeLoadAll(s,inst_11854);
var state_11857__$1 = state_11857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11857__$1,inst_11855);
} else {
return null;
}
});})(c__8735__auto___11890,yaml,fs,c))
;
return ((function (switch__8621__auto__,c__8735__auto___11890,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____0 = (function (){
var statearr_11886 = [null,null,null,null,null,null,null];
(statearr_11886[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__);

(statearr_11886[(1)] = (1));

return statearr_11886;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____1 = (function (state_11857){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11857);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11887){if((e11887 instanceof Object)){
var ex__8625__auto__ = e11887;
var statearr_11888_11897 = state_11857;
(statearr_11888_11897[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11857);

return cljs.core.cst$kw$recur;
} else {
throw e11887;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11898 = state_11857;
state_11857 = G__11898;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__ = function(state_11857){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____1.call(this,state_11857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___11890,yaml,fs,c))
})();
var state__8737__auto__ = (function (){var statearr_11889 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___11890);

return statearr_11889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___11890,yaml,fs,c))
);


return c;
});
config.core.yaml_table_config__GT_chan_array_columns = (function config$core$yaml_table_config__GT_chan_array_columns(ext){
return config.core.chan_matching_yaml_object__GT_chan_array_columns(config.core.yaml_config_string__GT_chan_matching_yaml_object((cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs")).readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext));
});
