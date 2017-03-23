//事件处理程序 
window.onload=function () {
    var go=document.getElementById('go'),
        box=document.getElementById('box');

    eventUtil.addEvent(box,'click',function () {
        alert('我是父盒子box');
    });

    eventUtil.addEvent(go,'click',function (event) {
        event=eventUtil.getEvent(event);
        //获取事件来自于哪个元素（事件目标）
        alert(eventUtil.getElement(event));
    });
}
