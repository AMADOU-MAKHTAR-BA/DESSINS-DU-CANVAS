var cnv4 , ctx4 , ecrituteTaille , large , longue


cnv4 = document.getElementById('cnv4');

longue = cnv4.height = 455;
large = cnv4.width = 455;
 

ctx4 = cnv4.getContext('2d');
//ecrituteTaille = ctx4.font = "1px sansSerif";
ctx4.fillStyle = '#FFFFFF'

//ctx4.lineWidth = 1;

export const dessinPerso =  {
  dessine:() => {
    
    ctx4.fillRect(0 , 0 , large , longue);
    ctx4.fill();
    
    
        ctx4.fillStyle = 'black'
    
    ctx4.beginPath();
    ctx4.arc(large/2 , 400 , 30 , 0 , Math.PI*2 );
    ctx4.fill();
    ctx4.closePath();
    
   
  }
}