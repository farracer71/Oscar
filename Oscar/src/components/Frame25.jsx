import { Grid, Typography } from '@mui/material';

import React from 'react';
import Navbar from './Header/Navbar';
import tutorial from './images/Tutorial-Step-by-step.png';

import logo50 from './images/Group50.png';
import vector from './images/Vector.png';
import { makeStyles } from '@material-ui/core';
import { ClassNames } from '@emotion/react';





export default function Frame25() {

    return (
        <>
            <Navbar />
            <div className="midBody">
                <Grid container spacing={2} xs={12}>

                    <Grid item xs={6} >
                        <div className="inline">
                            <img id='textlogo' src={logo50} alt="Tutorial Step by step" />
                            <label id="Logobody">Logo</label>
                            <Grid />
                            <Grid >
                                <Typography id="typograph1">
                                    Velit integer eget lobortis est netus. Eget risus ullamcorper orci
                                    pharetra risus. Tellus augue in nibh blandit. Eu tortor adipiscing
                                    rhoncus habitant nec. Elit dui bibendum nibh sapien.

                                </Typography>

                                <Typography id="typograph2">
                                    Velit integer eget lobortis est netus. Eget risus ullamcorper orci
                                    pharetra risus. Tellus augue in nibh blandit. Eu tortor adipiscing
                                    rhoncus habitant nec. Elit dui bibendum nibh sapien.

                                </Typography>
                                <div  >
                                    <button id='favouritebtn'>favourite</button>
                                </div>
                                <img id='tutorial' src={tutorial} alt="" />

                            </Grid>
                        </div>


                    </Grid>
                    <Grid item xs={6} className="rectangle">
                        <div className="rectangle1507">
                            <div className="rectangle1508">
                                <p id='yousell'>You sell</p>
                                <img id="vector" src={vector} alt="" />
                                <p id='eth'>ETH</p>
                                <p id='ethereum'>Ethereum</p>
                                <p id='Num'>0.998833</p>
                                <p id='num1210'>~$1,210</p>
                            </div>
                            <div className="rectangle1510">
                                <p id='youby'>You Buy</p>
                                <img id='vector1' src={vector} alt="" />
                                <p id='dai'>DAI</p>


                            </div>
                            <div className="rectanglebox">
                                <div className="rectangle1511">
                                    <p id='uniswap'>Uniswap</p>

                                </div>
                                <div className="rectangle1514">
                                    <p id='shibaswap'>Shibaswap</p>
                                </div>
                                <div className="rectangle1513">
                                    <p id='shushiswap'>Shushiswap</p>
                                </div>
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </div>
        </>
    )
}
