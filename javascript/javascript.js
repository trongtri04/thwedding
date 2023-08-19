function doihinh1(n) 
    {
      var hinh1 = document.getElementById('hinh1');
      if (n == 1) {
        hinh1.src = "hinh/ac1.1.jpg";
       
        
      } 
      else 
      {
        hinh1.src = "hinh/ac1.jpg";
        
      }
    }
    function doihinh2(m) 
    {
      var hinh2 = document.getElementById('hinh2');
      if (m == 1) {
        hinh2.src = "hinh/ac2.2.jpg";
      } 
      else 
      {
        hinh2.src = "hinh/ac2.jpg";
      }
    }
    function doihinh3(t) 
    {
      var hinh3 = document.getElementById('hinh3');
      if (t == 1) {
        hinh3.src = "hinh/ac3.3.jpg";
       
        
      } 
      else 
      {
        hinh3.src = "hinh/ac3.jpg";
        
      }
    }

    function doihinh4(a) 
    {
      var hinh4 = document.getElementById('hinh4');
      if (a == 1) {
        hinh4.src = "hinh/ac4.1.jpg";
      } 
      else 
      {
        hinh4.src = "hinh/ac4.jpg";
        
      }
    }
      function doihinh5(b) 
      {
      
        var hinh5 = document.getElementById('hinh5');
        if (b == 1) {
          hinh5.src = "hinh/ac6.1.jpg";
         
          
        } 
        else 
        {
          hinh5.src = "hinh/ac6.jpg";
          
        }
      }
        function doihinh6(c) 
        {
          var hinh6 = document.getElementById('hinh6');
          if (c == 1) {
            hinh6.src = "hinh/ac5.1.jpg";
           
          } 
          else 
          {
            hinh6.src = "hinh/ac5.jpg";
            
          }
        }

        const form = document.getElementById('myForm');
        const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const fullName = document.getElementById('fullName').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const Email = document.getElementById('Email').value;

            if (fullName && phoneNumber && Email) {
              thankYouModal.show();
              form.reset();
          }
        });

