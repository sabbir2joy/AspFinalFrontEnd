$(document).ready(function() {

    $("#addstudent").click(function() {

        AddStudent();

    });

    function AddStudent() {
        $.ajax({

            url: "http://localhost:61115/api/Admins/Students",
            method: "Post",
            headers: {
                contentType: "application/json"

            },
            data: {

                studentname: $("#studentname").val(),
                mobile: $("#mobile").val(),
                institute: $("#institute").val(),
                address: $("#address").val(),

                img: $("#img").val(),


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