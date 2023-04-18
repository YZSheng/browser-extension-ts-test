import React from "react";

export default function Popup(): JSX.Element {
  // TODO: Move initial setting of state outside to content
  const [checked, setChecked] = React.useState<boolean>(false);
  const handleStatus = async (checked: boolean) => {
    const tabs = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (tabs.length) {
      chrome.tabs.sendMessage(tabs[0].id as number, {
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
