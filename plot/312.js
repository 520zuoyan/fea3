/*构建htmldom*/
function draw312(myChart,ckey,height,titles,x,y,width,div){
    $.ajax({
        type : 'get',
        url:'/db/jsonp/ssdb0/'+ckey,
        cache : false,
        dataType : 'jsonp',
        success:function(dataAll){
            var data=dataAll.data;
            var title=dataAll.columns;
            var len=title.length;
            // console.log(dataAll);
            // console.log(data);
            // console.log(title[3]);
            if(title[3] == 'zindex'){
              var m1=title.indexOf('width');
              var m2=title.indexOf('height');
              var role = data[0][len-3]+'?'+data[0][len-2]+'?'+data[0][len-1]+'?'+data[0][3]+'?'+data[0][m1]+'?'+data[0][m2];
                var txt_div='<div id="tsk_info" style="z-index:2;overflow:hidden;"><div class="tsk" role="'+role+'" onmousedown="mouseDown_312(this)" style="width:19px;height:21px;float:left;margin-right:5px;overflow:hidden;cursor:pointer;"><img src="../images/deng.png" style="width:100%;height:auto;display:block;"></div></div>';
            }else{
              if(title.indexOf('width')!=-1){
                var m1=title.indexOf('width');
                var m2=title.indexOf('height');
                var txt_div='<div id="tsk_info" style="z-index:2;overflow:hidden;"><div class="tsk" role="'+data[0][len-3]+'?'+data[0][len-2]+'?'+data[0][len-1]+'?'+data[0][m1]+'?'+data[0][m2]+'"  style="width:19px;height:21px;float:left;margin-right:5px;overflow:hidden;cursor:pointer;"><img src="../images/deng.png" style="width:100%;height:auto;display:block;"></div></div>';
                $('.tsk').click(function() {
                  /* Act on the event */
                  var p=myChart;
                  var dataAll=$(this).attr('role');
                  var data=dataAll.split("?");
                  var target=data[2];
                  var dbdK=data[0];
                  var cs=data[1];
                  var k=data[3];
                  var g=data[4];
                  targetC(p,target,dbdK,cs,k,g);
              }else{
                var txt_div='<div id="tsk_info" style="z-index:2;overflow:hidden;"><div class="tsk" role="'+data[0][len-3]+'?'+data[0][len-2]+'?'+data[0][len-1]+'"  style="width:19px;height:21px;float:left;margin-right:5px;overflow:hidden;cursor:pointer;"><img src="../images/deng.png" style="width:100%;height:auto;display:block;"></div></div>';
                $('.tsk').click(function() {
                  /* Act on the event */
                  var p=myChart;
                  var dataAll=$(this).attr('role');
                  var data=dataAll.split("?");
                  var target=data[2];
                  var dbdK=data[0];
                  var cs=data[1];
                  targetC(p,target,dbdK,cs);
                });
              }
            }
            div.html(txt_div);
            div.find("#tsk_info").css('width',width);
            div.find("#tsk_info").css('height',height);
        }
    });
}
   /* src="../images/test3and4_IM_icon_.png"
*/

function mouseDown_312(tpk_tc){
	var dataAll=$(tpk_tc).attr('role');
	var data=dataAll.split("?");
	var target=data[2];
	var dbdK=data[0];
	var cs=data[1];
  var k=data[4];
  var g=data[5];
  targetUp(dbdK,cs,k,g);
}
// function mouseDown_312s(tpk_tc){
//   var p;
// 	var dataAll=$(tpk_tc).attr('role');
// 	var data=dataAll.split("?");
// 	var target=data[2];
// 	var dbdK=data[0];
// 	var cs=data[1];
//   targetC(p,target,dbdK,cs);
// }
