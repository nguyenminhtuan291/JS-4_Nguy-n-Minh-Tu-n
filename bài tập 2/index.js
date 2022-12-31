document.getElementById("nutNhan").onclick = function(){
  // Đầu vào
  let choose = +document.getElementById('choose').value ;

  //Xử lí
  let result = '';
  switch(choose){
      case 1: {
          result = 'Xin chào Bố!';
      };break;
      case 2: {
          result = 'Xin chào Mẹ!';
      };break;
      case 3: {
          result = 'Xin chào Anh Trai!';
      };break;
      case 4: {
          result = 'Xin chào Em Gái!';
      };break;
      default : {
          result = 'Bạn đi ra đi!';
      }
  }
  // Đầu ra
  document.getElementById("showResult").innerHTML = result;
}