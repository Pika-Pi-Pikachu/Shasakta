


        const product_cont= document.querySelectorAll('.pro');
       

        const len = product_cont.length;

        for(let it=0;it<len;it++){

            product_cont[it].addEventListener('click' , () => {


     const product = product_cont[it].querySelector('.pro-img').getElementsByTagName('img')[0];
     const product_des = product_cont[it].getElementsByClassName('des').getElementsByTagName('h5')[0];
     const product_price= product_cont[it].getElementsByTagName('h4')[0];


         localStorage.setItem("image" , product);
         localStorage.setItem("des" , product_des);
         localStorage.setItem("price" , product_price);

               
         window.open("sprod.html");

            })
        }


        

        
