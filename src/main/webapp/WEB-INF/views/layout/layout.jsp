<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Extra Project</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="./resources/css/<tiles:getAsString name="css" />.css" type="text/css" />


<script	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="./resources/js/<tiles:getAsString name="js"/>.js"></script>


</head>
<body>
	<header>
		<tiles:insertAttribute name="header" />
	</header>
	<section>
		<tiles:insertAttribute name="content" />
	</section>
	<footer>
		<tiles:insertAttribute name="footer" />
	</footer>
</body>
</html>