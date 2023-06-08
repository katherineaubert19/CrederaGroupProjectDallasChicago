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
      fetch('https://localhost:5001/Products')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
// we don't have to do this now, maybe as an add on
      });
      //const data = HotSauces;
      const stortedSauces = data.sort((story, nextStory) => (story.points < nextStory.points ? 1 : -1));
      console.log(stortedSauces)
      //setAllStories(data);
      //setStories(data);
      setAllStories(stortedSauces);
      setStories(stortedSauces);

      setError(null);
      console.log(data);
    } catch (err) {
      setError(err.message);
      setStories(null);
    } finally {
      setLoading(false);
    }
  };

  const updateKeyword = (keyword) => {
    const filtered = allStories.filter(story => {
     return `${story.Name.toLowerCase()} ${story.Description.toLowerCase()}`.includes(keyword.toLowerCase());
    })
    setKeyword(keyword);
    setStories(filtered);
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