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
			'colors' : {
				'100' : '#02528d',
				'15' : '#0261b2',
				'10' : '#0074cb',
				'8' : '#098aea',
				'5' : '#3f9dfa',
				'3' : '#32ccfe',
				'1' : '#8fe7ff'
			},
			overColor : '#FFA500',
			StrokeColor : '#f5f5f5',
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
		labelPadding : 10,
		canvasPadding : 10,
		alternateHGridColor : '#ffffff',
		canvasBorderAlpha : 0,
		formatNumber : 1,
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
		anchorRadius : 5,
		anchorBgColor : '46a9d5',
		anchorBorderColor : 'ffffff',
		anchorBorderThickness : 2,
		anchorAlpha : 100,
		plotBorderColor : '#46a9d5',
	};
	for ( var i in chart) {
		if (typeof (cfg.data['chart'][i]) == 'undefined') {
			cfg.data['chart'][i] = chart[i];
		}
	}

	cfg.data['styles'] = {
		"definition" : [ {
			"name" : "myValuesFont",
			"type" : "font",
			"size" : "12",
			"color" : "FFFFFF",
			"bold" : "0",
			"bgcolor" : "666666",
			"bordercolor" : "666666"
		}, {
			"name" : "myToolTipFont",
			"type" : "font",
			"size" : "18",
			"color" : "FFFFFF",
			"bold" : "0",
			"bgcolor" : "3f3a34",
			"bordercolor" : "202020"
		}, {
			"name" : "myLabelsFont",
			"type" : "font",
			"size" : "12",
			"color" : "FFFFFF",
			"bold" : "0",
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
	this.object.area[cfg.id].setTransparent(true);
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
		showPlotBorder : 0,
		overlapColumns : 0,
		showValues : 0,
		valuePadding : 5,
		formatNumber : 1,
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
		numberPrefix : '',
		plotGradientColor : ''
	};
	for ( var i in chart) {
		if (typeof (cfg.data['chart'][i]) == 'undefined') {
			cfg.data['chart'][i] = chart[i];
		}
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
		}, {
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
			"bold" : "0",
			"bgcolor" : "3f3a34",
			"bordercolor" : "202020"
		}, {
			"name" : "myYAxisFont",
			"type" : "font",
			"size" : "12",
			"color" : "666666",
		}, {
			"name" : "myBevel",
			"type" : "bevel",
			"distance" : "3"
		}, {
			"name" : "myShadow",
			"type" : "shadow",
			"angle" : "45",
			"distance" : "3"
		}, {
			"name" : "myAnim",
			"type" : "animation",
			"param" : "_alpha",
			"start" : "0",
			end : 5,
			"duration" : "1"
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
		}, {
			"toobject" : "DATAPLOT",
			"styles" : "myAnims"
		} ]
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
			"size" : "12",
			'color' : '666666',
		}, {
			"name" : "myLabelsFont",
			"type" : "font",
			"font" : "Arial",
			"size" : "12",
			"bold" : "0",
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
		legendIconScale : '1',
		enableSmartLabels : '0',
		labelDisplay : 'WRAP',
		showToolTip : 0,
		showToolTipShadow : 1,
		radius3D : 0,
		caption : '',
	};
	for ( var i in chart) {
		cfg.data['chart'][i] = chart[i];
	}
	var colors = [ '#FFC20B', '#4392D8', '00AC7C' ];
	var index = 0;
	for ( var i in cfg.data.data) {
		if (typeof (cfg.data.data[i]['color']) == 'undefined') {
			cfg.data.data[i]['color'] = colors[i % 3];
			index = ++index % 3;
		}

	}
	this.object.pie[cfg.id].setJSONData(cfg.data);
	this.object.pie[cfg.id].setTransparent(true);
	this.object.pie[cfg.id].render(cfg.id);
};
Chart.prototype.TagCloud = function(cfg) {
	var colors = [ 'a5dffa', '9fc8f0', '2bb9f9', '0facae', 'd2e86a', 'dda42f',
			'd37121' ];
	if (typeof (this.object.pie[cfg.id]) == 'undefined') {
		this.object.tagCloud[cfg.id] = new SWFObject(this.path
				+ '/assets/TagCloud.swf', cfg.id + '_chart',
				typeof (cfg.width) == 'undefined' ? '100%' : cfg.width,
				typeof (cfg.height) == 'undefined' ? '100%' : cfg.height, 9,
				"#ffffff");
	}
	this.object.tagCloud[cfg.id].addParam("wmode", "transparent");
	this.object.tagCloud[cfg.id].addParam("allowScriptAccess", "always");
	this.object.tagCloud[cfg.id].addVariable("tcolor", "0xeeeeee");
	this.object.tagCloud[cfg.id].addVariable("tcolor2", "0xdddddd");
	this.object.tagCloud[cfg.id].addVariable("hicolor", "0xffffff");
	this.object.tagCloud[cfg.id].addVariable("tspeed", "100");
	this.object.tagCloud[cfg.id].addVariable("distr", "true");
	this.object.tagCloud[cfg.id].addVariable("mode", "both");
	var tags = '<tags>';
	var step = parseInt(cfg.data.data.length / colors.length) + 1;
	for ( var i in cfg.data.data) {
		tags += '<a href="javascript:void(0);" style="font-size: '
				+ (12 + 2 * (step - parseInt(i / step))) + 'pt;" color="0x'
				+ colors[parseInt(i / step)] + '" >' + cfg.data.data[i].label
				+ '</a>';
	}
	tags += '</tags>';
	this.object.tagCloud[cfg.id].addVariable("tagcloud",
			encodeURIComponent(tags));
	this.object.tagCloud[cfg.id].write(cfg.id);
};
