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
	"qw/1.jpg", 
	"qw/2.jpg", 
	"qw/3.jpg", 
	"qw/4.jpg", 
	"qw/5.jpg", 
	"qw/6.jpg", 
	"qw/7.jpg", 
	"qw/8.jpg", 
	"qw/9.jpg", 
	"qw/10.jpg", 
	"qw/11.jpg", 
	"qw/12.jpg", 
	"qw/13.jpg", 
	"qw/14.jpg", 
	"qw/15.jpg", 
	"qw/16.jpg", 
	"qw/17.jpg", 
	"qw/18.jpg", 
	"qw/19.jpg", 	
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
	img_url: "http://www.imeiwen.com/2015/thumbnail.gif",
	image_width: 100,
	image_height: 100,
	link: 'http://www.imeiwen.com/2015/index.html',
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