import { createContext, useContext, useState } from 'react';

type UserData = {
  username: string;
  image: string;
};

type StoreContextProps = {
  data: UserData[];
  setData: React.Dispatch<React.SetStateAction<UserData[]>>;
};

const StoreContext = createContext<StoreContextProps | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<UserData[]>([
    { username: 'Orlando Diggs.', image: require('./testUser.png') },
    // { username: 'User2', image: require('./testUser.png') },
    // { username: 'User2', image: require('./testUser.png') },
  ]);

  return (
    <StoreContext.Provider value={{ data, setData }}>
      {children}
    </StoreContext.Provider>
  );
};

export const UseStore = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  return context;
};
