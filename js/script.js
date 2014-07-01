$(function(){
  
  if ($('.skill_header').length) {
	  var h = $('.skill_header');

	  $(window).scroll(function() {
		var scrollTop     = $(window).scrollTop(),
		    elementOffset = h.offset().top,
		    distance      = (elementOffset - scrollTop);
			if (distance < 300) {
				htmlSkill.init();
				cssSkill.init();
				preProcessorSkill.init();
				CssGrid.init();
				jsSkill.init();
				gitSkill.init();
				cmsSkill.init();
				emailSkill.init();
				adobeSkill.init();
			}
	  });
  }


});
