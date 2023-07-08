import { css } from '@emotion/css';
import cartoon from '../gorickyourself.png';

export function Cartoon() {
	return (
		<div
			className={css`
				padding-left: 20%;
			`}
		>
			<img src={cartoon} alt="" style={{ height: '600px' }} />
		</div>
	);
}
