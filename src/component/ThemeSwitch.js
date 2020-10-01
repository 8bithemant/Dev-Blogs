import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";

const ThemeSwitch = () => {
  const [isDark, setDark] = useState(false);

  const toggleMode = () => {
    setDark((prevState) => !prevState);
    const page = document.querySelector("html");
    if (!isDark) {
      page.dataset.theme = "dark";
    } else {
      page.dataset.theme = "";
    }
  };

  return (
    <React.Fragment>
      <div className="button-container">
        <Tooltip title="Toggle Theme">
          <Switch
            checked={isDark}
            onChange={toggleMode}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Tooltip>
      </div>
    </React.Fragment>
  );
};

export default ThemeSwitch;
