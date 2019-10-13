import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ThongTinCaNhan from './components/ThongTinCaNhan/ThongTinCaNhan';
import MucTieuNgheNghiep from './components/MucTieuNgheNghiep/MucTieuNgheNghiep';
import HocVan from './components/HocVan/HocVan';
import Skill from './components/Skill/Skill';
import Language from './components/Language/Language';
// import Mock from './mock/Mocks';
 
  class App extends Component {
    render() {
      // const {noidunghocvan}=Mock
      // console.log(noidunghocvan);
      
      return (
        <div>
          <div className="container App-header">
            <div className="row">
              <ThongTinCaNhan/>

              <div className="col-sm-10 offset-1" style={{marginTop: '5rem', borderBottom : '5px solid #f2f2f2'}} ></div>
              <div className="col-sm-12" style={{marginTop: '5rem'}} />
              <MucTieuNgheNghiep />

              <div className="col-sm-10 offset-1" style={{marginTop: '5rem', borderBottom : '5px solid #f2f2f2'}} ></div>
              <div className="col-sm-12" style={{marginTop: '5rem'}} />
              <HocVan  />
              

              <div className="col-sm-10 offset-1" style={{marginTop: '5rem', borderBottom : '5px solid #f2f2f2'}} ></div>
              <div className="col-sm-12" style={{marginTop: '5rem'}} />
              <Skill />
        
              <div className="col-sm-10 offset-1" style={{marginTop: '5rem', borderBottom : '5px solid #f2f2f2'}} ></div>
              <div className="col-sm-12" style={{marginTop: '5rem'}} />    
              <Language />
            </div>
          </div>
        </div>
      );
    }
  }

  export default App;



