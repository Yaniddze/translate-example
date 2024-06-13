import { FormattedMessage } from "react-intl";

import { messages } from "./messages";

export const SomeComponent = () => {
  return (
    <div>
      <div>
        <FormattedMessage {...messages.someText} />
      </div>
    </div>
  );
};
