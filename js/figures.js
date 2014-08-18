var _figures = {
	square:function(){
		var form1 = [];
		form1.push({row:0,column:0});
		form1.push({row:0,column:1});
		form1.push({row:1,column:1});
		form1.push({row:1,column:0});

		var form2 = [];
		form2.push({row:0,column:0});
		form2.push({row:1,column:0});
		form2.push({row:1,column:-1});
		form2.push({row:0,column:-1})

		var forms = [];
		forms[0] = form1;
		forms[1] = form2;
		return forms;
	},
	gun:function(){
		var form1 = [];
		form1.push({row:0,column:0});
		form1.push({row:0,column:1});
		form1.push({row:0,column:-1});
		form1.push({row:1,column:-1});

		var form2 = [];
		form2.push({row:0,column:0});
		form2.push({row:1,column:0});
		form2.push({row:-1,column:0});
		form2.push({row:-1,column:-1})

		var forms = [];
		forms[0] = form1;
		forms[1] = form2;
		return forms;
	},
	duck:function(){
		var form1 = [];
		form1.push({row:0,column:0});
		form1.push({row:1,column:0});
		form1.push({row:1,column:1});
		form1.push({row:0,column:-1});

		var form2 = [];
		form2.push({row:0,column:0});
		form2.push({row:0,column:-1});
		form2.push({row:1,column:-1});
		form2.push({row:-1,column:0})

		var forms = [];
		forms[0] = form1;
		forms[1] = form2;
		return forms;
	}
}