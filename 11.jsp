    <%@ page pageEncoding="UTF-8" contentType="text/html;charset=utf-8"%>
            <%
	String cpath = request.getContextPath();
%>
        <link rel="stylesheet" type="text/css" href="<%=cpath%>/css/doExcelDialog.css" />
        <script type="text/javascript" src="<%=cpath%>/js/common/prototype.js"></script>
        <script type="text/javascript" src="<%=cpath%>/js/common/json.js"></script>
        <jsp:useBean id="label" scope="session" class="java.util.HashMap" />
        <head>
        <meta http-equiv="pragma" content="no-cache">
        <meta http-equiv="cache-control" content="no-cache">
        <meta http-equiv="expires" content="0">
        <link rel="stylesheet" type="text/css" href="<%=cpath%>/css/default/coreStyle.css" />
        <style>
        tr{
        background:#ffffff;
        vertical-align:middle;
        height: 30px;
        text-align:center
        }
        </style>
        <script type="text/javascript">
        <!--
        var jsonText = window.dialogArguments;
        var ISALLSELECTED = true;
        var arr = new Array();
        init();

        function init() {
        var fields = jsonText.fields;

        createHTML(fields);

        }

        function createHTML(fields) {
        debugger
        var rows;
        with (Math) {
        rows = ceil(fields.length / 14);
        //alert( fields.length/16);
        }
        // 		document.write("<body style='padding:0;margin:0'>");
        // 		document
        // 				.write('<table width="100%" border="0" cellspacing="0" cellpadding="0" >');
        // 		document
        // 				.write('<tr><td  class=resultHead02 align="center" > 请选择要导出的字段</td></tr><tr><td></td></tr>');
        // 		document.write('<tr><td>');
        // 		document
        // 				.write('<table width="100%" border=0 cellspacing=1 cellpadding=0  >');
        // 		var i = 0;
        // 		// var j=0;
        // 		while (i < fields.length) {
        // 			for (var j = 0; j < rows; j++) {
        // 				document.write('<tr class=lowest  height="26">');
        // 				var temp = i;
        // 				for (var k = i; k < (temp + 7); k++) {

        // 					if (fields[k] != null && fields[k] != 'undefined') {
        // 						document.write('<td >');
        // 						document.write('<input type=checkbox name="box" id='
        // 								+ fields[k].value);
        // 						if (fields[k].selected) {
        // 							document.write(' checked=true');
        // 							arr.push(fields[k]);////
        // 						}
        // 						document.write(" onclick='selected( this )'/>");
        // 						document.write('&nbsp;&nbsp;');
        // 						document.write(fields[i].name);
        // 						document.write('</td>');

        // 					}
        // 					i++;
        // 				}

        // 				document.write('</tr>')

        // 				// j++;
        // 			}
        // 		}
        // 		document.write('</table></td></tr>');
        // 		document.write('<tr >');
        // 		document
        // 				.write("<td  class=resultHead02 ><input type='button' class='button01'  value='xls导出' onclick='doExcel()'>&nbsp;&nbsp;");
        // 		document
        // 				.write("<input type='button' class='button01'  value='返回' onclick='doReturn()'>&nbsp;&nbsp;");
        // 		document
        // 				.write("<input type='button' class='button01'  value='重置' onclick='doInit();'>");
        // 		document
        // 				.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        // 		document
        // 				.write("<input type='checkbox' id='oper' style='margin:2px 2px ' onclick='doSelect(this)'><span id='isAll'><font class='isALL' >&nbsp;全选&nbsp;/&nbsp;全不选</font></span></td></tr>");
        // 		document.write("</table>");
        // 		document.write("</body>");
        for(var k=0; k< fields.length; k++){
        var str = ''
        str += '<tr>' +
        '<td><input type="checkbox" name="box" id= fields[k].value onclick="selected( this )" /></td>' +
        '<td id= fields></td>';
        $("#tbody").html(str)
        $("#fields").each(
                function(){
                $(this).text()
            }
            )
        }}

        function doSelect(ele) {
        displaySelect(ele.checked);
        $('isAll').innerHTML = ele.checked ? "<font color='red'>&nbsp;全选&nbsp;/&nbsp;全不选</font>"
        : "<font color='#3397fc'>&nbsp;全选&nbsp;/&nbsp;全不选</font>";
        }
        function displaySelect(all) {
        var fields = jsonText.fields;
        for (var i = 0; i < fields.length; i++) {
        fields[i].selected = all;

        $(fields[i].value).checked = all;
        }
        }

        function selected(field) {
        var fields = jsonText.fields;
        for (var i = 0; i < fields.length; i++) {
        if (field.id == fields[i].value) {
        if (field.checked) {
        fields[i].selected = true;
        break;
        } else {
        fields[i].selected = false;
        //$('isAll').innerHTML="<font color='#3397fc'>&nbsp;全选&nbsp;/&nbsp;全不选</font>";
        break;
        }
        }
        }
        //getIsAll();
        $('isAll').innerHTML = getIsAll() ? "<font>&nbsp;全选&nbsp;/&nbsp;全不选</font>"
        : "<font color='#3397fc'>&nbsp;全选&nbsp;/&nbsp;全不选</font>";
        }
        function getIsAll() {
        var eles = jsonText.fields;
        for (var i = eles.length - 1; i >= 0; i--) {
        if (!eles[i].selected) {
        return false;
        }

        }
        return true;
        }
        function isEmpty() {
        var empty = true;
        var eles = jsonText.fields;

        for (var i = 0; i < eles.length; i++) {
        if (eles[i].selected) {
        empty = false;
        break;
        }
        }
        return empty;
        }
        function doExcel() {
        if (isEmpty()) {
        alert('请选择要导出的字段！');
        return;
        }

        var fieldsStr = "[";
        for (var i = 0; i < jsonText.fields.length; i++) {
        if (jsonText.fields[i].selected) {
        var fi = new Field(jsonText.fields[i].name,
        jsonText.fields[i].value);
        if (jsonText.fields.length == 1) {
        fieldsStr += fi.toString();
        break;
        } else {
        fieldsStr += fi.toString() + ",";
        }
        continue;
        }

        }
        //  alert(fieldsStr);

        if (fieldsStr.charAt(fieldsStr.length - 1) == ",")
        ;
        fieldsStr = fieldsStr.substring(0, fieldsStr.length - 1);

        fieldsStr += "]";
        // alert(fieldsStr);
        // alert(jsonText.actionUrl);
        <%--"<c:set var='fields' value=" + jsonText.fields +" scope='session'/>";--%>
        jsonText.doexcelForm.action = jsonText.actionUrl;
        jsonText.doexcelForm.elements['fields'].value = fieldsStr;
        //   valueTrim(jsonText.queryForm);
        jsonText.doexcelForm.submit();

        // window.returnValue="suss";

        self.close();

        }

        function doInit() {

        var fields = jsonText.fields;
        for (var i = 0; i < fields.length; i++) {
        fields[i].selected = false;
        $(fields[i].value).checked = false;
        }

        for (var k = 0; k < arr.length; k++) {
        arr[k].selected = true;
        $(arr[k].value).checked = true;
        }
        if (arr.length < fields.length)
        $('isAll').innerHTML = "<font color='#3397fc'>&nbsp;全选&nbsp;/&nbsp;全不选</font>";
        }

        function doReturn() {

        self.close();
        }

        var Field = Class.create();

        Field.prototype = {
        initialize : function(name, value) {
        this.name = name;
        this.value = value;
        },
        toString : function() {
        return "{name:'" + this.name + "',value:'" + this.value + "'}";
        }

        };

        function CurentTime() {
        var now = new Date();

        var year = now.getFullYear(); //年
        var month = now.getMonth() + 1; //月
        var day = now.getDate(); //日

        var hh = now.getHours(); //时
        var mm = now.getMinutes(); //分

        var clock = year + "-";

        if (month < 10)
        clock += "0";

        clock += month + "-";

        if (day < 10)
        clock += "0";

        clock += day + " ";

        if (hh < 10)
        clock += "0";

        clock += hh + ":";
        if (mm < 10)
        clock += '0';
        clock += mm;
        return (clock);
        }

        -->
        </script>

        </head>
        <body>
        <DIV id="bodytitle">请选择要导出的字段</DIV>
        <div class="bodyinfo">
        <table width="100%" border="0" cellpadding="0" cellspacing="1" bgcolor="c3c3c3" class="info_table">
        <thead>
        <tr>
        <th class="tabletd" width="120" align="center">
        <input type='checkbox' id='oper' onclick='doSelect(this)' />
        </th>
        <th class="tabletd" width="200" align="center">列名</th>
        </tr>
        </thead>
        <tbody id='tbody'>

        </tbody>
        </table>
        <br/>
        <div class="info_save" style='text-align:center'>
        <div class="query_button_no_float" onclick="returnParentWindow();return false;">
        <a>XLS导出</a>
        </div>
        <div class="query_button_no_float" onclick="returnParentWindow();return false;">
        <a>返回</a>
        </div>
        <div id="save" class="query_button_no_float" name="save" onclick="save();return false;">
        <a>重置</a>
        </div>
        </div>
        </div>
        </body>