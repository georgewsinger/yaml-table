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
yaml_table.config.yaml_config_string__GT_chan_matching_yaml_object = (function yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object(s,ext){
var yaml = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("js-yaml") : cljs.nodejs.require.call(null,"js-yaml"));
var fs = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs"));
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__8735__auto___11954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___11954,yaml,fs,c){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___11954,yaml,fs,c){
return (function (state_11921){
var state_val_11922 = (state_11921[(1)]);
if((state_val_11922 === (1))){
var inst_11918 = (function (){return ((function (state_val_11922,c__8735__auto___11954,yaml,fs,c){
return (function (returned_yaml_object){
var c__8735__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto____$1,state_val_11922,c__8735__auto___11954,yaml,fs,c){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto____$1,state_val_11922,c__8735__auto___11954,yaml,fs,c){
return (function (state_11933){
var state_val_11934 = (state_11933[(1)]);
if((state_val_11934 === (1))){
var inst_11923 = returned_yaml_object.file_extension;
var inst_11924 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11923,ext);
var state_11933__$1 = state_11933;
if(inst_11924){
var statearr_11935_11955 = state_11933__$1;
(statearr_11935_11955[(1)] = (2));

} else {
var statearr_11936_11956 = state_11933__$1;
(statearr_11936_11956[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11934 === (2))){
var state_11933__$1 = state_11933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11933__$1,(5),c,returned_yaml_object);
} else {
if((state_val_11934 === (3))){
var state_11933__$1 = state_11933;
var statearr_11937_11957 = state_11933__$1;
(statearr_11937_11957[(2)] = null);

(statearr_11937_11957[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11934 === (4))){
var inst_11931 = (state_11933[(2)]);
var state_11933__$1 = state_11933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11933__$1,inst_11931);
} else {
if((state_val_11934 === (5))){
var inst_11927 = (state_11933[(2)]);
var inst_11928 = cljs.core.async.close_BANG_(c);
var state_11933__$1 = (function (){var statearr_11938 = state_11933;
(statearr_11938[(7)] = inst_11927);

return statearr_11938;
})();
var statearr_11939_11958 = state_11933__$1;
(statearr_11939_11958[(2)] = inst_11928);

(statearr_11939_11958[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
});})(c__8735__auto____$1,state_val_11922,c__8735__auto___11954,yaml,fs,c))
;
return ((function (switch__8621__auto__,c__8735__auto____$1,state_val_11922,c__8735__auto___11954,yaml,fs,c){
return (function() {
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__ = null;
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____0 = (function (){
var statearr_11943 = [null,null,null,null,null,null,null,null];
(statearr_11943[(0)] = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__);

(statearr_11943[(1)] = (1));

return statearr_11943;
});
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____1 = (function (state_11933){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11933);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11944){if((e11944 instanceof Object)){
var ex__8625__auto__ = e11944;
var statearr_11945_11959 = state_11933;
(statearr_11945_11959[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11933);

return cljs.core.cst$kw$recur;
} else {
throw e11944;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11960 = state_11933;
state_11933 = G__11960;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__ = function(state_11933){
switch(arguments.length){
case 0:
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____1.call(this,state_11933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____0;
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____1;
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto____$1,state_val_11922,c__8735__auto___11954,yaml,fs,c))
})();
var state__8737__auto__ = (function (){var statearr_11946 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto____$1);

return statearr_11946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto____$1,state_val_11922,c__8735__auto___11954,yaml,fs,c))
);

return c__8735__auto____$1;
});
;})(state_val_11922,c__8735__auto___11954,yaml,fs,c))
})();
var inst_11919 = yaml.safeLoadAll(s,inst_11918);
var state_11921__$1 = state_11921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11921__$1,inst_11919);
} else {
return null;
}
});})(c__8735__auto___11954,yaml,fs,c))
;
return ((function (switch__8621__auto__,c__8735__auto___11954,yaml,fs,c){
return (function() {
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__ = null;
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____0 = (function (){
var statearr_11950 = [null,null,null,null,null,null,null];
(statearr_11950[(0)] = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__);

(statearr_11950[(1)] = (1));

return statearr_11950;
});
var yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____1 = (function (state_11921){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11921);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11951){if((e11951 instanceof Object)){
var ex__8625__auto__ = e11951;
var statearr_11952_11961 = state_11921;
(statearr_11952_11961[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11921);

return cljs.core.cst$kw$recur;
} else {
throw e11951;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11962 = state_11921;
state_11921 = G__11962;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__ = function(state_11921){
switch(arguments.length){
case 0:
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____1.call(this,state_11921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____0;
yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto____1;
return yaml_table$config$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___11954,yaml,fs,c))
})();
var state__8737__auto__ = (function (){var statearr_11953 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___11954);

return statearr_11953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___11954,yaml,fs,c))
);


return c;
});
yaml_table.config.yaml_table_config__GT_chan_matching_yaml_object = (function yaml_table$config$yaml_table_config__GT_chan_matching_yaml_object(ext){
return yaml_table.config.yaml_config_string__GT_chan_matching_yaml_object((cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs")).readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext);
});
