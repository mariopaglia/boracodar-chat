import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 32px;
`;

export const ChatReceiverMessage = styled.div`
	background-color: ${(props) => props.theme.colors.chatReceiver};
	padding: 14px;
	border-radius: 0 8px 8px 8px;
	margin-top: 8px;
	max-width: 50%;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;
