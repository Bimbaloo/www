function createHTML( fields ){

    document.write('<table width="100%" border=0 cellspacing=1 cellpadding=0  >');
    var i=0;
    // var j=0;
    while( i< fields.length   ){
        for(var j=0;  j<rows ; j++ ){
            document.write('<tr class=lowest  height="26">');
            var temp = i;
            for( var k = i ; k< ( temp+7 ); k++ ){

                if( fields[k]!=null && fields[k]!='undefined' ){
                    document.write('<td >');
                    document.write('<input type=checkbox name="box" id='+fields[k].value);
                    if( fields[k].selected ){
                        document.write( ' checked=true' );
                        arr.push(fields[k]);////
                    }
                    document.write(" onclick='selected( this )'/>");
                    document.write('&nbsp;&nbsp;');
                    document.write( fields[i].name );
                    document.write('</td>');

                }
                i++;
            }

            document.write('</tr>')

            // j++;
        }
    }
    document.write('</table></td></tr>');
    document.write('<tr >');
    document.write("<td  class=resultHead02 ><input type='button' class='button01'  value='xls导出' onclick='doExcel()'>&nbsp;&nbsp;");
    document.write("<input type='button' class='button01'  value='返回' onclick='doReturn()'>&nbsp;&nbsp;");
    document.write("<input type='button' class='button01'  value='重置' onclick='doInit();'>");
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("<input type='checkbox' id='oper' style='margin:2px 2px ' onclick='doSelect(this)'><span id='isAll'><font class='isALL' >&nbsp;全选&nbsp;/&nbsp;全不选</font></span></td></tr>");
    document.write("</table>");
    document.write("</body>");


}


for(var row=0; row<rows; row++){
    str += "<tr class='lowest'>";
    for(var col=0; col<cols; col++){
        for(var l=0; l<carcasemxs.length; l++){
            if(carcasemxs[l].nrow == (row+1) && carcasemxs[l].ncol == (col+1)){
                str += "<td class='minWidth'>" +
                    "<input type='hidden' class='kwid' value='"+carcasemxs[l].id+"'/>" +
                    "<div class='tdDiv'>" +
                    "	<strong>库位编号：</strong>" +
                    "	<strong class='kwnum'>"+carcasemxs[l].cznum+"</strong>" +
                    "	<span>条码数：<input type='text' class='kwid2' onkeyup='checkleft(this)' value = '"+getright(obj.value,carcasemxs[l].id)+"'/></span>" +
                    "</div>"+
                    "<ul class='ulPad'>"
//											"<li>" +
//											"	<strong>库位编号：</strong>" +
//											"	<strong class='kwnum'>"+carcasemxs[l].cznum+"</strong>" +
//											"	<span>条码数：<input type='text' class='kwid2' onkeyup='checkleft(this)' value = '"+getright(obj.value,carcasemxs[l].id)+"'/></span>" +
//											"</li>";
                var total = 0;
                var wlstr = "";
                for(var wl=0; wl<carcasemxs[l].sapTmkcList.length; wl++){
                    var tmkc = carcasemxs[l].sapTmkcList[wl];
                    total += Number(tmkc.nkucun);
                    wlstr = "<li class='liList'>"+tmkc.cwuliao+"："+Number(tmkc.nkucun)+"</li>";
                }
                str += "<li class='liList'>总库存："+total+"</li>"+wlstr+" </ul></td>";
                break;
            }
        }
    }
    str += "</tr>";
}



for(var k=0; k< fields.length; k++){
var str = ''
str += '<tr>' +
        '<td><input type="checkbox" name="box" id= fields[k].value onclick="selected( this )" /></td>' +
        '<td id= fields></td>';}
$("#tbody").html(str)