$(document).ready(function() {
	$('#signupform').validate({
		rules: {
			name: {
				required: true,
				regex: "^[A-Z][a-zA-Z]*$"
			},
			ids: {
				required: true
			},
			passwords: {
				required: true,
				minlength: 6,
			},
			confirmpassword: {
				required: true,
				equalTo: "#passwords"
			},
			email: {
				required: true,
				email: true
			}
		},
		// set warning message corresponding to each condition
		messages: {
			name: {
				required: "Please enter your first name!",
				regex: "Name cannot contain numbers!"
			},
			ids: {
				required: "Please enter your ID!"
			},
			passwords: {
				required: "Please enter your password!",
				minlength: "at least 6 characters is need!"
			},
			confirmpassword: {
				required: "Please re-enter your password!",
				equalTo: "Password does not match!"
			},
			email: {
				required: "Please enter your email!",
				email: "Your email address is invalid!"
			}
		},
		onkeyup: function(element) {
			$(element).valid();
		},
		errorPlacement: function(error, element) {
			let validator = $('#signupform').validate();
			for (let i = 0; i < validator.errorList.length; i++) {
				let error = validator.errorList[i];
				$(element).closest(".box-input").find(".txt-error").text(error.message);
			}

			$(element).closest(".box-input").addClass("error");
			error.insertAfter(element);
		}
	});

	document.querySelectorAll("input").forEach(input => {
		input.addEventListener("valid", () => {
			document.forms[0].classList.add("was-validated")
		})
	})
})