!function(e,t){for(var r in t)e[r]=t[r]}(this,function(e){function t(t){for(var n,s,a=t[0],i=t[1],l=t[2],d=0,p=[];d<a.length;d++)s=a[d],c[s]&&p.push(c[s][0]),c[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==c[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},c={3:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=i;return o.push([626,0]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},15:function(e,t){!function(){e.exports=this.wp.apiFetch}()},16:function(e,t){!function(){e.exports=this.wp.compose}()},167:function(e,t,r){var n=r(168);"string"==typeof n&&(n=[[e.i,n,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};r(28)(n,c);n.locals&&(e.exports=n.locals)},168:function(e,t,r){},169:function(e,t,r){"use strict";var n=r(26),c=r.n(n),o=r(8),s=r.n(o),a=r(9),i=r.n(a),l=r(10),u=r.n(l),d=r(11),p=r.n(d),m=r(12),b=r.n(m),h=r(5),j=r.n(h),g=r(0),f=r(2),v=r(21),w=r(15),_=r.n(w),O=r(3),y=r(1),k=r.n(y),E=r(4),S=(r(182),r(30)),C=r(23),x=function(e){function t(){var e;return s()(this,t),(e=u()(this,p()(t).apply(this,arguments))).state={list:[],loading:!0},e.renderItem=e.renderItem.bind(j()(j()(e))),e}return b()(t,e),i()(t,[{key:"componentDidMount",value:function(){var e=this;_()({path:Object(v.addQueryArgs)("/wc-pb/v3/products/categories",{per_page:-1})}).then(function(t){e.setState({list:t,loading:!1})}).catch(function(){e.setState({list:[],loading:!1})})}},{key:"renderItem",value:function(e){var t=e.item,r=e.search,n=e.depth,o=void 0===n?0:n,s=["woocommerce-product-categories__item"];r.length&&s.push("is-searching"),0===o&&0!==t.parent&&s.push("is-skip-level");var a=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name;return Object(g.createElement)(C.a,c()({className:s.join(" ")},e,{showCount:!0,"aria-label":Object(f.sprintf)(Object(f._n)("%s, has %d product","%s, has %d products",t.count,"woo-gutenberg-products-block"),a,t.count)}))}},{key:"render",value:function(){var e=this.state,t=e.list,r=e.loading,n=this.props,c=n.onChange,o=n.onOperatorChange,s=n.operator,a=n.selected,i={clear:Object(f.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(f.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(f.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(f.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(e){return Object(f.sprintf)(Object(f._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e)},updated:Object(f.__)("Category search results updated.","woo-gutenberg-products-block")};return Object(g.createElement)(g.Fragment,null,Object(g.createElement)(S.a,{className:"woocommerce-product-categories",list:t,isLoading:r,selected:a.map(function(e){return Object(O.find)(t,{id:e})}).filter(Boolean),onChange:c,renderItem:this.renderItem,messages:i,isHierarchical:!0}),!!o&&Object(g.createElement)("div",{className:a.length<2?"screen-reader-text":""},Object(g.createElement)(E.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(f.__)("Display products matching","woo-gutenberg-products-block"),help:Object(f.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:s,onChange:o,options:[{label:Object(f.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(f.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))}}]),t}(g.Component);x.propTypes={onChange:k.a.func.isRequired,onOperatorChange:k.a.func,operator:k.a.oneOf(["all","any"]),selected:k.a.array.isRequired},x.defaultProps={operator:"any"},t.a=x},17:function(e,t,r){"use strict";var n=r(0),c=r(4),o=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"#1E8CBE",d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))})},s=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"#6C7781",d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))})},a=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(n.createElement)("path",{d:"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"}))})},i=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"#1E8CBE",d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))})},l=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"#6C7781",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))})},u=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"}),Object(n.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}))})};r.d(t,"a",function(){return o}),r.d(t,"b",function(){return s}),r.d(t,"c",function(){return a}),r.d(t,"d",function(){return i}),r.d(t,"e",function(){return l}),r.d(t,"f",function(){return u})},171:function(e,t,r){"use strict";t.a={columns:{type:"number",default:wc_product_block_data.default_columns},rows:{type:"number",default:wc_product_block_data.default_rows},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"}}},175:function(e,t,r){var n=r(176);"string"==typeof n&&(n=[[e.i,n,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};r(28)(n,c);n.locals&&(e.exports=n.locals)},176:function(e,t,r){},177:function(e,t){!function(){e.exports=this.wp.data}()},182:function(e,t,r){var n=r(183);"string"==typeof n&&(n=[[e.i,n,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};r(28)(n,c);n.locals&&(e.exports=n.locals)},183:function(e,t,r){},185:function(e,t,r){var n={"./af":40,"./af.js":40,"./ar":41,"./ar-dz":42,"./ar-dz.js":42,"./ar-kw":43,"./ar-kw.js":43,"./ar-ly":44,"./ar-ly.js":44,"./ar-ma":45,"./ar-ma.js":45,"./ar-sa":46,"./ar-sa.js":46,"./ar-tn":47,"./ar-tn.js":47,"./ar.js":41,"./az":48,"./az.js":48,"./be":49,"./be.js":49,"./bg":50,"./bg.js":50,"./bm":51,"./bm.js":51,"./bn":52,"./bn.js":52,"./bo":53,"./bo.js":53,"./br":54,"./br.js":54,"./bs":55,"./bs.js":55,"./ca":56,"./ca.js":56,"./cs":57,"./cs.js":57,"./cv":58,"./cv.js":58,"./cy":59,"./cy.js":59,"./da":60,"./da.js":60,"./de":61,"./de-at":62,"./de-at.js":62,"./de-ch":63,"./de-ch.js":63,"./de.js":61,"./dv":64,"./dv.js":64,"./el":65,"./el.js":65,"./en-au":66,"./en-au.js":66,"./en-ca":67,"./en-ca.js":67,"./en-gb":68,"./en-gb.js":68,"./en-ie":69,"./en-ie.js":69,"./en-il":70,"./en-il.js":70,"./en-nz":71,"./en-nz.js":71,"./eo":72,"./eo.js":72,"./es":73,"./es-do":74,"./es-do.js":74,"./es-us":75,"./es-us.js":75,"./es.js":73,"./et":76,"./et.js":76,"./eu":77,"./eu.js":77,"./fa":78,"./fa.js":78,"./fi":79,"./fi.js":79,"./fo":80,"./fo.js":80,"./fr":81,"./fr-ca":82,"./fr-ca.js":82,"./fr-ch":83,"./fr-ch.js":83,"./fr.js":81,"./fy":84,"./fy.js":84,"./gd":85,"./gd.js":85,"./gl":86,"./gl.js":86,"./gom-latn":87,"./gom-latn.js":87,"./gu":88,"./gu.js":88,"./he":89,"./he.js":89,"./hi":90,"./hi.js":90,"./hr":91,"./hr.js":91,"./hu":92,"./hu.js":92,"./hy-am":93,"./hy-am.js":93,"./id":94,"./id.js":94,"./is":95,"./is.js":95,"./it":96,"./it.js":96,"./ja":97,"./ja.js":97,"./jv":98,"./jv.js":98,"./ka":99,"./ka.js":99,"./kk":100,"./kk.js":100,"./km":101,"./km.js":101,"./kn":102,"./kn.js":102,"./ko":103,"./ko.js":103,"./ky":104,"./ky.js":104,"./lb":105,"./lb.js":105,"./lo":106,"./lo.js":106,"./lt":107,"./lt.js":107,"./lv":108,"./lv.js":108,"./me":109,"./me.js":109,"./mi":110,"./mi.js":110,"./mk":111,"./mk.js":111,"./ml":112,"./ml.js":112,"./mn":113,"./mn.js":113,"./mr":114,"./mr.js":114,"./ms":115,"./ms-my":116,"./ms-my.js":116,"./ms.js":115,"./mt":117,"./mt.js":117,"./my":118,"./my.js":118,"./nb":119,"./nb.js":119,"./ne":120,"./ne.js":120,"./nl":121,"./nl-be":122,"./nl-be.js":122,"./nl.js":121,"./nn":123,"./nn.js":123,"./pa-in":124,"./pa-in.js":124,"./pl":125,"./pl.js":125,"./pt":126,"./pt-br":127,"./pt-br.js":127,"./pt.js":126,"./ro":128,"./ro.js":128,"./ru":129,"./ru.js":129,"./sd":130,"./sd.js":130,"./se":131,"./se.js":131,"./si":132,"./si.js":132,"./sk":133,"./sk.js":133,"./sl":134,"./sl.js":134,"./sq":135,"./sq.js":135,"./sr":136,"./sr-cyrl":137,"./sr-cyrl.js":137,"./sr.js":136,"./ss":138,"./ss.js":138,"./sv":139,"./sv.js":139,"./sw":140,"./sw.js":140,"./ta":141,"./ta.js":141,"./te":142,"./te.js":142,"./tet":143,"./tet.js":143,"./tg":144,"./tg.js":144,"./th":145,"./th.js":145,"./tl-ph":146,"./tl-ph.js":146,"./tlh":147,"./tlh.js":147,"./tr":148,"./tr.js":148,"./tzl":149,"./tzl.js":149,"./tzm":150,"./tzm-latn":151,"./tzm-latn.js":151,"./tzm.js":150,"./ug-cn":152,"./ug-cn.js":152,"./uk":153,"./uk.js":153,"./ur":154,"./ur.js":154,"./uz":155,"./uz-latn":156,"./uz-latn.js":156,"./uz.js":155,"./vi":157,"./vi.js":157,"./x-pseudo":158,"./x-pseudo.js":158,"./yo":159,"./yo.js":159,"./zh-cn":160,"./zh-cn.js":160,"./zh-hk":161,"./zh-hk.js":161,"./zh-tw":162,"./zh-tw.js":162};function c(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=185},188:function(e,t){},189:function(e,t){},191:function(e,t){},192:function(e,t){},2:function(e,t){!function(){e.exports=this.wp.i18n}()},21:function(e,t){!function(){e.exports=this.wp.url}()},23:function(e,t,r){"use strict";var n=r(26),c=r.n(n),o=r(164),s=r.n(o),a=r(0),i=r(3),l=r(4),u=r(1),d=r.n(u),p=r(17);function m(e,t){if(!t)return e;var r=new RegExp(Object(i.escapeRegExp)(t),"ig");return e.replace(r,"<strong>$&</strong>")}var b=function(e){var t=e.className,r=e.depth,n=void 0===r?0:r,o=e.item,u=e.isSelected,d=e.isSingle,b=e.onSelect,h=e.search,j=void 0===h?"":h,g=e.showCount,f=void 0!==g&&g,v=s()(e,["className","depth","item","isSelected","isSingle","onSelect","search","showCount"]),w=[t,"woocommerce-search-list__item"];w.push("depth-".concat(n)),d&&w.push("is-radio-button");var _,O=o.breadcrumbs&&o.breadcrumbs.length;return Object(a.createElement)(l.MenuItem,c()({role:d?"menuitemradio":"menuitemcheckbox",className:w.join(" "),onClick:b(o),isSelected:u},v),Object(a.createElement)("span",{className:"woocommerce-search-list__item-state"},function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?t?Object(a.createElement)(p.d,null):Object(a.createElement)(p.e,null):t?Object(a.createElement)(p.a,null):Object(a.createElement)(p.b,null)}(d,u)),Object(a.createElement)("span",{className:"woocommerce-search-list__item-label"},O?Object(a.createElement)("span",{className:"woocommerce-search-list__item-prefix"},1===(_=o.breadcrumbs).length?Object(i.first)(_):2===_.length?Object(i.first)(_)+" › "+Object(i.last)(_):Object(i.first)(_)+" … "+Object(i.last)(_)):null,Object(a.createElement)("span",{className:"woocommerce-search-list__item-name",dangerouslySetInnerHTML:{__html:m(o.name,j)}})),!!f&&Object(a.createElement)("span",{className:"woocommerce-search-list__item-count"},o.count))};b.propTypes={className:d.a.string,depth:d.a.number,item:d.a.object,isSelected:d.a.bool,isSingle:d.a.bool,onSelect:d.a.func,search:d.a.string,showCount:d.a.bool},t.a=b},24:function(e,t){!function(){e.exports=this.wp.editor}()},29:function(e,t){!function(){e.exports=this.wp.blocks}()},3:function(e,t){!function(){e.exports=this.lodash}()},30:function(e,t,r){"use strict";var n=r(13),c=r.n(n),o=r(14),s=r.n(o),a=r(8),i=r.n(a),l=r(9),u=r.n(l),d=r(10),p=r.n(d),m=r(11),b=r.n(m),h=r(12),j=r.n(h),g=r(5),f=r.n(g),v=r(0),w=r(2),_=r(4),O=r(16),y=r(3),k=r(18),E=r.n(k),S=r(1),C=r.n(S),x=r(165);r(167);function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=Object(y.groupBy)(e,"parent"),n=Object(y.keyBy)(t,"id"),o=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!t.parent)return t.name?[t.name]:[];var r=e(n[t.parent]);return[].concat(s()(r),[t.name])},a=function e(t){return t.map(function(t){var s=r[t.id];return delete r[t.id],c()({},t,{breadcrumbs:o(n[t.parent]),children:s&&s.length?e(s):[]})})},i=a(r[0]||[]);return delete r[0],Object(y.forEach)(r,function(e){i.push.apply(i,s()(a(e||[])))}),i}var z=r(23),I={clear:Object(w.__)("Clear all selected items","woo-gutenberg-products-block"),list:Object(w.__)("Results","woo-gutenberg-products-block"),noItems:Object(w.__)("No items found.","woo-gutenberg-products-block"),noResults:Object(w.__)("No results for %s","woo-gutenberg-products-block"),search:Object(w.__)("Search for items","woo-gutenberg-products-block"),selected:function(e){return Object(w.sprintf)(Object(w._n)("%d item selected","%d items selected",e,"woo-gutenberg-products-block"),e)},updated:Object(w.__)("Search results updated.","woo-gutenberg-products-block")},R=function(e){function t(){var e;return i()(this,t),(e=p()(this,b()(t).apply(this,arguments))).onSelect=e.onSelect.bind(f()(f()(e))),e.onRemove=e.onRemove.bind(f()(f()(e))),e.onClear=e.onClear.bind(f()(f()(e))),e.isSelected=e.isSelected.bind(f()(f()(e))),e.defaultRenderItem=e.defaultRenderItem.bind(f()(f()(e))),e.renderList=e.renderList.bind(f()(f()(e))),e}return j()(t,e),u()(t,[{key:"onRemove",value:function(e){var t=this.props,r=t.isSingle,n=t.onChange,c=t.selected;return function(){r&&n([]);var t=Object(y.findIndex)(c,{id:e});n([].concat(s()(c.slice(0,t)),s()(c.slice(t+1))))}}},{key:"onSelect",value:function(e){var t=this,r=this.props,n=r.isSingle,c=r.onChange,o=r.selected;return function(){t.isSelected(e)?t.onRemove(e.id)():c(n?[e]:[].concat(s()(o),[e]))}}},{key:"onClear",value:function(){this.props.onChange([])}},{key:"isSelected",value:function(e){return-1!==Object(y.findIndex)(this.props.selected,{id:e.id})}},{key:"getFilteredList",value:function(e,t){var r=this.props.isHierarchical;if(!t)return r?N(e):e;var n=c()({},I,this.props.messages),o=new RegExp(Object(y.escapeRegExp)(t),"i");this.props.debouncedSpeak(n.updated);var s=e.map(function(e){return!!o.test(e.name)&&e}).filter(Boolean);return r?N(s,e):s}},{key:"defaultRenderItem",value:function(e){return Object(v.createElement)(z.a,e)}},{key:"renderList",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.props,c=n.isSingle,o=n.search,s=this.props.renderItem||this.defaultRenderItem;return e?e.map(function(e){return Object(v.createElement)(v.Fragment,{key:e.id},s({item:e,isSelected:t.isSelected(e),onSelect:t.onSelect,isSingle:c,search:o,depth:r}),t.renderList(e.children,r+1))}):null}},{key:"renderListSection",value:function(){var e=this.props,t=e.isLoading,r=e.search,n=this.getFilteredList(this.props.list,r),o=c()({},I,this.props.messages);return t?Object(v.createElement)("div",{className:"woocommerce-search-list__list is-loading"},Object(v.createElement)(_.Spinner,null)):n.length?Object(v.createElement)(_.MenuGroup,{label:o.list,className:"woocommerce-search-list__list"},this.renderList(n)):Object(v.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(v.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(v.createElement)(E.a,{icon:"notice-outline",role:"img","aria-hidden":"true",focusable:"false"})),Object(v.createElement)("span",{className:"woocommerce-search-list__not-found-text"},r?Object(w.sprintf)(o.noResults,r):o.noItems))}},{key:"renderSelectedSection",value:function(){var e=this,t=this.props,r=t.isLoading,n=t.isSingle,o=t.selected,s=c()({},I,this.props.messages);if(r||n||!o)return null;var a=o.length;return Object(v.createElement)("div",{className:"woocommerce-search-list__selected"},Object(v.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(v.createElement)("strong",null,s.selected(a)),a>0?Object(v.createElement)(_.Button,{isLink:!0,isDestructive:!0,onClick:this.onClear,"aria-label":s.clear},Object(w.__)("Clear all","woo-gutenberg-products-block")):null),o.map(function(t,r){return Object(v.createElement)(x.a,{key:r,label:t.name,id:t.id,remove:e.onRemove})}))}},{key:"render",value:function(){var e=this.props,t=e.className,r=void 0===t?"":t,n=e.search,o=e.setState,s=c()({},I,this.props.messages);return Object(v.createElement)("div",{className:"woocommerce-search-list ".concat(r)},this.renderSelectedSection(),Object(v.createElement)("div",{className:"woocommerce-search-list__search"},Object(v.createElement)(_.TextControl,{label:s.search,type:"search",value:n,onChange:function(e){return o({search:e})}})),this.renderListSection())}}]),t}(v.Component);R.propTypes={className:C.a.string,isHierarchical:C.a.bool,isLoading:C.a.bool,isSingle:C.a.bool,list:C.a.arrayOf(C.a.shape({id:C.a.number,name:C.a.string})),messages:C.a.shape({clear:C.a.string,list:C.a.string,noItems:C.a.string,noResults:C.a.string,search:C.a.string,selected:C.a.func,updated:C.a.string}),onChange:C.a.func.isRequired,renderItem:C.a.func,selected:C.a.array.isRequired,search:C.a.string,setState:C.a.func,debouncedSpeak:C.a.func,instanceId:C.a.number};t.a=Object(O.compose)([Object(O.withState)({search:""}),_.withSpokenMessages,O.withInstanceId])(R)},33:function(e,t,r){"use strict";function n(e,t){var r=e.attributes,n=e.attrOperator,c=e.categories,o=e.catOperator,s=e.orderby,a=e.products,i=e.columns||wc_product_block_data.default_columns,l={status:"publish",per_page:(e.rows||wc_product_block_data.default_rows)*i};switch(c&&c.length&&(l.category=c.join(","),o&&"all"===o&&(l.cat_operator="AND")),s&&("price_desc"===s?(l.orderby="price",l.order="desc"):"price_asc"===s?(l.orderby="price",l.order="asc"):"title"===s?(l.orderby="title",l.order="asc"):"menu_order"===s?(l.orderby="menu_order",l.order="asc"):l.orderby=s),r&&r.length>0&&(l.attribute_term=r.map(function(e){return e.id}).join(","),l.attribute=r[0].attr_slug,n&&(l.attr_operator="all"===n?"AND":"IN")),t){case"woocommerce/product-best-sellers":l.orderby="popularity";break;case"woocommerce/product-top-rated":l.orderby="rating";break;case"woocommerce/product-on-sale":l.on_sale=1;break;case"woocommerce/product-new":l.orderby="date";break;case"woocommerce/handpicked-products":l.include=a,l.per_page=a.length}return l}r.d(t,"a",function(){return n})},34:function(e,t,r){"use strict";var n=r(0),c=r(2),o=r(1),s=r.n(o),a=(r(175),function(e){var t=e.product,r=wc_product_block_data.placeholderImgSrc,o=null;return o=t.images.length?Object(n.createElement)("img",{src:t.images[0].src,alt:""}):Object(n.createElement)("img",{src:r,alt:""}),Object(n.createElement)("div",{className:"wc-product-preview"},o,Object(n.createElement)("div",{className:"wc-product-preview__title"},t.name),Object(n.createElement)("div",{className:"wc-product-preview__price",dangerouslySetInnerHTML:{__html:t.price_html}}),Object(n.createElement)("span",{className:"wp-block-button"},Object(n.createElement)("span",{className:"wc-product-preview__add-to-cart wp-block-button__link"},Object(c.__)("Add to cart","woo-gutenberg-products-block"))))});a.propTypes={product:s.a.shape({id:s.a.number,images:s.a.array,name:s.a.string,price_html:s.a.string}).isRequired},t.a=a},35:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r(163),c=r.n(n);function o(e,t){var r=e.attributes,n=r.attributes,o=r.attrOperator,s=r.categories,a=r.catOperator,i=r.orderby,l=r.products,u=r.columns||wc_product_block_data.default_columns,d=r.rows||wc_product_block_data.default_rows,p=new Map;switch(p.set("limit",d*u),p.set("columns",u),s&&s.length&&(p.set("category",s.join(",")),a&&"all"===a&&p.set("cat_operator","AND")),n&&n.length&&(p.set("terms",n.map(function(e){return e.id}).join(",")),p.set("attribute",n[0].attr_slug),o&&"all"===o&&p.set("terms_operator","AND")),i&&("price_desc"===i?(p.set("orderby","price"),p.set("order","DESC")):"price_asc"===i?(p.set("orderby","price"),p.set("order","ASC")):"date"===i?(p.set("orderby","date"),p.set("order","DESC")):p.set("orderby",i)),t){case"woocommerce/product-best-sellers":p.set("best_selling","1");break;case"woocommerce/product-top-rated":p.set("orderby","rating");break;case"woocommerce/product-on-sale":p.set("on_sale","1");break;case"woocommerce/product-new":p.set("orderby","date"),p.set("order","DESC");break;case"woocommerce/handpicked-products":if(!l.length)return"";p.set("ids",l.join(",")),p.set("limit",l.length);break;case"woocommerce/product-category":if(!s||!s.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var m="[products",b=!0,h=!1,j=void 0;try{for(var g,f=p[Symbol.iterator]();!(b=(g=f.next()).done);b=!0){var v=c()(g.value,2);m+=" "+v[0]+'="'+v[1]+'"'}}catch(e){h=!0,j=e}finally{try{b||null==f.return||f.return()}finally{if(h)throw j}}return m+="]"}},39:function(e,t,r){"use strict";var n=r(0),c=r(2),o=r(3),s=r(1),a=r.n(s),i=r(4),l=function(e){var t=e.columns,r=e.rows,s=e.setAttributes;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(c.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:function(e){var t=Object(o.clamp)(e,wc_product_block_data.min_columns,wc_product_block_data.max_columns);s({columns:Object(o.isNaN)(t)?"":t})},min:wc_product_block_data.min_columns,max:wc_product_block_data.max_columns}),Object(n.createElement)(i.RangeControl,{label:Object(c.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(e){var t=Object(o.clamp)(e,wc_product_block_data.min_rows,wc_product_block_data.max_rows);s({rows:Object(o.isNaN)(t)?"":t})},min:wc_product_block_data.min_rows,max:wc_product_block_data.max_rows}))};l.propTypes={columns:a.a.oneOfType([a.a.number,a.a.string]).isRequired,rows:a.a.oneOfType([a.a.number,a.a.string]).isRequired,setAttributes:a.a.func.isRequired},t.a=l},4:function(e,t){!function(){e.exports=this.wp.components}()},626:function(e,t,r){"use strict";r.r(t);var n=r(13),c=r.n(n),o=r(0),s=r(2),a=r(18),i=r.n(a),l=r(29),u=r(8),d=r.n(u),p=r(9),m=r.n(p),b=r(10),h=r.n(b),j=r(11),g=r.n(j),f=r(12),v=r.n(f),w=r(5),_=r.n(w),O=r(21),y=r(15),k=r.n(y),E=r(24),S=r(3),C=r(4),x=r(1),N=r.n(x),z=r(33),I=r(39),R=r(169),L=r(34),M=function(e){function t(){var e;return d()(this,t),(e=h()(this,g()(t).apply(this,arguments))).state={products:[],loaded:!1},e.debouncedGetProducts=Object(S.debounce)(e.getProducts.bind(_()(_()(e))),200),e}return v()(t,e),m()(t,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"componentDidUpdate",value:function(e){var t=this;["categories","catOperator","columns","rows"].reduce(function(r,n){return r||e.attributes[n]!==t.props.attributes[n]},!1)&&this.debouncedGetProducts()}},{key:"getProducts",value:function(){var e=this;k()({path:Object(O.addQueryArgs)("/wc-pb/v3/products",Object(z.a)(this.props.attributes,this.props.name))}).then(function(t){e.setState({products:t,loaded:!0})}).catch(function(){e.setState({products:[],loaded:!0})})}},{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,n=t.categories,c=t.catOperator,a=t.columns,i=t.rows;return Object(o.createElement)(E.InspectorControls,{key:"inspector"},Object(o.createElement)(C.PanelBody,{title:Object(s.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(o.createElement)(I.a,{columns:a,rows:i,setAttributes:r})),Object(o.createElement)(C.PanelBody,{title:Object(s.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(o.createElement)(R.a,{selected:n,onChange:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return e.id});r({categories:e})},operator:c,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:e})}})))}},{key:"render",value:function(){var e=this.props.attributes.columns,t=this.state,r=t.loaded,n=t.products,c=["wc-block-products-grid","wc-block-best-selling-products"];return e&&c.push("cols-".concat(e)),n&&!n.length&&(r?c.push("is-not-found"):c.push("is-loading")),Object(o.createElement)(o.Fragment,null,this.getInspectorControls(),Object(o.createElement)("div",{className:c.join(" ")},n.length?n.map(function(e){return Object(o.createElement)(L.a,{product:e,key:e.id})}):Object(o.createElement)(C.Placeholder,{icon:Object(o.createElement)(i.a,{icon:"stats-up-alt"}),label:Object(s.__)("Best Selling Products","woo-gutenberg-products-block")},r?Object(s.__)("No products found.","woo-gutenberg-products-block"):Object(o.createElement)(C.Spinner,null))))}}]),t}(o.Component);M.propTypes={attributes:N.a.object.isRequired,name:N.a.string.isRequired,setAttributes:N.a.func.isRequired};var P=M,B=r(35),T=r(171);Object(l.registerBlockType)("woocommerce/product-best-sellers",{title:Object(s.__)("Best Selling Products","woo-gutenberg-products-block"),icon:Object(o.createElement)(i.a,{icon:"stats-up-alt"}),category:"woocommerce",keywords:[Object(s.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(s.__)("Display a grid of your all-time best selling products.","woo-gutenberg-products-block"),supports:{align:["wide","full"]},attributes:c()({},T.a),edit:function(e){return Object(o.createElement)(P,e)},save:function(e){var t=e.attributes.align;return Object(o.createElement)(o.RawHTML,{className:t?"align".concat(t):""},Object(B.a)(e,"woocommerce/product-best-sellers"))}})}}));