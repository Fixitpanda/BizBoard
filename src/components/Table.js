function Table(props) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th className="w-25">Date</th>
                    <th className="w-25">Location</th>
                    <th className="w-50">Price</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr className="bg-light">
                    <td>10/10/2022</td>
                    <td>location</td>
                    <td>500</td>
                </tr> */}

                {
                    props.list.map(offer =>
                        <tr key={offer.id} className="bg-light">
                        <td>{offer.name}</td>
                        <td>{offer.description}</td>
                        <td>{offer.phone}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default Table;