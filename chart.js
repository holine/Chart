function Chart(cfg) {
	this.path = cfg.path;
}
Chart.prototype.object = {
	map : {},
	area : {},
	column : {},
	pie : {},
	tagCloud : {}
};
Chart.prototype.map = function(cfg) {
	if (typeof (this.object.map[cfg.id]) == 'undefined') {
		this.object.map[cfg.id] = new maps({
			parent : cfg.id,
			'colors':{"0.5":"#ffc208","1":"#ffd88e","2":"#f8cfb4","3":"#d3e6a8","4":"#a9e4be","5":"#9ad4d5","100":"#a8cee6"}
		});
	}
	this.object.map[cfg.id].draw(cfg.data);
};
Chart.prototype.area = function(cfg) {
	if (typeof (this.object.area[cfg.id]) == 'undefined') {
		this.object.area[cfg.id] = new FusionCharts(this.path
				+ '/assets/Area2D.swf', cfg.id + '_chart',
				typeof (cfg.width) == 'undefined' ? '100%' : cfg.width,
				typeof (cfg.height) == 'undefined' ? '100%' : cfg.height, 0, 1);
	}

	var chart = {
		formatNumber : 0,
		formatNumberScale : 0,
		placeValuesInside : 0,
		lineColor : '#FFFFFF',
		is2D : 0,
		showValues : 0,
		canvasBgAlpha : 0,
		bgAlpha : 0,// flash背景透明度
		showBorder : 0,// 是否显示flash边框
		useRoundEdges : '1',
		showPercentInToolTip : '1',
		showPercentValues : '1',
		shownames : '1',
		animation : '1',
		legendBgAlpha : '0',
		legendShadow : '0',
		legendBorderColor : 'eeeeee',
		legendBorderAlpha : 0, // 边框透明度
		baseFontSize : '12',
		showlegend : '0',
		legendPosition : 'RIGHT',
		legendIconScale : '2',
		enableSmartLabels : '0',
		labelDisplay : 'WRAP',
		showToolTip : 1,
		showToolTipShadow : 1,
		radius3D : 0,
		xAxisName : '',
		yAxisName : '',
		caption : '',
		numberPrefix : '',
		labelStep : 1,
		drawAnchors : 1,
		// anchorSides : 1,
		// anchorRadius : 30,
		anchorBgColor : '46a9d5',
		anchorBorderColor : 'ffffff',
		// anchorBorderThickness:10,
		anchorAlpha : 100,
		plotBorderColor:'#46a9d5',
	// use3DLighting:0
	};
	for ( var i in chart) {
		cfg.data['chart'][i] = chart[i];
	}

	cfg.data['styles'] = {
		"definition" : [ {
			"name" : "myValuesFont",
			"type" : "font",
			"size" : "18",
			"color" : "FFFFFF",
			"bold" : "1",
			"bgcolor" : "666666",
			"bordercolor" : "666666"
		}, {
			"name" : "myToolTipFont",
			"type" : "font",
			"size" : "18",
			"color" : "FFFFFF",
			"bold" : "1",
			"bgcolor" : "3f3a34",
			"bordercolor" : "202020"
		},{
			"name" : "myLabelsFont",
			"type" : "font",
			"size" : "12",
			"color" : "FFFFFF",
			"bold" : "1",
			"bgcolor" : "6ab7f5",
			"bordercolor" : "6ab7f5"
		}, {
			"name" : "myYAxisFont",
			"type" : "font",
			"size" : "12",
			"color" : "666666",
		} ],
		"application" : [ {
			"toobject" : "DataLabels",
			"styles" : "myLabelsFont"
		}, {
			"toobject" : "DataValues",
			"styles" : "myValuesFont"
		}, {
			"toobject" : "ToolTip",
			"styles" : "myToolTipFont"
		}, {
			"toobject" : "yAxisValues",
			"styles" : "myYAxisFont"
		} ]
	};
	var cfgData = {
		color : '#4aabd6',
	};
	for ( var i in cfg.data.data) {
		for ( var j in cfgData) {
			cfg.data.data[i][j] = cfgData[j];
		}
	}

	this.object.area[cfg.id].setJSONData(cfg.data);
	this.object.area[cfg.id].render(cfg.id);

};
Chart.prototype.column = function(cfg) {
	if (typeof (this.object.column[cfg.id]) == 'undefined') {
		this.object.column[cfg.id] = new FusionCharts(this.path
				+ '/assets/Column3D.swf', cfg.id + '_chart',
				typeof (cfg.width) == 'undefined' ? '100%' : cfg.width,
				typeof (cfg.height) == 'undefined' ? '100%' : cfg.height, 0, 1);
	}
	var chart = {
			showValues:0,
		valuePadding : 5,
		formatNumber : 0,
		formatNumberScale : 0,
		placeValuesInside : 0,
		lineColor : '#FFFFFF',
		is2D : 0,
		canvasBgAlpha : 0,
		bgAlpha : 0,// flash背景透明度
		showBorder : 0,// 是否显示flash边框
		useRoundEdges : '1',
		showPercentInToolTip : '1',
		showPercentValues : '1',
		shownames : '1',
		animation : '1',
		legendBgAlpha : '0',
		legendShadow : '0',
		legendBorderColor : 'eeeeee',
		legendBorderAlpha : 0, // 边框透明度
		baseFontSize : '12',
		showlegend : '0',
		legendPosition : 'RIGHT',
		legendIconScale : '2',
		enableSmartLabels : '0',
		labelDisplay : 'WRAP',
		showToolTip : 1,
		showToolTipShadow : 1,
		radius3D : 0,
		xAxisName : '',
		yAxisName : '',
		caption : '',
		numberPrefix : ''
	// use3DLighting:0
	};
	for ( var i in chart) {
		cfg.data['chart'][i] = chart[i];
	}

	cfg.data['styles'] = {
		"definition" : [ {
			"name" : "myValuesFont",
			"type" : "font",
			"size" : "12",
			"color" : "FFFFFF",
			"bold" : "1",
			"bgcolor" : "666666",
			"bordercolor" : "666666"
		},{
			"name" : "myLabelsFont",
			"type" : "font",
			"size" : "12",
			"color" : "FFFFFF",
			"bold" : "1",
			"bgcolor" : "6ab7f5",
			"bordercolor" : "6ab7f5"
		}, {
			"name" : "myToolTipFont",
			"type" : "font",
			"size" : "18",
			"color" : "FFFFFF",
			"bold" : "1",
			"bgcolor" : "3f3a34",
			"bordercolor" : "202020"
		}, {
			"name" : "myYAxisFont",
			"type" : "font",
			"size" : "12",
			"color" : "666666",
		} ],
		"application" : [ {
			"toobject" : "ToolTip",
			"styles" : "myToolTipFont"
		}, {
			"toobject" : "DataLabels",
			"styles" : "myLabelsFont"
		}, {
			"toobject" : "yAxisValues",
			"styles" : "myYAxisFont"
		}  ]
	};
	for ( var i in cfg.data.data) {
		cfg.data.data[i]['color'] = '#66bbef';// 柱状颜色
	}
	this.object.column[cfg.id].setJSONData(cfg.data);
	this.object.column[cfg.id].setTransparent(true);
	this.object.column[cfg.id].render(cfg.id);

};
Chart.prototype.pie = function(cfg) {
	if (typeof (this.object.pie[cfg.id]) == 'undefined') {
		this.object.pie[cfg.id] = new FusionCharts(this.path
				+ '/assets/Pie2D.swf', cfg.id + '_chart',
				typeof (cfg.width) == 'undefined' ? '100%' : cfg.width,
				typeof (cfg.height) == 'undefined' ? '100%' : cfg.height, 0, 1);
	}
	cfg.data['styles'] = {
		"definition" : [ {
			"name" : "myLegendFont",
			"type" : "font",
			"font" : "Arial",
			"size" : "14",
			'color' : '666666',
		}, {
			"name" : "myLabelsFont",
			"type" : "font",
			"font" : "Arial",
			"size" : "30",
			"bold" : "1",
			'borderColor' : '999999',
			'bgColor' : '999999',
			'color' : 'FFFFFF',
		}, {
			"name" : "myLabelsAlpha",
			"type" : "Animation",
			"param" : "_alpha",
			"start" : "50",
			"duration" : "50",
		} ],
		"application" : [ {
			"toobject" : "DataLabels",
			"styles" : "myLabelsAlpha,myLabelsFont"
		}, {
			"toobject" : "Legend",
			"styles" : "myLegendFont"
		} ]
	};
	var chart = {
		"animation" : "1",
		bgAlpha : 0,// flash背景透明度
		showBorder : 0,// 是否显示flash边框
		useRoundEdges : '1',
		showPercentInToolTip : '1',
		showPercentValues : '1',
		shownames : '0',
		animation : '1',
		legendBgAlpha : '0',
		legendShadow : '0',
		legendBorderColor : 'eeeeee',
		legendBorderAlpha : 0, // 边框透明度
		baseFontSize : '12',
		showlegend : '1',
		legendPosition : 'RIGHT',
		legendIconScale : '2',
		enableSmartLabels : '0',
		labelDisplay : 'WRAP',
		showToolTip : 0,
		showToolTipShadow : 1,
		radius3D : 0,
		caption : '',
	// use3DLighting:0
	};
	for ( var i in chart) {
		cfg.data['chart'][i] = chart[i];
	}
	var colors = ['#FFC20B', '#4392D8', '00AC7C'];
	for(var i in cfg.data.data){
		cfg.data.data[i]['color'] = colors[i % 3];
	}
	this.object.pie[cfg.id].setJSONData(cfg.data);
	this.object.pie[cfg.id].setTransparent(true);
	this.object.pie[cfg.id].render(cfg.id);
};
Chart.prototype.TagCloud = function(cfg) {
	if (typeof (this.object.pie[cfg.id]) == 'undefined') {
		this.object.tagCloud[cfg.id] = new SWFObject(this.path
				+ '/assets/TagCloud.swf', cfg.id + '_chart',
				typeof (cfg.width) == 'undefined' ? '100%' : cfg.width,
				typeof (cfg.height) == 'undefined' ? '100%' : cfg.height, 9,
				"#ffffff");
	}
	this.object.tagCloud[cfg.id].addParam("wmode", "transparent");
	this.object.tagCloud[cfg.id].addParam("allowScriptAccess", "always");
	this.object.tagCloud[cfg.id].addVariable("tcolor", "0x333333");
	this.object.tagCloud[cfg.id].addVariable("tcolor2", "0x333333");
	this.object.tagCloud[cfg.id].addVariable("hicolor", "0x000000");
	this.object.tagCloud[cfg.id].addVariable("tspeed", "100");
	this.object.tagCloud[cfg.id].addVariable("distr", "true");
	this.object.tagCloud[cfg.id].addVariable("mode", "both");
	var tags = '<tags>';
	for ( var i in cfg.data.data) {
		tags += '<a href="javascript:void(0)" style="font-size: 9.0243902439pt;" >'
				+ cfg.data.data[i] + '</a>';
	}
	tags += '</tags>';
	this.object.tagCloud[cfg.id].addVariable("tagcloud",
			encodeURIComponent(tags));
	this.object.tagCloud[cfg.id].write(cfg.id);
};
