var emps = null;
	var items = null;
	$('body').on(
			'click',
			'li.option label',
			function() {
				debugger;
				var examId = $(this).closest('.test_content_nr_main').closest(
						'li').attr('id'); // 得到题目ID
				var cardLi = $('a[href=#' + examId + ']'); // 根据题目ID找到对应答题卡
				// 设置已答题
				if (!cardLi.hasClass('hasBeenAnswer')) {
					cardLi.addClass('hasBeenAnswer');
				}

			});

	function startExam() {
		$("#startEx").hide();
		$(".test_content").show();
		$(".test_content_nr").show();
		$(".test_title").show();
		//获取选择题并显示
		getMulChoQuesAndShow();
		//获取判断题并显示
		getTorFQuesAndShow();
		
		startClock();

	}
	function Build_Ques_AnsSheet(items, flag) {
		//MulChoQuesAnsSheet
		//<li><a href="#qu_0_0">1</a></li>
		//<li><a href="#qu_0_1">2</a></li>
		if ("MulChosQues" == flag) {
			$.each(items, function(index, items) {
				$("<li><a href='#qu_0_"+index+"'>" + (index + 1) + "</a></li>")
						.appendTo("#MulChoQuesAnsSheet");
			});
		} else {
			$.each(items, function(index, items) {
				$("<li><a href='#qu_1_"+index+"'>" + (index + 1) + "</a></li>")
						.appendTo("#TorFansSheet");
			});
		}
	}
	//获取选择题数据
	function getMulChoQuesAndShow() {
		QuestionDwr
				.getAllMulChoQuestion(function(data) {
					items = data;
					//Title显示
					$(
							"<h2>单选题</h2><p>"
									+ "<span>共</span><i class='content_lit'>"
									+ items.length
									+ "</i><span>题，</span><span>合计</span><i class='content_fs'>"
									+ items.length * items[0].value
									+ "</i><span>分</span></p>").appendTo(
							"#MulChosQuesTitle");
					$
							.each(
									items,
									function(index, itemLi) {
										$(
												"<li id='qu_0_"+index+"'><div class='test_content_nr_tt'><i>"
														+ itemLi.serialNum
														+ "</i><span>("
														+ itemLi.value
														+ "分)</span><font>"
														+ itemLi.dry
														+ "( )</font><b class='icon iconfont'>&#xe881;</b></div>"
														+ "<div class='test_content_nr_main'><ul>"
														+ "<li class='option'><label for='0_answer_"
														+ (index + 1)
														+ "_option_1' ><input type='radio' class='radioOrCheck' name='ans"
														+ (index + 1)
														+ "' id='0_answer_"
														+ (index + 1)
														+ "_option_1' value='A'/>"
														+ "A.<p class='ue' style='display: inline;'>"
														+ itemLi.item.A
														+ "</p></label></li>"
														+ "<li class='option'><label for='0_answer_"
														+ (index + 1)
														+ "_option_2' ><input type='radio' class='radioOrCheck' name='ans"
														+ (index + 1)
														+ "' id='0_answer_"
														+ (index + 1)
														+ "_option_2' value='B'/>"
														+ "B.<p class='ue' style='display: inline;'>"
														+ itemLi.item.B
														+ "</p></label></li>"
														+ "<li class='option'><label for='0_answer_"
														+ (index + 1)
														+ "_option_3' ><input type='radio' class='radioOrCheck' name='ans"
														+ (index + 1)
														+ "' id='0_answer_"
														+ (index + 1)
														+ "_option_3' value='C'/>"
														+ "C.<p class='ue' style='display: inline;'>"
														+ itemLi.item.C
														+ "</p></label></li>"
														+ "<li class='option'><label for='0_answer_"
														+ (index + 1)
														+ "_option_4' ><input type='radio' class='radioOrCheck' name='ans"
														+ (index + 1)
														+ "' id='0_answer_"
														+ (index + 1)
														+ "_option_4' value='D'/>"
														+ "D.<p class='ue' style='display: inline;'>"
														+ itemLi.item.D
														+ "</p></label></li>"
														+ "</ul></div></li>")
												.appendTo("#MulChosQuesContent");

									});
					Build_Ques_AnsSheet(items, "MulChosQues");
				});
	}

	//判断题的获取
	function getTorFQuesAndShow() {
		QuestionDwr
				.getAllTorFQuestion(function(data) {
					emps = data;

					//Title显示
					$(
							"<h2>判断题</h2><p>"
									+ "<span>共</span><i class='content_lit'>"
									+ emps.length
									+ "</i><span>题，</span><span>合计</span><i class='content_fs'>"
									+ emps.length * emps[0].value
									+ "</i><span>分</span></p>").appendTo(
							"#TorFQuesTitle");

					//Content显示
					$
							.each(
									emps,
									function(index, itemLi) {
										$(
												"<li id='qu_1_"+index+"'><div class='test_content_nr_tt'><i>"
														+ itemLi.serialNum
														+ "</i><span>("
														+ itemLi.value
														+ "分)</span><font>"
														+ itemLi.dry
														+ "( )</font><b class='icon iconfont'>&#xe881;</b></div>"
														+ "<div class='test_content_nr_main'><ul>"
														+ "<li class='option'><label for='1_answer_"
														+ (index + 1)
														+ "_option_1' ><input type='radio' class='radioOrCheck' name='answer"
														+ (index + 1)
														+ "' id='1_answer_"
														+ (index + 1)
														+ "_option_1' value='A'/>"
														+ "A.<p class='ue' style='display: inline;'>"
														+ itemLi.item.A
														+ "</p></label></li>"
														+ "<li class='option'><label for='1_answer_"
														+ (index + 1)
														+ "_option_2' ><input type='radio' class='radioOrCheck' name='answer"
														+ (index + 1)
														+ "' id='1_answer_"
														+ (index + 1)
														+ "_option_2' value='B'/>"
														+ "B.<p class='ue' style='display: inline;'>"
														+ itemLi.item.B
														+ "</p></label></li>"
														+ "</ul></div></li>")
												.appendTo("#TorFQuesContent");
									});
					Build_Ques_AnsSheet(emps, "TorFQues");
				});
	}
	//交卷
	function submitMission() {
		flagA = true;
		flagB = true;

		var rightNum = 0;
		var errorNum = 0;
		//console.info(emps);
		
		$("#MulChoQuesAnsSheet").find('li > a').each(function(i, e) {
			// 将a的显示值更改，同时为a添加不同的超链接
			if (!$(this).hasClass('hasBeenAnswer')) {
				flagA = false;
				return;
			}
		});

		$("#TorFansSheet").find('li > a').each(function(i, e) {
			// 将a的显示值更改，同时为a添加不同的超链接
			if (!$(this).hasClass('hasBeenAnswer')) {
				flagB = false;
				return;
			}
		});

		if (flagA && flagB) {
			endClock();
			$(".test_content").hide();
			$(".test_content_nr").hide();
			$(".test_title").hide();
			$("#examResult").show();
			$("#graphShow").css("display", "block");
			//获取选择题答案
			$
					.each(items,
							function(index, item) {
								if ($(
										"#MulChosQuesContent :input:radio[name='ans"
												+ (index + 1) + "']:checked")
										.val() == item.answer) {
									rightNum++;
								} else {
									errorNum++;
								}
							});
			//获取判断题答案
			$
					.each(emps,
							function(index, item) {
								if ($(
										"#TorFQuesContent :input:radio[name='answer"
												+ (index + 1) + "']:checked")
										.val() == item.answer) {
									rightNum++;
								} else {
									errorNum++;
								}
							});
			showAnswergraph(rightNum, errorNum);

		} else {
			//弹出自定义提示
			showMessage();
		}
	}
	
	function showMessage(){
		var param = {
	            title:'提示',
	            tips:"请先完成答题再提交!",
	            btnOk:'确定',
	            funcOk:function () {
	            	return;
	            },
	            funcNo:function () {
	            }
	        }
	        createMessTipWin(param);
	}

	//显示图表
	function showAnswergraph(rightNum, errorNum) {
		var myChart = echarts.init(document.getElementById('graphShow'));

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
				data : [ [ '正确', rightNum ] ]
			}, {
				name : '错误',
				type : 'bar',
				stack : '总量',
				data : [ [ '错误', errorNum ] ]
			} ]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	}