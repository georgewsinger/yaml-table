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
var c__15789__auto___66150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___66150,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___66150,yaml,fs,c){
return (function (state_66127){
var state_val_66128 = (state_66127[(1)]);
if((state_val_66128 === (1))){
var inst_66124 = (function (){return ((function (state_val_66128,c__15789__auto___66150,yaml,fs,c){
return (function (returned_yaml_object){
var c__15789__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto____$1,state_val_66128,c__15789__auto___66150,yaml,fs,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto____$1,state_val_66128,c__15789__auto___66150,yaml,fs,c){
return (function (state_66133){
var state_val_66134 = (state_66133[(1)]);
if((state_val_66134 === (1))){
var state_66133__$1 = state_66133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66133__$1,(2),c,returned_yaml_object);
} else {
if((state_val_66134 === (2))){
var inst_66130 = (state_66133[(2)]);
var inst_66131 = cljs.core.async.close_BANG_.call(null,c);
var state_66133__$1 = (function (){var statearr_66135 = state_66133;
(statearr_66135[(7)] = inst_66130);

return statearr_66135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66133__$1,inst_66131);
} else {
return null;
}
}
});})(c__15789__auto____$1,state_val_66128,c__15789__auto___66150,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto____$1,state_val_66128,c__15789__auto___66150,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_66139 = [null,null,null,null,null,null,null,null];
(statearr_66139[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_66139[(1)] = (1));

return statearr_66139;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_66133){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_66133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e66140){if((e66140 instanceof Object)){
var ex__15728__auto__ = e66140;
var statearr_66141_66151 = state_66133;
(statearr_66141_66151[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66152 = state_66133;
state_66133 = G__66152;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_66133){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_66133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto____$1,state_val_66128,c__15789__auto___66150,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_66142 = f__15790__auto__.call(null);
(statearr_66142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto____$1);

return statearr_66142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto____$1,state_val_66128,c__15789__auto___66150,yaml,fs,c))
);

return c__15789__auto____$1;
});
;})(state_val_66128,c__15789__auto___66150,yaml,fs,c))
})();
var inst_66125 = yaml.safeLoadAll(string,inst_66124);
var state_66127__$1 = state_66127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66127__$1,inst_66125);
} else {
return null;
}
});})(c__15789__auto___66150,yaml,fs,c))
;
return ((function (switch__15724__auto__,c__15789__auto___66150,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_66146 = [null,null,null,null,null,null,null];
(statearr_66146[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__);

(statearr_66146[(1)] = (1));

return statearr_66146;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1 = (function (state_66127){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_66127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e66147){if((e66147 instanceof Object)){
var ex__15728__auto__ = e66147;
var statearr_66148_66153 = state_66127;
(statearr_66148_66153[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66154 = state_66127;
state_66127 = G__66154;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__ = function(state_66127){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1.call(this,state_66127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___66150,yaml,fs,c))
})();
var state__15791__auto__ = (function (){var statearr_66149 = f__15790__auto__.call(null);
(statearr_66149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___66150);

return statearr_66149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___66150,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__){
return (function (state_66166){
var state_val_66167 = (state_66166[(1)]);
if((state_val_66167 === (1))){
var state_66166__$1 = state_66166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66166__$1,c);
} else {
return null;
}
});})(c__15789__auto__))
;
return ((function (switch__15724__auto__,c__15789__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0 = (function (){
var statearr_66171 = [null,null,null,null,null,null,null];
(statearr_66171[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__);

(statearr_66171[(1)] = (1));

return statearr_66171;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1 = (function (state_66166){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_66166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e66172){if((e66172 instanceof Object)){
var ex__15728__auto__ = e66172;
var statearr_66173_66175 = state_66166;
(statearr_66173_66175[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66176 = state_66166;
state_66166 = G__66176;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__ = function(state_66166){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1.call(this,state_66166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__))
})();
var state__15791__auto__ = (function (){var statearr_66174 = f__15790__auto__.call(null);
(statearr_66174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_66174;
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
var c__15789__auto___66263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto___66263,c){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto___66263,c){
return (function (state_66246){
var state_val_66247 = (state_66246[(1)]);
if((state_val_66247 === (1))){
var inst_66220 = cljs.core.PersistentVector.EMPTY;
var inst_66221 = vwc;
var inst_66222 = inst_66220;
var state_66246__$1 = (function (){var statearr_66248 = state_66246;
(statearr_66248[(7)] = inst_66222);

(statearr_66248[(8)] = inst_66221);

return statearr_66248;
})();
var statearr_66249_66264 = state_66246__$1;
(statearr_66249_66264[(2)] = null);

(statearr_66249_66264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66247 === (2))){
var inst_66221 = (state_66246[(8)]);
var inst_66224 = cljs.core.empty_QMARK_.call(null,inst_66221);
var state_66246__$1 = state_66246;
if(inst_66224){
var statearr_66250_66265 = state_66246__$1;
(statearr_66250_66265[(1)] = (4));

} else {
var statearr_66251_66266 = state_66246__$1;
(statearr_66251_66266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66247 === (3))){
var inst_66244 = (state_66246[(2)]);
var state_66246__$1 = state_66246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66246__$1,inst_66244);
} else {
if((state_val_66247 === (4))){
var inst_66222 = (state_66246[(7)]);
var inst_66226 = cljs.core.clj__GT_js.call(null,inst_66222);
var state_66246__$1 = state_66246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66246__$1,(7),c,inst_66226);
} else {
if((state_val_66247 === (5))){
var inst_66221 = (state_66246[(8)]);
var state_66246__$1 = state_66246;
return cljs.core.async.ioc_alts_BANG_.call(null,state_66246__$1,(8),inst_66221);
} else {
if((state_val_66247 === (6))){
var inst_66242 = (state_66246[(2)]);
var state_66246__$1 = state_66246;
var statearr_66252_66267 = state_66246__$1;
(statearr_66252_66267[(2)] = inst_66242);

(statearr_66252_66267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66247 === (7))){
var inst_66228 = (state_66246[(2)]);
var state_66246__$1 = state_66246;
var statearr_66253_66268 = state_66246__$1;
(statearr_66253_66268[(2)] = inst_66228);

(statearr_66253_66268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66247 === (8))){
var inst_66222 = (state_66246[(7)]);
var inst_66221 = (state_66246[(8)]);
var inst_66232 = (state_66246[(2)]);
var inst_66233 = cljs.core.nth.call(null,inst_66232,(0),null);
var inst_66234 = cljs.core.nth.call(null,inst_66232,(1),null);
var inst_66235 = [inst_66234];
var inst_66236 = cljs.core.PersistentHashSet.fromArray(inst_66235,true);
var inst_66237 = cljs.core.remove.call(null,inst_66236,inst_66221);
var inst_66238 = cljs.core.vec.call(null,inst_66237);
var inst_66239 = cljs.core.conj.call(null,inst_66222,inst_66233);
var inst_66221__$1 = inst_66238;
var inst_66222__$1 = inst_66239;
var state_66246__$1 = (function (){var statearr_66254 = state_66246;
(statearr_66254[(7)] = inst_66222__$1);

(statearr_66254[(8)] = inst_66221__$1);

return statearr_66254;
})();
var statearr_66255_66269 = state_66246__$1;
(statearr_66255_66269[(2)] = null);

(statearr_66255_66269[(1)] = (2));


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
});})(c__15789__auto___66263,c))
;
return ((function (switch__15724__auto__,c__15789__auto___66263,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0 = (function (){
var statearr_66259 = [null,null,null,null,null,null,null,null,null];
(statearr_66259[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__);

(statearr_66259[(1)] = (1));

return statearr_66259;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1 = (function (state_66246){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_66246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e66260){if((e66260 instanceof Object)){
var ex__15728__auto__ = e66260;
var statearr_66261_66270 = state_66246;
(statearr_66261_66270[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66271 = state_66246;
state_66246 = G__66271;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__ = function(state_66246){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1.call(this,state_66246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto___66263,c))
})();
var state__15791__auto__ = (function (){var statearr_66262 = f__15790__auto__.call(null);
(statearr_66262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto___66263);

return statearr_66262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto___66263,c))
);


return c;
});
yaml_table.core.chan_array_of_objects_yaml__GT_table = (function yaml_table$core$chan_array_of_objects_yaml__GT_table(oc,arg2){
var res = cljs.nodejs.require.call(null,"../resources/print-overview-table-from-array.js");
var c__15789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15789__auto__,res){
return (function (){
var f__15790__auto__ = (function (){var switch__15724__auto__ = ((function (c__15789__auto__,res){
return (function (state_66289){
var state_val_66290 = (state_66289[(1)]);
if((state_val_66290 === (1))){
var state_66289__$1 = state_66289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66289__$1,(2),oc);
} else {
if((state_val_66290 === (2))){
var inst_66286 = (state_66289[(2)]);
var inst_66287 = res.printOverviewTableFromArray(inst_66286,arg2);
var state_66289__$1 = state_66289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66289__$1,inst_66287);
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
var statearr_66294 = [null,null,null,null,null,null,null];
(statearr_66294[(0)] = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__);

(statearr_66294[(1)] = (1));

return statearr_66294;
});
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1 = (function (state_66289){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_66289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e66295){if((e66295 instanceof Object)){
var ex__15728__auto__ = e66295;
var statearr_66296_66298 = state_66289;
(statearr_66296_66298[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66299 = state_66289;
state_66289 = G__66299;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__ = function(state_66289){
switch(arguments.length){
case 0:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1.call(this,state_66289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____0;
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto____1;
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,res))
})();
var state__15791__auto__ = (function (){var statearr_66297 = f__15790__auto__.call(null);
(statearr_66297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_66297;
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
return (function (state_66321){
var state_val_66322 = (state_66321[(1)]);
if((state_val_66322 === (1))){
var inst_66315 = (function (){return ((function (state_val_66322,c__15789__auto__,c,dir){
return (function (file){
return file.endsWith(".dec");
});
;})(state_val_66322,c__15789__auto__,c,dir))
})();
var inst_66316 = files.filter(inst_66315);
var inst_66317 = cljs.core.js__GT_clj.call(null,inst_66316);
var state_66321__$1 = state_66321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66321__$1,(2),c,inst_66317);
} else {
if((state_val_66322 === (2))){
var inst_66319 = (state_66321[(2)]);
var state_66321__$1 = state_66321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66321__$1,inst_66319);
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
var statearr_66326 = [null,null,null,null,null,null,null];
(statearr_66326[(0)] = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__);

(statearr_66326[(1)] = (1));

return statearr_66326;
});
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1 = (function (state_66321){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_66321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e66327){if((e66327 instanceof Object)){
var ex__15728__auto__ = e66327;
var statearr_66328_66330 = state_66321;
(statearr_66328_66330[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66331 = state_66321;
state_66321 = G__66331;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__ = function(state_66321){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1.call(this,state_66321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____0;
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto____1;
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,c,dir))
})();
var state__15791__auto__ = (function (){var statearr_66329 = f__15790__auto__.call(null);
(statearr_66329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_66329;
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
var len__14433__auto___66348 = arguments.length;
var i__14434__auto___66349 = (0);
while(true){
if((i__14434__auto___66349 < len__14433__auto___66348)){
args__14440__auto__.push((arguments[i__14434__auto___66349]));

var G__66350 = (i__14434__auto___66349 + (1));
i__14434__auto___66349 = G__66350;
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
return (function (state_66339){
var state_val_66340 = (state_66339[(1)]);
if((state_val_66340 === (1))){
var state_66339__$1 = state_66339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66339__$1,(2),cv);
} else {
if((state_val_66340 === (2))){
var inst_66334 = (state_66339[(2)]);
var inst_66335 = cljs.core.mapv.call(null,mf,inst_66334);
var inst_66336 = yaml_table.core.vector_with_channels__GT_channel_with_array.call(null,inst_66335);
var inst_66337 = yaml_table.core.chan_array_of_objects_yaml__GT_table.call(null,inst_66336,days);
var state_66339__$1 = state_66339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66339__$1,inst_66337);
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
var statearr_66344 = [null,null,null,null,null,null,null];
(statearr_66344[(0)] = yaml_table$core$state_machine__15725__auto__);

(statearr_66344[(1)] = (1));

return statearr_66344;
});
var yaml_table$core$state_machine__15725__auto____1 = (function (state_66339){
while(true){
var ret_value__15726__auto__ = (function (){try{while(true){
var result__15727__auto__ = switch__15724__auto__.call(null,state_66339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15727__auto__;
}
break;
}
}catch (e66345){if((e66345 instanceof Object)){
var ex__15728__auto__ = e66345;
var statearr_66346_66351 = state_66339;
(statearr_66346_66351[(5)] = ex__15728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66352 = state_66339;
state_66339 = G__66352;
continue;
} else {
return ret_value__15726__auto__;
}
break;
}
});
yaml_table$core$state_machine__15725__auto__ = function(state_66339){
switch(arguments.length){
case 0:
return yaml_table$core$state_machine__15725__auto____0.call(this);
case 1:
return yaml_table$core$state_machine__15725__auto____1.call(this,state_66339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$state_machine__15725__auto____0;
yaml_table$core$state_machine__15725__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$state_machine__15725__auto____1;
return yaml_table$core$state_machine__15725__auto__;
})()
;})(switch__15724__auto__,c__15789__auto__,path,days,cv,mf))
})();
var state__15791__auto__ = (function (){var statearr_66347 = f__15790__auto__.call(null);
(statearr_66347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15789__auto__);

return statearr_66347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15791__auto__);
});})(c__15789__auto__,path,days,cv,mf))
);

return c__15789__auto__;
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq66332){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66332));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;

//# sourceMappingURL=core.js.map