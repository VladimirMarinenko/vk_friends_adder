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

    $(document).ready(function () {
        function blink() {
            var friend = $('.friends_find_user')[0]
            var name = $(friend).find('.friends_find_user_name').text()
            var warning = $(document).find(".box_layout")

            if (warning.length > 0) {
                clearInterval(letsgo);
            }

            if (friend == undefined) {
                location.reload();
            }

        }

        var letsgo = setInterval(blink, 5000);
    });
})();