!function(o){window.console||(window.console={}),window.console.log||(window.console.log=function(){}),o.fn.euCookieLawPopup=function(){var e=this;e.params={cookiePolicyUrl:"http://www.wimagguc.com/?cookie-policy",popupPosition:"top",colorStyle:"default",compactStyle:!1,popupTitle:"This website is using cookies",popupText:"We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we'll assume that you are happy to receive all cookies on this website.",buttonContinueTitle:"Continue",buttonLearnmoreTitle:"Learn&nbsp;more",buttonLearnmoreOpenInNewWindow:!0,agreementExpiresInDays:30,autoAcceptCookiePolicy:!1,htmlMarkup:null},e.vars={INITIALISED:!1,HTML_MARKUP:null,COOKIE_NAME:"EU_COOKIE_LAW_CONSENT"};var p=function(p,t,n){if(p){var i=o(p).attr("class")?o(p).attr("class"):"";i.indexOf("eupopup-top")>-1?e.params.popupPosition="top":i.indexOf("eupopup-fixedtop")>-1?e.params.popupPosition="fixedtop":i.indexOf("eupopup-bottomright")>-1?e.params.popupPosition="bottomright":i.indexOf("eupopup-bottomleft")>-1?e.params.popupPosition="bottomleft":i.indexOf("eupopup-bottom")>-1?e.params.popupPosition="bottom":i.indexOf("eupopup-block")>-1&&(e.params.popupPosition="block"),i.indexOf("eupopup-color-default")>-1?e.params.colorStyle="default":i.indexOf("eupopup-color-inverse")>-1&&(e.params.colorStyle="inverse"),i.indexOf("eupopup-style-compact")>-1&&(e.params.compactStyle=!0)}t&&(e.params.htmlMarkup=t),n&&(void 0!==n.cookiePolicyUrl&&(e.params.cookiePolicyUrl=n.cookiePolicyUrl),void 0!==n.popupPosition&&(e.params.popupPosition=n.popupPosition),void 0!==n.colorStyle&&(e.params.colorStyle=n.colorStyle),void 0!==n.popupTitle&&(e.params.popupTitle=n.popupTitle),void 0!==n.popupText&&(e.params.popupText=n.popupText),void 0!==n.buttonContinueTitle&&(e.params.buttonContinueTitle=n.buttonContinueTitle),void 0!==n.buttonLearnmoreTitle&&(e.params.buttonLearnmoreTitle=n.buttonLearnmoreTitle),void 0!==n.buttonLearnmoreOpenInNewWindow&&(e.params.buttonLearnmoreOpenInNewWindow=n.buttonLearnmoreOpenInNewWindow),void 0!==n.agreementExpiresInDays&&(e.params.agreementExpiresInDays=n.agreementExpiresInDays),void 0!==n.autoAcceptCookiePolicy&&(e.params.autoAcceptCookiePolicy=n.autoAcceptCookiePolicy),void 0!==n.htmlMarkup&&(e.params.htmlMarkup=n.htmlMarkup))},t=function(){return e.params.htmlMarkup?e.params.htmlMarkup:'<div class="eupopup-container eupopup-container-'+e.params.popupPosition+(e.params.compactStyle?" eupopup-style-compact":"")+" eupopup-color-"+e.params.colorStyle+'"><div class="eupopup-head">'+e.params.popupTitle+'<a href="#" class="eupopup-closebutton">x</a></div></div>'},n=function(p){var t=new Date,n=24*e.params.agreementExpiresInDays*60*60*1e3;t.setTime(t.getTime()+n);var i="expires="+t.toGMTString();document.cookie=e.vars.COOKIE_NAME+"="+p+"; "+i+";path=/",o(document).trigger("user_cookie_consent_changed",{consent:p})},i=function(){for(var o=!1,p=document.cookie.split(";"),t=0;t<p.length;t++){var n=p[t].trim();0==n.indexOf(e.vars.COOKIE_NAME)&&(o=n.substring(e.vars.COOKIE_NAME.length+1,n.length))}return o},u=function(){o(".eupopup-container").animate({opacity:0,height:0},200,function(){o(".eupopup-container").hide(0)})};return{init:function(a){p(o(".eupopup").first(),o(".eupopup-markup").html(),a),i()||e.vars.INITIALISED||(e.vars.INITIALISED=!0,e.vars.HTML_MARKUP=t(),o(".eupopup-block").length>0?o(".eupopup-block").append(e.vars.HTML_MARKUP):o(".footer").append(e.vars.HTML_MARKUP),o(".eupopup-button_1").click(function(){return n(!0),u(),!1}),o(".eupopup-closebutton").click(function(){return n(!0),u(),!1}),o(".eupopup-container").show(),e.params.autoAcceptCookiePolicy&&n(!0))}}},o(document).ready(function(){o(".eupopup").length>0&&o(document).euCookieLawPopup().init({info:"YOU_CAN_ADD_MORE_SETTINGS_HERE",popupTitle:"This website uses cookies to increase your experience. Close to accept",popupText:""})}),o(document).bind("user_cookie_consent_changed",function(e,p){console.log("User cookie consent changed: "+o(p).attr("consent"))})}(jQuery);