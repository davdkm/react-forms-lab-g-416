const React = require('react');

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function isValidPoem(poem) {
  const poemLines = poem.split('\n').filter(l => l);
  const hasNumberOfLines = poemLines.length === 3;
  const hasNumberOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  return hasNumberOfLines && hasNumberOfWords;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false,
    };

    this.setPoem = this.setPoem.bind(this);
  }

  setPoem(event) {
    const poemContent = event.target.value;

    if (poemContent) {
      this.setState({
        poem: poemContent,
        isValid: isValidPoem(poemContent),
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.setPoem} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null }
      </div>
    );
  }
}

module.exports = PoemWriter;
