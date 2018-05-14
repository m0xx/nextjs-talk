import React from 'react';
import { Text } from 'spectacle';

const BASE_URL = 'http://localhost:3001';

function DemoPane({ path, width = 500, height = 500 }) {
    const url = `${BASE_URL}${path}`;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="column left">
                        <span className="dot" style={{ backgroundColor: '#ED594A' }} />
                        <span className="dot" style={{ backgroundColor: '#FDD800' }} />
                        <span className="dot" style={{ backgroundColor: '#5AC05A' }} />
                    </div>
                    <div className="column middle">
                        <input type="text" value={url} style={{ fontSize: '1rem' }} />
                    </div>
                    <div className="column right">
                        <div style={{ float: 'right', marginTop: 12 }}>
                            <span className="bar" />
                            <span className="bar" />
                            <span className="bar" />
                        </div>
                    </div>
                </div>

                <div className="content">
                    <iframe
                        style={{ width, height, backgroundColor: '#FFFFFF', margin: 0, padding: 0 }}
                        src={url}
                        frameBorder="0"
                    />
                </div>
            </div>
            <style jsx>
                {`
                    /* The browser window */
                    .container {
                        border-top-left-radius: 4px;
                        border-top-right-radius: 4px;
                    }

                    /* Container for columns and the top "toolbar" */
                    .row {
                        padding: 0 10px 10px 0;
                        background: #f1f1f1;
                        border-top-left-radius: 4px;
                        border-top-right-radius: 4px;
                    }

                    /* Create three unequal columns that floats next to each other */
                    .column {
                        float: left;
                    }

                    .left {
                        width: 15%;
                    }

                    .right {
                        width: 10%;
                    }

                    .middle {
                        width: 75%;
                    }

                    /* Clear floats after the columns */
                    .row:after {
                        content: '';
                        display: table;
                        clear: both;
                    }

                    /* Three dots */
                    .dot {
                        margin-top: 4px;
                        height: 12px;
                        width: 12px;
                        background-color: #bbb;
                        border-radius: 50%;
                        display: inline-block;
                        margin-left: 3px;
                    }

                    /* Style the input field */
                    input[type='text'] {
                        width: 100%;
                        border-radius: 3px;
                        border: none;
                        background-color: white;
                        margin-top: -8px;
                        height: 25px;
                        color: #666;
                        padding: 5px;
                    }

                    /* Three bars (hamburger menu) */
                    .bar {
                        width: 17px;
                        height: 3px;
                        background-color: #aaa;
                        margin: 3px 0;
                        display: block;
                    }

                    /* Page content */
                    .content {
                    }
                `}
            </style>
        </div>
    );
}

export default DemoPane;
