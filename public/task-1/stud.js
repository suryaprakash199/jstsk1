function func() {
	var student = {
		"name":"",
		"father_name":"",
		"address":"",
		"e_mail":"",
		"mobile":"",
		"college":"",
				"under_graduation":{
			"i_st_year":{
				"physics":"",
				"chemistry":"",
				"maths":""},
			
			"ii_nd_year":{
				"mechanics":"",
				"thermodynamics":"",
				"engineering_ethics":""},
			"iii_rd_year":{
					"manufacturing":"",
					"computer_science":"",
					"projects":""},
				},
		"post_graduation":{
			"i_st_year":{
				"physics":"",
				"chemistry":"",
				"maths":""},				
			"ii_nd_year":{
				"manufacturing":"",
				"computer_science":"",
				"projects":""}
        }      
        
		}
	 student.name =document.getElementById('a').value;
	 student.father_name =document.getElementById('b').value;
	 student.address =document.getElementById('c').value;
	 student.e_mail =document.getElementById('d').value;
	 student.mobile =document.getElementById('e').value;
	 student.college =document.getElementById('f').value;
	 student.under_graduation.i_st_year.physics =document.getElementById('g').value;
	 student.under_graduation.i_st_year.chemistry =document.getElementById('h').value;
	 student.under_graduation.i_st_year.maths =document.getElementById('x').value;
	 student.under_graduation.ii_nd_year.mechanics =document.getElementById('j').value;
	 student.under_graduation.ii_nd_year.thermodynamics =document.getElementById('k').value;
	 student.under_graduation.ii_nd_year.engineering_ethics =document.getElementById('l').value;
	 student.under_graduation.iii_rd_year.manufacturing =document.getElementById('m').value;
	 student.under_graduation.iii_rd_year.computer_science =document.getElementById('n').value;
	 student.under_graduation.iii_rd_year.projects =document.getElementById('o').value;
	 student.post_graduation.i_st_year.physics =document.getElementById('p').value;
	 student.post_graduation.i_st_year.chemistry =document.getElementById('q').value;
	 student.post_graduation.i_st_year.maths =document.getElementById('r').value;
	 student.post_graduation.ii_nd_year.manufacturing =document.getElementById('s').value;
	 student.post_graduation.ii_nd_year.computer_science =document.getElementById('t').value;
	 student.post_graduation.ii_nd_year.projects =document.getElementById('u').value; 
        alert("Form is updated successfully");
	    console.log(student);

}