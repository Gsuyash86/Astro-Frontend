import React, { useState, useEffect } from 'react';

const HeaderSearchClient = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.timesdrive.in/request/vehicle/search-suggestion?text=${searchText}&channel=1001`
        );
        const data = await response.json();
        setSuggestions(data?.response?.suggestions || []);
      } catch (err) {
        console.error('Suggestion fetch error:', err);
      }
    };

    const timeout = setTimeout(fetchData, 300);
    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <div className="Input">
      <input
        type="text"
        placeholder="Search for Cars Eg: Nexon"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {suggestions?.length > 0 && (
        <ul className="AutoSearch">
          {suggestions.map((suggestion) => (
            <li key={suggestion.seopath}>
              <a href={`/${suggestion.seopath}`}>
                {suggestion?.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeaderSearchClient;
