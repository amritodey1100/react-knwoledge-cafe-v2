import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    return (
        <div className="bg-slate-200 p-4 m-4 rounded shadow">
            <h2 className="text-2xl font-bold">{bookmark.title}</h2>
            <p className="text-lg">{bookmark.author}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};

export default Bookmark;
