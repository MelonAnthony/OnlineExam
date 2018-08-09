/**
 * by wqy
 * 创建自定义弹窗
 * @param param
 * 参数结构：
 param = {
            title:'提示',
            tips:"没有任何提示信息！",
            btnOk:'是',
            btnNo:'否',
            funcOk:function () {
            },
            funcNo:function () {
            }
        }
 */
function createMessTipWin(param) {

    if (param==null || param=="") {
        param = {
            title:'友情提示',
            tips:"没有任何提示信息！",
            btnOk:'是',
            //btnNo:'否',
            funcOk:function () {
            },
            funcNo:function () {
            }
        }
    }

    var tipWinObj = document.createElement("DIV");
    tipWinObj.id = uuid();
    tipWinObj.style.cssText = "position:fixed;z-index:9999;width:300px; height:auto; overflow:hidden;background-color:white; border:solid 1px #231234;padding-bottom:10px;";
    tipWinObj.style.top = '30%';
    tipWinObj.style.left = '40%';

    var topDiv = document.createElement("DIV");
    topDiv.style.cssText = "height;30px; line-height:30px; font-size:14px;background-color:#231234;color:white;";

    var titDiv = document.createElement("DIV");
    titDiv.style.cssText = "float:left; width:80%;margin-left:5px;";
    titDiv.innerHTML = param.title;

    var cross = document.createElement("DIV");
    cross.style.cssText = "float:right; cursor:pointer;margin-right:5px;";
    cross.innerHTML = 'X';

    var clearDiv = document.createElement("DIV");
    clearDiv.style.cssText = "clear:both";

    var contentDiv = document.createElement("DIV");
    contentDiv.style.cssText = "height:auto; overflow:hidden; line-height:24px;padding:0px 10px 10px;text-align:center;margin-top:10px;";
    contentDiv.innerHTML = param.tips;

    var okBtn = document.createElement("BUTTON");
    okBtn.style.cssText = "float:right; width:50px; margin-right:10px;cursor:pointer ";
    okBtn.innerHTML = param.btnOk;

    /*var noBtn = document.createElement("BUTTON");
    noBtn.style.cssText = "float:right; width:50px;cursor:pointer;margin-right: 10px;";
    noBtn.innerHTML = param.btnNo;
*/
    topDiv.appendChild(titDiv);
    topDiv.appendChild(cross);
    topDiv.appendChild(clearDiv);
    tipWinObj.appendChild(topDiv);
    tipWinObj.appendChild(contentDiv);

    //tipWinObj.appendChild(noBtn);
    tipWinObj.appendChild(okBtn);

    //获取当前页面的第一个body节点对象,
    var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(tipWinObj);

    //鎖屏DIV
    var bgObj = document.createElement("DIV");
    //background: #000000;filter: alpha(Opacity=30); -moz-opacity:0.30;opacity:0.30;
    bgObj.style.cssText = "position:fixed;z-index: 9997;top: 0px;left: 0px;";
    bgObj.style.width = '100%';
    bgObj.style.height = '120%';
    body.appendChild(bgObj);

    cross.onclick = function () {
        body.removeChild(tipWinObj);
        body.removeChild(bgObj);
    };
    okBtn.onclick = function () {
        param.funcOk();
        body.removeChild(tipWinObj);
        body.removeChild(bgObj);
    };
    /*noBtn.onclick = function () {
        param.funcNo();
        body.removeChild(tipWinObj);
        body.removeChild(bgObj);
    };*/
}

function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
 
    var uuid = s.join("");
    return uuid;
}