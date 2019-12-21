//range
const warna = document.querySelectorAll("input[type='range']");
warna.forEach(function(slider){
    slider.addEventListener("input",function(){
        const r = document.querySelector("input[name='merah']").value;
        const g = document.querySelector("input[name='hijau']").value;
        const b = document.querySelector("input[name='biru']").value;
        const a = document.querySelector("input[name='alpha']").value;
        console.log(r,g,b,a);
        document.getElementById("tengah").style.backgroundColor = `rgba(${r},${g},${b},${a})`;
    })
})
//label
const labelWarna = document.querySelectorAll('label')
labelWarna[0].style.backgroundColor = 'red'
labelWarna[0].style.color = 'white'
labelWarna[1].style.backgroundColor = 'green'
labelWarna[1].style.color = 'white'
labelWarna[2].style.backgroundColor = 'blue'
labelWarna[2].style.color = 'white'
labelWarna[3].style.backgroundColor = 'black'
labelWarna[3].style.color = 'white'
for(let i=0; i<labelWarna.length; i++) {
    labelWarna[i].style.padding = '0.5vw'
}
//Buuton random
const buttonRand = document.getElementById('buttonRand')
buttonRand.addEventListener('click', function(){
    const rRand = Math.random()*255
    const gRand = Math.random()*255
    const bRand = Math.random()*255
    const aRand = Math.random()
    document.getElementById("tengah").style.backgroundColor = `rgba(${rRand},${gRand},${bRand},${aRand})`;
})
//h3
document.getElementById('arh').style.color = 'black'
//content
const tengah = document.getElementById('tengah')
tengah.style.textAlign = 'center'
tengah.style.padding = '1%'
const img = document.getElementById('img')
img.style.borderRadius = '50%'
img.style.height = '15vw'
const bio = document.getElementById('bio')
bio.style.textAlign = 'left'