import styled from 'styled-components';
import { media } from '../../utils/style-utils';

export const Nav = styled.nav`
	height: 60px;
	background: white;
	margin-top: 20px;
	a {
		text-decoration: none;
		&:active {
			color: #000;
		}
	}
	.logo {
		display: inline-block;
		float: left;
		.heading {
			color: #000;
			font-size: 25px;
			line-height: 40px;
		}
		.sub-heading {
			font-size: 12px;
			display: inherit;
			line-height: 5px;
		}
		.logo-lab{
			color: #1da1f2;
		}
	}
	.nav-links {
		display: inline-block;
		float: right;
		a {
			color: #1da1f2;
			line-height: 60px;
			margin-left: 20px;
		}
	}

`;