$(function(){
    var PUPPIES = [];
    // scrape the top of r/aww
    function getPuppies(){
    $.get('http://www.reddit.com/r/husky/.json?jsonp=?', function (data) {
        PUPPIES = data.data.children.map(function(entry) {
            return entry.data.url;

             });
            $('#img').attr('src', PUPPIES[Math.floor(Math.random()*PUPPIES.length)]);
        }, 'json');
    }


    $("#buypic").click( function (evt) {

   
        console.log(total)
        if (total >100){
            spent= spent +100
            $.get('http://www.reddit.com/r/husky/.json?jsonp=?', function (data) {
                getPuppies()
                console.log(PUPPIES)
            })

            
  

        } 

    })

    $("#buyvid").click( function (evt) {

        console.log("vid")
        console.log(total)
        if (total >500){
            spent= spent +500
            $.get("/vid", function(data){
                console.log(data)
                $("#vidpic").append(data)
            })
        } 
        // $.post("/signin", {inputUsername:$("#inputUsername")[0].value}, function(data) {
        //     $("#loginjade").remove()

        //     $("#page").append(data)
        // })

    })
    var total = 0
    var spent =0 
    var wordcount = function(){
         console.log($('#work')[0].value.split(" ").length)
         total = $('#work')[0].value.split(" ").length - spent
         $('#wordcount').html("<h4 style='display:inline-block' id='wordcount'>  Points:"+ total +" </h4>")
        console.log($('#work')[0].value.split(" ").length-spent)
        // $.post("/save", function(data) {
        //     $("#twitstream").remove()
        //     $("#viewtwit").append(data)
        // }); 
    };
    setInterval(wordcount, 2000);
})