var days=document.getElementById('days')
var hour=document.getElementById('hour')
var min=document.getElementById('min')
var sec=document.getElementById('sec')
var countDate=new Date('March 23 ,2023 10:30:30')
var x=setInterval(function()
{var now=new Date().getTime()
    var dis=countDate-now
  var daysElmnt = Math.floor(dis/ (1000 * 60 * 60 * 24));
  var hourElmnt = Math.floor((dis% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minElmnt = Math.floor((dis% (1000 * 60 * 60)) / (1000 * 60));
  var secElmnt = Math.floor((dis% (1000 * 60)) / 1000);
  days.innerHTML=daysElmnt + 'Day'
  hour.innerHTML=hourElmnt + 'Hour'
  min.innerHTML=minElmnt + 'Min'
  sec.innerHTML=secElmnt + 'Sec'

})