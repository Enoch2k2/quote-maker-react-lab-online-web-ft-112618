import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { downvoteQuote, upvoteQuote, removeQuote } from '../actions/quotes';

class Quotes extends Component {

  handleDownVote = (id) => {
    this.props.downvoteQuote(id);
  }

  handleUpVote = id => {
    this.props.upvoteQuote(id);
  }

  handleDeleteQuote = id => {
    this.props.removeQuote(id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => (
                <QuoteCard 
                  key={quote.id}
                  quote={quote}
                  handleDownVote={this.handleDownVote }
                  handleUpVote={this.handleUpVote}
                  handleDeleteQuote={this.handleDeleteQuote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Quotes.defaultProps = {
  quotes: []
}

const mapStateToProps = state => ({ quotes: state.quotes })

//add arguments to connect as needed
export default connect(mapStateToProps, { downvoteQuote, upvoteQuote, removeQuote })(Quotes);
