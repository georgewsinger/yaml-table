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
var c__8735__auto___11668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___11668,yaml,fs,c){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___11668,yaml,fs,c){
return (function (state_11645){
var state_val_11646 = (state_11645[(1)]);
if((state_val_11646 === (1))){
var inst_11642 = (function (){return ((function (state_val_11646,c__8735__auto___11668,yaml,fs,c){
return (function (returned_yaml_object){
var c__8735__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto____$1,state_val_11646,c__8735__auto___11668,yaml,fs,c){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto____$1,state_val_11646,c__8735__auto___11668,yaml,fs,c){
return (function (state_11651){
var state_val_11652 = (state_11651[(1)]);
if((state_val_11652 === (1))){
var state_11651__$1 = state_11651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11651__$1,(2),c,returned_yaml_object);
} else {
if((state_val_11652 === (2))){
var inst_11648 = (state_11651[(2)]);
var inst_11649 = cljs.core.async.close_BANG_(c);
var state_11651__$1 = (function (){var statearr_11653 = state_11651;
(statearr_11653[(7)] = inst_11648);

return statearr_11653;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11651__$1,inst_11649);
} else {
return null;
}
}
});})(c__8735__auto____$1,state_val_11646,c__8735__auto___11668,yaml,fs,c))
;
return ((function (switch__8621__auto__,c__8735__auto____$1,state_val_11646,c__8735__auto___11668,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____0 = (function (){
var statearr_11657 = [null,null,null,null,null,null,null,null];
(statearr_11657[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__);

(statearr_11657[(1)] = (1));

return statearr_11657;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____1 = (function (state_11651){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11651);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11658){if((e11658 instanceof Object)){
var ex__8625__auto__ = e11658;
var statearr_11659_11669 = state_11651;
(statearr_11659_11669[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11651);

return cljs.core.cst$kw$recur;
} else {
throw e11658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11670 = state_11651;
state_11651 = G__11670;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__ = function(state_11651){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____1.call(this,state_11651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto____$1,state_val_11646,c__8735__auto___11668,yaml,fs,c))
})();
var state__8737__auto__ = (function (){var statearr_11660 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto____$1);

return statearr_11660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto____$1,state_val_11646,c__8735__auto___11668,yaml,fs,c))
);

return c__8735__auto____$1;
});
;})(state_val_11646,c__8735__auto___11668,yaml,fs,c))
})();
var inst_11643 = yaml.safeLoadAll(string,inst_11642);
var state_11645__$1 = state_11645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11645__$1,inst_11643);
} else {
return null;
}
});})(c__8735__auto___11668,yaml,fs,c))
;
return ((function (switch__8621__auto__,c__8735__auto___11668,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____0 = (function (){
var statearr_11664 = [null,null,null,null,null,null,null];
(statearr_11664[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__);

(statearr_11664[(1)] = (1));

return statearr_11664;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____1 = (function (state_11645){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11645);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11665){if((e11665 instanceof Object)){
var ex__8625__auto__ = e11665;
var statearr_11666_11671 = state_11645;
(statearr_11666_11671[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11645);

return cljs.core.cst$kw$recur;
} else {
throw e11665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11672 = state_11645;
state_11645 = G__11672;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__ = function(state_11645){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____1.call(this,state_11645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___11668,yaml,fs,c))
})();
var state__8737__auto__ = (function (){var statearr_11667 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___11668);

return statearr_11667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___11668,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__8735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto__){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto__){
return (function (state_11684){
var state_val_11685 = (state_11684[(1)]);
if((state_val_11685 === (1))){
var state_11684__$1 = state_11684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11684__$1,c);
} else {
return null;
}
});})(c__8735__auto__))
;
return ((function (switch__8621__auto__,c__8735__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto____0 = (function (){
var statearr_11689 = [null,null,null,null,null,null,null];
(statearr_11689[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto__);

(statearr_11689[(1)] = (1));

return statearr_11689;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto____1 = (function (state_11684){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11684);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11690){if((e11690 instanceof Object)){
var ex__8625__auto__ = e11690;
var statearr_11691_11693 = state_11684;
(statearr_11691_11693[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11684);

return cljs.core.cst$kw$recur;
} else {
throw e11690;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11694 = state_11684;
state_11684 = G__11694;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto__ = function(state_11684){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto____1.call(this,state_11684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto__))
})();
var state__8737__auto__ = (function (){var statearr_11692 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto__);

return statearr_11692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto__))
);

return c__8735__auto__;
})()], null));
});
yaml_table.core.not_nil_QMARK_ = cljs.core.complement(cljs.core.nil_QMARK_);
yaml_table.core.vector_with_channels__GT_channel_with_array = (function yaml_table$core$vector_with_channels__GT_channel_with_array(vwc){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__8735__auto___11781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___11781,c){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___11781,c){
return (function (state_11764){
var state_val_11765 = (state_11764[(1)]);
if((state_val_11765 === (1))){
var inst_11738 = cljs.core.PersistentVector.EMPTY;
var inst_11739 = vwc;
var inst_11740 = inst_11738;
var state_11764__$1 = (function (){var statearr_11766 = state_11764;
(statearr_11766[(7)] = inst_11740);

(statearr_11766[(8)] = inst_11739);

return statearr_11766;
})();
var statearr_11767_11782 = state_11764__$1;
(statearr_11767_11782[(2)] = null);

(statearr_11767_11782[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11765 === (2))){
var inst_11739 = (state_11764[(8)]);
var inst_11742 = cljs.core.empty_QMARK_(inst_11739);
var state_11764__$1 = state_11764;
if(inst_11742){
var statearr_11768_11783 = state_11764__$1;
(statearr_11768_11783[(1)] = (4));

} else {
var statearr_11769_11784 = state_11764__$1;
(statearr_11769_11784[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11765 === (3))){
var inst_11762 = (state_11764[(2)]);
var state_11764__$1 = state_11764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11764__$1,inst_11762);
} else {
if((state_val_11765 === (4))){
var inst_11740 = (state_11764[(7)]);
var inst_11744 = cljs.core.clj__GT_js(inst_11740);
var state_11764__$1 = state_11764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11764__$1,(7),c,inst_11744);
} else {
if((state_val_11765 === (5))){
var inst_11739 = (state_11764[(8)]);
var state_11764__$1 = state_11764;
return cljs.core.async.ioc_alts_BANG_(state_11764__$1,(8),inst_11739);
} else {
if((state_val_11765 === (6))){
var inst_11760 = (state_11764[(2)]);
var state_11764__$1 = state_11764;
var statearr_11770_11785 = state_11764__$1;
(statearr_11770_11785[(2)] = inst_11760);

(statearr_11770_11785[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11765 === (7))){
var inst_11746 = (state_11764[(2)]);
var state_11764__$1 = state_11764;
var statearr_11771_11786 = state_11764__$1;
(statearr_11771_11786[(2)] = inst_11746);

(statearr_11771_11786[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11765 === (8))){
var inst_11740 = (state_11764[(7)]);
var inst_11739 = (state_11764[(8)]);
var inst_11750 = (state_11764[(2)]);
var inst_11751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11750,(0),null);
var inst_11752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11750,(1),null);
var inst_11753 = [inst_11752];
var inst_11754 = cljs.core.PersistentHashSet.fromArray(inst_11753,true);
var inst_11755 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_11754,inst_11739);
var inst_11756 = cljs.core.vec(inst_11755);
var inst_11757 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_11740,inst_11751);
var inst_11739__$1 = inst_11756;
var inst_11740__$1 = inst_11757;
var state_11764__$1 = (function (){var statearr_11772 = state_11764;
(statearr_11772[(7)] = inst_11740__$1);

(statearr_11772[(8)] = inst_11739__$1);

return statearr_11772;
})();
var statearr_11773_11787 = state_11764__$1;
(statearr_11773_11787[(2)] = null);

(statearr_11773_11787[(1)] = (2));


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
});})(c__8735__auto___11781,c))
;
return ((function (switch__8621__auto__,c__8735__auto___11781,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto____0 = (function (){
var statearr_11777 = [null,null,null,null,null,null,null,null,null];
(statearr_11777[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto__);

(statearr_11777[(1)] = (1));

return statearr_11777;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto____1 = (function (state_11764){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11764);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11778){if((e11778 instanceof Object)){
var ex__8625__auto__ = e11778;
var statearr_11779_11788 = state_11764;
(statearr_11779_11788[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11764);

return cljs.core.cst$kw$recur;
} else {
throw e11778;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11789 = state_11764;
state_11764 = G__11789;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto__ = function(state_11764){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto____1.call(this,state_11764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___11781,c))
})();
var state__8737__auto__ = (function (){var statearr_11780 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___11781);

return statearr_11780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___11781,c))
);


return c;
});
yaml_table.core.chan_table_package__GT_table = (function yaml_table$core$chan_table_package__GT_table(yaml_config_chan,arr_chan,rows){
var res = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("../resources/print-yaml-table.js") : cljs.nodejs.require.call(null,"../resources/print-yaml-table.js"));
var c__8735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto__,res){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto__,res){
return (function (state_11812){
var state_val_11813 = (state_11812[(1)]);
if((state_val_11813 === (1))){
var state_11812__$1 = state_11812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11812__$1,(2),yaml_config_chan);
} else {
if((state_val_11813 === (2))){
var inst_11807 = (state_11812[(2)]);
var state_11812__$1 = (function (){var statearr_11814 = state_11812;
(statearr_11814[(7)] = inst_11807);

return statearr_11814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11812__$1,(3),arr_chan);
} else {
if((state_val_11813 === (3))){
var inst_11807 = (state_11812[(7)]);
var inst_11809 = (state_11812[(2)]);
var inst_11810 = res.printYamlTable(inst_11807,inst_11809,rows);
var state_11812__$1 = state_11812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11812__$1,inst_11810);
} else {
return null;
}
}
}
});})(c__8735__auto__,res))
;
return ((function (switch__8621__auto__,c__8735__auto__,res){
return (function() {
var yaml_table$core$chan_table_package__GT_table_$_state_machine__8622__auto__ = null;
var yaml_table$core$chan_table_package__GT_table_$_state_machine__8622__auto____0 = (function (){
var statearr_11818 = [null,null,null,null,null,null,null,null];
(statearr_11818[(0)] = yaml_table$core$chan_table_package__GT_table_$_state_machine__8622__auto__);

(statearr_11818[(1)] = (1));

return statearr_11818;
});
var yaml_table$core$chan_table_package__GT_table_$_state_machine__8622__auto____1 = (function (state_11812){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11812);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11819){if((e11819 instanceof Object)){
var ex__8625__auto__ = e11819;
var statearr_11820_11822 = state_11812;
(statearr_11820_11822[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11812);

return cljs.core.cst$kw$recur;
} else {
throw e11819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11823 = state_11812;
state_11812 = G__11823;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$chan_table_package__GT_table_$_state_machine__8622__auto__ = function(state_11812){
switch(arguments.length){
case 0:
return yaml_table$core$chan_table_package__GT_table_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$chan_table_package__GT_table_$_state_machine__8622__auto____1.call(this,state_11812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_table_package__GT_table_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_table_package__GT_table_$_state_machine__8622__auto____0;
yaml_table$core$chan_table_package__GT_table_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_table_package__GT_table_$_state_machine__8622__auto____1;
return yaml_table$core$chan_table_package__GT_table_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto__,res))
})();
var state__8737__auto__ = (function (){var statearr_11821 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto__);

return statearr_11821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto__,res))
);

return c__8735__auto__;
});
yaml_table.core.path__GT_chan_vec_ext_strings = (function yaml_table$core$path__GT_chan_vec_ext_strings(path,ext){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dir = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("node-dir") : cljs.nodejs.require.call(null,"node-dir"));
dir.files(path,((function (c,dir){
return (function (err,files){
var c__8735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto__,c,dir){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto__,c,dir){
return (function (state_11845){
var state_val_11846 = (state_11845[(1)]);
if((state_val_11846 === (1))){
var inst_11839 = (function (){return ((function (state_val_11846,c__8735__auto__,c,dir){
return (function (file){
return file.endsWith(ext);
});
;})(state_val_11846,c__8735__auto__,c,dir))
})();
var inst_11840 = files.filter(inst_11839);
var inst_11841 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_11840);
var state_11845__$1 = state_11845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11845__$1,(2),c,inst_11841);
} else {
if((state_val_11846 === (2))){
var inst_11843 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11845__$1,inst_11843);
} else {
return null;
}
}
});})(c__8735__auto__,c,dir))
;
return ((function (switch__8621__auto__,c__8735__auto__,c,dir){
return (function() {
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8622__auto__ = null;
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8622__auto____0 = (function (){
var statearr_11850 = [null,null,null,null,null,null,null];
(statearr_11850[(0)] = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8622__auto__);

(statearr_11850[(1)] = (1));

return statearr_11850;
});
var yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8622__auto____1 = (function (state_11845){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11845);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11851){if((e11851 instanceof Object)){
var ex__8625__auto__ = e11851;
var statearr_11852_11854 = state_11845;
(statearr_11852_11854[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11845);

return cljs.core.cst$kw$recur;
} else {
throw e11851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11855 = state_11845;
state_11845 = G__11855;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8622__auto__ = function(state_11845){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8622__auto____1.call(this,state_11845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8622__auto____0;
yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8622__auto____1;
return yaml_table$core$path__GT_chan_vec_ext_strings_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto__,c,dir))
})();
var state__8737__auto__ = (function (){var statearr_11853 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto__);

return statearr_11853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto__,c,dir))
);

return c__8735__auto__;
});})(c,dir))
);

return c;
});
yaml_table.core._main = (function yaml_table$core$_main(var_args){
var args__5736__auto__ = [];
var len__5729__auto___11875 = arguments.length;
var i__5730__auto___11876 = (0);
while(true){
if((i__5730__auto___11876 < len__5729__auto___11875)){
args__5736__auto__.push((arguments[i__5730__auto___11876]));

var G__11877 = (i__5730__auto___11876 + (1));
i__5730__auto___11876 = G__11877;
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
var argv = (function (){var G__11857 = cljs.core.clj__GT_js(cljs.core.vec(args));
return (minimist.cljs$core$IFn$_invoke$arity$1 ? minimist.cljs$core$IFn$_invoke$arity$1(G__11857) : minimist.call(null,G__11857));
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
return "/home/george/Dropbox";
}
})();
var rows = (function (){var or__4671__auto__ = (function (){var G__11859 = argv.r;
return parseInt(G__11859);
})();
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (10);
}
})();
var yaml_config_chan = (yaml_table.config.yaml_table_config__GT_chan_matching_yaml_object.cljs$core$IFn$_invoke$arity$1 ? yaml_table.config.yaml_table_config__GT_chan_matching_yaml_object.cljs$core$IFn$_invoke$arity$1(ext) : yaml_table.config.yaml_table_config__GT_chan_matching_yaml_object.call(null,ext));
var cv = yaml_table.core.path__GT_chan_vec_ext_strings(path,ext);
var mf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(yaml_table.core.string__GT_yaml_object_chan,yaml_table.core.file_path__GT_string_with_contents);
var c__8735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto__,minimist,argv,ext,path,rows,yaml_config_chan,cv,mf){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto__,minimist,argv,ext,path,rows,yaml_config_chan,cv,mf){
return (function (state_11866){
var state_val_11867 = (state_11866[(1)]);
if((state_val_11867 === (1))){
var state_11866__$1 = state_11866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11866__$1,(2),cv);
} else {
if((state_val_11867 === (2))){
var inst_11861 = (state_11866[(2)]);
var inst_11862 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(mf,inst_11861);
var inst_11863 = yaml_table.core.vector_with_channels__GT_channel_with_array(inst_11862);
var inst_11864 = yaml_table.core.chan_table_package__GT_table(yaml_config_chan,inst_11863,rows);
var state_11866__$1 = state_11866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11866__$1,inst_11864);
} else {
return null;
}
}
});})(c__8735__auto__,minimist,argv,ext,path,rows,yaml_config_chan,cv,mf))
;
return ((function (switch__8621__auto__,c__8735__auto__,minimist,argv,ext,path,rows,yaml_config_chan,cv,mf){
return (function() {
var yaml_table$core$state_machine__8622__auto__ = null;
var yaml_table$core$state_machine__8622__auto____0 = (function (){
var statearr_11871 = [null,null,null,null,null,null,null];
(statearr_11871[(0)] = yaml_table$core$state_machine__8622__auto__);

(statearr_11871[(1)] = (1));

return statearr_11871;
});
var yaml_table$core$state_machine__8622__auto____1 = (function (state_11866){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11866);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11872){if((e11872 instanceof Object)){
var ex__8625__auto__ = e11872;
var statearr_11873_11878 = state_11866;
(statearr_11873_11878[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11866);

return cljs.core.cst$kw$recur;
} else {
throw e11872;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11879 = state_11866;
state_11866 = G__11879;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$state_machine__8622__auto__ = function(state_11866){
switch(arguments.length){
case 0:
return yaml_table$core$state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$state_machine__8622__auto____1.call(this,state_11866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$state_machine__8622__auto____0;
yaml_table$core$state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$state_machine__8622__auto____1;
return yaml_table$core$state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto__,minimist,argv,ext,path,rows,yaml_config_chan,cv,mf))
})();
var state__8737__auto__ = (function (){var statearr_11874 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto__);

return statearr_11874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto__,minimist,argv,ext,path,rows,yaml_config_chan,cv,mf))
);

return c__8735__auto__;
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq11856){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11856));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;
