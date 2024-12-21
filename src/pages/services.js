import ServiceCard from "../components/serviceCard";
import servicesData from "../data/servicesData";


const Services = () => {
    return ( 
        <section className="services" id="services">
            <h1>My Services</h1>
            <div className="cards">
                {servicesData.map((service) => (
                    <ServiceCard key={service.id} service={service}/>
                ))}
            </div>

        </section>
     );
}
 
export default Services;