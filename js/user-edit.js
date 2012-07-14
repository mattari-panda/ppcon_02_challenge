(function(){

$(function() {
	//Q1 ---------------------------------------------
	var targetNameNode$ = $('#subject01_result');

	$('#get_name').on('click', function(){
		var getName = $('#yamada_name > span').text();
		targetNameNode$.text(getName);

		//念のため	
		return false;
	});

	//Q2 ---------------------------------------------
	var targetNameList1$ = $('#member_list');

	$('#add_sakurako, #add_himawari').on('click', function(){

		var getID = $(this).attr('id'),
			getName = $(this).text();
			removeText = (getName.indexOf('を追加') > 0)?'を追加':'の追加';

		var addName = getName.replace(removeText,''),
			addID   = getID.replace('add_', '');

		var appendNode = $('<li></li>').attr('id', addID).text(addName);
		targetNameList1$.append(appendNode);

		//念のため
		return false;
	}); 

	//Q3 ---------------------------------------------
	var targetNameList2$ = $('#member_list_remove');

	$('#remove_akari').on('click',function(){
		var removeID = '#'+this.id.replace('remove_','');
		targetNameList2$.children(removeID).remove();

		//念のため
		return false;
	});	

	//Q4 ---------------------------------------------
	var targetID = $('#stealth_momo');

	$('#change_visible_momo').on('click',function(){
		targetID.fadeToggle();

		//念のため
		return false;
	});

	//Q5 ---------------------------------------------
	var targetID2$ = $('#subject5');

	$('#change_header_html').on('click', function(){

		targetID2$.children('h2, p').each(function(i){
			var self = $(this);
			var getText = self.text();
			var matchWords = '問題5 複数の要素の変更';

			if(getText.match(matchWords)){
				self.text(getText.replace(matchWords, '【'+matchWords+'】'));
			}
		});

		//念のため
		return false;
	});
});

})();