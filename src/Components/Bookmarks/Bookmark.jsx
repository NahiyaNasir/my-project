import PropTypes from 'prop-types'
import Book from '../Book/Book';

const Bookmark = ({bookmarks,readingTime}) => {
    return (
       
        <div className="w-1/3 text-center bg-gray-400 ml-6 mt-6">
            <div>
                <h4>Reading Time {readingTime}</h4>
            </div>
            <h1> Book marks :{bookmarks.length}</h1>
            {

                bookmarks.map((bookmark,idx )=> <Book  key={idx} bookmark={bookmark}></Book>)
                
                }
            
        </div>
    );
};
Bookmark.propTypes={
 bookmarks:PropTypes.array,
 readingTime: PropTypes.number
}

export default Bookmark;