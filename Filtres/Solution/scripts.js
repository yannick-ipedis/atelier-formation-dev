
const filters = document.querySelectorAll('.filter');
const results = document.getElementById('results');
const text = " résultats trouvés";

filters.forEach(filter => { 

  filter.addEventListener('click', function() {

    document.querySelectorAll('.filter').forEach(b=>b.setAttribute('aria-checked',false));

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.projects [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show'); 
    });

    filter.setAttribute('aria-checked',true);


    if (!selectedFilter == 'all'){
      document.getElementById('results').innerHTML = itemsToShow.length + text;
    }
    else{
      document.getElementById('results').innerHTML = itemsToShow.length + text + document.getElementsByClassName("rouge").length + " rouges et " + document.getElementsByClassName("bleu").length + " bleus";
    }

  });
});