<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<script type='text/javascript' src='dwr/engine.js'></script>
<script type='text/javascript' src='dwr/util.js'></script>
<script type="text/javascript" src="dwr/interface/QuestionDwr.js"></script>
<script type="text/javascript" src="static/js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="static/js/echarts.js"></script>


</head>
<body>
	<h1>OnlineExam</h1>
	<input type="button" value="获取选择题" onclick="getMulChoQues()">
	<input type="button" value="提交" onclick="showAnswergraph()">
	<div id="main" style="width:100%; height: 100%;z-index:1000;"></div>
</body>
<script language="javascript">
	//基于准备好的dom，初始化echarts实例
	function showAnswergraph(){
	var myChart = echarts.init(document.getElementById('main'));

	option = {

		legend : {
			data : [ '正确', '错误' ],
			left : 'left',
			textStyle : {
				color : '#969696' //legend字体颜色 
			},
		},

		xAxis : {

			type : 'category',
			data : [ '正确', '错误' ],
			//x轴坐标名称
			name : '考试结果',
			nameLocation : 'center',
			// x轴的字体样式
			axisLabel : {
				show : false, //这行代码控制着坐标轴x轴的文字是否显示
				textStyle : {
					color : '#000', //x轴上的字体颜色
					fontSize : '16' // x轴字体大小
				}
			},
			// x轴的颜色和宽度
			axisLine : {
				lineStyle : {
					color : '#333333',
					width : 3
				//这里是坐标轴的宽度,可以去掉
				}
			}
		},
		yAxis : {
			type : 'value',
			name : '题目个数',
		},
		series : [ {
			name : '正确',
			type : 'bar',
			stack : '总量',
			data : [ [ '正确', 3 ] ]
		}, {
			name : '错误',
			type : 'bar',
			stack : '总量',
			data : [ [ '错误', 2 ] ]
		} ]
	};
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}
	
	function getMulChoQues() {
		QuestionDwr.getAllMulChoQuestion(function(data) {
			var emps = data;
			console.info("一共:" + data.length);
			$.each(emps, function(index, items) {
				console.info(items.serialNum);
				console.info(items.dry);
				console.info(items.item);
				console.info(items.value);
				console.info(items.answer);
			});
		});
	}
</script>
</html>