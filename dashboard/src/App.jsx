//Javascript framework for creating user interfaces
import React, { Component } from 'react';

//Custom modules
import CustomHeader from './components/CustomHeader.jsx';
import CustomFooter from './components/CustomFooter.jsx';
import CustomTable from './components/CustomTable.jsx';

//State Management
import { connect } from 'react-redux';
import { requestUsers } from './state/actions';

class App extends Component {

  componentDidMount() {
    const { fetchUserData } = this.props;
    fetchUserData(process.env.REACT_APP_API_LINK, 1)
  }

  render(){ 
    return (
      <>
        <CustomHeader />
        <CustomTable />
        <CustomFooter />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (link, param) => dispatch(requestUsers(link, param))
  };
};

export default connect(null, mapDispatchToProps)(App)

