const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: '',
    };

    this.setMessage = this.setMessage.bind(this);
  }

  setMessage(event) {
    this.setState({
      tweet: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your tweet:</strong>
        <input type="text" value={this.state.tweet} onChange={this.setMessage} />
        <span>{this.props.maxChars - this.state.tweet.length} characters remaining.</span>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 10
};

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number,
};

module.exports = TwitterMessage;
