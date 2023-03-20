import React from "react";

import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {

    return (
        <>
            <MDBFooter bgColor='light' className='text-center text-lg-left'>
                <div className='text-center p-3' style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', position: "fixed", left: 0,
                    bottom: 0,
                    right: 0
                }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark' href='https://devportal.cellworks.life/'>
                        Cellworks.life
                    </a>
                </div>
            </MDBFooter>
        </>
    );
}

export default Footer;