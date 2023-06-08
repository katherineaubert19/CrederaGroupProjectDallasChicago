import { Button } from '@material-ui/core';

const HackerNewsStories = ({stories = []}) => {
  
  function displayPopUp() {
   
    var description = document.createElement('div');
    description.setAttribute("id", "toDisappear");
    var text1 = document.createElement('h1');
    text1.innerHTML = "New Text!";
    document.body.appendChild(text1);
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
              <Button id = "button" onClick={() => displayPopUp()}> {name} - <b>{description}</b> (${price}ea) - {quantity} Remaining</Button>
              
            </div>
                             
          ))}
      </div>
      
      
      
    );
  };
  
export default HackerNewsStories;