$(document).ready(function()
{
	$("#errormessage").empty();

	$("#btn").click(function()
	{
		var username=$("#entername").val();
		var password=$("#enterpassword").val();
		if (username.length<2 || password.length<2)
		{
			$("#errormessage").text('Username and password must have at least 2 characters');
		}
		else
			$("#errormessage").empty();

		$.ajax
		({
			url: 'http://akademiasovy.ddns.net:8081/api/auth/login',
			type: 'POST',
			contentType: 'application/json',

			data: JSON.stringify
			({
				"userName": username,
				"password": password
			}),

			success: function(data)
			{
				window.location.href='main.html';
			},

			error: function()
			{
				$("#errormessage").empty();
				$("#errormessage").html('Invalid Username or Password.<br>Please try again.');
			}
		});
		
	});
});