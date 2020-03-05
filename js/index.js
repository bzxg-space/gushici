var apis = [
	"https://v1.jinrishici.com/all",
	"https://v1.jinrishici.com/shuqing",
	"https://v1.jinrishici.com/siji",
	"https://v1.jinrishici.com/shanshui",
	"https://v1.jinrishici.com/tianqi",
	"https://v1.jinrishici.com/renwu",
	"https://v1.jinrishici.com/rensheng",
	"https://v1.jinrishici.com/shenghuo",
	"https://v1.jinrishici.com/jieri",
	"https://v1.jinrishici.com/dongwu",
	"https://v1.jinrishici.com/zhiwu",
	"https://v1.jinrishici.com/shiwu"
];
var flag = 0;
var word = document.getElementById('word');
var lis = document.getElementsByTagName('li');
ajax(apis[0]);

function reload() {
	show(flag + 1);
}

function show(locals) {
	flag = locals - 1;
	ajax(apis[locals - 1]);
	for (var i = 0; i < lis.length; i++) {
		if (i != locals - 1) {
			lis[i].style.cssText = "border:none;border-bottom:solid 2px #00a4ff;";
		} else {
			lis[i].style.cssText = "border:none;border-bottom:solid 2px #8800ff;";
		}
	}
}

//获取内容
//by https://blog.csdn.net/qq_15243963/article/details/77970175
function ajax(url) {
	var xmlhttp = new XMLHttpRequest();
	var type = "GET"; //请求方式
	xmlhttp.open(type, url, true); //请求方式，接口，异步
	xmlhttp.send(); //发送请求
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
			var temp = JSON.parse(xmlhttp.response);
			var result = temp.content + "——" + temp.author + "《" + temp.origin + "》";
			if (window.screen.width > 420) {
				word.style.cssText = "font-size:22px;";
			} else {
				if (result.length <= 60) {
					word.style.cssText = "font-size:20px;";
				} else if (result.length <= 100) {
					word.style.cssText = "font-size:18px;";
				} else {
					word.style.cssText = "font-size:16px;line-height:25px;";
				}
			}
			word.innerText = result;
		}
	}
}
