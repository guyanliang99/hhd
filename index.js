new Image().src="http://7xwog6.com1.z0.glb.clouddn.com/decode.png";
new Image().src="http://7xwog6.com1.z0.glb.clouddn.com/234.png";
var start, showDecode, jumpToDecode, lastTime, lastAcc, isStarted = false;

start = function() {
	isStarted = true;
	$('.decode').hide();
	$('.result').show();
	setTimeout(showDecode, 3000);
}

showDecode = function(){
	$('.result').hide();
	$('.decode').show();
	setTimeout(jumpToDecode, 3000);
}

jumpToDecode = function(){
	
	alert("分享给3个群即可知晓答案！~")	
	
	
	
	var urls = [
	"http://7xwog6.com1.z0.glb.clouddn.com/1.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/2.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/3.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/4.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/5.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/6.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/7.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/8.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/9.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/10.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/11.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/12.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/13.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/14.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/15.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/16.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/17.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/18.jpg", 
	"http://7xwog6.com1.z0.glb.clouddn.com/19.jpg", 	
	];
	var jumpTo = urls[parseInt(Math.random() * urls.length)];
	
	
	setTimeout(function(){
		window.location = jumpTo;
	}, 10000);
	

}

$('.do').click(start);

//摇一摇
$(window).on('deviceorientation', function(e) {
	if (isStarted) {
		return true;
	}
	if (!lastAcc) {
		lastAcc = e;
		return true;
	}
	var speed = e.alpha + e.beta + e.gamma - lastAcc.alpha - lastAcc.beta - lastAcc.gamma;
	if (Math.abs(speed) > 50) {
		start();
	}
	lastAcc = e;
});

//微信分享  失效了，有时间的可以根据官方公布的 JS-SDK进行开发

var shareMeta = {
	img_url: "",
	image_width: 100,
	image_height: 100,
	link: '',
	title: "2015乙未羊，为自己摇枚新年签！",
	desc: "这是对过去的感悟和对新年的祈望，希望它能为你带来好运...",
	appid: ''
};
document.addEventListener('WeixinJSBridgeReady', function () {
	WeixinJSBridge.on('menu:share:appmessage', function(){
		WeixinJSBridge.invoke('sendAppMessage', shareMeta);
	});
	WeixinJSBridge.on('menu:share:timeline', function(){
		WeixinJSBridge.invoke('shareTimeline', shareMeta);
	});
	WeixinJSBridge.on('menu:share:weibo', function(){
		WeixinJSBridge.invoke('shareWeibo', {
			content: shareMeta.title + shareMeta.desc,
			url: shareMeta.link
		});
	});
});