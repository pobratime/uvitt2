let niz = {
  0:"1.jpeg", 1:"2.webp", 2:"1.jpeg", 3:"5.webp", 4:"7.webp", 
  5:"3.jpeg", 6:"2.webp", 7:"4.jpg", 8:"6.jpeg", 9:"5.webp", 
  10:"8.jpg", 11:"4.jpg", 12:"6.jpeg", 13:"3.jpeg",
  14:"8.jpg", 15:"7.webp"
};

const table = document.getElementById("myTable"); 
const rows = table.rows; 

let counter = 0;

for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    for (let j = 0; j < cells.length; j++) {
        cells[j].innerHTML = `<img src="${niz[counter]}" alt="image" style="width:100px;">`;
        counter++;
    }
}
