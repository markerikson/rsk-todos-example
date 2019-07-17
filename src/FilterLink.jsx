import React from "react";
import { connect } from 'react-redux'
import { setVisibilityFilter } from "./visibilityFilters";

const mapState = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatch = {setVisibilityFilter};

const Link = ({ active, children, setVisibilityFilter, filter }) => {
  const onClick = () => setVisibilityFilter({filter});

  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px',
      }}
    >
      {children}
    </button>
    )

}

export default connect(
  mapState,
  mapDispatch
)(Link)
