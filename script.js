window.addEventListener("load", () => {
  document.querySelectorAll(".about-title, .about-text").forEach(el => {
    el.style.animationPlayState = "running";
  });
});


const revealElements = document.querySelectorAll(
  ".hero h1, .hero p, .stat, .project-card, .contact-left, .contact-right"
);
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
      el.classList.add("show");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


const counters = document.querySelectorAll(".stat h3");
let counterStarted = false;
function startCounter(){
  if(counterStarted) return;
  counters.forEach(counter=>{
    const target = +counter.innerText.replace("+","").replace("%","");
    let count = 0;
    const speed = 30;
    const update = ()=>{
      if(count < target){
        count++;
        counter.innerText = counter.innerText.includes("%") ? count+"%" : count+"+";
        setTimeout(update, speed);
      }
    };
    update();
  });
  counterStarted = true;
}
window.addEventListener("scroll", ()=>{
  const stats = document.querySelector(".stats");
  if(!stats) return;
  const statsTop = stats.getBoundingClientRect().top;
  if(statsTop < window.innerHeight * 0.8){
    startCounter();
  }
});


function validateForm(){
  const form = document.getElementById("contactForm");
  const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Your Email"]').value.trim();
  const subject = form.querySelector('input[placeholder="Subject"]').value.trim();
  const message = form.querySelector('textarea[placeholder="Your Message"]').value.trim();
  if(!name || !email || !subject || !message){
    alert("Please fill all required fields!");
    return;
  }
  alert("Message sent successfully");
  console.log(name,email,subject,message);
  form.reset();
}


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});
