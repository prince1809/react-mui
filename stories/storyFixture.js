import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  description: PropTypes.string,
};

class StoryFixture extends React.Component {
  render() {
    const { children, description } = this.props;

    return (
      <div>
        <p>{description}</p>
        {children}
      </div>
    );
  }
}

StoryFixture.propTypes = propTypes;

export default StoryFixture;