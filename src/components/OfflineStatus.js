const OfflineStatus = () => {

    return(
        <div className="h-screen flex justify-center items-center">
            <div>
            <h1 className=" text-2xl font-bold text-center">Your System is Offline !</h1>
            <hr />
            <h4 className="text-md font-semibold text-center">Please Check the Internet Connection.</h4>
            </div>
        </div>
    );
}

export default OfflineStatus;