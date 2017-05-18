var font = new FontFamily('apache', ['/fonts/AldotheApache.ttf']);
var title_color = new color.RGBAColor(51, 215, 51);
var subtitle_color = new color.RGBAColor(50, 150, 50);

var title = new Text("HQL").addTo(stage).attr({
    fontFamily: 'apache',
    fontSize: '40',
    textFillColor: title_color
});

var subtitle = new Text("Syntax Checker").addTo(stage).attr({
    fontFamily: 'apache',
    fontSize: '20',
    textFillColor: subtitle_color
});