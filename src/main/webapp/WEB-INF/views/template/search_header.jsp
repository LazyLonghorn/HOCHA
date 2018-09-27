<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div id="search_header" class="container">

	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<div class="hidden-xs">
				
				</div>
				<form id="searchForm" name="searchForm">
					<div class="form-group">
						<label class="searchBar" for="searchWord"> <img
							src="resources/images/search.png" /> <input type="text"
							class="form-control" name="searchWord" id="searchWord"
							placeholder="작품 제목,배우,감독을 검색해보세요." />
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
					<li><button class="btn navbar-btn" data-toggle="modal"
							data-target="#loginModal">로그인</button></li>
					<li><button class="btn btn-danger navbar-btn"
							data-toggle="modal" data-target="#joinModal">회원가입</button></li>
				</ul>
			</div>
		</div>
	</nav>

</div>