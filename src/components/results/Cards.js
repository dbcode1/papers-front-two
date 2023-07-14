import React, { Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import connect from 'react-redux'
import { getCards} from 'react-redux';
// TODO: spinner

const Cards = ({ getCards, card: {cards, loading} })=> {
  useEffect(()
   => {
     getCards()
   }, [getCards]);

  return (
    <div>
      
    </div>
  )
}

Cards.propTypes = {
  getCards: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  cards: state.cards
})

export default connect(mapStateToProps, {getCards}) (Cards)
