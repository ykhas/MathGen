(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{57:function(e,t,a){e.exports=a(66)},62:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),c=(a(62),a(15)),s=a(16),l=a(22),u=a(27),m=a(26),h=a(100),p=a(102),v=a(103),d=a(68);function f(e){var t=10,a=Math.floor(Math.random()*t+1);"- nonNegative"===e&&(t=a);var n=Math.floor(Math.random()*t+1);return new E(a,n,e)}var E=function(){function e(t,a,n){Object(c.a)(this,e),this.firstOperand=void 0,this.secondOperand=void 0,this.expressionEquals=void 0,this.result=void 0,this.compute=function(e,t,a){var n;switch(a){case"+":n=e+t;break;case"-":case"- nonNegative":n=e-t;break;case"\xd7":n=e*t;break;case"\xf7":n=e/t}return n},this.firstOperand=t,this.secondOperand=a;var r="- nonNegative"===n?"-":n;this.expressionEquals="".concat(t).concat(r).concat(a,"="),this.result=this.compute(t,a,n)}return Object(s.a)(e,[{key:"equals",value:function(e){return e.expressionEquals===this.expressionEquals&&e.result===this.result}}]),e}(),b=a(104);function g(e){return e.showAnswer?r.a.createElement(w,{answer:e.answer}):r.a.createElement(k,{answer:e.answer})}function w(e){return r.a.createElement("form",null,r.a.createElement(b.a,{id:"standard-basic",value:e.answer}))}var k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={currentVal:"",correct:!1},n}return Object(s.a)(a,[{key:"onChange",value:function(e){console.log(typeof e),e.target.value===this.props.answer.toString()?this.setState({correct:!0}):this.setState({correct:!1})}},{key:"render",value:function(){var e=this.state.correct?"primary":"secondary";return r.a.createElement(b.a,{color:e,name:"phone",onChange:this.onChange.bind(this)})}}]),a}(r.a.Component),O=a(101),y=a(107),j=a(106);function C(e){for(var t=[],a=0;a<20;a++){var n;do{n=f(e)}while(t.some((function(e){return e.equals(n)})));t.push(n)}return t}var A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(c.a)(this,a);var r=C((n=t.call(this,e)).props.operation);return n.state={problems:r,showAnswers:!1},n.toggleAnswers=n.toggleAnswers.bind(Object(l.a)(n)),n.regenerateProblems=n.regenerateProblems.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"toggleAnswers",value:function(){this.setState((function(e){return{showAnswers:!e.showAnswers}}))}},{key:"regenerateProblems",value:function(){var e=C(this.props.operation);this.setState((function(t){return{problems:e}}))}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{container:!0,alignItems:"center",direction:"column"},r.a.createElement(h.a,{container:!0,item:!0,justify:"center",spacing:1},r.a.createElement(h.a,{item:!0},r.a.createElement(O.a,{control:r.a.createElement(y.a,{checked:this.state.showAnswers,onChange:this.toggleAnswers,name:"checkedB",color:"primary"}),label:"Toggle Answers"})),r.a.createElement(h.a,{item:!0},r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:this.regenerateProblems},"Refresh"))),r.a.createElement(h.a,{container:!0,item:!0,justify:"center"},r.a.createElement("ol",null,this.state.problems.map((function(t){return r.a.createElement("li",{key:"".concat(t.firstOperand).concat(t.secondOperand)},r.a.createElement(j.a,{width:290},r.a.createElement(h.a,{container:!0,justify:"space-between",alignItems:"center",spacing:0},r.a.createElement(h.a,{item:!0},t.expressionEquals),r.a.createElement(h.a,{item:!0},r.a.createElement(g,{answer:t.result,showAnswer:e.state.showAnswers})))))})))))}}]),a}(r.a.Component),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={operation:null,subtractionPicked:null},n.pickOperation=n.pickOperation.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"pickOperation",value:function(e){var t=this;return"subtraction"===e?function(e){t.setState({subtractionPicked:!0})}:function(a){t.setState({operation:e})}}},{key:"render",value:function(){return this.state.operation?r.a.createElement(A,{operation:this.state.operation}):this.state.subtractionPicked?r.a.createElement(v.a,null,r.a.createElement(h.a,{container:!0,justify:"center",alignItems:"center",direction:"column",spacing:3},r.a.createElement(h.a,{item:!0},r.a.createElement(d.a,{variant:"h4"},"Allow Negative Numbers?")),r.a.createElement(h.a,{item:!0},r.a.createElement(p.a,{variant:"contained",onClick:this.pickOperation("-")},"Yes"),r.a.createElement(p.a,{variant:"contained",onClick:this.pickOperation("- nonNegative")},"No")))):r.a.createElement(v.a,null,r.a.createElement(h.a,{container:!0,justify:"center",alignItems:"center",direction:"column",spacing:3},r.a.createElement(h.a,{item:!0},r.a.createElement(d.a,{variant:"h4"},"Please select an operation")),r.a.createElement(h.a,{item:!0},r.a.createElement(p.a,{variant:"contained",onClick:this.pickOperation("+")},"+"),r.a.createElement(p.a,{variant:"contained",onClick:this.pickOperation("\xd7")},"\xd7"),r.a.createElement(p.a,{variant:"contained",onClick:this.pickOperation("\xf7")},"\xf7"),r.a.createElement(p.a,{variant:"contained",onClick:this.pickOperation("subtraction")},"-"))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{gutterBottom:!0,color:"textSecondary"},r.a.createElement("a",{href:"https://github.com/ykhas/MathGen"},"Source Code"),". Created by Yaniv Khaslavsky. "),r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.5125ee81.chunk.js.map