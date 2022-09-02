
function nice(){
	Swal.fire({
		icon: "success",
		title: "Thankyou for contacting!",
	})
}


function failed(){
	Swal.fire({
		icon: "error",
		title: "Opss!",
		text: `Something went wrong. Please try again.`
	})
}