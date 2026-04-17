import { useId } from "react";

const PrimaryInput = () => {
  const excludeSpacesId = useId();
  const charLimitId = useId();

  return (
    <div>
      <input type="text" />
      <div>
        <div>
          <div>
            <input id={excludeSpacesId} type="checkbox" />
            <label htmlFor={excludeSpacesId}>Exclude Spaces</label>
          </div>
          <div>
            <input id={charLimitId} type="checkbox" />
            <label htmlFor={charLimitId}>Set Character Limit</label>
          </div>
        </div>
        <p>Approx. reading time: &lt;1 minute</p>
      </div>
    </div>
  );
};

export default PrimaryInput;
