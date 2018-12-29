<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<div id="search_footer" class="container">
	<c:if test="${empty sessionScope.loginName}">
		<nav class="navbar navbar-inverse navbar-fixed-bottom">
			<div class="container-fluid">
				<div class="navbar-header">
					<h4>지금 가입하시고</h4>
					<h5>다양한 영화 정보를 만나보세요.</h5>

				</div>

				<ul class="nav navbar-nav navbar-right">
					<li><button class="btn navbar-btn" data-toggle="modal"
							data-target="#loginModal">로그인</button></li>
					<li><button class="btn btn-danger navbar-btn"
							data-toggle="modal" data-target="#joinModal">회원가입</button></li>
				</ul>
			</div>
		</nav>
	</c:if>
</div>