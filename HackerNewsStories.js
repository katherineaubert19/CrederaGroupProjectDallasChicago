const HackerNewsStories = ({stories = []}) => {
    return (    
      <div className="stories-wrapper">
        {stories &&
          stories.map(({ ProductID,Name,Description,Price,Quantity }) => (
            <div className='stories-list' key={ProductID}>
              <button>{Name} - <b>{Description}</b> (${Price}ea) - {Quantity} Remaining</button>
            </div>                        
          ))}
      </div>
    );
  };
  
export default HackerNewsStories;