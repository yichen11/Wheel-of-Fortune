var num=8;
var arr=["一等奖","二等奖","三等奖","四等奖","五等奖","六等奖","七等奖","八等奖"]
var canvas=document.getElementById("canvas");
var btn=document.getElementById("btn");
var move=document.getElementById("move");
var center=document.getElementById("center");
var ctx=canvas.getContext('2d');
for(var i=0;i<num;i++){
	ctx.save();
	ctx.beginPath();
	ctx.translate(300,300);
	ctx.moveTo(0,0);
	ctx.rotate((360/num*i+360/num/2)*Math.PI/180);
	ctx.arc(0,0,300,0,2*Math.PI/num,false);
	if(i%2==0){
		ctx.fillStyle="#ffb804";
	}else{
		ctx.fillStyle="#fff567";
	}
	ctx.fill();
	ctx.lineWidth=1;
	ctx.strokeStyle="#fff"
	ctx.stroke();
	ctx.restore();
	
	ctx.font = "Bold 20px Arial"; 
    ctx.textAlign='start';
    ctx.textBaseline='middle';
    ctx.fillStyle = "#000";
    var arr=["一等奖","二等奖","三等奖","四等奖","五等奖","六等奖","七等奖","八等奖"]
    for ( var m = 0; m < arr.length; m++) {
         ctx.save();
         ctx.beginPath();
         ctx.translate(300,300);//平移到圆心
         ctx.rotate((360/num*m+360/num/2)*Math.PI/180);
         ctx.fillText(arr[m],75,30);
         ctx.restore();
    }
	
}
 /*function createCirText(){     
    ctx.font = "Bold 20px Arial"; // 设置字体
    ctx.textAlign='start';//文本水平对齐方式
    ctx.textBaseline='middle';//文本垂直方向，基线位置 
    ctx.fillStyle = "#000";// 设置填充颜色
    var step = 2*Math.PI/6;//10分之1圆的弧度
    for ( var m = 0; m < 6; m++) {
         ctx.save();
         ctx.beginPath();
         ctx.translate(0,0);//平移到圆心
         ctx.rotate(m*step+step/2);//从时钟15点处开始旋转弧度i*step+step/2
         ctx.fillText(arr[m],125,0);
         ctx.restore();
    }
}*/
var c=0;
btn.onclick=function(){
	var i=[1800,1900];
	var b=parseInt(i[1]*Math.random())
	center.style.transform="rotate("+b+"deg)";
	c=c+1;
	console.log(c);
	if(c==2){
		btn.disabled=true;
	}
}
