const ServiceCard = ({service}) => {
    return ( 
        <div className="serviceCard">
            <h1>{service.id}</h1>
            <h2>{service.name}</h2>
            <p>{service.desc}</p>
        </div>
     );
}
 
export default ServiceCard;