
$(document).ready(function () {
  console.log('Getting data from Cloudflare D1...');

  Promise.all([getData(), getSchools()])
    .then(([data, schools]) => {
      var eventData = [];
      var schoolData = [];
      eventData = data.results;
      schoolData = schools.results;
      console.log('Data:', eventData);
      console.log('Schools:', schoolData);

      // For every school entry
      $.each(schoolData, function (index, item) {

        var html = `
        <article class="docs-article" id="${item.school}" name="${item.school}">
          <header class="docs-header">
            <h1 class="docs-heading">${item.school}</h1>
            <section class="docs-intro">
              <p>${item.description}</p>
            </section>
          </header>`;

        $.each(eventData, function (index, subitem) {
          if (subitem.school == item.school) {
            var subhtml = `
            <div class="ask-card" id="${subitem.school}-${index}">
              <div class="content-wrapper">
                <div class="text-section">
                  <h2 class="section-heading">${subitem.content_title}</h2>
                  <p>${subitem.content_description}</p>
                </div>
                <div class="info-section">
                  <h4>Donation Event</h4>
                  <div class="info">
                    <strong>Date: </strong> ${subitem.event_date}
                  </div>
                  <div class="info">
                    <strong>Time: </strong> ${subitem.event_time}
                  </div>
                  <div class="info">
                    <strong>Place: </strong> ${subitem.event_location}
                  </div>
                </div>
              </div>
            </div>`;
            html += subhtml;
          }
        });

        html += `</article>`;
        $('#populateDom').append(html);

      });

    })
    .catch(error => {
      console.error('Error:', error);
    });

});

var newElement = `<article class="docs-article" id="section-2" name="Our Lady Of Mercy Regional Catholic School">

  <header class="docs-header">
    <h1 class="docs-heading">Our Lady Of Mercy Regional Catholic School</h1>
    <section class="docs-intro">
      <p>
        Welcome to Our Lady of Mercy Regional Catholic School in Maple Glen, PA! Since opening in 2012, we've
        been providing a nurturing and quality Catholic education to our students from kindergarten through 8th
        grade. United under the collaborative efforts of three local parishes, we cherish our community's
        support. As we post to gather essential supplies, we're excited to continue fostering a warm and
        enriching learning environment for our wonderful students!
      </p>
    </section>
  </header>

  <div class="ask-card" id="item-2-1">
    <div class="content-wrapper">
      <div class="text-section">
        <h2 class="section-heading">Pens and Pencils</h2>
        <p>
          As we strive to equip every child with the necessary resources for a well-rounded education, we're
          reaching out to our supportive community to help us stock up on these indispensable items.
        </p>
      </div>
      <div class="info-section">
        <h4>Donation Event</h4>
        <div class="info">
          <strong>Date: </strong> February, 25th, 2023
        </div>
        <div class="info">
          <strong>Time: </strong> 9:00 AM - 12:00 PM
        </div>
        <div class="info">
          <strong>Place: </strong> School Main Entrance
        </div>
      </div>
    </div>
  </div>

  <div class="ask-card" id="item-2-1">
    <div class="content-wrapper">
      <div class="text-section">
        <h2 class="section-heading">Paper (Plain, Chardstock, A4)</h2>
        <p>
          Your generous contribution of paper will empower our students to capture thoughts, solve problems, and
          express their creativity freely, playing an invaluable role in nurturing the academic and creative
          spirits at Our Lady of Mercy Regional Catholic School.
        </p>
      </div>
      <div class="info-section">
        <h4>Donation Event</h4>
        <div class="info">
          <strong>Date: </strong> February, 25th, 2023
        </div>
        <div class="info">
          <strong>Time: </strong> 9:00 AM - 12:00 PM
        </div>
        <div class="info">
          <strong>Place: </strong> School Main Entrance
        </div>
      </div>
    </div>
  </div>

  <div class="ask-card" id="item-2-1">
    <div class="content-wrapper">
      <div class="text-section">
        <h2 class="section-heading">Any Art Supplies</h2>
        <p>
          Your generous contribution of art supplies will empower our students to capture thoughts, solve
          problems, and express their creativity freely, playing an invaluable role in nurturing the academic
          and creative spirits at Our Lady of Mercy Regional Catholic School.
        </p>
      </div>
      <div class="info-section">
        <h4>Donation Event</h4>
        <div class="info">
          <strong>Date: </strong> February, 25th, 2023
        </div>
        <div class="info">
          <strong>Time: </strong> 9:00 AM - 12:00 PM
        </div>
        <div class="info">
          <strong>Place: </strong> School Main Entrance
        </div>
      </div>
    </div>
  </div>

</article>`