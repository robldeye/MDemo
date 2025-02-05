"use strict";(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[186],{97186:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(78673),jexcel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(69424),jexcel__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(jexcel__WEBPACK_IMPORTED_MODULE_1__);class SpreadSheet extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.A{constructor(opts){super(opts);let orig=opts.orig;this.div_id=orig.id,this.sheet_id=`${this.div_id}_sheet`,this.data=eval(`${this.div_id}_data`),this.autograde=$(orig).data("autograde"),this.suffix=window[`${this.div_id}_asserts`],this.mindimensions=$(orig).data("mindimensions"),this.colwidths=$(orig).data("colwidths"),this.coltitles=eval($(orig).data("coltitles")),this.maxHeight=50,this.renderSheet(),this.autograde&&(this.addAutoGradeButton(),this.addOutput()),this.caption="Spreadsheet",this.divid=this.div_id,this.containerDiv=document.getElementById(this.div_id),this.addCaption("runestone"),this.indicate_component_ready()}renderSheet(){let t=document.getElementById(this.sheet_id),e={data:this.data,tableHeight:this.maxHeight};if(this.mindimensions&&(e.minDimensions=this.mindimensions),e.columns=[],this.colwidths)for(let t of this.colwidths)e.columns.push({width:t});if(this.coltitles)for(let t in this.coltitles)e.columns[t]?e.columns[t].title=unescape(this.coltitles[t]):e.columns.push({title:this.coltitles[t]});if(this.table=jexcel__WEBPACK_IMPORTED_MODULE_1___default()(t,e),this.suffix)for(let t of this.suffix){let e,i,s,o;[e,i,s,o]=t.split(/\s+/),$(`#${this.div_id}_sheet`).find(this.getCellSelector(i)).css("background-color","#d4e3ff")}}addAutoGradeButton(){let t=document.getElementById(this.div_id);var e=document.createElement("button");$(e).text("Check"),$(e).addClass("btn btn-success run-button"),t.appendChild(e),this.gradeButton=e,$(e).click(this.doAutoGrade.bind(this)),$(e).attr("type","button"),$(e).css("display","block")}addOutput(){this.output=document.createElement("pre"),this.output.id=`${this.div_id}_stdout`,$(this.output).css("visibility","hidden"),document.getElementById(this.div_id).appendChild(this.output)}doAutoGrade(){let t=this.suffix;this.passed=0,this.failed=0;let e="";t=t.filter((function(t){return t.indexOf("assert")>-1}));for(let i of t){let t,s,o,n;[t,s,o,n]=i.split(/\s+/),e+=this.testOneAssert(s,o,n),e+="\n"}let i=100*this.passed/(this.passed+this.failed);i=i.toLocaleString(void 0,{maximumFractionDigits:2}),e+=`You passed ${this.passed} out of ${this.passed+this.failed} tests for ${i}%`,this.logBookEvent({event:"unittest",div_id:this.div_id,course:eBookConfig.course,act:`percent:${i}:passed:${this.passed}:failed:${this.failed}`}),$(this.output).css("visibility","visible"),$(this.output).text(e)}testOneAssert(t,e,i){let s=this.getCellDisplayValue(t),o="";return{"==":function(t,e){return t==e},"!=":function(t,e){return t!=e},">":function(t,e){return t>e},"<":function(t,e){return t>e}}[e](s,i)?(o=`Pass: ${s} ${e} ${i} in ${t}`,$(`#${this.div_id}_sheet`).find(this.getCellSelector(t)).css("background-color","#ccffcc"),this.passed++):(o=`Failed ${s} ${e} ${i} in cell ${t}`,$(`#${this.div_id}_sheet`).find(this.getCellSelector(t)).css("background-color","#ff9980"),this.failed++),o}getCellSource(t){return this.table.getValue(t)}getCellDisplayValue(t){return this.table.el.querySelector(this.getCellSelector(t)).innerText}getCellSelector(t){let e=t.match(/\$?([A-Z]+)\$?([0-9]+)/);return`[data-x="${this.columnToIndex(e[1])}"][data-y="${e[2]-1}"]`}columnToIndex(t){let e=0;for(let i=0,s=t.length-1;i<t.length;i+=1,s-=1)e+=Math.pow(26,s)*("ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(t[i])+1);return e-1}}$(document).on("runestone:login-complete",(function(){$("[data-component=spreadsheet]").each((function(t){var e={orig:this,useRunestoneServices:eBookConfig.useRunestoneServices};try{window.componentMap[this.id]=new SpreadSheet(e)}catch(t){console.log(`Error rendering SpreadSheet Problem ${this.id}\n                         Details: ${t}`),console.log(t.stack)}}))})),void 0===window.component_factory&&(window.component_factory={}),window.component_factory.spreadsheet=function(t){return new SpreadSheet(t)}}}]);
//# sourceMappingURL=186.js.map