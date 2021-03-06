/**
 * 对外提供的微信分享js
 * @author mingxing
 */
var weixinApi = window.weixinApi || {};
weixinApi.share = (function() {
    var wxShareData = {};
    //动态加载js
    function loadJsFile(filename, callback) {
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
        if (typeof fileref != "undefined") {
            fileref.onload = function() {
                callback && callback();
            }
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
    }
    //加载jssdk必要参数
    function loadShareConfig() {
        var apiUrl = 'https://m.xhwhouse.com/index/initjssdk/?callback=jsonpCallback&url=' + encodeURIComponent(location.href);
        loadJsFile(apiUrl);
    }

    //初始化微信对象
    function initWx(wx, result) {
        wx.config({
            debug: wxShareData.debug ? wxShareData.debug : false,
            appId: result.appid,
            timestamp: result.timestamp,
            nonceStr: result.noncestr,
            signature: result.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
        });
        wx.ready(function() {
            wx.onMenuShareAppMessage({
                title: wxShareData.title,
                desc: wxShareData.desc,
                link: wxShareData.link,
                imgUrl: wxShareData.imgUrl,
                success: wxShareData.success ? wxShareData.success : function() {},
                cancel: wxShareData.cancel ? wxShareData.cancel : function() {}
            });
            wx.onMenuShareTimeline({
                title: wxShareData.title,
                desc: wxShareData.desc,
                link: wxShareData.link,
                imgUrl: wxShareData.imgUrl,
                success: wxShareData.success ? wxShareData.success : function() {},
                cancel: wxShareData.cancel ? wxShareData.cancel : function() {}
            });
        });
    }
    //jsonp回调函数
    if (!window.jsonpCallback) {
        window.jsonpCallback = function(result) {
            if (window.wx) {
                initWx(window.wx, result);
            } else {
                loadJsFile("https://res.wx.qq.com/open/js/jweixin-1.0.0.js", function() {
                    if (typeof define === 'function' && define.cmd) {
                        // CMD 规范，for：seajs
                        seajs.use("https://res.wx.qq.com/open/js/jweixin-1.0.0.js", function(wx) {
                            initWx(wx, result);
                        });
                    } else {
                        initWx(wx, result);
                    }
                });
            }
        }
    }
    //初始操作
    function init(data) {
        wxShareData = data;
        loadShareConfig();
    }
    return {
        init: init
    }
})();