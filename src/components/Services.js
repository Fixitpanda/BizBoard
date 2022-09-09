import { useState } from "react";
import Joi from "joi";

function Services() {
    const [services, setServices] = useState([]);
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [addErr, setAddErr] = useState('');

    function addOrder(e) {
        // data validation
        const schema = Joi.object({
            price: Joi.number().required().min(1),
            name: Joi.string().required().min(2),
            phone: Joi.string().required(), //052333, +972 3 500000, 03-8800000
            email: Joi.string().required().email({ tlds: { allow: false } })
        });

        const order = {
            price: price,
            name: name,
            phone: phone,
            email: email,
        };

        const { error } = schema.validate(order);

        if (error) {
            setAddErr(error.details[0].message);
            console.log(error);
            return;
        }

        order.id = Math.random() + '';
        order.date = new Date().toLocaleString();

        const updated = [...services, order];
        setServices(updated);
    }

    return (
        <>


 
    <div className="container py-3">
    <h3>Our Services</h3>
    <div className="border rounded m-3 p-3 container">
    <div className="row bg-pr text-center py-3">
        <div className="col-md-4">
            <div className="box">
                <div className="our-services settings">
                    <div className="icon"> <img src="https://i.imgur.com/6NKPrhO.png" alt="image1" /> </div>
                    <h4>Settings</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services speedup">
                    <div className="icon"> <img src="https://i.imgur.com/KMbnpFF.png" alt="image2" /> </div>
                    <h4>Speedup</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services privacy">
                    <div className="icon"> <img src="https://i.imgur.com/AgyneKA.png" alt="image3" /> </div>
                    <h4>Privacy</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div>
            </div>
        </div>
    </div>
    <div className="row text-center p-3">
        <div className="col-md-4 py-3">
            <div className="box">
                <div className="our-services backups">
                    <div className="icon"> <img src="https://i.imgur.com/vdH9LKi.png" alt="image4" /> </div>
                    <h4>Backups</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services ssl">
                    <div className="icon"> <img src="https://i.imgur.com/v6OnUqu.png" alt="image5" /> </div>
                    <h4>SSL secured</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services database">
                    <div className="icon"> <img src="https://i.imgur.com/VzjZw9M.png" alt="image6" /> </div>
                    <h4>Database</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
    </div>

    <div className="d-flex p-4 border container">
                <input value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control me-2" type="number"
                    placeholder="Price" />

                <input value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control me-2" type="text"
                    placeholder="Name" />

                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control me-2" type="text"
                    placeholder="Phone" />

                <input value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control me-2"
                    type="text" placeholder="Email" />

                <button onClick={addOrder}
                    className="btn btn-primary">Add</button>
            </div>
            <div className="text-danger ">{addErr}</div>

            <table className="table table-hover container">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(order =>
                            <tr key={order.id}>
                                <td>{order.date}</td>
                                <td>{order.price}</td>
                                <td>{order.name}</td>
                                <td>{order.phone}</td>
                                <td>{order.email}</td>
                                <td></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
    
</div>
</div>
    

           
        </>
    );
}

export default Services;