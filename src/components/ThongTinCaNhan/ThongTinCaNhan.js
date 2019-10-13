import React, { Component } from 'react';
import Mock from '../../mock/Mocks';

class ThongTinCaNhan extends Component {
    render() {
        const noidung={Mock};
        return (
          <div className="row">
            <div className="col-sm-12" style={{marginTop: '5rem',paddingTop:'5rem',borderTop: '1px solid #ccc'}} ></div>
              <div className="col-sm-8">
                <div className="col-sm-12" style={{borderRight: '1px solid #ccc'}}>
                  <ul className="list-group text-danger" >
                      <li className="list-group-item">{noidung.Mock.ThongTinCaNhan.ten}</li>
                      <li className="list-group-item">{noidung.Mock.ThongTinCaNhan.gioitinh}</li>
                      <li className="list-group-item">{noidung.Mock.ThongTinCaNhan.ngaysinh}</li>
                      <li className="list-group-item">{noidung.Mock.ThongTinCaNhan.diachi}</li>
                      <li className="list-group-item">{noidung.Mock.ThongTinCaNhan.email}</li>
                      <li className="list-group-item">{noidung.Mock.ThongTinCaNhan.sdt}</li>
                  </ul>
                </div>
              </div>
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-12">
                  <div className="profile"><img src={noidung.Mock.ThongTinCaNhan.anh} alt=" " className="col-sm-10 rounded-circle" /></div>
                </div>
              </div>
            </div> 
        </div>
        );
    }
}

export default ThongTinCaNhan;