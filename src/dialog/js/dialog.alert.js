/**
 * mdui.alert()
 * =============================================================================
 */

mdui.alert = function(content, title, onConfirm, options){

  // title 参数可选
  if(typeof title === 'function'){
    title = '';
    onConfirm = arguments[1];
    options = arguments[2];
  }
  if(typeof onConfirm === 'undefined'){
    onConfirm = function(){}
  }
  if(typeof options === 'undefined'){
    options = {};
  }

  /**
   * 默认参数
   */
  var DEFAULT = {
    confirmText: 'ok',             // 按钮上的文本
    history: true,                 // 监听 hashchange 事件
    modal: false,                  // 是否模态化提示框，为 false 时点击提示框外面区域关闭提示框，为 true 时不关闭
    closeOnEsc: true               // 按下 esc 关闭提示框
  };

  options = $.extend(DEFAULT, options);

  return mdui.dialog({
    title: title,
    content: content,
    buttons: [
      {
        text: options.confirmText,
        bold: false,
        close: true,
        onClick: onConfirm
      }
    ],
    cssClass: 'md-dialog-alert',
    history: options.history,
    modal: options.modal,
    closeOnEsc: options.closeOnEsc
  });
};