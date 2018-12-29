$(document).ready(function(){
	// Logout Func
	$('#logoutBtn').on('click', function(){
		console.log('Logout Process');
		$.ajax({
			url:'/moviesocial/logout',
			success:function(res){
				location.href='/moviesocial/index';
			}
		});
	});
});