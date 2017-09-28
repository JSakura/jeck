var h4 = document.getElementById('h4'),
    small = document.getElementById('small'), 
    week = ['日','一','二','三','四','五','六'];
function fn(){
var time = new Date();
var month = time.getMonth()+1,
    data =time.getDate(),
    day = time.getDay(),
    hours = time.getHours(),
    minutes = time.getMinutes();
    second = time.getSeconds();
    h4.innerHTML = zero(hours)+':'+zero(minutes);
    small.innerHTML = month+'月'+data+'日'+' • 星期'+week[day];
}
fn()
setInterval(fn,1000)

function zero(i){
return i<10?i+'0':i;
}