function image_data(){
    var headlinedata=document.getElementById('inpheadline').value;
    var contentdata=document.getElementById('inpcontent').value;
    var taglinedata=document.getElementById('inptagline').value;
    var headline=document.getElementById('headline');
    var content=document.getElementById('content');
    var tagline=document.getElementById('tagline');
    headline.innerHTML=headlinedata;
    content.innerHTML=contentdata;
    tagline.innerHTML=taglinedata;
}

document.getElementById('extract').addEventListener('click', function () {
    html2canvas(document.getElementById('image')).then(function (canvas) {
        var imageData = canvas.toDataURL('image/jpeg');
        var link = document.createElement('a');
        link.href = imageData;
        link.download = 'Image.jpg';
        link.click();
    });
});