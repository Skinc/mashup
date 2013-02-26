$(function(){
    
    $("#login").click( function (evt) {

        $.post("/signin", {inputUsername:$("#inputUsername")[0].value}, function(data) {
            $("#loginjade").remove()

            $("#page").append(data)
        })

    })


    $("#liked").on( 'click',function (evt) {
        $.post("/addlike", {newlike:$("#likeinput")[0].value})
        $("#userlikes").append('<a class="btn span2" style="font-size:14pt"> '+ $("#likeinput")[0].value + '</a>')
        $("#likeinput")[0].value =""
    })  
    $("#entertwitbutton").click(function(evt){
        input = $("#twit")[0].value
        if (input.length < 140){
            $.post("/twit/new", $("#twit").serialize())    
            $("#twit")[0].value = ""
        }
        else{
            alert("Twit can't be more than 140 characters.")
        }

    })
 
    
})
