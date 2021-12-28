import React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { shortAddress, formatNumber } from '../../methods/Methods';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import {getBabytoshiAddress, getContractLinkBabytoshi, BABYTOSHI_CURRENCY_NAME, BABYTOSHI_CURRENCY_SYMBOL, BABYTOSHI_CURRENCY_DECIMALS,BABYTOSHI_CURRENCY_TOTAL_SUPPLY} from "../../abis/BABYTOSHI";
import {getDividendTrackerAddress, getContractLinkBabytoshiDividend} from "../../abis/BABYTOSHI_DIVIDEND_TRACKER";
import {getToshiflipAddress, getContractLinkToshiflip} from "../../abis/TOSHIFLIP";
import {getContractLinkBtcb} from "../../abis/BTCB";

const linkMudraManager = "https://mudra.website/?certificate=yes&type=0&lp=0x6b560e207b141504bf5f7aecf2f0b02b012ef25e";

export default function WhitePaper() {
    const theme = useTheme();
    return (
        <Grid item xs={12} sm={12} container columns={{xs:12, sm:12, md:12}}  mt={3} justifyContent="center">
            
            <Grid container justifyContent="flex-start" alignItems="center">
            <Typography fontWeight="bold" color="primary">Whitepaper</Typography>
            </Grid>

            <Grid item xs={12} sm={12} container justifyContent="flex-start" alignItems="center" mt={3}>
                <Grid>
                    <Typography fontWeight="bold" color="primary">BABYTOSHI : </Typography>
                </Grid>
                <Grid ml={{xs:1, md:0}}>
                    <Typography sx={{display:{xs:'block', sm:'none'}}} ml={{md:1}} color="primary"><a style={{color:theme.palette.primary.main}} href={getContractLinkBabytoshi()} target='_blank' rel="noopener noreferrer">{shortAddress(getBabytoshiAddress(), 7)}</a></Typography>
                    <Typography sx={{display:{xs:'none', sm:'block', md:'none'}}} ml={{md:1}} color="primary"><a style={{color:theme.palette.primary.main}} href={getContractLinkBabytoshi()} target='_blank'  rel="noopener noreferrer">{shortAddress(getBabytoshiAddress(), 15)}</a></Typography>
                    <Typography sx={{display:{xs:'none', md:'block',}}} ml={{md:1}} color="primary"><a style={{color:theme.palette.primary.main}} href={getContractLinkBabytoshi()} target='_blank' rel="noopener noreferrer">{getBabytoshiAddress()}</a></Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} container justifyContent="flex-start" alignItems="center">
                <Grid>
                    <Typography fontWeight="bold" color="primary">Dividend Tracker : </Typography>
                </Grid>
                <Grid ml={{xs:1, md:0}}>
                    <Typography sx={{display:{xs:'block', sm:'none'}}} ml={{md:1}} color="primary"><a style={{color:theme.palette.primary.main}} href={getContractLinkBabytoshiDividend()} target='_blank'  rel="noopener noreferrer">{shortAddress(getDividendTrackerAddress(), 7)}</a></Typography>
                    <Typography sx={{display:{xs:'none', sm:'block', md:'none'}}} ml={{md:1}} color="primary"><a style={{color:theme.palette.primary.main}} href={getContractLinkBabytoshiDividend()} target='_blank'  rel="noopener noreferrer">{shortAddress(getDividendTrackerAddress(), 15)}</a></Typography>
                    <Typography sx={{display:{xs:'none', md:'block',}}} ml={{md:1}} color="primary"><a style={{color:theme.palette.primary.main}} href={getContractLinkBabytoshiDividend()} target='_blank'  rel="noopener noreferrer">{getDividendTrackerAddress()}</a></Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} container justifyContent="flex-start" alignItems="center">
                <Grid>
                <Typography fontWeight="bold" color="primary">ToshiFlip : </Typography>
                </Grid>
                <Grid ml={{xs:1, md:0}}>
                    <Typography sx={{display:{xs:'block', sm:'none'}}} ml={{md:1}} color="primary"><a style={{color:theme.palette.primary.main}} href={getContractLinkToshiflip()} target='_blank'  rel="noopener noreferrer">{shortAddress(getToshiflipAddress(), 7)}</a></Typography>
                    <Typography sx={{display:{xs:'none', sm:'block', md:'none'}}} ml={{md:1}} color="primary"><a style={{color:theme.palette.primary.main}} href={getContractLinkToshiflip()} target='_blank'  rel="noopener noreferrer">{shortAddress(getToshiflipAddress(), 15)}</a></Typography>
                    <Typography sx={{display:{xs:'none', md:'block',}}} ml={{md:1}} color="primary"><a style={{color:theme.palette.primary.main}} href={getContractLinkToshiflip()} target='_blank'  rel="noopener noreferrer">{getToshiflipAddress()}</a></Typography>
                </Grid>
            </Grid>

            <Grid sx={{textAlign:"justify"}} item xs={12} sm={12} container direction="column" justifyContent="center" alignItems="flex-start" mt={5}>
                <Grid>
                <Typography fontWeight="bold" color="primary">Babytoshi goals</Typography>
                </Grid>
                <Grid mt={2}>
                    <Typography>Babytoshi’s primary goal is to make it simple enough for even our mothers to be able to start earning passive income without having to understand this complicated DeFi world.</Typography>
                </Grid>
                <Grid mt={1}>
                    <Typography>The first step towards achieving that goal was to create the Babytoshi token. It is an innovative Reflection Token: one that pays dividends in an already established token instead of our own. Our dividends are paid out in $Btcb, the premier BSC Swap on the market and a company whose tokens are getting more valuable all the time.</Typography>
                </Grid>
                <Grid mt={1}>
                    <Typography>The next step is the release of our Game App.</Typography>
                </Grid>
                <Grid mt={1}>
                    <Typography>The rate of Crypto adoption in the world is growing, but the percentage of the world’s population who are users is still very small.</Typography>
                </Grid>
                <Grid mt={1}>
                    <Typography>We have developed an app that is clean, clear and simple to use. It will revolutionize the shitcoins space and faster adoption of crypto in a safe, secure, easy and rewarding way. How to win better than to play ?</Typography>
                </Grid>
                <Grid mt={1}>
                    <Typography>Once the App is released, we will continue to add features to further empower people and give them control over their financial situations.</Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} container direction="column" justifyContent="center" alignItems="flex-start" mt={3}>
                <Grid >
                <Typography fontWeight="bold" color="primary">Tokenomics</Typography>
                </Grid>
                <Grid mt={2}>
                    <Typography>Babytoshi was Fair Launched on the PancakeSwap Exchange on August 13th, 2021. There were no presales or ICO: everyone could buy Babytoshi fairly from the moment it launched.</Typography>
                </Grid>
                <Grid mt={1}>
                    <Typography>An address <span style={{fontWeight:"bold", color:theme.palette.primary.main}}>can't hold</span> more than 5% of the total supply. (Anti-Whale Mechanism).</Typography>
                </Grid>
                <Grid mt={1}>
                    <Typography>To receive dividends a minimum token balance of 200,000 Babytoshi is required to be held in a wallet.</Typography>
                </Grid>
                <Grid mt={1}>
                    <Typography>There is a 15% buy tax. An extra 1% fee is applied to all sales to encourage holding, discourage swing trading and to lessen whale manipulation. At times, our tokenomics may change in response to market conditions.</Typography>
                </Grid>
                <Grid mt={1}>
                    <Typography mb={1}>The token contract employs a static rewards system. The 15% buy tax is split as follows :</Typography>
                    <ul >
                        <li>7% is redistributed to holders</li>
                        <li>4% is used to fuel the liquidity pool</li>
                        <li>4% is allocated to the Marketing wallet.</li>
                    </ul>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} container direction="column" justifyContent="center" alignItems="flex-start" mt={3}>
                <Grid >
                <Typography fontWeight="bold" color="primary">Under the contract</Typography>
                </Grid>
                <Grid mt={2}>
                    <ul >
                        <li>All $Btcb <a style={{color:theme.palette.primary.main}} href={getContractLinkBtcb()} target='_blank' rel="noopener noreferrer">the contract gains</a> are split proportionally between the token holders.</li>
                        <li>To receive dividends a minimum token balance of 200,000 Babytoshi is required to be held in a wallet.</li>
                        <li><a href={getContractLinkBabytoshi()} target='_blank' rel="noopener noreferrer" style={{color:theme.palette.primary.main}}>The contract</a> keeps track of all the dividends due to each holder in a list.</li>
                        <li>Every transaction processes a certain number of users from the list.</li>
                        <li>The number of holders processed through each transaction is dynamic and based on transaction size.</li>
                        <li>Holders will receive dividends from the queue based on their position in the list.</li>
                        <li>It’s a fair system, fully automated.</li>
                    </ul>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} container direction="column" justifyContent="center" alignItems="flex-start" mt={3}>
                <Grid >
                <Typography fontWeight="bold" color="primary">Security</Typography>
                </Grid>
                <Grid mt={2}>
                    <Typography>The Babytoshi team has taken several steps to ensure optimal security.</Typography>
                </Grid>
                <Grid mt={1}>
                    <Typography>
                    There’s a 12-month lock on the liquidity pool, so holders can rest assured they can trade. <a style={{color:theme.palette.primary.main}} href={linkMudraManager} target='_blank' rel="noopener noreferrer">Mudra Manager</a>, a comprehensive BSC DeFi Asset Manager and liquidity provider locker for BSC, is here to help as a middleman.
                    </Typography>
                </Grid>
            </Grid>
            



            <Grid item xs={12} sm={12} container direction="column" justifyContent="center" alignItems="flex-start" mt={3}>
                <Grid >
                <Typography fontWeight="bold" color="primary">Token information</Typography>
                </Grid>
                <Grid mt={2}>
                <TableContainer >
                    <Table /*sx={{ minWidth: 650 }}*/ aria-label="table-babytoshi-info">
                        <TableBody>
                        <TableRow
                            //key={"OK"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">Network :</TableCell>
                            <TableCell align="right">Binance Smart Chain (BEP-20)</TableCell>
                        </TableRow>
                        <TableRow
                            //key={"OK"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">Name :</TableCell>
                            <TableCell align="right">{BABYTOSHI_CURRENCY_NAME}</TableCell>
                        </TableRow>
                        <TableRow
                            //key={"OK"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">Symbol :</TableCell>
                            <TableCell align="right">{BABYTOSHI_CURRENCY_SYMBOL}</TableCell>
                        </TableRow>
                        <TableRow
                            //key={"OK"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">Contract :</TableCell>
                            <TableCell align="right">
                                <Typography sx={{display:{xs:'block', sm:'none'}}} ml={{md:1}} color="primary"><a style={{color:theme.palette.primary.main}} href={getContractLinkBabytoshi()} target='_blank' rel="noopener noreferrer">{shortAddress(getBabytoshiAddress(), 7)}</a></Typography>
                                <Typography sx={{display:{xs:'none', sm:'block', md:'none'}}} ml={{md:1}} color="primary"><a style={{color:theme.palette.primary.main}} href={getContractLinkBabytoshi()} target='_blank' rel="noopener noreferrer">{shortAddress(getBabytoshiAddress(), 15)}</a></Typography>
                                <Typography sx={{display:{xs:'none', md:'block',}}} ml={{md:1}} color="primary"><a style={{color:theme.palette.primary.main}} href={getContractLinkBabytoshi()} target='_blank' rel="noopener noreferrer">{getBabytoshiAddress()}</a></Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            //key={"OK"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">Decimals :</TableCell>
                            <TableCell align="right">{BABYTOSHI_CURRENCY_DECIMALS}</TableCell>
                        </TableRow>
                        <TableRow
                            //key={"OK"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">Total Supply :</TableCell>
                            <TableCell align="right">{formatNumber(BABYTOSHI_CURRENCY_TOTAL_SUPPLY, 0)} {BABYTOSHI_CURRENCY_SYMBOL}</TableCell>
                        </TableRow>
                        <TableRow
                            //key={"OK"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">Team Wallet :</TableCell>
                            <TableCell align="right">{formatNumber(BABYTOSHI_CURRENCY_TOTAL_SUPPLY*5/100, 0)} {BABYTOSHI_CURRENCY_SYMBOL} (5% of the total supply)</TableCell>
                        </TableRow>
                        <TableRow
                            //key={"OK"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">Launch Time :</TableCell>
                            <TableCell align="right">August 13th 2021</TableCell>
                        </TableRow>
                        <TableRow
                            //key={"OK"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">Liquidity Lock :</TableCell>
                            <TableCell align="right">until August 13th 2022</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
            </Grid>


            <Grid item xs={12} sm={12} container direction="column" justifyContent="center" alignItems="flex-start" mt={3}>
                <Grid >
                <Typography fontWeight="bold" color="primary">Thank you for your support in Babytoshi.</Typography>
                </Grid>
            </Grid>


            {
                /*
                <section id="TOKENOMICS" className="cards-section wf-section">
            <div id="features" className="div-block">
            <p className='title-whitepaper' style={{fontWeight:'bold', color:theme.palette.primary.main}}>Whitepaper</p>
            
            <p><span style={{fontWeight:'bold', color:theme.palette.primary.main}}>BABYTOSHI : </span><a style={{color:theme.palette.primary.main}} className='link-whitepaper' href='https://bscscan.com/address/0xd2309bbd6ec83d8b3341ce5b061ce378f45c2621' target='_blank' rel="noopener noreferrer">0xd2309bbd6ec83d8b3341ce5b061ce378f45c2621</a></p>
            <p><span style={{fontWeight:'bold', color:theme.palette.primary.main}}>Dividend Tracker : </span><a style={{color:theme.palette.primary.main}} className='link-whitepaper' href='https://bscscan.com/address/0x593f4080037ef1a53b6a84abf2cea022b5e8bf6c' target='_blank' rel="noopener noreferrer">0x593f4080037ef1a53b6a84abf2cea022b5e8bf6c</a></p>
            <p><span style={{fontWeight:'bold', color:theme.palette.primary.main}}>TOSHIFLIP SUBSCRIPTION : </span><a style={{color:theme.palette.primary.main}} className='link-whitepaper' href={getContractLink()} target='_blank' rel="noopener noreferrer">{getPlayersAddress().toLowerCase()}</a></p>
                <p className='subtitle-whitepaper' style={{color:theme.palette.primary.main}}>Babytoshi goals</p>
                <p>Babytoshi’s primary goal is to make it simple enough for even our mothers to be able to start earning passive income without having to understand this complicated DeFi world.
                </p>
                <p>The first step towards achieving that goal was to create the Babytoshi token. It is an innovative Reflection Token: one that pays dividends in an already established token instead of our own. Our dividends are paid out in $Btcb, the premier BSC Swap on the market and a company whose tokens are getting more valuable all the time.
                </p>
                <p>The next step is the release of our Game App.</p>
                <p>The rate of Crypto adoption in the world is growing, but the percentage of the world’s population who are users is still very small.
                </p>
                <p>We have developed an app that is clean, clear and simple to use. It will revolutionize the shitcoins space and foster adoption of crypto in a safe, secure, easy and rewarding way. How to win better than to play ?  
                </p>
                <p>Once the App is released, we will continue to add features to further empower people and give them control over their financial situations.
                </p>
                <p className='subtitle-whitepaper' style={{color:theme.palette.primary.main}}>Tokenomics</p>
                <p>Babytoshi was Fair Launched on the PancakeSwap Exchange on August 13th, 2021. There were no presales or ICO: everyone could buy Babytoshi fairly from the moment it launched.
                </p>
                <p>An address <strong>can't hold</strong> more than 5% of the total supply. <span id='AWS'>(Anti-Whale Mechanism)</span></p>
                <p>To receive dividends a minimum token balance of 200,000 Babytoshi is required to be held in a wallet.</p>
    
                <p>There is a 15% buy tax. An extra 1% fee is applied to all sales to encourage holding, discourage swing trading and to lessen whale manipulation. At times, our tokenomics may change in response to market conditions.
                </p>
                <p>The token contract employs a static rewards system. The 15% buy tax is split as follows:
                </p>
                <ul>
                        <li>7% is redistributed to holders</li>
                        <li>4% is used to fuel the liquidity pool</li>
                        <li>4% is allocated to the Marketing wallet.</li>
                    </ul>
                
                <p className='subtitle-whitepaper' style={{color:theme.palette.primary.main}}>Divided distribution</p>
                <p>The dividend mechanism incentivizes token holders to hold in order to earn dividends from the transactions (buys and sells).
                </p>
                <p>The dividends are not dependent on the price of either Babytoshi or Btcb. They are based purely on the volume and proportional to the Babytoshi amount you hold in your wallet.
                </p>
                <p className='subtitle-whitepaper' style={{color:theme.palette.primary.main}}>Under the contract</p>
                
                <ul>
                        <li>All $Btcb <a className='link-whitepaper' style={{color:theme.palette.primary.main}} href='https://bscscan.com/address/0x593f4080037ef1a53b6a84abf2cea022b5e8bf6c' target='_blank' rel="noopener noreferrer">the contract gains</a> are split proportionally between the token holders.</li>
                        <li>To receive dividends a minimum token balance of 200,000 Babytoshi is required to be held in a wallet.</li>
                        <li><a className='link-whitepaper' href='https://bscscan.com/address/0xd2309bbd6ec83d8b3341ce5b061ce378f45c2621' target='_blank' rel="noopener noreferrer" style={{color:theme.palette.primary.main}}>The contract</a> keeps track of all the dividends due to each holder in a list.</li>
                        <li>Every transaction processes a certain number of users from the list.</li>
                        <li>The number of holders processed through each transaction is dynamic and based on transaction size.</li>
                        <li>Holders will receive dividends from the queue based on their position in the list.</li>
                        <li>It’s a fair system, fully automated.</li>
                    </ul>
                <p className='subtitle-whitepaper' style={{color:theme.palette.primary.main}}>Security</p>
                <p>The Babytoshi team has taken several steps to ensure optimal security.
                </p>
                <p>There’s a 12-month lock on the liquidity pool, so holders can rest assured they can trade. <a className='link-whitepaper' style={{color:theme.palette.primary.main}} href='https://mudra.website/?certificate=yes&type=0&lp=0x6b560e207b141504bf5f7aecf2f0b02b012ef25e' target='_blank' rel="noopener noreferrer">Mudra Manager</a>, a comprehensive BSC DeFi Asset Manager and liquidity provider locker for BSC, is here to help as a middleman.
                </p>
                <p className='subtitle-whitepaper' style={{color:theme.palette.primary.main}}>Token information
                </p>
                <table className='table-whitepaper'>
                    <tbody>
                        <tr className='table-tr-whitepaper'>
                            <td className='col-whitepaper'>Network:</td>
                            <td>Binance Smart Chain (BEP-20)</td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>Babytoshi</td>
                        </tr>
                        <tr>
                            <td>Symbol:</td>
                            <td>Babytoshi</td>
                        </tr>
                        <tr>
                            <td >Contract address:</td>
                            <td><a className='link-whitepaper' style={{color:theme.palette.primary.main}} href='https://bscscan.com/address/0xd2309bbd6ec83d8b3341ce5b061ce378f45c2621' target='_blank' rel="noopener noreferrer">0xd2309bbd6ec83d8b3341ce5b061ce378f45c2621</a></td>
                        </tr>
                        <tr>
                            <td>Decimals:</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>Total Supply:</td>
                            <td>10,000,000,000</td>
                        </tr>
                        <tr>
                            <td>Team Wallet:</td>
                            <td>500,000,000 BABYTOSHI (5% of the total supply)</td>
                        </tr>
                        <tr>
                            <td>Fair Launch Time:</td>
                            <td>August 13th 2021</td>
                        </tr>
                        <tr>
                            <td>Liquidity Lock:</td>
                            <td>until August 13th 2022</td>
                        </tr>
                    </tbody>
                </table>
                <p className='thanks-whitepaper' style={{color:theme.palette.primary.main}}>Thank you for your support in Babytoshi.</p>
            </div>
    </section>
    */
            }
            
        </Grid>
        
        


        
       
    



    );
}