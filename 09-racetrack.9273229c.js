!function(){var t=["Secretariat","Eclipse","West Australian","Flying Fox","Seabiscuit"],e=0,n={startBtn:document.querySelector(".js-start-race"),winnerField:document.querySelector(".js-winner"),progressField:document.querySelector(".js-progress"),tableBody:document.querySelector(".js-results-table > tbody")};function r(t){return new Promise((function(e){var n,r,o=(n=2e3,r=3500,Math.floor(Math.random()*(r-n+1)+n));setTimeout((function(){e({horse:t,time:o})}),o)}))}function o(t){n.winnerField.textContent=t}function c(t){n.progressField.textContent=t}n.startBtn.addEventListener("click",(function(){var i=t.map(r);console.log(i),o("🎉"),c("🤖 Заезд начался, ставки не принимаются!"),a=i,Promise.race(a).then((function(t){var r=t.horse,c=t.time;o("🎉 Победил ".concat(r,", финишировав за ").concat(c," времени")),function(t){var e=t.horse,r=t.time,o=t.raceCounter,c="<tr><td>".concat(o,"</td><td>").concat(e,"</td><td>").concat(r,"</td><tr>");n.tableBody.insertAdjacentHTML("beforeend",c)}({horse:r,time:c,raceCounter:e})})),function(t){Promise.all(t).then((function(){c("📝 Заезд окончен, принимаются ставки.")}))}(i),e++;var a}))}();
//# sourceMappingURL=09-racetrack.9273229c.js.map