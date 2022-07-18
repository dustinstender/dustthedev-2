export function Words(props) {
	return (
		<div className="words">
			<button
				className="button"
				onClick={() => {
					props.setTheme('nothing');
				}}
			></button>
			<h1 className="h1">Hello, I'm Dustin.</h1>
			<p style={{ paddingBottom: '50%', width: '400px' }}>
				You can see what I've been up to on{' '}
				<a
					target="_blank"
					href="https://github.com/dustinstender"
					rel="noreferrer"
				>
					GitHub.{' '}
				</a>
				You can find some skate videos on my{' '}
				<a
					target="_blank"
					href="https://www.youtube.com/channel/UCBHIfq8H3aqcuuLDzkUaTNw"
					rel="noreferrer"
				>
					Youtube.
				</a>
			</p>
		</div>
	);
}
