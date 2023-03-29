import { createContext } from "react";

interface IAppContext {
    nome: string
}
const AppContext = createContext<IAppContext>({
    nome: ''
});

export function AppProvider({children}: {children: any}) {

    const initialValue = {
        nome: '1234',
        alternarTema: null
    }
    return (
        <AppContext.Provider value={initialValue}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext;