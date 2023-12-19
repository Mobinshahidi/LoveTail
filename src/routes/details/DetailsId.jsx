import { useParams } from 'react-router-dom';

export default function DetailsId() {
	const { id } = useParams();
	return <div>mobin: {id}</div>;
}
