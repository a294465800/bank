webpackJsonp([1],{"8Qi9":function(t,s){},C5b7:function(t,s,e){t.exports=e.p+"static/img/login.fcc4354.jpg"},DdlA:function(t,s,e){t.exports=e.p+"static/img/red-y.c3db09d.png"},GV2n:function(t,s){},IeJM:function(t,s){},MS1t:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]},i=e("VU/8")({name:"app"},n,!1,function(t){e("IeJM")},null,null).exports,o=e("/ocq"),r={data:function(){return{loginForm:{username:"",password:""},formCheck:{username:{message:"帐号不能为空"},password:{message:"密码不能为空"}},wrongTip:{username:!1,password:!1}}},created:function(){},methods:{login:function(){var t=this;if(!this.loginForm.username||!this.loginForm.password)return!1;this.$http.postLogin(this.loginForm,function(s){sessionStorage._token=s.data.data,t.$router.push("/")})},checkForm:function(t){""===this.loginForm[t]?this.wrongTip[t]=!0:this.wrongTip[t]=!1}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"full-wrap flex-column flex-center"},[a("img",{staticClass:"login-img",attrs:{src:e("C5b7"),alt:"不积跬步，无以至千里。不积小流，无以成江河。"}}),t._v(" "),a("div",{staticClass:"login-wrap"},[a("form",[a("label",{staticClass:"inline-label"},[a("span",[t._v("帐号：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.username,expression:"loginForm.username"}],class:{error:t.wrongTip.username},attrs:{type:"text",placeholder:"请输入帐号"},domProps:{value:t.loginForm.username},on:{blur:function(s){t.checkForm("username")},input:function(s){s.target.composing||t.$set(t.loginForm,"username",s.target.value)}}}),t._v(" "),t.wrongTip.username?a("p",{staticClass:"form-tips"},[t._v(t._s(t.formCheck.username.message))]):t._e()]),t._v(" "),a("label",{staticClass:"inline-label"},[a("span",[t._v("密码：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],class:{error:t.wrongTip.password},attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.loginForm.password},on:{blur:function(s){t.checkForm("password")},input:function(s){s.target.composing||t.$set(t.loginForm,"password",s.target.value)}}}),t._v(" "),t.wrongTip.password?a("p",{staticClass:"form-tips"},[t._v(t._s(t.formCheck.password.message))]):t._e()]),t._v(" "),a("button",{staticClass:"form-btn",on:{click:function(s){s.preventDefault(),t.login(s)}}},[t._v("登录")])])]),t._v(" "),a("div",{staticClass:"copy"},[t._v("© Sennki 2017 All Rights Reserved")])])},staticRenderFns:[]},c=e("VU/8")(r,l,!1,function(t){e("WtCc")},"data-v-45e0915c",null).exports,u={data:function(){return{}},methods:{saveLimit:function(t){sessionStorage.limit=t}}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"full-wrap"},[e("ul",{staticClass:"index-list flex-column flex-center"},[e("li",[e("router-link",{attrs:{to:"/mistake"}},[t._v("温故知新")])],1),t._v(" "),e("li",{on:{click:function(s){t.saveLimit(10)}}},[e("router-link",{attrs:{to:{name:"TrainsList"}}},[t._v("10道小测试")])],1),t._v(" "),e("li",{on:{click:function(s){t.saveLimit(20)}}},[e("router-link",{attrs:{to:{name:"TrainsList"}},on:{click:function(s){t.sessionStorage.limit=20}}},[t._v("20道小测试")])],1),t._v(" "),e("li",{on:{click:function(s){t.saveLimit(30)}}},[e("router-link",{attrs:{to:{name:"TrainsList"}},on:{click:function(s){t.sessionStorage.limit=30}}},[t._v("30道小测试")])],1),t._v(" "),e("li",{on:{click:function(s){t.saveLimit(50)}}},[e("router-link",{attrs:{to:{name:"TrainsList"}},on:{click:function(s){t.sessionStorage.limit=50}}},[t._v("50道小测试")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/rank"}},[t._v("排名查询")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/examination/list"}},[t._v("考试入口")])],1)])])},staticRenderFns:[]},d=e("VU/8")(u,p,!1,function(t){e("GV2n")},"data-v-81da5a5c",null).exports,m={data:function(){return{loading:!0,examTipsDialog:!1,dialogMessage:"",mistakes:[],answer:[]}},created:function(){var t=this;this.$http.getWrongQuestions({token:sessionStorage._token},function(s){var e=s.data.data;for(var a in e)1===e[a].type?t.answer[a]="":t.answer[a]=[];t.mistakes=e,t.loading=!1})},methods:{examConfirm:function(){this.examTipsDialog=!1}}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.loading?e("div",{staticClass:"loading-wrap"},[e("i",{staticClass:"el-icon-loading"})]):e("div",{staticClass:"wrap"},[e("h1",{staticClass:"test-title"},[t._v("温故知新")]),t._v(" "),t.mistakes.length>0?[e("ul",{staticClass:"question-list"},t._l(t.mistakes,function(s,a){return e("li",{key:s.id,staticClass:"question-item"},[e("h3",[t._v(t._s(a+1+"."+s.topic))]),t._v(" "),1===s.type?e("el-radio-group",{staticClass:"question-option",model:{value:t.answer[a],callback:function(s){t.$set(t.answer,a,s)},expression:"answer[index]"}},[e("el-radio",{attrs:{label:"A"}},[t._v(t._s("A."+s.option_a))]),t._v(" "),e("el-radio",{attrs:{label:"B"}},[t._v(t._s("B."+s.option_b))]),t._v(" "),e("el-radio",{attrs:{label:"C"}},[t._v(t._s("C."+s.option_c))]),t._v(" "),e("el-radio",{attrs:{label:"D"}},[t._v(t._s("D."+s.option_d))])],1):2===s.type?e("el-checkbox-group",{staticClass:"question-option",model:{value:t.answer[a],callback:function(s){t.$set(t.answer,a,s)},expression:"answer[index]"}},[e("el-checkbox",{attrs:{label:"A"}},[t._v(t._s("A."+s.option_a))]),t._v(" "),e("el-checkbox",{attrs:{label:"B"}},[t._v(t._s("B."+s.option_b))]),t._v(" "),e("el-checkbox",{attrs:{label:"C"}},[t._v(t._s("C."+s.option_c))]),t._v(" "),e("el-checkbox",{attrs:{label:"D"}},[t._v(t._s("D."+s.option_d))])],1):t._e(),t._v(" "),e("p",{staticClass:"answer-p"},[t._v("参考答案：\n          "),e("span",{staticClass:"answer"},[t._v(t._s(s.answer))])])],1)}))]:[e("p",{staticStyle:{"text-align":"center"}},[t._v("暂无内容")])],t._v(" "),e("el-dialog",{attrs:{title:"提示",visible:t.examTipsDialog,width:"80%",center:""},on:{"update:visible":function(s){t.examTipsDialog=s}}},[e("span",{staticClass:"tips-message"},[t._v(t._s(t.dialogMessage))]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:function(s){t.examTipsDialog=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.examConfirm}},[t._v("确 定")])],1)])],2)},staticRenderFns:[]},f=e("VU/8")(m,_,!1,function(t){e("c28/")},"data-v-dcc4d01c",null).exports,v={data:function(){return{list:[],title:""}},created:function(){var t=this;this.$http.getTrainsList({token:sessionStorage._token},function(s){t.list=s.data.data}),this.title="（"+sessionStorage.limit+"道题）"},methods:{startExamination:function(t){sessionStorage.exam_id=t.id,this.$router.push({name:"Trains"})}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wrap"},[e("h3",{staticClass:"test-title"},[t._v("请选择题库 "+t._s(t.title))]),t._v(" "),e("ul",{staticClass:"test-list"},[t.list.length>0?t._l(t.list,function(s,a){return e("li",{key:s.id,staticClass:"test-item"},[e("span",{staticClass:"test-name"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"test-btn",on:{click:function(e){t.startExamination(s)}}},[t._v("开始练习")])])}):[e("p",[t._v("还没有题库")])]],2)])},staticRenderFns:[]},g=e("VU/8")(v,h,!1,function(t){e("8Qi9")},"data-v-5e197ab4",null).exports,x=e("mvHQ"),C=e.n(x),k=e("Gu7T"),w=e.n(k),b={data:function(){return{loading:!0,examTipsDialog:!1,dialogMessage:"",questions:[],warehouse:{},answer:[]}},created:function(){var t=this,s={limit:sessionStorage.limit,warehouse_id:sessionStorage.exam_id,token:sessionStorage._token};this.exam_id=sessionStorage.exam_id,this.$http.getTrains(s,function(s){var e=s.data.data.questions;for(var a in e)1===e[a].type?t.answer[a]="":t.answer[a]=[];t.questions=s.data.data.questions,t.warehouse=s.data.data.warehouse,t.loading=!1})},methods:{submit:function(){var t=this,s=this.answer,e=[];for(var a in s)s[a][0]||e.push(a+1);if(e.length>0){this.examTipsDialog=!0;var n="你还有第"+e.join(",")+"题没有完成，请先完成答卷？";this.dialogMessage=n}else{var i={warehouse_id:this.exam_id,token:sessionStorage._token,answers:[]};this.answer.forEach(function(s,e){i.answers.push({id:t.questions[e].id,answer:[].concat(w()(t.answer[e]))})}),this.$http.postTrains(i,function(s){sessionStorage.result=C()(s.data.data),t.$router.push({name:"Reword"})})}},examConfirm:function(){this.examTipsDialog=!1}}},F={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.loading?e("div",{staticClass:"loading-wrap"},[e("i",{staticClass:"el-icon-loading"})]):e("div",{staticClass:"wrap"},[e("h1",{staticClass:"test-title"},[t._v(t._s(t.warehouse.name))]),t._v(" "),t.questions.length>0?[e("ul",{staticClass:"question-list"},t._l(t.questions,function(s,a){return e("li",{key:s.id,staticClass:"question-item"},[e("h3",[t._v(t._s(a+1+"."+s.topic))]),t._v(" "),1===s.type?e("el-radio-group",{staticClass:"question-option",model:{value:t.answer[a],callback:function(s){t.$set(t.answer,a,s)},expression:"answer[index]"}},[e("el-radio",{attrs:{label:"A"}},[t._v(t._s("A."+s.option_a))]),t._v(" "),e("el-radio",{attrs:{label:"B"}},[t._v(t._s("B."+s.option_b))]),t._v(" "),e("el-radio",{attrs:{label:"C"}},[t._v(t._s("C."+s.option_c))]),t._v(" "),e("el-radio",{attrs:{label:"D"}},[t._v(t._s("D."+s.option_d))])],1):2===s.type?e("el-checkbox-group",{staticClass:"question-option",model:{value:t.answer[a],callback:function(s){t.$set(t.answer,a,s)},expression:"answer[index]"}},[e("el-checkbox",{attrs:{label:"A"}},[t._v(t._s("A."+s.option_a))]),t._v(" "),e("el-checkbox",{attrs:{label:"B"}},[t._v(t._s("B."+s.option_b))]),t._v(" "),e("el-checkbox",{attrs:{label:"C"}},[t._v(t._s("C."+s.option_c))]),t._v(" "),e("el-checkbox",{attrs:{label:"D"}},[t._v(t._s("D."+s.option_d))])],1):t._e()],1)})),t._v(" "),e("el-button",{staticClass:"submit-btn",attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])]:[e("p",{staticStyle:{"text-align":"center"}},[t._v("暂无内容")])],t._v(" "),e("el-dialog",{attrs:{title:"提示",visible:t.examTipsDialog,width:"80%",center:""},on:{"update:visible":function(s){t.examTipsDialog=s}}},[e("span",{staticClass:"tips-message"},[t._v(t._s(t.dialogMessage))]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:function(s){t.examTipsDialog=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.examConfirm}},[t._v("确 定")])],1)])],2)},staticRenderFns:[]},y=e("VU/8")(b,F,!1,function(t){e("bakX")},"data-v-c8516822",null).exports,T={data:function(){return{list:[],title:""}},created:function(){var t=this;this.$http.getExaminations({token:sessionStorage._token},function(s){t.list=s.data.data})},methods:{startExamination:function(t){sessionStorage.exam_id=t.id,this.$router.push({name:"Examination"})}}},S={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wrap"},[e("h3",{staticClass:"test-title"},[t._v("请选择考试")]),t._v(" "),e("ul",{staticClass:"test-list"},[t.list.length>0?t._l(t.list,function(s,a){return e("li",{key:s.id,staticClass:"test-item"},[e("span",{staticClass:"test-name"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"test-btn",on:{click:function(e){t.startExamination(s)}}},[t._v("开始考试")])])}):[e("p",[t._v("还没有考试")])]],2)])},staticRenderFns:[]},D=e("VU/8")(T,S,!1,function(t){e("NQfF")},"data-v-2dc70ad9",null).exports,E={data:function(){return{loading:!0,examTipsDialog:!1,examConfirmDialog:!1,dialogMessage:"",questions:[],answer:[],exam_id:"",leftTime:"",timeStr:""}},created:function(){var t=this,s=sessionStorage.exam_id;this.exam_id=s,this.$http.getExamination(s,{token:sessionStorage._token},function(s){var e=s.data.data;for(var a in e.question)1===e.question[a].type?t.answer[a]="":t.answer[a]=[];t.questions=e.question,t.warehouse=e.exam,t.leftTime=e.exam.time,t.leftTimeFn(),t.loading=!1})},methods:{leftTimeFn:function(){function t(t){return t<10?"0"+t:t}var s=this,e=setInterval(function(){s.leftTime<=0&&(clearInterval(e),s.submit(!0));var a=s.leftTime,n=Math.floor(a/60),i=Math.floor((a-60*n)/3600),o=a-60*n-3600*i;n=t(n),i=t(i),o=t(o),s.timeStr=i+":"+n+":"+o,s.leftTime--},1e3)},submit:function(t){var s=this,e=this.answer,a=[];for(var n in e)e[n][0]||a.push(1*n+1);if(a.length>0&&!t){this.examTipsDialog=!0;var i="你还有第"+a.join(",")+"题没有完成，请先完成答卷？";this.dialogMessage=i}else{var o={token:sessionStorage._token,answer:[]};e.forEach(function(t,e){var a=s.questions[e].id;o.answer[a]=[].concat(w()(t))}),this.$http.postExamination(this.exam_id,o,function(t){s.examConfirmDialog=!0})}},examConfirm:function(){this.examTipsDialog=!1},examPostConfirm:function(){this.examConfirmDialog=!1,this.$router.push("/")}}},$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.loading?e("div",{staticClass:"loading-wrap"},[e("i",{staticClass:"el-icon-loading"})]):e("div",{staticClass:"wrap"},[t.timeStr?e("div",{staticClass:"clock"},[t._v("剩余时间：\n    "),e("span",{staticClass:"time"},[t._v(t._s(t.timeStr))])]):t._e(),t._v(" "),e("h1",{staticClass:"test-title"},[t._v(t._s(t.warehouse.name))]),t._v(" "),t.questions.length>0?[e("ul",{staticClass:"question-list"},t._l(t.questions,function(s,a){return e("li",{key:s.id,staticClass:"question-item"},[e("h3",[t._v(t._s(a+1+"."+s.topic))]),t._v(" "),1===s.type?e("el-radio-group",{staticClass:"question-option",model:{value:t.answer[a],callback:function(s){t.$set(t.answer,a,s)},expression:"answer[index]"}},[e("el-radio",{attrs:{label:"A"}},[t._v(t._s("A."+s.option_a))]),t._v(" "),e("el-radio",{attrs:{label:"B"}},[t._v(t._s("B."+s.option_b))]),t._v(" "),e("el-radio",{attrs:{label:"C"}},[t._v(t._s("C."+s.option_c))]),t._v(" "),e("el-radio",{attrs:{label:"D"}},[t._v(t._s("D."+s.option_d))])],1):2===s.type?e("el-checkbox-group",{staticClass:"question-option",model:{value:t.answer[a],callback:function(s){t.$set(t.answer,a,s)},expression:"answer[index]"}},[e("el-checkbox",{attrs:{label:"A"}},[t._v(t._s("A."+s.option_a))]),t._v(" "),e("el-checkbox",{attrs:{label:"B"}},[t._v(t._s("B."+s.option_b))]),t._v(" "),e("el-checkbox",{attrs:{label:"C"}},[t._v(t._s("C."+s.option_c))]),t._v(" "),e("el-checkbox",{attrs:{label:"D"}},[t._v(t._s("D."+s.option_d))])],1):t._e()],1)})),t._v(" "),e("el-button",{staticClass:"submit-btn",attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])]:[e("p",{staticStyle:{"text-align":"center"}},[t._v("暂无内容")])],t._v(" "),e("el-dialog",{attrs:{title:"提示",visible:t.examTipsDialog,width:"80%",center:""},on:{"update:visible":function(s){t.examTipsDialog=s}}},[e("span",{staticClass:"tips-message"},[t._v(t._s(t.dialogMessage))]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:function(s){t.examTipsDialog=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.examConfirm}},[t._v("确 定")])],1)]),t._v(" "),e("el-dialog",{attrs:{title:"提示",visible:t.examConfirmDialog,width:"80%",center:""},on:{"update:visible":function(s){t.examConfirmDialog=s}}},[e("span",{staticClass:"tips-message"},[t._v("答案提交成功，返回首页吗？")]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:function(s){t.examConfirmDialog=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.examPostConfirm}},[t._v("确 定")])],1)])],2)},staticRenderFns:[]},q=e("VU/8")(E,$,!1,function(t){e("R/gf")},"data-v-1053eba8",null).exports,L={data:function(){return{loading:!0,rankList:[]}},created:function(){var t=this;this.$http.getRank({token:sessionStorage._token},function(s){t.rankList=s.data.data,t.loading=!1})}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.loading?e("div",{staticClass:"loading-wrap"},[e("i",{staticClass:"el-icon-loading"})]):e("div",{staticClass:"wrap"},[e("h1",{staticClass:"rank-title"},[t._v("考试成绩排名")]),t._v(" "),e("ul",{staticClass:"rank-list"},[t._m(0,!1,!1),t._v(" "),t._l(t.rankList,function(s,a){return e("li",{key:s.id,staticClass:"rank-row",class:{stripe:a%2==1}},[e("span",{staticClass:"rank-index"},[t._v(t._s(a+1))]),t._v(" "),e("span",{staticClass:"rank-number"},[t._v(t._s(s.username))]),t._v(" "),e("span",{staticClass:"rank-name"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"rank-score"},[t._v(t._s(s.score)+"分")])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"rank-head"},[s("span",{staticClass:"rank-index"},[this._v("排名")]),this._v(" "),s("span",{staticClass:"rank-number"},[this._v("员工号")]),this._v(" "),s("span",{staticClass:"rank-name"},[this._v("姓名")]),this._v(" "),s("span",{staticClass:"rank-score"},[this._v("分数")])])}]},A=e("VU/8")(L,R,!1,function(t){e("SnEW")},"data-v-76080ae2",null).exports,M={data:function(){return{isShake:!1,envelopeShow:!0,result:{}}},created:function(){this.result=JSON.parse(sessionStorage.result)},methods:{openEnvelope:function(){var t=this;this.isShake=!0;var s={number:this.result.number};setTimeout(function(){t.$http.getCash(s,function(s){t.isShake=!1,t.envelopeShow=!1})},2e3)}}},B={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"wrap"},[s("h1",{staticClass:"reword-title"},[this._v("感谢您的提交")]),this._v(" "),s("div",{staticClass:"reword-content"},[s("h3",{staticClass:"reword-tip"},[this._v("您的分数是："+this._s(this.result.score)+" 分，正确率："+this._s((100*this.result.accuracy).toFixed(2))+" %：")]),this._v(" "),this.result.price>0?[this.envelopeShow?s("img",{staticClass:"reword-img",class:{"reword-img-shake":this.isShake},attrs:{src:e("eLPG"),alt:"红包"},on:{click:this.openEnvelope}}):s("div",{staticClass:"reword-img"},[s("img",{attrs:{src:e("DdlA"),alt:"已拆开"}}),this._v(" "),s("span",{staticClass:"reword-tips"},[this._v("恭喜您！获得了 "),s("br"),this._v(this._s(this.result.price)+" 元")])])]:[s("p",{staticStyle:{"text-align":"center","font-size":"16px"}},[this._v("没有获得红包哦~")])]],2)])},staticRenderFns:[]},V=e("VU/8")(M,B,!1,function(t){e("MS1t")},"data-v-5825f171",null).exports;a.default.use(o.a);var z=new o.a({routes:[{path:"/login",name:"Login",component:c},{path:"/mistake",name:"Mistake",component:f},{path:"/",name:"Index",component:d},{path:"/trains/list",name:"TrainsList",component:g,beforeEnter:function(t,s,e){s.name||e("/"),e()}},{path:"/trains",name:"Trains",component:y,beforeEnter:function(t,s,e){s.name||e("trains/list"),e()}},{path:"/examination/list",name:"ExaminationList",component:D,beforeEnter:function(t,s,e){s.name||e("/"),e()}},{path:"/examination",name:"Examination",component:q,beforeEnter:function(t,s,e){s.name||e("examination/list"),e()}},{path:"/rank",name:"Rank",component:A},{path:"/reword",name:"Reword",component:V,beforeEnter:function(t,s,e){s.name||e("trains/list"),e()}}]}),U=(e("erWL"),e("//Fk")),W=e.n(U),N=e("mtWM"),P=e.n(N),Q=e("mw3O"),j=e.n(Q),G="http://119.23.202.220:8099/api/";P.a.defaults.timeout=1e4,P.a.defaults.withCredentials=!0,P.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",P.a.interceptors.request.use(function(t){return"post"===t.method&&(t.data=j.a.stringify(t.data)),t},function(t){return console.log("错误的传参！"),W.a.reject(t)});var I={host:G,errFnc:function(t){window.alert(t.msg)},postLogin:function(t,s){var e=this;P.a.post(G+"staff/login",t).then(function(t){"200"===t.data.code?"function"==typeof s&&s(t):e.errFnc(t.data)}).catch(function(t){e.errFnc(t)})},getWrongQuestions:function(t,s){var e=this;P.a.get(G+"mistakes",{params:t}).then(function(t){"200"===t.data.code?"function"==typeof s&&s(t):e.errFnc(t.data)}).catch(function(t){e.errFnc(t)})},getTrainsList:function(t,s){var e=this;P.a.get(G+"trains",{params:t}).then(function(t){"200"===t.data.code?"function"==typeof s&&s(t):e.errFnc(t.data)}).catch(function(t){e.errFnc(t)})},getTrains:function(t,s){var e=this;P.a.get(G+"questions",{params:t}).then(function(t){"200"===t.data.code?"function"==typeof s&&s(t):e.errFnc(t.data)}).catch(function(t){e.errFnc(t)})},postTrains:function(t,s){var e=this;P.a.post(G+"finish/train",t).then(function(t){"200"===t.data.code?"function"==typeof s&&s(t):e.errFnc(t.data)}).catch(function(t){e.errFnc(t)})},getExaminations:function(t,s){var e=this;P.a.get(G+"exams",{params:t}).then(function(t){"200"===t.data.code?"function"==typeof s&&s(t):e.errFnc(t.data)}).catch(function(t){e.errFnc(t)})},getExamination:function(t,s,e){var a=this;P.a.get(G+"exam/"+t,{params:s}).then(function(t){"200"===t.data.code?"function"==typeof e&&e(t):a.errFnc(t.data)}).catch(function(t){a.errFnc(t)})},postExamination:function(t,s,e){var a=this;P.a.post(G+"finish/exam/"+t,s).then(function(t){"200"===t.data.code?"function"==typeof e&&e(t):a.errFnc(t.data)}).catch(function(t){a.errFnc(t)})},getRank:function(t,s){var e=this;P.a.get(G+"staffs",{params:t}).then(function(t){"200"===t.data.code?"function"==typeof s&&s(t):e.errFnc(t.data)}).catch(function(t){e.errFnc(t)})},getCash:function(t,s){var e=this;P.a.get(G+"cash",{params:t}).then(function(t){"200"===t.data.code?"function"==typeof s&&s(t):e.errFnc(t.data)}).catch(function(t){e.errFnc(t)})}},J=e("zL8q"),H=e.n(J);e("tvR6");a.default.prototype.$http=I,a.default.use(H.a),a.default.config.productionTip=!1,z.beforeEach(function(t,s,e){sessionStorage._token?"Login"===t.name?e(s.path):e():"Login"!==t.name?e({path:"/login"}):e()}),new a.default({el:"#app",router:z,template:"<App/>",components:{App:i}})},NQfF:function(t,s){},"R/gf":function(t,s){},SnEW:function(t,s){},WtCc:function(t,s){},bakX:function(t,s){},"c28/":function(t,s){},eLPG:function(t,s,e){t.exports=e.p+"static/img/red-w.5dcbc7d.png"},erWL:function(t,s){},tvR6:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.9fea2664e17e8da067ef.js.map