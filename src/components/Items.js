function Items(props) {
    return (
        <table className="table table-hover">
             

                {
                    props.items.map(offer =>
                        <tr key={offer.id} className="bg-light">
                        <td>{offer.name}</td>
                        <td>{offer.description}</td>
                        <td>{offer.phone}</td>
                        </tr>
                    )
                }
        
        </table>
    );
}

export default Items;