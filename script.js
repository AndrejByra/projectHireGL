$(document).ready(function()
{
	
	$("#errormessage").hide();

	$("#btn").click(function()
	{
		var login=$("#entername").val();
		var password=$("#enterpassword").val();
		if (login.length<2 || password.length<2)
			$("#errormessage").show();
		else
			$("#errormessage").hide();
	});
});