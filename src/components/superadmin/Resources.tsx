import React, { useState } from 'react';
import './Resources.css';

type FileType = 'pdf' | 'doc' | 'jpg' | 'mp4';

interface ResourceItem {
  id: string;
  name: string;
  type: FileType;
  size: string;
  date: string;
  downloads: number;
}

const defaultResources: ResourceItem[] = [
  { id: '1', name: "Admin Quick Start Guide.pdf", type: 'pdf', size: '2.4MB', date: '12/07/2025', downloads: 247 },
  { id: '2', name: 'API Documentation.pdf', type: 'pdf', size: '2.4MB', date: '12/07/2025', downloads: 247 },
  { id: '3', name: 'User Management Guide.pdf', type: 'pdf', size: '2.4MB', date: '12/07/2025', downloads: 247 },
  { id: '4', name: 'Admin Quick Start Guide.doc', type: 'doc', size: '2.4MB', date: '12/07/2025', downloads: 247 },
  { id: '5', name: 'Admin Quick Start Guide.jpg', type: 'jpg', size: '2.4MB', date: '12/07/2025', downloads: 247 },
  { id: '6', name: 'Training Video Introduction.mp4', type: 'mp4', size: '2.4MB', date: '12/07/2025', downloads: 247 },
  { id: '7', name: 'School Onboarding Checklist.pdf', type: 'pdf', size: '2.4MB', date: '12/07/2025', downloads: 247 },
  { id: '8', name: 'Billing & Invoices Guide.doc', type: 'doc', size: '2.4MB', date: '12/07/2025', downloads: 247 },
];

const Resources: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [resources] = useState<ResourceItem[]>(defaultResources);

  const filtered = resources.filter(
    (r) => !searchQuery.trim() || r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const showEmptyState = filtered.length === 0;

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
      // Here you would typically upload the file to a server
    }
  };



  const getFileTypeIcon = (type: FileType) => {
    switch (type) {
      case 'pdf': return '/icons/pdf-icon.png';
      case 'doc': return '/icons/doc-icon.png';
      case 'jpg': return '/icons/jpg-icon.png';
      case 'mp4': return '/icons/mp4=icon.png'; // Using the exact filename found
      default: return '/icons/doc-icon.png';
    }
  };



  return (
    <div className="resources-container">
      <div className="resources-header-section">
        <div className="resources-title-section">
          <h1 className="resources-title">Resources</h1>
          <p className="resources-subtitle">Documentation and training materials</p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <button type="button" className="resources-upload-btn" onClick={handleUpload}>
          <span className="resources-upload-icon">
            <img src="/icons/upload-icon.png" alt="" />
          </span>
          <span className="resources-upload-text">Upload Files</span>
        </button>
      </div>

      <div className="resources-search-wrap">
        <div className="resources-search-box">
          <img src="/icons/search-normal.png" alt="" className="resources-search-icon" />
          <input
            type="text"
            className="resources-search-input"
            placeholder="search resources"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {showEmptyState ? (
        <div className="resources-empty">
          <div className="resources-empty-illustration">
            {/* <div className="resources-empty-magnifier" /> */}
            <img src="/icons/empty-resource-img.png" alt="" />
            <span className="resources-empty-text">No Resources found</span>
          </div>
        </div>
      ) : (
        <div className="resources-grid">
          {filtered.map((item) => (
            <div key={item.id} className="resources-card">
              <div className="resources-file-icon">
                <img src={getFileTypeIcon(item.type)} alt={item.type} />
              </div>
              <h3 className="resources-card-name">{item.name}</h3>
              <p className="resources-card-meta">{item.size}</p>
              <p className="resources-card-meta">Date: {item.date}</p>
              <p className="resources-card-meta">Downloads: {item.downloads}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Resources;
