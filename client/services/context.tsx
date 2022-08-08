import React, { useContext, createContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
  initialCategories?: any;
}
interface Context {
  categoriesStore: any;
  setCategoriesStore: (state: any) => void;
}

export const CategoriesContext = createContext<Context>({
  categoriesStore: [],
  setCategoriesStore: () => {},
});
export const CategoriesContextProvider = ({
  children,
  initialCategories,
}: Props) => {
  const [categoriesStore, setCategoriesStore] = useState(initialCategories);

  return (
    <CategoriesContext.Provider value={{ categoriesStore, setCategoriesStore }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(CategoriesContext);
  return context;
}

export default useAppContext;
