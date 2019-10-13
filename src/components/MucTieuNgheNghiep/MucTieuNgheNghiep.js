import React, { Component } from 'react';
import Mock from '../../mock/Mocks';

class MucTieuNgheNghiep extends Component {
    render() {
        const noidung=Mock;
        return (
            <div>
                <div className="col-sm-12">
                    <h1>{noidung.MucTieuNgheNghiep.title}</h1>
                    <div className="col-sm-12">
                        <p>{noidung.MucTieuNgheNghiep.content1}</p>
                        <p>{noidung.MucTieuNgheNghiep.content2}</p>
                    </div>
                </div>
            </div>    
        );
    }
}

export default MucTieuNgheNghiep;