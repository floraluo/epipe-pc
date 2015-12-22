$(function(){

  // 小屏搜索框
  $(".j-trigger-search").on("click",function(){
      var $this = $(this),
          searchBox = $(".j-head-search"),
          trigger = searchBox.hasClass("active");
      if(!trigger){
        searchBox
        .addClass("active")
        .animate({top: "-5px"});
      }else{
        searchBox
        .removeClass("active")
        .css({top: "-50px"});
      }
  });


  
  // $loading.on("click",function(){
  //   $(this).tooltip("destroy");
  // })
  // $unloading.on("click",function(){
  //   $(this).tooltip("destroy");
  // })
  

  // banner 轮播
  $("#owl-banner").owlCarousel({
  		// navigation: false, // Show next and prev buttons
        slideSpeed: 100,
        paginationSpeed: 600,
        rewindSpeed: 1000,
        singleItem: true,
    //     navigationText: ["<<", ">>"],
    //     //Pagination
        pagination: true,
        paginationNumbers: false,
        autoPlay: true,
        responsive: true
  });
  $(".j-owl-custom").owlCarousel({
      items: 2,
      itemsDesktop: [1199, 1],
      itemsTablet: [1199, 1],
      itemsMobile: [768,1],
      autoPlay: true
  });

  // 战略合作伙伴
  var owlCoo = $("#owl-cooperation");
  owlCoo.owlCarousel({
    items: 5,
    itemsDesktop: [1199, 5],
    autoPlay: true
  })
  // Custom Navigation Events
  $(".j-owl-next").click(function(){
    owlCoo.trigger('owl.next');
  })
  $(".j-owl-prev").click(function(){
    owlCoo.trigger('owl.prev');
  })

  // 控制文字行数，超出...
  $(".j-dotdotdot").dotdotdot({
      wrap: "word",
      height: 40
  });
  $('#carousel-product').on('slid.bs.carousel', function () {
    $(".j-dotdotdot").dotdotdot({
      wrap: "word",
      height: 40
    });
  })

  // 展会|招投标
  $('#carousel-exh-bid').carousel();

  //人才悬赏 
  var $ulTalents = $(".j-ul-talents");
  if($ulTalents.find("li").length>10){
    var ulTalentsTimer = setInterval('autoScroll(".j-ul-talents","li:first-child")', 3000);
    $ulTalents.on("mouseover",function(){
      clearInterval(ulTalentsTimer);
    });
    $ulTalents.on("mouseleave",function(){
      ulTalentsTimer=setInterval('autoScroll(".j-ul-talents","li:first-child")', 3000);
    });
  }

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
// 自动滚动
