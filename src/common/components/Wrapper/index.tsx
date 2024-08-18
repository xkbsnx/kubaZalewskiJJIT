import { FC, PropsWithChildren } from "react";

import { FormWrapper, AppWrapper } from "./styled";

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppWrapper>
      <FormWrapper>{children}</FormWrapper>
    </AppWrapper>
  );
};

export default Wrapper;
