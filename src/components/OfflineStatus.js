import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const OfflineStatus = () => {

    const selectedlang = useSelector(store => store.appConfig.selectedLang);

    return(
        <div className="h-screen flex justify-center items-center">
            <div>
            <h1 className=" text-2xl font-bold text-center">{lang[selectedlang].offlineheadind01}</h1>
            <hr />
            <h4 className="text-md font-semibold text-center">{lang[selectedlang].offlineheadind02}</h4>
            </div>
        </div>
    );
}

export default OfflineStatus;