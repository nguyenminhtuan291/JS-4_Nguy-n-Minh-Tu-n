document.getElementById('sapXep').onclick = function() {
  let so1 = +document.getElementById("so1").value ;
  let so2 = +document.getElementById("so2").value ;
  let so3 = +document.getElementById("so3").value ;

  let result = '' ;
  if (so1 > so2 && so2 > so3) {
    result = so3 + " < " + so2 + " < " + so1;
  } else if (so1 > so3 && so3 > so2){
    result = so2 + " < " + so3 + " < " + so1;
  } else if (so2 > so1 && so1 > so3){
    result = so3 + " < " + so1 + " < " + so2;
  } else if (so2 > so3 && so3 > so1){
    result = so1 + " < " + so3 + " < " + so2;
  } else if (so3 > so2 && so2 > so1){
    result = so1 + " < " + so2 + " < " + so3;
  }

  document.getElementById("result-wrapper").style.display = "block" ;
  document.getElementById("result").innerHTML = "" + result }