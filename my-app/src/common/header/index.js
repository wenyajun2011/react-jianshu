import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import {
	Nav,
	Wrapper,
	Left,
	LogoImg,
	Center,
	Right,
	IconWrapper,
	TextWrapper,
	IconHomePage,
} from './style';
class Header extends PureComponent {
	render() {
		return (
			<div>
				<Nav>
					<Wrapper>
						<Left>
							<LogoImg></LogoImg>
						</Left>
						<Center>
							<IconWrapper>
								<IconHomePage>
									<FontAwesomeIcon icon={faMousePointer} size="2px" />
									首页
								</IconHomePage>
							</IconWrapper>
							<TextWrapper></TextWrapper>
						</Center>
						<Right></Right>
					</Wrapper>
				</Nav>
			</div>
		);
	}
}

export default Header;
