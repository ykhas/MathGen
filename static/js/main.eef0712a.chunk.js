(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{45:function(e,t,n){e.exports=n(55)},50:function(e,t,n){},51:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),o=n.n(s),c=(n(50),n(26)),i=n(27),l=n(28),u=n(39),h=n(38);function m(e){var t=Math.floor(10*Math.random()+1),n=Math.floor(10*Math.random()+1);return new d(t,n,e)}var d=function(){function e(t,n,a){Object(c.a)(this,e),this.firstOperand=void 0,this.secondOperand=void 0,this.expressionEquals=void 0,this.result=void 0,this.compute=function(e,t,n){var a;switch(n){case"+":a=e+t;break;case"-":a=e-t;break;case"\xd7":a=e*t;break;case"\xf7":a=e/t}return a},this.firstOperand=t,this.secondOperand=n,this.expressionEquals="".concat(t,"+").concat(n,"="),this.result=this.compute(t,n,a)}return Object(i.a)(e,[{key:"equals",value:function(e){return e.expressionEquals===this.expressionEquals&&e.result===this.result}}]),e}(),p=(n(51),n(91)),f=n(90),w=n(93),v=n(92);function g(e){return r.a.createElement("form",null,r.a.createElement(p.a,{id:"standard-basic",value:e.answer}))}var E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(c.a)(this,n),a=t.call(this,e);for(var r=[],s=0;s<10;s++){var o;do{o=m("+")}while(r.some((function(e){return e.equals(o)})));r.push(o)}return a.state={problems:r,showAnswers:!1},a.toggleAnswers=a.toggleAnswers.bind(Object(l.a)(a)),a}return Object(i.a)(n,[{key:"toggleAnswers",value:function(){this.setState((function(e){return{showAnswers:!e.showAnswers}}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{control:r.a.createElement(v.a,{checked:this.state.showAnswers,onChange:this.toggleAnswers,name:"checkedB",color:"primary"}),label:"Toggle Answers"}),r.a.createElement("ol",null,this.state.problems.map((function(t){return r.a.createElement("li",{key:"".concat(t.firstOperand).concat(t.secondOperand)},r.a.createElement(f.a,{container:!0,justify:"flex-start",alignItems:"center",spacing:1},r.a.createElement(f.a,{item:!0},t.expressionEquals),r.a.createElement(f.a,{item:!0,xs:1},r.a.createElement(g,{answer:e.state.showAnswers?t.result:""}))))}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.eef0712a.chunk.js.map