(this["webpackJsonpxkom-zadanie"]=this["webpackJsonpxkom-zadanie"]||[]).push([[0],{79:function(e,n,t){"use strict";t.r(n);var c,r,a,i,o,s,u,d,b,l,j,p,h,f,x,O,g,m,y=t(0),v=t.n(y),k=t(22),w=t.n(k),S=t(31),A=t(8),z=t(27),B=t(11),U=t(28),C=Object(U.b)({name:"seats",initialState:{seats:[],qtySBU:0,sideBySide:!1,seatsSBU:[]},reducers:{getSeats:function(){},setSeats:function(e,n){var t=n.payload;e.seats=t},setQtySBU:function(e,n){var t=n.payload;e.qtySBU=t},toggleSideBySide:function(e){e.sideBySide=!e.sideBySide},addSeat:function(e,n){var t=n.payload;e.seatsSBU.push(t)},removeSeat:function(e,n){var t=n.payload,c=e.seatsSBU.findIndex((function(e){return e.id===t}));e.seatsSBU.splice(c,1)},removeAllSeats:function(e){e.seatsSBU=[]},setSeatsSBU:function(e,n){var t=n.payload;e.seatsSBU=t}}}),N=C.actions,E=N.getSeats,F=N.setSeats,I=N.setQtySBU,M=N.toggleSideBySide,P=N.addSeat,J=N.removeSeat,Q=N.removeAllSeats,L=N.setSeatsSBU,V=function(e){return e.seats.seats},W=function(e){return e.seats.qtySBU},D=function(e){return e.seats.sideBySide},H=function(e){return e.seats.seatsSBU},R=C.reducer,T=t(36),q=t(6),K=t(7),Y=K.c.main(c||(c=Object(q.a)(["\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n\n    ",";\n"])),(function(e){return e.screen&&Object(K.b)(r||(r=Object(q.a)(["\n        height: unset;\n        width: 100vw;\n    "])))})),X=t(2),G=function(e){return Object(X.jsx)(Y,Object(T.a)(Object(T.a)({},e),{},{children:e.children}))},$=K.c.form(a||(a=Object(q.a)(['\n    max-width: 500px;\n    padding: 10px;\n    display: grid;\n    grid-template-areas: \n    "label label input input"\n    "checkbox checkboxLabel checkboxLabel checkboxLabel"\n    "button button button button";\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(2, 50px) 70px;\n    row-gap: 30px;\n    column-gap: 10px;\n']))),Z=K.c.label(i||(i=Object(q.a)(["\n    grid-area: label;\n    align-self: center;\n"]))),_=Object(K.c)(Z)(o||(o=Object(q.a)(["\n    grid-area: checkboxLabel;\n"]))),ee=K.c.input(s||(s=Object(q.a)(["\n    grid-area: input;\n    border: 1px solid black;\n"]))),ne=K.c.input(u||(u=Object(q.a)(["\n    grid-area: checkbox;\n    align-self: center;\n    justify-self: center;\n    appearance: none;\n    border: 1px solid black;\n    border-radius: 3px;\n    padding: 15px;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n\n    &:checked {\n        background-image: url(",");\n        background-position: center;\n    }\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiElEQVRYhe2UsQmAMBQFD0QygxNkFnFbK3dwBlsnsNciKUJAkiYvoP8gbe7APMEw/s4g8ozADFzxSHHACtzA0VMuD8jlJ+BNbvIaJmAhbFcuhzCVO17o1PI0oCaiyTf38aJSRNMHV4qQvPa3COnU8ogtHunO84guP5k8QipPI3bCTOVywzC+ywMb6VdXK4fyHgAAAABJRU5ErkJggg=="),te=K.c.button(d||(d=Object(q.a)(["\n    cursor: pointer;\n    background-color: white;\n    border: 1px solid black;\n    transition: background-color 1s;\n    height: 100%;\n\n    &:hover {\n        background-color: rgb(226, 95, 18, .5);\n    }\n\n    ",";\n"])),(function(e){return e.confirm&&Object(K.b)(b||(b=Object(q.a)(["\n        grid-area: button;\n    "])))})),ce=function(){var e=Object(y.useState)(!1),n=Object(z.a)(e,2),t=n[0],c=n[1],r=Object(A.f)(),a=Object(B.b)(),i=Object(B.c)(W),o=Object(B.c)(D);return Object(y.useEffect)((function(){r.replace("/")}),[]),t?Object(X.jsx)(A.a,{to:"/screening-room"}):Object(X.jsx)(G,{children:Object(X.jsxs)($,{onSubmit:function(e){e.preventDefault(),console.log("Liczba wybranych miejsc wynosi ".concat(i," a miejsca s\u0105 obok siebie: ").concat(o)),c(!0),a(E())},children:[Object(X.jsx)(Z,{htmlFor:"numberOfSeats",children:"Liczba miejsc:"}),Object(X.jsx)(ee,{type:"number",id:"numberOfSeats",value:i,onChange:function(e){a(I(parseInt(e.target.value)))}}),Object(X.jsx)(ne,{type:"checkbox",id:"sideBySide",value:o,onChange:function(){a(M())}}),Object(X.jsx)(_,{htmlFor:"sideBySide",children:"Czy miejsca maj\u0105 by\u0107 obok siebie?"}),Object(X.jsx)(te,{confirm:!0,children:"Wybierz miejsca"})]})})},re=function(e){return e+1},ae=K.c.div(l||(l=Object(q.a)(["\n    display: grid;\n    width: 1040px;\n    grid-template-columns: repeat(auto-fill, min(60px));\n    row-gap: 10px;\n    column-gap: 10px;\n    margin-top: 30px;\n"]))),ie=K.c.input(j||(j=Object(q.a)(["\n    appearance: none;\n    width: 60px;\n    height: 60px;\n    border: 1px solid black;\n    grid-row: ",";\n    grid-column: ",";\n\n    &:checked, &:hover {\n        background-color: orange;\n    }\n\n    &:disabled {\n        background-color: gray;\n    }\n"])),(function(e){var n=e.row;return re(n)}),(function(e){var n=e.column;return re(n)})),oe=K.c.div(p||(p=Object(q.a)(["\n    margin-right: 15px;\n    height: 70px;\n    border: 1px solid black;\n\n    ",";\n\n    ",";\n"])),(function(e){return e.reserved&&Object(K.b)(h||(h=Object(q.a)(["\n        background-color: gray;\n    "])))}),(function(e){return e.checked&&Object(K.b)(f||(f=Object(q.a)(["\n        background-color: orange;\n    "])))})),se=function(){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(oe,{}),Object(X.jsx)("p",{children:"Miejsca dost\u0119pne"}),Object(X.jsx)(oe,{reserved:!0}),Object(X.jsx)("p",{children:"Miejsca zarezerwowane"}),Object(X.jsx)(oe,{checked:!0}),Object(X.jsx)("p",{children:"Tw\xf3j wyb\xf3r"})]})},ue=K.c.section(x||(x=Object(q.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 85px 1fr) 250px;\n    justify-content: center;\n    align-items: center;\n    margin: 40px auto;\n    width: 100%;\n    max-width: 1300px;\n"]))),de=function(e){return Object(X.jsx)(ue,{children:e.children})},be=t(34),le=function(e,n){for(var t=[];t.length<n;){var c=e.find((function(e){return!1===e.reserved})),r=e.indexOf(c);t.push(c),e.splice(r,1)}return t},je=function(){var e=Object(y.useState)(!1),n=Object(z.a)(e,2),t=n[0],c=n[1],r=Object(A.f)(),a=Object(B.c)(V),i=Object(B.c)(W),o=Object(B.c)(H),s=Object(B.c)(D),u=Object(B.b)(),d=function(e,n,t,c){if(o.length<i)if(s){var r=function(e,n,t,c){e=Object(be.a)(e.filter((function(e){return!1===e.reserved&&e.cords.x===c})));for(var r=[],a=0;r.length<15;a++)r.push(a);return"undefined"===typeof(e=(e=Object(be.a)(e.map((function(n,c){return e.slice(c,c+t)})).filter((function(e){return e.length===t})))).find((function(e){return!0===(e.some((function(e){return e.id===n}))&&e.every((function(e,n,t){return 1===function(e,n,t){return"undefined"===typeof t[n+1]?e.cords.y-t[n-1].cords.y:t[n+1].cords.y-e.cords.y}(e,n,t)})))})))?[]:e}(a,n,i,t);u(L(r))}else u(P({id:n,cords:{x:t,y:c}}));else e.target.checked=!1,alert("Nie mo\u017cesz wybra\u0107 wi\u0119cej ni\u017c ".concat(i," miejsc"))},b=function(e){u(s?Q():J(e))};return t?Object(X.jsx)(A.a,{to:"/confirmation"}):Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(G,{screen:!0,children:Object(X.jsx)(ae,{children:a?a.map((function(e){return Object(X.jsx)(ie,{column:e.cords.y,row:e.cords.x,disabled:e.reserved,type:"checkbox",checked:!!o.find((function(n){return n.id===e.id})),onChange:function(n){return function(e,n,t,c){e.target.checked?d(e,n,t,c):b(n)}(n,e.id,e.cords.x,e.cords.y)}},e.id)})):"Brak danych"})}),Object(X.jsxs)(de,{children:[Object(X.jsx)(se,{}),Object(X.jsx)(te,{onClick:function(){"/screening-room"===r.location.pathname&&c(!0)},confirm:!1,children:"Rezerwuj"})]})]})},pe=K.c.h1(O||(O=Object(q.a)(["\n    font-size: 1.2em;\n"]))),he=K.c.ul(g||(g=Object(q.a)(["\n    margin-top: 0;\n    padding-left: 0;\n"]))),fe=K.c.li(m||(m=Object(q.a)(['\n    list-style: none;\n\n    &::before {\n        content: "- "\n    }\n']))),xe=function(){var e=Object(B.c)(H);return Object(X.jsxs)(G,{children:[Object(X.jsx)(pe,{children:"Twoja rezerwacja przebieg\u0142a pomy\u015blnie!"}),Object(X.jsx)("p",{children:"Wybra\u0142e\u015b/a\u015b miejsca:"}),Object(X.jsx)(he,{children:e.length?e.map((function(e){return Object(X.jsxs)(fe,{children:["rz\u0105d ",e.cords.x,", miejsce ",e.cords.y," (",e.id,")"]})})):"Nie wybrano \u017cadnych miejsc"}),Object(X.jsx)("p",{children:Object(X.jsx)("b",{children:"Dzi\u0119kujemy! W razie problem\xf3w prosimy o kontakt do administracji."})})]})};var Oe,ge=function(){return Object(X.jsxs)(S.a,{children:[Object(X.jsx)(A.b,{path:"/screening-room",children:Object(X.jsx)(je,{})}),Object(X.jsx)(A.b,{path:"/confirmation",children:Object(X.jsx)(xe,{})}),Object(X.jsx)(A.b,{path:"/",children:Object(X.jsx)(ce,{})})]})},me=(t(60),Object(K.a)(Oe||(Oe=Object(q.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::before, ::after {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Open Sans', sans-serif;\n        font-size: 1.3em;\n    }\n"])))),ye=t(49),ve=t(10),ke=t.n(ve),we=t(15),Se=t(25),Ae=t(26),ze=t.n(Ae),Be=function(){var e=Object(Se.a)(ke.a.mark((function e(){var n;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ze.a.get("http://localhost:3000/seats");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("Nie uda\u0142o si\u0119 pobra\u0107 danych dotycz\u0105cych miejsc w kinie",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(Se.a)(ke.a.mark((function e(n){var t,c;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ze.a.get("http://localhost:3000/seats");case 3:return t=e.sent,c=le(t.data,n),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.error("Nie uda\u0142o si\u0119 pobra\u0107 danych dotycz\u0105cych miejsc w kinie",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),Ce=ke.a.mark(Ie),Ne=ke.a.mark(Me),Ee=ke.a.mark(Pe),Fe=ke.a.mark(Je);function Ie(){var e;return ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(we.a)(Be);case 3:return e=n.sent,n.next=6,Object(we.b)(F(e));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(we.a)(alert,"Nie uda\u0142o si\u0119 przekaza\u0107 danych z API do stanu aplikacji",n.t0);case 12:case 13:case"end":return n.stop()}}),Ce,null,[[0,8]])}function Me(){var e,n;return ke.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(we.c)(W);case 3:return e=t.sent,t.next=6,Object(we.a)(Ue,e);case 6:return n=t.sent,t.next=9,Object(we.b)(L(n));case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),t.next=15,Object(we.a)(alert,"Nie uda\u0142o si\u0119 przekaza\u0107 danych z API do stanu aplikacji",t.t0);case 15:case"end":return t.stop()}}),Ne,null,[[0,11]])}function Pe(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(we.c)(H);case 3:e.sent.length||alert("Prosz\u0119 wybra\u0107 inne miejsca"),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(we.a)(console.log,e.t0);case 11:case"end":return e.stop()}}),Ee,null,[[0,7]])}function Je(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.d)(E.type,Ie);case 2:return e.next=4,Object(we.d)(E.type,Me);case 4:return e.next=6,Object(we.d)(L.type,Pe);case 6:case"end":return e.stop()}}),Fe)}var Qe=Object(ye.a)(),Le=Object(U.a)({reducer:{seats:R},middleware:[Qe]});Qe.run(Je);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));w.a.render(Object(X.jsx)(v.a.StrictMode,{children:Object(X.jsxs)(B.a,{store:Le,children:[Object(X.jsx)(me,{}),Object(X.jsx)(ge,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[79,1,2]]]);
//# sourceMappingURL=main.a915d18b.chunk.js.map