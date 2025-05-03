//install PropTypes->    npm install --save prop-types
// import PropTypes
import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    // console.log(blog);
    
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags} = blog   
    
    return (
        // BOOKMARK:
        <div className='mb-10 space-y-4'>
        {/* Dynamic alt */}
            <img className='w-full mb-8' src={cover} alt={`Cover Picture of the title ${title}`} />



            <div className='flex justify-between mb-4 '>
                
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="img" />

                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>


                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    {/* BOOKMARK: */}
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl' > <FaBookmark /> </button>
                </div>


            </div>


            
            <h2>{title}</h2>

            <p>
            {/* <p>{hashtags}</p>  OUTPUT: beginnerses6 without space. so map korte hobe */}
            {/* BOOKMARK: */}
            {/* hastags map na korle alada alada na hoye without space aksathe show kore */}
            {
                hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
            }
            {/* OUTPUT: #beginners #es6 */}
            {/* NOTE: {} er moddhe comment kora jabe na */}
            </p>

            

            <button className='text-purple-800 font-bold underline' onClick={()=>handleMarkAsRead(id,reading_time)}>Mark As Read</button>
        </div>
    );
};

//props validation
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;