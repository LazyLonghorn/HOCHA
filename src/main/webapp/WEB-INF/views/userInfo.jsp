<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
	
<div id="memberContent" class="container">
	<div class="myPageDiv">
		<div class="icon">
			<button type="button" class="btn btn-default okIcon passwd-okIcon" data-toggle="modal" data-target="#userInfoModal">
				<span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
			</button>
		</div>
	</div>
	<div class="infoDiv">
		<img class="pfImg" src="/moviesocial/resources/images/member/${requestScope.searchMember.memberPfimg}">
		<p class="member">
			<span>${requestScope.searchMember.memberName}</span><br>
			<span>프로필 메시지 ( 차후 DB에 추가하기 )</span>
		</p>
		<p class="analysis">
		
		</p>
		<ul class="evaluation">
			<li>
				<div>
					<p>영화</p>
					<p>☆ 10</p>
					<p>보고싶어요 10</p>
				</div>
			</li>
			<li>
				<div>
					<p>방송</p>
					<p>☆ 10</p>
					<p>보고싶어요 10</p>
				</div>
			</li>
			<li>
				<div>
					<p>도서</p>
					<p>☆ 10</p>
					<p>보고싶어요 10</p>
				</div>
			</li>
		</ul>
	</div>


	


	<!-- UserInfo Modal -->
	<div class="modal fade login-modal" id="userInfoModal" role="dialog">
		<div class="modal-dialog">

			<!-- Modal Content -->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" id="userModalClose" class="btn btn-default okIcon passwd-okIcon">
						<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
					</button>

					<h4 class="modal-title">설정</h4>

				</div>
				<div class="modal-body">
					<ul>
						<li class="imgSetBtn">
							<button type="button" class="userInfoBtn" id="pfSetBtn">프로필 이미지 설정</button>
						</li>
						<li class="imgSetBtn">
							<button type="button" class="userInfoBtn" id="bgSetBtn">배경 이미지 설정</button>
						</li>
						<li class="utilBtn logoutBtn">
							<button type="button" class="userInfoBtn" id="logoutBtn">로그아웃</button>
						</li>
						<li class="utilBtn">
							<button type="button" class="userInfoBtn" id="withdrawalBtn">탈퇴하기</button>
						</li>
					</ul>
					
					
				</div>
			</div>
			<!-- End Modal Content -->
		</div>
	</div>


</div>
