<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div id="search_header" class="container">

	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<div class="hidden-xs"></div>
				<form id="searchForm" name="searchForm">
					<div class="form-group">
						<label class="searchBar" for="searchWord"> <img
							src="/moviesocial/resources/images/search.png" /> <input
							type="text" class="form-control" name="searchWord"
							id="searchWord" placeholder="작품 제목,배우,감독을 검색해보세요." />
						</label>
					</div>
				</form>
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#searchNavbar">
					<span class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse" id="searchNavbar">
				<ul class="nav navbar-nav navbar-right">
					<c:choose>
						<c:when test="${!empty sessionScope.loginName}">
							<!-- Login -->
							<li><button class="btn navbar-btn logout">로그아웃</button></li>
							<li class="login-pfImg"><img
								src="/moviesocial/resources/images/member/${sessionScope.loginPfImg}">
							</li>
						</c:when>
						<c:otherwise>
							<li><button class="btn navbar-btn" data-toggle="modal"
									data-target="#loginModal">로그인</button></li>
							<li><button class="btn btn-danger navbar-btn"
									data-toggle="modal" data-target="#joinModal">회원가입</button></li>
						</c:otherwise>
					</c:choose>
				</ul>
			</div>



			



			</div>

	</nav>



</div>