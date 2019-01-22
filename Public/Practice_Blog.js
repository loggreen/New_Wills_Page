$(document).ready(function(){
    
    sidebar_blog_pull();

    Wills_New_Lead();

    Wills_Bottom_New_Lead();

    Wills_Body_New_Lead();

    Wills_Body_Second_New_Lead();

    Wills_Body_Third_New_Lead();

    POA_New_Lead();

    POA_Bottom_New_Lead();

    POA_Body_New_Lead();

    POA_Body_Second_New_Lead();

    POA_Body_Third_New_Lead();

});

function get_blogs(start){
    var start = start || 0;

    $.ajax({
        method: 'GET',
        url: '/blogs/' + start + '/10',
        dataType: 'json',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Headers':'*'
        },
        success: function(data){
            for(var i = 0; i < data.length; i++){
                $('#blog-wrapper').append(
                    "<div class='vlog'><h6 class='post_title' id='first_post_title'>" + data[i].Headline + "</h6>"
                    + "<iframe class='video' height='202' src='" + data[i].Video_Code + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
                    + "<h6 class='video_run_time' id='first_video_run_time'>" + data[i].Post_Date + " (Length: " + data[i].Run_Time + ")</h6>"
                    + "<p class='post_preview' id='first_post_preview'>" + data[i].Full_Text + "</p></div>"
                );
            }
        }
    })
}

function sidebar_blog_pull(){
    if($('.recent_posts').length > 0){
        $.ajax({
        method: "GET",
        url: "/Practice_Blog_Table/final_blogs",
        dataType: 'json',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Headers':'*'
        },
        
        success: function(data) {
                
                $('.recent_posts').append(

                    "<div class='vlog'><iframe class='video sidebar_video' height='202' src='" + data[0].Video_Code + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>"
                    + "<a href='/videos'><h6 class='post_title' id='first_post_title'>" + data[0].Headline + "</h6></a>"
                    + "<a href='/videos'><h6 class='video_run_time' id='first_video_run_time'>" + data[0].Post_Date + "</h6></a>"
                    + "<a href='/videos'><p class='post_preview' id='first_post_preview'>" + data[0].Text_Preview + "</p></a>"

                    + "<div class='vlog'><iframe class='video sidebar_video' height='202' src='" + data[1].Video_Code + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>"
                    + "<h6 class='post_title' id='first_post_title'>" + data[1].Headline + "</h6>"
                    + "<h6 class='video_run_time' id='first_video_run_time'>" + data[1].Post_Date + "</h6>"
                    + "<p class='post_preview' id='first_post_preview'>" + data[1].Text_Preview + "</p>"

                    + "<div class='vlog'><iframe class='video sidebar_video' height='202' src='" + data[2].Video_Code + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>"
                    + "<h6 class='post_title' id='first_post_title'>" + data[2].Headline + "</h6>"
                    + "<h6 class='video_run_time' id='first_video_run_time'>" + data[2].Post_Date + "</h6>"
                    + "<p class='post_preview' id='first_post_preview'>" + data[2].Text_Preview + "</p>"
                  
                );

        },

        error: function(xhr, status, error) { console.log("ERROR: ", error)}

        });
    }

}

function Wills_New_Lead(){

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
            window.location.href = '/thank-you';

        });

    })


}

function Wills_Bottom_New_Lead(){

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
            window.location.href = '/thank-you';
        });

    })


}

function Wills_Body_New_Lead(){

    $('#first_wills_main_button').click(function(){
        console.log($('#wills_body_name_input').val());
        console.log($('#wills_body_phone_input').val());
        console.log($('#wills_body_input').val());
        console.log($('#wills_body_message_input').val());
        

        var passJSON = {         
            "Name":$('#wills_body_name_input').val(),
            "Phone":$('#wills_body_phone_input').val(),
            "Email":$('#wills_body_email_input').val(),
            "Message":$('#wills_body_message_input').val()

        }

        console.log(passJSON);

        console.log(passJSON.Name);

        

        $.post('/Sunrise_Law_Group/leads', passJSON, function(data, status){
            console.log("the post is working");
            window.location.href = '/thank-you';

        });

    })


}

function Wills_Body_Second_New_Lead(){

    $('#second_wills_main_button').click(function(){
        console.log($('#wills_body_second_name_input').val());
        console.log($('#wills_body_second_phone_input').val());
        console.log($('#wills_body_second_input').val());
        console.log($('#wills_body_second_message_input').val());
        

        var passJSON = {         
            "Name":$('#wills_body_second_name_input').val(),
            "Phone":$('#wills_body_second_phone_input').val(),
            "Email":$('#wills_body_second_email_input').val(),
            "Message":$('#wills_body_second_message_input').val()

        }

        console.log(passJSON);

        console.log(passJSON.Name);

        

        $.post('/Sunrise_Law_Group/leads', passJSON, function(data, status){
            console.log("the post is working");
            window.location.href = '/thank-you';

        });

    })


}

function Wills_Body_Third_New_Lead(){

    $('#third_wills_main_button').click(function(){
        console.log($('#wills_body_third_name_input').val());
        console.log($('#wills_body_third_phone_input').val());
        console.log($('#wills_body_third_input').val());
        console.log($('#wills_body_third_message_input').val());
        

        var passJSON = {         
            "Name":$('#wills_body_third_name_input').val(),
            "Phone":$('#wills_body_third_phone_input').val(),
            "Email":$('#wills_body_third_email_input').val(),
            "Message":$('#wills_body_third_message_input').val()

        }

        console.log(passJSON);

        console.log(passJSON.Name);

        

        $.post('/Sunrise_Law_Group/leads', passJSON, function(data, status){
            console.log("the post is working");
            window.location.href = '/thank-you';

        });

    })


}

function POA_New_Lead(){

    $('#top_POA_button').click(function(){
        console.log($('#POA_name_input').val());
        console.log($('#POA_phone_input').val());
        console.log($('#POA_email_input').val());
        console.log($('#POA_message_input').val());
        

        var passJSON = {         
            "Name":$('#POA_name_input').val(),
            "Phone":$('#POA_phone_input').val(),
            "Email":$('#POA_email_input').val(),
            "Message":$('#POA_message_input').val()

        }

        console.log(passJSON);

        console.log(passJSON.Name);

        

        $.post('/Sunrise_Law_Group/leads', passJSON, function(data, status){
            console.log("the post is working");
            window.location.href = '/thank-you';

        });

    })


}

function POA_Bottom_New_Lead(){

    $('#bottom_POA_button').click(function(){
        console.log($('#bottom_POA_name_input').val());
        console.log($('#bottom_POA_phone_input').val());
        console.log($('#bottom_POA_email_input').val());
        console.log($('#bottom_POA_message_input').val());
        

        var passJSON = {         
            "Name":$('#bottom_POA_name_input').val(),
            "Phone":$('#bottom_POA-phone_input').val(),
            "Email":$('#bottom_POA_email_input').val(),
            "Message":$('#bottom_POA_message_input').val()

        }

        console.log(passJSON);

        console.log(passJSON.Name);

        

        $.post('/Sunrise_Law_Group/leads', passJSON, function(data, status){
            console.log("the post is working");
            window.location.href = '/thank-you';

        });

    })


}

function POA_Body_New_Lead(){

    $('#first_main_POA_button').click(function(){
        console.log($('#POA_body_name_input').val());
        console.log($('#POA_body_phone_input').val());
        console.log($('#POA_body_email_input').val());
        console.log($('#POA_body_message_input').val());
        

        var passJSON = {         
            "Name":$('#POA_body_name_input').val(),
            "Phone":$('#POA_body_phone_input').val(),
            "Email":$('#POA_body_email_input').val(),
            "Message":$('#POA_body_message_input').val()
        }

        console.log(passJSON);

        console.log(passJSON.Name);

        

        $.post('/Sunrise_Law_Group/leads', passJSON, function(data, status){
            console.log("the post is working");
            window.location.href = '/thank-you';

        });

    })


}

function POA_Body_Second_New_Lead(){

    $('#second_main_POA_button').click(function(){
        console.log($('#second_POA_body_name_input').val());
        console.log($('#second_POA_body_phone_input').val());
        console.log($('#second_POA_body_email_input').val());
        console.log($('#second_POA_body_message_input').val());
        

        var passJSON = {         
            "Name":$('#second_POA_body_name_input').val(),
            "Phone":$('#second_POA_body_phone_input').val(),
            "Email":$('#second_POA_body_email_input').val(),
            "Message":$('#second_POA_body_message_input').val()
        }

        console.log(passJSON);

        console.log(passJSON.Name);

        

        $.post('/Sunrise_Law_Group/leads', passJSON, function(data, status){
            console.log("the post is working");
            window.location.href = '/thank-you';

        });

    })


}

function POA_Body_Third_New_Lead(){

    $('#second_main_POA_button').click(function(){
        console.log($('#third_POA_body_name_input').val());
        console.log($('#third_POA_body_phone_input').val());
        console.log($('#third_POA_body_email_input').val());
        console.log($('#third_POA_body_message_input').val());
        

        var passJSON = {         
            "Name":$('#third_POA_body_name_input').val(),
            "Phone":$('#third_POA_body_phone_input').val(),
            "Email":$('#third_POA_body_email_input').val(),
            "Message":$('#third_POA_body_message_input').val()
        }

        console.log(passJSON);

        console.log(passJSON.Name);

        

        $.post('/Sunrise_Law_Group/leads', passJSON, function(data, status){
            console.log("the post is working");
            window.location.href = '/thank-you';

        });

    })


}


