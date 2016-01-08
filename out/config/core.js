// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('config.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
config.core.chan_matching_yaml_object__GT_chan_array_columns = (function config$core$chan_matching_yaml_object__GT_chan_array_columns(c1){
var c2 = cljs.core.async.chan.call(null,(1));
var c__15789__auto___42725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___42725,c2){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___42725,c2){
return (function (state_42716){
var state_val_42717 = (state_42716[(1)]);
if((state_val_42717 === (1))){
var state_42716__$1 = state_42716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42716__$1,(3),c1);
} else {
if((state_val_42717 === (2))){
var inst_42714 = (state_42716[(2)]);
var state_42716__$1 = state_42716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42716__$1,inst_42714);
} else {
if((state_val_42717 === (3))){
var inst_42710 = (state_42716[(2)]);
var inst_42711 = inst_42710.options;
var inst_42712 = inst_42711.columns;
var state_42716__$1 = state_42716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42716__$1,(2),c2,inst_42712);
} else {
return null;
}
}
}
});})(c__15789__auto___42725,c2))
;
return ((function (switch__15724__auto__,c__15789__auto___42725,c2){
return (function() {
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__ = null;
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0 = (function (){
var statearr_42721 = [null,null,null,null,null,null,null];
(statearr_42721[(0)] = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__);

(statearr_42721[(1)] = (1));

return statearr_42721;
});
var config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1 = (function (state_42716){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_42716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e42722){if((e42722 instanceof Object)){
var ex__15728__auto__ = e42722;
var statearr_42723_42726 = state_42716;
(statearr_42723_42726[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42727 = state_42716;
state_42716 = G__42727;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__ = function(state_42716){
switch(arguments.length){
case 0:
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1.call(this,state_42716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____0;
config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto____1;
return config$core$chan_matching_yaml_object__GT_chan_array_columns_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___42725,c2))
})();
var state__15791__auto__ = (function (){var statearr_42724 = f__15790__auto__.call(null);
(statearr_42724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___42725);

return statearr_42724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___42725,c2))
);


return c2;
});
config.core.string__GT_num_yaml_docs = (function config$core$string__GT_num_yaml_docs(s){
var x__13713__auto__ = cljs.core.count.call(null,cljs.core.re_seq.call(null,/^---\n/,s));
var y__13714__auto__ = cljs.core.count.call(null,cljs.core.re_seq.call(null,/\n...$/,s));
return ((x__13713__auto__ < y__13714__auto__) ? x__13713__auto__ : y__13714__auto__);
});
config.core.yaml_config_string__GT_chan_matching_yaml_object = (function config$core$yaml_config_string__GT_chan_matching_yaml_object(s,ext){
var yaml = cljs.nodejs.require.call(null,"js-yaml");
var fs = cljs.nodejs.require.call(null,"fs");
var c = cljs.core.async.chan.call(null,(1));
var c__15789__auto___42798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___42798,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___42798,yaml,fs,c){
return (function (state_42766){
var state_val_42767 = (state_42766[(1)]);
if((state_val_42767 === (1))){
var inst_42763 = (function (){return ((function (state_val_42767,c__15789__auto___42798,yaml,fs,c){
return (function (returned_yaml_object){
config.core.heh = returned_yaml_object;

var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_42767,c__15789__auto___42798,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_42767,c__15789__auto___42798,yaml,fs,c){
return (function (state_42778){
var state_val_42779 = (state_42778[(1)]);
if((state_val_42779 === (1))){
var inst_42768 = returned_yaml_object.file_extesion;
var inst_42769 = cljs.core._EQ_.call(null,inst_42768,ext);
var state_42778__$1 = state_42778;
if(inst_42769){
var statearr_42780_42799 = state_42778__$1;
(statearr_42780_42799[(1)] = (2));

} else {
var statearr_42781_42800 = state_42778__$1;
(statearr_42781_42800[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42779 === (2))){
var inst_42771 = cljs.core.println.call(null,"inside if: ",returned_yaml_object);
var state_42778__$1 = state_42778;
var statearr_42782_42801 = state_42778__$1;
(statearr_42782_42801[(2)] = inst_42771);

(statearr_42782_42801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42779 === (3))){
var state_42778__$1 = state_42778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42778__$1,(5),c,returned_yaml_object);
} else {
if((state_val_42779 === (4))){
var inst_42776 = (state_42778[(2)]);
var state_42778__$1 = state_42778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42778__$1,inst_42776);
} else {
if((state_val_42779 === (5))){
var inst_42774 = (state_42778[(2)]);
var state_42778__$1 = state_42778;
var statearr_42783_42802 = state_42778__$1;
(statearr_42783_42802[(2)] = inst_42774);

(statearr_42783_42802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15789__auto____$1,state_val_42767,c__15789__auto___42798,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_42767,c__15789__auto___42798,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_42787 = [null,null,null,null,null,null,null];
(statearr_42787[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_42787[(1)] = (1));

return statearr_42787;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_42778){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_42778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e42788){if((e42788 instanceof Object)){
var ex__15728__auto__ = e42788;
var statearr_42789_42803 = state_42778;
(statearr_42789_42803[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42804 = state_42778;
state_42778 = G__42804;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_42778){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_42778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_42767,c__15789__auto___42798,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_42790 = f__15790__auto__.call(null);
(statearr_42790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_42790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_42767,c__15789__auto___42798,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_42767,c__15789__auto___42798,yaml,fs,c))
})();
var inst_42764 = yaml.safeLoadAll(s,inst_42763);
var state_42766__$1 = state_42766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42766__$1,inst_42764);
} else {
return null;
}
});})(c__15789__auto___42798,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___42798,yaml,fs,c){
return (function() {
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = null;
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0 = (function (){
var statearr_42794 = [null,null,null,null,null,null,null];
(statearr_42794[(0)] = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__);

(statearr_42794[(1)] = (1));

return statearr_42794;
});
var config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1 = (function (state_42766){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_42766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e42795){if((e42795 instanceof Object)){
var ex__15728__auto__ = e42795;
var statearr_42796_42805 = state_42766;
(statearr_42796_42805[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42806 = state_42766;
state_42766 = G__42806;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__ = function(state_42766){
switch(arguments.length){
case 0:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0.call(this);
case 1:
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1.call(this,state_42766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____0;
config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto____1;
return config$core$yaml_config_string__GT_chan_matching_yaml_object_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___42798,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_42797 = f__15790__auto__.call(null);
(statearr_42797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___42798);

return statearr_42797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___42798,yaml,fs,c))
);


return c;
});
config.core.yaml_table_config__GT_chan_array_columns = (function config$core$yaml_table_config__GT_chan_array_columns(ext){
return config.core.chan_matching_yaml_object__GT_chan_array_columns.call(null,config.core.yaml_config_string__GT_chan_matching_yaml_object.call(null,cljs.nodejs.require.call(null,"fs").readFileSync("/home/george/Dropbox/yaml-table/.yaml-table","utf8"),ext));
});
var c__15789__auto___42821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___42821){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___42821){
return (function (state_42812){
var state_val_42813 = (state_42812[(1)]);
if((state_val_42813 === (1))){
var inst_42807 = config.core.yaml_table_config__GT_chan_array_columns.call(null,".dec");
var state_42812__$1 = state_42812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42812__$1,(2),inst_42807);
} else {
if((state_val_42813 === (2))){
var inst_42809 = (state_42812[(2)]);
var inst_42810 = cljs.core.println.call(null,inst_42809);
var state_42812__$1 = state_42812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42812__$1,inst_42810);
} else {
return null;
}
}
});})(c__15789__auto___42821))
;
return ((function (switch__15724__auto__,c__15789__auto___42821){
return (function() {
var config$core$state_machine__15725__auto__ = null;
var config$core$state_machine__15725__auto____0 = (function (){
var statearr_42817 = [null,null,null,null,null,null,null];
(statearr_42817[(0)] = config$core$state_machine__15725__auto__);

(statearr_42817[(1)] = (1));

return statearr_42817;
});
var config$core$state_machine__15725__auto____1 = (function (state_42812){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_42812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e42818){if((e42818 instanceof Object)){
var ex__15728__auto__ = e42818;
var statearr_42819_42822 = state_42812;
(statearr_42819_42822[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42823 = state_42812;
state_42812 = G__42823;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
config$core$state_machine__15725__auto__ = function(state_42812){
switch(arguments.length){
case 0:
return config$core$state_machine__15725__auto____0.call(this);
case 1:
return config$core$state_machine__15725__auto____1.call(this,state_42812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config$core$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = config$core$state_machine__15725__auto____0;
config$core$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = config$core$state_machine__15725__auto____1;
return config$core$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___42821))
})();
var state__15791__auto__ = (function (){var statearr_42820 = f__15790__auto__.call(null);
(statearr_42820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___42821);

return statearr_42820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___42821))
);


//# sourceMappingURL=core.js.map