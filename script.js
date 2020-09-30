var body = document.body;
 //Array
var friend_name =   ['Jeff', 'kevin', 'Markwood', 'James ', 'Chris'];
var place_name = ['the horse shed', 'the window', 'the hub', 'the south side', 'the restroom','the Market', 'the brige', 'the police station', 'the bird house', 'the zoo'];
var weapon_name =    ['pen', 'phone', 'teeth', 'glass bottle','','words','coffee-cup', 'me', 'chair', 'tv', 'pill', 'brick', 'butter', 'nail', 'grape','coldpaintballs', 'you', 'hotdog', 'water', 'acid'];


//insert 100 h3 elements loop
$(document).ready(function(){
    for (var i=1; i<101; i++) {
            var h3 = $('<h3> Accusation ' + i + '</h3>');
            $(body).append(h3);
            var trigger = randomAlert(i);
            h3.click(trigger);
    }
  
    function randomAlert(num) {
        return function() {
            var name = num % friend_name.length;
                console.log(name);
            var place = num % place_name.length;
                console.log(place);
            var weapon = num % weapon_name.length;
                console.log(weapon);
            alert('I accuse ' + friend_name[name] + ' with the ' + weapon_name[weapon] + ' in the ' + place_name[place] + '!');  
        }
    }
})
