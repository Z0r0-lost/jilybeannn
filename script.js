// DOM Elements
const body = document.body;

// Function to create hearts
function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heart.style.transform = `scale(${Math.random() + 0.5})`;
    body.appendChild(heart);

    // Remove the heart after animation
    setTimeout(() => heart.remove(), 6000);
  }
}

// Generate hearts on load and every few seconds
createHearts();
setInterval(createHearts, 5000);

// Messages to display
const messages = [
    "You're the best thing that's ever happened to me.🌟🌟🌟 \n And definitely, You being in a bad mood - i dont want that.\nits completely fine to have anger and frustration over something, and ik it was my fault to behave like a idiot at this time i am sorry again  ",

    "Ik you have been working hard alot, been doing assignments till 4am and 5am, I have seen it all. I am so proud of my girl, my hardworking pooookieeeeeeee. You will get the good results aswell and ik it. If I was there I would have celebrated every assignment completion with a small food treat.And I will once I come there.✨",
    
    "Its been just two days and I already feel like it's been 10 years of no call, ik I irritate you on calls, I just keep on yapping n yapping, but u always there to listen to me 🫂🫂🫂 It's just that I am missing you alot and I want to talk to you alotttt but u are busy in the project thing so I can't do anything but just to wait. Jaldi jaldi ye submission khatam karooo😤 bohot hogaya ab iss submissions ka.",
    "It's December, and I hope you will be with me for the next December and next to that and soo on for maybe around next 100000 Decembers till you get tired of me. I miss you alot these days alot and alot. I hope the feelings never fade and this continues for eternity, I have literally got my wife not just a girlfriend. I LOVE YOU AND I MISS YOU AND I LOVEEE YOUUUUYY AND I MISSS YOU AND I LOVEEEEEEEEEE YOUUUUYYUUUUUUUUUU❤️❤️❤️❤️❤️❤️❤️❤️",
    
    "Thank you for always being there for me. ❤️",
    "I love you more than words can ever express. 💖",
    "I am so grateful to have you in my life. 💕",
    "YOUR GATALU, YOUR BBG, YOUR UNCLE, YOUR BUDDHA, YOUR BACHHA IS WAITING FOR YOU TO GET BACKKKK ",

    "I hope tomorrow after you wake up, this brings up a smile to your face, and maybe your mood gets back to normal. Sorry again for my irritating behaviour, Sleep well my poookieee, Loveeeeeeeeee yaaaaaaaaaaaaaaaaaaaaaaaaa"
    

  ];
  
  let currentMessageIndex = 0;
  
  // DOM Elements
  const frontPage = document.getElementById('front-page');
  const messagePage = document.getElementById('message-page');
  const messageBox = document.getElementById('message-box');
  const clickMeButton = document.getElementById('click-me-button');
  const nextButton = document.getElementById('next-button');
  
  // Show the first message
  function showMessage() {
    messageBox.textContent = messages[currentMessageIndex];
  }
  
  // Event Listeners
  clickMeButton.addEventListener('click', () => {
    frontPage.classList.remove('active');
    frontPage.classList.add('hidden');
    messagePage.classList.add('active');
    showMessage();
  });
  
  nextButton.addEventListener('click', () => {
    currentMessageIndex++;
    if (currentMessageIndex < messages.length) {
      showMessage();
    } else {
      messageBox.textContent = "BY YOURS TRUELY - NERD BUDDHA UNCLE 💕";
      nextButton.style.display = 'none';
    }
    

  });
  