function AjCours(image, title, price){
    document.getElementById("me").innerHTML +='<div ><img src="'+ image +'" alt="" > <p >'+ title +'</p> <span>'+ price +'</span></div> '
}



let tab = new Array();

for (let i = 0; i < 3; i++) {
    tab.push(courses[Math.floor(Math.random() * courses.length)])
}
 
tab.forEach(element => {
    AjCours(element.image, element.title, element.price)
});


