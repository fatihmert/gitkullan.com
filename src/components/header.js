import React, {Component} from 'react';

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header-wrapper">
                    <header className={'d-flex justify-content-between align-items-center'} id={'header'}>
                        <div className={'logo-side d-flex align-items-center'}>
                            <i className={'fa fa-git-square fa-3x pr-md-2'}/>
                            <h3>git - kullan uğraştırma</h3>
                        </div>
                        <div className="download-side d-flex align-items-center">
                            <a href="https://book.git-scm.com/download/win" target="_blank"
                               className="download-item d-flex flex-column align-items-center mr-md-4">
                                <i className="fa fa-windows fa-2x"/>
                                <div className="text-uppercase">windows</div>
                            </a>
                            <a href="https://book.git-scm.com/download/linux" target="_blank"
                               className="download-item d-flex flex-column align-items-center mr-md-4">
                                <i className="fa fa-linux fa-2x"/>
                                <div className="text-uppercase">linux</div>
                            </a>
                            <a href="https://book.git-scm.com/download/mac" target="_blank"
                               className="download-item d-flex flex-column align-items-center">
                                <i className="fa fa-apple fa-2x"/>
                                <div className="text-uppercase">mac</div>
                            </a>
                        </div>
                    </header>
                    <header className="sub d-flex align-items-center">
                        <div className="author position-relative">
                            by <a href="https://fatihmertdogancan.com" target="_blank">Fatih Mert Doğancan</a>
                        </div>
                        <div className="slogan ml-3 font-italic">git anlaşılır temiz kullanım rehberi</div>
                    </header>
                </div>
            </React.Fragment>
        );
    }
}

