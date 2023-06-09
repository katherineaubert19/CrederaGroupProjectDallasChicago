import { Button } from '@material-ui/core';

const HackerNewsStories = ({stories = []}) => {
  
  function displayPopUp(productId, name, sauceDescription, price, quantity) {
   

      let data1;
      fetch('https://localhost:5001/Products/'+productId)
      .then(response => response.json())
      .then(data => {
        data1 = data;
        console.log(data);
      })

    var description = document.createElement('div');
    description.setAttribute("id", "toDisappear");
    var text1 = document.createElement('h1');
    text1.innerHTML = name;
    document.body.appendChild(text1);

    var text2 = document.createElement('p');
    text2.innerHTML = sauceDescription;
    console.log(sauceDescription);
    document.body.appendChild(text2);

    var text3 = document.createElement('p');
    text3.innerHTML = quantity;
    document.body.appendChild(text3);

    var text4 = document.createElement('p');
    text4.innerHTML = price;
    document.body.appendChild(text4);

    var btn = document.createElement("button");
    btn.innerHTML = "Close"
    document.body.appendChild(btn)
    document.body.appendChild(description);
  }
  return (    
      <div className="stories-wrapper">
        {stories &&
          stories.map(({ productId,name,description,price,quantity}) => (
            <div className='stories-list' key={productId}>
              <Button id = "button" onClick={() => displayPopUp(productId,name,description,price,quantity)}> {name} </Button>
              
            </div>
                             
          ))}
      </div>
      
      
      
    );
  };
  
export default HackerNewsStories;