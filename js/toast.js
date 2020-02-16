//类似安卓toast
function toast(msg = "Toast内容", local = -1) {
	// local 位置
	// 	1 上
	// 	0 中
	// 	-1 下
	var time = 3000;
	var m = document.createElement('div');
	m.innerHTML = msg;
	// #C0C0C0
	m.style.cssText =
		"max-width:60%;letter-spacing:0.15em;min-width: 150px;height:40px;color:#FFFFFF;line-height:40px;text-align:center;padding:5px 15px;border-radius:6px;position:fixed;left:50%;background:rgba(89,89,89,0.2);margin-top:-20px;font-size: 14px;transform: translate(-50%, -50%);z-index: 999999;";
	if (isNaN(local) == false && local == -1) {
		m.style.top = "80%";
	}
	if (isNaN(local) == false && local == 1) {
		m.style.top = "20%";
	}
	if (isNaN(local) == false && local == 0) {
		m.style.top = "50%";
	}
	document.body.appendChild(m);
	setTimeout(function() {
		document.body.removeChild(m);
	}, time);
}
