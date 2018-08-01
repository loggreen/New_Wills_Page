$(document).ready(function(){
    
    sidebar_blog_pull();

    newLead();

    bottomnewLead();

    full_blog_pull();

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

function full_blog_pull(){
    
    $.ajax({
    method: "GET",
    url: "/Full_Blog_Pull/Blogs",
    dataType: 'json',
    headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Headers':'*'
    },
    
    success: function(data) {
            
            $('.full_blog_pull').append(

                "<iframe class='main_blog_video' width='756' height='426' src='" + data[0].Video_Code +  "'' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
                + "<h6 class='author_runtime'>" + data[0].Run_Time + "</h6>"
                + "<h1 class='full_blog_headline'>" + data[0].Headline + "</h1>"
                + "<h4 class='full_blog_text'>" + data[0].Text_Preview + "</h4>"

                + "<iframe class='main_blog_video' width='756' height='426' src='" + data[1].Video_Code +  "'' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
                + "<h6 class='author_runtime'>" + data[1].Run_Time + "</h6>"
                + "<h1 class='full_blog_headline'>" + data[1].Headline + "</h1>"
                + "<h4 class='full_blog_text'>" + data[1].Text_Preview + "</h4>"

                + "<iframe class='main_blog_video' width='756' height='426' src='" + data[2].Video_Code +  "'' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
                + "<h6 class='author_runtime'>" + data[2].Run_Time + "</h6>"
                + "<h1 class='full_blog_headline'>" + data[2].Headline + "</h1>"
                + "<h4 class='full_blog_text'>" + data[2].Text_Preview + "</h4>"

                + "<iframe class='main_blog_video' width='756' height='426' src='" + data[3].Video_Code +  "'' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
                + "<h6 class='author_runtime'>" + data[3].Run_Time + "</h6>"
                + "<h1 class='full_blog_headline'>" + data[3].Headline + "</h1>"
                + "<h4 class='full_blog_text'>" + data[3].Text_Preview + "</h4>"

                + "<iframe class='main_blog_video' width='756' height='426' src='" + data[4].Video_Code +  "'' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
                + "<h6 class='author_runtime'>" + data[4].Run_Time + "</h6>"
                + "<h1 class='full_blog_headline'>" + data[4].Headline + "</h1>"
                + "<h4 class='full_blog_text'>" + data[4].Text_Preview + "</h4>"
                
               
              
            );

    },

    error: function(xhr, status, error) { console.log("ERROR: ", error)}

    });

}