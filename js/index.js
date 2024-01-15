var frame = document.getElementById("frame");

function channel(file){
  frame.src=file;
}

function changeFont(font) {
  document.documentElement.style.setProperty('--font-family1', font);
}

function content(){
  var placedata=document.getElementById('inpplace').value;
  var headlinedata=document.getElementById('inpheadline').value;
  var contentdata1=document.getElementById('inpcontent1').value;
  var contentdata2=document.getElementById('inpcontent2').value;
  var contentdata3=document.getElementById('inpcontent3').value;
  var contentdata4=document.getElementById('inpcontent4').value;
  var datedata=document.getElementById('inpdate').value;

  var place=document.getElementById('place');
  var headline=document.getElementById('headline');
  var content1=document.getElementById('content1');
  var content2=document.getElementById('content2');
  var content3=document.getElementById('content3');
  var content4=document.getElementById('content4');
  var date=document.getElementById('date');
  
  var color_place=document.getElementById('color_place').value;
  var headline_color=document.getElementById('color_headline').value;
  var color_content1=document.getElementById('color_content1').value;
  var color_content2=document.getElementById('color_content2').value;
  var color_content3=document.getElementById('color_content3').value;
  var color_content4=document.getElementById('color_content4').value;
  var color_date=document.getElementById('color_date').value;

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


function extract(template_im){
  html2canvas(document.getElementById(template_im)).then(function (canvas) {
      var imageData = canvas.toDataURL('image/jpeg');
      var link = document.createElement('a');
      link.href = imageData;
      link.download = 'Image.jpg';
      link.click();
  });
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

