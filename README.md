# unbounce
Change form destination URL based on dropdown selection within the form
Be sure to first change your forms confirmation to 'Goto URL' and set a default fallback URL

Drop this script into your javascript box. Set the placement to 'before body end tag' 

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script>
$("#was_the_finance_arranged_through_a_broker").on('change', function() {
 
  switch ($(this).val()) {      
    case 'Yes':
       window.module.lp.form.data.url = "http://www.google.com";
        break;
    case 'No':
        window.module.lp.form.data.url = "http://www.bing.com";
        break;
  }
  
});  
</script>
Replace 'was_the_finance_arranged_through_a_broker' with the ID of your dropdown field.

Modify or add as many different 'cases' as you need
