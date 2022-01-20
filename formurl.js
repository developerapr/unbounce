$("#was_the_finance_arranged_through_a_broker").on('change', function() {
 
  switch ($(this).val()) {      
    case 'Yes':
       window.module.lp.form.data.url = "http://unbouncepages.com/firths-law-s2/";
        break;
     case 'Unsure':
        window.module.lp.form.data.url = "http://unbouncepages.com/firths-law-s1/";
        break;
    case 'No':
        window.module.lp.form.data.url = "http://unbouncepages.com/firths-law-s1/";
        break;
  }
  
}); 
