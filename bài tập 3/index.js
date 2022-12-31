document.getElementById("nutNhan").onclick = function(){
    // Input
    let soThu1 = +document.getElementById("sothu1").value ;
    let soThu2 = +document.getElementById("sothu2").value ;
    let soThu3 = +document.getElementById("sothu3").value ;
    // Xử lí
    let soChan = 0;
    let soLe = 0;
    if (soThu1 % 2 == 0){
        soChan++; 
    }
    else{
        soLe++;
    }
    if (soThu2 % 2 == 0){
        soChan++;
    }
    else{
        soLe++;
    }
    if (soThu3 % 2 ==0){
        soChan++;
    }
    else{
        soLe++;
    }
    let result = "<div>";
    result += "<p> Có : " + soChan +" số chẵn </p>";
    result += "<p> Có : " + soLe +" số lẻ </p>";
    result += "</div>";
    //Đầu ra
    document.getElementById("showResult").innerHTML = result;
}