function UpdateECharts() {
	document.getElementById('mainECharts').style.visibility = "visible";

	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('mainECharts'));

	// 指定图表的配置项和数据
	option = {
	  xAxis: {
	    type: 'category',
	    boundaryGap: false,
	    data: ['1985年', '1986年', '1987年', '1988年', '1989年', '1990年', '1991年', '1992年', '1993年', '1994年', '1995年', '1996年', '1997年', '1998年', '1999年', '2000年', '2001年', '2002年', '2003年', '2004年', '2005年', '2006年', '2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年']
	  },
	  yAxis: {
	    type: 'value'
	  },
	  series: [
	    {
	      data: [25000, 27500, 26000, 25900, 25500, 25300, 25000, 24900, 23000, 23500, 27000, 26500, 26000 , 7000, 6900, 6500, 6500, 6500, 6500, 6500, 6700, 7200, 8000, 11000, 12000, 15000, 10000, 12000, 14000, 14800, 14900, 14900, 14000, 14300, 14500],
	      type: 'line',
	      areaStyle: {}
	    }
	  ]
	};


	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}

function UpdateECharts3() {
	document.getElementById('mainECharts').style.visibility = "visible";

	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('mainECharts'));

	// 指定图表的配置项和数据
	option = {
	  xAxis: {
	    type: 'category',
	    boundaryGap: false,
	    data: ['1985年', '1986年', '1987年', '1988年', '1989年', '1990年', '1991年', '1992年', '1993年', '1994年', '1995年', '1996年', '1997年', '1998年', '1999年', '2000年', '2001年', '2002年', '2003年', '2004年', '2005年', '2006年', '2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年']
	  },
	  yAxis: {
	    type: 'value'
	  },
	  series: [
	    {
	      data: [310, 330, 340, 360, 365, 360, 370, 360, 360, 380, 380, 370, 360 , 270, 250, 230, 220, 210, 200, 170, 180, 180, 200, 240, 270, 290, 270, 310, 340, 360, 350, 340, 310, 320, 340],
	      type: 'line',
	      areaStyle: {}
	    }
	  ]
	};

option && myChart.setOption(option);
}

function clr() {
	document.getElementById('mainECharts').style.visibility = "hidden";
}
