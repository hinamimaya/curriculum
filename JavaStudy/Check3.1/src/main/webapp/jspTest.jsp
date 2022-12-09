<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

<div><%@ include file="header.jsp" %></div>

<div class="main">
    <table rules="none">
<tr align="center">
<th><label for="name1">name</label></th>
    <th><input type="text" name="namae" id="name1"></th>
</tr>
<tr align="center">
<td><label for="id1">id</label></td>
   <td><input type="text" name="id" id="id1"></td>
</tr>
</table>
</div>

<div><%@ include file="footer.jsp" %></div>

</body>
</html>