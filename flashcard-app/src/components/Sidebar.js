import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { addDeck, showAddDeck, hideAddDeck } from '../actions';



const mapStateToProps = (state) => {
    return {
        decks:state.decks,
        addingDeck:state.addingDeck
    }
};

const mapDispactchToProps = dispatch => ({
    addDeck: name => dispatch(addDeck(name)),
    showAddDeck: () => dispatch(showAddDeck()),
    hideAddDeck: () => dispatch(hideAddDeck())
});

const Sidebar = React.createClass({
    componentDidUpdate() {
        var el = ReactDOM.findDOMNode(this.refs.add);
        if (el) {
            el.focus();
        }
    },

    render() {
        let props = this.props;

        return (
            <div className='sidebar'>
                <h2> All Decks </h2>
                <ul>
                    {
                        props.decks.map((deck, index) => 
                            (<li key={index}>
                                <Link to={`/deck/${deck.id}`} > {deck.name} </Link>
                                
                            </li>)
                        )
                    }
                </ul> 
                { props.addingDeck && <input ref='add' onKeyPress={this.createDeck} /> } 
            </div>
        );
    },

    createDeck(event) {
        if (event.which !==13) {
            return;
        }

        let name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addDeck(name);
        this.props.hideAddDeck();
    }

    
});

export default connect(mapStateToProps, mapDispactchToProps)(Sidebar);