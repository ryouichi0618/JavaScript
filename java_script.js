// 「alertについて」

// alert("Hello World");



// 「変数について」
// var hello = "Hello, World";
// alert(hello);



// 「条件分岐について」

// var orange = 120;
// var apple =120;

// if(orange < apple) {
//   alert("みかんの方が安い");
// } else if(orange == apple){
//   alert("みかんもりんごも同じ値段");
// } else{
//   alert("りんごの方が安い");
// }



// 「繰り返し処理について」
// while文

// var max = 100;
// var num = 1;
// var count = 0;

// while(num < max){
//  num *= 2;
//  count += 1;
// }
//  alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');
// }



// do while文

// var max = 100;
// var num = 1;
// var count = 0;

// do{
//   alert("計算を行います");
// }while(num == max);
 

// for文


// var num = 0;

// for(var i = 1; i < 11; i++){
//   num += i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');





// var i;
// var num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');




// 「関数について」

// var alertString = addString("WebCamp");

// alert(alertString);

// function addString(strA){
//   var addStr = "Hello" +strA;
//   return addStr;
// }



// 「入力ダイアログで値を入力」

// var promptStr = prompt('何か好きな文字を入力してください。');
// var likeDrink = prompt('好きな飲み物を入力してください');

// alert(promptStr);
// alert(likeDrink);


// 「複数の関数定義」

// var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// alert('あなたの選んだ手は' + user_hand + 'です。');


// 「ジャンケンプログラム作成」

var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選択してください。')

var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand(){
  var js_hand_num = Math.floot( Math.random() * 3 );
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }
  return hand_name;
}

function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 );
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}


function winLose(user, js){
  var winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}