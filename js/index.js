window.onload = function () {
    dialog();
};

function dialog() {
    //获取元素
    var $ = document.querySelectorAll.bind(document);
    var confirmBtnEle = $('.dialog > .confirmbtn')[0];
    var inputTitleEle = $('.dialog > .title')[0];
    var showDialogEle = $('.dialog > .showdialog')[0];
    var cancelBtnEle = $('.dialog > .showdialog > .cancelbtn')[0];
    var closeBtnEle = $('.dialog > .showdialog > .dialogtitle > .closebtn')[0];
    var checkTitleEle = $('.dialog > .showdialog > .dialogcontent > .checktitle')[0];
    var showDialogStatus = false;

    //注册事件
    elementDisplay(confirmBtnEle, 'block');
    elementDisplay(cancelBtnEle, 'none');
    elementDisplay(closeBtnEle,'none');

    //工具函数
    function elementDisplay(ele, status) {
        ele.addEventListener('click',function() {
            if(!showDialogStatus){
                showDialogEle.style.display = status;
            }
            appendELe(checkTitleEle);
        },false)
    }

    function appendELe(ele) {
        var p = document.createElement('p');
        p.innerHTML = inputTitleEle.value;
        inputTitleEle.value = '';
        ele.appendChild(p);
    }
}
