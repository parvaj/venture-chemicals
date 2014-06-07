var $collectionHolder;
var $collectionHolder2;

var $addPropertyLink = jQuery("button#add-properties");
var $addShippingLink = jQuery("button#add-shipping");

jQuery(document).ready(function(e) {

    $collectionHolder = jQuery('div.add-properties');
    $collectionHolder2 = jQuery('div.add-shipping');


    $addPropertyLink.on('click', function(e) {
        e.preventDefault();
        addTagForm($collectionHolder, "property");
    });

    $addShippingLink.on('click', function(e) {
        e.preventDefault();
        addTagForm($collectionHolder2, "shipping");
    });
});


function addTagFormDeleteLink($tagFormLi) {
    var $removeFormA = jQuery('<div class="row"><div class="col-md-10"></div><div class="col-md-2"><a class="del_prop" href="#">Delete</a></div></div>');
    $tagFormLi.after($removeFormA);

    $removeFormA.on('click', function(e) {
        e.preventDefault();

        $tagFormLi.remove();
        $removeFormA.remove();
    });
}

function addTagForm($collectionHolder, $container) {
    var prototype = $collectionHolder.data('prototype');
    var index = jQuery("div."+$container).length;
    var newForm = prototype.replace(/__name__/g, index);
    var str = "<div class='row "+$container+"'></div>";
    var $newFormLi = jQuery(str).append(newForm);

    $collectionHolder.before($newFormLi);
    addTagFormDeleteLink($newFormLi);
}