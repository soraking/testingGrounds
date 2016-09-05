(function($){

  $.fn.skmodal = function(properties, options){

    var settings = $.extend({
      url: "NOT OPTIONAL",
      hideClass: 'hidden'
    }, properties);


    var defaults = {
      url: url,
      beforeClose: function(){

      },
      afterClose: function(){

      }
    };

    $.extend(this, defaults, options);



    function close() {
      
    }












    return this;

  };


}(jQuery));
