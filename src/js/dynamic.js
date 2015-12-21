$(function(){
	// 点赞
	$('.j-zan').on("click",function(){
		var $this = $(this),
				$num = $this.find('.num')
		if($this.hasClass('active')){
			$this.removeClass('active');
			$num.html(parseInt($num.html())-1);
		}else{
			$this.addClass('active');
			$num.html(parseInt($num.html())+1);
		}
	});
	$("#owlBanner").owlCarousel({
      items: 1,
      itemsDesktop: [1199, 1],
      itemsTablet: [991, 1],
      itemsMobile: [767,1],
      autoPlay: true
  });
  $(".j-owl-custom").owlCarousel({
      items: 4,
      itemsDesktop: [1199, 4],
      itemsTablet: [991, 2],
      itemsMobile: [767,1],
      autoPlay: true
  });
  // 优管推荐
  $(".j-owl-recommend").owlCarousel({
      items: 2,
      itemsDesktop: [1199, 2],
      itemsTablet: [991, 1],
      itemsMobile: [767,1],
      autoPlay: true
  });
  var $companyContent = $(".j-company-content"),
      companyContentTimer = setInterval('autoComplanyScroll(".j-company-content")', 3000);
  $companyContent.on("mouseover",function(){
    clearInterval(companyContentTimer);
  });
  $companyContent.on("mouseleave",function(){
    companyContentTimer=setInterval('autoComplanyScroll(".j-company-content")', 3000);
  });
  // 原材料行情
  var tbodyTimer=setInterval('autoTableScroll(".j-table-tbody","tr")',3000);
  $(".j-table-tbody").on("mouseover",function(){
    clearInterval(tbodyTimer);
  });
  $(".j-table-tbody").on("mouseleave",function(){
    tbodyTimer=setInterval('autoTableScroll(".j-table-tbody","tr")',3000);
  });
});
