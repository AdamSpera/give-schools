$(window).on('load resize', function () {
  //Add/remove class based on browser size when load/resize
  var w = $(window).width();

  if (w >= 1200) {
    // if larger 
    $('#docs-sidebar').addClass('sidebar-visible').removeClass('sidebar-hidden');
  } else {
    // if smaller
    $('#docs-sidebar').addClass('sidebar-hidden').removeClass('sidebar-visible');
  }
});

$(document).ready(function () {
  /* ====== Toggle Sidebar ======= */
  $('#docs-sidebar-toggler').on('click', function () {
    if ($('#docs-sidebar').hasClass('sidebar-visible')) {
      $("#docs-sidebar").removeClass('sidebar-visible').addClass('sidebar-hidden');
    } else {
      $("#docs-sidebar").removeClass('sidebar-hidden').addClass('sidebar-visible');
    }
  });

  /* ===== Smooth scrolling ====== */
  $(document).on('click', 'a[href^="#"]:not(.expand)', function (e) {
    //store hash
    var target = this.hash;

    if (!$(this).is('.anchorjs-link')) {
      // e.preventDefault();
    }

    $('body').scrollTo(target, 250, { offset: -69, 'axis': 'y' });

    // Collapse sidebar after clicking
    if ($('#docs-sidebar').hasClass('sidebar-visible') && $(window).width() < 1200) {
      $('#docs-sidebar').removeClass('sidebar-visible').addClass('slidebar-hidden');
    }
  });

  /* wmooth scrolling on page load if URL has a hash */
  if (window.location.hash) {
    var urlhash = window.location.hash;
    $('body').scrollTo(urlhash, 0, { offset: -69, 'axis': 'y' });
  }

  $('code.split').not('.split2dots').html(function () {
    return '<span>' + $(this).html().split('___').join('</span>___<span>') + '</span>';
  });
  $('code.split2dots').html(function () {
    var split = $(this).html().split(',');
    for (let i = 0; i < split.length; i++) {
      var split2 = '<span class="sub">' + split[i].split(':').join('</span>:<span class="sub">') + '</span>';
      split[i] = '<span class="el">' + split2 + '</span>';
    }
    return split.join(',');
  });

  $('h1.docs-heading, h2.section-heading, h3.section-heading').append(function () {
    var id = $(this).closest('.docs-section, .docs-article').attr('id');
    return '<a class="anchorjs-link" aria-label="Anchor" href="#' + id + '" style="padding-left: 0.375em;">#</a>';
  });

  var search_list = [];
  $('h1.docs-heading, h2.section-heading, h3.section-heading').not('.hide-search').each(function (index, el) {
    var id = $(this).closest('.docs-section, .docs-article').attr('id');
    var docsTime = '';

    if ($(this).find('.docs-time').length) {
      docsTime = $(this).find('.docs-time').text();
    }

    search_list.push({
      "text": $(this).text().replace('#', '').replace('opcional', ''),
      "id": id,
      "docsTime": docsTime,
    });
  });
  const options = {
    includeScore: false,
    keys: ['text'],
    minMatchCharLength: 2,
    threshold: 0.5,
  };
  const fuse = new Fuse(search_list, options);

  $('[name="search"]').on('input', function (event) {
    const result = fuse.search($(this).val());
    var list = '';
    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      list += '<a href="#' + element.item.id + '">' + element.item.text.replace(element.item.docsTime, `<span>${element.item.docsTime}</span>`) + '</a>';
    }
    $(this).next('#results').html(list);
  });

  var Lversion = $('#changelogModal .modal-body h6').first().find('span').text().replace('Versión', '').replace('Version', '');;
  $('.site-logo .bg-primary').text('v' + Lversion);

  $('#changelogModal .modal-body ul a').click(function (event) {
    $('#changelogModal').modal('hide');
  });

  $('.modal').on('shown.bs.modal', function () {
    $(this).find('[autofocus]').focus();
  });

  setTimeout(() => {
    var el = $('.docs-nav .nav-link.active').first();
    if (el.length) {
      var elOffset = el.position().top;
      var elHeight = el.height();
      var windowHeight = $(window).height();
      var offset = 0;

      if (elHeight < windowHeight) {
        offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
      }
      else {
        offset = elOffset;
      }
      $('#docs-sidebar').animate({ scrollTop: offset }, 0);
    }
  }, 250);
});
document.body.classList.add("access-guaranted");
var forms = document.getElementsByClassName('needs-validation');
form.classList.add('was-validated');


// NEW GET CONTENT

document.getElementById('getData').addEventListener('click', async () => {
  // Define the URL of your Cloudflare function
  const url = 'https://give-schools.pages.dev/getData';

  // Send a GET request to the function
  fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
    .then(response => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      // Do something with the data
      console.log(data);
    })
    .catch(error => {
      // Handle errors, like network issues or invalid JSON
      console.error('There has been a problem with your fetch operation:', error);
    });

});