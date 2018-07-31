$(document).ready(function(){
    
    sidebar_blog_pull();

    newLead();

    bottomnewLead();

});

function sidebar_blog_pull(){
    
    $.ajax({
    method: "GET",
    url: "/Practice_Blog_Table/Blogs",
    dataType: 'json',
    headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Headers':'*'
    },
    
    success: function(data) {
            
            $('.recent_posts').append(

                "<div class='vlog'><iframe class='video sidebar_video' height='202' src='" + data[0].Video_Code + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>"
                + "<h6 class='post_title' id='first_post_title'>" + data[0].Headline + "</h6>"
                + "<h6 class='video_run_time' id='first_video_run_time'>" + data[0].Run_Time + "</h6>"
                + "<p class='post_preview' id='first_post_preview'>" + data[0].Text_Preview + "</p>"

                + "<div class='vlog'><iframe class='video sidebar_video' height='202' src='" + data[1].Video_Code + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>"
                + "<h6 class='post_title' id='first_post_title'>" + data[1].Headline + "</h6>"
                + "<h6 class='video_run_time' id='first_video_run_time'>" + data[1].Run_Time + "</h6>"
                + "<p class='post_preview' id='first_post_preview'>" + data[1].Text_Preview + "</p>"

                + "<div class='vlog'><iframe class='video sidebar_video' height='202' src='" + data[2].Video_Code + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>"
                + "<h6 class='post_title' id='first_post_title'>" + data[2].Headline + "</h6>"
                + "<h6 class='video_run_time' id='first_video_run_time'>" + data[2].Run_Time + "</h6>"
                + "<p class='post_preview' id='first_post_preview'>" + data[2].Text_Preview + "</p>"
              
            );

    },

    error: function(xhr, status, error) { console.log("ERROR: ", error)}

    });

}

function newLead(){

    $('#first_button').click(function(){
        console.log($('#name_input').val());
        console.log($('#phone_input').val());
        console.log($('#email_input').val());
        console.log($('#message_input').val());
        

        var passJSON = {         
            "Name":$('#name_input').val(),
            "Phone":$('#phone_input').val(),
            "Email":$('#email_input').val(),
            "Message":$('#message_input').val()

        }

        console.log(passJSON);

        console.log(passJSON.Name);

        

        $.post('/Sunrise_Law_Group/leads', passJSON, function(data, status){
            console.log("the post is working");
        });

    })


}

function bottomnewLead(){

    $('#bottom_button').click(function(){
        console.log($('#bottom_name_input').val());
        console.log($('#bottom_phone_input').val());
        console.log($('#bottom_email_input').val());
        console.log($('#bottom_message_input').val());
        

        var passJSON = {         
            "Name":$('#bottom_name_input').val(),
            "Phone":$('#bottom_phone_input').val(),
            "Email":$('#bottom_email_input').val(),
            "Message":$('#bottom_message_input').val()

        }

        console.log(passJSON);

        console.log(passJSON.Name);

        

        $.post('/Sunrise_Law_Group/leads', passJSON, function(data, status){
            console.log("the post is working");
        });

    })


}