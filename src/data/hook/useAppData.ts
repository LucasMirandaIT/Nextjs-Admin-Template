import { useContext } from "react";
import AppContext from "../context/AppContent";

const useAppData = () => useContext(AppContext);

export default useAppData;