$(document).ready(function() {

    $("#addteacher").click(function() {

        AddTeacher();

    });

    function AddTeacher() {
        $.ajax({

            url: "http://localhost:61115/api/Admins/Teachers",
            method: "Post",
            headers: {
                contentType: "application/json"

            },
            data: {
                teachername: $("#teachername").val(),
                mobile: $("#mobile").val(),
                address: $("#address").val(),
                institute: $("#institute").val(),
                username: $("#username").val(),
                salary: $("#salary").val(),
                image: $("#image").val(),


            },

            complete: function(xmlHttp, status) {
                if (xmlHttp.status == 200) {
                    alert("Done!");
                    $(location).attr('href', "AdminDash.html");
                }
            }
        });
    }

});