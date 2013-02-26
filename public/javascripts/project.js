$(function(){

    var Pics = [];
    function getPics(){
    $.get('http://www.reddit.com/r/husky/.json?jsonp=?', function (data) {
        Pics = data.data.children.map(function(entry) {
            return entry.data.url;

             });
            $('#img').attr('src', Pics[Math.floor(Math.random()*Pics.length)]);
        }, 'json');
    }


    // Had Bugs with get pics and get vids so it is nowhere near fully implemented. :-(
    $("#buypic").click( function (evt) {
        if (total >100){
            spent= spent +100
            getPics()
            console.log(PUPPIES)
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
  
    })
    var total = 0
    var spent =0 
    var wordcount = function(){
         console.log($('#work')[0].value.split(" ").length)
         total = $('#work')[0].value.split(" ").length - spent
         $('#wordcount').html("<h4 style='display:inline-block' id='wordcount'>  Points:"+ total +" </h4>")
        console.log($('#work')[0].value.split(" ").length-spent)
        
    };
    setInterval(wordcount, 2000);
})