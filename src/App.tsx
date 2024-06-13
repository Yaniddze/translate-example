import { IntlProvider } from "react-intl";
import { SomeComponent } from "./components/SomeComponent";
import { WithReducer } from "./components/WithReducer";

export const App = () => {
  return (
    <>
      <IntlProvider locale="en">
        <SomeComponent />
        <WithReducer />
        <WithReducer />
      </IntlProvider>
    </>
  );
};
