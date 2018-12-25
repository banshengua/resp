	$("table td").mouseover(function(){
					$(this).addClass("on").siblings().removeClass("on");/*鼠标移上去 高亮添加on样式兄弟移除on样式*/
					var index=$(this).index()/*获取当前索引值*/
					$(".text").eq(index).show().siblings().hide();/*等于索引值显示兄弟隐藏*/
				})