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
// $(function(){
//   $('.box1').hide(2000);
// });


// 「マウスオーバー・マウスアウト」イベントを設定
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });
// class属性を追加する／解除

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// 「マウスクリック」イベントを設定


// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext')
//   });
// });