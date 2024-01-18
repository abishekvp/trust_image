document.getElementById('fontSelector').addEventListener('change', function() {
  var selectedFont = this.value;
  $('.template-image').css('fontFamily', selectedFont + ', sans-serif');
});
$('.template').css('display','none');

function close(){
  $('#preview').css('display','none')
  $('.template').css('display','none');
}

function clear_page(){
  window.localStorage.clear();
  close();
}

function set_template(temp_id){
  window.localStorage.setItem("template_id",temp_id);
  close();
  if(temp_id==="template1"){
    $('.template-section-1').css('display','block');
    $('#preview').attr('src','./img/template1.jpg')
  }else if(temp_id==="template2"){
    $('.template-section-2').css('display','block');
    $('#preview').attr('src','./img/template2.jpeg')
  }else if(temp_id==="template3"){
    $('.template-section-3').css('display','block');
    $('#preview').attr('src','./img/template3.jpg')
  }else if(temp_id==="template4"){
    $('.template-section-4').css('display','block');
    $('#preview').attr('src','./img/template4.png')
  }
  $('#preview').css('display','block');
}

function frmid(id){
  return document.getElementById(id);
}
function template3content(){
  var inpnews1=frmid('inpnews1').value;
  var inpnews2=frmid('inpnews2').value;
  var inpnews3=frmid('inpnews3').value;
  var inpnews4=frmid('inpnews4').value;
  frmid('cont1').innerHTML=inpnews1;
  frmid('cont2').innerHTML=inpnews2;
  frmid('cont3').innerHTML=inpnews3;
  frmid('cont4').innerHTML=inpnews4;

}
function template2content(){
  var date=frmid('date2');
  var datedata=frmid('inpdate2').value;
  var content=frmid('content')
  var contentdata=frmid('inpcontent').value;
  
  date.innerHTML=datedata.toString().split("-")[1]+"/"+datedata.split("-")[2];
  content.innerHTML=contentdata;
}

function template1content(){
  var tlbrkdata=frmid('inptlbrk').value;
  var tlplacedata=frmid('inptlplace').value;
  var placedata=frmid('inpplace').value;
  var headlinedata=frmid('inpheadline').value;
  var contentdata1=frmid('inpcontent1').value;
  var contentdata2=frmid('inpcontent2').value;
  var contentdata3=frmid('inpcontent3').value;
  var contentdata4=frmid('inpcontent4').value;
  var datedata=frmid('inpdate').value;

  var tn_1=frmid('tn-1');
  var tn_2=frmid('tn-2');
  var place=frmid('place');
  var headline=frmid('headline');
  var content1=frmid('content1');
  var content2=frmid('content2');
  var content3=frmid('content3');
  var content4=frmid('content4');
  var date=frmid('date');
  
  var color_tlbrk=frmid('color_tlbrk').value;
  var color_tlplace=frmid('color_tlplace').value;
  var color_place=frmid('color_place').value;
  var headline_color=frmid('color_headline').value;
  var color_content1=frmid('color_content1').value;
  var color_content2=frmid('color_content2').value;
  var color_content3=frmid('color_content3').value;
  var color_content4=frmid('color_content4').value;
  var color_date=frmid('color_date').value;

  tn_1.innerHTML=tlbrkdata;
  tn_1.style.color=color_tlbrk;

  tn_2.innerHTML=tlplacedata;
  tn_2.style.color=color_tlplace;

  place.innerHTML=placedata;
  place.style.color=color_place;

  headline.innerHTML=headlinedata;
  headline.style.color=headline_color;
  
  content1.innerHTML=contentdata1+" ";
  content1.style.color = color_content1;
  
  content2.innerHTML=contentdata2+" ";
  content2.style.color = color_content2;
  
  content3.innerHTML=contentdata3+" ";
  content3.style.color = color_content3;
  
  content4.innerHTML=contentdata4;
  content4.style.color = color_content4;

  date.innerHTML=datedata;
  date.style.color = color_date;
}


function load_image(){
  var id=window.localStorage.getItem('template_id')
  window[id+"content"]();
  if(id==="template3"){
    time_conv();
  }
  preview(id);
}

function preview(id){
  html2canvas(document.getElementById(id)).then(function (canvas) {
    var imageData = canvas.toDataURL('image/jpeg');
    var link = document.createElement('a');
    link.href = imageData;
    document.getElementById('preview').src = imageData;
  });
}

function extract(){
  var id=localStorage.getItem("template_id")
  html2canvas(document.getElementById(id)).then(function (canvas) {
      var imageData = canvas.toDataURL('image/jpeg');
      var link = document.createElement('a');
      link.href = imageData;
      link.download = 'Image.jpg';
      link.click();
  });
  clear_page();
}

function main_image(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#main_image').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function main_image2(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#main_image2').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function news_image1(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#news_image1').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function news_image2(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#news_image2').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function news_image3(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#news_image3').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function news_image4(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#news_image4').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function convertDateFormat(inputDate) {
  var dateObject = new Date(inputDate);
  var day = dateObject.getDate();
  var month = dateObject.toLocaleString('default', { month: 'short' });
  var year = dateObject.getFullYear();
  var convertedDate = day + ' ' + month.toUpperCase() + ' ' + year;
  return convertedDate;
}

function time_conv() {
  var time = $('#timedate').val();
  if(time){}else{alert("Fill time and date");$('#timedate').focus();}
  var date=convertDateFormat(time.split("T")[0]);
  var parts = time.split("T")[1].split(':');
  var hours = parseInt(parts[0], 10);
  var minutes = parts[1];
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  var timeString = hours + ':' + minutes + ' ' + ampm;
  frmid('datetime-date').innerHTML=date;
  frmid('datetime-time').innerHTML=timeString;
}

window.onresize = function(event) {
  location.reload();
};


function identify_dhina(){
  const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  
  if (isMobileUserAgent || isTouchDevice) {
      $("section").css('display','none');
      $("div").css('display','none');
      $("img").css('display','none');
      $("nav").css('display','none');
      $("h1").css('display','none');
      frmid('baadu').innerHTML="phonela varathuda baadu, mooditu lapla parra mairu";
  }

}
