// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Obrigado por entrar em contato! Sua mensagem foi enviada.');
      });
    }
  });
  