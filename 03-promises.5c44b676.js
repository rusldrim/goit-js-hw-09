!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t),t("6JpON");var r={body:document.querySelector("body"),form:document.querySelector("form.form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function i(e,o){return new Promise((function(n,t){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}r.form.addEventListener("click",(function(e){e.preventDefault();for(var o=Number(r.delay.value),n=Number(r.step.value),t=Number(r.amount.value),u=1;u<=t;u+=1){i(u,o+n*u).then((function(e){var o=e.position,n=e.delay;Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.5c44b676.js.map