$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="chat__messagefield__messagebox" data-message-id=${message.id}>
          <div class="chat__messagefield__messageinfo">
            <div class="chat__messagefield__username">
              ${message.user_name}
            </div>
            <div class="chat__messagefield__messageinfo__date">
              ${message.created_at}
            </div>
          </div>
          <div class="chat__messagefield__message">
            <p class="chat__messagefield__message__content">
              ${message.content}
            </p>
            <img class="chat__messagefield__message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="chat__messagefield__messagebox" data-message-id=${message.id}>
        <div class="chat__messagefield__messageinfo">
          <div class="chat__messagefield__messageinfo__username">
            ${message.user_name}
          </div>
          <div class="chat__messagefield__messageinfo__date">
            ${message.created_at}
          </div>
        </div>
        <div class="chat__messagefield__message">
          <p class="chat__messagefield__message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.chat__messagefield').append(html);      
      $('form')[0].reset();
      $('.chat__messagefield').animate({ scrollTop: $('.chat__messagefield')[0].scrollHeight});
      $('.send').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.send').prop("disabled", false);
    });
  });

// 以下の記述を削除
  // let reloadMessages = function() {
  //   //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
  //   let last_message_id = $('.chat__messagefield__messagebox:last').data("message-id") || 0;
  //   $.ajax({
  //     //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
  //     url: "api/messages",
  //     //ルーティングで設定した通りhttpメソッドをgetに指定
  //     type: 'get',
  //     dataType: 'json',
  //     //dataオプションでリクエストに値を含める
  //     data: {id: last_message_id}
  //   })
  //   .done(function(messages) {
  //     // 更新するメッセージがなかった場合は.doneの後の処理が動かないようにする
  //     if (messages.length !== 0) {
  //       //追加するHTMLの入れ物を作る
  //       let insertHTML = '';
  //       //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
  //       $.each(messages, function(i, message) {
  //         insertHTML += buildHTML(message)
  //       });
  //       //メッセージが入ったHTMLに、入れ物ごと追加
  //       $('.chat__messagefield').append(insertHTML);
  //       $('.chat__messagefield').animate({ scrollTop: $('.chat__messagefield')[0].scrollHeight});
  //     }
  //   })
  //   .fail(function() {
  //     alert('error');
  //   });
  // };
  // setInterval(reloadMessages, 7000);
});