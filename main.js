!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);const s={inputSummary:".task__description",newItem:".new-item",createNewItem:".add-new-item",input:".add-new-item__description",enableEdit:".task__name",submitBtn:".add-new-item__btn-add-task",cancelBtn:".add-new-item__btn-cancel",tasksContainer:".tasks-container",deleteBtn:".task__btn-delete",editBtn:".task__btn-edit",doneBtn:".task__btn-done",BtnsContainer:".task__btns",editBtnsContainer:".task__btns--edit",exitEditBtn:".task__btn-exit-edit",taskCheckbox:".task__checkbox_svg",inputForTaskUpdate:".task__edit-input-text",taskNameWrapper:".task__name-wrapper",time:".header__data--time",date:".header__data--date"};function a(e){return e<10?`0${e}`:e}var r=class{constructor(e){this.summary=e,this.id=function(e=5){let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=n.length;for(let a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*s));return t}(5)}};const i='<i class="task__btn-done"></i>\n<i class="task__btn-exit-edit"></i>',o='<i class="task__btn-edit"></i>\n<i class="task__btn-delete"></i>',d=34,l=100;var c=class{addTaskToUI(e){const t=document.querySelector(s.tasksContainer),n=this.getTaskHtmlString(e);t.insertAdjacentHTML("beforeend",n);const a=document.getElementById(e.id);this.addTaskEventListeners(a)}removeTaskFromUI(e){const t=document.getElementById(e);t.parentNode.removeChild(t)}addTaskEventListeners(e){e.querySelector(s.editBtn).addEventListener("click",this.editBtnClickHandler.bind(this)),e.querySelector(s.deleteBtn).addEventListener("click",m.deleteTask),e.querySelector(s.taskCheckbox).addEventListener("animationend",e=>{m.deleteTask(e,!0)})}editBtnClickHandler(e){const t=e.target.closest(".task"),n=t.querySelector(".task__name").textContent;e.target.closest(s.BtnsContainer).innerHTML=i;const a=document.getElementById(t.id).querySelector(s.taskNameWrapper),r=a.firstElementChild.offsetHeight,o=`<textarea class="task__edit-input-text" type="text" autofocus>${n}</textarea>`;a.innerHTML=o;const d=a.firstChild;d.select(),d.addEventListener("input",this.inputHandler),d.addEventListener("blur",this.updateSummary.bind(this)),d.addEventListener("keypress",this.keyPressHandler.bind(this));let c=Math.min(l,r);const u=parseFloat(window.getComputedStyle(d,null).getPropertyValue("padding-top"));d.style.height=c+2*u+"px"}inputHandler(e){const t=e.target.value;if(e.target.rows=1,e.target.style.height="auto",""===t)e.target.style.height=d+"px";else{const t=e.target.scrollHeight;let n=Math.min(l,t);e.target.style.height=n+"px"}}keyPressHandler(e){13===e.keyCode&&(e.preventDefault(),""!==e.target.value&&this.updateSummary(e))}updateSummary(e){const t=document.querySelector(s.inputForTaskUpdate).value,n=e.target.closest(".task"),a=n.id,r=n.querySelector(s.BtnsContainer),i=n.querySelector(s.taskNameWrapper);if(""!==t){e.target.removeEventListener("blur",this.updateSummary);const s=` <span class="task__name">${t}</span>`;r.innerHTML=o,i.innerHTML=s,this.addTaskEventListeners(n),m.updateTask(a,t)}}getTaskHtmlString(e){return`<div class="task" id="${e.id}">\n        <div class="task__content-wrapper">\n        <div class="task__description">\n        <label class='task__checkbox'>\n        <input type="checkbox" name="check">\n        <svg version="1.1" class="task__checkbox_svg" xmlns="http://www.w3.org/2000/svg"\n            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"\n            style="enable-background:new 0 0 100 100;" xml:space="preserve">\n            <polyline class="task__checkbox_line" points="3.5,45.5 40.5,82.5 95.7,15.3 "\n                stroke-linecap="round" /></svg>\n    </label>\n    \n    <div class="task__name-wrapper">\n    <span class="task__name" title="${e.summary}">${e.summary}</span>\n    </div>\n    </div>\n    <div class="task__btns">\n    <i class="task__btn-edit"></i>\n    <i class="task__btn-delete"></i>\n    </div>\n    </div>\n    <div class="line"></div></div>`}};const u=new class{constructor(){this.tasks=[]}createTask(e){const t=new r(e);return this.tasks.push(t),this.saveChangesToLocalStorage(),t}readTasks(){return this.tasks=JSON.parse(localStorage.getItem("tasks"))||[],this.tasks}deleteTask(e){const t=this.tasks.findIndex(t=>t.id===e);-1!==t&&this.tasks.splice(t,1),this.saveChangesToLocalStorage()}updateTask(e,t){this.tasks.find(t=>t.id===e).summary=t,this.saveChangesToLocalStorage()}saveChangesToLocalStorage(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}},k=new c;var m=new class{createTask(e){const t=u.createTask(e);k.addTaskToUI({...t})}renderTasks(){u.readTasks().forEach(e=>k.addTaskToUI(e))}deleteTask(e){const t=e.target.closest(".task").id;u.deleteTask(t),k.removeTaskFromUI(t),u.saveChangesToLocalStorage()}updateTask(e,t){u.updateTask(e,t)}};(()=>{const e=document.querySelector(s.newItem),t=document.querySelector(s.createNewItem),n=document.querySelector(s.submitBtn);m.renderTasks(),document.querySelector(s.newItem).addEventListener("click",()=>{e.style.display="none",t.style.display="inline-block",document.querySelector(s.input).value=""});const r=n=>{n.length&&(m.createTask(n),e.style.display="inline-flex",t.style.display="none")};document.querySelector(s.submitBtn).addEventListener("click",()=>{const e=document.querySelector(s.input).value;n.classList.add("add-new-item__btn-add-task--disabled"),r(e)}),document.querySelector(s.input).addEventListener("keypress",e=>{if(13===e.keyCode){const t=e.target.value;r(t)}}),document.querySelector(s.input).addEventListener("input",()=>{n.classList.remove("add-new-item__btn-add-task--disabled")}),document.querySelector(s.cancelBtn).addEventListener("click",()=>{e.style.display="inline-flex",t.style.display="none"});const{day:i,month:o,year:d,hours:l,minutes:c}=function(){const e=new Date,t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],s=e.getFullYear();let r=e.getHours();r=a(r);let i=e.getMinutes();return{day:t,month:n,year:s,hours:r,minutes:i=a(i)}}();document.querySelector(s.date).textContent=`${i} ${o}, ${d}`,document.querySelector(s.time).textContent=`${l}:${c}`})()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbVN0cmluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1Rhc2tWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9UYXNrc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1Rhc2tNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkRPTXN0cmluZ3MiLCJpbnB1dFN1bW1hcnkiLCJuZXdJdGVtIiwiY3JlYXRlTmV3SXRlbSIsImlucHV0IiwiZW5hYmxlRWRpdCIsInN1Ym1pdEJ0biIsImNhbmNlbEJ0biIsInRhc2tzQ29udGFpbmVyIiwiZGVsZXRlQnRuIiwiZWRpdEJ0biIsImRvbmVCdG4iLCJCdG5zQ29udGFpbmVyIiwiZWRpdEJ0bnNDb250YWluZXIiLCJleGl0RWRpdEJ0biIsInRhc2tDaGVja2JveCIsImlucHV0Rm9yVGFza1VwZGF0ZSIsInRhc2tOYW1lV3JhcHBlciIsInRpbWUiLCJkYXRlIiwiZm9ybWF0VGltZSIsImpzX1Rhc2siLCJbb2JqZWN0IE9iamVjdF0iLCJzdW1tYXJ5IiwidGhpcyIsImlkIiwibGVuZ3RoIiwicmVzdWx0IiwiY2hhcmFjdGVycyIsImNoYXJhY3RlcnNMZW5ndGgiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtYWtlaWQiLCJkb25lRXhpdEJ0bnMiLCJlZGl0RGVsZXRlQnRucyIsInNwYW5IZWlnaHRXaXRoT25lTGluZSIsIm1heFRleHRBcmVhSGVpZ2h0IiwianNfVGFza1ZpZXciLCJ0YXNrIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudCIsImdldFRhc2tIdG1sU3RyaW5nIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY3JlYXRlZEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZFRhc2tFdmVudExpc3RlbmVycyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlZGl0QnRuQ2xpY2tIYW5kbGVyIiwianNfVGFza3NDb250cm9sbGVyIiwiZGVsZXRlVGFzayIsImV2ZW50IiwiZWRpdGluZ0VsZW1lbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJ0ZXh0U3BhbkhlaWdodCIsImZpcnN0RWxlbWVudENoaWxkIiwib2Zmc2V0SGVpZ2h0IiwiZWRpdElucHV0IiwidGV4dEFyZWEiLCJmaXJzdENoaWxkIiwic2VsZWN0IiwiaW5wdXRIYW5kbGVyIiwidXBkYXRlU3VtbWFyeSIsImtleVByZXNzSGFuZGxlciIsIm5leHRIZWlnaHQiLCJtaW4iLCJ0ZXh0QXJlYVBhZGRpbmdUb3AiLCJwYXJzZUZsb2F0Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJzdHlsZSIsImhlaWdodCIsInJvd3MiLCJzY3JvbGxIZWlnaHQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJ0YXNrRWxlbWVudCIsImJ0bnNDb250YWluZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWZ0ZXJFZGl0U3BhbiIsInVwZGF0ZVRhc2siLCJ0YXNrTW9kZWwiLCJ0YXNrcyIsIm5ld1Rhc2siLCJwdXNoIiwic2F2ZUNoYW5nZXNUb0xvY2FsU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbmRleCIsImZpbmRJbmRleCIsImN1ciIsInNwbGljZSIsImZpbmQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGFza1ZpZXciLCJjcmVhdGVUYXNrIiwiYWRkVGFza1RvVUkiLCJyZWFkVGFza3MiLCJmb3JFYWNoIiwiaXRlbUlEIiwicmVtb3ZlVGFza0Zyb21VSSIsIm5ld0l0ZW1TdHlsZSIsImNyZWF0ZU5ld0l0ZW1TdHlsZSIsInRvZ2dsZVN1Ym1pdEJ0biIsInJlbmRlclRhc2tzIiwiZGlzcGxheSIsImFkZFRhc2siLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkYXkiLCJtb250aCIsInllYXIiLCJob3VycyIsIm1pbnV0ZXMiLCJub3ciLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRDdXJyZW50VGltZSIsImluaXQiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEVBQUEsR0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxHQUFBLENBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsUUFBQSxJQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxFQUFBLENBQTBDSyxZQUFBLEVBQUFDLElBQUFMLEtBSzFDWixFQUFBa0IsRUFBQSxTQUFBaEIsR0FDQSxvQkFBQWlCLGVBQUFDLGFBQ0FOLE9BQUFDLGVBQUFiLEVBQUFpQixPQUFBQyxZQUFBLENBQXdEQyxNQUFBLFdBRXhEUCxPQUFBQyxlQUFBYixFQUFBLGNBQWlEbUIsT0FBQSxLQVFqRHJCLEVBQUFzQixFQUFBLFNBQUFELEVBQUFFLEdBRUEsR0FEQSxFQUFBQSxJQUFBRixFQUFBckIsRUFBQXFCLElBQ0EsRUFBQUUsRUFBQSxPQUFBRixFQUNBLEtBQUFFLEdBQUEsaUJBQUFGLFFBQUFHLFdBQUEsT0FBQUgsRUFDQSxJQUFBSSxFQUFBWCxPQUFBWSxPQUFBLE1BR0EsR0FGQTFCLEVBQUFrQixFQUFBTyxHQUNBWCxPQUFBQyxlQUFBVSxFQUFBLFdBQXlDVCxZQUFBLEVBQUFLLFVBQ3pDLEVBQUFFLEdBQUEsaUJBQUFGLEVBQUEsUUFBQU0sS0FBQU4sRUFBQXJCLEVBQUFVLEVBQUFlLEVBQUFFLEVBQUEsU0FBQUEsR0FBZ0gsT0FBQU4sRUFBQU0sSUFBcUJDLEtBQUEsS0FBQUQsSUFDckksT0FBQUYsR0FJQXpCLEVBQUE2QixFQUFBLFNBQUExQixHQUNBLElBQUFTLEVBQUFULEtBQUFxQixXQUNBLFdBQTJCLE9BQUFyQixFQUFBLFNBQzNCLFdBQWlDLE9BQUFBLEdBRWpDLE9BREFILEVBQUFVLEVBQUFFLEVBQUEsSUFBQUEsR0FDQUEsR0FJQVosRUFBQWEsRUFBQSxTQUFBaUIsRUFBQUMsR0FBc0QsT0FBQWpCLE9BQUFrQixVQUFBQyxlQUFBMUIsS0FBQXVCLEVBQUFDLElBR3REL0IsRUFBQWtDLEVBQUEsR0FJQWxDLElBQUFtQyxFQUFBLGdFQ2xGTyxNQUFBQyxFQUFBLENBQ1BDLGFBQUEscUJBQ0FDLFFBQUEsWUFDQUMsY0FBQSxnQkFDQUMsTUFBQSw2QkFDQUMsV0FBQSxjQUNBQyxVQUFBLDhCQUNBQyxVQUFBLDRCQUNBQyxlQUFBLG1CQUNBQyxVQUFBLG9CQUNBQyxRQUFBLGtCQUNBQyxRQUFBLGtCQUNBQyxjQUFBLGNBQ0FDLGtCQUFBLG9CQUNBQyxZQUFBLHVCQUNBQyxhQUFBLHNCQUNBQyxtQkFBQSx5QkFDQUMsZ0JBQUEsc0JBQ0FDLEtBQUEsc0JBQ0FDLEtBQUEsdUJDVUEsU0FBQUMsRUFBQUYsR0FDQSxPQUFBQSxFQUFBLE9BQTJCQSxJQUFLQSxFQ2pCakIsSUFBQUcsRUFQZixNQUNBQyxZQUFBQyxHQUNBQyxLQUFBRCxVQUNBQyxLQUFBQyxHRFJPLFNBQUFDLEVBQUEsR0FDUCxJQUFBQyxFQUFBLEdBQ0EsTUFBQUMsRUFBQSxpRUFDQUMsRUFBQUQsRUFBQUYsT0FDQSxRQUFBMUQsRUFBQSxFQUFtQkEsRUFBQTBELEVBQVkxRCxJQUMvQjJELEdBQUFDLEVBQUFFLE9BQUFDLEtBQUFDLE1BQUFELEtBQUFFLFNBQUFKLElBRUEsT0FBQUYsRUNDa0JPLENBQU0sS0NMeEIsTUFBQUMsRUFBQSxzRUFFQUMsRUFBQSxtRUFFQUMsRUFBQSxHQUNBQyxFQUFBLElBaUllLElBQUFDLEVBOUhmLE1BQ0FqQixZQUFBa0IsR0FDQSxNQUFBQyxFQUFBQyxTQUFBQyxjQUFpRDNDLEVBQVVRLGdCQUMzRG9DLEVBQUFwQixLQUFBcUIsa0JBQUFMLEdBQ0FDLEVBQUFLLG1CQUFBLFlBQUFGLEdBR0EsTUFBQUcsRUFBQUwsU0FBQU0sZUFBQVIsRUFBQWYsSUFDQUQsS0FBQXlCLHNCQUFBRixHQUlBekIsaUJBQUFHLEdBQ0EsTUFBQW1CLEVBQUFGLFNBQUFNLGVBQUF2QixHQUNBbUIsRUFBQU0sV0FBQUMsWUFBQVAsR0FHQXRCLHNCQUFBc0IsR0FDQUEsRUFBQUQsY0FBOEIzQyxFQUFVVSxTQUFBMEMsaUJBQUEsUUFBQTVCLEtBQUE2QixvQkFBQTdELEtBQUFnQyxPQUN4Q29CLEVBQUFELGNBQThCM0MsRUFBVVMsV0FBQTJDLGlCQUFBLFFBQXNDRSxFQUFlQyxZQUM3RlgsRUFBQUQsY0FBOEIzQyxFQUFVZSxjQUFBcUMsaUJBQUEsZUFBQUksSUFDNUJGLEVBQWVDLFdBQUFDLEdBQUEsS0FLM0JsQyxvQkFBQWtDLEdBQ0EsTUFBQUMsRUFBQUQsRUFBQUUsT0FBQUMsUUFBQSxTQUNBMUUsRUFBQXdFLEVBQUFkLGNBQUEsZUFBQWlCLFlBRUFKLEVBQUFFLE9BQUFDLFFBQW1EM0QsRUFBVVksZUFFN0RpRCxVQUFBMUIsRUFHQSxNQUFBbEIsRUFBQXlCLFNBQUFNLGVBQUFTLEVBQUFoQyxJQUFBa0IsY0FBeUYzQyxFQUFVaUIsaUJBQ25HNkMsRUFBQTdDLEVBQUE4QyxrQkFBQUMsYUFFQUMsbUVBQTJGaEYsZUFDM0ZnQyxFQUFBNEMsVUFBQUksRUFHQSxNQUFBQyxFQUFBakQsRUFBQWtELFdBQ0FELEVBQUFFLFNBRUFGLEVBQUFkLGlCQUFBLFFBQUE1QixLQUFBNkMsY0FDQUgsRUFBQWQsaUJBQUEsT0FBQTVCLEtBQUE4QyxjQUFBOUUsS0FBQWdDLE9BQ0EwQyxFQUFBZCxpQkFBQSxXQUFBNUIsS0FBQStDLGdCQUFBL0UsS0FBQWdDLE9BR0EsSUFBQWdELEVBQUF6QyxLQUFBMEMsSUFBQW5DLEVBQUF3QixHQUNBLE1BQUFZLEVBQUFDLFdBQUFDLE9BQUFDLGlCQUFBWCxFQUFBLE1BQUFZLGlCQUFBLGdCQUNBWixFQUFBYSxNQUFBQyxPQUFBUixFQUFBLEVBQUFFLEVBQUEsS0FJQXBELGFBQUFrQyxHQUNBLE1BQUF2RSxFQUFBdUUsRUFBQUUsT0FBQXpFLE1BR0EsR0FGQXVFLEVBQUFFLE9BQUF1QixLQUFBLEVBQ0F6QixFQUFBRSxPQUFBcUIsTUFBQUMsT0FBQSxPQUNBLEtBQUEvRixFQUNBdUUsRUFBQUUsT0FBQXFCLE1BQUFDLE9BQUEzQyxFQUFBLFNBQ1MsQ0FDVCxNQUFBNkMsRUFBQTFCLEVBQUFFLE9BQUF3QixhQUNBLElBQUFWLEVBQUF6QyxLQUFBMEMsSUFBQW5DLEVBQUE0QyxHQUVBMUIsRUFBQUUsT0FBQXFCLE1BQUFDLE9BQUFSLEVBQUEsTUFLQWxELGdCQUFBa0MsR0FDQSxLQUFBQSxFQUFBMkIsVUFDQTNCLEVBQUE0QixpQkFDQSxLQUFBNUIsRUFBQUUsT0FBQXpFLE9BQ0F1QyxLQUFBOEMsY0FBQWQsSUFLQWxDLGNBQUFrQyxHQUNBLE1BQUF2RSxFQUFBeUQsU0FBQUMsY0FBNkMzQyxFQUFVZ0Isb0JBQUEvQixNQUN2RG9HLEVBQUE3QixFQUFBRSxPQUFBQyxRQUFBLFNBQ0FsQyxFQUFBNEQsRUFBQTVELEdBRUE2RCxFQUFBRCxFQUFBMUMsY0FBd0QzQyxFQUFVWSxlQUNsRUssRUFBQW9FLEVBQUExQyxjQUEwRDNDLEVBQVVpQixpQkFFcEUsUUFBQWhDLEVBQUEsQ0FDQXVFLEVBQUFFLE9BQUE2QixvQkFBQSxPQUFBL0QsS0FBQThDLGVBQ0EsTUFBQWtCLCtCQUErRHZHLFdBQy9EcUcsRUFBQXpCLFVBQUF6QixFQUNBbkIsRUFBQTRDLFVBQUEyQixFQUNBaEUsS0FBQXlCLHNCQUFBb0MsR0FDWS9CLEVBQWVtQyxXQUFBaEUsRUFBQXhDLElBSzNCcUMsa0JBQUFrQixHQUNBLCtCQUF5Q0EsRUFBQWYsb3FCQWFIZSxFQUFBakIsWUFBaUJpQixFQUFBakIsK01DeEh2RCxNQUFBbUUsRUFBQSxJQ0hBLE1BQ0FwRSxjQUNBRSxLQUFBbUUsTUFBQSxHQUlBckUsV0FBQUMsR0FFQSxNQUFBcUUsRUFBQSxJQUE0QnZFLEVBQUlFLEdBS2hDLE9BRkFDLEtBQUFtRSxNQUFBRSxLQUFBRCxHQUNBcEUsS0FBQXNFLDRCQUNBRixFQUlBdEUsWUFFQSxPQURBRSxLQUFBbUUsTUFBQUksS0FBQUMsTUFBQUMsYUFBQUMsUUFBQSxjQUNBMUUsS0FBQW1FLE1BSUFyRSxXQUFBRyxHQUVBLE1BQUEwRSxFQUFBM0UsS0FBQW1FLE1BQUFTLFVBQUFDLEtBQUE1RSxTQUVBLElBQUEwRSxHQUNBM0UsS0FBQW1FLE1BQUFXLE9BQUFILEVBQUEsR0FHQTNFLEtBQUFzRSw0QkFJQXhFLFdBQUFHLEVBQUF4QyxHQUNBdUMsS0FBQW1FLE1BQUFZLEtBQUFGLEtBQUE1RSxRQUNBRixRQUFBdEMsRUFDQXVDLEtBQUFzRSw0QkFJQXhFLDRCQUNBMkUsYUFBQU8sUUFBQSxRQUFBVCxLQUFBVSxVQUFBakYsS0FBQW1FLFVEdkNBZSxFQUFBLElBQXFCbkUsRUFvQ04sSUFBQWUsRUFGZixJQS9CQSxNQUNBaEMsV0FBQUMsR0FDQSxNQUFBcUUsRUFBQUYsRUFBQWlCLFdBQUFwRixHQUdBbUYsRUFBQUUsWUFBQSxJQUE4QmhCLElBRzlCdEUsY0FDQW9FLEVBQUFtQixZQUNBQyxRQUFBVCxHQUFBSyxFQUFBRSxZQUFBUCxJQUdBL0UsV0FBQWtDLEdBQ0EsTUFBQXVELEVBQUF2RCxFQUFBRSxPQUFBQyxRQUFBLFNBQUFsQyxHQUNBaUUsRUFBQW5DLFdBQUF3RCxHQUdBTCxFQUFBTSxpQkFBQUQsR0FDQXJCLEVBQUFJLDRCQUtBeEUsV0FBQUcsRUFBQXhDLEdBQ0F5RyxFQUFBRCxXQUFBaEUsRUFBQXhDLEtFNUJBLE1BQ0EsTUFBQWdJLEVBQUF2RSxTQUFBQyxjQUFnRDNDLEVBQVVFLFNBQzFEZ0gsRUFBQXhFLFNBQUFDLGNBQXNEM0MsRUFBVUcsZUFDaEVnSCxFQUFBekUsU0FBQUMsY0FBbUQzQyxFQUFVTSxXQUl6RGdELEVBQWU4RCxjQUduQjFFLFNBQUFDLGNBQTJCM0MsRUFBVUUsU0FBQWtELGlCQUFBLGFBQ3JDNkQsRUFBQWxDLE1BQUFzQyxRQUFBLE9BQ0FILEVBQUFuQyxNQUFBc0MsUUFBQSxlQUNBM0UsU0FBQUMsY0FBK0IzQyxFQUFVSSxPQUFBbkIsTUFBQSxLQUl6QyxNQUFBcUksRUFBQS9GLElBQ0FBLEVBQUFHLFNBQ1k0QixFQUFlcUQsV0FBQXBGLEdBQzNCMEYsRUFBQWxDLE1BQUFzQyxRQUFBLGNBQ0FILEVBQUFuQyxNQUFBc0MsUUFBQSxTQUlBM0UsU0FBQUMsY0FBMkIzQyxFQUFVTSxXQUFBOEMsaUJBQUEsYUFDckMsTUFBQTdCLEVBQUFtQixTQUFBQyxjQUErQzNDLEVBQVVJLE9BQUFuQixNQUN6RGtJLEVBQUFJLFVBQUFDLElBQUEsd0NBQ0FGLEVBQUEvRixLQUlBbUIsU0FBQUMsY0FBMkIzQyxFQUFVSSxPQUFBZ0QsaUJBQUEsV0FBQUksSUFDckMsUUFBQUEsRUFBQTJCLFFBQUEsQ0FDQSxNQUFBNUQsRUFBQWlDLEVBQUFFLE9BQUF6RSxNQUNBcUksRUFBQS9GLE1BTUFtQixTQUFBQyxjQUEyQjNDLEVBQVVJLE9BQUFnRCxpQkFBQSxhQUNyQytELEVBQUFJLFVBQUFFLE9BQUEsMENBS0EvRSxTQUFBQyxjQUEyQjNDLEVBQVVPLFdBQUE2QyxpQkFBQSxhQUNyQzZELEVBQUFsQyxNQUFBc0MsUUFBQSxjQUNBSCxFQUFBbkMsTUFBQXNDLFFBQUEsU0FHQSxNQUFBSyxJQUFXQSxFQUFBQyxRQUFBQyxPQUFBQyxRQUFBQyxXTDlDSixXQUVQLE1BQUFDLEVBQUEsSUFBQUMsS0FDQU4sRUFBQUssRUFBQUUsVUFJQU4sRUFGQSxnSEFDQUksRUFBQUcsWUFFQU4sRUFBQUcsRUFBQUksY0FDQSxJQUFBTixFQUFBRSxFQUFBSyxXQUNBUCxFQUFBekcsRUFBQXlHLEdBQ0EsSUFBQUMsRUFBQUMsRUFBQU0sYUFHQSxPQUFZWCxNQUFBQyxRQUFBQyxPQUFBQyxRQUFBQyxRQUZaQSxFQUFBMUcsRUFBQTBHLElLa0NpRFEsR0FDakQ1RixTQUFBQyxjQUEyQjNDLEVBQVVtQixNQUFBeUMsZUFBd0I4RCxLQUFPQyxNQUFVQyxJQUM5RWxGLFNBQUFDLGNBQTJCM0MsRUFBVWtCLE1BQUEwQyxlQUF3QmlFLEtBQVNDLEtBS3RFUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiZXhwb3J0IGNvbnN0IERPTXN0cmluZ3MgPSB7XG4gICAgaW5wdXRTdW1tYXJ5OiAnLnRhc2tfX2Rlc2NyaXB0aW9uJyxcbiAgICBuZXdJdGVtOiAnLm5ldy1pdGVtJyxcbiAgICBjcmVhdGVOZXdJdGVtOiAnLmFkZC1uZXctaXRlbScsXG4gICAgaW5wdXQ6ICcuYWRkLW5ldy1pdGVtX19kZXNjcmlwdGlvbicsXG4gICAgZW5hYmxlRWRpdDogJy50YXNrX19uYW1lJyxcbiAgICBzdWJtaXRCdG46ICcuYWRkLW5ldy1pdGVtX19idG4tYWRkLXRhc2snLFxuICAgIGNhbmNlbEJ0bjogJy5hZGQtbmV3LWl0ZW1fX2J0bi1jYW5jZWwnLFxuICAgIHRhc2tzQ29udGFpbmVyOiAnLnRhc2tzLWNvbnRhaW5lcicsXG4gICAgZGVsZXRlQnRuOiAnLnRhc2tfX2J0bi1kZWxldGUnLFxuICAgIGVkaXRCdG46ICcudGFza19fYnRuLWVkaXQnLFxuICAgIGRvbmVCdG46ICcudGFza19fYnRuLWRvbmUnLFxuICAgIEJ0bnNDb250YWluZXI6ICcudGFza19fYnRucycsXG4gICAgZWRpdEJ0bnNDb250YWluZXI6ICcudGFza19fYnRucy0tZWRpdCcsXG4gICAgZXhpdEVkaXRCdG46ICcudGFza19fYnRuLWV4aXQtZWRpdCcsXG4gICAgdGFza0NoZWNrYm94OiAnLnRhc2tfX2NoZWNrYm94X3N2ZycsXG4gICAgaW5wdXRGb3JUYXNrVXBkYXRlOiAnLnRhc2tfX2VkaXQtaW5wdXQtdGV4dCcsXG4gICAgdGFza05hbWVXcmFwcGVyOiAnLnRhc2tfX25hbWUtd3JhcHBlcicsXG4gICAgdGltZTogJy5oZWFkZXJfX2RhdGEtLXRpbWUnLFxuICAgIGRhdGU6ICcuaGVhZGVyX19kYXRhLS1kYXRlJ1xuXG59IiwiLy9HZW5lcmF0ZSBSYW5kb20gU3RyaW5nIChjcmVhdGluZyBhIHVuaXF1ZSBJRClcbmV4cG9ydCBmdW5jdGlvbiBtYWtlaWQobGVuZ3RoID0gNSkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF5ID0gbm93LmdldERhdGUoKTtcblxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuICAgIGNvbnN0IGN1ck1vbnRoID0gbm93LmdldE1vbnRoKCk7XG4gICAgY29uc3QgbW9udGggPSBtb250aHNbY3VyTW9udGhdXG4gICAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBob3VycyA9IG5vdy5nZXRIb3VycygpO1xuICAgIGhvdXJzID0gZm9ybWF0VGltZShob3Vycyk7XG4gICAgbGV0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpO1xuICAgIG1pbnV0ZXMgPSBmb3JtYXRUaW1lKG1pbnV0ZXMpO1xuXG4gICAgcmV0dXJuIHsgZGF5LCBtb250aCwgeWVhciwgaG91cnMsIG1pbnV0ZXMgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKHRpbWUpIHtcbiAgICByZXR1cm4gdGltZSA8IDEwID8gYDAke3RpbWV9YCA6IHRpbWU7XG59XG4iLCJpbXBvcnQgeyBtYWtlaWQgfSBmcm9tICcuL2hlbHBlcnMnXG5cblxuXG4vLyBjbGFzcyBUYXNrIGRlc2NyIGlkIHN1bW1hcnkgcHJpb3JpdHlcblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3Ioc3VtbWFyeSkge1xuICAgICAgICB0aGlzLnN1bW1hcnkgPSBzdW1tYXJ5O1xuICAgICAgICB0aGlzLmlkID0gbWFrZWlkKDUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzayIsImltcG9ydCB7IERPTXN0cmluZ3MgfSBmcm9tICcuL2RvbVN0cmluZ3MnXG5pbXBvcnQgVGFza3NDb250cm9sbGVyIGZyb20gJy4vVGFza3NDb250cm9sbGVyJ1xuaW1wb3J0IHsgYXV0b1Jlc2l6ZSB9IGZyb20gJy4vaGVscGVycydcblxuY29uc3QgZG9uZUV4aXRCdG5zID0gYDxpIGNsYXNzPVwidGFza19fYnRuLWRvbmVcIj48L2k+XG48aSBjbGFzcz1cInRhc2tfX2J0bi1leGl0LWVkaXRcIj48L2k+YFxuY29uc3QgZWRpdERlbGV0ZUJ0bnMgPSBgPGkgY2xhc3M9XCJ0YXNrX19idG4tZWRpdFwiPjwvaT5cbjxpIGNsYXNzPVwidGFza19fYnRuLWRlbGV0ZVwiPjwvaT5gXG5jb25zdCBzcGFuSGVpZ2h0V2l0aE9uZUxpbmUgPSAzNDtcbmNvbnN0IG1heFRleHRBcmVhSGVpZ2h0ID0gMTAwO1xuXG5cbmNsYXNzIFRhc2tWaWV3IHtcbiAgICBhZGRUYXNrVG9VSSh0YXNrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9Nc3RyaW5ncy50YXNrc0NvbnRhaW5lcilcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0VGFza0h0bWxTdHJpbmcodGFzaylcbiAgICAgICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XG5cblxuICAgICAgICBjb25zdCBjcmVhdGVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2suaWQpXG4gICAgICAgIHRoaXMuYWRkVGFza0V2ZW50TGlzdGVuZXJzKGNyZWF0ZWRFbGVtZW50KVxuXG4gICAgfVxuXG4gICAgcmVtb3ZlVGFza0Zyb21VSShpZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgYWRkVGFza0V2ZW50TGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKERPTXN0cmluZ3MuZWRpdEJ0bikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmVkaXRCdG5DbGlja0hhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcihET01zdHJpbmdzLmRlbGV0ZUJ0bikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBUYXNrc0NvbnRyb2xsZXIuZGVsZXRlVGFzayk7XG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcihET01zdHJpbmdzLnRhc2tDaGVja2JveCkuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBUYXNrc0NvbnRyb2xsZXIuZGVsZXRlVGFzayhldmVudCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZWRpdEJ0bkNsaWNrSGFuZGxlcihldmVudCkge1xuICAgICAgICBjb25zdCBlZGl0aW5nRWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRhc2tcIilcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlZGl0aW5nRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFza19fbmFtZScpLnRleHRDb250ZW50XG5cbiAgICAgICAgY29uc3QgYnRuc0NvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KERPTXN0cmluZ3MuQnRuc0NvbnRhaW5lcilcbiAgICAgICAgLy9SZXBsYWNpbmcgYnV0dG9ucyBcbiAgICAgICAgYnRuc0NvbnRhaW5lci5pbm5lckhUTUwgPSBkb25lRXhpdEJ0bnNcblxuICAgICAgICAvL1N1bW1hcnkgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVkaXRpbmdFbGVtZW50LmlkKS5xdWVyeVNlbGVjdG9yKERPTXN0cmluZ3MudGFza05hbWVXcmFwcGVyKTtcbiAgICAgICAgY29uc3QgdGV4dFNwYW5IZWlnaHQgPSB0YXNrTmFtZVdyYXBwZXIuZmlyc3RFbGVtZW50Q2hpbGQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIGNvbnN0IGVkaXRJbnB1dCA9IGA8dGV4dGFyZWEgY2xhc3M9XCJ0YXNrX19lZGl0LWlucHV0LXRleHRcIiB0eXBlPVwidGV4dFwiIGF1dG9mb2N1cz4ke3ZhbHVlfTwvdGV4dGFyZWE+YDtcbiAgICAgICAgdGFza05hbWVXcmFwcGVyLmlubmVySFRNTCA9IGVkaXRJbnB1dDtcblxuXG4gICAgICAgIGNvbnN0IHRleHRBcmVhID0gdGFza05hbWVXcmFwcGVyLmZpcnN0Q2hpbGRcbiAgICAgICAgdGV4dEFyZWEuc2VsZWN0KClcblxuICAgICAgICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuaW5wdXRIYW5kbGVyKVxuICAgICAgICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy51cGRhdGVTdW1tYXJ5LmJpbmQodGhpcykpXG4gICAgICAgIHRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5rZXlQcmVzc0hhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgLy8vTWFraW5nIHRleHRhcmVhIGluaXRpYWwgc2l6ZVxuICAgICAgICBsZXQgbmV4dEhlaWdodCA9IE1hdGgubWluKG1heFRleHRBcmVhSGVpZ2h0LCB0ZXh0U3BhbkhlaWdodClcbiAgICAgICAgY29uc3QgdGV4dEFyZWFQYWRkaW5nVG9wID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0QXJlYSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKSlcbiAgICAgICAgdGV4dEFyZWEuc3R5bGUuaGVpZ2h0ID0gbmV4dEhlaWdodCArICgyICogdGV4dEFyZWFQYWRkaW5nVG9wKSArICdweCdcbiAgICB9XG5cblxuICAgIGlucHV0SGFuZGxlcihldmVudCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICBldmVudC50YXJnZXQucm93cyA9IDE7XG4gICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5oZWlnaHQgPSBzcGFuSGVpZ2h0V2l0aE9uZUxpbmUgKyAncHgnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBldmVudC50YXJnZXQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgbGV0IG5leHRIZWlnaHQgPSBNYXRoLm1pbihtYXhUZXh0QXJlYUhlaWdodCwgc2Nyb2xsSGVpZ2h0KVxuXG4gICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuaGVpZ2h0ID0gbmV4dEhlaWdodCArICdweCdcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAga2V5UHJlc3NIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdW1tYXJ5KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVN1bW1hcnkoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTXN0cmluZ3MuaW5wdXRGb3JUYXNrVXBkYXRlKS52YWx1ZVxuICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRhc2tcIik7XG4gICAgICAgIGNvbnN0IGlkID0gdGFza0VsZW1lbnQuaWRcblxuICAgICAgICBjb25zdCBidG5zQ29udGFpbmVyID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihET01zdHJpbmdzLkJ0bnNDb250YWluZXIpXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lV3JhcHBlciA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoRE9Nc3RyaW5ncy50YXNrTmFtZVdyYXBwZXIpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy51cGRhdGVTdW1tYXJ5KVxuICAgICAgICAgICAgY29uc3QgYWZ0ZXJFZGl0U3BhbiA9IGAgPHNwYW4gY2xhc3M9XCJ0YXNrX19uYW1lXCI+JHt2YWx1ZX08L3NwYW4+YFxuICAgICAgICAgICAgYnRuc0NvbnRhaW5lci5pbm5lckhUTUwgPSBlZGl0RGVsZXRlQnRuc1xuICAgICAgICAgICAgdGFza05hbWVXcmFwcGVyLmlubmVySFRNTCA9IGFmdGVyRWRpdFNwYW47XG4gICAgICAgICAgICB0aGlzLmFkZFRhc2tFdmVudExpc3RlbmVycyh0YXNrRWxlbWVudClcbiAgICAgICAgICAgIFRhc2tzQ29udHJvbGxlci51cGRhdGVUYXNrKGlkLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldFRhc2tIdG1sU3RyaW5nKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIChgPGRpdiBjbGFzcz1cInRhc2tcIiBpZD1cIiR7dGFzay5pZH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tfX2NvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFza19fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPSd0YXNrX19jaGVja2JveCc+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tcIj5cbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgY2xhc3M9XCJ0YXNrX19jaGVja2JveF9zdmdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgICAgICAgIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgICAgICA8cG9seWxpbmUgY2xhc3M9XCJ0YXNrX19jaGVja2JveF9saW5lXCIgcG9pbnRzPVwiMy41LDQ1LjUgNDAuNSw4Mi41IDk1LjcsMTUuMyBcIlxuICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiAvPjwvc3ZnPlxuICAgIDwvbGFiZWw+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cInRhc2tfX25hbWUtd3JhcHBlclwiPlxuICAgIDxzcGFuIGNsYXNzPVwidGFza19fbmFtZVwiIHRpdGxlPVwiJHt0YXNrLnN1bW1hcnl9XCI+JHt0YXNrLnN1bW1hcnl9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrX19idG5zXCI+XG4gICAgPGkgY2xhc3M9XCJ0YXNrX19idG4tZWRpdFwiPjwvaT5cbiAgICA8aSBjbGFzcz1cInRhc2tfX2J0bi1kZWxldGVcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj48L2Rpdj5gKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrVmlldzsiLCJpbXBvcnQgeyBET01zdHJpbmdzIH0gZnJvbSAnLi9kb21TdHJpbmdzJ1xuaW1wb3J0IFRhc2tNb2RlbCBmcm9tICcuL1Rhc2tNb2RlbCdcbmltcG9ydCBUYXNrVmlldyBmcm9tICcuL1Rhc2tWaWV3J1xuXG5cbmNvbnN0IHRhc2tNb2RlbCA9IG5ldyBUYXNrTW9kZWwoKTtcbmNvbnN0IHRhc2tWaWV3ID0gbmV3IFRhc2tWaWV3KCk7XG4vLyBDUlVEIC8vIENyZWF0ZSBSZWFkIFVwZGF0ZSBEZWxldGVcblxuY2xhc3MgVGFza3NDb250cm9sbGVyIHtcbiAgICBjcmVhdGVUYXNrKHN1bW1hcnkpIHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2tNb2RlbC5jcmVhdGVUYXNrKHN1bW1hcnkpXG4gICAgICAgIC8vQWRkIG5ldyB0YXNrIHRvIFVJXG5cbiAgICAgICAgdGFza1ZpZXcuYWRkVGFza1RvVUkoeyAuLi5uZXdUYXNrIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyVGFza3MoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGFza01vZGVsLnJlYWRUYXNrcygpO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKGN1ciA9PiB0YXNrVmlldy5hZGRUYXNrVG9VSShjdXIpKTtcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JRCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRhc2tcIikuaWQ7XG4gICAgICAgIHRhc2tNb2RlbC5kZWxldGVUYXNrKGl0ZW1JRClcblxuICAgICAgICAvL1JlbW92ZSB0YXNrIGZyb20gVUkgXG4gICAgICAgIHRhc2tWaWV3LnJlbW92ZVRhc2tGcm9tVUkoaXRlbUlEKVxuICAgICAgICB0YXNrTW9kZWwuc2F2ZUNoYW5nZXNUb0xvY2FsU3RvcmFnZSgpO1xuXG4gICAgfVxuXG4gICAgLy9FZGl0IFRhc2tcbiAgICB1cGRhdGVUYXNrKGlkLCB2YWx1ZSkge1xuICAgICAgICB0YXNrTW9kZWwudXBkYXRlVGFzayhpZCwgdmFsdWUpO1xuICAgIH07XG5cbn1cblxuXG5jb25zdCB0YXNrc0NvbnRyb2xsZXIgPSBuZXcgVGFza3NDb250cm9sbGVyKClcblxuZXhwb3J0IGRlZmF1bHQgdGFza3NDb250cm9sbGVyOyIsImltcG9ydCBUYXNrIGZyb20gJy4vVGFzaydcblxuY2xhc3MgVGFza01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG5cbiAgICB9XG5cbiAgICBjcmVhdGVUYXNrKHN1bW1hcnkpIHtcbiAgICAgICAgLy9DcmVhdGUgTmV3IFRhc2tcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHN1bW1hcnkpO1xuXG4gICAgICAgIC8vUHVzaCBuZXcgdGFzayBpbnRvIGRhdGEgc3RydWN0dXJlICh0aGlzLnRhc2tzIGFycmF5KVxuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgIHRoaXMuc2F2ZUNoYW5nZXNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICByZXR1cm4gbmV3VGFza1xuXG4gICAgfVxuXG4gICAgcmVhZFRhc2tzKCkge1xuICAgICAgICB0aGlzLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW11cbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3NcbiAgICB9XG5cbiAgICAvL0RlbGV0ZSB0YXNrXG4gICAgZGVsZXRlVGFzayhpZCkge1xuICAgICAgICAvL0RlbGV0ZSB0YXNrIGZyb20gZGF0YSBzdHJ1Y3R1cmVcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleChjdXIgPT4gY3VyLmlkID09PSBpZCk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNhdmVDaGFuZ2VzVG9Mb2NhbFN0b3JhZ2UoKVxuICAgIH1cblxuICAgIC8vRWRpdCBUYXNrXG4gICAgdXBkYXRlVGFzayhpZCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRhc2sgPSB0aGlzLnRhc2tzLmZpbmQoY3VyID0+IGN1ci5pZCA9PT0gaWQpO1xuICAgICAgICBjdXJyZW50VGFzay5zdW1tYXJ5ID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2F2ZUNoYW5nZXNUb0xvY2FsU3RvcmFnZSgpXG4gICAgfVxuXG5cbiAgICBzYXZlQ2hhbmdlc1RvTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVGFza01vZGVsOyIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuaW1wb3J0IFRhc2tzQ29udHJvbGxlciBmcm9tICcuL2pzL1Rhc2tzQ29udHJvbGxlcidcbmltcG9ydCB7IERPTXN0cmluZ3MgfSBmcm9tICcuL2pzL2RvbVN0cmluZ3MnXG5pbXBvcnQgeyBnZXRDdXJyZW50VGltZSB9IGZyb20gJy4vanMvaGVscGVycydcblxuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0l0ZW1TdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9Nc3RyaW5ncy5uZXdJdGVtKTtcbiAgICBjb25zdCBjcmVhdGVOZXdJdGVtU3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTXN0cmluZ3MuY3JlYXRlTmV3SXRlbSk7XG4gICAgY29uc3QgdG9nZ2xlU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01zdHJpbmdzLnN1Ym1pdEJ0bik7XG5cblxuICAgIC8vXG4gICAgVGFza3NDb250cm9sbGVyLnJlbmRlclRhc2tzKClcblxuICAgIC8vQ2xpY2sgb24gYWRkIG5ldyBpdGVtXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01zdHJpbmdzLm5ld0l0ZW0pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuZXdJdGVtU3R5bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgY3JlYXRlTmV3SXRlbVN0eWxlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01zdHJpbmdzLmlucHV0KS52YWx1ZSA9ICcnO1xuICAgIH0pO1xuXG4gICAgLy9DbGljayBvbiBzdWJtaXQgYnRuXG4gICAgY29uc3QgYWRkVGFzayA9IChzdW1tYXJ5KSA9PiB7XG4gICAgICAgIGlmIChzdW1tYXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgVGFza3NDb250cm9sbGVyLmNyZWF0ZVRhc2soc3VtbWFyeSk7XG4gICAgICAgICAgICBuZXdJdGVtU3R5bGUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XG4gICAgICAgICAgICBjcmVhdGVOZXdJdGVtU3R5bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9Nc3RyaW5ncy5zdWJtaXRCdG4pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01zdHJpbmdzLmlucHV0KS52YWx1ZTtcbiAgICAgICAgdG9nZ2xlU3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1uZXctaXRlbV9fYnRuLWFkZC10YXNrLS1kaXNhYmxlZCcpO1xuICAgICAgICBhZGRUYXNrKHN1bW1hcnkpO1xuICAgIH0pO1xuXG4gICAgLy9QcmVzcyBvbiBlbnRlclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9Nc3RyaW5ncy5pbnB1dCkuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICBhZGRUYXNrKHN1bW1hcnkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL0lucHV0IGNoYW5nZVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01zdHJpbmdzLmlucHV0KS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlU3VibWl0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FkZC1uZXctaXRlbV9fYnRuLWFkZC10YXNrLS1kaXNhYmxlZCcpO1xuICAgIH0pO1xuXG5cbiAgICAvL0NsaWNrIG9uIGNhbmNlbCBidG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTXN0cmluZ3MuY2FuY2VsQnRuKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmV3SXRlbVN0eWxlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICAgICAgICBjcmVhdGVOZXdJdGVtU3R5bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZGF5LCBtb250aCwgeWVhciwgaG91cnMsIG1pbnV0ZXMgfSA9IGdldEN1cnJlbnRUaW1lKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01zdHJpbmdzLmRhdGUpLnRleHRDb250ZW50ID0gYCR7ZGF5fSAke21vbnRofSwgJHt5ZWFyfWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01zdHJpbmdzLnRpbWUpLnRleHRDb250ZW50ID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuXG59O1xuXG5cbmluaXQoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=