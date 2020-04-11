// $(function() {
//     $("#upload").change(function(e) {
//         $("#preview").css("color","#e1e2e4");
//         var imgBox = e.target;
//         uploadImg($('#preview'), imgBox)
//     });
//     function uploadImg(element, tag) {
//         var file = tag.files[0];
//         var imgSrc;
//         if (!/image\/\w+/.test(file.type)) {
//             alert("这里需要的是图片哦~");
//             return false;
//         }
//         var reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = function() {
//             console.log(this.result);
//             imgSrc = this.result;
//             var imgs = document.createElement("img");
//             $(imgs).attr("src", imgSrc);
//             element.append(imgs);
//         };
//     }
// })
function changepic() {
    $("#prompt3").css("display", "none");
    var reads = new FileReader();
    f = document.getElementById('file').files[0];
    reads.readAsDataURL(f);
    reads.onload = function(e) {
        document.getElementById('img3').src = this.result;
        $("#img3").css("display", "block");
    };
}