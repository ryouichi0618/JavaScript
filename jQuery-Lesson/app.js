// 基本文

// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });


// jQueryを使って書き換え
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });



// 上から下へスライド

// $(function(){
//   $('.box1').slideDown(3000);
// });

// 下から上へスライド

// $(function(){
//   $('.box1').slideUp(3000);
// });


// 非表示の要素をjQueryで表示させる
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// 表示されている要素をjQueryで非表示にする
$(function(){
  $('.box1').hide(2000);
});