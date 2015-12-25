$(document).ready(function() {

	var page = $('.bravo-content-block').data('main-block');

	if(page == 'home') {
		$('#fullpage-home').fullpage({
			anchors: ['home','events', 'pub', 'restaurant', 'nightclub', 'contact'],
			navigation: true,
	        navigationPosition: 'right',
	        showActiveTooltip: true,
	        responsiveWidth: 768,
			css3: true
		});
	} else if(page == 'restaurant') {
		$('#fullpage-restaurant').fullpage({
			anchors: [
				'home',
				'restaurant-events',
				'restaurant-interior', 
				'restaurant-kitchen', 
				'restaurant-wine', 
				'restaurant-gal'
			],
			navigation: true,
	        navigationPosition: 'right',
	        showActiveTooltip: true,
	        responsiveWidth: 768,
			css3: true
		});
	}

	

	


	if (document.location.hash == "") {
		$('.logo').hide();
	}

	$(window).on('hashchange', function() {
	  	var anchor = document.location.hash;
        if( anchor === '#home' || anchor == "" ) {
            $('.logo').hide();

        } else {
        	$('.logo').show();
        }
	});

	$('.close').on('click', function () {
		$.magnificPopup.close();
	});

	$('#book-form-link, #book-form-link2').magnificPopup({
	  type:'inline',
	  midClick: true,
	  showCloseBtn: false,
	  callbacks: {
	  	open: function () {
	  		var pins = [
			        {
			            pin : '',
			            desc : '',
			            lat : 42.8436041,
			            long : 74.585852
			        }
			    ];
			var mapOptions = {
			    zoom: 16,
			    center: new google.maps.LatLng(42.8436041, 74.585852),
			    
			    styles: [
			                {stylers:[
			                    {saturation:0},
			                    {gamma:1}
			                ]},
			                {elementType:"labels.text.stroke",
			                    stylers:[{visibility:"off"}]},
			                {featureType:"poi.business",
			                    elementType:"labels.text",
			                    stylers:[{visibility:"off"}]},
			                {featureType:"poi.business",
			                    elementType:"labels.icon",
			                    stylers:[{visibility:"off"}]},
			                {featureType:"poi.place_of_worship",
			                    elementType:"labels.text",
			                    stylers:[{visibility:"off"}]},
			                {featureType:"poi.place_of_worship",
			                    elementType:"labels.icon",
			                    stylers:[{visibility:"off"}]},
			                {featureType:"road",
			                    elementType:"geometry",
			                    stylers:[{visibility:"simplified"}]},
			                {featureType:"water",
			                    stylers:[{visibility:"on"},
			                    {saturation:50},{gamma:0},
			                    {hue:"#50a5d1"}]},
			                {featureType:"administrative.neighborhood",
			                    elementType:"labels.text.fill",
			                    stylers:[{color:"#333333"}]},
			                {featureType:"road.local",
			                    elementType:"labels.text",
			                    stylers:[{weight:0.5},
			                    {color:"#333333"}]},
			                {featureType:"transit.station",
			                    elementType:"labels.icon",
			                    stylers:[{gamma:1},{saturation:50}]}]
			}

			var map = new google.maps.Map(document.getElementById('map'), mapOptions);

			var markers = [];

			var infoWindow = new google.maps.InfoWindow();

			var createMarker = function (info){
			    
			    var marker = new google.maps.Marker({
			        map: map,
			        position: new google.maps.LatLng(info.lat, info.long),
			        title: info.pin,
			        icon: 'images/marker.svg'
			    });
			    marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
			    
			    // google.maps.event.addListener(marker, 'click', function(){
			    //     infoWindow.setContent('<h2 id="marker_title">' + marker.title + '</h2>' + marker.content);
			    //     infoWindow.open($scope.map, marker);
			    // });
			    
			    markers.push(marker);
			    
			}  

			for (var i = 0; i < pins.length; i++){
			    createMarker(pins[i]);
			}

			var openInfoWindow = function(e, selectedMarker){
			    e.preventDefault();
			    google.maps.event.trigger(selectedMarker, 'click');
			}
	  	}
	  }
	});

	$('#book-corp-link, #book-corp-link2').magnificPopup({
	  type:'inline',
	  showCloseBtn: false,
	  midClick: true,
	  callbacks: {
	  	open: function () {
	  		var pins = [
			        {
			            pin : '',
			            desc : '',
			            lat : 42.8436041,
			            long : 74.585852
			        }
			    ];
			var mapOptions = {
			    zoom: 16,
			    center: new google.maps.LatLng(42.8436041, 74.585852),
			    
			    styles: [
			                {stylers:[
			                    {saturation:0},
			                    {gamma:1}
			                ]},
			                {elementType:"labels.text.stroke",
			                    stylers:[{visibility:"off"}]},
			                {featureType:"poi.business",
			                    elementType:"labels.text",
			                    stylers:[{visibility:"off"}]},
			                {featureType:"poi.business",
			                    elementType:"labels.icon",
			                    stylers:[{visibility:"off"}]},
			                {featureType:"poi.place_of_worship",
			                    elementType:"labels.text",
			                    stylers:[{visibility:"off"}]},
			                {featureType:"poi.place_of_worship",
			                    elementType:"labels.icon",
			                    stylers:[{visibility:"off"}]},
			                {featureType:"road",
			                    elementType:"geometry",
			                    stylers:[{visibility:"simplified"}]},
			                {featureType:"water",
			                    stylers:[{visibility:"on"},
			                    {saturation:50},{gamma:0},
			                    {hue:"#50a5d1"}]},
			                {featureType:"administrative.neighborhood",
			                    elementType:"labels.text.fill",
			                    stylers:[{color:"#333333"}]},
			                {featureType:"road.local",
			                    elementType:"labels.text",
			                    stylers:[{weight:0.5},
			                    {color:"#333333"}]},
			                {featureType:"transit.station",
			                    elementType:"labels.icon",
			                    stylers:[{gamma:1},{saturation:50}]}]
			}

			var map = new google.maps.Map(document.getElementById('map'), mapOptions);

			var markers = [];

			var infoWindow = new google.maps.InfoWindow();

			var createMarker = function (info){
			    
			    var marker = new google.maps.Marker({
			        map: map,
			        position: new google.maps.LatLng(info.lat, info.long),
			        title: info.pin,
			        icon: 'images/marker.svg'
			    });
			    marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
			    
			    // google.maps.event.addListener(marker, 'click', function(){
			    //     infoWindow.setContent('<h2 id="marker_title">' + marker.title + '</h2>' + marker.content);
			    //     infoWindow.open($scope.map, marker);
			    // });
			    
			    markers.push(marker);
			    
			}  

			for (var i = 0; i < pins.length; i++){
			    createMarker(pins[i]);
			}

			var openInfoWindow = function(e, selectedMarker){
			    e.preventDefault();
			    google.maps.event.trigger(selectedMarker, 'click');
			}
	  	}
	  }
	});

	$("#inputTel, #inputTel2").mask("+996 (###) ## ## ##");

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});

	$("#formCorp").submit(function() {
		$.ajax({
			type: "POST",
			url: "mailCorp.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});

	$('#mobile-menu').click(function(){
		$(this).toggleClass('open');

	});

	$('#events-carousel').slick({
	  	centerMode: true,
	  	centerPadding: '250px',
	  	slidesToShow: 1,
	  	draggable: false,
	  	responsive: [
	    	{
	      		breakpoint: 768,
	      		settings: {
	        		arrows: false,
	        		centerMode: true,
	        		centerPadding: '40px',
	        		slidesToShow: 1
	      		}
			},
	    	{
	      		breakpoint: 480,
	      		settings: {
	        		arrows: false,
	        		centerMode: true,
	        		centerPadding: '40px',
        			slidesToShow: 1
	      		}
	    	}
	  	]
	});

	$('#restaurant-gallery').slick({
	  	centerMode: true,
	  	centerPadding: '220px',
	  	slidesToShow: 1,
	  	draggable: false,
	  	responsive: [
	    	{
	      		breakpoint: 768,
	      		settings: {
	        		arrows: false,
	        		centerMode: true,
	        		centerPadding: '40px',
	        		slidesToShow: 1
	      		}
			},
	    	{
	      		breakpoint: 480,
	      		settings: {
	        		arrows: false,
	        		centerMode: true,
	        		centerPadding: '40px',
        			slidesToShow: 1
	      		}
	    	}
	  	]
	});
	

	$('.events .slick-slide, .rest-gallery .slick-track').lightGallery({
	    thumbnail:false,
	    download: false,
	    animateThumb: false,
	    showThumbByDefault: false
	}); 

});