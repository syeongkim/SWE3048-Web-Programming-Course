$(document).ready(function() {
	// set initial conditionl of local storage
	if (localStorage.getItem('emails') == 'a') {
		localStorage.setItem('emails', 'a');
		localStorage.setItem('passwords', 'b');
		localStorage.setItem('emaill', 'c');
		localStorage.setItem('passwordl', 'd');
		localStorage.setItem('login', true);
		localStorage.setItem('signup', false);
	}
	
	// if user click "Login" menu, background color and color of menu change
	if (localStorage.getItem('login') == 'true') {
			document.getElementById('loginsection').style.background = 'white';
			document.getElementById('loginsection').style.borderTop = '5px solid #2F558E'
			document.getElementById('signupsection').style.background = 'grey';
			document.getElementById('signupsection').style.border = '1px solid grey';
			// if user click "Login" menu, background color and color of menu change
		} else if (localStorage.getItem('signup') == 'true') {
			document.getElementById('loginsection').style.background = 'grey';
			document.getElementById('loginsection').style.border = '1px solid grey';
			document.getElementById('signupsection').style.background = 'white';
			document.getElementById('signupsection').style.borderTop = '5px solid #2F558E'
		}	
	// change value of local storage
	$('#loginsection').click(function() {
		localStorage.setItem('login', true);
		localStorage.setItem('signup', false);
	})

	$('#signupsection').click(function() {
		localStorage.setItem('login', false);
		localStorage.setItem('signup', true);
	})
	
	$.validator.addMethod("regex", function(value, regexp) {
		let re = new RegExp(regexp);
		let res = re.test(value);
		return res;
	});
	
	// set condition of input of signup form
	$('#signupform').validate({
		rules: {
			firstname: {
				required: true,
				regex: "^[A-Z][a-zA-Z]*$"
			},
			lastname: {
				required: true,
				regex: "^[A-Z][a-zA-Z]*$"
			},
			gender: {
				required: true
			},
			emails: {
				required: true,
				email: true
			},
			passwords: {
				required: true,
				minlength: 6,
				regex: "^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=<>?]).*$"
			},
			confirmpassword: {
				required: true,
				equalTo: "#passwords"
			}
		},
		// set warning message corresponding to each condition
		messages: {
			firstname: {
				required: "Please enter your first name!",
				regex: "First name cannot contain numbers!"
			},
			lastname: {
				required: "Please enter your last name!",
				regex: "Last name cannot contain numbers!"
			},
			gender: {
				required: "Please enter your gender!"
			},
			emails: {
				required: "Please enter your email!",
				email: "Your email address is invalid!"
			},
			passwords: {
				required: "Please enter your password!",
				minlength: "Requirement: at least 6 characters, one capital letter, one lowercase letter, atleast one digit and one special chatacter!",
				regex: "Requirement: at least 6 characters, one capital letter, one lowercase letter, atleast one digit and one special chatacter!"
			},
			confirmpassword: {
				required: "Please re-enter your password!",
				equalTo: "Password does not match!"
			}
		},
		errorPlacement: function(error, element) {
			let validator = $('#signupform').validate();
			for (let i = 0; i < validator.errorList.length; i++) {
				let error = validator.errorList[i];
				// console.log("입력 필드의 유효성 검사 통과 못한 규칙: " + error.method);
				// console.log("유효성 실패 메시지: " + error.message);
				$(element).closest(".box-input").find(".txt-error").text(error.message);
			}

			$(element).closest(".box-input").addClass("error");
			error.insertAfter(element);
		},
		// when user click submit button, the screen changes
		submitHandler: function() {
			//localStorage.clear();
			localStorage.setItem('emails', $('#emails').val());
			localStorage.setItem('passwords', $('#passwords').val());
			console.log("store");
			location.href = "signupfinish.jsp";
			console.log("clear");
		}
	});
	// set condition of input of login form
	$(function() {
		$('#loginform').validate({
			rules: {
				emaill: {
					email: true
				},
				passwordl: {
					required: true
				}
			},
			// set warning message corresponding to each condition
			messages: {
				emaill: {
					email: "Your email address is invalid!"
				},
				passwordl: {
					required: "Please enter your password!"
				}
			},
			onkeyup: function(element) {
				$(element).valid();
			},
			// when user click submit button, the screen changes
			submitHandler: function() {
				localStorage.setItem('emaill', $('#emaill').val());
				localStorage.setItem('passwordl', $('#passwordl').val());
				if ((localStorage.getItem('emails') == localStorage.getItem('emaill')) && (localStorage.getItem('passwords') == localStorage.getItem('passwordl'))) {
					console.log("login");
					localStorage.clear();
					location.href = "loginfinish.jsp";
				}
				// when user input wrong value, show warning message
				else {
					console.log("error");
					document.getElementById('warning').innerHTML = "Credential do not match!";
					document.getElementById('warning').style.color = 'red';
				}
			}
		})
	});

	document.querySelectorAll("input").forEach(input => {
  		input.addEventListener("valid", () => {
    // 검증 후 폼 요소에 was-validated 클래스로 표시해 둔다
    		document.forms[0].classList.add("was-validated")
  		})
	})
})


