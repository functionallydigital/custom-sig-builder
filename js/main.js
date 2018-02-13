$(function() {
  setupCompanySelector();

  if (DETAILS_ARRAY.length > 1) {
    $('.company-selector').show();
  }

  $('#getSig').click(function(e) {
    e.preventDefault();
    createSignature();
  });

  // TODO enable copying functionality
  // $('#copySig').click(function(e) {
  //   console.log(document.queryCommandEnabled('copy'));
  //   // document.querySelector("#sig").select();
  //   // document.execCommand('copy');
  // })
});

function setupCompanySelector() {
  for (var i = 0; i < DETAILS_ARRAY.length; i++) {
    $('.company-selector').find('#company').append('<option value="' + DETAILS_ARRAY[i].companyName + '">' + DETAILS_ARRAY[i].companyName + '</option>');
  };
}

function createSignature() {
  var selectedCompanyDetails = findCompany();

  setPersonalDetails();
  setCompanyDetails(selectedCompanyDetails);

  $(".sig").show();
}

function findCompany() {
  var selectedCompany = $('#company').val();
  for (var i = 0; i < DETAILS_ARRAY.length; i++) {
    if (DETAILS_ARRAY[i].companyName === selectedCompany) {
      return DETAILS_ARRAY[i];
    }
  }
}

function setPersonalDetails() {
  $('.sig-name').text($('#name').val());
  $('.sig-job').text($('#job').val());
  $('.sig-telephone').text($('#telephone').val());
  $('.sig-email').attr('href','mailto:'+$('#email').val());
  $('.sig-email').text($('#email').val());
}

function setCompanyDetails(companyDetails) {
  $('.sig-company-image').attr('src', companyDetails.logoUrl);
  $('.sig-company-image').attr('alt', companyDetails.companyName);
  var addressArray = companyDetails.address.split(', ');
  $('.address-block').empty();
  for (var i = 0; i < addressArray.length; i++) {
    $('.address-block').append(addressArray[i] + '<br/>');
  }
  $('.sig-website').text(companyDetails.website)
  $('.sig-website').attr('href', companyDetails.website);
  $('#sig-reg-details').text(companyDetails.registrationMessage);
  $('#sig-disclaimer').text(companyDetails.disclaimer);
  setSocialMediaLinks(companyDetails);
}

function setSocialMediaLinks(companyDetails) {
  if (!companyDetails.twitterUrl) {
    $('.sig-twitter').hide();
  } else {
    $('.sig-twitter').attr('href', companyDetails.twitterUrl);
    $('.sig-twitter-handle').text(companyDetails.twitterHandle);
  }
  if (!companyDetails.linkedinUrl) {
    $('.sig-linkedin').hide();
  } else {
    $('.sig-linkedin').attr('href', companyDetails.linkedinUrl);
  }
}

