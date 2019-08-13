/*//1.请写出弹出值，并解释为什么
alert(a);                  //输出a方法
console.log(a);
a();					//输出10
var a=3;
function a(){
	alert(10)
}
alert(a)				//输出3
a=6
a();					//typeError

/*  
var 



*/



/* // 2.请写出如下输出值，并写出把注释掉的代码取消注释的值，并解释为什么、

this.a = 20;  
var test = { 
    a: 40, 
    init:()=> { 
        console.log(this.a); 					
        function go() { 
            this.a = 60; 
            console.log(this.a);          //输出go的a变量        
        }         
		go.prototype.a = 50; 
		return go;
     } 
}; 
//var p = test.init(); 
//p(); 									//p将init提前到window下
new(test.init())(); 

// 不取消的情况下 20  60  取消后 20 60 60 60

*/




/*//2-1 */

var num = 1;
function yideng() {
  "use strict";				//A:严格模式没定义标量 肯定报错													
  console.log(this.num++);
}
function yideng2() {
  console.log(++this.num);
}
(function() {
  "use strict";						
  yideng();
})();
yideng();





