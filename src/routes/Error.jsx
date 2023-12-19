import { Link } from 'react-router-dom';

export default function ErrorPage() {
	return (
		<>
			<Link to={'/'}>
				<div className="flex justify-center items-center text-4xl flex-col ">
					<p className='p-5 font-bold'>Error 404!</p>
					<button className="btn btn-outline">Back to Homepage</button>
				</div>
			</Link>
		</>
	);
}
