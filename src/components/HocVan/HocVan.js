import React, { Component } from 'react';
import Mock from '../../mock/Mocks';

class HocVan extends Component {
   
    
    render() { 
        const noidung={Mock};
        console.log('noidung.Mock.HocVan',noidung.Mock.HocVan);
        
        return (
            <div className='row' style={{marginLeft: '0.2rem'}}>
                <h1 className="col-sm-12">{noidung.Mock.HocVan.title}</h1>
                <div className="col-sm-12">
                    <p>{noidung.Mock.HocVan.content1}</p>
                    <p>{noidung.Mock.HocVan.content2}</p>
                    <p>{noidung.Mock.HocVan.content3}</p>

                </div>
              </div>
        );
    }
}

export default HocVan;