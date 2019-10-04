
$(document).ready(function () {

    $('.like-button__input').change(function() {
        const likeBlock = $(this).parents('.like-button');
        const likeNumberBlock = $(likeBlock).find('.like-button__number');
        const likeNumber = + $(likeNumberBlock).text();

        if (likeBlock.hasClass('like-button_liked')) {
            $(likeNumberBlock).text(likeNumber - 1);
        }
        else {
            $(likeNumberBlock).text(likeNumber + 1);
        }

        $(likeBlock).toggleClass('like-button_liked');
    });
    
});
