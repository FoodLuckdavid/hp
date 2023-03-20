







  /* スムースなスクロール効果 */
$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href === "#" || href === "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});





// GLOBAL NAV --------------------------------------------------------------
// #gnav
jQuery(function($){
	// 第2階層をもつli.listにadd_icoクラスを加える
	$("#gnav li.list:has(ul)").addClass("add_ico");
	// 第2階層をもつli.list aにno-actionを加えてクリックを無効にする
	//$("#gnav li.list:has(ul) > a").addClass("no-action");
});










// 関連資料---------------------------------------------------------------------

/*$(document).ready(function(){
	//リストにストライプ(偶数行にのみクラスを指定)
  $('.relevant_data li a:even').addClass('even_row');
});*/

$(document).ready(function(){
	//リストにストライプ(偶数行にのみクラスを指定)
  $('.relevant_data li:even').addClass('even_row');
});

