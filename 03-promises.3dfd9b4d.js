function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("eWCmQ");const l=document.querySelector(".form"),u=Number(document.querySelector('[name="step"]').value);let d=Number(document.querySelector('[name="delay"]').value);const a=Number(document.querySelector('[name="amount"]').value);function s(e,o){const t=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{t&&n({position:e,delay:o}),r({position:e,delay:o})}),o)}))}l.addEventListener("submit",(o=>{o.preventDefault();for(let o=0;o<a;o+=1){s(o+1,d+u*o).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.3dfd9b4d.js.map
