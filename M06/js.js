function test(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  // topRight
  for (i = 0; i < pHeight; i++){
    rLine +="<p>";
    //Create each line on the Rhombus
    for(j = 0; j <= i; j++){
      //Is the position even or odd so we change the color
      if (j % 2)
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    }
    rLine +="</p>";
  }
  
  // bottomRight
  for (i = pHeight - 1; i > 0; i--){
    rLine +="<p>";
    //Create each line on the Rhombus
    for(j = 0; j < i; j++){
      //Is the position even or odd so we change the color
      if (j % 2)
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    }
    rLine +="</p>";
    // console.log(rLine);
  }
  document.getElementById("upRight").innerHTML = rLine;
}
