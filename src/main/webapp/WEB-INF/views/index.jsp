<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<div id="indexContent" class="container">
	<form id="searchForm" name="searchForm">
		<div class="form-group">
			<label class="searchBar" for="searchWord">
				<img src="resources/images/search.png"/>
				<input type="text" class="form-control"
						name="searchWord" id="searchWord" placeholder="작품 제목,배우,감독을 검색해보세요."/>
			</label>
		</div>
	</form>
	<div id="midCotainer" class="cotainer">
		<div class="imgDiv">
		
		</div>
	</div>
	
	<!-- Login Modal -->
	<div class="modal fade" id="loginModal" role="dialog">
		<div class="modal-dialog">
			
			<!-- Modal Content -->
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Modal Header</h4>
					<h4 class="login-title">로그인</h4>
				</div>
				<div class="modal-body">
					<form id="loginFrm" name="loginFrm">
						<div class="form-group">
						    <input type="text" class="form-control" id="login_email" name="login_email"
						    	placeholder="이메일"/>
						    <input type="password" class="form-control" id="login_passwd" name="login_passwd"
						    	placeholder="비밀번호"/>
						    <input type="submit" class="form-control" id="loginBtn" value="로그인"/>
						</div>
					</form>
					<div class="info_div">
						<div class="info"><a href="#">비밀번호를 잊어버리셨나요?</a></div>
						<div class="info"><span>계정이 없으신가요?</span><a href="#">&nbsp;회원가입</a></div>
						<ul>
							<li class="line"></li>
							<li><span>OR</span></li>
							<li class="line"></li>
						</ul>
						
					</div>
				</div>
			</div>
			<!-- End Modal Content -->
    	</div>
	</div>
    
    <!-- Join Modal -->
	<div class="modal fade" id="joinModal" role="dialog">
		<div class="modal-dialog">
			
			<!-- Modal Content -->
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Modal Header</h4>
					<h4 class="login-title">회원가입</h4>
				</div>
				<div class="modal-body">
					<form id="joinFrm" name="joinFrm">
						<div class="form-group">
						    <input type="text" class="form-control" id="join_name" name="join_name"
						    	placeholder="이름"/>
						    <input type="text" class="form-control" id="join_email" name="join_email"
						    	placeholder="이메일"/>
						    <input type="password" class="form-control" id="join_passwd" name="join_passwd"
						    	placeholder="비밀번호"/>
		
						    <div class="agree">
						    	<input type="checkbox" class="form-control" id="agreeChk" name="agreeChk" value="Chk" />
							    <span><a href="#">서비스 이용 약관</a> 과 <a href="#">개인정보 보호 정책</a> 에</span>
							    <span>&nbsp;동의합니다.</span>	
						    </div>
						    <input type="submit" class="form-control" id="joinBtn" value="회원가입"/>
						</div>
					</form>
					<div class="info_div">
						<div class="info"><span>이미 가입하셨나요?</span><a href="#">&nbsp;로그인</a></div>
						<ul>
							<li class="line"></li>
							<li><span>OR</span></li>
							<li class="line"></li>
						</ul>
						
					</div>
				</div>
			</div>
			<!-- End Modal Content -->
    	</div>
	</div>  
      

	
	
</div>