$(document).ready(function(){

$("#btnadd").click(function(){

    AddSubject();

});

function AddSubject()
{
	$.ajax({

		url:"http://localhost:61115/api/Teachers/{tid}/Subjects",
                method:"Post",
                headers:{
                    contentType:"application/json"
					
                },
                data:{
                	
                	subjectname:$("#subjectname").val(),
                	description:$("#description").val(),
                	subjecttype:$("#subjecttype").val(),
                	price:$("#price").val(),
					count:$("#count").val(),
					teacherid:$("#teacherid").val(),
					
                	
                },

                complete:function(xmlHttp,status)
                {
                	if(xmlHttp.status==200)
                	{
                		alert("Done!");
                		$(location).attr('href', "");
                	}
                }
	});
}

});