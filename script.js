document.addEventListener('DOMContentLoaded', function () {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      if (document.getElementById('history-container')) {
        Handlebars.registerHelper('eq', function (a, b) {
          return a === b;
        });

        const template = Handlebars.compile(
          document.getElementById('history-template').innerHTML
        );
        document.getElementById('history-container').innerHTML = template(data);

        document.querySelectorAll('.history-title').forEach((button) => {
          button.addEventListener('click', function () {
            const details = document.getElementById(
              this.getAttribute('aria-controls')
            );
            const expanded = this.getAttribute('aria-expanded') === 'true';

            this.setAttribute('aria-expanded', !expanded);
            details.hidden = expanded;
          });
        });
      }
    })
    .catch((error) => console.error('Error loading JSON data:', error));
});
