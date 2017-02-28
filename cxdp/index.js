//三个工作中心命名
var cworkcen1="CS001-1"; //外圈磨加工工作中心
var cworkcen2="CS001-2"; //内圈磨加工工作中心
var cworkcen3="CS001-3"; //组装工作中心

//设备稼动率状态配置
var cdevworkstatus1="0"; //工作
var cdevworkstatus2="1"; //待机
var cdevworkstatus3="2"; //停机



var path ='${path!}';
	function current() {
		var d = new Date(), str = '';
		str += d.getFullYear() + '-'; //获取当前年份
		str += (d.getMonth() + 1)<10?'0'+(d.getMonth() + 1) +'-':(d.getMonth()+ 1) +'-'; //获取当前月份（0——11）
		str += d.getDate()<10?'0'+d.getDate()+' ':d.getDate()+' ';
		str += d.getHours()<10?'0'+d.getHours()+':':d.getHours()+ ':';
		str += d.getMinutes()<10?'0'+d.getMinutes()+':':d.getMinutes()+':';
		str += d.getSeconds()<10?'0'+d.getSeconds():d.getSeconds() ;
		return str;
	}
	setInterval(function() {
		$("#riqi").html(current)
	}, 1000); 

		
	/*var ws = $.websocket("ws://127.0.0.1:8380/fil-websocket-service/wsSocket/WebSocket",{
	//var ws = $.websocket("ws://" + window.location.host	+ "/fil-websocket-service/wsSocket/WebSocket", {
		events : {
			//fil系统开启排程
			RESET : function(e) {
				var paichengnum = e.data.paichengnum;
				$(".paichengnum").html(paichengnum);
				
			},
			//netty设备状态变更
			STATE : function(e) {
				for(var i=0;i<e.data.size();i++){
					var state = e.data.state;
					var sbnum = e.data.sbnum;
					if(state=='0'){
						
					}else if(state=='1'){
						
					}else if(state=='2'){
						
					}
				}
				
			},
			//netty排程加工数变更
			NUMCHANGE: function(e) {
				
				
			},

		},
		open : function() {
			var data = {
				"clientID" : '1',
				"property" : 'dp'
			};
			ws.send("register", data);
		}
	});*/
	

		
	function setDevStatus(deviceList){
		var index1=1000;
		var index2=1000;
		var index3=1000;
		for(var i=0;i<deviceList.length;i++){
			var devItem=deviceList[i];
			var cworkcen=devItem.cworkcen;
			var cdevmanastatus=devItem.cdevmanastatus;
			var cdevworkstatus=devItem.cdevworkstatus;
			if(cworkcen==cworkcen1){
				//第一台设备不显示状态
				if(index1==1000){
					index1=0;
					continue;
				}else{
					var $obj = $("#statebox1").children();
					if(cdevmanastatus=='81ab5730-0bcc-4951-9f52-9879072642df'||cdevmanastatus=='9b2df709-c0ab-459f-b1c0-4a1582292b23'||cdevmanastatus=='d15436c0-20b1-11e6-ae41-005056a720d1'){
						$obj.eq(index1).attr("class","state red");
					}else if(cdevworkstatus==cdevworkstatus1){//工作
						$obj.eq(index1).attr("class","state");
					}else if(cdevworkstatus==cdevworkstatus2){//待机
						$obj.eq(index1).attr("class","state yellow");
					}else if(cdevworkstatus==cdevworkstatus3){//停机
						$obj.eq(index1).attr("class","state gray");
					}else{//没有取到稼动率状态
						$obj.eq(index1).attr("class","state gray");
					}

					index1++;
				}
				
				

			}else if(cworkcen==cworkcen2){
				//第一台设备不显示状态
				if(index2==1000){
					index2=0;
					continue;
				}else{
					var $obj = $("#statebox2").children();
					if(cdevmanastatus=='81ab5730-0bcc-4951-9f52-9879072642df'||cdevmanastatus=='9b2df709-c0ab-459f-b1c0-4a1582292b23'||cdevmanastatus=='d15436c0-20b1-11e6-ae41-005056a720d1'){
						$obj.eq(index2).attr("class","state red");
					}else if(cdevworkstatus==cdevworkstatus1){//工作
						$obj.eq(index2).attr("class","state");
					}else if(cdevworkstatus==cdevworkstatus2){//待机
						$obj.eq(index2).attr("class","state yellow");
					}else if(cdevworkstatus==cdevworkstatus3){//停机
						$obj.eq(index2).attr("class","state gray");
					}else{//没有取到稼动率状态
						$obj.eq(index2).attr("class","state gray");
					}
					
					index2++;
				}
			}else if(cworkcen==cworkcen3){
				//第一台设备不显示状态
				if(index3==1000){
					index3=0;
					continue;
				}else{
					var $obj = $("#statebox3").children();
					if(cdevmanastatus=='81ab5730-0bcc-4951-9f52-9879072642df'||cdevmanastatus=='9b2df709-c0ab-459f-b1c0-4a1582292b23'||cdevmanastatus=='d15436c0-20b1-11e6-ae41-005056a720d1'){
						$obj.eq(index3).attr("class","state red");
					}else if(cdevworkstatus==cdevworkstatus1){//工作
						$obj.eq(index3).attr("class","state");
					}else if(cdevworkstatus==cdevworkstatus2){//待机
						$obj.eq(index3).attr("class","state yellow");
					}else if(cdevworkstatus==cdevworkstatus3){//停机
						$obj.eq(index3).attr("class","state gray");
					}else{//没有取到稼动率状态
						$obj.eq(index3).attr("class","state gray");
					}
			
					index3++;
				}
			}
		}
		if(index1>7&&index1!=1000){
			var $obj = $("#statebox1").children();
			$obj.attr("class","state gray");
			alert("工作中心："+cworkcen1+" 当前排程工位设备与大屏不符，无法正确显示设备状态！");
		}
		if(index2>5&&index2!=1000){
			var $obj = $("#statebox2").children();
			$obj.attr("class","state gray");
			alert("工作中心："+cworkcen2+" 当前排程工位设备与大屏不符，无法正确显示设备状态！");
		}
		if(index3>14&&index3!=1000){
			var $obj = $("#statebox3").children();
			$obj.attr("class","state gray");
			alert("工作中心："+cworkcen3+" 当前排程工位设备与大屏不符，无法正确显示设备状态！");
		}
		
		if(index1==1000){
			var $obj = $("#statebox1").children();
			$obj.attr("class","state gray");
		}
		if(index2==1000){
			var $obj = $("#statebox2").children();
			$obj.attr("class","state gray");
		}
		if(index3==1000){
			var $obj = $("#statebox3").children();
			$obj.attr("class","state gray");
		}
				
	}
	
	
	function setPaichengData(paichengList){
		var index1=0;
		var index2=0;
		var index3=0;
		for(var i=0;i<paichengList.length;i++){
			var paichengItem=paichengList[i];
			var gzzxnum=paichengItem.cworkcenternum;
			if(gzzxnum==cworkcen1){
				$(".paichengnum_1").html(paichengItem.cnum);
				$(".scwl_1").html(paichengItem.cmanum);
				$(".jhs_1").html(paichengItem.fjhhege);
				$(".tls_1").html(paichengItem.fscsl);
				$(".jgs_1").html(paichengItem.fcpjgwc);
				//$(".hgs_1").html(paichengItem.freal);
				$(".hgs_1").html(paichengItem.fcpjgwc);
				$(".sls_1").html(paichengItem.fcpjgwc_onegw);
				index1=1;
			}else if(gzzxnum==cworkcen2){
				$(".paichengnum_2").html(paichengItem.cnum);
				$(".scwl_2").html(paichengItem.cmanum);
				$(".jhs_2").html(paichengItem.fjhhege);
				$(".tls_2").html(paichengItem.fscsl);
				$(".jgs_2").html(paichengItem.fcpjgwc);
				//$(".hgs_2").html(paichengItem.freal);
				$(".hgs_2").html(paichengItem.fcpjgwc);
				$(".sls_2").html(paichengItem.fcpjgwc_onegw);
				index2=1;
			}else if(gzzxnum==cworkcen3){
				$(".paichengnum_3").html(paichengItem.cnum);
				$(".scwl_3").html(paichengItem.cmanum);
				$(".jhs_3").html(paichengItem.fjhhege);
				$(".tls_3").html(paichengItem.fscsl);
				$(".jgs_3").html(paichengItem.fcpjgwc);
				$(".hgs_3").html(paichengItem.freal);
				$("#xinhao").html(paichengItem.cmanum);
				index3=1;
			}
			if(index1==0){
				$(".paichengnum_1").html("");
				$(".scwl_1").html("");
				$(".jhs_1").html("");
				$(".tls_1").html("");
				$(".jgs_1").html("");
				$(".hgs_1").html("");
				$(".sls_1").html("");
			}
			if(index2==0){
				$(".paichengnum_2").html("");
				$(".scwl_2").html("");
				$(".jhs_2").html("");
				$(".tls_2").html("");
				$(".jgs_2").html("");
				$(".hgs_2").html("");
				$(".sls_2").html("");
			}
			if(index3==0){
				$(".paichengnum_3").html("");
				$(".scwl_3").html("");
				$(".jhs_3").html("");
				$(".tls_3").html("");
				$(".jgs_3").html("");
				$(".hgs_3").html("");
				$("#xinhao").html("");
			}
			
		}
		
	}

	
	function initData() {
		$.ajax({
					type : 'POST',
					url : 'cxdp.selectForPage.xhtml?paichengView.nzhuangtai=1',
					dataType : "json",
					cache : false,
					success : function(json) {
							var peichengList=json.model.paichengViewList;
							var deviceList=json.model.devViewList;
							setPaichengData(peichengList);
							setDevStatus(deviceList);
					},
					error : function() {
					},
					complete:function(){
						setTimeout(initData,3000);
					}
				});
	}
	
