function content(){
    var headlinedata=document.getElementById('inpheadline').value;
    var contentdata1=document.getElementById('inpcontent1').value;
    var contentdata2=document.getElementById('inpcontent2').value;
    var contentdata3=document.getElementById('inpcontent3').value;

    var headline=document.getElementById('headline');
    var content1=document.getElementById('content1');
    var content2=document.getElementById('content2');
    var content3=document.getElementById('content3');
    
    var headline_color=document.getElementById('color_headline').value;
    var color_content1=document.getElementById('color_content1').value;
    var color_content2=document.getElementById('color_content2').value;
    var color_content3=document.getElementById('color_content3').value;

    headline.innerHTML=headlinedata;
    headline.style.color=headline_color;

    content1.innerHTML=contentdata1+" ";
    content1.style.color = color_content1;

    content2.innerHTML=contentdata2+" ";
    content2.style.color = color_content2;

    content3.innerHTML=contentdata3;
    content3.style.color = color_content3;
    
    // tagline.innerHTML=taglinedata;
    // tagline.style.color = color_tagline;
}
function add_ad_image(){
    var ad_image = document.getElementById('ad_image');
    var ad = document.getElementById('ad');

    var file = ad_image.files[0];
    if (file) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var img = new Image();
        img.src = e.target.result;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        ad.innerHTML = '';
        ad.appendChild(img);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image first.');
    }
}

function template_bg(){
    var content_image = document.getElementById('content_image');
    var template_1 = document.getElementById('template_1');

    var imfile = content_image.files[0];
    imfile.addEventListener('change', function() {
        const image = file.files[0];
        const bgUrl = URL.createObjectUrl(image);
        template_1.style.backgroundImage = `url(${bgUrl})`;
    });
}

function preview(){
    content();
    add_ad_image();
    template_bg();
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


function displayImage() {
    const input = document.getElementById('image-input');
    const container = document.getElementById('image-container');

    const file = input.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';

        // Clear previous content in the container
        container.innerHTML = '';

        // Append the image to the container
        container.appendChild(img);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image first.');
    }
  }


