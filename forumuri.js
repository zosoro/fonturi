// ==UserScript==
// @name         Stylebot pentru forumuri
// @version      1.1.2
// @description  schimbat fonturi
// @icon https://images2.imgbox.com/5d/75/KgSfjDTK_o.png
// @updateURL	https://raw.githubusercontent.com/zosoro/fonturi/main/forumuri.js
// @downloadURL	https://raw.githubusercontent.com/zosoro/fonturi/main/forumuri.js
// @author       Zoso
// @match		https://aradon.ro/*
// @match		https://bitcointalk.org/*
// @match		https://bladeforums.com/*
// @match		https://bmwclub.ro/*
// @match		https://centbrowser.com/*/forum
// @match		https://clubaudi.ro/*
// @match		https://cswarzone.com/*
// @match		https://daciaclub.ro/*
// @match		https://dashcamtalk.com/*
// @match		https://forestryforum.com/*
// @match		https://forum.4tuning.ro/*
// @match		https://forum.com/*putergamers.ro/*
// @match		https://forum.lab501.ro/*
// @match		https://forum.peundemerg.ro/*
// @match		https://forum.seopedia.ro/*
// @match		https://forum.softpedia.com/*
// @match		https://m.hotnews.ro/*
// @match		https://mgtow.com/*
// @match		https://motociclism.ro/*
// @match		https://mygarage.ro/*
// @match		https://mygarage.ro/*
// @match		https://nimfomane.com/*
// @match		https://peugeotclubromania.ro/*
// @match		https://reno.ro/*
// @match		https://skyscrapercity.com/*
// @match		https://subarufanclub.ro/*
// @match		https://subaruforester.org/*
// @match		https://subaruxvforum.com/*
// @match		https://suzuki-club.ro/*
// @match		https://vwforum.ro/*
// @match		https://www.mygarage.ro/*

// ==/UserScript==

(function () {
var
css = '.Ak,.ii,.post,.postcolor,div,input,p,select,span,td,textarea{font-family:"Open Sans"!important;font-size:14px!important;font-weight:400!important;font-style:normal!important;line-height:18px!important}';
css += 'body {   background-color: #000000; font-family: Open Sans; font-size: 14px; margin-left: 20%; margin-right: 20%;}}';

    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    }

    else if (typeof addStyle != "undefined") {
        addStyle(css);
    }
    else
    {
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0)
        {
            var node = document.createElement("style");
            node.type = "text/css";
            node.appendChild(document.createTextNode(css));
            heads[0].appendChild(node);
        }
    }
})();
