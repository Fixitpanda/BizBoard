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
   <h2>Our Services</h2>
    <div className="border rounded m-3 p-3 container">
    
<div className="container px-4 py-5" id="hanging-icons">
  <h3 className="pb-2 border-bottom">Our Packages</h3>
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div className="col d-flex align-items-start">
      <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
      <i className="bi bi-pentagon"></i>
    


      </div>
      <div>

        
        <h3>Title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="##" className="btn btn-primary">
          Primary button
        </a>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
      <i className="bi bi-pentagon"></i>

      </div>
      <div>
        <h3>Title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="##" className="btn btn-primary">
          Primary button
        </a>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
      <i className="bi bi-pentagon"></i>

      </div>
      <div>
        <h3>Title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="##" className="btn btn-primary">
          Primary button
        </a>
      </div>
    </div>
  </div>
</div>




<div className="container px-4 py-5" id="icon-grid">
    <h3 className="pb-2 border-bottom">Top Features</h3>

    

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className="col d-flex align-items-start">
      <i className="bi bi-check-lg px-1"></i>        <div>
          <h4 className="fw-bold mb-0">Title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <i className="bi bi-check-lg px-1"></i>        <div>
          <h4 className="fw-bold mb-0">Title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <i className="bi bi-check-lg px-1"></i>        <div>
          <h4 className="fw-bold mb-0">Title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <i className="bi bi-check-lg px-1"></i>        <div>
          <h4 className="fw-bold mb-0">Title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <i className="bi bi-check-lg px-1"></i>        <div>
          <h4 className="fw-bold mb-0">Title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <i className="bi bi-check-lg px-1"></i>        <div>
          <h4 className="fw-bold mb-0">Title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <i className="bi bi-check-lg px-1"></i>        <div>
          <h4 className="fw-bold mb-0">Title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <i className="bi bi-check-lg px-1"></i>        <div>
          <h4 className="fw-bold mb-0">Title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>
  </div>



    {/* end */}

<div className="container" >
    <h3 className="pb-2 border-bottom">Add Your Service</h3>
    <div className="d-flex p-4 border">
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

</div>
    

           
        </>
    );
}

export default Services;