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
var c__8735__auto___11596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___11596,yaml,fs,c){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___11596,yaml,fs,c){
return (function (state_11573){
var state_val_11574 = (state_11573[(1)]);
if((state_val_11574 === (1))){
var inst_11570 = (function (){return ((function (state_val_11574,c__8735__auto___11596,yaml,fs,c){
return (function (returned_yaml_object){
var c__8735__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto____$1,state_val_11574,c__8735__auto___11596,yaml,fs,c){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto____$1,state_val_11574,c__8735__auto___11596,yaml,fs,c){
return (function (state_11579){
var state_val_11580 = (state_11579[(1)]);
if((state_val_11580 === (1))){
var state_11579__$1 = state_11579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11579__$1,(2),c,returned_yaml_object);
} else {
if((state_val_11580 === (2))){
var inst_11576 = (state_11579[(2)]);
var inst_11577 = cljs.core.async.close_BANG_(c);
var state_11579__$1 = (function (){var statearr_11581 = state_11579;
(statearr_11581[(7)] = inst_11576);

return statearr_11581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11579__$1,inst_11577);
} else {
return null;
}
}
});})(c__8735__auto____$1,state_val_11574,c__8735__auto___11596,yaml,fs,c))
;
return ((function (switch__8621__auto__,c__8735__auto____$1,state_val_11574,c__8735__auto___11596,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____0 = (function (){
var statearr_11585 = [null,null,null,null,null,null,null,null];
(statearr_11585[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__);

(statearr_11585[(1)] = (1));

return statearr_11585;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____1 = (function (state_11579){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11579);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11586){if((e11586 instanceof Object)){
var ex__8625__auto__ = e11586;
var statearr_11587_11597 = state_11579;
(statearr_11587_11597[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11579);

return cljs.core.cst$kw$recur;
} else {
throw e11586;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11598 = state_11579;
state_11579 = G__11598;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__ = function(state_11579){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____1.call(this,state_11579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto____$1,state_val_11574,c__8735__auto___11596,yaml,fs,c))
})();
var state__8737__auto__ = (function (){var statearr_11588 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto____$1);

return statearr_11588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto____$1,state_val_11574,c__8735__auto___11596,yaml,fs,c))
);

return c__8735__auto____$1;
});
;})(state_val_11574,c__8735__auto___11596,yaml,fs,c))
})();
var inst_11571 = yaml.safeLoadAll(string,inst_11570);
var state_11573__$1 = state_11573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11573__$1,inst_11571);
} else {
return null;
}
});})(c__8735__auto___11596,yaml,fs,c))
;
return ((function (switch__8621__auto__,c__8735__auto___11596,yaml,fs,c){
return (function() {
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__ = null;
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____0 = (function (){
var statearr_11592 = [null,null,null,null,null,null,null];
(statearr_11592[(0)] = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__);

(statearr_11592[(1)] = (1));

return statearr_11592;
});
var yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____1 = (function (state_11573){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11573);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11593){if((e11593 instanceof Object)){
var ex__8625__auto__ = e11593;
var statearr_11594_11599 = state_11573;
(statearr_11594_11599[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11573);

return cljs.core.cst$kw$recur;
} else {
throw e11593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11600 = state_11573;
state_11573 = G__11600;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__ = function(state_11573){
switch(arguments.length){
case 0:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____1.call(this,state_11573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____0;
yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto____1;
return yaml_table$core$string__GT_yaml_object_chan_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___11596,yaml,fs,c))
})();
var state__8737__auto__ = (function (){var statearr_11595 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___11596);

return statearr_11595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___11596,yaml,fs,c))
);


return c;
});
yaml_table.core.fill_vector_from_chan = (function yaml_table$core$fill_vector_from_chan(c){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__8735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto__){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto__){
return (function (state_11612){
var state_val_11613 = (state_11612[(1)]);
if((state_val_11613 === (1))){
var state_11612__$1 = state_11612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11612__$1,c);
} else {
return null;
}
});})(c__8735__auto__))
;
return ((function (switch__8621__auto__,c__8735__auto__){
return (function() {
var yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto__ = null;
var yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto____0 = (function (){
var statearr_11617 = [null,null,null,null,null,null,null];
(statearr_11617[(0)] = yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto__);

(statearr_11617[(1)] = (1));

return statearr_11617;
});
var yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto____1 = (function (state_11612){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11612);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11618){if((e11618 instanceof Object)){
var ex__8625__auto__ = e11618;
var statearr_11619_11621 = state_11612;
(statearr_11619_11621[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11612);

return cljs.core.cst$kw$recur;
} else {
throw e11618;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11622 = state_11612;
state_11612 = G__11622;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto__ = function(state_11612){
switch(arguments.length){
case 0:
return yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto____1.call(this,state_11612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto____0;
yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto____1;
return yaml_table$core$fill_vector_from_chan_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto__))
})();
var state__8737__auto__ = (function (){var statearr_11620 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto__);

return statearr_11620;
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
var c__8735__auto___11709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto___11709,c){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto___11709,c){
return (function (state_11692){
var state_val_11693 = (state_11692[(1)]);
if((state_val_11693 === (1))){
var inst_11666 = cljs.core.PersistentVector.EMPTY;
var inst_11667 = vwc;
var inst_11668 = inst_11666;
var state_11692__$1 = (function (){var statearr_11694 = state_11692;
(statearr_11694[(7)] = inst_11668);

(statearr_11694[(8)] = inst_11667);

return statearr_11694;
})();
var statearr_11695_11710 = state_11692__$1;
(statearr_11695_11710[(2)] = null);

(statearr_11695_11710[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11693 === (2))){
var inst_11667 = (state_11692[(8)]);
var inst_11670 = cljs.core.empty_QMARK_(inst_11667);
var state_11692__$1 = state_11692;
if(inst_11670){
var statearr_11696_11711 = state_11692__$1;
(statearr_11696_11711[(1)] = (4));

} else {
var statearr_11697_11712 = state_11692__$1;
(statearr_11697_11712[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11693 === (3))){
var inst_11690 = (state_11692[(2)]);
var state_11692__$1 = state_11692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11692__$1,inst_11690);
} else {
if((state_val_11693 === (4))){
var inst_11668 = (state_11692[(7)]);
var inst_11672 = cljs.core.clj__GT_js(inst_11668);
var state_11692__$1 = state_11692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11692__$1,(7),c,inst_11672);
} else {
if((state_val_11693 === (5))){
var inst_11667 = (state_11692[(8)]);
var state_11692__$1 = state_11692;
return cljs.core.async.ioc_alts_BANG_(state_11692__$1,(8),inst_11667);
} else {
if((state_val_11693 === (6))){
var inst_11688 = (state_11692[(2)]);
var state_11692__$1 = state_11692;
var statearr_11698_11713 = state_11692__$1;
(statearr_11698_11713[(2)] = inst_11688);

(statearr_11698_11713[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11693 === (7))){
var inst_11674 = (state_11692[(2)]);
var state_11692__$1 = state_11692;
var statearr_11699_11714 = state_11692__$1;
(statearr_11699_11714[(2)] = inst_11674);

(statearr_11699_11714[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11693 === (8))){
var inst_11668 = (state_11692[(7)]);
var inst_11667 = (state_11692[(8)]);
var inst_11678 = (state_11692[(2)]);
var inst_11679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11678,(0),null);
var inst_11680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11678,(1),null);
var inst_11681 = [inst_11680];
var inst_11682 = cljs.core.PersistentHashSet.fromArray(inst_11681,true);
var inst_11683 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_11682,inst_11667);
var inst_11684 = cljs.core.vec(inst_11683);
var inst_11685 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_11668,inst_11679);
var inst_11667__$1 = inst_11684;
var inst_11668__$1 = inst_11685;
var state_11692__$1 = (function (){var statearr_11700 = state_11692;
(statearr_11700[(7)] = inst_11668__$1);

(statearr_11700[(8)] = inst_11667__$1);

return statearr_11700;
})();
var statearr_11701_11715 = state_11692__$1;
(statearr_11701_11715[(2)] = null);

(statearr_11701_11715[(1)] = (2));


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
});})(c__8735__auto___11709,c))
;
return ((function (switch__8621__auto__,c__8735__auto___11709,c){
return (function() {
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto__ = null;
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto____0 = (function (){
var statearr_11705 = [null,null,null,null,null,null,null,null,null];
(statearr_11705[(0)] = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto__);

(statearr_11705[(1)] = (1));

return statearr_11705;
});
var yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto____1 = (function (state_11692){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11692);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11706){if((e11706 instanceof Object)){
var ex__8625__auto__ = e11706;
var statearr_11707_11716 = state_11692;
(statearr_11707_11716[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11692);

return cljs.core.cst$kw$recur;
} else {
throw e11706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11717 = state_11692;
state_11692 = G__11717;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto__ = function(state_11692){
switch(arguments.length){
case 0:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto____1.call(this,state_11692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto____0;
yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto____1;
return yaml_table$core$vector_with_channels__GT_channel_with_array_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto___11709,c))
})();
var state__8737__auto__ = (function (){var statearr_11708 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto___11709);

return statearr_11708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto___11709,c))
);


return c;
});
yaml_table.core.chan_array_of_objects_yaml__GT_table = (function yaml_table$core$chan_array_of_objects_yaml__GT_table(oc,arg2){
var res = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("../resources/print-overview-table-from-array.js") : cljs.nodejs.require.call(null,"../resources/print-overview-table-from-array.js"));
var c__8735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto__,res){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto__,res){
return (function (state_11735){
var state_val_11736 = (state_11735[(1)]);
if((state_val_11736 === (1))){
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11735__$1,(2),oc);
} else {
if((state_val_11736 === (2))){
var inst_11732 = (state_11735[(2)]);
var inst_11733 = res.printOverviewTableFromArray(inst_11732,arg2);
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11735__$1,inst_11733);
} else {
return null;
}
}
});})(c__8735__auto__,res))
;
return ((function (switch__8621__auto__,c__8735__auto__,res){
return (function() {
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8622__auto__ = null;
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8622__auto____0 = (function (){
var statearr_11740 = [null,null,null,null,null,null,null];
(statearr_11740[(0)] = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8622__auto__);

(statearr_11740[(1)] = (1));

return statearr_11740;
});
var yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8622__auto____1 = (function (state_11735){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11735);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11741){if((e11741 instanceof Object)){
var ex__8625__auto__ = e11741;
var statearr_11742_11744 = state_11735;
(statearr_11742_11744[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11735);

return cljs.core.cst$kw$recur;
} else {
throw e11741;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11745 = state_11735;
state_11735 = G__11745;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8622__auto__ = function(state_11735){
switch(arguments.length){
case 0:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8622__auto____1.call(this,state_11735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8622__auto____0;
yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8622__auto____1;
return yaml_table$core$chan_array_of_objects_yaml__GT_table_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto__,res))
})();
var state__8737__auto__ = (function (){var statearr_11743 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto__);

return statearr_11743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8737__auto__);
});})(c__8735__auto__,res))
);

return c__8735__auto__;
});
yaml_table.core.path__GT_chan_vec_dec_strings = (function yaml_table$core$path__GT_chan_vec_dec_strings(input_path){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dir = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("node-dir") : cljs.nodejs.require.call(null,"node-dir"));
dir.files(input_path,((function (c,dir){
return (function (err,files){
var c__8735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8735__auto__,c,dir){
return (function (){
var f__8736__auto__ = (function (){var switch__8621__auto__ = ((function (c__8735__auto__,c,dir){
return (function (state_11767){
var state_val_11768 = (state_11767[(1)]);
if((state_val_11768 === (1))){
var inst_11761 = (function (){return ((function (state_val_11768,c__8735__auto__,c,dir){
return (function (file){
return file.endsWith(".dec");
});
;})(state_val_11768,c__8735__auto__,c,dir))
})();
var inst_11762 = files.filter(inst_11761);
var inst_11763 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_11762);
var state_11767__$1 = state_11767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11767__$1,(2),c,inst_11763);
} else {
if((state_val_11768 === (2))){
var inst_11765 = (state_11767[(2)]);
var state_11767__$1 = state_11767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11767__$1,inst_11765);
} else {
return null;
}
}
});})(c__8735__auto__,c,dir))
;
return ((function (switch__8621__auto__,c__8735__auto__,c,dir){
return (function() {
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8622__auto__ = null;
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8622__auto____0 = (function (){
var statearr_11772 = [null,null,null,null,null,null,null];
(statearr_11772[(0)] = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8622__auto__);

(statearr_11772[(1)] = (1));

return statearr_11772;
});
var yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8622__auto____1 = (function (state_11767){
while(true){
var ret_value__8623__auto__ = (function (){try{while(true){
var result__8624__auto__ = switch__8621__auto__(state_11767);
if(cljs.core.keyword_identical_QMARK_(result__8624__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8624__auto__;
}
break;
}
}catch (e11773){if((e11773 instanceof Object)){
var ex__8625__auto__ = e11773;
var statearr_11774_11776 = state_11767;
(statearr_11774_11776[(5)] = ex__8625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11767);

return cljs.core.cst$kw$recur;
} else {
throw e11773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8623__auto__,cljs.core.cst$kw$recur)){
var G__11777 = state_11767;
state_11767 = G__11777;
continue;
} else {
return ret_value__8623__auto__;
}
break;
}
});
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8622__auto__ = function(state_11767){
switch(arguments.length){
case 0:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8622__auto____0.call(this);
case 1:
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8622__auto____1.call(this,state_11767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$0 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8622__auto____0;
yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8622__auto__.cljs$core$IFn$_invoke$arity$1 = yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8622__auto____1;
return yaml_table$core$path__GT_chan_vec_dec_strings_$_state_machine__8622__auto__;
})()
;})(switch__8621__auto__,c__8735__auto__,c,dir))
})();
var state__8737__auto__ = (function (){var statearr_11775 = (f__8736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8736__auto__.cljs$core$IFn$_invoke$arity$0() : f__8736__auto__.call(null));
(statearr_11775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8735__auto__);

return statearr_11775;
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
var len__5729__auto___11780 = arguments.length;
var i__5730__auto___11781 = (0);
while(true){
if((i__5730__auto___11781 < len__5729__auto___11780)){
args__5736__auto__.push((arguments[i__5730__auto___11781]));

var G__11782 = (i__5730__auto___11781 + (1));
i__5730__auto___11781 = G__11782;
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
var argv = (function (){var G__11779 = cljs.core.clj__GT_js(cljs.core.vec(args));
return (minimist.cljs$core$IFn$_invoke$arity$1 ? minimist.cljs$core$IFn$_invoke$arity$1(G__11779) : minimist.call(null,G__11779));
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
var rows = (function (){var or__4671__auto__ = argv.r;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (10);
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["argv: ",argv], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ext: ",ext], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["path: ",path], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["rows: ",rows], 0));
});

yaml_table.core._main.cljs$lang$maxFixedArity = (0);

yaml_table.core._main.cljs$lang$applyTo = (function (seq11778){
return yaml_table.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11778));
});
cljs.core._STAR_main_cli_fn_STAR_ = yaml_table.core._main;
