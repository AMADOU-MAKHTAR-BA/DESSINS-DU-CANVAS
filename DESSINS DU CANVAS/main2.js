

var w , h

export const tabJeuEchec = {
 
jeuEchec: ()=>{

const cnv1 = document.getElementById('cnv1'),
 w = cnv1.width = 455;
 h = cnv1.height = 455;

const ctx1 = cnv1.getContext('2d');

const couleursHexa = [
    "#000000", // Noir
    "#FFFFFF", // Blanc
    "#FF0000", // Rouge
    "#00FF00", // Vert
    "#0000FF", // Bleu
    "#FFFF00", // Jaune
    "#00FFFF", // Cyan
    "#FF00FF", // Magenta
    "#808080", // Gris
    "#A9A9A9", // Gris foncé
    "#D3D3D3", // Gris clair
    "#FF7F50", // Corail
    "#FF4500", // Orange rouge
    "#FFA500", // Orange
    "#FFD700", // Or
    "#FFFFE0", // Jaune clair
    "#ADFF2F", // Vert jaunâtre
    "#32CD32", // Vert lime
    "#98FB98", // Vert pâle
    "#00FA9A", // Vert de mer
    "#8A2BE2", // Bleu violet
    "#9400D3", // Violet foncé
    "#4B0082", // Indigo
    "#9932CC", // Violet
    "#8B0000", // Rouge foncé
    "#B22222", // Rouge brique
    "#FF6347", // Tomate
    "#FF1493", // Rose profond
    "#FF69B4", // Rose vif
    "#C71585", // Rose foncé
    "#800080", // Violet
    "#FFC0CB", // Rose
    "#F0E68C", // Kaki
    "#FFDAB9", // Pêche
    "#FFE4B5", // Blanched Almond
    "#FFEFD5", // Papaya Whip
    "#FFF0F5", // Lavender Blush
    "#E6E6FA", // Lavande
    "#D8BFD8", // Thistle
    "#DDA0DD", // Plum
    "#EE82EE", // Violet
    "#F5DEB3", // Blé
    "#DEB887", // Burlywood
    "#F4A460", // Sable
    "#D2691E", // Chocolat
    "#A0522D", // Sienna
    "#8B4513", // Brun
    "#A52A2A", // Brun
    "#C0C0C0", // Argent
    "#FFD700", // Or
    "#DAA520", // Or ancien
    "#FFF5EE", // Seashell
    "#F0FFF0", // Honeydew
    "#F5FFFA", // Mint Cream
    "#F0FFFF", // Azure
    "#E0FFFF", // Light Cyan
    "#B0E0E6", // Powder Blue
    "#AFEEEE", // Pale Turquoise
    "#87CEFA", // Light Sky Blue
    "#4682B4", // Steel Blue
    "#4169E1", // Royal Blue
    "#00008B", // Bleu marine
    "#0000CD", // Bleu moyen
    "#191970", // Midnight Blue
    "#F0E68C", // Kaki
    "#B22222", // Rouge brique
];


function rectangles(){
   setTimeout(rectangles , 1000);

ctx1.fillStyle = couleursHexa[Math.round(Math.random()*couleursHexa.length)];
  
  ctx1.strokeStyle = couleursHexa[Math.round(Math.random()*couleursHexa.length)];

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j += 2) {
    
    ctx1.fillRect(i * w / 8, h / 8 * (j + i % 2), w / 8, h / 8);
    ctx1.fill();
    }
  }
};
rectangles();

}

}
