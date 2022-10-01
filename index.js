let button = document.querySelectorAll(".pushable");

function consNotify() {
    alert("Item Purchased")
    console.log("I was purchased");
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});
