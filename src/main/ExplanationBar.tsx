import { useState } from 'react';
import './css/ExplanationBar.css';

export default function ExplanationBar() {
  const [activeTab, setActiveTab] = useState('properties');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const tab : string = event.currentTarget.getAttribute('data-tab') || '';
    setActiveTab(tab);
  };
  
  

  return (
    <div className="explanationbar">
      <div className="rightSideBar-selector">
        <button
          className={`tab-btn ${activeTab === 'properties' ? 'active' : ''}`}
          data-tab="properties"
          onClick={handleClick}
        >
          Properties
        </button>
        <button
          className={`tab-btn ${activeTab === 'explanation' ? 'active' : ''}`}
          data-tab="explanation"
          onClick={handleClick}
        >
          Explanation
        </button>
      </div>
      <div className={`Properties tab-content ${activeTab === 'properties' ? 'active' : ''}`}>
        <p>Properties</p>
      </div>
      <div className={`Explanation tab-content ${activeTab === 'explanation' ? 'active' : ''}`}>
        <p>
          {/* <!-- 1, Add Points by clicking on the graph (They should Snap to the nearest tick mark)
      <br>1.5, Be sure to place your points in order! The lines are draw from <br> one point to the next
      <br>2, Click the Shapify button to connect the points! or not... I suppose 
      <br>3, You Can move your shape with the translate feature! Just input where you want <br>  to move in the Move X, and Move Y boxes.
      <br>3.25, You should see guide points (The green ones) show up! <br> These show you where your shaple will move to!
      <br>3.5, When your satisfyed with your tranlation <br> Just click the translate button, and BOOM! Tranlation.
      <br>4, To reflect your shape check Reflect X or Reflect Y (NOT BOTH) and click the translate button
      <br>5, To Rotate your shape click the rotate button, <br> hope you could have figured that out on you own but ok
      <br>6, Dialation, sigh, is a bit buggy but it still works fine 
      <br>6.25, Its simmiler to tranlation just input your Scale Factor in the box <br> The guide points will show up to help you
      <br>6.5, Click The Dilation Button and you have Dialated your shape. 
      <br>7, Click the Reset button to start over --> */}
          Explanation
        </p>
      </div>
    </div>
  );
}