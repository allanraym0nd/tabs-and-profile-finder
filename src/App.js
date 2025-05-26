import React, { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        <div
          className={`tab-button ${activeTab === 'Tab1' ? 'active tab1' : ''}`}
          onClick={() => setActiveTab('Tab1')}
        >
          Tab 1
        </div>
        <div
          className={`tab-button ${activeTab === 'Tab2' ? 'active' : ''}`}
          onClick={() => setActiveTab('Tab2')}
        >
          Tab 2
        </div>
        <div
          className={`tab-button ${activeTab === 'Tab3' ? 'active' : ''}`}
          onClick={() => setActiveTab('Tab3')}
        >
          Tab 3
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'Tab1' && <p>This is content for Tab 1</p>}
        {activeTab === 'Tab2' && <p>This is content for Tab 2</p>}
        {activeTab === 'Tab3' && <p>This is content for Tab 3</p>}
      </div>
    </div>
  );
};

export default Tabs;
