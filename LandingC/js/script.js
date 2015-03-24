function GetCount(){
		
		        dateNow = new Date();                                             
		        amount = dateFuture.getTime() - dateNow.getTime();                
		        delete dateNow;
		
		        if(amount < 0){
						location.href=urlsitio;
		        }
		        else{
		                days=0;hours=0;mins=0;secs=0;out="";
		
		                amount = Math.floor(amount/1000);
		
		                days=Math.floor(amount/86400);
		                amount=amount%86400;
		
		                hours=Math.floor(amount/3600);
		                amount=amount%3600;
		
		                mins=Math.floor(amount/60);
		                amount=amount%60;
		
		                secs=Math.floor(amount);
		
		                if(days != 0){out += days +" dia"+((days!=1)?"s":"")+", ";}
		                if(days != 0 || hours != 0){out += hours +" hora"+((hours!=1)?"s":"")+", ";}
		                if(days != 0 || hours != 0 || mins != 0){out += mins +" minuto"+((mins!=1)?"s":"")+", ";}
		                out += secs +" segundos";
		                document.getElementById('countbox').innerHTML=out;
		
		                setTimeout("GetCount()", 1000);
		        }
		}