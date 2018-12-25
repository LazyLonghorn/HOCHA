$(document).ready(function(){
	
	var nameChk = false;
	var emailChk = false;
	var passwdChk = false;
	var joinChk = false;
	
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
	
	//////////////////////////////////////////////// Join Func ////////////////////////////////////////////////	
	// Name Input Func
	$('#joinModal #joinFrm #join_name').on('focus', function(){
		$(this).css('border', 'none').css('background-color','#F6F6F6');
		$(this).next().next().css('visibility','visible').css('background-color','#F6F6F6');
		$(this).next().next().children().prop('class', 'glyphicon glyphicon-ok');
		$(this).next().next().children().css('color','#00000030');
		$(this).next().next().next().css('display','none');
	});
	$('#joinModal #joinFrm #join_name').on('blur', function(){
		var inputName = $(this).val();
		if(inputName == ''){
			$(this).next().css('visibility','hidden');
			$(this).next().next().css('visibility','hidden');
			emailChk = false;
			return ;
		}
		var inputLength = inputName.length;
		if(inputLength<2 || inputLength>15){
			var msg = '정확하지 않은 이름입니다.';
			
			$(this).css('border', '2px solid #DB0000').css('background-color','#FFC6C6');
			$(this).next().next().css('background-color','#FFC6C6');
			$(this).next().next().children().prop('class', 'glyphicon glyphicon-remove');
			$(this).next().next().children().css('color','#C90000');			
			$(this).next().next().next().css('display','inherit');
			$(this).next().next().next().children().text(msg);
			
			nameChk = false;
		}
		else{			
			$(this).next().next().children().css('color','#00B700');
			nameChk = true;
		}
	});
	$('#joinModal #joinFrm #join_name').on('keyup', function(){
		var inputName = $(this).val();
		if(!inputName == ''){
			$(this).next().css('visibility','visible');
		}
		else{
			$(this).next().css('visibility','hidden');
		}
	});
	
	// Email Input Func
	$('#joinModal #joinFrm #join_email').on('focus', function(){
		$(this).css('border', 'none').css('background-color','#F6F6F6');
		$(this).next().next().css('visibility','visible').css('background-color','#F6F6F6');
		$(this).next().next().children().prop('class', 'glyphicon glyphicon-ok');
		$(this).next().next().children().css('color','#00000030');
		$(this).next().next().next().css('display','none');
	});
	$('#joinModal #joinFrm #join_email').on('blur', function(){
		var inputEmail = $(this).val();
		if(inputEmail == ''){
			$(this).next().css('visibility','hidden');
			$(this).next().next().css('visibility','hidden');
			emailChk = false;
			return ;
		}		
		// 이메일 이미 가입 여부 확인하기
		$.ajax({
			type:'POST',
			url:'joinEmailChk.do',
			data:'memberId='+inputEmail,
			dataType:'text',
			success:function(res){
				if(res=='0'){
					var element = $('#joinModal #joinFrm #join_email');
					var msg = '이미 가입된 이메일입니다.';
					
					element.css('border', '2px solid #DB0000').css('background-color','#FFC6C6');
					element.next().next().css('background-color','#FFC6C6');
					element.next().next().children().prop('class', 'glyphicon glyphicon-remove');
					element.next().next().children().css('color','#C90000');			
					element.next().next().next().css('display','inherit');
					element.next().next().next().children().text(msg);
					
					emailChk = false;
					return ;
				}
			}
		});
		
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
	$('#joinModal #joinFrm #join_email').on('keyup', function(){
		var inputEmail = $(this).val();
		if(!inputEmail == ''){
			$(this).next().css('visibility','visible');
		}
		else{
			$(this).next().css('visibility','hidden');
		}
	});
	
	// Passwd Input Func
	$('#joinModal #joinFrm #join_passwd').on('focus', function(){
		$(this).css('border', 'none').css('background-color','#F6F6F6');
		$(this).next().next().css('visibility','visible').css('background-color','#F6F6F6');
		$(this).next().next().children().prop('class', 'glyphicon glyphicon-ok');
		$(this).next().next().children().css('color','#00000030');
		$(this).next().next().next().css('display','none');
	});
	$('#joinModal #joinFrm #join_passwd').on('blur', function(){
		var inputPasswd = $(this).val();
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
	$('#joinModal #joinFrm #join_passwd').on('keyup', function(){
		var inputPasswd = $(this).val();
		if(!inputPasswd == ''){
			$(this).next().css('visibility','visible');
		}
		else{
			$(this).next().css('visibility','hidden');
		}
	});
	
	$('#joinModal #joinFrm #agreeChk').on('click', function(){
		$(this).parent().next().css('display', 'none');
		if($(this).prop('checked')){
			joinChk = true;
		}
		else{
			joinChk = false;
		}
	});
	
	$('#joinModal .info_div .info a').on('click', function(e){
		e.preventDefault();
		$('#joinModal').modal('hide');
		$('#loginModal').modal('show');
	});
	
	// Join Function
	$('#joinModal #joinFrm #joinBtn').on('click', function(e){
		e.preventDefault();
		
		if(!joinChk){
			var element = $('#joinModal #joinFrm .agree');
			var msg = '서비스 이용 약관 및 개인정보 보호 정책 동의가 필요합니다.';
			
			element.next().css('display','inherit');
			element.next().children().text(msg);
			return ;
		}
		
		// 입력 여부 / 통과여부  조건문
		if(emailChk && passwdChk && nameChk){
			var frm = $('#joinModal #joinFrm');
			var param = frm.serialize();
			$.ajax({
				type:'POST',
				url:'join.do',
				dataType:'json',
				data:param,
				success:function(res){
					$('#msgModal .modal-content>.col-md-12:eq(0)').text('회원가입이 완료되었습니다.');
					$('#msgModal').modal('show');
					
					setTimeout(function(){
						$('#msgModal').modal('hide');
						$('#joinModal').modal('hide');
					},5000);
				}
			});
		}
		
		
	});
	
	
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$('.close').on('click', function(e){
		e.preventDefault();
		$(this).prev().val('');
		$(this).prev().focus();
	});
	
	$('#loginModal').on('hidden.bs.modal',function(){
		modalInit('login');
	});
	$('#joinModal').on('hidden.bs.modal',function(){
		modalInit('join');
	});
	
	
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
			$('#login_passwd').next().next().next().css('display','none')
		}
		else{
			$('#join_name').val('');
			$('#join_name').css('border', 'none').css('background-color','#F6F6F6');
			$('#join_name').next().css('visibility','hidden');
			$('#join_name').next().next().css('visibility','hidden').css('background-color','#F6F6F6');
			$('#join_name').next().next().children().prop('class', 'glyphicon glyphicon-ok');
			$('#join_name').next().next().children().css('color','#00000030');
			$('#join_name').next().next().next().css('display','none');
			
			$('#join_email').val('');
			$('#join_email').css('border', 'none').css('background-color','#F6F6F6');
			$('#join_email').next().css('visibility','hidden');
			$('#join_email').next().next().css('visibility','hidden').css('background-color','#F6F6F6');
			$('#join_email').next().next().children().prop('class', 'glyphicon glyphicon-ok');
			$('#join_email').next().next().children().css('color','#00000030');
			$('#join_email').next().next().next().css('display','none');
			
			$('#join_passwd').val('');
			$('#join_passwd').css('border', 'none').css('background-color','#F6F6F6');
			$('#join_passwd').next().css('visibility','hidden');
			$('#join_passwd').next().next().css('visibility','hidden').css('background-color','#F6F6F6');
			$('#join_passwd').next().next().children().prop('class', 'glyphicon glyphicon-ok');
			$('#join_passwd').next().next().children().css('color','#00000030');
			$('#join_passwd').next().next().next().css('display','none');
			
			$('#joinModal #joinFrm #agreeChk').prop('checked', false);
			$('#joinModal #joinFrm .agree').next().css('display','none');
		}
		
		nameChk = false; emailChk = false; passwdChk = false; joinChk=false;
		
	}
	
	$('.infomsg-btn').on('click', function(){
		$('#msgModal').modal('hide');
		$('#joinModal').modal('hide');
	});
	
	
	// Logout Func
	$('.logout').on('click', function(){
		console.log('Logout Process');
		$.ajax({
			url:'logout.do',
			success:function(res){
				location.href='index.do';
			}
		});
	});
	
	
});