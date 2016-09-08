function getSamllDiv(patent,son){
	var samllDiv;
	var hh=Infinity;
	for(var i=0; i<son.length; i++){
		if(son.eq(i).height()<hh){
			hh=son.eq(i).height();
			samllDiv=son.eq(i);
		}
	}
	return samllDiv;
}
$(function(){
	var data;
	$.getJSON("test.json",function(json){
		var data=json.resource;
		for(var i=0; i<data.length; i++){
			var str;
			str="<div>";
			// <img src=""/>
			str+="<img src=\"pic/"+data[i].picture+"\">";
			str+="<p><strong>买家留言：</strong>"+data[i].msg+"</p>";
			str+="</div>";
			var addDiv=getSamllDiv($(".waterfall"), $(".falls"));
			addDiv.append(str);
		}
	});
});