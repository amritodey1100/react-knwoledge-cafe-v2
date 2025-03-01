import PropTypes from 'prop-types'; // Fix the import statement

const Bookmark = ({ bookmark }) => { // Fix the component name casing
    const { title } = bookmark;
    return (
        <div className=''>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};

export default Bookmark;