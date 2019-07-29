$(document).ready(function(){

  $("select#size").change(function(){
    window.selectedsize = $(this).children("option:selected").val();

    $("#output1").text(window.selectedsize)
    if (window.selectedsize === "big"){
      var money_size = 30
    }
    else if (window.selectedsize === "small") {
      var money_size = 10;

    }
    else if(window.selectedsize === "medium"){
      var money_size= 20;
    }
    alert(money_size);

  });

  $("select#topping").change(function(){
     window.selectedtopping = $(this).children("option:selected").val();
    $("#output2").text(window.selectedtopping)
    if (window.selectedtopping === "pineapple"){
      var money_topping = 30
    }
    else if (window.selectedtopping === "chicken") {
      var money_topping = 10;

    }
    else if(window.selectedtopping === "cheese"){
      var money_topping = 20;
    }
    alert(money_topping);
  });
  $("select#crust").change(function(){
    window.selectedcrust = $(this).children("option:selected").val();
    $("#output3").text(window.selectedcrust)
    if (window.selectedcrust === "crispy"){
      var money_crust = 30
    }
    else if (window.selectedcrust === "stuff") {
      var money_crust = 10;

    }
    else if(window.selectedcrust === "gluten-free"){
      var money_crust = 20;
    }
    alert(money_crust);
  });


});
