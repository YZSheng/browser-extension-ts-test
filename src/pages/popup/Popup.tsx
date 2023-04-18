import React from "react";

export default function Popup(): JSX.Element {
  return (
    <div className="wrapper">
      <p>ChatGIC</p>
      <label className="switch">
        <input
          type="checkbox"
          className=""
          onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
            const tabs = await chrome.tabs.query({
              active: true,
              currentWindow: true,
            });
            if (tabs.length) {
              chrome.tabs.sendMessage(tabs[0].id as number, {
                chatGICStatus: event.target.checked,
              });
            }
          }}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
