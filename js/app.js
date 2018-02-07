function loadPage(){
	setTimeout(function () {
		$(".seccion-1").fadeOut(2500); }, 1000);
		setTimeout(function () {
			$(".seccion-2").fadeIn(2500); }, 1000);

			$("#search").keyup(filterRestaurants);
		};


		function  filterRestaurants () {
			var searchRestaurant = $("#search").val().toLowerCase();
			if($("#search").val().trim().length > 0) {
				for(var i = 0; i<restaurants.length; i ++) {
					var restaurantName = restaurants[i].name;
					//console.log(restaurantName);
					var filterRestaurant = restaurants.filter(function(restaurantName) {
						return restaurantName.name.toLowerCase().indexOf(searchRestaurant) >= 0;
					});
				}
				$(".restaurants-container-info").empty();
				filterRestaurant.forEach(function(restaurantName) {
					paintNewRestaurants(restaurantName);
				});
			}
			else {
				$(".restaurants-container-info").empty();
				restaurants.forEach(function(restaurantName) {
					paintNewRestaurants(restaurantName);
				});
			}
		}

		//Función que crea elementos dinámicamente con DOM
		var paintNewRestaurants = function(restaurantName) {

			var $contRestaurant = $('<div />',{'class':'restaurants'});
			var $restaurantName = $('<h4 />',{'class':'name'});
			var $restaurantDire =$('<h6 />',{'class':'direccion'});
			var $btnIp = $('<p/>', {'class':''});
			var $btnMore = $('<button type="button" />');
			//Aregar atributos
			$restaurantName.text(restaurantName.name);
			$restaurantDire.text(restaurants.direccion);
			$btnMore.attr(
				{ "data-toggle" : "modal",
				"data-target" : "#myModal"
			});
			$btnMore.text("más información");
			$btnMore.addClass("btn-view");
			$btnMore.addClass("btn btn-info");
			$btnIp.attr("aria-hidden","true");
			//Relacionando
			$btnMore.append($btnIp);
			$contRestaurant.append($restaurantName);
			$contRestaurant.append($restaurantDire);
			$contRestaurant.append($btnMore);
			$(".restaurants-container-info").prepend($contRestaurant);
			//$btnMore.click(function(paintRestaurantModal){
			//$(".restaurantModalTitle").text(paintNewRestaurants.name);
		}


		$(document).ready(loadPage);
