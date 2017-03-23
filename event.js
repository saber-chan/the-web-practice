//封装在一个eventUtil对象里,以便为各个浏览器提供统一的事件注册方法
var eventUtil={
    //添加句柄
    addEvent:function (target,eventType,eventHandler) {
        if (target.addEventListener){    //非IE浏览器
            target.addEventListener(eventType,eventHandler,false);
        }else if(target.attachEvent){  //IE浏览器
            target.attachEvent('on'+eventType,eventHandler);
        }else {  //老版本对以上都不支持
            target['on'+eventType]=eventHandler;  // target.onclick 等价于 target['onclick']
        }
    },

    //删除句柄
    removeEvent:function (target,eventType,eventHandler) {
        if (target.removeEventListener){    //非IE浏览器
            target.removeEventListener(eventType,eventHandler,false);
        }else if(target.detachEvent){  //IE浏览器
            target.detachEvent('on'+eventType,eventHandler);
        }else {  //老版本对以上都不支持
            target['on'+eventType]=null;  // 触发eventHandler操作 DOM 0级事件处理程序
        }
    },
    
    //获取事件
    getEvent:function (event) {
        return event?event:window.event;   //非IE可直接用event;但IE8 前引用需window.event
    },

    //获取事件类型
    getType:function (event) {
        return event.type;
    },

    //获取事件目标
    getElement:function (event) {
        return event.target || event.srcElement;
    },

    //阻止事件默认行为
    preventDefault:function (event) {
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;  //IE取消事件的默认行为
        }
    },

    //阻止事件冒泡
    stopPropagation:function (event) {
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    }


}
