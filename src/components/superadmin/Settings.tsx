import React, { useState } from 'react';
import './Settings.css';

type SettingsTabId = 'platform' | 'security';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTabId>('platform');

  const [platformName, setPlatformName] = useState('Super Admin Platform');
  const [supportEmail, setSupportEmail] = useState('support@edumake.com');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [defaultPlan, setDefaultPlan] = useState('Basic');
  const [trialDays, setTrialDays] = useState('14');
  const [autoSuspendDays, setAutoSuspendDays] = useState('30');
  const [maxSchools, setMaxSchools] = useState('1000');
  const [apiRateLimit, setApiRateLimit] = useState('1000');

  const [minLength, setMinLength] = useState('8');
  const [requireSpecial, setRequireSpecial] = useState(true);
  const [requireNumbers, setRequireNumbers] = useState(true);
  const [passwordExpiry, setPasswordExpiry] = useState('90');
  const [maxLoginAttempts, setMaxLoginAttempts] = useState('5');
  const [require2FA, setRequire2FA] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [concurrentSessions, setConcurrentSessions] = useState('3');

  const handleSave = () => {
    console.log('Save settings');
    alert('Settings saved!');
  };

  return (
    <div className="settings-container">
      <div className="settings-header-row">
        <div className="settings-title-section">
          <h1 className="settings-title">Settings</h1>
          <p className="settings-subtitle">Configure platform settings and preferences</p>
        </div>
        <div className="settings-tabs-pill">
          <button
            type="button"
            className={`settings-tab ${activeTab === 'platform' ? 'settings-tab--active' : ''}`}
            onClick={() => setActiveTab('platform')}
          >
            Platform Settings
          </button>
          <button
            type="button"
            className={`settings-tab ${activeTab === 'security' ? 'settings-tab--active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </button>
        </div>
      </div>

      {activeTab === 'platform' && (
        <div className="settings-tab-content">
          <div className="settings-panel">
            <h3 className="settings-panel-title">General Settings</h3>
            <div className="settings-form">
              <div className="settings-field">
                <label className="settings-label">Platform Name</label>
                <input
                  type="text"
                  className="settings-input"
                  value={platformName}
                  onChange={(e) => setPlatformName(e.target.value)}
                />
              </div>
              <div className="settings-field">
                <label className="settings-label">Support Email</label>
                <input
                  type="email"
                  className="settings-input"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                />
              </div>
              <div className="settings-field settings-field--toggle">
                <div className="settings-toggle-row">
                  <div className="settings-toggle-label-block">
                    <label className="settings-label">Maintenance Mode</label>
                    <span className="settings-helper">Temporarily disable access to the platform</span>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={maintenanceMode}
                    className={`settings-toggle ${maintenanceMode ? 'settings-toggle--on' : ''}`}
                    onClick={() => setMaintenanceMode(!maintenanceMode)}
                  >
                    <span className="settings-toggle-thumb" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="settings-panel">
            <h3 className="settings-panel-title">School Default Settings</h3>
            <div className="settings-form">
              <div className="settings-field">
                <label className="settings-label">Default Subscription Plan</label>
                <select
                  className="settings-select"
                  value={defaultPlan}
                  onChange={(e) => setDefaultPlan(e.target.value)}
                >
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>
              <div className="settings-field">
                <label className="settings-label">Trial Period (days)</label>
                <input
                  type="number"
                  className="settings-input"
                  value={trialDays}
                  onChange={(e) => setTrialDays(e.target.value)}
                />
              </div>
              <div className="settings-field">
                <label className="settings-label">Auto-Suspend After Payment Failure</label>
                <input
                  type="number"
                  className="settings-input"
                  value={autoSuspendDays}
                  onChange={(e) => setAutoSuspendDays(e.target.value)}
                />
                <span className="settings-helper settings-helper--below">Number of days after failed payment</span>
              </div>
            </div>
          </div>

          <div className="settings-panel">
            <h3 className="settings-panel-title">Limits & Quotas</h3>
            <div className="settings-form">
              <div className="settings-field">
                <label className="settings-label">Maximum Schools Allowed</label>
                <input
                  type="number"
                  className="settings-input"
                  value={maxSchools}
                  onChange={(e) => setMaxSchools(e.target.value)}
                />
              </div>
              <div className="settings-field">
                <label className="settings-label">API Rate Limit (request/hour)</label>
                <input
                  type="number"
                  className="settings-input"
                  value={apiRateLimit}
                  onChange={(e) => setApiRateLimit(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'security' && (
        <div className="settings-tab-content">
          <div className="settings-panel">
            <h3 className="settings-panel-title">Password Policies</h3>
            <div className="settings-form">
              <div className="settings-field">
                <label className="settings-label">Minimum Length</label>
                <input
                  type="number"
                  className="settings-input"
                  value={minLength}
                  onChange={(e) => setMinLength(e.target.value)}
                />
              </div>
              <div className="settings-field settings-field--toggle">
                <div className="settings-toggle-row">
                  <div className="settings-toggle-label-block">
                    <label className="settings-label">Require Special Characters</label>
                    <span className="settings-helper">Must include @, #, $, etc.</span>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={requireSpecial}
                    className={`settings-toggle ${requireSpecial ? 'settings-toggle--on' : ''}`}
                    onClick={() => setRequireSpecial(!requireSpecial)}
                  >
                    <span className="settings-toggle-thumb" />
                  </button>
                </div>
              </div>
              <div className="settings-field settings-field--toggle">
                <div className="settings-toggle-row">
                  <div className="settings-toggle-label-block">
                    <label className="settings-label">Require Numbers</label>
                    <span className="settings-helper">Must include at least one number</span>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={requireNumbers}
                    className={`settings-toggle ${requireNumbers ? 'settings-toggle--on' : ''}`}
                    onClick={() => setRequireNumbers(!requireNumbers)}
                  >
                    <span className="settings-toggle-thumb" />
                  </button>
                </div>
              </div>
              <div className="settings-field">
                <label className="settings-label">Password Expiration (days)</label>
                <input
                  type="number"
                  className="settings-input"
                  value={passwordExpiry}
                  onChange={(e) => setPasswordExpiry(e.target.value)}
                />
              </div>
              <div className="settings-field">
                <label className="settings-label">Max Login Attempts</label>
                <input
                  type="number"
                  className="settings-input"
                  value={maxLoginAttempts}
                  onChange={(e) => setMaxLoginAttempts(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="settings-panel">
            <h3 className="settings-panel-title">Two Factor Authentication</h3>
            <div className="settings-form">
              <div className="settings-field settings-field--toggle">
                <div className="settings-toggle-row">
                  <div className="settings-toggle-label-block">
                    <label className="settings-label">Require 2FA for All Admins</label>
                    <span className="settings-helper">Mandatory two-factor authentication</span>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={require2FA}
                    className={`settings-toggle ${require2FA ? 'settings-toggle--on' : ''}`}
                    onClick={() => setRequire2FA(!require2FA)}
                  >
                    <span className="settings-toggle-thumb" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="settings-panel">
            <h3 className="settings-panel-title">Session Management</h3>
            <div className="settings-form">
              <div className="settings-field">
                <label className="settings-label">Session Timeout (minutes)</label>
                <input
                  type="number"
                  className="settings-input"
                  value={sessionTimeout}
                  onChange={(e) => setSessionTimeout(e.target.value)}
                />
              </div>
              <div className="settings-field">
                <label className="settings-label">Concurrent Session Limit</label>
                <input
                  type="number"
                  className="settings-input"
                  value={concurrentSessions}
                  onChange={(e) => setConcurrentSessions(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="settings-actions">
        <button type="button" className="settings-save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
