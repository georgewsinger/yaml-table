// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('yaml_table.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('yaml_table.config');
cljs.nodejs.enable_util_print_BANG_.call(null);
yaml_table.core.file_path__GT_string_with_contents = (function yaml_table$core$file_path__GT_string_with_contents(path){
var fs = cljs.nodejs.require.call(null,"fs");
return fs.readFileSync(path,"utf8");
});
yaml_table.core.string__GT_yaml_object_chan = (function yaml_table$core$string__GT_yaml_object_chan(string){
var yaml = cljs.nodejs.require.call(null,"js-yaml");
var fs = cljs.nodejs.require.call(null,"fs");
var c = cljs.core.async.chan.call(null,(1));
var c__15731__auto___18794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___18794,yaml,fs,c){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___18794,yaml,fs,c){
return (function (state_18771){
var state_val_18772 = (state_18771[(1)]);
if((state_val_18772 === (1))){
var inst_18768 = (function (){return ((function (state_val_18772,c__15731__auto___18794,yaml,fs,c){
return (function (returned_yaml_object){
var c__15731__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto____$1,state_val_18772,c__15731__auto___18794,yaml,fs,c){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto____$1,state_val_18772,c__15731__auto___18794,yaml,fs,c){
return (function (state_18777){
var state_val_18778 = (state_18777[(1)]);
if((state_val_18778 === (1))){
var state_18777__$1 = state_18777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18777__$1,(2),c,returned_yaml_object);
} else {
if((state_val_18778 === (2))){
var inst_18774 = (state_18777[(2)]);
var inst_18775 = cljs.core.async.close_BANG_.call(null,c);
var state_18777__$1 = (function (){var statearr_18779 = state_18777;
(statearr_18779[(7)] = inst_18774);

return statearr_18779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18777__$1,inst_18775);
} else {
return null;
}
}
});})(c__15731__auto____$1,state_val_18772,c__15731__auto___18794,yaml,fs,c))
;
return ((function (switch__15710__auto__,c__15731__auto____$1,state_val_18772,c__15731__auto___18794,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto____0 = (function (){
var statearr_18783 = [null,null,null,null,null,null,null,null];
(statearr_18783[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto__);

(statearr_18783[(1)] = (1));

return statearr_18783;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto____1 = (function (state_18777){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18784){if((e18784 instanceof Object)){
var ex__15714__auto__ = e18784;
var statearr_18785_18795 = state_18777;
(statearr_18785_18795[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18796 = state_18777;
state_18777 = G__18796;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto__ = function(state_18777){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto____1.call(this,state_18777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto____$1,state_val_18772,c__15731__auto___18794,yaml,fs,c))
})();
var state__15733__auto__ = (function (){var statearr_18786 = f__15732__auto__.call(null);
(statearr_18786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto____$1);

return statearr_18786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto____$1,state_val_18772,c__15731__auto___18794,yaml,fs,c))
);

return c__15731__auto____$1;
});
;})(state_val_18772,c__15731__auto___18794,yaml,fs,c))
})();
var inst_18769 = yaml.safeLoadAll(string,inst_18768);
var state_18771__$1 = state_18771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18771__$1,inst_18769);
} else {
return null;
}
});})(c__15731__auto___18794,yaml,fs,c))
;
return ((function (switch__15710__auto__,c__15731__auto___18794,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto____0 = (function (){
var statearr_18790 = [null,null,null,null,null,null,null];
(statearr_18790[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto__);

(statearr_18790[(1)] = (1));

return statearr_18790;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto____1 = (function (state_18771){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18791){if((e18791 instanceof Object)){
var ex__15714__auto__ = e18791;
var statearr_18792_18797 = state_18771;
(statearr_18792_18797[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18798 = state_18771;
state_18771 = G__18798;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto__ = function(state_18771){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto____1.call(this,state_18771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___18794,yaml,fs,c))
})();
var state__15733__auto__ = (function (){var statearr_18793 = f__15732__auto__.call(null);
(statearr_18793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___18794);

return statearr_18793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___18794,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__15731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto__){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto__){
return (function (state_18810){
var state_val_18811 = (state_18810[(1)]);
if((state_val_18811 === (1))){
var state_18810__$1 = state_18810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18810__$1,c);
} else {
return null;
}
});})(c__15731__auto__))
;
return ((function (switch__15710__auto__,c__15731__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__15711__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__15711__auto____0 = (function (){
var statearr_18815 = [null,null,null,null,null,null,null];
(statearr_18815[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__15711__auto__);

(statearr_18815[(1)] = (1));

return statearr_18815;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__15711__auto____1 = (function (state_18810){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18816){if((e18816 instanceof Object)){
var ex__15714__auto__ = e18816;
var statearr_18817_18819 = state_18810;
(statearr_18817_18819[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18820 = state_18810;
state_18810 = G__18820;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__15711__auto__ = function(state_18810){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15711__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__15711__auto____1.call(this,state_18810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__15711__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__15711__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto__))
})();
var state__15733__auto__ = (function (){var statearr_18818 = f__15732__auto__.call(null);
(statearr_18818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto__);

return statearr_18818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto__))
);

return c__15731__auto__;
})()], null));
});
yaml_table.core.not_nil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
yaml_table.core.vector_with_channels__GT_channel_with_array = (function yaml_table$core$vector_with_channels__GT_channel_with_array(vwc){
var c = cljs.core.async.chan.call(null,(1));
var c__15731__auto___18907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto___18907,c){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto___18907,c){
return (function (state_18890){
var state_val_18891 = (state_18890[(1)]);
if((state_val_18891 === (1))){
var inst_18864 = cljs.core.PersistentVector.EMPTY;
var inst_18865 = vwc;
var inst_18866 = inst_18864;
var state_18890__$1 = (function (){var statearr_18892 = state_18890;
(statearr_18892[(7)] = inst_18865);

(statearr_18892[(8)] = inst_18866);

return statearr_18892;
})();
var statearr_18893_18908 = state_18890__$1;
(statearr_18893_18908[(2)] = null);

(statearr_18893_18908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18891 === (2))){
var inst_18865 = (state_18890[(7)]);
var inst_18868 = cljs.core.empty_QMARK_.call(null,inst_18865);
var state_18890__$1 = state_18890;
if(inst_18868){
var statearr_18894_18909 = state_18890__$1;
(statearr_18894_18909[(1)] = (4));

} else {
var statearr_18895_18910 = state_18890__$1;
(statearr_18895_18910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18891 === (3))){
var inst_18888 = (state_18890[(2)]);
var state_18890__$1 = state_18890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18890__$1,inst_18888);
} else {
if((state_val_18891 === (4))){
var inst_18866 = (state_18890[(8)]);
var inst_18870 = cljs.core.clj__GT_js.call(null,inst_18866);
var state_18890__$1 = state_18890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18890__$1,(7),c,inst_18870);
} else {
if((state_val_18891 === (5))){
var inst_18865 = (state_18890[(7)]);
var state_18890__$1 = state_18890;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18890__$1,(8),inst_18865);
} else {
if((state_val_18891 === (6))){
var inst_18886 = (state_18890[(2)]);
var state_18890__$1 = state_18890;
var statearr_18896_18911 = state_18890__$1;
(statearr_18896_18911[(2)] = inst_18886);

(statearr_18896_18911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18891 === (7))){
var inst_18872 = (state_18890[(2)]);
var state_18890__$1 = state_18890;
var statearr_18897_18912 = state_18890__$1;
(statearr_18897_18912[(2)] = inst_18872);

(statearr_18897_18912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18891 === (8))){
var inst_18865 = (state_18890[(7)]);
var inst_18866 = (state_18890[(8)]);
var inst_18876 = (state_18890[(2)]);
var inst_18877 = cljs.core.nth.call(null,inst_18876,(0),null);
var inst_18878 = cljs.core.nth.call(null,inst_18876,(1),null);
var inst_18879 = [inst_18878];
var inst_18880 = cljs.core.PersistentHashSet.fromArray(inst_18879,true);
var inst_18881 = cljs.core.remove.call(null,inst_18880,inst_18865);
var inst_18882 = cljs.core.vec.call(null,inst_18881);
var inst_18883 = cljs.core.conj.call(null,inst_18866,inst_18877);
var inst_18865__$1 = inst_18882;
var inst_18866__$1 = inst_18883;
var state_18890__$1 = (function (){var statearr_18898 = state_18890;
(statearr_18898[(7)] = inst_18865__$1);

(statearr_18898[(8)] = inst_18866__$1);

return statearr_18898;
})();
var statearr_18899_18913 = state_18890__$1;
(statearr_18899_18913[(2)] = null);

(statearr_18899_18913[(1)] = (2));


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
});})(c__15731__auto___18907,c))
;
return ((function (switch__15710__auto__,c__15731__auto___18907,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15711__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15711__auto____0 = (function (){
var statearr_18903 = [null,null,null,null,null,null,null,null,null];
(statearr_18903[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15711__auto__);

(statearr_18903[(1)] = (1));

return statearr_18903;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15711__auto____1 = (function (state_18890){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18904){if((e18904 instanceof Object)){
var ex__15714__auto__ = e18904;
var statearr_18905_18914 = state_18890;
(statearr_18905_18914[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18915 = state_18890;
state_18890 = G__18915;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15711__auto__ = function(state_18890){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15711__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15711__auto____1.call(this,state_18890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15711__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15711__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto___18907,c))
})();
var state__15733__auto__ = (function (){var statearr_18906 = f__15732__auto__.call(null);
(statearr_18906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto___18907);

return statearr_18906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto___18907,c))
);


return c;
});
yaml_table.core.chan_table_package__GT_table = (function yaml_table$core$chan_table_package__GT_table(yaml_config_chan,arr_chan,rows){
var res = cljs.nodejs.require.call(null,"../resources/print-yaml-table.js");
var c__15731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto__,res){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto__,res){
return (function (state_18938){
var state_val_18939 = (state_18938[(1)]);
if((state_val_18939 === (1))){
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18938__$1,(2),yaml_config_chan);
} else {
if((state_val_18939 === (2))){
var inst_18933 = (state_18938[(2)]);
var state_18938__$1 = (function (){var statearr_18940 = state_18938;
(statearr_18940[(7)] = inst_18933);

return statearr_18940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18938__$1,(3),arr_chan);
} else {
if((state_val_18939 === (3))){
var inst_18933 = (state_18938[(7)]);
var inst_18935 = (state_18938[(2)]);
var inst_18936 = res.printYamlTable(inst_18933,inst_18935,rows);
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18938__$1,inst_18936);
} else {
return null;
}
}
}
});})(c__15731__auto__,res))
;
return ((function (switch__15710__auto__,c__15731__auto__,res){
return (function() {
var yaml_table$core$chan_table_package__GT_table_$_state_machine__15711__auto__ = null;
var yaml_table$core$chan_table_package__GT_table_$_state_machine__15711__auto____0 = (function (){
var statearr_18944 = [null,null,null,null,null,null,null,null];
(statearr_18944[(0)] = yaml_table$core$chan_table_package__GT_table_$_state_machine__15711__auto__);

(statearr_18944[(1)] = (1));

return statearr_18944;
});
var yaml_table$core$chan_table_package__GT_table_$_state_machine__15711__auto____1 = (function (state_18938){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18945){if((e18945 instanceof Object)){
var ex__15714__auto__ = e18945;
var statearr_18946_18948 = state_18938;
(statearr_18946_18948[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18949 = state_18938;
state_18938 = G__18949;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
yaml_table$core$chan_table_package__GT_table_$_state_machine__15711__auto__ = function(state_18938){
switch(arguments.length){
case 0:
return yaml_table$core$chan_table_package__GT_table_$_state_machine__15711__auto____0.call(this);
case 1:
return yaml_table$core$chan_table_package__GT_table_$_state_machine__15711__auto____1.call(this,state_18938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_table_package__GT_table_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_table_package__GT_table_$_state_machine__15711__auto____0;
yaml_table$core$chan_table_package__GT_table_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_table_package__GT_table_$_state_machine__15711__auto____1;
return yaml_table$core$chan_table_package__GT_table_$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto__,res))
})();
var state__15733__auto__ = (function (){var statearr_18947 = f__15732__auto__.call(null);
(statearr_18947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto__);

return statearr_18947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto__,res))
);

return c__15731__auto__;
});
yaml_table.core.path__GT_chan_vec_ext_strings = (function yaml_table$core$path__GT_chan_vec_ext_strings(path,ext){
var c = cljs.core.async.chan.call(null,(1));
var dir = cljs.nodejs.require.call(null,"node-dir");
dir.files(path,((function (c,dir){
return (function (err,files){
var c__15731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto__,c,dir){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto__,c,dir){
return (function (state_18971){
var state_val_18972 = (state_18971[(1)]);
if((state_val_18972 === (1))){
var inst_18965 = (function (){return ((function (state_val_18972,c__15731__auto__,c,dir){
return (function (file){
return file.endsWith(ext);
});
;})(state_val_18972,c__15731__auto__,c,dir))
})();
var inst_18966 = files.filter(inst_18965);
var inst_18967 = cljs.core.js__GT_clj.call(null,inst_18966);
var state_18971__$1 = state_18971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18971__$1,(2),c,inst_18967);
} else {
if((state_val_18972 === (2))){
var inst_18969 = (state_18971[(2)]);
var state_18971__$1 = state_18971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18971__$1,inst_18969);
} else {
return null;
}
}
});})(c__15731__auto__,c,dir))
;
return ((function (switch__15710__auto__,c__15731__auto__,c,dir){
return (function() {
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15711__auto__ = null;
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15711__auto____0 = (function (){
var statearr_18976 = [null,null,null,null,null,null,null];
(statearr_18976[(0)] = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15711__auto__);

(statearr_18976[(1)] = (1));

return statearr_18976;
});
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15711__auto____1 = (function (state_18971){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18977){if((e18977 instanceof Object)){
var ex__15714__auto__ = e18977;
var statearr_18978_18980 = state_18971;
(statearr_18978_18980[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18981 = state_18971;
state_18971 = G__18981;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15711__auto__ = function(state_18971){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15711__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15711__auto____1.call(this,state_18971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15711__auto____0;
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15711__auto____1;
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto__,c,dir))
})();
var state__15733__auto__ = (function (){var statearr_18979 = f__15732__auto__.call(null);
(statearr_18979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto__);

return statearr_18979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto__,c,dir))
);

return c__15731__auto__;
});})(c,dir))
);

return c;
});
yaml_table.core._main = (function yaml_table$core$_main(var_args){
var args__14440__auto__ = [];
var len__14433__auto___18998 = arguments.length;
var i__14434__auto___18999 = (0);
while(true){
if((i__14434__auto___18999 < len__14433__auto___18998)){
args__14440__auto__.push((arguments[i__14434__auto___18999]));

var G__19000 = (i__14434__auto___18999 + (1));
i__14434__auto___18999 = G__19000;
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
return "$HOME";
}
})();
var table_name = (function (){var or__13375__auto__ = (argv["n"]);
if(cljs.core.truth_(or__13375__auto__)){
return or__13375__auto__;
} else {
return "default";
}
})();
var rows = (function (){var or__13375__auto__ = parseInt(argv.r);
if(cljs.core.truth_(or__13375__auto__)){
return or__13375__auto__;
} else {
return (10);
}
})();
var yaml_config_chan = yaml_table.config.yaml_table_config__GT_chan_matching_yaml_object.call(null,table_name);
var cv = yaml_table.core.path__GT_chan_vec_ext_strings.call(null,path,ext);
var mf = cljs.core.comp.call(null,yaml_table.core.string__GT_yaml_object_chan,yaml_table.core.file_path__GT_string_with_contents);
var c__15731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15731__auto__,minimist,argv,ext,path,table_name,rows,yaml_config_chan,cv,mf){
return (function (){
var f__15732__auto__ = (function (){var switch__15710__auto__ = ((function (c__15731__auto__,minimist,argv,ext,path,table_name,rows,yaml_config_chan,cv,mf){
return (function (state_18989){
var state_val_18990 = (state_18989[(1)]);
if((state_val_18990 === (1))){
var state_18989__$1 = state_18989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18989__$1,(2),cv);
} else {
if((state_val_18990 === (2))){
var inst_18984 = (state_18989[(2)]);
var inst_18985 = cljs.core.mapv.call(null,mf,inst_18984);
var inst_18986 = yaml_table.core.vector_with_channels__GT_channel_with_array.call(null,inst_18985);
var inst_18987 = yaml_table.core.chan_table_package__GT_table.call(null,yaml_config_chan,inst_18986,rows);
var state_18989__$1 = state_18989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18989__$1,inst_18987);
} else {
return null;
}
}
});})(c__15731__auto__,minimist,argv,ext,path,table_name,rows,yaml_config_chan,cv,mf))
;
return ((function (switch__15710__auto__,c__15731__auto__,minimist,argv,ext,path,table_name,rows,yaml_config_chan,cv,mf){
return (function() {
var yaml_table$core$state_machine__15711__auto__ = null;
var yaml_table$core$state_machine__15711__auto____0 = (function (){
var statearr_18994 = [null,null,null,null,null,null,null];
(statearr_18994[(0)] = yaml_table$core$state_machine__15711__auto__);

(statearr_18994[(1)] = (1));

return statearr_18994;
});
var yaml_table$core$state_machine__15711__auto____1 = (function (state_18989){
while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_18989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15713__auto__;
}
break;
}
}catch (e18995){if((e18995 instanceof Object)){
var ex__15714__auto__ = e18995;
var statearr_18996_19001 = state_18989;
(statearr_18996_19001[(5)] = ex__15714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19002 = state_18989;
state_18989 = G__19002;
continue;
} else {
return ret_value__15712__auto__;
}
break;
}
});
yaml_table$core$state_machine__15711__auto__ = function(state_18989){
switch(arguments.length){
case 0:
return yaml_table$core$state_machine__15711__auto____0.call(this);
case 1:
return yaml_table$core$state_machine__15711__auto____1.call(this,state_18989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$state_machine__15711__auto____0;
yaml_table$core$state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$state_machine__15711__auto____1;
return yaml_table$core$state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15731__auto__,minimist,argv,ext,path,table_name,rows,yaml_config_chan,cv,mf))
})();
var state__15733__auto__ = (function (){var statearr_18997 = f__15732__auto__.call(null);
(statearr_18997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15731__auto__);

return statearr_18997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15733__auto__);
});})(c__15731__auto__,minimist,argv,ext,path,table_name,rows,yaml_config_chan,cv,mf))
);

return c__15731__auto__;
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq18982){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18982));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;

//# sourceMappingURL=core.js.map