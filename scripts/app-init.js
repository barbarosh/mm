!function t(n,o,e){function s(c,i){if(!o[c]){if(!n[c]){var a="function"==typeof require&&require;if(!i&&a)return a(c,!0);if(r)return r(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var u=o[c]={exports:{}};n[c][0].call(u.exports,(function(t){return s(n[c][1][t]||t)}),u,u.exports,t,n,o,e)}return o[c].exports}for(var r="function"==typeof require&&require,c=0;c<e.length;c++)s(e[c]);return s}({1:[function(t,n,o){"use strict";let e=!1;const{chrome:s}=globalThis,r=[];function c(...t){try{const n=(new Date).getTime();importScripts(...t);const o=(new Date).getTime();return r.push({name:t[0],value:o-n,children:[],startTime:n,endTime:o}),!0}catch(t){console.error(t)}return!1}function i(){if(e)return;e=!0;const t=[],n=n=>{t.push(n)},o=Date.now();n("../scripts/sentry-install.js");!self.document||n("../scripts/snow.js"),n("../scripts/use-snow.js");n("../scripts/runtime-lavamoat.js"),n("../scripts/lockdown-more.js"),n("../scripts/policy-load.js");"../common-0.js,../common-1.js,../common-2.js,../common-3.js,../common-4.js,../common-5.js,../common-6.js,../common-7.js,../common-8.js,../common-9.js,../common-10.js,../common-11.js,../common-12.js,../background-0.js,../background-1.js,../background-2.js,../background-3.js,../background-4.js,../background-5.js,../background-6.js".split(",").forEach((t=>n(t))),c(...t);Date.now();console.log("SCRIPTS IMPORT COMPLETE in Seconds: "+(Date.now()-o)/1e3)}self.addEventListener("install",i),s.runtime.onMessage.addListener((()=>(i(),!1))),"activated"===self.serviceWorker.state&&i();(async()=>{try{await s.scripting.registerContentScripts([{id:"inpage",matches:["file://*/*","http://*/*","https://*/*"],js:["scripts/inpage.js"],runAt:"document_start",world:"MAIN",allFrames:!0}])}catch(t){console.warn(`Dropped attempt to register inpage content script. ${t}`)}})()},{}]},{},[1]);