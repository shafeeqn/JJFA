"use client";

import { 
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect 
} from "react";

type DataType = any;

interface ContextProps {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}

const GlobalContext = createContext<ContextProps>({
  data: {} as DataType,
  setData: (): DataType => {
    return {} as DataType;
  },
});

export const GlobalContextProvider = ({ children }: any) => {
  const [data, setData] = useState<DataType>({} as DataType);

  const [result] =  JSON.stringify(localStorage.getItem("user")) as any

  useEffect(() => {
    // console.log(result.data);

    if (result) {
      // console.log(result.data);
      
      setData(result as DataType);
    }
  }, [result]);

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);