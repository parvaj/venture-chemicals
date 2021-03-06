function getCustomerData() {
    jQuery('select#venture_pipelinebundle_pipeline_customer').prop('selected', true).change(function(){
        var id =  jQuery(this).val();
        var url = Routing.generate('venture_customer_details_from_pipe_line');

        jQuery.post(url, {'customerId': id}, function(result){
            jQuery("input#venture_pipelinebundle_pipeline_contact").val(result.contact);
            jQuery("input#venture_pipelinebundle_pipeline_phone").val(result.phone);
            jQuery("input#venture_pipelinebundle_pipeline_email").val(result.email);
        });
    });
}

function getStageData() {
    jQuery('select#venture_pipelinebundle_pipeline_stage').prop('selected', true).change(function(){
        var id =  jQuery(this).val();
        var url = Routing.generate('venture_stage_details_from_pipe_line');

        jQuery.post(url, {'stageId': id}, function(result){
            jQuery("input#venture_pipelinebundle_pipeline_probability").val(result.name);
        });
    });
}

jQuery(document).on("focus","input.total", function(e) {
    var index = jQuery("input.total").index(jQuery(this));

    var value1 = parseFloat(jQuery("input.firstQt").eq(index).val());
    var value2 = parseFloat(jQuery("input.secondQt").eq(index).val());
    var value3 = parseFloat(jQuery("input.thirdQt").eq(index).val());
    var value4 = parseFloat(jQuery("input.fourthQt").eq(index).val());

    jQuery("input.total").eq(index).val(value1+value2+value3+value4);
});


var $collectionHolder;
var $collectionHolder2;

var $addNotesLink = jQuery("button#add-notes")
var $addYearSalesLink = jQuery("button#add-year-sales")


jQuery(document).ready(function(e) {
    getCustomerData();
    getStageData();

    $collectionHolder = jQuery('div.add-notes');
    $collectionHolder2 = jQuery('div.add-year-sales');

    $addNotesLink.on('click', function(e) {
        e.preventDefault();
        addTagForm($collectionHolder, "note");
    });

    $addYearSalesLink.on('click', function(e) {
        e.preventDefault();
        addTagForm($collectionHolder2, "year-sale");
    });

});