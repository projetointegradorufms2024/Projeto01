document.getElementById('form-doador').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por sua doação! Entraremos em contato em breve para combinar os detalhes.');
    this.reset();
  });
  
  document.getElementById('form-receptor').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sua solicitação foi registrada! Entraremos em contato assim que tivermos uma doação disponível.');
    this.reset();
  });