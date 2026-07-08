import { useState } from 'react';
import { css } from '@emotion/css';

const photoContext = require.context(
	'../photos',
	false,
	/\.(png|jpe?g|gif|webp)$/i
);
const photos = photoContext.keys().map((key) => ({
	key,
	src: photoContext(key),
}));

const linkButtonStyle = css`
	background: none;
	border: none;
	padding: 0;
	margin: 0;
	font: inherit;
	cursor: pointer;
	text-decoration: none;
	color: #18272f;
`;

export function PhotoGallery({ onBack }) {
	const [selected, setSelected] = useState(null);

	return (
		<div
			className={css`
				width: 90%;
				max-width: 780px;
				margin: 0 auto;
				padding: 40px 0;
				box-sizing: border-box;
			`}
		>
			<button type="button" className={linkButtonStyle} onClick={onBack}>
				Back
			</button>

			<div
				className={css`
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
					gap: 20px;
					margin-top: 20px;
					max-height: 80vh;
					overflow-y: auto;
					padding-right: 8px;
				`}
			>
				{photos.map((photo) => (
					<img
						key={photo.key}
						src={photo.src}
						alt=""
						onClick={() => setSelected(photo.src)}
						className={css`
							width: 100%;
							height: 220px;
							object-fit: cover;
							border-radius: 4px;
							cursor: pointer;
							transition: transform 0.2s ease-in-out;

							&:hover {
								transform: scale(1.03);
							}
						`}
					/>
				))}
			</div>

			{selected && (
				<div
					onClick={() => setSelected(null)}
					className={css`
						position: fixed;
						top: 0;
						left: 0;
						width: 100vw;
						height: 100vh;
						background: rgba(0, 0, 0, 0.85);
						display: flex;
						align-items: center;
						justify-content: center;
						z-index: 1000;
					`}
				>
					<span
						onClick={() => setSelected(null)}
						className={css`
							position: absolute;
							top: 24px;
							right: 32px;
							color: white;
							font-size: 2.5em;
							line-height: 1;
							cursor: pointer;
						`}
					>
						&times;
					</span>
					<img
						src={selected}
						alt=""
						onClick={(event) => event.stopPropagation()}
						className={css`
							max-width: 90vw;
							max-height: 90vh;
							object-fit: contain;
						`}
					/>
				</div>
			)}
		</div>
	);
}
