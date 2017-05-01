import React from 'react';
import Link from 'next/link';
import { Nav } from './navbar.styled';
import { Container } from '../../styled-grid'; 

export default () => (
	<Container >
		<Nav>
			<div className="logo">
				<Link href="/">
					<a>
						<div>
							<div className="heading">
								ateev<span className="logo-lab">/labs</span>
							</div>
							<span className="sub-heading">Keep moving forward.</span>
						</div>
					</a>
				</Link>
			</div>
			<div className="nav-links">
				<Link href="/posts" >
					<a>Posts</a>
				</Link>
				<Link href="/projects" >
					<a>Projects</a>
				</Link>
			</div>
		</Nav>
	</Container>
);