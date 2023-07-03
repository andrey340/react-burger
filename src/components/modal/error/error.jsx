import PropTypes from 'prop-types';
const Error = ({ error }) => {
    return (
        <p className="text text_type_main-large mt-10">{error}</p>
    )
}

Error.propTypes = {
    error: PropTypes.string
}

export default Error