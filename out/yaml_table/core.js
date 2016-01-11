// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('yaml_table.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('yaml_table.config');
cljs.nodejs.enable_util_print_BANG_();
yaml_table.core.file_path__GT_string_with_contents = (function yaml_table$core$file_path__GT_string_with_contents(path){
var fs = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs"));
return fs.readFileSync(path,"utf8");
});
yaml_table.core.string__GT_yaml_object_chan = (function yaml_table$core$string__GT_yaml_object_chan(string){
var yaml = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("js-yaml") : cljs.nodejs.require.call(null,"js-yaml"));
var fs = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs"));
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__8651__auto___11080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto___11080,yaml,fs,c){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto___11080,yaml,fs,c){
return (function (state_11057){
var state_val_11058 = (state_11057[(1)]);
if((state_val_11058 === (1))){
var inst_11054 = (function (){return ((function (state_val_11058,c__8651__auto___11080,yaml,fs,c){
return (function (returned_yaml_object){
var c__8651__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto____$1,state_val_11058,c__8651__auto___11080,yaml,fs,c){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto____$1,state_val_11058,c__8651__auto___11080,yaml,fs,c){
return (function (state_11063){
var state_val_11064 = (state_11063[(1)]);
if((state_val_11064 === (1))){
var state_11063__$1 = state_11063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11063__$1,(2),c,returned_yaml_object);
} else {
if((state_val_11064 === (2))){
var inst_11060 = (state_11063[(2)]);
var inst_11061 = cljs.core.async.close_BANG_(c);
var state_11063__$1 = (function (){var statearr_11065 = state_11063;
(statearr_11065[(7)] = inst_11060);

return statearr_11065;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11063__$1,inst_11061);
} else {
return null;
}
}
});})(c__8651__auto____$1,state_val_11058,c__8651__auto___11080,yaml,fs,c))
;
return ((function (switch__8584__auto__,c__8651__auto____$1,state_val_11058,c__8651__auto___11080,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____0 = (function (){
var statearr_11069 = [null,null,null,null,null,null,null,null];
(statearr_11069[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__);

(statearr_11069[(1)] = (1));

return statearr_11069;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____1 = (function (state_11063){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_11063);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11070){if((e11070 instanceof Object)){
var ex__8588__auto__ = e11070;
var statearr_11071_11081 = state_11063;
(statearr_11071_11081[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11063);

return cljs.core.cst$kw$recur;
} else {
throw e11070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11082 = state_11063;
state_11063 = G__11082;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__ = function(state_11063){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____1.call(this,state_11063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto____$1,state_val_11058,c__8651__auto___11080,yaml,fs,c))
})();
var state__8653__auto__ = (function (){var statearr_11072 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto____$1);

return statearr_11072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto____$1,state_val_11058,c__8651__auto___11080,yaml,fs,c))
);

return c__8651__auto____$1;
});
;})(state_val_11058,c__8651__auto___11080,yaml,fs,c))
})();
var inst_11055 = yaml.safeLoadAll(string,inst_11054);
var state_11057__$1 = state_11057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11057__$1,inst_11055);
} else {
return null;
}
});})(c__8651__auto___11080,yaml,fs,c))
;
return ((function (switch__8584__auto__,c__8651__auto___11080,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____0 = (function (){
var statearr_11076 = [null,null,null,null,null,null,null];
(statearr_11076[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__);

(statearr_11076[(1)] = (1));

return statearr_11076;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____1 = (function (state_11057){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_11057);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11077){if((e11077 instanceof Object)){
var ex__8588__auto__ = e11077;
var statearr_11078_11083 = state_11057;
(statearr_11078_11083[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11057);

return cljs.core.cst$kw$recur;
} else {
throw e11077;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11084 = state_11057;
state_11057 = G__11084;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__ = function(state_11057){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____1.call(this,state_11057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto___11080,yaml,fs,c))
})();
var state__8653__auto__ = (function (){var statearr_11079 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto___11080);

return statearr_11079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto___11080,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__8651__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto__){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto__){
return (function (state_11096){
var state_val_11097 = (state_11096[(1)]);
if((state_val_11097 === (1))){
var state_11096__$1 = state_11096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11096__$1,c);
} else {
return null;
}
});})(c__8651__auto__))
;
return ((function (switch__8584__auto__,c__8651__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto____0 = (function (){
var statearr_11101 = [null,null,null,null,null,null,null];
(statearr_11101[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto__);

(statearr_11101[(1)] = (1));

return statearr_11101;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto____1 = (function (state_11096){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_11096);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11102){if((e11102 instanceof Object)){
var ex__8588__auto__ = e11102;
var statearr_11103_11105 = state_11096;
(statearr_11103_11105[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11096);

return cljs.core.cst$kw$recur;
} else {
throw e11102;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11106 = state_11096;
state_11096 = G__11106;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto__ = function(state_11096){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto____1.call(this,state_11096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto__))
})();
var state__8653__auto__ = (function (){var statearr_11104 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto__);

return statearr_11104;
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
var c__8651__auto___11193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto___11193,c){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto___11193,c){
return (function (state_11176){
var state_val_11177 = (state_11176[(1)]);
if((state_val_11177 === (1))){
var inst_11150 = cljs.core.PersistentVector.EMPTY;
var inst_11151 = vwc;
var inst_11152 = inst_11150;
var state_11176__$1 = (function (){var statearr_11178 = state_11176;
(statearr_11178[(7)] = inst_11152);

(statearr_11178[(8)] = inst_11151);

return statearr_11178;
})();
var statearr_11179_11194 = state_11176__$1;
(statearr_11179_11194[(2)] = null);

(statearr_11179_11194[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11177 === (2))){
var inst_11151 = (state_11176[(8)]);
var inst_11154 = cljs.core.empty_QMARK_(inst_11151);
var state_11176__$1 = state_11176;
if(inst_11154){
var statearr_11180_11195 = state_11176__$1;
(statearr_11180_11195[(1)] = (4));

} else {
var statearr_11181_11196 = state_11176__$1;
(statearr_11181_11196[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11177 === (3))){
var inst_11174 = (state_11176[(2)]);
var state_11176__$1 = state_11176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11176__$1,inst_11174);
} else {
if((state_val_11177 === (4))){
var inst_11152 = (state_11176[(7)]);
var inst_11156 = cljs.core.clj__GT_js(inst_11152);
var state_11176__$1 = state_11176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11176__$1,(7),c,inst_11156);
} else {
if((state_val_11177 === (5))){
var inst_11151 = (state_11176[(8)]);
var state_11176__$1 = state_11176;
return cljs.core.async.ioc_alts_BANG_(state_11176__$1,(8),inst_11151);
} else {
if((state_val_11177 === (6))){
var inst_11172 = (state_11176[(2)]);
var state_11176__$1 = state_11176;
var statearr_11182_11197 = state_11176__$1;
(statearr_11182_11197[(2)] = inst_11172);

(statearr_11182_11197[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11177 === (7))){
var inst_11158 = (state_11176[(2)]);
var state_11176__$1 = state_11176;
var statearr_11183_11198 = state_11176__$1;
(statearr_11183_11198[(2)] = inst_11158);

(statearr_11183_11198[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11177 === (8))){
var inst_11152 = (state_11176[(7)]);
var inst_11151 = (state_11176[(8)]);
var inst_11162 = (state_11176[(2)]);
var inst_11163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11162,(0),null);
var inst_11164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11162,(1),null);
var inst_11165 = [inst_11164];
var inst_11166 = cljs.core.PersistentHashSet.fromArray(inst_11165,true);
var inst_11167 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_11166,inst_11151);
var inst_11168 = cljs.core.vec(inst_11167);
var inst_11169 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_11152,inst_11163);
var inst_11151__$1 = inst_11168;
var inst_11152__$1 = inst_11169;
var state_11176__$1 = (function (){var statearr_11184 = state_11176;
(statearr_11184[(7)] = inst_11152__$1);

(statearr_11184[(8)] = inst_11151__$1);

return statearr_11184;
})();
var statearr_11185_11199 = state_11176__$1;
(statearr_11185_11199[(2)] = null);

(statearr_11185_11199[(1)] = (2));


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
});})(c__8651__auto___11193,c))
;
return ((function (switch__8584__auto__,c__8651__auto___11193,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto____0 = (function (){
var statearr_11189 = [null,null,null,null,null,null,null,null,null];
(statearr_11189[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto__);

(statearr_11189[(1)] = (1));

return statearr_11189;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto____1 = (function (state_11176){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_11176);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11190){if((e11190 instanceof Object)){
var ex__8588__auto__ = e11190;
var statearr_11191_11200 = state_11176;
(statearr_11191_11200[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11176);

return cljs.core.cst$kw$recur;
} else {
throw e11190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11201 = state_11176;
state_11176 = G__11201;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto__ = function(state_11176){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto____1.call(this,state_11176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto___11193,c))
})();
var state__8653__auto__ = (function (){var statearr_11192 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto___11193);

return statearr_11192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto___11193,c))
);


return c;
});
yaml_table.core.chan_table_package__GT_table = (function yaml_table$core$chan_table_package__GT_table(yaml_config_chan,arr_chan,rows){
var res = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("../resources/print-yaml-table.js") : cljs.nodejs.require.call(null,"../resources/print-yaml-table.js"));
var c__8651__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto__,res){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto__,res){
return (function (state_11224){
var state_val_11225 = (state_11224[(1)]);
if((state_val_11225 === (1))){
var state_11224__$1 = state_11224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11224__$1,(2),yaml_config_chan);
} else {
if((state_val_11225 === (2))){
var inst_11219 = (state_11224[(2)]);
var state_11224__$1 = (function (){var statearr_11226 = state_11224;
(statearr_11226[(7)] = inst_11219);

return statearr_11226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11224__$1,(3),arr_chan);
} else {
if((state_val_11225 === (3))){
var inst_11219 = (state_11224[(7)]);
var inst_11221 = (state_11224[(2)]);
var inst_11222 = res.printYamlTable(inst_11219,inst_11221,rows);
var state_11224__$1 = state_11224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11224__$1,inst_11222);
} else {
return null;
}
}
}
});})(c__8651__auto__,res))
;
return ((function (switch__8584__auto__,c__8651__auto__,res){
return (function() {
var yaml_table$core$chan_table_package__GT_table_$_state_machine__8585__auto__ = null;
var yaml_table$core$chan_table_package__GT_table_$_state_machine__8585__auto____0 = (function (){
var statearr_11230 = [null,null,null,null,null,null,null,null];
(statearr_11230[(0)] = yaml_table$core$chan_table_package__GT_table_$_state_machine__8585__auto__);

(statearr_11230[(1)] = (1));

return statearr_11230;
});
var yaml_table$core$chan_table_package__GT_table_$_state_machine__8585__auto____1 = (function (state_11224){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_11224);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11231){if((e11231 instanceof Object)){
var ex__8588__auto__ = e11231;
var statearr_11232_11234 = state_11224;
(statearr_11232_11234[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11224);

return cljs.core.cst$kw$recur;
} else {
throw e11231;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11235 = state_11224;
state_11224 = G__11235;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$chan_table_package__GT_table_$_state_machine__8585__auto__ = function(state_11224){
switch(arguments.length){
case 0:
return yaml_table$core$chan_table_package__GT_table_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$chan_table_package__GT_table_$_state_machine__8585__auto____1.call(this,state_11224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_table_package__GT_table_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_table_package__GT_table_$_state_machine__8585__auto____0;
yaml_table$core$chan_table_package__GT_table_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_table_package__GT_table_$_state_machine__8585__auto____1;
return yaml_table$core$chan_table_package__GT_table_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto__,res))
})();
var state__8653__auto__ = (function (){var statearr_11233 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto__);

return statearr_11233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto__,res))
);

return c__8651__auto__;
});
yaml_table.core.path__GT_chan_vec_ext_strings = (function yaml_table$core$path__GT_chan_vec_ext_strings(path,ext){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dir = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("node-dir") : cljs.nodejs.require.call(null,"node-dir"));
dir.files(path,((function (c,dir){
return (function (err,files){
var c__8651__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto__,c,dir){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto__,c,dir){
return (function (state_11257){
var state_val_11258 = (state_11257[(1)]);
if((state_val_11258 === (1))){
var inst_11251 = (function (){return ((function (state_val_11258,c__8651__auto__,c,dir){
return (function (file){
return file.endsWith(ext);
});
;})(state_val_11258,c__8651__auto__,c,dir))
})();
var inst_11252 = files.filter(inst_11251);
var inst_11253 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_11252);
var state_11257__$1 = state_11257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11257__$1,(2),c,inst_11253);
} else {
if((state_val_11258 === (2))){
var inst_11255 = (state_11257[(2)]);
var state_11257__$1 = state_11257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11257__$1,inst_11255);
} else {
return null;
}
}
});})(c__8651__auto__,c,dir))
;
return ((function (switch__8584__auto__,c__8651__auto__,c,dir){
return (function() {
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8585__auto__ = null;
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8585__auto____0 = (function (){
var statearr_11262 = [null,null,null,null,null,null,null];
(statearr_11262[(0)] = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8585__auto__);

(statearr_11262[(1)] = (1));

return statearr_11262;
});
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8585__auto____1 = (function (state_11257){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_11257);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11263){if((e11263 instanceof Object)){
var ex__8588__auto__ = e11263;
var statearr_11264_11266 = state_11257;
(statearr_11264_11266[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11257);

return cljs.core.cst$kw$recur;
} else {
throw e11263;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11267 = state_11257;
state_11257 = G__11267;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8585__auto__ = function(state_11257){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8585__auto____1.call(this,state_11257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8585__auto____0;
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8585__auto____1;
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto__,c,dir))
})();
var state__8653__auto__ = (function (){var statearr_11265 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto__);

return statearr_11265;
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
var len__5729__auto___11287 = arguments.length;
var i__5730__auto___11288 = (0);
while(true){
if((i__5730__auto___11288 < len__5729__auto___11287)){
args__5736__auto__.push((arguments[i__5730__auto___11288]));

var G__11289 = (i__5730__auto___11288 + (1));
i__5730__auto___11288 = G__11289;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("minimist") : cljs.nodejs.require.call(null,"minimist"));
var argv = (function (){var G__11269 = cljs.core.clj__GT_js(cljs.core.vec(args));
return (minimist.cljs$core$IFn$_invoke$arity$1 ? minimist.cljs$core$IFn$_invoke$arity$1(G__11269) : minimist.call(null,G__11269));
})();
var ext = (function (){var or__4671__auto__ = argv.e;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "yaml";
}
})();
var path = (function (){var or__4671__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "$HOME";
}
})();
var table_name = (function (){var or__4671__auto__ = (argv["n"]);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "default";
}
})();
var rows = (function (){var or__4671__auto__ = (function (){var G__11271 = argv.r;
return parseInt(G__11271);
})();
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (10);
}
})();
var yaml_config_chan = yaml_table.config.yaml_table_config__GT_chan_matching_yaml_object(table_name);
var cv = yaml_table.core.path__GT_chan_vec_ext_strings(path,ext);
var mf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(yaml_table.core.string__GT_yaml_object_chan,yaml_table.core.file_path__GT_string_with_contents);
var c__8651__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8651__auto__,minimist,argv,ext,path,table_name,rows,yaml_config_chan,cv,mf){
return (function (){
var f__8652__auto__ = (function (){var switch__8584__auto__ = ((function (c__8651__auto__,minimist,argv,ext,path,table_name,rows,yaml_config_chan,cv,mf){
return (function (state_11278){
var state_val_11279 = (state_11278[(1)]);
if((state_val_11279 === (1))){
var state_11278__$1 = state_11278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11278__$1,(2),cv);
} else {
if((state_val_11279 === (2))){
var inst_11273 = (state_11278[(2)]);
var inst_11274 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(mf,inst_11273);
var inst_11275 = yaml_table.core.vector_with_channels__GT_channel_with_array(inst_11274);
var inst_11276 = yaml_table.core.chan_table_package__GT_table(yaml_config_chan,inst_11275,rows);
var state_11278__$1 = state_11278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11278__$1,inst_11276);
} else {
return null;
}
}
});})(c__8651__auto__,minimist,argv,ext,path,table_name,rows,yaml_config_chan,cv,mf))
;
return ((function (switch__8584__auto__,c__8651__auto__,minimist,argv,ext,path,table_name,rows,yaml_config_chan,cv,mf){
return (function() {
var yaml_table$core$state_machine__8585__auto__ = null;
var yaml_table$core$state_machine__8585__auto____0 = (function (){
var statearr_11283 = [null,null,null,null,null,null,null];
(statearr_11283[(0)] = yaml_table$core$state_machine__8585__auto__);

(statearr_11283[(1)] = (1));

return statearr_11283;
});
var yaml_table$core$state_machine__8585__auto____1 = (function (state_11278){
while(true){
var ret_value__8586__auto__ = (function (){try{while(true){
var result__8587__auto__ = switch__8584__auto__(state_11278);
if(cljs.core.keyword_identical_QMARK_(result__8587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8587__auto__;
}
break;
}
}catch (e11284){if((e11284 instanceof Object)){
var ex__8588__auto__ = e11284;
var statearr_11285_11290 = state_11278;
(statearr_11285_11290[(5)] = ex__8588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11278);

return cljs.core.cst$kw$recur;
} else {
throw e11284;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8586__auto__,cljs.core.cst$kw$recur)){
var G__11291 = state_11278;
state_11278 = G__11291;
continue;
} else {
return ret_value__8586__auto__;
}
break;
}
});
yaml_table$core$state_machine__8585__auto__ = function(state_11278){
switch(arguments.length){
case 0:
return yaml_table$core$state_machine__8585__auto____0.call(this);
case 1:
return yaml_table$core$state_machine__8585__auto____1.call(this,state_11278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$state_machine__8585__auto____0;
yaml_table$core$state_machine__8585__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$state_machine__8585__auto____1;
return yaml_table$core$state_machine__8585__auto__;
})()
;})(switch__8584__auto__,c__8651__auto__,minimist,argv,ext,path,table_name,rows,yaml_config_chan,cv,mf))
})();
var state__8653__auto__ = (function (){var statearr_11286 = (f__8652__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8652__auto__.cljs$core$IFn$_invoke$arity$0() : f__8652__auto__.call(null));
(statearr_11286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8651__auto__);

return statearr_11286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8653__auto__);
});})(c__8651__auto__,minimist,argv,ext,path,table_name,rows,yaml_config_chan,cv,mf))
);

return c__8651__auto__;
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq11268){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11268));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;
