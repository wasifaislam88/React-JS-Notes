import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(typeof bookmarks);
    
    return (
        <div className="md:w-1/3 bg-yellow-100 text-center ml-4">
            <div className='bg-green-300 p-4 m-4 rounded-2xl'>
                <h3 className='text-2xl'>Spent time on read: {readingTime} min</h3>
            </div>
            <h2 className='text-2xl'> Bookmarked Blogs: {bookmarks.length}</h2>
            {/* BOOKMARK: bar bar click korle same jinis multiple bar bookmark e add hocche. but same id add hocche, tai idx use korechi.. olternative holo ak bar bookmark korle second time bookmark kora jabe na eta kora */}
            {/* {bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)} */}
            {
                bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>



    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number

};


export default Bookmarks;