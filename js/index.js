var someamount = 5
$(function() {
	var currency = {
		coefficient: someamount
	};

	$("input[name='amount']").keyup(function() {
		$("b#amount").html((this.value * currency.coefficient).toFixed(1) + " СЂСѓР±.");
	});

	$("input[name='amount']").bind("change keyup input click", function() {
	    if (this.value.match(/[^0-9]/g)) {
	        this.value = this.value.replace(/[^0-9]/g, "");
	    }
	});

});
