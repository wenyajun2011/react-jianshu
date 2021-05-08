import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const Nav = styled.nav`
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
	z-index: 1030;
`;
export const Wrapper = styled.div`
	height: 56px;
	min-width: 768px;
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
`;

export const Left = styled.div``;
export const LogoImg = styled.div`
	width: 100px;
	height: 56px;
	background: url(${logoPic}) no-repeat;
	background-size: contain;
`;
export const Center = styled.div`
	display: flex;
	width: 945px;
`;
export const Right = styled.div`
	width: 945px;
`;
export const IconWrapper = styled.div``;
export const TextWrapper = styled.div``;
export const IconHomePage = styled.div`
	display: flex;
	align-items: center;
`;
