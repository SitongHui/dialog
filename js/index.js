window.onload = function () {
    dialog();
};

function dialog() {
    var $ = document.querySelectorAll.bind(document);
    //获取元素
    var confirmBtnEle = $('.dialog > .confirmbtn')[0];
    var inputTitleEle = $('.dialog > .title')[0];
    var showDialogEle = $('.dialog > .showdialog')[0];
    var closeBtnEle = $('.dialog > .showdialog > .closebtn')[0];
    var checkTitleEle = $('.dialog > .showdialog > .dialogcontent > .checktitle')[0];
    var showDialogStatus = false;
    //注册事件
    elementDisplay(confirmBtnEle, 'block');
    elementDisplay(closeBtnEle, 'none');


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
