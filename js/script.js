$(function() {
    
    var topoffset= 55;
    
    //Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=\\#]:not([href=\\#])').click(function () {
        if (location.pathname.replace(/^\//, '') ===
           this.pathname.replace(/^\//, '') &&
           location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - topoffset + 2
                }, 500);
                return false;
            } //target.length
        } //click function
    }); //smooth scrolling
    
    $(window).on('activate.bs.scrollspy', function() {
        var hash = $('.site-nav')
        .find('a.active')
        .attr('href');
        
        if (hash !== '#page-hero') {
            $('header nav').addClass('inbody');
        } else {
            $('header nav').removeClass('inbody');
        }
        
        $('#page-media .layout-animation').css(
        'visibility: hidden'
        );
        
        if (hash === '#page-media') {
            $('#page-media .layout-animation').addClass('animated fadeInRight');
        }
        
    });
    
   $('#site-modal').on('show.bs.modal', function(event) {
       $(this)
        .find('.modal-content img')
        .attr('src', $(event.relatedTarget).data('highres'))
   });
});


// 'FIND US' MAPS

var bMapAPIKey = 
    'Ar3-aIKWy-T-_oGoHZ8NHnN3rQPKYbi0C_qJ5tRRtDkUNaIZLTg_hs1NkCsiDEIf'

function GetMap()
    {
        "use strict";
        
    var storeLocation = new Microsoft.Maps.Location(-37.8342303, 144.9818309);
    var storeLocation2 = new Microsoft.Maps.Location(-38.1489543, 144.3735935);
    var storeLocation3 = new Microsoft.Maps.Location(-33.8643134, 151.2124071);
    var storeLocation4 = new Microsoft.Maps.Location(-27.4718873, 153.0306594);
    
    var map = new Microsoft.Maps.Map('#map_melbourne', {
        center: storeLocation,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 17.5,
        disableScrollWheelZoom: true,
        disablePanning: true,
    });
        
    var map2 = new Microsoft.Maps.Map('#map_geelong', {
        center: storeLocation2,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 17.5,
        disableScrollWheelZoom: true,
        disablePanning: true,
    });
        
    var map3 = new Microsoft.Maps.Map('#map_sydney', {
        center: storeLocation3,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 17.5,
        disableScrollWheelZoom: true,
        disablePanning: true,
    });

    var map4 = new Microsoft.Maps.Map('#map_brisbane', {
        center: storeLocation4,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 17.5,
        disableScrollWheelZoom: true,
        disablePanning: true,
    });
        
    // Create infobox at the center of each map but don't show it.
        var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false
        });
        
        var infobox2 = new Microsoft.Maps.Infobox(map2.getCenter(), {
            visible: false
        });
        
        var infobox3 = new Microsoft.Maps.Infobox(map3.getCenter(), {
            visible: false
        });
        
        var infobox4 = new Microsoft.Maps.Infobox(map4.getCenter(), {
            visible: false
        });
        
    // Assign the infobox to a map instance
        infobox.setMap(map);
        infobox2.setMap(map2);
        infobox3.setMap(map3);
        infobox4.setMap(map4);
        
        var pin = new Microsoft.Maps.Pushpin(storeLocation, {
            title: 'IWF Melbourne',
        });
        
        var pin2 = new Microsoft.Maps.Pushpin(storeLocation2, {
            title: 'IWF Geelong',
        });
        
        var pin3 = new Microsoft.Maps.Pushpin(storeLocation3, {
            title: 'IWF Sydney',
        });
        
        var pin4 = new Microsoft.Maps.Pushpin(storeLocation4, {
            title: 'IWF Brisbane',
        });
        
        pin.metadata = {
            title: 'I Want Flowers, Melbourne',
            description: '169 Domain Rd <br> South Yarra, VIC 3141'
        };
        
        pin2.metadata = {
            title: 'I Want Flowers, Geelong',
            description: '4 Garden St <br> Geelong, VIC 3220'
        };
        
        pin3.metadata = {
            title: 'I Want Flowers, Sydney',
            description: '135 Macquarie St <br> Sydney, NSW 2000'
        };
        
        pin4.metadata = {
            title: 'I Want Flowers, Brisbane',
            description: '224 Alice St <br> Brisbane City, QLD 4000'
        };
        
        // Add the pushpin to the map
        map.entities.push(pin);
        map2.entities.push(pin2);
        map3.entities.push(pin3);
        map4.entities.push(pin4);
        
        Microsoft.Maps.Events.addHandler(pin, 'click', function pushpinClicked(e) {
            // Make sure the infobox has metadata to display.
            if (e.target.metadata) {
                // Set the infobox options with the metadata of the pushpin
                infobox.setOptions ({
                    location: e.target.getLocation(),
                    title: e.target.metadata.title,
                    description: e.target.metadata.description,
                    visible: true
                });
            }
        });
        
        Microsoft.Maps.Events.addHandler(pin2, 'click', function pushpin2Clicked(e) {
            if (e.target.metadata) {
                infobox2.setOptions ({
                    location: e.target.getLocation(),
                    title: e.target.metadata.title,
                    description: e.target.metadata.description,
                    visible: true
                });
            }
        });
        
        Microsoft.Maps.Events.addHandler(pin3, 'click', function pushpin3Clicked(e) {
            if (e.target.metadata) {
                infobox3.setOptions ({
                    location: e.target.getLocation(),
                    title: e.target.metadata.title,
                    description: e.target.metadata.description,
                    visible: true
                });
            }
        });
        
        Microsoft.Maps.Events.addHandler(pin4, 'click', function pushpin4Clicked(e) {
            if (e.target.metadata) {
                infobox4.setOptions ({
                    location: e.target.getLocation(),
                    title: e.target.metadata.title,
                    description: e.target.metadata.description,
                    visible: true
                });
            }
        });
    }