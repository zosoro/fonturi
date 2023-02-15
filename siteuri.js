// ==UserScript==
// @name         Stylebot pentru siteuri
// @version      1.1.2
// @description  schimbat fonturi pe site-uri încremenite în trecut
// @icon https://images2.imgbox.com/5d/75/KgSfjDTK_o.png
// @updateURL	https://raw.githubusercontent.com/zosoro/fonturi/main/siteuri.js
// @downloadURL	https://raw.githubusercontent.com/zosoro/fonturi/main/siteuri.js
// @homepage	https://github.com/zosoro/fonturi
// @supportURL	https://github.com/zosoro/fonturi/issues
// @author       Zoso
// @match   https://*.dw.com/*
// @match   https://*.e-nergia.ro/*
// @match   https://*.profit.ro/*
// @match		http://*.metalhead.ro/*
// @match		http://stiri.tvr.ro/*
// @match		https://*.0-100.hotnews.ro/*
// @match		https://*.4tuning.ro/*
// @match		https://*.adevarul.ro/*
// @match		https://*.adplayers.ro/*
// @match		https://*.agrointel.ro/*
// @match		https://*.aktual24.ro/
// @match		https://*.apartmentprepper.com/*
// @match		https://*.apti.ro/*
// @match		https://*.aradon.ro/*
// @match		https://*.autoblog.com/*
// @match		https://*.avocatnet.ro/*
// @match		https://*.b1.ro/*
// @match		https://*.b365.ro/*
// @match		https://*.bazavan.ro/*
// @match		https://*.best-selling-cars.com/*
// @match		https://*.bizbrasov.ro/*
// @match		https://*.bogdanstoica.ro/*
// @match		https://*.bursa.ro/*
// @match		https://*.businessmagazin.ro/*
// @match		https://*.bzi.ro/*
// @match		https://*.cabral.ro/*
// @match		https://*.capital.ro/*
// @match		https://*.catavencii.ro/*
// @match		https://*.clubferoviar.ro/*
// @match		https://*.contributors.ro/*
// @match		https://*.cracked.com/*
// @match		https://*.cronica.ro/*
// @match		https://*.cursdeguvernare.ro/*
// @match		https://*.daringfireball.net
// @match		https://*.dcnews.ro/*
// @match		https://*.digi24.ro/*
// @match		https://*.dilemaveche.ro/*
// @match		https://*.dollo.ro/*
// @match		https://*.dorinlazar.ro/*
// @match		https://*.dstanca.ro/*
// @match		https://*.ebihoreanul.ro/*
// @match		https://*.economedia.ro/*
// @match		https://*.economica.net
// @match		https://*.educatieprivata.ro/*
// @match		https://*.edupedu.ro/*
// @match		https://*.eftimie.net
// @match		https://*.flutureledepiatra.ro/*
// @match		https://*.flux24.ro/*
// @match		https://*.focuspress.ro/*
// @match		https://*.gandul.ro/*
// @match		https://*.georgebutunoiu.com/*
// @match		https://*.gpec.ro/*
// @match		https://*.green-report.ro/*
// @match		https://*.hbr.org/*
// @match		https://*.hoinaru.ro/*
// @match		https://*.hotnews.ro/*
// @match		https://*.incentru.ro/*
// @match		https://*.inoza.ro/*
// @match		https://*.investenergy.ro/*
// @match		https://*.justitiarul.ro/*
// @match		https://*.krossfire.ro/*
// @match		https://*.lab501.ro/*
// @match		https://*.libertatea.ro/*
// @match		https://*.manafu.ro/*
// @match		https://*.mediafax.ro/*
// @match		https://*.mirrorlessrumors.com/*
// @match		https://*.money.ro/*
// @match		https://*.morethanjustsurviving.com/*
// @match		https://*.myploiesti.ro/*
// @match		https://*.natgeo.ro/*
// @match		https://*.news.ro/*
// @match		https://*.newsbv.ro/*
// @match		https://*.next.lab501.ro/*
// @match		https://*.outdoorlife.com/*
// @match		https://*.outline.com/*
// @match		https://*.panorama.ro/*
// @match		https://*.paulkirtley.co.uk
// @match		https://*.petapixel.com/*
// @match		https://*.piticigratis.com/*
// @match		https://*.politicscan.ro/*
// @match		https://*.presshub.ro/*
// @match		https://*.prisacariu.ro/*
// @match		https://*.proalpin.ro/*
// @match		https://*.profit.ro/*
// @match		https://*.realitatea.net/*
// @match		https://*.revista22.ro/*
// @match		https://*.rfi.ro/*
// @match		https://*.ryanholiday.net
// @match		https://*.sorinamatei.ro/*
// @match		https://*.sov.ro/*
// @match		https://*.spotmedia.ro/*
// @match		https://*.starpulse.com/*
// @match		https://*.startupcafe.ro/*
// @match		https://*.stiri.tvr.ro/*
// @match		https://*.stirileprotv.ro/*
// @match		https://*.subiectiv.ro/*
// @match		https://*.theannemarie.ro/*
// @match		https://*.theprepperjournal.com/*
// @match		https://*.tion.ro/*
// @match		https://*.tolo.ro/*
// @match		https://*.vocea.biz/*
// @match		https://*.wall-street.ro/*
// @match		https://*.zenhabits.net/*
// @match		https://*.zf.ro/*
// @match		https://*.zfcorporate.ro/*
// @match		https://*.ziardecluj.ro/*
// @match		https://*.ziare.com/*
// @match		https://*.ziaruldeiasi.ro/*
// @match		https://*.zvoner.ro/*
// @match		https://*.politichii.ro/*
// @match		https://*.revistacariere.ro/*
// @match		https://*.buletin.de/*
// @match		https://*.gazetadecluj.ro/*
// @match		https://*.monitorulsv.ro/*
// @match		https://*.reporteris.ro/*
// @match		https://romania.europalibera.org/*
// @match		https://*.biziday.ro/*
// @match		https://*.ziuaconstanta.ro/*
// @match		https://*.0-100.ro/*
// @match		https://*.presshub.ro/*
// @match		https://*.zerohedge.com/*
// ==/UserScript==

(function () {
var
css = '.Ak,.ii,.post,.postcolor,div,input,p,select,span,td,textarea, single__excerpt, strong {font-family:"PT Serif"!important;font-size:18px!important;font-weight:400!important;font-style:normal!important;line-height:26px!important}';
css += 'h1, h2, h5 { font-family:"PT Serif"!important;font-size:26px!important;font-weight:semibold!important;font-style:normal!important;line-height:30px!important}}';

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
