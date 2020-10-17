let likes = 0;
let zähler = 0;

setInterval(() => {

try{
	document.querySelector('svg[aria-label="Gefällt mir"]').parentNode;
} catch (e) {
	const arrow = document.querySelector('a.coreSpriteRightPaginationArrow');
	 arrow.click();
	}


    const heart = document.querySelector('svg[aria-label="Gefällt mir"]').parentNode;
    const arrow = document.querySelector('a.coreSpriteRightPaginationArrow');

    if (heart && zähler < 100) {
	heart.click()
        likes++;
	if (likes > 800){
		location.reload();
		location.reload(true);
	}
	zähler++;
        console.log(`You've liked ${likes} post(s)`);
    } 
    else {	
		console.log(`Break for ${zähler*1000} seconds`);
	  	var start = new Date().getTime();
  		for (var i = 0; i < 1e7; i++) {
   		 if ((new Date().getTime() - start) > zähler * 100000000){
     			 break;
    		}
  		}

	zähler = 0
	}

	arrow.click();
	


		
	
}, Math.random()*2000+3000);
