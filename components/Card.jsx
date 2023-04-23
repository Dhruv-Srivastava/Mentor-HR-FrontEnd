export default function Card({company}){
    return (
        <div className="product-card">
		<div className="product-tumb">
			<img src={company.adURL} alt="" />
		</div>
		<div className="product-details">
        <a href={`https://${company.companyURL}`} target="_blank"><span className="product-name">{company.name}</span></a>
			<h4>{company.headline}</h4>
			<p>{company.primaryText}</p>
			<p>{company.description}</p>
			<div className="product-bottom-details">
				<div className="product-cta"><a href={`https://${company.companyURL}`} target="_blank">{company.cta && company.cta}</a></div>
			</div>
		</div>
	</div>
    )
}