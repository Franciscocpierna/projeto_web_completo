import $ from 'jquery';


const loadHtmlSuccessCallbacks = [];
export function onLoadHtmlSuccess(callback) {
  if (typeof callback === 'function') {
    loadHtmlSuccessCallbacks.push(callback);
  }
}
 
function loadIncludes(parent) {
  if (!parent) parent = 'body';
  $(parent)
    .find('[wm-include]')
    .each(function (i, e) {
      const url = $(e).attr('wm-include');
      $.ajax({
        url,
        success(data) {
          $(e).html(data);
          $(e).removeAttr('wm-include');
 
          loadHtmlSuccessCallbacks.forEach((callback) => callback(data));
          loadIncludes(e);
        },
        error(err) {
          console.error(`Falha ao carregar include: ${url}`, err);
        },
      });
    });
}
loadIncludes();