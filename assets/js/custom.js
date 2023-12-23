/*login form validation starts*/


$('#login-frm').validate({


rules:
{
	email_id:
	{
		required:true,
		email:true
	},
	password:
	{
		required:true

	}
},
messages:
{
	email_id:
	{
		required:'Email ID is required',
		email:'Enter a valid Email ID'
	},
	password:
	{
		required:'Password is required'
	}

},
submitHandler:function()
{
	$.ajax({

		url:base_url+'ajax/login.php',
		data:$('#login-frm').serializeArray(),
		type:'POST',
		dataType:'json',
		beforeSend:function()
		{
			$('button[name="login_submit"]').prop('disabled',true);
			$('button[name="login_submit"]').text('Please Wait...');
		},
		success:function(r)
		{
			if(r.status=='success')
			{
				window.location=base_url+'dashboard.php';
			}
			else
			{
				
			Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: r.msg
			})
			}

			$('button[name="login_submit"]').prop('disabled',false);
			$('button[name="login_submit"]').text('Login');
			$('#login-frm')[0].reset();


		}




	});
}


});


/*login form validation ends*/



/*add slider validation starts*/

$('#add-slider').validate({


rules:
{
	slider_img:
	{
		required:true,
		extension:"jpg|jpeg|png"
	},
	slider_heading:
	{
		required:true
	}

},
messages:
{
	slider_img:
	{
		required:'Slider Image is required',
		extension:'Slider Image must be in jpg|jpeg|png format'
	},
	slider_heading:
	{
		required:'Slider Heading is required'
	}

},
submitHandler:function()
{
	$('#add-slider').submit();
}



});


/*add slider validation ends*/

/*edit slider validation starts*/

$('#edit-slider').validate({


rules:
{
	
	slider_heading:
	{
		required:true
	}

},
messages:
{
	
	slider_heading:
	{
		required:'Slider Heading is required'
	}

},
submitHandler:function()
{
	$('#edit-slider').submit();
}



});




/*edit slider validation ends*/



/*Delete record confirmation box starts*/

$('.del_rec').on('click',function(e){
	e.preventDefault();

var $t=$(this);
var redirect_url=$t.attr('data-url');


Swal.fire({
  icon: 'question',
  title: 'Are you sure you want to delete ?',
  showDenyButton: true,
  confirmButtonText: 'Yes',
  denyButtonText: `No`,
}).then((result) => {
  if (result.isConfirmed) {
    window.location=redirect_url;
  } else if (result.isDenied) {
    return false;
  }
});

});


/*Delete record confirmation box ends*/