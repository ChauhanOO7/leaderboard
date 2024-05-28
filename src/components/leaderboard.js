import Navbar from "./navbar";
import Heading from "./heading"

export default function Leaderboard()
{
    
    return (
        <div className="feedscontent">
            <div className="setimage">
                <img src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <Heading/>
                <Navbar/> 
            </div>

            <div className="ManageFeed">
                <h1>LeaderBoard</h1>
                <div className="manageheading">
                    <h2>Basic Backtest</h2>
                    <form action="/">
                        <label htmlFor="drop">Slippage</label>
                        <select id="drop">
                            <option>0%</option>
                            <option>0.5%</option>
                            <option>1%</option>
                        </select>
                    </form>
                </div>
                <table>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Calmar Ratio</th>
                    <th>Overall Profit</th>
                    <th>Avg. Daily Profit</th>
                    <th>Win %(Day)</th>
                    <th>Price (Rs)</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Selling with re entr</td>
                        <td>3.96</td>
                        <td>381845</td>
                        <td>319.54</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Strategy_name</td>
                        <td>3.62</td>
                        <td>266872</td>
                        <td>216.31</td>
                        <td>0.64</td>
                        <td>500</td>
                        <td>Buy</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Based on premium and</td>
                        <td>3.42</td>
                        <td>255245</td>
                        <td>208.51</td>
                        <td>0.64</td>
                        <td>-</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Strategy_name</td>
                        <td>3.22</td>
                        <td>370845</td>
                        <td>303.47</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Strategy_name</td>
                        <td>3.22</td>
                        <td>370845</td>
                        <td>303.47</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Based on premium wit</td>
                        <td>3.01</td>
                        <td>135980</td>
                        <td>185.77</td>
                        <td>0.49</td>
                        <td>-</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Strategy_name</td>
                        <td>2.76</td>
                        <td>267867.5</td>
                        <td>218.49</td>
                        <td>0.6</td>
                        <td>-</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Wait and trade_Save</td>
                        <td>2.62</td>
                        <td>178252</td>
                        <td>161</td>
                        <td>0.63</td>
                        <td>-</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>iron condor</td>
                        <td>2.44</td>
                        <td>176420</td>
                        <td>137.51</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Strategy_name</td>
                        <td>2.04</td>
                        <td>244555</td>
                        <td>198.66</td>
                        <td>0.62</td>
                        <td>-</td>
                        <td>View</td>
                    </tr>
                </tbody>

                </table>
                </div>
        </div>
    );
}