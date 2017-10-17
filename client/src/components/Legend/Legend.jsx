import React from "react";

const Legend = props =>(
    <div className="font-exo text-center">
        <table className="margin-auto">
            <thead>
                <tr>
                    <td className="text-center" colSpan="3">Legend</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <figure>
                            <img src="../assets/icons/site-icon.svg" alt="Site Icon"></img>
                            <figcaption>Site</figcaption>
                        </figure>
                    </td>
                    <td>
                        <figure>
                            <img src="../assets/icons/restaurant-icon.svg" alt="Restaurant Icon"></img>
                            <figcaption>Resturant</figcaption>
                        </figure>
                    </td>
                    <td>
                        <figure>
                            <img src="../assets/icons/bathroom-icon.svg" alt="Public Accessible Bathroom Icon"></img>
                            <figcaption>Bathroom</figcaption>
                        </figure>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Legend;