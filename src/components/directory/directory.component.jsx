import CategoryItem from '../category-item/category-item.component';
import './directory.style.scss';

const Directory = ({ categories }) => {
	return (
		<div className="directory-container">
			{/* <img src="" alt="" /> */}
			{categories.map(({ title, id, imageUrl }) => (
				<CategoryItem key={id} title={title} imageUrl={imageUrl} />
			))}
		</div>
	);
};

export default Directory;
