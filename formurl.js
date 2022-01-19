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
