const msgType = {
    INFO: 'info',
    ERROR: 'error',
    LOG : 'log',
    WARN : 'warn'
}

const $ = document.querySelectorAll.bind(document);


class Console {

    constructor() {
        this.consoleEle = $('.console > .console-area')[0];
        this.consoleBtnEle = $('.showbtn')[0];
        this.consoleShowStatus = false;

        this.initEvent();
        this.bindConsole();
    }

    initEvent() {
        this.consoleBtnEle.addEventListener('click', () => {
            this.consoleShowStatus = !this.consoleShowStatus;
            if (this.consoleShowStatus) {
                this.consoleEle.style.display = 'block';
            } else {
                this.consoleEle.style.display = 'none';
            }
        }, false);
    }

    bindConsole() {
        var _this = this;

        // var originInfo = console.info;
        //
        // console.info = function (message) {
        //     _this.appendMessage(new Message(message, msgType.INFO));
        //     originInfo(message);
        // }

        /*var originError = console.error;

        console.error = function (message) {
            _this.appendMessage(new Message(message, msgType.ERROR));
            originError(message);

        }*/

        originfunc(msgType.LOG, 'LOG');
        originfunc(msgType.ERROR, 'ERROR');
        originfunc(msgType.INFO, 'INFO');
        originfunc(msgType.WARN, 'WARN');

        function originfunc(a,b) {
            var consoleWay = ['info','error','log','warn'];
            for(var i = 0; i < consoleWay.length; i++) {
                 var way = consoleWay[i];
                 var originType = console[way]; //保存原方法
             }
            console[a] = function (message) {
                _this.appendMessage(new Message(message, msgType[b]));
                originType(message);
            }


        }


    }

    appendMessage(message) {
        this.consoleEle.appendChild(message.toHtml());
    }


}



class Message {
    constructor(content, type) {
        this.content = content;
        this.type = type;
    }

    toHtml() {
        const p = document.createElement('p');
        p.className = this.type;
        p.innerText = this.content;

        return p;

    }
}

window.onload=function() {
    new Console();
}

