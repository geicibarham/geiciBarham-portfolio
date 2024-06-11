document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi, I'm Geici!";
    const typewriterElement = document.getElementById('typewriter');
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
  
    typeWriter();
  });