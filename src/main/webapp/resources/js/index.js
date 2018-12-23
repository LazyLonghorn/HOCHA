$(document).ready(function(){
	
	
	var emailChk = false;
	var passwdChk = false;
	
	$('#loginModal #loginFrm #login_email').next().next().prop('disabled', true);
	$('#loginModal #loginFrm #login_passwd').next().next().prop('disabled', true);
	
	///////////////////////////////////////// Login Func /////////////////////////////////////////	
	// Eamil Input Func
	$('#loginModal #loginFrm #login_email').on('focus', function(){
		$(this).css('border', 'none').css('background-color','#F6F6F6');
		$(this).next().next().css('visibility','visible').css('background-color','#F6F6F6');
		$(this).next().next().children().prop('class', 'glyphicon glyphicon-ok');
		$(this).next().next().children().css('color','#00000030');
		$(this).next().next().next().css('display','none');
	});
	$('#loginModal #loginFrm #login_email').on('blur', function(){
		var inputEmail = $('#loginModal #loginFrm #login_email').val();
		if(inputEmail == ''){
			$(this).next().css('visibility','hidden');
			$(this).next().next().css('visibility','hidden');
			emailChk = false;
			return ;
		}
		
		var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
		if(!EMAIL_REGEXP.test(inputEmail)){
			var msg = '정확하지 않은 이메일입니다.';
			
			$(this).css('border', '2px solid #DB0000').css('background-color','#FFC6C6');
			$(this).next().next().css('background-color','#FFC6C6');
			$(this).next().next().children().prop('class', 'glyphicon glyphicon-remove');
			$(this).next().next().children().css('color','#C90000');			
			$(this).next().next().next().css('display','inherit');
			$(this).next().next().next().children().text(msg);
			
			emailChk = false;
		}
		else{			
			$(this).next().next().children().css('color','#00B700');
			emailChk = true;
		}
	});
	$('#loginModal #loginFrm #login_email').on('keyup', function(){
		var inputEmail = $('#loginModal #loginFrm #login_email').val();
		if(!inputEmail == ''){
			$(this).next().css('visibility','visible');
		}
		else{
			$(this).next().css('visibility','hidden');
		}
	});
	
	// Passwd Input Func
	$('#loginModal #loginFrm #login_passwd').on('focus', function(){
		$(this).css('border', 'none').css('background-color','#F6F6F6');
		$(this).next().next().css('visibility','visible').css('background-color','#F6F6F6');
		$(this).next().next().children().prop('class', 'glyphicon glyphicon-ok');
		$(this).next().next().children().css('color','#00000030');
		$(this).next().next().next().css('display','none');
	});
	$('#loginModal #loginFrm #login_passwd').on('blur', function(){
		var inputPasswd = $('#loginModal #loginFrm #login_passwd').val();
		if(inputPasswd == ''){
			$(this).next().css('visibility','hidden');
			$(this).next().next().css('visibility','hidden');
			passwdChk = false;
			return ;
		}
		
		var PASSWD_REGEXP = new RegExp('^(?=.*\\d)(?=.*[~`!@#$%\\^&*()-])(?=.*[a-z])(?=.*[A-Z]).{8,12}$', 'i');
		if(!PASSWD_REGEXP.test(inputPasswd)){
			var msg = '정확하지 않은 비밀번호입니다.';
			
			$(this).next().next().children().css('color','#C90000');
			
			$(this).css('border', '2px solid #DB0000').css('background-color','#FFC6C6');
			$(this).next().next().css('background-color','#FFC6C6');
			$(this).next().next().children().prop('class', 'glyphicon glyphicon-remove');
			$(this).next().next().children().css('color','#C90000');			
			$(this).next().next().next().css('display','inherit');
			$(this).next().next().next().children().text(msg);
			
			passwdChk = false;
		}
		else{			
			$(this).next().next().children().css('color','#00B700');
			passwdChk = true;
		}
	});
	$('#loginModal #loginFrm #login_passwd').on('keyup', function(){
		var inputPasswd = $('#loginModal #loginFrm #login_passwd').val();
		if(!inputPasswd == ''){
			$(this).next().css('visibility','visible');
		}
		else{
			$(this).next().css('visibility','hidden');
		}
	});
	// Input close Btn
	$('#indexContent>#loginModal>.modal-dialog>.modal-content>.modal-body .close').on('click', function(e){
		e.preventDefault();
		$(this).prev().val('');
		$(this).prev().focus();
	});
	
	
	
	// Login Btn
	$('#loginModal #loginFrm #loginBtn').on('click', function(e){
		e.preventDefault();
		
		var memberId = $('#loginModal #loginFrm #login_email').val(); 
		var memberPasswd = $('#loginModal #loginFrm #login_passwd').val();
		
		if(emailChk && passwdChk){
			$.ajax({
				type:'POST',
				url:'login.do',
				dataType:'text',
				data:'memberId='+memberId+'&memberPasswd='+memberPasswd,
				success: function(res){
					switch(res){
						case "-1":{							
							$('#msgModal .modal-content>.col-md-12:eq(0)').text('존재하지 않는 아이디입니다.');
							$('#msgModal').modal('show');
							return ;
						}
						case "0":{							
							$('#msgModal .modal-content>.col-md-12:eq(0)').text('비밀번호가 일치하지 않습니다.');
							$('#msgModal').modal('show');
							return ;
						}
						default:{
							location.reload();
						}
					}
				}		
			});
			
		}
	
	});
	
	$('#loginModal .info_div .info:eq(1) a').on('click', function(e){
		e.preventDefault();
		$('#loginModal').modal('hide');
		$('#joinModal').modal('show');
	});
	
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$('#loginModal').on('hidden.bs.modal',function(){
		modalInit('login');
	});
	//joinModal
	
	function modalInit(type){
		if(type=='login'){
			console.log('Modal Init');
			// email input Init
			$('#login_email').val('');
			$('#login_email').css('border', 'none').css('background-color','#F6F6F6');
			$('#login_email').next().css('visibility','hidden');
			$('#login_email').next().next().css('visibility','hidden').css('background-color','#F6F6F6');
			$('#login_email').next().next().children().prop('class', 'glyphicon glyphicon-ok');
			$('#login_email').next().next().children().css('color','#00000030');
			$('#login_email').next().next().next().css('display','none');
			
			// passwd input Init
			$('#login_passwd').val('');
			$('#login_passwd').css('border', 'none').css('background-color','#F6F6F6');
			$('#login_passwd').next().css('visibility','hidden');
			$('#login_passwd').next().next().css('visibility','hidden').css('background-color','#F6F6F6');
			$('#login_passwd').next().next().children().prop('class', 'glyphicon glyphicon-ok');
			$('#login_passwd').next().next().children().css('color','#00000030');
			$('#login_passwd').next().next().next().css('display','none');
		}
		
	}
	
	$('.infomsg-btn').on('click', function(){
		$('#msgModal').modal('hide');
	});
	
});