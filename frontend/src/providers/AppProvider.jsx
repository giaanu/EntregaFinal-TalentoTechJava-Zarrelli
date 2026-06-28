import ContextsProvider from "./ContextProvider";
import RoutesProvider from "./RoutesProvider";

const AppProvider = () => {
    return(
        <ContextsProvider>
            <RoutesProvider />
        </ContextsProvider>
    );
};
export default AppProvider;