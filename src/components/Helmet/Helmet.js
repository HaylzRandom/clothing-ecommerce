const Helmet = (props) => {
	document.title = 'E-commerce - ' + props.title;
	return <div className='w-100'>{props.children}</div>;
};
export default Helmet;
