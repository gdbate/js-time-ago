;(function(){

	function timeAgo(time){
		var units={years:31536000,days:86400,hours:3600,minutes:60,seconds:1};
		var now=Math.round(new Date().getTime()/1000);
		var since=(now-time);
		var time=[];
		for(var i in units){
			if(since>units[i]){
				var measure=Math.floor(since/units[i]);
				time.push(measure+' '+i);
				since-=(measure*units[i]);
			}
		}
		if(!time.length)time.push(0+' seconds');
		return time;
	}

	if(typeof module=='object')module.exports=timeAgo;
	if(typeof window=='object')window.timeAgo=timeAgo;

}());
