 //tab--v1
 $('.c-tab-v1__tab-1d').click(
    function(){
        var $tabV1_Root = $(this).parents('.c-tab-v1');
        var tabV1_clickedIndex = $tabV1_Root.find('.c-tab-v1__tab-1d').index(this);
        $tabV1_Root.find('.c-tab-v1__tab-1d').removeClass('m-activeTab').eq(tabV1_clickedIndex).addClass('m-activeTab');
        $tabV1_Root.find('.c-tab-v1__body-1d').removeClass('m-active').eq(tabV1_clickedIndex).addClass('m-active');
});

//modal--v1
$('.c-modal-v1__trigger').click(function(){
    var $getModaV1__wrapper = $(this).parents('.c-modal-v1__root').find('.c-modal-v1__wrapper');
    $getModaV1__wrapper.fadeIn();
    $getModaV1__wrapper.find('.c-modal-v1__close').click(function(){
        $getModaV1__wrapper.fadeOut();
    });
});