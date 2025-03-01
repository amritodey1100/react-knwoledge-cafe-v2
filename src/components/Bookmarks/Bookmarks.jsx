import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from './Bookmark'; // Ensure Bookmark component is imported

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 bg-gray-200 rounded-xl m-4 p-4">
            <h1 className="text-4xl text-center  mb-4">Bookmarks : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
};

export default Bookmarks;