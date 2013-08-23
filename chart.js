function Chart(cfg) {
	this.path = cfg.path;
}
Chart.prototype.object = {
	map : {},
	area : {},
	column : {},
	pie : {}
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
	this.object.column[cfg.id].setJSONData(cfg.data);
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
		} ],
		"application" : [ {
			"toobject" : "DataLabels",
			"styles" : "myLabelsFont"
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
	for(var i in chart){
		cfg.data['chart'][i] = chart[i];
	}
	this.object.pie[cfg.id].setJSONData(cfg.data);
	this.object.pie[cfg.id].setTransparent(true);
	this.object.pie[cfg.id].render(cfg.id);

};