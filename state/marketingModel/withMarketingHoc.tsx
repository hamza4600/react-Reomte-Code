import React, { useEffect } from "react";
import useLocalStorage from "hooks/utils/localStorage";
import { marketingLocalKey } from "hooks/utils";
import { IMarketingProps } from "state/types/marketing.interface";

export function withMarketing<T>(Component: React.FC<T & IMarketingProps>): React.FC<T> {
  const MarketingConsumer: React.FC = (props: T) => {
    const { getItem, setItem, res: resModal } = useLocalStorage();

    const setMarketingModal = (): void => {
      setItem(marketingLocalKey, "true");
      getItem(marketingLocalKey);
    };

    useEffect(() => {
      getItem(marketingLocalKey);
    }, []);

    const marketingProps: IMarketingProps = {
      showMarketingModal: resModal !== "true",
      setMarketingModal,
    };
    return <Component {...props} {...marketingProps} />;
  };
  return MarketingConsumer;
}
export default withMarketing;
