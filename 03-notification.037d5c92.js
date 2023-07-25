let i=null;const t={notification:document.querySelector(".js-alert")};function e(){t.notification.classList.remove("is-visible")}t.notification.addEventListener("click",(function(){e(),clearTimeout(i)})),t.notification.classList.add("is-visible"),i=setTimeout((()=>{console.log("Нужно закрыть alert"),e()}),3e3);
//# sourceMappingURL=03-notification.037d5c92.js.map
