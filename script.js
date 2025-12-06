  <script>
   function createFireworks(event) {
        const colors = ['#FF0000', '#0000FF', '#FFFF00'];
        const container = document.getElementById('fireworksContainer');
        const x = event.clientX;
        const y = event.clientY;

        for (let i = 0; i < 30; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          const color = colors[Math.floor(Math.random() * colors.length)];
          particle.style.background = color;
          particle.style.width = '10px';
          particle.style.height = '10px';
          particle.style.borderRadius = '50%';
          particle.style.left = x + 'px';
          particle.style.top = y + 'px';

          const angle = (Math.PI * 2 * i) / 30;
          const distance = 100 + Math.random() * 100;
          const tx = Math.cos(angle) * distance;
          const ty = Math.sin(angle) * distance;

          particle.style.setProperty('--tx', tx + 'px');
          particle.style.setProperty('--ty', ty + 'px');

          container.appendChild(particle);
          setTimeout(() => particle.remove(), 1000);
        }
      }

      function openModal(projectIndex) {
        document.getElementById('modal' + projectIndex).style.display = 'block';
      }

      function closeModal(projectIndex) {
        document.getElementById('modal' + projectIndex).style.display = 'none';
      }

      window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
          event.target.style.display = 'none';
        }
      }
      function createFireworks(event) {
        const colors = ['#FF0000', '#0000FF', '#FFFF00'];
        const container = document.getElementById('fireworksContainer');
        const x = event.clientX;
        const y = event.clientY;

        for (let i = 0; i < 30; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          const color = colors[Math.floor(Math.random() * colors.length)];
          particle.style.background = color;
          particle.style.width = '10px';
          particle.style.height = '10px';
          particle.style.borderRadius = '50%';
          particle.style.left = x + 'px';
          particle.style.top = y + 'px';

          const angle = (Math.PI * 2 * i) / 30;
          const distance = 100 + Math.random() * 100;
          const tx = Math.cos(angle) * distance;
          const ty = Math.sin(angle) * distance;

          particle.style.setProperty('--tx', tx + 'px');
          particle.style.setProperty('--ty', ty + 'px');

          container.appendChild(particle);
          setTimeout(() => particle.remove(), 1000);
        }
      }
         const greeting = document.getElementById('greeting');

      greeting.addEventListener('mouseenter', function() {
        greeting.textContent = 'The Creator of This Website';
      });

      greeting.addEventListener('mouseleave', function() {
        greeting.textContent = "Hi, I'm Brionna! 😊";
      });  padding: 15px 30px;
  font-size: 18px;
  background-color: #A7C7E7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}
    </script>