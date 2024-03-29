import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message'

class MessageContainer extends React.Component {
    render() {
        var { message } = this.props;
        return (
            <Message message={message}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

export default connect(mapStateToProps, null)(MessageContainer);
