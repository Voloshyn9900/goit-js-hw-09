!function(){var i=null,t={notification:document.querySelector(".js-alert")};function n(){t.notification.classList.remove("is-visible")}t.notification.addEventListener("click",(function(){n(),clearTimeout(i)})),t.notification.classList.add("is-visible"),i=setTimeout((function(){console.log("Нужно закрыть alert"),n()}),3e3)}();
//# sourceMappingURL=03-notification.36d648ba.js.map
