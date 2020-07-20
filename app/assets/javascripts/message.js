$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="messagebox">
          <div class="messageinfo">
            <div class="messageinfo__username">
              ${message.user_name}
            </div>
            <div class="messageinfo__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="message__content">
              ${message.content}
            </p>
            <img class="message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="messagebox">
        <div class="messageinfo">
          <div class="messageinfo__username">
            ${message.user_name}
          </div>
          <div class="messageinfo__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  };

  $('.form').on('submit', function(e){
    e.preventDefault()
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
      $('.send').prop('disabled', false);
      $('.chat__messagefield').animate({ scrollTop: $('.chat__messagefield')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
  });
});




