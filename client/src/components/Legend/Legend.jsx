import React from "react";

const Legend = props =>(
    <div className="display-block font-exo margin-auto">
        <table className="display-block margin-auto text-center">
            <thead>
                <tr>
                    <td className="text-center" colspan="2">Legend</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <figure>
                            <img src="../assets/icons/site-icon.png" alt="Site Icon"></img>
                            <figcaption>Site</figcaption>
                        </figure>
                    </td>
                    <td>
                        <figure>
                            <img src="../assets/icons/restaurant-icon.png" alt="Restaurant Icon"></img>
                            <figcaption>Resturant</figcaption>
                        </figure>
                    </td>
                    <td>
                        <figure>
                            <img src="../assets/icons/bathroom-icon.png" alt="Public Accessible Bathroom Icon"></img>
                            <figcaption>Bathroom</figcaption>
                        </figure>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Legend;