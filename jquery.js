$(function(){
    
    var item;
    var category;
    
    
    
    $("#addNew").click(function(){
       $("#modal").modal({
           display: "block"
       });
  });    
    
    
    $("#print").click(function(){
       print(); 
        $("#addNew").show();
        $("#print").show();
    });
    
    //Modal open - Add new item button
    $("#submitNew").click(function(){
        
        //Get new item value
        item = document.getElementById("itemTxt").value;

        //Check if new item textbox is entered
        if(item === ""){
                alert("Please enter an item");
                return;
            }
        
        //Get category values
        category = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
        
        radiobtn();
                
        
        
    });
    
    /////FUNCTIONS//////
    
    function capitalizeWords(str){
       return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    
    
    //Radio buttons
    function radiobtn(){
                
         switch(category){
            case "fruit":
                 $(".fruit").append("<div class='checkBox'><input type='checkbox' id='Check' name='Check'><label for='Label'>" + capitalizeWords(item) + "</label><button type='button' class='btn btn-default' id='icon'><ion-icon name='close'></ion-icon></button></div>");
                break;
                 
                 
            case "vegetables":
                $(".vegetables").append("<div class='checkBox'><input type='checkbox' id='Check' name='Check'><label for='Label'>" + capitalizeWords(item) + "</label></div>");
                break;
                 
            case "meat":
                $(".meat").append("<div class='checkBox'><input type='checkbox' id='Check' name='Check'><label for='Label'>" + capitalizeWords(item) + "</label></div>");
                break;
                 
            case "frozen":
                $(".frozen").append("<div class='checkBox'><input type='checkbox' id='Check' name='Check'><label for='Label'>" + capitalizeWords(item) + "</label></div>");
                break;
                 
            case "dairy":
                $(".dairy").append("<div class='checkBox'><input type='checkbox' id='Check' name='Check'><label for='Label'>" + capitalizeWords(item) + "</label></div>");
                break;
                 
            case "bakery":
                $(".bakery").append("<div class='checkBox'><input type='checkbox' id='Check' name='Check'><label for='Label'>" + capitalizeWords(item) + "</label></div>");
                break;
                 
            case "other":
                $(".other").append("<div class='checkBox'><input type='checkbox' id='Check' name='Check'><label for='Label'>" + capitalizeWords(item) + "</label></div>");
                break;
                 
            default:
                window.alert("Please select a category");
       }

            clear();
    }
    
    //Clear new item form
    function clear(){
        item = document.getElementById("itemTxt").value='';
        $('input[name=inlineRadioOptions]').prop('checked', false);
    }
    
    //print page
    function print(){
        $("#addNew").hide();
        $("#print").hide();
        window.print();
    }
    
    //Delete an item
    

});