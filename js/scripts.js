$(document).ready(function(){
	console.log("Let's start");
});
function Button(text) {
	this.text = text || 'Hello my Master';
};
Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert('Welcome in my world!');
		});
		$('body').append(this.$element);
	}
};
var btn1 = new Button('Hello my Master!');
btn1.create();



// Zrobić drugą zmienną przyporządkowaną do tekstu