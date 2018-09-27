<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<title>메인뷰페이지</title>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<link rel="stylesheet" type="text/css" href="http://kenwheeler.github.io/slick/slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="http://kenwheeler.github.io/slick/slick/slick-theme.css" />
<link rel="stylesheet" href="./css/mainview.css">
<script type="text/javascript" src="http://kenwheeler.github.io/slick/slick/slick.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$('.slider-for').slick({
			   slidesToShow: 2,
			   infinite: false,
			   slidesToScroll: 1,
			   focusOnSelect: true
		});
		
		$('.slider-comment').slick({
			   slidesToShow: 2,
			   infinite: false,
			   slidesToScroll: 1,
			   focusOnSelect: true
		});
	})
	google.charts.load("current", {packages:['corechart']});
	google.charts.setOnLoadCallback(drawChart);
	function drawChart(){
		var data = google.visualization.arrayToDataTable([
			['star','평점',{role:'style'}],
			['1',1000,'#FFFF48'],
			['2',1200,'#FFFF48'],
			['3',1500,'#FFFF48'], 
			['4',2000,'#FFFF48'],
			['5',1100,'#FFFF48']
		]);
		
		var options = {
				width:700,
				height:400};
		
		var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
		chart.draw(data,options);
	}
</script>
</head>
<body>
	<div id="mainview_header" class="container-fluid">
		<div class="jumbotron"> 
		</div>
	</div>
	<div id="content" class="container-fluid">
		<div class="jumbotron">
		 <div class="maxWidth"> 
			<div class="mainimage">  
				<img src="images/mil2.jpg" class="img-thumbnail" alt="포스터"/>
			</div>
			<div class="maincontent"> 
				<h2 class="subject">밀정</h2>
				<h4> 2017 드라마 한국</h4>
				<h6 class="stars">평점 ★3.8(8만명)</h6> 
				<button type="button" id="etcbutton" class="btn btn-default btn-lg">+ 보고싶어요</button>
 				<div class="starpu">
 					<span class="star"></span>
 					<span class="star"></span>
 					<span class="star"></span>
 					<span class="star"></span>
 					<span class="star"></span>
 				</div>
 			</div>
		</div>
	   </div>  
	</div>
	<div id="information" class="container-fluid">
		<div class="jumbotron">
			<div class="info_box">
				<div class="basic_box">
					<div class="basic_info">
						<span id="basic_span">기본정보</span>
						<span id="basic_plus">더보기</span>
					</div>
					<div class="basic_movie">
							<span>밀정</span><br/>
							<span>2017 · 한국 · 드라마 </span><br/>
							<span>1시간 59분</span><br/>
					</div>
					<div class="basic_content">
						<span>
							1920년대 일제강점기. 
							 조선인 출신 일본경찰 이정출(송강호)은 무장독립운동 단체 의열단의 뒤를 캐라는 특명으로 
							 의열단의 리더 김우진(공유)에게 접근하고, 한 시대의 양 극단에 서 있는 두 사람은 
							 서로의 정체와 의도를 알면서도 속내를 감춘 채 가까워진다. 
							 출처를 알 수 없는 정보가 쌍방간에 새어나가고 누가 밀정인지 알 수 없는 가운데, 
							 의열단은 일제의 주요 시설을 파괴할 폭탄을 경성으로 들여오기 위해, 
							 그리고 일본 경찰은 그들을 쫓아 모두 상해에 모인다.
						</span>
					</div>
				</div>
				<hr class="boarder_line" />
				<div class="appear_box">
					<div class="appear_info">
						<span id="appear_span">출연/제작</span>
					</div>
					<div class="appear_content">
						<ul class="appear_ul">
							<li class="appear_li">
								<div class="appear_picture">
									<img src="images/dog.jpg" class="img-circle" alt="Cinque Terre">
								</div> 
								<div class="appear_infomation">
									<span>엄혜란</span>
									<span>감독</span>
								</div>
							</li>
							<li class="appear_li">
								<div class="appear_picture">
									<img src="images/dog.jpg" class="img-circle" alt="Cinque Terre">
								</div>
								<div class="appear_infomation">
									<span>엄혜란</span>
									<span>감독</span>
								</div>
							</li>
							<li class="appear_li">
								<div class="appear_picture">
									<img src="images/dog.jpg" class="img-circle" alt="Cinque Terre">
								</div>
								<div class="appear_infomation">
									<span>엄혜란</span>
									<span>감독</span>
								</div>
							</li>
							<li class="appear_li">
								<div class="appear_picture">
									<img src="images/dog.jpg" class="img-circle" alt="Cinque Terre">
								</div>
								<div class="appear_infomation">
									<span>엄혜란</span>
									<span>감독</span>
								</div>
							</li>
							<li class="appear_li">
								<div class="appear_picture">
									<img src="images/dog.jpg" class="img-circle" alt="Cinque Terre">
								</div>
								<div class="appear_infomation">
									<span>엄혜란</span>
									<span>감독</span>
								</div>
							</li>
							<li class="appear_li">
								<div class="appear_picture">
									<img src="images/dog.jpg" class="img-circle" alt="Cinque Terre">
								</div>
								<div class="appear_infomation">
									<span>엄혜란</span>
									<span>감독</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<hr class="boarder_line" />
				<div class="chart_box">
					<div class="chart_info">
						<span id="chart_span">별점 그래프</span>
					</div>
					<div class="chart_graph">
						<div id="chart_div"></div>	
					</div>
				</div>
				<hr class="boarder_line" />
				<div class="gallery_box"> 
					<div class="gallery_info">
						<span id="gallery_span">갤러리</span>
					</div>
					<div id="gallery_content">
						<div class="slider slider-for">
							<div>
								<img src="images/gmil1.jpg" alt="1" >
							</div>
							<div>
								<img src="images/gmil2.jpg" alt="2">
							</div> 
							<div>
								<img src="images/gmil1.jpg" alt="2">
							</div>
							<div>
								<img src="images/gmil2.jpg" alt="2">
							</div>
						</div>
					</div>
				</div>
				<hr class="boarder_line" />
				<div class="comment_box"> 
					<div class="comment_info">
						<span id="comment_span">코멘트</span>
					</div>
					<div id="comment_content">
						<div class="slider slider-comment">
							<div id="comment_exam">
							</div>
							<div id="comment_exam">
							</div>
							<div id="comment_exam">
							</div>
							<div id="comment_exam">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>