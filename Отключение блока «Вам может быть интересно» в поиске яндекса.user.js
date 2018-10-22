// ==UserScript==
// @name         Отключение блока «Вам может быть интересно» в поиске яндекса
// @namespace    https://yandex.ru/
// @version      1.0
// @description  Отключает и всё тут
// @author       elisevgeniy
// @match        https://yandex.ru/search/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

console.log("Отключение блока «Вам может быть интересно»");
console.log("Найдено " + $(".organic.organic_with-recommendations_yes").length + " элементов для исправления");
$(".organic.organic_with-recommendations_yes").get().map(function(item) {
    item.classList.remove("organic", "organic_with-recommendations_yes");
});
console.log("После исправления найдено " + $(".organic.organic_with-recommendations_yes").length + " элементов для исправления");

})();
