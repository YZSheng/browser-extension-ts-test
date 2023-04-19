import React from "react";

export default function Popup(): JSX.Element {
  const [checked, setChecked] = React.useState<boolean>(false);
  const handleStatus = async (checked: boolean) => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, {
        chatGICStatus: checked,
      });
    }
  };
  React.useEffect(() => {
    const setInitialStatusFromStorage = async () => {
      const currentStatus = await chrome.storage.local.get(["chatGICStatus"]);
      console.log("current status", currentStatus.chatGICStatus);
      setChecked(currentStatus.chatGICStatus);
      handleStatus(currentStatus.chatGICStatus);
    };
    setInitialStatusFromStorage();
  }, []);
  return (
    <div className="wrapper">
      <p>ChatGIC</p>
      <label className="switch">
        <input
          type="checkbox"
          className=""
          checked={checked}
          onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
            const checked = event.target.checked;
            setChecked(checked);
            await chrome.storage.local.set({ chatGICStatus: checked });
            handleStatus(checked);
          }}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
