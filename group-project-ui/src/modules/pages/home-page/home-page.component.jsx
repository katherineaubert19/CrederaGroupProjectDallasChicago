import React, { useEffect } from 'react';
import { useState } from 'react';
import HackerNewsStories from '../HackerNewsStories';
import SearchBar from '../SearchBar';
import HotSauces from '../Hotsauce.json'

export const HomePageComponent = () => {
  const [stories, setStories] = useState([]);
  const [allStories, setAllStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('');

  const fetchStories = async () => {
    try {

      // let data1;

      // const res = await fetch('https://localhost:5001/Products')
    
      // obj = await res.json();
    
      // console.log(obj)
      let data1;
      await fetch('https://localhost:5001/Products')
      .then(response => response.json())
      .then(data => {
        data1 = data;
        console.log(data);
      })
      .catch(error => {
// we don't have to do this now, maybe as an add on
      });
      console.log(data1)
      const sortedSauces = data1.sort((story, nextStory) => (story.points < nextStory.points ? 1 : -1));
      //setAllStories(data);
      //setStories(data);
      setAllStories(sortedSauces);
      setStories(sortedSauces);
      console.log(sortedSauces);
    } finally {
      setLoading(false);
    }
  };
  console.log(allStories)
  const updateKeyword = (keyword) => {
    const filtered = allStories.filter(story => {
     return `${story.name.toLowerCase()} ${story.description.toLowerCase()}`.includes(keyword.toLowerCase());
    })
    setKeyword(keyword);
    setStories(filtered);
    console.log(filtered);
 }

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <> { /* React fragment */}
    <div className="wrapper">
      <h2>HOT SAUCE Directory</h2>
      {loading && <div>HackerNews frontpage stories loading...</div>}
      {error && <div>{`Problem fetching the HackeNews Stories - ${error}`}</div>}
      <SearchBar keyword={keyword} onChange={updateKeyword}/>
      <HackerNewsStories stories={stories} />
    </div>
    </>
  )
}

export default HomePageComponent;