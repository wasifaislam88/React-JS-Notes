

const Banner = ({handleGetCoin}) => {
    return (
        <div className="bg-pink-200 mt-5">
            <h2>Banner</h2>
            <button
            onClick={()=>handleGetCoin()}
             className="border rounded-2xl p-1 bg-green-300">Claim Free Credit</button>
        </div>
    );
};

export default Banner;