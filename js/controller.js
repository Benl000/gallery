'use strict';

$(onInit);

function onInit() {
  onRenderProtfolios();
  $('.submit-mail').click(onSubmit);
}

function onRenderProtfolios() {
  var portfoliosProj = getProtfoliosForDisplay();
  var strHTML = portfoliosProj.map((proj) => {
    return `<div class="col-md-4 col-sm-6 portfolio-item" >
    <a onclick="onRenderModal('${proj.name}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal
    ">
    <div class="portfolio-hover">
    <div class="portfolio-hover-content">
    <i class="fa fa-plus fa-3x"></i>
    </div>
    </div>
    <img class="img-fluid" src="img/proj-image/${proj.name}.jpg" alt="${proj.name}">
    </a>
    <div class="portfolio-caption">
    <h4>${proj.name}</h4>
    <p class="text-muted">${proj.title}</p>
    </div></div>`;
  }).join('');
  $('.portfolios').html(strHTML);
}

function onRenderModal(projName) {
  var portfoliosProj = getProtfoliosForDisplay();
  var currProj = portfoliosProj.find((proj) => (proj.name === projName));
  var strHTML = `<div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${currProj.name}</h2>
                    <p class="item-intro text-muted">${currProj.title}</p>
                    <img class="img-fluid d-block mx-auto" src="img/proj-image/${currProj.name}.jpg" alt="${currProj.name}">
                    <p>${currProj.desc}</p>
                    <ul class="list-inline">
                    <li><a href="${currProj.url}" target="_blank">${currProj.name}</a></li>
                      <li>Date: ${currProj.publishedAt}</li>
                      <li>Category: ${currProj.labels}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  $('.modals').html(strHTML);
}

function onSubmit() {
  var subject = $('input[name=Subject]').val();
  var message = $('input[name=Message]').val();
  window.open(`http://mail.google.com/mail/?view=cm&fs=1&to=benl000100@gmail.com&su=${subject}&body=${message}`);
}