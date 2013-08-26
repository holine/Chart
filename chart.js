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
			parent : cfg.id
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
		} ],
		"application" : [ {
			"toobject" : "DataValues",
			"styles" : "myValuesFont"
		} ]
	};
	for ( var i in cfg.data.data) {
		cfg.data.data[i]['color'] = '#2985c8';// 柱状颜色
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
			"name" : "myLabelsFont",
			"type" : "font",
			"font" : "Arial",
			"size" : "14",
			"bold" : "1",
			'borderColor' : '666666',
			'bgColor' : 'EEEEEE',
		}, {
			"name" : "myLabelsAlpha",
			"type" : "Animation",
			"param" : "_alpha",
			"start" : "0",
			"duration" : "1",
		} ],
		"application" : [ {
			"toobject" : "DataLabels",
			"styles" : "myLabelsAlpha,myLabelsFont"
		} ]
	};
	var chart = {
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
	// use3DLighting:0
	};
	for ( var i in chart) {
		cfg.data['chart'][i] = chart[i];
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
		tags += '<a href="javascript:void(0)" class="tag-link-191" title="3 topics" style="font-size: 9.0243902439pt;" >' + cfg.data.data[i] + '</a>';
	}
	tags += '</tags>';
	this.object.tagCloud[cfg.id].addVariable("tagcloud", encodeURIComponent(tags));
	this.object.tagCloud[cfg.id].write(cfg.id);
};
