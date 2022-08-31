// ==UserScript==
// @name         New Userscript
// @namespace    https://vk.com/friends?act=find
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match         https://vk.com/friends?act=find
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// @require https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function () {
    'use strict';
    // ждем загрузки страницы
    $(document).ready(function () {
        // функция добавления
        function main_adder() {

            var friend = $('.friends_find_user')[0] // обьект будущего друга
            var name = $(friend).find('.friends_find_user_name').text() // имя будущего друга
            var warning = $(document).find(".box_layout") // ошибка или предупреждения со стороны ВК

            // если есть ошибки или предупреждения со стороны ВК, то останавливаем работу
            if (warning.length > 0) {
                clearInterval(letsgo);
            }
            // если друзей больше нету добавлять, обновляем страницу для появления новых
            if (friend == undefined) {
                location.reload();
            }

            // добавляем а затем удаляем обработанную заявку со страницы
            $(friend).find('.friends_find_user_add').click()
            $(friend).remove()

        }
        // выставляем интервал для выполнения нашего алгоритма отправки заявки в данном случае 2 сек
        var letsgo = setInterval(main_adder, 2000);
    });
})();