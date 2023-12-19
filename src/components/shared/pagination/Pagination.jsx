export default function Pagination({
	totalPosts,
	postsPerPage,
	setCurrentPage,
}) {
	let pages = [];
	for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i);
	}
	return (
		<>
			<div className="flex justify-center flex-wrap">
				{pages.map((page, index) => {
					return (
						<button
							className="join-item btn m-2 border-1 rounded"
							key={index}
							onClick={() => setCurrentPage(page)}
						>
							{page}
						</button>
					);
				})}
			</div>
		</>
	);
}
