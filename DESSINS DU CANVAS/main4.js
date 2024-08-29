var long , larg , distance , cnv3 , ctx3 , tailleEcriture , ltre  , lettre1 , lettre2

cnv3 = document.getElementById('cnv3');

long = cnv3.height = 455;
larg = cnv3.width = 455;
distance = 70;

  

ctx3 = cnv3.getContext('2d');
tailleEcriture = ctx3.font = "70px sansSerif";
ctx3.lineWidth = 4;
const couleursSombresVariees = [
 "#8B0000", // Dark Red
 "#A52A2A", // Brown
 "#800000", // Maroon
 "#B22222", // Firebrick
 "#8B4513", // SaddleBrown
 "#2F4F4F", // Dark Slate Gray
 "#00008B", // Dark Blue
 "#000080", // Navy
 "#191970", // Midnight Blue
 "#006400", // Dark Green
 "#556B2F", // Dark Olive Green
 "#8B008B", // Dark Magenta
 "#4B0082", // Indigo
 "#483D8B", // Dark Slate Blue
 "#2E8B57", // Sea Green
 "#6B8E23", // Olive Drab
 "#808000", // Olive
 "#8B0000", // Dark Red
 "#4682B4", // Steel Blue
 "#5F9EA0", // Cadet Blue
 "#7B68EE", // Medium Slate Blue
 "#6A5ACD", // Slate Blue
 "#8B4513", // Saddle Brown
 "#7F0000", // Dark Red
 "#8B008B", // Dark Magenta
 "#483D8B", // Dark Slate Blue
 "#2F4F4F", // Dark Slate Gray
 "#228B22", // Forest Green
 "#800080", // Purple
 "#4B0082", // Indigo
 "#6B8E23", // Olive Drab
 "#696969" // Dim Gray
 ];
 ltre='ABCDEFGHIJKLMNOÕPQRSTUVWXYZ';



export  const ecrireNom =  {
  nom:()=>{
    
    
 function name() {
   
     ctx3.fillStyle = '#FFFFFF';
     ctx3.fillRect(0 , 0, long , larg);
     ctx3.fill();
   
   setTimeout(name , 1000);
   
        /****TEXTES PLEINS****/
   
    for (var i = 0; i < 6; i++) {
      
 lettre1 = ltre.charAt(Math.trunc(Math.random()*ltre.length));

  ctx3.fillStyle = couleursSombresVariees[Math.round(Math.random()*couleursSombresVariees.length)];
       
      
     ctx3.fillText( lettre1 , i*distance +35 , 100  );
      ctx3.fill();
      ctx3.stroke();
    };
    
       /****TEXTES CREUS****/
    
    for (var k = 0; k < 5; k++) {

   lettre2 = ltre.charAt(Math.trunc(Math.random()*ltre.length));

      ctx3.strokeStyle = couleursSombresVariees[Math.round(Math.random() * couleursSombresVariees.length)];
      
      
      ctx3.strokeText(lettre2 , k * distance + 55, 300);
      ctx3.stroke();
    }
    
  };
  name();

}


}