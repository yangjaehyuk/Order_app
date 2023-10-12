import { createContext, useMemo, useState } from 'react';

const OrderContext = createContext();

export function OrderContextProvider(props) {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, orderType) {
      const newOrderCounts = { ...orderCounts };
      const orderCountsMap = orderCounts[orderType];
      orderCountsMap.set(itemName, parseInt(newItemCount));
      setOrderCounts(newOrderCounts);
    }
    return [{ ...orderCounts }, updateItemCount];
  }, [orderCounts]);

  return <OrderContext.Provider value={value} {...props} />;
}
