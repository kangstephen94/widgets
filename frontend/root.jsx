import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import AutoComplete from './autocomplete';

const Root = () => {
  const tabs = [
    {title: "title1", content: "content1"},
  {title: "title2", content: "content2"},
   {title: "title3", content: "content3"}
 ];

    const Names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];
    return (
      <div className="page">
        <h1 id="widget-central">Widget Central</h1>
        <div className='widgets'>
        <Clock />
        <Tabs tabs={tabs}/>
       <Weather />
       <AutoComplete names={Names}/>
        </div>
      </div>
    );
  };

export default Root;
