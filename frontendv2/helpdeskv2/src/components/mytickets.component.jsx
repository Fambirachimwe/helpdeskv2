import React from 'react';

const MyTickets = () => (
    <div>
        <div className="mdc-card p-0">
            <h6 className="card-title card-padding pb-0">My Tickets</h6>
            <div className="table-responsive">
                <table className="table table-hoverable">
                    <thead>
                        <tr>
                            <th className="text-left">Ticket ID</th>
                            <th>Title</th>
                            <th>Prority (g)</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-left">Frozen yogurt</td>
                            <td>1.59</td>
                            <td>6.0</td>
                            <td>50</td>

                        </tr>
                        <tr>
                            <td className="text-left">Frozen yogurt</td>
                            <td>1.59</td>
                            <td>2.5</td>
                            <td>35</td>

                        </tr>
                        <tr>
                            <td className="text-left">Ice crean sandwich</td>
                            <td>1.4</td>
                            <td>4.0</td>
                            <td>40</td>

                        </tr>
                        <tr>
                            <td className="text-left">Eclair</td>
                            <td>1.7</td>
                            <td>3.0</td>
                            <td>34</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

export default MyTickets;